import{s as l}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const c={key:"property1",kind:"property",name:"property1",propertyType:"number"},i={key:"property2",kind:"property",name:"property2",propertyType:"number"},p={key:"group",kind:"group",name:"group",properties:[i]},m={key:"class1",name:"class1",properties:[c,p]},y={key:"class2",name:"class2",properties:[c,p]},s={classes:[m]},T={classes:[y]},_={title:"Synthetic/Content",argTypes:{replaceDevice:{name:"Replace class",control:{type:"radio",labels:{0:"Class 1",1:"Class 2"}},options:[0,1],defaultValue:0}}},t=l((e,r)=>{switch(e.replaceDevice){case 0:{r.content=s;break}case 1:{r.content=T;break}}},e=>(e.component.content=s,e));var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["ReplaceClass"];export{t as ReplaceClass,d as __namedExportsOrder,_ as default};
