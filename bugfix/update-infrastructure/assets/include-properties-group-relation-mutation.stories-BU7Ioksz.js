import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,f as r,m as i,o as a,p as o,r as s,t as c,u as l}from"./common-_HpFpOjk.js";var u,d,f,p,m;function h(){return(h=e((()=>{r(),u={title:`Synthetic/Topology`,argTypes:{primary:{name:`Primary`,control:`boolean`},addGroupRelation:{name:`Add group relation`,control:`boolean`}},args:{primary:!1,addGroupRelation:!1}},d=`main`,f=`additional`,p=i((e,r)=>{let i=[n({propertyGroupKey:`${d}1${s}`,includedClassKey:`${f}1${c}`,primary:e.primary})];e.addGroupRelation&&i.push(n({propertyGroupKey:`${d}2${s}`,includedClassKey:`${f}2${c}`,primary:e.primary})),r.content=a({classes:[...o(1,2).map(e=>t(d+e+c,{properties:[l(d+e+s)]})),...o(1,2).map(e=>t(f+e+c))],relations:i})},e=>e),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...p.parameters?.docs?.source}}},m=[`IncludePropertiesGroupRelationMutation`]})))()}h();export{p as IncludePropertiesGroupRelationMutation,m as __namedExportsOrder,u as default};