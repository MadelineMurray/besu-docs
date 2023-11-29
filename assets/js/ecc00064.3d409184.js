"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[37712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(r),y=o,b=c["".concat(p,".").concat(y)]||c[y]||d[y]||s;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},89105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:3,title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},i="Deploy Besu with Kubernetes",a={unversionedId:"private-networks/how-to/deploy/kubernetes",id:"private-networks/how-to/deploy/kubernetes",title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",source:"@site/docs/private-networks/how-to/deploy/kubernetes.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/kubernetes",permalink:"/development/private-networks/how-to/deploy/kubernetes",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/deploy/kubernetes.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Ansible",permalink:"/development/private-networks/how-to/deploy/ansible"},next:{title:"Use Ethstats network monitor",permalink:"/development/private-networks/how-to/deploy/ethstats"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-besu-with-kubernetes"},"Deploy Besu with Kubernetes"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes"},"reference implementations")," to install private networks using Kubernetes (K8s). The repository has full support for cloud providers like AWS, Azure, GCP, and IBM, and has production setups that use of identities and cloud-native secret storage services like Azure KeyVault and AWS Secrets Manager."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/kubernetes/"},"tutorial")," and familiarize yourself with the reference implementations, and customize them to your requirements."))}d.isMDXComponent=!0}}]);