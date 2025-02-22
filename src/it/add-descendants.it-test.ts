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

import { ViewComponent } from "./service/view-component";
import { StoryPage } from "./service/story-page";
import { storyPage } from "./service/storybook-service";

describe("Decedents Test", () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
    story = await storyPage(page, "synthetic-topology--add-descendants");
    component = await story.viewComponent();
  });

  afterEach(async () => {
    await story?.close();
  });

  it("Add decedents", async () => {
    const numberControl = await story.numberControl("Layers");
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
    await numberControl.set(3);
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
    await numberControl.set(0);
    expect(await component.captureScreenshot()).toMatchImageSnapshot();
  });
});
