"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={description:"Monitoring using metrics and logging",tags:["public networks","private networks"]},a="Monitor Besu",c={unversionedId:"public-networks/how-to/monitor/index",id:"version-23.4.1/public-networks/how-to/monitor/index",title:"Monitor Besu",description:"Monitoring using metrics and logging",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/monitor/index.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/",permalink:"/23.4.1/public-networks/how-to/monitor/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/monitor/index.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{description:"Monitoring using metrics and logging",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Specify NAT method",permalink:"/23.4.1/public-networks/how-to/connect/specify-nat"},next:{title:"Use metrics",permalink:"/23.4.1/public-networks/how-to/monitor/metrics"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitor-besu"},"Monitor Besu"),(0,o.kt)("p",null,"Monitoring enables identification of node and network issues. Specifically, configuring metrics and logging enables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/how-to/monitor/metrics"},"Visual representation of declining node or network performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/how-to/monitor/logging"},"Collection of log files to enable issue diagnosis"),".")),(0,o.kt)("p",null,"For an overview of monitoring Hyperledger Besu, view ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7BuutRe0I28&feature=youtu.be"},"this recording"),"."))}m.isMDXComponent=!0}}]);