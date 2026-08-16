import{g as t,a as N,r as P,b as d,e as h,c as E,s as L}from"./common-4e781c95.js";import{N as S,a as y}from"./navigate-5ffae67d.js";import"./iframe-3b50794c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const k={title:"Synthetic/Navigate",argTypes:{navigateIncludeClass:{name:"Navigate include class",control:"boolean",defaultValue:!1},navigateIncludeClassSProperty:{name:"Navigate include class's property",control:"boolean",defaultValue:!1},navigateIncludeGroup:{name:"Navigate include group",control:"boolean",defaultValue:!1},navigateIncludeGroupSProperty:{name:"Navigate include group's property",control:"boolean",defaultValue:!1},navigateIncludeRelation:{name:"Navigate include relation",control:"boolean",defaultValue:!1},...S,callNavigateToAt:{name:"Call `Navigate To` at",control:{type:"radio",labels:{0:"None",1:"Left group",2:"Right group",3:"Both group"}},options:[0,1,2,3]}},args:{navigateIncludeClass:!1,navigateIncludeClassSProperty:!1,navigateIncludeGroup:!1,navigateIncludeGroupSProperty:!1,navigateIncludeRelation:!1,callNavigateToAt:0,...y}},i="l",s="r",l=t(i+"lpg"),p=t(s+"lpg"),g=t(i+"lp"),u=t(s+"lp"),c=N(i+"pg",{properties:[l]}),v=N(s+"pg",{properties:[p]}),m=[...P(1,25).map(a=>N(a+"pg"))],R=d(i+"c",{properties:[c,g,...m]}),T=d(s+"c",{properties:[v,u]}),C=[...P(1,6).map(a=>d(a+"c",{properties:[t(a+"lp")]}))],I=h({leafPropertyKey:"llp",referenceClassKey:"1c"}),f=h({leafPropertyKey:"6lp",referenceClassKey:"rc"}),A=[I,...P(1,6).map(a=>h({leafPropertyKey:`${a}lp`,referenceClassKey:`${a+1}c`})),f],b=E({classes:[R,...C,T],relations:[...A]}),o=L((a,n)=>{const r={insets:a.navigateOptionInsets};switch(a.callNavigateToAt){case 1:{const e=[];a.navigateIncludeClass&&e.push(R),a.navigateIncludeClassSProperty&&e.push(g),a.navigateIncludeGroup&&e.push(c),a.navigateIncludeGroupSProperty&&e.push(l),a.navigateIncludeRelation&&e.push(I),e.length>0&&n.navigateTo(e,r);break}case 2:{const e=[];a.navigateIncludeClass&&e.push(T),a.navigateIncludeClassSProperty&&e.push(u),a.navigateIncludeGroup&&e.push(v),a.navigateIncludeGroupSProperty&&e.push(p),a.navigateIncludeRelation&&e.push(f),e.length>0&&n.navigateTo(e,r);break}case 3:{const e=[];a.navigateIncludeClass&&(e.push(R),e.push(T)),a.navigateIncludeClassSProperty&&(e.push(g),e.push(u)),a.navigateIncludeGroup&&(e.push(c),e.push(v)),a.navigateIncludeGroupSProperty&&(e.push(l),e.push(p)),a.navigateIncludeRelation&&(e.push(I),e.push(f)),e.length>0&&(n.animationDuration=a.navigateOptionAnimationDuration,n.navigateTo(e,r));break}default:case 0:}},a=>(a.component.content=b,a));var O,G,_;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`storyArgsFunc((args, component) => {
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
})`,...(_=(G=o.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const K=["StaticApply"];export{o as StaticApply,K as __namedExportsOrder,k as default};
