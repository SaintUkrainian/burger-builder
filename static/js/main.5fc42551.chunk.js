(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1qQeN",BreadTop:"BurgerIngredient_BreadTop__2Nu1j",Seeds1:"BurgerIngredient_Seeds1__1EVjj",Seeds2:"BurgerIngredient_Seeds2__2MLjl",Meat:"BurgerIngredient_Meat__2xJ1Q",Cheese:"BurgerIngredient_Cheese__PcDFH",Salad:"BurgerIngredient_Salad__3OcQo",Bacon:"BurgerIngredient_Bacon__25qTW"}},,,,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__1EJIe",Label:"BuildControl_Label__3PVtf",Less:"BuildControl_Less__1u4Ze",More:"BuildControl_More__2mY1l"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__279US",Open:"SideDrawer_Open__A9zjj",Close:"SideDrawer_Close__hEKuu"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__PFnlj",DesktopOnly:"Toolbar_DesktopOnly__25XLj"}},function(e,t,a){e.exports={NavItem:"NavItem_NavItem__371_M",active:"NavItem_active__1Left"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2pQOg",OrderButton:"BuildControls_OrderButton__2OEaD",enable:"BuildControls_enable__pF9ze"}},function(e,t,a){e.exports={Button:"Button_Button__3m_dJ",Success:"Button_Success__Vjw2x",Danger:"Button_Danger__emeYn"}},,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__2wm4M"}},function(e,t,a){e.exports={NavItems:"NavItems_NavItems__3bz1d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1kYD-"}},function(e,t,a){e.exports={Content:"Layout_Content__3-XQW"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1AJSv"}},function(e,t,a){e.exports={Burger:"Burger_Burger__38KiN"}},function(e,t,a){e.exports={Modal:"Modal_Modal__csizb"}},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(29),a(2)),i=a(3),s=a(5),d=a(4),u=a(9),m=a.n(u),h=a(15),g=a.n(h),_=a(16),p=a.n(_),f=function(e){return r.a.createElement("div",{className:p.a.Logo,style:{height:e.height,marginBottom:e.margin}},r.a.createElement("img",{src:g.a,alt:"burger-logo"}))},b=a(17),v=a.n(b),E=a(10),w=a.n(E),B=function(e){return r.a.createElement("li",{className:w.a.NavItem},r.a.createElement("a",{href:e.link,className:e.active?w.a.active:null},e.children))},k=function(e){return r.a.createElement("ul",{className:v.a.NavItems},r.a.createElement(B,{link:"/",active:!0},"BurgerBuilder"),r.a.createElement(B,{link:"/"},"Checkout"))},M=a(18),N=a.n(M),y=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.openModal},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},O=function(e){return r.a.createElement("header",{className:m.a.Toolbar},r.a.createElement(y,{openModal:e.openModal}),r.a.createElement(f,{height:"80%"}),r.a.createElement("div",{className:m.a.DesktopOnly},r.a.createElement(k,null)))},C=function(e){return e.children},j=a(19),I=a.n(j),S=a(7),x=a.n(S),D=a(20),L=a.n(D),T=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.closeModal}):null},A=function(e){return r.a.createElement(C,null,r.a.createElement(T,{show:e.show,closeModal:e.closeModal}),r.a.createElement("div",{className:[x.a.SideDrawer,e.show?x.a.Open:x.a.Close].join(" ")},r.a.createElement(f,{height:"11%",margin:"32px"}),r.a.createElement("nav",null,r.a.createElement(k,null))))},P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.closeModalHandler=function(){e.setState({show:!1})},e.openModalHandler=function(){e.setState({show:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(A,{show:this.state.show,closeModal:this.closeModalHandler}),r.a.createElement(O,{openModal:this.openModalHandler}),r.a.createElement("main",{className:I.a.Content},this.props.children))}}]),a}(n.Component),H=a(8),W=a(23),F=a(21),J=a.n(F),Y=a(1),z=a.n(Y),Q=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:z.a.Meat});break;case"bacon":t=r.a.createElement("div",{className:z.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:z.a.Salad});break;case"cheese":t=r.a.createElement("div",{className:z.a.Cheese});break;default:t=null}return t},R=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(W.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Q,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Fill with ingredients!")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(Q,{type:"bread-top"}),t,r.a.createElement(Q,{type:"bread-bottom"}))},V=a(11),$=a.n(V),q=a(6),K=a.n(q),U=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.removed.bind(null,e.type),disabled:e.disabled},"Less"),r.a.createElement("button",{className:K.a.More,onClick:e.added.bind(null,e.type)},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Total price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),X.map((function(t){return r.a.createElement(U,{key:t.label,label:t.label,type:t.type,added:e.addIngredient,removed:e.removeIngredient,disabled:e.disabled[t.type]})})),r.a.createElement("button",{onClick:e.showModal,className:$.a.OrderButton,disabled:e.totalAmount<=0},"ORDER NOW!"))},G=a(22),ee=a.n(G),te=function(e){return r.a.createElement("div",{className:ee.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)},ae=a(12),ne=a.n(ae),re=function(e){return r.a.createElement("button",{onClick:e.action,className:[ne.a.Button,ne.a[e.type]].join(" ")},e.name)},oe=function(e){var t=e.ingredients,a=Object.keys(t).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("span",{style:{textTransform:"capitalize"}},e),":"," ",t[e],"x")}));return r.a.createElement(C,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious Burger with following ingredients:"),r.a.createElement("ul",null,a),r.a.createElement("h3",null,"Total price: $",e.totalPrice.toFixed(2)),r.a.createElement("p",null,"Checking out?"),r.a.createElement(re,{action:e.cancel,name:"Cancel",type:"Danger"}),r.a.createElement(re,{action:e.checkOut,name:"Checkout!",type:"Success"}))},le={salad:1,bacon:4.5,meat:5,cheese:2},ce=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalAmount:0,totalPrice:1,showModal:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(H.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalAmount+1,o=le[t],l=e.state.totalPrice+o;e.setState({totalPrice:l,totalAmount:r,ingredients:n})},e.showModal=function(){e.setState({showModal:!0})},e.closeModal=function(){e.setState({showModal:!1})},e.checkOutHandler=function(){alert("Purchased!")},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(H.a)({},e.state.ingredients);r[t]=n;var o=e.state.totalAmount-1,l=e.state.totalPrice-le[t];e.setState({totalPrice:l,totalAmount:o,ingredients:r})}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(H.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(C,null,r.a.createElement(T,{show:this.state.showModal,closeModal:this.closeModal}),r.a.createElement(te,{show:this.state.showModal,closeModal:this.closeModal},r.a.createElement(oe,{ingredients:this.state.ingredients,totalPrice:this.state.totalPrice,cancel:this.closeModal,checkOut:this.checkOutHandler})),r.a.createElement(R,{ingredients:this.state.ingredients}),r.a.createElement(Z,{addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,totalAmount:this.state.totalAmount,showModal:this.showModal}))}}]),a}(n.Component),ie=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(ce,null))}}]),a}(n.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(ie,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/burger-builder",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/burger-builder","/service-worker.js");se?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):de(e)}))}}()}],[[24,1,2]]]);
//# sourceMappingURL=main.5fc42551.chunk.js.map