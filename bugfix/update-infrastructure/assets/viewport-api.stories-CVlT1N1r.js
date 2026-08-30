import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{J as t,Y as n,_ as r,a as i,f as a,g as o,m as s,o as c,u as l,v as u}from"./common-_HpFpOjk.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),u(),t(),{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,f=4,m={title:`Synthetic/Viewport`,argTypes:{zoomProperty:{name:`Zoom`,control:{type:`number`,min:(10**-4).toFixed(f),max:5,step:(10**-4).toFixed(f)}},viewportX:{name:`Viewport X`,control:{type:`number`,min:(10**-4).toFixed(f),max:5,step:(10**-4).toFixed(f)}},viewportY:{name:`Viewport Y`,control:{type:`number`,min:(10**-4).toFixed(f),max:5,step:(10**-4).toFixed(f)}}},args:{zoomProperty:1,viewportX:0,viewportY:0}},h=e=>{let t=e.target;n(p)&&n(t)&&p({zoomProperty:t.zoom})},g=e=>{let t=e.target;if(n(p)&&n(t)){let e=t.viewportCenter;p({viewportX:e.x,viewportY:e.y})}},_=l(`group`),v=i(`class`,{properties:[_]}),y=c({classes:[v]}),b=s((e,t)=>{t.zoom=e.zoomProperty,t.viewportCenter={x:e.viewportX,y:e.viewportY};let[,n]=d();p=n},e=>(e.component.content=y,e.component.addEventListener(r,h),e.component.addEventListener(o,g),e)),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...b.parameters?.docs?.source}}},x=[`ViewportAPI`]})))()}S();export{b as ViewportAPI,x as __namedExportsOrder,m as default};