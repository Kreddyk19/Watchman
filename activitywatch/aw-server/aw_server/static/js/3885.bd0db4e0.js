"use strict";(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[3885,9280],{99280:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});let a={};const s={name:"fa-icon",props:{name:{type:String,validator(t){return!t||t in a||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${t}".\nPlease make sure you have imported this icon before using it.`),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data(){return{id:h(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale(){let t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse,[this.$options.name]:!0}},icon(){return this.name?a[this.name]:null},box(){return this.icon?`0 0 ${this.icon.width} ${this.icon.height}`:`0 0 ${this.width} ${this.height}`},ratio(){if(!this.icon)return 1;let{width:t,height:e}=this.icon;return Math.max(t,e)/16},width(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw(){if(!this.icon||!this.icon.raw)return null;let t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,((t,i,a)=>{let s=h();return e[a]=s,` id="${s}"`})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,i,a,s)=>{let r=i||s;return r&&e[r]?`#${e[r]}`:t})),t},focusable(){let{tabindex:t}=this;if(null==t)return"false";let e="string"===typeof t?parseInt(t,10):t;return e>=0?null:"false"}},mounted(){this.updateStack()},updated(){this.updateStack()},methods:{updateStack(){if(!this.name&&null!==this.name&&0===this.$children.length)return void console.warn('Invalid prop: prop "name" is required.');if(this.icon)return;let t=0,e=0;this.$children.forEach((i=>{i.outerScale=this.normalizedScale,t=Math.max(t,i.width),e=Math.max(e,i.height)})),this.childrenWidth=t,this.childrenHeight=e,this.$children.forEach((i=>{i.x=(t-i.width)/2,i.y=(e-i.height)/2}))}},render(t){if(null===this.name)return t();let e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},i=`vat-${this.id}`;if(this.title&&(e.attrs["aria-labelledby"]=i),this.raw){let t=this.raw;this.title&&(t=`<title id="${i}">${c(this.title)}</title>${t}`),e.domProps={innerHTML:t}}let a=this.title?[t("title",{attrs:{id:i}},this.title)]:[];return t("svg",e,this.raw?null:a.concat(this.$slots.default||[...this.icon.paths.map(((e,i)=>t("path",{attrs:e,key:`path-${i}`}))),...this.icon.polygons.map(((e,i)=>t("polygon",{attrs:e,key:`polygon-${i}`})))]))},register(t){for(let e in t){let i=t[e],{paths:s=[],d:n,polygons:h=[],points:l}=i;n&&s.push({d:n}),l&&h.push({points:l}),a[e]=r({},i,{paths:s,polygons:h})}},icons:a};function r(t,...e){return e.forEach((e=>{for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})),t}let n=870711;function h(){return`va-${(n++).toString(16)}`}const l={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function c(t){return t.replace(/[<>"&]/g,(t=>l[t]||t))}const o=s;var d,u,p=i(1001),f=(0,p.Z)(o,d,u,!1,null,null,null);const m=f.exports},53885:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",staticStyle:{color:"#555","font-size":"0.9em"}},[e("div",{staticClass:"mb-2"},[t._v("Made with"),e("a",{attrs:{href:"https://ActivityWatch.net/donate/",target:"_blank"}},[e("icon",{staticStyle:{fill:"#E55"},attrs:{name:"heart",scale:"0.75"}})],1),t._v("by the "),e("a",{attrs:{href:"http://ActivityWatch.net/contributors/"}},[t._v("ActivityWatch developers")]),e("div",[t.info?e("span",{staticClass:"mt-2",staticStyle:{color:"#888","font-size":"0.8em"}},[e("span",{staticClass:"mr-2"},[e("b",[t._v("Host:")]),t._v("  "+t._s(t.info.hostname))]),e("span",[e("b",[t._v("Version:")]),t._v("  "+t._s(t.info.version))])]):t._e()])]),e("div",{staticStyle:{"font-size":"0.9em",opacity:"0.8",fill:"#88F"}},[e("div",{staticClass:"float-none float-md-right my-2"},[e("a",{staticClass:"mr-3",attrs:{href:"https://github.com/ActivityWatch/ActivityWatch/issues/new/choose",target:"_blank"}},[e("icon",{attrs:{name:"bug"}}),t._v("Report a bug")],1),e("a",{staticClass:"mr-3",attrs:{href:"https://forum.ActivityWatch.net/c/support",target:"_blank"}},[e("icon",{attrs:{name:"question-circle"}}),t._v("Ask for help")],1),e("a",{attrs:{href:"https://forum.ActivityWatch.net/c/features",target:"_blank"}},[e("icon",{attrs:{name:"vote-yea"}}),t._v("Vote on features")],1)]),e("div",{staticClass:"float-none float-md-left my-2"},[e("a",{attrs:{href:"https://twitter.com/ActivityWatchIt",target:"_blank"}},[e("icon",{attrs:{name:"brands/twitter"}}),t._v("Twitter")],1),e("a",{staticClass:"ml-3",attrs:{href:"https://github.com/ActivityWatch",target:"_blank"}},[e("icon",{attrs:{name:"brands/github"}}),t._v("GitHub")],1),e("a",{staticClass:"ml-3",attrs:{href:"https://ActivityWatch.net/donate/",target:"_blank"}},[e("icon",{attrs:{name:"hand-holding-heart"}}),t._v("Donate")],1)])])])},s=[],r=i(73326),n=i(99280);n["default"].register({"brands/twitter":{width:512,height:512,paths:[{d:"M459.4 151.7c0.3 4.5 0.3 9.1 0.3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"}]}}),n["default"].register({"brands/github":{width:496,height:512,paths:[{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 0.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-0.3 5.6 1.3 5.6 3.6zM134.8 392.9c0.7-2 3.6-3 6.2-2.3 3 0.9 4.9 3.2 4.3 5.2-0.6 2-3.6 3-6.2 2-3-0.6-5-2.9-4.3-4.9zM179 391.2c2.9-0.3 5.6 1 5.9 2.9 0.3 2-1.7 3.9-4.6 4.6-3 0.7-5.6-0.6-5.9-2.6-0.3-2.3 1.7-4.2 4.6-4.9zM244.8 8c138.7 0 251.2 105.3 251.2 244 0 110.9-67.8 205.8-167.8 239-12.7 2.3-17.3-5.6-17.3-12.1 0-8.2 0.3-49.9 0.3-83.6 0-23.5-7.8-38.5-17-46.4 55.9-6.3 114.8-14 114.8-110.5 0-27.4-9.8-41.2-25.8-58.9 2.6-6.5 11.1-33.2-2.6-67.9-20.9-6.6-69 27-69 27-20-5.6-41.5-8.5-62.8-8.5s-42.8 2.9-62.8 8.5c0 0-48.1-33.5-69-27-13.7 34.6-5.2 61.4-2.6 67.9-16 17.6-23.6 31.4-23.6 58.9 0 96.2 56.4 104.3 112.3 110.5-7.2 6.6-13.7 17.7-16 33.7-14.3 6.6-51 17.7-72.9-20.9-13.7-23.8-38.6-25.8-38.6-25.8-24.5-0.3-1.6 15.4-1.6 15.4 16.4 7.5 27.8 36.6 27.8 36.6 14.7 44.8 84.7 29.8 84.7 29.8 0 21 0.3 55.2 0.3 61.4 0 6.5-4.5 14.4-17.3 12.1-99.7-33.4-169.5-128.3-169.5-239.2 0-138.7 106.1-244 244.8-244zM97.2 352.9c1.3-1.3 3.6-0.6 5.2 1 1.7 1.9 2 4.2 0.7 5.2-1.3 1.3-3.6 0.6-5.2-1-1.7-1.9-2-4.2-0.7-5.2zM86.4 344.8c0.7-1 2.3-1.3 4.3-0.7 2 1 3 2.6 2.3 3.9-0.7 1.4-2.7 1.7-4.3 0.7-2-1-3-2.6-2.3-3.9zM118.8 380.4c1.3-1.6 4.3-1.3 6.5 1 2 1.9 2.6 4.9 1.3 6.2-1.3 1.6-4.2 1.3-6.5-1-2.3-1.9-2.9-4.9-1.3-6.2zM107.4 365.7c1.6-1.3 4.2-0.3 5.6 2 1.6 2.3 1.6 4.9 0 6.2-1.3 1-4 0-5.6-2.3-1.6-2.3-1.6-4.9 0-5.9z"}]}}),n["default"].register({"hand-holding-heart":{width:576,height:512,paths:[{d:"M275.3 250.5l-108.9-114.2c-31.6-33.2-29.7-88.2 5.6-118.8 30.8-26.7 76.7-21.9 104.9 7.8l11.1 11.6 11.2-11.7c28.2-29.6 74.1-34.4 104.9-7.7 35.4 30.6 37.2 85.6 5.6 118.8l-108.9 114.2c-7.1 7.4-18.5 7.4-25.5 0zM565.3 328.1c15.1 13.6 13.9 36.8-1.3 48.9l-151.2 121c-11.4 9.1-25.5 14-40 14h-356.8c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h55.4l46.5-37.7c21-17 47.1-26.3 74.1-26.3h160c19.5 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.3 26.6h-78.3c-8.8 0-16 7.2-16 16s7.2 16 16 16h118.3c14.6 0 28.7-4.9 40-14l92.4-73.9c12.4-10 30.8-10.7 42.6 0z"}]}}),n["default"].register({"vote-yea":{width:640,height:512,paths:[{d:"M608 320c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-576c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h64v64h-22.4c-5.3 0-9.6 3.6-9.6 8v16c0 4.4 4.3 8 9.6 8h492.8c5.3 0 9.6-3.6 9.6-8v-16c0-4.4-4.3-8-9.6-8h-22.4v-64h64zM512 384h-384v-319.7c0-17.8 14.5-32.3 32.4-32.3h319.3c17.8 0 32.3 14.4 32.3 32.3v319.7zM211.2 202c-4.2 4.2-4.3 11 0 15.2l74.1 74.7c4.2 4.3 11 4.3 15.2 0.1l128.3-127.2c4.3-4.2 4.3-11 0.1-15.2l-25.3-25.5c-4.2-4.3-11-4.3-15.2-0.1l-95.2 94.4-41.3-41.6c-4.2-4.3-11-4.3-15.2-0.1z"}]}});i(48208);n["default"].register({bug:{width:512,height:512,paths:[{d:"M512 288.9c-0.5 17.4-15.2 31.1-32.7 31.1h-55.3v16c0 21.9-4.9 42.6-13.6 61.1l60.2 60.2c12.5 12.5 12.5 32.8 0 45.3-12.5 12.5-32.8 12.5-45.3 0l-54.7-54.7c-24.8 20.1-56.3 32.1-90.6 32.1v-244c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v244c-34.4 0-65.9-12-90.6-32.1l-54.7 54.7c-12.5 12.5-32.8 12.5-45.3 0-12.5-12.5-12.5-32.8 0-45.3l60.2-60.2c-8.7-18.6-13.6-39.3-13.6-61.1v-16h-55.3c-17.4 0-32.2-13.7-32.7-31.1-0.5-18.1 14-32.9 32-32.9h56v-58.7l-46.6-46.6c-12.5-12.5-12.5-32.8 0-45.3 12.5-12.5 32.8-12.5 45.3 0l54.6 54.6h229.5l54.6-54.6c12.5-12.5 32.8-12.5 45.3 0 12.5 12.5 12.5 32.8 0 45.3l-46.6 46.6v58.7h56c18 0 32.5 14.8 32 32.9zM257 0c61.9 0 112 50.1 112 112h-224c0-61.9 50.1-112 112-112z"}]}}),n["default"].register({heart:{width:512,height:512,paths:[{d:"M462.3 62.6c62.8 53.6 66.1 149.8 9.8 207.9l-193.5 199.8c-12.5 12.9-32.8 12.9-45.3 0l-193.5-199.8c-56.2-58.1-52.9-154.3 9.9-207.9 54.8-46.7 136.4-38.3 186.6 13.6l19.7 20.3 19.7-20.3c50.3-51.9 131.8-60.3 186.6-13.6z"}]}});var h=i(33205),l=i(20928);const c={name:"Footer",computed:(0,r.Z)({},(0,h.rn)(l.t,["info"]))},o=c;var d=i(1001),u=(0,d.Z)(o,a,s,!1,null,null,null);const p=u.exports},48208:(t,e,i)=>{var a=i(99280);a["default"].register({"question-circle":{width:512,height:512,paths:[{d:"M504 256c0 137-111 248-248 248s-248-111-248-248c0-136.9 111-248 248-248s248 111.1 248 248zM262.7 90c-54.5 0-89.3 23-116.5 63.8-3.5 5.3-2.4 12.4 2.7 16.3l34.7 26.3c5.2 3.9 12.6 3 16.7-2.1 17.9-22.7 30.1-35.8 57.3-35.8 20.4 0 45.7 13.1 45.7 33 0 15-12.4 22.7-32.5 34-23.5 13.2-54.7 29.6-54.7 70.7v4c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-1.3c0-28.5 83.2-29.6 83.2-106.7 0-58-60.2-102-116.5-102zM256 338c-25.4 0-46 20.6-46 46 0 25.4 20.6 46 46 46s46-20.6 46-46c0-25.4-20.6-46-46-46z"}]}})}}]);
//# sourceMappingURL=3885.bd0db4e0.js.map