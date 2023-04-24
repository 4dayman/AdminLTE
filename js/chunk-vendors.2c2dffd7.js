(self["webpackChunkadminlte"]=self["webpackChunkadminlte"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return _},L:function(){return l},LL:function(){return O},P0:function(){return m},Pz:function(){return y},Sg:function(){return b},UG:function(){return T},ZR:function(){return N},aH:function(){return v},b$:function(){return I},eu:function(){return x},hl:function(){return k},m9:function(){return H},ne:function(){return $},pd:function(){return U},q4:function(){return g},ru:function(){return C},tV:function(){return u},uI:function(){return E},vZ:function(){return P},w1:function(){return S},xO:function(){return j},xb:function(){return L},z$:function(){return w},zd:function(){return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;++i;const c=i<e.length,h=c?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>c().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/AdminLTE/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function C(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function x(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function D(e,t){return e.replace(R,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(M(n)&&M(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},2262:function(e,t,n){"use strict";n.d(t,{$y:function(){return xe},B:function(){return o},Bj:function(){return s},Fl:function(){return We},IU:function(){return Oe},Jd:function(){return I},PG:function(){return ke},SU:function(){return qe},Um:function(){return Ce},WL:function(){return He},X$:function(){return A},X3:function(){return Ne},XI:function(){return Ue},Xl:function(){return De},dq:function(){return je},iH:function(){return Fe},j:function(){return k},lk:function(){return S},nZ:function(){return l},qj:function(){return Te},qq:function(){return w},yT:function(){return Ae}});var r=n(3577);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function l(){return i}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&m)>0,h=e=>(e.n&m)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!h(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},p=new WeakMap;let g=0,m=1;const v=30;let y;const _=Symbol(""),b=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=T;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,T=!0,m=1<<++g,g<=v?d(this):E(this),this.fn()}finally{g<=v&&f(this),m=1<<--g,y=this.parent,T=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const C=[];function I(){C.push(T),T=!1}function S(){const e=C.pop();T=void 0===e||e}function k(e,t,n){if(T&&y){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;x(r,i)}}function x(e,t){let n=!1;g<=v?h(e)||(e.n|=m,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=p.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(_)),(0,r._N)(e)&&l.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(_)),(0,r._N)(e)&&l.push(a.get(b)));break;case"set":(0,r._N)(e)&&l.push(a.get(_));break}if(1===l.length)l[0]&&N(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);N(u(e))}}function N(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&O(r,t);for(const r of n)r.computed||O(r,t)}function O(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),L=$(),P=$(!1,!0),M=$(!0),j=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Oe(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Oe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Oe(this)[t].apply(this,e);return S(),n}})),e}function U(e){const t=Oe(this);return k(t,"has",e),t.hasOwnProperty(e)}function $(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?be:_e:t?ye:ve).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(j,i))return Reflect.get(j,i,s);if("hasOwnProperty"===i)return U}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?R.has(i):D(i))?a:(e||k(n,"get",i),t?a:je(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):Te(a):a)}}const V=B(),q=B(!0);function B(e=!1){return function(t,n,i,s){let o=t[n];if(xe(o)&&je(o)&&!je(i))return!1;if(!e&&(Ae(i)||xe(i)||(o=Oe(o),i=Oe(i)),!(0,r.kJ)(t)&&je(o)&&!je(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===Oe(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),l}}function H(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||k(e,"has",t),n}function K(e){return k(e,"iterate",(0,r.kJ)(e)?"length":_),Reflect.ownKeys(e)}const W={get:L,set:V,deleteProperty:H,has:z,ownKeys:K},G={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=(0,r.l7)({},W,{get:P,set:q}),J=e=>e,X=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Oe(e),s=Oe(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=X(i),a=r?J:n?Le:Re;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Oe(n),i=Oe(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&k(Oe(e),"iterate",_),Reflect.get(e,"size",e)}function te(e){e=Oe(e);const t=Oe(this),n=X(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function ne(e,t){t=Oe(t);const n=Oe(this),{has:i,get:s}=X(n);let o=i.call(n,e);o||(e=Oe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function re(e){const t=Oe(this),{has:n,get:r}=X(t);let i=n.call(t,e);i||(e=Oe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function ie(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Oe(s),a=t?J:e?Le:Re;return!e&&k(o,"iterate",_),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Oe(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,c=s[e](...i),h=n?J:t?Le:Re;return!t&&k(o,"iterate",u?b:_),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return Y(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[ue,ce,he,de]=le();function fe(e,t){const n=t?e?de:he:e?ce:ue;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},ge={get:fe(!1,!0)},me={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,_e=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ee(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Te(e){return xe(e)?e:Se(e,!1,W,pe,ve)}function Ce(e){return Se(e,!1,Q,ge,ye)}function Ie(e){return Se(e,!0,G,me,_e)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ee(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function ke(e){return xe(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function xe(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return ke(e)||xe(e)}function Oe(e){const t=e&&e["__v_raw"];return t?Oe(t):e}function De(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?Te(e):e,Le=e=>(0,r.Kn)(e)?Ie(e):e;function Pe(e){T&&y&&(e=Oe(e),x(e.dep||(e.dep=u())))}function Me(e,t){e=Oe(e);const n=e.dep;n&&N(n)}function je(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return $e(e,!1)}function Ue(e){return $e(e,!0)}function $e(e,t){return je(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Oe(e),this._value=t?e:Re(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ae(e)||xe(e);e=t?e:Oe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),Me(this,e))}}function qe(e){return je(e)?e.value:e}const Be={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return ke(e)?e:new Proxy(e,Be)}var ze;class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ze]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Me(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Oe(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ke(i,s,o||!s,n);return a}ze="__v_isReadonly"},6252:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return mn},Fl:function(){return Dn},HY:function(){return Lt},JJ:function(){return K},Jd:function(){return Se},Ko:function(){return Ue},P$:function(){return re},Q6:function(){return ue},U2:function(){return se},Uk:function(){return rn},Us:function(){return xt},WI:function(){return $e},Wm:function(){return Zt},Y3:function(){return y},Y8:function(){return ee},YP:function(){return Q},_:function(){return Yt},aZ:function(){return ce},dD:function(){return P},f3:function(){return W},h:function(){return Rn},iD:function(){return zt},ic:function(){return Ie},j4:function(){return Kt},kq:function(){return on},nK:function(){return le},uE:function(){return sn},up:function(){return Pe},w5:function(){return j},wF:function(){return Ee},wg:function(){return $t},wy:function(){return De}});var r=n(2262),i=n(3577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let i=0;i<e.length;i++)l.push(o(e[i],t,n,r));return l}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let u=!1,c=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function _(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=S(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(_(e.id),0,e),w())}function w(){u||c||(c=!0,v=m.then(x))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),w()}function C(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){c=!1,u=!0,h.sort(k);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,I(e),u=!1,v=null,(h.length||f.length)&&x(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let c=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!c&&a&&(c=r[u=(0,i.hR)((0,i.rs)(t))]),c&&o(c,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function N(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function O(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,R=null;function L(e){const t=D;return D=e,R=e&&e.type.__scopeId||null,t}function P(e){R=e}function M(){R=null}function j(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Bt(-1);const i=L(t);let s;try{s=e(...n)}finally{L(i),r._d&&Bt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[l],slots:u,attrs:c,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e;let y,_;const b=L(e);try{if(4&n.shapeFlag){const e=s||r;y=an(d.call(e,e,f,o,g,p,m)),_=c}else{const e=t;0,y=an(e.length>1?e(o,{attrs:c,slots:u,emit:h}):e(o,null)),_=t.props?c:U(c)}}catch(E){Ft.length=0,a(E,e,1),y=Zt(Mt)}let w=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(l&&e.some(i.tR)&&(_=$(_,l)),w=nn(w,_))}return n.dirs&&(w=nn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,L(b),y}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,u):!!o);if(1024&l)return!0;if(16&l)return r?q(r,o,u):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!O(u,n))return!0}}return!1}function q(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function K(e,t){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[e]=t}else 0}function W(e,t,n=!1){const r=gn||D;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const G={};function Q(e,t,n){return J(e,t,n)}function J(e,t,{immediate:n,deep:a,flush:l,onTrack:u,onTrigger:c}=i.kT){const h=(0,r.nZ)()===(null===gn||void 0===gn?void 0:gn.scope)?gn:null;let d,f,p=!1,g=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Z(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[v])}:i.dG,t&&a){const e=d;d=()=>Z(e())}let m,v=e=>{f=E.onStop=()=>{s(e,h,4)}};if(En){if(v=i.dG,t?n&&o(t,h,3,[d(),g?[]:void 0,v]):d(),"sync"!==l)return i.dG;{const e=Pn();m=e.__watcherHandles||(e.__watcherHandles=[])}}let y=g?new Array(e.length).fill(G):G;const _=()=>{if(E.active)if(t){const e=E.run();(a||p||(g?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===G?void 0:g&&y[0]===G?[]:y,v]),y=e)}else E.run()};let w;_.allowRecurse=!!t,"sync"===l?w=_:"post"===l?w=()=>kt(_,h&&h.suspense):(_.pre=!0,h&&(_.id=h.uid),w=()=>b(_));const E=new r.qq(d,w);t?n?_():y=E.run():"post"===l?kt(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return m&&m.push(T),T}function X(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Y(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=gn;vn(this);const l=J(s,o.bind(r),n);return a?vn(a):yn(),l}function Y(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Z(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Z(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,i.PO)(e))for(const n in e)Z(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=mn(),i=ee();let s;return()=>{const o=t.default&&ue(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Mt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:u}=l;if(i.isLeaving)return oe(a);const c=ae(a);if(!c)return oe(a);const h=se(c,l,i,n);le(c,h);const d=n.subTree,f=d&&ae(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Mt&&(!Gt(c,f)||p)){const e=se(f,l,i,n);if(le(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},oe(a);"in-out"===u&&c.type!==Mt&&(e.delayLeave=(e,t,n)=>{const r=ie(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},re=ne;function ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function se(e,t,n,r){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),E=ie(n,e),T=(e,t)=>{e&&o(e,r,9,t)},C=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=E[w];i&&Gt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=c,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||c,r=_||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?C(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?C(p,[t,o]):o()},clone(e){return se(e,t,n,r)}};return I}function oe(e){if(de(e))return e=nn(e),e.children=null,e}function ae(e){return de(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Lt?(128&o.patchFlag&&i++,r=r.concat(ue(o.children,t,a))):(t||o.type!==Mt)&&r.push(null!=a?nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ce(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const he=e=>!!e.type.__asyncLoader;const de=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,i.kJ)(e)?e.some((e=>fe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function pe(e,t){me(e,"a",t)}function ge(e,t){me(e,"da",t)}function me(e,t,n=gn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,r,n),n){let e=n.parent;while(e&&e.parent)de(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const s=be(t,e,r,!0);ke((()=>{(0,i.Od)(r[t],s)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _e(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=gn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),vn(n);const s=o(t,n,e,i);return yn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const we=e=>(t,n=gn)=>(!En||"sp"===e)&&be(e,((...e)=>t(...e)),n),Ee=we("bm"),Te=we("m"),Ce=we("bu"),Ie=we("u"),Se=we("bum"),ke=we("um"),xe=we("sp"),Ae=we("rtg"),Ne=we("rtc");function Oe(e,t=gn){be("ec",e,t)}function De(e,t){const n=D;if(null===n)return e;const r=An(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Re(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const u=s[l];a&&(u.oldValue=a[l].value);let c=u.dir[i];c&&((0,r.Jd)(),o(c,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Le="components";function Pe(e,t){return je(Le,e,!0,t)||e}const Me=Symbol();function je(e,t,n=!0,r=!1){const s=D||gn;if(s){const n=s.type;if(e===Le){const e=Nn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Fe(s[e]||n[e],t)||Fe(s.appContext[e],t);return!o&&r?n:o}}function Fe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Ue(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function $e(e,t,n={},r,i){if(D.isCE||D.parent&&he(D.parent)&&D.parent.isCE)return"default"!==t&&(n.name=t),Zt("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),$t();const o=s&&Ve(s(n)),a=Kt(Lt,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ve(e){return e.some((e=>!Wt(e)||e.type!==Mt&&!(e.type===Lt&&!Ve(e.children))))?e:null}const qe=e=>e?_n(e)?An(e)||e.proxy:qe(e.parent):null,Be=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qe(e.parent),$root:e=>qe(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>X.bind(e)}),He=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),ze={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:u,appContext:c}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(He(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];Ke&&(l[t]=0)}}const d=Be[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return He(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||He(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(Be,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ke=!0;function We(e){const t=Xe(e),n=e.proxy,s=e.ctx;Ke=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:u,provide:c,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:C,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:x,inheritAttrs:A,components:N,directives:O,filters:D}=t,R=null;if(h&&Ge(h,s,R,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ke=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)Je(u[r],s,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{K(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),L(Ee,f),L(Te,p),L(Ce,g),L(Ie,m),L(pe,v),L(ge,y),L(Oe,S),L(Ne,C),L(Ae,I),L(Se,b),L(ke,E),L(xe,k),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),N&&(e.components=N),O&&(e.directives=O)}function Ge(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=nt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?W(n.from||o,n.default,!0):W(n.from||o):W(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Qe(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const s=r.includes(".")?Y(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Q(s,n)}else if((0,i.mf)(e))Q(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Q(s,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let u;return l?u=l:s.length||n||r?(u={},s.length&&s.forEach((e=>Ye(u,e,a,!0))),Ye(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Ye(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ye(e,s,n,!0),i&&i.forEach((t=>Ye(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ze[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ze={data:et,props:it,emits:it,methods:it,computed:it,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:it,directives:it,watch:st,provide:et,inject:tt};function et(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function tt(e,t){return it(nt(e),nt(t))}function nt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function st(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=rt(e[r],t[r]);return n}function ot(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Qt,1),e.propsDefaults=Object.create(null),lt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function at(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,u=(0,r.IU)(o),[c]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;lt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ut(c,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(O(e.emitsOptions,s))continue;const l=t[s];if(c)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=ut(c,u,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,s){const[o,a]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=c:n[h]=c:O(e.emitsOptions,r)||r in s&&c===s[r]||(s[r]=c,u=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=ut(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return u}function ut(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(vn(s),r=i[n]=e.call(null,t),yn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ct(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ct(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ht(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ht(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=pt(Boolean,r.type),n=pt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const c=[a,l];return(0,i.Kn)(e)&&r.set(e,c),c}function ht(e){return"$"!==e[0]}function dt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ft(e,t){return dt(e)===dt(t)}function pt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ft(t,e))):(0,i.mf)(t)&&ft(t,e)?0:-1}const gt=e=>"_"===e[0]||"$stable"===e,mt=e=>(0,i.kJ)(e)?e.map(an):[an(e)],vt=(e,t,n)=>{if(t._n)return t;const r=j(((...e)=>mt(t(...e))),n);return r._c=!1,r},yt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(gt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=vt(s,n,r);else if(null!=n){0;const e=mt(n);t[s]=()=>e}}},_t=(e,t)=>{const n=mt(t);e.slots.default=()=>n},bt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):yt(t,e.slots={})}else e.slots={},t&&_t(e,t);(0,i.Nj)(e.slots,Qt,1)},wt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,yt(t,s)),a=t}else t&&(_t(e,t),a={default:1});if(o)for(const i in s)gt(i)||i in a||delete s[i]};function Et(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tt=0;function Ct(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Et(),o=new Set;let a=!1;const l=s.app={_uid:Tt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,u){if(!a){0;const c=Zt(n,r);return c.appContext=s,o&&t?t(c,i):e(c,i,u),a=!0,l._container=i,i.__vue_app__=l,An(c.component)||c.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function It(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>It(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(he(o)&&!a)return;const l=4&o.shapeFlag?An(o.component)||o.component.proxy:o.el,u=a?null:l,{i:c,r:h}=e;const d=t&&t.r,f=c.refs===i.kT?c.refs={}:c.refs,p=c.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,c,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,kt(r,n)):r()}else 0}}function St(){}const kt=z;function xt(e){return At(e)}function At(e,t){St();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:u,createComment:c,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gt(e,t)&&(r=Y(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:h}=t;switch(u){case Pt:y(e,t,n,r);break;case Mt:_(e,t,n,r);break;case jt:null==e&&w(t,n,r,o);break;case Lt:L(e,t,n,r,i,s,o,a,l);break;default:1&h?k(e,t,n,r,i,s,o,a,l):6&h?P(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,l,ee)}null!=c&&i&&It(c,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=c(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?x(t,n,r,i,s,o,a,l):O(e,t,i,s,o,a,l)},x=(e,t,n,r,o,u,c,h)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:y,dirs:_}=e;if(f=e.el=l(e.type,u,m&&m.is,m),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==g,c,h),_&&Re(e,null,r,"created"),A(f,e,e.scopeId,c,r),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],u,e.children,r,o,X);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&hn(p,r,e)}_&&Re(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||b||_)&&kt((()=>{p&&hn(p,r,e),b&&y.enter(f),_&&Re(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=a?ln(e[u]):an(e[u]);v(null,l,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:h,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||i.kT,g=t.props||i.kT;let m;n&&Nt(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,t,e),f&&Re(t,e,n,"beforeUpdate"),n&&Nt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,v,o):l||q(e,t,u,null,n,r,v,o,!1),c>0){if(16&c)R(u,t,p,g,n,r,s);else if(2&c&&p.class!==g.class&&a(u,"class",null,g.class,s),4&c&&a(u,"style",p.style,g.style,s),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],c=g[o];c===l&&"value"!==o||a(u,o,l,c,s,e.children,n,r,X)}}1&c&&e.children!==t.children&&d(u,t.children)}else l||null!=h||R(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&kt((()=>{m&&hn(m,n,t,e),f&&Re(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],c=l.el&&(l.type===Lt||!Gt(l,u)||70&l.shapeFlag)?f(l.el):n;v(l,u,c,null,r,i,s,o,!0)}},R=(e,t,n,r,s,o,l)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,l,t.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const c=r[u],h=n[u];c!==h&&"value"!==u&&a(e,u,h,c,l,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,l,c)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&Ot(e,t,!0)):q(e,t,n,d,i,o,a,l,c)},P=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):M(t,n,r,i,s,o,l):j(e,t,l)},M=(e,t,n,r,i,s,o)=>{const a=e.component=pn(e,r,i);if(de(e)&&(a.ctx.renderer=ee),Tn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=Zt(Mt);_(null,e,t,n)}}else U(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,l)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:c}=e,h=n;0,Nt(e,!1),n?(n.el=c.el,$(e,n,l)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hn(t,u,n,c),Nt(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&kt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&kt((()=>hn(t,u,n,c)),o)}else{let r;const{el:l,props:u}=t,{bm:c,m:h,parent:d}=e,f=he(t);if(Nt(e,!1),c&&(0,i.ir)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&hn(r,d,t),Nt(e,!0),l&&ne){const n=()=>{e.subTree=F(e),ne(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&kt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;kt((()=>hn(r,d,e)),o)}(256&t.shapeFlag||d&&he(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&kt(e.a,o),e.isMounted=!0,t=n=s=null}},c=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>c.run();h.id=e.uid,Nt(e,!0),h()},$=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,at(e,t.props,i,n),wt(e,t.children,n),(0,r.Jd)(),C(),(0,r.lk)()},q=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,l);if(256&f)return void H(u,h,n,r,i,s,o,a,l)}8&p?(16&c&&X(u,i,s),h!==u&&d(n,h)):16&c?16&p?z(u,h,n,r,i,s,o,a,l):X(u,i,s,!0):(8&c&&d(n,""),16&p&&N(h,n,r,i,s,o,a,l))},H=(e,t,n,r,s,o,a,l,u)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,h=t.length,d=Math.min(c,h);let f;for(f=0;f<d;f++){const r=t[f]=u?ln(t[f]):an(t[f]);v(e[f],r,n,null,s,o,a,l,u)}c>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,l,u,d)},z=(e,t,n,r,s,o,a,l,u)=>{let c=0;const h=t.length;let d=e.length-1,f=h-1;while(c<=d&&c<=f){const r=e[c],i=t[c]=u?ln(t[c]):an(t[c]);if(!Gt(r,i))break;v(r,i,n,null,s,o,a,l,u),c++}while(c<=d&&c<=f){const r=e[d],i=t[f]=u?ln(t[f]):an(t[f]);if(!Gt(r,i))break;v(r,i,n,null,s,o,a,l,u),d--,f--}if(c>d){if(c<=f){const e=f+1,i=e<h?t[e].el:r;while(c<=f)v(null,t[c]=u?ln(t[c]):an(t[c]),n,i,s,o,a,l,u),c++}}else if(c>f)while(c<=d)W(e[c],s,o,!0),c++;else{const p=c,g=c,m=new Map;for(c=g;c<=f;c++){const e=t[c]=u?ln(t[c]):an(t[c]);null!=e.key&&m.set(e.key,c)}let y,_=0;const b=f-g+1;let w=!1,E=0;const T=new Array(b);for(c=0;c<b;c++)T[c]=0;for(c=p;c<=d;c++){const r=e[c];if(_>=b){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Gt(r,t[y])){i=y;break}void 0===i?W(r,s,o,!0):(T[i-g]=c+1,i>=E?E=i:w=!0,v(r,t[i],n,null,s,o,a,l,u),_++)}const C=w?Dt(T):i.Z6;for(y=C.length-1,c=b-1;c>=0;c--){const e=g+c,i=t[e],d=e+1<h?t[e+1].el:r;0===T[c]?v(null,i,n,d,s,o,a,l,u):w&&(y<0||c!==C[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void K(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,ee);if(a===Lt){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===jt)return void T(e,t,n);const h=2!==r&&1&c&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),kt((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:h,dirs:d}=e;if(null!=a&&It(a,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&d,p=!he(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&hn(g,t,e),6&c)J(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&Re(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,ee,r):u&&(s!==Lt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Lt&&384&h||!i&&16&c)&&X(l,t,n),r&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&kt((()=>{g&&hn(g,t,e),f&&Re(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Lt)return void Q(n,r);if(t===jt)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),l&&kt(l,t),kt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),C(),I(),t._vnode=e},ee={p:v,um:W,m:K,r:G,mt:M,mc:N,pc:q,pbc:D,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:Ct(Z,te)}}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=ln(s[i]),t.el=e.el),n||Ot(e,t)),t.type===Pt&&(t.el=e.el)}}function Dt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Rt=e=>e.__isTeleport;const Lt=Symbol(void 0),Pt=Symbol(void 0),Mt=Symbol(void 0),jt=Symbol(void 0),Ft=[];let Ut=null;function $t(e=!1){Ft.push(Ut=e?null:[])}function Vt(){Ft.pop(),Ut=Ft[Ft.length-1]||null}let qt=1;function Bt(e){qt+=e}function Ht(e){return e.dynamicChildren=qt>0?Ut||i.Z6:null,Vt(),qt>0&&Ut&&Ut.push(e),e}function zt(e,t,n,r,i,s){return Ht(Yt(e,t,n,r,i,s,!0))}function Kt(e,t,n,r,i){return Ht(Zt(e,t,n,r,i,!0))}function Wt(e){return!!e&&!0===e.__v_isVNode}function Gt(e,t){return e.type===t.type&&e.key===t.key}const Qt="__vInternal",Jt=({key:e})=>null!=e?e:null,Xt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null;function Yt(e,t=null,n=null,r=0,s=null,o=(e===Lt?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Xt(t),scopeId:R,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return l?(un(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),qt>0&&!a&&Ut&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ut.push(u),u}const Zt=en;function en(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Me||(e=Mt),Wt(e)){const r=nn(e,t,!0);return n&&un(r,n),qt>0&&!a&&Ut&&(6&r.shapeFlag?Ut[Ut.indexOf(e)]=r:Ut.push(r)),r.patchFlag|=-2,r}if(On(e)&&(e=e.__vccOpts),t){t=tn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:H(e)?128:Rt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Yt(e,t,n,s,o,l,a,!0)}function tn(e){return e?(0,r.X3)(e)||Qt in e?(0,i.l7)({},e):e:null}function nn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?cn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Jt(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Xt(t)):[s,Xt(t)]:Xt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function rn(e=" ",t=0){return Zt(Pt,null,e,t)}function sn(e,t){const n=Zt(jt,null,e);return n.staticCount=t,n}function on(e="",t=!1){return t?($t(),Kt(Mt,null,e)):Zt(Mt,null,e)}function an(e){return null==e||"boolean"===typeof e?Zt(Mt):(0,i.kJ)(e)?Zt(Lt,null,e.slice()):"object"===typeof e?ln(e):Zt(Pt,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:nn(e)}function un(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),un(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[rn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function hn(e,t,n,r=null){o(e,t,7,[n,r])}const dn=Et();let fn=0;function pn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||dn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let gn=null;const mn=()=>gn||D,vn=e=>{gn=e,e.scope.on()},yn=()=>{gn&&gn.scope.off(),gn=null};function _n(e){return 4&e.vnode.shapeFlag}let bn,wn,En=!1;function Tn(e,t=!1){En=t;const{props:n,children:r}=e.vnode,i=_n(e);ot(e,n,i,t),bt(e,r);const s=i?Cn(e,t):void 0;return En=!1,s}function Cn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ze));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?xn(e):null;vn(e),(0,r.Jd)();const l=s(o,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(l)){if(l.then(yn,yn),t)return l.then((n=>{In(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else In(e,l,t)}else Sn(e,t)}function In(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const s=e.type;if(!e.render){if(!t&&bn&&!s.render){const t=s.template||Xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=bn(t,l)}}e.render=s.render||i.dG,wn&&wn(e)}vn(e),(0,r.Jd)(),We(e),(0,r.lk)(),yn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function xn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Be?Be[n](e):void 0},has(e,t){return t in e||t in Be}}))}function Nn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function On(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,En);function Rn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Wt(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Wt(n)&&(n=[n]),Zt(e,t,n))}const Ln=Symbol(""),Pn=()=>{{const e=W(Ln);return e}};const Mn="3.2.47"},9963:function(e,t,n){"use strict";n.d(t,{G2:function(){return he},bM:function(){return de},e8:function(){return ue},iM:function(){return ye},nr:function(){return le},ri:function(){return Ee}});var r=n(3577),i=n(6252),s=n(2262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],g={};function m(e,t){const n=g[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return g[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return g[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=C(t);if(r){const o=s[t]=x(r,i);b(e,n,o,a)}else o&&(w(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function C(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let I=0;const S=Promise.resolve(),k=()=>I||(S.then((()=>I=0)),I=Date.now());function x(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,O=(e,t,n,i,s=!1,o,a,l,u)=>{"class"===t?c(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?_(e,t,i,o,a,l,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const R="transition",L="animation",P=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);P.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j=P.props=(0,r.l7)({},i.P$.props,M),F=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:c=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=V(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:C=_,onAppearCancelled:I=b}=t,S=(e,t,n)=>{H(e,t?h:l),H(e,t?c:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,H(e,d),H(e,p),H(e,f),t&&t()},x=e=>(t,n)=>{const r=e?C:_,s=()=>S(t,e,n);F(r,[t,s]),z((()=>{H(t,e?u:o),B(t,e?h:l),U(r)||W(t,i,m,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(y,[e]),B(e,o),B(e,a)},onBeforeAppear(e){F(T,[e]),B(e,u),B(e,c)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);B(e,d),X(),B(e,f),z((()=>{e._isLeaving&&(H(e,d),B(e,p),U(w)||W(e,i,v,n))})),F(w,[e,n])},onEnterCancelled(e){S(e,!1),F(b,[e])},onAppearCancelled(e){S(e,!0),F(I,[e])},onLeaveCancelled(e){k(e),F(E,[e])}})}function V(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function W(e,t,n,r){const i=e._endId=++K,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=G(e,t);if(!o)return r();const u=o+"end";let c=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++c>=l&&h()};setTimeout((()=>{c<l&&h()}),a+1),e.addEventListener(u,d)}function G(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${R}Delay`),s=r(`${R}Duration`),o=Q(i,s),a=r(`${L}Delay`),l=r(`${L}Duration`),u=Q(a,l);let c=null,h=0,d=0;t===R?o>0&&(c=R,h=o,d=s.length):t===L?u>0&&(c=L,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?R:L:null,d=c?c===R?s.length:l.length:0);const f=c===R&&/\b(transform|all)(,|$)/.test(r(`${R}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},j,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);X(),r.forEach((e=>{const n=e.el,r=n.style;B(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,H(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),u=$(l);let c=l.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Y.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(c,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=Y.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=G(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const le={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",oe),b(e,"compositionend",ae),b(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ue={deep:!0,created(e,t,n){e._assign=se(n),b(e,"change",(()=>{const t=e._modelValue,n=pe(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(ge(e,i))}))},mounted:ce,beforeUpdate(e,t,n){e._assign=se(n),ce(e,t,n)}};function ce(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,ge(e,!0)))}const he={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=se(n),b(e,"change",(()=>{e._assign(pe(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=se(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},de={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(pe(e)):pe(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=se(i)},mounted(e,{value:t}){fe(e,t)},beforeUpdate(e,t,n){e._assign=se(n)},updated(e,{value:t}){fe(e,t)}};function fe(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=pe(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(pe(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function pe(e){return"_value"in e?e._value:e.value}function ge(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const me=["ctrl","shift","alt","meta"],ve={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>me.some((n=>e[`${n}Key`]&&!t.includes(n)))},ye=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ve[t[e]];if(r&&r(n,t))return}return e(n,...r)};const _e=(0,r.l7)({patchProp:O},u);let be;function we(){return be||(be=(0,i.Us)(_e))}const Ee=(...e)=>{const t=we().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Te(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Te(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return h},DM:function(){return R},E9:function(){return oe},F7:function(){return I},Gg:function(){return K},HD:function(){return j},He:function(){return ie},Kj:function(){return P},Kn:function(){return U},NO:function(){return T},Nj:function(){return ne},Od:function(){return x},PO:function(){return H},Pq:function(){return f},RI:function(){return N},S0:function(){return z},W7:function(){return B},WV:function(){return m},Z6:function(){return w},_A:function(){return Q},_N:function(){return D},aU:function(){return ee},dG:function(){return E},e1:function(){return s},fY:function(){return r},h5:function(){return re},hR:function(){return Z},hq:function(){return v},ir:function(){return te},j5:function(){return o},kC:function(){return Y},kJ:function(){return O},kT:function(){return b},l7:function(){return k},mf:function(){return M},rs:function(){return X},tI:function(){return $},tR:function(){return S},yA:function(){return p},yk:function(){return F},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=j(r)?c(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return j(e)||U(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,u=/\/\*.*?\*\//gs;function c(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(j(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&g(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>j(e)?e:null==e?"":O(e)||U(e)&&(e.toString===V||!M(e.toString))?JSON.stringify(e,_,2):String(e),_=(e,t)=>t&&t.__v_isRef?_(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:R(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||O(t)||H(t)?t:String(t),b={},w=[],E=()=>{},T=()=>!1,C=/^on[^a-z]/,I=e=>C.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,N=(e,t)=>A.call(e,t),O=Array.isArray,D=e=>"[object Map]"===q(e),R=e=>"[object Set]"===q(e),L=e=>"[object Date]"===q(e),P=e=>"[object RegExp]"===q(e),M=e=>"function"===typeof e,j=e=>"string"===typeof e,F=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,$=e=>U(e)&&M(e.then)&&M(e.catch),V=Object.prototype.toString,q=e=>V.call(e),B=e=>q(e).slice(8,-1),H=e=>"[object Object]"===q(e),z=e=>j(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,Q=W((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,X=W((e=>e.replace(J,"-$1").toLowerCase())),Y=W((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=W((e=>e?`on${Y(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=j(e)?Number(e):NaN;return isNaN(t)?e:t};let se;const oe=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3752:function(e,t,n){
/*!
 * AdminLTE v3.2.0 (https://adminlte.io)
 * Copyright 2014-2022 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
!function(e,r){r(t,n(9755))}(0,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t),i="CardRefresh",s="lte.cardrefresh",o=r.default.fn[i],a="card",l='[data-card-widget="card-refresh"]',u={source:"",sourceSelector:"",params:{},trigger:l,content:".card-body",loadInContent:!0,loadOnInit:!0,loadErrorTemplate:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',errorTemplate:'<span class="text-danger"></span>',onLoadStart:function(){},onLoadDone:function(e){return e},onLoadFail:function(e,t,n){}},c=function(){function e(e,t){if(this._element=e,this._parent=e.parents(".card").first(),this._settings=r.default.extend({},u,t),this._overlay=r.default(this._settings.overlayTemplate),e.hasClass(a)&&(this._parent=e),""===this._settings.source)throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var t=e.prototype;return t.load=function(){var e=this;this._addOverlay(),this._settings.onLoadStart.call(r.default(this)),r.default.get(this._settings.source,this._settings.params,(function(t){e._settings.loadInContent&&(""!==e._settings.sourceSelector&&(t=r.default(t).find(e._settings.sourceSelector).html()),e._parent.find(e._settings.content).html(t)),e._settings.onLoadDone.call(r.default(e),t),e._removeOverlay()}),""!==this._settings.responseType&&this._settings.responseType).fail((function(t,n,i){if(e._removeOverlay(),e._settings.loadErrorTemplate){var s=r.default(e._settings.errorTemplate).text(i);e._parent.find(e._settings.content).empty().append(s)}e._settings.onLoadFail.call(r.default(e),t,n,i)})),r.default(this._element).trigger(r.default.Event("loaded.lte.cardrefresh"))},t._addOverlay=function(){this._parent.append(this._overlay),r.default(this._element).trigger(r.default.Event("overlay.added.lte.cardrefresh"))},t._removeOverlay=function(){this._parent.find(this._overlay).remove(),r.default(this._element).trigger(r.default.Event("overlay.removed.lte.cardrefresh"))},t._init=function(){var e=this;r.default(this).find(this._settings.trigger).on("click",(function(){e.load()})),this._settings.loadOnInit&&this.load()},e._jQueryInterface=function(t){var n=r.default(this).data(s),i=r.default.extend({},u,r.default(this).data());n||(n=new e(r.default(this),i),r.default(this).data(s,"string"==typeof t?n:t)),"string"==typeof t&&/load/.test(t)?n[t]():n._init(r.default(this))},e}();r.default(document).on("click",l,(function(e){e&&e.preventDefault(),c._jQueryInterface.call(r.default(this),"load")})),r.default((function(){r.default(l).each((function(){c._jQueryInterface.call(r.default(this))}))})),r.default.fn[i]=c._jQueryInterface,r.default.fn[i].Constructor=c,r.default.fn[i].noConflict=function(){return r.default.fn[i]=o,c._jQueryInterface};var h="CardWidget",d="lte.cardwidget",f=r.default.fn[h],p="card",g="collapsed-card",m="collapsing-card",v="expanding-card",y="was-collapsed",_="maximized-card",b='[data-card-widget="remove"]',w='[data-card-widget="collapse"]',E='[data-card-widget="maximize"]',T={animationSpeed:"normal",collapseTrigger:w,removeTrigger:b,maximizeTrigger:E,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},C=function(){function e(e,t){this._element=e,this._parent=e.parents(".card").first(),e.hasClass(p)&&(this._parent=e),this._settings=r.default.extend({},T,t)}var t=e.prototype;return t.collapse=function(){var e=this;this._parent.addClass(m).children(".card-body, .card-footer").slideUp(this._settings.animationSpeed,(function(){e._parent.addClass(g).removeClass(m)})),this._parent.find("> .card-header "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon),this._element.trigger(r.default.Event("collapsed.lte.cardwidget"),this._parent)},t.expand=function(){var e=this;this._parent.addClass(v).children(".card-body, .card-footer").slideDown(this._settings.animationSpeed,(function(){e._parent.removeClass(g).removeClass(v)})),this._parent.find("> .card-header "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon),this._element.trigger(r.default.Event("expanded.lte.cardwidget"),this._parent)},t.remove=function(){this._parent.slideUp(),this._element.trigger(r.default.Event("removed.lte.cardwidget"),this._parent)},t.toggle=function(){this._parent.hasClass(g)?this.expand():this.collapse()},t.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue((function(){var e=r.default(this);e.addClass(_),r.default("html").addClass(_),e.hasClass(g)&&e.addClass(y),e.dequeue()})),this._element.trigger(r.default.Event("maximized.lte.cardwidget"),this._parent)},t.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height: "+this._parent[0].style.height+" !important; width: "+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue((function(){var e=r.default(this);e.removeClass(_),r.default("html").removeClass(_),e.css({height:"inherit",width:"inherit"}),e.hasClass(y)&&e.removeClass(y),e.dequeue()})),this._element.trigger(r.default.Event("minimized.lte.cardwidget"),this._parent)},t.toggleMaximize=function(){this._parent.hasClass(_)?this.minimize():this.maximize()},t._init=function(e){var t=this;this._parent=e,r.default(this).find(this._settings.collapseTrigger).click((function(){t.toggle()})),r.default(this).find(this._settings.maximizeTrigger).click((function(){t.toggleMaximize()})),r.default(this).find(this._settings.removeTrigger).click((function(){t.remove()}))},e._jQueryInterface=function(t){var n=r.default(this).data(d),i=r.default.extend({},T,r.default(this).data());n||(n=new e(r.default(this),i),r.default(this).data(d,"string"==typeof t?n:t)),"string"==typeof t&&/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(t)?n[t]():"object"==typeof t&&n._init(r.default(this))},e}();r.default(document).on("click",w,(function(e){e&&e.preventDefault(),C._jQueryInterface.call(r.default(this),"toggle")})),r.default(document).on("click",b,(function(e){e&&e.preventDefault(),C._jQueryInterface.call(r.default(this),"remove")})),r.default(document).on("click",E,(function(e){e&&e.preventDefault(),C._jQueryInterface.call(r.default(this),"toggleMaximize")})),r.default.fn[h]=C._jQueryInterface,r.default.fn[h].Constructor=C,r.default.fn[h].noConflict=function(){return r.default.fn[h]=f,C._jQueryInterface};var I="ControlSidebar",S="lte.controlsidebar",k=r.default.fn[I],x=".control-sidebar",A=".control-sidebar-content",N='[data-widget="control-sidebar"]',O=".main-header",D=".main-footer",R="control-sidebar-animate",L="control-sidebar-open",P="control-sidebar-slide-open",M="layout-fixed",j={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",target:x,animationSpeed:300},F=function(){function e(e,t){this._element=e,this._config=t}var t=e.prototype;return t.collapse=function(){var e=this,t=r.default("body"),n=r.default("html");this._config.controlsidebarSlide?(n.addClass(R),t.removeClass(P).delay(300).queue((function(){r.default(x).hide(),n.removeClass(R),r.default(this).dequeue()}))):t.removeClass(L),r.default(this._element).trigger(r.default.Event("collapsed.lte.controlsidebar")),setTimeout((function(){r.default(e._element).trigger(r.default.Event("collapsed-done.lte.controlsidebar"))}),this._config.animationSpeed)},t.show=function(e){void 0===e&&(e=!1);var t=r.default("body"),n=r.default("html");e&&r.default(x).hide(),this._config.controlsidebarSlide?(n.addClass(R),r.default(this._config.target).show().delay(10).queue((function(){t.addClass(P).delay(300).queue((function(){n.removeClass(R),r.default(this).dequeue()})),r.default(this).dequeue()}))):t.addClass(L),this._fixHeight(),this._fixScrollHeight(),r.default(this._element).trigger(r.default.Event("expanded.lte.controlsidebar"))},t.toggle=function(){var e=r.default("body"),t=this._config.target,n=!r.default(t).is(":visible"),i=e.hasClass(L)||e.hasClass(P),s=n&&(e.hasClass(L)||e.hasClass(P));n||s?this.show(n):i&&this.collapse()},t._init=function(){var e=this,t=r.default("body");t.hasClass(L)||t.hasClass(P)?(r.default(x).not(this._config.target).hide(),r.default(this._config.target).css("display","block")):r.default(x).hide(),this._fixHeight(),this._fixScrollHeight(),r.default(window).resize((function(){e._fixHeight(),e._fixScrollHeight()})),r.default(window).scroll((function(){var t=r.default("body");(t.hasClass(L)||t.hasClass(P))&&e._fixScrollHeight()}))},t._isNavbarFixed=function(){var e=r.default("body");return e.hasClass("layout-navbar-fixed")||e.hasClass("layout-sm-navbar-fixed")||e.hasClass("layout-md-navbar-fixed")||e.hasClass("layout-lg-navbar-fixed")||e.hasClass("layout-xl-navbar-fixed")},t._isFooterFixed=function(){var e=r.default("body");return e.hasClass("layout-footer-fixed")||e.hasClass("layout-sm-footer-fixed")||e.hasClass("layout-md-footer-fixed")||e.hasClass("layout-lg-footer-fixed")||e.hasClass("layout-xl-footer-fixed")},t._fixScrollHeight=function(){var e=r.default("body"),t=r.default(this._config.target);if(e.hasClass(M)){var n={scroll:r.default(document).height(),window:r.default(window).height(),header:r.default(O).outerHeight(),footer:r.default(D).outerHeight()},i=Math.abs(n.window+r.default(window).scrollTop()-n.scroll),s=r.default(window).scrollTop(),o=this._isNavbarFixed()&&"fixed"===r.default(O).css("position"),a=this._isFooterFixed()&&"fixed"===r.default(D).css("position"),l=r.default(this._config.target+", "+this._config.target+" "+A);if(0===s&&0===i)t.css({bottom:n.footer,top:n.header}),l.css("height",n.window-(n.header+n.footer));else if(i<=n.footer)if(!1===a){var u=n.header-s;t.css("bottom",n.footer-i).css("top",u>=0?u:0),l.css("height",n.window-(n.footer-i))}else t.css("bottom",n.footer);else s<=n.header?!1===o?(t.css("top",n.header-s),l.css("height",n.window-(n.header-s))):t.css("top",n.header):!1===o?(t.css("top",0),l.css("height",n.window)):t.css("top",n.header);a&&o?(l.css("height","100%"),t.css("height","")):(a||o)&&(l.css("height","100%"),l.css("height",""))}},t._fixHeight=function(){var e=r.default("body"),t=r.default(this._config.target+" "+A);if(e.hasClass(M)){var n=r.default(window).height(),i=r.default(O).outerHeight(),s=r.default(D).outerHeight(),o=n-i;this._isFooterFixed()&&"fixed"===r.default(D).css("position")&&(o=n-i-s),t.css("height",o),"undefined"!=typeof r.default.fn.overlayScrollbars&&t.overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})}else t.attr("style","")},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(S),i=r.default.extend({},j,r.default(this).data());if(n||(n=new e(this,i),r.default(this).data(S,n)),"undefined"===n[t])throw new Error(t+" is not a function");n[t]()}))},e}();r.default(document).on("click",N,(function(e){e.preventDefault(),F._jQueryInterface.call(r.default(this),"toggle")})),r.default(document).ready((function(){F._jQueryInterface.call(r.default(N),"_init")})),r.default.fn[I]=F._jQueryInterface,r.default.fn[I].Constructor=F,r.default.fn[I].noConflict=function(){return r.default.fn[I]=k,F._jQueryInterface};var U="DirectChat",$="lte.directchat",V=r.default.fn[U],q=function(){function e(e){this._element=e}return e.prototype.toggle=function(){r.default(this._element).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open"),r.default(this._element).trigger(r.default.Event("toggled.lte.directchat"))},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data($);n||(n=new e(r.default(this)),r.default(this).data($,n)),n[t]()}))},e}();r.default(document).on("click",'[data-widget="chat-pane-toggle"]',(function(e){e&&e.preventDefault(),q._jQueryInterface.call(r.default(this),"toggle")})),r.default.fn[U]=q._jQueryInterface,r.default.fn[U].Constructor=q,r.default.fn[U].noConflict=function(){return r.default.fn[U]=V,q._jQueryInterface};var B="Dropdown",H="lte.dropdown",z=r.default.fn[B],K=".dropdown-menu",W={},G=function(){function e(e,t){this._config=t,this._element=e}var t=e.prototype;return t.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(K).first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",(function(){r.default(".dropdown-submenu .show").removeClass("show").hide()}))},t.fixPosition=function(){var e=r.default(".dropdown-menu.show");if(0!==e.length){e.hasClass("dropdown-menu-right")?e.css({left:"inherit",right:0}):e.css({left:0,right:"inherit"});var t=e.offset(),n=e.width(),i=r.default(window).width()-t.left;t.left<0?e.css({left:"inherit",right:t.left-5}):i<n&&e.css({left:"inherit",right:0})}},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(H),i=r.default.extend({},W,r.default(this).data());n||(n=new e(r.default(this),i),r.default(this).data(H,n)),"toggleSubmenu"!==t&&"fixPosition"!==t||n[t]()}))},e}();r.default('.dropdown-menu [data-toggle="dropdown"]').on("click",(function(e){e.preventDefault(),e.stopPropagation(),G._jQueryInterface.call(r.default(this),"toggleSubmenu")})),r.default('.navbar [data-toggle="dropdown"]').on("click",(function(e){e.preventDefault(),r.default(e.target).parent().hasClass("dropdown-submenu")||setTimeout((function(){G._jQueryInterface.call(r.default(this),"fixPosition")}),1)})),r.default.fn[B]=G._jQueryInterface,r.default.fn[B].Constructor=G,r.default.fn[B].noConflict=function(){return r.default.fn[B]=z,G._jQueryInterface};var Q="ExpandableTable",J="lte.expandableTable",X=r.default.fn[Q],Y=".expandable-body",Z='[data-widget="expandable-table"]',ee="aria-expanded",te=function(){function e(e,t){this._options=t,this._element=e}var t=e.prototype;return t.init=function(){r.default(Z).each((function(e,t){var n=r.default(t).attr(ee),i=r.default(t).next(Y).children().first().children();"true"===n?i.show():"false"===n&&(i.hide(),i.parent().parent().addClass("d-none"))}))},t.toggleRow=function(){var e=this._element;"TR"!==e[0].nodeName&&"TR"!==(e=e.parent())[0].nodeName&&(e=e.parent());var t=e.attr(ee),n=e.next(Y).children().first().children();n.stop(),"true"===t?(n.slideUp(500,(function(){e.next(Y).addClass("d-none")})),e.attr(ee,"false"),e.trigger(r.default.Event("collapsed.lte.expandableTable"))):"false"===t&&(e.next(Y).removeClass("d-none"),n.slideDown(500),e.attr(ee,"true"),e.trigger(r.default.Event("expanded.lte.expandableTable")))},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(J);n||(n=new e(r.default(this)),r.default(this).data(J,n)),"string"==typeof t&&/init|toggleRow/.test(t)&&n[t]()}))},e}();r.default(".expandable-table").ready((function(){te._jQueryInterface.call(r.default(this),"init")})),r.default(document).on("click",Z,(function(){te._jQueryInterface.call(r.default(this),"toggleRow")})),r.default.fn[Q]=te._jQueryInterface,r.default.fn[Q].Constructor=te,r.default.fn[Q].noConflict=function(){return r.default.fn[Q]=X,te._jQueryInterface};var ne="Fullscreen",re="lte.fullscreen",ie=r.default.fn[ne],se='[data-widget="fullscreen"]',oe=se+" i",ae={minimizeIcon:"fa-compress-arrows-alt",maximizeIcon:"fa-expand-arrows-alt"},le=function(){function e(e,t){this.element=e,this.options=r.default.extend({},ae,t)}var t=e.prototype;return t.toggle=function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?this.windowed():this.fullscreen()},t.toggleIcon=function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?r.default(oe).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon):r.default(oe).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon)},t.fullscreen=function(){document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()},t.windowed=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},e._jQueryInterface=function(t){var n=r.default(this).data(re);n||(n=r.default(this).data());var i=r.default.extend({},ae,"object"==typeof t?t:n),s=new e(r.default(this),i);r.default(this).data(re,"object"==typeof t?t:n),"string"==typeof t&&/toggle|toggleIcon|fullscreen|windowed/.test(t)?s[t]():s.init()},e}();r.default(document).on("click",se,(function(){le._jQueryInterface.call(r.default(this),"toggle")})),r.default(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",(function(){le._jQueryInterface.call(r.default(se),"toggleIcon")})),r.default.fn[ne]=le._jQueryInterface,r.default.fn[ne].Constructor=le,r.default.fn[ne].noConflict=function(){return r.default.fn[ne]=ie,le._jQueryInterface};var ue="lte.iframe",ce=r.default.fn.IFrame,he='[data-widget="iframe"]',de='[data-widget="iframe-fullscreen"]',fe=".content-wrapper",pe=".content-wrapper iframe",ge=".content-wrapper.iframe-mode .nav",me=".content-wrapper.iframe-mode .navbar-nav",ve=me+" .nav-item",ye=me+" .nav-link",_e=".content-wrapper.iframe-mode .tab-content",be=_e+" .tab-empty",we=_e+" .tab-loading",Ee=_e+" .tab-pane",Te=".main-sidebar .nav-item > a.nav-link",Ce=".main-header .nav-item a.nav-link",Ie=".main-header a.dropdown-item",Se="iframe-mode",ke="iframe-mode-fullscreen",xe={onTabClick:function(e){return e},onTabChanged:function(e){return e},onTabCreated:function(e){return e},autoIframeMode:!0,autoItemActive:!0,autoShowNewTab:!0,autoDarkMode:!1,allowDuplicates:!1,allowReload:!0,loadingScreen:!0,useNavbarItems:!0,scrollOffset:40,scrollBehaviorSwap:!1,iconMaximize:"fa-expand",iconMinimize:"fa-compress"},Ae=function(){function e(e,t){this._config=t,this._element=e,this._init()}var t=e.prototype;return t.onTabClick=function(e){this._config.onTabClick(e)},t.onTabChanged=function(e){this._config.onTabChanged(e)},t.onTabCreated=function(e){this._config.onTabCreated(e)},t.createTab=function(e,t,n,i){var s=this,o="panel-"+n,a="tab-"+n;this._config.allowDuplicates&&(o+="-"+Math.floor(1e3*Math.random()),a+="-"+Math.floor(1e3*Math.random()));var l='<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="'+a+'" href="#'+o+'" role="tab" aria-controls="'+o+'" aria-selected="false">'+e+"</a></li>";r.default(me).append(unescape(escape(l)));var u='<div class="tab-pane fade" id="'+o+'" role="tabpanel" aria-labelledby="'+a+'"><iframe src="'+t+'"></iframe></div>';if(r.default(_e).append(unescape(escape(u))),i)if(this._config.loadingScreen){var c=r.default(we);c.fadeIn(),r.default(o+" iframe").ready((function(){"number"==typeof s._config.loadingScreen?(s.switchTab("#"+a),setTimeout((function(){c.fadeOut()}),s._config.loadingScreen)):(s.switchTab("#"+a),c.fadeOut())}))}else this.switchTab("#"+a);this.onTabCreated(r.default("#"+a))},t.openTabSidebar=function(e,t){void 0===t&&(t=this._config.autoShowNewTab);var n=r.default(e).clone();void 0===n.attr("href")&&(n=r.default(e).parent("a").clone()),n.find(".right, .search-path").remove();var i=n.find("p").text();""===i&&(i=n.text());var s=n.attr("href");if("#"!==s&&""!==s&&void 0!==s){var o=unescape(s).replace("./","").replace(/["#&'./:=?[\]]/gi,"-").replace(/(--)/gi,""),a="tab-"+o;if(!this._config.allowDuplicates&&r.default("#"+a).length>0)return this.switchTab("#"+a,this._config.allowReload);(!this._config.allowDuplicates&&0===r.default("#"+a).length||this._config.allowDuplicates)&&this.createTab(i,s,o,t)}},t.switchTab=function(e,t){var n=this;void 0===t&&(t=!1);var i=r.default(e),s=i.attr("href");if(r.default(be).hide(),t){var o=r.default(we);this._config.loadingScreen?o.show(0,(function(){r.default(s+" iframe").attr("src",r.default(s+" iframe").attr("src")).ready((function(){n._config.loadingScreen&&("number"==typeof n._config.loadingScreen?setTimeout((function(){o.fadeOut()}),n._config.loadingScreen):o.fadeOut())}))})):r.default(s+" iframe").attr("src",r.default(s+" iframe").attr("src"))}r.default(me+" .active").tab("dispose").removeClass("active"),this._fixHeight(),i.tab("show"),i.parents("li").addClass("active"),this.onTabChanged(i),this._config.autoItemActive&&this._setItemActive(r.default(s+" iframe").attr("src"))},t.removeActiveTab=function(e,t){if("all"==e)r.default(ve).remove(),r.default(Ee).remove(),r.default(be).show();else if("all-other"==e)r.default(ve+":not(.active)").remove(),r.default(Ee+":not(.active)").remove();else if("only-this"==e){var n=r.default(t),i=n.parent(".nav-item"),s=i.parent(),o=i.index(),a=n.siblings(".nav-link").attr("aria-controls");if(i.remove(),r.default("#"+a).remove(),r.default(_e).children().length==r.default(be+", "+we).length)r.default(be).show();else{var l=o-1;this.switchTab(s.children().eq(l).find("a.nav-link"))}}else{var u=r.default(ve+".active"),c=u.parent(),h=u.index();if(u.remove(),r.default(Ee+".active").remove(),r.default(_e).children().length==r.default(be+", "+we).length)r.default(be).show();else{var d=h-1;this.switchTab(c.children().eq(d).find("a.nav-link"))}}},t.toggleFullscreen=function(){r.default("body").hasClass(ke)?(r.default(de+" i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize),r.default("body").removeClass(ke),r.default(be+", "+we).height("100%"),r.default(fe).height("100%"),r.default(pe).height("100%")):(r.default(de+" i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize),r.default("body").addClass(ke)),r.default(window).trigger("resize"),this._fixHeight(!0)},t._init=function(){var e=r.default(_e).children().length>2;if(this._setupListeners(),this._fixHeight(!0),e){var t=r.default(""+Ee).first();console.log(t);var n="#tab-"+t.attr("id").replace("panel-","");this.switchTab(n,!0)}},t._initFrameElement=function(){if(window.frameElement&&this._config.autoIframeMode){var e=r.default("body");e.addClass(Se),this._config.autoDarkMode&&e.addClass("dark-mode")}},t._navScroll=function(e){var t=r.default(me).scrollLeft();r.default(me).animate({scrollLeft:t+e},250,"linear")},t._setupListeners=function(){var e=this;r.default(window).on("resize",(function(){setTimeout((function(){e._fixHeight()}),1)})),r.default(fe).hasClass(Se)&&(r.default(document).on("click",Te+", .sidebar-search-results .list-group-item",(function(t){t.preventDefault(),e.openTabSidebar(t.target)})),this._config.useNavbarItems&&r.default(document).on("click",Ce+", "+Ie,(function(t){t.preventDefault(),e.openTabSidebar(t.target)}))),r.default(document).on("click",ye,(function(t){t.preventDefault(),e.onTabClick(t.target),e.switchTab(t.target)})),r.default(document).on("click",ye,(function(t){t.preventDefault(),e.onTabClick(t.target),e.switchTab(t.target)})),r.default(document).on("click",'[data-widget="iframe-close"]',(function(t){t.preventDefault();var n=t.target;"I"==n.nodeName&&(n=t.target.offsetParent),e.removeActiveTab(n.attributes["data-type"]?n.attributes["data-type"].nodeValue:null,n)})),r.default(document).on("click",de,(function(t){t.preventDefault(),e.toggleFullscreen()}));var t=!1,n=null;r.default(document).on("mousedown",'[data-widget="iframe-scrollleft"]',(function(r){r.preventDefault(),clearInterval(n);var i=e._config.scrollOffset;e._config.scrollBehaviorSwap||(i=-i),t=!0,e._navScroll(i),n=setInterval((function(){e._navScroll(i)}),250)})),r.default(document).on("mousedown",'[data-widget="iframe-scrollright"]',(function(r){r.preventDefault(),clearInterval(n);var i=e._config.scrollOffset;e._config.scrollBehaviorSwap&&(i=-i),t=!0,e._navScroll(i),n=setInterval((function(){e._navScroll(i)}),250)})),r.default(document).on("mouseup",(function(){t&&(t=!1,clearInterval(n),n=null)}))},t._setItemActive=function(e){r.default(Te+", "+Ie).removeClass("active"),r.default(Ce).parent().removeClass("active");var t=r.default(Ce+'[href$="'+e+'"]'),n=r.default('.main-header a.dropdown-item[href$="'+e+'"]'),i=r.default(Te+'[href$="'+e+'"]');t.each((function(e,t){r.default(t).parent().addClass("active")})),n.each((function(e,t){r.default(t).addClass("active")})),i.each((function(e,t){r.default(t).addClass("active"),r.default(t).parents(".nav-treeview").prevAll(".nav-link").addClass("active")}))},t._fixHeight=function(e){if(void 0===e&&(e=!1),r.default("body").hasClass(ke)){var t=r.default(window).height(),n=r.default(ge).outerHeight();r.default(be+", "+we+", "+pe).height(t-n),r.default(fe).height(t)}else{var i=parseFloat(r.default(fe).css("height")),s=r.default(ge).outerHeight();1==e?setTimeout((function(){r.default(be+", "+we).height(i-s)}),50):r.default(pe).height(i-s)}},e._jQueryInterface=function(t){if(r.default(he).length>0){var n=r.default(this).data(ue);n||(n=r.default(this).data());var i=r.default.extend({},xe,"object"==typeof t?t:n);localStorage.setItem("AdminLTE:IFrame:Options",JSON.stringify(i));var s=new e(r.default(this),i);r.default(this).data(ue,"object"==typeof t?t:n),"string"==typeof t&&/createTab|openTabSidebar|switchTab|removeActiveTab/.test(t)&&s[t]()}else new e(r.default(this),JSON.parse(localStorage.getItem("AdminLTE:IFrame:Options")))._initFrameElement()},e}();r.default(window).on("load",(function(){Ae._jQueryInterface.call(r.default(he))})),r.default.fn.IFrame=Ae._jQueryInterface,r.default.fn.IFrame.Constructor=Ae,r.default.fn.IFrame.noConflict=function(){return r.default.fn.IFrame=ce,Ae._jQueryInterface};var Ne="lte.layout",Oe=r.default.fn.Layout,De=".main-header",Re=".main-sidebar",Le=".main-sidebar .sidebar",Pe=".main-footer",Me="sidebar-focused",je={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,panelAutoHeightMode:"min-height",preloadDuration:200,loginRegisterAutoHeight:!0},Fe=function(){function e(e,t){this._config=t,this._element=e}var t=e.prototype;return t.fixLayoutHeight=function(e){void 0===e&&(e=null);var t=r.default("body"),n=0;(t.hasClass("control-sidebar-slide-open")||t.hasClass("control-sidebar-open")||"control_sidebar"===e)&&(n=r.default(".control-sidebar-content").outerHeight());var i={window:r.default(window).height(),header:r.default(De).length>0?r.default(De).outerHeight():0,footer:r.default(Pe).length>0?r.default(Pe).outerHeight():0,sidebar:r.default(Le).length>0?r.default(Le).height():0,controlSidebar:n},s=this._max(i),o=this._config.panelAutoHeight;!0===o&&(o=0);var a=r.default(".content-wrapper");!1!==o&&(s===i.controlSidebar?a.css(this._config.panelAutoHeightMode,s+o):s===i.window?a.css(this._config.panelAutoHeightMode,s+o-i.header-i.footer):a.css(this._config.panelAutoHeightMode,s+o-i.header),this._isFooterFixed()&&a.css(this._config.panelAutoHeightMode,parseFloat(a.css(this._config.panelAutoHeightMode))+i.footer)),t.hasClass("layout-fixed")&&("undefined"!=typeof r.default.fn.overlayScrollbars?r.default(Le).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}):r.default(Le).css("overflow-y","auto"))},t.fixLoginRegisterHeight=function(){var e=r.default("body"),t=r.default(".login-box, .register-box");if(e.hasClass("iframe-mode"))e.css("height","100%"),r.default(".wrapper").css("height","100%"),r.default("html").css("height","100%");else if(0===t.length)e.css("height","auto"),r.default("html").css("height","auto");else{var n=t.height();e.css(this._config.panelAutoHeightMode)!==n&&e.css(this._config.panelAutoHeightMode,n)}},t._init=function(){var e=this;this.fixLayoutHeight(),!0===this._config.loginRegisterAutoHeight?this.fixLoginRegisterHeight():this._config.loginRegisterAutoHeight===parseInt(this._config.loginRegisterAutoHeight,10)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),r.default(Le).on("collapsed.lte.treeview expanded.lte.treeview",(function(){e.fixLayoutHeight()})),r.default(Re).on("mouseenter mouseleave",(function(){r.default("body").hasClass("sidebar-collapse")&&e.fixLayoutHeight()})),r.default('[data-widget="pushmenu"]').on("collapsed.lte.pushmenu shown.lte.pushmenu",(function(){setTimeout((function(){e.fixLayoutHeight()}),300)})),r.default('[data-widget="control-sidebar"]').on("collapsed.lte.controlsidebar",(function(){e.fixLayoutHeight()})).on("expanded.lte.controlsidebar",(function(){e.fixLayoutHeight("control_sidebar")})),r.default(window).resize((function(){e.fixLayoutHeight()})),setTimeout((function(){r.default("body.hold-transition").removeClass("hold-transition")}),50),setTimeout((function(){var e=r.default(".preloader");e&&(e.css("height",0),setTimeout((function(){e.children().hide()}),200))}),this._config.preloadDuration)},t._max=function(e){var t=0;return Object.keys(e).forEach((function(n){e[n]>t&&(t=e[n])})),t},t._isFooterFixed=function(){return"fixed"===r.default(Pe).css("position")},e._jQueryInterface=function(t){return void 0===t&&(t=""),this.each((function(){var n=r.default(this).data(Ne),i=r.default.extend({},je,r.default(this).data());n||(n=new e(r.default(this),i),r.default(this).data(Ne,n)),"init"===t||""===t?n._init():"fixLayoutHeight"!==t&&"fixLoginRegisterHeight"!==t||n[t]()}))},e}();r.default(window).on("load",(function(){Fe._jQueryInterface.call(r.default("body"))})),r.default(Le+" a").on("focusin",(function(){r.default(Re).addClass(Me)})).on("focusout",(function(){r.default(Re).removeClass(Me)})),r.default.fn.Layout=Fe._jQueryInterface,r.default.fn.Layout.Constructor=Fe,r.default.fn.Layout.noConflict=function(){return r.default.fn.Layout=Oe,Fe._jQueryInterface};var Ue="PushMenu",$e="lte.pushmenu",Ve="."+$e,qe=r.default.fn[Ue],Be='[data-widget="pushmenu"]',He="body",ze="sidebar-collapse",Ke="sidebar-open",We="sidebar-is-opening",Ge="sidebar-closed",Qe={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0,animationSpeed:300},Je=function(){function e(e,t){this._element=e,this._options=r.default.extend({},Qe,t),0===r.default("#sidebar-overlay").length&&this._addOverlay(),this._init()}var t=e.prototype;return t.expand=function(){var e=r.default(He);this._options.autoCollapseSize&&r.default(window).width()<=this._options.autoCollapseSize&&e.addClass(Ke),e.addClass(We).removeClass("sidebar-collapse sidebar-closed").delay(50).queue((function(){e.removeClass(We),r.default(this).dequeue()})),this._options.enableRemember&&localStorage.setItem("remember"+Ve,Ke),r.default(this._element).trigger(r.default.Event("shown.lte.pushmenu"))},t.collapse=function(){var e=this,t=r.default(He);this._options.autoCollapseSize&&r.default(window).width()<=this._options.autoCollapseSize&&t.removeClass(Ke).addClass(Ge),t.addClass(ze),this._options.enableRemember&&localStorage.setItem("remember"+Ve,ze),r.default(this._element).trigger(r.default.Event("collapsed.lte.pushmenu")),setTimeout((function(){r.default(e._element).trigger(r.default.Event("collapsed-done.lte.pushmenu"))}),this._options.animationSpeed)},t.toggle=function(){r.default(He).hasClass(ze)?this.expand():this.collapse()},t.autoCollapse=function(e){if(void 0===e&&(e=!1),this._options.autoCollapseSize){var t=r.default(He);r.default(window).width()<=this._options.autoCollapseSize?t.hasClass(Ke)||this.collapse():!0===e&&(t.hasClass(Ke)?t.removeClass(Ke):t.hasClass(Ge)&&this.expand())}},t.remember=function(){if(this._options.enableRemember){var e=r.default("body");localStorage.getItem("remember"+Ve)===ze?this._options.noTransitionAfterReload?e.addClass("hold-transition").addClass(ze).delay(50).queue((function(){r.default(this).removeClass("hold-transition"),r.default(this).dequeue()})):e.addClass(ze):this._options.noTransitionAfterReload?e.addClass("hold-transition").removeClass(ze).delay(50).queue((function(){r.default(this).removeClass("hold-transition"),r.default(this).dequeue()})):e.removeClass(ze)}},t._init=function(){var e=this;this.remember(),this.autoCollapse(),r.default(window).resize((function(){e.autoCollapse(!0)}))},t._addOverlay=function(){var e=this,t=r.default("<div />",{id:"sidebar-overlay"});t.on("click",(function(){e.collapse()})),r.default(".wrapper").append(t)},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data($e),i=r.default.extend({},Qe,r.default(this).data());n||(n=new e(this,i),r.default(this).data($e,n)),"string"==typeof t&&/collapse|expand|toggle/.test(t)&&n[t]()}))},e}();r.default(document).on("click",Be,(function(e){e.preventDefault();var t=e.currentTarget;"pushmenu"!==r.default(t).data("widget")&&(t=r.default(t).closest(Be)),Je._jQueryInterface.call(r.default(t),"toggle")})),r.default(window).on("load",(function(){Je._jQueryInterface.call(r.default(Be))})),r.default.fn[Ue]=Je._jQueryInterface,r.default.fn[Ue].Constructor=Je,r.default.fn[Ue].noConflict=function(){return r.default.fn[Ue]=qe,Je._jQueryInterface};var Xe="SidebarSearch",Ye="lte.sidebar-search",Ze=r.default.fn[Xe],et="sidebar-search-open",tt="fa-search",nt="fa-times",rt="sidebar-search-results",it="list-group",st='[data-widget="sidebar-search"]',ot=st+" .form-control",at=st+" .btn",lt=at+" i",ut=".sidebar-search-results",ct=".sidebar-search-results .list-group",ht={arrowSign:"->",minLength:3,maxResults:7,highlightName:!0,highlightPath:!1,highlightClass:"text-light",notFoundText:"No element found!"},dt=[],ft=function(){function e(e,t){this.element=e,this.options=r.default.extend({},ht,t),this.items=[]}var n=e.prototype;return n.init=function(){var e=this;0!==r.default(st).length&&(0===r.default(st).next(ut).length&&r.default(st).after(r.default("<div />",{class:rt})),0===r.default(ut).children(".list-group").length&&r.default(ut).append(r.default("<div />",{class:it})),this._addNotFound(),r.default(".main-sidebar .nav-sidebar").children().each((function(t,n){e._parseItem(n)})))},n.search=function(){var e=this,t=r.default(ot).val().toLowerCase();if(t.length<this.options.minLength)return r.default(ct).empty(),this._addNotFound(),void this.close();var n=dt.filter((function(e){return e.name.toLowerCase().includes(t)})),i=r.default(n.slice(0,this.options.maxResults));r.default(ct).empty(),0===i.length?this._addNotFound():i.each((function(t,n){r.default(ct).append(e._renderItem(escape(n.name),encodeURI(n.link),n.path))})),this.open()},n.open=function(){r.default(st).parent().addClass(et),r.default(lt).removeClass(tt).addClass(nt)},n.close=function(){r.default(st).parent().removeClass(et),r.default(lt).removeClass(nt).addClass(tt)},n.toggle=function(){r.default(st).parent().hasClass(et)?this.close():this.open()},n._parseItem=function(e,t){var n=this;if(void 0===t&&(t=[]),!r.default(e).hasClass("nav-header")){var i={},s=r.default(e).clone().find("> .nav-link"),o=r.default(e).clone().find("> .nav-treeview"),a=s.attr("href"),l=s.find("p").children().remove().end().text();if(i.name=this._trimText(l),i.link=a,i.path=t,0===o.length)dt.push(i);else{var u=i.path.concat([i.name]);o.children().each((function(e,t){n._parseItem(t,u)}))}}},n._trimText=function(e){return t.trim(e.replace(/(\r\n|\n|\r)/gm," "))},n._renderItem=function(e,t,n){var i=this;if(n=n.join(" "+this.options.arrowSign+" "),e=unescape(e),t=decodeURI(t),this.options.highlightName||this.options.highlightPath){var s=r.default(ot).val().toLowerCase(),o=new RegExp(s,"gi");this.options.highlightName&&(e=e.replace(o,(function(e){return'<strong class="'+i.options.highlightClass+'">'+e+"</strong>"}))),this.options.highlightPath&&(n=n.replace(o,(function(e){return'<strong class="'+i.options.highlightClass+'">'+e+"</strong>"})))}var a=r.default("<a/>",{href:decodeURIComponent(t),class:"list-group-item"}),l=r.default("<div/>",{class:"search-title"}).html(e),u=r.default("<div/>",{class:"search-path"}).html(n);return a.append(l).append(u),a},n._addNotFound=function(){r.default(ct).append(this._renderItem(this.options.notFoundText,"#",[]))},e._jQueryInterface=function(t){var n=r.default(this).data(Ye);n||(n=r.default(this).data());var i=r.default.extend({},ht,"object"==typeof t?t:n),s=new e(r.default(this),i);r.default(this).data(Ye,"object"==typeof t?t:n),"string"==typeof t&&/init|toggle|close|open|search/.test(t)?s[t]():s.init()},e}();r.default(document).on("click",at,(function(e){e.preventDefault(),ft._jQueryInterface.call(r.default(st),"toggle")})),r.default(document).on("keyup",ot,(function(e){return 38==e.keyCode?(e.preventDefault(),void r.default(ct).children().last().focus()):40==e.keyCode?(e.preventDefault(),void r.default(ct).children().first().focus()):void setTimeout((function(){ft._jQueryInterface.call(r.default(st),"search")}),100)})),r.default(document).on("keydown",ct,(function(e){var t=r.default(":focus");38==e.keyCode&&(e.preventDefault(),t.is(":first-child")?t.siblings().last().focus():t.prev().focus()),40==e.keyCode&&(e.preventDefault(),t.is(":last-child")?t.siblings().first().focus():t.next().focus())})),r.default(window).on("load",(function(){ft._jQueryInterface.call(r.default(st),"init")})),r.default.fn[Xe]=ft._jQueryInterface,r.default.fn[Xe].Constructor=ft,r.default.fn[Xe].noConflict=function(){return r.default.fn[Xe]=Ze,ft._jQueryInterface};var pt="NavbarSearch",gt="lte.navbar-search",mt=r.default.fn[pt],vt='[data-widget="navbar-search"]',yt=".form-control",_t="navbar-search-open",bt={resetOnClose:!0,target:".navbar-search-block"},wt=function(){function e(e,t){this._element=e,this._config=r.default.extend({},bt,t)}var t=e.prototype;return t.open=function(){r.default(this._config.target).css("display","flex").hide().fadeIn().addClass(_t),r.default(this._config.target+" "+yt).focus()},t.close=function(){r.default(this._config.target).fadeOut().removeClass(_t),this._config.resetOnClose&&r.default(this._config.target+" "+yt).val("")},t.toggle=function(){r.default(this._config.target).hasClass(_t)?this.close():this.open()},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(gt),i=r.default.extend({},bt,r.default(this).data());if(n||(n=new e(this,i),r.default(this).data(gt,n)),!/toggle|close|open/.test(t))throw new Error("Undefined method "+t);n[t]()}))},e}();r.default(document).on("click",vt,(function(e){e.preventDefault();var t=r.default(e.currentTarget);"navbar-search"!==t.data("widget")&&(t=t.closest(vt)),wt._jQueryInterface.call(t,"toggle")})),r.default.fn[pt]=wt._jQueryInterface,r.default.fn[pt].Constructor=wt,r.default.fn[pt].noConflict=function(){return r.default.fn[pt]=mt,wt._jQueryInterface};var Et=r.default.fn.Toasts,Tt="topRight",Ct="topLeft",It="bottomRight",St="bottomLeft",kt={position:Tt,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},xt=function(){function e(e,t){this._config=t,this._prepareContainer(),r.default("body").trigger(r.default.Event("init.lte.toasts"))}var t=e.prototype;return t.create=function(){var e=r.default('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');e.data("autohide",this._config.autohide),e.data("animation",this._config.fade),this._config.class&&e.addClass(this._config.class),this._config.delay&&500!=this._config.delay&&e.data("delay",this._config.delay);var t=r.default('<div class="toast-header">');if(null!=this._config.image){var n=r.default("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);null!=this._config.imageHeight&&n.height(this._config.imageHeight).width("auto"),t.append(n)}if(null!=this._config.icon&&t.append(r.default("<i />").addClass("mr-2").addClass(this._config.icon)),null!=this._config.title&&t.append(r.default("<strong />").addClass("mr-auto").html(this._config.title)),null!=this._config.subtitle&&t.append(r.default("<small />").html(this._config.subtitle)),1==this._config.close){var i=r.default('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');null==this._config.title&&i.toggleClass("ml-2 ml-auto"),t.append(i)}e.append(t),null!=this._config.body&&e.append(r.default('<div class="toast-body" />').html(this._config.body)),r.default(this._getContainerId()).prepend(e);var s=r.default("body");s.trigger(r.default.Event("created.lte.toasts")),e.toast("show"),this._config.autoremove&&e.on("hidden.bs.toast",(function(){r.default(this).delay(200).remove(),s.trigger(r.default.Event("removed.lte.toasts"))}))},t._getContainerId=function(){return this._config.position==Tt?"#toastsContainerTopRight":this._config.position==Ct?"#toastsContainerTopLeft":this._config.position==It?"#toastsContainerBottomRight":this._config.position==St?"#toastsContainerBottomLeft":void 0},t._prepareContainer=function(){if(0===r.default(this._getContainerId()).length){var e=r.default("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==Tt?e.addClass("toasts-top-right"):this._config.position==Ct?e.addClass("toasts-top-left"):this._config.position==It?e.addClass("toasts-bottom-right"):this._config.position==St&&e.addClass("toasts-bottom-left"),r.default("body").append(e)}this._config.fixed?r.default(this._getContainerId()).addClass("fixed"):r.default(this._getContainerId()).removeClass("fixed")},e._jQueryInterface=function(t,n){return this.each((function(){var i=r.default.extend({},kt,n),s=new e(r.default(this),i);"create"===t&&s[t]()}))},e}();r.default.fn.Toasts=xt._jQueryInterface,r.default.fn.Toasts.Constructor=xt,r.default.fn.Toasts.noConflict=function(){return r.default.fn.Toasts=Et,xt._jQueryInterface};var At="TodoList",Nt="lte.todolist",Ot=r.default.fn[At],Dt="done",Rt={onCheck:function(e){return e},onUnCheck:function(e){return e}},Lt=function(){function e(e,t){this._config=t,this._element=e,this._init()}var t=e.prototype;return t.toggle=function(e){e.parents("li").toggleClass(Dt),r.default(e).prop("checked")?this.check(e):this.unCheck(r.default(e))},t.check=function(e){this._config.onCheck.call(e)},t.unCheck=function(e){this._config.onUnCheck.call(e)},t._init=function(){var e=this,t=this._element;t.find("input:checkbox:checked").parents("li").toggleClass(Dt),t.on("change","input:checkbox",(function(t){e.toggle(r.default(t.target))}))},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(Nt);n||(n=r.default(this).data());var i=r.default.extend({},Rt,"object"==typeof t?t:n),s=new e(r.default(this),i);r.default(this).data(Nt,"object"==typeof t?t:n),"init"===t&&s[t]()}))},e}();r.default(window).on("load",(function(){Lt._jQueryInterface.call(r.default('[data-widget="todo-list"]'))})),r.default.fn[At]=Lt._jQueryInterface,r.default.fn[At].Constructor=Lt,r.default.fn[At].noConflict=function(){return r.default.fn[At]=Ot,Lt._jQueryInterface};var Pt="Treeview",Mt="lte.treeview",jt=r.default.fn[Pt],Ft=".nav-item",Ut=".nav-treeview",$t=".menu-open",Vt='[data-widget="treeview"]',qt="menu-open",Bt="menu-is-opening",Ht={trigger:Vt+" .nav-link",animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},zt=function(){function e(e,t){this._config=t,this._element=e}var t=e.prototype;return t.init=function(){r.default(".nav-item.menu-open .nav-treeview.menu-open").css("display","block"),this._setupListeners()},t.expand=function(e,t){var n=this,i=r.default.Event("expanded.lte.treeview");if(this._config.accordion){var s=t.siblings($t).first(),o=s.find(Ut).first();this.collapse(o,s)}t.addClass(Bt),e.stop().slideDown(this._config.animationSpeed,(function(){t.addClass(qt),r.default(n._element).trigger(i)})),this._config.expandSidebar&&this._expandSidebar()},t.collapse=function(e,t){var n=this,i=r.default.Event("collapsed.lte.treeview");t.removeClass("menu-is-opening menu-open"),e.stop().slideUp(this._config.animationSpeed,(function(){r.default(n._element).trigger(i),e.find(".menu-open > .nav-treeview").slideUp(),e.find($t).removeClass("menu-is-opening menu-open")}))},t.toggle=function(e){var t=r.default(e.currentTarget),n=t.parent(),i=n.find("> .nav-treeview");if(i.is(Ut)||(n.is(Ft)||(i=n.parent().find("> .nav-treeview")),i.is(Ut))){e.preventDefault();var s=t.parents(Ft).first();s.hasClass(qt)?this.collapse(r.default(i),s):this.expand(r.default(i),s)}},t._setupListeners=function(){var e=this,t=void 0!==this._element.attr("id")?"#"+this._element.attr("id"):"";r.default(document).on("click",""+t+this._config.trigger,(function(t){e.toggle(t)}))},t._expandSidebar=function(){r.default("body").hasClass("sidebar-collapse")&&r.default(this._config.sidebarButtonSelector).PushMenu("expand")},e._jQueryInterface=function(t){return this.each((function(){var n=r.default(this).data(Mt),i=r.default.extend({},Ht,r.default(this).data());n||(n=new e(r.default(this),i),r.default(this).data(Mt,n)),"init"===t&&n[t]()}))},e}();r.default(window).on("load.lte.treeview",(function(){r.default(Vt).each((function(){zt._jQueryInterface.call(r.default(this),"init")}))})),r.default.fn[Pt]=zt._jQueryInterface,r.default.fn[Pt].Constructor=zt,r.default.fn[Pt].noConflict=function(){return r.default.fn[Pt]=jt,zt._jQueryInterface},e.CardRefresh=c,e.CardWidget=C,e.ControlSidebar=F,e.DirectChat=q,e.Dropdown=G,e.ExpandableTable=te,e.Fullscreen=le,e.IFrame=Ae,e.Layout=Fe,e.NavbarSearch=wt,e.PushMenu=Je,e.SidebarSearch=ft,e.Toasts=xt,e.TodoList=Lt,e.Treeview=zt,Object.defineProperty(e,"__esModule",{value:!0})}))},1316:function(e,t,n){
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,r){r(t,n(9755))}(0,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}var u="transitionend",c={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=i.default(e).css("transition-duration"),n=i.default(e).css("transition-delay"),r=parseFloat(t),s=parseFloat(n);return r||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){i.default(e).trigger(u)},supportsTransitionEnd:function(){return Boolean(u)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],s=t[r],o=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(o))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+o+'" but expected type "'+i+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?c.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if("undefined"==typeof i.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=i.default.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),i.default.fn.emulateTransitionEnd=function(e){var t=this,n=!1;return i.default(this).one(c.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||c.triggerTransitionEnd(t)}),e),this},i.default.event.special[c.TRANSITION_END]={bindType:u,delegateType:u,handle:function(e){if(i.default(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var h="bs.alert",d=i.default.fn.alert,f=function(){function e(e){this._element=e}var t=e.prototype;return t.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},t.dispose=function(){i.default.removeData(this._element,h),this._element=null},t._getRootElement=function(e){var t=c.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=i.default(e).closest(".alert")[0]),n},t._triggerCloseEvent=function(e){var t=i.default.Event("close.bs.alert");return i.default(e).trigger(t),t},t._removeElement=function(e){var t=this;if(i.default(e).removeClass("show"),i.default(e).hasClass("fade")){var n=c.getTransitionDurationFromElement(e);i.default(e).one(c.TRANSITION_END,(function(n){return t._destroyElement(e,n)})).emulateTransitionEnd(n)}else this._destroyElement(e)},t._destroyElement=function(e){i.default(e).detach().trigger("closed.bs.alert").remove()},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(h);r||(r=new e(this),n.data(h,r)),"close"===t&&r[t](this)}))},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),e}();i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',f._handleDismiss(new f)),i.default.fn.alert=f._jQueryInterface,i.default.fn.alert.Constructor=f,i.default.fn.alert.noConflict=function(){return i.default.fn.alert=d,f._jQueryInterface};var p="bs.button",g=i.default.fn.button,m="active",v='[data-toggle^="button"]',y='input:not([type="hidden"])',_=".btn",b=function(){function e(e){this._element=e,this.shouldAvoidTriggerChange=!1}var t=e.prototype;return t.toggle=function(){var e=!0,t=!0,n=i.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var r=this._element.querySelector(y);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(m))e=!1;else{var s=n.querySelector(".active");s&&i.default(s).removeClass(m)}e&&("checkbox"!==r.type&&"radio"!==r.type||(r.checked=!this._element.classList.contains(m)),this.shouldAvoidTriggerChange||i.default(r).trigger("change")),r.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(m)),e&&i.default(this._element).toggleClass(m))},t.dispose=function(){i.default.removeData(this._element,p),this._element=null},e._jQueryInterface=function(t,n){return this.each((function(){var r=i.default(this),s=r.data(p);s||(s=new e(this),r.data(p,s)),s.shouldAvoidTriggerChange=n,"toggle"===t&&s[t]()}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),e}();i.default(document).on("click.bs.button.data-api",v,(function(e){var t=e.target,n=t;if(i.default(t).hasClass("btn")||(t=i.default(t).closest(_)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var r=t.querySelector(y);if(r&&(r.hasAttribute("disabled")||r.classList.contains("disabled")))return void e.preventDefault();"INPUT"!==n.tagName&&"LABEL"===t.tagName||b._jQueryInterface.call(i.default(t),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",v,(function(e){var t=i.default(e.target).closest(_)[0];i.default(t).toggleClass("focus",/^focus(in)?$/.test(e.type))})),i.default(window).on("load.bs.button.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),t=0,n=e.length;t<n;t++){var r=e[t],i=r.querySelector(y);i.checked||i.hasAttribute("checked")?r.classList.add(m):r.classList.remove(m)}for(var s=0,o=(e=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<o;s++){var a=e[s];"true"===a.getAttribute("aria-pressed")?a.classList.add(m):a.classList.remove(m)}})),i.default.fn.button=b._jQueryInterface,i.default.fn.button.Constructor=b,i.default.fn.button.noConflict=function(){return i.default.fn.button=g,b._jQueryInterface};var w="carousel",E="bs.carousel",T=i.default.fn[w],C="active",I="next",S="prev",k="slid.bs.carousel",x=".active.carousel-item",A={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},N={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},O={TOUCH:"touch",PEN:"pen"},D=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=e.prototype;return t.next=function(){this._isSliding||this._slide(I)},t.nextWhenVisible=function(){var e=i.default(this._element);!document.hidden&&e.is(":visible")&&"hidden"!==e.css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(S)},t.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(e){var t=this;this._activeElement=this._element.querySelector(x);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)i.default(this._element).one(k,(function(){return t.to(e)}));else{if(n===e)return this.pause(),void this.cycle();var r=e>n?I:S;this._slide(r,this._items[e])}},t.dispose=function(){i.default(this._element).off(".bs.carousel"),i.default.removeData(this._element,E),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(e){return e=a({},A,e),c.typeCheckConfig(w,e,N),e},t._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(t){return e._keydown(t)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(t){return e.pause(t)})).on("mouseleave.bs.carousel",(function(t){return e.cycle(t)})),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(t){e._pointerEvent&&O[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},n=function(t){e._pointerEvent&&O[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout((function(t){return e.cycle(t)}),500+e._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(e){return e.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(e){return t(e)})),i.default(this._element).on("pointerup.bs.carousel",(function(e){return n(e)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(e){return t(e)})),i.default(this._element).on("touchmove.bs.carousel",(function(t){return function(t){e.touchDeltaX=t.originalEvent.touches&&t.originalEvent.touches.length>1?0:t.originalEvent.touches[0].clientX-e.touchStartX}(t)})),i.default(this._element).on("touchend.bs.carousel",(function(e){return n(e)})))}},t._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},t._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},t._getItemByDirection=function(e,t){var n=e===I,r=e===S,i=this._getItemIndex(t),s=this._items.length-1;if((r&&0===i||n&&i===s)&&!this._config.wrap)return t;var o=(i+(e===S?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector(x)),s=i.default.Event("slide.bs.carousel",{relatedTarget:e,direction:t,from:r,to:n});return i.default(this._element).trigger(s),s},t._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(t).removeClass(C);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&i.default(n).addClass(C)}},t._updateInterval=function(){var e=this._activeElement||this._element.querySelector(x);if(e){var t=parseInt(e.getAttribute("data-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},t._slide=function(e,t){var n,r,s,o=this,a=this._element.querySelector(x),l=this._getItemIndex(a),u=t||a&&this._getItemByDirection(e,a),h=this._getItemIndex(u),d=Boolean(this._interval);if(e===I?(n="carousel-item-left",r="carousel-item-next",s="left"):(n="carousel-item-right",r="carousel-item-prev",s="right"),u&&i.default(u).hasClass(C))this._isSliding=!1;else if(!this._triggerSlideEvent(u,s).isDefaultPrevented()&&a&&u){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(u),this._activeElement=u;var f=i.default.Event(k,{relatedTarget:u,direction:s,from:l,to:h});if(i.default(this._element).hasClass("slide")){i.default(u).addClass(r),c.reflow(u),i.default(a).addClass(n),i.default(u).addClass(n);var p=c.getTransitionDurationFromElement(a);i.default(a).one(c.TRANSITION_END,(function(){i.default(u).removeClass(n+" "+r).addClass(C),i.default(a).removeClass("active "+r+" "+n),o._isSliding=!1,setTimeout((function(){return i.default(o._element).trigger(f)}),0)})).emulateTransitionEnd(p)}else i.default(a).removeClass(C),i.default(u).addClass(C),this._isSliding=!1,i.default(this._element).trigger(f);d&&this.cycle()}},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this).data(E),r=a({},A,i.default(this).data());"object"==typeof t&&(r=a({},r,t));var s="string"==typeof t?t:r.slide;if(n||(n=new e(this,r),i.default(this).data(E,n)),"number"==typeof t)n.to(t);else if("string"==typeof s){if("undefined"==typeof n[s])throw new TypeError('No method named "'+s+'"');n[s]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}))},e._dataApiClickHandler=function(t){var n=c.getSelectorFromElement(this);if(n){var r=i.default(n)[0];if(r&&i.default(r).hasClass("carousel")){var s=a({},i.default(r).data(),i.default(this).data()),o=this.getAttribute("data-slide-to");o&&(s.interval=!1),e._jQueryInterface.call(i.default(r),s),o&&i.default(r).data(E).to(o),t.preventDefault()}}},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return A}}]),e}();i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",D._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),t=0,n=e.length;t<n;t++){var r=i.default(e[t]);D._jQueryInterface.call(r,r.data())}})),i.default.fn[w]=D._jQueryInterface,i.default.fn[w].Constructor=D,i.default.fn[w].noConflict=function(){return i.default.fn[w]=T,D._jQueryInterface};var R="collapse",L="bs.collapse",P=i.default.fn[R],M="show",j="collapse",F="collapsing",U="collapsed",$="width",V='[data-toggle="collapse"]',q={toggle:!0,parent:""},B={toggle:"boolean",parent:"(string|element)"},H=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(V)),r=0,i=n.length;r<i;r++){var s=n[r],o=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(o)).filter((function(t){return t===e}));null!==o&&a.length>0&&(this._selector=o,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=e.prototype;return t.toggle=function(){i.default(this._element).hasClass(M)?this.hide():this.show()},t.show=function(){var t,n,r=this;if(!(this._isTransitioning||i.default(this._element).hasClass(M)||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e){return"string"==typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains(j)}))).length&&(t=null),t&&(n=i.default(t).not(this._selector).data(L))&&n._isTransitioning))){var s=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(s),!s.isDefaultPrevented()){t&&(e._jQueryInterface.call(i.default(t).not(this._selector),"hide"),n||i.default(t).data(L,null));var o=this._getDimension();i.default(this._element).removeClass(j).addClass(F),this._element.style[o]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass(U).attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(o[0].toUpperCase()+o.slice(1)),l=c.getTransitionDurationFromElement(this._element);i.default(this._element).one(c.TRANSITION_END,(function(){i.default(r._element).removeClass(F).addClass("collapse show"),r._element.style[o]="",r.setTransitioning(!1),i.default(r._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[o]=this._element[a]+"px"}}},t.hide=function(){var e=this;if(!this._isTransitioning&&i.default(this._element).hasClass(M)){var t=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",c.reflow(this._element),i.default(this._element).addClass(F).removeClass("collapse show");var r=this._triggerArray.length;if(r>0)for(var s=0;s<r;s++){var o=this._triggerArray[s],a=c.getSelectorFromElement(o);null!==a&&(i.default([].slice.call(document.querySelectorAll(a))).hasClass(M)||i.default(o).addClass(U).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var l=c.getTransitionDurationFromElement(this._element);i.default(this._element).one(c.TRANSITION_END,(function(){e.setTransitioning(!1),i.default(e._element).removeClass(F).addClass(j).trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},t.setTransitioning=function(e){this._isTransitioning=e},t.dispose=function(){i.default.removeData(this._element,L),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(e){return(e=a({},q,e)).toggle=Boolean(e.toggle),c.typeCheckConfig(R,e,B),e},t._getDimension=function(){return i.default(this._element).hasClass($)?$:"height"},t._getParent=function(){var t,n=this;c.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(t.querySelectorAll(r));return i.default(s).each((function(t,r){n._addAriaAndCollapsedClass(e._getTargetFromElement(r),[r])})),t},t._addAriaAndCollapsedClass=function(e,t){var n=i.default(e).hasClass(M);t.length&&i.default(t).toggleClass(U,!n).attr("aria-expanded",n)},e._getTargetFromElement=function(e){var t=c.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(L),s=a({},q,n.data(),"object"==typeof t&&t?t:{});if(!r&&s.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(s.toggle=!1),r||(r=new e(this,s),n.data(L,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t]()}}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return q}}]),e}();i.default(document).on("click.bs.collapse.data-api",V,(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=i.default(this),n=c.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(n));i.default(r).each((function(){var e=i.default(this),n=e.data(L)?"toggle":t.data();H._jQueryInterface.call(e,n)}))})),i.default.fn[R]=H._jQueryInterface,i.default.fn[R].Constructor=H,i.default.fn[R].noConflict=function(){return i.default.fn[R]=P,H._jQueryInterface};var z="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,K=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(z&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}(),W=z&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),K))}};function G(e){return e&&"[object Function]"==={}.toString.call(e)}function Q(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function J(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function X(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=Q(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/(auto|scroll|overlay)/.test(n+i+r)?e:X(J(e))}function Y(e){return e&&e.referenceNode?e.referenceNode:e}var Z=z&&!(!window.MSInputMethodContext||!document.documentMode),ee=z&&/MSIE 10/.test(navigator.userAgent);function te(e){return 11===e?Z:10===e?ee:Z||ee}function ne(e){if(!e)return document.documentElement;for(var t=te(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Q(n,"position")?ne(n):n:e?e.ownerDocument.documentElement:document.documentElement}function re(e){return null!==e.parentNode?re(e.parentNode):e}function ie(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,i=n?t:e,s=document.createRange();s.setStart(r,0),s.setEnd(i,0);var o,a,l=s.commonAncestorContainer;if(e!==l&&t!==l||r.contains(i))return"BODY"===(a=(o=l).nodeName)||"HTML"!==a&&ne(o.firstElementChild)!==o?ne(l):l;var u=re(e);return u.host?ie(u.host,t):ie(e,re(t).host)}function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var i=e.ownerDocument.documentElement,s=e.ownerDocument.scrollingElement||i;return s[n]}return e[n]}function oe(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=se(t,"top"),i=se(t,"left"),s=n?-1:1;return e.top+=r*s,e.bottom+=r*s,e.left+=i*s,e.right+=i*s,e}function ae(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+r+"Width"])}function le(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],te(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function ue(e){var t=e.body,n=e.documentElement,r=te(10)&&getComputedStyle(n);return{height:le("Height",t,n,r),width:le("Width",t,n,r)}}var ce=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},he=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),de=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function pe(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function ge(e){var t={};try{if(te(10)){t=e.getBoundingClientRect();var n=se(e,"top"),r=se(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?ue(e.ownerDocument):{},o=s.width||e.clientWidth||i.width,a=s.height||e.clientHeight||i.height,l=e.offsetWidth-o,u=e.offsetHeight-a;if(l||u){var c=Q(e);l-=ae(c,"x"),u-=ae(c,"y"),i.width-=l,i.height-=u}return pe(i)}function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=te(10),i="HTML"===t.nodeName,s=ge(e),o=ge(t),a=X(e),l=Q(t),u=parseFloat(l.borderTopWidth),c=parseFloat(l.borderLeftWidth);n&&i&&(o.top=Math.max(o.top,0),o.left=Math.max(o.left,0));var h=pe({top:s.top-o.top-u,left:s.left-o.left-c,width:s.width,height:s.height});if(h.marginTop=0,h.marginLeft=0,!r&&i){var d=parseFloat(l.marginTop),f=parseFloat(l.marginLeft);h.top-=u-d,h.bottom-=u-d,h.left-=c-f,h.right-=c-f,h.marginTop=d,h.marginLeft=f}return(r&&!n?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(h=oe(h,t)),h}function ve(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=me(e,n),i=Math.max(n.clientWidth,window.innerWidth||0),s=Math.max(n.clientHeight,window.innerHeight||0),o=t?0:se(n),a=t?0:se(n,"left"),l={top:o-r.top+r.marginTop,left:a-r.left+r.marginLeft,width:i,height:s};return pe(l)}function ye(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===Q(e,"position"))return!0;var n=J(e);return!!n&&ye(n)}function _e(e){if(!e||!e.parentElement||te())return document.documentElement;for(var t=e.parentElement;t&&"none"===Q(t,"transform");)t=t.parentElement;return t||document.documentElement}function be(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},o=i?_e(e):ie(e,Y(t));if("viewport"===r)s=ve(o,i);else{var a=void 0;"scrollParent"===r?"BODY"===(a=X(J(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===r?e.ownerDocument.documentElement:r;var l=me(a,o,i);if("HTML"!==a.nodeName||ye(o))s=l;else{var u=ue(e.ownerDocument),c=u.height,h=u.width;s.top+=l.top-l.marginTop,s.bottom=c+l.top,s.left+=l.left-l.marginLeft,s.right=h+l.left}}var d="number"==typeof(n=n||0);return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function we(e){return e.width*e.height}function Ee(e,t,n,r,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var o=be(n,r,s,i),a={top:{width:o.width,height:t.top-o.top},right:{width:o.right-t.right,height:o.height},bottom:{width:o.width,height:o.bottom-t.bottom},left:{width:t.left-o.left,height:o.height}},l=Object.keys(a).map((function(e){return fe({key:e},a[e],{area:we(a[e])})})).sort((function(e,t){return t.area-e.area})),u=l.filter((function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight})),c=u.length>0?u[0].key:l[0].key,h=e.split("-")[1];return c+(h?"-"+h:"")}function Te(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=r?_e(t):ie(t,Y(n));return me(n,i,r)}function Ce(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function Ie(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function Se(e,t,n){n=n.split("-")[0];var r=Ce(e),i={width:r.width,height:r.height},s=-1!==["right","left"].indexOf(n),o=s?"top":"left",a=s?"left":"top",l=s?"height":"width",u=s?"width":"height";return i[o]=t[o]+t[l]/2-r[l]/2,i[a]=n===a?t[a]-r[u]:t[Ie(a)],i}function ke(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function xe(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e.name===n}));var r=ke(e,(function(e){return e.name===n}));return e.indexOf(r)}(e,0,n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&G(n)&&(t.offsets.popper=pe(t.offsets.popper),t.offsets.reference=pe(t.offsets.reference),t=n(t,e))})),t}function Ae(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=Te(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=Ee(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=Se(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=xe(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function Ne(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function Oe(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var i=t[r],s=i?""+i+n:e;if("undefined"!=typeof document.body.style[s])return s}return null}function De(){return this.state.isDestroyed=!0,Ne(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Oe("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Re(e){var t=e.ownerDocument;return t?t.defaultView:window}function Le(e,t,n,r){var i="BODY"===e.nodeName,s=i?e.ownerDocument.defaultView:e;s.addEventListener(t,n,{passive:!0}),i||Le(X(s.parentNode),t,n,r),r.push(s)}function Pe(e,t,n,r){n.updateBound=r,Re(e).addEventListener("resize",n.updateBound,{passive:!0});var i=X(e);return Le(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function Me(){this.state.eventsEnabled||(this.state=Pe(this.reference,this.options,this.state,this.scheduleUpdate))}function je(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,Re(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function Fe(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Ue(e,t){Object.keys(t).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Fe(t[n])&&(r="px"),e.style[n]=t[n]+r}))}var $e=z&&/Firefox/i.test(navigator.userAgent);function Ve(e,t,n){var r=ke(e,(function(e){return e.name===t})),i=!!r&&e.some((function(e){return e.name===n&&e.enabled&&e.order<r.order}));if(!i){var s="`"+t+"`",o="`"+n+"`";console.warn(o+" modifier is required by "+s+" modifier in order to work, be sure to include it before "+s+"!")}return i}var qe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Be=qe.slice(3);function He(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Be.indexOf(e),r=Be.slice(n+1).concat(Be.slice(0,n));return t?r.reverse():r}var ze={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var i=e.offsets,s=i.reference,o=i.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",u=a?"width":"height",c={start:de({},l,s[l]),end:de({},l,s[l]+s[u]-o[u])};e.offsets.popper=fe({},o,c[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,r=t.offset,i=e.placement,s=e.offsets,o=s.popper,a=s.reference,l=i.split("-")[0];return n=Fe(+r)?[+r,0]:function(e,t,n,r){var i=[0,0],s=-1!==["right","left"].indexOf(r),o=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=o.indexOf(ke(o,(function(e){return-1!==e.search(/,|\s/)})));o[a]&&-1===o[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==a?[o.slice(0,a).concat([o[a].split(l)[0]]),[o[a].split(l)[1]].concat(o.slice(a+1))]:[o];return u=u.map((function(e,r){var i=(1===r?!s:s)?"height":"width",o=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,o=!0,e):o?(e[e.length-1]+=t,o=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,r){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+i[1],o=i[2];return s?0===o.indexOf("%")?pe("%p"===o?n:r)[t]/100*s:"vh"===o||"vw"===o?("vh"===o?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*s:s:e}(e,i,t,n)}))})),u.forEach((function(e,t){e.forEach((function(n,r){Fe(n)&&(i[t]+=n*("-"===e[r-1]?-1:1))}))})),i}(r,o,a,l),"left"===l?(o.top+=n[0],o.left-=n[1]):"right"===l?(o.top+=n[0],o.left+=n[1]):"top"===l?(o.left+=n[0],o.top-=n[1]):"bottom"===l&&(o.left+=n[0],o.top+=n[1]),e.popper=o,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||ne(e.instance.popper);e.instance.reference===n&&(n=ne(n));var r=Oe("transform"),i=e.instance.popper.style,s=i.top,o=i.left,a=i[r];i.top="",i.left="",i[r]="";var l=be(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=s,i.left=o,i[r]=a,t.boundaries=l;var u=t.priority,c=e.offsets.popper,h={primary:function(e){var n=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(c[e],l[e])),de({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=c[n];return c[e]>l[e]&&!t.escapeWithReference&&(r=Math.min(c[n],l[e]-("right"===e?c.width:c.height))),de({},n,r)}};return u.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=fe({},c,h[t](e))})),e.offsets.popper=c,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,i=e.placement.split("-")[0],s=Math.floor,o=-1!==["top","bottom"].indexOf(i),a=o?"right":"bottom",l=o?"left":"top",u=o?"width":"height";return n[a]<s(r[l])&&(e.offsets.popper[l]=s(r[l])-n[u]),n[l]>s(r[a])&&(e.offsets.popper[l]=s(r[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!Ve(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],s=e.offsets,o=s.popper,a=s.reference,l=-1!==["left","right"].indexOf(i),u=l?"height":"width",c=l?"Top":"Left",h=c.toLowerCase(),d=l?"left":"top",f=l?"bottom":"right",p=Ce(r)[u];a[f]-p<o[h]&&(e.offsets.popper[h]-=o[h]-(a[f]-p)),a[h]+p>o[f]&&(e.offsets.popper[h]+=a[h]+p-o[f]),e.offsets.popper=pe(e.offsets.popper);var g=a[h]+a[u]/2-p/2,m=Q(e.instance.popper),v=parseFloat(m["margin"+c]),y=parseFloat(m["border"+c+"Width"]),_=g-e.offsets.popper[h]-v-y;return _=Math.max(Math.min(o[u]-p,_),0),e.arrowElement=r,e.offsets.arrow=(de(n={},h,Math.round(_)),de(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(Ne(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=be(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],i=Ie(r),s=e.placement.split("-")[1]||"",o=[];switch(t.behavior){case"flip":o=[r,i];break;case"clockwise":o=He(r);break;case"counterclockwise":o=He(r,!0);break;default:o=t.behavior}return o.forEach((function(a,l){if(r!==a||o.length===l+1)return e;r=e.placement.split("-")[0],i=Ie(r);var u=e.offsets.popper,c=e.offsets.reference,h=Math.floor,d="left"===r&&h(u.right)>h(c.left)||"right"===r&&h(u.left)<h(c.right)||"top"===r&&h(u.bottom)>h(c.top)||"bottom"===r&&h(u.top)<h(c.bottom),f=h(u.left)<h(n.left),p=h(u.right)>h(n.right),g=h(u.top)<h(n.top),m=h(u.bottom)>h(n.bottom),v="left"===r&&f||"right"===r&&p||"top"===r&&g||"bottom"===r&&m,y=-1!==["top","bottom"].indexOf(r),_=!!t.flipVariations&&(y&&"start"===s&&f||y&&"end"===s&&p||!y&&"start"===s&&g||!y&&"end"===s&&m),b=!!t.flipVariationsByContent&&(y&&"start"===s&&p||y&&"end"===s&&f||!y&&"start"===s&&m||!y&&"end"===s&&g),w=_||b;(d||v||w)&&(e.flipped=!0,(d||v)&&(r=o[l+1]),w&&(s=function(e){return"end"===e?"start":"start"===e?"end":e}(s)),e.placement=r+(s?"-"+s:""),e.offsets.popper=fe({},e.offsets.popper,Se(e.instance.popper,e.offsets.reference,e.placement)),e=xe(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,i=r.popper,s=r.reference,o=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[o?"left":"top"]=s[n]-(a?i[o?"width":"height"]:0),e.placement=Ie(t),e.offsets.popper=pe(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!Ve(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=ke(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,i=e.offsets.popper,s=ke(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==s&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o,a,l=void 0!==s?s:t.gpuAcceleration,u=ne(e.instance.popper),c=ge(u),h={position:i.position},d=function(e,t){var n=e.offsets,r=n.popper,i=n.reference,s=Math.round,o=Math.floor,a=function(e){return e},l=s(i.width),u=s(r.width),c=-1!==["left","right"].indexOf(e.placement),h=-1!==e.placement.indexOf("-"),d=t?c||h||l%2==u%2?s:o:a,f=t?s:a;return{left:d(l%2==1&&u%2==1&&!h&&t?r.left-1:r.left),top:f(r.top),bottom:f(r.bottom),right:d(r.right)}}(e,window.devicePixelRatio<2||!$e),f="bottom"===n?"top":"bottom",p="right"===r?"left":"right",g=Oe("transform");if(a="bottom"===f?"HTML"===u.nodeName?-u.clientHeight+d.bottom:-c.height+d.bottom:d.top,o="right"===p?"HTML"===u.nodeName?-u.clientWidth+d.right:-c.width+d.right:d.left,l&&g)h[g]="translate3d("+o+"px, "+a+"px, 0)",h[f]=0,h[p]=0,h.willChange="transform";else{var m="bottom"===f?-1:1,v="right"===p?-1:1;h[f]=a*m,h[p]=o*v,h.willChange=f+", "+p}var y={"x-placement":e.placement};return e.attributes=fe({},y,e.attributes),e.styles=fe({},h,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return Ue(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&Ue(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,i){var s=Te(i,t,e,n.positionFixed),o=Ee(n.placement,s,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",o),Ue(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Ke=function(){function e(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ce(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=W(this.update.bind(this)),this.options=fe({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},e.Defaults.modifiers,i.modifiers)).forEach((function(t){r.options.modifiers[t]=fe({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return fe({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&G(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return he(e,[{key:"update",value:function(){return Ae.call(this)}},{key:"destroy",value:function(){return De.call(this)}},{key:"enableEventListeners",value:function(){return Me.call(this)}},{key:"disableEventListeners",value:function(){return je.call(this)}}]),e}();Ke.Utils=("undefined"!=typeof window?window:n.g).PopperUtils,Ke.placements=qe,Ke.Defaults=ze;var We=Ke,Ge="dropdown",Qe="bs.dropdown",Je=i.default.fn[Ge],Xe=new RegExp("38|40|27"),Ye="disabled",Ze="show",et="dropdown-menu-right",tt="hide.bs.dropdown",nt="hidden.bs.dropdown",rt="click.bs.dropdown.data-api",it="keydown.bs.dropdown.data-api",st='[data-toggle="dropdown"]',ot=".dropdown-menu",at={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},lt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ut=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=e.prototype;return t.toggle=function(){if(!this._element.disabled&&!i.default(this._element).hasClass(Ye)){var t=i.default(this._menu).hasClass(Ze);e._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||i.default(this._element).hasClass(Ye)||i.default(this._menu).hasClass(Ze))){var n={relatedTarget:this._element},r=i.default.Event("show.bs.dropdown",n),s=e._getParentFromElement(this._element);if(i.default(s).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof We)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=s:c.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&i.default(s).addClass("position-static"),this._popper=new We(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===i.default(s).closest(".navbar-nav").length&&i.default(document.body).children().on("mouseover",null,i.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),i.default(this._menu).toggleClass(Ze),i.default(s).toggleClass(Ze).trigger(i.default.Event("shown.bs.dropdown",n))}}},t.hide=function(){if(!this._element.disabled&&!i.default(this._element).hasClass(Ye)&&i.default(this._menu).hasClass(Ze)){var t={relatedTarget:this._element},n=i.default.Event(tt,t),r=e._getParentFromElement(this._element);i.default(r).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),i.default(this._menu).toggleClass(Ze),i.default(r).toggleClass(Ze).trigger(i.default.Event(nt,t)))}},t.dispose=function(){i.default.removeData(this._element,Qe),i.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;i.default(this._element).on("click.bs.dropdown",(function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}))},t._getConfig=function(e){return e=a({},this.constructor.Default,i.default(this._element).data(),e),c.typeCheckConfig(Ge,e,this.constructor.DefaultType),e},t._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(ot))}return this._menu},t._getPlacement=function(){var e=i.default(this._element.parentNode),t="bottom-start";return e.hasClass("dropup")?t=i.default(this._menu).hasClass(et)?"top-end":"top-start":e.hasClass("dropright")?t="right-start":e.hasClass("dropleft")?t="left-start":i.default(this._menu).hasClass(et)&&(t="bottom-end"),t},t._detectNavbar=function(){return i.default(this._element).closest(".navbar").length>0},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets,e._element)),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),a({},e,this._config.popperConfig)},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this).data(Qe);if(n||(n=new e(this,"object"==typeof t?t:null),i.default(this).data(Qe,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},e._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=[].slice.call(document.querySelectorAll(st)),r=0,s=n.length;r<s;r++){var o=e._getParentFromElement(n[r]),a=i.default(n[r]).data(Qe),l={relatedTarget:n[r]};if(t&&"click"===t.type&&(l.clickEvent=t),a){var u=a._menu;if(i.default(o).hasClass(Ze)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&i.default.contains(o,t.target))){var c=i.default.Event(tt,l);i.default(o).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),n[r].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),i.default(u).removeClass(Ze),i.default(o).removeClass(Ze).trigger(i.default.Event(nt,l)))}}}},e._getParentFromElement=function(e){var t,n=c.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||i.default(t.target).closest(ot).length):!Xe.test(t.which))&&!this.disabled&&!i.default(this).hasClass(Ye)){var n=e._getParentFromElement(this),r=i.default(n).hasClass(Ze);if(r||27!==t.which){if(t.preventDefault(),t.stopPropagation(),!r||27===t.which||32===t.which)return 27===t.which&&i.default(n.querySelector(st)).trigger("focus"),void i.default(this).trigger("click");var s=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e){return i.default(e).is(":visible")}));if(0!==s.length){var o=s.indexOf(t.target);38===t.which&&o>0&&o--,40===t.which&&o<s.length-1&&o++,o<0&&(o=0),s[o].focus()}}}},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return at}},{key:"DefaultType",get:function(){return lt}}]),e}();i.default(document).on(it,st,ut._dataApiKeydownHandler).on(it,ot,ut._dataApiKeydownHandler).on(rt+" keyup.bs.dropdown.data-api",ut._clearMenus).on(rt,st,(function(e){e.preventDefault(),e.stopPropagation(),ut._jQueryInterface.call(i.default(this),"toggle")})).on(rt,".dropdown form",(function(e){e.stopPropagation()})),i.default.fn[Ge]=ut._jQueryInterface,i.default.fn[Ge].Constructor=ut,i.default.fn[Ge].noConflict=function(){return i.default.fn[Ge]=Je,ut._jQueryInterface};var ct="bs.modal",ht=i.default.fn.modal,dt="modal-open",ft="fade",pt="show",gt="modal-static",mt="hidden.bs.modal",vt="show.bs.modal",yt="focusin.bs.modal",_t="resize.bs.modal",bt="click.dismiss.bs.modal",wt="keydown.dismiss.bs.modal",Et="mousedown.dismiss.bs.modal",Tt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ct={backdrop:!0,keyboard:!0,focus:!0,show:!0},It={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},St=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=e.prototype;return t.toggle=function(e){return this._isShown?this.hide():this.show(e)},t.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){var n=i.default.Event(vt,{relatedTarget:e});i.default(this._element).trigger(n),n.isDefaultPrevented()||(this._isShown=!0,i.default(this._element).hasClass(ft)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on(bt,'[data-dismiss="modal"]',(function(e){return t.hide(e)})),i.default(this._dialog).on(Et,(function(){i.default(t._element).one("mouseup.dismiss.bs.modal",(function(e){i.default(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return t._showElement(e)})))}},t.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var r=i.default(this._element).hasClass(ft);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off(yt),i.default(this._element).removeClass(pt),i.default(this._element).off(bt),i.default(this._dialog).off(Et),r){var s=c.getTransitionDurationFromElement(this._element);i.default(this._element).one(c.TRANSITION_END,(function(e){return t._hideModal(e)})).emulateTransitionEnd(s)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return i.default(e).off(".bs.modal")})),i.default(document).off(yt),i.default.removeData(this._element,ct),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(e){return e=a({},Ct,e),c.typeCheckConfig("modal",e,It),e},t._triggerBackdropTransition=function(){var e=this,t=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(gt);var r=c.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(c.TRANSITION_END),i.default(this._element).one(c.TRANSITION_END,(function(){e._element.classList.remove(gt),n||i.default(e._element).one(c.TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,r)})).emulateTransitionEnd(r),this._element.focus()}},t._showElement=function(e){var t=this,n=i.default(this._element).hasClass(ft),r=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&r?r.scrollTop=0:this._element.scrollTop=0,n&&c.reflow(this._element),i.default(this._element).addClass(pt),this._config.focus&&this._enforceFocus();var s=i.default.Event("shown.bs.modal",{relatedTarget:e}),o=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,i.default(t._element).trigger(s)};if(n){var a=c.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(c.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._enforceFocus=function(){var e=this;i.default(document).off(yt).on(yt,(function(t){document!==t.target&&e._element!==t.target&&0===i.default(e._element).has(t.target).length&&e._element.focus()}))},t._setEscapeEvent=function(){var e=this;this._isShown?i.default(this._element).on(wt,(function(t){e._config.keyboard&&27===t.which?(t.preventDefault(),e.hide()):e._config.keyboard||27!==t.which||e._triggerBackdropTransition()})):this._isShown||i.default(this._element).off(wt)},t._setResizeEvent=function(){var e=this;this._isShown?i.default(window).on(_t,(function(t){return e.handleUpdate(t)})):i.default(window).off(_t)},t._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass(dt),e._resetAdjustments(),e._resetScrollbar(),i.default(e._element).trigger(mt)}))},t._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(e){var t=this,n=i.default(this._element).hasClass(ft)?ft:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on(bt,(function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._triggerBackdropTransition():t.hide())})),n&&c.reflow(this._backdrop),i.default(this._backdrop).addClass(pt),!e)return;if(!n)return void e();var r=c.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(c.TRANSITION_END,e).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass(pt);var s=function(){t._removeBackdrop(),e&&e()};if(i.default(this._element).hasClass(ft)){var o=c.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(o)}else s()}else e&&e()},t._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Tt)),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(t).each((function(t,n){var r=n.style.paddingRight,s=i.default(n).css("padding-right");i.default(n).data("padding-right",r).css("padding-right",parseFloat(s)+e._scrollbarWidth+"px")})),i.default(n).each((function(t,n){var r=n.style.marginRight,s=i.default(n).css("margin-right");i.default(n).data("margin-right",r).css("margin-right",parseFloat(s)-e._scrollbarWidth+"px")}));var r=document.body.style.paddingRight,s=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",r).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}i.default(document.body).addClass(dt)},t._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(Tt));i.default(e).each((function(e,t){var n=i.default(t).data("padding-right");i.default(t).removeData("padding-right"),t.style.paddingRight=n||""}));var t=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(t).each((function(e,t){var n=i.default(t).data("margin-right");"undefined"!=typeof n&&i.default(t).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(t,n){return this.each((function(){var r=i.default(this).data(ct),s=a({},Ct,i.default(this).data(),"object"==typeof t&&t?t:{});if(r||(r=new e(this,s),i.default(this).data(ct,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t](n)}else s.show&&r.show(n)}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Ct}}]),e}();i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var t,n=this,r=c.getSelectorFromElement(this);r&&(t=document.querySelector(r));var s=i.default(t).data(ct)?"toggle":a({},i.default(t).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var o=i.default(t).one(vt,(function(e){e.isDefaultPrevented()||o.one(mt,(function(){i.default(n).is(":visible")&&n.focus()}))}));St._jQueryInterface.call(i.default(t),s,this)})),i.default.fn.modal=St._jQueryInterface,i.default.fn.modal.Constructor=St,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=ht,St._jQueryInterface};var kt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],xt=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,At=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Nt(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var r=(new window.DOMParser).parseFromString(e,"text/html"),i=Object.keys(t),s=[].slice.call(r.body.querySelectorAll("*")),o=function(e,n){var r=s[e],o=r.nodeName.toLowerCase();if(-1===i.indexOf(r.nodeName.toLowerCase()))return r.parentNode.removeChild(r),"continue";var a=[].slice.call(r.attributes),l=[].concat(t["*"]||[],t[o]||[]);a.forEach((function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===kt.indexOf(n)||Boolean(xt.test(e.nodeValue)||At.test(e.nodeValue));for(var r=t.filter((function(e){return e instanceof RegExp})),i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1})(e,l)||r.removeAttribute(e.nodeName)}))},a=0,l=s.length;a<l;a++)o(a);return r.body.innerHTML}var Ot="tooltip",Dt="bs.tooltip",Rt=i.default.fn.tooltip,Lt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Pt=["sanitize","whiteList","sanitizeFn"],Mt="fade",jt="show",Ft="show",Ut="out",$t="hover",Vt="focus",qt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Bt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ht={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},zt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Kt=function(){function e(e,t){if("undefined"==typeof We)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var t=e.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=i.default(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),i.default(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(i.default(this.getTipElement()).hasClass(jt))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),i.default.removeData(this.element,this.constructor.DATA_KEY),i.default(this.element).off(this.constructor.EVENT_KEY),i.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===i.default(this.element).css("display"))throw new Error("Please use show on visible elements");var t=i.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i.default(this.element).trigger(t);var n=c.findShadowRoot(this.element),r=i.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!r)return;var s=this.getTipElement(),o=c.getUID(this.constructor.NAME);s.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&i.default(s).addClass(Mt);var a="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,l=this._getAttachment(a);this.addAttachmentClass(l);var u=this._getContainer();i.default(s).data(this.constructor.DATA_KEY,this),i.default.contains(this.element.ownerDocument.documentElement,this.tip)||i.default(s).appendTo(u),i.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new We(this.element,s,this._getPopperConfig(l)),i.default(s).addClass(jt),i.default(s).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i.default(document.body).children().on("mouseover",null,i.default.noop);var h=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,i.default(e.element).trigger(e.constructor.Event.SHOWN),t===Ut&&e._leave(null,e)};if(i.default(this.tip).hasClass(Mt)){var d=c.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(c.TRANSITION_END,h).emulateTransitionEnd(d)}else h()}},t.hide=function(e){var t=this,n=this.getTipElement(),r=i.default.Event(this.constructor.Event.HIDE),s=function(){t._hoverState!==Ft&&n.parentNode&&n.parentNode.removeChild(n),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),i.default(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if(i.default(this.element).trigger(r),!r.isDefaultPrevented()){if(i.default(n).removeClass(jt),"ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,i.default(this.tip).hasClass(Mt)){var o=c.getTransitionDurationFromElement(n);i.default(n).one(c.TRANSITION_END,s).emulateTransitionEnd(o)}else s();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(e){i.default(this.getTipElement()).addClass("bs-tooltip-"+e)},t.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},t.setContent=function(){var e=this.getTipElement();this.setElementContent(i.default(e.querySelectorAll(".tooltip-inner")),this.getTitle()),i.default(e).removeClass("fade show")},t.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=Nt(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?i.default(t).parent().is(e)||e.empty().append(t):e.text(i.default(t).text())},t.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},t._getPopperConfig=function(e){var t=this;return a({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e.config.offset(t.offsets,e.element)),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?i.default(this.config.container):i.default(document).find(this.config.container)},t._getAttachment=function(e){return qt[e.toUpperCase()]},t._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach((function(t){if("click"===t)i.default(e.element).on(e.constructor.Event.CLICK,e.config.selector,(function(t){return e.toggle(t)}));else if("manual"!==t){var n=t===$t?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=t===$t?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;i.default(e.element).on(n,e.config.selector,(function(t){return e._enter(t)})).on(r,e.config.selector,(function(t){return e._leave(t)}))}})),this._hideModalHandler=function(){e.element&&e.hide()},i.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||i.default(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),i.default(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Vt:$t]=!0),i.default(t.getTipElement()).hasClass(jt)||t._hoverState===Ft?t._hoverState=Ft:(clearTimeout(t._timeout),t._hoverState=Ft,t.config.delay&&t.config.delay.show?t._timeout=setTimeout((function(){t._hoverState===Ft&&t.show()}),t.config.delay.show):t.show())},t._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||i.default(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),i.default(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Vt:$t]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Ut,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout((function(){t._hoverState===Ut&&t.hide()}),t.config.delay.hide):t.hide())},t._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},t._getConfig=function(e){var t=i.default(this.element).data();return Object.keys(t).forEach((function(e){-1!==Pt.indexOf(e)&&delete t[e]})),"number"==typeof(e=a({},this.constructor.Default,t,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),c.typeCheckConfig(Ot,e,this.constructor.DefaultType),e.sanitize&&(e.template=Nt(e.template,e.whiteList,e.sanitizeFn)),e},t._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},t._cleanTipClass=function(){var e=i.default(this.getTipElement()),t=e.attr("class").match(Lt);null!==t&&t.length&&e.removeClass(t.join(""))},t._handlePopperPlacementChange=function(e){this.tip=e.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},t._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(i.default(e).removeClass(Mt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(Dt),s="object"==typeof t&&t;if((r||!/dispose|hide/.test(t))&&(r||(r=new e(this,s),n.data(Dt,r)),"string"==typeof t)){if("undefined"==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t]()}}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Bt}},{key:"NAME",get:function(){return Ot}},{key:"DATA_KEY",get:function(){return Dt}},{key:"Event",get:function(){return zt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Ht}}]),e}();i.default.fn.tooltip=Kt._jQueryInterface,i.default.fn.tooltip.Constructor=Kt,i.default.fn.tooltip.noConflict=function(){return i.default.fn.tooltip=Rt,Kt._jQueryInterface};var Wt="bs.popover",Gt=i.default.fn.popover,Qt=new RegExp("(^|\\s)bs-popover\\S+","g"),Jt=a({},Kt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Xt=a({},Kt.DefaultType,{content:"(string|element|function)"}),Yt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Zt=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var s=r.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(e){i.default(this.getTipElement()).addClass("bs-popover-"+e)},s.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},s.setContent=function(){var e=i.default(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(".popover-body"),t),e.removeClass("fade show")},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var e=i.default(this.getTipElement()),t=e.attr("class").match(Qt);null!==t&&t.length>0&&e.removeClass(t.join(""))},r._jQueryInterface=function(e){return this.each((function(){var t=i.default(this).data(Wt),n="object"==typeof e?e:null;if((t||!/dispose|hide/.test(e))&&(t||(t=new r(this,n),i.default(this).data(Wt,t)),"string"==typeof e)){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}}))},o(r,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Jt}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return Wt}},{key:"Event",get:function(){return Yt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Xt}}]),r}(Kt);i.default.fn.popover=Zt._jQueryInterface,i.default.fn.popover.Constructor=Zt,i.default.fn.popover.noConflict=function(){return i.default.fn.popover=Gt,Zt._jQueryInterface};var en="scrollspy",tn="bs.scrollspy",nn=i.default.fn[en],rn="active",sn="position",on=".nav, .list-group",an={offset:10,method:"auto",target:""},ln={offset:"number",method:"string",target:"(string|element)"},un=function(){function e(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,i.default(this._scrollElement).on("scroll.bs.scrollspy",(function(e){return n._process(e)})),this.refresh(),this._process()}var t=e.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?"offset":sn,n="auto"===this._config.method?t:this._config.method,r=n===sn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(e){var t,s=c.getSelectorFromElement(e);if(s&&(t=document.querySelector(s)),t){var o=t.getBoundingClientRect();if(o.width||o.height)return[i.default(t)[n]().top+r,s]}return null})).filter(Boolean).sort((function(e,t){return e[0]-t[0]})).forEach((function(t){e._offsets.push(t[0]),e._targets.push(t[1])}))},t.dispose=function(){i.default.removeData(this._element,tn),i.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(e){if("string"!=typeof(e=a({},an,"object"==typeof e&&e?e:{})).target&&c.isElement(e.target)){var t=i.default(e.target).attr("id");t||(t=c.getUID(en),i.default(e.target).attr("id",t)),e.target="#"+t}return c.typeCheckConfig(en,e,ln),e},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1];this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&("undefined"==typeof this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map((function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'})),n=i.default([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(rn),n.addClass(rn)):(n.addClass(rn),n.parents(on).prev(".nav-link, .list-group-item").addClass(rn),n.parents(on).prev(".nav-item").children(".nav-link").addClass(rn)),i.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(e){return e.classList.contains(rn)})).forEach((function(e){return e.classList.remove(rn)}))},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this).data(tn);if(n||(n=new e(this,"object"==typeof t&&t),i.default(this).data(tn,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return an}}]),e}();i.default(window).on("load.bs.scrollspy.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),t=e.length;t--;){var n=i.default(e[t]);un._jQueryInterface.call(n,n.data())}})),i.default.fn[en]=un._jQueryInterface,i.default.fn[en].Constructor=un,i.default.fn[en].noConflict=function(){return i.default.fn[en]=nn,un._jQueryInterface};var cn="bs.tab",hn=i.default.fn.tab,dn="active",fn="fade",pn="show",gn=".active",mn="> li > .active",vn=function(){function e(e){this._element=e}var t=e.prototype;return t.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass(dn)||i.default(this._element).hasClass("disabled")||this._element.hasAttribute("disabled"))){var t,n,r=i.default(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(r){var o="UL"===r.nodeName||"OL"===r.nodeName?mn:gn;n=(n=i.default.makeArray(i.default(r).find(o)))[n.length-1]}var a=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),l=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(a),i.default(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(t=document.querySelector(s)),this._activate(this._element,r);var u=function(){var t=i.default.Event("hidden.bs.tab",{relatedTarget:e._element}),r=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(t),i.default(e._element).trigger(r)};t?this._activate(t,t.parentNode,u):u()}}},t.dispose=function(){i.default.removeData(this._element,cn),this._element=null},t._activate=function(e,t,n){var r=this,s=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?i.default(t).children(gn):i.default(t).find(mn))[0],o=n&&s&&i.default(s).hasClass(fn),a=function(){return r._transitionComplete(e,s,n)};if(s&&o){var l=c.getTransitionDurationFromElement(s);i.default(s).removeClass(pn).one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},t._transitionComplete=function(e,t,n){if(t){i.default(t).removeClass(dn);var r=i.default(t.parentNode).find("> .dropdown-menu .active")[0];r&&i.default(r).removeClass(dn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}i.default(e).addClass(dn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),c.reflow(e),e.classList.contains(fn)&&e.classList.add(pn);var s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&i.default(s).hasClass("dropdown-menu")){var o=i.default(e).closest(".dropdown")[0];if(o){var a=[].slice.call(o.querySelectorAll(".dropdown-toggle"));i.default(a).addClass(dn)}e.setAttribute("aria-expanded",!0)}n&&n()},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(cn);if(r||(r=new e(this),n.data(cn,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t]()}}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),e}();i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(e){e.preventDefault(),vn._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=vn._jQueryInterface,i.default.fn.tab.Constructor=vn,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=hn,vn._jQueryInterface};var yn="bs.toast",_n=i.default.fn.toast,bn="hide",wn="show",En="showing",Tn="click.dismiss.bs.toast",Cn={animation:!0,autohide:!0,delay:500},In={animation:"boolean",autohide:"boolean",delay:"number"},Sn=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var t=e.prototype;return t.show=function(){var e=this,t=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){e._element.classList.remove(En),e._element.classList.add(wn),i.default(e._element).trigger("shown.bs.toast"),e._config.autohide&&(e._timeout=setTimeout((function(){e.hide()}),e._config.delay))};if(this._element.classList.remove(bn),c.reflow(this._element),this._element.classList.add(En),this._config.animation){var r=c.getTransitionDurationFromElement(this._element);i.default(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(r)}else n()}},t.hide=function(){if(this._element.classList.contains(wn)){var e=i.default.Event("hide.bs.toast");i.default(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},t.dispose=function(){this._clearTimeout(),this._element.classList.contains(wn)&&this._element.classList.remove(wn),i.default(this._element).off(Tn),i.default.removeData(this._element,yn),this._element=null,this._config=null},t._getConfig=function(e){return e=a({},Cn,i.default(this._element).data(),"object"==typeof e&&e?e:{}),c.typeCheckConfig("toast",e,this.constructor.DefaultType),e},t._setListeners=function(){var e=this;i.default(this._element).on(Tn,'[data-dismiss="toast"]',(function(){return e.hide()}))},t._close=function(){var e=this,t=function(){e._element.classList.add(bn),i.default(e._element).trigger("hidden.bs.toast")};if(this._element.classList.remove(wn),this._config.animation){var n=c.getTransitionDurationFromElement(this._element);i.default(this._element).one(c.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},t._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(yn);if(r||(r=new e(this,"object"==typeof t&&t),n.data(yn,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new TypeError('No method named "'+t+'"');r[t](this)}}))},o(e,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"DefaultType",get:function(){return In}},{key:"Default",get:function(){return Cn}}]),e}();i.default.fn.toast=Sn._jQueryInterface,i.default.fn.toast.Constructor=Sn,i.default.fn.toast.noConflict=function(){return i.default.fn.toast=_n,Sn._jQueryInterface},e.Alert=f,e.Button=b,e.Carousel=D,e.Collapse=H,e.Dropdown=ut,e.Modal=St,e.Popover=Zt,e.Scrollspy=un,e.Tab=vn,e.Toast=Sn,e.Tooltip=Kt,e.Util=c,Object.defineProperty(e,"__esModule",{value:!0})}))},9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,l=r(t),u=s(l),c=i(o,u);if(e&&n!=n){while(u>c)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),l=o.f,u=s.f,c=0;c<a.length;c++){var h=a[c];r(e,h)||n&&r(n,h)||l(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,l=s.Deno,u=a&&a.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),u=n(4705);e.exports=function(e,t){var n,c,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(c=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,c)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(c,h),d=p&&p.value):d=c[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(c,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),l=n(111),u=n(8880),c=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(c(e,b))throw g(p);return t.facade=e,u(e,b,t),t},i=function(e){return c(e,b)?e[b]:{}},s=function(e){return c(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==c||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},u=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),l=n(6530).CONFIGURABLE,u=n(2788),c=n(9909),h=c.enforce,d=c.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),u=n(2597),c=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),c)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,c=[];for(n in r)!i(a,n)&&i(r,n)&&l(c,n);while(t.length>u)i(r,n=t[u++])&&(~o(c,n)||l(c,n));return c}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),l=n(3307),u=r.Symbol,c=i("wks"),h=l?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(c,e)||(c[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),c[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),l=n(7293),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!c();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return o(t,n),n}})},9755:function(e,t){var n,r;
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(t,n){"use strict";"object"===typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!==typeof window?window:this,(function(i,s){"use strict";var o=[],a=Object.getPrototypeOf,l=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},c=o.push,h=o.indexOf,d={},f=d.toString,p=d.hasOwnProperty,g=p.toString,m=g.call(Object),v={},y=function(e){return"function"===typeof e&&"number"!==typeof e.nodeType&&"function"!==typeof e.item},_=function(e){return null!=e&&e===e.window},b=i.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function E(e,t,n){n=n||b;var r,i,s=n.createElement("script");if(s.text=e,t)for(r in w)i=t[r]||t.getAttribute&&t.getAttribute(r),i&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function T(e){return null==e?e+"":"object"===typeof e||"function"===typeof e?d[f.call(e)]||"object":typeof e}var C="3.6.4",I=function(e,t){return new I.fn.init(e,t)};function S(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!y(e)&&!_(e)&&("array"===n||0===t||"number"===typeof t&&t>0&&t-1 in e)}I.fn=I.prototype={jquery:C,constructor:I,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=I.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return I.each(this,e)},map:function(e){return this.pushStack(I.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(I.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(I.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},I.extend=I.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"===typeof o&&(u=o,o=arguments[a]||{},a++),"object"===typeof o||y(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&o!==r&&(u&&r&&(I.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[t],s=i&&!Array.isArray(n)?[]:i||I.isPlainObject(n)?n:{},i=!1,o[t]=I.extend(u,s,r)):void 0!==r&&(o[t]=r));return o},I.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==f.call(e))&&(t=a(e),!t||(n=p.call(t,"constructor")&&t.constructor,"function"===typeof n&&g.call(n)===m))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){E(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(S(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?I.merge(n,"string"===typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:h.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],s=0,o=e.length,a=!n;s<o;s++)r=!t(e[s],s),r!==a&&i.push(e[s]);return i},map:function(e,t,n){var r,i,s=0,o=[];if(S(e))for(r=e.length;s<r;s++)i=t(e[s],s,n),null!=i&&o.push(i);else for(s in e)i=t(e[s],s,n),null!=i&&o.push(i);return u(o)},guid:1,support:v}),"function"===typeof Symbol&&(I.fn[Symbol.iterator]=o[Symbol.iterator]),I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}));var k=
/*!
 * Sizzle CSS Selector Engine v2.3.10
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2023-02-14
 */
function(e){var t,n,r,i,s,o,a,l,u,c,h,d,f,p,g,m,v,y,_,b="sizzle"+1*new Date,w=e.document,E=0,T=0,C=le(),I=le(),S=le(),k=le(),x=function(e,t){return e===t&&(h=!0),0},A={}.hasOwnProperty,N=[],O=N.pop,D=N.push,R=N.push,L=N.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",j="[\\x20\\t\\r\\n\\f]",F="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",U="\\["+j+"*("+F+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+j+"*\\]",$=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+U+")*)|.*)\\)|)",V=new RegExp(j+"+","g"),q=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),B=new RegExp("^"+j+"*,"+j+"*"),H=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),z=new RegExp(j+"|>"),K=new RegExp($),W=new RegExp("^"+F+"$"),G={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},Q=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){d()},oe=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{R.apply(N=L.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(ke){R={apply:N.length?function(e,t){D.apply(e,L.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ae(e,t,r,i){var s,a,u,c,h,p,v,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!==typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(d(t),t=t||f,g)){if(11!==w&&(h=Z.exec(e)))if(s=h[1]){if(9===w){if(!(u=t.getElementById(s)))return r;if(u.id===s)return r.push(u),r}else if(y&&(u=y.getElementById(s))&&_(t,u)&&u.id===s)return r.push(u),r}else{if(h[2])return R.apply(r,t.getElementsByTagName(e)),r;if((s=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&(z.test(e)||H.test(e))){y=ee.test(e)&&ve(t.parentNode)||t,y===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ie):t.setAttribute("id",c=b)),p=o(e),a=p.length;while(a--)p[a]=(c?"#"+c:":scope")+" "+_e(p[a]);v=p.join(",")}try{return R.apply(r,y.querySelectorAll(v)),r}catch(E){k(e,!0)}finally{c===b&&t.removeAttribute("id")}}}return l(e.replace(q,"$1"),t,r,i)}function le(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ue(e){return e[b]=!0,e}function ce(e){var t=f.createElement("fieldset");try{return!!e(t)}catch(ke){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ue((function(t){return t=+t,ue((function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&"undefined"!==typeof e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Q.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,i,o=e?e.ownerDocument||e:w;return o!=f&&9===o.nodeType&&o.documentElement?(f=o,p=f.documentElement,g=!s(f),w!=f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",se,!1):i.attachEvent&&i.attachEvent("onunload",se)),n.scope=ce((function(e){return p.appendChild(e).appendChild(f.createElement("div")),"undefined"!==typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssHas=ce((function(){try{return f.querySelector(":has(*,:jqfake)"),!1}catch(ke){return!0}})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Y.test(f.getElementsByClassName),n.getById=ce((function(e){return p.appendChild(e).id=b,!f.getElementsByName||!f.getElementsByName(b).length})),n.getById?(r.filter["ID"]=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find["ID"]=function(e,t){if("undefined"!==typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter["ID"]=function(e){var t=e.replace(te,ne);return function(e){var n="undefined"!==typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find["ID"]=function(e,t){if("undefined"!==typeof t.getElementById&&g){var n,r,i,s=t.getElementById(e);if(s){if(n=s.getAttributeNode("id"),n&&n.value===e)return[s];i=t.getElementsByName(e),r=0;while(s=i[r++])if(n=s.getAttributeNode("id"),n&&n.value===e)return[s]}return[]}}),r.find["TAG"]=n.getElementsByTagName?function(e,t){return"undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if("*"===e){while(n=s[i++])1===n.nodeType&&r.push(n);return r}return s},r.find["CLASS"]=n.getElementsByClassName&&function(e,t){if("undefined"!==typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Y.test(f.querySelectorAll))&&(ce((function(e){var t;p.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+j+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+j+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),t=f.createElement("input"),t.setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+j+"*name"+j+"*="+j+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+j+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Y.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",$)})),n.cssHas||m.push(":has"),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Y.test(p.compareDocumentPosition),_=t||Y.test(p.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},x=t?function(e,t){if(e===t)return h=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==w&&_(w,e)?-1:t==f||t.ownerDocument==w&&_(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,r=0,i=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!i||!s)return e==f?-1:t==f?1:i?-1:s?1:c?P(c,e)-P(c,t):0;if(i===s)return de(e,t);n=e;while(n=n.parentNode)o.unshift(n);n=t;while(n=n.parentNode)a.unshift(n);while(o[r]===a[r])r++;return r?de(o[r],a[r]):o[r]==w?-1:a[r]==w?1:0},f):f},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(ke){k(t,!0)}return ae(t,f,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=f&&d(e),_(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=f&&d(e);var i=r.attrHandle[t.toLowerCase()],s=i&&A.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==s?s:n.attributes||!g?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,s=0;if(h=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(x),h){while(t=e[s++])t===e[s]&&(i=r.push(s));while(i--)e.splice(r[i],1)}return c=null,e},i=ae.getText=function(e){var t,n="",r=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"===typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===s||4===s)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},r=ae.selectors={cacheLength:50,createPseudo:ue,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&K.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=new RegExp("(^|"+j+")"+e+"("+j+"|$)"))&&C(e,(function(e){return t.test("string"===typeof e.className&&e.className||"undefined"!==typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(V," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,_=!1;if(m){if(s){while(g){d=t;while(d=d[g])if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){d=m,h=d[b]||(d[b]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),u=c[e]||[],f=u[0]===E&&u[1],_=f&&u[2],d=f&&m.childNodes[f];while(d=++f&&d&&d[g]||(_=f=0)||p.pop())if(1===d.nodeType&&++_&&d===t){c[e]=[E,f,_];break}}else if(y&&(d=t,h=d[b]||(d[b]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),u=c[e]||[],f=u[0]===E&&u[1],_=f),!1===_)while(d=++f&&d&&d[g]||(_=f=0)||p.pop())if((a?d.nodeName.toLowerCase()===v:1===d.nodeType)&&++_&&(y&&(h=d[b]||(d[b]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),c[e]=[E,_]),d===t))break;return _-=i,_===r||_%r===0&&_/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue((function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=P(e,s[o]),e[r]=!(n[r]=s[o])})):function(e){return i(e,0,n)}):i}},pseudos:{not:ue((function(e){var t=[],n=[],r=a(e.replace(q,"$1"));return r[b]?ue((function(e,t,n,i){var s,o=r(e,null,i,[]),a=e.length;while(a--)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,i,s){return t[0]=e,r(t,null,s,n),t[0]=null,!n.pop()}})),has:ue((function(e){return function(t){return ae(e,t).length>0}})),contains:ue((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:ue((function(e){return W.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return X.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos["nth"]=r.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}function _e(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,s=i||r,o=n&&"parentNode"===s,a=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i);return!1}:function(t,n,l){var u,c,h,d=[E,a];if(l){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,l))return!0}else while(t=t[r])if(1===t.nodeType||o)if(h=t[b]||(t[b]={}),c=h[t.uniqueID]||(h[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=c[s])&&u[0]===E&&u[1]===a)return d[2]=u[2];if(c[s]=d,d[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ee(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n);return n}function Te(e,t,n,r,i){for(var s,o=[],a=0,l=e.length,u=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,r,i)||(o.push(s),u&&t.push(a)));return o}function Ce(e,t,n,r,i,s){return r&&!r[b]&&(r=Ce(r)),i&&!i[b]&&(i=Ce(i,s)),ue((function(s,o,a,l){var u,c,h,d=[],f=[],p=o.length,g=s||Ee(t||"*",a.nodeType?[a]:a,[]),m=!e||!s&&t?g:Te(g,d,e,a,l),v=n?i||(s?e:p||r)?[]:o:m;if(n&&n(m,v,a,l),r){u=Te(v,f),r(u,[],a,l),c=u.length;while(c--)(h=u[c])&&(v[f[c]]=!(m[f[c]]=h))}if(s){if(i||e){if(i){u=[],c=v.length;while(c--)(h=v[c])&&u.push(m[c]=h);i(null,v=[],u,l)}c=v.length;while(c--)(h=v[c])&&(u=i?P(s,h):d[c])>-1&&(s[u]=!(o[u]=h))}}else v=Te(v===o?v.splice(p,v.length):v),i?i(null,o,v,l):R.apply(o,v)}))}function Ie(e){for(var t,n,i,s=e.length,o=r.relative[e[0].type],a=o||r.relative[" "],l=o?1:0,c=be((function(e){return e===t}),a,!0),h=be((function(e){return P(t,e)>-1}),a,!0),d=[function(e,n,r){var i=!o&&(r||n!==u)||((t=n).nodeType?c(e,n,r):h(e,n,r));return t=null,i}];l<s;l++)if(n=r.relative[e[l].type])d=[be(we(d),n)];else{if(n=r.filter[e[l].type].apply(null,e[l].matches),n[b]){for(i=++l;i<s;i++)if(r.relative[e[i].type])break;return Ce(l>1&&we(d),l>1&&_e(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(q,"$1"),n,l<i&&Ie(e.slice(l,i)),i<s&&Ie(e=e.slice(i)),i<s&&_e(e))}d.push(n)}return we(d)}function Se(e,t){var n=t.length>0,i=e.length>0,s=function(s,o,a,l,c){var h,p,m,v=0,y="0",_=s&&[],b=[],w=u,T=s||i&&r.find["TAG"]("*",c),C=E+=null==w?1:Math.random()||.1,I=T.length;for(c&&(u=o==f||o||c);y!==I&&null!=(h=T[y]);y++){if(i&&h){p=0,o||h.ownerDocument==f||(d(h),a=!g);while(m=e[p++])if(m(h,o||f,a)){l.push(h);break}c&&(E=C)}n&&((h=!m&&h)&&v--,s&&_.push(h))}if(v+=y,n&&y!==v){p=0;while(m=t[p++])m(_,b,o,a);if(s){if(v>0)while(y--)_[y]||b[y]||(b[y]=O.call(l));b=Te(b)}R.apply(l,b),c&&!s&&b.length>0&&v+t.length>1&&ae.uniqueSort(l)}return c&&(E=C,u=w),_};return n?ue(s):s}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,o=ae.tokenize=function(e,t){var n,i,s,o,a,l,u,c=I[e+" "];if(c)return t?0:c.slice(0);a=e,l=[],u=r.preFilter;while(a){for(o in n&&!(i=B.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(s=[])),n=!1,(i=H.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(q," ")}),a=a.slice(n.length)),r.filter)!(i=G[o].exec(a))||u[o]&&!(i=u[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):I(e,l).slice(0)},a=ae.compile=function(e,t){var n,r=[],i=[],s=S[e+" "];if(!s){t||(t=o(e)),n=t.length;while(n--)s=Ie(t[n]),s[b]?r.push(s):i.push(s);s=S(e,Se(i,r)),s.selector=e}return s},l=ae.select=function(e,t,n,i){var s,l,u,c,h,d="function"===typeof e&&e,f=!i&&o(e=d.selector||e);if(n=n||[],1===f.length){if(l=f[0]=f[0].slice(0),l.length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&g&&r.relative[l[1].type]){if(t=(r.find["ID"](u.matches[0].replace(te,ne),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}s=G["needsContext"].test(e)?0:l.length;while(s--){if(u=l[s],r.relative[c=u.type])break;if((h=r.find[c])&&(i=h(u.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(s,1),e=i.length&&_e(l),!e)return R.apply(n,i),n;break}}}return(d||a(e,f))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=b.split("").sort(x).join("")===b,n.detectDuplicates=!!h,d(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||he("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||he("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||he(M,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(i);I.find=k,I.expr=k.selectors,I.expr[":"]=I.expr.pseudos,I.uniqueSort=I.unique=k.uniqueSort,I.text=k.getText,I.isXMLDoc=k.isXML,I.contains=k.contains,I.escapeSelector=k.escape;var x=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&I(e).is(n))break;r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=I.expr.match.needsContext;function O(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function R(e,t,n){return y(t)?I.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?I.grep(e,(function(e){return e===t!==n})):"string"!==typeof t?I.grep(e,(function(e){return h.call(t,e)>-1!==n})):I.filter(t,e,n)}I.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?I.find.matchesSelector(r,e)?[r]:[]:I.find.matches(e,I.grep(t,(function(e){return 1===e.nodeType})))},I.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!==typeof e)return this.pushStack(I(e).filter((function(){for(t=0;t<r;t++)if(I.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)I.find(e,i[t],n);return r>1?I.uniqueSort(n):n},filter:function(e){return this.pushStack(R(this,e||[],!1))},not:function(e){return this.pushStack(R(this,e||[],!0))},is:function(e){return!!R(this,"string"===typeof e&&N.test(e)?I(e):e||[],!1).length}});var L,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,M=I.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||L,"string"===typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof I?t[0]:t,I.merge(this,I.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),D.test(r[1])&&I.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=b.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(I):I.makeArray(e,this)};M.prototype=I.fn,L=I(b);var j=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};function U(e,t){while((e=e[t])&&1!==e.nodeType);return e}I.fn.extend({has:function(e){var t=I(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(I.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,s=[],o="string"!==typeof e&&I(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&I.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?I.uniqueSort(s):s)},index:function(e){return e?"string"===typeof e?h.call(I(e),this[0]):h.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(I.uniqueSort(I.merge(this.get(),I(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),I.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return U(e,"nextSibling")},prev:function(e){return U(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return null!=e.contentDocument&&a(e.contentDocument)?e.contentDocument:(O(e,"template")&&(e=e.content||e),I.merge([],e.childNodes))}},(function(e,t){I.fn[e]=function(n,r){var i=I.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"===typeof r&&(i=I.filter(r,i)),this.length>1&&(F[e]||I.uniqueSort(i),j.test(e)&&i.reverse()),this.pushStack(i)}}));var $=/[^\x20\t\r\n\f]+/g;function V(e){var t={};return I.each(e.match($)||[],(function(e,n){t[n]=!0})),t}function q(e){return e}function B(e){throw e}function H(e,t,n,r){var i;try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}I.Callbacks=function(e){e="string"===typeof e?V(e):I.extend({},e);var t,n,r,i,s=[],o=[],a=-1,l=function(){for(i=i||e.once,r=t=!0;o.length;a=-1){n=o.shift();while(++a<s.length)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1)}e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},u={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){I.each(n,(function(n,r){y(r)?e.unique&&u.has(r)||s.push(r):r&&r.length&&"string"!==T(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return I.each(arguments,(function(e,t){var n;while((n=I.inArray(t,s,n))>-1)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?I.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}};return u},I.extend({Deferred:function(e){var t=[["notify","progress",I.Callbacks("memory"),I.Callbacks("memory"),2],["resolve","done",I.Callbacks("once memory"),I.Callbacks("once memory"),0,"resolved"],["reject","fail",I.Callbacks("once memory"),I.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return I.Deferred((function(n){I.each(t,(function(t,r){var i=y(e[r[4]])&&e[r[4]];s[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,r){var s=0;function o(e,t,n,r){return function(){var a=this,l=arguments,u=function(){var i,u;if(!(e<s)){if(i=n.apply(a,l),i===t.promise())throw new TypeError("Thenable self-resolution");u=i&&("object"===typeof i||"function"===typeof i)&&i.then,y(u)?r?u.call(i,o(s,t,q,r),o(s,t,B,r)):(s++,u.call(i,o(s,t,q,r),o(s,t,B,r),o(s,t,q,t.notifyWith))):(n!==q&&(a=void 0,l=[i]),(r||t.resolveWith)(a,l))}},c=r?u:function(){try{u()}catch(r){I.Deferred.exceptionHook&&I.Deferred.exceptionHook(r,c.stackTrace),e+1>=s&&(n!==B&&(a=void 0,l=[r]),t.rejectWith(a,l))}};e?c():(I.Deferred.getStackHook&&(c.stackTrace=I.Deferred.getStackHook()),i.setTimeout(c))}}return I.Deferred((function(i){t[0][3].add(o(0,i,y(r)?r:q,i.notifyWith)),t[1][3].add(o(0,i,y(e)?e:q)),t[2][3].add(o(0,i,y(n)?n:B))})).promise()},promise:function(e){return null!=e?I.extend(e,r):r}},s={};return I.each(t,(function(e,i){var o=i[2],a=i[5];r[i[1]]=o.add,a&&o.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(i[3].fire),s[i[0]]=function(){return s[i[0]+"With"](this===s?void 0:this,arguments),this},s[i[0]+"With"]=o.fireWith})),r.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),i=l.call(arguments),s=I.Deferred(),o=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?l.call(arguments):n,--t||s.resolveWith(r,i)}};if(t<=1&&(H(e,s.done(o(n)).resolve,s.reject,!t),"pending"===s.state()||y(i[n]&&i[n].then)))return s.then();while(n--)H(i[n],o(n),s.reject);return s.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;I.Deferred.exceptionHook=function(e,t){i.console&&i.console.warn&&e&&z.test(e.name)&&i.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},I.readyException=function(e){i.setTimeout((function(){throw e}))};var K=I.Deferred();function W(){b.removeEventListener("DOMContentLoaded",W),i.removeEventListener("load",W),I.ready()}I.fn.ready=function(e){return K.then(e).catch((function(e){I.readyException(e)})),this},I.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--I.readyWait:I.isReady)||(I.isReady=!0,!0!==e&&--I.readyWait>0||K.resolveWith(b,[I]))}}),I.ready.then=K.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?i.setTimeout(I.ready):(b.addEventListener("DOMContentLoaded",W),i.addEventListener("load",W));var G=function(e,t,n,r,i,s,o){var a=0,l=e.length,u=null==n;if("object"===T(n))for(a in i=!0,n)G(e,t,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,y(r)||(o=!0),u&&(o?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(I(e),n)})),t))for(;a<l;a++)t(e[a],n,o?r:r.call(e[a],a,t(e[a],n)));return i?e:u?t.call(e):l?t(e[0],n):s},Q=/^-ms-/,J=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function Y(e){return e.replace(Q,"ms-").replace(J,X)}var Z=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function ee(){this.expando=I.expando+ee.uid++}ee.uid=1,ee.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Z(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"===typeof t)i[Y(t)]=n;else for(r in t)i[Y(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Y(t)]},access:function(e,t,n){return void 0===t||t&&"string"===typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(Y):(t=Y(t),t=t in r?[t]:t.match($)||[]),n=t.length;while(n--)delete r[t[n]]}(void 0===t||I.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!I.isEmptyObject(t)}};var te=new ee,ne=new ee,re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ie=/[A-Z]/g;function se(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:re.test(e)?JSON.parse(e):e)}function oe(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ie,"-$&").toLowerCase(),n=e.getAttribute(r),"string"===typeof n){try{n=se(n)}catch(i){}ne.set(e,t,n)}else n=void 0;return n}I.extend({hasData:function(e){return ne.hasData(e)||te.hasData(e)},data:function(e,t,n){return ne.access(e,t,n)},removeData:function(e,t){ne.remove(e,t)},_data:function(e,t,n){return te.access(e,t,n)},_removeData:function(e,t){te.remove(e,t)}}),I.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=ne.get(s),1===s.nodeType&&!te.get(s,"hasDataAttrs"))){n=o.length;while(n--)o[n]&&(r=o[n].name,0===r.indexOf("data-")&&(r=Y(r.slice(5)),oe(s,r,i[r])));te.set(s,"hasDataAttrs",!0)}return i}return"object"===typeof e?this.each((function(){ne.set(this,e)})):G(this,(function(t){var n;if(s&&void 0===t)return n=ne.get(s,e),void 0!==n?n:(n=oe(s,e),void 0!==n?n:void 0);this.each((function(){ne.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ne.remove(this,e)}))}}),I.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=te.get(e,t),n&&(!r||Array.isArray(n)?r=te.access(e,t,I.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=I.queue(e,t),r=n.length,i=n.shift(),s=I._queueHooks(e,t),o=function(){I.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return te.get(e,n)||te.access(e,n,{empty:I.Callbacks("once memory").add((function(){te.remove(e,[t+"queue",n])}))})}}),I.fn.extend({queue:function(e,t){var n=2;return"string"!==typeof e&&(t=e,e="fx",n--),arguments.length<n?I.queue(this[0],e):void 0===t?this:this.each((function(){var n=I.queue(this,e,t);I._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&I.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){I.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=I.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};"string"!==typeof e&&(t=e,e=void 0),e=e||"fx";while(o--)n=te.get(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ae=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,le=new RegExp("^(?:([+-])=|)("+ae+")([a-z%]*)$","i"),ue=["Top","Right","Bottom","Left"],ce=b.documentElement,he=function(e){return I.contains(e.ownerDocument,e)},de={composed:!0};ce.getRootNode&&(he=function(e){return I.contains(e.ownerDocument,e)||e.getRootNode(de)===e.ownerDocument});var fe=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&he(e)&&"none"===I.css(e,"display")};function pe(e,t,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return I.css(e,t,"")},l=a(),u=n&&n[3]||(I.cssNumber[t]?"":"px"),c=e.nodeType&&(I.cssNumber[t]||"px"!==u&&+l)&&le.exec(I.css(e,t));if(c&&c[3]!==u){l/=2,u=u||c[3],c=+l||1;while(o--)I.style(e,t,c+u),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),c/=s;c*=2,I.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}var ge={};function me(e){var t,n=e.ownerDocument,r=e.nodeName,i=ge[r];return i||(t=n.body.appendChild(n.createElement(r)),i=I.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ge[r]=i,i)}function ve(e,t){for(var n,r,i=[],s=0,o=e.length;s<o;s++)r=e[s],r.style&&(n=r.style.display,t?("none"===n&&(i[s]=te.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&fe(r)&&(i[s]=me(r))):"none"!==n&&(i[s]="none",te.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(e[s].style.display=i[s]);return e}I.fn.extend({show:function(){return ve(this,!0)},hide:function(){return ve(this)},toggle:function(e){return"boolean"===typeof e?e?this.show():this.hide():this.each((function(){fe(this)?I(this).show():I(this).hide()}))}});var ye=/^(?:checkbox|radio)$/i,_e=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,be=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=b.createDocumentFragment(),t=e.appendChild(b.createElement("div")),n=b.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),v.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",v.option=!!t.lastChild})();var we={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Ee(e,t){var n;return n="undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!==typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&O(e,t)?I.merge([e],n):n}function Te(e,t){for(var n=0,r=e.length;n<r;n++)te.set(e[n],"globalEval",!t||te.get(t[n],"globalEval"))}we.tbody=we.tfoot=we.colgroup=we.caption=we.thead,we.th=we.td,v.option||(we.optgroup=we.option=[1,"<select multiple='multiple'>","</select>"]);var Ce=/<|&#?\w+;/;function Ie(e,t,n,r,i){for(var s,o,a,l,u,c,h=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if(s=e[f],s||0===s)if("object"===T(s))I.merge(d,s.nodeType?[s]:s);else if(Ce.test(s)){o=o||h.appendChild(t.createElement("div")),a=(_e.exec(s)||["",""])[1].toLowerCase(),l=we[a]||we._default,o.innerHTML=l[1]+I.htmlPrefilter(s)+l[2],c=l[0];while(c--)o=o.lastChild;I.merge(d,o.childNodes),o=h.firstChild,o.textContent=""}else d.push(t.createTextNode(s));h.textContent="",f=0;while(s=d[f++])if(r&&I.inArray(s,r)>-1)i&&i.push(s);else if(u=he(s),o=Ee(h.appendChild(s),"script"),u&&Te(o),n){c=0;while(s=o[c++])be.test(s.type||"")&&n.push(s)}return h}var Se=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function xe(){return!1}function Ae(e,t){return e===Ne()===("focus"===t)}function Ne(){try{return b.activeElement}catch(e){}}function Oe(e,t,n,r,i,s){var o,a;if("object"===typeof t){for(a in"string"!==typeof n&&(r=r||n,n=void 0),t)Oe(e,a,n,r,t[a],s);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"===typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=xe;else if(!i)return e;return 1===s&&(o=i,i=function(e){return I().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=I.guid++)),e.each((function(){I.event.add(this,t,i,r,n)}))}function De(e,t,n){n?(te.set(e,t,!1),I.event.add(e,t,{namespace:!1,handler:function(e){var r,i,s=te.get(this,t);if(1&e.isTrigger&&this[t]){if(s.length)(I.event.special[t]||{}).delegateType&&e.stopPropagation();else if(s=l.call(arguments),te.set(this,t,s),r=n(this,t),this[t](),i=te.get(this,t),s!==i||r?te.set(this,t,!1):i={},s!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else s.length&&(te.set(this,t,{value:I.event.trigger(I.extend(s[0],I.Event.prototype),s.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===te.get(e,t)&&I.event.add(e,t,ke)}I.event={global:{},add:function(e,t,n,r,i){var s,o,a,l,u,c,h,d,f,p,g,m=te.get(e);if(Z(e)){n.handler&&(s=n,n=s.handler,i=s.selector),i&&I.find.matchesSelector(ce,i),n.guid||(n.guid=I.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return"undefined"!==typeof I&&I.event.triggered!==t.type?I.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match($)||[""],u=t.length;while(u--)a=Se.exec(t[u])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f&&(h=I.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=I.event.special[f]||{},c=I.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&I.expr.match.needsContext.test(i),namespace:p.join(".")},s),(d=l[f])||(d=l[f]=[],d.delegateCount=0,h.setup&&!1!==h.setup.call(e,r,p,o)||e.addEventListener&&e.addEventListener(f,o)),h.add&&(h.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),I.event.global[f]=!0)}},remove:function(e,t,n,r,i){var s,o,a,l,u,c,h,d,f,p,g,m=te.hasData(e)&&te.get(e);if(m&&(l=m.events)){t=(t||"").match($)||[""],u=t.length;while(u--)if(a=Se.exec(t[u])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f){h=I.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,d=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;while(s--)c=d[s],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(s,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(e,c));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||I.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)I.event.remove(e,f+t[u],n,r,!0);I.isEmptyObject(l)&&te.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,s,o,a=new Array(arguments.length),l=I.event.fix(e),u=(te.get(this,"events")||Object.create(null))[l.type]||[],c=I.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){o=I.event.handlers.call(this,l,u),t=0;while((i=o[t++])&&!l.isPropagationStopped()){l.currentTarget=i.elem,n=0;while((s=i.handlers[n++])&&!l.isImmediatePropagationStopped())l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,r=((I.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a),void 0!==r&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,s,o,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(s=[],o={},n=0;n<l;n++)r=t[n],i=r.selector+" ",void 0===o[i]&&(o[i]=r.needsContext?I(i,this).index(u)>-1:I.find(i,this,null,[u]).length),o[i]&&s.push(r);s.length&&a.push({elem:u,handlers:s})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(I.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[I.expando]?e:new I.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ye.test(t.type)&&t.click&&O(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return ye.test(t.type)&&t.click&&O(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return ye.test(t.type)&&t.click&&O(t,"input")&&te.get(t,"click")||O(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},I.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},I.Event=function(e,t){if(!(this instanceof I.Event))return new I.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:xe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&I.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[I.expando]=!0},I.Event.prototype={constructor:I.Event,isDefaultPrevented:xe,isPropagationStopped:xe,isImmediatePropagationStopped:xe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},I.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},I.event.addProp),I.each({focus:"focusin",blur:"focusout"},(function(e,t){I.event.special[e]={setup:function(){return De(this,e,Ae),!1},trigger:function(){return De(this,e),!0},_default:function(t){return te.get(t.target,e)},delegateType:t}})),I.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){I.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;return i&&(i===r||I.contains(r,i))||(e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t),n}}})),I.fn.extend({on:function(e,t,n,r){return Oe(this,e,t,n,r)},one:function(e,t,n,r){return Oe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,I(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!==typeof t||(n=t,t=void 0),!1===n&&(n=xe),this.each((function(){I.event.remove(this,e,n,t)}))}});var Re=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Me(e,t){return O(e,"table")&&O(11!==t.nodeType?t:t.firstChild,"tr")&&I(e).children("tbody")[0]||e}function je(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Fe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ue(e,t){var n,r,i,s,o,a,l;if(1===t.nodeType){if(te.hasData(e)&&(s=te.get(e),l=s.events,l))for(i in te.remove(t,"handle events"),l)for(n=0,r=l[i].length;n<r;n++)I.event.add(t,i,l[i][n]);ne.hasData(e)&&(o=ne.access(e),a=I.extend({},o),ne.set(t,a))}}function $e(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ye.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Ve(e,t,n,r){t=u(t);var i,s,o,a,l,c,h=0,d=e.length,f=d-1,p=t[0],g=y(p);if(g||d>1&&"string"===typeof p&&!v.checkClone&&Le.test(p))return e.each((function(i){var s=e.eq(i);g&&(t[0]=p.call(this,i,s.html())),Ve(s,t,n,r)}));if(d&&(i=Ie(t,e[0].ownerDocument,!1,e,r),s=i.firstChild,1===i.childNodes.length&&(i=s),s||r)){for(o=I.map(Ee(i,"script"),je),a=o.length;h<d;h++)l=i,h!==f&&(l=I.clone(l,!0,!0),a&&I.merge(o,Ee(l,"script"))),n.call(e[h],l,h);if(a)for(c=o[o.length-1].ownerDocument,I.map(o,Fe),h=0;h<a;h++)l=o[h],be.test(l.type||"")&&!te.access(l,"globalEval")&&I.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?I._evalUrl&&!l.noModule&&I._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):E(l.textContent.replace(Pe,""),l,c))}return e}function qe(e,t,n){for(var r,i=t?I.filter(t,e):e,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||I.cleanData(Ee(r)),r.parentNode&&(n&&he(r)&&Te(Ee(r,"script")),r.parentNode.removeChild(r));return e}I.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,s,o,a=e.cloneNode(!0),l=he(e);if(!v.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!I.isXMLDoc(e))for(o=Ee(a),s=Ee(e),r=0,i=s.length;r<i;r++)$e(s[r],o[r]);if(t)if(n)for(s=s||Ee(e),o=o||Ee(a),r=0,i=s.length;r<i;r++)Ue(s[r],o[r]);else Ue(e,a);return o=Ee(a,"script"),o.length>0&&Te(o,!l&&Ee(e,"script")),a},cleanData:function(e){for(var t,n,r,i=I.event.special,s=0;void 0!==(n=e[s]);s++)if(Z(n)){if(t=n[te.expando]){if(t.events)for(r in t.events)i[r]?I.event.remove(n,r):I.removeEvent(n,r,t.handle);n[te.expando]=void 0}n[ne.expando]&&(n[ne.expando]=void 0)}}}),I.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return G(this,(function(e){return void 0===e?I.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.appendChild(e)}}))},prepend:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(I.cleanData(Ee(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return I.clone(this,e,t)}))},html:function(e){return G(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"===typeof e&&!Re.test(e)&&!we[(_e.exec(e)||["",""])[1].toLowerCase()]){e=I.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(I.cleanData(Ee(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,(function(t){var n=this.parentNode;I.inArray(this,e)<0&&(I.cleanData(Ee(this)),n&&n.replaceChild(t,this))}),e)}}),I.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){I.fn[e]=function(e){for(var n,r=[],i=I(e),s=i.length-1,o=0;o<=s;o++)n=o===s?this:this.clone(!0),I(i[o])[t](n),c.apply(r,n.get());return this.pushStack(r)}}));var Be=new RegExp("^("+ae+")(?!px)[a-z%]+$","i"),He=/^--/,ze=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},Ke=function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=s[i];return r},We=new RegExp(ue.join("|"),"i"),Ge="[\\x20\\t\\r\\n\\f]",Qe=new RegExp("^"+Ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ge+"+$","g");function Je(e,t,n){var r,i,s,o,a=He.test(t),l=e.style;return n=n||ze(e),n&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(Qe,"$1")||void 0),""!==o||he(e)||(o=I.style(e,t)),!v.pixelBoxStyles()&&Be.test(o)&&We.test(t)&&(r=l.width,i=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=r,l.minWidth=i,l.maxWidth=s)),void 0!==o?o+"":o}function Xe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}(function(){function e(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ce.appendChild(u).appendChild(c);var e=i.getComputedStyle(c);n="1%"!==e.top,l=12===t(e.marginLeft),c.style.right="60%",o=36===t(e.right),r=36===t(e.width),c.style.position="absolute",s=12===t(c.offsetWidth/3),ce.removeChild(u),c=null}}function t(e){return Math.round(parseFloat(e))}var n,r,s,o,a,l,u=b.createElement("div"),c=b.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,I.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),s},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ce.appendChild(e).appendChild(t).appendChild(n),r=i.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,ce.removeChild(e)),a}}))})();var Ye=["Webkit","Moz","ms"],Ze=b.createElement("div").style,et={};function tt(e){var t=e[0].toUpperCase()+e.slice(1),n=Ye.length;while(n--)if(e=Ye[n]+t,e in Ze)return e}function nt(e){var t=I.cssProps[e]||et[e];return t||(e in Ze?e:et[e]=tt(e)||e)}var rt=/^(none|table(?!-c[ea]).+)/,it={position:"absolute",visibility:"hidden",display:"block"},st={letterSpacing:"0",fontWeight:"400"};function ot(e,t,n){var r=le.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function at(e,t,n,r,i,s){var o="width"===t?1:0,a=0,l=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=I.css(e,n+ue[o],!0,i)),r?("content"===n&&(l-=I.css(e,"padding"+ue[o],!0,i)),"margin"!==n&&(l-=I.css(e,"border"+ue[o]+"Width",!0,i))):(l+=I.css(e,"padding"+ue[o],!0,i),"padding"!==n?l+=I.css(e,"border"+ue[o]+"Width",!0,i):a+=I.css(e,"border"+ue[o]+"Width",!0,i));return!r&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l}function lt(e,t,n){var r=ze(e),i=!v.boxSizingReliable()||n,s=i&&"border-box"===I.css(e,"boxSizing",!1,r),o=s,a=Je(e,t,r),l="offset"+t[0].toUpperCase()+t.slice(1);if(Be.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&s||!v.reliableTrDimensions()&&O(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===I.css(e,"display",!1,r))&&e.getClientRects().length&&(s="border-box"===I.css(e,"boxSizing",!1,r),o=l in e,o&&(a=e[l])),a=parseFloat(a)||0,a+at(e,t,n||(s?"border":"content"),o,r,a)+"px"}function ut(e,t,n,r,i){return new ut.prototype.init(e,t,n,r,i)}I.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,a=Y(t),l=He.test(t),u=e.style;if(l||(t=nt(a)),o=I.cssHooks[t]||I.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:u[t];s=typeof n,"string"===s&&(i=le.exec(n))&&i[1]&&(n=pe(e,t,i),s="number"),null!=n&&n===n&&("number"!==s||l||(n+=i&&i[3]||(I.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,s,o,a=Y(t),l=He.test(t);return l||(t=nt(a)),o=I.cssHooks[t]||I.cssHooks[a],o&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=Je(e,t,r)),"normal"===i&&t in st&&(i=st[t]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),I.each(["height","width"],(function(e,t){I.cssHooks[t]={get:function(e,n,r){if(n)return!rt.test(I.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?lt(e,t,r):Ke(e,it,(function(){return lt(e,t,r)}))},set:function(e,n,r){var i,s=ze(e),o=!v.scrollboxSize()&&"absolute"===s.position,a=o||r,l=a&&"border-box"===I.css(e,"boxSizing",!1,s),u=r?at(e,t,r,l,s):0;return l&&o&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-at(e,t,"border",!1,s)-.5)),u&&(i=le.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=I.css(e,t)),ot(e,n,u)}}})),I.cssHooks.marginLeft=Xe(v.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Je(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),I.each({margin:"",padding:"",border:"Width"},(function(e,t){I.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"===typeof n?n.split(" "):[n];r<4;r++)i[e+ue[r]+t]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(I.cssHooks[e+t].set=ot)})),I.fn.extend({css:function(e,t){return G(this,(function(e,t,n){var r,i,s={},o=0;if(Array.isArray(t)){for(r=ze(e),i=t.length;o<i;o++)s[t[o]]=I.css(e,t[o],!1,r);return s}return void 0!==n?I.style(e,t,n):I.css(e,t)}),e,t,arguments.length>1)}}),I.Tween=ut,ut.prototype={constructor:ut,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||I.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(I.cssNumber[n]?"":"px")},cur:function(){var e=ut.propHooks[this.prop];return e&&e.get?e.get(this):ut.propHooks._default.get(this)},run:function(e){var t,n=ut.propHooks[this.prop];return this.options.duration?this.pos=t=I.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ut.propHooks._default.set(this),this}},ut.prototype.init.prototype=ut.prototype,ut.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=I.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){I.fx.step[e.prop]?I.fx.step[e.prop](e):1!==e.elem.nodeType||!I.cssHooks[e.prop]&&null==e.elem.style[nt(e.prop)]?e.elem[e.prop]=e.now:I.style(e.elem,e.prop,e.now+e.unit)}}},ut.propHooks.scrollTop=ut.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},I.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},I.fx=ut.prototype.init,I.fx.step={};var ct,ht,dt=/^(?:toggle|show|hide)$/,ft=/queueHooks$/;function pt(){ht&&(!1===b.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(pt):i.setTimeout(pt,I.fx.interval),I.fx.tick())}function gt(){return i.setTimeout((function(){ct=void 0})),ct=Date.now()}function mt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=ue[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(bt.tweeners[t]||[]).concat(bt.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,t,e))return r}function yt(e,t,n){var r,i,s,o,a,l,u,c,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&fe(e),m=te.get(e,"fxshow");for(r in n.queue||(o=I._queueHooks(e,"fx"),null==o.unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,I.queue(e,"fx").length||o.empty.fire()}))}))),t)if(i=t[r],dt.test(i)){if(delete t[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||I.style(e,r)}if(l=!I.isEmptyObject(t),l||!I.isEmptyObject(f))for(r in h&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=m&&m.display,null==u&&(u=te.get(e,"display")),c=I.css(e,"display"),"none"===c&&(u?c=u:(ve([e],!0),u=e.style.display||u,c=I.css(e,"display"),ve([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===I.css(e,"float")&&(l||(d.done((function(){p.display=u})),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=te.access(e,"fxshow",{display:u}),s&&(m.hidden=!g),g&&ve([e],!0),d.done((function(){for(r in g||ve([e]),te.remove(e,"fxshow"),f)I.style(e,r,f[r])}))),l=vt(g?m[r]:0,r,d),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}function _t(e,t){var n,r,i,s,o;for(n in e)if(r=Y(n),i=t[r],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=I.cssHooks[r],o&&"expand"in o)for(n in s=o.expand(s),delete e[r],s)n in e||(e[n]=s[n],t[n]=i);else t[r]=i}function bt(e,t,n){var r,i,s=0,o=bt.prefilters.length,a=I.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=ct||gt(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,s=1-r,o=0,l=u.tweens.length;o<l;o++)u.tweens[o].run(s);return a.notifyWith(e,[u,s,n]),s<1&&l?n:(l||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:I.extend({},t),opts:I.extend(!0,{specialEasing:{},easing:I.easing._default},n),originalProperties:t,originalOptions:n,startTime:ct||gt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=I.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(_t(c,u.opts.specialEasing);s<o;s++)if(r=bt.prefilters[s].call(u,e,c,u.opts),r)return y(r.stop)&&(I._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return I.map(c,vt,u),y(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),I.fx.timer(I.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}I.Animation=I.extend(bt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return pe(n.elem,e,le.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match($);for(var n,r=0,i=e.length;r<i;r++)n=e[r],bt.tweeners[n]=bt.tweeners[n]||[],bt.tweeners[n].unshift(t)},prefilters:[yt],prefilter:function(e,t){t?bt.prefilters.unshift(e):bt.prefilters.push(e)}}),I.speed=function(e,t,n){var r=e&&"object"===typeof e?I.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return I.fx.off?r.duration=0:"number"!==typeof r.duration&&(r.duration in I.fx.speeds?r.duration=I.fx.speeds[r.duration]:r.duration=I.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&I.dequeue(this,r.queue)},r},I.fn.extend({fadeTo:function(e,t,n,r){return this.filter(fe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=I.isEmptyObject(e),s=I.speed(t,n,r),o=function(){var t=bt(this,I.extend({},e),s);(i||te.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!==typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",s=I.timers,o=te.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&ft.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));!t&&n||I.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=I.timers,o=r?r.length:0;for(n.finish=!0,I.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),I.each(["toggle","show","hide"],(function(e,t){var n=I.fn[t];I.fn[t]=function(e,r,i){return null==e||"boolean"===typeof e?n.apply(this,arguments):this.animate(mt(t,!0),e,r,i)}})),I.each({slideDown:mt("show"),slideUp:mt("hide"),slideToggle:mt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){I.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),I.timers=[],I.fx.tick=function(){var e,t=0,n=I.timers;for(ct=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||I.fx.stop(),ct=void 0},I.fx.timer=function(e){I.timers.push(e),I.fx.start()},I.fx.interval=13,I.fx.start=function(){ht||(ht=!0,pt())},I.fx.stop=function(){ht=null},I.fx.speeds={slow:600,fast:200,_default:400},I.fn.delay=function(e,t){return e=I.fx&&I.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var r=i.setTimeout(t,e);n.stop=function(){i.clearTimeout(r)}}))},function(){var e=b.createElement("input"),t=b.createElement("select"),n=t.appendChild(b.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=n.selected,e=b.createElement("input"),e.value="t",e.type="radio",v.radioValue="t"===e.value}();var wt,Et=I.expr.attrHandle;I.fn.extend({attr:function(e,t){return G(this,I.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){I.removeAttr(this,e)}))}}),I.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return"undefined"===typeof e.getAttribute?I.prop(e,t,n):(1===s&&I.isXMLDoc(e)||(i=I.attrHooks[t.toLowerCase()]||(I.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void I.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=I.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&O(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match($);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?I.removeAttr(e,n):e.setAttribute(n,n),n}},I.each(I.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=Et[t]||I.find.attr;Et[t]=function(e,t,r){var i,s,o=t.toLowerCase();return r||(s=Et[o],Et[o]=i,i=null!=n(e,t,r)?o:null,Et[o]=s),i}}));var Tt=/^(?:input|select|textarea|button)$/i,Ct=/^(?:a|area)$/i;function It(e){var t=e.match($)||[];return t.join(" ")}function St(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"===typeof e&&e.match($)||[]}I.fn.extend({prop:function(e,t){return G(this,I.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[I.propFix[e]||e]}))}}),I.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&I.isXMLDoc(e)||(t=I.propFix[t]||t,i=I.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=I.find.attr(e,"tabindex");return t?parseInt(t,10):Tt.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(I.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),I.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){I.propFix[this.toLowerCase()]=this})),I.fn.extend({addClass:function(e){var t,n,r,i,s,o;return y(e)?this.each((function(t){I(this).addClass(e.call(this,t,St(this)))})):(t=kt(e),t.length?this.each((function(){if(r=St(this),n=1===this.nodeType&&" "+It(r)+" ",n){for(s=0;s<t.length;s++)i=t[s],n.indexOf(" "+i+" ")<0&&(n+=i+" ");o=It(n),r!==o&&this.setAttribute("class",o)}})):this)},removeClass:function(e){var t,n,r,i,s,o;return y(e)?this.each((function(t){I(this).removeClass(e.call(this,t,St(this)))})):arguments.length?(t=kt(e),t.length?this.each((function(){if(r=St(this),n=1===this.nodeType&&" "+It(r)+" ",n){for(s=0;s<t.length;s++){i=t[s];while(n.indexOf(" "+i+" ")>-1)n=n.replace(" "+i+" "," ")}o=It(n),r!==o&&this.setAttribute("class",o)}})):this):this.attr("class","")},toggleClass:function(e,t){var n,r,i,s,o=typeof e,a="string"===o||Array.isArray(e);return y(e)?this.each((function(n){I(this).toggleClass(e.call(this,n,St(this),t),t)})):"boolean"===typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=kt(e),this.each((function(){if(a)for(s=I(this),i=0;i<n.length;i++)r=n[i],s.hasClass(r)?s.removeClass(r):s.addClass(r);else void 0!==e&&"boolean"!==o||(r=St(this),r&&te.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":te.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+It(St(n))+" ").indexOf(t)>-1)return!0;return!1}});var xt=/\r/g;I.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=y(e),this.each((function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,I(this).val()):e,null==i?i="":"number"===typeof i?i+="":Array.isArray(i)&&(i=I.map(i,(function(e){return null==e?"":e+""}))),t=I.valHooks[this.type]||I.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=I.valHooks[i.type]||I.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"===typeof n?n.replace(xt,""):null==n?"":n)):void 0}}),I.extend({valHooks:{option:{get:function(e){var t=I.find.attr(e,"value");return null!=t?t:It(I.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:i.length;for(r=s<0?l:o?s:0;r<l;r++)if(n=i[r],(n.selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(t=I(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,s=I.makeArray(t),o=i.length;while(o--)r=i[o],(r.selected=I.inArray(I.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),I.each(["radio","checkbox"],(function(){I.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=I.inArray(I(e).val(),t)>-1}},v.checkOn||(I.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),v.focusin="onfocusin"in i;var At=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};I.extend(I.event,{trigger:function(e,t,n,r){var s,o,a,l,u,c,h,d,f=[n||b],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[];if(o=d=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!At.test(g+I.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),u=g.indexOf(":")<0&&"on"+g,e=e[I.expando]?e:new I.Event(g,"object"===typeof e&&e),e.isTrigger=r?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:I.makeArray(t,[e]),h=I.event.special[g]||{},r||!h.trigger||!1!==h.trigger.apply(n,t))){if(!r&&!h.noBubble&&!_(n)){for(l=h.delegateType||g,At.test(l+g)||(o=o.parentNode);o;o=o.parentNode)f.push(o),a=o;a===(n.ownerDocument||b)&&f.push(a.defaultView||a.parentWindow||i)}s=0;while((o=f[s++])&&!e.isPropagationStopped())d=o,e.type=s>1?l:h.bindType||g,c=(te.get(o,"events")||Object.create(null))[e.type]&&te.get(o,"handle"),c&&c.apply(o,t),c=u&&o[u],c&&c.apply&&Z(o)&&(e.result=c.apply(o,t),!1===e.result&&e.preventDefault());return e.type=g,r||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),t)||!Z(n)||u&&y(n[g])&&!_(n)&&(a=n[u],a&&(n[u]=null),I.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,Nt),n[g](),e.isPropagationStopped()&&d.removeEventListener(g,Nt),I.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=I.extend(new I.Event,n,{type:e,isSimulated:!0});I.event.trigger(r,null,t)}}),I.fn.extend({trigger:function(e,t){return this.each((function(){I.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return I.event.trigger(e,t,n,!0)}}),v.focusin||I.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){I.event.simulate(t,e.target,I.event.fix(e))};I.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=te.access(r,t);i||r.addEventListener(e,n,!0),te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=te.access(r,t)-1;i?te.access(r,t,i):(r.removeEventListener(e,n,!0),te.remove(r,t))}}}));var Ot=i.location,Dt={guid:Date.now()},Rt=/\?/;I.parseXML=function(e){var t,n;if(!e||"string"!==typeof e)return null;try{t=(new i.DOMParser).parseFromString(e,"text/xml")}catch(r){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||I.error("Invalid XML: "+(n?I.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var Lt=/\[\]$/,Pt=/\r?\n/g,Mt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function Ft(e,t,n,r){var i;if(Array.isArray(t))I.each(t,(function(t,i){n||Lt.test(e)?r(e,i):Ft(e+"["+("object"===typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==T(t))r(e,t);else for(i in t)Ft(e+"["+i+"]",t[i],n,r)}I.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!I.isPlainObject(e))I.each(e,(function(){i(this.name,this.value)}));else for(n in e)Ft(n,e[n],t,i);return r.join("&")},I.fn.extend({serialize:function(){return I.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=I.prop(this,"elements");return e?I.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!I(this).is(":disabled")&&jt.test(this.nodeName)&&!Mt.test(e)&&(this.checked||!ye.test(e))})).map((function(e,t){var n=I(this).val();return null==n?null:Array.isArray(n)?I.map(n,(function(e){return{name:t.name,value:e.replace(Pt,"\r\n")}})):{name:t.name,value:n.replace(Pt,"\r\n")}})).get()}});var Ut=/%20/g,$t=/#.*$/,Vt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,zt=/^\/\//,Kt={},Wt={},Gt="*/".concat("*"),Qt=b.createElement("a");function Jt(e){return function(t,n){"string"!==typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match($)||[];if(y(n))while(r=s[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Xt(e,t,n,r){var i={},s=e===Wt;function o(a){var l;return i[a]=!0,I.each(e[a]||[],(function(e,a){var u=a(t,n,r);return"string"!==typeof u||s||i[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)})),l}return o(t.dataTypes[0])||!i["*"]&&o("*")}function Yt(e,t){var n,r,i=I.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&I.extend(!0,e,r),e}function Zt(e,t,n){var r,i,s,o,a=e.contents,l=e.dataTypes;while("*"===l[0])l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}if(l[0]in n)s=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}function en(e,t,n,r){var i,s,o,a,l,u={},c=e.dataTypes.slice();if(c[1])for(o in e.converters)u[o.toLowerCase()]=e.converters[o];s=c.shift();while(s)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=c.shift(),s)if("*"===s)s=l;else if("*"!==l&&l!==s){if(o=u[l+" "+s]||u["* "+s],!o)for(i in u)if(a=i.split(" "),a[1]===s&&(o=u[l+" "+a[0]]||u["* "+a[0]],o)){!0===o?o=u[i]:!0!==u[i]&&(s=a[0],c.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}Qt.href=Ot.href,I.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ot.href,type:"GET",isLocal:Bt.test(Ot.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Gt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":I.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,I.ajaxSettings),t):Yt(I.ajaxSettings,e)},ajaxPrefilter:Jt(Kt),ajaxTransport:Jt(Wt),ajax:function(e,t){"object"===typeof e&&(t=e,e=void 0),t=t||{};var n,r,s,o,a,l,u,c,h,d,f=I.ajaxSetup({},t),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?I(p):I.event,m=I.Deferred(),v=I.Callbacks("once memory"),y=f.statusCode||{},_={},w={},E="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(u){if(!o){o={};while(t=qt.exec(s))o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return u?s:null},setRequestHeader:function(e,t){return null==u&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,_[e]=t),this},overrideMimeType:function(e){return null==u&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(u)T.always(e[T.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||E;return n&&n.abort(t),C(0,t),this}};if(m.promise(T),f.url=((e||f.url||Ot.href)+"").replace(zt,Ot.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match($)||[""],null==f.crossDomain){l=b.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Qt.protocol+"//"+Qt.host!==l.protocol+"//"+l.host}catch(S){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!==typeof f.data&&(f.data=I.param(f.data,f.traditional)),Xt(Kt,f,t,T),u)return T;for(h in c=I.event&&f.global,c&&0===I.active++&&I.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ht.test(f.type),r=f.url.replace($t,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ut,"+")):(d=f.url.slice(r.length),f.data&&(f.processData||"string"===typeof f.data)&&(r+=(Rt.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(r=r.replace(Vt,"$1"),d=(Rt.test(r)?"&":"?")+"_="+Dt.guid+++d),f.url=r+d),f.ifModified&&(I.lastModified[r]&&T.setRequestHeader("If-Modified-Since",I.lastModified[r]),I.etag[r]&&T.setRequestHeader("If-None-Match",I.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Gt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||u))return T.abort();if(E="abort",v.add(f.complete),T.done(f.success),T.fail(f.error),n=Xt(Wt,f,t,T),n){if(T.readyState=1,c&&g.trigger("ajaxSend",[T,f]),u)return T;f.async&&f.timeout>0&&(a=i.setTimeout((function(){T.abort("timeout")}),f.timeout));try{u=!1,n.send(_,C)}catch(S){if(u)throw S;C(-1,S)}}else C(-1,"No Transport");function C(e,t,o,l){var h,d,_,b,w,E=t;u||(u=!0,a&&i.clearTimeout(a),n=void 0,s=l||"",T.readyState=e>0?4:0,h=e>=200&&e<300||304===e,o&&(b=Zt(f,T,o)),!h&&I.inArray("script",f.dataTypes)>-1&&I.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),b=en(f,b,T,h),h?(f.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(I.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(I.etag[r]=w)),204===e||"HEAD"===f.type?E="nocontent":304===e?E="notmodified":(E=b.state,d=b.data,_=b.error,h=!_)):(_=E,!e&&E||(E="error",e<0&&(e=0))),T.status=e,T.statusText=(t||E)+"",h?m.resolveWith(p,[d,E,T]):m.rejectWith(p,[T,E,_]),T.statusCode(y),y=void 0,c&&g.trigger(h?"ajaxSuccess":"ajaxError",[T,f,h?d:_]),v.fireWith(p,[T,E]),c&&(g.trigger("ajaxComplete",[T,f]),--I.active||I.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return I.get(e,t,n,"json")},getScript:function(e,t){return I.get(e,void 0,t,"script")}}),I.each(["get","post"],(function(e,t){I[t]=function(e,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),I.ajax(I.extend({url:e,type:t,dataType:i,data:n,success:r},I.isPlainObject(e)&&e))}})),I.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),I._evalUrl=function(e,t,n){return I.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){I.globalEval(e,t,n)}})},I.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=I(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return y(e)?this.each((function(t){I(this).wrapInner(e.call(this,t))})):this.each((function(){var t=I(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=y(e);return this.each((function(n){I(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){I(this).replaceWith(this.childNodes)})),this}}),I.expr.pseudos.hidden=function(e){return!I.expr.pseudos.visible(e)},I.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},I.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var tn={0:200,1223:204},nn=I.ajaxSettings.xhr();v.cors=!!nn&&"withCredentials"in nn,v.ajax=nn=!!nn,I.ajaxTransport((function(e){var t,n;if(v.cors||nn&&!e.crossDomain)return{send:function(r,s){var o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];for(o in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(o,r[o]);t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!==typeof a.status?s(0,"error"):s(a.status,a.statusText):s(tn[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!==typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&i.setTimeout((function(){t&&n()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(l){if(t)throw l}},abort:function(){t&&t()}}})),I.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),I.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return I.globalEval(e),e}}}),I.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),I.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=I("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}));var rn=[],sn=/(=)\?(?=&|$)|\?\?/;I.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||I.expando+"_"+Dt.guid++;return this[e]=!0,e}}),I.ajaxPrefilter("json jsonp",(function(e,t,n){var r,s,o,a=!1!==e.jsonp&&(sn.test(e.url)?"url":"string"===typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&sn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(sn,"$1"+r):!1!==e.jsonp&&(e.url+=(Rt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||I.error(r+" was not called"),o[0]},e.dataTypes[0]="json",s=i[r],i[r]=function(){o=arguments},n.always((function(){void 0===s?I(i).removeProp(r):i[r]=s,e[r]&&(e.jsonpCallback=t.jsonpCallback,rn.push(r)),o&&y(s)&&s(o[0]),o=s=void 0})),"script"})),v.createHTMLDocument=function(){var e=b.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),I.parseHTML=function(e,t,n){return"string"!==typeof e?[]:("boolean"===typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?(t=b.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=b.location.href,t.head.appendChild(r)):t=b),i=D.exec(e),s=!n&&[],i?[t.createElement(i[1])]:(i=Ie([e],t,s),s&&s.length&&I(s).remove(),I.merge([],i.childNodes)));var r,i,s},I.fn.load=function(e,t,n){var r,i,s,o=this,a=e.indexOf(" ");return a>-1&&(r=It(e.slice(a)),e=e.slice(0,a)),y(t)?(n=t,t=void 0):t&&"object"===typeof t&&(i="POST"),o.length>0&&I.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(r?I("<div>").append(I.parseHTML(e)).find(r):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},I.expr.pseudos.animated=function(e){return I.grep(I.timers,(function(t){return e===t.elem})).length},I.offset={setOffset:function(e,t,n){var r,i,s,o,a,l,u,c=I.css(e,"position"),h=I(e),d={};"static"===c&&(e.style.position="relative"),a=h.offset(),s=I.css(e,"top"),l=I.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1,u?(r=h.position(),o=r.top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(l)||0),y(t)&&(t=t.call(e,n,I.extend({},a))),null!=t.top&&(d.top=t.top-a.top+o),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):h.css(d)}},I.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){I.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===I.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===I.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&(i=I(e).offset(),i.top+=I.css(e,"borderTopWidth",!0),i.left+=I.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-I.css(r,"marginTop",!0),left:t.left-i.left-I.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){var e=this.offsetParent;while(e&&"static"===I.css(e,"position"))e=e.offsetParent;return e||ce}))}}),I.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;I.fn[e]=function(r){return G(this,(function(e,r,i){var s;if(_(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===i)return s?s[t]:e[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):e[r]=i}),e,r,arguments.length)}})),I.each(["top","left"],(function(e,t){I.cssHooks[t]=Xe(v.pixelPosition,(function(e,n){if(n)return n=Je(e,t),Be.test(n)?I(e).position()[t]+"px":n}))})),I.each({Height:"height",Width:"width"},(function(e,t){I.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){I.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!==typeof i),a=n||(!0===i||!0===s?"margin":"border");return G(this,(function(t,n,i){var s;return _(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?I.css(t,n,a):I.style(t,n,i,a)}),t,o?i:void 0,o)}}))})),I.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){I.fn[t]=function(e){return this.on(t,e)}})),I.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){I.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var on=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;I.proxy=function(e,t){var n,r,i;if("string"===typeof t&&(n=e[t],t=e,e=n),y(e))return r=l.call(arguments,2),i=function(){return e.apply(t||this,r.concat(l.call(arguments)))},i.guid=e.guid=e.guid||I.guid++,i},I.holdReady=function(e){e?I.readyWait++:I.ready(!0)},I.isArray=Array.isArray,I.parseJSON=JSON.parse,I.nodeName=O,I.isFunction=y,I.isWindow=_,I.camelCase=Y,I.type=T,I.now=Date.now,I.isNumeric=function(e){var t=I.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},I.trim=function(e){return null==e?"":(e+"").replace(on,"$1")},n=[],r=function(){return I}.apply(t,n),void 0===r||(e.exports=r);var an=i.jQuery,ln=i.$;return I.noConflict=function(e){return i.$===I&&(i.$=ln),e&&i.jQuery===I&&(i.jQuery=an),I},"undefined"===typeof s&&(i.jQuery=i.$=I),I}))},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},3907:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee}});var r=n(6252),i=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",u="plugin:settings:set";let c,h;function d(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,h=n.g.perf_hooks.performance):c=!1),c}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function g(e,t){const n=e,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(l,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function v(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function _(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;C(e,n,[],e._modules.root,!0),T(e,n,t)}function T(e,t,n){var s=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,l={},u={},c=(0,i.B)(!0);c.run((function(){v(a,(function(t,n){l[n]=b(t,e),u[n]=(0,r.Fl)((function(){return l[n]()})),Object.defineProperty(e.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),e._state=(0,i.qj)({data:t}),e._scope=c,e.strict&&N(e),s&&n&&e._withCommit((function(){s.data=null})),o&&o.stop()}function C(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=O(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var u=r.context=I(e,o,n);r.forEachMutation((function(t,n){var r=o+n;k(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;x(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;A(e,r,t,u)})),r.forEachChild((function(r,s){C(e,t,n.concat(s),r,i)}))}function I(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function k(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function x(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return _(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function N(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var R="vuex bindings",L="vuex:mutations",P="vuex:actions",M="vuex",j=0;function F(e,t){g({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[R]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:U}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===M)if(n.filter){var r=[];z(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[H(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId;S(t,r),n.state=K(G(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=j++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var U=8702998,$=6710886,V=16777215,q={label:"namespaced",textColor:V,backgroundColor:$};function B(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function H(e,t){return{id:t||"root",label:B(t),tags:e.namespaced?[q]:[],children:Object.keys(e._children).map((function(n){return H(e._children[n],t+n+"/")}))}}function z(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[q]:[]}),Object.keys(t._children).forEach((function(i){z(e,t._children[i],n,r+i+"/")}))}function K(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=W(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?B(e):e,editable:!1,value:Q((function(){return s[e]}))}}))}return i}function W(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Q((function(){return e[n]}))}else t[n]=Q((function(){return e[n]}))})),t}function G(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Q(e){try{return e()}catch(t){return t}}var J=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(e,t){this._children[e]=t},J.prototype.removeChild=function(e){delete this._children[e]},J.prototype.getChild=function(e){return this._children[e]},J.prototype.hasChild=function(e){return e in this._children},J.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},J.prototype.forEachChild=function(e){v(this._children,e)},J.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},J.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},J.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(J.prototype,X);var Y=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}Y.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Y.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Y.prototype.update=function(e){Z([],this.root,e)},Y.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new J(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&v(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Y.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Y.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),T(this,u),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&F(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,i=D(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=D(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),C(this,this.state,e,this._modules.get(e),n.preserveState),T(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=oe(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=oe(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function re(e){return ie(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ie(e){return Array.isArray(e)||y(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r}},5816:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ge},qX:function(){return he},Xd:function(){return ce},Mq:function(){return ve},ZF:function(){return me},KN:function(){return ye}});var r=n(8463),i=n(3333),s=n(4444);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}_((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",D="0.9.5",R=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",q="@firebase/database-compat",B="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.18.0",se="[DEFAULT]",oe={[O]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[q]:"fire-rtdb-compat",[B]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(le.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ie;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const u=new pe(n,i,l);return ae.set(o,u),u}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}ce(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=C(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ce(e){try{const t=await Te();return t.transaction(we).objectStore(we).get(Se(e))}catch(t){if(t instanceof s.ZR)R.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Se(e)),r.done}catch(n){if(n instanceof s.ZR)R.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,xe=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Re(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Re(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Re(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){ce(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(O,D,e),ye(O,D,"esm2017"),ye("fire-js","")}Le("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},5705:function(e,t,n){"use strict";n.d(t,{Xw:function(){return D}});var r=n(2262),i=n(6252);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((n,i)=>(t.includes(i)||(n[i]=(0,r.SU)(e[i])),n)),{})}function u(e){return"function"===typeof e}function c(e){return(0,r.PG)(e)||(0,r.$y)(e)}function h(e,t,n){let r=e;const i=t.split(".");for(let s=0;s<i.length;s++){if(!r[i[s]])return n;r=r[i[s]]}return r}function d(e,t,n){return(0,i.Fl)((()=>e.some((e=>h(t,e,{[n]:!1})[n]))))}function f(e,t,n){return(0,i.Fl)((()=>e.reduce(((e,r)=>{const i=h(t,r,{[n]:!1})[n]||[];return e.concat(i)}),[])))}function p(e,t,n,i){return e.call(i,(0,r.SU)(t),(0,r.SU)(n),i)}function g(e){return void 0!==e.$valid?!e.$valid:!e}function m(e,t,n,s,o,a,l){let{$lazy:u,$rewardEarly:c}=o,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],d=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,m=arguments.length>10?arguments[10]:void 0;const v=(0,r.iH)(!!s.value),y=(0,r.iH)(0);n.value=!1;const _=(0,i.YP)([t,s].concat(h,m),(()=>{if(u&&!s.value||c&&!f.value&&!n.value)return;let r;try{r=p(e,t,d,l)}catch(i){r=Promise.reject(i)}y.value++,n.value=!!y.value,v.value=!1,Promise.resolve(r).then((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=g(e)})).catch((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:v,$unwatch:_}}function v(e,t,n,r,s,o,a,l){let{$lazy:u,$rewardEarly:c}=r;const h=()=>({}),d=(0,i.Fl)((()=>{if(u&&!n.value||c&&!l.value)return!1;let r=!0;try{const n=p(e,t,a,o);s.value=n,r=g(n)}catch(i){s.value=i}return r}));return{$unwatch:h,$invalid:d}}function y(e,t,n,s,o,a,c,h,d,f,p){const g=(0,r.iH)(!1),y=e.$params||{},_=(0,r.iH)(null);let b,w;e.$async?({$invalid:b,$unwatch:w}=m(e.$validator,t,g,n,s,_,o,e.$watchTargets,d,f,p)):({$invalid:b,$unwatch:w}=v(e.$validator,t,n,s,_,o,d,f));const E=e.$message,T=u(E)?(0,i.Fl)((()=>E(l({$pending:g,$invalid:b,$params:l(y),$model:t,$response:_,$validator:a,$propertyPath:h,$property:c})))):E||"";return{$message:T,$params:y,$pending:g,$invalid:b,$response:_,$unwatch:w}}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.SU)(e),n=Object.keys(t),i={},s={},o={};let a=null;return n.forEach((e=>{const n=t[e];switch(!0){case u(n.$validator):i[e]=n;break;case u(n):i[e]={$validator:n};break;case"$validationGroups"===e:a=n;break;case e.startsWith("$"):o[e]=n;break;default:s[e]=n}})),{rules:i,nestedValidators:s,config:o,validationGroups:a}}const b="__root";function w(e,t,n,s,o,a,l,u,c){const h=Object.keys(e),d=s.get(o,e),f=(0,r.iH)(!1),p=(0,r.iH)(!1),g=(0,r.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),f.value=d.$dirty.value}const m={$dirty:f,$path:o,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return h.length?(h.forEach((r=>{m[r]=y(e[r],t,m.$dirty,a,l,r,n,o,c,p,g)})),m.$externalResults=(0,i.Fl)((()=>u.value?[].concat(u.value).map(((e,t)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),m.$invalid=(0,i.Fl)((()=>{const e=h.some((e=>(0,r.SU)(m[e].$invalid)));return p.value=e,!!m.$externalResults.value.length||e})),m.$pending=(0,i.Fl)((()=>h.some((e=>(0,r.SU)(m[e].$pending))))),m.$error=(0,i.Fl)((()=>!!m.$dirty.value&&(m.$pending.value||m.$invalid.value))),m.$silentErrors=(0,i.Fl)((()=>h.filter((e=>(0,r.SU)(m[e].$invalid))).map((e=>{const t=m[e];return(0,r.qj)({$propertyPath:o,$property:n,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(m.$externalResults.value))),m.$errors=(0,i.Fl)((()=>m.$dirty.value?m.$silentErrors.value:[])),m.$unwatch=()=>h.forEach((e=>{m[e].$unwatch()})),m.$commit=()=>{p.value=!0,g.value=Date.now()},s.set(o,e,m),m):(d&&s.set(o,e,m),m)}function E(e,t,n,r,i,s,o){const a=Object.keys(e);return a.length?a.reduce(((a,l)=>(a[l]=C({validations:e[l],state:t,key:l,parentKey:n,resultsCache:r,globalConfig:i,instance:s,externalResults:o}),a)),{}):{}}function T(e,t,n){const s=(0,i.Fl)((()=>[t,n].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,r.SU)(t)))),[]))),o=(0,i.Fl)({get(){return e.$dirty.value||!!s.value.length&&s.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),a=(0,i.Fl)((()=>{const t=(0,r.SU)(e.$silentErrors)||[],n=s.value.filter((e=>((0,r.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(n)})),l=(0,i.Fl)((()=>{const t=(0,r.SU)(e.$errors)||[],n=s.value.filter((e=>((0,r.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(n)})),u=(0,i.Fl)((()=>s.value.some((e=>e.$invalid))||(0,r.SU)(e.$invalid)||!1)),c=(0,i.Fl)((()=>s.value.some((e=>(0,r.SU)(e.$pending)))||(0,r.SU)(e.$pending)||!1)),h=(0,i.Fl)((()=>s.value.some((e=>e.$dirty))||s.value.some((e=>e.$anyDirty))||o.value)),d=(0,i.Fl)((()=>!!o.value&&(c.value||u.value))),f=()=>{e.$touch(),s.value.forEach((e=>{e.$touch()}))},p=()=>{e.$commit(),s.value.forEach((e=>{e.$commit()}))},g=()=>{e.$reset(),s.value.forEach((e=>{e.$reset()}))};return s.value.length&&s.value.every((e=>e.$dirty))&&f(),{$dirty:o,$errors:l,$invalid:u,$anyDirty:h,$error:d,$pending:c,$touch:f,$reset:g,$silentErrors:a,$commit:p}}function C(e){let{validations:t,state:n,key:s,parentKey:a,childResults:l,resultsCache:u,globalConfig:c={},instance:h,externalResults:p}=e;const g=a?`${a}.${s}`:s,{rules:m,nestedValidators:v,config:y,validationGroups:C}=_(t),I=o(o({},c),y),S=s?(0,i.Fl)((()=>{const e=(0,r.SU)(n);return e?(0,r.SU)(e[s]):void 0})):n,k=o({},(0,r.SU)(p)||{}),x=(0,i.Fl)((()=>{const e=(0,r.SU)(p);return s?e?(0,r.SU)(e[s]):void 0:e})),A=w(m,S,s,u,g,I,h,x,n),N=E(v,S,g,u,I,h,x),O={};C&&Object.entries(C).forEach((e=>{let[t,n]=e;O[t]={$invalid:d(n,N,"$invalid"),$error:d(n,N,"$error"),$pending:d(n,N,"$pending"),$errors:f(n,N,"$errors"),$silentErrors:f(n,N,"$silentErrors")}}));const{$dirty:D,$errors:R,$invalid:L,$anyDirty:P,$error:M,$pending:j,$touch:F,$reset:U,$silentErrors:$,$commit:V}=T(A,N,l),q=s?(0,i.Fl)({get:()=>(0,r.SU)(S),set:e=>{D.value=!0;const t=(0,r.SU)(n),i=(0,r.SU)(p);i&&(i[s]=k[s]),(0,r.dq)(t[s])?t[s].value=e:t[s]=e}}):null;async function B(){return F(),I.$rewardEarly&&(V(),await(0,i.Y3)()),await(0,i.Y3)(),new Promise((e=>{if(!j.value)return e(!L.value);const t=(0,i.YP)(j,(()=>{e(!L.value),t()}))}))}function H(e){return(l.value||{})[e]}function z(){(0,r.dq)(p)?p.value=k:0===Object.keys(k).length?Object.keys(p).forEach((e=>{delete p[e]})):Object.assign(p,k)}return s&&I.$autoDirty&&(0,i.YP)(S,(()=>{D.value||F();const e=(0,r.SU)(p);e&&(e[s]=k[s])}),{flush:"sync"}),(0,r.qj)(o(o(o({},A),{},{$model:q,$dirty:D,$error:M,$errors:R,$invalid:L,$anyDirty:P,$pending:j,$touch:F,$reset:U,$path:g||b,$silentErrors:$,$validate:B,$commit:V},l&&{$getResultsForChild:H,$clearExternalResults:z,$validationGroups:O}),N))}class I{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const i=Object.keys(n),s=Object.keys(t);if(s.length!==i.length)return!1;const o=s.every((e=>i.includes(e)));return!!o&&s.every((e=>!t[e].$params||Object.keys(t[e].$params).every((i=>(0,r.SU)(n[e].$params[i])===(0,r.SU)(t[e].$params[i])))))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:i}=n,s=this.checkRulesValidity(e,t,r),o=i.$unwatch?i.$unwatch:()=>({});return s?i:{$dirty:i.$dirty,$partial:!0,$unwatch:o}}}const S={COLLECT_ALL:!0,COLLECT_NONE:!1},k=Symbol("vuelidate#injectChildResults"),x=Symbol("vuelidate#removeChildResults");function A(e){let{$scope:t,instance:n}=e;const s={},o=(0,r.iH)([]),a=(0,i.Fl)((()=>o.value.reduce(((e,t)=>(e[t]=(0,r.SU)(s[t]),e)),{})));function l(e,n){let{$registerAs:r,$scope:i,$stopPropagation:a}=n;a||t===S.COLLECT_NONE||i===S.COLLECT_NONE||t!==S.COLLECT_ALL&&t!==i||(s[r]=e,o.value.push(r))}function u(e){o.value=o.value.filter((t=>t!==e)),delete s[e]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],l),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],u);const c=(0,i.f3)(k,[]);(0,i.JJ)(k,n.__vuelidateInjectInstances);const h=(0,i.f3)(x,[]);return(0,i.JJ)(x,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:c,removeValidationResultsFromParent:h}}function N(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?N(e[t]):(0,i.Fl)((()=>e[t]))}})}let O=0;function D(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(s=e,e=void 0,t=void 0);let{$registerAs:a,$scope:l=S.COLLECT_ALL,$stopPropagation:h,$externalResults:d,currentVueInstance:f}=s;const p=f||(null===(n=(0,i.FN)())||void 0===n?void 0:n.proxy),g=p?p.$options:{};a||(O+=1,a=`_vuelidate_${O}`);const m=(0,r.iH)({}),v=new I,{childResults:y,sendValidationResultsToParent:_,removeValidationResultsFromParent:b}=p?A({$scope:l,instance:p}):{childResults:(0,r.iH)({})};if(!e&&g.validations){const e=g.validations;t=(0,r.iH)({}),(0,i.wF)((()=>{t.value=p,(0,i.YP)((()=>u(e)?e.call(t.value,new N(t.value)):e),(e=>{m.value=C({validations:e,state:t,childResults:y,resultsCache:v,globalConfig:s,instance:p,externalResults:d||p.vuelidateExternalResults})}),{immediate:!0})})),s=g.validationsConfig||s}else{const n=(0,r.dq)(e)||c(e)?e:(0,r.qj)(e||{});(0,i.YP)(n,(e=>{m.value=C({validations:e,state:t,childResults:y,resultsCache:v,globalConfig:s,instance:p??{},externalResults:d})}),{immediate:!0})}return p&&(_.forEach((e=>e(m,{$registerAs:a,$scope:l,$stopPropagation:h}))),(0,i.Jd)((()=>b.forEach((e=>e(a)))))),(0,i.Fl)((()=>o(o({},(0,r.SU)(m.value)),y.value)))}},760:function(e,t,n){"use strict";n.d(t,{C1:function(){return T},Do:function(){return w}});var r=n(2262);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return"function"===typeof e}function l(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function u(e){return a(e.$validator)?s({},e):{$validator:e}}function c(e){return"object"===typeof e?e.$valid:e}function h(e){return e.$validator||e}function d(e,t){if(!l(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!l(t)&&!a(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=u(t);return n.$params=s(s({},n.$params||{}),e),n}function f(e,t){if(!a(e)&&"string"!==typeof(0,r.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!l(t)&&!a(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=u(t);return n.$message=e,n}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=u(e);return s(s({},n),{},{$async:!0,$watchTargets:t})}function g(e){return{$validator(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return(0,r.SU)(t).reduce(((t,n,r)=>{const s=Object.entries(n).reduce(((t,s)=>{let[o,a]=s;const l=e[o]||{},u=Object.entries(l).reduce(((e,t)=>{let[s,l]=t;const u=h(l),d=u.call(this,a,n,r,...i),f=c(d);if(e.$data[s]=d,e.$data.$invalid=!f||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!f){let t=l.$message||"";const n=l.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!f,$params:n,$model:a,$response:d})),e.$errors.push({$property:o,$message:t,$params:n,$response:d,$model:a,$pending:!1,$validator:s})}return{$valid:e.$valid&&f,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[o]=u.$data,t.$errors[o]=u.$errors,{$valid:t.$valid&&u.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&s.$valid,$data:t.$data.concat(s.$data),$errors:t.$errors.concat(s.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const m=e=>{if(e=(0,r.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},v=e=>(e=(0,r.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=(0,r.SU)(e),!m(e)||t.every((t=>(t.lastIndex=0,t.test(e)))))}r.SU,y(/^[a-zA-Z]*$/),y(/^[a-zA-Z0-9]*$/),y(/^\d*(\.\d+)?$/);const _=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var b=y(_),w={$validator:b,$message:"Value is not a valid email address",$params:{type:"email"}};function E(e){return"string"===typeof e&&(e=e.trim()),m(e)}var T={$validator:E,$message:"Value is required",$params:{type:"required"}};const C=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;y(C);y(/(^[0-9]*$)|(^-[0-9]+$)/),y(/^[-]?\d*(\.\d+)?$/)},3977:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(5816),i="firebase",s="9.18.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},1828:function(e,t,n){"use strict";n.d(t,{v0:function(){return gr}});var r=n(4444),i=n(5816),s=n(3333);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new r.LL("auth","Firebase",l()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function _(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),O.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw $(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"internal-error",{message:String(s)})}}async function j(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=K(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:B(z(s.auth_time)),issuedAtTime:B(z(s.iat)),expirationTime:B(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function K(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function W(e){const t=K(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Q(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!l&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=F(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=t;v(_&&T,e,"internal-error");const C=re.fromJSON(this.name,T);v("string"===typeof _,e,"internal-error"),ie(c,e.name),ie(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(y,e.name);const I=new se({uid:_,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const s=le(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=se._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _e(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ye(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=ce((0,r.z$)());break;case"Worker":n=`${ce((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,r.m9)(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xe(e,t,n){const r=Se(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ae(t),{host:o,port:a}=Ne(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||De()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ne(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Oe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Oe(t)}}}function Oe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function De(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function je(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Re{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Fe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Fe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="http://localhost";class Ve extends Re{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ve(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ue(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ue(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ue(e,t)}buildRequest(){const e={requestUri:$e,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Be(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function He(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const ze={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Re{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new We({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new We({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Be(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return He(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new We({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Je{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Ge(null!==(i=l["mode"])&&void 0!==i?i:null);v(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Qe(e);try{return new Je(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Fe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Je.parseLink(t);return v(n,"argument-error"),Fe._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=st(n),o=new it({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ot.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ot(e,t,n,r)}}function at(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ot._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await G(e,at(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=K(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),it._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r="signIn",i=await at(e,r,t),s=await it._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function ht(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function dt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function pt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){const e=(0,r.z$)();return de(e)||ye(e)}const yt=1e3,_t=10;class bt extends mt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_t):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const wt=bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends mt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Et.type="SESSION";const Tt=Et;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new It(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ct(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.receivers=[];class kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=St("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function At(e){xt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof xt()["WorkerGlobalScope"]&&"function"===typeof xt()["importScripts"]}async function Ot(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Dt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Rt(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebaseLocalStorageDb",Pt=1,Mt="firebaseLocalStorage",jt="fbase_key";class Ft{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ut(e,t){return e.transaction([Mt],t?"readwrite":"readonly").objectStore(Mt)}function $t(){const e=indexedDB.deleteDatabase(Lt);return new Ft(e).toPromise()}function Vt(){const e=indexedDB.open(Lt,Pt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Mt,{keyPath:jt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Mt)?t(n):(n.close(),await $t(),t(await Vt()))}))}))}async function qt(e,t,n){const r=Ut(e,!0).put({[jt]:t,value:n});return new Ft(r).toPromise()}async function Bt(e,t){const n=Ut(e,!1).get(t),r=await new Ft(n).toPromise();return void 0===r?null:r.value}function Ht(e,t){const n=Ut(e,!0).delete(t);return new Ft(n).toPromise()}const zt=800,Kt=3;class Wt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Vt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=It._getInstance(Rt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ot(),!this.activeServiceWorker)return;this.sender=new kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Dt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vt();return await qt(e,gt,"1"),await Ht(e,gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Bt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ht(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ut(e,!1).getAll();return new Ft(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wt.type="LOCAL";const Gt=Wt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Jt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Yt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xt().appendChild(r)}))}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Zt("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en="recaptcha";async function tn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===en,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await ft(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await qe(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return We._fromVerification(e,t)}static credentialFromResult(e){const t=e;return nn.credentialFromTaggedObject(t)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?We._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class sn extends Re{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ue(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ue(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ue(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return ct(e.auth,new sn(e),e.bypassAuthState)}function an(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ut(n,new sn(e),e.bypassAuthState)}async function ln(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),lt(n,new sn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return ln;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new A(2e3,1e4);class hn extends un{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="pendingRedirect",fn=new Map;class pn extends un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const t=await gn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(e,t){const n=yn(t),r=vn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(e,t){fn.set(e._key(),t)}function vn(e){return w(e._redirectPersistence)}function yn(e){return le(dn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t,n=!1){const r=Se(e),i=rn(r,t),s=new pn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class wn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Cn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Tn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Tn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Cn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await In(e);for(const r of t)try{if(An(r))return}catch(n){}f(e,"unauthorized-domain")}function An(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Sn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new A(3e4,6e4);function On(){const e=xt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Dn(e){return new Promise(((t,n)=>{var r,i,s;function o(){On(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(e,"network-request-failed"))},timeout:Nn.get()})}if(null===(i=null===(r=xt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=xt().gapi)||void 0===s?void 0:s.load)){const t=Zt("iframefcb");return xt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Yt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rn=null,e}))}let Rn=null;function Ln(e){return Rn=Rn||Dn(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new A(5e3,15e3),Mn="__/auth/iframe",jn="emulator/auth/iframe",Fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,jn):`https://${e.config.authDomain}/${Mn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Un.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Vn(e){const t=await Ln(e),n=xt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=xt().setTimeout((()=>{r(i)}),Pn.get());function o(){xt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bn=500,Hn=600,zn="_blank",Kn="http://localhost";class Wn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=Bn,s=Hn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},qn),{width:i.toString(),height:s.toString(),top:o,left:a}),c=(0,r.z$)().toLowerCase();n&&(l=fe(c)?zn:n),he(c)&&(t=t||Kn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(_e(c)&&"_self"!==l)return Qn(t||"",l),new Wn(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Wn(d)}function Qn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__/auth/handler",Xn="emulator/auth/handler";function Yn(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Zn(e)}?${(0,r.xO)(u).slice(1)}`}function Zn({config:e}){return e.emulator?N(e,Xn):`https://${e.authDomain}/${Jn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="webStorageSupport";class tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tt,this._completeRedirectFn=_n,this._overrideRedirectResult=mn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Yn(e,t,n,C(),r);return Gn(e,s,St())}async _openRedirect(e,t,n,r){return await this._originValidation(e),At(Yn(e,t,n,C(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Vn(e),n=new wn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(er,{type:er},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[er];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ye()}}const nr=tr;class rr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class ir extends rr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ir(e)}_finalizeEnroll(e,t,n){return pt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Jt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return ir._fromCredential(e)}}sr.FACTOR_ID="phone";var or="@firebase/auth",ar="0.21.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new Ie(t,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new lr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(or,ar,ur(e)),(0,i.KN)(or,ar,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=300,dr=(0,r.Pz)("authIdTokenMaxAge")||hr;let fr=null;const pr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dr)return;const i=null===n||void 0===n?void 0:n.token;fr!==i&&(fr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:nr,persistence:[Gt,wt,Tt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=pr(s);dt(n,e,(()=>e(n.currentUser))),ht(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&xe(n,`http://${o}`),n}cr("Browser")},3247:function(e,t,n){"use strict";n.d(t,{ET:function(){return $h},hJ:function(){return Nc},oe:function(){return Uh},AK:function(){return Hh},JU:function(){return Oc},QT:function(){return Lh},PL:function(){return Mh},ad:function(){return Pc},b9:function(){return Eh},cf:function(){return Vh},Xo:function(){return bh},IO:function(){return gh},pl:function(){return jh},r7:function(){return Fh},ar:function(){return vh}});var r,i=n(5816),s=n(8463),o=n(3333),a=n(4444),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},c=c||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var C=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==C)||g(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function R(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=R().indexOf(e)}function P(e){return P[" "](e),e}function M(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}P[" "]=d;var j,F=L("Opera"),U=L("Trident")||L("MSIE"),$=L("Edge"),V=$||U,q=L("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),B=-1!=R().toLowerCase().indexOf("webkit")&&!L("Edge");function H(){var e=h.document;return e?e.documentMode:void 0}e:{var z="",K=function(){var e=R();return q?/rv:([^\);]+)(\)|;)/.exec(e):$?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(z=K?K[1]:""),U){var W=H();if(null!=W&&W>parseFloat(z)){j=String(W);break e}}j=z}var G,Q={};function J(){return M((function(){let e=0;const t=O(String(j)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&U){var X=H();G=X||(parseInt(j,10)||void 0)}else G=void 0;var Y=G;function Z(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{P(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,x);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function ce(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Ce(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=me(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function me(){function e(n){return t.call(e.src,e.listener,n)}const t=we;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Ce(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ce(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ce(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(ce(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function we(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&_e(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ue?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Ie(){T.call(this),this.i=new ue(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var i=t;t=new x(r,e),le(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ke(o,r,!0,t)&&i}if(o=t.g=e,i=ke(o,r,!0,t)&&i,i=ke(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ke(o,r,!1,t)&&i}function ke(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ce(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}E(Ie,T),Ie.prototype[te]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=h.JSON.stringify;function Ae(){var e=Fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){h.setTimeout((()=>{throw e}),0)}function Pe(e,t){Oe||Me(),je||(Oe(),je=!0),Fe.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Ue)}}var je=!1,Fe=new Ne;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Le(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function $e(e,t){Ie.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function Ve(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Be(e){e.g=qe((()=>{e.g=null,e.i&&(e.i=!1,Be(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E($e,Ie),r=$e.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Ve(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){$e.X.M.call(this),Ve(this),delete this.g};class He extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){T.call(this),this.h=e,this.g={}}E(ze,T);var Ke=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Qe(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(a){return t}}ze.prototype.M=function(){ze.X.M.call(this),Ge(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ie}function it(e){x.call(this,tt.Pa,e)}function st(e){const t=rt();Se(t,new it(t))}function ot(e,t){x.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Se(t,new ot(t,e))}function lt(e,t){x.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(it,x),tt.STAT_EVENT="statevent",E(ot,x),tt.Qa="timingevent",E(lt,x);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var gt,mt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){x.call(this,"d")}function yt(){x.call(this,"c")}function _t(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new ze(this),this.O=Et,e=V?125:void 0,this.T=new $e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}E(vt,x),E(yt,x),E(_t,dt),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},gt=new _t;var Et=45e3,Tt={},Ct={};function It(e,t,n){e.K=1,e.v=Wt(qt(t)),e.s=n,e.P=!0,St(e,null)}function St(e,t){e.F=Date.now(),Nt(e),e.A=qt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new He(b(e.La,e,e.g),e.N)),We(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function kt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function xt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==Ct){4==t&&(e.o=4,at(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Pt(e,r)}kt(e)&&r!=Ct&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Rt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ct:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?Ct:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Dt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.G||e.I||or(e.l,e)}function Lt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ve(e.T),Ge(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Gn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&sr(n),!N(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(mn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=cr(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Dt(a),Nt(a)),r.g=o}else tr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||lr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?lr(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function jt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=jt(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==Vn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=Vn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(3!=c||V||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=c||7==t||st(8==t||0>=d?3:2),Dt(this);var n=this.g.aa();this.Y=n;t:if(kt(this)){var r=qn(this.g);e="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Rt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Lt(this),Rt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.P?(xt(this,c,o),V&&this.i&&3==c&&(We(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,o,null),Pt(this,o)),4==c&&Lt(this),this.i&&!this.I&&(4==c?or(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Lt(this),Rt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=Vn(this.g),t=this.g.fa();this.C<t.length&&(Dt(this),xt(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Lt(this),this.o=2,Rt(this)):Ot(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $t(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=void 0!==t?t:e.h,Bt(this,e.j),this.s=e.s,this.g=e.g,Ht(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,Bt(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),Ht(this,n[4]),this.l=Gt(n[5]||"",!0),zt(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function qt(e){return new Vt(e)}function Bt(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Qt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Wt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,tn)),e.join("")};var Xt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&$t(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),S(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function _n(){}function bn(){this.g=new _n}function wn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;p(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Qe;if(h.Image){const r=new Image;r.onload=w(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Cn(e){this.l=e.ac||null,this.j=e.jb||!1}function In(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},_n.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},_n.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Cn,dt),Cn.prototype.g=function(){return new In(this.l,this.j)},Cn.prototype.i=function(e){return function(){return e}}({}),E(In,Ie);var Sn=0;function kn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=In.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=Sn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):An(this),3==this.readyState&&kn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},r.Ua=function(e){this.g&&(this.response=e,xn(this))},r.ga=function(){this.g&&xn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=h.JSON.parse;function On(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}E(On,Ie);var Dn="",Rn=/^https?$/i,Ln=["POST","PUT"];function Pn(e){return U&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,jn(e),Un(e)}function jn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Fn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Vn(e)||2!=e.aa()))if(e.v&&4==Vn(e))qe(e.Ha,0,e);else if(Se(e,"readystatechange"),4==Vn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Ut)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var o=2<Vn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",jn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){$n(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function $n(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Vn(e){return e.g?e.g.readyState:0}function qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ar){return null}}function Bn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zn("baseRetryDelayMs",5e3,e),this.bb=zn("retryDelaySeedMs",1e4,e),this.$a=zn("forwardChannelMaxRetries",2,e),this.ta=zn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(e){if(Qn(e),3==e.G){var t=e.U++,n=qt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Wt(qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}ur(e)}function Gn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Qn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Jn(e){fn(e.h)||e.m||(e.m=!0,Pe(e.Ja,e),e.C=0)}function Xn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=qt(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&Hn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mn(e.h,n),It(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&Ft({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(Fr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Pe(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=qt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&Hn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Wt(qt(t)),n.s=null,n.P=!0,St(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.D,vn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),Se(r,new lt(r,n)),Jn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Bt(n,"https"),Wt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Qn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(k(e.la,t),k(e.la,e.i),e.h.i.length=0,S(e.i),e.i.length=0),e.l.ua()}}function cr(e,t,n){var r=n instanceof Vt?qt(n):new Vt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ht(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Vt(null,void 0);r&&Bt(s,r),t&&(s.g=t),i&&Ht(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new Cn({jb:!0})):new On(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(U&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ie.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function gr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){yt.call(this),this.status=1}function vr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?ft(this.u):ft(gt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$n(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=qe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.fb())},r.fb=function(){Fn(this)},r.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),le(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=qt(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&Hn(n,this.o,s)),mn(this.h,i),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),i.Z=!0,It(i,n,null)):It(i,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Gn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,Ie),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=cr(e,null,e.V),Jn(e)},pr.prototype.close=function(){Wn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xe(e),e=n);t.i.push(new cn(t.ab++,e)),3==t.G&&Jn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,pr.X.M.call(this)},E(gr,vt),E(mr,yt),E(vr,dr),vr.prototype.xa=function(){Se(this.g,"a")},vr.prototype.wa=function(e){Se(this.g,new gr(e))},vr.prototype.va=function(e){Se(this.g,new mr)},vr.prototype.ua=function(){Se(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},_r=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=ct,wr=u.EventType=ht,Er=u.Event=tt,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Cr=u.FetchXmlHttpFactory=Cn,Ir=u.WebChannel=pt,Sr=u.XhrIo=On;const kr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xr.UNAUTHENTICATED=new xr(null),xr.GOOGLE_CREDENTIALS=new xr("google-credentials-uid"),xr.FIRST_PARTY=new xr("first-party-uid"),xr.MOCK_USER=new xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.18.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new o.Yd("@firebase/firestore");function Or(){return Nr.logLevel}function Dr(e,...t){if(Nr.logLevel<=o["in"].DEBUG){const n=t.map(Pr);Nr.debug(`Firestore (${Ar}): ${e}`,...n)}}function Rr(e,...t){if(Nr.logLevel<=o["in"].ERROR){const n=t.map(Pr);Nr.error(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e,...t){if(Nr.logLevel<=o["in"].WARN){const n=t.map(Pr);Nr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Rr(t),new Error(t)}function jr(e,t){e||Mr()}function Fr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $r extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Br{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(xr.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zr{constructor(e){this.t=e,this.currentUser=xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(jr("string"==typeof t.accessToken),new qr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return jr(null===e||"string"==typeof e),new xr(e)}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=xr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(jr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(jr("string"==typeof e.token),this.A=e.token,new Gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Jr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $r(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $r(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $r(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $r(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $r(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(e,t,n){return new si(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new $r(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new $r(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new $r(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new $r(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(ri.fromString(e))}static fromName(e){return new oi(ri.fromString(e).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function li(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new ci(i,oi.empty(),t)}function ui(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(ti.min(),oi.empty(),-1)}static max(){return new ci(ti.max(),oi.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oi.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Ur.FAILED_PRECONDITION||e.message!==di)throw e;Dr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new gi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof gi?t:gi.resolve(t)}catch(e){return gi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):gi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):gi.reject(t)}static resolve(e){return new gi(((t,n)=>{t(e)}))}static reject(e){return new gi(((t,n)=>{n(e)}))}static waitFor(e){return new gi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=gi.resolve(!1);for(const n of e)t=t.next((e=>e?gi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new gi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new gi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vi.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _i{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _i("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof _i&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ei(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){return null==e}function Ci(e){return 0===e&&1/e==-1/0}function Ii(e){return"number"==typeof e&&Number.isInteger(e)&&!Ci(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new Si("Invalid base64 string: "+e):e}}(e);return new ki(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ki(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ki.EMPTY_BYTE_STRING=new ki("");const xi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(e){if(jr(!!e),"string"==typeof e){let t=0;const n=xi.exec(e);if(jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ni(e.seconds),nanos:Ni(e.nanos)}}function Ni(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oi(e){return"string"==typeof e?ki.fromBase64String(e):ki.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ri(e){const t=e.mapValue.fields.__previous_value__;return Di(t)?Ri(t):t}function Li(e){const t=Ai(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Di(e)?4:Ji(e)?9007199254740991:10:Mr()}function ji(e,t){if(e===t)return!0;const n=Mi(e);if(n!==Mi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Li(e).isEqual(Li(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ai(e.timestampValue),r=Ai(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Oi(e.bytesValue).isEqual(Oi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ni(e.geoPointValue.latitude)===Ni(t.geoPointValue.latitude)&&Ni(e.geoPointValue.longitude)===Ni(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ni(e.integerValue)===Ni(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ni(e.doubleValue),r=Ni(t.doubleValue);return n===r?Ci(n)===Ci(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],ji);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bi(n)!==bi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ji(n[i],r[i])))return!1;return!0}(e,t);default:return Mr()}}function Fi(e,t){return void 0!==(e.values||[]).find((e=>ji(e,t)))}function Ui(e,t){if(e===t)return 0;const n=Mi(e),r=Mi(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ni(e.integerValue||e.doubleValue),r=Ni(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return $i(e.timestampValue,t.timestampValue);case 4:return $i(Li(e),Li(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oi(e),r=Oi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Yr(n[i],r[i]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(Ni(e.latitude),Ni(t.latitude));return 0!==n?n:Yr(Ni(e.longitude),Ni(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ui(n[i],r[i]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Pi.mapValue&&t===Pi.mapValue)return 0;if(e===Pi.mapValue)return 1;if(t===Pi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Yr(r[o],s[o]);if(0!==e)return e;const t=Ui(n[r[o]],i[s[o]]);if(0!==t)return t}return Yr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function $i(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=Ai(e),r=Ai(t),i=Yr(n.seconds,r.seconds);return 0!==i?i:Yr(n.nanos,r.nanos)}function Vi(e){return qi(e)}function qi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ai(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=qi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${qi(e.fields[i])}`;return n+"}"}(e.mapValue):Mr();var t,n}function Bi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Hi(e){return!!e&&"integerValue"in e}function zi(e){return!!e&&"arrayValue"in e}function Ki(e){return!!e&&"nullValue"in e}function Wi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gi(e){return!!e&&"mapValue"in e}function Qi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Qi(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ji(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e,t){this.position=e,this.inclusive=t}}function Yi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Ui(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Zi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ji(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{}class ts extends es{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new us(e,t,n):"array-contains"===t?new fs(e,n):"in"===t?new ps(e,n):"not-in"===t?new gs(e,n):"array-contains-any"===t?new ms(e,n):new ts(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new cs(e,n):new hs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ui(t,this.value)):null!==t&&Mi(this.value)===Mi(t)&&this.matchesComparison(Ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ns extends es{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new ns(e,t)}matches(e){return rs(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt((e=>e.isInequality()));return null!==e?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function rs(e){return"and"===e.op}function is(e){return ss(e)&&rs(e)}function ss(e){for(const t of e.filters)if(t instanceof ns)return!1;return!0}function os(e){if(e instanceof ts)return e.field.canonicalString()+e.op.toString()+Vi(e.value);if(is(e))return e.filters.map((e=>os(e))).join(",");{const t=e.filters.map((e=>os(e))).join(",");return`${e.op}(${t})`}}function as(e,t){return e instanceof ts?function(e,t){return t instanceof ts&&e.op===t.op&&e.field.isEqual(t.field)&&ji(e.value,t.value)}(e,t):e instanceof ns?function(e,t){return t instanceof ns&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&as(n,t.filters[r])),!0)}(e,t):void Mr()}function ls(e){return e instanceof ts?function(e){return`${e.field.canonicalString()} ${e.op} ${Vi(e.value)}`}(e):e instanceof ns?function(e){return e.op.toString()+" {"+e.getFilters().map(ls).join(" ,")+"}"}(e):"Filter"}class us extends ts{constructor(e,t,n){super(e,t,n),this.key=oi.fromName(n.referenceValue)}matches(e){const t=oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class cs extends ts{constructor(e,t){super(e,"in",t),this.keys=ds("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hs extends ts{constructor(e,t){super(e,"not-in",t),this.keys=ds("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ds(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oi.fromName(e.referenceValue)))}class fs extends ts{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zi(t)&&Fi(t.arrayValue,this.value)}}class ps extends ts{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fi(this.value.arrayValue,t)}}class gs extends ts{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fi(this.value.arrayValue,t)}}class ms extends ts{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function ys(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.comparator=e,this.root=t||ws.EMPTY}insert(e,t){return new _s(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ws.BLACK,null,null))}remove(e){return new _s(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ws.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bs(this.root,e,this.comparator,!0)}}class bs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ws{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ws.RED,this.left=null!=r?r:ws.EMPTY,this.right=null!=i?i:ws.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ws(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ws.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ws.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ws.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ws.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}ws.EMPTY=null,ws.RED=!0,ws.BLACK=!1,ws.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ws(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(e){this.comparator=e,this.data=new _s(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ts(this.data.getIterator())}getIteratorFrom(e){return new Ts(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Es))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Es(this.comparator);return t.data=e,t}}class Ts{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new Cs([])}unionWith(e){let t=new Es(si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Cs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.value=e}static empty(){return new Is({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(t)}setAll(e){let t=si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Qi(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){wi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Is(Qi(this.value))}}function Ss(e){const t=[];return wi(e.fields,((e,n)=>{const r=new si([e]);if(Gi(n)){const e=Ss(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Cs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ks(e,0,ti.min(),ti.min(),ti.min(),Is.empty(),0)}static newFoundDocument(e,t,n,r){return new ks(e,1,t,ti.min(),n,r,0)}static newNoDocument(e,t){return new ks(e,2,t,ti.min(),ti.min(),Is.empty(),0)}static newUnknownDocument(e,t){return new ks(e,3,t,ti.min(),ti.min(),Is.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Is.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Is.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ks&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this._t=null}}function As(e,t=null,n=[],r=[],i=null,s=null,o=null){return new xs(e,t,n,r,i,s,o)}function Ns(e){const t=Fr(e);if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>os(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Vi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Vi(e))).join(",")),t._t=e}return t._t}function Os(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ys(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!as(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zi(e.startAt,t.startAt)&&Zi(e.endAt,t.endAt)}function Ds(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Ls(e,t,n,r,i,s,o,a){return new Rs(e,t,n,r,i,s,o,a)}function Ps(e){return new Rs(e)}function Ms(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function js(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fs(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Us(e){return null!==e.collectionGroup}function $s(e){const t=Fr(e);if(null===t.wt){t.wt=[];const e=Fs(t),n=js(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new vs(e)),t.wt.push(new vs(si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new vs(si.keyField(),e))}}}return t.wt}function Vs(e){const t=Fr(e);if(!t.gt)if("F"===t.limitType)t.gt=As(t.path,t.collectionGroup,$s(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of $s(t)){const t="desc"===i.dir?"asc":"desc";e.push(new vs(i.field,t))}const n=t.endAt?new Xi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xi(t.startAt.position,t.startAt.inclusive):null;t.gt=As(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.gt}function qs(e,t){t.getFirstInequalityField(),Fs(e);const n=e.filters.concat([t]);return new Rs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Bs(e,t,n){return new Rs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hs(e,t){return Os(Vs(e),Vs(t))&&e.limitType===t.limitType}function zs(e){return`${Ns(Vs(e))}|lt:${e.limitType}`}function Ks(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ls(e))).join(", ")}]`),Ti(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Vi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Vi(e))).join(",")),`Target(${t})`}(Vs(e))}; limitType=${e.limitType})`}function Ws(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $s(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Yi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$s(e),t))&&!(e.endAt&&!function(e,t,n){const r=Yi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$s(e),t))}(e,t)}function Gs(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qs(e){return(t,n)=>{let r=!1;for(const i of $s(e)){const e=Js(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Js(e,t,n){const r=e.field.isKeyField()?oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ui(r,i):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(t)?"-0":t}}function Ys(e){return{integerValue:""+e}}function Zs(e,t){return Ii(t)?Ys(t):Xs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this._=void 0}}function to(e,t,n){return e instanceof io?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof so?oo(e,t):e instanceof ao?lo(e,t):function(e,t){const n=ro(e,t),r=co(n)+co(e.It);return Hi(n)&&Hi(e.It)?Ys(r):Xs(e.Tt,r)}(e,t)}function no(e,t,n){return e instanceof so?oo(e,t):e instanceof ao?lo(e,t):n}function ro(e,t){return e instanceof uo?Hi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class io extends eo{}class so extends eo{constructor(e){super(),this.elements=e}}function oo(e,t){const n=ho(t);for(const r of e.elements)n.some((e=>ji(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ao extends eo{constructor(e){super(),this.elements=e}}function lo(e,t){let n=ho(t);for(const r of e.elements)n=n.filter((e=>!ji(e,r)));return{arrayValue:{values:n}}}class uo extends eo{constructor(e,t){super(),this.Tt=e,this.It=t}}function co(e){return Ni(e.integerValue||e.doubleValue)}function ho(e){return zi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof so&&t instanceof so||e instanceof ao&&t instanceof ao?Zr(e.elements,t.elements,ji):e instanceof uo&&t instanceof uo?ji(e.It,t.It):e instanceof io&&t instanceof io}(e.transform,t.transform)}class po{constructor(e,t){this.version=e,this.transformResults=t}}class go{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new go}static exists(e){return new go(void 0,e)}static updateTime(e){return new go(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vo{}function yo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new xo(e.key,go.none()):new To(e.key,e.data,go.none());{const n=e.data,r=Is.empty();let i=new Es(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Co(e.key,r,new Cs(i.toArray()),go.none())}}function _o(e,t,n){e instanceof To?function(e,t,n){const r=e.value.clone(),i=So(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Co?function(e,t,n){if(!mo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=So(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Io(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function bo(e,t,n,r){return e instanceof To?function(e,t,n,r){if(!mo(e.precondition,t))return n;const i=e.value.clone(),s=ko(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Co?function(e,t,n,r){if(!mo(e.precondition,t))return n;const i=ko(e.fieldTransforms,r,t),s=t.data;return s.setAll(Io(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return mo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function wo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ro(r.transform,e||null);null!=i&&(null===n&&(n=Is.empty()),n.set(r.field,i))}return n||null}function Eo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>fo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class To extends vo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Co extends vo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Io(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function So(e,t,n){const r=new Map;jr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,no(o,a,n[i]))}return r}function ko(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,to(e,s,t))}return r}class xo extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ao extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oo,Do;function Ro(e){switch(e){default:return Mr();case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0}}function Lo(e){if(void 0===e)return Rr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Oo.OK:return Ur.OK;case Oo.CANCELLED:return Ur.CANCELLED;case Oo.UNKNOWN:return Ur.UNKNOWN;case Oo.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Oo.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Oo.INTERNAL:return Ur.INTERNAL;case Oo.UNAVAILABLE:return Ur.UNAVAILABLE;case Oo.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Oo.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Oo.NOT_FOUND:return Ur.NOT_FOUND;case Oo.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Oo.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Oo.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Oo.ABORTED:return Ur.ABORTED;case Oo.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Oo.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Oo.DATA_LOSS:return Ur.DATA_LOSS;default:return Mr()}}(Do=Oo||(Oo={}))[Do.OK=0]="OK",Do[Do.CANCELLED=1]="CANCELLED",Do[Do.UNKNOWN=2]="UNKNOWN",Do[Do.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Do[Do.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Do[Do.NOT_FOUND=5]="NOT_FOUND",Do[Do.ALREADY_EXISTS=6]="ALREADY_EXISTS",Do[Do.PERMISSION_DENIED=7]="PERMISSION_DENIED",Do[Do.UNAUTHENTICATED=16]="UNAUTHENTICATED",Do[Do.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Do[Do.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Do[Do.ABORTED=10]="ABORTED",Do[Do.OUT_OF_RANGE=11]="OUT_OF_RANGE",Do[Do.UNIMPLEMENTED=12]="UNIMPLEMENTED",Do[Do.INTERNAL=13]="INTERNAL",Do[Do.UNAVAILABLE=14]="UNAVAILABLE",Do[Do.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ei(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new _s(oi.comparator);function jo(){return Mo}const Fo=new _s(oi.comparator);function Uo(...e){let t=Fo;for(const n of e)t=t.insert(n.key,n);return t}function $o(e){let t=Fo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Vo(){return Bo()}function qo(){return Bo()}function Bo(){return new Po((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ho=new _s(oi.comparator),zo=new Es(oi.comparator);function Ko(...e){let t=zo;for(const n of e)t=t.add(n);return t}const Wo=new Es(Yr);function Go(){return Wo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Qo(ti.min(),r,Go(),jo(),Ko())}}class Jo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Jo(n,t,Ko(),Ko(),Ko())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,n,r){this.Et=e,this.removedTargetIds=t,this.key=n,this.At=r}}class Yo{constructor(e,t){this.targetId=e,this.Rt=t}}class Zo{constructor(e,t,n=ki.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ea{constructor(){this.Pt=0,this.vt=ra(),this.bt=ki.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return 0!==this.Pt}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Ko(),t=Ko(),n=Ko();return this.vt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Jo(this.bt,this.Vt,e,t,n)}kt(){this.St=!1,this.vt=ra()}$t(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class ta{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=jo(),this.Kt=na(),this.Gt=new Es(Yr)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,(t=>{const n=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&n.xt(e.resumeToken);break;case 1:n.Ft(),n.Dt||n.kt(),n.xt(e.resumeToken);break;case 2:n.Ft(),n.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(n.Bt(),n.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),n.xt(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach(((e,n)=>{this.Jt(n)&&t(n)}))}Zt(e){const t=e.targetId,n=e.Rt.count,r=this.Xt(t);if(r){const e=r.target;if(Ds(e))if(0===n){const n=new oi(e.path);this.zt(t,n,ks.newNoDocument(n,ti.min()))}else jr(1===n);else this.te(t)!==n&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Ds(i.target)){const t=new oi(i.target.path);null!==this.Ut.get(t)||this.ne(r,t)||this.zt(r,t,ks.newNoDocument(t,e))}n.Ct&&(t.set(r,n.Nt()),n.kt())}}));let n=Ko();this.Kt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new Qo(e,t,this.Gt,this.Ut,n);return this.Ut=jo(),this.Kt=na(),this.Gt=new Es(Yr),r}jt(e,t){if(!this.Jt(e))return;const n=this.ne(e,t.key)?2:0;this.Ht(e).$t(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,n){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,t)?r.$t(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let t=this.qt.get(e);return t||(t=new ea,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new Es(Yr),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=null!==this.Xt(e);return t||Dr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new ea),this.Lt.getRemoteKeysForTarget(e).forEach((t=>{this.zt(e,t,null)}))}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function na(){return new _s(oi.comparator)}function ra(){return new _s(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),sa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),oa=(()=>{const e={and:"AND",or:"OR"};return e})();class aa{constructor(e,t){this.databaseId=e,this.yt=t}}function la(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ua(e,t){return e.yt?t.toBase64():t.toUint8Array()}function ca(e,t){return la(e,t.toTimestamp())}function ha(e){return jr(!!e),ti.fromTimestamp(function(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}(e))}function da(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function fa(e){const t=ri.fromString(e);return jr(Ma(t)),t}function pa(e,t){return da(e.databaseId,t.path)}function ga(e,t){const n=fa(t);if(n.get(1)!==e.databaseId.projectId)throw new $r(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $r(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oi(_a(n))}function ma(e,t){return da(e.databaseId,t)}function va(e){const t=fa(e);return 4===t.length?ri.emptyPath():_a(t)}function ya(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _a(e){return jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ba(e,t,n){return{name:pa(e,t),fields:n.value.mapValue.fields}}function wa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.yt?(jr(void 0===t||"string"==typeof t),ki.fromBase64String(t||"")):(jr(void 0===t||t instanceof Uint8Array),ki.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ur.UNKNOWN:Lo(e.code);return new $r(t,e.message||"")}(o);n=new Zo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ga(e,r.document.name),s=ha(r.document.updateTime),o=r.document.createTime?ha(r.document.createTime):ti.min(),a=new Is({mapValue:{fields:r.document.fields}}),l=ks.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Xo(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ga(e,r.document),s=r.readTime?ha(r.readTime):ti.min(),o=ks.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ga(e,r.document),s=r.removedTargetIds||[];n=new Xo([],s,i,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new No(r),s=e.targetId;n=new Yo(s,i)}}return n}function Ea(e,t){let n;if(t instanceof To)n={update:ba(e,t.key,t.value)};else if(t instanceof xo)n={delete:pa(e,t.key)};else if(t instanceof Co)n={update:ba(e,t.key,t.data),updateMask:Pa(t.fieldMask)};else{if(!(t instanceof Ao))return Mr();n={verify:pa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof io)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof so)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ao)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uo)return{fieldPath:t.field.canonicalString(),increment:n.It};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ca(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function Ta(e,t){return e&&e.length>0?(jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ha(e.updateTime):ha(t);return n.isEqual(ti.min())&&(n=ha(t)),new po(n,e.transformResults||[])}(e,t)))):[]}function Ca(e,t){return{documents:[ma(e,t.path)]}}function Ia(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ma(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ma(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return La(ns.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Da(e.field),direction:Aa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.yt||Ti(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Sa(e){let t=va(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){jr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=xa(e);return t instanceof ns&&is(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new vs(Ra(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ti(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Xi(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Xi(n,t)}(n.endAt)),Ls(t,i,o,s,a,"F",l,u)}function ka(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function xa(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ra(e.unaryFilter.field);return ts.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ra(e.unaryFilter.field);return ts.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ra(e.unaryFilter.field);return ts.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ra(e.unaryFilter.field);return ts.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(e):void 0!==e.fieldFilter?function(e){return ts.create(Ra(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ns.create(e.compositeFilter.filters.map((e=>xa(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mr()}}(e.compositeFilter.op))}(e):Mr()}function Aa(e){return ia[e]}function Na(e){return sa[e]}function Oa(e){return oa[e]}function Da(e){return{fieldPath:e.canonicalString()}}function Ra(e){return si.fromServerFormat(e.fieldPath)}function La(e){return e instanceof ts?function(e){if("=="===e.op){if(Wi(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NAN"}};if(Ki(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Wi(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NOT_NAN"}};if(Ki(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(e.field),op:Na(e.op),value:e.value}}}(e):e instanceof ns?function(e){const t=e.getFilters().map((e=>La(e)));return 1===t.length?t[0]:{compositeFilter:{op:Oa(e.op),filters:t}}}(e):Mr()}function Pa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ma(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ua=Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&_o(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=bo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=bo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=yo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ko())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>Eo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>Eo(e,t)))}}class Va{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){jr(e.mutations.length===n.length);let r=Ho;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Va(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,r,i=ti.min(),s=ti.min(),o=ki.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ba(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.oe=e}}function za(e){const t=Sa({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Bs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(Ni(e.integerValue));else if("doubleValue"in e){const n=Ni(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),Ci(n)?t.de(0):t.de(n))}else if("timestampValue"in e){const n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(Oi(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?Ji(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):Mr()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){const n=e.fields||{};this.fe(t,55);for(const r of Object.keys(n))this.we(r,t),this.he(n[r],t)}Ie(e,t){const n=e.values||[];this.fe(t,50);for(const r of n)this.he(r,t)}ye(e,t){this.fe(t,37),oi.fromName(e).path.forEach((e=>{this.fe(t,60),this.Te(e,t)}))}fe(e,t){e.de(t)}me(e){e.de(2)}}Ka.Ee=new Ka;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.Ze=new Ga}addToCollectionParentIndex(e,t){return this.Ze.add(t),gi.resolve()}getCollectionParents(e,t){return gi.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return gi.resolve()}deleteFieldIndex(e,t){return gi.resolve()}getDocumentsMatchingTarget(e,t){return gi.resolve(null)}getIndexType(e,t){return gi.resolve(0)}getFieldIndexes(e,t){return gi.resolve([])}getNextCollectionGroupToUpdate(e){return gi.resolve(null)}getMinOffset(e,t){return gi.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return gi.resolve(ci.min())}updateCollectionGroup(e,t,n){return gi.resolve()}updateIndexEntries(e,t){return gi.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Es(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Es(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Qa{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Qa(e,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qa.DEFAULT_COLLECTION_PERCENTILE=10,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qa.DEFAULT=new Qa(41943040,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qa.DISABLED=new Qa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Ja(0)}static Sn(){return new Ja(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(){this.changes=new Po((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ks.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?gi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&bo(n.mutation,e,Cs.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ko()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ko()){const r=Vo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Uo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Vo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ko())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=jo();const s=Bo(),o=Bo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Co)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),bo(o.mutation,t,o.mutation.getFieldMask(),ei.now())):s.set(t.key,Cs.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ya(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bo();let r=new _s(((e,t)=>e-t)),i=Ko();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Cs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ko()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=qo();l.forEach((e=>{if(!i.has(e)){const r=yo(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return gi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Us(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):gi.resolve(Vo());let o=-1,a=i;return s.next((t=>gi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?gi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ko()))).next((e=>({batchId:o,changes:$o(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oi(t)).next((e=>{let t=Uo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Uo();return this.indexManager.getCollectionParents(e,r).next((s=>gi.forEach(s,(s=>{const o=function(e,t){return new Rs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ks.newInvalidDocument(r)))}));let n=Uo();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&bo(s.mutation,i,Cs.empty(),ei.now()),Ws(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return gi.resolve(this.es.get(t))}saveBundleMetadata(e,t){var n;return this.es.set(t.id,{id:(n=t).id,version:n.version,createTime:ha(n.createTime)}),gi.resolve()}getNamedQuery(e,t){return gi.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(e){return{name:e.name,query:za(e.bundledQuery),readTime:ha(e.readTime)}}(t)),gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.overlays=new _s(oi.comparator),this.ss=new Map}getOverlay(e,t){return gi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vo();return gi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ce(e,t,r)})),gi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ss.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ss.delete(n)),gi.resolve()}getOverlaysForCollection(e,t,n){const r=Vo(),i=t.length+1,s=new oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return gi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _s(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Vo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Vo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return gi.resolve(o)}ce(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new qa(t,n));let i=this.ss.get(t);void 0===i&&(i=Ko(),this.ss.set(t,i)),this.ss.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.rs=new Es(rl.os),this.us=new Es(rl.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const n=new rl(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ls(new rl(e,t))}fs(e,t){e.forEach((e=>this.removeReference(e,t)))}ds(e){const t=new oi(new ri([])),n=new rl(t,e),r=new rl(t,e+1),i=[];return this.us.forEachInRange([n,r],(e=>{this.ls(e),i.push(e.key)})),i}_s(){this.rs.forEach((e=>this.ls(e)))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new oi(new ri([])),n=new rl(t,e),r=new rl(t,e+1);let i=Ko();return this.us.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new rl(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class rl{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return oi.comparator(e.key,t.key)||Yr(e.gs,t.gs)}static cs(e,t){return Yr(e.gs,t.gs)||oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new Es(rl.os)}checkEmpty(e){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $a(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.ps=this.ps.add(new rl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return gi.resolve(s)}lookupMutationBatch(e,t){return gi.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ts(n),i=r<0?0:r;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new rl(t,0),r=new rl(t,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,r],(e=>{const t=this.Is(e.gs);i.push(t)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Es(Yr);return t.forEach((e=>{const t=new rl(e,0),r=new rl(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],(e=>{n=n.add(e.gs)}))})),gi.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new rl(new oi(i),0);let o=new Es(Yr);return this.ps.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.gs)),!0)}),s),gi.resolve(this.Es(o))}Es(e){const t=[];return e.forEach((e=>{const n=this.Is(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){jr(0===this.As(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return gi.forEach(t.mutations,(r=>{const i=new rl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ps=n}))}Pn(e){}containsKey(e,t){const n=new rl(t,0),r=this.ps.firstAfterOrEqual(n);return gi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,gi.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.Rs=e,this.docs=new _s(oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return gi.resolve(n?n.document.mutableCopy():ks.newInvalidDocument(t))}getEntries(e,t){let n=jo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ks.newInvalidDocument(e))})),gi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=jo();const s=t.path,o=new oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||hi(ui(o),n)<=0||(r.has(o.key)||Ws(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return gi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Mr()}Ps(e,t){return gi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ol(this)}getSize(e){return gi.resolve(this.size)}}class ol extends Xa{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(n)})),gi.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.persistence=e,this.vs=new Po((e=>Ns(e)),Os),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Vs=new nl,this.targetCount=0,this.Ss=Ja.Vn()}forEachTarget(e,t){return this.vs.forEach(((e,n)=>t(n))),gi.resolve()}getLastRemoteSnapshotVersion(e){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return gi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),gi.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new Ja(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,gi.resolve()}updateTargetData(e,t){return this.xn(t),gi.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,gi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.vs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.vs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),gi.waitFor(i).next((()=>r))}getTargetCount(e){return gi.resolve(this.targetCount)}getTargetData(e,t){const n=this.vs.get(t)||null;return gi.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),gi.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),gi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),gi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Vs.ws(t);return gi.resolve(n)}containsKey(e,t){return gi.resolve(this.Vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new vi(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new al(this),this.indexManager=new Wa,this.remoteDocumentCache=function(e){return new sl(e)}((e=>this.referenceDelegate.ks(e))),this.Tt=new Ha(t),this.$s=new el(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new il(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,n){Dr("MemoryPersistence","Starting transaction:",e);const r=new ul(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Fs(e,t){return gi.or(Object.values(this.Ds).map((n=>()=>n.containsKey(e,t))))}}class ul extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class cl{constructor(e){this.persistence=e,this.Bs=new nl,this.Ls=null}static qs(e){return new cl(e)}get Us(){if(this.Ls)return this.Ls;throw Mr()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),gi.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),gi.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach((e=>this.Us.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Us.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ms(){this.Ls=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Us,(n=>{const r=oi.fromPath(n);return this.Ks(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.Ls=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ks(e,t).next((e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())}))}ks(e){return 0}Ks(e,t){return gi.or([()=>gi.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=r}static Ni(e,t){let n=Ko(),r=Ko();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Mi(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Fi(e,t)))}Mi(e,t){if(Ms(t))return gi.resolve(null);let n=Vs(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Bs(t,null,"F"),n=Vs(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ko(...r);return this.$i.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Bi(t,r);return this.Li(t,s,i,n.readTime)?this.Mi(e,Bs(t,null,"F")):this.qi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Ms(t)||r.isEqual(ti.min())?this.Fi(e,t):this.$i.getDocuments(e,n).next((i=>{const s=this.Bi(t,i);return this.Li(t,s,n,r)?this.Fi(e,t):(Or()<=o["in"].DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ks(t)),this.qi(e,s,t,li(r,-1)))}))}Bi(e,t){let n=new Es(Qs(e));return t.forEach(((t,r)=>{Ws(e,r)&&(n=n.add(r))})),n}Li(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,t){return Or()<=o["in"].DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Ks(t)),this.$i.getDocumentsMatchingQuery(e,t,ci.min())}qi(e,t,n,r){return this.$i.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new _s(Yr),this.Gi=new Po((e=>Ns(e)),Os),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Za(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ki)))}}function pl(e,t,n,r){return new fl(e,t,n,r)}async function gl(e,t){const n=Fr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ko();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Wi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ml(e,t){const n=Fr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=gi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);jr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ko();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function vl(e){const t=Fr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ns.getLastRemoteSnapshotVersion(e)))}function yl(e,t){const n=Fr(e),r=t.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Ns.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ns.addMatchingKeys(e,s.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ki.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,s)&&o.push(n.Ns.updateTargetData(e,u))}));let a=jo(),l=Ko();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(_l(e,s,t.documentUpdates).next((e=>{a=e.Hi,l=e.Ji}))),!r.isEqual(ti.min())){const t=n.Ns.getLastRemoteSnapshotVersion(e).next((t=>n.Ns.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return gi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ki=i,e)))}function _l(e,t,n){let r=Ko(),i=Ko();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=jo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Hi:r,Ji:i}}))}function bl(e,t){const n=Fr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function wl(e,t){const n=Fr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ns.getTargetData(e,t).next((i=>i?(r=i,gi.resolve(r)):n.Ns.allocateTargetId(e).next((i=>(r=new Ba(t,i,0,e.currentSequenceNumber),n.Ns.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ki.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(e.targetId,e),n.Gi.set(t,e.targetId)),e}))}async function El(e,t,n){const r=Fr(e),i=r.Ki.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!mi(e))throw e;Dr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ki=r.Ki.remove(t),r.Gi.delete(i.target)}function Tl(e,t,n){const r=Fr(e);let i=ti.min(),s=Ko();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Fr(e),i=r.Gi.get(n);return void 0!==i?gi.resolve(r.Ki.get(i)):r.Ns.getTargetData(t,n)}(r,e,Vs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Ui.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?s:Ko()))).next((e=>(Cl(r,Gs(t),e),{documents:e,Yi:s})))))}function Cl(e,t,n){let r=e.Qi.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Qi.set(t,r)}class Il{constructor(){this.activeTargetIds=Go()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sl{constructor(){this.Ur=new Il,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Il,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{Gr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=null;function Nl(){return null===Al?Al=268435456+Math.round(2147483648*Math.random()):Al++,"0x"+Al.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ol={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="WebChannelConnection";class Ll extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,r,i){const s=Nl(),o=this.fo(e,t);Dr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this._o(a,r,i),this.wo(e,o,a,n).then((t=>(Dr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Lr("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}mo(e,t,n,r,i,s){return this.lo(e,t,n,r,i)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}fo(e,t){const n=Ol[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,r){const i=Nl();return new Promise(((s,o)=>{const a=new Sr;a.setWithCredentials(!0),a.listenOnce(wr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case br.NO_ERROR:const t=a.getResponseJson();Dr(Rl,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case br.TIMEOUT:Dr(Rl,`RPC '${e}' ${i} timed out`),o(new $r(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=a.getStatus();if(Dr(Rl,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(t.status);o(new $r(e,t.message))}else o(new $r(Ur.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $r(Ur.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Dr(Rl,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Dr(Rl,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}yo(e,t,n){const r=Nl(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yr(),o=_r(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Cr({})),this._o(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");Dr(Rl,`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new Dl({Yr:t=>{h?Dr(Rl,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(Dr(Rl,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),Dr(Rl,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Ir.EventType.OPEN,(()=>{h||Dr(Rl,`RPC '${e}' stream ${r} transport opened.`)})),f(u,Ir.EventType.CLOSE,(()=>{h||(h=!0,Dr(Rl,`RPC '${e}' stream ${r} transport closed`),d.oo())})),f(u,Ir.EventType.ERROR,(t=>{h||(h=!0,Lr(Rl,`RPC '${e}' stream ${r} transport errored:`,t),d.oo(new $r(Ur.UNAVAILABLE,"The operation could not be completed")))})),f(u,Ir.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];jr(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Dr(Rl,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Oo[e];if(void 0!==t)return Lo(t)}(t),i=o.message;void 0===n&&(n=Ur.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.oo(new $r(n,i)),u.close()}else Dr(Rl,`RPC '${e}' stream ${r} received:`,i),d.uo(i)}})),f(o,Er.STAT_EVENT,(t=>{t.stat===Tr.PROXY?Dr(Rl,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Tr.NOPROXY&&Dr(Rl,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.ro()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(e){return new aa(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.bo()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,(()=>(this.Ro=Date.now(),e()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,n,r,i,s,o,a){this.Ys=e,this.So=n,this.Do=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new jl(e,t)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Co===t&&this.jo(e,n)}),(t=>{e((()=>{const e=new $r(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)}))}))}jo(e,t){const n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((e=>{n((()=>this.zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(e){return Dr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget((()=>this.Co===e?t():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ul extends Fl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.Tt=i}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=wa(this.Tt,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ha(t.readTime):ti.min()}(e);return this.listener.Ho(t,n)}Jo(e){const t={};t.database=ya(this.Tt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ds(r)?{documents:Ca(e,r)}:{query:Ia(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ua(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=la(e,t.snapshotVersion.toTimestamp())),n}(this.Tt,e);const n=ka(this.Tt,e);n&&(t.labels=n),this.qo(t)}Yo(e){const t={};t.database=ya(this.Tt),t.removeTarget=e,this.qo(t)}}class $l extends Fl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=Ta(e.writeResults,e.commitTime),n=ha(e.commitTime);return this.listener.eu(n,t)}return jr(!e.writeResults||0===e.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=ya(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ea(this.Tt,e)))};this.qo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new $r(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.lo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $r(Ur.UNKNOWN,e.toString())}))}mo(e,t,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.mo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $r(Ur.UNKNOWN,e.toString())}))}terminate(){this.iu=!0}}class ql{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Rr(t),this.cu=!1):Dr("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr((e=>{n.enqueueAndForget((async()=>{Yl(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Fr(e);t.mu.add(4),await zl(t),t.pu.set("Unknown"),t.mu.delete(4),await Hl(t)}(this))}))})),this.pu=new ql(n,r)}}async function Hl(e){if(Yl(e))for(const t of e.gu)await t(!0)}async function zl(e){for(const t of e.gu)await t(!1)}function Kl(e,t){const n=Fr(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),Xl(n)?Jl(n):mu(n).Mo()&&Gl(n,t))}function Wl(e,t){const n=Fr(e),r=mu(n);n.wu.delete(t),r.Mo()&&Ql(n,t),0===n.wu.size&&(r.Mo()?r.Bo():Yl(n)&&n.pu.set("Unknown"))}function Gl(e,t){e.Iu.Ot(t.targetId),mu(e).Jo(t)}function Ql(e,t){e.Iu.Ot(t),mu(e).Yo(t)}function Jl(e){e.Iu=new ta({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),mu(e).start(),e.pu.au()}function Xl(e){return Yl(e)&&!mu(e).$o()&&e.wu.size>0}function Yl(e){return 0===Fr(e).mu.size}function Zl(e){e.Iu=void 0}async function eu(e){e.wu.forEach(((t,n)=>{Gl(e,t)}))}async function tu(e,t){Zl(e),Xl(e)?(e.pu.fu(t),Jl(e)):e.pu.set("Unknown")}async function nu(e,t,n){if(e.pu.set("Online"),t instanceof Zo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.wu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.wu.delete(r),e.Iu.removeTarget(r))}(e,t)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ru(e,n)}else if(t instanceof Xo?e.Iu.Qt(t):t instanceof Yo?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(ti.min()))try{const t=await vl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Iu.ee(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.wu.get(r);i&&e.wu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.wu.get(t);if(!n)return;e.wu.set(t,n.withResumeToken(ki.EMPTY_BYTE_STRING,n.snapshotVersion)),Ql(e,t);const r=new Ba(n.target,t,1,n.sequenceNumber);Gl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Dr("RemoteStore","Failed to raise snapshot:",t),await ru(e,t)}}async function ru(e,t,n){if(!mi(t))throw t;e.mu.add(1),await zl(e),e.pu.set("Offline"),n||(n=()=>vl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await Hl(e)}))}function iu(e,t){return t().catch((n=>ru(e,n,t)))}async function su(e){const t=Fr(e),n=vu(t);let r=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;ou(t);)try{const e=await bl(t.localStore,r);if(null===e){0===t._u.length&&n.Bo();break}r=e.batchId,au(t,e)}catch(e){await ru(t,e)}lu(t)&&uu(t)}function ou(e){return Yl(e)&&e._u.length<10}function au(e,t){e._u.push(t);const n=vu(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function lu(e){return Yl(e)&&!vu(e).$o()&&e._u.length>0}function uu(e){vu(e).start()}async function cu(e){vu(e).su()}async function hu(e){const t=vu(e);for(const n of e._u)t.tu(n.mutations)}async function du(e,t,n){const r=e._u.shift(),i=Va.from(r,t,n);await iu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await su(e)}async function fu(e,t){t&&vu(e).Xo&&await async function(e,t){if(n=t.code,Ro(n)&&n!==Ur.ABORTED){const n=e._u.shift();vu(e).Fo(),await iu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await su(e)}var n}(e,t),lu(e)&&uu(e)}async function pu(e,t){const n=Fr(e);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=Yl(n);n.mu.add(3),await zl(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await Hl(n)}async function gu(e,t){const n=Fr(e);t?(n.mu.delete(2),await Hl(n)):t||(n.mu.add(2),await zl(n),n.pu.set("Unknown"))}function mu(e){return e.Tu||(e.Tu=function(e,t,n){const r=Fr(e);return r.ru(),new Ul(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Xr:eu.bind(null,e),no:tu.bind(null,e),Ho:nu.bind(null,e)}),e.gu.push((async t=>{t?(e.Tu.Fo(),Xl(e)?Jl(e):e.pu.set("Unknown")):(await e.Tu.stop(),Zl(e))}))),e.Tu}function vu(e){return e.Eu||(e.Eu=function(e,t,n){const r=Fr(e);return r.ru(),new $l(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)}(e.datastore,e.asyncQueue,{Xr:cu.bind(null,e),no:fu.bind(null,e),nu:hu.bind(null,e),eu:du.bind(null,e)}),e.gu.push((async t=>{t?(e.Eu.Fo(),await su(e)):(await e.Eu.stop(),e._u.length>0&&(Dr("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))}))),e.Eu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new yu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $r(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(e,t){if(Rr("AsyncQueue",`${t}: ${e}`),mi(e))return new $r(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oi.comparator(t.key,n.key):(e,t)=>oi.comparator(e.key,t.key),this.keyedMap=Uo(),this.sortedSet=new _s(this.comparator)}static emptySet(e){return new bu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new bu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.Au=new _s(oi.comparator)}track(e){const t=e.doc.key,n=this.Au.get(t);n?0!==e.type&&3===n.type?this.Au=this.Au.insert(t,e):3===e.type&&1!==n.type?this.Au=this.Au.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Au=this.Au.remove(t):1===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):Mr():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Eu{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Eu(e,t,bu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Pu=void 0,this.listeners=[]}}class Cu{constructor(){this.queries=new Po((e=>zs(e)),Hs),this.onlineState="Unknown",this.vu=new Set}}async function Iu(e,t){const n=Fr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Tu),i)try{s.Pu=await n.onListen(r)}catch(e){const n=_u(e,`Initialization of query '${Ks(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Pu&&t.Vu(s.Pu)&&Au(n)}async function Su(e,t){const n=Fr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ku(e,t){const n=Fr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Vu(i)&&(r=!0);t.Pu=i}}r&&Au(n)}function xu(e,t,n){const r=Fr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Au(e){e.vu.forEach((e=>{e.next()}))}class Nu{constructor(e,t,n){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Eu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.$u||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ku(e){e=Eu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(e){this.key=e}}class Du{constructor(e){this.key=e}}class Ru{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Ko(),this.mutatedKeys=Ko(),this.ju=Qs(e),this.zu=new bu(this.ju)}get Wu(){return this.Ku}Hu(e,t){const n=t?t.Ju:new wu,r=t?t.zu:this.zu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Ws(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Yu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.ju(c,a)>0||l&&this.ju(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{zu:s,Ju:n,Li:o,mutatedKeys:i}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.ju(e.doc,t.doc))),this.Zu(n);const s=t?this.Xu():[],o=0===this.Qu.size&&this.current?1:0,a=o!==this.Gu;return this.Gu=o,0!==i.length||a?{snapshot:new Eu(this.query,e.zu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:s}:{tc:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new wu,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach((e=>this.Ku=this.Ku.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ku=this.Ku.delete(e))),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Ko(),this.zu.forEach((e=>{this.ec(e.key)&&(this.Qu=this.Qu.add(e.key))}));const t=[];return e.forEach((e=>{this.Qu.has(e)||t.push(new Du(e))})),this.Qu.forEach((n=>{e.has(n)||t.push(new Ou(n))})),t}nc(e){this.Ku=e.Yi,this.Qu=Ko();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return Eu.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class Lu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Pu{constructor(e){this.key=e,this.ic=!1}}class Mu{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.rc={},this.oc=new Po((e=>zs(e)),Hs),this.uc=new Map,this.cc=new Set,this.ac=new _s(oi.comparator),this.hc=new Map,this.lc=new nl,this.fc={},this.dc=new Map,this._c=Ja.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function ju(e,t){const n=nc(e);let r,i;const s=n.oc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const e=await wl(n.localStore,Vs(t));n.isPrimaryClient&&Kl(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Fu(n,t,r,"current"===s,e.resumeToken)}return i}async function Fu(e,t,n,r,i){e.mc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Hu(n);i.Li&&(i=await Tl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Hu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Ju(e,t.targetId,o.tc),o.snapshot}(e,t,n,r);const s=await Tl(e.localStore,t,!0),o=new Ru(t,s.Yi),a=o.Hu(s.documents),l=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);Ju(e,n,u.tc);const c=new Lu(t,n,o);return e.oc.set(t,c),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function Uu(e,t){const n=Fr(e),r=n.oc.get(t),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter((e=>!Hs(e,t)))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await El(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Wl(n.remoteStore,r.targetId),Gu(n,r.targetId)})).catch(pi)):(Gu(n,r.targetId),await El(n.localStore,r.targetId,!0))}async function $u(e,t,n){const r=rc(e);try{const e=await function(e,t){const n=Fr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ko());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=jo(),l=Ko();return n.ji.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=wo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Co(e.key,t,Ss(t.value.mapValue),go.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:$o(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fc[e.currentUser.toKey()];r||(r=new _s(Yr)),r=r.insert(t,n),e.fc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Zu(r,e.changes),await su(r.remoteStore)}catch(e){const t=_u(e,"Failed to persist write");n.reject(t)}}async function Vu(e,t){const n=Fr(e);try{const e=await yl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.hc.get(t);r&&(jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ic=!0:e.modifiedDocuments.size>0?jr(r.ic):e.removedDocuments.size>0&&(jr(r.ic),r.ic=!1))})),await Zu(n,e,t)}catch(e){await pi(e)}}function qu(e,t,n){const r=Fr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.oc.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Fr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&Au(n)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Bu(e,t,n){const r=Fr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.hc.get(t),s=i&&i.key;if(s){let e=new _s(oi.comparator);e=e.insert(s,ks.newNoDocument(s,ti.min()));const n=Ko().add(s),i=new Qo(ti.min(),new Map,new Es(Yr),e,n);await Vu(r,i),r.ac=r.ac.remove(s),r.hc.delete(t),Yu(r)}else await El(r.localStore,t,!1).then((()=>Gu(r,t,n))).catch(pi)}async function Hu(e,t){const n=Fr(e),r=t.batch.batchId;try{const e=await ml(n.localStore,t);Wu(n,r,null),Ku(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(n,e)}catch(e){await pi(e)}}async function zu(e,t,n){const r=Fr(e);try{const e=await function(e,t){const n=Fr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(jr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Wu(r,t,n),Ku(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zu(r,e)}catch(n){await pi(n)}}function Ku(e,t){(e.dc.get(t)||[]).forEach((e=>{e.resolve()})),e.dc.delete(t)}function Wu(e,t,n){const r=Fr(e);let i=r.fc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fc[r.currentUser.toKey()]=i}}function Gu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.uc.get(t))e.oc.delete(r),n&&e.rc.gc(r,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach((t=>{e.lc.containsKey(t)||Qu(e,t)}))}function Qu(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);null!==n&&(Wl(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),Yu(e))}function Ju(e,t,n){for(const r of n)r instanceof Ou?(e.lc.addReference(r.key,t),Xu(e,r)):r instanceof Du?(Dr("SyncEngine","Document no longer in limbo: "+r.key),e.lc.removeReference(r.key,t),e.lc.containsKey(r.key)||Qu(e,r.key)):Mr()}function Xu(e,t){const n=t.key,r=n.path.canonicalString();e.ac.get(n)||e.cc.has(r)||(Dr("SyncEngine","New document in limbo: "+n),e.cc.add(r),Yu(e))}function Yu(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new oi(ri.fromString(t)),r=e._c.next();e.hc.set(r,new Pu(n)),e.ac=e.ac.insert(n,r),Kl(e.remoteStore,new Ba(Vs(Ps(n.path)),r,2,vi.at))}}async function Zu(e,t,n){const r=Fr(e),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach(((e,a)=>{o.push(r.mc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=hl.Ni(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.rc.Ho(i),await async function(e,t){const n=Fr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>gi.forEach(t,(t=>gi.forEach(t.Ci,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>gi.forEach(t.xi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!mi(e))throw e;Dr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ki.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(e,i)}}}(r.localStore,s))}async function ec(e,t){const n=Fr(e);if(!n.currentUser.isEqual(t)){Dr("SyncEngine","User change. New user:",t.toKey());const e=await gl(n.localStore,t);n.currentUser=t,function(e,t){e.dc.forEach((e=>{e.forEach((e=>{e.reject(new $r(Ur.CANCELLED,t))}))})),e.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zu(n,e.Wi)}}function tc(e,t){const n=Fr(e),r=n.hc.get(t);if(r&&r.ic)return Ko().add(r.key);{let e=Ko();const r=n.uc.get(t);if(!r)return e;for(const t of r){const r=n.oc.get(t);e=e.unionWith(r.view.Wu)}return e}}function nc(e){const t=Fr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bu.bind(null,t),t.rc.Ho=ku.bind(null,t.eventManager),t.rc.gc=xu.bind(null,t.eventManager),t}function rc(e){const t=Fr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Hu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zu.bind(null,t),t}class ic{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return pl(this.persistence,new dl,e.initialUser,this.Tt)}Tc(e){return new ll(cl.qs,this.Tt)}Ic(e){return new Sl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>qu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ec.bind(null,this.syncEngine),await gu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cu}createDatastore(e){const t=Ml(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ll(r));var r;return function(e,t,n,r){return new Vl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>qu(this.syncEngine,e,0),s=xl.C()?new xl:new kl,new Bl(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Mu(e,t,n,r,i,s);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Fr(e);Dr("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await zl(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=xr.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Dr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Dr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $r(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_u(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function lc(e,t){e.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await gl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function uc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await cc(e);Dr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>pu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>pu(t.remoteStore,n))),e.onlineComponents=t}async function cc(e){return e.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await lc(e,new ic)),e.offlineComponents}async function hc(e){return e.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await uc(e,new sc)),e.onlineComponents}function dc(e){return hc(e).then((e=>e.syncEngine))}async function fc(e){const t=await hc(e),n=t.eventManager;return n.onListen=ju.bind(null,t.syncEngine),n.onUnlisten=Uu.bind(null,t.syncEngine),n}function pc(e,t,n={}){const r=new Vr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new oc({next:s=>{t.enqueueAndForget((()=>Su(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new $r(Ur.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new $r(Ur.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Nu(Ps(n.path),s,{includeMetadataChanges:!0,$u:!0});return Iu(e,o)}(await fc(e),e.asyncQueue,t,n,r))),r.promise}function gc(e,t,n={}){const r=new Vr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new oc({next:n=>{t.enqueueAndForget((()=>Su(e,o))),n.fromCache&&"server"===r.source?i.reject(new $r(Ur.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Nu(n,s,{includeMetadataChanges:!0,$u:!0});return Iu(e,o)}(await fc(e),e.asyncQueue,t,n,r))),r.promise}const mc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e,t,n){if(!n)throw new $r(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yc(e,t,n,r){if(!0===t&&!0===r)throw new $r(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _c(e){if(!oi.isDocumentKey(e))throw new $r(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function bc(e){if(oi.isDocumentKey(e))throw new $r(Ur.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function Ec(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $r(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wc(e);throw new $r(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Tc(e,t){if(t<=0)throw new $r(Ur.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new $r(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new $r(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,yc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $r(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new $r(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Br;switch(e.type){case"gapi":const t=e.client;return new Wr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new $r(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=mc.get(e);t&&(Dr("ComponentProvider","Removing Datastore"),mc.delete(e),t.terminate())}(this),Promise.resolve()}}function Sc(e,t,n,r={}){var i;const s=(e=Ec(e,Ic))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=xr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new $r(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xr(s)}e._authCredentials=new Hr(new qr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ac(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kc(this.firestore,e,this._key)}}class xc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xc(this.firestore,e,this._query)}}class Ac extends xc{constructor(e,t,n){super(e,t,Ps(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kc(this.firestore,null,new oi(e))}withConverter(e){return new Ac(this.firestore,e,this._path)}}function Nc(e,t,...n){if(e=(0,a.m9)(e),vc("collection","path",t),e instanceof Ic){const r=ri.fromString(t,...n);return bc(r),new Ac(e,null,r)}{if(!(e instanceof kc||e instanceof Ac))throw new $r(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return bc(r),new Ac(e.firestore,null,r)}}function Oc(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Xr.R()),vc("doc","path",t),e instanceof Ic){const r=ri.fromString(t,...n);return _c(r),new kc(e,null,new oi(r))}{if(!(e instanceof kc||e instanceof Ac))throw new $r(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return _c(r),new kc(e.firestore,e instanceof Ac?e.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new jl(this,"async_queue_retry"),this.Hc=()=>{const e=Pl();e&&Dr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};const e=Pl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Pl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise((()=>{}));const t=new Vr;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Uc.push(e),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(E){if(!mi(E))throw E;Dr("AsyncQueue","Operation failed with retryable error: "+E)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(e){const t=this.qc.then((()=>(this.jc=!0,e().catch((e=>{this.Qc=e,this.jc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Rr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.jc=!1,e))))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const r=yu.createAndSchedule(this,e,t,n,(e=>this.Xc(e)));return this.Gc.push(r),r}Jc(){this.Qc&&Mr()}verifyOperationInProgress(){}async ta(){let e;do{e=this.qc,await e}while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then((()=>{this.Gc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Gc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()}))}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function Rc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Lc extends Ic{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Dc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jc(this),this._firestoreClient.terminate()}}function Pc(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&Sc(s,...e)}return s}function Mc(e){return e._firestoreClient||jc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function jc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new yi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ac(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fc(ki.fromBase64String(e))}catch(e){throw new $r(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Fc(ki.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new $r(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $r(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $r(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=/^__.*__$/;class Bc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Co(e,this.data,this.fieldMask,t,this.fieldTransforms):new To(e,this.data,t,this.fieldTransforms)}}class Hc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Co(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Kc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.aa(e),r}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return ah(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(zc(this.ra)&&qc.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Wc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||Ml(e)}wa(e,t,n,r=!1){return new Kc({ra:e,methodName:t,_a:n,path:si.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Gc(e){const t=e._freezeSettings(),n=Ml(e._databaseId);return new Wc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qc(e,t,n,r,i,s={}){const o=e.wa(s.merge||s.mergeFields?2:0,t,n,i);rh("Data must be an object, but it was:",o,r);const a=th(r,o);let l,u;if(s.merge)l=new Cs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ih(t,r,n);if(!o.contains(i))throw new $r(Ur.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lh(e,i)||e.push(i)}l=new Cs(e),u=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=o.fieldTransforms;return new Bc(new Is(a),l,u)}class Jc extends $c{_toFieldTransform(e){if(2!==e.ra)throw 1===e.ra?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function Xc(e,t,n,r){const i=e.wa(1,t,n);rh("Data must be an object, but it was:",i,r);const s=[],o=Is.empty();wi(r,((e,r)=>{const l=oh(t,e,n);r=(0,a.m9)(r);const u=i.ha(l);if(r instanceof Jc)s.push(l);else{const e=eh(r,u);null!=e&&(s.push(l),o.set(l,e))}}));const l=new Cs(s);return new Hc(o,l,i.fieldTransforms)}function Yc(e,t,n,r,i,s){const o=e.wa(1,t,n),l=[ih(t,r,n)],u=[i];if(s.length%2!=0)throw new $r(Ur.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)l.push(ih(t,s[a])),u.push(s[a+1]);const c=[],h=Is.empty();for(let f=l.length-1;f>=0;--f)if(!lh(c,l[f])){const e=l[f];let t=u[f];t=(0,a.m9)(t);const n=o.ha(e);if(t instanceof Jc)c.push(e);else{const r=eh(t,n);null!=r&&(c.push(e),h.set(e,r))}}const d=new Cs(c);return new Hc(h,d,o.fieldTransforms)}function Zc(e,t,n,r=!1){return eh(n,e.wa(r?4:3,t))}function eh(e,t){if(nh(e=(0,a.m9)(e)))return rh("Unsupported field value:",t,e),th(e,t);if(e instanceof $c)return function(e,t){if(!zc(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&4!==t.ra)throw t.fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=eh(i,t.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zs(t.Tt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:la(t.Tt,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:la(t.Tt,n)}}if(e instanceof Vc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Fc)return{bytesValue:ua(t.Tt,e._byteString)};if(e instanceof kc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:da(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${wc(e)}`)}(e,t)}function th(e,t){const n={};return Ei(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wi(e,((e,r)=>{const i=eh(r,t.ua(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function nh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Vc||e instanceof Fc||e instanceof kc||e instanceof $c)}function rh(e,t,n){if(!nh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wc(n);throw"an object"===r?t.fa(e+" a custom object"):t.fa(e+" "+r)}}function ih(e,t,n){if((t=(0,a.m9)(t))instanceof Uc)return t._internalPath;if("string"==typeof t)return oh(e,t);throw ah("Field path arguments must be of type string or ",e,!1,void 0,n)}const sh=new RegExp("[~\\*/\\[\\]]");function oh(e,t,n){if(t.search(sh)>=0)throw ah(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Uc(...t.split("."))._internalPath}catch(r){throw ah(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ah(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $r(Ur.INVALID_ARGUMENT,a+e+l)}function lh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ch(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ch extends uh{data(){return super.data()}}function hh(e,t){return"string"==typeof t?oh(e,t):t instanceof Uc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new $r(Ur.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}class ph extends fh{}function gh(e,t,...n){let r=[];t instanceof fh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof yh)).length,n=e.filter((e=>e instanceof mh)).length;if(t>1||t>0&&n>0)throw new $r(Ur.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class mh extends ph{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new mh(e,t,n)}_apply(e){const t=this._parse(e);return Ih(e._query,t),new xc(e.firestore,e.converter,qs(e._query,t))}_parse(e){const t=Gc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new $r(Ur.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ch(o,s);const t=[];for(const n of o)t.push(Th(r,e,n));a={arrayValue:{values:t}}}else a=Th(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ch(o,s),a=Zc(n,t,o,"in"===s||"not-in"===s);return ts.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function vh(e,t,n){const r=t,i=hh("where",e);return mh._create(i,r,n)}class yh extends fh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ns.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Ih(n,i),n=qs(n,i)}(e._query,t),new xc(e.firestore,e.converter,qs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class _h extends ph{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _h(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new $r(Ur.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new $r(Ur.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new vs(t,n);return function(e,t){if(null===js(e)){const n=Fs(e);null!==n&&Sh(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new xc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Rs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function bh(e,t="asc"){const n=t,r=hh("orderBy",e);return _h._create(r,n)}class wh extends ph{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new wh(e,t,n)}_apply(e){return new xc(e.firestore,e.converter,Bs(e._query,this._limit,this._limitType))}}function Eh(e){return Tc("limit",e),wh._create("limit",e,"F")}function Th(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new $r(Ur.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Us(t)&&-1!==n.indexOf("/"))throw new $r(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!oi.isDocumentKey(r))throw new $r(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bi(e,new oi(r))}if(n instanceof kc)return Bi(e,n._key);throw new $r(Ur.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wc(n)}.`)}function Ch(e,t){if(!Array.isArray(e)||0===e.length)throw new $r(Ur.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ih(e,t){if(t.isInequality()){const n=Fs(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new $r(Ur.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=js(e);null!==i&&Sh(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new $r(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new $r(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Sh(e,t,n){if(!n.isEqual(t))throw new $r(Ur.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class kh{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ni(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return wi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Vc(Ni(e.latitude),Ni(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ri(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);jr(Ma(n));const r=new _i(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(t)||Rr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ah{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nh extends uh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(hh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Oh extends Nh{data(e={}){return super.data(e)}}class Dh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ah(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Oh(this._firestore,this._userDataWriter,n.key,n,new Ah(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $r(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Oh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ah(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Oh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ah(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Rh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lh(e){e=Ec(e,kc);const t=Ec(e.firestore,Lc);return pc(Mc(t),e._key).then((n=>Bh(t,e,n)))}class Ph extends kh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kc(this.firestore,null,t)}}function Mh(e){e=Ec(e,xc);const t=Ec(e.firestore,Lc),n=Mc(t),r=new Ph(t);return dh(e._query),gc(n,e._query).then((n=>new Dh(t,r,e,n)))}function jh(e,t,n){e=Ec(e,kc);const r=Ec(e.firestore,Lc),i=xh(e.converter,t,n);return qh(r,[Qc(Gc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,go.none())])}function Fh(e,t,n,...r){e=Ec(e,kc);const i=Ec(e.firestore,Lc),s=Gc(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Uc?Yc(s,"updateDoc",e._key,t,n,r):Xc(s,"updateDoc",e._key,t),qh(i,[o.toMutation(e._key,go.exists(!0))])}function Uh(e){return qh(Ec(e.firestore,Lc),[new xo(e._key,go.none())])}function $h(e,t){const n=Ec(e.firestore,Lc),r=Oc(e),i=xh(e.converter,t);return qh(n,[Qc(Gc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,go.exists(!1))]).then((()=>r))}function Vh(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Rc(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges};if(Rc(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,c,h;if(e instanceof kc)c=Ec(e.firestore,Lc),h=Ps(e._key.path),u={next:n=>{t[o]&&t[o](Bh(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Ec(e,xc);c=Ec(n.firestore,Lc),h=n._query;const r=new Ph(c);u={next:e=>{t[o]&&t[o](new Dh(c,r,n,e))},error:t[o+1],complete:t[o+2]},dh(e._query)}return function(e,t,n,r){const i=new oc(r),s=new Nu(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Iu(await fc(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>Su(await fc(e),s)))}}(Mc(c),h,l,u)}function qh(e,t){return function(e,t){const n=new Vr;return e.asyncQueue.enqueueAndForget((async()=>$u(await dc(e),t,n))),n.promise}(Mc(e),t)}function Bh(e,t,n){const r=n.docs.get(t._key),i=new Ph(e);return new Nh(e,i,t._key,r,new Ah(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hh(){return new Jc("deleteField")}!function(e,t=!0){!function(e){Ar=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Lc(new zr(e.getProvider("auth-internal")),new Qr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new $r(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _i(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(kr,"3.9.0",e),(0,i.KN)(kr,"3.9.0","esm2017")}()},6650:function(e,t,n){"use strict";n.d(t,{oq:function(){return ot},Jt:function(){return st},cF:function(){return lt},iH:function(){return at},KV:function(){return it}});var r=n(5816),i=n(4444),s=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends i.ZR{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new c(h.UNKNOWN,e)}function g(e){return new c(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function m(e){return new c(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c(h.UNAUTHENTICATED,e)}function y(){return new c(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(e){return new c(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function b(){return new c(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new c(h.CANCELED,"User canceled the upload/download.")}function E(e){return new c(h.INVALID_URL,"Invalid URL '"+e+"'.")}function T(e){return new c(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function C(){return new c(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function I(){return new c(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function S(){return new c(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(e){return new c(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function x(e){return new c(h.INVALID_ARGUMENT,e)}function A(){return new c(h.APP_DELETED,"The Firebase app was deleted.")}function N(e){return new c(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(e,t){return new c(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function D(e){throw new c(h.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class R{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=R.makeFromUrl(e,t)}catch(r){return new R(e,"")}if(""===n.path)return n;throw T(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),l={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:l,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<_.length;o++){const t=_[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new R(e,i),t.postModify(n);break}}if(null==n)throw E(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void c.call(null,e,...t);const n=l()||o;if(n)return d(),void c.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function M(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return void 0!==e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function U(e){return"string"===typeof e||e instanceof String}function $(e){return V()&&e instanceof Blob}function V(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function q(e,t,n,r){if(r<t)throw x(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw x(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function H(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(d||(d={}));class K{constructor(e,t,n,r,i,s,o,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!t||z(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===d.ABORT;return void e(!1,new W(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new W(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());j(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=p();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?A():w();r(e)}else{const e=b();r(e)}};this.canceled_?t(!1,new W(!1,null,!0)):this.backoffId_=P(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function G(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function X(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,r,i,s,o=!0){const a=H(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return J(u,t),G(u,n),Q(u,s),X(u,r),new K(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Z();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(V())return new Blob(e);throw new c(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){if("undefined"===typeof atob)throw k("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(e,t){this.data=e,this.contentType=t||null}}function se(e,t){switch(e){case re.RAW:return new ie(oe(t));case re.BASE64:case re.BASE64URL:return new ie(le(e,t));case re.DATA_URL:return new ie(ce(t),he(t))}throw p()}function oe(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw O(re.DATA_URL,"Malformed data URL.")}return oe(t)}function le(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw O(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw O(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw O(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ue{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw O(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ce(e){const t=new ue(e);return t.base64?le(re.BASE64,t.rest):ae(t.rest)}function he(e){const t=new ue(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){let n=0,r="";$(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new fe(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new fe(n,!0)}}static getBlob(...e){if(V()){const t=e.map((e=>e instanceof fe?e.data_:e));return new fe(ee.apply(null,t))}{const t=e.map((e=>U(e)?se(re.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new fe(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return F(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function me(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ve(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t){return t}class _e{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ye}}let be=null;function we(e){return!U(e)||e.length<2?e:ve(e)}function Ee(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new _e("bucket")),e.push(new _e("generation")),e.push(new _e("metageneration")),e.push(new _e("name","fullPath",!0));const n=new _e("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new _e("size");return i.xform=r,e.push(i),e.push(new _e("timeCreated")),e.push(new _e("updated")),e.push(new _e("md5Hash",null,!0)),e.push(new _e("cacheControl",null,!0)),e.push(new _e("contentDisposition",null,!0)),e.push(new _e("contentEncoding",null,!0)),e.push(new _e("contentLanguage",null,!0)),e.push(new _e("contentType",null,!0)),e.push(new _e("metadata","customMetadata",!0)),be=e,be}function Te(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new R(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ce(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Te(r,e),r}function Ie(e,t,n){const r=pe(t);if(null===r)return null;const i=r;return Ce(e,i,n)}function Se(e,t,n,r){const i=pe(t);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),l=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),l=B(a,n,r),u=H({alt:"media",token:t});return l+u}));return l[0]}function ke(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){if(!e)throw p()}function Ne(e,t){function n(n,r){const i=Ie(e,r,t);return Ae(null!==i),i}return n}function Oe(e,t){function n(n,r){const i=Ie(e,r,t);return Ae(null!==i),Se(i,r,e.host,e._protocol)}return n}function De(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===t.getStatus()?m(e.bucket):403===t.getStatus()?_(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Re(e){const t=De(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=g(e.path)),i.serverResponse=r.serverResponse,i}return n}function Le(e,t,n){const r=t.fullServerUrl(),i=B(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new xe(i,s,Oe(e,n),o);return a.errorHandler=Re(t),a}function Pe(e,t){const n=t.fullServerUrl(),r=B(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new xe(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Re(t),a}function Me(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function je(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Me(null,t)),r}function Fe(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=je(t,r,i),c=ke(u,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+l+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",f=fe.getBlob(h,r,d);if(null===f)throw I();const p={name:u["fullPath"]},g=B(s,e.host,e._protocol),m="POST",v=e.maxUploadRetryTime,y=new xe(g,m,Ne(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=De(t),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ue=null;class $e{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ve extends $e{initXhr(){this.xhr_.responseType="text"}}function qe(){return Ue?Ue():new Ve}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e,t){this._service=e,this._location=t instanceof R?t:R.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Be(e,t)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const e=ge(this._location.path);if(null===e)return null;const t=new R(this._location.bucket,e);return new Be(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw N(e)}}function He(e,t,n){e._throwIfRoot("uploadBytes");const r=Fe(e.storage,e._location,Ee(),new fe(t,!0),n);return e.storage.makeRequestWithTokens(r,qe).then((t=>({metadata:t,ref:e})))}function ze(e){e._throwIfRoot("getDownloadURL");const t=Le(e.storage,e._location,Ee());return e.storage.makeRequestWithTokens(t,qe).then((e=>{if(null===e)throw S();return e}))}function Ke(e){e._throwIfRoot("deleteObject");const t=Pe(e.storage,e._location);return e.storage.makeRequestWithTokens(t,qe)}function We(e,t){const n=me(e._location.path,t),r=new R(e._location.bucket,n);return new Be(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return/^[A-Za-z]+:\/\//.test(e)}function Qe(e,t){return new Be(e,t)}function Je(e,t){if(e instanceof et){const n=e;if(null==n._bucket)throw C();const r=new Be(n,n._bucket);return null!=t?Je(r,t):r}return void 0!==t?We(e,t):e}function Xe(e,t){if(t&&Ge(t)){if(e instanceof et)return Qe(e,t);throw x("To use ref(service, url), the first argument must be a Storage instance.")}return Je(e,t)}function Ye(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:R.makeFromBucketSpec(n,e)}function Ze(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,e.app.options.projectId))}class et{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?R.makeFromBucketSpec(r,this._host):Ye(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Ye(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Be(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new L(A());{const s=Y(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const tt="@firebase/storage",nt="0.11.2",rt="storage";function it(e,t,n){return e=(0,i.m9)(e),He(e,t,n)}function st(e){return e=(0,i.m9)(e),ze(e)}function ot(e){return e=(0,i.m9)(e),Ke(e)}function at(e,t){return e=(0,i.m9)(e),Xe(e,t)}function lt(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,rt),s=n.getImmediate({identifier:t}),o=(0,i.P0)("storage");return o&&ut(s,...o),s}function ut(e,t,n,r={}){Ze(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new et(n,i,s,t,r.Jn)}function ht(){(0,r.Xd)(new s.wA(rt,ct,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(tt,nt,""),(0,r.KN)(tt,nt,"esm2017")}ht()},2201:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return $}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=c(i)?i.map(e):e(i)}return n}const u=()=>{},c=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return c(e)?b(e,t):c(t)?b(t,e):e===t}function b(e,t){return c(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function S(e,t){return e.replace(I,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=k(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function D(e,t){O.set(e,t)}function R(e){const t=O.get(e);return O.delete(e),t}let L=()=>location.protocol+"//"+location.host;function P(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const l=({state:s})=>{const a=P(e,location),l=n.value,u=t.value;let c=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);c=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:c,type:E.pop,direction:c?c>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:c,destroy:d}}function j(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function F(e){const{history:t,location:n}=window,r={value:P(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:L()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,j(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function l(e,n){const o=a({},i.value,t.state,{forward:e,scroll:x()});s(o.current,o,!0);const l=a({},j(r.value,e,null),{position:o.position+1},n);s(e,l,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:o}}function U(e){e=C(e);const t=F(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function $(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function V(e){return"string"===typeof e||e&&"object"===typeof e}function q(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function K(e,t){return a(new Error,{type:e,[H]:!0},t)}function W(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},Q,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const c=u||G;if(c!==G){o+=10;try{new RegExp(`(${c})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+h.message)}}let d=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===c&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(c(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=c(l)?l.join("/"):l;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:l,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,u="",c="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==c[c.length-1]?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&c(f)}return p?()=>{o(p)}:u}function o(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function c(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,o=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(l)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(l=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,l=a({},t.params,e.params),s=i.stringify(l)}const u=[];let c=i;while(c)u.unshift(c.record),c=c.parent;return{name:o,path:s,params:l,matched:u,meta:ce(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,ge=/\//g,me=/=/g,ve=/\?/g,ye=/\+/g,_e=/%5B/g,be=/%5D/g,we=/%5E/g,Ee=/%60/g,Te=/%7B/g,Ce=/%7C/g,Ie=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ce,"|").replace(_e,"[").replace(be,"]")}function xe(e){return ke(e).replace(Te,"{").replace(Ie,"}").replace(we,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(Se,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ie,"}").replace(we,"^")}function Ne(e){return Ae(e).replace(me,"%3D")}function Oe(e){return ke(e).replace(fe,"%23").replace(ve,"%3F")}function De(e){return null==e?"":Oe(e).replace(ge,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=Re(n<0?e:e.slice(0,n)),o=n<0?null:Re(e.slice(n+1));if(s in t){let e=t[s];c(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=c(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=c(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const je=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),$e=Symbol(""),Ve=Symbol("");function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):V(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,l=o[t];l&&i.push(Be(l,n,r,s,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&Be(u,n,r,s,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ue),n=(0,r.f3)($e),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function c(n={}){return Qe(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:c}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=We;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!c(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Ve),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),c=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(je,c),(0,r.JJ)(Ve,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,c.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,l=c.value,u=l&&l.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=l.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(l.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:i})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Le,o=e.stringifyQuery||Pe,h=e.history;const d=qe(),g=qe(),v=qe(),y=(0,i.XI)(B);let _=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),w=l.bind(null,De),T=l.bind(null,Re);function C(e,n){let r,i;return q(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Re(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:w(e.params)}),r.params=w(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=b(T(s.params));const u=p(o,a({},e,{hash:xe(l),path:s.path})),c=h.createHref(u);return a({fullPath:u,hash:l,query:o===Pe?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:c})}function L(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function P(e,t){if(_!==e)return K(8,{from:t,to:e})}function M(e){return U(e)}function j(e){return M(a(L(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=_=O(e),r=y.value,i=e.state,s=e.force,l=!0===e.replace,u=F(n);if(u)return U(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:l}),t||n);const c=n;let h;return c.redirectedFrom=t,!s&&m(o,r,n)&&(h=K(16,{to:c,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):V(c,r)).catch((e=>W(e)?W(e,2)?e:te(e):Z(e,c,r))).then((e=>{if(e){if(W(e,2))return U(a({replace:l},L(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||c)}else e=z(c,r,!0,l,i);return H(c,r,e),e}))}function $(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,i,s]=it(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=$.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(o),rt(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(c(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of g.list())n.push(Be(r,e,t));return n.push(o),rt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of v.list())r(e,t,n)}function z(e,t,n,r,i){const o=P(e,t);if(o)return o;const l=t===B,u=s?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&u&&u.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let G;function Q(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=O(e),i=F(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);_=r;const o=y.value;s&&D(N(o.fullPath,n.delta),x()),V(r,o).catch((e=>W(e,12)?e:W(e,2)?(U(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||z(r,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let J,X=qe(),Y=qe();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return J&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return J||(J=!e,Q(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!i&&R(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:C,removeRoute:I,hasRoute:k,getRoutes:S,resolve:O,options:e,push:M,replace:j,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:g.add,afterEach:v.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ie&&y.value===B&&(ie=!0,M(h.location).catch((e=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide($e,(0,i.qj)(n)),e.provide(Ve,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=B,G&&G(),G=null,y.value=B,ie=!1,J=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.2c2dffd7.js.map