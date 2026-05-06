import{h as c,s as l,E as n}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const b={title:"Synthetic/Selection",argTypes:{prohibitSelection:{name:"Prohibit selection",control:{type:"radio",labels:{0:"None",1:"Prevent default",2:"Change selection property"}},options:[0,1,2]}},args:{prohibitSelection:0}},p=c("key");let r=()=>console.warn("Not installed"),o=()=>console.warn("Not installed");const s=l((t,e)=>{switch(t.prohibitSelection){case 0:{e.removeEventListener(n,r),e.removeEventListener(n,o);break}case 1:{e.addEventListener(n,r),e.removeEventListener(n,o);break}case 2:{e.removeEventListener(n,r),e.addEventListener(n,o);break}}},t=>(t.component.content=p,r=e=>{e.preventDefault()},o=e=>{t.component.selectedObjects=e.detail.oldValue},t));var i,a,E;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  switch (args.prohibitSelection) {
    case ProhibteStage.NONE:
      {
        component.removeEventListener(EVENT_SELECTION_CHANGE, preventListener);
        component.removeEventListener(EVENT_SELECTION_CHANGE, changeListener);
        break;
      }
    case ProhibteStage.PREVENT_DEFAULT:
      {
        component.addEventListener(EVENT_SELECTION_CHANGE, preventListener);
        component.removeEventListener(EVENT_SELECTION_CHANGE, changeListener);
        break;
      }
    case ProhibteStage.CHANGE_SELECTION_PROPERTY:
      {
        component.removeEventListener(EVENT_SELECTION_CHANGE, preventListener);
        component.addEventListener(EVENT_SELECTION_CHANGE, changeListener);
        break;
      }
  }
}, baseContext => {
  baseContext.component.content = CONTENT;
  preventListener = ev => {
    ev.preventDefault();
  };
  changeListener = ev => {
    baseContext.component.selectedObjects = ev.detail.oldValue;
  };
  return baseContext;
})`,...(E=(a=s.parameters)==null?void 0:a.docs)==null?void 0:E.source}}};const C=["ProhibitSelection"];export{s as ProhibitSelection,C as __namedExportsOrder,b as default};
