(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[4498],{44498:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});r(82772);var n=function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("Query Explorer")]),e._v("See "),t("a",{attrs:{href:"https://docs.ActivityWatch.net/en/latest/examples/querying-data.html"}},[e._v("the documentation")]),e._v(" for help on how to write queries."),t("hr"),e.error?t("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),t("form",[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[e._v("Start"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.startdate,expression:"startdate"}],staticClass:"form-control",attrs:{type:"date",max:e.today},domProps:{value:e.startdate},on:{input:function(t){t.target.composing||(e.startdate=t.target.value)}}})]),t("div",{staticClass:"form-group col-md-6"},[e._v("End"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.enddate,expression:"enddate"}],staticClass:"form-control",attrs:{type:"date",max:e.tomorrow},domProps:{value:e.enddate},on:{input:function(t){t.target.composing||(e.enddate=t.target.value)}}})])]),t("div",{staticClass:"form-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.query_code,expression:"query_code"}],staticClass:"form-control",staticStyle:{"font-family":"monospace"},attrs:{rows:"10"},domProps:{value:e.query_code},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.query():null},input:function(t){t.target.composing||(e.query_code=t.target.value)}}})]),t("div",{staticClass:"form-inline"},[t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.query()}}},[e._v("Query")])]),t("span",{staticStyle:{"padding-left":"1em"}}),e._v(e._s(e.eventcount_str))])]),t("hr"),t("aw-selectable-eventview",{attrs:{events:e.events,event_type:e.event_type}})],1)},s=[],a=r(14475),i=r(84542),u=r(64721),o=r.n(u),c=r(41609),l=r.n(c),f=(r(73210),r(79753),r(74916),r(15306),r(38862),r(21249),r(23123),r(30381)),v=r.n(f),d=r(2313),p=v()().startOf("day"),h=v()(p).add(24,"hours");const _={name:"QueryExplorer",data:function(){var e=this.$route.query.q;return l()(this.$route.query.q)&&(e='\nafk_events = query_bucket(find_bucket("aw-watcher-afk_"));\nwindow_events = query_bucket(find_bucket("aw-watcher-window_"));\nwindow_events = filter_period_intersect(window_events, filter_keyvals(afk_events, "status", ["not-afk"]));\nmerged_events = merge_events_by_keys(window_events, ["app", "title"]);\nmerged_events = categorize(merged_events, __CATEGORIES__);\nRETURN = sort_by_duration(merged_events);\n'.trim()),{query_code:e,event_type:"currentwindow",events:[],today:p.format(),tomorrow:h.format(),error:"",startdate:p.format("YYYY-MM-DD"),enddate:h.format("YYYY-MM-DD")}},computed:{eventcount_str:function(){return Array.isArray(this.events)?"Number of events: "+this.events.length:""}},methods:{query:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,r,n,s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.query_code,!o()(t,"__CATEGORIES__")){e.next=7;break}if(r=(0,d.v)().classes_for_query,0!==(0,d.v)().classes_for_query.length){e.next=6;break}return this.error="__CATEGORIES__ was used in query but no categories have been defined yet.",e.abrupt("return");case 6:t=t.replace("__CATEGORIES__",JSON.stringify(r));case 7:return t=t.split(";").map((function(e){return e.trim()+";"})),n=[v()(this.startdate).format()+"/"+v()(this.enddate).format()],e.prev=9,e.next=12,this.$aw.query(n,t);case 12:s=e.sent,this.events=s[0],this.error="",e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](9),this.error=e.t0.response.data.message;case 20:case"end":return e.stop()}}),e,this,[[9,17]])})));function t(){return e.apply(this,arguments)}return t}()}},g=_;var m=r(1001),y=(0,m.Z)(g,n,s,!1,null,"4eb515de",null);const x=y.exports},96874:e=>{function t(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=t},47443:(e,t,r)=>{var n=r(42118);function s(e,t){var r=null==e?0:e.length;return!!r&&n(e,t,0)>-1}e.exports=s},1196:e=>{function t(e,t,r){var n=-1,s=null==e?0:e.length;while(++n<s)if(r(t,e[n]))return!0;return!1}e.exports=t},41848:e=>{function t(e,t,r,n){var s=e.length,a=r+(n?1:-1);while(n?a--:++a<s)if(t(e[a],a,e))return a;return-1}e.exports=t},42118:(e,t,r)=>{var n=r(41848),s=r(62722),a=r(42351);function i(e,t,r){return t===t?a(e,t,r):n(e,s,r)}e.exports=i},62722:e=>{function t(e){return e!==e}e.exports=t},5976:(e,t,r)=>{var n=r(6557),s=r(45357),a=r(30061);function i(e,t){return a(s(e,t,n),e+"")}e.exports=i},56560:(e,t,r)=>{var n=r(75703),s=r(38777),a=r(6557),i=s?function(e,t){return s(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=i},27561:(e,t,r)=>{var n=r(67990),s=/^\s+/;function a(e){return e?e.slice(0,n(e)+1).replace(s,""):e}e.exports=a},45652:(e,t,r)=>{var n=r(88668),s=r(47443),a=r(1196),i=r(74757),u=r(23593),o=r(21814),c=200;function l(e,t,r){var l=-1,f=s,v=e.length,d=!0,p=[],h=p;if(r)d=!1,f=a;else if(v>=c){var _=t?null:u(e);if(_)return o(_);d=!1,f=i,h=new n}else h=t?[]:p;e:while(++l<v){var g=e[l],m=t?t(g):g;if(g=r||0!==g?g:0,d&&m===m){var y=h.length;while(y--)if(h[y]===m)continue e;t&&h.push(m),p.push(g)}else f(h,m,r)||(h!==p&&h.push(m),p.push(g))}return p}e.exports=l},47415:(e,t,r)=>{var n=r(29932);function s(e,t){return n(t,(function(t){return e[t]}))}e.exports=s},23593:(e,t,r)=>{var n=r(58525),s=r(50308),a=r(21814),i=1/0,u=n&&1/a(new n([,-0]))[1]==i?function(e){return new n(e)}:s;e.exports=u},16612:(e,t,r)=>{var n=r(77813),s=r(98612),a=r(65776),i=r(13218);function u(e,t,r){if(!i(r))return!1;var u=typeof t;return!!("number"==u?s(r)&&a(t,r.length):"string"==u&&t in r)&&n(r[t],e)}e.exports=u},45357:(e,t,r)=>{var n=r(96874),s=Math.max;function a(e,t,r){return t=s(void 0===t?e.length-1:t,0),function(){var a=arguments,i=-1,u=s(a.length-t,0),o=Array(u);while(++i<u)o[i]=a[t+i];i=-1;var c=Array(t+1);while(++i<t)c[i]=a[i];return c[t]=r(o),n(e,this,c)}}e.exports=a},30061:(e,t,r)=>{var n=r(56560),s=r(21275),a=s(n);e.exports=a},21275:e=>{var t=800,r=16,n=Date.now;function s(e){var s=0,a=0;return function(){var i=n(),u=r-(i-a);if(a=i,u>0){if(++s>=t)return arguments[0]}else s=0;return e.apply(void 0,arguments)}}e.exports=s},42351:e=>{function t(e,t,r){var n=r-1,s=e.length;while(++n<s)if(e[n]===t)return n;return-1}e.exports=t},67990:e=>{var t=/\s/;function r(e){var r=e.length;while(r--&&t.test(e.charAt(r)));return r}e.exports=r},75703:e=>{function t(e){return function(){return e}}e.exports=t},85564:(e,t,r)=>{var n=r(21078);function s(e){var t=null==e?0:e.length;return t?n(e,1):[]}e.exports=s},64721:(e,t,r)=>{var n=r(42118),s=r(98612),a=r(47037),i=r(40554),u=r(52628),o=Math.max;function c(e,t,r,c){e=s(e)?e:u(e),r=r&&!c?i(r):0;var l=e.length;return r<0&&(r=o(l+r,0)),a(e)?r<=l&&e.indexOf(t,r)>-1:!!l&&n(e,t,r)>-1}e.exports=c},41609:(e,t,r)=>{var n=r(280),s=r(64160),a=r(35694),i=r(1469),u=r(98612),o=r(44144),c=r(25726),l=r(36719),f="[object Map]",v="[object Set]",d=Object.prototype,p=d.hasOwnProperty;function h(e){if(null==e)return!0;if(u(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||o(e)||l(e)||a(e)))return!e.length;var t=s(e);if(t==f||t==v)return!e.size;if(c(e))return!n(e).length;for(var r in e)if(p.call(e,r))return!1;return!0}e.exports=h},47037:(e,t,r)=>{var n=r(44239),s=r(1469),a=r(37005),i="[object String]";function u(e){return"string"==typeof e||!s(e)&&a(e)&&n(e)==i}e.exports=u},6162:(e,t,r)=>{var n=r(56029),s=r(53325),a=r(6557);function i(e){return e&&e.length?n(e,a,s):void 0}e.exports=i},50308:e=>{function t(){}e.exports=t},89734:(e,t,r)=>{var n=r(21078),s=r(82689),a=r(5976),i=r(16612),u=a((function(e,t){if(null==e)return[];var r=t.length;return r>1&&i(e,t[0],t[1])?t=[]:r>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),s(e,n(t,1),[])}));e.exports=u},18601:(e,t,r)=>{var n=r(14841),s=1/0,a=17976931348623157e292;function i(e){if(!e)return 0===e?e:0;if(e=n(e),e===s||e===-s){var t=e<0?-1:1;return t*a}return e===e?e:0}e.exports=i},40554:(e,t,r)=>{var n=r(18601);function s(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}e.exports=s},14841:(e,t,r)=>{var n=r(27561),s=r(13218),a=r(33448),i=NaN,u=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function f(e){if("number"==typeof e)return e;if(a(e))return i;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=o.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?i:+e}e.exports=f},45578:(e,t,r)=>{var n=r(67206),s=r(45652);function a(e,t){return e&&e.length?s(e,n(t,2)):[]}e.exports=a},52628:(e,t,r)=>{var n=r(47415),s=r(3674);function a(e){return null==e?[]:n(e,s(e))}e.exports=a},2313:(e,t,r)=>{"use strict";r.d(t,{v:()=>x});var n=r(35161),s=r.n(n),a=r(6162),i=r.n(a),u=r(18446),o=r.n(u),c=r(85564),l=r.n(c),f=r(45578),v=r.n(f),d=r(89734),p=r.n(d),h=r(50361),_=r.n(h),g=(r(21249),r(57327),r(41539),r(68309),r(47042),r(69600),r(69826),r(2707),r(92222),r(21692)),m=r(55208),y=r(33205),x=(0,y.Q_)("categories",{state:function(){return{classes:[],classes_unsaved_changes:!1}},getters:{classes_clean:function(){return this.classes.map(g.cleanCategory)},classes_hierarchy:function(){var e=(0,g.build_category_hierarchy)(_()(this.classes));return p()(e,[function(e){return e.id||0}])},classes_for_query:function(){return this.classes.filter((function(e){return null!==e.rule.type})).map((function(e){return[e.name,e.rule]}))},all_categories:function(){return v()(l()(this.classes.map((function(e){for(var t=[],r=1;r<=e.name.length;r++)t.push(e.name.slice(0,r));return t}))),(function(e){return e.join(">>>>")}))},allCategoriesSelect:function(){var e=this.all_categories,t=e.map((function(e){return{text:e.join(" > "),value:e,id:e.id}}));return p()(t,"text")},get_category:function(){var e=this;return function(t){("string"===typeof t||t instanceof String)&&console.error("Passed category was string, expected array. Lookup will fail.");var r=e.classes.find((function(e){return o()(e.name,t)}));return r?(0,g.annotate)(_()(r)):(o()(t,["Uncategorized"])||console.error("Couldn't find category: ",t),{name:["Uncategorized"],rule:{type:"none"}})}},get_category_by_id:function(){var e=this;return function(t){return(0,g.annotate)(_()(e.classes.find((function(e){return e.id==t}))))}},get_category_color:function(){var e=this;return function(t){return(0,m.EB)(e.get_category(t),e.classes)}},category_select:function(){var e=this;return function(t){var r=e.all_categories;return r=r.map((function(e){return{text:e.join(" > "),value:e}})).sort((function(e,t){return e.text>t.text})),t&&(r=[{text:"All",value:null},{text:"Uncategorized",value:["Uncategorized"]}].concat(r)),r}}},actions:{load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e&&(e=(0,g.loadClasses)()),e=(0,g.createMissingParents)(e);var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!1},save:function(){var e=(0,g.saveClasses)(this.classes);return this.classes_unsaved_changes=!1,e},import:function(e){var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!0},updateClass:function(e){console.log("Updating class:",e);var t=this.classes.find((function(t){return t.id===e.id})),r=t.name,n=t.name.length;void 0===e.id||null===e.id?(e.id=i()(s()(this.classes,"id"))+1,this.classes.push(e)):Object.assign(t,e),s()(this.classes,(function(t){o()(r,t.name.slice(0,n))&&(t.name=e.name.concat(t.name.slice(n)),console.log("Renamed child:",t.name))})),this.classes_unsaved_changes=!0},addClass:function(e){e.id=i()(s()(this.classes,"id"))+1,this.classes.push(e),this.classes_unsaved_changes=!0},removeClass:function(e){this.classes=this.classes.filter((function(t){return t.id!==e})),this.classes_unsaved_changes=!0},appendClassRule:function(e,t){var r=this.classes.find((function(t){return t.id===e}));"none"===r.rule.type||null===r.rule.type?(r.rule.type="regex",r.rule.regex=t):"regex"===r.rule.type&&(r.rule.regex+="|"+t),this.classes_unsaved_changes=!0},restoreDefaultClasses:function(){var e=0;this.classes=(0,g.createMissingParents)(g.defaultCategories).map((function(t){return Object.assign(t,{id:e++})})),this.classes_unsaved_changes=!0},clearAll:function(){this.classes=[],this.classes_unsaved_changes=!0}}})}}]);
//# sourceMappingURL=4498.48fcf070.js.map