(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1958:function(e,t,r){},"2abe":function(e,t,r){},"3d41":function(e,t,r){"use strict";r("c1ed")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("7b17"),r("ab8b");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[0===e.response.length?r("Loader"):e._e(),r("Header",{attrs:{response:e.response},on:{ricerca:e.ricercaGenere2}}),r("Main",{attrs:{response:e.genereAlbums}})],1)},o=[],s=(r("4de4"),r("caad"),r("2532"),r("bc3a")),i=r.n(s),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sfondo"},[e._m(0),r("div",{staticClass:"select-box"},[r("form",[r("label",{attrs:{for:"genere"}},[e._v("SELEZIONA UN GENERE MUSICALE:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.ricercaGenere,expression:"ricercaGenere"}],attrs:{name:"genere",id:"genere"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ricercaGenere=t.target.multiple?r:r[0]}}},e._l(e.response,(function(t,n){return r("option",{key:n},[e._v(e._s(t.genre))])})),0)]),r("button",{on:{click:function(t){return e.$emit("ricerca",e.ricercaGenere)}}},[e._v("SELEZIONA")])])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"immagine"},[n("img",{attrs:{src:r("93df"),alt:"spotify-logo"}})])}],l={name:"Header",props:{response:Array},data:function(){return{ricercaGenere:""}}},f=l,p=(r("6dcd"),r("2877")),d=Object(p["a"])(f,c,u,!1,null,"7d2ec630",null),v=d.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sfondo"},[r("div",{staticClass:"albums-container"},[r("div",{staticClass:"container-inner"},e._l(e.response,(function(e,t){return r("Albums",{key:t,attrs:{poster:e.poster,title:e.title,author:e.author,year:e.year}})})),1)])])},m=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"albums-inner-container"},[r("div",{staticClass:"sfondo-album"},[r("img",{attrs:{src:e.poster,alt:"album ${title} of ${author}"}}),r("div",{staticClass:"title"},[e._v(e._s(e.title.toUpperCase()))]),r("div",{staticClass:"author"},[e._v(e._s(e.author))]),r("div",{staticClass:"year"},[e._v(e._s(e.year))])])])},_=[],g={name:"Albums",props:{poster:String,title:String,author:String,year:String}},y=g,O=(r("ceb8"),Object(p["a"])(y,h,_,!1,null,"444a2fd3",null)),x=O.exports,C={name:"Main",components:{Albums:x},props:{response:Array}},E=C,j=(r("3d41"),Object(p["a"])(E,b,m,!1,null,"564bbecf",null)),A=j.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sfondo"},[r("h1",[e._v("Caricamento in corso.....")])])}],$={name:"Loader"},G=$,M=(r("964f"),Object(p["a"])(G,w,S,!1,null,"6c2d9e84",null)),P=M.exports,k={name:"App",components:{Header:v,Main:A,Loader:P},data:function(){return{response:[],genereAlbums:[]}},created:function(){var e=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.response=t.data.response,e.ricercaGenere2("")}))},methods:{ricercaGenere2:function(e){this.genereAlbums=this.response.filter((function(t){return t.genre.includes(e)}))}}},L=k,N=Object(p["a"])(L,a,o,!1,null,null,null),H=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(H)}}).$mount("#app")},"6dcd":function(e,t,r){"use strict";r("d7bb")},"93df":function(e,t,r){e.exports=r.p+"img/spotify-logo.c24917d4.png"},"964f":function(e,t,r){"use strict";r("1958")},c1ed:function(e,t,r){},ceb8:function(e,t,r){"use strict";r("2abe")},d7bb:function(e,t,r){}});
//# sourceMappingURL=app.af4552a2.js.map