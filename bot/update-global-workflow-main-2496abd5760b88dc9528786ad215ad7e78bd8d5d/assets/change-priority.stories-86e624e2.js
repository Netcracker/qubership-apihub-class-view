import{f as h,s as v,i as f,r as s,b as d,g as _,L as c,C as g,e as T}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const{useArgs:D}=__STORYBOOK_MODULE_CLIENT_API__;let i;const I={title:"Synthetic/Viewport",argTypes:{activateZoomChange:{name:"Activate zoom change",control:"boolean"},activateContentChange:{name:"Activate content change",control:"boolean"},activateNavigateChange:{name:"Activate navigate change",control:"boolean"},animationDuration:{name:"Animation duration",control:{type:"number",min:0,max:5e3,step:50}},action:{name:"Do action",control:{type:"radio",labels:{0:"None",1:"Action"}},options:[0,1]}},args:{animationDuration:h,activateZoomChange:!1,activateContentChange:!1,activateNavigateChange:!1,action:0}};function m(t){let n=[],e=[];for(let a=0;a<=10;a++){const l=[...s(1,10).map(o=>d(t+a+o+g,{properties:[_(t+a+o+c)]}))],A=[...s(1,10).map(o=>T({leafPropertyKey:t+a+o+c,referenceClassKey:`${t}${a+1}${o}${g}`}))];n=[...n,...l],e=[...e,...A]}return{classes:n,relations:e}}const r=v((t,n)=>{const[,e]=D();i=e,t.action==1&&(n.animationDuration=t.animationDuration,t.activateZoomChange&&(n.zoom=.5),t.activateContentChange&&(n.content=m(Math.random().toString())),t.activateNavigateChange&&n.navigateTo([n.content.classes[0]]),setTimeout(()=>{f(i)&&i({action:0})},1))},t=>(t.component.content=m(Math.random().toString()),t));var p,C,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(u=(C=r.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const E=["ChangePriority"];export{r as ChangePriority,E as __namedExportsOrder,I as default};
