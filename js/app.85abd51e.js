(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},s={app:0},r=[];function i(e){return l.p+"js/"+({404:"404",Contact:"Contact",Dishes:"Dishes",Menu:"Menu",Menus:"Menus",Wines:"Wines"}[e]||e)+"."+{404:"f8343b33",Contact:"73869158",Dishes:"89d328e5",Menu:"5361a300",Menus:"4382b1d3",Wines:"2e042f85"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={Contact:1,Dishes:1,Menu:1,Menus:1,Wines:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise(function(t,a){for(var n="css/"+({404:"404",Contact:"Contact",Dishes:"Dishes",Menu:"Menu",Menus:"Menus",Wines:"Wines"}[e]||e)+"."+{404:"31d6cfe0",Contact:"8a50fb96",Dishes:"51dc29f4",Menu:"26257797",Menus:"51dc29f4",Wines:"51dc29f4"}[e]+".css",s=l.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var c=r[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],p.parentNode.removeChild(p),a(r)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){o[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");r.type=n,r.request=o,a[1](r)}s[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/restaurant-vue-spa/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a1d":function(e,t,a){e.exports=a.p+"img/insideRestaurant2.2c567b2c.jpg"},"0f2e":function(e,t,a){e.exports=a.p+"img/insideRestaurant.480ba153.png"},"26c3":function(e,t,a){e.exports=a.p+"img/wines.dea56769.png"},2948:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"socialNetworks":[{"title":"Facebook Page","alt":"Facebook Logo"},{"title":"Instagram Page","alt":"Instagram Logo"},{"title":"Twitter Page","alt":"Twitter Logo"}],"privacyAndCookies":"Privacy and Cookies","termsOfUse":"Terms of use","followUs":"follow us"},"fr":{"socialNetworks":[{"title":"Page Facebook","alt":"Logo de Facebook"},{"title":"Page Instagram","alt":"Logo d\'Instagram"},{"title":"Page Twitter","alt":"Logo de Twitter"}],"privacyAndCookies":"Confidentialité et Cookies","termsOfUse":"Conditions d\'utilisation","followUs":"suivez-nous"}}'),delete e.options._Ctor}},3198:function(e,t,a){"use strict";var n=a("4889"),o=a.n(n);o.a},"3c2c":function(e,t,a){e.exports=a.p+"img/dishes.96082c30.png"},4889:function(e,t,a){},"49f8":function(e,t,a){var n={"./en.json":"edd4","./fr.json":"f693"};function o(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id="49f8"},"4bd9":function(e,t,a){"use strict";var n=a("a42e"),o=a.n(n);t["default"]=o.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Navbar"),a("v-content",{staticClass:"mx-4"},[a("router-view"),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],staticClass:"mb-12",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:e.toTop}},[a("v-icon",[e._v("mdi-chevron-up")])],1)],1),a("Footer")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{staticClass:"primary",attrs:{app:"","elevate-on-scroll":""}},[a("v-toolbar-title",{staticClass:"secondary--text headline font-weight-light"},[e._v("Restaurant")]),a("v-spacer"),e._l(e.languages,function(t,n){return a("v-btn",{key:"lang"+n,staticClass:"white--text ma-2",attrs:{text:""},on:{click:function(a){return e.changeLanguage(t)}}},[e._v(e._s(t.title))])}),a("v-app-bar-nav-icon",{attrs:{color:"secondary","x-large":""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],2),a("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:""}},[a("v-list-item-group",{attrs:{color:"yellow darken-3"}},e._l(e.links,function(t,n){return a("v-list-item",{key:t.text,staticClass:"mx-2 my-4",attrs:{to:t.path}},[a("v-list-item-icon",[a("v-icon",{attrs:{right:"",color:"primary",large:""}},[e._v("mdi-"+e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"primary--text text-capitalize font-weight-bold subtitle-1"},[e._v(e._s(e.$t("links["+n+"].text")))])],1)],1)}),1)],1)],1)],1)},i=[],l={name:"Navbar",data(){return{drawer:!1,links:[{icon:"home",name:"Home",path:"/"},{icon:"silverware",name:"MenuPage",path:"/menu"},{icon:"contact-mail",name:"Contact",path:"/contact"}],languages:[{title:"en",value:"en"},{title:"fr",value:"fr"}]}},methods:{changeLanguage(e){this.$root.$i18n.locale=e.value,this.$store.dispatch("language/setLanguage",e.value)}}},c=l,u=a("2877"),d=a("7d5d"),p=a("6544"),m=a.n(p),f=a("40dc"),g=a("5bc1"),h=a("8336"),v=a("132d"),b=a("8860"),A=a("da13"),y=a("5d23"),w=a("1baa"),x=a("34c3"),k=a("f774"),C=a("2fa4"),M=a("2a7f"),O=Object(u["a"])(c,r,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(O);var S=O.exports;m()(O,{VAppBar:f["a"],VAppBarNavIcon:g["a"],VBtn:h["a"],VIcon:v["a"],VList:b["a"],VListItem:A["a"],VListItemContent:y["a"],VListItemGroup:w["a"],VListItemIcon:x["a"],VListItemTitle:y["b"],VNavigationDrawer:k["a"],VSpacer:C["a"],VToolbarTitle:M["a"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"secondary",attrs:{app:""}},[a("v-row",{attrs:{justify:"space-around",align:"center"}},[a("v-col",{staticClass:"caption pa-0",attrs:{cols:"3"}},[a("span",[e._v(e._s(e.$t("termsOfUse")))])]),a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("v-row",{staticClass:"pa-0"},[e.$vuetify.breakpoint.xs?a("v-col",{staticClass:"pa-0",attrs:{align:"center"}},[a("v-btn",{staticClass:"black--text",attrs:{text:"",to:"/contact",title:"follow us"}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-earth")]),a("span",{staticClass:"text-capitalize"},[e._v(e._s(e.$t("followUs")))])],1)],1):e._e(),e._l(e.socialNetworks,function(t,n){return e.$vuetify.breakpoint.smAndUp?a("v-col",{key:t.title,staticClass:"pa-0",attrs:{align:"center"}},[a("v-btn",{attrs:{text:"",href:t.href,title:e.$t("socialNetworks["+n+"].title"),target:"_blank"}},[a("img",{attrs:{src:t.src,alt:e.$t("socialNetworks["+n+"].alt"),height:"30"}})])],1):e._e()})],2)],1),a("v-col",{staticClass:"caption text-right pa-0",attrs:{cols:"3"}},[a("span",[e._v(e._s(e.$t("privacyAndCookies")))])])],1)],1)},P=[],T={name:"Footer",data(){return{socialNetworks:[{href:"https://www.facebook.com/",title:"Facebook Page",src:a("7b08")},{href:"https://www.instagram.com/",title:"Instagram Page",src:a("d23a")},{href:"https://www.twitter.com/",title:"Twitter Page",src:a("66d7")}]}}},F=T,E=a("67d3"),L=a("62ad"),R=a("553a"),B=a("0fd9"),q=Object(u["a"])(F,j,P,!1,null,null,null);"function"===typeof E["default"]&&Object(E["default"])(q);var U=q.exports;m()(q,{VBtn:h["a"],VCol:L["a"],VFooter:R["a"],VIcon:v["a"],VRow:B["a"]});var D={name:"App",components:{Navbar:S,Footer:U},data(){return{fab:!1}},methods:{onScroll(e){if("undefined"===typeof window)return;const t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20},toTop(){this.$vuetify.goTo(0)}}},Q=D,I=a("7496"),V=a("a75b"),G=a("269a"),H=a.n(G),K=a("f977"),Y=Object(u["a"])(Q,o,s,!1,null,null,null),J=Y.exports;m()(Y,{VApp:I["a"],VBtn:h["a"],VContent:V["a"],VIcon:v["a"]}),H()(Y,{Scroll:K["a"]});var N=a("8c4f"),Z=a("2f62"),X=a("ead5"),z=a.n(X);function W(){const e=a("49f8"),t=[];return e.keys().forEach(e=>{const a=e.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const e=a[1];t.push(e)}}),t}n["a"].use(z.a);const _=W();var $={namespaced:!0,state:{language:n["a"].localStorage.get("language")},mutations:{SET_LANGUAGE(e,t){n["a"].localStorage.set("language",t),e.language=t}},actions:{setLanguage({commit:e},t){if("string"===typeof t)e("SET_LANGUAGE",t);else{const a=_.find(e=>t.find(t=>t.split(new RegExp(e,"gi")).length-1>0?e:null));e("SET_LANGUAGE",a)}}}};n["a"].use(Z["a"]);var ee=new Z["a"].Store({modules:{language:$},state:{urlsPictures:[{url:a("0f2e"),alt:"interior of the restaurant",pages:["home","menu"],menu:0},{url:a("3c2c"),alt:"summer plates of the restaurant",pages:["home","menu"],menu:2},{url:a("26c3"),alt:"bottle of wine",pages:["home","menu"],menu:1},{url:a("a650"),alt:"summer vegetables and pasta",pages:["menu"],menu:3},{url:a("0a1d"),alt:"summer vegetables and pasta",pages:["home"],name:"restaurant"}]},mutations:{},actions:{},getters:{urlsPictures(e){return t=>e.urlsPictures.filter(e=>e.pages.findIndex(e=>e==t)>=0)}}}),te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",{staticClass:"display-1 secondary--text text-capitalize font-weight-light ma-0 pt-3"},[e._v(e._s(e.$t("title")))]),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center",align:"start"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"secondary pa-2",attrs:{elevation:"6"}},[a("v-carousel",{attrs:{cycle:"cycle",interval:"3500","show-arrows-on-hover":"",height:"100%"}},e._l(e.urls,function(t){return a("v-carousel-item",{key:t.url},[a("v-img",{attrs:{src:t.url,"aspect-ratio":"1.3333",alt:t.alt},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"","x-large":""}})],1)]},proxy:!0}],null,!0)})],1)}),1)],1)],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card",{staticClass:"secondary pa-2",attrs:{elevation:"6"}},[a("v-card-title",{staticClass:"primary text-capitalize secondary--text"},[e._v(e._s(e.$t("home.presentation.title")))]),a("v-card-text",{staticClass:"primary white--text text-justify body-1"},[a("div",{staticClass:"text-presentation",domProps:{innerHTML:e._s(e.$t("home.presentation.content"))}})])],1)],1)],1)],1)],1)},ae=[],ne={name:"Home",computed:{urls(){return this.$store.getters.urlsPictures("home")}}},oe=ne,se=(a("3198"),a("4bd9")),re=a("b0af"),ie=a("99d9"),le=a("5e66"),ce=a("3e35"),ue=a("a523"),de=a("adda"),pe=a("490a"),me=Object(u["a"])(oe,te,ae,!1,null,"563fe83e",null);"function"===typeof se["default"]&&Object(se["default"])(me);var fe=me.exports;m()(me,{VCard:re["a"],VCardText:ie["b"],VCardTitle:ie["c"],VCarousel:le["a"],VCarouselItem:ce["a"],VCol:L["a"],VContainer:ue["a"],VImg:de["a"],VProgressCircular:pe["a"],VRow:B["a"]});var ge=[{path:"/",name:"Home",component:fe},{path:"/menu",name:"MenuPage",component:()=>a.e("Menu").then(a.bind(null,"9a0b"))},{path:"/contact",name:"Contact",component:()=>a.e("Contact").then(a.bind(null,"b8fa"))},{path:"/**",component:()=>a.e("404").then(a.bind(null,"8cdb"))}],he=a("a925");function ve(){const e=a("49f8"),t={};return e.keys().forEach(a=>{const n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){const o=n[1];t[o]=e(a)}}),t}n["a"].use(he["a"]);var be=new he["a"]({locale:"en",fallbackLocale:"en",messages:ve()});n["a"].use(N["a"]);const Ae=new N["a"]({mode:"history",base:"/restaurant-vue-spa/",routes:ge});Ae.beforeEach((e,t,a)=>{ee.state.language.language&&ee.state.language.language!==be.locale?(be.locale=ee.state.language.language,a()):ee.state.language.language?a():ee.dispatch("language/setLanguage",navigator.languages).then(()=>{be.locale=ee.state.language.language,a()})});var ye=Ae,we=a("9483");Object(we["a"])("/restaurant-vue-spa/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var xe=a("f309");n["a"].use(xe["a"]);var ke=new xe["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#aa3300",secondary:"#b68e00",tertiary:"#000000",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},breakpoint:{thresholds:{xs:390}}});a("d5e8"),a("5363");n["a"].component("MenuMenus",()=>a.e("Menus").then(a.bind(null,"f714"))),n["a"].component("MenuWines",()=>a.e("Wines").then(a.bind(null,"5f99"))),n["a"].component("MenuDishes",()=>a.e("Dishes").then(a.bind(null,"46b9"))),n["a"].config.productionTip=!1,new n["a"]({router:ye,vuetify:ke,store:ee,i18n:be,render:e=>e(J)}).$mount("#app")},"66d7":function(e,t){e.exports="data:image/png;base64,UklGRp4EAABXRUJQVlA4WAoAAAAQAAAAxwAAxwAAQUxQSNcCAAABR6CgjSQ1dSqYniEiAmSM8ysRcmXbdtvmACBoldGhhJxLxTFKBgWUykKpLJTORskA4p3/Fg28d+9zFSP6PwH47//fXjdP7873Xvlt/Y5zLyKP9Wv+tFxtsrjqlZ5h09UGVdcnSc3GZTRv8SsDSUnsqmLLbE7yjQUkH2aODtn6GYB+Tb4QNWbkpm5XBGu3JBmLqpg6uaTFBz4uIdqQoYuZjfnvRSUkUwc92u+I6pFkZO+zvRyiDx+l9mp7MYBeKObyETu21mk9AzAoAjHjOZmtj/YiJLdcgNjJHD61NLX2Zv3UkKG4MrRjrN2RZApxTK0kdNtRwKc2em5yaCgjC5duYknjnzEP2n1ykkPypwY8aDdxEou6bMK3raYuMog+bMQ3bSoXkaz1Znwj5h1kL7bgTrOZvSIQhroF94Mmlb0c0qdtmEcSCnEfW7HcCfyz3o4sXgdzpv6AsUA+bC8DGHlkYoXkw972F48c2nKby4P5JYwVZAoS/50GwEReKq3KQyzW4t5Lm7LcC498NyHJc3FPpI0fye9K+6gjlnaoI5LW0xFKW9QRSEOtoYD4qYZM3kcNqbx1DQvyUCuIFYwVRAp6CgIFmIkroPFSXKoCtbQXOg6lxTpQCQuVrBtRJbT2RaVqcGQELejBxp0R01GyGABYr8VAaVKcn90bSs20gKJfqKlEddSMJJVQuy4p1QMjqKtoIihQ1JOTQfNMTFfVpZhAFWohKXQfComVoRJRQntSS3ihDutGQKQPG8ZZBh8mt65iLwAbw68ucnjzi4vYG9d0mMOXPbqMfbFeu8jhyWRGlx1PJDO6TOHH9RldlqEfBoZOu/Dh2i3dZvDg5qmh2yJUdbq9tTU8/U7nHag+psy3UH4k4gPUHws4gAePnR0EPsCxowN4sl+72IE3k2/WilX49MTY2Q/h1+TUtNtfgX+T4fdGD3vL8PTa8PTs/v7ubG/7Jf77//dWAFZQOCCgAQAA8BUAnQEqyADIAD6RSJxLJaSioaZdiEiwEglnbuFykPUdswiBd3Brix+gH8A/AD6/e/wMSdOGi8nReTovJ0Xk6LydF5Oi8T5kvnUAR7IKiB/1ur7+cLCkeyI8bPxuiw/qu6CGHym5OH0Gq24afg5ge21mLrqQiiZ4INs6Pp/JdqGkmAEbz4Iy3XTIcs8qwy7IuW/M1GXKjYNTsqLepgUyf4OBlVStY3WsbrWN1rG61jdaxutY3WsaoAD+/Nq/N0Q+r1bYF9+gAAAChY+JUu8Isypw7Gd1mbMaEmiGr7WG/7cfM2xLuWB/MSGVEY+RRiIY2ALZIYIHaInKidf1zCwxC1Fy1yLgDh5T4jl/zzgI6SZjkBAq0BsiVeJS04AMvRevp64LYE3lJhgr2Ak1z01hdZoHZSMRKj5u0Mfk/olw856dIvMfEybcZiATrSlvaneWJazd5EM52Gq/ozAD33ArszB+G9Bxkku7H0cvPF7Nm83yiimYRxEc/w1+9B6bEUU9/66USbOR1umc25jCl6D3FaR4e5Pf6MwOKAAAAAAAAAA="},"67d3":function(e,t,a){"use strict";var n=a("2948"),o=a.n(n);t["default"]=o.a},"7b08":function(e,t){e.exports="data:image/png;base64,UklGRmICAABXRUJQVlA4WAoAAAAQAAAAxwAAxwAAQUxQSOkAAAABR0CmARn2u0wKArhERECM9xJubNtWk4+33gdG4NRJYABO7VI6/Bb9b9xIZK37cInoP8O2bRxRV/5/gDqC+Ctcprmmq+QQVLihyDJM2tJmSkxLSfgWivBVFOELH4mBDnFw5KBNHBw40IiDCQsLFhQHOnHQZmHDwp6FozMErVXOncrny8B3F1kUoKUtjQUq3VIIVsVSggU/LmXFx2LxPj6U5cnH4GUD+6dG+bK+pbJVKK7f5Qj6/VSRq+Q3HXIZivVlytLaojGKyGVVS6nIdUng91PP8/H99vf/8ufUZb1pFS4Rjlgk/jsmAABWUDggUgEAALARAJ0BKsgAyAA+kUifS6WkoqGlOhgAsBIJaW7hcG4A/gA0pm+tF30n/C3U/OwAEESOpOQVOdDTPhpZXFqqqzBBSio+5+WXFqtz4R1HyCpznRh7e7GyuLT5I7fOYTHlC1pTAoAauULh/X6KM+ZDnQ0zi5sLAFquGl8qJKLfR1Jxs9rpe9pryQri1XDTPhpZXFquGmfCIAD9OM/3sVdff6qurTXYAABc/Q2ldkPsPa/LClIU8M7JLlJTH/D/Xdhqo0yIOPVC20EsHx43axleGDgwXuWiVbGeFYz0QbOfYSjCz0nUftytBkLd+R2Byi6QIopfFgBMogm7qSk69eQOawmRa3srrgH//5oiD2wFms2IaVUa+byyufg+bvA0Qg4PsLVLOATuM2YDvJYXaoBQSHawQJqYjwajuUS4CZ5gcnDEXdl60AWyF07ybllRNz+AAAAA"},"7d5d":function(e,t,a){"use strict";var n=a("ccb4"),o=a.n(n);t["default"]=o.a},a42e:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"title":"home"},"fr":{"title":"acceuil"}}'),delete e.options._Ctor}},a650:function(e,t,a){e.exports=a.p+"img/home.0b24ea7a.png"},ccb4:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"links":[{"text":"home","name":"Home"},{"text":"menu","name":"MenuPage"},{"text":"contact","name":"Contact"}]},"fr":{"links":[{"text":"acceuil","name":"Home"},{"text":"menu","name":"MenuPage"},{"text":"nous contacter","name":"Contact"}]}}'),delete e.options._Ctor}},d23a:function(e,t){e.exports="data:image/png;base64,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"},edd4:function(e){e.exports={home:{presentation:{title:"presentation",content:"Our gourmet restaurant (1 Michelin star), located a few steps from the Bourges Cathedral, occupies a beautiful mansion of 1844, surrounded by gardens, in the military district of the nineteenth century.<br/>It is in this environment that we will have great pleasure to welcome you. We wanted a warm, modern atmosphere. Thus, our dining room, fully glazed, offers a view of our garden. Two comfortable lounges welcome you for an aperitif or a coffee and a private lounge can also be reserved for the duration of the meal.<br/>In fine weather, you can enjoy your meals on the terrace, in the calm of our garden.<br/>The Circle is above all a story of friendship between two chefs, Pascal Chaupitre and Christophe Lot. A conviviality that the chefs will transmit to you to a gastronomic and inventive cuisine, full of surprises.<br/>So, be sure that our team will always be there to ensure you have the best time possible."}},menu:{dishes:{title:"dishes",data:[{title:"our starters",content:["Foie gras cooked in sea salt, local apples – Foie gras raviole, parsley/chickpeas/peanuts","Organic tomatoes from Bourges, chartreuse verte/vanilla/lemon balm – Fried focaccia, dried tomatoes/lemon thyme","Grilled big prawn, bread tabbouleh/fennel/cardamom – Frozen bisque, gazpacho/zucchinis"],available:!0},{title:"our fish",content:["Smooth Albacore tuna, miso/french beans/sesame – Confit in olive oïl, anchovies/caramelized onions","Monkfish cooked on the fishbone, early vegetables/seaweed/preserved lemon – Monkfish cheek and lemongrass, coconut milk/red pepper"],available:!0},{title:"our meat",content:["Foie gras cooked in sea salt, local apples – Foie gras raviole, parsley/chickpeas/peanuts","Organic tomatoes from Bourges, chartreuse verte/vanilla/lemon balm – Fried focaccia, dried tomatoes/lemon thyme","Grilled big prawn, bread tabbouleh/fennel/cardamom – Frozen bisque, gazpacho/zucchinis"],available:!0},{title:"selection of fine cheeses",available:!0},{title:"our desserts",content:["Red berries in tomato water, bloody mary sorbet/basil/celery – Raspberries in apple juice, sorrel/olive oil sabayon","Peaches and pinot gris from Reuilly, verbena/badian/fresh almonds – « Peach-mozzarella », green pepper/pine nuts","Chocolate and fresh mint, pistachio nuts/green tea/meringue – Puffed tapioca, milk/cocoa/caramel"],available:!0}]},menus:{title:"menus",data:[{title:"menu club",content:["First course and second course or One course and Dessert (to choose in the « Initiation menu »). Every day for lunch, except Saturday and bank holidays."],available:!0},{title:"cercle initiation",content:["One starter, one main course, one dessert chosen from the Main Menu ( additional charge for cheeses) – All dishes are served in one version only"],available:!0},{title:"cercle gourmand",content:["One starter, one main course, one dessert chosen from the Main Menu ( additional charge for cheeses) – All dishes are served in two versions"],available:!0},{title:"cercle découverte",content:["One starter, one second starter or one fish course, one main course, one dessert chosen from the Main Menu ( additional charge for cheeses) – All dishes are served in two versions"],available:!0},{title:"cercle dégustation",content:["This menu is served to the whole table and only on booking (minimum of 48h in advance). It offers seasonal dishes but also some exceptional products that need preparation. We will ask you to arrive at 12.15 or 7.45 pm because it is a moment of pleasure that lasts !"],available:!0},{title:"menu cerceau",content:["Starter : foie gras or marinated salmon, ½ dish and 1/2 dessert to choose from the Main Menu (or Selection of ice creams for the dessert)"],available:!0}]},wines:{title:"wines",data:[{content:["Our sommelier offers a selection of all regions of France and some foreign vineyards. In total it is more than 500 references to discover, including some old vintages. Do not hesitate to ask for personalized advice."]},{title:"wine list",button:!0}]}},contact:{tel:{text:"tel to",contactAddress:"tel:0000000000"},mail:{text:"mail to",contactAddress:"mailto:restaurant@restaurant.net"}}}},f693:function(e){e.exports={home:{presentation:{title:"présentation",content:"Notre restaurant gastronomique (1 étoile au guide Michelin), situé à quelques pas de la Cathédrale de Bourges, occupe une très belle maison bourgeoise de 1844, entourée de jardins, dans l’ancien quartier militaire du XIXe siècle.C’est dans cet environnement calme que nous aurons grand plaisir à vous accueillir. Nous avons voulu un cadre chaleureux, empreint d’une certaine modernité.  Ainsi, notre salle de restaurant, entièrement vitrée, vous offre une vue sur notre jardin. Deux salons confortables vous accueillent le temps d’un apéritif ou d’un café et un salon privé peut vous être réservé également pour la durée du repas.<br/>Aux beaux jours, vous pourrez profiter de votre repas servi en terrasse, dans le calme de notre jardin.<br/>Le Cercle, c’est avant tout une histoire d’amitié entre deux chefs, Pascal Chaupitre et Christophe Lot. Une convivialité que les chefs sauront vous transmettre à travers une cuisine gastronomique et inventive, pleine de surprises.<br/>Ainsi, soyez sûr que notre équipe sera toujours à votre écoute et aux petits soins afin que vous passiez le meilleur moment possible."}},menu:{dishes:{title:"plats",data:[{title:"nos entrées",content:["Foie gras cuit au sel, pommes de Saint-Martin – Raviole de foie gras, persil/pois chiches/sésame","Tomates Bio locales, chartreuse verte/vanille/mélisse – Focaccia frite, tomates confites/huile de thym citron","Grosse gambas grillée, taboulé de pain/fenouil/cardamome – Bisque glacée, gaspacho/courgettes"],available:!0},{title:"nos poissons",content:["Rouget Barbet frits en écailles, betteraves/poivron/chorizo – Gravlax, cocos de Paimpol/vinaigrette aux foies","Lotte cuite sur l’arête, légumes primeurs/algues/citron confit – Joue de lotte à la citronnelle, lait de coco/roquette"],available:!0},{title:"nos viandes",content:["Quasi de veau rôti, sauge/aubergines/jus amaretto – Rouelle de tête de veau, sauce tonnato/câpres","Porc fermier à l’estragon, gnocchis de pomme de terre/abricots – Burger, pain de banane/parmesan/pastèque"],available:!0},{title:"Sélection de fromages affinés",available:!0},{title:"nos desserts",content:["Fruits rouges à l’eau de tomate, sorbet bloody mary/basilic/cèleri – Framboises au jus de pomme, oseille/sabayon huile d’olive","Melon et pastèque, chimichurri/cacahuètes/épices douces – Pastèque au campari, feta/crumble au thym","Chocolat et menthe fraîche, pistaches/thé vert/meringue – Tapioca soufflé, lait/cacao/caramel"],available:!0}]},menus:{title:"menus",data:[{title:"menu club",content:["Entrée/plat OU plat/dessert à choisir dans la carte Initiation. Pour le déjeuner uniquement, sauf samedi et jours fériés."],available:!0},{title:"cercle initiation",content:["Uniquement le vendredi à dîner (sauf jours fériés) – Only Friday for dinner (except bank holidays) - Une entrée au choix, un plat au choix, un dessert au choix (sélection de fromages en supplément) – Tous les plats sont servis en une seule version"],available:!0},{title:"cercle gourmand",content:["Une entrée au choix, un plat au choix, un dessert au choix,  à choisir dans la carte, (sélection de fromages en supplément) – Tous les plats sont servis en deux versions"],available:!0},{title:"cercle découverte",content:["Une entrée, une deuxième entrée ou un poisson,  un plat, un dessert à choisir dans la carte (sélection de fromages en supplément) – Tous les plats sont servis en deux versions"],available:!0},{title:"cercle dégustation",content:["Ce menu est servi à l’ensemble de la table et uniquement sur réservation (48 h à l’avance minimum). Il est composé de plats du moment mais aussi de quelques produits d’exception qui demandent un peu d’anticipation. Nous vous demanderons d’être présents pour 12h15 ou 19h45 car c’est un moment de plaisir qui dure … !"],available:!0},{title:"menu cerceau",content:["Entrée foie gras ou saumon mariné, ½ plat et 1/2 dessert à choisir à la carte (ou une Assiette de glaces en dessert)"],available:!0}]},wines:{title:"vins",data:[{content:["Notre sommelier vous propose une sélection de toutes les régions de France et de certains vignobles étrangers. Au total c’est plus de 500 références à découvrir, dont certains vieux millésimes. N’hésitez pas à le solliciter pour un conseil personnalisé."]},{title:"carte des vins",button:!0}]}},contact:{tel:{text:"Tél du",contactAddress:"tel:+33000000000"},mail:{text:"Mail au",contactAddress:"mailto:restaurant@restaurant.net"}}}}});