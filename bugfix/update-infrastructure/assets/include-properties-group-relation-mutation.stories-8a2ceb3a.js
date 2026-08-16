import{s as P,d as i,P as a,C as n,c as R,r as l,b as c,a as F}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const E={title:"Synthetic/Topology",argTypes:{primary:{name:"Primary",control:"boolean"},addGroupRelation:{name:"Add group relation",control:"boolean"}},args:{primary:!1,addGroupRelation:!1}},o="main",s="additional",t=P((e,m)=>{const p=[i({propertyGroupKey:`${o}1${a}`,includedClassKey:`${s}1${n}`,primary:e.primary})];e.addGroupRelation&&p.push(i({propertyGroupKey:`${o}2${a}`,includedClassKey:`${s}2${n}`,primary:e.primary})),m.content=R({classes:[...l(1,2).map(r=>c(o+r+n,{properties:[F(o+r+a)]})),...l(1,2).map(r=>c(s+r+n))],relations:p})},e=>e);var u,I,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const relations = [generateIncludePropertiesGroupRelation({
    propertyGroupKey: \`\${MAIN_PREFIX}1\${PROPERTIES_GROUP_SUFFIX}\`,
    includedClassKey: \`\${ADDITIONAL_PREFIX}1\${CLASS_SUFFIX}\`,
    primary: args.primary
  })];
  if (args.addGroupRelation) {
    relations.push(generateIncludePropertiesGroupRelation({
      propertyGroupKey: \`\${MAIN_PREFIX}2\${PROPERTIES_GROUP_SUFFIX}\`,
      includedClassKey: \`\${ADDITIONAL_PREFIX}2\${CLASS_SUFFIX}\`,
      primary: args.primary
    }));
  }
  component.content = generateContent({
    classes: [...range(1, 2).map(index => generateClassObject(MAIN_PREFIX + index + CLASS_SUFFIX, {
      properties: [generatePropertiesGroupObject(MAIN_PREFIX + index + PROPERTIES_GROUP_SUFFIX)]
    })), ...range(1, 2).map(index => generateClassObject(ADDITIONAL_PREFIX + index + CLASS_SUFFIX))],
    relations: relations
  });
}, baseContext => {
  return baseContext;
})`,...(d=(I=t.parameters)==null?void 0:I.docs)==null?void 0:d.source}}};const O=["IncludePropertiesGroupRelationMutation"];export{t as IncludePropertiesGroupRelationMutation,O as __namedExportsOrder,E as default};
