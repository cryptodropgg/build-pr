(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[25],{2546:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(49),n=a(15),c=a(6),i=a.n(c),s=a(0),o=a(717),l=a(516);function u(e,t,a){if(e.signer)return e;if(null===t||void 0===t?void 0:t.signer)return e.connect(t.signer);if(null===a||void 0===a?void 0:a.getSigner())return e.connect(a.getSigner());throw new TypeError("No signer available in contract, options or library")}function j(e,t,a){var c=Object(o.a)(),j=c.library,b=function(e,t){var a=Object(s.useState)({status:"None"}),c=Object(n.a)(a,2),o=c[0],u=c[1],j=Object(l.b)().addTransaction,b=Object(s.useCallback)(function(){var a=Object(r.a)(i.a.mark((function a(r){var n,c,s,o,l,b,d,m;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return b=void 0,a.prev=3,a.next=6,r;case 6:return b=a.sent,u({transaction:b,status:"Mining",chainId:e}),j({transaction:Object.assign(Object.assign({},b),{chainId:e}),submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName}),a.next=11,b.wait();case 11:return d=a.sent,u({receipt:d,transaction:b,status:"Success",chainId:e}),a.abrupt("return",d);case 16:return a.prev=16,a.t0=a.catch(3),m=null!==(l=null!==(s=null!==(c=null===(n=a.t0.error)||void 0===n?void 0:n.message)&&void 0!==c?c:a.t0.reason)&&void 0!==s?s:null===(o=a.t0.data)||void 0===o?void 0:o.message)&&void 0!==l?l:a.t0.message,u(b?{status:"Fail",transaction:b,receipt:a.t0.receipt,errorMessage:m,chainId:e}:{status:"Exception",errorMessage:m,chainId:e}),a.abrupt("return",void 0);case 21:case"end":return a.stop()}}),a,null,[[3,16]])})));return function(e){return a.apply(this,arguments)}}(),[e,u,j,t]);return{promiseTransaction:b,state:o}}(c.chainId,a),d=b.promiseTransaction,m=b.state,h=Object(s.useState)(void 0),g=Object(n.a)(h,2),O=g[0],p=g[1],f=Object(s.useCallback)(Object(r.a)(i.a.mark((function r(){var n,c,s,o=arguments;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=u(e,a,j),r.next=3,d(n[t].apply(n,o));case 3:(null===(c=r.sent)||void 0===c?void 0:c.logs)&&(s=c.logs.filter((function(t){return t.address===e.address})).map((function(t){return e.interface.parseLog(t)})),p(s));case 5:case"end":return r.stop()}}),r)}))),[e,t,a,j]);return{send:f,state:m,events:O}}},2585:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(5),n=a(0),c=a(14),i=a(818),s=a(829),o=a(301),l=a(813),u=a(707),j=a(63),b=a(717),d=a(81),m=a(384),h=a(90),g=a(37),O=a(49),p=a(15),f=a(6),x=a.n(f),v=function(e){var t=Object(n.useState)({index:0,amount:"",proof:[]}),a=Object(p.a)(t,2),r=a[0],c=a[1],i=Object(b.a)().account,s=Object(n.useCallback)(Object(O.a)(x.a.mark((function t(){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=14;break}return t.prev=1,t.next=4,fetch(g.Q,{body:JSON.stringify({key:"".concat(e,":").concat(i)}),headers:{"Content-Type":"application/json","Referrer-Policy":"no-referrer"},method:"POST"});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,c(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),c({index:0,amount:"0",proof:[]});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),[i]);return Object(n.useEffect)((function(){s()}),[i,s]),r},y=a(795),C=a(700),E=a(825),I=a(715),k=a(2546),w=a(80),J=a(1),S=Object(c.a)(i.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})}));Object(c.a)(u.a.div)((function(e){e.theme;return{}}));function T(){var e=Object(b.a)().account,t=v("1"),a=Object(n.useState)("0"),r=Object(p.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),l=Object(p.a)(s,2),u=(l[0],l[1]),j=Object(n.useState)(!1),d=Object(p.a)(j,2),m=d[0],h=d[1],O=Object(I.a)({abi:g.K,address:g.G,method:"claimed",args:[e]});Object(n.useEffect)((function(){if(t&&""!==t.amount&&O){var e=w.a.parseEther(w.a.formatEther(t.amount.toString()));e.gte(O[0])&&(e=e.sub(O[0])),i(w.a.formatEther(e))}}),[t,O,e]);var f=Object(k.a)(g.H,"claim",{transactionName:"Claim JUICE"}),x=f.state,T=f.send;return Object(n.useEffect)((function(){"Exception"===x.status&&(h(!1),u(x.errorMessage)),"Exception"!==x.status&&"Fail"!==x.status||(h(!1),u(x.errorMessage)),"None"===x.status&&(h(!1),u("")),"Success"===x.status&&(h(!1),u(""))}),[x,e]),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(S,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #ffc900",minHeight:"16rem",height:"fit-content",backgroundImage:"url(/static/claimjuice/claim-juice-bg2.jpg)",backgroundPosition:"center"},children:[Object(J.jsxs)(o.a,{variant:"h4",style:{marginBottom:"0.4rem"},children:["Claim ",Object(J.jsx)("span",{style:{color:"#ffc900"},children:"$JUICE"})]}),Object(J.jsx)(y.a,{}),Object(J.jsx)(o.a,{style:{marginTop:"1.4rem"},children:"Available to claim:"}),Object(J.jsxs)(C.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:[Object(J.jsxs)(o.a,{variant:"h3",children:[c," $JUICE "]}),Object(J.jsx)("img",{src:"/static/claimjuice/JuiceLogo.svg",alt:"",style:{width:"2rem"}})]}),Object(J.jsx)(E.a,{color:"yellow",size:"large",variant:"contained",style:{marginTop:"4rem"},onClick:function(){h(!0),T(t.index,e,t.amount,t.proof)},disabled:m||w.a.parseEther(c).eq("0"),children:m?Object(J.jsx)(J.Fragment,{children:"CLAIMING ..."}):Object(J.jsx)(J.Fragment,{children:"CLAIM"})})]})})}var F=Object(c.a)(i.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})}));Object(c.a)(u.a.div)((function(e){e.theme;return{}}));function A(){var e=Object(b.a)().account,t=v("2"),a=Object(n.useState)("0"),r=Object(p.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),l=Object(p.a)(s,2),u=(l[0],l[1]),j=Object(n.useState)(!1),d=Object(p.a)(j,2),m=d[0],h=d[1],O=Object(I.a)({abi:g.K,address:g.I,method:"claimed",args:[e]});Object(n.useEffect)((function(){if(t&&""!==t.amount&&O){var e=w.a.parseEther(w.a.formatEther(t.amount.toString()));e.gte(O[0])&&(e=e.sub(O[0])),i(w.a.formatEther(e))}}),[t,O,e]);var f=Object(k.a)(g.J,"claim",{transactionName:"Claim JUICE"}),x=f.state,S=f.send;return Object(n.useEffect)((function(){"Exception"===x.status&&(h(!1),u(x.errorMessage)),"Exception"!==x.status&&"Fail"!==x.status||(h(!1),u(x.errorMessage)),"None"===x.status&&(h(!1),u("")),"Success"===x.status&&(h(!1),u(""))}),[x,e]),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(F,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #35C4EF",minHeight:"16rem",height:"fit-content",backgroundImage:"url(/static/claimjuice/claim-juice-bg-3.jpg)",backgroundPosition:"center",backgroundSize:"cover",marginTop:"1rem"},children:[Object(J.jsxs)(o.a,{variant:"h4",style:{marginBottom:"0.4rem"},children:["Claim ",Object(J.jsx)("span",{style:{color:"#ffc900"},children:"$JUICE"})," from"," ",Object(J.jsx)("span",{style:{color:"#35C4EF"},children:"$XDROPS"})]}),Object(J.jsx)(o.a,{style:{marginTop:"-0.4rem",opacity:"0.6",marginBottom:"0.4rem"},children:"Claim the $JUICE from your $CDROP staking."}),Object(J.jsx)(y.a,{}),Object(J.jsx)(o.a,{style:{marginTop:"1.4rem"},children:"Available to claim:"}),Object(J.jsxs)(C.a,{direction:"row",alignItems:"center",style:{flexWrap:"wrap"},children:[Object(J.jsxs)(o.a,{variant:"h3",children:[c," $JUICE "]}),Object(J.jsx)("img",{src:"/static/claimjuice/JuiceLogo.svg",alt:"",style:{width:"2rem"}})]}),Object(J.jsx)(E.a,{color:"yellow",size:"large",variant:"contained",style:{marginTop:"4rem"},onClick:function(){h(!0),S(t.index,e,t.amount,t.proof)},disabled:m||w.a.parseEther(c).eq("0"),children:m?Object(J.jsx)(J.Fragment,{children:"CLAIMING ..."}):Object(J.jsx)(J.Fragment,{children:"CLAIM"})})]})})}var N=Object(c.a)(i.a)((function(e){var t=e.theme;return Object(r.a)(Object(r.a)({},t.typography.body2),{},{padding:t.spacing(2),color:t.palette.text.primary,height:"100%"})})),U=Object(c.a)(u.a.div)((function(e){e.theme;return{}}));function L(){var e=Object(b.a)().account,t=(Object(j.a)(),Object(d.a)().themeStretch);return Object(J.jsx)(m.a,{title:"Cryptodrop | Claim JUICE",style:{overflow:"hidden",marginTop:"-2.5rem"},children:Object(J.jsx)(s.a,{maxWidth:!t&&"xl",children:Object(J.jsxs)(U,{initial:"initial",animate:"animate",variants:h.h,children:[Object(J.jsx)(u.a.div,{variants:h.d,children:Object(J.jsx)("img",{src:"/static/claimjuice/ClaimJuice.svg",alt:"",style:{position:"fixed",opacity:"0.15",marginTop:"-1.5rem",marginLeft:"-1.5rem",zIndex:"-1",maxWidth:"60rem"}})}),Object(J.jsx)(u.a.div,{variants:h.f,children:Object(J.jsx)(o.a,{variant:"h3",component:"h1",paragraph:!0,children:"Claim your $JUICE Token"})}),Object(J.jsx)(u.a.div,{variants:h.f,children:Object(J.jsxs)(l.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:[Object(J.jsx)(l.a,{item:!0,xs:12,md:12,lg:7,xl:8,children:Object(J.jsxs)(N,{style:{display:"flex",flexDirection:"column",border:"0.25rem solid #35C4EF",backgroundImage:"url(/static/claimjuice/claimjuice-bg.jpg)",backgroundPosition:"center",height:"fit-content"},children:[Object(J.jsxs)(o.a,{paragraph:!0,children:["If you are a CDROP holder, please"," ",Object(J.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"CLAIM your $JUICE token"}),", you will receive 1:1.",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),"Juice token has been given birth, so we can apply a 10% tax so we can generate more BNB rewards to stakers and The Committee members.",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"Auto add Liquidity"})," will help maintain a healthy liquidity pool and Treasury will be used for operations and marketing.",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),"We are now ",Object(J.jsx)("span",{style:{color:"#35C4EF",fontWeight:"bold"},children:"ULTRA DEFLATIONARY"}),". We not only have deflationary on our games, but now every buy/sell will be have deflationary mechanics too. Making $JUICE scarce. \ud83e\uddc3"]}),Object(J.jsxs)("div",{style:{opacity:"0.6",background:"#0000002b",padding:"0.2rem 0.2rem",textAlign:"end",marginTop:"1rem",fontSize:"1rem"},children:["*$JUICE balance is based on your $CDROP balance at block number"," ",Object(J.jsxs)("a",{href:"https://bscscan.com/block/#".concat(g.O),target:"_blank",rel:"noreferrer",style:{color:"white"},children:["#",g.O]})]})]})}),e?Object(J.jsxs)(l.a,{item:!0,xs:12,md:12,lg:5,xl:4,children:[Object(J.jsx)(T,{}),Object(J.jsx)(A,{})]}):""]})}),Object(J.jsx)("object",{type:"image/svg+xml",data:"/static/claimjuice/waves-blue-animated.svg",style:{position:"fixed",bottom:"0",left:"0",zIndex:"-1",opacity:"0.2",width:"100%",minHeight:"20rem",objectFit:"cover"},children:"Clam"}),Object(J.jsx)("object",{type:"image/svg+xml",data:"/static/claimjuice/JuiceLogoAnimated.svg",style:{zIndex:"-1"},className:"juice-logo-animated",children:"$JUICE"})]})})})}}}]);