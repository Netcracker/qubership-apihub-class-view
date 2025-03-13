import{s as c,c as i,b as l,a as p,i as m}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const C={title:"Synthetic/Viewport",argTypes:{run:{name:"Run infinity zoom change",control:{type:"boolean"}}},args:{run:!1}},n=c((e,s,r)=>{e.run?r.interval=setInterval(()=>{s.zoom=1+Math.random()},25):m(r.interval)&&clearInterval(r.interval)},e=>(e.component.content=i({classes:[l("class",{properties:[p("group")]})]}),{...e,interval:void 0}));var t,o,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`storyArgsFunc<StoryArgs, DefaultDomainMeta, ThisStoryContext>((args, component, context) => {
  if (args.run) {
    context.interval = setInterval(() => {
      component.zoom = 1 + Math.random();
    }, 25);
  } else if (isDefine(context.interval)) {
    clearInterval(context.interval);
  }
}, baseContext => {
  baseContext.component.content = generateContent({
    classes: [generateClassObject('class', {
      properties: [generatePropertiesGroupObject('group')]
    })]
  });
  return {
    ...baseContext,
    interval: undefined
  };
})`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["Concurrency"];export{n as Concurrency,b as __namedExportsOrder,C as default};
