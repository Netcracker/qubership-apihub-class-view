import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{I as t,L as n,R as r,a as i,f as a,m as o,o as s,t as c}from"./common-_HpFpOjk.js";var l,u,d,f;function p(){return(p=e((()=>{r(),a(),l={title:`Synthetic/Styling`,argTypes:{changeShape:{name:`Change shape`,control:{type:`radio`,labels:{0:`Rectangle`,1:`Round rectangle`}},options:[0,1]}},args:{changeShape:0}},u=s({classes:[i(c)]}),d=o((e,r)=>{switch(e.changeShape){case 0:r.classShapeFunction=()=>t;break;case 1:r.classShapeFunction=()=>n}},e=>(e.component.content=u,e.component.classShapeFunction=()=>t,e)),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...d.parameters?.docs?.source}}},f=[`ClassStyle`]})))()}p();export{d as ClassStyle,f as __namedExportsOrder,l as default};