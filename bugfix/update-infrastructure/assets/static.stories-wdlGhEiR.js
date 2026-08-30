import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,l as i,m as a,o,p as s,u as c}from"./common-kYjFA7m2.js";import{n as l,r as u,t as d}from"./navigate-Cs4zmoqv.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),u(),f={title:`Synthetic/Navigate`,argTypes:{navigateIncludeClass:{name:`Navigate include class`,control:`boolean`,defaultValue:!1},navigateIncludeClassSProperty:{name:`Navigate include class's property`,control:`boolean`,defaultValue:!1},navigateIncludeGroup:{name:`Navigate include group`,control:`boolean`,defaultValue:!1},navigateIncludeGroupSProperty:{name:`Navigate include group's property`,control:`boolean`,defaultValue:!1},navigateIncludeRelation:{name:`Navigate include relation`,control:`boolean`,defaultValue:!1},...l,callNavigateToAt:{name:"Call `Navigate To` at",control:{type:`radio`,labels:{0:`None`,1:`Left group`,2:`Right group`,3:`Both group`}},options:[0,1,2,3]}},args:{navigateIncludeClass:!1,navigateIncludeClassSProperty:!1,navigateIncludeGroup:!1,navigateIncludeGroupSProperty:!1,navigateIncludeRelation:!1,callNavigateToAt:0,...d}},p=i(`llpg`),m=i(`rlpg`),h=i(`llp`),g=i(`rlp`),_=c(`lpg`,{properties:[p]}),v=c(`rpg`,{properties:[m]}),y=[...s(1,25).map(e=>c(e+`pg`))],b=t(`lc`,{properties:[_,h,...y]}),x=t(`rc`,{properties:[v,g]}),S=[...s(1,6).map(e=>t(e+`c`,{properties:[i(e+`lp`)]}))],C=n({leafPropertyKey:`llp`,referenceClassKey:`1c`}),w=n({leafPropertyKey:`6lp`,referenceClassKey:`rc`}),T=[C,...s(1,6).map(e=>n({leafPropertyKey:`${e}lp`,referenceClassKey:`${e+1}c`})),w],E=o({classes:[b,...S,x],relations:[...T]}),D=a((e,t)=>{let n={insets:e.navigateOptionInsets};switch(e.callNavigateToAt){case 1:{let r=[];e.navigateIncludeClass&&r.push(b),e.navigateIncludeClassSProperty&&r.push(h),e.navigateIncludeGroup&&r.push(_),e.navigateIncludeGroupSProperty&&r.push(p),e.navigateIncludeRelation&&r.push(C),r.length>0&&t.navigateTo(r,n);break}case 2:{let r=[];e.navigateIncludeClass&&r.push(x),e.navigateIncludeClassSProperty&&r.push(g),e.navigateIncludeGroup&&r.push(v),e.navigateIncludeGroupSProperty&&r.push(m),e.navigateIncludeRelation&&r.push(w),r.length>0&&t.navigateTo(r,n);break}case 3:{let r=[];e.navigateIncludeClass&&(r.push(b),r.push(x)),e.navigateIncludeClassSProperty&&(r.push(h),r.push(g)),e.navigateIncludeGroup&&(r.push(_),r.push(v)),e.navigateIncludeGroupSProperty&&(r.push(p),r.push(m)),e.navigateIncludeRelation&&(r.push(C),r.push(w)),r.length>0&&(t.animationDuration=e.navigateOptionAnimationDuration,t.navigateTo(r,n));break}}},e=>(e.component.content=E,e)),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`storyArgsFunc((args, component) => {
  const options: OptionalMembers<NavigateOptions> = {
    insets: args.navigateOptionInsets
  };
  switch (args.callNavigateToAt) {
    case NavigateSide.LEFT:
      {
        const toNavigateLeft: DomainObject[] = [];
        if (args.navigateIncludeClass) {
          toNavigateLeft.push(LEFT_CLASS);
        }
        if (args.navigateIncludeClassSProperty) {
          toNavigateLeft.push(LEFT_PROPERTY);
        }
        if (args.navigateIncludeGroup) {
          toNavigateLeft.push(LEFT_GROUP);
        }
        if (args.navigateIncludeGroupSProperty) {
          toNavigateLeft.push(LEFT_GROUP_PROPERTY);
        }
        if (args.navigateIncludeRelation) {
          toNavigateLeft.push(LEFT_RELATION);
        }
        if (toNavigateLeft.length > 0) {
          component.navigateTo(toNavigateLeft, options);
        }
        break;
      }
    case NavigateSide.RIGHT:
      {
        const toNavigateRight: DomainObject[] = [];
        if (args.navigateIncludeClass) {
          toNavigateRight.push(RIGHT_CLASS);
        }
        if (args.navigateIncludeClassSProperty) {
          toNavigateRight.push(RIGHT_PROPERTY);
        }
        if (args.navigateIncludeGroup) {
          toNavigateRight.push(RIGHT_GROUP);
        }
        if (args.navigateIncludeGroupSProperty) {
          toNavigateRight.push(RIGHT_GROUP_PROPERTY);
        }
        if (args.navigateIncludeRelation) {
          toNavigateRight.push(RIGHT_RELATION);
        }
        if (toNavigateRight.length > 0) {
          component.navigateTo(toNavigateRight, options);
        }
        break;
      }
    case NavigateSide.BOTH:
      {
        const toNavigate: DomainObject[] = [];
        if (args.navigateIncludeClass) {
          toNavigate.push(LEFT_CLASS);
          toNavigate.push(RIGHT_CLASS);
        }
        if (args.navigateIncludeClassSProperty) {
          toNavigate.push(LEFT_PROPERTY);
          toNavigate.push(RIGHT_PROPERTY);
        }
        if (args.navigateIncludeGroup) {
          toNavigate.push(LEFT_GROUP);
          toNavigate.push(RIGHT_GROUP);
        }
        if (args.navigateIncludeGroupSProperty) {
          toNavigate.push(LEFT_GROUP_PROPERTY);
          toNavigate.push(RIGHT_GROUP_PROPERTY);
        }
        if (args.navigateIncludeRelation) {
          toNavigate.push(LEFT_RELATION);
          toNavigate.push(RIGHT_RELATION);
        }
        if (toNavigate.length > 0) {
          component.animationDuration = args.navigateOptionAnimationDuration;
          component.navigateTo(toNavigate, options);
        }
        break;
      }
    default:
    case NavigateSide.NONE:
  }
}, baseContext => {
  baseContext.component.content = CONTENT;
  return baseContext;
})`,...D.parameters?.docs?.source}}},O=[`StaticApply`]})))()}k();export{D as StaticApply,O as __namedExportsOrder,f as default};