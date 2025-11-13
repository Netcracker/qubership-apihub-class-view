import{c as r,b as p,s as S,C as l,S as s,j as i}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const N={title:"Synthetic/Styling",argTypes:{changeShape:{name:"Change shape",control:{type:"radio",labels:{0:"Rectangle",1:"Round rectangle"}},options:[0,1]}},args:{changeShape:0}},E=r({classes:[p(l)]}),n=S((e,a)=>{switch(e.changeShape){case 0:{a.classShapeFunction=()=>s;break}case 1:{a.classShapeFunction=()=>i;break}}},e=>(e.component.content=E,e.component.classShapeFunction=()=>s,e));var t,o,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
