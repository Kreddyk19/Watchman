"use strict";(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[9052],{96736:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});n(47042),n(74916),n(64765);var r=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Report")]),t._v("Generate a report of time spent on a certain category of device activity."),e("b-alert",{staticClass:"mt-2",staticStyle:{},attrs:{show:""}},[t._v("This feature is still in early development.")]),t.error?e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e(),e("aw-select-categories-or-pattern",{scopedSlots:t._u([{key:"input-group-append",fn:function(){return[e("b-button",{attrs:{type:"button",variant:"success",disabled:!t.has_pattern},on:{click:function(e){return t.generate()}}},[e("icon",{attrs:{name:"search"}}),t._v("Generate")],1)]},proxy:!0}]),model:{value:t.filterCategories,callback:function(e){t.filterCategories=e},expression:"filterCategories"}}),e("div",{staticClass:"d-flex mt-1"},[e("span",{staticClass:"mr-auto small",staticStyle:{color:"#666"}},[t._v("Hostname: "+t._s(t.queryOptions.hostname))]),e("b-button",{staticClass:"border-0",attrs:{size:"sm",variant:"outline-dark"},on:{click:function(e){t.show_options=!t.show_options}}},[t.show_options?e("span",[e("icon",{attrs:{name:"angle-double-up"}}),t._v(" Hide options")],1):e("span",[e("icon",{attrs:{name:"angle-double-down"}}),t._v(" Show options")],1)])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_options,expression:"show_options"}]},[e("h4",[t._v("Options")]),e("aw-query-options",{model:{value:t.queryOptions,callback:function(e){t.queryOptions=e},expression:"queryOptions"}})],1),"searching"==t.status?e("div",[e("div",[e("icon",{attrs:{name:"spinner",pulse:""}}),t._v(" Searching...")],1)]):t._e(),null!=t.events?e("div",[e("hr"),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-fill"},[t._v("Found "+t._s(t.events.length)+" events in "+t._s(t.queryTime/1e3)+" seconds")]),e("div",[e("b-input-group",{attrs:{size:"sm"}},[e("b-input-group-prepend",[e("b-input-group-text",[e("icon",{attrs:{name:"save"}}),e("div",{staticClass:"mx-1"},[t._v("Export as:")])],1)],1),e("b-input-group-append",[e("b-button",{attrs:{type:"button",variant:"outline-dark"},on:{click:function(e){return t.export_csv()}}},[t._v("CSV")]),e("b-button",{attrs:{type:"button",variant:"outline-dark"},on:{click:function(e){return t.export_json()}}},[t._v("JSON")])],1)],1)],1)]),e("hr"),e("vis-timeline",{attrs:{events:t.events.slice(0,500),filterShortEvents:""}}),t.events.length>500?e("div",{staticClass:"small"},[t._v("Too many events, will only show last 500 events.")]):t._e(),e("hr"),e("aw-timeline-barchart",{attrs:{datasets:t.datasets,height:100}}),e("hr"),e("aw-selectable-eventview",{attrs:{events:t.events}}),e("hr"),e("hr"),e("div",[t._v("Didn't find what you were looking for?"),e("br"),t._v("Add a week to the search: "),e("b-button",{attrs:{size:"sm",variant:"outline-dark"},on:{click:function(e){t.start=t.start.subtract(1,"week"),t.search()}}},[t._v("+1 week")])],1)],1):t._e()],1)},s=[],a=n(14475),i=n(84542),o=n(75472),c=n.n(o),u=(n(21249),n(23123),n(73210),n(38862),n(41539),n(78783),n(33948),n(60285),n(41637),n(30381)),l=n.n(u),p=n(57460),d=n.n(p),v=(n(42834),n(72584),n(88099),n(19403),n(79866)),h=n(85004),f=n(13114),m=n(2313),w=n(68184),b=n(78621);const _={name:"Report",data:function(){return{activityStore:(0,f.j)(),categoryStore:(0,m.v)(),bucketsStore:(0,w.U)(),events:null,status:null,queryTime:null,error:"",show_options:!1,queryOptions:{},filterCategories:[]}},computed:{has_pattern:function(){return this.filterCategories.length>0},datasets:function(){return(0,h.P)(this.activityStore.category.by_period,this.categoryStore.classes)}},mounted:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.bucketsStore.ensureLoaded();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{generate:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var e,n,r,s,i,o,u;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=(0,v.l8)({bid_window:"aw-watcher-window_"+this.queryOptions.hostname,bid_afk:"aw-watcher-afk_"+this.queryOptions.hostname,filter_afk:this.queryOptions.filter_afk,categories:this.filterCategories,filter_categories:this.filterCategories.map((function(t){return t[0]}))}),e+="; RETURN = events;",n=e.split(";").map((function(t){return t.trim()+";"})),r=l()(this.queryOptions.start).format(),s=l()(this.queryOptions.stop).format(),i=[r+"/"+s],t.prev=6,this.status="searching",o=l()(),t.next=11,(0,b.s)().query(i,n);case 11:u=t.sent,this.events=c()(u[0],["timestamp"],["desc"]),this.error="",this.queryTime=l()().diff(o),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](6),console.error(t.t0),this.error=t.t0.response.data.message;case 21:return t.prev=21,this.status=null,t.finish(21);case 24:case"end":return t.stop()}}),t,this,[[6,17,21,24]])})));function e(){return t.apply(this,arguments)}return e}(),export_json:function(){var t=JSON.stringify(this.events,null,2),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download="events.json",document.body.appendChild(r),r.click(),document.body.removeChild(r)},export_csv:function(){var t=this.events.map((function(t){return[t.timestamp,t.duration,t.data["$category"]]})),e=d().unparse(t,{columns:["timestamp","duration","category"]}),n=new Blob([e],{type:"text/csv"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download="events.csv",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}},g=_;var y=n(1001),k=(0,y.Z)(g,r,s,!1,null,"9eb1781a",null);const C=k.exports},85004:(t,e,n)=>{n.d(e,{P:()=>c});var r=n(30393),s=n(18446),a=n.n(s);n(41539),n(70189),n(78783),n(33948),n(84944),n(33792),n(21249),n(26833),n(69600),n(57327),n(74916),n(23123),n(69826),n(68309),n(96026),n(30381),n(66860);var i=n(55208),o=n(2313);function c(t,e){var n=">>>",s=t;if(s){var c=new Set(Object.values(s).map((function(t){return t.cat_events.map((function(t){return t.data["$category"].join(n)}))})).flat()),u=(0,r.Z)(c).map((function(t){var r=(0,o.v)(),c=r.get_category(t.split(n));if(c){var u=Object.values(s).map((function(t){var e=t.cat_events.find((function(t){return a()(t.data["$category"],c.name)}));return e?Math.round(e.duration/3600*1e3)/1e3:null}));return{label:c.name.join(" > "),backgroundColor:(0,i.EB)(c,e),data:u}}console.error("missing category:",t)})).filter((function(t){return t}));return u}return[]}},88099:(t,e,n)=>{var r=n(99280);r["default"].register({"angle-double-down":{width:320,height:512,paths:[{d:"M143 256.3l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.8 22.5c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 0.1zM177 448.3c-9.4 9.4-24.6 9.4-34-0.1l-136-136c-9.4-9.3-9.4-24.5 0-33.9l22.7-22.6c9.3-9.4 24.5-9.4 33.9 0l96.4 96.4 96.5-96.3c9.3-9.4 24.5-9.4 33.9 0l22.6 22.6c9.4 9.3 9.4 24.5 0 33.9z"}]}})},19403:(t,e,n)=>{var r=n(99280);r["default"].register({"angle-double-up":{width:320,height:512,paths:[{d:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0l-96.5-96.3-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.6c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-0.1zM143 63.7c9.4-9.4 24.6-9.4 33.8 0l136 136c9.4 9.3 9.4 24.5 0 33.9l-22.6 22.6c-9.3 9.4-24.5 9.4-33.9 0l-96.4-96.4-96.4 96.4c-9.3 9.4-24.5 9.4-33.9 0l-22.6-22.6c-9.4-9.3-9.4-24.5 0-33.9z"}]}})},42834:(t,e,n)=>{var r=n(99280);r["default"].register({search:{width:512,height:512,paths:[{d:"M505 442.7c9.3 9.4 9.3 24.6-0.1 34l-28.3 28.3c-9.3 9.4-24.5 9.4-33.9 0l-99.7-99.7c-4.5-4.5-7-10.6-7-17v-16.3c-35.3 27.6-79.7 44-128 44-114.9 0-208-93.1-208-208s93.1-208 208-208 208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7zM208 336c70.8 0 128-57.3 128-128 0-70.8-57.3-128-128-128-70.8 0-128 57.3-128 128 0 70.8 57.3 128 128 128z"}]}})},72584:(t,e,n)=>{var r=n(99280);r["default"].register({spinner:{width:512,height:512,paths:[{d:"M304 48c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM256 416c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM464 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM108.9 355.1c26.5 0 48 21.5 48 48 0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48zM403.1 355.1c26.5 0 48 21.5 48 48 0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48zM108.9 60.9c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z"}]}})}}]);
//# sourceMappingURL=9052.99ba9199.js.map