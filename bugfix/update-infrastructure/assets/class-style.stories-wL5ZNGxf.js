import{s as r,c as p,b as S,C as l,S as s,j as i}from"./common-BSgaey2d.js";import"./preview-errors-BMTnjymN.js";import"./index-DrFu-skq.js";import"./iframe-BcxLbnxy.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const N={title:"Synthetic/Styling",argTypes:{changeShape:{name:"Change shape",control:{type:"radio",labels:{0:"Rectangle",1:"Round rectangle"}},options:[0,1]}},args:{changeShape:0}},E=p({classes:[S(l)]}),n=r((e,a)=>{switch(e.changeShape){case 0:{a.classShapeFunction=()=>s;break}case 1:{a.classShapeFunction=()=>i;break}}},e=>(e.component.content=E,e.component.classShapeFunction=()=>s,e));var t,o,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  switch (args.changeShape) {
    case ShapeStage.RECTANGLE:
      {
        component.classShapeFunction = () => SHAPE_RECTANGLE;
        break;
      }
    case ShapeStage.ROUND_RECTANGLE:
      {
        component.classShapeFunction = () => SHAPE_ROUND_RECTANGLE;
        break;
      }
  }
}, baseContext => {
  baseContext.component.content = CONTENT;
  baseContext.component.classShapeFunction = () => SHAPE_RECTANGLE;
  return baseContext;
})`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const R=["ClassStyle"];export{n as ClassStyle,R as __namedExportsOrder,N as default};
