import{s as P,c as F,b as a,a as n,g as r,L as t,P as p,C as s}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const m={0:"",1:"short name",2:"long name long name long name long name long name long name long name",3:""},y={title:"Synthetic/Topology",argTypes:{addProperty:{name:"Add property",control:"boolean"},groupName:{name:"Group name",control:{type:"radio",labels:{0:"Empty",1:"Short",2:"Long",3:"Custom"}},options:[0,1,2,3]},groupCustomName:{name:"Group custom name",control:{type:"text"},if:{arg:"groupName",eq:3}},deprecated:{name:"Deprecated",control:{type:"boolean"}}},args:{addProperty:!1,groupName:0,groupCustomName:"custom text",deprecated:!1}},o=P((e,d)=>{d.content=F({classes:[a("1"+s,{properties:[n("1"+p,{name:e.groupCustomName?e.groupCustomName:m[e.groupName],deprecated:e.deprecated,properties:e.addProperty?[r("1"+t)]:[]})]}),a("2"+s,{properties:[n("2"+p,{name:e.groupCustomName?e.groupCustomName:m[e.groupName],deprecated:e.deprecated,properties:e.addProperty?[r("21"+t),r("22"+t),r("23"+t)]:[r("21"+t),r("23"+t)]})]})]})},e=>e);var g,c,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["PropertiesGroupMutation"];export{o as PropertiesGroupMutation,R as __namedExportsOrder,y as default};
