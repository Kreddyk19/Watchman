(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[8014],{41938:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>Z});var r=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Timespiral")]),e("b-alert",{attrs:{show:"",variant:"info"}},[t._v("This is a work-in-progress experiment.")]),e("div",[t._v("Bucket: "+t._s(t.bucketId))]),e("div",[t._v("Events: "+t._s(t.events.length))]),e("Timespiral",{attrs:{events:t.events}})],1)},a=[],s=n(14475),i=n(84542),o=(n(83710),n(68184)),u=function(){var t=this,e=t._self._c;return e("div",[e("svg",{attrs:{id:"timespiral"}})])},c=[],l=n(30393),d=n(65370),f=n(73326),h=(n(38862),n(57327),n(41539),n(85827),n(21249),n(92222),n(65069),n(2707),n(26699),n(32023),n(89554),n(54747),n(69600),n(56604)),v=n(30381),p=n.n(v);function m(t){t=JSON.parse(JSON.stringify(t));var e=t.filter((function(t){var e=p()(t.timestamp),n=p()(t.timestamp).add(t.duration,"seconds");return!e.isSame(n,"hour")})),n=e.map((function(t){for(var e=p()(t.timestamp),n=p()(t.timestamp).add(t.duration,"seconds"),r=[(0,f.Z)((0,f.Z)({},t),{},{duration:p()(e).startOf("hour").add(1,"hour").diff(e,"seconds")}),(0,f.Z)((0,f.Z)({},t),{},{timestamp:p()(n).startOf("hour").format(),duration:p()(n).diff(n.startOf("hour"),"seconds")})],a=e.startOf("hour").add(1,"hour");a<n.startOf("hour");a.add(1,"hour")){var s=(0,f.Z)((0,f.Z)({},t),{},{timestamp:a.format(),duration:3600});r.push(s)}return r})).reduce((function(t,e){return t.concat(e)}),[]);return t.filter((function(t){return!e.includes(t)})).concat(n).sort((function(t,e){var n=p()(t.timestamp),r=p()(e.timestamp);return n.diff(r)})).reverse()}const y={name:"Timespiral",props:{events:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{split_on_hour:function(){return this.events&&this.events.length>0?m(this.events):[]}},watch:{events:function(){this.renderChart()}},mounted:function(){this.renderChart()},updated:function(){this.renderChart()},beforeUpdate:function(){var t=h.select("svg");t.selectAll("*").remove()},methods:{renderChart:function(){if(0!=this.events.length){var t,e=this.split_on_hour,n=600,r=600,a=60,s=5,i=250/s,o=20,u=i+o+20,c=h.select("svg#timespiral").style("height","".concat(n,"px")).style("width","".concat(r,"px")),f=c.append("g").attr("transform","translate(".concat(r/2,", ").concat(r/2,")")),v=h.extent(e.map((function(t){return t.timestamp}))),m=p()(v[0]).startOf("day"),y=p()(v[1]).endOf("day");t=y.clone().diff(m)/1e3>s?[y.clone().subtract(s,"days"),y]:[m,y];var g=Math.ceil((t[1].valueOf()-t[0].valueOf())/864e5);e=e.filter((function(e){return p()(e.timestamp).isAfter(t[0])}));var w=h.scaleTime().domain(t).range([0,2*Math.PI*g]),k=h.scaleTime().domain(t).range([u+(r-a)/2-(i+o)*g,(r-2*a)/2]),x=h.scalePow().exponent(2).domain(t).range([i/(s-1),i]);e.forEach((function(t){t.startAngle=w(new Date(t.timestamp)),t.endAngle=w(new Date(t.timestamp).valueOf()+1e3*t.duration);var e=.05,n=p()(t.timestamp).startOf("hour");t.startAngle+=(t.startAngle-w(n))*e,t.endAngle-=(t.endAngle-w(n))*e}));var A=h.arc().innerRadius((function(t){var n=I(e[t.data].timestamp,!0),r=(0,d.Z)(n,2),a=r[0],s=r[1];return a-s/2})).outerRadius((function(t){var n=I(e[t.data].timestamp,!0),r=(0,d.Z)(n,2),a=r[0],s=r[1];return a+s/2})).cornerRadius(2);e.forEach((function(t,e){var n=h.pie().sort(null).startAngle(t.startAngle).endAngle(t.endAngle).value(p()(t.timestamp).valueOf())([e]);f.append("g").selectAll("path").data(n).join("path").attr("d",A).attr("stroke","none").attr("fill","not-afk"==t.data.status?"#0d0":"#ccc").attr("opacity",.7)}));var b="#888",O="#ccc",Z=k(t[1]);T(f,0,0,"00:00",Z,!0),T(f,3,0,"",Z),T(f,6,0,"06:00",Z,!0),T(f,9,0,"",Z),T(f,12,0,"12:00",Z,!0),T(f,15,0,"",Z),T(f,18,0,"18:00",Z,!0),T(f,21,0,"",Z);var _=p()();T(f,_.hour(),_.minute(),"Now",Z);var M=h.timeDays.apply(h,(0,l.Z)(t));M.forEach((function(t){return C(f,t)})),S(f,4*g-1)}function I(t,e){var n=e?p()(t).startOf("hour").valueOf():p()(t).valueOf();return[k(n),x(n)]}function E(t,e,n,r){var a=Math.cos(e),s=Math.sin(e);t.append("line").attr("x1",(n-5)*a).attr("y1",(n-5)*s).attr("x2",(n+5)*a).attr("y2",(n+5)*s).style("stroke",O).style("stroke-width",2),r&&t.append("line").attr("x1",0).attr("y1",0).attr("x2",(n-5)*a).attr("y2",(n-5)*s).style("stroke","#fff").style("stroke-width",2)}function T(t,e,n,r,a,s){var i=2*Math.PI*(e/24+n/24/60)-.5*Math.PI;E(f,i,a,s);var o=Math.cos(i),u=Math.sin(i);t.append("text").text(r||p()({hours:e}).format("HH:mm")).attr("text-anchor",6==e?"start":18==e?"end":"middle").attr("dominant-baseline","middle").attr("font-size","1em").style("fill",b).attr("x",(a+10)*o).attr("y",(a+20)*u)}function C(t,e){var n=k(p()(e).add(8,"hours")),r=k(p()(e).add(14,"hours")),a=(r-n)/4,s=p()(e).startOf("day"),o="wavy".concat(e.valueOf()),u="M 2,-".concat(n," A ").concat(n+a,",").concat(n+a," 0 0 1 ").concat(r,",0");t.append("path").attr("id",o).attr("d",u).style("fill","none").style("stroke","#AAAAAA").style("stroke-width",0),t.append("text").append("textPath").text(s.format("Y-M-D")).attr("xlink:href","#".concat(o)).attr("text-anchor","left").attr("font-size","".concat(1*Math.max(x(s)/i,.5),"em")).style("fill","#555")}function S(t,e){for(var n=90,r=[],a=0;a<e*n;a++){var s=a*Math.PI/2/n,i=w.invert(s),o=I(i),u=(0,d.Z)(o,2),c=u[0],l=u[1],f=l/4;r.push((c-f)*Math.cos(s)),r.push((c-f)*Math.sin(s))}t.append("polyline").attr("points",r.join(" ")).attr("stroke","#ccc").attr("stroke-width",1).attr("fill","none")}}}},g=y;var w=n(1001),k=(0,w.Z)(g,u,c,!1,null,null,null);const x=k.exports,A={name:"TimespiralView",components:{Timespiral:x},data:function(){return{events:[],bucketId:""}},mounted:function(){var t=this;return(0,i.Z)((0,s.Z)().mark((function e(){var n,r,a;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=(0,o.U)(),e.next=3,n.ensureLoaded();case 3:if(r=n.bucketsAFK(n.hosts[0]),0!=r.length){e.next=7;break}return console.warn("Couldn't find suitable bucket"),e.abrupt("return");case 7:return t.bucketId=r[0],e.next=10,n.getBucketWithEvents({id:t.bucketId,start:new Date("2022-08-08")});case 10:a=e.sent,t.events=a.events,console.log("Retrieved events:",t.events),console.log("First/last event:",t.events[0],t.events[t.events.length-1]);case 14:case"end":return e.stop()}}),e)})))()},methods:{onEventClick:function(t){this.$store.commit("setSelectedEvent",t),this.$router.push({name:"EventView"})}}},b=A;var O=(0,w.Z)(b,r,a,!1,null,null,null);const Z=O.exports},50361:(t,e,n)=>{var r=n(85990),a=1,s=4;function i(t){return r(t,a|s)}t.exports=i},35161:(t,e,n)=>{var r=n(29932),a=n(67206),s=n(69199),i=n(1469);function o(t,e){var n=i(t)?r:s;return n(t,a(e,3))}t.exports=o},30393:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});n(79753);var r=n(81127);function a(t){if(Array.isArray(t))return(0,r.Z)(t)}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(91038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=n(45197);n(21703),n(96647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||(0,i.Z)(t)||o()}}}]);
//# sourceMappingURL=8014.a30acef3.js.map