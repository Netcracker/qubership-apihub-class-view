import{s as C,g as a,L as s,a as t,P as r,b as p,C as c,c as g}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const m={0:"",1:"short name",2:"long name long name long name long name long name long name long name",3:""},y={title:"Synthetic/Topology",argTypes:{addProperty:{name:"Add property",control:"boolean"},addGroup:{name:"Add group",control:"boolean"},className:{name:"Class name",control:{type:"radio",labels:{0:"Empty",1:"Short",2:"Long",3:"Custom"}},options:[0,1,2,3]},classCustomName:{name:"Class custom name",control:{type:"text"},if:{arg:"className",eq:3}},deprecated:{name:"Deprecated",control:{type:"boolean"}}},args:{addProperty:!1,addGroup:!1,className:0,classCustomName:"custom text",deprecated:!1}},o=C((e,S)=>{const n=[],l=[a("21"+s),a("22"+s)];e.addProperty&&(n.push(a("1"+s,{})),l.push(a("23"+s)));const d=[t("31"+r),t("32"+r)];e.addGroup&&(n.push(t("1"+r)),d.push(t("23"+r)));const _=[p("1"+c,{name:e.classCustomName?e.classCustomName:m[e.className],deprecated:e.deprecated,properties:n}),p("2"+c,{name:e.classCustomName?e.classCustomName:m[e.className],deprecated:e.deprecated,properties:l}),p("3"+c,{name:e.classCustomName?e.classCustomName:m[e.className],deprecated:e.deprecated,properties:d})];S.content=g({classes:_})},e=>e);var i,u,P;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(P=(u=o.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};const G=["ClassMutation"];export{o as ClassMutation,G as __namedExportsOrder,y as default};
