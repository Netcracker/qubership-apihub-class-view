import{g as p,a as R,r as g,b as O,e as E,c as v,s as m}from"./common-4e781c95.js";import{N as S,a as d}from"./navigate-5ffae67d.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const L={title:"Synthetic/Navigate",argTypes:{...S,navigateToTarget:{name:"Navigate To",control:{type:"radio",labels:{0:"None",1:"Class",2:"Class's property",3:"Group",4:"Group's property",5:"Relation",6:"Non-existent"}},options:[0,1,2,3,4,5,6]}},args:{navigateToTarget:0,...d}},o="1",r=p(o+"lpg"),i=p(o+"lp"),c=R(o+"pg",{properties:[r]}),A=[...g(2,25).map(e=>R(e+"pg"))],T=O(o+"c",{properties:[c,i,...A]}),_=[...g(2,6).map(e=>O(e+"c",{properties:[p(e+"lp")]}))],C=[...g(1,6).map(e=>E({leafPropertyKey:`${e}lp`,referenceClassKey:`${e+1}c`}))],n=v({classes:[T,..._],relations:[...C]}),N=O("non-existent"),s=m((e,t)=>{const a={insets:e.navigateOptionInsets};switch(t.animationDuration=e.navigateOptionAnimationDuration,t.content=n,e.navigateToTarget){case 1:t.selectedObjects=[T],t.navigateTo([T],a);break;case 2:t.selectedObjects=[i],t.navigateTo([i],a);break;case 3:t.selectedObjects=[c],t.navigateTo([c],a);break;case 4:t.selectedObjects=[r],t.navigateTo([r],a);break;case 5:t.selectedObjects=[n.relations[0]],t.navigateTo([n.relations[0]],a);break;case 6:t.selectedObjects=[N],t.navigateTo([N],a);break;default:case 0:}},e=>(e.component.content=n,e));var l,P,b;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const options: OptionalMembers<NavigateOptions> = {
    insets: args.navigateOptionInsets
  };
  component.animationDuration = args.navigateOptionAnimationDuration;
  component.content = CONTENT;
  switch (args.navigateToTarget) {
    case NavigateTarget.CLASS:
      component.selectedObjects = [CLASS];
      component.navigateTo([CLASS], options);
      break;
    case NavigateTarget.CLASSES_PROPERTY:
      component.selectedObjects = [PROPERTY];
      component.navigateTo([PROPERTY], options);
      break;
    case NavigateTarget.GROUP:
      component.selectedObjects = [GROUP];
      component.navigateTo([GROUP], options);
      break;
    case NavigateTarget.GROUPS_PROPERTY:
      component.selectedObjects = [GROUP_PROPERTY];
      component.navigateTo([GROUP_PROPERTY], options);
      break;
    case NavigateTarget.RELATION:
      component.selectedObjects = [CONTENT.relations![0]];
      component.navigateTo([CONTENT.relations![0]], options);
      break;
    case NavigateTarget.NON_EXISTENT:
      component.selectedObjects = [NON_EXISTENT];
      component.navigateTo([NON_EXISTENT], options);
      break;
    default:
    case NavigateTarget.NONE:
  }
}, baseContext => {
  baseContext.component.content = CONTENT;
  return baseContext;
})`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const Y=["DeferredApply"];export{s as DeferredApply,Y as __namedExportsOrder,L as default};
