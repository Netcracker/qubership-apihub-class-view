import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{J as t,Y as n,a as r,f as i,m as a,o,u as s}from"./common-_HpFpOjk.js";var c,l,u;function d(){return(d=e((()=>{i(),t(),c={title:`Synthetic/Viewport`,argTypes:{run:{name:`Run infinity zoom change`,control:{type:`boolean`}}},args:{run:!1}},l=a((e,t,r)=>{e.run?r.interval=setInterval(()=>{t.zoom=1+Math.random()},25):n(r.interval)&&clearInterval(r.interval)},e=>(e.component.content=o({classes:[r(`class`,{properties:[s(`group`)]})]}),{...e,interval:void 0})),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`storyArgsFunc<StoryArgs, DefaultDomainMeta, ThisStoryContext>((args, component, context) => {
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
})`,...l.parameters?.docs?.source}}},u=[`Concurrency`]})))()}d();export{l as Concurrency,u as __namedExportsOrder,c as default};