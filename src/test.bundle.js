(()=>{var rr=Object.create,be=Object.defineProperty,tr=Object.getPrototypeOf,nr=Object.prototype.hasOwnProperty,ir=Object.getOwnPropertyNames,sr=Object.getOwnPropertyDescriptor,or=c=>be(c,"__esModule",{value:!0}),ar=(c,v)=>()=>(v||(v={exports:{}},c(v.exports,v)),v.exports),ur=(c,v,I)=>{if(or(c),v&&typeof v=="object"||typeof v=="function")for(let S of ir(v))!nr.call(c,S)&&S!=="default"&&be(c,S,{get:()=>v[S],enumerable:!(I=sr(v,S))||I.enumerable});return c},fr=c=>c&&c.__esModule?c:ur(be(c!=null?rr(tr(c)):{},"default",{value:c,enumerable:!0}),c),qe=ar((Z,Ce)=>{!function(c,v){typeof Z=="object"&&typeof Ce!="undefined"?v(Z):typeof define=="function"&&define.amd?define(["exports"],v):v((c=c||self).TWEEN={})}(Z,function(c){"use strict";function v(e){var r=g.indexOf(e);-1<r&&g.splice(r,1),g.push(e),$=0,ee&&!L&&(V=we(ke),L=!0)}function I(e){for(var r=0;r<g.length;r++)if(e===g[r])return g[r];return null}function S(){return L}function Te(){return te}var V,k=typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:this||(c!==void 0?c:{}),Ue=k.requestAnimationFrame||function(e){return k.setTimeout(e,50/3)},J=k.cancelAnimationFrame||function(e){return k.clearTimeout(e)},j=function(){if(typeof process=="undefined"||process.hrtime===void 0||process.versions&&process.versions.electron!==void 0){if(k.performance!==void 0&&k.performance.now!==void 0)return k.performance.now.bind(k.performance);var e=k.performance&&k.performance.timing&&k.performance.timing.navigationStart?k.performance.timing.navigationStart:Date.now();return function(){return Date.now()-e}}return function(){var r=process.hrtime();return 1e3*r[0]+r[1]/1e6}}(),g=[],L=!1,ee=!1,re=[],we=Ue,$=0,Oe=120,te=!0,F=function(e){var r=g.indexOf(e);r!==-1&&g.splice(r,1),g.length===0&&(J(V),L=!1)},ke=function e(){var r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:j(),t=1<arguments.length?arguments[1]:void 0;if(Oe<=$&&te)return L=!1,$=0,J(V),!1;ee&&L?V=we(e):function(){for(var s=0;s<re.length;s++)re[s]()}(),g.length||$++;for(var n=0,i=g.length;n<i;)g[n++].update(r,t),i>g.length&&n--,i=g.length;return!0},A={},B={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return Math.pow(e,2)},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*Math.pow(e,2):-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return Math.pow(e,3)},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*Math.pow(e,3):.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return Math.pow(e,4)},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*Math.pow(e,4):-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return Math.pow(e,5)},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*Math.pow(e,5):.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){var r=2.5949095;return(e*=2)<1?e*e*((1+r)*e-r)*.5:.5*((e-=2)*e*((1+r)*e+r)+2)}},Bounce:{In:function(e){return 1-B.Bounce.Out(1-e)},Out:function(e){var r=2.75,t=7.5625;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},InOut:function(e){return e<.5?.5*B.Bounce.In(2*e):.5*B.Bounce.Out(2*e-1)+.5}},Stepped:{steps:function(e){return function(r){return(r*e|0)/e}}}};function m(e){return(m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function ne(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function je(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,r,t){return r&&je(e.prototype,r),t&&je(e,t),e}function Ae(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ie(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ae(Object(t),!0).forEach(function(n){var i,s,a;i=e,a=t[s=n],s in i?Object.defineProperty(i,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ae(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(e)}function Ee(e,r){return(Ee=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(e,r)}function Me(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e,r){return!r||typeof r!="object"&&typeof r!="function"?Me(e):r}function Ve(e,r){return function(t){if(Array.isArray(t))return t}(e)||function(t,n){if(!(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]"))return;var i=[],s=!0,a=!1,u=void 0;try{for(var o,f=t[Symbol.iterator]();!(s=(o=f.next()).done)&&(i.push(o.value),!n||i.length!==n);s=!0);}catch(l){a=!0,u=l}finally{try{s||f.return==null||f.return()}finally{if(a)throw u}}return i}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var se=50/3,oe="_chainedTweens",G="Callback",ae="update",ue="complete",fe="start",le="repeat",he="reverse",ce="restart",M="STRING_PROP",Re=/\s+|([A-Za-z?().,{}:""[\]#%]+)|([-+]=+)?([-+]+)?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]=?\d+)?/g;function pe(e){if(e&&e.nodeType||e===void 0||m(e)!=="object")return e;if(Array.isArray(e))return[].concat(e);if(m(e)!=="object")return e;var r={};for(var t in e)r[t]=pe(e[t]);return r}var Be=function(e){return isNaN(+e)||(e[0]==="+"||e[0]==="-")&&e[1]==="="||e===""||e===" "},Ge=/^#([0-9a-f]{6}|[0-9a-f]{3})$/gi,ze=function(e,r){var t,n,i;r.length===3&&(r=(t=r[0])+t+(n=r[1])+n+(i=r[2])+i);var s=parseInt(r,16);return"rgb("+(t=s>>16&255)+", "+(n=s>>8&255)+", "+(i=255&s)+")"};function P(e){if(e&&e.splice&&e.isString)return e;if(typeof e!="string")return e;if(e.charAt(1)==="=")return e;var r=e.replace(Ge,ze).match(Re).map(function(t){return Be(t)?t:+t});return r.isString=!0,r}function R(e,r,t,n){var i=t[e],s=n[e];if(i===s)return!0;if(Array.isArray(i)&&Array.isArray(s)&&i.length===s.length)for(var a=0,u=s.length;a<u;a++){var o=i[a],f=s[a];o===f||typeof o=="number"&&typeof f=="number"||R(a,r[e],i,s)}if(!(typeof i=="number"&&typeof s=="number"||i&&i.splice&&i.isString&&s&&s.splice&&s.isString)){if(typeof i=="string"&&Array.isArray(s)){var l=P(i),h=s.map(P);return t[e]=l,n[e]=h,!0}if(typeof i=="string"||typeof s=="string"){var p=Array.isArray(i)&&i[0]===M?i:P(i),d=Array.isArray(s)&&s[0]===M?s:P(s);if(p===void 0)return;for(var y=1;y<p.length;)p[y]===d[y]&&typeof p[y-1]=="string"?(p.splice(y-1,2,p[y-1]+p[y]),d.splice(y-1,2,d[y-1]+d[y])):y++;return p[y=0]===M&&p.shift(),d[0]===M&&d.shift(),t[e]=p,n[e]=d,!0}if(m(i)==="object"&&m(s)==="object"){if(Array.isArray(i)&&!i.isString)return i.map(function(E,T){return R(T,r[e],i,s)});for(var _ in s)R(_,r[e],i,s);return!0}}return!1}var H="rgba(",x=function(e,r,t){var n=2<arguments.length&&t!==void 0?t:"rgb(";return typeof e[r]=="number"&&(e[r-1]===n||e[r-3]===n||e[r-5]===n)};function N(e,r,t,n,i,s,a){var u=a?t:t[e],o=a?n:n[e];if(o===void 0)return u;if(u===void 0||typeof u=="string"||u===o)return o;if(m(u)==="object"&&m(o)==="object"){if(!u||!o)return r[e];if(m(u)==="object"&&u&&u.isString&&o&&o.splice&&o.isString){for(var f="",l=0,h=u.length;l<h;l++)if(u[l]!==o[l]||typeof u[l]!="number"||typeof o[l]=="number"){var p=typeof u[l]=="number"&&typeof o[l]=="string"&&o[l][1]==="=",d=typeof u[l]!="number"?u[l]:p?u[l]+parseFloat(o[l][0]+o[l].substr(2))*i:u[l]+(o[l]-u[l])*i;(x(u,l)||x(u,l,H))&&(d|=0),f+=d,p&&s===1&&(u[l]=u[l]+parseFloat(o[l][0]+o[l].substr(2)))}else f+=u[l];return a||(r[e]=f),f}if(Array.isArray(u)&&u[0]!==M)for(var y=0,_=u.length;y<_;y++)u[y]!==o[y]&&typeof r[e]!="string"&&N(y,r[e],u,o,i,s);else if(m(u)==="object"&&u&&!u.isString)for(var E in u)u[E]!==o[E]&&N(E,r[e],u,o,i,s)}else if(typeof u=="number"){var T=typeof o=="string";r[e]=T?u+parseFloat(o[0]+o.substr(2))*i:u+(o-u)*i,T&&s===1&&(t[e]=r[e])}else typeof o=="function"&&(r[e]=o(i));return r[e]}function de(e,r){var t=e[r],n=r.replace(We,"").split(Qe),i=n.length-1,s=Array.isArray(e),a=m(e)==="object"&&!s;return a?(e[r]=null,delete e[r]):s&&e.splice(r,1),n.reduce(function(u,o,f){s&&o!=="."&&o!=="["&&(o*=1);var l=n[f+1]==="[";if(o==="."||o==="[")return o==="."?s=!(a=!0):o==="["&&(s=!(a=!1)),u;if(u[o]===void 0){if(s||a)return u[o]=f===i?t:s||l?[]:a?{}:null,a=s=!1,u[o]}else if(u[o]!==void 0)return f===i&&(u[o]=t),u[o];return u},e)}function ye(e){if(m(e)==="object"&&e){for(var r in e)if(r.indexOf(".")!==-1||r.indexOf("[")!==-1)de(e,r);else if(m(e[r])==="object"&&e[r]){var t=e[r];for(var n in t)if(n.indexOf(".")!==-1||n.indexOf("[")!==-1)de(t,n);else if(m(t[n])==="object"&&t[n]){var i=t[n];for(var s in i)s.indexOf(".")===-1&&s.indexOf("[")===-1||de(i,s)}}}return e}var X,Qe=/([.[])/g,We=/\]/g,$e=Object.freeze({__proto__:null,FRAME_MS:se,TOO_LONG_FRAME_MS:250,CHAINED_TWEENS:oe,EVENT_CALLBACK:G,EVENT_UPDATE:ae,EVENT_COMPLETE:ue,EVENT_START:fe,EVENT_REPEAT:le,EVENT_REVERSE:he,EVENT_PAUSE:"pause",EVENT_PLAY:"play",EVENT_RESTART:ce,EVENT_STOP:"stop",EVENT_SEEK:"seek",STRING_PROP:M,NUM_REGEX:Re,deepCopy:pe,decomposeString:P,decompose:R,RGB:"rgb(",RGBA:H,isRGBColor:x,recompose:N,SET_NESTED:ye}),b={Linear:function(e,r,t){var n=e.length-1,i=n*r,s=Math.floor(i),a=b.Utils.Linear;return r<0?a(e[0],e[1],i,t):1<r?a(e[n],e[n-1],n-i,t):a(e[s],e[n<s+1?n:s+1],i-s,t)},Bezier:function(e,r,t){for(var n=b.Utils.Reset(t),i=e.length-1,s=Math.pow,a=b.Utils.Bernstein,u=Array.isArray(n),o=0;o<=i;o++)if(typeof n=="number")n+=s(1-r,i-o)*s(r,o)*e[o]*a(i,o);else if(u)for(var f=0,l=n.length;f<l;f++)typeof n[f]=="number"?n[f]+=s(1-r,i-o)*s(r,o)*e[o][f]*a(i,o):n[f]=e[o][f];else if(m(n)==="object")for(var h in n)typeof n[h]=="number"?n[h]+=s(1-r,i-o)*s(r,o)*e[o][h]*a(i,o):n[h]=e[o][h];else if(typeof n=="string"){for(var p="",d=e[Math.round(i*r)],y=1,_=d.length;y<_;y++)p+=d[y];return p}return n},CatmullRom:function(e,r,t){var n=e.length-1,i=n*r,s=Math.floor(i),a=b.Utils.CatmullRom;return e[0]===e[n]?(r<0&&(s=Math.floor(i=n*(1+r))),a(e[(s-1+n)%n],e[s],e[(s+1)%n],e[(s+2)%n],i-s,t)):r<0?a(e[1],e[1],e[0],e[0],-r,t):1<r?a(e[n-1],e[n-1],e[n],e[n],(0|r)-r,t):a(e[s?s-1:0],e[s],e[n<s+1?n:s+1],e[n<s+2?n:s+2],i-s,t)},Utils:{Linear:function(e,r,t,n){if(e===r||typeof e=="string"){if(r.length&&r.splice&&r.isString){r="";for(var i=0,s=e.length;i<s;i++)r+=e[i]}return r}if(typeof e=="number")return typeof e=="function"?e(t):e+(r-e)*t;if(m(e)==="object"){if(e.length!==void 0){var a=typeof e[0]=="string"||e.isString;if(a||e[0]===M){for(var u="",o=a?0:1,f=e.length;o<f;o++){var l=t===0?e[o]:t!==1&&typeof e[o]=="number"?e[o]+(r[o]-e[o])*t:r[o];(0<t&&t<1&&x(e,o)||x(e,o,H))&&(l|=0),u+=l}return u}if(n&&n.length&&n.splice)for(var h=0,p=n.length;h<p;h++)n[h]=b.Utils.Linear(e[h],r[h],t,n[h])}else for(var d in n)n[d]=b.Utils.Linear(e[d],r[d],t,n[d]);return n}},Reset:function(e){if(Array.isArray(e)){for(var r=0,t=e.length;r<t;r++)e[r]=b.Utils.Reset(e[r]);return e}if(m(e)!=="object")return typeof e=="number"?0:e;for(var n in e)e[n]=b.Utils.Reset(e[n]);return e},Bernstein:function(e,r){var t=b.Utils.Factorial;return t(e)/t(r)/t(e-r)},Factorial:(X=[1],function(e){var r=1;if(X[e])return X[e];for(var t=e;1<t;t--)r*=t;return X[e]=r}),CatmullRom:function(e,r,t,n,i,s){if(typeof e=="string")return r;if(typeof e=="number"){var a=.5*(t-e),u=.5*(n-r),o=i*i;return(2*r-2*t+a+u)*(i*o)+(-3*r+3*t-2*a-u)*o+a*i+r}if(m(e)==="object"){if(e.length!==void 0){if(e[0]===M){for(var f="",l=1,h=e.length;l<h;l++){var p=typeof e[l]=="number"?b.Utils.CatmullRom(e[l],r[l],t[l],n[l],i):n[l];(x(e,l)||x(e,l,H))&&(p|=0),f+=p}return f}for(var d=0,y=s.length;d<y;d++)s[d]=b.Utils.CatmullRom(e[d],r[d],t[d],n[d],i,s[d])}else for(var _ in s)s[_]=b.Utils.CatmullRom(e[_],r[_],t[_],n[_],i,s[_]);return s}}}},z={};function Ie(e,r,t){if(!e||!e.nodeType)return r;var n=e.queueID||"q_"+Date.now();e.queueID||(e.queueID=n);var i=z[n];if(i){if(i.object===r&&e===i.tween.node&&t._startTime===i.tween._startTime)F(i.tween);else if(m(r)==="object"&&r&&i.object){for(var s in r)s in i.object&&(t._startTime===i.tween._startTime?delete i.object[s]:i.propNormaliseRequired=!0);Object.assign(i.object,r)}return i.object}return m(r)==="object"&&r?(z[n]={tween:t,object:r,propNormaliseRequired:!1},z[n].object):r}function ve(e,r,t){return r?e?typeof window!="undefined"&&e===window||typeof document!="undefined"&&e===document?[e]:typeof e=="string"?!!document.querySelectorAll&&document.querySelectorAll(e):Array.isArray(e)?e:e.nodeType?[e]:t?e:[]:null:e?typeof window!="undefined"&&e===window||typeof document!="undefined"&&e===document?e:typeof e=="string"?!!document.querySelector&&document.querySelector(e):Array.isArray(e)?e[0]:e.nodeType||t?e:null:null}var Le=0,me=B.Linear.None,Q=function(){function e(r,t){return ne(this,e),this.id=Le++,!r||m(r)!=="object"||t||r.nodeType?r&&(r.nodeType||r.length||typeof r=="string")&&(r=this.node=ve(r),t=this.object=Ie(r,t,this)):(t=this.object=r,r=null),this._valuesEnd=null,this._valuesStart=Array.isArray(t)?[]:{},this._duration=1e3,this._easingFunction=me,this._easingReverse=me,this._interpolationFunction=b.Linear,this._startTime=0,this._initTime=0,this._delayTime=0,this._repeat=0,this._r=0,this._isPlaying=!1,this._yoyo=!1,this._reversed=!1,this._onStartCallbackFired=!1,this._pausedTime=null,this._isFinite=!0,this._maxListener=15,this._chainedTweensCount=0,this._prevTime=null,this}return K(e,null,[{key:"fromTo",value:function(r,t,n,i){var s=3<arguments.length&&i!==void 0?i:{};s.quickRender=s.quickRender?s.quickRender:!n;var a=new e(r,t).to(n,s);return s.quickRender&&(a.render().update(a._startTime),a._rendered=!1,a._onStartCallbackFired=!1),a}},{key:"to",value:function(r,t,n){return e.fromTo(r,null,t,n)}},{key:"from",value:function(r,t,n){return e.fromTo(r,t,null,n)}}]),K(e,[{key:"setMaxListener",value:function(r){var t=0<arguments.length&&r!==void 0?r:15;return this._maxListener=t,this}},{key:"on",value:function(r,t){for(var n=this._maxListener,i=r+G,s=0;s<n;s++){var a=i+s;if(!this[a]){this[a]=t;break}}return this}},{key:"once",value:function(r,t){for(var n=this,i=this._maxListener,s=r+G,a=function(o){var f=s+o;if(!n[f])return n[f]=function(){for(var l=arguments.length,h=new Array(l),p=0;p<l;p++)h[p]=arguments[p];t.apply(n,h),n[f]=null},"break"},u=0;u<i&&!(a(u)==="break");u++);return this}},{key:"off",value:function(r,t){for(var n=this._maxListener,i=r+G,s=0;s<n;s++){var a=i+s;this[a]===t&&(this[a]=null)}return this}},{key:"emit",value:function(r,t,n,i){var s=this._maxListener,a=r+G;if(!this[a+0])return this;for(var u=0;u<s;u++){var o=a+u;this[o]&&this[o](t,n,i)}return this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"isStarted",value:function(){return this._onStartCallbackFired}},{key:"reverse",value:function(r){var t=this._reversed;return this._reversed=r!==void 0?r:!t,this}},{key:"reversed",value:function(){return this._reversed}},{key:"pause",value:function(){return this._isPlaying?(this._isPlaying=!1,F(this),this._pausedTime=j(),this.emit("pause",this.object)):this}},{key:"play",value:function(){return this._isPlaying?this:(this._isPlaying=!0,this._startTime+=j()-this._pausedTime,this._initTime=this._startTime,v(this),this._pausedTime=j(),this.emit("play",this.object))}},{key:"restart",value:function(){return this._repeat=this._r,this.reassignValues(),v(this),this.emit(ce,this.object)}},{key:"seek",value:function(r,t){var n=this._duration,i=this._initTime,s=this._startTime,a=this._reversed,u=i+r;return this._isPlaying=!0,u<s&&i<=s&&(this._startTime-=n,this._reversed=!a),this.update(r,!1),this.emit("seek",r,this.object),t?this:this.pause()}},{key:"duration",value:function(r){return this._duration=typeof r=="function"?r(this._duration):r,this}},{key:"to",value:function(r,t){var n=1<arguments.length&&t!==void 0?t:1e3;if(this._valuesEnd=r,typeof n=="number"||typeof n=="function")this._duration=typeof n=="function"?n(this._duration):n;else if(m(n)==="object"){for(var i in n)if(typeof this[i]=="function"){var s=Ve(Array.isArray(n[i])?n[i]:[n[i]],4),a=s[0],u=a===void 0?null:a,o=s[1],f=o===void 0?null:o,l=s[2],h=l===void 0?null:l,p=s[3],d=p===void 0?null:p;this[i](u,f,h,d)}}return this}},{key:"render",value:function(){if(this._rendered)return this;var r=this._valuesStart,t=this._valuesEnd,n=this.object,i=this.node,s=this.InitialValues;if(ye(n),ye(t),i&&i.queueID&&z[i.queueID]){var a=z[i.queueID];if(a.propNormaliseRequired&&a.tween!==this){for(var u in t)a.tween._valuesEnd[u];a.normalisedProp=!0,a.propNormaliseRequired=!1}}if(i&&s&&(n&&Object.keys(n).length!==0?t&&Object.keys(t).length!==0||(t=this._valuesEnd=s(i,n)):n=this.object=Ie(i,s(i,t),this)),!r.processed){for(var o in t){var f=n&&n[o]&&pe(n[o]),l=t[o];if(!(A[o]&&A[o].init&&(A[o].init.call(this,f,l,o,n),f===void 0&&r[o]&&(f=r[o]),A[o].skipProcess))&&!(typeof f=="number"&&isNaN(f)||f===null||l===null||f===!1||l===!1||f===void 0||l===void 0||f===l)){if(r[o]=f,Array.isArray(l))if(Array.isArray(f))l.isString&&n[o].isString&&!f.isString?f.isString=!0:R(o,n,r,t);else{l.unshift(f);for(var h=0,p=l.length;h<p;h++)typeof l[h]=="string"&&(l[h]=P(l[h]))}else R(o,n,r,t);typeof f!="number"||typeof l!="string"||l[1]}}r.processed=!0}return e.Renderer&&this.node&&e.Renderer.init&&(e.Renderer.init.call(this,n,r,t),this.__render=!0),this._rendered=!0,this}},{key:"start",value:function(r){return this._startTime=r!==void 0?typeof r=="string"?j()+parseFloat(r):r:j(),this._startTime+=this._delayTime,this._initTime=this._prevTime=this._startTime,this._onStartCallbackFired=!1,this._rendered=!1,this._isPlaying=!0,v(this),this}},{key:"stop",value:function(){var r=this._isPlaying,t=this._isFinite,n=this.object,i=this._startTime,s=this._duration,a=this._r,u=this._yoyo,o=this._reversed;if(!r)return this;var f=t?(a+1)%2==1:!o;return this._reversed=!1,u&&f?this.update(i):this.update(i+s),F(this),this.emit("stop",n)}},{key:"delay",value:function(r){return this._delayTime=typeof r=="function"?r(this._delayTime):r,this}},{key:"chainedTweens",value:function(){if(this._chainedTweensCount=arguments.length,!this._chainedTweensCount)return this;for(var r=0,t=this._chainedTweensCount;r<t;r++)this[oe+r]=arguments[r];return this}},{key:"repeat",value:function(r){return this._repeat=this._duration?typeof r=="function"?r(this._repeat):r:0,this._r=this._repeat,this._isFinite=isFinite(r),this}},{key:"reverseDelay",value:function(r){return this._reverseDelayTime=typeof r=="function"?r(this._reverseDelayTime):r,this}},{key:"yoyo",value:function(r,t){return this._yoyo=typeof r=="function"?r(this._yoyo):r===null?this._yoyo:r,r||(this._reversed=!1),this._easingReverse=t||null,this}},{key:"easing",value:function(r){return this._easingFunction=r,this}},{key:"interpolation",value:function(r){return typeof r=="function"&&(this._interpolationFunction=r),this}},{key:"reassignValues",value:function(r){var t=this._valuesStart,n=this.object,i=this._delayTime;for(var s in this._isPlaying=!0,this._startTime=r!==void 0?r:j(),this._startTime+=i,this._reversed=!1,v(this),t){var a=t[s];n[s]=a}return this}},{key:"update",value:function(r,t,n){var i,s,a,u=this._onStartCallbackFired,o=this._easingFunction,f=this._interpolationFunction,l=this._easingReverse,h=this._repeat,p=this._delayTime,d=this._reverseDelayTime,y=this._yoyo,_=this._reversed,E=this._startTime,T=this._prevTime,D=this._duration,Y=this._valuesStart,W=this._valuesEnd,O=this.object,Ye=this._isFinite,Ze=this._isPlaying,Je=this.__render,Fe=this._chainedTweensCount,xe=0;if(D){var Ne=(r=r!==void 0?r:j())-T;if(this._prevTime=r,250<Ne&&S()&&Te()&&(r-=Ne-se),!Ze||r<E&&!n)return!0;i=1<(i=(r-E)/D)?1:i,i=_?1-i:i}else i=1,h=0;if(u||(this._rendered||(this.render(),this._rendered=!0),this.emit(fe,O),this._onStartCallbackFired=!0),s=_&&l||o,!O)return!0;for(a in W){var C=Y[a];if(C!=null||A[a]&&A[a].update){var w=W[a],q=s[a]?s[a](i):(typeof s=="function"?s:me)(i),er=f[a]?f[a]:typeof f=="function"?f:b.Linear;typeof w=="number"?O[a]=C+(w-C)*q:!Array.isArray(w)||w.isString||Array.isArray(C)?w&&w.update?w.update(q):typeof w=="function"?O[a]=w(q):typeof w=="string"&&typeof C=="number"?O[a]=C+parseFloat(w[0]+w.substr(2))*q:N(a,O,Y,W,q,i):O[a]=er(w,q,O[a]),A[a]&&A[a].update&&A[a].update.call(this,O[a],C,w,q,i,a),xe++}}if(!xe)return F(this),!1;if(Je&&e.Renderer&&e.Renderer.update&&e.Renderer.update.call(this,O,i),this.emit(ae,O,i,r),i===1||_&&i===0){if(0<h&&0<D){if(Ye&&this._repeat--,y)this._reversed=!_;else for(a in W){var _e=W[a];typeof _e=="string"&&typeof Y[a]=="number"&&(Y[a]+=parseFloat(_e[0]+_e.substr(2)))}return this.emit(y&&!_?he:le,O),this._startTime=_&&d?r-d:r+p,!0}if(t||(this._isPlaying=!1,F(this),Le--),this.emit(ue,O),this._repeat=this._r,Fe)for(var ge=0;ge<Fe;ge++)this[oe+ge].start(r+D);return!1}return!0}}]),e}(),Ke=function(){function e(){ne(this,e),this.totalTime=0,this.labels=[],this.offsets=[]}return K(e,[{key:"parseLabel",value:function(r,t){var n=this.offsets,i=this.labels,s=i.indexOf(r);if(typeof r=="string"&&r.indexOf("=")!==-1&&!t&&s===-1){var a=r.substr(r.indexOf("=")-1,2),u=r.split(a);t=u.length===2?a+u[1]:null,r=u[0],s=i.indexOf(r)}if(s!==-1&&r){var o=n[s]||0;if(typeof t=="number")o=t;else if(typeof t=="string"&&t.indexOf("=")!==-1){var f=t.charAt(0);t=Number(t.substr(2)),f==="+"||f==="-"?o+=parseFloat(f+t):f==="*"?o*=t:f==="/"?o/=t:f==="%"&&(o*=t/100)}return o}return typeof t=="number"?t:0}},{key:"addLabel",value:function(r,t){return this.labels.push(r),this.offsets.push(this.parseLabel(r,t)),this}},{key:"setLabel",value:function(r,t){var n=this.labels.indexOf(r);return n!==-1&&this.offsets.splice(n,1,this.parseLabel(r,t)),this}},{key:"eraseLabel",value:function(r){var t=this.labels.indexOf(r);return t!==-1&&(this.labels.splice(t,1),this.offsets.splice(t,1)),this}}]),e}(),He=0,Xe=function(){function e(r){var t;return ne(this,e),(t=Pe(this,Se(e).call(this)))._duration=0,t._startTime=r&&r.startTime!==void 0?r.startTime:j(),t._tweens=[],t.elapsed=0,t._id=He++,t._defaultParams=r,t.position=new Ke,t.position.addLabel("afterLast",t._duration),t.position.addLabel("afterInit",t._startTime),t._onStartCallbackFired=!1,Pe(t,Me(t))}return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ee(r,t)}(e,Q),K(e,[{key:"mapTotal",value:function(r){return r.call(this,this._tweens),this}},{key:"timingOrder",value:function(r){var t=r(this._tweens.map(function(n){return n._startTime}));return this._tweens.map(function(n,i){n._startTime=t[i]}),this}},{key:"getTiming",value:function(r,t,n,i){var s=3<arguments.length&&i!==void 0?i:0;if(r==="reverse"){var a=n.stagger,u=(a||0)*(t.length-1);return t.map(function(h,p){return u-(a||0)*p+s})}if(r==="async")return t.map(function(h){return s});if(r==="sequence"||r==="delayed"){var o=n.stagger;return o=o||(n.duration||1e3)/(t.length-1),t.map(function(h,p){return o*p+s})}if(r==="oneByOne")return t.map(function(h){return n.duration});if(r==="shuffle"){var f=n.stagger;return function(h){var p,d,y;for(y=h.length;y;--y)p=Math.floor(Math.random()*y),d=h[y-1],h[y-1]=h[p],h[p]=d;return h}(t.map(function(h,p){return(f||0)*p+s}))}var l=n.stagger;return t.map(function(h,p){return(l||0)*p+s})}},{key:"fromTo",value:function(r,t,n,i){if((r=ve(r,!0,!0))&&r.length){this._defaultParams&&(i=i?ie({},this._defaultParams,{},i):this._defaultParams);for(var s,a=i.label,u=typeof a=="number"?a:this.position.parseLabel(a!==void 0?a:"afterLast",null),o=this.getTiming(i.mode,r,i,u),f=0,l=r.length;f<l;f++)s=r[f],this.add(Q.fromTo(s,typeof t=="function"?t(f,r.length):m(t)==="object"&&t?ie({},t):null,typeof n=="function"?n(f,r.length):n,typeof i=="function"?i(f,r.length):i),o[f])}return this.start()}},{key:"from",value:function(r,t,n){return this.fromTo(r,t,null,n)}},{key:"to",value:function(r,t,n){return this.fromTo(r,null,t,n)}},{key:"addLabel",value:function(r,t){return this.position.addLabel(r,t),this}},{key:"map",value:function(r){for(var t=0,n=this._tweens.length;t<n;t++){var i=this._tweens[t];r(i,t),this._duration=Math.max(this._duration,i._duration+i._startTime)}return this}},{key:"add",value:function(r,t){var n=this;if(Array.isArray(r))return r.map(function(o){n.add(o,t)}),this;m(r)!=="object"||r instanceof Q||(r=new Q(r.from).to(r.to,r));var i=this._defaultParams,s=this._duration;if(i)for(var a in i)typeof r[a]=="function"&&r[a](i[a]);var u=typeof t=="number"?t:this.position.parseLabel(t!==void 0?t:"afterLast",null);return r._startTime=Math.max(this._startTime,r._delayTime,u),r._delayTime=u,r._isPlaying=!0,this._duration=Math.max(s,Math.max(r._startTime+r._delayTime,r._duration)),this._tweens.push(r),this.position.setLabel("afterLast",this._duration),this}},{key:"restart",value:function(){return this._startTime+=j(),v(this),this.emit(ce)}},{key:"easing",value:function(r){return this.map(function(t){return t.easing(r)})}},{key:"interpolation",value:function(r){return this.map(function(t){return t.interpolation(r)})}},{key:"update",value:function(r){var t,n=this._tweens,i=this._duration,s=this._reverseDelayTime,a=this._startTime,u=this._reversed,o=this._yoyo,f=this._repeat,l=this._isFinite,h=this._isPlaying,p=this._prevTime,d=this._onStartCallbackFired,y=(r=r!==void 0?r:j())-p;if(this._prevTime=r,250<y&&S()&&Te()&&(r-=y-se),!h||r<a)return!0;t=1<(t=(r-a)/i)?1:t,t=u?1-t:t,this.elapsed=t,d||(this.emit(fe),this._onStartCallbackFired=!0);for(var _=r-a,E=u?i-_:_,T=0;T<n.length;)n[T].update(E),T++;if(this.emit(ae,t,_),t===1||u&&t===0){if(f){for(l&&this._repeat--,this.emit(u?he:le),o&&(this._reversed=!u,this.timingOrder(function(D){return D.reverse()})),this._startTime=u&&s?r+s:r,T=0;T<n.length;)n[T].reassignValues(r),T++;return!0}return this.emit(ue),this._repeat=this._r,F(this),this._isPlaying=!1}return!0}},{key:"progress",value:function(r){return r!==void 0?this.update(r*this._duration):this.elapsed}}]),e}();c.Easing=B,c.FrameThrottle=function(e){Oe=1.05*(0<arguments.length&&e!==void 0?e:120)},c.Interpolation=b,c.Interpolator=function(e,r){var t=Array.isArray(e)&&!e.isString,n=typeof e=="string"?e:t?e.slice():ie({},e);if(t)for(var i=0,s=e.length;i<s;i++)e[i]===r[i]&&typeof e[i]=="number"&&typeof r[i]!="number"||R(i,n,e,r);else if(m(e)==="object")for(var a in e)e[a]===r[a]&&typeof e[a]=="number"&&typeof r[a]!="number"||R(a,n,e,r);else if(typeof e=="string"){e=P(e),r=P(r);for(var u=1;u<e.length;)e[u]===r[u]&&typeof e[u-1]=="string"?(e.splice(u-1,2,e[u-1]+e[u]),r.splice(u-1,2,r[u-1]+r[u])):u++}return function(o){if(t)for(var f=0,l=e.length;f<l;f++)N(f,n,e,r,o);else if(m(n)==="object")for(var h in e)N(h,n,e,r,o);else typeof n=="string"&&(n=N(0,0,e,r,o,o,!0));return n}},c.Plugins=A,c.Selector=ve,c.Timeline=Xe,c.ToggleLagSmoothing=function(e){te=!(0<arguments.length&&e!==void 0)||e},c.Tween=Q,c.add=v,c.autoPlay=function(e){ee=e},c.get=I,c.getAll=function(){return g},c.has=function(e){return I(e)!==null},c.isRunning=S,c.now=j,c.onRequestTick=function(e){re.push(e)},c.onTick=function(e){return g.push({update:e})},c.remove=F,c.removeAll=function(){g.length=0,J(V),L=!1},c.update=ke,c.utils=$e,Object.defineProperty(c,"__esModule",{value:!0})})}),U=fr(qe());U.autoPlay(!0);var De=document.querySelector("#dot"),lr=()=>{let c=new U.Tween({x:10,y:10}).to({x:600,y:10},1e3).easing(U.Easing.Elastic.InOut).on("update",({x:v,y:I})=>{De.style.left=`${v}px`,De.style.top=`${I}px`});c.start()};setTimeout(()=>{lr()},500);})();