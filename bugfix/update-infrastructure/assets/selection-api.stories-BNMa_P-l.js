import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{J as t,Y as n,a as r,c as i,d as a,f as o,h as s,l as c,m as l,o as u,u as d,v as f}from"./common-kYjFA7m2.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{o(),f(),t(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m={title:`Synthetic/Selection`,argTypes:{selectClass:{name:`Select class`,control:`boolean`},selectProperty:{name:`Select property`,control:`boolean`},selectGroup:{name:`Select group`,control:`boolean`},selectGroupSProperty:{name:`Select group's property`,control:`boolean`},selectPropertySRelation:{name:`Select property's relation`,control:`boolean`},selectGroupSRelation:{name:`Select group's relation`,control:`boolean`},selectNonExistent:{name:`Select non-existent`,control:`boolean`}},args:{selectClass:!1,selectProperty:!1,selectGroup:!1,selectGroupSProperty:!1,selectPropertySRelation:!1,selectGroupSRelation:!1,selectNonExistent:!1}},h=c(`lpg`,{name:`Group property`}),g=c(`lp`,{name:`Class property`}),_=d(`pg`,{name:`Group`,properties:[h]}),v=r(`c`,{name:`Class`,properties:[_,g]}),y=r(`gc`),b=a({leafPropertyKey:`lp`,referenceClassKey:`c`}),x=i({propertyGroupKey:`pg`,includedClassKey:`gc`}),S=u({classes:[v,y],relations:[b,x]}),C=r(`non-existent`),T=e=>{if(n(w)){let t=e.detail.newValue;w({selectClass:t.includes(v),selectProperty:t.includes(g),selectGroup:t.includes(_),selectGroupSProperty:t.includes(h),selectPropertySRelation:t.includes(b),selectGroupSRelation:t.includes(x)})}},E=l((e,t)=>{let n=[];e.selectClass&&n.push(v),e.selectProperty&&n.push(g),e.selectGroup&&n.push(_),e.selectGroupSProperty&&n.push(h),e.selectPropertySRelation&&n.push(b),e.selectGroupSRelation&&n.push(x),e.selectNonExistent&&n.push(C),t.selectedObjects=n;let[,r]=p();w=r},e=>(e.component.content=S,e.component.addEventListener(s,T),e)),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const selectedObjects: SelectableObject[] = [];
  if (args.selectClass) {
    selectedObjects.push(CLASS);
  }
  if (args.selectProperty) {
    selectedObjects.push(PROPERTY);
  }
  if (args.selectGroup) {
    selectedObjects.push(GROUP);
  }
  if (args.selectGroupSProperty) {
    selectedObjects.push(GROUP_PROPERTY);
  }
  if (args.selectPropertySRelation) {
    selectedObjects.push(PROPERTY_RELATION);
  }
  if (args.selectGroupSRelation) {
    selectedObjects.push(GROUP_RELATION);
  }
  if (args.selectNonExistent) {
    selectedObjects.push(NON_EXISTENT);
  }
  component.selectedObjects = selectedObjects;
  const [, updateArgs] = useArgs();
  updateArgsCapture = updateArgs;
}, baseContext => {
  baseContext.component.content = CONTENT;
  baseContext.component.addEventListener(EVENT_SELECTION_CHANGE, listener);
  return baseContext;
})`,...E.parameters?.docs?.source}}},D=[`SelectionAPI`]})))()}O();export{E as SelectionAPI,D as __namedExportsOrder,m as default};