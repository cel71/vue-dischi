(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0133":function(t,e,n){"use strict";n("8186")},"3dda":function(t,e,n){"use strict";n("a2ca")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{response:t.response}})],1)},s=[],o=n("bc3a"),i=n.n(o),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sfondo"},[r("div",{staticClass:"immagine"},[r("img",{attrs:{src:n("93df"),alt:""}})]),r("div",{})])}],l={name:"Header"},p=l,f=(n("72ad"),n("2877")),d=Object(f["a"])(p,c,u,!1,null,"0fe3e95e",null),b=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sfondo"},[n("div",{staticClass:"albums-container"},[n("div",{staticClass:"container-inner"},t._l(t.response,(function(t,e){return n("Albums",{key:e,attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year}})})),1)])])},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"albums-inner-container"},[n("div",{staticClass:"sfondo-album"},[n("img",{attrs:{src:t.poster,alt:"album ${title} of ${author}"}}),n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"author"},[t._v(t._s(t.author))]),n("div",{staticClass:"year"},[t._v(t._s(t.year))])])])},y=[],_={name:"Albums",props:{poster:String,title:String,author:String,year:String}},g=_,O=(n("0133"),Object(f["a"])(g,h,y,!1,null,"28df2420",null)),j=O.exports,x={name:"Main",components:{Albums:j},props:{response:Array}},w=x,C=(n("3dda"),Object(f["a"])(w,v,m,!1,null,"7cbdd3a4",null)),S=C.exports,$={name:"App",components:{Header:b,Main:S},data:function(){return{response:[]}},created:function(){var t=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.response=e.data.response}))}},M=$,P=Object(f["a"])(M,a,s,!1,null,null,null),A=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"72ad":function(t,e,n){"use strict";n("b988")},8186:function(t,e,n){},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},a2ca:function(t,e,n){},b988:function(t,e,n){}});
//# sourceMappingURL=app.7e24de73.js.map