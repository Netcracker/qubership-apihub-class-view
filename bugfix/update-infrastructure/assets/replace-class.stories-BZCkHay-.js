import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{f as t,m as n}from"./common-_HpFpOjk.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={key:`property1`,kind:`property`,name:`property1`,propertyType:`number`},i={key:`group`,kind:`group`,name:`group`,properties:[{key:`property2`,kind:`property`,name:`property2`,propertyType:`number`}]},a={key:`class1`,name:`class1`,properties:[r,i]},o={key:`class2`,name:`class2`,properties:[r,i]},s={classes:[a]},c={classes:[o]},l={title:`Synthetic/Content`,argTypes:{replaceDevice:{name:`Replace class`,control:{type:`radio`,labels:{0:`Class 1`,1:`Class 2`}},options:[0,1],defaultValue:0}}},u=n((e,t)=>{switch(e.replaceDevice){case 0:t.content=s;break;case 1:t.content=c}},e=>(e.component.content=s,e)),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  switch (args.replaceDevice) {
    case ReplaceStage.FIRST:
      {
        component.content = CONTENT_ONE;
        break;
      }
    case ReplaceStage.SECOND:
      {
        component.content = CONTENT_TWO;
        break;
      }
  }
}, baseContext => {
  baseContext.component.content = CONTENT_ONE;
  return baseContext;
})`,...u.parameters?.docs?.source}}},d=[`ReplaceClass`]})))()}f();export{u as ReplaceClass,d as __namedExportsOrder,l as default};