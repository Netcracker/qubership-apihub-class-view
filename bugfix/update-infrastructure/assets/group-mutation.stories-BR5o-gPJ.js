import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,f as n,l as r,m as i,n as a,o,r as s,t as c,u as l}from"./common-_HpFpOjk.js";var u,d,f,p;function m(){return(m=e((()=>{n(),u={0:``,1:`short name`,2:`long name long name long name long name long name long name long name`,3:``},d={title:`Synthetic/Topology`,argTypes:{addProperty:{name:`Add property`,control:`boolean`},groupName:{name:`Group name`,control:{type:`radio`,labels:{0:`Empty`,1:`Short`,2:`Long`,3:`Custom`}},options:[0,1,2,3]},groupCustomName:{name:`Group custom name`,control:{type:`text`},if:{arg:`groupName`,eq:3}},deprecated:{name:`Deprecated`,control:{type:`boolean`}}},args:{addProperty:!1,groupName:0,groupCustomName:`custom text`,deprecated:!1}},f=i((e,n)=>{n.content=o({classes:[t(`1`+c,{properties:[l(`1`+s,{name:e.groupCustomName?e.groupCustomName:u[e.groupName],deprecated:e.deprecated,properties:e.addProperty?[r(`1`+a)]:[]})]}),t(`2`+c,{properties:[l(`2`+s,{name:e.groupCustomName?e.groupCustomName:u[e.groupName],deprecated:e.deprecated,properties:e.addProperty?[r(`21`+a),r(`22`+a),r(`23`+a)]:[r(`21`+a),r(`23`+a)]})]})]})},e=>e),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  component.content = generateContent({
    classes: [generateClassObject('1' + CLASS_SUFFIX, {
      properties: [generatePropertiesGroupObject('1' + PROPERTIES_GROUP_SUFFIX, {
        name: args.groupCustomName ? args.groupCustomName : NAME_BY_STAGE[args.groupName],
        deprecated: args.deprecated,
        properties: args.addProperty ? [generateLeafPropertyObject('1' + LEAF_PROPERTY_SUFFIX)] : []
      })]
    }), generateClassObject('2' + CLASS_SUFFIX, {
      properties: [generatePropertiesGroupObject('2' + PROPERTIES_GROUP_SUFFIX, {
        name: args.groupCustomName ? args.groupCustomName : NAME_BY_STAGE[args.groupName],
        deprecated: args.deprecated,
        properties: args.addProperty ? [generateLeafPropertyObject('21' + LEAF_PROPERTY_SUFFIX), generateLeafPropertyObject('22' + LEAF_PROPERTY_SUFFIX), generateLeafPropertyObject('23' + LEAF_PROPERTY_SUFFIX)] : [generateLeafPropertyObject('21' + LEAF_PROPERTY_SUFFIX), generateLeafPropertyObject('23' + LEAF_PROPERTY_SUFFIX)]
      })]
    })]
  });
}, baseContext => {
  return baseContext;
})`,...f.parameters?.docs?.source}}},p=[`PropertiesGroupMutation`]})))()}m();export{f as PropertiesGroupMutation,p as __namedExportsOrder,d as default};