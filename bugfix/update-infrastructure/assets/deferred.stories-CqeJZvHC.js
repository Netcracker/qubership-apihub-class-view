import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,d as n,f as r,l as i,m as a,o,p as s,u as c}from"./common-_HpFpOjk.js";import{n as l,r as u,t as d}from"./navigate-TuO4De3j.js";var f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),u(),f={title:`Synthetic/Navigate`,argTypes:{...l,navigateToTarget:{name:`Navigate To`,control:{type:`radio`,labels:{0:`None`,1:`Class`,2:`Class's property`,3:`Group`,4:`Group's property`,5:`Relation`,6:`Non-existent`}},options:[0,1,2,3,4,5,6]}},args:{navigateToTarget:0,...d}},p=i(`1lpg`),m=i(`1lp`),h=c(`1pg`,{properties:[p]}),g=[...s(2,25).map(e=>c(e+`pg`))],_=t(`1c`,{properties:[h,m,...g]}),v=[...s(2,6).map(e=>t(e+`c`,{properties:[i(e+`lp`)]}))],y=[...s(1,6).map(e=>n({leafPropertyKey:`${e}lp`,referenceClassKey:`${e+1}c`}))],b=o({classes:[_,...v],relations:[...y]}),x=t(`non-existent`),S=a((e,t)=>{let n={insets:e.navigateOptionInsets};switch(t.animationDuration=e.navigateOptionAnimationDuration,t.content=b,e.navigateToTarget){case 1:t.selectedObjects=[_],t.navigateTo([_],n);break;case 2:t.selectedObjects=[m],t.navigateTo([m],n);break;case 3:t.selectedObjects=[h],t.navigateTo([h],n);break;case 4:t.selectedObjects=[p],t.navigateTo([p],n);break;case 5:t.selectedObjects=[b.relations[0]],t.navigateTo([b.relations[0]],n);break;case 6:t.selectedObjects=[x],t.navigateTo([x],n)}},e=>(e.component.content=b,e)),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...S.parameters?.docs?.source}}},C=[`DeferredApply`]})))()}w();export{S as DeferredApply,C as __namedExportsOrder,f as default};