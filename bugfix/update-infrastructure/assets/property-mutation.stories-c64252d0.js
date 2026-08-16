import{s as d,c as u,b as p,g as o,L as a,C as n,a as T,P as i}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const r={0:"",1:"short name",2:"long name long name long name long name long name long name long name",3:""},E={title:"Synthetic/Topology",argTypes:{required:{name:"Required",control:"boolean"},propertyName:{name:"Property name",control:{type:"radio",labels:{0:"Empty",1:"Short",2:"Long",3:"Custom"}},options:[0,1,2,3]},propertyCustomName:{name:"Property custom name",control:{type:"text"},if:{arg:"propertyName",eq:3}},deprecated:{name:"Deprecated",control:{type:"boolean"}},propertyType:{name:"Property type name",control:{type:"radio",labels:{0:"Empty",1:"Short",2:"Long",3:"Custom"}},options:[0,1,2,3]},propertyCustomType:{name:"Property custom name",control:{type:"text"},if:{arg:"propertyType",eq:3}},propertyTypeDeprecated:{name:"Property type deprecated",control:{type:"boolean"}}},args:{required:!1,propertyName:0,deprecated:!1,propertyCustomName:"custom text",propertyType:0,propertyCustomType:"custom text",propertyTypeDeprecated:!1}},t=d((e,c)=>{c.content=u({classes:[p("1"+n,{properties:[o("1"+a,{name:e.propertyCustomName?e.propertyCustomName:r[e.propertyName],deprecated:e.deprecated,propertyType:e.propertyCustomType?e.propertyCustomType:r[e.propertyType],propertyTypeDeprecated:e.propertyTypeDeprecated,required:e.required})]}),p("2"+n,{properties:[T("2"+i,{properties:[o("2"+a,{name:e.propertyCustomName?e.propertyCustomName:r[e.propertyName],deprecated:e.deprecated,propertyType:e.propertyCustomType?e.propertyCustomType:r[e.propertyType],propertyTypeDeprecated:e.propertyTypeDeprecated,required:e.required})]})]})]})},e=>e);var y,s,m;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const N=["PropertyMutation"];export{t as PropertyMutation,N as __namedExportsOrder,E as default};
