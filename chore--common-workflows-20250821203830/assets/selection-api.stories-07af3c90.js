import{g as d,a as R,b as r,e as y,d as g,c as m,s as G,E as f,i as b}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const{useArgs:C}=__STORYBOOK_MODULE_CLIENT_API__,Y={title:"Synthetic/Selection",argTypes:{selectClass:{name:"Select class",control:"boolean"},selectProperty:{name:"Select property",control:"boolean"},selectGroup:{name:"Select group",control:"boolean"},selectGroupSProperty:{name:"Select group's property",control:"boolean"},selectPropertySRelation:{name:"Select property's relation",control:"boolean"},selectGroupSRelation:{name:"Select group's relation",control:"boolean"},selectNonExistent:{name:"Select non-existent",control:"boolean"}},args:{selectClass:!1,selectProperty:!1,selectGroup:!1,selectGroupSProperty:!1,selectPropertySRelation:!1,selectGroupSRelation:!1,selectNonExistent:!1}},c=d("lpg",{name:"Group property"}),l=d("lp",{name:"Class property"}),p=R("pg",{name:"Group",properties:[c]}),a=r("c",{name:"Class",properties:[p,l]}),T=r("gc"),i=y({leafPropertyKey:"lp",referenceClassKey:"c"}),u=g({propertyGroupKey:"pg",includedClassKey:"gc"}),N=m({classes:[a,T],relations:[i,u]}),_=r("non-existent");let n;const A=e=>{if(b(n)){const t=e.detail.newValue;n({selectClass:t.includes(a),selectProperty:t.includes(l),selectGroup:t.includes(p),selectGroupSProperty:t.includes(c),selectPropertySRelation:t.includes(i),selectGroupSRelation:t.includes(u)})}},o=G((e,t)=>{const s=[];e.selectClass&&s.push(a),e.selectProperty&&s.push(l),e.selectGroup&&s.push(p),e.selectGroupSProperty&&s.push(c),e.selectPropertySRelation&&s.push(i),e.selectGroupSRelation&&s.push(u),e.selectNonExistent&&s.push(_),t.selectedObjects=s;const[,E]=C();n=E},e=>(e.component.content=N,e.component.addEventListener(f,A),e));var O,P,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const K=["SelectionAPI"];export{o as SelectionAPI,K as __namedExportsOrder,Y as default};
