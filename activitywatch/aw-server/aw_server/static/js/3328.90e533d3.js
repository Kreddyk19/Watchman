(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[3328],{73328:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});n(82772);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("b-form-group",[t("b-form-select",{model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[t("option",{attrs:{value:"custom"}},[e._v("Custom regex")]),t("option",{attrs:{value:"categories"}},[e._v("Use existing categories")])])],1),t("b-input-group",["categories"==e.mode?t("aw-select-categories",{model:{value:e.filterCategoriesData,callback:function(t){e.filterCategoriesData=t},expression:"filterCategoriesData"}}):e._e(),"custom"==e.mode?t("b-input",{attrs:{placeholder:"Regex pattern to search for"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generate()}},model:{value:e.pattern,callback:function(t){e.pattern=t},expression:"pattern"}}):e._e(),t("b-input-group-append",[e._t("input-group-append")],2)],1)],1)},s=[],a=n(14475),i=n(84542),o=n(30393),u=n(98803),c=(n(21249),n(57327),n(41539),n(69600),n(68309),n(26699),n(32023),n(92222),n(20144)),l=n(2313),f=" > ";const h=c["default"].extend({name:"SelectCategoriesOrPattern",props:{filterCategories:{type:Array,default:function(){return[]}}},data:function(){return{mode:"categories",pattern:"",filterCategoriesData:[]}},computed:{categories:function(){return(0,l.v)().classes},categoriesWithRules:function(){var e=this;return"categories"===this.mode?this.categories.filter((function(t){var n,r=t.name.join(f),s=(0,u.Z)(e.filterCategoriesData);try{for(s.s();!(n=s.n()).done;){var a=n.value;if(r.includes(a.join(f)))return!0}}catch(i){s.e(i)}finally{s.f()}return!1})).filter((function(e){return"regex"===e.rule.type})).map((function(e){return[e.name,e.rule]})):"custom"===this.mode?[[["searched"],{type:"regex",regex:this.pattern}]]:(console.error("Unknown mode:",this.mode),[])}},watch:{filterCategories:function(){this.filterCategoriesData=[].concat((0,o.Z)(this.filterCategoriesData),(0,o.Z)(this.filterCategories))},filterCategoriesData:function(){this.$emit("input",this.categoriesWithRules),console.log(this.categoriesWithRules)},pattern:function(){this.$emit("input",this.categoriesWithRules),console.log(this.categoriesWithRules)}},mounted:function(){return(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.v)().load();case 2:case"end":return e.stop()}}),e)})))()}}),g=h;var p=n(1001),d=(0,p.Z)(g,r,s,!1,null,null,null);const v=d.exports},96874:e=>{function t(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=t},47443:(e,t,n)=>{var r=n(42118);function s(e,t){var n=null==e?0:e.length;return!!n&&r(e,t,0)>-1}e.exports=s},1196:e=>{function t(e,t,n){var r=-1,s=null==e?0:e.length;while(++r<s)if(n(t,e[r]))return!0;return!1}e.exports=t},41848:e=>{function t(e,t,n,r){var s=e.length,a=n+(r?1:-1);while(r?a--:++a<s)if(t(e[a],a,e))return a;return-1}e.exports=t},42118:(e,t,n)=>{var r=n(41848),s=n(62722),a=n(42351);function i(e,t,n){return t===t?a(e,t,n):r(e,s,n)}e.exports=i},62722:e=>{function t(e){return e!==e}e.exports=t},5976:(e,t,n)=>{var r=n(6557),s=n(45357),a=n(30061);function i(e,t){return a(s(e,t,r),e+"")}e.exports=i},56560:(e,t,n)=>{var r=n(75703),s=n(38777),a=n(6557),i=s?function(e,t){return s(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},45652:(e,t,n)=>{var r=n(88668),s=n(47443),a=n(1196),i=n(74757),o=n(23593),u=n(21814),c=200;function l(e,t,n){var l=-1,f=s,h=e.length,g=!0,p=[],d=p;if(n)g=!1,f=a;else if(h>=c){var v=t?null:o(e);if(v)return u(v);g=!1,f=i,d=new r}else d=t?[]:p;e:while(++l<h){var m=e[l],_=t?t(m):m;if(m=n||0!==m?m:0,g&&_===_){var x=d.length;while(x--)if(d[x]===_)continue e;t&&d.push(_),p.push(m)}else f(d,_,n)||(d!==p&&d.push(_),p.push(m))}return p}e.exports=l},23593:(e,t,n)=>{var r=n(58525),s=n(50308),a=n(21814),i=1/0,o=r&&1/a(new r([,-0]))[1]==i?function(e){return new r(e)}:s;e.exports=o},16612:(e,t,n)=>{var r=n(77813),s=n(98612),a=n(65776),i=n(13218);function o(e,t,n){if(!i(n))return!1;var o=typeof t;return!!("number"==o?s(n)&&a(t,n.length):"string"==o&&t in n)&&r(n[t],e)}e.exports=o},45357:(e,t,n)=>{var r=n(96874),s=Math.max;function a(e,t,n){return t=s(void 0===t?e.length-1:t,0),function(){var a=arguments,i=-1,o=s(a.length-t,0),u=Array(o);while(++i<o)u[i]=a[t+i];i=-1;var c=Array(t+1);while(++i<t)c[i]=a[i];return c[t]=n(u),r(e,this,c)}}e.exports=a},30061:(e,t,n)=>{var r=n(56560),s=n(21275),a=s(r);e.exports=a},21275:e=>{var t=800,n=16,r=Date.now;function s(e){var s=0,a=0;return function(){var i=r(),o=n-(i-a);if(a=i,o>0){if(++s>=t)return arguments[0]}else s=0;return e.apply(void 0,arguments)}}e.exports=s},42351:e=>{function t(e,t,n){var r=n-1,s=e.length;while(++r<s)if(e[r]===t)return r;return-1}e.exports=t},75703:e=>{function t(e){return function(){return e}}e.exports=t},85564:(e,t,n)=>{var r=n(21078);function s(e){var t=null==e?0:e.length;return t?r(e,1):[]}e.exports=s},6162:(e,t,n)=>{var r=n(56029),s=n(53325),a=n(6557);function i(e){return e&&e.length?r(e,a,s):void 0}e.exports=i},50308:e=>{function t(){}e.exports=t},89734:(e,t,n)=>{var r=n(21078),s=n(82689),a=n(5976),i=n(16612),o=a((function(e,t){if(null==e)return[];var n=t.length;return n>1&&i(e,t[0],t[1])?t=[]:n>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),s(e,r(t,1),[])}));e.exports=o},45578:(e,t,n)=>{var r=n(67206),s=n(45652);function a(e,t){return e&&e.length?s(e,r(t,2)):[]}e.exports=a},2313:(e,t,n)=>{"use strict";n.d(t,{v:()=>y});var r=n(35161),s=n.n(r),a=n(6162),i=n.n(a),o=n(18446),u=n.n(o),c=n(85564),l=n.n(c),f=n(45578),h=n.n(f),g=n(89734),p=n.n(g),d=n(50361),v=n.n(d),m=(n(21249),n(57327),n(41539),n(68309),n(47042),n(69600),n(69826),n(2707),n(92222),n(21692)),_=n(55208),x=n(33205),y=(0,x.Q_)("categories",{state:function(){return{classes:[],classes_unsaved_changes:!1}},getters:{classes_clean:function(){return this.classes.map(m.cleanCategory)},classes_hierarchy:function(){var e=(0,m.build_category_hierarchy)(v()(this.classes));return p()(e,[function(e){return e.id||0}])},classes_for_query:function(){return this.classes.filter((function(e){return null!==e.rule.type})).map((function(e){return[e.name,e.rule]}))},all_categories:function(){return h()(l()(this.classes.map((function(e){for(var t=[],n=1;n<=e.name.length;n++)t.push(e.name.slice(0,n));return t}))),(function(e){return e.join(">>>>")}))},allCategoriesSelect:function(){var e=this.all_categories,t=e.map((function(e){return{text:e.join(" > "),value:e,id:e.id}}));return p()(t,"text")},get_category:function(){var e=this;return function(t){("string"===typeof t||t instanceof String)&&console.error("Passed category was string, expected array. Lookup will fail.");var n=e.classes.find((function(e){return u()(e.name,t)}));return n?(0,m.annotate)(v()(n)):(u()(t,["Uncategorized"])||console.error("Couldn't find category: ",t),{name:["Uncategorized"],rule:{type:"none"}})}},get_category_by_id:function(){var e=this;return function(t){return(0,m.annotate)(v()(e.classes.find((function(e){return e.id==t}))))}},get_category_color:function(){var e=this;return function(t){return(0,_.EB)(e.get_category(t),e.classes)}},category_select:function(){var e=this;return function(t){var n=e.all_categories;return n=n.map((function(e){return{text:e.join(" > "),value:e}})).sort((function(e,t){return e.text>t.text})),t&&(n=[{text:"All",value:null},{text:"Uncategorized",value:["Uncategorized"]}].concat(n)),n}}},actions:{load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e&&(e=(0,m.loadClasses)()),e=(0,m.createMissingParents)(e);var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!1},save:function(){var e=(0,m.saveClasses)(this.classes);return this.classes_unsaved_changes=!1,e},import:function(e){var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!0},updateClass:function(e){console.log("Updating class:",e);var t=this.classes.find((function(t){return t.id===e.id})),n=t.name,r=t.name.length;void 0===e.id||null===e.id?(e.id=i()(s()(this.classes,"id"))+1,this.classes.push(e)):Object.assign(t,e),s()(this.classes,(function(t){u()(n,t.name.slice(0,r))&&(t.name=e.name.concat(t.name.slice(r)),console.log("Renamed child:",t.name))})),this.classes_unsaved_changes=!0},addClass:function(e){e.id=i()(s()(this.classes,"id"))+1,this.classes.push(e),this.classes_unsaved_changes=!0},removeClass:function(e){this.classes=this.classes.filter((function(t){return t.id!==e})),this.classes_unsaved_changes=!0},appendClassRule:function(e,t){var n=this.classes.find((function(t){return t.id===e}));"none"===n.rule.type||null===n.rule.type?(n.rule.type="regex",n.rule.regex=t):"regex"===n.rule.type&&(n.rule.regex+="|"+t),this.classes_unsaved_changes=!0},restoreDefaultClasses:function(){var e=0;this.classes=(0,m.createMissingParents)(m.defaultCategories).map((function(t){return Object.assign(t,{id:e++})})),this.classes_unsaved_changes=!0},clearAll:function(){this.classes=[],this.classes_unsaved_changes=!0}}})},30393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(79753);var r=n(81127);function s(e){if(Array.isArray(e))return(0,r.Z)(e)}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(91038);function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=n(45197);n(21703),n(96647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return s(e)||a(e)||(0,i.Z)(e)||o()}}}]);
//# sourceMappingURL=3328.90e533d3.js.map