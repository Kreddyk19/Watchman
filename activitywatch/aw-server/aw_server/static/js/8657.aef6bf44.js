"use strict";(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[8657],{38657:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var r=function(){var t=this,e=t._self._c;return e("svg")},n=[],o=(a(57327),a(41539),a(21249),a(66860)),i=a(56604),s=a(96486),l=a(30381);function u(t){t.innerHTML=""}function d(t,e){t.innerHTML="";var a=i.select(t);a.append("text").attr("x","50%").attr("y","25pt").text(e).attr("font-family","sans-serif").attr("font-size","20pt").attr("text-anchor","middle").attr("fill","#AAA")}var c="#aaa",f="#fc5",p="#adf";function h(t,e,a){var r="YYYY-MM-DD";if(e.length<=0)d(t,"No data");else{t.innerHTML="";var n=i.select(t),u=e.map((function(t){return m(t)})),h=Math.max.apply(null,u);h<=0&&(h=1e-11);var y=100/(e.length-1)*.3,k=100/e.length-y,v=Math.floor(e.length/2);s.each(e,(function(t,i){var s=m(t),u=s/h*85,d="";t.length>0&&(d=l(e[i][0].timestamp).format(r));var x=i==v?f:c,g=50,w=i*y+i*k+.25*k;l(d).isSame(l(),"day")&&(n.append("line").attr("x1",w+k/2+"%").attr("y1",0).attr("x2",w+k/2+"%").attr("y2",200).attr("style","stroke: #888; stroke-width: 2px;").attr("stroke-dasharray","4, 2"),n.append("text").attr("x",w+1.5*k+"%").attr("y","30").text("Today"));var _=n.append("rect").attr("x",w+"%").attr("y",101-u+"%").attr("rx",3).attr("ry",3).attr("style",i==v?"stroke: black; stroke-width: 1;":"stroke: #222; stroke-width: 1;").attr("width",k+"%").attr("height",u+g+"%").attr("color",x).attr("date",d).style("fill",x).on("mouseover",(function(){_.style("fill",p)})).on("mouseout",(function(t){_.style("fill",t.target.attributes.color.value)})).on("click",(function(){a(d)}));_.append("title").text(l(d).format(r)+"\n"+(0,o.seconds_to_duration)(s))}))}function m(t){var e=s.head(s.filter(t,(function(t){return"not-afk"==t.data.status})));return void 0!=e?e.duration:0}}const y={create:u,update:h,set_status:d},k={name:"aw-periodusage",props:{periodusage_arr:{type:Array}},watch:{periodusage_arr:function(){y.update(this.$el,this.periodusage_arr,this.onPeriodClicked)}},mounted:function(){y.create(this.$el),y.set_status(this.$el,"Loading...")},methods:{onPeriodClicked:function(t){this.$emit("update",t)}}},v=k;var m=a(1001),x=(0,m.Z)(v,r,n,!1,null,"656f2d1b",null);const g=x.exports}}]);
//# sourceMappingURL=8657.aef6bf44.js.map