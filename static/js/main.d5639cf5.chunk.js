(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={registration__section:"RegisterForm_registration__section__1dEMR",registration__title:"RegisterForm_registration__title__1aDbi",registration__form:"RegisterForm_registration__form__2sRQL",registration__label:"RegisterForm_registration__label__3l2iV",registration__input:"RegisterForm_registration__input__1rIkD",registration__button:"RegisterForm_registration__button__3Wzzn"}},21:function(t,e,n){t.exports={login__section:"LoginForm_login__section__3P_DA",login__title:"LoginForm_login__title__3fL-K",login__form:"LoginForm_login__form__2j5u8",login__label:"LoginForm_login__label__1Xpx3",login__input:"LoginForm_login__input__1O8bq",login__button:"LoginForm_login__button__18t6m"}},25:function(t,e,n){"use strict";n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return _}));var a=n(11),r=n.n(a),c=n(20),o=n(17),s=n.n(o),i=n(4);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var u=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){s.a.defaults.headers.common.Authorization=""},b=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:a=e.sent,u(a.data.token),n(Object(i.l)(a.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.e)()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:a=e.sent,u(a.data.token),n(Object(i.f)(a.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.h)()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:l(),e(Object(i.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(i.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},_=function(){return function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n(),c=a.auth.token){t.next=3;break}return t.abrupt("return");case 3:return u(c),e(Object(i.b)()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:o=t.sent,e(Object(i.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(i.g)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},29:function(t,e,n){t.exports={header:"Header_header__2bJlH",header__nav:"Header_header__nav__1fxAl",logo__link:"Header_logo__link__1uEe1",user__wrapper:"Header_user__wrapper__29RIU",logo__link_active:"Header_logo__link_active__1uM33"}},31:function(t,e,n){t.exports={form:"ContactForm_form__3S6yc",label:"ContactForm_label__3cFa-",addContactBtn:"ContactForm_addContactBtn__3qj5M"}},32:function(t,e,n){t.exports={contactsItem:"ContactsListItem_contactsItem__fO_ZX",contactName:"ContactsListItem_contactName__1vNY9",contactsNumber:"ContactsListItem_contactsNumber__1VhvP",contactsButton:"ContactsListItem_contactsButton__YdWJt"}},33:function(t,e,n){t.exports={header__link:"AuthNav_header__link__2-cfZ",header__link_active:"AuthNav_header__link_active___ocUY"}},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3),r=Object(a.b)("updateFilterValue")},38:function(t,e,n){t.exports={nav_user:"UserNavMenu_nav_user__Q55pD",nav_user__name:"UserNavMenu_nav_user__name__20oWI",nav_user__button:"UserNavMenu_nav_user__button__Ycr7h"}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return c})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return m}));var a=n(3),r=Object(a.b)("auth/registerRequest"),c=Object(a.b)("auth/registerSuccess"),o=Object(a.b)("auth/registerError"),s=Object(a.b)("auth/loginRequest"),i=Object(a.b)("auth/loginSuccess"),u=Object(a.b)("auth/loginError"),l=Object(a.b)("auth/logoutRequest"),b=Object(a.b)("auth/logoutSuccess"),j=Object(a.b)("auth/logoutError"),d=Object(a.b)("auth/getCurrentRequest"),_=Object(a.b)("auth/getCurrentSuccess"),m=Object(a.b)("auth/getCurrentError")},41:function(t,e,n){t.exports={main_page__logo:"HomePageSection_main_page__logo__h7Tvf",main_page__text:"HomePageSection_main_page__text__2JPQ1"}},44:function(t,e,n){t.exports={filterContiner:"Filter_filterContiner__1mpKU",label:"Filter_label__35cYH"}},54:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__1VHY2"}},57:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(23),c=n(24),o=n(27),s=n(26),i=n(1),u=n(7),l=n(11),b=n.n(l),j=n(20),d=n(17),_=n.n(d),m=n(6),f=n(35),p=function(t){return t.contacts.items},h=function(t){return t.contacts.filter},O=function(t){return t.contacts.isLoading},g=Object(f.a)([p,h],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),x=n(31),v=n.n(x),C=n(0),y=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(a.a)({},r,c))},t.onFormSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number},a=t.props.contacts.findIndex((function(e){return e.name===t.state.name})),r=t.props.contacts.findIndex((function(e){return e.number===t.state.number}));return-1!==a?alert("".concat(t.state.name," is already in contacts")):-1!==r?alert("Phone number ".concat(t.state.number," is already in contacts")):(t.props.addContactOperation(n),void t.setState({name:"",number:""}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContactsOperation()}},{key:"render",value:function(){return Object(C.jsxs)("form",{className:v.a.form,onSubmit:this.onFormSubmit,children:[Object(C.jsxs)("label",{className:v.a.label,children:["Name",Object(C.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange})]}),Object(C.jsxs)("label",{className:v.a.label,children:["Phone number",Object(C.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange})]}),Object(C.jsx)("button",{className:v.a.addContactBtn,type:"submit",children:"Add contact"})]})}}]),n}(i.Component),k=Object(u.b)((function(t){return{contacts:p(t)}}),{addContactOperation:function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.b)()),e.prev=1,e.next=4,_.a.post("/contacts",t);case 4:a=e.sent,n(Object(m.c)(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(m.a)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},fetchContactsOperation:function(){return function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(m.e)()),t.prev=1,t.next=4,_.a.get("/contacts").then((function(t){return t.data}));case 4:if(!(n=t.sent).length){t.next=7;break}return t.abrupt("return");case 7:e(Object(m.f)(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(Object(m.d)(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}})(y),N=n(12),w=n(32),F=n.n(w),A=Object(u.b)(null,{removeContactOperation:function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.h)()),e.prev=1,e.next=4,_.a.delete("/contacts/".concat(t));case 4:n(Object(m.i)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(m.g)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(t){var e=t.name,n=t.number,a=t.id,r=t.removeContactOperation;return Object(C.jsxs)("li",{className:F.a.contactsItem,children:[Object(C.jsxs)("p",{className:F.a.contactName,children:[e,":",Object(C.jsx)("span",{className:F.a.contactsNumber,children:n})]}),Object(C.jsx)("button",{className:F.a.contactsButton,type:"button",onClick:function(){r(a)},children:"Delete"})]})})),L=n(54),S=n.n(L),P=n(8),H=Object(P.g)(Object(u.b)((function(t){return{filteredContacts:g(t),filterValue:h(t),isLoading:O(t)}}))((function(t){var e=t.isLoading,n=t.filteredContacts;return Object(C.jsx)(C.Fragment,{children:e?Object(C.jsx)("h1",{children:"Loading..."}):Object(C.jsx)("ul",{className:S.a.contactsList,children:n.map((function(t){return Object(C.jsx)(A,Object(N.a)(Object(N.a)({},t),{},{id:t.id}),t.id)}))})})}))),R=n(36),q=n(44),z=n.n(q),U=Object(u.b)((function(t){return{filterValue:h(t)}}),{updateFilterValue:R.a})((function(t){var e=t.updateFilterValue,n=t.filterValue;return Object(C.jsx)("div",{className:z.a.filterContiner,children:Object(C.jsxs)("label",{className:z.a.label,children:["Find contacts by name:",Object(C.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(t){e(t.target.value)}})]})})}));e.default=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k,{}),Object(C.jsx)(U,{}),Object(C.jsx)(H,{})]})}},59:function(t,e,n){"use strict";n.r(e);var a=n(41),r=n.n(a),c=n(0),o=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{className:r.a.main_page__logo,children:"MyPhonebook"}),Object(c.jsx)("p",{className:r.a.main_page__text,children:"Welcome! Please, login or register new account to continue."})]})};e.default=function(){return Object(c.jsx)(o,{})}},6:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return j}));var a=n(3),r=Object(a.b)("contacts/fetchContactsRequest"),c=Object(a.b)("contacts/fetchContactsSuccess"),o=Object(a.b)("contacts/fetchContactsError"),s=Object(a.b)("contacts/addContactRequest"),i=Object(a.b)("contacts/addContactSucces"),u=Object(a.b)("contacts/addContactError"),l=Object(a.b)("contacts/removeContacRequest"),b=Object(a.b)("contacts/removeContacSucces"),j=Object(a.b)("contacts/removeContacError")},60:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(23),c=n(24),o=n(27),s=n(26),i=n(1),u=n(7),l=n(25),b=n(21),j=n.n(b),d=n(0),_=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={email:"",password:""},t.onHandleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(a.a)({},r,c))},t.onFormSubmit=function(e){e.preventDefault(),t.props.loginUser(t.state),t.setState({name:"",password:""})},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:j.a.login__section,children:[Object(d.jsx)("h1",{className:j.a.login__title,children:"Login"}),Object(d.jsxs)("form",{className:j.a.login__form,onSubmit:this.onFormSubmit,children:[Object(d.jsx)("label",{className:j.a.login__label,htmlFor:"email",children:"E-mail:"}),Object(d.jsx)("input",{className:j.a.login__input,type:"text",name:"email",value:this.state.email,required:!0,onChange:this.onHandleChange}),Object(d.jsx)("label",{className:j.a.login__label,htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{className:j.a.login__input,type:"password",name:"password",value:this.state.password,required:!0,onChange:this.onHandleChange}),Object(d.jsx)("button",{className:j.a.login__button,type:"submit",children:"Login"})]})]})}}]),n}(i.Component),m=Object(u.b)(null,{loginUser:l.b})(_);e.default=function(){return Object(d.jsx)(m,{})}},61:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(23),c=n(24),o=n(27),s=n(26),i=n(1),u=n(7),l=n(25),b=n(16),j=n.n(b),d=n(0),_=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={name:"",email:"",password:"",repeatedPassword:""},t.onHandleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(a.a)({},r,c))},t.onFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.email,c=n.password;if(c===n.repeatedPassword){var o={name:a,email:r,password:c};t.props.registerUser(o),t.setState({name:"",email:"",password:"",repeatedPassword:""})}else alert("Passwords is not matching!")},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:j.a.registration__section,children:[Object(d.jsx)("h1",{className:j.a.registration__title,children:"Registration"}),Object(d.jsxs)("form",{className:j.a.registration__form,onSubmit:this.onFormSubmit,children:[Object(d.jsx)("label",{className:j.a.registration__label,htmlFor:"name",children:"Username:"}),Object(d.jsx)("input",{className:j.a.registration__input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Username \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange}),Object(d.jsx)("label",{className:j.a.registration__label,htmlFor:"email",children:"E-mail:"}),Object(d.jsx)("input",{className:j.a.registration__input,type:"text",name:"email",value:this.state.email,required:!0,onChange:this.onHandleChange}),Object(d.jsx)("label",{className:j.a.registration__label,htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{className:j.a.registration__input,type:"password",name:"password",value:this.state.password,required:!0,onChange:this.onHandleChange}),Object(d.jsx)("label",{className:j.a.registration__label,htmlFor:"repeatedPassword",children:"Repeat your password:"}),Object(d.jsx)("input",{className:j.a.registration__input,type:"password",name:"repeatedPassword",value:this.state.repeatedPassword,required:!0,onChange:this.onHandleChange}),Object(d.jsx)("button",{className:j.a.registration__button,type:"submit",children:"Register"})]})]})}}]),n}(i.Component),m=Object(u.b)(null,{registerUser:l.d})(_);e.default=function(){return Object(d.jsx)(m,{})}},66:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var a,r,c,o,s,i,u,l=n(1),b=n.n(l),j=n(34),d=n.n(j),_=(n(66),n(23)),m=n(24),f=n(27),p=n(26),h=n(7),O=n(25),g=n(19),x=function(t){return t.auth.isAuthenticated},v=function(t){return t.auth.user.name},C=n(59),y=n(60),k=n(57),N={register:{name:"Register",path:"/register",component:n(61).default,exact:!1,redirectTo:"/contacts"},login:{name:"Login",path:"/login",component:y.default,exact:!1,redirectTo:"/contacts"}},w={name:"Homepage",path:"/",component:C.default,exact:!0},F={name:"Phonebook",path:"/contacts",component:k.default,exact:!1,redirectTo:"/"},A=n(33),L=n.n(A),S=n(0),P=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(g.b,{className:L.a.header__link,activeClassName:L.a.header__link_active,to:N.register.path,children:N.register.name}),Object(S.jsx)(g.b,{className:L.a.header__link,activeClassName:L.a.header__link_active,to:N.login.path,children:N.login.name})]})},H=n(38),R=n.n(H),q=Object(h.b)((function(t){return{username:v(t)}}),{logoutUser:O.c})((function(t){var e=t.username,n=t.logoutUser;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("p",{className:R.a.nav_user,children:["Welcome, ",Object(S.jsx)("span",{className:R.a.nav_user__name,children:e})]}),Object(S.jsx)("button",{className:R.a.nav_user__button,type:"button",onClick:n,children:"Logout"})]})})),z=n(29),U=n.n(z),T=Object(h.b)((function(t){return{isAuthenticated:x(t)}}))((function(t){var e=t.isAuthenticated;return Object(S.jsx)("header",{className:U.a.header,children:Object(S.jsxs)("nav",{className:U.a.header__nav,children:[Object(S.jsx)(g.b,{className:U.a.logo__link,activeClassName:U.a.logo__link_active,to:F.path,children:F.name}),Object(S.jsx)("div",{className:U.a.user__wrapper,children:e?Object(S.jsx)(q,{}):Object(S.jsx)(P,{})})]})})})),I=n(8),E=n(12),M=n(37),B=["component","isAuthenticated","redirectTo"],D=Object(h.b)((function(t){return{isAuthenticated:x(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,a=t.redirectTo,r=Object(M.a)(t,B);return Object(S.jsx)(I.b,Object(E.a)(Object(E.a)({},r),{},{render:function(t){return n?Object(S.jsx)(e,Object(E.a)({},t)):Object(S.jsx)(I.a,{to:a})}}))})),V=["component","isAuthenticated","redirectTo"],Z=Object(h.b)((function(t){return{isAuthenticated:x(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,a=t.redirectTo,r=Object(M.a)(t,V);return Object(S.jsx)(I.b,Object(E.a)(Object(E.a)({},r),{},{render:function(t){return n&&r.restricted?Object(S.jsx)(I.a,{to:a}):Object(S.jsx)(e,Object(E.a)({},t))}}))})),J=Object(l.lazy)((function(){return Promise.resolve().then(n.bind(null,59))})),Y=Object(l.lazy)((function(){return Promise.resolve().then(n.bind(null,57))})),W=Object(l.lazy)((function(){return Promise.resolve().then(n.bind(null,61))})),Q=Object(l.lazy)((function(){return Promise.resolve().then(n.bind(null,60))})),K=function(){return Object(S.jsx)("main",{children:Object(S.jsx)(l.Suspense,{fallback:Object(S.jsx)("h2",{children:"Loading..."}),children:Object(S.jsxs)(I.d,{children:[Object(S.jsx)(Z,{path:w.path,component:J,exact:w.exact}),Object(S.jsx)(D,{path:F.path,component:Y,redirectTo:F.redirectTo,exact:F.exact}),Object(S.jsx)(Z,{path:N.register.path,component:W,exact:N.register.exact,restricted:!0,redirectTo:N.register.redirectTo}),Object(S.jsx)(Z,{path:N.login.path,component:Q,exact:N.login.exact,restricted:!0,redirectTo:N.register.redirectTo})]})})})},X=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){return Object(_.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T,{}),Object(S.jsx)(K,{})]})}}]),n}(l.Component),$=Object(h.b)(null,{getCurrentUser:O.a})(X),G=n(55),tt=n(3),et=n(2),nt=n(9),at=n(4),rt=Object(tt.c)({name:"",email:""},(a={},Object(et.a)(a,at.l,(function(t,e){return e.payload.user})),Object(et.a)(a,at.f,(function(t,e){return e.payload.user})),Object(et.a)(a,at.i,(function(){})),Object(et.a)(a,at.c,(function(t,e){return e.payload})),a)),ct=Object(tt.c)(null,(r={},Object(et.a)(r,at.l,(function(t,e){return e.payload.token})),Object(et.a)(r,at.f,(function(t,e){return e.payload.token})),Object(et.a)(r,at.i,(function(t,e){e.payload;return null})),r)),ot=function(t,e){return e.payload},st=Object(tt.c)("",(c={},Object(et.a)(c,at.j,ot),Object(et.a)(c,at.d,ot),Object(et.a)(c,at.g,ot),Object(et.a)(c,at.a,ot),c)),it=Object(tt.c)(!1,(o={},Object(et.a)(o,at.l,(function(){return!0})),Object(et.a)(o,at.j,(function(){return!1})),Object(et.a)(o,at.f,(function(){return!0})),Object(et.a)(o,at.d,(function(){return!1})),Object(et.a)(o,at.i,(function(){return!1})),Object(et.a)(o,at.c,(function(){return!0})),Object(et.a)(o,at.a,(function(){return!1})),o)),ut=Object(nt.b)({user:rt,isAuthenticated:it,token:ct,error:st}),lt=n(22),bt=n(56),jt=n.n(bt),dt=n(58),_t=n(6),mt=Object(tt.c)([],(s={},Object(et.a)(s,_t.f,(function(t,e){return e.payload})),Object(et.a)(s,_t.c,(function(t,e){var n=e.payload;return[].concat(Object(dt.a)(t),[n])})),Object(et.a)(s,_t.i,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),s)),ft=(Object(tt.c)("",(i={},Object(et.a)(i,_t.d,(function(t,e){return e.payload})),Object(et.a)(i,_t.a,(function(t,e){return e.payload})),Object(et.a)(i,_t.g,(function(t,e){return e.payload})),i)),Object(tt.c)(!1,(u={},Object(et.a)(u,_t.e,(function(){return!0})),Object(et.a)(u,_t.f,(function(){return!1})),Object(et.a)(u,_t.d,(function(){return!1})),Object(et.a)(u,_t.b,(function(){return!0})),Object(et.a)(u,_t.c,(function(){return!1})),Object(et.a)(u,_t.a,(function(){return!1})),Object(et.a)(u,_t.h,(function(){return!0})),Object(et.a)(u,_t.i,(function(){return!1})),Object(et.a)(u,_t.g,(function(){return!1})),u))),pt=n(36),ht=Object(tt.c)("",Object(et.a)({},pt.a,(function(t,e){return e.payload}))),Ot=Object(nt.b)({items:mt,filter:ht,isLoading:ft}),gt={key:"token",storage:jt.a,whitelist:["token"]},xt=Object(tt.a)({reducer:{auth:Object(lt.g)(gt,ut),contacts:Ot},middleware:Object(tt.d)({serializableCheck:{ignoredActions:[lt.a,lt.f,lt.b,lt.c,lt.d,lt.e]}})}),vt={store:xt,persistor:Object(lt.h)(xt)};d.a.render(Object(S.jsx)(b.a.StrictMode,{children:Object(S.jsx)(h.a,{store:vt.store,children:Object(S.jsx)(G.a,{loading:null,persistor:vt.persistor,children:Object(S.jsx)(g.a,{children:Object(S.jsx)($,{})})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.d5639cf5.chunk.js.map