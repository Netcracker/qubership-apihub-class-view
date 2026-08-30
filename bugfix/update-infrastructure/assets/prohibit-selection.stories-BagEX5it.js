import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{f as t,h as n,m as r,s as i,v as a}from"./common-_HpFpOjk.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),o={title:`Synthetic/Selection`,argTypes:{prohibitSelection:{name:`Prohibit selection`,control:{type:`radio`,labels:{0:`None`,1:`Prevent default`,2:`Change selection property`}},options:[0,1,2]}},args:{prohibitSelection:0}},s=i(`key`),c=()=>console.warn(`Not installed`),l=()=>console.warn(`Not installed`),u=r((e,t)=>{switch(e.prohibitSelection){case 0:t.removeEventListener(n,c),t.removeEventListener(n,l);break;case 1:t.addEventListener(n,c),t.removeEventListener(n,l);break;case 2:t.removeEventListener(n,c),t.addEventListener(n,l)}},e=>(e.component.content=s,c=e=>{e.preventDefault()},l=t=>{e.component.selectedObjects=t.detail.oldValue},e)),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...u.parameters?.docs?.source}}},d=[`ProhibitSelection`]})))()}f();export{u as ProhibitSelection,d as __namedExportsOrder,o as default};