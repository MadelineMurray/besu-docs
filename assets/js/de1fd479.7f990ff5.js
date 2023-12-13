"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={description:"Migrate to Besu from a different Ethereum execution client.",tags:["public networks"]},c="Migrate to Besu",s={unversionedId:"public-networks/get-started/migrate-to-besu",id:"version-23.10.1/public-networks/get-started/migrate-to-besu",title:"Migrate to Besu",description:"Migrate to Besu from a different Ethereum execution client.",source:"@site/versioned_docs/version-23.10.1/public-networks/get-started/migrate-to-besu.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/migrate-to-besu",permalink:"/23.10.1/public-networks/get-started/migrate-to-besu",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/get-started/migrate-to-besu.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"}],version:"23.10.1",lastUpdatedAt:1701453670,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{description:"Migrate to Besu from a different Ethereum execution client.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to a testnet",permalink:"/23.10.1/public-networks/get-started/connect/testnet"},next:{title:"How to",permalink:"/23.10.1/public-networks/how-to"}},a={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-to-besu"},"Migrate to Besu"),(0,o.kt)("p",null,"Migrate from a different Ethereum ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/concepts/the-merge#execution-clients"},"execution client")," to Besu to contribute to ",(0,o.kt)("a",{parentName:"p",href:"https://clientdiversity.org/"},"client diversity"),"."),(0,o.kt)("p",null,"To migrate from a different client, ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/get-started/connect/mainnet#2-start-besu"},"configure Besu as an execution client")," and connect your ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/concepts/the-merge#consensus-clients"},"consensus client")," to Besu instead of your original execution client."),(0,o.kt)("p",null,"To minimize downtime while ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/get-started/connect/sync-node"},"Besu syncs")," and avoid downtime penalties, you can sync Besu with a new consensus layer instance. Once Besu has fully synced you can connect it to your existing consensus client."),(0,o.kt)("p",null,"Find guides to switch from specific clients on the ",(0,o.kt)("a",{parentName:"p",href:"https://clientdiversity.org/#switch"},"client diversity website"),"."))}d.isMDXComponent=!0}}]);