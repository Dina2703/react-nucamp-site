(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{100:function(e,t,s){},154:function(e,t,s){},155:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),r=s(16),n=s.n(r),o=(s(100),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,183)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))}),i=(s(101),s(102),s(103),s(104),s(105),s(20)),l=s(21),j=s(23),d=s(22),m=s(156),h=s(157),b=s(158),u=s(159),O=s(160),x=s(161),p=s(11),f=s(0),g=function(){return Object(f.jsxs)("div",{className:"col",children:[Object(f.jsx)("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(f.jsx)("p",{children:"Loading..."})]})},N="http://localhost:3001/";function v(e){var t=e.campsite;return Object(f.jsx)(m.a,{children:Object(f.jsxs)(p.b,{to:"/directory/".concat(t.id),children:[Object(f.jsx)(h.a,{width:"100%",src:N+t.image,alt:t.name}),Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{children:t.name})})]})})}var y=function(e){var t=e.campsites.campsites.map((function(e){return Object(f.jsx)("div",{className:"col-md-5 m-1",children:Object(f.jsx)(v,{campsite:e})},e.id)}));return e.campsites.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(g,{})})}):e.campsites.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("h4",{children:e.campsites.errMess})})})}):Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(p.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"Directory"})]}),Object(f.jsx)("h2",{children:"Directory"}),Object(f.jsx)("hr",{})]})}),Object(f.jsx)("div",{className:"row",children:t})]})},w=s(162),M=s(182),k=s(163),L=s(164),C=s(165),F=s(166),S=s(167),E=s(9),T=s(38),I=function(e){return function(t){return(null===t||void 0===t?void 0:t.length)<=e}},A=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isModalOpen:!1},e.toggleModal=function(){e.setState({isModalOpen:!e.state.isModalOpen})},e.handleSubmit=function(t){e.props.postComment(e.props.campsiteId,t.rating,t.author,t.text),e.toggleModal()},e}return Object(l.a)(s,[{key:"render",value:function(){var e,t=this;return Object(f.jsxs)("div",{children:[Object(f.jsxs)(w.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("i",{className:"fa fa-lg fa-pencil"})," Submit Comment"]}),Object(f.jsxs)(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(k.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(f.jsx)(L.a,{children:Object(f.jsxs)(E.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"rating",children:"Rating"}),Object(f.jsxs)(E.Control.select,{defaultValue:"1",id:"rating",model:".rating",name:"rating",className:"form-control",children:[Object(f.jsx)("option",{children:"1"}),Object(f.jsx)("option",{children:"2"}),Object(f.jsx)("option",{children:"3"}),Object(f.jsx)("option",{children:"4"}),Object(f.jsx)("option",{children:"5"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"author",children:"Your Name"}),Object(f.jsx)(E.Control.text,{id:"author",model:".author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=2,function(t){return(null===t||void 0===t?void 0:t.length)>=e}),maxLength:I(15)}}),Object(f.jsx)(E.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"text",children:"Comment"}),Object(f.jsx)(E.Control.textarea,{id:"text",model:".text",name:"text",rows:"6",className:"form-control"})]}),Object(f.jsx)(w.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(a.a.Component);function D(e){var t=e.campsite;return Object(f.jsx)("div",{className:"col-md-5 m-1",children:Object(f.jsx)(T.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{top:!0,src:N+t.image,alt:t.name}),Object(f.jsx)(F.a,{children:Object(f.jsx)(S.a,{children:t.description})})]})})})}function P(e){var t=e.comments,s=e.postComment,c=e.campsiteId;return t?Object(f.jsxs)("div",{className:"col-md-5 m-1",children:[Object(f.jsx)("h4",{children:"Comments"}),Object(f.jsx)(T.Stagger,{in:!0,children:t.map((function(e){return Object(f.jsx)(T.Fade,{in:!0,children:Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:Object(f.jsxs)("em",{children:[e.text," ",Object(f.jsx)("br",{}),"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})})})},e.id)}))}),Object(f.jsx)(A,{campsiteId:c,postComment:s})]}):Object(f.jsx)("div",{})}var q=function(e){return e.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(g,{})})}):e.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("h4",{children:e.errMess})})})}):e.campsite?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(p.b,{to:"/directory",children:"Directory"})}),Object(f.jsx)(x.a,{active:!0,children:e.campsite.name})]}),Object(f.jsx)("h2",{children:e.campsite.name}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)(D,{campsite:e.campsite}),Object(f.jsx)(P,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id})]})]}):Object(f.jsx)("div",{})},R=s(37),W=s(168),_=s(169),U=s(170),B=s(171),J=s(172),Y=s(173),G=s(174),H=s(175),z=s(176),Z=s(177),V=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(R.a)(c)),c.toggleModal=c.toggleModal.bind(Object(R.a)(c)),c.handleLogin=c.handleLogin.bind(Object(R.a)(c)),c}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(W.a,{fluid:!0,children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsx)("h1",{children:"Nucamp"}),Object(f.jsx)("h2",{children:"a better way to camp"})]})})})}),Object(f.jsx)(_.a,{dark:!0,sticky:"top",expand:"md",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(U.a,{className:"mr-auto",href:"/",children:Object(f.jsx)("img",{src:"/assets/images/logo.png",height:"30",width:"30",alt:"Nucamp Logo"})}),Object(f.jsx)(B.a,{onClick:this.toggleNav}),Object(f.jsxs)(J.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(f.jsxs)(Y.a,{navbar:!0,children:[Object(f.jsx)(G.a,{children:Object(f.jsxs)(p.c,{className:"nav-link",to:"/home",children:[Object(f.jsx)("i",{className:"fa fa-home fa-lg"})," Home"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(p.c,{className:"nav-link",to:"/directory",children:[Object(f.jsx)("i",{className:"fa fa-list fa-lg"})," Directory"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(p.c,{className:"nav-link",to:"/aboutus",children:[Object(f.jsx)("i",{className:"fa fa-info fa-lg"})," About"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(p.c,{className:"nav-link",to:"/contactus",children:[Object(f.jsx)("i",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(f.jsx)("span",{className:"navbar-text ml-auto",children:Object(f.jsxs)(w.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("i",{className:"fa fa-sign-in fa-lg"})," Login"]})})]})]})}),Object(f.jsxs)(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(k.a,{toggle:this.toggleModal,children:"Login"}),Object(f.jsx)(L.a,{children:Object(f.jsxs)(H.a,{onSubmit:this.handleLogin,children:[Object(f.jsxs)(z.a,{children:[Object(f.jsx)(C.a,{htmlFor:"username",children:"Username"}),Object(f.jsx)(Z.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)(C.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)(Z.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(f.jsxs)(z.a,{check:!0,children:[Object(f.jsx)(Z.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]}),Object(f.jsx)(w.a,{type:"submit",value:"sumbit",color:"primary",children:"Login"})]})})]})]})}}]),s}(c.Component);var $=function(e){return Object(f.jsx)("footer",{className:"site-footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-4 col-sm-2 offset-1",children:[Object(f.jsx)("h5",{children:"Links"}),Object(f.jsxs)("ul",{className:"list-unstyled",children:[Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/directory",children:"Directory"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/aboutus",children:"About"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.b,{to:"/contactus",children:"Contact"})})]})]}),Object(f.jsxs)("div",{className:"col-6 col-sm-3 text-center",children:[Object(f.jsx)("h5",{children:"Social"}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/",children:Object(f.jsx)("i",{className:"fa fa-instagram"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/",children:Object(f.jsx)("i",{className:"fa fa-facebook"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(f.jsx)("i",{className:"fa fa-twitter"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(f.jsx)("i",{className:"fa fa-youtube"})})]}),Object(f.jsxs)("div",{className:"col-sm-4 text-center",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]})})})};function K(e){var t=e.item,s=e.isLoading,c=e.errMess;return s?Object(f.jsx)(g,{}):c?Object(f.jsx)("h4",{children:c}):Object(f.jsx)(T.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{src:N+t.image,alt:t.name}),Object(f.jsxs)(F.a,{children:[Object(f.jsx)(u.a,{children:t.name}),Object(f.jsx)(S.a,{children:t.description})]})]})})}var Q=function(e){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(K,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})}),Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(K,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})}),Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(K,{item:e.partner})})]})})},X=s(178),ee=s(179),te=function(e){return e&&e.length},se=function(e){return function(t){return!t||t.length<=e}},ce=function(e){return function(t){return t&&t.length>=e}},ae=function(e){return!isNaN(+e)},re=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ne=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},c}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current state is:"+JSON.stringify(e)),alert("Current state is:"+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(p.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"Contact Us"})]}),Object(f.jsx)("h2",{children:"Contact Us"}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row row-content align-items-center",children:[Object(f.jsxs)("div",{className:"col-sm-4",children:[Object(f.jsx)("h5",{children:"Our Address"}),Object(f.jsxs)("address",{children:["1 Nucamp Way",Object(f.jsx)("br",{}),"Seattle, WA 98001",Object(f.jsx)("br",{}),"U.S.A."]})]}),Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h2",{children:"Send us your Feedback"}),Object(f.jsx)("hr",{})]}),Object(f.jsx)("div",{className:"col-md-10",children:Object(f.jsxs)(E.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"firstName",md:2,children:"First Name"}),Object(f.jsxs)(ee.a,{md:10,children:[Object(f.jsx)(E.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:te,minLength:ce(2),maxLength:se(15)}}),Object(f.jsx)(E.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"lastName",md:2,children:"Last Name"}),Object(f.jsxs)(ee.a,{md:10,children:[Object(f.jsx)(E.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:te,minLength:ce(2),maxLength:se(15)}}),Object(f.jsx)(E.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLenght:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"phoneNum",md:2,children:"Phone"}),Object(f.jsxs)(ee.a,{md:10,children:[Object(f.jsx)(E.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:te,minLength:ce(10),maxLength:se(15),isNumber:ae}}),Object(f.jsx)(E.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLenght:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"email",md:2,children:"Email"}),Object(f.jsxs)(ee.a,{md:10,children:[Object(f.jsx)(E.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:te,validEmail:re}}),Object(f.jsx)(E.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}})]})]}),Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(ee.a,{md:{size:4,offset:2},children:Object(f.jsx)("div",{className:"form-check",children:Object(f.jsxs)(C.a,{check:!0,children:[Object(f.jsx)(E.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",Object(f.jsx)("strong",{children:"May we contact you?"})]})})}),Object(f.jsx)(ee.a,{md:4,children:Object(f.jsxs)(E.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(f.jsx)("option",{children:"By Phone"}),Object(f.jsx)("option",{children:"By Email"})]})})]}),Object(f.jsxs)(X.a,{className:"form-group",children:[Object(f.jsx)(C.a,{htmlFor:"feedback",md:2,children:"Your Feedback"}),Object(f.jsx)(ee.a,{md:10,children:Object(f.jsx)(E.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"})})]}),Object(f.jsx)(X.a,{className:"form-group",children:Object(f.jsx)(ee.a,{md:{size:10,offset:2},children:Object(f.jsx)(w.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(a.a.Component),oe=s(180),ie=s(181);function le(e){var t=e.partner;return t?Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(oe.a,{object:!0,src:t.image,alt:t.name,width:"150"}),Object(f.jsxs)(oe.a,{body:!0,className:"ml-5 mb-4",children:[Object(f.jsx)(oe.a,{heading:!0,children:t.name}),t.description]})]}):Object(f.jsx)("div",{})}var je=function(e){var t=e.partners.map((function(e){return Object(f.jsx)(oe.a,{tag:"li",children:Object(f.jsx)(le,{partner:e})},e.id)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(p.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"About Us"})]}),Object(f.jsx)("h2",{children:"About Us"}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-sm-6",children:[Object(f.jsx)("h3",{children:"Our Mission"}),Object(f.jsx)("p",{children:"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other."})]}),Object(f.jsx)("div",{className:"col-sm-6",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(ie.a,{className:"bg-primary text-white",children:Object(f.jsx)("h3",{children:"Facts At a Glance"})}),Object(f.jsx)(F.a,{children:Object(f.jsxs)("dl",{className:"row",children:[Object(f.jsx)("dt",{className:"col-6",children:"Founded"}),Object(f.jsx)("dd",{className:"col-6",children:"February 3, 2016"}),Object(f.jsx)("dt",{className:"col-6",children:"No. of Campsites in 2019"}),Object(f.jsx)("dd",{className:"col-6",children:"563"}),Object(f.jsx)("dt",{className:"col-6",children:"No. of Reviews in 2019"}),Object(f.jsx)("dd",{className:"col-6",children:"4388"}),Object(f.jsx)("dt",{className:"col-6",children:"Employees"}),Object(f.jsx)("dd",{className:"col-6",children:"42"})]})})]})}),Object(f.jsx)("div",{className:"col",children:Object(f.jsx)(m.a,{className:"bg-light mt-3",children:Object(f.jsx)(F.a,{children:Object(f.jsxs)("blockquote",{className:"blockquote",children:[Object(f.jsx)("p",{className:"mb-0",children:"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."}),Object(f.jsxs)("footer",{className:"blockquote-footer",children:["Muriel Strode,"," ",Object(f.jsx)("cite",{title:"Source Title",children:'"Wind-Wafted Wild Flowers" - The Open Court, 1903'})]})]})})})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h3",{children:"Community Partners"})}),Object(f.jsx)("div",{className:"col mt-4",children:Object(f.jsx)(oe.a,{list:!0,children:t})})]})]})},de=s(12),me=s(26),he="ADD_COMMENT",be="CAMPSITES_LOADING",ue="CAMPSITES_FAILED",Oe="ADD_CAMPSITES",xe="ADD_COMMENTS",pe="COMMENTS_FAILED",fe="PROMOTIONS_LOADING",ge="ADD_PROMOTIONS",Ne="PROMOTIONS_FAILED",ve=function(){return{type:be}},ye=function(e){return{type:ue,payload:e}},we=function(e){return{type:Oe,payload:e}},Me=function(e){return{type:pe,payload:e}},ke=function(e){return{type:xe,payload:e}},Le=function(e,t,s,c){return function(a){var r={campsiteId:e,rating:t,author:s,text:c};return r.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return a({type:he,payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\n          Error: ".concat(e.message))}))}},Ce=function(){return{type:fe}},Fe=function(e){return{type:Ne,payload:e}},Se=function(e){return{type:ge,payload:e}},Ee=s(57),Te=s(90),Ie={postComment:function(e,t,s,c){return Le(e,t,s,c)},fetchCampsites:function(){return function(e){return e(ve()),fetch(N+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(we(t))})).catch((function(t){return e(ye(t.message))}))}},resetFeedbackForm:function(){return E.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ke(t))})).catch((function(t){return e(Me(t.message))}))}},fetchPromotions:function(){return function(e){return e(Ce()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Se(t))})).catch((function(t){return e(Fe(t.message))}))}}},Ae=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(V,{}),Object(f.jsx)(Ee.a,{children:Object(f.jsx)(Te.a,{classNames:"page",timeout:300,children:Object(f.jsxs)(de.d,{children:[Object(f.jsx)(de.b,{path:"/home",component:function(){return Object(f.jsx)(Q,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.filter((function(e){return e.featured}))[0]})}}),Object(f.jsx)(de.b,{exact:!0,path:"/directory",render:function(){return Object(f.jsx)(y,{campsites:e.props.campsites})}}),Object(f.jsx)(de.b,{path:"/directory/:campsiteId",component:function(t){var s=t.match;return Object(f.jsx)(q,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+s.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+s.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(f.jsx)(de.b,{exact:!0,path:"/contactus",render:function(){return Object(f.jsx)(ne,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(f.jsx)(de.b,{exact:!0,path:"/aboutus",render:function(){return Object(f.jsx)(je,{partners:e.props.partners})}}),Object(f.jsx)(de.a,{to:"/home"})]})},this.props.location.key)}),Object(f.jsx)($,{})]})}}]),s}(c.Component),De=Object(de.g)(Object(me.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions}}),Ie)(Ae)),Pe=s(10),qe=s(27),Re=s(93),We=s(94),_e=s.n(We),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!1,errMess:null,campsites:t.payload});case be:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!0,errMess:null,campsites:[]});case ue:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Pe.a)(Object(Pe.a)({},e),{},{errMess:null,comments:t.payload});case pe:return Object(Pe.a)(Object(Pe.a)({},e),{},{errMess:t.payload});case he:var s=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Je=[{id:0,name:"Bootstrap Outfitters",image:"/assets/images/bootstrap-logo.png",featured:!1,description:"Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."},{id:1,name:"Git Out Expeditions",image:"/assets/images/git-logo.png",featured:!1,description:"Join Git Out Expeditions to explore new horizons with a group of other adventurers!"},{id:2,name:"Mongo Fly Shop",image:"/assets/images/mongo-logo.png",featured:!1,description:"Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."},{id:3,name:"Node Outdoor Apparel",image:"/assets/images/node-logo.png",featured:!0,description:"From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered."}],Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case fe:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case Ne:return Object(Pe.a)(Object(Pe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},He={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},ze=(s(154),Object(qe.createStore)(Object(qe.combineReducers)(Object(Pe.a)({campsites:Ue,comments:Be,partners:Ye,promotions:Ge},Object(E.createForms)({feedbackForm:He}))),Object(qe.applyMiddleware)(Re.a,_e.a))),Ze=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(f.jsx)(me.Provider,{store:ze,children:Object(f.jsx)(p.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(De,{})})})})}}]),s}(c.Component),Ve=Ze;n.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Ve,{})}),document.getElementById("root")),o()}},[[155,1,2]]]);
//# sourceMappingURL=main.d7acc286.chunk.js.map