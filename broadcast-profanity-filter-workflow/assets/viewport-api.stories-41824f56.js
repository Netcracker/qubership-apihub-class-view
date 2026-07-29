import{a as c,b as w,c as E,s as d,k as u,l as v,i as p}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const{useArgs:g}=__STORYBOOK_MODULE_CLIENT_API__,t=4;let r;const V={title:"Synthetic/Viewport",argTypes:{zoomProperty:{name:"Zoom",control:{type:"number",min:Math.pow(10,-t).toFixed(t),max:5,step:Math.pow(10,-t).toFixed(t)}},viewportX:{name:"Viewport X",control:{type:"number",min:Math.pow(10,-t).toFixed(t),max:5,step:Math.pow(10,-t).toFixed(t)}},viewportY:{name:"Viewport Y",control:{type:"number",min:Math.pow(10,-t).toFixed(t),max:5,step:Math.pow(10,-t).toFixed(t)}}},args:{zoomProperty:1,viewportX:0,viewportY:0}},_=e=>{const o=e.target;p(r)&&p(o)&&r({zoomProperty:o.zoom})},C=e=>{const o=e.target;if(p(r)&&p(o)){const n=o.viewportCenter;r({viewportX:n.x,viewportY:n.y})}},A=c("group"),N=w("class",{properties:[A]}),O=E({classes:[N]}),s=d((e,o)=>{o.zoom=e.zoomProperty,o.viewportCenter={x:e.viewportX,y:e.viewportY};const[,n]=g();r=n},e=>(e.component.content=O,e.component.addEventListener(u,_),e.component.addEventListener(v,C),e));var i,a,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  component.zoom = args.zoomProperty;
  component.viewportCenter = {
    x: args.viewportX,
    y: args.viewportY
  };
  const [, updateArgs] = useArgs();
  updateArgsCapture = updateArgs;
}, baseContext => {
  baseContext.component.content = CONTENT;
  baseContext.component.addEventListener(EVENT_ZOOM_CHANGE, zoomListener);
  baseContext.component.addEventListener(EVENT_VIEWPORT_CENTER_CHANGE, viewportListener);
  return baseContext;
})`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const z=["ViewportAPI"];export{s as ViewportAPI,z as __namedExportsOrder,V as default};
