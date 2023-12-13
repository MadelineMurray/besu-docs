"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[66047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,d=u["".concat(c,".").concat(v)]||u[v]||m[v]||i;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=v;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},53446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Flexible privacy groups",sidebar_position:3,description:"Flexible privacy groups"},o="Flexible privacy groups",p={unversionedId:"private-networks/concepts/privacy/flexible-privacy",id:"version-23.10.2/private-networks/concepts/privacy/flexible-privacy",title:"Flexible privacy groups",description:"Flexible privacy groups",source:"@site/versioned_docs/version-23.10.2/private-networks/concepts/privacy/flexible-privacy.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/flexible-privacy",permalink:"/private-networks/concepts/privacy/flexible-privacy",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/concepts/privacy/flexible-privacy.md",tags:[],version:"23.10.2",lastUpdatedAt:1701453670,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{title:"Flexible privacy groups",sidebar_position:3,description:"Flexible privacy groups"},sidebar:"privateDocSidebar",previous:{title:"Privacy groups",permalink:"/private-networks/concepts/privacy/privacy-groups"},next:{title:"Multi-tenancy",permalink:"/private-networks/concepts/privacy/multi-tenancy"}},c={},s=[{value:"Group management contracts",id:"group-management-contracts",level:2},{value:"Flexible privacy group IDs",id:"flexible-privacy-group-ids",level:2},{value:"Multi-tenancy",id:"multi-tenancy",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flexible-privacy-groups"},"Flexible privacy groups"),(0,n.kt)("p",null,"Flexible ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/privacy-groups"},"privacy groups")," use smart contracts to store and maintain the group membership. You can ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/how-to/use-privacy/flexible"},"add and remove members to and from flexible privacy groups"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Because group membership for flexible privacy groups is stored in a smart contract, flexible privacy groups are also known as onchain privacy groups.")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Flexible privacy groups are an early access feature. Don't use in production networks."),(0,n.kt)("p",{parentName:"admonition"},"The flexible privacy group interfaces might change between releases. There might not be an upgrade path from flexible privacy groups created using v1.5 or earlier to enable use of flexible privacy group functionality in future versions."),(0,n.kt)("p",{parentName:"admonition"},"We don't recommended creating flexible privacy groups in a chain with existing ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups"),".")),(0,n.kt)("h2",{id:"group-management-contracts"},"Group management contracts"),(0,n.kt)("p",null,"The privacy group management contract bytecode is hard-coded into Besu and when you create a privacy group, the contract bytecode is part of the genesis state of the privacy group."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"All members of a flexible privacy group must be using the same version of Besu. If using different versions, the private state within the privacy group may become inconsistent.")),(0,n.kt)("p",null,"In the default implementation of the group management contract, the signer of the private transaction that creates the privacy group is also the owner of the group. Only the owner can add and remove participants, and upgrade the management contract."),(0,n.kt)("p",null,"The owner is identified by the signing key. Transactions to add and remove participants, or upgrade the management contract, must be signed by the same key that signed the group creation transaction."),(0,n.kt)("h2",{id:"flexible-privacy-group-ids"},"Flexible privacy group IDs"),(0,n.kt)("p",null,"When creating a flexible privacy group, generate the privacy group ID for the group outside of Besu and pass the ID as a parameter."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/how-to/use-privacy/flexible"},"web3js-quorum library")," generates a unique privacy group ID and passes the ID to Besu when creating a privacy group."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When generating a privacy group ID, you must ensure the ID is unique across all network participants. If you create a privacy group with an existing privacy group ID, the existing privacy group is overwritten."),(0,n.kt)("p",{parentName:"admonition"},"To ensure unique privacy group IDs, we recommend using 256-bit SecureRandom.")),(0,n.kt)("h2",{id:"multi-tenancy"},"Multi-tenancy"),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy")," with flexible privacy groups, each user provides a JSON Web Token (JWT) which allows Besu to check that the user has access to functionality and data associated with a privacy group."),(0,n.kt)("p",null,"Using multi-tenancy with flexible privacy groups is more complex than with ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups")," because users may be added and removed from flexible privacy groups. When a user is added to a privacy group, they get access to all existing data in the privacy group. After being removed from a privacy group, a user retains access to already existing data in the privacy group, up to the block containing the ",(0,n.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction (PMT)")," that removed them (the removal block). A removed user doesn't have access to data in the privacy group that happens after they were removed."),(0,n.kt)("p",null,"In particular, when multi-tenancy is enabled and a user requests access to a privacy group they were once a member of but later removed from, Besu allows the user access to the following functionality and data associated with the privacy group:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Private transactions using ",(0,n.kt)("inlineCode",{parentName:"p"},"priv_getTransaction")," and private transaction receipts using ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#priv_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getTransactionReceipt"))," from blocks up to (and including) the removal block."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A removed group member may have access to some private transactions after the removal PMT in the same block."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Using ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#priv_call"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_call"))," on blocks up to (and including) the removal block.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Private logs using ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#priv_getlogs"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getLogs"))," for blocks up to (and including) the removal block. When the ",(0,n.kt)("inlineCode",{parentName:"p"},"toBlock")," is greater than the removal block, ",(0,n.kt)("inlineCode",{parentName:"p"},"priv_getLogs")," still returns logs up to the removal block."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When a user is removed from a privacy group, any log filters they've created are also removed and can't be accessed. A user can only create and access filters for a privacy group they are currently a member of.")))),(0,n.kt)("p",null,"All other ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#priv-methods"},(0,n.kt)("inlineCode",{parentName:"a"},"PRIV")," API methods")," fail for the removed group member."))}m.isMDXComponent=!0}}]);