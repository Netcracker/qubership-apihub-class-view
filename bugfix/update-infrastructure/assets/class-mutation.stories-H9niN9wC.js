import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,f as n,l as r,m as i,n as a,o,r as s,t as c,u as l}from"./common-_HpFpOjk.js";var u,d,f,p;function m(){return(m=e((()=>{n(),u={0:``,1:`short name`,2:`long name long name long name long name long name long name long name`,3:``},d={title:`Synthetic/Topology`,argTypes:{addProperty:{name:`Add property`,control:`boolean`},addGroup:{name:`Add group`,control:`boolean`},className:{name:`Class name`,control:{type:`radio`,labels:{0:`Empty`,1:`Short`,2:`Long`,3:`Custom`}},options:[0,1,2,3]},classCustomName:{name:`Class custom name`,control:{type:`text`},if:{arg:`className`,eq:3}},deprecated:{name:`Deprecated`,control:{type:`boolean`}}},args:{addProperty:!1,addGroup:!1,className:0,classCustomName:`custom text`,deprecated:!1}},f=i((e,n)=>{let i=[],d=[r(`21`+a),r(`22`+a)];e.addProperty&&(i.push(r(`1`+a,{})),d.push(r(`23`+a)));let f=[l(`31`+s),l(`32`+s)];e.addGroup&&(i.push(l(`1`+s)),f.push(l(`23`+s)));let p=[t(`1`+c,{name:e.classCustomName?e.classCustomName:u[e.className],deprecated:e.deprecated,properties:i}),t(`2`+c,{name:e.classCustomName?e.classCustomName:u[e.className],deprecated:e.deprecated,properties:d}),t(`3`+c,{name:e.classCustomName?e.classCustomName:u[e.className],deprecated:e.deprecated,properties:f})];n.content=o({classes:p})},e=>e),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const additionalProperty = [];
  const leafProperties = [generateLeafPropertyObject('21' + LEAF_PROPERTY_SUFFIX), generateLeafPropertyObject('22' + LEAF_PROPERTY_SUFFIX)];
  if (args.addProperty) {
    additionalProperty.push(generateLeafPropertyObject('1' + LEAF_PROPERTY_SUFFIX, {}));
    leafProperties.push(generateLeafPropertyObject('23' + LEAF_PROPERTY_SUFFIX));
  }
  const propertiesGroups = [generatePropertiesGroupObject('31' + PROPERTIES_GROUP_SUFFIX), generatePropertiesGroupObject('32' + PROPERTIES_GROUP_SUFFIX)];
  if (args.addGroup) {
    additionalProperty.push(generatePropertiesGroupObject('1' + PROPERTIES_GROUP_SUFFIX));
    propertiesGroups.push(generatePropertiesGroupObject('23' + PROPERTIES_GROUP_SUFFIX));
  }
  const classes = [generateClassObject('1' + CLASS_SUFFIX, {
    name: args.classCustomName ? args.classCustomName : CLASS_NAME_BY_STAGE[args.className],
    deprecated: args.deprecated,
    properties: additionalProperty
  }), generateClassObject('2' + CLASS_SUFFIX, {
    name: args.classCustomName ? args.classCustomName : CLASS_NAME_BY_STAGE[args.className],
    deprecated: args.deprecated,
    properties: leafProperties
  }), generateClassObject('3' + CLASS_SUFFIX, {
    name: args.classCustomName ? args.classCustomName : CLASS_NAME_BY_STAGE[args.className],
    deprecated: args.deprecated,
    properties: propertiesGroups
  })];
  component.content = generateContent({
    classes: classes
  });
}, baseContext => {
  return baseContext;
})`,...f.parameters?.docs?.source}}},p=[`ClassMutation`]})))()}m();export{f as ClassMutation,p as __namedExportsOrder,d as default};