import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,l as i,m as a,n as o,o as s,p as c,t as l}from"./common-kYjFA7m2.js";var u,d,f,p,m;function h(){return(h=e((()=>{r(),u={title:`Synthetic/Topology`,argTypes:{primary:{name:`Primary`,control:`boolean`},addPropertyRelation:{name:`Add property relation`,control:`boolean`}},args:{primary:!1,addPropertyRelation:!1}},d=`main`,f=`additional`,p=a((e,r)=>{let a=[n({leafPropertyKey:`${d}1${o}`,referenceClassKey:`${f}1${l}`,primary:e.primary})];e.addPropertyRelation&&a.push(n({leafPropertyKey:`${d}2${o}`,referenceClassKey:`${f}2${l}`,primary:e.primary})),r.content=s({classes:[...c(1,2).map(e=>t(d+e+l,{properties:[i(d+e+o)]})),...c(1,2).map(e=>t(f+e+l))],relations:a})},e=>e),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...p.parameters?.docs?.source}}},m=[`PropertyToClassRelationMutation`]})))()}h();export{p as PropertyToClassRelationMutation,m as __namedExportsOrder,u as default};