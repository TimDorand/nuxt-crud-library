(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{140:function(e,t,r){"use strict";var n=r(144),l=r.n(n);t.a=l.a.create({baseURL:"https://my-json-server.typicode.com/alexandre-tobia/api-sample"})},142:function(e,t,r){var content=r(146);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("75b7166e",content,!0,{sourceMap:!1})},143:function(e,t,r){"use strict";r(44);var n=r(5),l=r(140),o={asyncData:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/servers");case 2:return t=e.sent,data=t.data,e.abrupt("return",{articles:data});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{title:"Mes articles",articles:[]}}},c=r(17),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("nuxt-link",{attrs:{to:"/"}},[r("h1",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Vinyl Library")])]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"basicExampleNav"}},[r("ul",{staticClass:"navbar-nav mr-auto"},e._l(e.articles,function(article){return r("li",{key:article.id,staticClass:"nav-item"},[r("nuxt-link",{attrs:{to:{name:"blog-id",params:{id:article.id}}}},[e._v("\n          "+e._s(article.name)+"\n        ")])],1)}),0),e._v(" "),e._m(1)])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("form",{staticClass:"form-inline"},[t("div",{staticClass:"md-form my-0"},[t("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}})])])}],!1,null,null,null);t.a=component.exports},145:function(e,t,r){"use strict";var n=r(142);r.n(n).a},146:function(e,t,r){(e.exports=r(59)(!1)).push([e.i,"input:-moz-read-only{border:none;outline:none}input:read-only{border:none;outline:none}td input{width:100%}",""])},147:function(e,t,r){"use strict";r.r(t);r(90),r(44);var n=r(5),l=r(140),o={components:{Header:r(143).a},props:{release:Object},data:function(){return{notification:!1,editView:!this.release||!this.release.id}},head:function(){return{title:this.release?"New release":"".concat(this.release.artist," - ").concat(this.release.title),titleTemplate:this.release?"New release | Library":"".concat(this.release.artist," - ").concat(this.release.title," | Library"),meta:[{}]}},methods:{saveRelease:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.release.thumbnail=this.release.thumbnail.match(/.(jpg|jpeg|png|gif)$/i)?this.release.thumbnail:"",!this.release||!this.release.id){e.next=7;break}return e.next=4,l.a.put("http://localhost:3000/releases/".concat(this.release.id),this.release);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,l.a.post("http://localhost:3000/releases/",this.release);case 9:e.t0=e.sent;case 10:e.t0,this.$router.push({name:"index",params:{notification:this.notification}});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deleteRelease:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("http://localhost:3000/releases/".concat(this.release.id));case 2:t=e.sent,console.log(t),this.notification={success:200===t.status,msg:200===t.status?"Release has been deleted! ":"Error"},this.$router.push({name:"index",params:{notification:this.notification}});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},c=(r(145),r(17)),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"form",on:{submit:function(t){return e.saveRelease()}}},[r("div",{staticClass:"heading"},[r("span",[r("nuxt-link",{attrs:{to:"/"}},[r("button",{staticClass:"btn btn-primary"},[e._v("Back")])])],1),e._v(" "),r("span",[r("button",{class:e.editView?"btn btn-danger":"btn btn-success",attrs:{type:"button"},on:{click:function(t){e.editView=!e.editView}}},[e.editView?e._e():r("span",[e._v("Edit")]),e._v(" "),e.editView?r("span",[e._v("Cancel")]):e._e()]),e._v(" "),e.editView?r("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.saveRelease()}}},[e.release.id?r("span",[e._v("Update")]):r("span",[e._v("Create")])]):e._e(),e._v(" "),e.release.id?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.deleteRelease()}}},[e._v("Delete")]):e._e()])]),e._v(" "),r("table",{staticClass:"table"},[r("tbody",[r("tr",[e._m(0),e._v(" "),r("td",[e.release.id?r("nuxt-link",{attrs:{to:{name:"library-id",params:{id:e.release.id}}}},[e.editView?r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.thumbnail,expression:"release.thumbnail"}],attrs:{readonly:!e.editView},domProps:{value:e.release.thumbnail},on:{input:function(t){t.target.composing||e.$set(e.release,"thumbnail",t.target.value)}}}):e._e(),e._v(" "),e.release.thumbnail?r("img",{attrs:{src:e.release.thumbnail,alt:"album_pic"}}):e._e()]):r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.thumbnail,expression:"release.thumbnail"}],attrs:{readonly:!e.editView},domProps:{value:e.release.thumbnail},on:{input:function(t){t.target.composing||e.$set(e.release,"thumbnail",t.target.value)}}}),e._v(" "),e.release.thumbnail?r("img",{attrs:{src:e.release.thumbnail,alt:"album_pic"}}):e._e()])],1)]),e._v(" "),r("tr",[r("td",[e._v("artist")]),e._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.artist,expression:"release.artist"}],attrs:{readonly:!e.editView},domProps:{value:e.release.artist},on:{input:function(t){t.target.composing||e.$set(e.release,"artist",t.target.value)}}})])]),e._v(" "),r("tr",[r("td",[e._v("title")]),e._v(" "),r("td",[e.release.id?r("nuxt-link",{attrs:{to:{name:"library-id",params:{id:e.release.id}}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.title,expression:"release.title"}],attrs:{readonly:!e.editView},domProps:{value:e.release.title},on:{input:function(t){t.target.composing||e.$set(e.release,"title",t.target.value)}}})]):r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.title,expression:"release.title"}],attrs:{readonly:!e.editView},domProps:{value:e.release.title},on:{input:function(t){t.target.composing||e.$set(e.release,"title",t.target.value)}}})])],1)]),e._v(" "),r("tr",[r("td",[e._v("label")]),e._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.label,expression:"release.label"}],attrs:{readonly:!e.editView},domProps:{value:e.release.label},on:{input:function(t){t.target.composing||e.$set(e.release,"label",t.target.value)}}})])]),e._v(" "),r("tr",[r("td",[e._v("catalog")]),e._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.catalog,expression:"release.catalog"}],attrs:{readonly:!e.editView},domProps:{value:e.release.catalog},on:{input:function(t){t.target.composing||e.$set(e.release,"catalog",t.target.value)}}})])]),e._v(" "),r("tr",[r("td",[e._v("year")]),e._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.year,expression:"release.year"}],attrs:{readonly:!e.editView},domProps:{value:e.release.year},on:{input:function(t){t.target.composing||e.$set(e.release,"year",t.target.value)}}})])]),e._v(" "),r("tr",[r("td",[e._v("format")]),e._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.release.format,expression:"release.format"}],attrs:{readonly:!e.editView},domProps:{value:e.release.format},on:{input:function(t){t.target.composing||e.$set(e.release,"format",t.target.value)}}})])])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("\n          thumbnail\n          "),t("br"),this._v(" "),t("small",[this._v("Valid image URL required")])])}],!1,null,null,null);t.default=component.exports},151:function(e,t,r){var content=r(182);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("0657380e",content,!0,{sourceMap:!1})},181:function(e,t,r){"use strict";var n=r(151);r.n(n).a},182:function(e,t,r){(e.exports=r(59)(!1)).push([e.i,".heading{margin-top:10px;margin-bottom:10px;display:flex;justify-content:space-between}",""])},189:function(e,t,r){"use strict";r.r(t);r(140);var header=r(143),n=r(147),l={components:{Header:header.a,Form:n.default},data:function(){return{title:null,release:{id:null,artist:null,title:null,label:null,catalog:null,year:null,format:null},editView:!0}},head:function(){return{titleTemplate:this.release?"New release | Library":"".concat(this.release.artist," - ").concat(this.release.title," | Library"),meta:[{}]}}},o=(r(181),r(17)),component=Object(o.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Header"),this._v(" "),t("div",{staticClass:"container"},[t("h2",[this._v("New release")]),this._v(" "),t("Form",{attrs:{release:this.release}})],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);