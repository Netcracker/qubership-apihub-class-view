import{s as I,e as i,L as o,C as a,c as R,r as l,b as y,g as A}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const X={title:"Synthetic/Topology",argTypes:{primary:{name:"Primary",control:"boolean"},addPropertyRelation:{name:"Add property relation",control:"boolean"}},args:{primary:!1,addPropertyRelation:!1}},t="main",s="additional",n=I((e,m)=>{const p=[i({leafPropertyKey:`${t}1${o}`,referenceClassKey:`${s}1${a}`,primary:e.primary})];e.addPropertyRelation&&p.push(i({leafPropertyKey:`${t}2${o}`,referenceClassKey:`${s}2${a}`,primary:e.primary})),m.content=R({classes:[...l(1,2).map(r=>y(t+r+a,{properties:[A(t+r+o)]})),...l(1,2).map(r=>y(s+r+a))],relations:p})},e=>e);var c,F,P;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const relations = [generatePropertyToClassRelation({
    leafPropertyKey: \`\${MAIN_PREFIX}1\${LEAF_PROPERTY_SUFFIX}\`,
    referenceClassKey: \`\${ADDITIONAL_PREFIX}1\${CLASS_SUFFIX}\`,
    primary: args.primary
  })];
  if (args.addPropertyRelation) {
    relations.push(generatePropertyToClassRelation({
      leafPropertyKey: \`\${MAIN_PREFIX}2\${LEAF_PROPERTY_SUFFIX}\`,
      referenceClassKey: \`\${ADDITIONAL_PREFIX}2\${CLASS_SUFFIX}\`,
      primary: args.primary
    }));
  }
  component.content = generateContent({
    classes: [...range(1, 2).map(index => generateClassObject(MAIN_PREFIX + index + CLASS_SUFFIX, {
      properties: [generateLeafPropertyObject(MAIN_PREFIX + index + LEAF_PROPERTY_SUFFIX)]
    })), ...range(1, 2).map(index => generateClassObject(ADDITIONAL_PREFIX + index + CLASS_SUFFIX))],
    relations: relations
  });
}, baseContext => {
  return baseContext;
})`,...(P=(F=n.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const f=["PropertyToClassRelationMutation"];export{n as PropertyToClassRelationMutation,f as __namedExportsOrder,X as default};
