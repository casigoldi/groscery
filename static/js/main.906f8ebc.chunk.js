(this["webpackJsonpgloscery-app"]=this["webpackJsonpgloscery-app"]||[]).push([[0],{36:function(n,e,t){n.exports=t(48)},41:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(15),o=t.n(c),i=t(5),u=(t(41),t(3)),l=t(10),s=t(9),d=t(6),f=Object(d.a)([function(n){return n.teasers}],(function(n){return n.homepage})),p=t(1),g=t(2);function m(){var n=Object(p.a)(["\n  display: block;\n  padding: 15px;\n  background-color: #000;\n  text-transform: uppercase;\n  color: #fff;\n"]);return m=function(){return n},n}function b(){var n=Object(p.a)(["\n  font-size: 30px;\n  display: block;\n  padding: 0 15px 15px;\n"]);return b=function(){return n},n}function E(){var n=Object(p.a)(["\n  padding: 25px;\n  position: absolute;\n  background-color: #fff;\n  text-align: center;\n"]);return E=function(){return n},n}function v(){var n=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return n},n}function h(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 25%;\n  margin: 0 10px 15px;\n  height: 400px;\n  min-width: 300px;\n"]);return h=function(){return n},n}var O=g.a.div(h()),y=g.a.div(v(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")})),x=g.a.div(E()),j=g.a.span(b()),S=Object(g.a)(i.b)(m()),k=function(n){var e=n.title,t=n.imageUrl,r=n.url;return a.a.createElement(O,null,a.a.createElement(y,{imageUrl:t},a.a.createElement(x,null,a.a.createElement(j,null,e),a.a.createElement(S,{to:"".concat(r)},"Show more"))))};function T(){var n=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  flex: 1 1 0;\n  flex-wrap: wrap;\n"]);return T=function(){return n},n}var C=g.a.div(T()),_=Object(d.b)({teasers:f}),R=Object(s.b)(_)((function(n){var e=n.teasers;return a.a.createElement(C,null,e.map((function(n){var e=n.id,t=Object(l.a)(n,["id"]);return a.a.createElement(k,Object.assign({key:e},t))})))})),I=function(){return a.a.createElement(R,null)},A=t(29),w=t(30),U=t(33),G=t(35),N=function(n){return n.categories.categories},Q=Object(d.a)([N],(function(n){return n?Object.keys(n).map((function(e){return n[e]})):[]})),F=function(n){return Object(d.a)([N],(function(e){return e?e[n]:null}))},z=function(n){return Object(d.a)(F(n),(function(n){return n?n.facets:[]}))},D=Object(d.a)([function(n){return n.categories}],(function(n){return!n.loaded}));function P(){var n=Object(p.a)(["\n  display: block;\n  padding-top: 30px;\n  font-size: 12px;\n"]);return P=function(){return n},n}function L(){var n=Object(p.a)(["\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  color: white;\n  font-size: 11px;\n  border-radius: 3px;\n  padding: 5px;\n\n  background-color: grey;\n\n  &.meat {\n    background-color: red;\n  }\n\n  &.fish {\n    background-color: blue;\n  }\n\n  &.fruits {\n    background-color: green;\n  }\n\n  &.alcohol {\n    background-color: black;\n  }\n\n  &.convience {\n    background-color: orange;\n  }\n"]);return L=function(){return n},n}function M(){var n=Object(p.a)(["\n  display: block;\n"]);return M=function(){return n},n}function Y(){var n=Object(p.a)(["\n  font-size: 24px;\n  padding-bottom: 10px;\n  display: block;\n"]);return Y=function(){return n},n}function q(){var n=Object(p.a)(["\n  background-color: #fff;\n  position: relative;\n  padding: 15px;\n"]);return q=function(){return n},n}function B(){var n=Object(p.a)(["\n  width: 100%;\n  height: auto;\n  display: block;\n"]);return B=function(){return n},n}function J(){var n=Object(p.a)(["\n  flex: 1 1 50%;\n  min-width: 250px;\n  padding: 10px;\n\n  @media only screen and (min-width: 760px) {\n    flex: 0 1 25%;\n  }\n"]);return J=function(){return n},n}var V=g.a.div(J()),W=g.a.img(B()),H=g.a.div(q()),$=g.a.span(Y()),K=g.a.span(M()),X=g.a.span(L()),Z=g.a.a(P()),nn=function(n){var e=n.title,t=n.description,r=n.type,c=n.imageUrl;return a.a.createElement(V,null,a.a.createElement(W,{src:c,alt:e}),a.a.createElement(H,null,a.a.createElement($,null,e),a.a.createElement(K,null,t.substring(0,40)," ",t.length>40?"\u2026":""),a.a.createElement(X,{className:r},r),a.a.createElement(Z,null,"> More info (coming soon)")))};function en(){var n=Object(p.a)(["\n  padding: 5px 7px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  color: #fff;\n  border-radius: 3px;\n  background-color: grey;\n  border: 0;\n  outline: 0;\n  opacity: ",";\n\n  &.meat {\n    background-color: red;\n  }\n\n  &.fish {\n    background-color: blue;\n  }\n\n  &.fruits {\n    background-color: green;\n  }\n\n  &.alcohol {\n    background-color: black;\n  }\n\n  &.convience {\n    background-color: orange;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n  background-color: #ccc;\n  padding: 15px 15px 0;\n"]);return tn=function(){return n},n}var rn=g.a.div(tn()),an=g.a.button(en(),(function(n){return n.buttonActive?"1":"0.5"}));function cn(){var n=Object(p.a)(["\n  font-size: 10vw;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  line-height: 0.7em;\n  color: #ccc;\n  margin-top: 30px;\n\n  a {\n    color: #ccc;\n    text-decoration: none;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  background-color: #ccc;\n  padding: 15px 5px;\n  margin-bottom: 60px;\n"]);return on=function(){return n},n}var un=g.a.div(on()),ln=g.a.h2(cn()),sn=function(n){var e=n.category,t=n.entries,r=n.facets,c=n.setVisibility;return a.a.createElement("div",null,a.a.createElement(ln,null,e.title),a.a.createElement(rn,null,r.map((function(n){return a.a.createElement(an,{className:"".concat(n.id),onClick:function(){return function(n){c(n,e.id)}(n)},buttonActive:n.active,key:n.id},n.name)}))),a.a.createElement(un,null,t.length>0?t.map((function(n){var e=n.id,t=Object(l.a)(n,["id"]);return a.a.createElement(nn,Object.assign({key:e},t))})):a.a.createElement("p",null,"No items available")))},dn={REQUEST_CATEGORIES_PENDING:"REQUEST_CATEGORIES_PENDING",REQUEST_CATEGORIES_SUCCESS:"REQUEST_CATEGORIES_SUCCESS",REQUEST_CATEGORIES_FAILED:"REQUEST_CATEGORIES_FAILED",SET_CATEGORY_FACETS:"SET_CATEGORY_FACETS"},fn=function(){return function(n,e){var t=e().categories.categories;return 0===t.length?n((function(n){n({type:dn.REQUEST_CATEGORIES_PENDING}),fetch("https://my-json-server.typicode.com/casigoldi/foodapi/categories").then((function(n){return n.json()})).then((function(e){return n({type:dn.REQUEST_CATEGORIES_SUCCESS,payload:e})})).catch((function(e){return n({type:dn.REQUEST_CATEGORIES_FAILED,payload:e})}))})):t.isPending?Promise.resolve():void 0}},pn=t(8);function gn(){var n=Object(p.a)(["\n  display: block;\n  text-align: center;\n  padding: 60px;\n"]);return gn=function(){return n},n}var mn=g.a.span(gn()),bn=function(n){return function(e){var t=e.isLoading,r=Object(l.a)(e,["isLoading"]);return t?a.a.createElement(mn,null,"Loading\u2026"):a.a.createElement(n,r)}},En=Object(pn.d)(Object(s.b)((function(n,e){return{isLoading:D(n),category:F(e.match.params.categoryId)(n),entries:(t=e.match.params.categoryId,Object(d.a)([F(t),z(t)],(function(n,e){if(!n||!n.entries)return[];var t=e.filter((function(n){return n.active})).map((function(n){return n.id}));return 0===t.length?n.entries:n.entries.filter((function(n){return t.includes(n.type)}))})))(n),facets:z(e.match.params.categoryId)(n)};var t}),(function(n){return{setVisibility:function(e,t){return n((r=e,a=t,{type:dn.SET_CATEGORY_FACETS,facet:r,categoryId:a}));var r,a}}})),bn)(sn),vn=function(n){var e=n.title,t=n.url,r=n.entries;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,null,a.a.createElement(i.b,{to:"".concat(t)},e)),a.a.createElement(un,null,r.filter((function(n,e){return e<4})).map((function(n){var e=n.id,t=Object(l.a)(n,["id"]);return a.a.createElement(nn,Object.assign({key:e},t))}))))};function hn(){var n=Object(p.a)(["\n  width: auto;\n"]);return hn=function(){return n},n}var On=g.a.div(hn()),yn=Object(d.b)({isLoading:D,categories:Q}),xn=Object(pn.d)(Object(s.b)(yn,null),bn)((function(n){var e=n.categories;return a.a.createElement(On,null,e.map((function(n){var e=n.id,t=Object(l.a)(n,["id"]);return a.a.createElement(vn,Object.assign({key:e},t))})))})),jn=function(n){Object(G.a)(t,n);var e=Object(U.a)(t);function t(){return Object(A.a)(this,t),e.apply(this,arguments)}return Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCategories()}},{key:"render",value:function(){var n=this.props.match;return a.a.createElement("div",null,a.a.createElement(u.a,{exact:!0,path:"".concat(n.path),component:xn}),a.a.createElement(u.a,{path:"".concat(n.path,"/:categoryId"),component:En}))}}]),t}(r.Component),Sn=Object(s.b)(null,(function(n){return{onRequestCategories:function(){return n(fn())}}}))(jn);function kn(){var n=Object(p.a)(["\n  display: none;\n  padding: 15px;\n\n  &.visibleMobile {\n    display: block;\n  }\n\n  &.active {\n    color: red;\n  }\n\n  @media only screen and (min-width: 500px) {\n    display: block;\n  }\n"]);return kn=function(){return n},n}function Tn(){var n=Object(p.a)(["\n  display: flex;\n  text-align: right;\n"]);return Tn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return Cn=function(){return n},n}var _n=g.a.div(Cn()),Rn=g.a.div(Tn()),In=Object(g.a)(i.c)(kn()),An=function(){return a.a.createElement(_n,null,a.a.createElement(In,{as:i.b,to:"/",className:"visibleMobile"},a.a.createElement("span",null,"Gloscery")),a.a.createElement(Rn,null,a.a.createElement(In,{exact:!0,to:"/categories/fresh"},"Fresh"),a.a.createElement(In,{exact:!0,to:"/categories/frozen"},"Frozen"),a.a.createElement(In,{exact:!0,to:"/categories/drinks"},"Drinks"),a.a.createElement(In,{exact:!0,to:"/categories/",className:"visibleMobile"},"All categories")))};function wn(){var n=Object(p.a)(["\n  text-align: center;\n  margin-top: 15px;\n  padding: 15px;\n  font-size: 11px;\n"]);return wn=function(){return n},n}var Un=g.a.div(wn()),Gn=function(){return a.a.createElement(Un,null,a.a.createElement("span",null,"Some Copyrights and stuff"))};var Nn=function(){return a.a.createElement("div",null,a.a.createElement(An,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:I}),a.a.createElement(u.a,{path:"/categories",component:Sn})),a.a.createElement(Gn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qn=t(31),Fn=t(32),zn={homepage:[{id:1,title:"Healthy & fresh!",imageUrl:"https://source.unsplash.com/600x400/?healthy",url:"/categories/fresh"},{id:2,title:"Iced & cloudy!",imageUrl:"https://source.unsplash.com/600x400/?cream",url:"/categories/frozen"},{id:3,title:"Stay hydrated!",imageUrl:"https://source.unsplash.com/600x400/?drinks",url:"/categories/drinks"},{id:4,title:"Simply everything!",imageUrl:"https://source.unsplash.com/600x400/?groceries",url:"/categories/"}]},Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,e=arguments.length>1?arguments[1]:void 0;return e.type,n},Pn=t(16),Ln=t(34),Mn=t(14),Yn={categories:[],loaded:!1,isPending:!1},qn=function(n,e){var t=n.categories[e.categoryId],r=t.facets.map((function(n){return n.id===e.facet.id?Object(Mn.a)({},n,{active:!n.active}):n}));return Object(Mn.a)({},n,{categories:Object(Mn.a)({},n.categories,Object(Pn.a)({},e.categoryId,Object(Mn.a)({},t,{facets:Object(Ln.a)(r)})))})},Bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case dn.REQUEST_CATEGORIES_PENDING:return Object.assign({},n,{isPending:!0,loaded:!1});case dn.REQUEST_CATEGORIES_SUCCESS:return Object.assign({},n,{categories:e.payload,loaded:!0,isPending:!1});case dn.REQUEST_CATEGORIES_FAILED:return dn.assign({},n,{categories:e.payload,loaded:!0,isPending:!1});case dn.SET_CATEGORY_FACETS:return qn(n,e);default:return n}},Jn=Object(pn.c)({teasers:Dn,categories:Bn}),Vn=[Qn.logger,Fn.a],Wn=Object(pn.e)(Jn,pn.a.apply(void 0,Vn));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:Wn},a.a.createElement(i.a,null,a.a.createElement(Nn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.906f8ebc.chunk.js.map