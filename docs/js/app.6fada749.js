(function(t){function e(e){for(var n,s,l=e[0],o=e[1],u=e[2],d=0,m=[];d<l.length;d++)s=l[d],r[s]&&m.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,l=1;l<i.length;l++){var o=i[l];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),r=i.n(n);r.a},"0782":function(t,e,i){"use strict";var n=i("c366"),r=i.n(n);r.a},"52b8":function(t,e,i){"use strict";var n=i("8556"),r=i.n(n);r.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"ui container"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"fields"},[i("div",{staticClass:"twelve wide field"},[i("Search",{attrs:{limit:t.limit},on:{getResults:t.GetResults}})],1),i("div",{staticClass:"four wide field"},[i("Limit",{on:{limitChanged:t.LimitChanged}})],1)]),i("div",{staticClass:"field"},[i("Gallery",{attrs:{imagesArr:t.imagesArr}})],1)])])])},a=[],s=(i("6762"),i("2fdb"),i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ui segment"},[i("form",{staticClass:"ui form",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[i("div",{staticClass:"field"},[i("label",[t._v("Search photos")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],attrs:{type:"text",placeholder:"Nature"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}})]),i("br"),t._m(0)])])])}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inline fields",staticStyle:{"margin-bottom":"0px",display:"flex","justify-content":"space-between"}},[i("button",{staticClass:"ui blue button",attrs:{type:"submit"}},[t._v("Search")]),i("div",{staticClass:"ui right floated history"})])}],o={name:"Search",props:["limit"],data:function(){return{term:"",data:""}},methods:{submitForm:function(){this.$emit("getResults",this.term,!0)}}},u=o,c=(i("0782"),i("2877")),d=Object(c["a"])(u,s,l,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ui segment"},[i("div",{staticClass:"ui form",on:{submit:function(e){return e.preventDefault(),t.limitChanged(e)}}},[i("div",{staticClass:"field"},[i("label",[t._v("Number of photos")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],attrs:{type:"number",min:"1",max:"400",placeholder:"1-400"},domProps:{value:t.limit},on:{change:t.limitChanged,input:function(e){e.target.composing||(t.limit=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],staticClass:"slider",attrs:{type:"range",min:"1",max:"400"},domProps:{value:t.limit},on:{change:t.limitChanged,__r:function(e){t.limit=e.target.value}}})])])])])},p=[],h={name:"Limit",data:function(){return{limit:"50"}},methods:{limitChanged:function(){this.$emit("limitChanged",this.limit)}}},v=h,g=(i("a2e1"),Object(c["a"])(v,f,p,!1,null,"160c22fa",null)),b=g.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ui segment",attrs:{id:"gallery"}},[i("br"),i("br"),t.imagesArr.length>0?i("div",{staticClass:"ui small images _grid"},t._l(t.imagesArr,function(t){return i("img",{key:""+t.id,staticClass:"ui rounded image",attrs:{src:t.urls.small,"data-src":t.urls.full}})}),0):t._e(),i("br"),i("br")])])},C=[],_={name:"Gallery",props:["imagesArr"],methods:{},data:function(){return{}}},w=_,x=(i("52b8"),Object(c["a"])(w,y,C,!1,null,"1ce59e60",null)),E=x.exports,j=i("bc3a"),A=i.n(j),O=i("5118"),S=i("ba15"),L={name:"app",data:function(){return{limit:"50",imagesArr:[],history:[]}},components:{Search:m,Limit:b,Gallery:E},methods:{initGallery:function(){var t=document.querySelectorAll(".image");t.forEach(function(t){t.addEventListener("click",function(){var e=window.open(t.getAttribute("data-src"),"_blank");e.focus()})})},LimitChanged:function(t){this.limit=t},GetResults:function(t,e){document.getElementById("gallery").classList.add("loading");var i=this;A.a.get("https://api.unsplash.com/search/photos?query=".concat(t,"&client_id=").concat(S.API_KEY,"&per_page=").concat(this.limit,"&fit=crop&h=150&w=150")).then(function(n){i.imagesArr=n.data.results,Object(O["setTimeout"])(function(){i.initGallery(),document.getElementById("gallery").classList.remove("loading"),e&&i.addHistory(t)},1e3)}).catch(function(t){return console.log(t)})},addHistory:function(t){if(!this.history.includes(t.toLowerCase())){this.history.push(t.toLowerCase()),Array.prototype.randomElement=function(){return this[Math.floor(Math.random()*this.length)]};var e=["red","orange","blue","yellow","olive","green","teal","purple","pink"],i=function(e){return t.length>11?t.substr(0,11)+"...":t},n=e.randomElement(),r=document.createElement("A"),a=document.createTextNode(i(t));r.appendChild(a),r.classList.add("ui","label",n),document.querySelector(".history").prepend(r),this.initHistory()}},initHistory:function(){var t=this;document.querySelectorAll("a.ui.label").forEach(function(e){e.addEventListener("click",function(){t.GetResults(e.innerHTML,!1)})})}},computed:{}},P=L,k=(i("034f"),Object(c["a"])(P,r,a,!1,null,null,null)),G=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")},"64a9":function(t,e,i){},8556:function(t,e,i){},"9da6":function(t,e,i){},a2e1:function(t,e,i){"use strict";var n=i("9da6"),r=i.n(n);r.a},ba15:function(t){t.exports={API_KEY:"404e8a9a84ecb3802462dfcbc2e238e78e0808c345bb894d62d7fa4767e5b57d"}},c366:function(t,e,i){}});
//# sourceMappingURL=app.6fada749.js.map