(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{163:function(e,a,t){e.exports=t(309)},305:function(e,a,t){},309:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),m=t.n(l),o=(t(67),t(159)),c=t(14),i=(t(85),t(311)),s=t(313),u=t(314),E=t(111),d=t(315),p=t(316),h=function(){return r.a.createElement(i.a,{name:"normal_login",className:"center login-form",initialValues:{remember:!0},onFinish:function(e){console.log("Received values of form: ",e)}},r.a.createElement(i.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(s.a,{prefix:r.a.createElement(d.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(i.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(s.a,{prefix:r.a.createElement(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(i.a.Item,null,r.a.createElement(i.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(u.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),r.a.createElement(i.a.Item,null,r.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in")," "," Or ",r.a.createElement("a",{href:"/sign-up"},"register now!")))},k=t(160),y=function(){var e=i.a.useForm(),a=Object(k.a)(e,1)[0];return r.a.createElement(i.a,{className:"center",form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},scrollToFirstError:!0},r.a.createElement(i.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(s.a,{placeholder:"E-mail"})),r.a.createElement(i.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(s.a.Password,{placeholder:"Password"})),r.a.createElement(i.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(s.a.Password,{placeholder:"Confirm Password"})),r.a.createElement(i.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!",whitespace:!0}]},r.a.createElement(s.a,{placeholder:"Username"})),r.a.createElement(i.a.Item,{name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject("Should accept agreement")}}]},r.a.createElement(u.a,null,"I have read the ",r.a.createElement("a",{href:""},"agreement"))),r.a.createElement(i.a.Item,null,r.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Register")))},f=t(310),g=t(312),I=t(317),v=f.a.Header,w=f.a.Content,x=f.a.Footer,C=f.a.Sider,P=function(){return r.a.createElement(f.a,null,r.a.createElement(C,{style:{maxWidth:"250px",minWidth:"250px",width:"250px",height:"100vh",position:"fixed",left:"0px"}},r.a.createElement(g.a,{theme:"dark",mode:"inline"},r.a.createElement("div",{className:"logo"}),r.a.createElement(g.a.Item,{key:"new",icon:r.a.createElement(I.a,null)},"New")),r.a.createElement(g.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["all"],style:{overflow:"auto",height:"85vh"}},r.a.createElement(g.a.Item,{key:"all"},"All"),r.a.createElement(g.a.Item,{key:"1"},"Clink 1"),r.a.createElement(g.a.Item,{key:"2"},"Clink 2"),r.a.createElement(g.a.Item,{key:"3"},"Clink 3"),r.a.createElement(g.a.Item,{key:"4"},"Clink 4"),r.a.createElement(g.a.Item,{key:"5"},"Clink 5"),r.a.createElement(g.a.Item,{key:"6"},"Clink 6"),r.a.createElement(g.a.Item,{key:"7"},"Clink 7"),r.a.createElement(g.a.Item,{key:"8"},"Clink 8"),r.a.createElement(g.a.Item,{key:"9"},"Clink 9"),r.a.createElement(g.a.Item,{key:"10"},"Clink 10"),r.a.createElement(g.a.Item,{key:"11"},"Clink 11"),r.a.createElement(g.a.Item,{key:"12"},"Clink 12"),r.a.createElement(g.a.Item,{key:"13"},"Clink 13"),r.a.createElement(g.a.Item,{key:"14"},"Clink 14"),r.a.createElement(g.a.Item,{key:"15"},"Clink 15"),r.a.createElement(g.a.Item,{key:"16"},"Clink 16"),r.a.createElement(g.a.Item,{key:"17"},"Clink 17"),r.a.createElement(g.a.Item,{key:"18"},"Clink 18"))),r.a.createElement(f.a,{className:"site-layout",style:{marginLeft:"200px"}},r.a.createElement(v,{style:{position:"relative",height:"153px"}}),r.a.createElement(w,{style:{position:"relative",margin:"24px 16px 0",overflow:"initial"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:"24px",textAlign:"center"}})),r.a.createElement(x,{style:{textAlign:"center"}},"Clink")))},b=function(){return r.a.createElement("div",null,"Home")},N=function(){return r.a.createElement("div",null,"404 - Not Found")},F=function(){return r.a.createElement("div",null,"Users")};t(305);var q=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/login",component:h}),r.a.createElement(c.a,{exact:!0,path:"/sign-up",component:y}),r.a.createElement(c.a,{exact:!0,path:"/dashboard",component:P}),r.a.createElement(c.a,{exact:!0,path:"/",component:b}),r.a.createElement(c.a,{exact:!0,path:"/users",component:F}),r.a.createElement(c.a,{component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,a,t){}},[[163,1,2]]]);
//# sourceMappingURL=main.04de472e.chunk.js.map