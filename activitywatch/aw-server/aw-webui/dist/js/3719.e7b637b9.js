(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[3719],{78565:e=>{var t=Object.prototype,r=t.hasOwnProperty;function a(e,t){return null!=e&&r.call(e,t)}e.exports=a},5976:(e,t,r)=>{var a=r(6557),n=r(45357),i=r(30061);function o(e,t){return i(n(e,t,a),e+"")}e.exports=o},67762:e=>{function t(e,t){var r,a=-1,n=e.length;while(++a<n){var i=t(e[a]);void 0!==i&&(r=void 0===r?i:r+i)}return r}e.exports=t},48969:(e,t,r)=>{var a=r(29932);function n(e,t){return a(t,(function(t){return[t,e[t]]}))}e.exports=n},1757:e=>{function t(e,t,r){var a=-1,n=e.length,i=t.length,o={};while(++a<n){var s=a<i?t[a]:void 0;r(o,e[a],s)}return o}e.exports=t},23468:(e,t,r)=>{var a=r(7548),n=r(99021),i=r(66833),o=r(97658),s=r(1469),c=r(86528),u="Expected a function",l=8,d=32,p=128,h=256;function f(e){return n((function(t){var r=t.length,n=r,f=a.prototype.thru;e&&t.reverse();while(n--){var v=t[n];if("function"!=typeof v)throw new TypeError(u);if(f&&!_&&"wrapper"==o(v))var _=new a([],!0)}n=_?n:r;while(++n<r){v=t[n];var y=o(v),g="wrapper"==y?i(v):void 0;_=g&&c(g[0])&&g[1]==(p|l|d|h)&&!g[4].length&&1==g[9]?_[o(g[0])].apply(_,g[3]):1==v.length&&c(v)?_[y]():_.thru(v)}return function(){var e=arguments,a=e[0];if(_&&1==e.length&&s(a))return _.plant(a).value();var n=0,i=r?t[n].apply(this,e):a;while(++n<r)i=t[n].call(this,i);return i}}))}e.exports=f},13866:(e,t,r)=>{var a=r(48969),n=r(64160),i=r(68776),o=r(99294),s="[object Map]",c="[object Set]";function u(e){return function(t){var r=n(t);return r==s?i(t):r==c?o(t):a(t,e(t))}}e.exports=u},99294:e=>{function t(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}e.exports=t},59242:(e,t,r)=>{var a=r(23468),n=a();e.exports=n},69087:e=>{e.exports={cap:!1,curry:!1,fixed:!1,immutable:!1,rearg:!1}},40104:(e,t,r)=>{var a=r(92822),n=a("filter",r(63105));n.placeholder=r(69306),e.exports=n},8816:(e,t,r)=>{var a=r(92822),n=a("flow",r(59242));n.placeholder=r(69306),e.exports=n},21146:(e,t,r)=>{var a=r(92822),n=a("groupBy",r(7739));n.placeholder=r(69306),e.exports=n},88846:(e,t,r)=>{var a=r(92822),n=a("map",r(35161));n.placeholder=r(69306),e.exports=n},24976:(e,t,r)=>{var a=r(92822),n=a("reverse",r(31351));n.placeholder=r(69306),e.exports=n},66415:(e,t,r)=>{var a=r(92822),n=a("sortBy",r(89734));n.placeholder=r(69306),e.exports=n},63360:(e,t,r)=>{var a=r(92822),n=a("values",r(52628),r(69087));n.placeholder=r(69306),e.exports=n},17204:e=>{function t(e){var t=-1,r=null==e?0:e.length,a={};while(++t<r){var n=e[t];a[n[0]]=n[1]}return a}e.exports=t},18721:(e,t,r)=>{var a=r(78565),n=r(222);function i(e,t){return null!=e&&n(e,t,a)}e.exports=i},66604:(e,t,r)=>{var a=r(89465),n=r(47816),i=r(67206);function o(e,t){var r={};return t=i(t,3),n(e,(function(e,n,i){a(r,n,t(e,n,i))})),r}e.exports=o},6162:(e,t,r)=>{var a=r(56029),n=r(53325),i=r(6557);function o(e){return e&&e.length?a(e,i,n):void 0}e.exports=o},31351:e=>{var t=Array.prototype,r=t.reverse;function a(e){return null==e?e:r.call(e)}e.exports=a},89734:(e,t,r)=>{var a=r(21078),n=r(82689),i=r(5976),o=r(16612),s=i((function(e,t){if(null==e)return[];var r=t.length;return r>1&&o(e,t[0],t[1])?t=[]:r>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),n(e,a(t,1),[])}));e.exports=s},73303:(e,t,r)=>{var a=r(67206),n=r(67762);function i(e,t){return e&&e.length?n(e,a(t,2)):0}e.exports=i},93220:(e,t,r)=>{var a=r(13866),n=r(3674),i=a(n);e.exports=i},45578:(e,t,r)=>{var a=r(67206),n=r(45652);function i(e,t){return e&&e.length?n(e,a(t,2)):[]}e.exports=i},7287:(e,t,r)=>{var a=r(34865),n=r(1757);function i(e,t){return n(e||[],t||[],a)}e.exports=i},13114:(e,t,r)=>{"use strict";r.d(t,{j:()=>oe});var a=r(59996),n=r(98803),i=r(14475),o=r(73326),s=r(84542),c=r(24976),u=r.n(c),l=r(8816),d=r.n(l),p=r(66415),h=r.n(p),f=r(21146),v=r.n(f),_=r(63360),y=r.n(_),g=r(40104),w=r.n(g),b=r(88846),m=r.n(b),k=r(96026),x=r.n(k),q=r(73303),Z=r.n(q),S=r(66604),M=r.n(S),W=r(93220),j=r.n(W),C=r(17204),$=r.n(C),P=r(63105),z=r.n(P),A=r(35161),F=r.n(A),Q=r(7287),O=r.n(Q),D=r(64721),U=r.n(D),E=r(18446),T=r.n(E),I=r(18721),B=r.n(I),L=(r(21249),r(74916),r(23123),r(57327),r(41539),r(85827),r(23157),r(83710),r(69826),r(92222),r(78783),r(33948),r(60285),r(41637),r(28733),r(47941),r(33205)),R=r(30381),H=r.n(R),G=[{duration:1926,data:{app:"Firefox",title:"ActivityWatch/ActivityWatch: Track how you spend your time - Mozilla Firefox",url:"https://github.com/ActivityWatch/ActivityWatch",$category:["Work","Programming","ActivityWatch"]}},{duration:876,data:{app:"Firefox",title:"Inbox - Gmail - Mozilla Firefox",url:"https://mail.google.com",$category:["Comms","Email"]}},{duration:720,data:{app:"Firefox",title:"reddit: the front page of the internet - Mozilla Firefox",url:"https://reddit.com",$category:["Media","Social Media"]}},{duration:720,data:{app:"Firefox",title:"YouTube - Mozilla Firefox",url:"https://youtube.com",$category:["Media","Video"]}},{duration:540,data:{app:"Firefox",title:"Home / Twitter - Mozilla Firefox",url:"https://twitter.com",$category:["Media","Social Media"]}},{duration:540,data:{app:"Firefox",title:"Stack Overflow",url:"https://stackoverflow.com",$category:["Work","Programming"]}},{duration:2892,data:{app:"Terminal",title:"vim ~/code/ActivityWatch/aw-server/aw-webui/src",$category:["Work","Programming","ActivityWatch"]}},{duration:756,data:{app:"Terminal",title:"bash ~/code/ActivityWatch",$category:["Work","Programming","ActivityWatch"]}},{duration:3486,data:{app:"zoom",title:"Zoom Meeting",$category:["Comms","Video Conferencing"]}},{duration:1440,data:{app:"Minecraft",title:"Minecraft",$category:["Media","Games"]}},{duration:189,data:{app:"Spotify",title:"Spotify",$category:["Media","Music"]}}],V=r(79866),Y=r(66860),K=r(72315),J=r(15066),N=r(68184),X=r(2313),ee=r(78621);function te(e){return(0,K.b5)(e).map(K.dS)}function re(e){return(0,K.Yl)(e).map(K.dS)}function ae(e){return(0,K.SE)(e).map(K.dS)}function ne(e){return(0,K.z7)(e).map(K.dS)}function ie(e){var t=(0,X.v)();return e.map((function(e){return e.data["$color"]=t.get_category_color(e.data["$category"]),e}))}var oe=(0,L.Q_)("activity",{state:function(){return{loaded:!1,window:{available:!1,top_apps:[],top_titles:[]},browser:{available:!1,duration:0,top_domains:[],top_urls:[]},editor:{available:!1,duration:0,top_files:[],top_languages:[],top_projects:[]},category:{available:!1,by_period:[],top:[]},active:{available:!1,duration:0,events:[],history:{}},android:{available:!1},stopwatch:{available:!1},query_options:null,buckets:{loaded:!1,afk:[],window:[],editor:[],browser:[],android:[],stopwatch:[]}}},getters:{getActiveHistoryAroundTimeperiod:function(){var e=this;return function(t){var r=ne(t),a=r.map((function(t){return B()(e.active.history,t)?e.active.history[t]:[{timestamp:H()(t.split("/")[0]).format(),duration:0,data:{}}]}));return a}},uncategorizedDuration:function(){if(!this.category.top)return null;console.log(this.category.top);var e=this.category.top.filter((function(e){return T()(e.data["$category"],["Uncategorized"])})),t=e.length>0?e[0].duration:0,r=this.category.top.reduce((function(e,t){return e+t.duration}),0);return[t,r]}},actions:{ensure_loaded:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,s;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=(0,J.F2)(),r.next=3,a.ensureLoaded();case 3:if(n=(0,N.U)(),console.info("Query options: ",e),t.loaded&&(0,ee.s)().abort(),t.loaded&&t.query_options===e&&!e.force){r.next=61;break}return t.start_loading(e),e.timeperiod||(e.timeperiod=(0,K.v4)(e.date,a.startOfDay)),r.next=11,n.ensureLoaded();case 11:return r.next=13,t.get_buckets(e);case 13:if(t.set_available(),!t.window.available){r.next=27;break}if(console.info(a.useMultidevice?"Querying multiple devices":"Querying a single device"),!a.useMultidevice){r.next=23;break}return s=n.hosts.filter((function(t){return t&&n.bucketsWindow(t).length>0&&(!t.startsWith("fakedata")||e.host.startsWith("fakedata"))})),console.info("Including hosts in multiquery: ",s),r.next=21,t.query_multidevice_full(e,s);case 21:r.next=25;break;case 23:return r.next=25,t.query_desktop_full(e);case 25:r.next=35;break;case 27:if(!t.android.available){r.next=32;break}return r.next=30,t.query_android(e);case 30:r.next=35;break;case 32:console.log("Cannot query windows as we are missing either an afk/window bucket pair or an android bucket"),t.query_window_completed(),t.query_category_time_by_period_completed();case 35:if(!t.active.available){r.next=40;break}return r.next=38,t.query_active_history(e);case 38:r.next=48;break;case 40:if(!t.android.available){r.next=45;break}return r.next=43,t.query_active_history_android(e);case 43:r.next=48;break;case 45:return console.log("Cannot call query_active_history as we do not have an afk bucket"),r.next=48,t.query_active_history_completed();case 48:if(!t.editor.available){r.next=53;break}return r.next=51,t.query_editor(e);case 51:r.next=56;break;case 53:return console.log("Cannot call query_editor as we do not have any editor buckets"),r.next=56,t.query_editor_completed();case 56:if(!t.window.available){r.next=59;break}return r.next=59,t.query_category_time_by_period((0,o.Z)({},e));case 59:r.next=62;break;case 61:console.warn("ensure_loaded called twice with same query_options but without query_options.force = true, skipping...");case 62:case"end":return r.stop()}}),r)})))()},query_android:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,o,s,c,u;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.timeperiod,n=e.filter_categories,o=[(0,K.dS)(a)],s=(0,X.v)(),c=V.ZP.appQuery(t.buckets.android[0],s.classes_for_query,n),r.next=6,(0,ee.s)().query(o,c)["catch"](t.errorHandler);case 6:u=r.sent,t.query_window_completed(u[0]);case 8:case"end":return r.stop()}}),r)})))()},reset:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:(0,ee.s)().abort(),e.query_window_completed({}),e.query_browser_completed({}),e.query_editor_completed({}),e.query_category_time_by_period_completed({});case 5:case"end":return t.stop()}}),t)})))()},query_multidevice_full:function(e,t){var r=this;return(0,s.Z)((0,i.Z)().mark((function a(){var n,o,s,c,u,l,d,p,h;return(0,i.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.timeperiod,o=e.filter_categories,s=e.filter_afk,c=e.always_active_pattern,u=[(0,K.dS)(n)],l=(0,X.v)().classes_for_query,d=V.ZP.multideviceQuery({hosts:t,filter_afk:s,categories:l,filter_categories:o,host_params:{},always_active_pattern:c}),a.next=6,(0,ee.s)().query(u,d);case 6:p=a.sent,h=p[0].window,h.cat_events=ie(h.cat_events),r.query_window_completed(h);case 10:case"end":return a.stop()}}),a)})))()},query_desktop_full:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,o,s,c,u,l,d,p,h,f,v;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.timeperiod,n=e.filter_categories,o=e.filter_afk,s=e.include_audible,c=e.include_stopwatch,u=e.always_active_pattern,l=[(0,K.dS)(a)],d=(0,X.v)().classes_for_query,p=V.ZP.fullDesktopQuery({bid_window:t.buckets.window[0],bid_afk:t.buckets.afk[0],bid_browsers:t.buckets.browser,bid_stopwatch:c&&t.buckets.stopwatch.length>0?t.buckets.stopwatch[0]:void 0,filter_afk:o,categories:d,filter_categories:n,include_audible:s,always_active_pattern:u}),r.next=6,(0,ee.s)().query(l,p);case 6:h=r.sent,f=h[0].window,v=h[0].browser,f.cat_events=ie(f.cat_events),t.query_window_completed(f),t.query_browser_completed(v);case 12:case"end":return r.stop()}}),r)})))()},query_editor:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,o,s;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.timeperiod,n=[(0,K.dS)(a)],o=V.ZP.editorActivityQuery(t.buckets.editor),r.next=5,(0,ee.s)().query(n,o);case 5:s=r.sent,t.query_editor_completed(s[0]);case 7:case"end":return r.stop()}}),r)})))()},query_active_history:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,o,s;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.timeperiod,n=ne(a).filter((function(e){return!U()(t.active.history,e)})),r.next=4,(0,ee.s)().query(n,V.ZP.activityQuery(t.buckets.afk[0]));case 4:o=r.sent,s=O()(n,F()(o,(function(e){return z()(e,(function(e){return"not-afk"==e.data.status}))}))),t.query_active_history_completed({active_history:s});case 7:case"end":return r.stop()}}),r)})))()},query_category_time_by_period:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,o,s,c,u,l,d,p,h,f,v,_,y,g,w,b,m,k,x;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.timeperiod,o=e.filter_categories,s=e.filter_afk,c=e.include_stopwatch,u=e.dontQueryInactive,l=e.always_active_pattern,p=a.length[0],h=a.length[1],h.startsWith("day")&&1==p?d=te(a):h.startsWith("day")||h.startsWith("week")&&1==p||h.startsWith("month")&&1==p?d=re(a):a.length[1].startsWith("year")&&1==a.length[0]?d=ae(a):console.error("Unknown timeperiod length: ".concat(a.length)),f=(0,ee.s)().controller.signal,v=!1,f.onabort=function(){v=!0,console.debug("Request aborted")},_=[],y=(0,n.Z)(d),r.prev=9,y.s();case 11:if((g=y.n()).done){r.next=26;break}if(w=g.value,!v){r.next=15;break}throw f["reason"]||"unknown reason";case 15:if(!(u&&t.active.events.length>0)){r.next=19;break}if(b=function(){var e=new Date(w.split("/")[0]),r=new Date(w.split("/")[1]),a=t.active.events.find((function(t){return e<new Date(t.timestamp)&&new Date(t.timestamp)<r}));if(!(a&&a.duration>0))return _=_.concat([{cat_events:[]}]),"continue"}(),"continue"!==b){r.next=19;break}return r.abrupt("continue",24);case 19:return m=(0,X.v)().classes_for_query,r.next=22,(0,ee.s)().query([w],V.ZP.categoryQuery({bid_afk:t.buckets.afk[0],bid_window:t.buckets.window[0],bid_browsers:t.buckets.browser,bid_stopwatch:c&&t.buckets.stopwatch.length>0?t.buckets.stopwatch[0]:void 0,categories:m,filter_categories:o,filter_afk:s,always_active_pattern:l}));case 22:k=r.sent,_=_.concat(k);case 24:r.next=11;break;case 26:r.next=31;break;case 28:r.prev=28,r.t0=r["catch"](9),y.e(r.t0);case 31:return r.prev=31,y.f(),r.finish(31);case 34:x=O()(d,_),x=$()(j()(x).filter((function(e){return e[1]}))),t.query_category_time_by_period_completed({by_period:x});case 37:case"end":return r.stop()}}),r,null,[[9,28,31,34]])})))()},query_active_history_android:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n,o,s,c;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.timeperiod,n=ne(a).filter((function(e){return!U()(t.active.history,e)})),r.next=4,(0,ee.s)().query(n,V.ZP.activityQueryAndroid(t.buckets.android[0]));case 4:o=r.sent,s=O()(n,o),c=M()(s,(function(e,t){return[{timestamp:t.split("/")[0],duration:e,data:{status:"not-afk"}}]})),t.query_active_history_completed({active_history:c});case 8:case"end":return r.stop()}}),r)})))()},set_available:function(){this.window.available=this.buckets.afk.length>0&&this.buckets.window.length>0,this.browser.available=this.buckets.afk.length>0&&this.buckets.window.length>0&&this.buckets.browser.length>0,this.active.available=this.buckets.afk.length>0,this.editor.available=this.buckets.editor.length>0,this.android.available=this.buckets.android.length>0,this.category.available=this.window.available||this.android.available,this.stopwatch.available=this.buckets.stopwatch.length>0},get_buckets:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var a,n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.host,n=(0,N.U)(),t.buckets.afk=n.bucketsAFK(a),t.buckets.window=n.bucketsWindow(a),t.buckets.android=n.bucketsAndroid(a),t.buckets.browser=n.bucketsBrowser(a),t.buckets.editor=n.bucketsEditor(a),t.buckets.stopwatch=n.bucketsStopwatch(a),console.log("Available buckets: ",t.buckets),t.buckets.loaded=!0;case 10:case"end":return r.stop()}}),r)})))()},load_demo:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r,n,o,s,c,l,p,f,_;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:_=function(){var e={},t=H()((0,Y.get_day_start_with_offset)(null,f));return F()(x()(0,30),(function(){var r=H()(t).add(1,"day");e["".concat(t.format(),"/").concat(r.format())]=[{timestamp:t.format(),duration:100+900*Math.random(),data:{status:"not-afk"}}],t=t.add(-1,"day")})),e},r=function(e,t,r){return d()(w()(r),v()(r),y(),m()((function(e){return{duration:Z()(e,"duration"),data:(0,a.Z)({},t,r(e[0]))}})),h()("duration"),u())(e)},e.start_loading({}),n=r(G,"app",(function(e){return e.data.app})),o=r(G,"title",(function(e){return e.data.title})),s=r(G,"$category",(function(e){return e.data.$category})),c=r(G,"url",(function(e){return e.data.url})),l=r(G,"$domain",(function(e){return void 0===e.data.url?"":new URL(e.data.url).host})),e.query_window_completed({duration:Z()(G,"duration"),app_events:n,title_events:o,cat_events:s,active_events:[{timestamp:(new Date).toISOString(),duration:5400,data:{afk:"not-afk"}}]}),e.buckets.browser=["aw-watcher-firefox"],e.query_browser_completed({duration:Z()(c,"duration"),domains:l,urls:c}),e.buckets.editor=["aw-watcher-vim"],e.query_editor_completed({duration:30,files:[{duration:10,data:{file:"test.py"}}],languages:[{duration:10,data:{language:"python"}}],projects:[{duration:10,data:{project:"aw-core"}}]}),e.buckets.loaded=!0,p=(0,J.F2)(),f=p.startOfDay,e.query_active_history_completed({active_history:_()});case 17:case"end":return t.stop()}}),t)})))()},start_loading:function(e){this.loaded=!0,this.query_options=e,this.window.top_apps=null,this.window.top_titles=null,this.browser.duration=0,this.browser.top_domains=null,this.browser.top_urls=null,this.editor.duration=0,this.editor.top_files=null,this.editor.top_languages=null,this.editor.top_projects=null,this.category.top=null,this.category.by_period=null,this.active.duration=null,0===Object.keys(this.active.history).length&&(this.active.history={})},query_window_completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{app_events:[],title_events:[],cat_events:[],active_events:[],duration:0};this.window.top_apps=e.app_events,this.window.top_titles=e.title_events,this.category.top=e.cat_events,this.active.duration=e.duration,this.active.events=e.active_events},query_browser_completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{domains:[],urls:[],duration:0};this.browser.top_domains=e.domains,this.browser.top_urls=e.urls,this.browser.duration=e.duration},query_editor_completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{duration:0,files:[],languages:[],projects:[]};this.editor.duration=e.duration,this.editor.top_files=e.files,this.editor.top_languages=e.languages,this.editor.top_projects=e.projects},query_active_history_completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{active_history:{}},t=e.active_history;this.active.history=(0,o.Z)((0,o.Z)({},this.active.history),t)},query_category_time_by_period_completed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{by_period:[]},t=e.by_period;this.category.by_period=t}}})},2313:(e,t,r)=>{"use strict";r.d(t,{v:()=>b});var a=r(35161),n=r.n(a),i=r(6162),o=r.n(i),s=r(18446),c=r.n(s),u=r(85564),l=r.n(u),d=r(45578),p=r.n(d),h=r(89734),f=r.n(h),v=r(50361),_=r.n(v),y=(r(21249),r(57327),r(41539),r(68309),r(47042),r(69600),r(69826),r(2707),r(92222),r(21692)),g=r(55208),w=r(33205),b=(0,w.Q_)("categories",{state:function(){return{classes:[],classes_unsaved_changes:!1}},getters:{classes_clean:function(){return this.classes.map(y.cleanCategory)},classes_hierarchy:function(){var e=(0,y.build_category_hierarchy)(_()(this.classes));return f()(e,[function(e){return e.id||0}])},classes_for_query:function(){return this.classes.filter((function(e){return null!==e.rule.type})).map((function(e){return[e.name,e.rule]}))},all_categories:function(){return p()(l()(this.classes.map((function(e){for(var t=[],r=1;r<=e.name.length;r++)t.push(e.name.slice(0,r));return t}))),(function(e){return e.join(">>>>")}))},allCategoriesSelect:function(){var e=this.all_categories,t=e.map((function(e){return{text:e.join(" > "),value:e,id:e.id}}));return f()(t,"text")},get_category:function(){var e=this;return function(t){("string"===typeof t||t instanceof String)&&console.error("Passed category was string, expected array. Lookup will fail.");var r=e.classes.find((function(e){return c()(e.name,t)}));return r?(0,y.annotate)(_()(r)):(c()(t,["Uncategorized"])||console.error("Couldn't find category: ",t),{name:["Uncategorized"],rule:{type:"none"}})}},get_category_by_id:function(){var e=this;return function(t){return(0,y.annotate)(_()(e.classes.find((function(e){return e.id==t}))))}},get_category_color:function(){var e=this;return function(t){return(0,g.EB)(e.get_category(t),e.classes)}},category_select:function(){var e=this;return function(t){var r=e.all_categories;return r=r.map((function(e){return{text:e.join(" > "),value:e}})).sort((function(e,t){return e.text>t.text})),t&&(r=[{text:"All",value:null},{text:"Uncategorized",value:["Uncategorized"]}].concat(r)),r}}},actions:{load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e&&(e=(0,y.loadClasses)()),e=(0,y.createMissingParents)(e);var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!1},save:function(){var e=(0,y.saveClasses)(this.classes);return this.classes_unsaved_changes=!1,e},import:function(e){var t=0;this.classes=e.map((function(e){return Object.assign(e,{id:t++})})),this.classes_unsaved_changes=!0},updateClass:function(e){console.log("Updating class:",e);var t=this.classes.find((function(t){return t.id===e.id})),r=t.name,a=t.name.length;void 0===e.id||null===e.id?(e.id=o()(n()(this.classes,"id"))+1,this.classes.push(e)):Object.assign(t,e),n()(this.classes,(function(t){c()(r,t.name.slice(0,a))&&(t.name=e.name.concat(t.name.slice(a)),console.log("Renamed child:",t.name))})),this.classes_unsaved_changes=!0},addClass:function(e){e.id=o()(n()(this.classes,"id"))+1,this.classes.push(e),this.classes_unsaved_changes=!0},removeClass:function(e){this.classes=this.classes.filter((function(t){return t.id!==e})),this.classes_unsaved_changes=!0},appendClassRule:function(e,t){var r=this.classes.find((function(t){return t.id===e}));"none"===r.rule.type||null===r.rule.type?(r.rule.type="regex",r.rule.regex=t):"regex"===r.rule.type&&(r.rule.regex+="|"+t),this.classes_unsaved_changes=!0},restoreDefaultClasses:function(){var e=0;this.classes=(0,y.createMissingParents)(y.defaultCategories).map((function(t){return Object.assign(t,{id:e++})})),this.classes_unsaved_changes=!0},clearAll:function(){this.classes=[],this.classes_unsaved_changes=!0}}})},30393:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(79753);var a=r(81127);function n(e){if(Array.isArray(e))return(0,a.Z)(e)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(91038);function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=r(45197);r(21703),r(96647);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return n(e)||i(e)||(0,o.Z)(e)||s()}}}]);
//# sourceMappingURL=3719.e7b637b9.js.map
