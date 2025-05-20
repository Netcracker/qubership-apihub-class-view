import{s as g,h as c}from"./common-4e781c95.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const b={title:"Synthetic/Selection",argTypes:{changeContent:{name:"Change content",control:{type:"radio",labels:{0:"No changes",1:"Old keys",2:"New keys"}},options:[0,1,2]}},args:{changeContent:0}},r="l",m="r",n=g((t,e)=>{switch(t.changeContent){case 1:{e.content=c(r);break}case 2:{e.content=c(m);break}}},t=>{const e=c(r);return t.component.content=e,t.component.selectedObjects=[...e.classes||[],...e.relations||[],...(e.classes||[]).flatMap(o=>p(o))],t});function p(t){const e=t.properties||[],o=e.filter(s=>s.kind==="group").flatMap(s=>p(s));return[...e,...o]}var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const d=["SelectionMutableContent"];export{n as SelectionMutableContent,d as __namedExportsOrder,b as default};
