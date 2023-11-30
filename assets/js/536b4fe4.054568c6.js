"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[47478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Plugin API interfaces",sidebar_position:4,description:"Plugin interfaces"},o="Plugin API interfaces",l={unversionedId:"private-networks/reference/plugin-api-interfaces",id:"version-23.4.0/private-networks/reference/plugin-api-interfaces",title:"Plugin API interfaces",description:"Plugin interfaces",source:"@site/versioned_docs/version-23.4.0/private-networks/reference/plugin-api-interfaces.md",sourceDirName:"private-networks/reference",slug:"/private-networks/reference/plugin-api-interfaces",permalink:"/23.4.0/private-networks/reference/plugin-api-interfaces",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/reference/plugin-api-interfaces.md",tags:[],version:"23.4.0",lastUpdatedAt:1701300211,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:4,frontMatter:{title:"Plugin API interfaces",sidebar_position:4,description:"Plugin interfaces"},sidebar:"privateDocSidebar",previous:{title:"Accounts for testing",permalink:"/23.4.0/private-networks/reference/accounts-for-testing"}},s={},p=[{value:"Core plugin classes",id:"core-plugin-classes",level:2},{value:"Plugin services",id:"plugin-services",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin-api-interfaces"},"Plugin API interfaces"),(0,a.kt)("p",null,"API interfaces in Hyperledger Besu allow users to ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/plugins"},"build plugins")," to extend Besu functionality."),(0,a.kt)("p",null,"For more information about the available interfaces, see the ",(0,a.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/index.html"},"Plugin API Javadoc"),"."),(0,a.kt)("admonition",{title:"Javadoc issue",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The plugin API documentation is currently not being updated. We're working on a fix, but in the meantime, some links are temporarily pointing to wiki.hyperledger.org.")),(0,a.kt)("h2",{id:"core-plugin-classes"},"Core plugin classes"),(0,a.kt)("p",null,"The following table lists the interfaces providing core plugin classes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Interface"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://wiki.hyperledger.org/display/BESU/BesuContext"},(0,a.kt)("strong",{parentName:"a"},"BesuContext"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows plugins to access Besu services.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/BesuPlugin.html"},(0,a.kt)("strong",{parentName:"a"},"BesuPlugin"))),(0,a.kt)("td",{parentName:"tr",align:null},"Used to manage the plugin lifecycle.")))),(0,a.kt)("h2",{id:"plugin-services"},"Plugin services"),(0,a.kt)("p",null,"The following table lists interfaces providing services you can retrieve."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Interface"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/BesuEvents.html"},(0,a.kt)("strong",{parentName:"a"},"BesuEvents"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows plugins to attach to events during Besu operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/BesuConfiguration.html"},(0,a.kt)("strong",{parentName:"a"},"BesuConfiguration"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides file system locations of Besu's storage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/query/IbftQueryService.html"},(0,a.kt)("strong",{parentName:"a"},"IbftQueryService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows query of the IBFT 2.0 aspects of the blockchain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/metrics/MetricCategoryRegistry.html"},(0,a.kt)("strong",{parentName:"a"},"MetricCategoryRegistry"))),(0,a.kt)("td",{parentName:"tr",align:null},"Adds a new metrics category to the CLI.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/MetricsSystem.html"},(0,a.kt)("strong",{parentName:"a"},"MetricsSystem"))),(0,a.kt)("td",{parentName:"tr",align:null},"Register metrics with the Prometheus endpoint.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/query/PoaQueryService.html"},(0,a.kt)("strong",{parentName:"a"},"PoaQueryService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Query the current state of Clique and IBFT 2.0 consensus protocols.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/PicoCLIOptions.html"},(0,a.kt)("strong",{parentName:"a"},"PicoCLIOptions"))),(0,a.kt)("td",{parentName:"tr",align:null},"Adds CLI commands to the Besu command line.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/SecurityModuleService.html"},(0,a.kt)("strong",{parentName:"a"},"SecurityModuleService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows plugins to register a security module.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/StorageService.html"},(0,a.kt)("strong",{parentName:"a"},"StorageService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows plugins to register as a storage engine. For example, to connect to a hardware security module (HSM).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://wiki.hyperledger.org/display/BESU/PermissioningService"},(0,a.kt)("strong",{parentName:"a"},"PermissioningService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Allows for fine grain control of node connection and node messaging permissioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://wiki.hyperledger.org/display/BESU/PrivacyPluginService"},(0,a.kt)("strong",{parentName:"a"},"PrivacyPluginService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a way to define how ",(0,a.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transactions")," are created, and what private genesis to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://wiki.hyperledger.org/display/BESU/RpcEndpointService"},(0,a.kt)("strong",{parentName:"a"},"RpcEndpointService"))),(0,a.kt)("td",{parentName:"tr",align:null},"Register custom RPC endpoints.")))),(0,a.kt)("p",null,"To use the interfaces in your plugin, ensure the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/PluginsAPIDemo/blob/957628b3c6f533f3c3f405e2a17e369cd1f02c31/build.gradle"},"Gradle build file")," contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://hyperledger.jfrog.io/hyperledger/besu-maven")," repository and the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-api")," dependency."),(0,a.kt)("admonition",{title:"Known issue",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"As indicated in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu-docs/issues/406"},"issue #406"),", plugins may need to access the parsed command line during registration, but the command line is not yet initialized at this stage."),(0,a.kt)("p",{parentName:"admonition"},"It's in our roadmap to improve lifecycle steps and provide additional visibility for some data. A workaround is to create a supplier during the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," step and store it in memory."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," step can be ignored and your plugin module will be instantiated when the command line interface is parsed and available.")))}c.isMDXComponent=!0}}]);