(self["webpackChunkaw_webui"]=self["webpackChunkaw_webui"]||[]).push([[5208],{48168:(r,e,t)=>{var n=t(8874),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var l=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in l)if(l.hasOwnProperty(i)){if(!("channels"in l[i]))throw new Error("missing channels property: "+i);if(!("labels"in l[i]))throw new Error("missing channel labels property: "+i);if(l[i].labels.length!==l[i].channels)throw new Error("channel and label counts mismatch: "+i);var u=l[i].channels,s=l[i].labels;delete l[i].channels,delete l[i].labels,Object.defineProperty(l[i],"channels",{value:u}),Object.defineProperty(l[i],"labels",{value:s})}function c(r,e){return Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2)}l.rgb.hsl=function(r){var e,t,n,a=r[0]/255,o=r[1]/255,l=r[2]/255,i=Math.min(a,o,l),u=Math.max(a,o,l),s=u-i;return u===i?e=0:a===u?e=(o-l)/s:o===u?e=2+(l-a)/s:l===u&&(e=4+(a-o)/s),e=Math.min(60*e,360),e<0&&(e+=360),n=(i+u)/2,t=u===i?0:n<=.5?s/(u+i):s/(2-u-i),[e,100*t,100*n]},l.rgb.hsv=function(r){var e,t,n,a,o,l=r[0]/255,i=r[1]/255,u=r[2]/255,s=Math.max(l,i,u),c=s-Math.min(l,i,u),h=function(r){return(s-r)/6/c+.5};return 0===c?a=o=0:(o=c/s,e=h(l),t=h(i),n=h(u),l===s?a=n-t:i===s?a=1/3+e-n:u===s&&(a=2/3+t-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*s]},l.rgb.hwb=function(r){var e=r[0],t=r[1],n=r[2],a=l.rgb.hsl(r)[0],o=1/255*Math.min(e,Math.min(t,n));return n=1-1/255*Math.max(e,Math.max(t,n)),[a,100*o,100*n]},l.rgb.cmyk=function(r){var e,t,n,a,o=r[0]/255,l=r[1]/255,i=r[2]/255;return a=Math.min(1-o,1-l,1-i),e=(1-o-a)/(1-a)||0,t=(1-l-a)/(1-a)||0,n=(1-i-a)/(1-a)||0,[100*e,100*t,100*n,100*a]},l.rgb.keyword=function(r){var e=a[r];if(e)return e;var t,o=1/0;for(var l in n)if(n.hasOwnProperty(l)){var i=n[l],u=c(r,i);u<o&&(o=u,t=l)}return t},l.keyword.rgb=function(r){return n[r]},l.rgb.xyz=function(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=.4124*e+.3576*t+.1805*n,o=.2126*e+.7152*t+.0722*n,l=.0193*e+.1192*t+.9505*n;return[100*a,100*o,100*l]},l.rgb.lab=function(r){var e,t,n,a=l.rgb.xyz(r),o=a[0],i=a[1],u=a[2];return o/=95.047,i/=100,u/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,e=116*i-16,t=500*(o-i),n=200*(i-u),[e,t,n]},l.hsl.rgb=function(r){var e,t,n,a,o,l=r[0]/360,i=r[1]/100,u=r[2]/100;if(0===i)return o=255*u,[o,o,o];t=u<.5?u*(1+i):u+i-u*i,e=2*u-t,a=[0,0,0];for(var s=0;s<3;s++)n=l+1/3*-(s-1),n<0&&n++,n>1&&n--,o=6*n<1?e+6*(t-e)*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e,a[s]=255*o;return a},l.hsl.hsv=function(r){var e,t,n=r[0],a=r[1]/100,o=r[2]/100,l=a,i=Math.max(o,.01);return o*=2,a*=o<=1?o:2-o,l*=i<=1?i:2-i,t=(o+a)/2,e=0===o?2*l/(i+l):2*a/(o+a),[n,100*e,100*t]},l.hsv.rgb=function(r){var e=r[0]/60,t=r[1]/100,n=r[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),l=255*n*(1-t),i=255*n*(1-t*o),u=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,u,l];case 1:return[i,n,l];case 2:return[l,n,u];case 3:return[l,i,n];case 4:return[u,l,n];case 5:return[n,l,i]}},l.hsv.hsl=function(r){var e,t,n,a=r[0],o=r[1]/100,l=r[2]/100,i=Math.max(l,.01);return n=(2-o)*l,e=(2-o)*i,t=o*i,t/=e<=1?e:2-e,t=t||0,n/=2,[a,100*t,100*n]},l.hwb.rgb=function(r){var e,t,n,a,o,l,i,u=r[0]/360,s=r[1]/100,c=r[2]/100,h=s+c;switch(h>1&&(s/=h,c/=h),e=Math.floor(6*u),t=1-c,n=6*u-e,0!==(1&e)&&(n=1-n),a=s+n*(t-s),e){default:case 6:case 0:o=t,l=a,i=s;break;case 1:o=a,l=t,i=s;break;case 2:o=s,l=t,i=a;break;case 3:o=s,l=a,i=t;break;case 4:o=a,l=s,i=t;break;case 5:o=t,l=s,i=a;break}return[255*o,255*l,255*i]},l.cmyk.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,l=r[2]/100,i=r[3]/100;return e=1-Math.min(1,a*(1-i)+i),t=1-Math.min(1,o*(1-i)+i),n=1-Math.min(1,l*(1-i)+i),[255*e,255*t,255*n]},l.xyz.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,l=r[2]/100;return e=3.2406*a+-1.5372*o+-.4986*l,t=-.9689*a+1.8758*o+.0415*l,n=.0557*a+-.204*o+1.057*l,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,e=Math.min(Math.max(0,e),1),t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),[255*e,255*t,255*n]},l.xyz.lab=function(r){var e,t,n,a=r[0],o=r[1],l=r[2];return a/=95.047,o/=100,l/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=116*o-16,t=500*(a-o),n=200*(o-l),[e,t,n]},l.lab.xyz=function(r){var e,t,n,a=r[0],o=r[1],l=r[2];t=(a+16)/116,e=o/500+t,n=t-l/200;var i=Math.pow(t,3),u=Math.pow(e,3),s=Math.pow(n,3);return t=i>.008856?i:(t-16/116)/7.787,e=u>.008856?u:(e-16/116)/7.787,n=s>.008856?s:(n-16/116)/7.787,e*=95.047,t*=100,n*=108.883,[e,t,n]},l.lab.lch=function(r){var e,t,n,a=r[0],o=r[1],l=r[2];return e=Math.atan2(l,o),t=360*e/2/Math.PI,t<0&&(t+=360),n=Math.sqrt(o*o+l*l),[a,n,t]},l.lch.lab=function(r){var e,t,n,a=r[0],o=r[1],l=r[2];return n=l/360*2*Math.PI,e=o*Math.cos(n),t=o*Math.sin(n),[a,e,t]},l.rgb.ansi16=function(r){var e=r[0],t=r[1],n=r[2],a=1 in arguments?arguments[1]:l.rgb.hsv(r)[2];if(a=Math.round(a/50),0===a)return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},l.hsv.ansi16=function(r){return l.rgb.ansi16(l.hsv.rgb(r),r[2])},l.rgb.ansi256=function(r){var e=r[0],t=r[1],n=r[2];if(e===t&&t===n)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;var a=16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5);return a},l.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),e=e/10.5*255,[e,e,e];var t=.5*(1+~~(r>50)),n=(1&e)*t*255,a=(e>>1&1)*t*255,o=(e>>2&1)*t*255;return[n,a,o]},l.ansi256.rgb=function(r){if(r>=232){var e=10*(r-232)+8;return[e,e,e]}var t;r-=16;var n=Math.floor(r/36)/5*255,a=Math.floor((t=r%36)/6)/5*255,o=t%6/5*255;return[n,a,o]},l.rgb.hex=function(r){var e=((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2])),t=e.toString(16).toUpperCase();return"000000".substring(t.length)+t},l.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var t=e[0];3===e[0].length&&(t=t.split("").map((function(r){return r+r})).join(""));var n=parseInt(t,16),a=n>>16&255,o=n>>8&255,l=255&n;return[a,o,l]},l.rgb.hcg=function(r){var e,t,n=r[0]/255,a=r[1]/255,o=r[2]/255,l=Math.max(Math.max(n,a),o),i=Math.min(Math.min(n,a),o),u=l-i;return e=u<1?i/(1-u):0,t=u<=0?0:l===n?(a-o)/u%6:l===a?2+(o-n)/u:4+(n-a)/u+4,t/=6,t%=1,[360*t,100*u,100*e]},l.hsl.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1,a=0;return n=t<.5?2*e*t:2*e*(1-t),n<1&&(a=(t-.5*n)/(1-n)),[r[0],100*n,100*a]},l.hsv.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=e*t,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},l.hcg.rgb=function(r){var e=r[0]/360,t=r[1]/100,n=r[2]/100;if(0===t)return[255*n,255*n,255*n];var a=[0,0,0],o=e%1*6,l=o%1,i=1-l,u=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=i,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=i,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=i}return u=(1-t)*n,[255*(t*a[0]+u),255*(t*a[1]+u),255*(t*a[2]+u)]},l.hcg.hsv=function(r){var e=r[1]/100,t=r[2]/100,n=e+t*(1-e),a=0;return n>0&&(a=e/n),[r[0],100*a,100*n]},l.hcg.hsl=function(r){var e=r[1]/100,t=r[2]/100,n=t*(1-e)+.5*e,a=0;return n>0&&n<.5?a=e/(2*n):n>=.5&&n<1&&(a=e/(2*(1-n))),[r[0],100*a,100*n]},l.hcg.hwb=function(r){var e=r[1]/100,t=r[2]/100,n=e+t*(1-e);return[r[0],100*(n-e),100*(1-n)]},l.hwb.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1-t,a=n-e,o=0;return a<1&&(o=(n-a)/(1-a)),[r[0],100*a,100*o]},l.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},l.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},l.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},l.gray.hsl=l.gray.hsv=function(r){return[0,0,r[0]]},l.gray.hwb=function(r){return[0,100,r[0]]},l.gray.cmyk=function(r){return[0,0,0,r[0]]},l.gray.lab=function(r){return[r[0],0,0]},l.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),t=(e<<16)+(e<<8)+e,n=t.toString(16).toUpperCase();return"000000".substring(n.length)+n},l.rgb.gray=function(r){var e=(r[0]+r[1]+r[2])/3;return[e/255*100]}},12085:(r,e,t)=>{var n=t(48168),a=t(4111),o={},l=Object.keys(n);function i(r){var e=function(e){return void 0===e||null===e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),r(e))};return"conversion"in r&&(e.conversion=r.conversion),e}function u(r){var e=function(e){if(void 0===e||null===e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var t=r(e);if("object"===typeof t)for(var n=t.length,a=0;a<n;a++)t[a]=Math.round(t[a]);return t};return"conversion"in r&&(e.conversion=r.conversion),e}l.forEach((function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:n[r].channels}),Object.defineProperty(o[r],"labels",{value:n[r].labels});var e=a(r),t=Object.keys(e);t.forEach((function(t){var n=e[t];o[r][t]=u(n),o[r][t].raw=i(n)}))})),r.exports=o},4111:(r,e,t)=>{var n=t(48168);function a(){for(var r={},e=Object.keys(n),t=e.length,a=0;a<t;a++)r[e[a]]={distance:-1,parent:null};return r}function o(r){var e=a(),t=[r];e[r].distance=0;while(t.length)for(var o=t.pop(),l=Object.keys(n[o]),i=l.length,u=0;u<i;u++){var s=l[u],c=e[s];-1===c.distance&&(c.distance=e[o].distance+1,c.parent=o,t.unshift(s))}return e}function l(r,e){return function(t){return e(r(t))}}function i(r,e){var t=[e[r].parent,r],a=n[e[r].parent][r],o=e[r].parent;while(e[o].parent)t.unshift(e[o].parent),a=l(n[e[o].parent][o],a),o=e[o].parent;return a.conversion=t,a}r.exports=function(r){for(var e=o(r),t={},n=Object.keys(e),a=n.length,l=0;l<a;l++){var u=n[l],s=e[u];null!==s.parent&&(t[u]=i(u,e))}return t}},8874:r=>{"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},19818:(r,e,t)=>{var n=t(8874),a=t(86851),o=Object.hasOwnProperty,l=Object.create(null);for(var i in n)o.call(n,i)&&(l[n[i]]=i);var u=r.exports={to:{},get:{}};function s(r,e,t){return Math.min(Math.max(e,r),t)}function c(r){var e=Math.round(r).toString(16).toUpperCase();return e.length<2?"0"+e:e}u.get=function(r){var e,t,n=r.substring(0,3).toLowerCase();switch(n){case"hsl":e=u.get.hsl(r),t="hsl";break;case"hwb":e=u.get.hwb(r),t="hwb";break;default:e=u.get.rgb(r),t="rgb";break}return e?{model:t,value:e}:null},u.get.rgb=function(r){if(!r)return null;var e,t,a,l=/^#([a-f0-9]{3,4})$/i,i=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,u=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,c=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,h=/^(\w+)$/,f=[0,0,0,1];if(e=r.match(i)){for(a=e[2],e=e[1],t=0;t<3;t++){var g=2*t;f[t]=parseInt(e.slice(g,g+2),16)}a&&(f[3]=parseInt(a,16)/255)}else if(e=r.match(l)){for(e=e[1],a=e[3],t=0;t<3;t++)f[t]=parseInt(e[t]+e[t],16);a&&(f[3]=parseInt(a+a,16)/255)}else if(e=r.match(u)){for(t=0;t<3;t++)f[t]=parseInt(e[t+1],0);e[4]&&(e[5]?f[3]=.01*parseFloat(e[4]):f[3]=parseFloat(e[4]))}else{if(!(e=r.match(c)))return(e=r.match(h))?"transparent"===e[1]?[0,0,0,0]:o.call(n,e[1])?(f=n[e[1]],f[3]=1,f):null:null;for(t=0;t<3;t++)f[t]=Math.round(2.55*parseFloat(e[t+1]));e[4]&&(e[5]?f[3]=.01*parseFloat(e[4]):f[3]=parseFloat(e[4]))}for(t=0;t<3;t++)f[t]=s(f[t],0,255);return f[3]=s(f[3],0,1),f},u.get.hsl=function(r){if(!r)return null;var e=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=r.match(e);if(t){var n=parseFloat(t[4]),a=(parseFloat(t[1])%360+360)%360,o=s(parseFloat(t[2]),0,100),l=s(parseFloat(t[3]),0,100),i=s(isNaN(n)?1:n,0,1);return[a,o,l,i]}return null},u.get.hwb=function(r){if(!r)return null;var e=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=r.match(e);if(t){var n=parseFloat(t[4]),a=(parseFloat(t[1])%360+360)%360,o=s(parseFloat(t[2]),0,100),l=s(parseFloat(t[3]),0,100),i=s(isNaN(n)?1:n,0,1);return[a,o,l,i]}return null},u.to.hex=function(){var r=a(arguments);return"#"+c(r[0])+c(r[1])+c(r[2])+(r[3]<1?c(Math.round(255*r[3])):"")},u.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},u.to.rgb.percent=function(){var r=a(arguments),e=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+t+"%, "+n+"%)":"rgba("+e+"%, "+t+"%, "+n+"%, "+r[3]+")"},u.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},u.to.hwb=function(){var r=a(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},u.to.keyword=function(r){return l[r.slice(0,3)]}},6767:(r,e,t)=>{"use strict";var n=t(19818),a=t(12085),o=[].slice,l=["keyword","gray","hex"],i={};Object.keys(a).forEach((function(r){i[o.call(a[r].labels).sort().join("")]=r}));var u={};function s(r,e){if(!(this instanceof s))return new s(r,e);if(e&&e in l&&(e=null),e&&!(e in a))throw new Error("Unknown model: "+e);var t,c;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof s)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"===typeof r){var h=n.get(r);if(null===h)throw new Error("Unable to parse color from string: "+r);this.model=h.model,c=a[this.model].channels,this.color=h.value.slice(0,c),this.valpha="number"===typeof h.value[c]?h.value[c]:1}else if(r.length){this.model=e||"rgb",c=a[this.model].channels;var f=o.call(r,0,c);this.color=d(f,c),this.valpha="number"===typeof r[c]?r[c]:1}else if("number"===typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var g=Object.keys(r);"alpha"in r&&(g.splice(g.indexOf("alpha"),1),this.valpha="number"===typeof r.alpha?r.alpha:0);var p=g.sort().join("");if(!(p in i))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=i[p];var v=a[this.model].labels,b=[];for(t=0;t<v.length;t++)b.push(r[v[t]]);this.color=d(b)}if(u[this.model])for(c=a[this.model].channels,t=0;t<c;t++){var m=u[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(r,e){return Number(r.toFixed(e))}function h(r){return function(e){return c(e,r)}}function f(r,e,t){return r=Array.isArray(r)?r:[r],r.forEach((function(r){(u[r]||(u[r]=[]))[e]=t})),r=r[0],function(n){var a;return arguments.length?(t&&(n=t(n)),a=this[r](),a.color[e]=n,a):(a=this[r]().color[e],t&&(a=t(a)),a)}}function g(r){return function(e){return Math.max(0,Math.min(r,e))}}function p(r){return Array.isArray(r)?r:[r]}function d(r,e){for(var t=0;t<e;t++)"number"!==typeof r[t]&&(r[t]=0);return r}s.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in n.to?this:this.rgb();e=e.round("number"===typeof r?r:1);var t=1===e.valpha?e.color:e.color.concat(this.valpha);return n.to[e.model](t)},percentString:function(r){var e=this.rgb().round("number"===typeof r?r:1),t=1===e.valpha?e.color:e.color.concat(this.valpha);return n.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=a[this.model].channels,t=a[this.model].labels,n=0;n<e;n++)r[t[n]]=this.color[n];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new s(this.color.map(h(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new s(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:f("rgb",0,g(255)),green:f("rgb",1,g(255)),blue:f("rgb",2,g(255)),hue:f(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:f("hsl",1,g(100)),lightness:f("hsl",2,g(100)),saturationv:f("hsv",1,g(100)),value:f("hsv",2,g(100)),chroma:f("hcg",1,g(100)),gray:f("hcg",2,g(100)),white:f("hwb",1,g(100)),wblack:f("hwb",2,g(100)),cyan:f("cmyk",0,g(100)),magenta:f("cmyk",1,g(100)),yellow:f("cmyk",2,g(100)),black:f("cmyk",3,g(100)),x:f("xyz",0,g(100)),y:f("xyz",1,g(100)),z:f("xyz",2,g(100)),l:f("lab",0,g(100)),a:f("lab",1),b:f("lab",2),keyword:function(r){return arguments.length?new s(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new s(r):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],t=0;t<r.length;t++){var n=r[t]/255;e[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),t=r.luminosity();return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color,e=(299*r[0]+587*r[1]+114*r[2])/1e3;return e<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return s.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),t=e.color[0];return t=(t+r)%360,t=t<0?360+t:t,e.color[0]=t,e},mix:function(r,e){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var t=r.rgb(),n=this.rgb(),a=void 0===e?.5:e,o=2*a-1,l=t.alpha()-n.alpha(),i=((o*l===-1?o:(o+l)/(1+o*l))+1)/2,u=1-i;return s.rgb(i*t.red()+u*n.red(),i*t.green()+u*n.green(),i*t.blue()+u*n.blue(),t.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach((function(r){if(-1===l.indexOf(r)){var e=a[r].channels;s.prototype[r]=function(){if(this.model===r)return new s(this);if(arguments.length)return new s(arguments,r);var t="number"===typeof arguments[e]?e:this.valpha;return new s(p(a[this.model][r].raw(this.color)).concat(t),r)},s[r]=function(t){return"number"===typeof t&&(t=d(o.call(arguments),e)),new s(t,r)}}})),r.exports=s},56029:(r,e,t)=>{var n=t(33448);function a(r,e,t){var a=-1,o=r.length;while(++a<o){var l=r[a],i=e(l);if(null!=i&&(void 0===u?i===i&&!n(i):t(i,u)))var u=i,s=l}return s}r.exports=a},21078:(r,e,t)=>{var n=t(62488),a=t(37285);function o(r,e,t,l,i){var u=-1,s=r.length;t||(t=a),i||(i=[]);while(++u<s){var c=r[u];e>0&&t(c)?e>1?o(c,e-1,t,l,i):n(i,c):l||(i[i.length]=c)}return i}r.exports=o},53325:r=>{function e(r,e){return r>e}r.exports=e},37285:(r,e,t)=>{var n=t(62705),a=t(35694),o=t(1469),l=n?n.isConcatSpreadable:void 0;function i(r){return o(r)||a(r)||!!(l&&r&&r[l])}r.exports=i},50361:(r,e,t)=>{var n=t(85990),a=1,o=4;function l(r){return n(r,a|o)}r.exports=l},42348:(r,e,t)=>{var n=t(21078),a=1/0;function o(r){var e=null==r?0:r.length;return e?n(r,a):[]}r.exports=o},18446:(r,e,t)=>{var n=t(90939);function a(r,e){return n(r,e)}r.exports=a},10928:r=>{function e(r){var e=null==r?0:r.length;return e?r[e-1]:void 0}r.exports=e},35161:(r,e,t)=>{var n=t(29932),a=t(67206),o=t(69199),l=t(1469);function i(r,e){var t=l(r)?n:o;return t(r,a(e,3))}r.exports=i},84753:(r,e,t)=>{var n=t(56029),a=t(53325),o=t(67206);function l(r,e){return r&&r.length?n(r,o(e,2),a):void 0}r.exports=l},86851:(r,e,t)=>{"use strict";var n=t(89594),a=Array.prototype.concat,o=Array.prototype.slice,l=r.exports=function(r){for(var e=[],t=0,l=r.length;t<l;t++){var i=r[t];n(i)?e=a.call(e,o.call(i)):e.push(i)}return e};l.wrap=function(r){return function(){return r(l(arguments))}}},89594:r=>{r.exports=function(r){return!(!r||"string"===typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},21692:(r,e,t)=>{"use strict";t.r(e),t.d(e,{annotate:()=>v,build_category_hierarchy:()=>m,classifyEvents:()=>A,cleanCategory:()=>M,createMissingParents:()=>b,defaultCategories:()=>d,flatten_category_hierarchy:()=>y,loadClasses:()=>x,matchString:()=>C,saveClasses:()=>k});var n=t(35161),a=t.n(n),o=t(84753),l=t.n(o),i=t(42348),u=t.n(i),s=t(50361),c=t.n(s),h=(t(68309),t(69600),t(47042),t(21249),t(41539),t(70189),t(78783),t(33948),t(57327),t(38862),t(24603),t(28450),t(74916),t(88386),t(39714),t(77601),t(5212),">"),f=["app","title"],g=["Uncategorized"],p="#CCC",d=[{name:["Work"],rule:{type:"regex",regex:"Google Docs|libreoffice|ReText"},data:{color:"#0F0"}},{name:["Work","Programming"],rule:{type:"regex",regex:"GitHub|Stack Overflow|BitBucket|Gitlab|vim|Spyder|kate|Ghidra|Scite"}},{name:["Work","Programming","ActivityWatch"],rule:{type:"regex",regex:"ActivityWatch|aw-",ignore_case:!0}},{name:["Work","Image"],rule:{type:"regex",regex:"Gimp|Inkscape"}},{name:["Work","Video"],rule:{type:"regex",regex:"Kdenlive"}},{name:["Work","Audio"],rule:{type:"regex",regex:"Audacity"}},{name:["Work","3D"],rule:{type:"regex",regex:"Blender"}},{name:["Media","Games"],rule:{type:"regex",regex:"Minecraft|RimWorld"},data:{color:"#F80"}},{name:["Media","Video"],rule:{type:"regex",regex:"YouTube|Plex|VLC"},data:{color:"#F33"}},{name:["Media","Social Media"],rule:{type:"regex",regex:"reddit|Facebook|Twitter|Instagram|devRant",ignore_case:!0},data:{color:"#FCC400"}},{name:["Media","Music"],rule:{type:"regex",regex:"Spotify|Deezer",ignore_case:!0},data:{color:"#A8FC00"}},{name:["Comms"],rule:{type:null},data:{color:"#9FF"}},{name:["Comms","IM"],rule:{type:"regex",regex:"Messenger|Telegram|Signal|WhatsApp|Rambox|Slack|Riot|Element|Discord|Nheko"}},{name:["Comms","Email"],rule:{type:"regex",regex:"Gmail|Thunderbird|mutt|alpine"}},{name:["Uncategorized"],rule:{type:null},data:{color:p}}];function v(r){var e=r.name;return r.name_pretty=e.join(h),r.subname=e.slice(-1)[0],r.parent=e.length>1?e.slice(0,-1):null,r.depth=e.length-1,r}function b(r){r=c()(r),r=r.slice().map((function(r){return v(r)}));var e=new Set(r.map((function(r){return r.name.join(h)})));function t(n){n.map((function(r){return r.parent})).filter((function(r){return!!r})).map((function(n){var a=n.join(h);if(n&&!e.has(a)){var o=v({name:n,rule:{type:null}});r.push(o),e.add(a),t([o])}}))}return t(r),r}function m(r){function e(t){return t.map((function(t){return t.children=r.filter((function(r){return!(!r.parent||!t.name)&&JSON.stringify(r.parent)==JSON.stringify(t.name)})),e(t.children),t}))}return r=b(r),e(r.filter((function(r){return!r.parent})))}function y(r){return u()(r.map((function(r){var e=[r,y(r.children)];return r.children=[],e})))}function w(){return!1}function k(r){w()?console.log("Not saving classes in test mode"):(localStorage.classes=JSON.stringify(r.map(M)),console.log("Saved classes",localStorage.classes))}function M(r){return r=c()(r),delete r.children,delete r.parent,delete r.subname,delete r.name_pretty,delete r.depth,!r.rule||null!==r.rule.type&&"none"!==r.rule.type||(r.rule={type:"none"}),r}function x(){var r=localStorage.classes;return r&&r.length>=1?JSON.parse(r).map(M):d}function F(r){return l()(r,(function(r){return r.name.length}))}function C(r,e){e||(console.log("Categories not passed, loading... (if you see this outside of a test, you should probably pass them)"),e=x());var t=e.filter((function(r){return"regex"==r.rule.type})).map((function(r){var e=RegExp(r.rule.regex,r.rule.ignore_case?"i":"");return[r,e]})),n=t.filter((function(e){return e[1].test(r)}));return n.length>0?F(n.map((function(r){return r[0]}))):null}function A(r,e){var t=e.filter((function(r){return"regex"==r.rule.type})).map((function(r){var e=RegExp(r.rule.regex,r.rule.ignore_case?"i":"");return[r,e]}));return r.map((function(r){var e=t.filter((function(e){return a()(f,(function(t){return e[1].test(r.data[t])})).some((function(r){return r}))}));if(e.length>0){var n=F(e.map((function(r){return r[0]})));r.data.$category=n.name}else r.data.$category=g;return r}))}},55208:(r,e,t)=>{"use strict";t.d(e,{$K:()=>b,EB:()=>v,NF:()=>y,T_:()=>d});var n=t(10928),a=t.n(n),o=t(18446),l=t.n(o),i=(t(74916),t(23123),t(96647),t(83710),t(41539),t(39714),t(47042),t(68309),t(69826),t(4723),t(23157),t(21692)),u=t(6767),s=t.n(u),c=t(56604),h="#CCC",f=c.scaleOrdinal(["#90CAF9","#FFE082","#EF9A9A","#A5D6A7"]);f.domain("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20".split(/, /));var g={afk:"#EEE","not-afk":"#7F6",hibernating:"#DD6","google-chrome":"#6AA7FE",chromium:"#8CF",firefox:"#F94",spotify:"#5FA",alacritty:"#FD8",vue:"#5d9",python:"#369",javascript:"#f6b",localhost:"#CCC","github.com":"#EBF","stackoverflow.com":s()("#F48024").lighten(.3),"google.com":"#0AF","google.se":"#0AF","messenger.com":s()("#3b5998").lighten(.5),"facebook.com":s()("#3b5998").lighten(.5),uncategorized:h};function p(r){var e=0;if(0===r.length)return e;for(var t=0;t<r.length;t++){var n=r.charCodeAt(t);e=(e<<5)-e+n,e&=e}return e}function d(r){return r=r||"",r=r.toLowerCase(),g[r]||f(Math.abs(p(r)%20).toString())}function v(r,e){if(r&&r.data&&r.data.color)return r.data.color;if(r&&r.name.slice(0,-1).length>0){var t=r.name.slice(0,-1),n=e.find((function(r){return l()(r.name,t)}));return void 0===n&&console.error("Couldn't find parent!",t),v(n,e)}return h}function b(r){var e=(0,i.loadClasses)(),t=(0,i.matchString)(r,e);return null!==t?v(t,e):m(r)}function m(r){var e=void 0===localStorage||"true"===localStorage.useColorFallback;return e?d(r):h}function y(r,e){var t,n;if("currentwindow"==r.type)return e.data.app;if("web.tab.current"==r.type){var o=/^.+:\/\/(?:www.)?([^/]+)/,l=e.data.url.match(o);return l?l[1]:e.data.url}return"afkstatus"==r.type?e.data.status:null!==(t=r.type)&&void 0!==t&&t.startsWith("app.editor")?a()(e.data.file.split("/")):null!==(n=r.type)&&void 0!==n&&n.startsWith("general.stopwatch")?e.data.label:e.data.title}}}]);
//# sourceMappingURL=5208.1762a30d.js.map
