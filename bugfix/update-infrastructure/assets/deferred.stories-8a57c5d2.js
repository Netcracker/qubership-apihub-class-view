import{b as d,s as c}from"./common-4217a42a.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./iframe-b1e89d26.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";const x={title:"Synthetic/Embed"},a={classes:[d("key")]},t=c((n,i)=>{const e=document.createElement("div");return e.style.width="100%",e.style.height="100%",e.style.textAlign="center",e.textContent="Wait 10 seconds",setTimeout(()=>{e.textContent="",e.appendChild(i)},1e4),e},n=>(n.component.content=a,n));var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`storyArgsFunc((_, component) => {
  const div = document.createElement('div');
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.textAlign = 'center';
  div.textContent = 'Wait 10 seconds';
  setTimeout(() => {
    div.textContent = '';
    div.appendChild(component);
  }, 10000);
  return div;
}, baseContext => {
  baseContext.component.content = CONTENT;
  return baseContext;
})`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["Deferred"];export{t as Deferred,y as __namedExportsOrder,x as default};
