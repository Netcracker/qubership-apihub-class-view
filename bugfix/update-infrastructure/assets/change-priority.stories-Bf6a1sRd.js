import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{F as t,J as n,Y as r,a as i,d as a,f as o,l as s,m as c,n as l,p as u,t as d}from"./common-_HpFpOjk.js";function f(e){let t=[],n=[];for(let r=0;r<=10;r++){let o=[...u(1,10).map(t=>i(e+r+t+d,{properties:[s(e+r+t+l)]}))],c=[...u(1,10).map(t=>a({leafPropertyKey:e+r+t+l,referenceClassKey:`${e}${r+1}${t}${d}`}))];t=[...t,...o],n=[...n,...c]}return{classes:t,relations:n}}var p,m,h,g,_;function v(){return(v=e((()=>{o(),n(),t(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:`Synthetic/Viewport`,argTypes:{activateZoomChange:{name:`Activate zoom change`,control:`boolean`},activateContentChange:{name:`Activate content change`,control:`boolean`},activateNavigateChange:{name:`Activate navigate change`,control:`boolean`},animationDuration:{name:`Animation duration`,control:{type:`number`,min:0,max:5e3,step:50}},action:{name:`Do action`,control:{type:`radio`,labels:{0:`None`,1:`Action`}},options:[0,1]}},args:{animationDuration:500,activateZoomChange:!1,activateContentChange:!1,activateNavigateChange:!1,action:0}},g=c((e,t)=>{let[,n]=p();m=n,e.action==1&&(t.animationDuration=e.animationDuration,e.activateZoomChange&&(t.zoom=.5),e.activateContentChange&&(t.content=f(Math.random().toString())),e.activateNavigateChange&&t.navigateTo([t.content.classes[0]]),setTimeout(()=>{r(m)&&m({action:0})},1))},e=>(e.component.content=f(Math.random().toString()),e)),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const [, updateArgs] = useArgs();
  updateArgsCapture = updateArgs;
  if (args.action == Action.ACTION) {
    component.animationDuration = args.animationDuration;
    if (args.activateZoomChange) {
      component.zoom = 0.5;
    }
    if (args.activateContentChange) {
      component.content = generateContent(Math.random().toString());
    }
    if (args.activateNavigateChange) {
      component.navigateTo([component.content.classes![0]]);
    }
    setTimeout(() => {
      if (isDefine(updateArgsCapture)) {
        updateArgsCapture({
          action: Action.NONE
        });
      }
    }, 1);
  }
}, baseContext => {
  baseContext.component.content = generateContent(Math.random().toString());
  return baseContext;
})`,...g.parameters?.docs?.source}}},_=[`ChangePriority`]})))()}v();export{g as ChangePriority,_ as __namedExportsOrder,h as default};