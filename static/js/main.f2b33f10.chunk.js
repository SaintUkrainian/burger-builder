(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{11:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1qQeN",BreadTop:"BurgerIngredient_BreadTop__2Nu1j",Seeds1:"BurgerIngredient_Seeds1__1EVjj",Seeds2:"BurgerIngredient_Seeds2__2MLjl",Meat:"BurgerIngredient_Meat__2xJ1Q",Cheese:"BurgerIngredient_Cheese__PcDFH",Salad:"BurgerIngredient_Salad__3OcQo",Bacon:"BurgerIngredient_Bacon__25qTW"}},14:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1EJIe",Label:"BuildControl_Label__3PVtf",Less:"BuildControl_Less__1u4Ze",More:"BuildControl_More__2mY1l"}},16:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__279US",Open:"SideDrawer_Open__A9zjj",Close:"SideDrawer_Close__hEKuu"}},19:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__PFnlj",DesktopOnly:"Toolbar_DesktopOnly__25XLj"}},20:function(e,t,n){e.exports={NavItem:"NavItem_NavItem__371_M",active:"NavItem_active__1Left"}},23:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2pQOg",OrderButton:"BuildControls_OrderButton__2OEaD",enable:"BuildControls_enable__pF9ze"}},24:function(e,t,n){e.exports={Button:"Button_Button__3m_dJ",Success:"Button_Success__Vjw2x",Danger:"Button_Danger__emeYn"}},36:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},37:function(e,t,n){e.exports={Logo:"Logo_Logo__2wm4M"}},38:function(e,t,n){e.exports={NavItems:"NavItems_NavItems__3bz1d"}},40:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1kYD-"}},41:function(e,t,n){e.exports={Content:"Layout_Content__3-XQW"}},42:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1AJSv"}},43:function(e,t,n){e.exports={Burger:"Burger_Burger__38KiN"}},44:function(e,t,n){e.exports={Modal:"Modal_Modal__csizb"}},46:function(e,t,n){e.exports={Loader:"Spinner_Loader__zH0Js",load3:"Spinner_load3__10wnC"}},48:function(e,t,n){e.exports=n(76)},53:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),l=n.n(o),i=(n(53),n(6)),c=n(7),s=n(9),u=n(8),d=n(15),m=n(1),h=n(19),p=n.n(h),g=n(36),f=n.n(g),b=n(37),_=n.n(b),v=function(e){return r.a.createElement("div",{className:_.a.Logo,style:{height:e.height,marginBottom:e.margin}},r.a.createElement("img",{src:f.a,alt:"burger-logo"}))},E=n(38),w=n.n(E),k=n(20),B=n.n(k),y=function(e){return r.a.createElement("li",{className:B.a.NavItem},r.a.createElement(d.b,{activeClassName:B.a.active,to:e.link},e.children))},O=function(e){return r.a.createElement("ul",{className:w.a.NavItems},r.a.createElement(y,{link:"/burger"},"BurgerBuilder"),r.a.createElement(y,{link:"/checkout"},"Checkout"))},j=n(40),C=n.n(j),M=function(e){return r.a.createElement("div",{className:C.a.DrawerToggle,onClick:e.openModal},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},N=function(e){return r.a.createElement("header",{className:p.a.Toolbar},r.a.createElement(M,{openModal:e.openModal}),r.a.createElement(v,{height:"80%"}),r.a.createElement("div",{className:p.a.DesktopOnly},r.a.createElement(O,null)))},S=function(e){return e.children},I=n(41),D=n.n(I),x=n(16),L=n.n(x),P=n(42),T=n.n(P),A=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.closeModal}):null},H=function(e){return r.a.createElement(S,null,r.a.createElement(A,{show:e.show,closeModal:e.closeModal}),r.a.createElement("div",{className:[L.a.SideDrawer,e.show?L.a.Open:L.a.Close].join(" ")},r.a.createElement(v,{height:"11%",margin:"32px"}),r.a.createElement("nav",null,r.a.createElement(O,null))))},W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.closeModalHandler=function(){e.setState({show:!1})},e.openModalHandler=function(){e.setState({show:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(H,{show:this.state.show,closeModal:this.closeModalHandler}),r.a.createElement(N,{openModal:this.openModalHandler}),r.a.createElement("main",{className:D.a.Content},this.props.children))}}]),n}(a.Component),q=n(17),J=n(47),z=n(43),F=n.n(z),Y=n(11),Q=n.n(Y),U=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:Q.a.BreadTop},r.a.createElement("div",{className:Q.a.Seeds1}),r.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:Q.a.Meat});break;case"bacon":t=r.a.createElement("div",{className:Q.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:Q.a.Salad});break;case"cheese":t=r.a.createElement("div",{className:Q.a.Cheese});break;default:t=null}return t},R=function(e){var t;return 0===(t=e.ingredients?Object.keys(e.ingredients).map((function(t){return Object(J.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(U,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]):r.a.createElement("p",null,"Getting ingredients from the Web!")).length&&(t=r.a.createElement("p",null,"Fill with ingredients!")),r.a.createElement("div",{className:F.a.Burger},r.a.createElement(U,{type:"bread-top"}),t,r.a.createElement(U,{type:"bread-bottom"}))},V=n(23),$=n.n(V),K=n(14),X=n.n(K),G=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.Less,onClick:e.removed.bind(null,e.type),disabled:e.disabled},"Less"),r.a.createElement("button",{className:X.a.More,onClick:e.added.bind(null,e.type)},"More"))},Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Total price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),Z.map((function(t){return r.a.createElement(G,{key:t.label,label:t.label,type:t.type,added:e.addIngredient,removed:e.removeIngredient,disabled:e.disabled[t.type]})})),r.a.createElement("button",{onClick:e.showModal,className:$.a.OrderButton,disabled:e.totalAmount<=0},"ORDER NOW!"))},te=n(44),ne=n.n(te),ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(A,{show:this.props.show,close:this.props.closeModal}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),re=n(24),oe=n.n(re),le=function(e){return r.a.createElement("button",{onClick:e.action,className:[oe.a.Button,oe.a[e.type]].join(" ")},e.name)},ie=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this.props.ingredients;return e=t?Object.keys(t).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("span",{style:{textTransform:"capitalize"}},e),":"," ",t[e],"x")})):r.a.createElement("p",null,"Sorry, couldn't get the data from the Web :("),r.a.createElement(S,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious Burger with following ingredients:"),r.a.createElement("ul",null,e),r.a.createElement("h3",null,"Total price: $",this.props.totalPrice.toFixed(2)),r.a.createElement("p",null,"Checking out?"),r.a.createElement(le,{action:this.props.cancel,name:"Cancel",type:"Danger"}),r.a.createElement(le,{action:this.props.checkOut,name:"Checkout!",type:"Success"}))}}]),n}(a.Component),ce=n(45),se=n.n(ce).a.create({baseURL:"https://steel-sequencer-288911.firebaseio.com/"}),ue=n(46),de=n.n(ue),me=function(){return r.a.createElement("div",{className:de.a.Loader},"Loading...")},he=function(e,t){return function(n){Object(s.a)(o,n);var a=Object(u.a)(o);function o(){var e;return Object(i.a)(this,o),(e=a.call(this)).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e.reqInter=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInter=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(c.a)(o,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInter),t.interceptors.response.eject(this.resInter)}},{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(ae,{show:this.state.error,closeModal:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)}(function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,ingredientPrices:null,totalAmount:0,totalPrice:1,showModal:!1,loading:!1,fetchingData:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,a=Object(q.a)({},e.state.ingredients);a[t]=n;var r=e.state.totalAmount+1,o=e.state.ingredientPrices[t],l=e.state.totalPrice+o;e.setState({totalPrice:l,totalAmount:r,ingredients:a})},e.showModal=function(){e.setState({showModal:!0})},e.closeModal=function(){e.setState({showModal:!1})},e.checkOutHandler=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Denys Matsenko",email:"idanchik47@gmail.com",address:"Some street, 38a",phone:"+133455357897"}};se.post("/orders.json",t).then((function(t){e.setState({loading:!1,showModal:!1})})).catch((function(t){e.setState({loading:!1,showModal:!1})}))},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var a=n-1,r=Object(q.a)({},e.state.ingredients);r[t]=a;var o=e.state.totalAmount-1,l=e.state.totalPrice-e.state.ingredientPrices[t];e.setState({totalPrice:l,totalAmount:o,ingredients:r})}},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({fetchingData:!0}),se.get("https://steel-sequencer-288911.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})),se.get("https://steel-sequencer-288911.firebaseio.com/prices.json").then((function(t){e.setState({ingredientPrices:t.data,fetchingData:!1})}))}},{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients),t=null;for(var n in e)e[n]=e[n]<=0;var a=r.a.createElement(ie,{ingredients:this.state.ingredients,totalPrice:this.state.totalPrice,cancel:this.closeModal,checkOut:this.checkOutHandler});return this.state.loading&&(a=r.a.createElement(me,null)),t=this.state.fetchingData?r.a.createElement(S,null,r.a.createElement(me,null)):r.a.createElement(R,{ingredients:this.state.ingredients}),r.a.createElement(S,null,r.a.createElement(ae,{show:this.state.showModal,closeModal:this.closeModal},a),t,r.a.createElement(ee,{addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,totalAmount:this.state.totalAmount,showModal:this.showModal}))}}]),n}(a.Component),se),pe=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Hello, this is checkout page!"))},ge=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/burger-builder"},r.a.createElement(W,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/burger",component:he}),r.a.createElement(m.b,{path:"/checkout",component:pe}),r.a.createElement(m.a,{from:"/",to:"/burger"}))))}}]),n}(a.Component),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(ge,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/burger-builder",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/burger-builder","/service-worker.js");fe?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):be(e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.f2b33f10.chunk.js.map