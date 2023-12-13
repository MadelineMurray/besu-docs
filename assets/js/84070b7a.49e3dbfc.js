"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[77180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={description:"Hyperledger Besu privacy-enabled private network tutorial",tags:["private networks"]},i="Create a privacy-enabled network using the Quorum Developer Quickstart",s={unversionedId:"private-networks/tutorials/privacy/quickstart",id:"version-23.7.2/private-networks/tutorials/privacy/quickstart",title:"Create a privacy-enabled network using the Quorum Developer Quickstart",description:"Hyperledger Besu privacy-enabled private network tutorial",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/privacy/quickstart.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/quickstart",permalink:"/23.7.2/private-networks/tutorials/privacy/quickstart",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/privacy/quickstart.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1701453670,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{description:"Hyperledger Besu privacy-enabled private network tutorial",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use the web3js-quorum multi-node example",permalink:"/23.7.2/private-networks/tutorials/privacy/web3js-quorum"},next:{title:"Create a permissioned network",permalink:"/23.7.2/private-networks/tutorials/permissioning/"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Docker-compose file",id:"create-docker-compose-file",level:2},{value:"Usage",id:"usage",level:2},{value:"Start the network",id:"start-the-network",level:2},{value:"Deploy the private contract and interact with the nodes",id:"deploy-the-private-contract-and-interact-with-the-nodes",level:2},{value:"Further examples",id:"further-examples",level:2},{value:"Stop the network",id:"stop-the-network",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-privacy-enabled-network-using-the-quorum-developer-quickstart"},"Create a privacy-enabled network using the Quorum Developer Quickstart"),(0,n.kt)("p",null,"You can create a privacy-enabled network using the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart"},"Quorum Developer Quickstart"),". It runs a private Hyperledger Besu network that uses ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/en/stable/"},"Tessera")," as its private transaction manager."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart#block-explorer"},"Block Explorer"),", make ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart#run-json-rpc-requests"},"JSON-RPC requests"),", and ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart#create-a-transaction-using-metamask"},"create transactions using MetaMask"),". This tutorial describes how to make private transactions between nodes, and perform read and write operations on private contracts."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"This tutorial runs a private network suitable for education or demonstration purposes and is not intended for running production networks.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To run this tutorial, you must have the following installed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker and Docker-compose")),(0,n.kt)("admonition",{parentName:"li",type:"important"},(0,n.kt)("p",{parentName:"admonition"},"If using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/"},"MacOS")," or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/"},"Windows"),", enable Docker to use up to 6GB of memory on the ",(0,n.kt)("em",{parentName:"p"},"Advanced")," tab in ",(0,n.kt)("em",{parentName:"p"},"Preferences"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Nodejs"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git command line"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://curl.haxx.se/download.html"},"Curl command line"),"."))),(0,n.kt)("h2",{id:"create-docker-compose-file"},"Create Docker-compose file"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To create the docker-compose file and artifacts, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx quorum-dev-quickstart\n")),(0,n.kt)("p",null,"Follow the prompts displayed to run Hyperledger Besu, private transactions, and ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/monitor/elastic-stack"},"logging with ELK"),". Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.orchestrate.consensys.net/en/stable/"},"Codefi Orchestrate"),"."),(0,n.kt)("h2",{id:"start-the-network"},"Start the network"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If running in Windows, please run commands from the GitBash shell")),(0,n.kt)("p",null,"In the installation directory, start the network:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./run.sh\n")),(0,n.kt)("p",null,"The script pulls the Docker images starts the network. Pulling the images takes a few minutes the first time. The network details display."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"*************************************\nQuorum Dev Quickstart\n*************************************\nSetting up the index patterns in kibana .................\n----------------------------------\nList endpoints and services\n----------------------------------\nJSON-RPC HTTP service endpoint      : http://localhost:8545\nJSON-RPC WebSocket service endpoint : ws://localhost:8546\nWeb block explorer address          : http://localhost:25000/\nPrometheus address                  : http://localhost:9090/graph\nGrafana address                     : http://localhost:3000/d/XE4V0WGZz/besu-overview?orgId=1&refresh=10s&from=now-30m&to=now&var-system=All\nCollated logs using Kibana endpoint : http://localhost:5601/app/kibana#/discover\n\nFor more information on the endpoints and services, refer to README.md in the installation directory.\n****************************************************************\n")),(0,n.kt)("h2",{id:"deploy-the-private-contract-and-interact-with-the-nodes"},"Deploy the private contract and interact with the nodes"),(0,n.kt)("p",null,"To deploy a private contract to another ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/privacy/privacy-groups"},"privacy group")," member, use the ",(0,n.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/index.html"},"web3js-quorum")," library and the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/api/#eea_sendrawtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," API call. You must use this API call instead of ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.github.io/execution-apis/api-documentation"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," because Hyperledger Besu keeps account management separate for stronger security."),(0,n.kt)("p",null,"This example uses the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3js")," library to make the API calls, the example creates three Besu nodes, with each node having a corresponding Tessera node for privacy. You can access the Besu member nodes for API calls on the following ports:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Member1Besu RPC: http://localhost:20000\nMember1Tessera: http://localhost:9081\n\nMember2Besu RPC: http://localhost:20002\nMember2Tessera: http://localhost:9082\n\nMember3Besu RPC: http://localhost:20004\nMember3Tessera: http://localhost:9083\n")),(0,n.kt)("p",null,"Navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"smart_contracts")," directory and deploy the private transaction:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd smart_contracts\nnpm install\nnode scripts/private_tx.js\n")),(0,n.kt)("p",null,"The script deploys the contract and sends an arbitrary value (47) from ",(0,n.kt)("inlineCode",{parentName:"p"},"Member1")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Member3"),". Once done, it queries all three members (Tessera) to check the value at an address. Only ",(0,n.kt)("inlineCode",{parentName:"p"},"Member1")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Member3")," has this information as they were involved in the transaction, ",(0,n.kt)("inlineCode",{parentName:"p"},"Member2")," responds with a ",(0,n.kt)("inlineCode",{parentName:"p"},"0x")," to indicate it is unaware of the transaction."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/private_tx.js\nCreating contract...\nGetting contractAddress from txHash:  0xc1b57f6a7773fe887afb141a09a573d19cb0fdbb15e0f2b9ed0dfead6f5b5dbf\nWaiting for transaction to be mined ...\nAddress of transaction: 0x8220ca987f7bb7f99815d0ef64e1d8a072a2c167\nUse the smart contracts 'get' function to read the contract's constructor initialized value ..\nWaiting for transaction to be mined ...\nMember1 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000002f\nUse the smart contracts 'set' function to update that value to 123 .. - from member1 to member3\nTransaction hash: 0x387c6627fe87e235b0f2bbbe1b2003a11b54afc737dca8da4990d3de3197ac5f\nWaiting for transaction to be mined ...\nVerify the private transaction is private by reading the value from all three members ..\nWaiting for transaction to be mined ...\nMember1 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000007b\nWaiting for transaction to be mined ...\nMember2 value from deployed contract is: 0x\nWaiting for transaction to be mined ...\nMember3 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000007b\n")),(0,n.kt)("p",null,"The general contract deployment flow is:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy a contract, which returns a transaction hash.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the privacy transaction receipt from the transaction hash.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the contract address in the privacy transaction receipt to ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/contracts/interact"},"interact with the contract")," from that point on."))),(0,n.kt)("h2",{id:"further-examples"},"Further examples"),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/privacy/web3js-quorum"},"web3js-quorum client library example")," and view the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum/tree/master/example"},"sample code examples"),"."),(0,n.kt)("p",null,"You can also test the erc20 token example by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"erc20.js")," which deploys a ",(0,n.kt)("inlineCode",{parentName:"p"},"HumanStandardToken")," contract and transfers 1 token to Node2."),(0,n.kt)("p",null,"This can be verified from the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," field of the ",(0,n.kt)("inlineCode",{parentName:"p"},"logs")," which is ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,n.kt)("h2",{id:"stop-the-network"},"Stop the network"),(0,n.kt)("p",null,"Do one of the following to stop the network:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop the network:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./stop.sh\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop the network and remove the containers and volumes:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./remove.sh\n")))))}m.isMDXComponent=!0}}]);