import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,f as n,l as r,m as i,n as a,o,r as s,t as c,u as l}from"./common-kYjFA7m2.js";var u,d,f,p;function m(){return(m=e((()=>{n(),u={0:``,1:`short name`,2:`long name long name long name long name long name long name long name`,3:``},d={title:`Synthetic/Topology`,argTypes:{required:{name:`Required`,control:`boolean`},propertyName:{name:`Property name`,control:{type:`radio`,labels:{0:`Empty`,1:`Short`,2:`Long`,3:`Custom`}},options:[0,1,2,3]},propertyCustomName:{name:`Property custom name`,control:{type:`text`},if:{arg:`propertyName`,eq:3}},deprecated:{name:`Deprecated`,control:{type:`boolean`}},propertyType:{name:`Property type name`,control:{type:`radio`,labels:{0:`Empty`,1:`Short`,2:`Long`,3:`Custom`}},options:[0,1,2,3]},propertyCustomType:{name:`Property custom name`,control:{type:`text`},if:{arg:`propertyType`,eq:3}},propertyTypeDeprecated:{name:`Property type deprecated`,control:{type:`boolean`}}},args:{required:!1,propertyName:0,deprecated:!1,propertyCustomName:`custom text`,propertyType:0,propertyCustomType:`custom text`,propertyTypeDeprecated:!1}},f=i((e,n)=>{n.content=o({classes:[t(`1`+c,{properties:[r(`1`+a,{name:e.propertyCustomName?e.propertyCustomName:u[e.propertyName],deprecated:e.deprecated,propertyType:e.propertyCustomType?e.propertyCustomType:u[e.propertyType],propertyTypeDeprecated:e.propertyTypeDeprecated,required:e.required})]}),t(`2`+c,{properties:[l(`2`+s,{properties:[r(`2`+a,{name:e.propertyCustomName?e.propertyCustomName:u[e.propertyName],deprecated:e.deprecated,propertyType:e.propertyCustomType?e.propertyCustomType:u[e.propertyType],propertyTypeDeprecated:e.propertyTypeDeprecated,required:e.required})]})]})]})},e=>e),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  component.content = generateContent({
    classes: [generateClassObject('1' + CLASS_SUFFIX, {
      properties: [generateLeafPropertyObject('1' + LEAF_PROPERTY_SUFFIX, {
        name: args.propertyCustomName ? args.propertyCustomName : NAME_BY_STAGE[args.propertyName],
        deprecated: args.deprecated,
        propertyType: args.propertyCustomType ? args.propertyCustomType : NAME_BY_STAGE[args.propertyType],
        propertyTypeDeprecated: args.propertyTypeDeprecated,
        required: args.required
      })]
    }), generateClassObject('2' + CLASS_SUFFIX, {
      properties: [generatePropertiesGroupObject('2' + PROPERTIES_GROUP_SUFFIX, {
        properties: [generateLeafPropertyObject('2' + LEAF_PROPERTY_SUFFIX, {
          name: args.propertyCustomName ? args.propertyCustomName : NAME_BY_STAGE[args.propertyName],
          deprecated: args.deprecated,
          propertyType: args.propertyCustomType ? args.propertyCustomType : NAME_BY_STAGE[args.propertyType],
          propertyTypeDeprecated: args.propertyTypeDeprecated,
          required: args.required
        })]
      })]
    })]
  });
}, baseContext => {
  return baseContext;
})`,...f.parameters?.docs?.source}}},p=[`PropertyMutation`]})))()}m();export{f as PropertyMutation,p as __namedExportsOrder,d as default};