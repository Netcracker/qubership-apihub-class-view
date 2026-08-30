/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import FontFaceObserver from 'fontfaceobserver'

import { FontFamily, FontWeight, Pixel } from '../domain'
import {
  DEFAULT_CLASS_TITLE_FONT_SIZE,
  DEFAULT_CLASS_TITLE_FONT_WEIGHT,
  DEFAULT_LEAF_PROPERTY_FONT_SIZE,
  DEFAULT_LEAF_PROPERTY_FONT_WEIGHT,
  DEFAULT_PROPERTIES_GROUP_FONT_SIZE,
  DEFAULT_PROPERTIES_GROUP_FONT_WEIGHT,
} from '../defaults'
import { createFarFarAwaySvg, createSvgTextElement, createSvgTSpanElement } from '../core/utils'

/* How long to wait for the laid-out text box that proves the font is applied. The font
 * itself already has its own 10s budget in FontFaceObserver below; this covers only the
 * measurement, so it is deliberately short - the fallback is to carry on, not to fail. */
const FONT_MEASURE_TIMEOUT_MS = 2_000

export class FontObserver {
  private readonly _defaultFont

  constructor(private readonly _container: HTMLElement) {
    const fontFamily = getComputedStyle(this._container).fontFamily.split(',')[0]
    this._defaultFont = this.waitFontLoad(fontFamily,
      [...new Set([DEFAULT_CLASS_TITLE_FONT_WEIGHT, DEFAULT_LEAF_PROPERTY_FONT_WEIGHT, DEFAULT_PROPERTIES_GROUP_FONT_WEIGHT])],
      [...new Set([DEFAULT_CLASS_TITLE_FONT_SIZE, DEFAULT_LEAF_PROPERTY_FONT_SIZE, DEFAULT_PROPERTIES_GROUP_FONT_SIZE])],
    )
  }

  public load(): Promise<unknown> {
    return this._defaultFont
  }

  private async waitFontLoad(fontFamily: FontFamily, fontWeights: FontWeight[], fontSizes: Pixel[]): Promise<unknown> {
    const promises = fontWeights.map(fontWeight =>
      new FontFaceObserver(fontFamily, { weight: fontWeight }).load(null, 10_000)
        .then(() =>
          new Promise<void>(resolve => {
            const svg = createFarFarAwaySvg(this._container)
            this._container.appendChild(svg)
            const textElement = createSvgTextElement(svg)
            const textTspan = createSvgTSpanElement(svg, fontSizes[0], fontWeight, 'Loading...')
            textElement.appendChild(textTspan)

            // The wait below settles exactly once, whether the observer reports or the
            // deadline passes. Without the deadline a silent ResizeObserver wedges the
            // whole component: this promise gates createGraphView(), which gates
            // applyChanges(), whose `finally` is the only thing that clears
            // _updateScheduled - so every later invalidate() returns early and no
            // update-finish event is ever emitted again. Nothing throws and nothing
            // logs; the component simply stops re-rendering.
            //
            // That is not hypothetical. ResizeObserver does not fire for SVG <text> in
            // the Chrome this repository's screenshot suite runs, even though the
            // element is laid out and measurable (62x16 inside a visible container).
            // Measured directly in the preview frame before writing this.
            //
            // Resolving on timeout is safe: FontFaceObserver above has already
            // confirmed the face is loaded, and document.fonts.check() agrees for every
            // weight. The observer only waits for a measurable box to prove the font is
            // applied, so proceeding without that proof costs a layout nicety, not
            // correctness - and hanging forever costs everything.
            let settled = false
            const finish = (): void => {
              if (settled) {
                return
              }
              settled = true
              clearTimeout(deadline)
              resizeObserver.unobserve(textElement)
              if (textElement.parentNode === svg) {
                svg.removeChild(textElement)
              }
              if (svg.parentNode === this._container) {
                this._container.removeChild(svg)
              }
              resolve()
            }

            const resizeObserver = new ResizeObserver(entries => {
              for (const entry of entries) {
                if (entry.target === textElement) {
                  finish()
                  return
                }
              }
              finish()
            })
            const deadline = setTimeout(finish, FONT_MEASURE_TIMEOUT_MS)
            resizeObserver.observe(textElement)
            svg.appendChild(textElement)
          }),
        ),
    )
    try {
      return await Promise.all(promises)
    } catch (e) {
      return console.error(`Application is failed. Fonts: [${fontFamily}] have not been loaded`, e)
    }
  }
}


