(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[2296],{82296:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var s=function(){var e=this,n=e._self._c;return n("b-form-tags",{attrs:{id:"tags-component-select","add-on-change":"","no-outer-focus":""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.tags,r=t.inputAttrs,a=t.inputHandlers,i=t.disabled,u=t.removeTag;return[n("b-form-select",e._g(e._b({attrs:{disabled:i||0===e.options.length,options:e.options},scopedSlots:e._u([{key:"first",fn:function(){return[n("option",{attrs:{disabled:"",value:""}},[e._v("Choose a tag...")])]},proxy:!0}],null,!0)},"b-form-select",r,!1),a)),s.length>0?n("ul",{staticClass:"list-inline d-inline-block my-2"},e._l(s,(function(t){return n("li",{key:t,staticClass:"list-inline-item"},[n("b-form-tag",{attrs:{title:t,disabled:i,variant:"info"},on:{remove:function(e){return u(t)}}},[e._v(e._s(t))])],1)})),0):e._e()]}}]),model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})},r=[],a=t(20144),i=t(2313);const u=" > ",l=a["default"].extend({data(){return{value:[]}},computed:{options(){const e=(0,i.v)().classes;return e.map((e=>e.name.join(u)))}},watch:{value(e){const n=e.map((e=>e.split(u)));this.$emit("input",n)}}}),o=l;var c=t(1001),f=(0,c.Z)(o,s,r,!1,null,null,null);const h=f.exports},96874:e=>{function n(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}e.exports=n},47443:(e,n,t)=>{var s=t(42118);function r(e,n){var t=null==e?0:e.length;return!!t&&s(e,n,0)>-1}e.exports=r},1196:e=>{function n(e,n,t){var s=-1,r=null==e?0:e.length;while(++s<r)if(t(n,e[s]))return!0;return!1}e.exports=n},41848:e=>{function n(e,n,t,s){var r=e.length,a=t+(s?1:-1);while(s?a--:++a<r)if(n(e[a],a,e))return a;return-1}e.exports=n},42118:(e,n,t)=>{var s=t(41848),r=t(62722),a=t(42351);function i(e,n,t){return n===n?a(e,n,t):s(e,r,t)}e.exports=i},62722:e=>{function n(e){return e!==e}e.exports=n},5976:(e,n,t)=>{var s=t(6557),r=t(45357),a=t(30061);function i(e,n){return a(r(e,n,s),e+"")}e.exports=i},56560:(e,n,t)=>{var s=t(75703),r=t(38777),a=t(6557),i=r?function(e,n){return r(e,"toString",{configurable:!0,enumerable:!1,value:s(n),writable:!0})}:a;e.exports=i},45652:(e,n,t)=>{var s=t(88668),r=t(47443),a=t(1196),i=t(74757),u=t(23593),l=t(21814),o=200;function c(e,n,t){var c=-1,f=r,h=e.length,v=!0,d=[],g=d;if(t)v=!1,f=a;else if(h>=o){var p=n?null:u(e);if(p)return l(p);v=!1,f=i,g=new s}else g=n?[]:d;e:while(++c<h){var _=e[c],m=n?n(_):_;if(_=t||0!==_?_:0,v&&m===m){var x=g.length;while(x--)if(g[x]===m)continue e;n&&g.push(m),d.push(_)}else f(g,m,t)||(g!==d&&g.push(m),d.push(_))}return d}e.exports=c},23593:(e,n,t)=>{var s=t(58525),r=t(50308),a=t(21814),i=1/0,u=s&&1/a(new s([,-0]))[1]==i?function(e){return new s(e)}:r;e.exports=u},16612:(e,n,t)=>{var s=t(77813),r=t(98612),a=t(65776),i=t(13218);function u(e,n,t){if(!i(t))return!1;var u=typeof n;return!!("number"==u?r(t)&&a(n,t.length):"string"==u&&n in t)&&s(t[n],e)}e.exports=u},45357:(e,n,t)=>{var s=t(96874),r=Math.max;function a(e,n,t){return n=r(void 0===n?e.length-1:n,0),function(){var a=arguments,i=-1,u=r(a.length-n,0),l=Array(u);while(++i<u)l[i]=a[n+i];i=-1;var o=Array(n+1);while(++i<n)o[i]=a[i];return o[n]=t(l),s(e,this,o)}}e.exports=a},30061:(e,n,t)=>{var s=t(56560),r=t(21275),a=r(s);e.exports=a},21275:e=>{var n=800,t=16,s=Date.now;function r(e){var r=0,a=0;return function(){var i=s(),u=t-(i-a);if(a=i,u>0){if(++r>=n)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}e.exports=r},42351:e=>{function n(e,n,t){var s=t-1,r=e.length;while(++s<r)if(e[s]===n)return s;return-1}e.exports=n},75703:e=>{function n(e){return function(){return e}}e.exports=n},85564:(e,n,t)=>{var s=t(21078);function r(e){var n=null==e?0:e.length;return n?s(e,1):[]}e.exports=r},6162:(e,n,t)=>{var s=t(56029),r=t(53325),a=t(6557);function i(e){return e&&e.length?s(e,a,r):void 0}e.exports=i},50308:e=>{function n(){}e.exports=n},89734:(e,n,t)=>{var s=t(21078),r=t(82689),a=t(5976),i=t(16612),u=a((function(e,n){if(null==e)return[];var t=n.length;return t>1&&i(e,n[0],n[1])?n=[]:t>2&&i(n[0],n[1],n[2])&&(n=[n[0]]),r(e,s(n,1),[])}));e.exports=u},45578:(e,n,t)=>{var s=t(67206),r=t(45652);function a(e,n){return e&&e.length?r(e,s(n,2)):[]}e.exports=a},2313:(e,n,t)=>{"use strict";t.d(n,{v:()=>y});var s=t(35161),r=t.n(s),a=t(6162),i=t.n(a),u=t(18446),l=t.n(u),o=t(85564),c=t.n(o),f=t(45578),h=t.n(f),v=t(89734),d=t.n(v),g=t(50361),p=t.n(g),_=(t(21249),t(57327),t(41539),t(68309),t(47042),t(69600),t(69826),t(2707),t(92222),t(21692)),m=t(55208),x=t(33205),y=(0,x.Q_)("categories",{state:function(){return{classes:[],classes_unsaved_changes:!1}},getters:{classes_clean:function(){return this.classes.map(_.cleanCategory)},classes_hierarchy:function(){var e=(0,_.build_category_hierarchy)(p()(this.classes));return d()(e,[function(e){return e.id||0}])},classes_for_query:function(){return this.classes.filter((function(e){return null!==e.rule.type})).map((function(e){return[e.name,e.rule]}))},all_categories:function(){return h()(c()(this.classes.map((function(e){for(var n=[],t=1;t<=e.name.length;t++)n.push(e.name.slice(0,t));return n}))),(function(e){return e.join(">>>>")}))},allCategoriesSelect:function(){var e=this.all_categories,n=e.map((function(e){return{text:e.join(" > "),value:e,id:e.id}}));return d()(n,"text")},get_category:function(){var e=this;return function(n){("string"===typeof n||n instanceof String)&&console.error("Passed category was string, expected array. Lookup will fail.");var t=e.classes.find((function(e){return l()(e.name,n)}));return t?(0,_.annotate)(p()(t)):(l()(n,["Uncategorized"])||console.error("Couldn't find category: ",n),{name:["Uncategorized"],rule:{type:"none"}})}},get_category_by_id:function(){var e=this;return function(n){return(0,_.annotate)(p()(e.classes.find((function(e){return e.id==n}))))}},get_category_color:function(){var e=this;return function(n){return(0,m.EB)(e.get_category(n),e.classes)}},category_select:function(){var e=this;return function(n){var t=e.all_categories;return t=t.map((function(e){return{text:e.join(" > "),value:e}})).sort((function(e,n){return e.text>n.text})),n&&(t=[{text:"All",value:null},{text:"Uncategorized",value:["Uncategorized"]}].concat(t)),t}}},actions:{load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e&&(e=(0,_.loadClasses)()),e=(0,_.createMissingParents)(e);var n=0;this.classes=e.map((function(e){return Object.assign(e,{id:n++})})),this.classes_unsaved_changes=!1},save:function(){var e=(0,_.saveClasses)(this.classes);return this.classes_unsaved_changes=!1,e},import:function(e){var n=0;this.classes=e.map((function(e){return Object.assign(e,{id:n++})})),this.classes_unsaved_changes=!0},updateClass:function(e){console.log("Updating class:",e);var n=this.classes.find((function(n){return n.id===e.id})),t=n.name,s=n.name.length;void 0===e.id||null===e.id?(e.id=i()(r()(this.classes,"id"))+1,this.classes.push(e)):Object.assign(n,e),r()(this.classes,(function(n){l()(t,n.name.slice(0,s))&&(n.name=e.name.concat(n.name.slice(s)),console.log("Renamed child:",n.name))})),this.classes_unsaved_changes=!0},addClass:function(e){e.id=i()(r()(this.classes,"id"))+1,this.classes.push(e),this.classes_unsaved_changes=!0},removeClass:function(e){this.classes=this.classes.filter((function(n){return n.id!==e})),this.classes_unsaved_changes=!0},appendClassRule:function(e,n){var t=this.classes.find((function(n){return n.id===e}));"none"===t.rule.type||null===t.rule.type?(t.rule.type="regex",t.rule.regex=n):"regex"===t.rule.type&&(t.rule.regex+="|"+n),this.classes_unsaved_changes=!0},restoreDefaultClasses:function(){var e=0;this.classes=(0,_.createMissingParents)(_.defaultCategories).map((function(n){return Object.assign(n,{id:e++})})),this.classes_unsaved_changes=!0},clearAll:function(){this.classes=[],this.classes_unsaved_changes=!0}}})}}]);
//# sourceMappingURL=2296.9aee70df.js.map