"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{3583:function(t,e,i){i.d(e,{td:function(){return f}});var s=Symbol.for("preact-signals");function r(){if(u>1)u--;else{for(var t,e=!1;void 0!==o;){var i=o;for(o=void 0,a++;void 0!==i;){var s=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&d(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=s}}if(a=0,u--,e)throw t}}var n=void 0,o=void 0,u=0,a=0,h=0;function c(t){if(void 0!==n){var e=t.n;if(void 0===e||e.t!==n)return e={i:0,S:t,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:e},void 0!==n.s&&(n.s.n=e),n.s=e,t.n=e,32&n.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=n.s,e.n=void 0,n.s.n=e,n.s=e),e}}function l(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function f(t){return new l(t)}function d(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function p(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function y(t){for(var e=t.s,i=void 0;void 0!==e;){var s=e.p;-1===e.i?(e.S.U(e),void 0!==s&&(s.n=e.n),void 0!==e.n&&(e.n.p=s)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=s}t.s=i}function v(t){l.call(this,void 0),this.x=t,this.s=void 0,this.g=h-1,this.f=4}function m(t){var e=t.u;if(t.u=void 0,"function"==typeof e){u++;var i=n;n=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,b(t),e}finally{n=i,r()}}}function b(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,m(t)}function g(t){if(n!==this)throw Error("Out-of-order effect");y(this),n=t,this.f&=-2,8&this.f&&b(this),r()}function S(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function O(t){var e=new S(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}l.prototype.brand=s,l.prototype.h=function(){return!0},l.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},l.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},l.prototype.subscribe=function(t){var e=this;return O(function(){var i=e.value,s=n;n=void 0;try{t(i)}finally{n=s}})},l.prototype.valueOf=function(){return this.value},l.prototype.toString=function(){return this.value+""},l.prototype.toJSON=function(){return this.value},l.prototype.peek=function(){var t=n;n=void 0;try{return this.value}finally{n=t}},Object.defineProperty(l.prototype,"value",{get:function(){var t=c(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(a>100)throw Error("Cycle detected");this.v=t,this.i++,h++,u++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{r()}}}}),(v.prototype=new l).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===h))return!0;if(this.g=h,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;var t=n;try{p(this),n=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return n=t,y(this),this.f&=-2,!0},v.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}l.prototype.S.call(this,t)},v.prototype.U=function(t){if(void 0!==this.t&&(l.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},v.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(v.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var t=c(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),S.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},S.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,m(this),p(this),u++;var t=n;return n=this,g.bind(this,t)},S.prototype.N=function(){2&this.f||(this.f|=2,this.o=o,o=this)},S.prototype.d=function(){this.f|=8,1&this.f||b(this)};var C=i(2265),w=i(2362);i(7437),i(3068);var R,Q=Symbol.for("react.element"),E=Symbol.dispose||Symbol.for("Symbol.dispose");function P(t,e){var i=e.effect.S();return R=e,q.bind(e,t,i)}function q(t,e){e(),R=t}var F,x=Promise.prototype.then.bind(Promise.resolve());function D(){var t;F=void 0,null==(t=R)||t.f()}Object.defineProperties(l.prototype,{$$typeof:{configurable:!0,value:Q},type:{configurable:!0,value:function(t){var e,i,s,r,n,o,u,a,h=t.data,c=(F||(F=x(D)),null==(u=(0,C.useRef)()).current&&(u.current=(n=0,o=O(function(){i=this}),i.c=function(){n=n+1|0,r&&r()},(e={u:1,effect:i,subscribe:function(t){return r=t,function(){n=n+1|0,r=void 0,o()}},getSnapshot:function(){return n},S:function(){if(null!=R){var t=R.u,e=this.u;0==t&&0==e||0==t&&1==e?(R.f(),s=P(void 0,this)):1==t&&0==e||2==t&&0==e||(s=P(R,this))}else s=P(void 0,this)},f:function(){var t=s;s=void 0,null==t||t()}})[E]=function(){this.f()},e)),a=u.current,(0,w.useSyncExternalStore)(a.subscribe,a.getSnapshot,a.getSnapshot),a.S(),a);try{return h.value}finally{c.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}})},8792:function(t,e,i){i.d(e,{default:function(){return r.a}});var s=i(5250),r=i.n(s)},699:function(t,e,i){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(2265),r="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},n=s.useState,o=s.useEffect,u=s.useLayoutEffect,a=s.useDebugValue;function h(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!r(t,i)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var i=e(),s=n({inst:{value:i,getSnapshot:e}}),r=s[0].inst,c=s[1];return u(function(){r.value=i,r.getSnapshot=e,h(r)&&c({inst:r})},[t,i,e]),o(function(){return h(r)&&c({inst:r}),t(function(){h(r)&&c({inst:r})})},[t]),a(i),i};e.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},2362:function(t,e,i){t.exports=i(699)},1485:function(t,e){Symbol.for("react.fragment")},3068:function(t,e,i){i(1485)},9555:function(t,e,i){i.d(e,{j:function(){return n}});var s=i(4614),r=i(6063),n=new class extends s.l{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!r.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},5139:function(t,e,i){i.d(e,{V:function(){return s}});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},r=t=>setTimeout(t,0),n=s=>{e?t.push(s):r(()=>{i(s)})},o=()=>{let e=t;t=[],e.length&&r(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||o()}return i},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{r=t}}}()},7211:function(t,e,i){i.d(e,{N:function(){return n}});var s=i(4614),r=i(6063),n=new class extends s.l{#s=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!r.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#s!==t&&(this.#s=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#s}}},4668:function(t,e,i){i.d(e,{A:function(){return u},z:function(){return a}});var s=i(6063),r=i(5139),n=i(326),o=i(2041),u=class extends o.F{#r;#n;#o;#u;#a;#h;constructor(t){super(),this.#h=!1,this.#a=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#r=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#r,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#u?.promise}setOptions(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.#c({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#c({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#r)}isActive(){return this.observers.some(t=>!1!==(0,s.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#u&&(this.#h?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#c({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let i=new AbortController,r=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#h=!0,i.signal)})},o={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,s.cG)(this.options,e),i={queryKey:this.queryKey,meta:this.meta};return(r(i),this.#h=!1,this.options.persister)?this.options.persister(t,i,this):t(i)}};r(o),this.options.behavior?.onFetch(o,this),this.#n=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#c({type:"fetch",meta:o.fetchOptions?.meta});let u=t=>{(0,n.DV)(t)&&t.silent||this.#c({type:"error",error:t}),(0,n.DV)(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#u=(0,n.Mz)({initialPromise:e?.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){u(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}),this.#u.start()}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...a(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,n.DV)(i)&&i.revert&&this.#n)return{...this.#n,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}};function a(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},23:function(t,e,i){i.d(e,{S:function(){return v}});var s=i(6063),r=i(4668),n=i(5139),o=i(4614),u=class extends o.l{constructor(t={}){super(),this.config=t,this.#l=new Map}#l;build(t,e,i){let n=e.queryKey,o=e.queryHash??(0,s.Rm)(n,e),u=this.get(o);return u||(u=new r.A({cache:this,queryKey:n,queryHash:o,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(u)),u}add(t){this.#l.has(t.queryHash)||(this.#l.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#l.get(t.queryHash);e&&(t.destroy(),e===t&&this.#l.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#l.get(t)}getAll(){return[...this.#l.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,s._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,s._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},a=i(2041),h=i(326),c=class extends a.F{#f;#d;#u;constructor(t){super(),this.mutationId=t.mutationId,this.#d=t.mutationCache,this.#f=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#f.includes(t)||(this.#f.push(t),this.clearGcTimeout(),this.#d.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#f=this.#f.filter(e=>e!==t),this.scheduleGc(),this.#d.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#f.length||("pending"===this.state.status?this.scheduleGc():this.#d.remove(this))}continue(){return this.#u?.continue()??this.execute(this.state.variables)}async execute(t){this.#u=(0,h.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#d.canRun(this)});let e="pending"===this.state.status,i=!this.#u.canStart();try{if(!e){this.#c({type:"pending",variables:t,isPaused:i}),await this.#d.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#c({type:"pending",context:e,variables:t,isPaused:i})}let s=await this.#u.start();return await this.#d.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#d.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#c({type:"success",data:s}),s}catch(e){try{throw await this.#d.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#d.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#c({type:"error",error:e})}}finally{this.#d.runNext(this)}}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#f.forEach(e=>{e.onMutationUpdate(t)}),this.#d.notify({mutation:this,type:"updated",action:t})})}},l=class extends o.l{constructor(t={}){super(),this.config=t,this.#p=new Map,this.#y=Date.now()}#p;#y;build(t,e,i){let s=new c({mutationCache:this,mutationId:++this.#y,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){let e=f(t),i=this.#p.get(e)??[];i.push(t),this.#p.set(e,i),this.notify({type:"added",mutation:t})}remove(t){let e=f(t);if(this.#p.has(e)){let i=this.#p.get(e)?.filter(e=>e!==t);i&&(0===i.length?this.#p.delete(e):this.#p.set(e,i))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#p.get(f(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#p.get(f(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#p.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,s.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,s.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return n.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(s.ZT))))}};function f(t){return t.options.scope?.id??String(t.mutationId)}var d=i(9555),p=i(7211);function y(t,{pages:e,pageParams:i}){let s=e.length-1;return e.length>0?t.getNextPageParam(e[s],e,i[s],i):void 0}var v=class{#v;#d;#a;#m;#b;#g;#S;#O;constructor(t={}){this.#v=t.queryCache||new u,this.#d=t.mutationCache||new l,this.#a=t.defaultOptions||{},this.#m=new Map,this.#b=new Map,this.#g=0}mount(){this.#g++,1===this.#g&&(this.#S=d.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onFocus())}),this.#O=p.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#v.onOnline())}))}unmount(){this.#g--,0===this.#g&&(this.#S?.(),this.#S=void 0,this.#O?.(),this.#O=void 0)}isFetching(t){return this.#v.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#d.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let i=this.defaultQueryOptions(t),r=this.#v.build(this,i);return t.revalidateIfStale&&r.isStaleByTime((0,s.KC)(i.staleTime,r))&&this.prefetchQuery(i),Promise.resolve(e)}}getQueriesData(t){return this.#v.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let r=this.defaultQueryOptions({queryKey:t}),n=this.#v.get(r.queryHash),o=n?.state.data,u=(0,s.SE)(e,o);if(void 0!==u)return this.#v.build(this,r).setData(u,{...i,manual:!0})}setQueriesData(t,e,i){return n.V.batch(()=>this.#v.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#v.get(e.queryHash)?.state}removeQueries(t){let e=this.#v;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#v,s={type:"active",...t};return n.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(s,e)))}cancelQueries(t={},e={}){let i={revert:!0,...e};return Promise.all(n.V.batch(()=>this.#v.findAll(t).map(t=>t.cancel(i)))).then(s.ZT).catch(s.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#v.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let i={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(i,e)})}refetchQueries(t={},e){let i={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#v.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,i);return i.throwOnError||(e=e.catch(s.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(s.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#v.build(this,e);return i.isStaleByTime((0,s.KC)(e.staleTime,i))?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,i)=>{let r=async()=>{let i;let r=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],u=t.state.data?.pageParams||[],a=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?a=!0:t.signal.addEventListener("abort",()=>{a=!0}),t.signal)})},c=(0,s.cG)(t.options,t.fetchOptions),l=async(e,i,r)=>{if(a)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:i,direction:r?"backward":"forward",meta:t.options.meta};h(n);let o=await c(n),{maxPages:u}=t.options,l=r?s.Ht:s.VX;return{pages:l(e.pages,o,u),pageParams:l(e.pageParams,i,u)}};if(n&&o.length){let t="backward"===n,e={pages:o,pageParams:u},s=(t?function(t,{pages:e,pageParams:i}){return e.length>0?t.getPreviousPageParam?.(e[0],e,i[0],i):void 0}:y)(r,e);i=await l(e,s,t)}else{i=await l({pages:[],pageParams:[]},u[0]??r.initialPageParam);let t=e??o.length;for(let e=1;e<t;e++){let t=y(r,i);if(null==t)break;i=await l(i,t)}}return i};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#d.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#v}getMutationCache(){return this.#d}getDefaultOptions(){return this.#a}setDefaultOptions(t){this.#a=t}setQueryDefaults(t,e){this.#m.set((0,s.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#m.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){this.#b.set((0,s.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#b.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#a.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,s.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===s.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#a.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#v.clear(),this.#d.clear()}}},2041:function(t,e,i){i.d(e,{F:function(){return r}});var s=i(6063),r=class{#C;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.gcTime)&&(this.#C=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.sk?1/0:3e5))}clearGcTimeout(){this.#C&&(clearTimeout(this.#C),this.#C=void 0)}}},326:function(t,e,i){i.d(e,{DV:function(){return h},Kw:function(){return u},Mz:function(){return c}});var s=i(9555),r=i(7211),n=i(6063);function o(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||r.N.isOnline()}var a=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof a}function c(t){let e,i,h,c=!1,l=0,f=!1,d=new Promise((t,e)=>{i=t,h=e}),p=()=>s.j.isFocused()&&("always"===t.networkMode||r.N.isOnline())&&t.canRun(),y=()=>u(t.networkMode)&&t.canRun(),v=s=>{f||(f=!0,t.onSuccess?.(s),e?.(),i(s))},m=i=>{f||(f=!0,t.onError?.(i),e?.(),h(i))},b=()=>new Promise(i=>{e=t=>{(f||p())&&i(t)},t.onPause?.()}).then(()=>{e=void 0,f||t.onContinue?.()}),g=()=>{let e;if(f)return;let i=0===l?t.initialPromise:void 0;try{e=i??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(v).catch(e=>{if(f)return;let i=t.retry??(n.sk?0:3),s=t.retryDelay??o,r="function"==typeof s?s(l,e):s,u=!0===i||"number"==typeof i&&l<i||"function"==typeof i&&i(l,e);if(c||!u){m(e);return}l++,t.onFail?.(l,e),(0,n._v)(r).then(()=>p()?void 0:b()).then(()=>{c?m(e):g()})})};return{promise:d,cancel:e=>{f||(m(new a(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1},canStart:y,start:()=>(y()?g():b().then(g),d)}}},4614:function(t,e,i){i.d(e,{l:function(){return s}});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6063:function(t,e,i){i.d(e,{CN:function(){return w},Ht:function(){return C},KC:function(){return a},Kp:function(){return u},Nc:function(){return h},PN:function(){return o},Rm:function(){return f},SE:function(){return n},VS:function(){return y},VX:function(){return O},X7:function(){return l},Ym:function(){return d},ZT:function(){return r},_v:function(){return g},_x:function(){return c},cG:function(){return R},oE:function(){return S},sk:function(){return s},to:function(){return p}});var s="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function a(t,e){return"function"==typeof t?t(e):t}function h(t,e){return"function"==typeof t?t(e):t}function c(t,e){let{type:i="all",exact:s,fetchStatus:r,predicate:n,queryKey:o,stale:u}=t;if(o){if(s){if(e.queryHash!==f(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function l(t,e){let{exact:i,status:s,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(i){if(d(e.options.mutationKey)!==d(n))return!1}else if(!p(e.options.mutationKey,n))return!1}return(!s||e.state.status===s)&&(!r||!!r(e))}function f(t,e){return(e?.queryKeyHashFn||d)(t)}function d(t){return JSON.stringify(t,(t,e)=>m(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!p(t[i],e[i]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(b(i)&&i.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function S(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=v(e)&&v(i);if(s||m(e)&&m(i)){let r=s?e:Object.keys(e),n=r.length,o=s?i:Object.keys(i),u=o.length,a=s?[]:{},h=0;for(let n=0;n<u;n++){let u=s?n:o[n];(!s&&r.includes(u)||s)&&void 0===e[u]&&void 0===i[u]?(a[u]=void 0,h++):(a[u]=t(e[u],i[u]),a[u]===e[u]&&void 0!==e[u]&&h++)}return n===u&&h===n?e:a}return i}(t,e):e}function O(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function C(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}var w=Symbol();function R(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==w?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}},7082:function(t,e,i){i.d(e,{NL:function(){return o},aH:function(){return u}});var s=i(2265),r=i(7437),n=s.createContext(void 0),o=t=>{let e=s.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=t=>{let{client:e,children:i}=t;return s.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(n.Provider,{value:e,children:i})}},6540:function(t,e,i){let s;i.d(e,{a:function(){return E}});var r=i(6063),n=i(5139),o=i(9555),u=i(4614),a=i(4668),h=class extends u.l{constructor(t,e){super(),this.options=e,this.#w=t,this.#R=null,this.bindMethods(),this.setOptions(e)}#w;#Q=void 0;#E=void 0;#P=void 0;#q;#F;#R;#x;#D;#T;#A;#I;#M;#k=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#Q.addObserver(this),c(this.#Q,this.options)?this.#U():this.updateResult(),this.#N())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#Q,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#Q,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#K(),this.#j(),this.#Q.removeObserver(this)}setOptions(t,e){let i=this.options,s=this.#Q;if(this.options=this.#w.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,r.Nc)(this.options.enabled,this.#Q))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#V(),this.#Q.setOptions(this.options),i._defaulted&&!(0,r.VS)(this.options,i)&&this.#w.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#Q,observer:this});let n=this.hasListeners();n&&f(this.#Q,s,this.options,i)&&this.#U(),this.updateResult(e),n&&(this.#Q!==s||(0,r.Nc)(this.options.enabled,this.#Q)!==(0,r.Nc)(i.enabled,this.#Q)||(0,r.KC)(this.options.staleTime,this.#Q)!==(0,r.KC)(i.staleTime,this.#Q))&&this.#L();let o=this.#_();n&&(this.#Q!==s||(0,r.Nc)(this.options.enabled,this.#Q)!==(0,r.Nc)(i.enabled,this.#Q)||o!==this.#M)&&this.#H(o)}getOptimisticResult(t){let e=this.#w.getQueryCache().build(this.#w,t),i=this.createResult(e,t);return(0,r.VS)(this.getCurrentResult(),i)||(this.#P=i,this.#F=this.options,this.#q=this.#Q.state),i}getCurrentResult(){return this.#P}trackResult(t,e){let i={};return Object.keys(t).forEach(s=>{Object.defineProperty(i,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),e?.(s),t[s])})}),i}trackProp(t){this.#k.add(t)}getCurrentQuery(){return this.#Q}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#w.defaultQueryOptions(t),i=this.#w.getQueryCache().build(this.#w,e);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,e))}fetch(t){return this.#U({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#P))}#U(t){this.#V();let e=this.#Q.fetch(this.options,t);return t?.throwOnError||(e=e.catch(r.ZT)),e}#L(){this.#K();let t=(0,r.KC)(this.options.staleTime,this.#Q);if(r.sk||this.#P.isStale||!(0,r.PN)(t))return;let e=(0,r.Kp)(this.#P.dataUpdatedAt,t);this.#A=setTimeout(()=>{this.#P.isStale||this.updateResult()},e+1)}#_(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#Q):this.options.refetchInterval)??!1}#H(t){this.#j(),this.#M=t,!r.sk&&!1!==(0,r.Nc)(this.options.enabled,this.#Q)&&(0,r.PN)(this.#M)&&0!==this.#M&&(this.#I=setInterval(()=>{(this.options.refetchIntervalInBackground||o.j.isFocused())&&this.#U()},this.#M))}#N(){this.#L(),this.#H(this.#_())}#K(){this.#A&&(clearTimeout(this.#A),this.#A=void 0)}#j(){this.#I&&(clearInterval(this.#I),this.#I=void 0)}createResult(t,e){let i;let s=this.#Q,n=this.options,o=this.#P,u=this.#q,h=this.#F,l=t!==s?t.state:this.#E,{state:p}=t,y={...p},v=!1;if(e._optimisticResults){let i=this.hasListeners(),r=!i&&c(t,e),o=i&&f(t,s,e,n);(r||o)&&(y={...y,...(0,a.z)(p.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:m,errorUpdatedAt:b,status:g}=y;if(e.select&&void 0!==y.data){if(o&&y.data===u?.data&&e.select===this.#x)i=this.#D;else try{this.#x=e.select,i=e.select(y.data),i=(0,r.oE)(o?.data,i,e),this.#D=i,this.#R=null}catch(t){this.#R=t}}else i=y.data;if(void 0!==e.placeholderData&&void 0===i&&"pending"===g){let t;if(o?.isPlaceholderData&&e.placeholderData===h?.placeholderData)t=o.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#T?.state.data,this.#T):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#R=null}catch(t){this.#R=t}void 0!==t&&(g="success",i=(0,r.oE)(o?.data,t,e),v=!0)}this.#R&&(m=this.#R,i=this.#D,b=Date.now(),g="error");let S="fetching"===y.fetchStatus,O="pending"===g,C="error"===g,w=O&&S,R=void 0!==i;return{status:g,fetchStatus:y.fetchStatus,isPending:O,isSuccess:"success"===g,isError:C,isInitialLoading:w,isLoading:w,data:i,dataUpdatedAt:y.dataUpdatedAt,error:m,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>l.dataUpdateCount||y.errorUpdateCount>l.errorUpdateCount,isFetching:S,isRefetching:S&&!O,isLoadingError:C&&!R,isPaused:"paused"===y.fetchStatus,isPlaceholderData:v,isRefetchError:C&&R,isStale:d(t,e),refetch:this.refetch}}updateResult(t){let e=this.#P,i=this.createResult(this.#Q,this.options);if(this.#q=this.#Q.state,this.#F=this.options,void 0!==this.#q.data&&(this.#T=this.#Q),(0,r.VS)(i,e))return;this.#P=i;let s={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,i="function"==typeof t?t():t;if("all"===i||!i&&!this.#k.size)return!0;let s=new Set(i??this.#k);return this.options.throwOnError&&s.add("error"),Object.keys(this.#P).some(t=>this.#P[t]!==e[t]&&s.has(t))})()&&(s.listeners=!0),this.#G({...s,...t})}#V(){let t=this.#w.getQueryCache().build(this.#w,this.options);if(t===this.#Q)return;let e=this.#Q;this.#Q=t,this.#E=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#N()}#G(t){n.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#P)}),this.#w.getQueryCache().notify({query:this.#Q,type:"observerResultsUpdated"})})}};function c(t,e){return!1!==(0,r.Nc)(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&l(t,e,e.refetchOnMount)}function l(t,e,i){if(!1!==(0,r.Nc)(e.enabled,t)){let s="function"==typeof i?i(t):i;return"always"===s||!1!==s&&d(t,e)}return!1}function f(t,e,i,s){return(t!==e||!1===(0,r.Nc)(s.enabled,t))&&(!i.suspense||"error"!==t.state.status)&&d(t,i)}function d(t,e){return!1!==(0,r.Nc)(e.enabled,t)&&t.isStaleByTime((0,r.KC)(e.staleTime,t))}var p=i(2265);i(7437);var y=p.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),v=()=>p.useContext(y),m=i(7082),b=p.createContext(!1),g=()=>p.useContext(b);b.Provider;var S=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},O=t=>{p.useEffect(()=>{t.clearReset()},[t])},C=t=>{var e;let{result:i,errorResetBoundary:s,throwOnError:r,query:n}=t;return i.isError&&!s.isReset()&&!i.isFetching&&n&&(e=[i.error,n],"function"==typeof r?r(...e):!!r)},w=t=>{t.suspense&&("number"!=typeof t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},R=(t,e)=>t?.suspense&&e.isPending,Q=(t,e,i)=>e.fetchOptimistic(t).catch(()=>{i.clearReset()});function E(t,e){return function(t,e,i){var s,r,o,u;let a=(0,m.NL)(i),h=g(),c=v(),l=a.defaultQueryOptions(t);null===(r=a.getDefaultOptions().queries)||void 0===r||null===(s=r._experimental_beforeQuery)||void 0===s||s.call(r,l),l._optimisticResults=h?"isRestoring":"optimistic",w(l),S(l,c),O(c);let[f]=p.useState(()=>new e(a,l)),d=f.getOptimisticResult(l);if(p.useSyncExternalStore(p.useCallback(t=>{let e=h?()=>void 0:f.subscribe(n.V.batchCalls(t));return f.updateResult(),e},[f,h]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),p.useEffect(()=>{f.setOptions(l,{listeners:!1})},[l,f]),R(l,d))throw Q(l,f,c);if(C({result:d,errorResetBoundary:c,throwOnError:l.throwOnError,query:a.getQueryCache().get(l.queryHash)}))throw d.error;return null===(u=a.getDefaultOptions().queries)||void 0===u||null===(o=u._experimental_afterQuery)||void 0===o||o.call(u,l,d),l.notifyOnChangeProps?d:f.trackResult(d)}(t,h,e)}}}]);