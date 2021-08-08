(this.webpackJsonpexpense_tracker=this.webpackJsonpexpense_tracker||[]).push([[0],{25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),r=a.n(s),o=(a(25),a(0));function i(){return Object(o.jsx)("header",{children:"Expense Tracker"})}var l=a(4),u=a(5),d=a.n(u),j=a(8),b=a(9),O=a.n(b),p=a(2),h=a(20),m=function(e,t){var a=[];switch(t.type){case"ADD_TRAN":return a=[].concat(Object(h.a)(e.transactions),[t.payload]),Object(p.a)(Object(p.a)({},e),{},{transactions:a,isLoading:!1});case"REMOVE_TRAN":return a=e.transactions.filter((function(e){return e._id!==t.payload})),console.log({newTransactions:a}),Object(p.a)(Object(p.a)({},e),{},{transactions:a,isLoading:!1});case"TRANSACTIONS":return Object(p.a)(Object(p.a)({},e),{},{transactions:t.payload,isLoading:!1});case"OPEN_ALERT":return Object(p.a)(Object(p.a)({},e),{},{alertMessage:t.payload.message,alertType:t.payload.type,showAlert:!0});case"CLOSE_ALERT":return Object(p.a)(Object(p.a)({},e),{},{alertMessage:"",alertType:"",showAlert:!1});default:return e}};function x(e){var t=e.message,a=e.type,c=e.closeAlert;return console.log("I am the alert!!"),Object(n.useEffect)((function(){console.log({type:a}),setTimeout((function(){return c()}),3e3)})),Object(o.jsx)("div",{className:"alert ".concat(a&&"green"),children:t})}var f={transactions:[],isLoading:!0,showAlert:!1,alertMessage:"",alertType:!1},v=Object(n.createContext)(f),g=function(e){var t=e.children,a=Object(n.useReducer)(m,f),c=Object(l.a)(a,2),s=c[0],r=c[1],i=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("/api/v1/transaction/".concat(t));case 3:r({type:"REMOVE_TRAN",payload:t}),p("Transaction Removed",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Err",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/v1/transaction",JSON.stringify(t),{headers:{"Content-Type":"application/json"}});case 3:a=e.sent,n=a.data,c=n.data.transaction,r({type:"ADD_TRAN",payload:c}),p("Transaction Added",!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("err",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/v1/transactions");case 3:t=e.sent,a=t.data,n=a.data.transactions,console.log(n),r({type:"TRANSACTIONS",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("err",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){console.log("calling transaction again!!"),b()}),[]);var p=function(e,t){r({type:"OPEN_ALERT",payload:{message:e,type:t}})};return console.log("re-rendering global state"),Object(o.jsxs)(v.Provider,{value:{transactions:s.transactions,removeTransaction:i,addTransaction:u,openAlert:p,isLoading:s.isLoading},children:[s.showAlert&&Object(o.jsx)(x,{message:s.alertMessage,type:s.alertType,closeAlert:function(){console.log("close alert!!"),r({type:"CLOSE_ALERT"})}}),t]})};function y(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function N(){var e=Object(n.useContext)(v).transactions,t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){var t=e.reduce((function(e,t){return e+parseFloat(t.amount)}),0);s(t)}),[e]),Object(o.jsxs)("section",{className:"balance",children:[Object(o.jsx)("div",{className:"head",children:"Your Balance:"}),Object(o.jsxs)("main",{className:"".concat(c>=0?"green":"red"),children:["$",y(Math.abs(c).toFixed(2))]})]})}function T(){var e=Object(n.useContext)(v).transactions,t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(0),i=Object(l.a)(r,2),u=i[0],d=i[1];return Object(n.useEffect)((function(){var t=e.reduce((function(e,t){return t.amount>0&&(e+=t.amount),e}),0),a=e.reduce((function(e,t){return t.amount<0&&(e+=t.amount),e}),0);s(t),d(a)}),[e]),Object(o.jsxs)("section",{className:"gross",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"head",children:"Income"}),Object(o.jsxs)("main",{className:"green",children:["$",y(Math.abs(c).toFixed(2))]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"head",children:"Expense"}),Object(o.jsxs)("main",{className:"red",children:["$",y(Math.abs(u).toFixed(2))]})]})]})}function A(e){var t=e._id,a=e.title,n=e.amount,c=e.removeTransaction;return Object(o.jsxs)("div",{className:"historyCard ".concat(n>0?"green":"red"),children:[Object(o.jsx)("div",{className:"head",children:a}),Object(o.jsxs)("div",{className:"amt",children:["$",y(Math.abs(n).toFixed(2))]}),Object(o.jsx)("button",{className:"historyCard-btn",onClick:function(){return c(t)},children:"X"})]})}function E(){var e=Object(n.useContext)(v),t=e.transactions,a=e.removeTransaction,c=e.isLoading;return console.log(t),Object(o.jsxs)("section",{className:"history",children:[Object(o.jsx)("div",{className:"head",children:"History"}),Object(o.jsx)("main",{children:c?"Loading...":t.length>0?t.map((function(e){return Object(o.jsx)(A,Object(p.a)(Object(p.a)({},e),{},{removeTransaction:a}),e._id)})):"No transactions."})]})}function C(){var e=Object(n.useContext)(v),t=e.addTransaction,a=e.openAlert,c=Object(n.useState)(""),s=Object(l.a)(c,2),r=s[0],i=s[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),j=d[0],b=d[1];return Object(o.jsxs)("section",{className:"add",children:[Object(o.jsx)("div",{className:"head",children:"Add Transaction"}),Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==r&&""!==j)if(isNaN(j))a("Please enter a valid amount.",!1);else{var n={amount:parseFloat(j).toFixed(2),title:r};t(n),i(""),b("")}else a("Title or amount can't be empty.",!1)},children:[Object(o.jsx)("label",{htmlFor:"title",className:"head",children:"Title:"}),Object(o.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"What for? (e.g. Cash, Books, Food)",onChange:function(e){return i(e.target.value)},value:r}),Object(o.jsx)("label",{htmlFor:"amount",className:"head",children:"Amount:"}),Object(o.jsx)("input",{type:"text",id:"amount",name:"amount",placeholder:"(e.g. '-10.0':Expense,'+10.00':Income)",value:j,onChange:function(e){b(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"btn",children:"Add"})]})]})}function S(){return Object(o.jsx)(g,{children:Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"tracker",children:[Object(o.jsx)(i,{}),Object(o.jsx)(N,{}),Object(o.jsx)(T,{}),Object(o.jsx)(E,{}),Object(o.jsx)(C,{})]})})})}r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.82963a30.chunk.js.map