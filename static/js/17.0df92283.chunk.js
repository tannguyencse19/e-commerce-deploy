(this.webpackJsonpecommerce4=this.webpackJsonpecommerce4||[]).push([[17],{170:function(e,t,c){"use strict";c.r(t);var n=c(147),a=c.n(n),s=c(148),r=c(60),o=c(0),i=c.n(o),h=c(160),u=c(161),j=c(69),l=c(51),p=c(4),b=function(){Object(h.useElements)(),Object(h.useStripe)();var e=i.a.useState(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],o=i.a.useState(!1),u=Object(r.a)(o,2),b=u[0],m=u[1],O=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!0),m(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(l.a,{mx:"72",my:"20",p:"10",boxShadow:"md",children:[Object(p.jsx)(h.PaymentElement,{}),Object(p.jsx)("p",{children:"4242 4242 4242 4242 4/24 2424"}),Object(p.jsx)(j.a,{colorScheme:"facebook",onClick:O,isLoading:c,children:"Pay"}),b&&Object(p.jsx)("h1",{children:"Your transaction has been proceed"})]})};t.default=function(){var e=i.a.useState(""),t=Object(r.a)(e,2),c=t[0],n=t[1];i.a.useEffect((function(){fetch("http://localhost:4000/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:"xl-tshirt"}]})}).then((function(e){return e.json()})).then((function(e){console.log(e),n(e.clientSecret)}))}),[]);var a={clientSecret:c,appearance:{theme:"night"}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("form",{action:"http://localhost:4000/create-checkout-session",method:"post",children:Object(p.jsx)(j.a,{type:"submit",colorScheme:"teal",children:"Checkout"})}),c&&Object(p.jsx)(h.Elements,{options:a,stripe:Object(u.a)("pk_test_51JwOnqCfzSDSrzbXmzkPjCFFaRbzqwsegiWaEj3QuiXavo4u2nsBQUqRcypKtRJ0DUlvL93MP5hQI6xCdw7fLOwK00OGQELNfB"),children:Object(p.jsx)(b,{})})]})}}}]);
//# sourceMappingURL=17.0df92283.chunk.js.map