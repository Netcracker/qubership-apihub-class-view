import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{f as t,m as n,s as r}from"./common-_HpFpOjk.js";function i(e){let t=e.properties||[],n=t.filter(e=>e.kind===`group`).flatMap(e=>i(e));return[...t,...n]}var a,o,s,c,l;function u(){return(u=e((()=>{t(),a={title:`Synthetic/Selection`,argTypes:{changeContent:{name:`Change content`,control:{type:`radio`,labels:{0:`No changes`,1:`Old keys`,2:`New keys`}},options:[0,1,2]}},args:{changeContent:0}},o=`l`,s=`r`,c=n((e,t)=>{switch(e.changeContent){case 1:t.content=r(o);break;case 2:t.content=r(s)}},e=>{let t=r(o);return e.component.content=t,e.component.selectedObjects=[...t.classes||[],...t.relations||[],...(t.classes||[]).flatMap(e=>i(e))],e}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  switch (args.changeContent) {
    case ChangeContentStage.OLD_KEYS:
      {
        component.content = generateContentByPrefix(LEFT_ENTITY_PREFIX);
        break;
      }
    case ChangeContentStage.NEW_KEYS:
      {
        component.content = generateContentByPrefix(RIGHT_ENTITY_PREFIX);
        break;
      }
  }
}, baseContext => {
  const content = generateContentByPrefix(LEFT_ENTITY_PREFIX);
  baseContext.component.content = content;
  baseContext.component.selectedObjects = [...(content.classes || []), ...(content.relations || []), ...(content.classes || []).flatMap(cl => extractAllProperties(cl))];
  return baseContext;
})`,...c.parameters?.docs?.source}}},l=[`SelectionMutableContent`]})))()}u();export{c as SelectionMutableContent,l as __namedExportsOrder,a as default};