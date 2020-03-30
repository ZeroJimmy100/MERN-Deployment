(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(18),r=n.n(o),i=(n(25),n(2)),c=n(1),u=n(3),p=n.n(u),s=(n(17),function(e){var t=e.pollsId,n=e.question,a=e.successCallback;return l.a.createElement("button",{id:"delete",onClick:function(e){p.a.delete("http://localhost:8000/api/polls/"+t).then((function(e){a()})),alert("Poll "+n+" got deleted")}},"Delete ",n)}),m=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),o=n[0],r=n[1];Object(a.useEffect)((function(){p.a.get("http://localhost:8000/api/polls").then((function(e){return r(e.data.sort((function(e,t){return e.createdAt<t.createdAt?1:t.createdAt<e.createdAt?-1:0})))}))}),[o]);return l.a.createElement("div",null,l.a.createElement("div",{id:"First"},l.a.createElement("h3",null,"Top 3 Polls: "),o.slice(0,3).map((function(e,t){return l.a.createElement("p",{key:t},l.a.createElement(l.a.Fragment,null,e.question," "),"|",l.a.createElement(i.a,{to:"/polls/"+e._id+"/vote"},"vote"),"|",l.a.createElement(i.a,{to:"/polls/"+e._id+"/edit",poll:o.question},"edit poll"))}))),l.a.createElement("div",{id:"Second"},l.a.createElement("h3",null,"All Polls"),o.map((function(e,t){return l.a.createElement("p",{key:t},l.a.createElement(l.a.Fragment,null,e.question," "),"|",l.a.createElement(i.a,{to:"/polls/"+e._id+"/vote"},"vote"),"|",l.a.createElement(i.a,{to:"/polls/"+e._id+"/edit",poll:o.question},"edit poll"))}))))},h=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),u=Object(c.a)(r,2),s=u[0],h=u[1];Object(a.useEffect)((function(){p.a.get("http://localhost:8000/api/polls").then((function(e){o(e.data),h(!0)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Voting Dojo"),l.a.createElement(i.a,{to:"/polls/new"},"Add a new Poll"),s&&l.a.createElement(m,{polls:n,removeFromDom:function(e){o(n.filter((function(t){return t._id!==e})))}}))},E=function(e){var t=e.initialQuestion,n=e.initialOne,o=e.initialTwo,r=e.initialThree,u=e.initialFour,p=e.onSubmitProp,s=Object(a.useState)(t,{errorQuestion:"",errorValid:""}),m=Object(c.a)(s,2),h=m[0],E=m[1],b=Object(a.useState)(n,{errorOne:""}),d=Object(c.a)(b,2),O=d[0],f=d[1],v=Object(a.useState)(o,{errorTwo:""}),j=Object(c.a)(v,2),g=j[0],T=j[1],w=Object(a.useState)(r),S=Object(c.a)(w,2),q=S[0],k=S[1],F=Object(a.useState)(u),_=Object(c.a)(F,2),y=_[0],C=_[1];return l.a.createElement("div",null,l.a.createElement(i.a,{to:"/"},"back to home"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),1!=h.unique&&E({errorValid:"Question must be unique"}),h.length<=10&&E({errorQuestion:"Question must be at least 10 characters or more"}),0==h.length&&E({errorQuestion:"Question is required"}),0==O.length&&f({errorOne:"Option 1 is required"}),0==g.length&&T({errorTwo:"Option 2 is required"}),h.length>=3&&O.length>0&&g.length>0&&1==h.unique&&(p({question:h,optionOne:O,optionTwo:g,optionThree:q,optionFour:y}),Object(i.c)("/"))}},l.a.createElement("p",null,l.a.createElement("label",null,"Question:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"question",value:h,onChange:function(e){E(e.target.value)}})),l.a.createElement("p",null,h.errorQuestion),l.a.createElement("p",null,h.errorValid),l.a.createElement("p",null,l.a.createElement("label",null,"Option 1:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"optionOne",value:O,onChange:function(e){f(e.target.value)}})),l.a.createElement("p",null,O.errorOne),l.a.createElement("p",null,l.a.createElement("label",null,"Option 2:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"optionTwo",value:g,onChange:function(e){T(e.target.value)}})),l.a.createElement("p",null,g.errorTwo),l.a.createElement("p",null,l.a.createElement("label",null,"Option 3:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"optionThree",value:q,onChange:function(e){k(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Option 4:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"optionFour",value:y,onChange:function(e){C(e.target.value)}})),l.a.createElement("input",{type:"submit"})))},b=function(e){var t=Object(a.useState)({}),n=Object(c.a)(t,2),o=(n[0],n[1],Object(a.useState)([])),r=Object(c.a)(o,2),i=r[0],u=r[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Voting Dojo"),i.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement(E,{onSubmitProp:function(e){p.a.post("http://localhost:8000/api/polls/new",e).then((function(e){console.log(e.data)})).catch((function(e){for(var t=e.response.data.errors,n=[],a=0,l=Object.keys(t);a<l.length;a++){var o=l[a];n.push(t[o].message)}u(n)}))},initialQuestion:"",initialOne:"",initialTwo:"",initialThree:"",initialFour:""}))},d=n(6),O=function(e){var t=Object(a.useState)({}),n=Object(c.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(!0),m=Object(c.a)(u,2);m[0],m[1];return Object(a.useEffect)((function(){p.a.get("http://localhost:8000/api/polls/"+e.id).then((function(e){return r(Object(d.a)({},e.data))}))}),[]),l.a.createElement("div",null,l.a.createElement(i.a,{to:"/"},"back to home"),l.a.createElement(s,{pollsId:o._id,question:o.question,successCallback:function(){return Object(i.c)("/")}}),l.a.createElement("h3",null,o.question),l.a.createElement("p",null,o.optionOne," ",o.voteOne," votes"),l.a.createElement("p",null,o.optionTwo," ",o.voteTwo," votes"),l.a.createElement("p",null,o.optionThree," ",o.voteThree," votes"),l.a.createElement("p",null,o.optionFour," ",o.voteFour," votes"))},f=function(e){var t=e.id,n=Object(a.useState)({}),o=Object(c.a)(n,2),r=o[0],i=o[1],u=Object(a.useState)(!1),s=Object(c.a)(u,2),m=s[0],h=s[1],b=Object(a.useState)([]),d=Object(c.a)(b,2);d[0],d[1];Object(a.useEffect)((function(){p.a.get("http://localhost:8000/api/polls/"+t).then((function(e){i(e.data),h(!0)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h4",null,r.question),m&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{initialQuestion:r.question,initialOne:r.optionOne,initialTwo:r.optionTwo,initialThree:r.optionThree,initialFour:r.optionFour,onSubmitProp:function(e){p.a.put("http://localhost:8000/api/polls/"+t,e).then((function(e){console.log(e)}))}})))},v=function(e){var t=Object(a.useState)({}),n=Object(c.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(!0),s=Object(c.a)(u,2),m=(s[0],s[1]);Object(a.useEffect)((function(){p.a.get("http://localhost:8000/api/polls/"+e.id).then((function(e){return r(Object(d.a)({},e.data))}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Voting Dojo"),l.a.createElement("h3",null,o.question),l.a.createElement("h4",null,o.optionOne," ",l.a.createElement("button",{onClick:function(e){e.preventDefault(),p.a.put("http://localhost:8000/api/polls/"+o._id,{voteOne:o.voteOne+1}),m(!1),Object(i.c)("/polls/"+o._id)}},"Vote ",o.optionOne)),l.a.createElement("h4",null,o.optionTwo," ",l.a.createElement("button",{onClick:function(e){e.preventDefault(),p.a.put("http://localhost:8000/api/polls/"+o._id,{voteTwo:o.voteTwo+1}),m(!1),Object(i.c)("/polls/"+o._id)}},"Vote ",o.optionTwo)),l.a.createElement("h4",null,o.optionThree," ",l.a.createElement("button",{onClick:function(e){e.preventDefault(),p.a.put("http://localhost:8000/api/polls/"+o._id,{voteThree:o.voteThree+1}),m(!1),Object(i.c)("/polls/"+o._id)}},o.optionThree)),l.a.createElement("h4",null,o.optionFour," ",l.a.createElement("button",{onClick:function(e){e.preventDefault(),p.a.put("http://localhost:8000/api/polls/"+o._id,{voteFour:o.voteFour+1}),m(!1),Object(i.c)("/polls/"+o._id)}},o.optionFour)))};var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.b,null,l.a.createElement(h,{path:"/"}),l.a.createElement(b,{path:"polls/new"}),l.a.createElement(O,{path:"polls/:id"}),l.a.createElement(f,{path:"polls/:id/edit"}),l.a.createElement(v,{path:"polls/:id/vote"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a7e6fec6.chunk.js.map