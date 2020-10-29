(function(e){function t(t){for(var n,s,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);v&&v(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return i.p+"js/"+({setup:"setup",usage:"usage"}[e]||e)+"."+{setup:"03fabf66",usage:"192d6b7c"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var v=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e25":function(e,t,a){},1215:function(e,t,a){"use strict";a("0e25")},"1ae4":function(e,t,a){e.exports=a.p+"img/logo.9a45fc76.svg"},2574:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",{directives:[{name:"waves",rawName:"v-waves"}]},[n("a",{staticClass:"menu-handle",on:{click:e.toggleMenu}}),n("img",{directives:[{name:"waves",rawName:"v-waves:hover.circle.float",arg:"hover",modifiers:{circle:!0,float:!0}}],staticClass:"logo",attrs:{alt:"Vue logo",src:a("1ae4")}}),n("div",{staticClass:"title"},[n("h1",{directives:[{name:"waves",rawName:"v-waves.shake",modifiers:{shake:!0}}]},[e._v("Vue Waves Effect")]),n("p",{staticClass:"small"},[e._v("Hint: click logo or header background")])])]),n("div",{staticClass:"content"},[n("aside-menu",{attrs:{hide:e.menuHide}}),n("router-view",{staticClass:"main-content"})],1)])},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("menu",{staticClass:"aside-menu",class:{hidden:e.hide}},[a("div",{staticClass:"lists"},[a("ul",{staticClass:"main-list"},[a("li",[a("a",{directives:[{name:"waves",rawName:"v-waves:hover.block",arg:"hover",modifiers:{block:!0}}],staticClass:"github-logo",attrs:{href:"https://github.com/isnur/vue-waves-effect"}},[a("span",{staticClass:"label"},[e._v("Github")])])]),a("li",{directives:[{name:"waves",rawName:"v-waves:hover.block",arg:"hover",modifiers:{block:!0}}]},[a("router-link",{attrs:{to:"/"}},[e._v("Getting Started")])],1),a("li",{directives:[{name:"waves",rawName:"v-waves:hover.block",arg:"hover",modifiers:{block:!0}}]},[a("router-link",{attrs:{to:"/setup"}},[e._v("Setup")])],1),a("li",{directives:[{name:"waves",rawName:"v-waves:hover.block",arg:"hover",modifiers:{block:!0}}]},[a("router-link",{attrs:{to:"/usage"}},[e._v("Usage")])],1)])]),a("footer",{staticClass:"footer"},[a("p",[e._v(" © "),a("span",{domProps:{textContent:e._s(e.year)}}),e._v(" Isnur MSM "),a("br"),e._v("All rights reserved ")])])])},i=[],u={name:"aside-menu",props:["hide"],computed:{dev:function(){return!1},year:function(){var e=new Date;return e.getUTCFullYear()}},methods:{mouseover:function(e){console.log(e),window.vueWavesEffect.ripple(this,{wait:null})}}},c=u,l=a("2877"),v=Object(l["a"])(c,s,i,!1,null,null,null),f=v.exports,d={name:"home",data:function(){return{menuHide:!0}},components:{AsideMenu:f},mounted:function(){var e=this;this.$router.beforeEach((function(t,a,n){e.menuHide=!0,n()}))},methods:{toggleMenu:function(){this.menuHide=!this.menuHide}}},p=d,m=(a("1215"),Object(l["a"])(p,r,o,!1,null,null,null)),h=m.exports,g=(a("d3b7"),a("8c4f")),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"home"},[a("h3",[e._v("Getting Started")]),a("p",{staticClass:"shields"},[a("a",{attrs:{href:"https://www.npmjs.com/package/vue-waves-effect",rel:"nofollow"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/v/vue-waves-effect.svg?style=flat-square",alt:"NPM"}})]),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-waves-effect",rel:"nofollow"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/dm/vue-waves-effect.svg?style=flat-square",alt:"NPM Downloads/month"}})]),a("a",{attrs:{href:"https://vuejs.org",rel:"nofollow"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/badge/vue-2-green.svg",alt:"Vue.js"}})])]),a("blockquote",[a("p",[e._v(" Vue.js waves effect directive based on "),a("a",{attrs:{href:"https://github.com/fians/Waves",target:"_blank"}},[e._v("Waves")])])]),a("p",[e._v(" Click effect inspired by Google's Material Design ")]),a("h3",[e._v("Builds")]),a("p",[e._v(" If you don't use a package manager, you can "),a("a",{attrs:{href:"https://unpkg.com/vue-waves-effect/",rel:"nofollow"}},[e._v(" access "),a("strong",[e._v("vue-waves-effect")]),e._v(" via unpkg (CDN) ")]),e._v(", download the source, or point your package manager to the url. ")]),a("p",[e._v(" The "),a("strong",[e._v("vue-waves-effect")]),e._v(" package includes precompiled production and development "),a("a",{attrs:{href:"https://github.com/umdjs/umd"}},[e._v("UMD")]),e._v(" builds in the "),a("a",{attrs:{href:"https://unpkg.com/vue-waves-effect/dist/",rel:"nofollow"}},[a("strong",[e._v("dist")]),e._v(" folder ")]),e._v(". They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a "),a("a",{attrs:{href:"https://unpkg.com/vue-waves-effect",rel:"nofollow"}},[a("strong",[e._v("<script>")]),e._v(" tag ")]),e._v(" on your page. The UMD builds make "),a("strong",[e._v("vue-waves-effect")]),e._v(" available as a "),a("strong",[e._v("window.vueWavesEffect")]),e._v(" global variable. ")]),a("h3",[e._v("License")]),a("p",[e._v(" The code is available under the "),a("a",{attrs:{href:"/hekigan/vue-waves-effect/blob/master/LICENSE"}},[e._v("MIT")]),e._v(" license. ")]),a("h3",[e._v("Contributing")]),a("p",[e._v(" We are open to contributions, see "),a("a",{attrs:{href:"https://github.com/isnur/vue-waves-effect/blob/master/CONTRIBUTING.md"}},[e._v("CONTRIBUTING.md")]),e._v(" for more info. ")])])}],_=(a("ee90"),{}),y=Object(l["a"])(_,w,b,!1,null,null,null),k=y.exports;n["a"].use(g["a"]);var C=new g["a"]({mode:"history",routes:[{path:"/",name:"home",component:k},{path:"/setup",name:"setup",component:function(){return a.e("setup").then(a.bind(null,"dc39"))}},{path:"/usage",name:"usage",component:function(){return a.e("usage").then(a.bind(null,"2421"))}}]}),j=a("2f62");n["a"].use(j["a"]);var N=new j["a"].Store({state:{},mutations:{},actions:{}}),E=(a("2574"),a("46d4"),a("966c"),a("494a"),a("dddc"),a("8449")),M={name:"waves",config:{},install:function(e,t){e.mixin({created:function(){E.init(t)}}),e.directive("waves",{inserted:function(e,t,a,n){var r=Object.keys(t.modifiers).map((function(e){return"waves-".concat(e)}));E.attach(e,r)},bind:function(e,t,a,n){"hover"===t.arg&&e.addEventListener("mouseenter",(function(){"IMG"===e.tagName||"INPUT"===e.tagName?E.ripple(e.parentElement,{wait:0}):E.ripple(e,{wait:0})}))},unbind:function(e,t,a,n){try{document.querySelectorAll(".waves-ripple").forEach((function(e){return e.remove()}))}catch(r){console.log(r)}},componentUpdated:function(e,t,a,n){try{document.querySelectorAll(".waves-ripple").forEach((function(e){return e.remove()}))}catch(r){console.log(r)}}})}},O=M;n["a"].use(O,{duration:500,delay:200}),n["a"].config.productionTip=!1,new n["a"]({router:C,store:N,render:function(e){return e(h)}}).$mount("#app")},e2c1:function(e,t,a){},ee90:function(e,t,a){"use strict";a("e2c1")}});
//# sourceMappingURL=app.17f89904.js.map