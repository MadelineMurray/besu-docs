"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[97567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||l[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},i=void 0,c={unversionedId:"global/test_accounts",id:"global/test_accounts",title:"test_accounts",description:"The following accounts are test accounts and their private keys are publicly visible in this documentation and in publicly available source code.",source:"@site/docs/global/test_accounts.md",sourceDirName:"global",slug:"/global/test_accounts",permalink:"/development/global/test_accounts",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/global/test_accounts.md",tags:[],version:"current",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{}},p={},s=[],d={toc:s},m="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Do not use the test accounts on Ethereum Mainnet or any production network.")),(0,o.kt)("p",{parentName:"admonition"},"The following accounts are test accounts and their private keys are publicly visible in this documentation and in publicly available source code."),(0,o.kt)("p",{parentName:"admonition"},"They are not secure and everyone can use them."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Using test accounts on Ethereum Mainnet and production networks can lead to loss of funds and identity fraud.")),(0,o.kt)("p",{parentName:"admonition"},"In this documentation, we only provide test accounts for ease of testing and learning purposes; never use them for other purposes."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Always secure your Ethereum Mainnet and any production account properly.")),(0,o.kt)("p",{parentName:"admonition"},"See for instance ",(0,o.kt)("a",{parentName:"p",href:"https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds"},'MyCrypto "Protecting Yourself and Your Funds" guide'),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 1 (address ',(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"),')"'),(0,o.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\n")),(0,o.kt)("p",{parentName:"admonition"},"Initial balance : 200 Eth ",(0,o.kt)("em",{parentName:"p"},"(200000000000000000000 Wei)"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 2 (address ',(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0x627306090abaB3A6e1400e9345bC60c78a8BEf57"),')"'),(0,o.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\n")),(0,o.kt)("p",{parentName:"admonition"},"Initial balance : 90000 Eth ",(0,o.kt)("em",{parentName:"p"},"(90000000000000000000000 Wei)"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 3 (address ',(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0xf17f52151EbEF6C7334FAD080c5704D77216b732"),')"'),(0,o.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f\n")),(0,o.kt)("p",{parentName:"admonition"},"Initial balance : 90000 Eth ",(0,o.kt)("em",{parentName:"p"},"(90000000000000000000000 Wei)"))))}l.isMDXComponent=!0}}]);