(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{809:function(e,t,n){Promise.resolve().then(n.bind(n,2363))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!n[e]:l.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:o}=n;return o?l.innerHTML=o.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(a(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return g},default:function(){return _}});let r=n(6921),l=n(1884),a=n(7437),o=r._(n(4887)),i=l._(n(2265)),u=n(7484),s=n(3313),c=n(2185),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:o="",strategy:i="afterInteractive",onError:u,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,u);return}let h=()=>{l&&l(),f.add(m)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(g.innerHTML=a.__html||"",h()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",h()):t&&(g.src=t,d.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),c&&y(c),document.body.appendChild(g)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:s="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:h,scripts:g,getIsSsr:v,appDir:_,nonce:b}=(0,i.useContext)(u.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;E.current||(l&&e&&f.has(e)&&l(),E.current=!0)},[l,t,n]);let S=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!S.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),S.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(h?(g[s]=(g[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...y}]),h(g)):v&&v()?f.add(t||n):v&&!v()&&m(e)),_){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"}),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let _=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2363:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),l=n(2265),a=n(5935),o=n.n(a),i=n(2329),u=n(9079),s=function(){let[e,t]=(0,l.useState)(""),[n,a]=(0,l.useState)(""),[s,c]=(0,l.useState)("0"),[d,f]=(0,l.useState)("INR"),[p,y]=(0,l.useState)(!1),m=async()=>{try{return(await (0,i.k)("POST","GET_ORDER_ID",{},"",JSON.stringify({amount:100*parseFloat(s)}),{"Content-Type":"application/json"})).id}catch(e){console.error("There was a problem with your fetch operation:",e)}},h=async t=>{t.preventDefault();try{let t=await m(),r={key:u.env.key_id,amount:100*parseFloat(s),currency:d,name:"name",description:"description",order_id:t,handler:async function(e){let n={orderCreationId:t,razorpayPaymentId:e.razorpay_payment_id,razorpayOrderId:e.razorpay_order_id,razorpaySignature:e.razorpay_signature};(await (0,i.k)("POST","VERIFY_ORDER",{},"",JSON.stringify(n),{"Content-Type":"application/json"})).success?alert("payment succeed"):alert("payment failed")},prefill:{name:e,email:n},theme:{color:"#3399cc"}},l=new window.Razorpay(r);l.on("payment.failed",function(e){alert(e.error.description)}),l.open()}catch(e){console.log(e)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{id:"razorpay-checkout-js",src:"https://checkout.razorpay.com/v1/checkout.js"}),(0,r.jsx)("section",{className:"min-h-[94vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36 ",children:(0,r.jsxs)("form",{className:"flex flex-col gap-6 w-full sm:w-80",onSubmit:h,children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("label",{children:"Full name"}),(0,r.jsx)("input",{type:"text",required:!0,value:e,onChange:e=>t(e.target.value)})]}),(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("label",{children:"Email"}),(0,r.jsx)("input",{type:"email",placeholder:"user@gmail.com",required:!0,value:n,onChange:e=>a(e.target.value)})]}),(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("label",{children:"Amount"}),(0,r.jsx)("div",{className:"flex gap-2",children:(0,r.jsx)("input",{type:"number",step:"1",min:5,required:!0,value:s,onChange:e=>c(e.target.value)})})]}),(0,r.jsx)("button",{type:"submit",children:"Pay"})]})})]})}},2329:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});let r={PRODUCT_MAINLIST:"products/productMainList",GET_PRODUCT_BY_ID:"products/product",UPSERT_USER:"users/upsertUser",UPDATE_USER_BY_QUERY:"users/update",GET_USER_BY_EMAIL:"users/getUserByEmail",GET_IMAGES:"images/getImageNames",PRODUCT_FAMILY:"products/getAllUnderFamily",GET_ORDER_ID:"payments/createOrder",ADD_TO_BAG:"users/addToBag",GET_USER_DETAILS:"auth/getUserDetails",VERIFY_ORDER:"payments/verifyPayment"};var l=n(9079);let a={ERROR:31,INFO:32,WARN:33};function o(e,t,n){"true"!==l.env.DISABLED_LOGS&&console.log("\x1b[".concat(a[e]||33,"m%s\x1b[0m"),"[".concat(e||"INFO","] ").concat(new Date().toLocaleString()," : ").concat(n||"","=>"),JSON.stringify(t))}var i=n(1800),u=n(3810),s=n(9079);let c="http://localhost:5000/thanalApi/";async function d(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,d=arguments.length>6?arguments[6]:void 0,f="",p="object"==typeof document;if(p){let e=window.location.href;console.log({baseUrl:c=new URL(e).origin+"/thanalApi/"}),console.log("isBrowser",p)}try{let d=c+r[t]+l,y={method:e,headers:s,body:a,next:{revalidate:null==n?void 0:n.revalidate,tags:null==n?void 0:n.tags}};if(p){let e=p?(0,u.ej)("user"):null;if(e){let t=JSON.parse(e);f=null==t?void 0:t.updatedAt}}o("INFO",{url:d,...y},"calling DB service, http options ");let m=await fetch(d,y);if(!m.ok)throw Error("Network response was not ok");let h=await m.json();if(!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let t of e)(0,i.revalidatePath)(t);for(let e of t)(0,i.revalidateTag)(e)}(null==n?void 0:n.revalidatePaths,null==n?void 0:n.revalidateTags),o("INFO",h,"Successful response from DB service, responseData "),p){let e=p?(0,u.ej)("user"):null;if(e){let t=JSON.parse(e);f!==(null==t?void 0:t.updatedAt)&&(0,u.Is)("user")}}return h}catch(e){if(console.log("Sasi",e),o("ERROR",e,"Error on DB service call, error "),d)return d;throw e}}s.env.API_TIME_OUT},3810:function(e,t,n){"use strict";n.d(t,{Is:function(){return i},ej:function(){return l},vu:function(){return o}});var r=n(2329);function l(e){var t,n;if("object"!=typeof document||!document)return null;let r="; ".concat(null===(t=document)||void 0===t?void 0:t.cookie);console.log("&&&&&",r);let l=null==r?void 0:r.split("; ".concat(e,"="));if(2===l.length){let e=null===(n=l.pop())||void 0===n?void 0:n.split(";").shift();return e?decodeURIComponent(e):null}return null}async function a(e){return await (0,r.k)("get","GET_USER_DETAILS",{},"?email=".concat(e.email,"&updatedAt=").concat(e.updatedAt))}async function o(){let e=l("user"),t="object"==typeof document;if(console.log("!!!!!!!!!",typeof e,{user:e}),e)return e;if(!t||!localStorage)return null;let n=localStorage.getItem("user");if(console.log("!!!!!!!!!",{data:n}),!n)return null;let{newData:r,loginRequired:o,cache:i}=await a(JSON.parse(n));return r?(localStorage.setItem("user",JSON.stringify(i)),JSON.stringify(i)):o?null:JSON.stringify(i)}function i(e){let t=l(e);return t?(localStorage.setItem("user",t),t):null}}},function(e){e.O(0,[800,971,69,744],function(){return e(e.s=809)}),_N_E=e.O()}]);