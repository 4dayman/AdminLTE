(self["webpackChunkadminlte"]=self["webpackChunkadminlte"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return w},L:function(){return c},LL:function(){return R},P0:function(){return g},Pz:function(){return y},Sg:function(){return _},ZR:function(){return O},aH:function(){return v},b$:function(){return T},eu:function(){return C},hl:function(){return S},m9:function(){return B},ne:function(){return F},pd:function(){return $},q4:function(){return m},ru:function(){return I},tV:function(){return u},uI:function(){return E},vZ:function(){return P},w1:function(){return k},xO:function(){return M},xb:function(){return x},z$:function(){return b},zd:function(){return U}});
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const d=e<<2|a>>4;if(r.push(d),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/AdminLTE/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
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
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const A="FirebaseError";class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function N(t,e){return t.replace(D,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
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
 */function x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function P(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(L(n)&&L(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
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
function M(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function $(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function F(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=j(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function q(){}
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
function B(t){return t&&t._delegate?t._delegate:t}},2262:function(t,e,n){"use strict";n.d(e,{$y:function(){return At},B:function(){return o},Bj:function(){return s},Fl:function(){return Gt},IU:function(){return Nt},Jd:function(){return k},PG:function(){return Ct},SU:function(){return qt},Um:function(){return Tt},WL:function(){return Kt},X$:function(){return O},X3:function(){return Rt},XI:function(){return Ft},Xl:function(){return Dt},dq:function(){return Ut},iH:function(){return $t},j:function(){return C},lk:function(){return S},nZ:function(){return c},qj:function(){return It},qq:function(){return b},yT:function(){return Ot}});var r=n(3577);let i;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},l=t=>(t.w&g)>0,h=t=>(t.n&g)>0,d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];l(i)&&!h(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},p=new WeakMap;let m=0,g=1;const v=30;let y;const w=Symbol(""),_=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=I;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,I=!0,g=1<<++m,m<=v?d(this):E(this),this.fn()}finally{m<=v&&f(this),g=1<<--m,y=this.parent,I=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I=!0;const T=[];function k(){T.push(I),I=!1}function S(){const t=T.pop();I=void 0===t||t}function C(t,e,n){if(I&&y){let e=p.get(t);e||p.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=u());const i=void 0;A(r,i)}}function A(t,e){let n=!1;m<=v?h(t)||(t.n|=g,n=!l(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function O(t,e,n,i,s,o){const a=p.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(w)),(0,r._N)(t)&&c.push(a.get(_)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(w)),(0,r._N)(t)&&c.push(a.get(_)));break;case"set":(0,r._N)(t)&&c.push(a.get(w));break}if(1===c.length)c[0]&&R(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);R(u(t))}}function R(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&N(r,e);for(const r of n)r.computed||N(r,e)}function N(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),P=V(),L=V(!1,!0),M=V(!0),U=$();function $(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,i=this.length;e<i;e++)C(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){k();const n=Nt(this)[e].apply(this,t);return S(),n}})),t}function F(t){const e=Nt(this);return C(e,"has",t),e.hasOwnProperty(t)}function V(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?_t:wt:e?yt:vt).get(n))return n;const o=(0,r.kJ)(n);if(!t){if(o&&(0,r.RI)(U,i))return Reflect.get(U,i,s);if("hasOwnProperty"===i)return F}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?x.has(i):D(i))?a:(t||C(n,"get",i),e?a:Ut(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?kt(a):It(a):a)}}const j=B(),q=B(!0);function B(t=!1){return function(e,n,i,s){let o=e[n];if(At(o)&&Ut(o)&&!Ut(i))return!1;if(!t&&(Ot(i)||At(i)||(o=Nt(o),i=Nt(i)),!(0,r.kJ)(e)&&Ut(o)&&!Ut(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===Nt(s)&&(a?(0,r.aU)(i,o)&&O(e,"set",n,i,o):O(e,"add",n,i)),c}}function K(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&O(t,"delete",e,void 0,i),s}function z(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&x.has(e)||C(t,"has",e),n}function H(t){return C(t,"iterate",(0,r.kJ)(t)?"length":w),Reflect.ownKeys(t)}const G={get:P,set:j,deleteProperty:K,has:z,ownKeys:H},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},J=(0,r.l7)({},G,{get:L,set:q}),Q=t=>t,X=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Nt(t),s=Nt(e);n||(e!==s&&C(i,"get",e),C(i,"get",s));const{has:o}=X(i),a=r?Q:n?Pt:xt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=Nt(n),i=Nt(t);return e||(t!==i&&C(r,"has",t),C(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&C(Nt(t),"iterate",w),Reflect.get(t,"size",t)}function et(t){t=Nt(t);const e=Nt(this),n=X(e),r=n.has.call(e,t);return r||(e.add(t),O(e,"add",t,t)),this}function nt(t,e){e=Nt(e);const n=Nt(this),{has:i,get:s}=X(n);let o=i.call(n,t);o||(t=Nt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&O(n,"set",t,e,a):O(n,"add",t,e),this}function rt(t){const e=Nt(this),{has:n,get:r}=X(e);let i=n.call(e,t);i||(t=Nt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&O(e,"delete",t,void 0,s),o}function it(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&O(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Nt(s),a=e?Q:t?Pt:xt;return!t&&C(o,"iterate",w),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=Nt(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?Q:e?Pt:xt;return!e&&C(o,"iterate",u?_:w),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return Y(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=ot(i,!1,!1),n[i]=ot(i,!0,!1),e[i]=ot(i,!1,!0),r[i]=ot(i,!0,!0)})),[t,n,e,r]}const[ut,lt,ht,dt]=ct();function ft(t,e){const n=e?t?dt:ht:t?lt:ut;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const pt={get:ft(!1,!1)},mt={get:ft(!1,!0)},gt={get:ft(!0,!1)};const vt=new WeakMap,yt=new WeakMap,wt=new WeakMap,_t=new WeakMap;function bt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:bt((0,r.W7)(t))}function It(t){return At(t)?t:St(t,!1,G,pt,vt)}function Tt(t){return St(t,!1,J,mt,yt)}function kt(t){return St(t,!0,W,gt,wt)}function St(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Ct(t){return At(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function At(t){return!(!t||!t["__v_isReadonly"])}function Ot(t){return!(!t||!t["__v_isShallow"])}function Rt(t){return Ct(t)||At(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const xt=t=>(0,r.Kn)(t)?It(t):t,Pt=t=>(0,r.Kn)(t)?kt(t):t;function Lt(t){I&&y&&(t=Nt(t),A(t.dep||(t.dep=u())))}function Mt(t,e){t=Nt(t);const n=t.dep;n&&R(n)}function Ut(t){return!(!t||!0!==t.__v_isRef)}function $t(t){return Vt(t,!1)}function Ft(t){return Vt(t,!0)}function Vt(t,e){return Ut(t)?t:new jt(t,e)}class jt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:xt(t)}get value(){return Lt(this),this._value}set value(t){const e=this.__v_isShallow||Ot(t)||At(t);t=e?t:Nt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:xt(t),Mt(this,t))}}function qt(t){return Ut(t)?t.value:t}const Bt={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ut(i)&&!Ut(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Kt(t){return Ct(t)?t:new Proxy(t,Bt)}var zt;class Ht{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[zt]=!1,this._dirty=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,Mt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Lt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Ht(i,s,o||!s,n);return a}zt="__v_isReadonly"},6252:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return M},FN:function(){return gn},Fl:function(){return Dn},HY:function(){return Pe},JJ:function(){return H},Jd:function(){return St},Ko:function(){return Ft},P$:function(){return rt},Q6:function(){return ut},U2:function(){return st},Uk:function(){return rn},Us:function(){return Ae},WI:function(){return Vt},Wm:function(){return Ze},Y3:function(){return y},Y8:function(){return tt},YP:function(){return J},_:function(){return Ye},aZ:function(){return lt},dD:function(){return L},f3:function(){return G},h:function(){return xn},iD:function(){return ze},ic:function(){return kt},j4:function(){return He},kq:function(){return on},nK:function(){return ct},uE:function(){return sn},up:function(){return Lt},w5:function(){return U},wF:function(){return Et},wg:function(){return Ve},wy:function(){return Dt}});var r=n(2262),i=n(3577);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(t){const e=v||g;return t?e.then(this?t.bind(this):t):e}function w(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=S(h[r]);i<t?e=r+1:n=r}return e}function _(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),b())}function b(){u||l||(l=!0,v=g.then(A))}function E(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function I(t){(0,i.kJ)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||f.push(t),b()}function T(t,e=(u?d+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function k(t){if(f.length){const t=[...new Set(f)];if(f.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>S(t)-S(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const S=t=>null==t.id?1/0:t.id,C=(t,e)=>{const n=S(t)-S(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,k(t),u=!1,v=null,(h.length||f.length)&&A(t)}}new Set;new Map;function O(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function R(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=R(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function N(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let D=null,x=null;function P(t){const e=D;return D=t,x=t&&t.type.__scopeId||null,e}function L(t){x=t}function M(){x=null}function U(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Be(-1);const i=P(e);let s;try{s=t(...n)}finally{P(i),r._d&&Be(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function $(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,w;const _=P(t);try{if(4&n.shapeFlag){const t=s||r;y=an(d.call(t,t,f,o,m,p,g)),w=l}else{const t=e;0,y=an(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:F(l)}}catch(E){$e.length=0,a(E,t,1),y=Ze(Me)}let b=y;if(w&&!1!==v){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(c&&t.some(i.tR)&&(w=V(w,c)),b=nn(b,w))}return n.dirs&&(b=nn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,P(_),y}const F=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},V=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function j(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?q(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function q(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!N(n,s))return!0}return!1}function B({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const K=t=>t.__isSuspense;function z(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):I(t)}function H(t,e){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[t]=e}else 0}function G(t,e,n=!1){const r=mn||D;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const W={};function J(t,e,n){return Q(t,e,n)}function Q(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=(0,r.nZ)()===(null===mn||void 0===mn?void 0:mn.scope)?mn:null;let d,f,p=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Z(t):(0,i.mf)(t)?s(t,h,2):void 0))):d=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[v])}:i.dG,e&&a){const t=d;d=()=>Z(t())}let g,v=t=>{f=E.onStop=()=>{s(t,h,4)}};if(En){if(v=i.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,v]):d(),"sync"!==c)return i.dG;{const t=Ln();g=t.__watcherHandles||(t.__watcherHandles=[])}}let y=m?new Array(t.length).fill(W):W;const w=()=>{if(E.active)if(e){const t=E.run();(a||p||(m?t.some(((t,e)=>(0,i.aU)(t,y[e]))):(0,i.aU)(t,y)))&&(f&&f(),o(e,h,3,[t,y===W?void 0:m&&y[0]===W?[]:y,v]),y=t)}else E.run()};let b;w.allowRecurse=!!e,"sync"===c?b=w:"post"===c?b=()=>Ce(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),b=()=>_(w));const E=new r.qq(d,b);e?n?w():y=E.run():"post"===c?Ce(E.run.bind(E),h&&h.suspense):E.run();const I=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return g&&g.push(I),I}function X(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?Y(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=mn;vn(this);const c=Q(s,o.bind(r),n);return a?vn(a):yn(),c}function Y(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Z(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Z(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)Z(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{Z(t,e)}));else if((0,i.PO)(t))for(const n in t)Z(t[n],e);return t}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return It((()=>{t.isMounted=!0})),St((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=gn(),i=tt();let s;return()=>{const o=e.default&&ut(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Me){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return ot(a);const l=at(a);if(!l)return ot(a);const h=st(l,c,i,n);ct(l,h);const d=n.subTree,f=d&&at(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==Me&&(!We(l,f)||p)){const t=st(f,c,i,n);if(ct(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ot(a);"in-out"===u&&l.type!==Me&&(t.delayLeave=(t,e,n)=>{const r=it(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},rt=nt;function it(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function st(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:_}=e,b=String(t.key),E=it(n,t),I=(t,e)=>{t&&o(t,r,9,e)},T=(t,e)=>{const n=e[1];I(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},k={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=v||u}e._leaveCb&&e._leaveCb(!0);const i=E[b];i&&We(t,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[e])},enter(t){let e=l,r=h,i=d;if(!n.isMounted){if(!s)return;e=y||l,r=w||h,i=_||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,I(e?i:r,[t]),k.delayedLeave&&k.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();I(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),I(n?g:m,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?T(p,[e,o]):o()},clone(t){return st(t,e,n,r)}};return k}function ot(t){if(dt(t))return t=nn(t),t.children=null,t}function at(t){return dt(t)?t.children?t.children[0]:void 0:t}function ct(t,e){6&t.shapeFlag&&t.component?ct(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ut(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Pe?(128&o.patchFlag&&i++,r=r.concat(ut(o.children,e,a))):(e||o.type!==Me)&&r.push(null!=a?nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function lt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const ht=t=>!!t.type.__asyncLoader;const dt=t=>t.type.__isKeepAlive;RegExp,RegExp;function ft(t,e){return(0,i.kJ)(t)?t.some((t=>ft(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function pt(t,e){gt(t,"a",e)}function mt(t,e){gt(t,"da",e)}function gt(t,e,n=mn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(_t(e,r,n),n){let t=n.parent;while(t&&t.parent)dt(t.parent.vnode)&&vt(r,e,n,t),t=t.parent}}function vt(t,e,n,r){const s=_t(e,t,r,!0);Ct((()=>{(0,i.Od)(r[e],s)}),n)}function yt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function wt(t){return 128&t.shapeFlag?t.ssContent:t}function _t(t,e,n=mn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),vn(n);const s=o(e,n,t,i);return yn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const bt=t=>(e,n=mn)=>(!En||"sp"===t)&&_t(t,((...t)=>e(...t)),n),Et=bt("bm"),It=bt("m"),Tt=bt("bu"),kt=bt("u"),St=bt("bum"),Ct=bt("um"),At=bt("sp"),Ot=bt("rtg"),Rt=bt("rtc");function Nt(t,e=mn){_t("ec",t,e)}function Dt(t,e){const n=D;if(null===n)return t;const r=On(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Z(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function xt(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Pt="components";function Lt(t,e){return Ut(Pt,t,!0,e)||t}const Mt=Symbol();function Ut(t,e,n=!0,r=!1){const s=D||mn;if(s){const n=s.type;if(t===Pt){const t=Rn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=$t(s[t]||n[t],e)||$t(s.appContext[t],e);return!o&&r?n:o}}function $t(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Ft(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Vt(t,e,n={},r,i){if(D.isCE||D.parent&&ht(D.parent)&&D.parent.isCE)return"default"!==e&&(n.name=e),Ze("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ve();const o=s&&jt(s(n)),a=He(Pe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function jt(t){return t.some((t=>!Ge(t)||t.type!==Me&&!(t.type===Pe&&!jt(t.children))))?t:null}const qt=t=>t?wn(t)?On(t)||t.proxy:qt(t.parent):null,Bt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>Xt(t),$forceUpdate:t=>t.f||(t.f=()=>_(t.update)),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>X.bind(t)}),Kt=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),zt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Kt(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Ht&&(c[e]=0)}}const d=Bt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Kt(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||Kt(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Bt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ht=!0;function Gt(t){const e=Xt(t),n=t.proxy,s=t.ctx;Ht=!1,e.beforeCreate&&Jt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:I,renderTracked:T,renderTriggered:k,errorCaptured:S,serverPrefetch:C,expose:A,inheritAttrs:O,components:R,directives:N,filters:D}=e,x=null;if(h&&Wt(h,s,x,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Ht=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Dn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Qt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{H(e,t[e])}))}function P(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Jt(d,t,"c"),P(Et,f),P(It,p),P(Tt,m),P(kt,g),P(pt,v),P(mt,y),P(Nt,S),P(Rt,T),P(Ot,k),P(St,_),P(Ct,E),P(At,C),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===i.dG&&(t.render=I),null!=O&&(t.inheritAttrs=O),R&&(t.components=R),N&&(t.directives=N)}function Wt(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=ne(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?G(n.from||o,n.default,!0):G(n.from||o):G(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Jt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Qt(t,e,n,r){const s=r.includes(".")?Y(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&J(s,n)}else if((0,i.mf)(t))J(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Qt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&J(s,r,t)}else 0}function Xt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>Yt(u,t,a,!0))),Yt(u,e,a)):u=e,(0,i.Kn)(e)&&o.set(e,u),u}function Yt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Yt(t,s,n,!0),i&&i.forEach((e=>Yt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Zt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Zt={data:te,props:ie,emits:ie,methods:ie,computed:ie,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ie,directives:ie,watch:se,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return ie(ne(t),ne(e))}function ne(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function ie(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function oe(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,Je,1),t.propsDefaults=Object.create(null),ce(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ae(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ce(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ue(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=ue(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ce(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function ue(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(vn(s),r=i[n]=t.call(null,e),yn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function le(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=le(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);he(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(he(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const t=pe(Boolean,r.type),n=pe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function he(t){return"$"!==t[0]}function de(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function fe(t,e){return de(t)===de(e)}function pe(t,e){return(0,i.kJ)(e)?e.findIndex((e=>fe(e,t))):(0,i.mf)(e)&&fe(e,t)?0:-1}const me=t=>"_"===t[0]||"$stable"===t,ge=t=>(0,i.kJ)(t)?t.map(an):[an(t)],ve=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>ge(e(...t))),n);return r._c=!1,r},ye=(t,e,n)=>{const r=t._ctx;for(const s in t){if(me(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=ve(s,n,r);else if(null!=n){0;const t=ge(n);e[s]=()=>t}}},we=(t,e)=>{const n=ge(e);t.slots.default=()=>n},_e=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):ye(e,t.slots={})}else t.slots={},e&&we(t,e);(0,i.Nj)(t.slots,Je,1)},be=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,ye(e,s)),a=e}else e&&(we(t,e),a={default:1});if(o)for(const i in s)me(i)||i in a||delete s[i]};function Ee(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ie=0;function Te(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Ee(),o=new Set;let a=!1;const c=s.app={_uid:Ie++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=Ze(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,On(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function ke(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>ke(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(ht(o)&&!a)return;const c=4&o.shapeFlag?On(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,Ce(r,n)):r()}else 0}}function Se(){}const Ce=z;function Ae(t){return Oe(t)}function Oe(t,e){Se();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!We(t,e)&&(r=Y(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Le:y(t,e,n,r);break;case Me:w(t,e,n,r);break;case Ue:null==t&&b(e,n,r,o);break;case Pe:P(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i&&ke(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,i,s,o,a,c):N(t,e,i,s,o,a,c)},A=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:w}=t;if(f=t.el=c(t.type,u,g&&g.is,g),8&v?d(f,t.children):16&v&&R(t.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&xt(t,null,r,"created"),O(f,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.Gg)(e)||a(f,e,null,g[e],u,t.children,r,o,X);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&hn(p,r,t)}w&&xt(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;_&&y.beforeEnter(f),s(f,e,n),((p=g&&g.onVnodeMounted)||_||w)&&Ce((()=>{p&&hn(p,r,t),_&&y.enter(f),w&&xt(t,null,r,"mounted")}),o)},O=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;O(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cn(t[u]):an(t[u]);v(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&Re(n,!1),(g=m.onVnodeBeforeUpdate)&&hn(g,n,e,t),f&&xt(e,t,n,"beforeUpdate"),n&&Re(n,!0);const v=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,u,n,r,v,o):c||q(t,e,u,null,n,r,v,o,!1),l>0){if(16&l)x(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,X)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||x(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Ce((()=>{g&&hn(g,n,e,t),f&&xt(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Pe||!We(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},x=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,X)}"value"in r&&a(t,"value",n.value,r.value)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(d,n,r),R(e.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Ne(t,e,!0)):q(t,e,n,d,i,o,a,c,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=pn(t,r,i);if(dt(t)&&(a.ctx.renderer=tt),In(a),a.asyncDep){if(i&&i.registerDep(a,F),!t.el){const t=a.subTree=Ze(Me);w(null,t,e,n)}}else F(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(j(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Re(t,!1),n?(n.el=l.el,V(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&hn(e,u,n,l),Re(t,!0);const d=$(t);0;const p=t.subTree;t.subTree=d,v(p,d,f(p.el),Y(p),t,o,a),n.el=d.el,null===h&&B(t,d.el),s&&Ce(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Ce((()=>hn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=ht(e);if(Re(t,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&hn(r,d,e),Re(t,!0),c&&nt){const n=()=>{t.subTree=$(t),nt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=$(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&Ce(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;Ce((()=>hn(r,d,t)),o)}(256&e.shapeFlag||d&&ht(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Ce(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>_(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Re(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ae(t,e.props,i,n),be(t,e.children,n),(0,r.Jd)(),T(),(0,r.lk)()},q=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,c);if(256&f)return void K(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},K=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?cn(e[f]):an(e[f]);v(t[f],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,d):R(e,n,r,s,o,a,c,u,d)},z=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?cn(e[l]):an(e[l]);if(!We(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?cn(e[f]):an(e[f]);if(!We(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)v(null,e[l]=u?cn(e[l]):an(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?cn(e[l]):an(e[l]);null!=t.key&&g.set(t.key,l)}let y,w=0;const _=f-m+1;let b=!1,E=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=d;l++){const r=t[l];if(w>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===I[y-m]&&We(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(I[i-m]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,c,u),w++)}const T=b?De(I):i.Z6;for(y=T.length-1,l=_-1;l>=0;l--){const t=m+l,i=e[t],d=t+1<h?e[t+1].el:r;0===I[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==T[y]?H(i,n,d,2):y--)}}},H=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Pe){s(o,e,n);for(let t=0;t<u.length;t++)H(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===Ue)return void I(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Ce((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&ke(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!ht(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&hn(m,e,t),6&l)Q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&xt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):u&&(s!==Pe||h>0&&64&h)?X(u,e,n,!1,!0):(s===Pe&&384&h||!i&&16&l)&&X(c,e,n),r&&W(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Ce((()=>{m&&hn(m,e,t),f&&xt(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Pe)return void J(n,r);if(e===Ue)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Ce(c,e),Ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Y=t=>6&t.shapeFlag?Y(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),T(),k(),e._vnode=t},tt={p:v,um:G,m:H,r:W,mt:M,mc:R,pc:q,pbc:D,n:Y,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:Te(Z,et)}}function Re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ne(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=cn(s[i]),e.el=t.el),n||Ne(t,e)),e.type===Le&&(e.el=t.el)}}function De(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const xe=t=>t.__isTeleport;const Pe=Symbol(void 0),Le=Symbol(void 0),Me=Symbol(void 0),Ue=Symbol(void 0),$e=[];let Fe=null;function Ve(t=!1){$e.push(Fe=t?null:[])}function je(){$e.pop(),Fe=$e[$e.length-1]||null}let qe=1;function Be(t){qe+=t}function Ke(t){return t.dynamicChildren=qe>0?Fe||i.Z6:null,je(),qe>0&&Fe&&Fe.push(t),t}function ze(t,e,n,r,i,s){return Ke(Ye(t,e,n,r,i,s,!0))}function He(t,e,n,r,i){return Ke(Ze(t,e,n,r,i,!0))}function Ge(t){return!!t&&!0===t.__v_isVNode}function We(t,e){return t.type===e.type&&t.key===e.key}const Je="__vInternal",Qe=({key:t})=>null!=t?t:null,Xe=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:D,r:t,k:e,f:!!n}:t:null;function Ye(t,e=null,n=null,r=0,s=null,o=(t===Pe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qe(e),ref:e&&Xe(e),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(un(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),qe>0&&!a&&Fe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Fe.push(u),u}const Ze=tn;function tn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Mt||(t=Me),Ge(t)){const r=nn(t,e,!0);return n&&un(r,n),qe>0&&!a&&Fe&&(6&r.shapeFlag?Fe[Fe.indexOf(t)]=r:Fe.push(r)),r.patchFlag|=-2,r}if(Nn(t)&&(t=t.__vccOpts),e){e=en(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:K(t)?128:xe(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return Ye(t,e,n,s,o,c,a,!0)}function en(t){return t?(0,r.X3)(t)||Je in t?(0,i.l7)({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?ln(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Qe(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(Xe(e)):[s,Xe(e)]:Xe(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function rn(t=" ",e=0){return Ze(Le,null,t,e)}function sn(t,e){const n=Ze(Ue,null,t);return n.staticCount=e,n}function on(t="",e=!1){return e?(Ve(),He(Me,null,t)):Ze(Me,null,t)}function an(t){return null==t||"boolean"===typeof t?Ze(Me):(0,i.kJ)(t)?Ze(Pe,null,t.slice()):"object"===typeof t?cn(t):Ze(Le,null,String(t))}function cn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:nn(t)}function un(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Je in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.mf)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function hn(t,e,n,r=null){o(t,e,7,[n,r])}const dn=Ee();let fn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||dn,a={uid:fn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:le(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=O.bind(null,a),t.ce&&t.ce(a),a}let mn=null;const gn=()=>mn||D,vn=t=>{mn=t,t.scope.on()},yn=()=>{mn&&mn.scope.off(),mn=null};function wn(t){return 4&t.vnode.shapeFlag}let _n,bn,En=!1;function In(t,e=!1){En=e;const{props:n,children:r}=t.vnode,i=wn(t);oe(t,n,i,e),_e(t,r);const s=i?Tn(t,e):void 0;return En=!1,s}function Tn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,zt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?An(t):null;vn(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(c)){if(c.then(yn,yn),e)return c.then((n=>{kn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else kn(t,c,e)}else Sn(t,e)}function kn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Sn(t,n)}function Sn(t,e,n){const s=t.type;if(!t.render){if(!e&&_n&&!s.render){const e=s.template||Xt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=_n(e,c)}}t.render=s.render||i.dG,bn&&bn(t)}vn(t),(0,r.Jd)(),Gt(t),(0,r.lk)(),yn()}function Cn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function An(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Cn(t))},slots:t.slots,emit:t.emit,expose:e}}function On(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Bt?Bt[n](t):void 0},has(t,e){return e in t||e in Bt}}))}function Rn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Nn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Dn=(t,e)=>(0,r.Fl)(t,e,En);function xn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Ge(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ge(n)&&(n=[n]),Ze(t,e,n))}const Pn=Symbol(""),Ln=()=>{{const t=G(Pn);return t}};const Mn="3.2.47"},9963:function(t,e,n){"use strict";n.d(e,{e8:function(){return ut},iM:function(){return mt},nr:function(){return ct},ri:function(){return wt}});var r=n(3577),i=n(6252),s=n(2262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"");for(const t in n)f(i,t,n[t])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const d=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);d.test(n)?t.setProperty((0,r.rs)(i),n.replace(d,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return m[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function w(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}function _(t,e,n,r){t.addEventListener(e,n,r)}function b(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=T(e);if(r){const o=s[e]=A(r,i);_(t,n,o,a)}else o&&(b(t,n,o,a),s[e]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function T(t){let e;if(I.test(t)){let n;e={};while(n=t.match(I))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let k=0;const S=Promise.resolve(),C=()=>k||(S.then((()=>k=0)),k=Date.now());function A(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.$d)(O(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function O(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,N=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?l(t,i,s):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,i,s))?w(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function D(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const x="transition",P="animation",L=(t,{slots:e})=>(0,i.h)(i.P$,V(t),e);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=L.props=(0,r.l7)({},i.P$.props,M),$=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},F=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function V(t){const e={};for(const r in t)r in M||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=j(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:E,onBeforeAppear:I=y,onAppear:T=w,onAppearCancelled:k=_}=e,S=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},C=(t,e)=>{t._isLeaving=!1,K(t,d),K(t,p),K(t,f),e&&e()},A=t=>(e,n)=>{const r=t?T:w,s=()=>S(e,t,n);$(r,[e,s]),z((()=>{K(e,t?u:o),B(e,t?h:c),F(r)||G(e,i,g,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){$(y,[t]),B(t,o),B(t,a)},onBeforeAppear(t){$(I,[t]),B(t,u),B(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>C(t,e);B(t,d),X(),B(t,f),z((()=>{t._isLeaving&&(K(t,d),B(t,p),F(b)||G(t,i,v,n))})),$(b,[t,n])},onEnterCancelled(t){S(t,!1),$(_,[t])},onAppearCancelled(t){S(t,!0),$(k,[t])},onLeaveCancelled(t){C(t),$(E,[t])}})}function j(t){if(null==t)return null;if((0,r.Kn)(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){const e=(0,r.He)(t);return e}function B(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let H=0;function G(t,e,n,r){const i=t._endId=++H,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function W(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${x}Delay`),s=r(`${x}Duration`),o=J(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=J(a,c);let l=null,h=0,d=0;e===x?o>0&&(l=x,h=o,d=s.length):e===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?x:P:null,d=l?l===x?s.length:c.length:0);const f=l===x&&/\b(transform|all)(,|$)/.test(r(`${x}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,tt={name:"TransitionGroup",props:(0,r.l7)({},U,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!it(o[0].el,n.vnode.el,e))return;o.forEach(et),o.forEach(nt);const r=o.filter(rt);X(),r.forEach((t=>{const n=t.el,r=n.style;B(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,K(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=V(c);let l=c.tag||i.HY;o=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,u,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,i.nK)(e,(0,i.U2)(e,u,r,n)),Y.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){Z.set(t,t.el.getBoundingClientRect())}function rt(t){const e=Y.get(t),n=Z.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function it(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const st=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function ot(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=st(s);const o=i||s.props&&"number"===s.props.type;_(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),t._assign(i)})),n&&_(t,"change",(()=>{t.value=t.value.trim()})),e||(_(t,"compositionstart",ot),_(t,"compositionend",at),_(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=st(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},ut={deep:!0,created(t,e,n){t._assign=st(n),_(t,"change",(()=>{const e=t._modelValue,n=ht(t),i=t.checked,s=t._assign;if((0,r.kJ)(e)){const t=(0,r.hq)(e,n),o=-1!==t;if(i&&!o)s(e.concat(n));else if(!i&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,r.DM)(e)){const t=new Set(e);i?t.add(n):t.delete(n),s(t)}else s(dt(t,i))}))},mounted:lt,beforeUpdate(t,e,n){t._assign=st(n),lt(t,e,n)}};function lt(t,{value:e,oldValue:n},i){t._modelValue=e,(0,r.kJ)(e)?t.checked=(0,r.hq)(e,i.props.value)>-1:(0,r.DM)(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=(0,r.WV)(e,dt(t,!0)))}function ht(t){return"_value"in t?t._value:t.value}function dt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ft=["ctrl","shift","alt","meta"],pt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ft.some((n=>t[`${n}Key`]&&!e.includes(n)))},mt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=pt[e[t]];if(r&&r(n,e))return}return t(n,...r)};const gt=(0,r.l7)({patchProp:N},u);let vt;function yt(){return vt||(vt=(0,i.Us)(gt))}const wt=(...t)=>{const e=yt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=_t(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function _t(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},3577:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return h},DM:function(){return x},E9:function(){return ot},F7:function(){return k},Gg:function(){return H},HD:function(){return U},He:function(){return it},Kj:function(){return L},Kn:function(){return F},NO:function(){return I},Nj:function(){return nt},Od:function(){return A},PO:function(){return K},Pq:function(){return f},RI:function(){return R},S0:function(){return z},W7:function(){return B},WV:function(){return g},Z6:function(){return b},_A:function(){return J},_N:function(){return D},aU:function(){return tt},dG:function(){return E},e1:function(){return s},fY:function(){return r},h5:function(){return rt},hR:function(){return Z},hq:function(){return v},ir:function(){return et},j5:function(){return o},kC:function(){return Y},kJ:function(){return N},kT:function(){return _},l7:function(){return C},mf:function(){return M},rs:function(){return X},tI:function(){return V},tR:function(){return S},yA:function(){return p},yk:function(){return $},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?l(r):o(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||F(t)?t:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(t){const e={};return t.replace(u,"").split(a).forEach((t=>{if(t){const n=t.split(c);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function h(t){let e="";if(U(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=h(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(t){return!!t||""===t}function m(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=P(t),r=P(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=$(t),r=$(e),n||r)return t===e;if(n=N(t),r=N(e),n||r)return!(!n||!r)&&m(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function v(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>U(t)?t:null==t?"":N(t)||F(t)&&(t.toString===j||!M(t.toString))?JSON.stringify(t,w,2):String(t),w=(t,e)=>e&&e.__v_isRef?w(t,e.value):D(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:x(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||N(e)||K(e)?e:String(e),_={},b=[],E=()=>{},I=()=>!1,T=/^on[^a-z]/,k=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),C=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O=Object.prototype.hasOwnProperty,R=(t,e)=>O.call(t,e),N=Array.isArray,D=t=>"[object Map]"===q(t),x=t=>"[object Set]"===q(t),P=t=>"[object Date]"===q(t),L=t=>"[object RegExp]"===q(t),M=t=>"function"===typeof t,U=t=>"string"===typeof t,$=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,V=t=>F(t)&&M(t.then)&&M(t.catch),j=Object.prototype.toString,q=t=>j.call(t),B=t=>q(t).slice(8,-1),K=t=>"[object Object]"===q(t),z=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},W=/-(\w)/g,J=G((t=>t.replace(W,((t,e)=>e?e.toUpperCase():"")))),Q=/\B([A-Z])/g,X=G((t=>t.replace(Q,"-$1").toLowerCase())),Y=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),Z=G((t=>t?`on${Y(t)}`:"")),tt=(t,e)=>!Object.is(t,e),et=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},nt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rt=t=>{const e=parseFloat(t);return isNaN(e)?t:e},it=t=>{const e=U(t)?Number(t):NaN;return isNaN(e)?t:e};let st;const ot=()=>st||(st="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw m(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var _=d("state");f[_]=!0,r=function(t,e){if(l(t,_))throw m(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},s=function(t){return l(t,_)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===m(f(e),0,7)&&(e="["+g(f(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(w,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},3907:function(t,e,n){"use strict";n.d(e,{MT:function(){return tt}});var r=n(6252),i=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function v(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function y(t){return null!==t&&"object"===typeof t}function w(t){return t&&"function"===typeof t.then}function _(t,e){return function(){return t(e)}}function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),I(t,n,e)}function I(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,i.B)(!0);l.run((function(){v(a,(function(e,n){c[n]=_(e,t),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,i.qj)({data:e}),t._scope=l,t.strict&&R(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function T(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=k(t,o,n);r.forEachMutation((function(e,n){var r=o+n;C(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;O(t,r,e,u)})),r.forEachChild((function(r,s){T(t,e,n.concat(s),r,i)}))}function k(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return N(t.state,n)}}}),i}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return w(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function R(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var x="vuex bindings",P="vuex:mutations",L="vuex:actions",M="vuex",U=0;function $(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[x]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:F}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:F}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];z(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[K(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;S(e,r),n.state=H(W(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=U++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var F=8702998,V=6710886,j=16777215,q={label:"namespaced",textColor:j,backgroundColor:V};function B(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function K(t,e){return{id:e||"root",label:B(e),tags:t.namespaced?[q]:[],children:Object.keys(t._children).map((function(n){return K(t._children[n],e+n+"/")}))}}function z(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[q]:[]}),Object.keys(e._children).forEach((function(i){z(t,e._children[i],n,r+i+"/")}))}function H(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=G(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?B(t):t,editable:!1,value:J((function(){return s[t]}))}}))}return i}function G(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=J((function(){return t[n]}))}else e[n]=J((function(){return t[n]}))})),e}function W(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function J(t){try{return t()}catch(e){return e}}var Q=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(t,e){this._children[t]=e},Q.prototype.removeChild=function(t){delete this._children[t]},Q.prototype.getChild=function(t){return this._children[t]},Q.prototype.hasChild=function(t){return t in this._children},Q.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Q.prototype.forEachChild=function(t){v(this._children,t)},Q.prototype.forEachGetter=function(t){this._rawModule.getters&&v(this._rawModule.getters,t)},Q.prototype.forEachAction=function(t){this._rawModule.actions&&v(this._rawModule.actions,t)},Q.prototype.forEachMutation=function(t){this._rawModule.mutations&&v(this._rawModule.mutations,t)},Object.defineProperties(Q.prototype,X);var Y=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}Y.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Y.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Y.prototype.update=function(t){Z([],this.root,t)},Y.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new Q(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&v(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Y.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Y.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),I(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&$(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),I(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=N(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=ot(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=ot(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function rt(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||y(t)}function st(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r}},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var r=n(8463),i=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const I=t=>m.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],C=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return C.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
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
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",D="0.9.5",x=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",B="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.18.0",st="[DEFAULT]",ot={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[$]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[B]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
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
 */const mt=it;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function vt(t=st){const e=at.get(t);if(!e&&t===st)return gt();if(!e)throw ft.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",_t=1,bt="firebase-heartbeat-store";let Et=null;function It(){return Et||(Et=T(wt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t){try{const e=await It();return e.transaction(bt).objectStore(bt).get(St(t))}catch(e){if(e instanceof s.ZR)x.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});x.warn(t.message)}}}async function kt(t,e){try{const n=await It(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);return await i.put(e,St(t)),r.done}catch(n){if(n instanceof s.ZR)x.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(t.message)}}}function St(t){return`${t.name}!${t.options.appId}`}
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
 */const Ct=1024,At=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Pt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(N,D,t),yt(N,D,"esm2017"),yt("fire-js","")}Pt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},5705:function(t,e,n){"use strict";n.d(e,{Xw:function(){return D}});var r=n(2262),i=n(6252);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).reduce(((n,i)=>(e.includes(i)||(n[i]=(0,r.SU)(t[i])),n)),{})}function u(t){return"function"===typeof t}function l(t){return(0,r.PG)(t)||(0,r.$y)(t)}function h(t,e,n){let r=t;const i=e.split(".");for(let s=0;s<i.length;s++){if(!r[i[s]])return n;r=r[i[s]]}return r}function d(t,e,n){return(0,i.Fl)((()=>t.some((t=>h(e,t,{[n]:!1})[n]))))}function f(t,e,n){return(0,i.Fl)((()=>t.reduce(((t,r)=>{const i=h(e,r,{[n]:!1})[n]||[];return t.concat(i)}),[])))}function p(t,e,n,i){return t.call(i,(0,r.SU)(e),(0,r.SU)(n),i)}function m(t){return void 0!==t.$valid?!t.$valid:!t}function g(t,e,n,s,o,a,c){let{$lazy:u,$rewardEarly:l}=o,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],d=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=(0,r.iH)(!!s.value),y=(0,r.iH)(0);n.value=!1;const w=(0,i.YP)([e,s].concat(h,g),(()=>{if(u&&!s.value||l&&!f.value&&!n.value)return;let r;try{r=p(t,e,d,c)}catch(i){r=Promise.reject(i)}y.value++,n.value=!!y.value,v.value=!1,Promise.resolve(r).then((t=>{y.value--,n.value=!!y.value,a.value=t,v.value=m(t)})).catch((t=>{y.value--,n.value=!!y.value,a.value=t,v.value=!0}))}),{immediate:!0,deep:"object"===typeof e});return{$invalid:v,$unwatch:w}}function v(t,e,n,r,s,o,a,c){let{$lazy:u,$rewardEarly:l}=r;const h=()=>({}),d=(0,i.Fl)((()=>{if(u&&!n.value||l&&!c.value)return!1;let r=!0;try{const n=p(t,e,a,o);s.value=n,r=m(n)}catch(i){s.value=i}return r}));return{$unwatch:h,$invalid:d}}function y(t,e,n,s,o,a,l,h,d,f,p){const m=(0,r.iH)(!1),y=t.$params||{},w=(0,r.iH)(null);let _,b;t.$async?({$invalid:_,$unwatch:b}=g(t.$validator,e,m,n,s,w,o,t.$watchTargets,d,f,p)):({$invalid:_,$unwatch:b}=v(t.$validator,e,n,s,w,o,d,f));const E=t.$message,I=u(E)?(0,i.Fl)((()=>E(c({$pending:m,$invalid:_,$params:c(y),$model:e,$response:w,$validator:a,$propertyPath:h,$property:l})))):E||"";return{$message:I,$params:y,$pending:m,$invalid:_,$response:w,$unwatch:b}}function w(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=(0,r.SU)(t),n=Object.keys(e),i={},s={},o={};let a=null;return n.forEach((t=>{const n=e[t];switch(!0){case u(n.$validator):i[t]=n;break;case u(n):i[t]={$validator:n};break;case"$validationGroups"===t:a=n;break;case t.startsWith("$"):o[t]=n;break;default:s[t]=n}})),{rules:i,nestedValidators:s,config:o,validationGroups:a}}const _="__root";function b(t,e,n,s,o,a,c,u,l){const h=Object.keys(t),d=s.get(o,t),f=(0,r.iH)(!1),p=(0,r.iH)(!1),m=(0,r.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),f.value=d.$dirty.value}const g={$dirty:f,$path:o,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return h.length?(h.forEach((r=>{g[r]=y(t[r],e,g.$dirty,a,c,r,n,o,l,p,m)})),g.$externalResults=(0,i.Fl)((()=>u.value?[].concat(u.value).map(((t,e)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${e}`,$message:t,$params:{},$response:null,$pending:!1}))):[])),g.$invalid=(0,i.Fl)((()=>{const t=h.some((t=>(0,r.SU)(g[t].$invalid)));return p.value=t,!!g.$externalResults.value.length||t})),g.$pending=(0,i.Fl)((()=>h.some((t=>(0,r.SU)(g[t].$pending))))),g.$error=(0,i.Fl)((()=>!!g.$dirty.value&&(g.$pending.value||g.$invalid.value))),g.$silentErrors=(0,i.Fl)((()=>h.filter((t=>(0,r.SU)(g[t].$invalid))).map((t=>{const e=g[t];return(0,r.qj)({$propertyPath:o,$property:n,$validator:t,$uid:`${o}-${t}`,$message:e.$message,$params:e.$params,$response:e.$response,$pending:e.$pending})})).concat(g.$externalResults.value))),g.$errors=(0,i.Fl)((()=>g.$dirty.value?g.$silentErrors.value:[])),g.$unwatch=()=>h.forEach((t=>{g[t].$unwatch()})),g.$commit=()=>{p.value=!0,m.value=Date.now()},s.set(o,t,g),g):(d&&s.set(o,t,g),g)}function E(t,e,n,r,i,s,o){const a=Object.keys(t);return a.length?a.reduce(((a,c)=>(a[c]=T({validations:t[c],state:e,key:c,parentKey:n,resultsCache:r,globalConfig:i,instance:s,externalResults:o}),a)),{}):{}}function I(t,e,n){const s=(0,i.Fl)((()=>[e,n].filter((t=>t)).reduce(((t,e)=>t.concat(Object.values((0,r.SU)(e)))),[]))),o=(0,i.Fl)({get(){return t.$dirty.value||!!s.value.length&&s.value.every((t=>t.$dirty))},set(e){t.$dirty.value=e}}),a=(0,i.Fl)((()=>{const e=(0,r.SU)(t.$silentErrors)||[],n=s.value.filter((t=>((0,r.SU)(t).$silentErrors||[]).length)).reduce(((t,e)=>t.concat(...e.$silentErrors)),[]);return e.concat(n)})),c=(0,i.Fl)((()=>{const e=(0,r.SU)(t.$errors)||[],n=s.value.filter((t=>((0,r.SU)(t).$errors||[]).length)).reduce(((t,e)=>t.concat(...e.$errors)),[]);return e.concat(n)})),u=(0,i.Fl)((()=>s.value.some((t=>t.$invalid))||(0,r.SU)(t.$invalid)||!1)),l=(0,i.Fl)((()=>s.value.some((t=>(0,r.SU)(t.$pending)))||(0,r.SU)(t.$pending)||!1)),h=(0,i.Fl)((()=>s.value.some((t=>t.$dirty))||s.value.some((t=>t.$anyDirty))||o.value)),d=(0,i.Fl)((()=>!!o.value&&(l.value||u.value))),f=()=>{t.$touch(),s.value.forEach((t=>{t.$touch()}))},p=()=>{t.$commit(),s.value.forEach((t=>{t.$commit()}))},m=()=>{t.$reset(),s.value.forEach((t=>{t.$reset()}))};return s.value.length&&s.value.every((t=>t.$dirty))&&f(),{$dirty:o,$errors:c,$invalid:u,$anyDirty:h,$error:d,$pending:l,$touch:f,$reset:m,$silentErrors:a,$commit:p}}function T(t){let{validations:e,state:n,key:s,parentKey:a,childResults:c,resultsCache:u,globalConfig:l={},instance:h,externalResults:p}=t;const m=a?`${a}.${s}`:s,{rules:g,nestedValidators:v,config:y,validationGroups:T}=w(e),k=o(o({},l),y),S=s?(0,i.Fl)((()=>{const t=(0,r.SU)(n);return t?(0,r.SU)(t[s]):void 0})):n,C=o({},(0,r.SU)(p)||{}),A=(0,i.Fl)((()=>{const t=(0,r.SU)(p);return s?t?(0,r.SU)(t[s]):void 0:t})),O=b(g,S,s,u,m,k,h,A,n),R=E(v,S,m,u,k,h,A),N={};T&&Object.entries(T).forEach((t=>{let[e,n]=t;N[e]={$invalid:d(n,R,"$invalid"),$error:d(n,R,"$error"),$pending:d(n,R,"$pending"),$errors:f(n,R,"$errors"),$silentErrors:f(n,R,"$silentErrors")}}));const{$dirty:D,$errors:x,$invalid:P,$anyDirty:L,$error:M,$pending:U,$touch:$,$reset:F,$silentErrors:V,$commit:j}=I(O,R,c),q=s?(0,i.Fl)({get:()=>(0,r.SU)(S),set:t=>{D.value=!0;const e=(0,r.SU)(n),i=(0,r.SU)(p);i&&(i[s]=C[s]),(0,r.dq)(e[s])?e[s].value=t:e[s]=t}}):null;async function B(){return $(),k.$rewardEarly&&(j(),await(0,i.Y3)()),await(0,i.Y3)(),new Promise((t=>{if(!U.value)return t(!P.value);const e=(0,i.YP)(U,(()=>{t(!P.value),e()}))}))}function K(t){return(c.value||{})[t]}function z(){(0,r.dq)(p)?p.value=C:0===Object.keys(C).length?Object.keys(p).forEach((t=>{delete p[t]})):Object.assign(p,C)}return s&&k.$autoDirty&&(0,i.YP)(S,(()=>{D.value||$();const t=(0,r.SU)(p);t&&(t[s]=C[s])}),{flush:"sync"}),(0,r.qj)(o(o(o({},O),{},{$model:q,$dirty:D,$error:M,$errors:x,$invalid:P,$anyDirty:L,$pending:U,$touch:$,$reset:F,$path:m||_,$silentErrors:V,$validate:B,$commit:j},c&&{$getResultsForChild:K,$clearExternalResults:z,$validationGroups:N}),R))}class k{constructor(){this.storage=new Map}set(t,e,n){this.storage.set(t,{rules:e,result:n})}checkRulesValidity(t,e,n){const i=Object.keys(n),s=Object.keys(e);if(s.length!==i.length)return!1;const o=s.every((t=>i.includes(t)));return!!o&&s.every((t=>!e[t].$params||Object.keys(e[t].$params).every((i=>(0,r.SU)(n[t].$params[i])===(0,r.SU)(e[t].$params[i])))))}get(t,e){const n=this.storage.get(t);if(!n)return;const{rules:r,result:i}=n,s=this.checkRulesValidity(t,e,r),o=i.$unwatch?i.$unwatch:()=>({});return s?i:{$dirty:i.$dirty,$partial:!0,$unwatch:o}}}const S={COLLECT_ALL:!0,COLLECT_NONE:!1},C=Symbol("vuelidate#injectChildResults"),A=Symbol("vuelidate#removeChildResults");function O(t){let{$scope:e,instance:n}=t;const s={},o=(0,r.iH)([]),a=(0,i.Fl)((()=>o.value.reduce(((t,e)=>(t[e]=(0,r.SU)(s[e]),t)),{})));function c(t,n){let{$registerAs:r,$scope:i,$stopPropagation:a}=n;a||e===S.COLLECT_NONE||i===S.COLLECT_NONE||e!==S.COLLECT_ALL&&e!==i||(s[r]=t,o.value.push(r))}function u(t){o.value=o.value.filter((e=>e!==t)),delete s[t]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],c),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],u);const l=(0,i.f3)(C,[]);(0,i.JJ)(C,n.__vuelidateInjectInstances);const h=(0,i.f3)(A,[]);return(0,i.JJ)(A,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:l,removeValidationResultsFromParent:h}}function R(t){return new Proxy(t,{get(t,e){return"object"===typeof t[e]?R(t[e]):(0,i.Fl)((()=>t[e]))}})}let N=0;function D(t,e){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(s=t,t=void 0,e=void 0);let{$registerAs:a,$scope:c=S.COLLECT_ALL,$stopPropagation:h,$externalResults:d,currentVueInstance:f}=s;const p=f||(null===(n=(0,i.FN)())||void 0===n?void 0:n.proxy),m=p?p.$options:{};a||(N+=1,a=`_vuelidate_${N}`);const g=(0,r.iH)({}),v=new k,{childResults:y,sendValidationResultsToParent:w,removeValidationResultsFromParent:_}=p?O({$scope:c,instance:p}):{childResults:(0,r.iH)({})};if(!t&&m.validations){const t=m.validations;e=(0,r.iH)({}),(0,i.wF)((()=>{e.value=p,(0,i.YP)((()=>u(t)?t.call(e.value,new R(e.value)):t),(t=>{g.value=T({validations:t,state:e,childResults:y,resultsCache:v,globalConfig:s,instance:p,externalResults:d||p.vuelidateExternalResults})}),{immediate:!0})})),s=m.validationsConfig||s}else{const n=(0,r.dq)(t)||l(t)?t:(0,r.qj)(t||{});(0,i.YP)(n,(t=>{g.value=T({validations:t,state:e,childResults:y,resultsCache:v,globalConfig:s,instance:p??{},externalResults:d})}),{immediate:!0})}return p&&(w.forEach((t=>t(g,{$registerAs:a,$scope:c,$stopPropagation:h}))),(0,i.Jd)((()=>_.forEach((t=>t(a)))))),(0,i.Fl)((()=>o(o({},(0,r.SU)(g.value)),y.value)))}},760:function(t,e,n){"use strict";n.d(e,{C1:function(){return I},Do:function(){return b}});var r=n(2262);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return"function"===typeof t}function c(t){return null!==t&&"object"===typeof t&&!Array.isArray(t)}function u(t){return a(t.$validator)?s({},t):{$validator:t}}function l(t){return"object"===typeof t?t.$valid:t}function h(t){return t.$validator||t}function d(t,e){if(!c(t))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof t);if(!c(e)&&!a(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=u(e);return n.$params=s(s({},n.$params||{}),t),n}function f(t,e){if(!a(t)&&"string"!==typeof(0,r.SU)(t))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof t);if(!c(e)&&!a(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=u(e);return n.$message=t,n}function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=u(t);return s(s({},n),{},{$async:!0,$watchTargets:e})}function m(t){return{$validator(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return(0,r.SU)(e).reduce(((e,n,r)=>{const s=Object.entries(n).reduce(((e,s)=>{let[o,a]=s;const c=t[o]||{},u=Object.entries(c).reduce(((t,e)=>{let[s,c]=e;const u=h(c),d=u.call(this,a,n,r,...i),f=l(d);if(t.$data[s]=d,t.$data.$invalid=!f||!!t.$data.$invalid,t.$data.$error=t.$data.$invalid,!f){let e=c.$message||"";const n=c.$params||{};"function"===typeof e&&(e=e({$pending:!1,$invalid:!f,$params:n,$model:a,$response:d})),t.$errors.push({$property:o,$message:e,$params:n,$response:d,$model:a,$pending:!1,$validator:s})}return{$valid:t.$valid&&f,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:[]});return e.$data[o]=u.$data,e.$errors[o]=u.$errors,{$valid:e.$valid&&u.$valid,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:e.$valid&&s.$valid,$data:e.$data.concat(s.$data),$errors:e.$errors.concat(s.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:t=>{let{$response:e}=t;return e?e.$errors.map((t=>Object.values(t).map((t=>t.map((t=>t.$message)))).reduce(((t,e)=>t.concat(e)),[]))):[]}}}const g=t=>{if(t=(0,r.SU)(t),Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===typeof t){for(let e in t)return!0;return!1}return!!String(t).length},v=t=>(t=(0,r.SU)(t),Array.isArray(t)?t.length:"object"===typeof t?Object.keys(t).length:String(t).length);function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return t=>(t=(0,r.SU)(t),!g(t)||e.every((e=>(e.lastIndex=0,e.test(t)))))}r.SU,y(/^[a-zA-Z]*$/),y(/^[a-zA-Z0-9]*$/),y(/^\d*(\.\d+)?$/);const w=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var _=y(w),b={$validator:_,$message:"Value is not a valid email address",$params:{type:"email"}};function E(t){return"string"===typeof t&&(t=t.trim()),g(t)}var I={$validator:E,$message:"Value is required",$params:{type:"required"}};const T=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;y(T);y(/(^[0-9]*$)|(^-[0-9]+$)/),y(/^[-]?\d*(\.\d+)?$/)},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(5816),i="firebase",s="9.18.0";
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
(0,r.KN)(i,s,"app")},1828:function(t,e,n){"use strict";n.d(e,{v0:function(){return mr}});var r=n(4444),i=n(5816),s=n(3333);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(t,...e){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
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
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||y(e)}
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
 */const _=new Map;function b(t){w(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
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
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function R(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new O(3e4,6e4);
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
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()($(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(s){if(s instanceof r.ZR)throw s;f(t,"internal-error",{message:String(s)})}}async function U(t,e,n,r,i={}){const s=await L(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
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
 */async function j(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
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
 */function B(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function K(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=H(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:B(z(s.auth_time)),issuedAtTime:B(z(s.iat)),expirationTime:B(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function H(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function G(t){const e=H(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
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
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return K(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,j(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:I}=e;v(w&&I,t,"internal-error");const T=rt.fromJSON(this.name,I);v("string"===typeof w,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof _,t,"internal-error"),v("boolean"===typeof b,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(y,t.name);const k=new st({uid:w,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(k.providerData=E.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
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
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
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
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(b(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||b(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
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
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function vt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return(0,r.w1)()&&10===document.documentMode}function bt(t=(0,r.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
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
 */class Tt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class kt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=b(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(b(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&b(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[b(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function St(t){return(0,r.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function At(t,e,n){const r=St(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ot(e),{host:o,port:a}=Rt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dt()}function Ot(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rt(t){const e=Ot(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Nt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Nt(e)}}}function Nt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */class xt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
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
 */async function Pt(t,e){return L(t,"POST","/v1/accounts:update",e)}
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
async function Lt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}
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
async function Mt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function Ut(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
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
 */class $t extends xt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new $t(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new $t(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Lt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Pt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ut(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Ft(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
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
 */const Vt="http://localhost";class jt extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new jt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new jt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Ft(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ft(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ft(t,e)}buildRequest(){const t={requestUri:Vt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
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
 */async function qt(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function Bt(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Kt(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const zt={["USER_NOT_FOUND"]:"user-not-found"};async function Ht(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),zt)}
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
 */class Gt extends xt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Gt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Gt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Bt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Kt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ht(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Gt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function Wt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class Qt{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Wt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Jt(t);try{return new Qt(e)}catch(n){return null}}}
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
class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(t,e){return $t._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Qt.parseLink(e);return v(n,"argument-error"),$t._fromEmailAndCode(t,n.code,n.tenantId)}}Xt.PROVIDER_ID="password",Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Yt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Zt extends Yt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class te extends Zt{constructor(){super("facebook.com")}static credential(t){return jt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return te.credential(t.oauthAccessToken)}catch(e){return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com",te.PROVIDER_ID="facebook.com";
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
class ee extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return jt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ee.credential(e,n)}catch(r){return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com",ee.PROVIDER_ID="google.com";
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
class ne extends Zt{constructor(){super("github.com")}static credential(t){return jt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ne.credential(t.oauthAccessToken)}catch(e){return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com",ne.PROVIDER_ID="github.com";
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
class re extends Zt{constructor(){super("twitter.com")}static credential(t,e){return jt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(r){return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";
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
class ie{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=se(n),o=new ie({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=se(n);return new ie({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function se(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class oe extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,oe.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new oe(t,e,n,r)}}function ae(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw oe._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function ce(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ie._forOperation(t,"link",r)}
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
async function ue(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await W(t,ae(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=H(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),ie._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
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
 */async function le(t,e,n=!1){const r="signIn",i=await ae(t,r,e),s=await ie._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function he(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function de(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}
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
function fe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function pe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const me="__sak";
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
 */class ge{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(me,"1"),this.storage.removeItem(me),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ve(){const t=(0,r.z$)();return dt(t)||yt(t)}const ye=1e3,we=10;class _e extends ge{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ve()&&Et(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,we):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ye)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_e.type="LOCAL";const be=_e;
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
 */class Ee extends ge{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ee.type="SESSION";const Ie=Ee;
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
 */function Te(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class ke{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new ke(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Te(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Se(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */ke.receivers=[];class Ce{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Se("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Ae(){return window}function Oe(t){Ae().location.href=t}
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
 */function Re(){return"undefined"!==typeof Ae()["WorkerGlobalScope"]&&"function"===typeof Ae()["importScripts"]}async function Ne(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function De(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function xe(){return Re()?self:null}
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
 */const Pe="firebaseLocalStorageDb",Le=1,Me="firebaseLocalStorage",Ue="fbase_key";class $e{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Fe(t,e){return t.transaction([Me],e?"readwrite":"readonly").objectStore(Me)}function Ve(){const t=indexedDB.deleteDatabase(Pe);return new $e(t).toPromise()}function je(){const t=indexedDB.open(Pe,Le);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Me,{keyPath:Ue})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Me)?e(n):(n.close(),await Ve(),e(await je()))}))}))}async function qe(t,e,n){const r=Fe(t,!0).put({[Ue]:e,value:n});return new $e(r).toPromise()}async function Be(t,e){const n=Fe(t,!1).get(e),r=await new $e(n).toPromise();return void 0===r?null:r.value}function Ke(t,e){const n=Fe(t,!0).delete(e);return new $e(n).toPromise()}const ze=800,He=3;class Ge{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>He)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Re()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(xe()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ne(),!this.activeServiceWorker)return;this.sender=new Ce(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&De()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await je();return await qe(t,me,"1"),await Ke(t,me),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>qe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Be(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ke(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Fe(t,!1).getAll();return new $e(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ze)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ge.type="LOCAL";const We=Ge;
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
 */function Je(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function Qe(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
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
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)}))}function Ze(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
Ze("rcb"),new O(3e4,6e4);
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
const tn="recaptcha";async function en(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===tn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await fe(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Je(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await qt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class nn{constructor(t){this.providerId=nn.PROVIDER_ID,this.auth=St(t)}verifyPhoneNumber(t,e){return en(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Gt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return nn.credentialFromTaggedObject(e)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Gt._fromTokenResponse(e,n):null}}
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
function rn(t,e){return e?b(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class sn extends xt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ft(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ft(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ft(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function on(t){return le(t.auth,new sn(t),t.bypassAuthState)}function an(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ue(n,new sn(t),t.bypassAuthState)}async function cn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ce(n,new sn(t),t.bypassAuthState)}
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
 */class un{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return cn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const ln=new O(2e3,1e4);class hn extends un{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Se();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ln.get())};t()}}hn.currentPopupAction=null;
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
const dn="pendingRedirect",fn=new Map;class pn extends un{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=fn.get(this.auth._key());if(!t){try{const e=await mn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}fn.set(this.auth._key(),t)}return this.bypassAuthState||fn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function mn(t,e){const n=yn(e),r=vn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function gn(t,e){fn.set(t._key(),e)}function vn(t){return b(t._redirectPersistence)}function yn(t){return ct(dn,t.config.apiKey,t.name)}
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
 */async function wn(t,e,n=!1){const r=St(t),i=rn(r,e),s=new pn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
const _n=6e5;class bn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Tn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!In(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=_n&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(t))}saveEventToCache(t){this.cachedEventUids.add(En(t)),this.lastProcessedEventTime=Date.now()}}function En(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function In({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Tn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(t);default:return!1}}
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
 */async function kn(t,e={}){return L(t,"GET","/v1/projects",e)}
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
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cn=/^https?/;async function An(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kn(t);for(const r of e)try{if(On(r))return}catch(n){}f(t,"unauthorized-domain")}function On(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Cn.test(n))return!1;if(Sn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Rn=new O(3e4,6e4);function Nn(){const t=Ae().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Dn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Nn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nn(),n(p(t,"network-request-failed"))},timeout:Rn.get()})}if(null===(i=null===(r=Ae().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ae().gapi)||void 0===s?void 0:s.load)){const e=Ze("iframefcb");return Ae()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ye(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw xn=null,t}))}let xn=null;function Pn(t){return xn=xn||Dn(t),xn}
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
 */const Ln=new O(5e3,15e3),Mn="__/auth/iframe",Un="emulator/auth/iframe",$n={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,Un):`https://${t.config.authDomain}/${Mn}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Fn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function jn(t){const e=await Pn(t),n=Ae().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Vn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$n,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Ae().setTimeout((()=>{r(i)}),Ln.get());function o(){Ae().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bn=500,Kn=600,zn="_blank",Hn="http://localhost";class Gn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Wn(t,e,n,i=Bn,s=Kn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},qn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?zn:n),ht(l)&&(e=e||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==c)return Jn(e||"",c),new Gn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Gn(d)}function Jn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Qn="__/auth/handler",Xn="emulator/auth/handler";function Yn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Yt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Zt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Zn(t)}?${(0,r.xO)(u).slice(1)}`}function Zn({config:t}){return t.emulator?R(t,Xn):`https://${t.authDomain}/${Qn}`}
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
 */const tr="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ie,this._completeRedirectFn=wn,this._overrideRedirectResult=gn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Yn(t,e,n,T(),r);return Wn(t,s,Se())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Oe(Yn(t,e,n,T(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await jn(t),n=new bn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(tr,{type:tr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[tr];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=An(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||dt()||yt()}}const nr=er;class rr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ir extends rr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ir(t)}_finalizeEnroll(t,e,n){return pe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Qe(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(t){return ir._fromCredential(t)}}sr.FACTOR_ID="phone";var or="@firebase/auth",ar="0.21.5";
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
class cr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function ur(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},a=new kt(e,r,i);return I(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=St(t.getProvider("auth").getImmediate());return(t=>new cr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(or,ar,ur(t)),(0,i.KN)(or,ar,"esm2017")}
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
 */const hr=300,dr=(0,r.Pz)("authIdTokenMaxAge")||hr;let fr=null;const pr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dr)return;const i=null===n||void 0===n?void 0:n.token;fr!==i&&(fr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E(t,{popupRedirectResolver:nr,persistence:[We,be,Ie]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const t=pr(s);de(n,t,(()=>t(n.currentUser))),he(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&At(n,`http://${o}`),n}lr("Browser")},3247:function(t,e,n){"use strict";n.d(e,{ET:function(){return Ch},hJ:function(){return Ol},JU:function(){return Rl},QT:function(){return Ih},PL:function(){return kh},ad:function(){return xl},IO:function(){return uh},pl:function(){return Sh}});var r,i=n(5816),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,_.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function I(){this.s=this.s,this.o=this.o}var T=0;I.prototype.s=!1,I.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||m(this)},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function x(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=x().indexOf(t)}function L(t){return L[" "](t),t}function M(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}L[" "]=d;var U,$=P("Opera"),F=P("Trident")||P("MSIE"),V=P("Edge"),j=V||F,q=P("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),B=-1!=x().toLowerCase().indexOf("webkit")&&!P("Edge");function K(){var t=h.document;return t?t.documentMode:void 0}t:{var z="",H=function(){var t=x();return q?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):$?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(H&&(z=H?H[1]:""),F){var G=K();if(null!=G&&G>parseFloat(z)){U=String(G);break t}}U=z}var W,J={};function Q(){return M((function(){let t=0;const e=N(String(U)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&F){var X=K();W=X||(parseInt(U,10)||void 0)}else W=void 0;var Y=W;function Z(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{L(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}E(Z,A);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=k(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}ut.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ht(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rt(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);return null}return n=Tt(n),t&&t[et]?t.N(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Et(t);if(a||(t[dt]=a=new ut(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=gt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)O||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function gt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function yt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ht(s,n,r,i),-1<n&&(it(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function _t(t){return t in ft?ft[t]:ft[t]="on"+t}function bt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&wt(t),t=n.call(r,e)}return t}function Et(t){return t=t[dt],t instanceof ut?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function kt(){I.call(this),this.i=new ut(this),this.P=this,this.I=null}function St(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),ct(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ct(o,r,!0,e)&&i}if(o=e.g=t,i=Ct(o,r,!0,e)&&i,i=Ct(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ct(o,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(kt,I),kt.prototype[et]=!0,kt.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},kt.prototype.M=function(){if(kt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},kt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function Ot(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new xt),(t=>t.reset()));class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Lt(t,e){Nt||Mt(),Ut||(Nt(),Ut=!0),$t.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(Ft)}}var Ut=!1,$t=new Rt;function Ft(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Vt(t,e){kt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.lb,this),this.l=Date.now()}function jt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Bt(t){t.g=qt((()=>{t.g=null,t.i&&(t.i=!1,Bt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,kt),r=Vt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(jt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Vt.X.M.call(this),jt(this),delete this.g};class Kt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){I.call(this),this.h=t,this.g={}}E(zt,I);var Ht=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var i=0;i<n.length;i++){var s=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Jt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}zt.prototype.M=function(){zt.X.M.call(this),Wt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new kt}function ie(t){A.call(this,ee.Pa,t)}function se(t){const e=re();St(e,new ie(e))}function oe(t,e){A.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();St(e,new oe(e,t))}function ce(t,e){A.call(this,ee.Qa,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",E(ie,A),ee.STAT_EVENT="statevent",E(oe,A),ee.Qa="timingevent",E(ce,A);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var me,ge={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){A.call(this,"d")}function ye(){A.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new zt(this),this.O=Ee,t=j?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}E(ve,A),E(ye,A),E(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Ee=45e3,Ie={},Te={};function ke(t,e,n){t.K=1,t.v=Ge(qe(e)),t.s=n,t.P=!0,Se(t,null)}function Se(t,e){t.F=Date.now(),Re(t),t.A=qe(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.H,t.h=new be,t.g=hr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Kt(_(t.La,t,t.g),t.N)),Gt(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),se(),Qt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==Te){4==e&&(t.o=4,ae(14),i=!1),Yt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ae(15),Yt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Yt(t.j,t.m,r,null),Le(t,r)}Ce(t)&&r!=Te&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.K=!0,ae(11))):(Yt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),xe(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Te:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Te:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.V=Date.now()+t.O,Ne(t,t.O)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(_(t.gb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||or(t.l,t)}function Pe(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,jt(t.T),Wt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sr(n),Wn(n)}nr(n),ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ue(_(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((t.J||n.g==t)&&sr(n),!R(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,He(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(De(a),Re(a)),r.g=o}else er(r);0<n.i.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}se(4)}catch(u){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),r=Me(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=_e.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==jn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=jn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=l||7==e||se(8==e||0>=d?3:2),De(this);var n=this.g.aa();this.Y=n;e:if(Ce(this)){var r=qn(this.g);t="";var i=r.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),xe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ae(12),Pe(this),xe(this);break t}Yt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.P?(Ae(this,l,o),j&&this.i&&3==l&&(Gt(this.S,this.T,"tick",this.hb),this.T.start())):(Yt(this.j,this.m,o,null),Le(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Pe(this),xe(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=jn(this.g),e=this.g.fa();this.C<e.length&&(De(this),Ae(this,t,e),this.i&&4!=t&&Re(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(se(),ae(17)),Pe(this),this.o=2,xe(this)):Ne(this,this.V-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function je(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof je){this.h=void 0!==e?e:t.h,Be(this,t.j),this.s=t.s,this.g=t.g,Ke(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ze(this,n),this.o=t.o}else t&&(n=String(t).match(Fe))?(this.h=!!e,Be(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),Ke(this,n[4]),this.l=We(n[5]||"",!0),ze(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function qe(t){return new je(t)}function Be(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ze(t,e,n){e instanceof nn?(t.i=e,un(t.i,t.h)):(n||(e=Je(e,tn)),t.i=new nn(e,t.h))}function He(t,e,n){t.i.set(e,n)}function Ge(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Qe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Je(e,Xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Je(n,"/"==n.charAt(0)?Ze:Ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,en)),t.join("")};var Xe=/[#\/\?@]/g,Ye=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){rn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),S(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=cn(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function gn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function wn(){}function _n(){this.g=new wn}function bn(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;p(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(t,e){const n=new Jt;if(h.Image){const r=new Image;r.onload=b(In,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(In,n,r,"TestLoadImage: error",!1,e),r.onabort=b(In,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(In,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function In(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}function kn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Tn,de),Tn.prototype.g=function(){return new kn(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),E(kn,kt);var Sn=0;function Cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=kn.prototype,r.open=function(t,e){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Sn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):On(this),3==this.readyState&&Cn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ua=function(t){this.g&&(this.response=t,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=h.JSON.parse;function Nn(t){kt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}E(Nn,kt);var Dn="",xn=/^https?$/i,Pn=["POST","PUT"];function Ln(t){return F&&Q()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),Fn(t)}function Un(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function $n(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=jn(t)||2!=t.aa()))if(t.v&&4==jn(t))qt(t.Ha,0,t);else if(St(t,"readystatechange"),4==jn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Fe)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Un(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){Vn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||St(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Or){return null}}function Bn(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Kn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):He(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hn(t){this.Ca=0,this.i=[],this.j=new Jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zn("baseRetryDelayMs",5e3,t),this.bb=zn("retryDelaySeedMs",1e4,t),this.$a=zn("forwardChannelMaxRetries",2,t),this.ta=zn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new _n,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(t){if(Jn(t),3==t.G){var e=t.U++,n=qe(t.F);He(n,"SID",t.I),He(n,"RID",e),He(n,"TYPE","terminate"),Zn(t,n),e=new _e(t,t.j,e,void 0),e.K=2,e.v=Ge(qe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}ur(t)}function Wn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Jn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),sr(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Qn(t){fn(t.h)||t.m||(t.m=!0,Lt(t.Ja,t),t.C=0)}function Xn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ue(_(t.Ja,t,e),ar(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.U++;const r=qe(t.F);He(r,"SID",t.I),He(r,"RID",n),He(r,"AID",t.T),Zn(t,r),t.o&&t.s&&Kn(r,t.o,t.s),n=new _e(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),gn(t.h,n),ke(n,r,e)}function Zn(t,e){t.ia&&st(t.ia,(function(t,n){He(e,n,t)})),t.l&&$e({},(function(t,n){He(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?_(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{bn(a,t,"req"+n+"_")}catch($r){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function er(t){t.g||t.u||(t.Z=1,Lt(t.Ia,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ue(_(t.Ia,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new _e(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=qe(t.sa);He(e,"RID","rpc"),He(e,"SID",t.I),He(e,"CI",t.L?"0":"1"),He(e,"AID",t.T),He(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Kn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ge(qe(e)),n.s=null,n.P=!0,Se(n,t)}function sr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function or(t,e){var n=null;if(t.g==e){sr(t),rr(t),t.g=null;var r=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=re(),St(r,new ce(r,n)),Qn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Xn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}function ar(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=_(t.kb,t);n||(n=new je("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Be(n,"https"),Ge(n)),En(n.toString(),r)}else ae(2);t.G=0,t.l&&t.l.va(e),ur(t),Jn(t)}function ur(t){if(t.G=0,t.la=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(C(t.la,e),C(t.la,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ua()}}function lr(t,e,n){var r=n instanceof je?qe(n):new je(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ke(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new je(null,void 0);r&&Be(s,r),e&&(s.g=e),i&&Ke(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&He(r,n,e),He(r,"VER",t.ma),Zn(t,r),r}function hr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Nn(new Tn({jb:!0})):new Nn(t.ra),e.Ka(t.H),e}function dr(){}function fr(){if(F&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(t,e){kt.call(this),this.g=new Hn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function mr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gr(){ye.call(this),this.status=1}function vr(t){this.g=t}r=Nn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?fe(this.u):fe(me),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Mn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=k(Pn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=qt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),Fn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),Nn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?$n(this):this.fb())},r.fb=function(){$n(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new _e(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=ot(s),ct(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=qe(this.F),He(n,"RID",t),He(n,"CVER",22),this.D&&He(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&Kn(n,this.o,s)),gn(this.h,i),this.Ya&&He(n,"TYPE","init"),this.O?(He(n,"$req",e),He(n,"SID","null"),i.Z=!0,ke(i,n,null)):ke(i,n,e),this.G=2}}else 3==this.G&&(t?Yn(this,t):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ue(_(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Wn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),ae(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(t,e){return new pr(t,e)},E(pr,kt),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lr(t,null,t.V),Qn(t)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Qn(e)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},E(mr,ve),E(gr,ye),E(vr,dr),vr.prototype.xa=function(){St(this.g,"a")},vr.prototype.wa=function(t){St(this.g,new mr(t))},vr.prototype.va=function(t){St(this.g,new gr)},vr.prototype.ua=function(){St(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",kt.prototype.listen=kt.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},wr=u.getStatEventTarget=function(){return re()},_r=u.ErrorCode=le,br=u.EventType=he,Er=u.Event=ee,Ir=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=u.FetchXmlHttpFactory=Tn,kr=u.WebChannel=pe,Sr=u.XhrIo=Nn;const Cr="@firebase/firestore";
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
 */class Ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
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
let Or="9.18.0";
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
 */const Rr=new o.Yd("@firebase/firestore");function Nr(){return Rr.logLevel}function Dr(t,...e){if(Rr.logLevel<=o["in"].DEBUG){const n=e.map(Lr);Rr.debug(`Firestore (${Or}): ${t}`,...n)}}function xr(t,...e){if(Rr.logLevel<=o["in"].ERROR){const n=e.map(Lr);Rr.error(`Firestore (${Or}): ${t}`,...n)}}function Pr(t,...e){if(Rr.logLevel<=o["in"].WARN){const n=e.map(Lr);Rr.warn(`Firestore (${Or}): ${t}`,...n)}}function Lr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function Mr(t="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Ur(t,e){t||Mr()}function $r(t,e){return t}
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
 */const Fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class jr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class qr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Br{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ar.UNAUTHENTICATED)))}shutdown(){}}class Kr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class zr{constructor(t){this.t=t,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ur("string"==typeof e.accessToken),new qr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(null===t||"string"==typeof t),new Ar(t)}}class Hr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Hr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ur("string"==typeof t.token),this.A=t.token,new Wr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Qr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Xr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Qr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Yr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ti.fromMillis(Date.now())}static fromDate(t){return ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Yr(this.nanoseconds,t.nanoseconds):Yr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ei(t)}static min(){return new ei(new ti(0,0))}static max(){return new ei(new ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ni{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mr(),void 0===n?n=t.length-e:n>t.length-e&&Mr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ni.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ri extends ni{construct(t,e,n){return new ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ri(e)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(t,e,n){return new si(t,e,n)}static isValidIdentifier(t){return ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Vr(Fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vr(Fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Vr(Fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new si(e)}static emptyPath(){return new si([])}}
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
 */class oi{constructor(t){this.path=t}static fromPath(t){return new oi(ri.fromString(t))}static fromName(t){return new oi(ri.fromString(t).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new oi(new ri(t.slice()))}}
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
 */class ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function ci(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ei.fromTimestamp(1e9===r?new ti(n+1,0):new ti(n,r));return new li(i,oi.empty(),e)}function ui(t){return new li(t.readTime,t.key,-1)}class li{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new li(ei.min(),oi.empty(),-1)}static max(){return new li(ei.max(),oi.empty(),-1)}}function hi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=oi.comparator(t.documentKey,e.documentKey),0!==n?n:Yr(t.largestBatchId,e.largestBatchId))}
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
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function pi(t){if(t.code!==Fr.FAILED_PRECONDITION||t.message!==di)throw t;Dr("LocalStore","Unexpectedly lost primary lease")}
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
 */class mi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mi?e:mi.resolve(e)}catch(t){return mi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.reject(e)}static resolve(t){return new mi(((e,n)=>{e(t)}))}static reject(t){return new mi(((e,n)=>{n(t)}))}static waitFor(t){return new mi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=mi.resolve(!1);for(const n of t)e=e.next((t=>t?mi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new mi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new mi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function gi(t){return"IndexedDbTransactionError"===t.name}
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
class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}vi.at=-1;
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
class yi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof wi&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function _i(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ei(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function Ii(t){return null==t}function Ti(t){return 0===t&&1/t==-1/0}function ki(t){return"number"==typeof t&&Number.isInteger(t)&&!Ti(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
class Ci{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw t instanceof DOMException?new Si("Invalid base64 string: "+t):t}}(t);return new Ci(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ci(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Yr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ai=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(Ur(!!t),"string"==typeof t){let e=0;const n=Ai.exec(t);if(Ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ri(t.seconds),nanos:Ri(t.nanos)}}function Ri(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ni(t){return"string"==typeof t?Ci.fromBase64String(t):Ci.fromUint8Array(t)}
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
 */function Di(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function xi(t){const e=t.mapValue.fields.__previous_value__;return Di(e)?xi(e):e}function Pi(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}
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
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Di(t)?4:Qi(t)?9007199254740991:10:Mr()}function Ui(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oi(t.timestampValue),r=Oi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ni(t.bytesValue).isEqual(Ni(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ri(t.geoPointValue.latitude)===Ri(e.geoPointValue.latitude)&&Ri(t.geoPointValue.longitude)===Ri(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ri(t.integerValue)===Ri(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ri(t.doubleValue),r=Ri(e.doubleValue);return n===r?Ti(n)===Ti(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(_i(n)!==_i(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ui(n[i],r[i])))return!1;return!0}(t,e);default:return Mr()}}function $i(t,e){return void 0!==(t.values||[]).find((t=>Ui(t,e)))}function Fi(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ri(t.integerValue||t.doubleValue),r=Ri(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Vi(t.timestampValue,e.timestampValue);case 4:return Vi(Pi(t),Pi(e));case 5:return Yr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ni(t),r=Ni(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Yr(n[i],r[i]);if(0!==t)return t}return Yr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Yr(Ri(t.latitude),Ri(e.latitude));return 0!==n?n:Yr(Ri(t.longitude),Ri(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Fi(n[i],r[i]);if(t)return t}return Yr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Li.mapValue&&e===Li.mapValue)return 0;if(t===Li.mapValue)return 1;if(e===Li.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Yr(r[o],s[o]);if(0!==t)return t;const e=Fi(n[r[o]],i[s[o]]);if(0!==e)return e}return Yr(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Mr()}}function Vi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Yr(t,e);const n=Oi(t),r=Oi(e),i=Yr(n.seconds,r.seconds);return 0!==i?i:Yr(n.nanos,r.nanos)}function ji(t){return qi(t)}function qi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ni(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=qi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${qi(t.fields[i])}`;return n+"}"}(t.mapValue):Mr();var e,n}function Bi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ki(t){return!!t&&"integerValue"in t}function zi(t){return!!t&&"arrayValue"in t}function Hi(t){return!!t&&"nullValue"in t}function Gi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ji(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Xi{constructor(t,e){this.position=t,this.inclusive=e}}function Yi(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Fi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Zi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ui(t.position[n],e.position[n]))return!1;return!0}
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
 */class ts{}class es extends ts{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new us(t,e,n):"array-contains"===e?new fs(t,n):"in"===e?new ps(t,n):"not-in"===e?new ms(t,n):"array-contains-any"===e?new gs(t,n):new es(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ls(t,n):new hs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Fi(e,this.value)):null!==e&&Mi(this.value)===Mi(e)&&this.matchesComparison(Fi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ns extends ts{constructor(t,e){super(),this.filters=t,this.op=e,this.ft=null}static create(t,e){return new ns(t,e)}matches(t){return rs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt((t=>t.isInequality()));return null!==t?t.field:null}dt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function rs(t){return"and"===t.op}function is(t){return ss(t)&&rs(t)}function ss(t){for(const e of t.filters)if(e instanceof ns)return!1;return!0}function os(t){if(t instanceof es)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(is(t))return t.filters.map((t=>os(t))).join(",");{const e=t.filters.map((t=>os(t))).join(",");return`${t.op}(${e})`}}function as(t,e){return t instanceof es?function(t,e){return e instanceof es&&t.op===e.op&&t.field.isEqual(e.field)&&Ui(t.value,e.value)}(t,e):t instanceof ns?function(t,e){return e instanceof ns&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&as(n,e.filters[r])),!0)}(t,e):void Mr()}function cs(t){return t instanceof es?function(t){return`${t.field.canonicalString()} ${t.op} ${ji(t.value)}`}(t):t instanceof ns?function(t){return t.op.toString()+" {"+t.getFilters().map(cs).join(" ,")+"}"}(t):"Filter"}class us extends es{constructor(t,e,n){super(t,e,n),this.key=oi.fromName(n.referenceValue)}matches(t){const e=oi.comparator(t.key,this.key);return this.matchesComparison(e)}}class ls extends es{constructor(t,e){super(t,"in",e),this.keys=ds("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hs extends es{constructor(t,e){super(t,"not-in",e),this.keys=ds("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ds(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>oi.fromName(t.referenceValue)))}class fs extends es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zi(e)&&$i(e.arrayValue,this.value)}}class ps extends es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$i(this.value.arrayValue,e)}}class ms extends es{constructor(t,e){super(t,"not-in",e)}matches(t){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$i(this.value.arrayValue,e)}}class gs extends es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$i(this.value.arrayValue,t)))}}
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
 */class vs{constructor(t,e="asc"){this.field=t,this.dir=e}}function ys(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class ws{constructor(t,e){this.comparator=t,this.root=e||bs.EMPTY}insert(t,e){return new ws(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bs.BLACK,null,null))}remove(t){return new ws(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _s(this.root,t,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _s(this.root,t,this.comparator,!0)}}class _s{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bs{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:bs.RED,this.left=null!=r?r:bs.EMPTY,this.right=null!=i?i:bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new bs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return bs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const t=this.left.check();if(t!==this.right.check())throw Mr();return t+(this.isRed()?0:1)}}bs.EMPTY=null,bs.RED=!0,bs.BLACK=!1,bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new bs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Es{constructor(t){this.comparator=t,this.data=new ws(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Is(this.data.getIterator())}getIteratorFrom(t){return new Is(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Es))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Es(this.comparator);return e.data=t,e}}class Is{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Ts{constructor(t){this.fields=t,t.sort(si.comparator)}static empty(){return new Ts([])}unionWith(t){let e=new Es(si.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ts(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class ks{constructor(t){this.value=t}static empty(){return new ks({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ji(e)}setAll(t){let e=si.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ji(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ui(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){bi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ks(Ji(this.value))}}function Ss(t){const e=[];return bi(t.fields,((t,n)=>{const r=new si([t]);if(Wi(n)){const t=Ss(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ts(e)
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
 */}class Cs{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Cs(t,0,ei.min(),ei.min(),ei.min(),ks.empty(),0)}static newFoundDocument(t,e,n,r){return new Cs(t,1,e,ei.min(),n,r,0)}static newNoDocument(t,e){return new Cs(t,2,e,ei.min(),ei.min(),ks.empty(),0)}static newUnknownDocument(t,e){return new Cs(t,3,e,ei.min(),ei.min(),ks.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ks.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ks.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Cs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Cs(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class As{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this._t=null}}function Os(t,e=null,n=[],r=[],i=null,s=null,o=null){return new As(t,e,n,r,i,s,o)}function Rs(t){const e=$r(t);if(null===e._t){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>os(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ii(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ji(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ji(t))).join(",")),e._t=t}return e._t}function Ns(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ys(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!as(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zi(t.startAt,e.startAt)&&Zi(t.endAt,e.endAt)}function Ds(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class xs{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Ps(t,e,n,r,i,s,o,a){return new xs(t,e,n,r,i,s,o,a)}function Ls(t){return new xs(t)}function Ms(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Us(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $s(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Fs(t){return null!==t.collectionGroup}function Vs(t){const e=$r(t);if(null===e.wt){e.wt=[];const t=$s(e),n=Us(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new vs(t)),e.wt.push(new vs(si.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new vs(si.keyField(),t))}}}return e.wt}function js(t){const e=$r(t);if(!e.gt)if("F"===e.limitType)e.gt=Os(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Vs(e)){const e="desc"===i.dir?"asc":"desc";t.push(new vs(i.field,e))}const n=e.endAt?new Xi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xi(e.startAt.position,e.startAt.inclusive):null;e.gt=Os(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.gt}function qs(t,e){e.getFirstInequalityField(),$s(t);const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bs(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ks(t,e){return Ns(js(t),js(e))&&t.limitType===e.limitType}function zs(t){return`${Rs(js(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>cs(t))).join(", ")}]`),Ii(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ji(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ji(t))).join(",")),`Target(${e})`}(js(t))}; limitType=${t.limitType})`}function Gs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):oi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Vs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Yi(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Vs(t),e))&&!(t.endAt&&!function(t,e,n){const r=Yi(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Vs(t),e))}(t,e)}function Ws(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Js(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const t=Qs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Qs(t,e,n){const r=t.field.isKeyField()?oi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Fi(r,i):Mr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
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
 */function Xs(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Ys(t){return{integerValue:""+t}}function Zs(t,e){return ki(e)?Ys(e):Xs(t,e)}
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
 */class to{constructor(){this._=void 0}}function eo(t,e,n){return t instanceof io?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof so?oo(t,e):t instanceof ao?co(t,e):function(t,e){const n=ro(t,e),r=lo(n)+lo(t.It);return Ki(n)&&Ki(t.It)?Ys(r):Xs(t.Tt,r)}(t,e)}function no(t,e,n){return t instanceof so?oo(t,e):t instanceof ao?co(t,e):n}function ro(t,e){return t instanceof uo?Ki(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class io extends to{}class so extends to{constructor(t){super(),this.elements=t}}function oo(t,e){const n=ho(e);for(const r of t.elements)n.some((t=>Ui(t,r)))||n.push(r);return{arrayValue:{values:n}}}class ao extends to{constructor(t){super(),this.elements=t}}function co(t,e){let n=ho(e);for(const r of t.elements)n=n.filter((t=>!Ui(t,r)));return{arrayValue:{values:n}}}class uo extends to{constructor(t,e){super(),this.Tt=t,this.It=e}}function lo(t){return Ri(t.integerValue||t.doubleValue)}function ho(t){return zi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function fo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof so&&e instanceof so||t instanceof ao&&e instanceof ao?Zr(t.elements,e.elements,Ui):t instanceof uo&&e instanceof uo?Ui(t.It,e.It):t instanceof io&&e instanceof io}(t.transform,e.transform)}class po{constructor(t,e){this.version=t,this.transformResults=e}}class mo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mo}static exists(t){return new mo(void 0,t)}static updateTime(t){return new mo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function go(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vo{}function yo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ao(t.key,mo.none()):new Io(t.key,t.data,mo.none());{const n=t.data,r=ks.empty();let i=new Es(si.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new To(t.key,r,new Ts(i.toArray()),mo.none())}}function wo(t,e,n){t instanceof Io?function(t,e,n){const r=t.value.clone(),i=So(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof To?function(t,e,n){if(!go(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=So(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ko(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof Io?function(t,e,n,r){if(!go(t.precondition,e))return n;const i=t.value.clone(),s=Co(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof To?function(t,e,n,r){if(!go(t.precondition,e))return n;const i=Co(t.fieldTransforms,r,e),s=e.data;return s.setAll(ko(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return go(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function bo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ro(r.transform,t||null);null!=i&&(null===n&&(n=ks.empty()),n.set(r.field,i))}return n||null}function Eo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>fo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends vo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class To extends vo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ko(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function So(t,e,n){const r=new Map;Ur(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,no(o,a,n[i]))}return r}function Co(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,eo(t,s,e))}return r}class Ao extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oo extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Ro{constructor(t){this.count=t}}
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
 */var No,Do;function xo(t){switch(t){default:return Mr();case Fr.CANCELLED:case Fr.UNKNOWN:case Fr.DEADLINE_EXCEEDED:case Fr.RESOURCE_EXHAUSTED:case Fr.INTERNAL:case Fr.UNAVAILABLE:case Fr.UNAUTHENTICATED:return!1;case Fr.INVALID_ARGUMENT:case Fr.NOT_FOUND:case Fr.ALREADY_EXISTS:case Fr.PERMISSION_DENIED:case Fr.FAILED_PRECONDITION:case Fr.ABORTED:case Fr.OUT_OF_RANGE:case Fr.UNIMPLEMENTED:case Fr.DATA_LOSS:return!0}}function Po(t){if(void 0===t)return xr("GRPC error has no .code"),Fr.UNKNOWN;switch(t){case No.OK:return Fr.OK;case No.CANCELLED:return Fr.CANCELLED;case No.UNKNOWN:return Fr.UNKNOWN;case No.DEADLINE_EXCEEDED:return Fr.DEADLINE_EXCEEDED;case No.RESOURCE_EXHAUSTED:return Fr.RESOURCE_EXHAUSTED;case No.INTERNAL:return Fr.INTERNAL;case No.UNAVAILABLE:return Fr.UNAVAILABLE;case No.UNAUTHENTICATED:return Fr.UNAUTHENTICATED;case No.INVALID_ARGUMENT:return Fr.INVALID_ARGUMENT;case No.NOT_FOUND:return Fr.NOT_FOUND;case No.ALREADY_EXISTS:return Fr.ALREADY_EXISTS;case No.PERMISSION_DENIED:return Fr.PERMISSION_DENIED;case No.FAILED_PRECONDITION:return Fr.FAILED_PRECONDITION;case No.ABORTED:return Fr.ABORTED;case No.OUT_OF_RANGE:return Fr.OUT_OF_RANGE;case No.UNIMPLEMENTED:return Fr.UNIMPLEMENTED;case No.DATA_LOSS:return Fr.DATA_LOSS;default:return Mr()}}(Do=No||(No={}))[Do.OK=0]="OK",Do[Do.CANCELLED=1]="CANCELLED",Do[Do.UNKNOWN=2]="UNKNOWN",Do[Do.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Do[Do.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Do[Do.NOT_FOUND=5]="NOT_FOUND",Do[Do.ALREADY_EXISTS=6]="ALREADY_EXISTS",Do[Do.PERMISSION_DENIED=7]="PERMISSION_DENIED",Do[Do.UNAUTHENTICATED=16]="UNAUTHENTICATED",Do[Do.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Do[Do.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Do[Do.ABORTED=10]="ABORTED",Do[Do.OUT_OF_RANGE=11]="OUT_OF_RANGE",Do[Do.UNIMPLEMENTED=12]="UNIMPLEMENTED",Do[Do.INTERNAL=13]="INTERNAL",Do[Do.UNAVAILABLE=14]="UNAVAILABLE",Do[Do.DATA_LOSS=15]="DATA_LOSS";
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
class Lo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){bi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ei(this.inner)}size(){return this.innerSize}}
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
 */const Mo=new ws(oi.comparator);function Uo(){return Mo}const $o=new ws(oi.comparator);function Fo(...t){let e=$o;for(const n of t)e=e.insert(n.key,n);return e}function Vo(t){let e=$o;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function jo(){return Bo()}function qo(){return Bo()}function Bo(){return new Lo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ko=new ws(oi.comparator),zo=new Es(oi.comparator);function Ho(...t){let e=zo;for(const n of t)e=e.add(n);return e}const Go=new Es(Yr);function Wo(){return Go}
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
 */class Jo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Qo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Jo(ei.min(),r,Wo(),Uo(),Ho())}}class Qo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Qo(n,e,Ho(),Ho(),Ho())}}
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
 */class Xo{constructor(t,e,n,r){this.Et=t,this.removedTargetIds=e,this.key=n,this.At=r}}class Yo{constructor(t,e){this.targetId=t,this.Rt=e}}class Zo{constructor(t,e,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ta{constructor(){this.Pt=0,this.vt=ra(),this.bt=Ci.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return 0!==this.Pt}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.bt=t)}Nt(){let t=Ho(),e=Ho(),n=Ho();return this.vt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Qo(this.bt,this.Vt,t,e,n)}kt(){this.St=!1,this.vt=ra()}$t(t,e){this.St=!0,this.vt=this.vt.insert(t,e)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class ea{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=Uo(),this.Kt=na(),this.Gt=new Es(Yr)}Qt(t){for(const e of t.Et)t.At&&t.At.isFoundDocument()?this.jt(e,t.At):this.zt(e,t.key,t.At);for(const e of t.removedTargetIds)this.zt(e,t.key,t.At)}Wt(t){this.forEachTarget(t,(e=>{const n=this.Ht(e);switch(t.state){case 0:this.Jt(e)&&n.xt(t.resumeToken);break;case 1:n.Ft(),n.Dt||n.kt(),n.xt(t.resumeToken);break;case 2:n.Ft(),n.Dt||this.removeTarget(e);break;case 3:this.Jt(e)&&(n.Bt(),n.xt(t.resumeToken));break;case 4:this.Jt(e)&&(this.Yt(e),n.xt(t.resumeToken));break;default:Mr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qt.forEach(((t,n)=>{this.Jt(n)&&e(n)}))}Zt(t){const e=t.targetId,n=t.Rt.count,r=this.Xt(e);if(r){const t=r.target;if(Ds(t))if(0===n){const n=new oi(t.path);this.zt(e,n,Cs.newNoDocument(n,ei.min()))}else Ur(1===n);else this.te(e)!==n&&(this.Yt(e),this.Gt=this.Gt.add(e))}}ee(t){const e=new Map;this.qt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Ds(i.target)){const e=new oi(i.target.path);null!==this.Ut.get(e)||this.ne(r,e)||this.zt(r,e,Cs.newNoDocument(e,t))}n.Ct&&(e.set(r,n.Nt()),n.kt())}}));let n=Ho();this.Kt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Jo(t,e,this.Gt,this.Ut,n);return this.Ut=Uo(),this.Kt=na(),this.Gt=new Es(Yr),r}jt(t,e){if(!this.Jt(t))return;const n=this.ne(t,e.key)?2:0;this.Ht(t).$t(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.Kt=this.Kt.insert(e.key,this.se(e.key).add(t))}zt(t,e,n){if(!this.Jt(t))return;const r=this.Ht(t);this.ne(t,e)?r.$t(e,1):r.Mt(e),this.Kt=this.Kt.insert(e,this.se(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.qt.delete(t)}te(t){const e=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Ht(t).Ot()}Ht(t){let e=this.qt.get(t);return e||(e=new ta,this.qt.set(t,e)),e}se(t){let e=this.Kt.get(t);return e||(e=new Es(Yr),this.Kt=this.Kt.insert(t,e)),e}Jt(t){const e=null!==this.Xt(t);return e||Dr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.qt.get(t);return e&&e.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new ta),this.Lt.getRemoteKeysForTarget(t).forEach((e=>{this.zt(t,e,null)}))}ne(t,e){return this.Lt.getRemoteKeysForTarget(t).has(e)}}function na(){return new ws(oi.comparator)}function ra(){return new ws(oi.comparator)}
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
 */const ia=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),sa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),oa=(()=>{const t={and:"AND",or:"OR"};return t})();class aa{constructor(t,e){this.databaseId=t,this.yt=e}}function ca(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ua(t,e){return t.yt?e.toBase64():e.toUint8Array()}function la(t,e){return ca(t,e.toTimestamp())}function ha(t){return Ur(!!t),ei.fromTimestamp(function(t){const e=Oi(t);return new ti(e.seconds,e.nanos)}(t))}function da(t,e){return function(t){return new ri(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function fa(t){const e=ri.fromString(t);return Ur(Ma(e)),e}function pa(t,e){return da(t.databaseId,e.path)}function ma(t,e){const n=fa(e);if(n.get(1)!==t.databaseId.projectId)throw new Vr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vr(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oi(wa(n))}function ga(t,e){return da(t.databaseId,e)}function va(t){const e=fa(t);return 4===e.length?ri.emptyPath():wa(e)}function ya(t){return new ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wa(t){return Ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function _a(t,e,n){return{name:pa(t,e),fields:n.value.mapValue.fields}}function ba(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.yt?(Ur(void 0===e||"string"==typeof e),Ci.fromBase64String(e||"")):(Ur(void 0===e||e instanceof Uint8Array),Ci.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Fr.UNKNOWN:Po(t.code);return new Vr(e,t.message||"")}(o);n=new Zo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(t,r.document.name),s=ha(r.document.updateTime),o=r.document.createTime?ha(r.document.createTime):ei.min(),a=new ks({mapValue:{fields:r.document.fields}}),c=Cs.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Xo(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(t,r.document),s=r.readTime?ha(r.readTime):ei.min(),o=Cs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(t,r.document),s=r.removedTargetIds||[];n=new Xo([],s,i,null)}else{if(!("filter"in e))return Mr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ro(r),s=t.targetId;n=new Yo(s,i)}}return n}function Ea(t,e){let n;if(e instanceof Io)n={update:_a(t,e.key,e.value)};else if(e instanceof Ao)n={delete:pa(t,e.key)};else if(e instanceof To)n={update:_a(t,e.key,e.data),updateMask:La(e.fieldMask)};else{if(!(e instanceof Oo))return Mr();n={verify:pa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof io)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof so)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uo)return{fieldPath:e.field.canonicalString(),increment:n.It};throw Mr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:la(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mr()}(t,e.precondition)),n}function Ia(t,e){return t&&t.length>0?(Ur(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ha(t.updateTime):ha(e);return n.isEqual(ei.min())&&(n=ha(e)),new po(n,t.transformResults||[])}(t,e)))):[]}function Ta(t,e){return{documents:[ga(t,e.path)]}}function ka(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ga(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ga(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return Pa(ns.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Da(t.field),direction:Oa(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.yt||Ii(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Sa(t){let e=va(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ur(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Aa(t);return e instanceof ns&&is(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new vs(xa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ii(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Xi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Xi(n,e)}(n.endAt)),Ps(e,i,o,s,a,"F",c,u)}function Ca(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Aa(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xa(t.unaryFilter.field);return es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xa(t.unaryFilter.field);return es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xa(t.unaryFilter.field);return es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xa(t.unaryFilter.field);return es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(t):void 0!==t.fieldFilter?function(t){return es.create(xa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ns.create(t.compositeFilter.filters.map((t=>Aa(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Mr()}}(t.compositeFilter.op))}(t):Mr()}function Oa(t){return ia[t]}function Ra(t){return sa[t]}function Na(t){return oa[t]}function Da(t){return{fieldPath:t.canonicalString()}}function xa(t){return si.fromServerFormat(t.fieldPath)}function Pa(t){return t instanceof es?function(t){if("=="===t.op){if(Gi(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NAN"}};if(Hi(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Gi(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NAN"}};if(Hi(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(t.field),op:Ra(t.op),value:t.value}}}(t):t instanceof ns?function(t){const e=t.getFilters().map((t=>Pa(t)));return 1===e.length?e[0]:{compositeFilter:{op:Na(t.op),filters:e}}}(t):Mr()}function La(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ma(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Ua=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$a=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fa=$a;
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
class Va{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&wo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=_o(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=_o(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qo();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=yo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ho())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>Eo(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>Eo(t,e)))}}class ja{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ur(t.mutations.length===n.length);let r=Ko;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ja(t,e,n,r)}}
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
 */class qa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Ba{constructor(t,e,n,r,i=ei.min(),s=ei.min(),o=Ci.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ba(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ka{constructor(t){this.oe=t}}function za(t){const e=Sa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Bs(e,e.limit,"L"):e}
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
class Ha{constructor(){}ae(t,e){this.he(t,e),e.le()}he(t,e){if("nullValue"in t)this.fe(e,5);else if("booleanValue"in t)this.fe(e,10),e.de(t.booleanValue?1:0);else if("integerValue"in t)this.fe(e,15),e.de(Ri(t.integerValue));else if("doubleValue"in t){const n=Ri(t.doubleValue);isNaN(n)?this.fe(e,13):(this.fe(e,15),Ti(n)?e.de(0):e.de(n))}else if("timestampValue"in t){const n=t.timestampValue;this.fe(e,20),"string"==typeof n?e._e(n):(e._e(`${n.seconds||""}`),e.de(n.nanos||0))}else if("stringValue"in t)this.we(t.stringValue,e),this.me(e);else if("bytesValue"in t)this.fe(e,30),e.ge(Ni(t.bytesValue)),this.me(e);else if("referenceValue"in t)this.ye(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.fe(e,45),e.de(n.latitude||0),e.de(n.longitude||0)}else"mapValue"in t?Qi(t)?this.fe(e,Number.MAX_SAFE_INTEGER):(this.pe(t.mapValue,e),this.me(e)):"arrayValue"in t?(this.Ie(t.arrayValue,e),this.me(e)):Mr()}we(t,e){this.fe(e,25),this.Te(t,e)}Te(t,e){e._e(t)}pe(t,e){const n=t.fields||{};this.fe(e,55);for(const r of Object.keys(n))this.we(r,e),this.he(n[r],e)}Ie(t,e){const n=t.values||[];this.fe(e,50);for(const r of n)this.he(r,e)}ye(t,e){this.fe(e,37),oi.fromName(t).path.forEach((t=>{this.fe(e,60),this.Te(t,e)}))}fe(t,e){t.de(e)}me(t){t.de(2)}}Ha.Ee=new Ha;
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
class Ga{constructor(){this.Ze=new Wa}addToCollectionParentIndex(t,e){return this.Ze.add(e),mi.resolve()}getCollectionParents(t,e){return mi.resolve(this.Ze.getEntries(e))}addFieldIndex(t,e){return mi.resolve()}deleteFieldIndex(t,e){return mi.resolve()}getDocumentsMatchingTarget(t,e){return mi.resolve(null)}getIndexType(t,e){return mi.resolve(0)}getFieldIndexes(t,e){return mi.resolve([])}getNextCollectionGroupToUpdate(t){return mi.resolve(null)}getMinOffset(t,e){return mi.resolve(li.min())}getMinOffsetFromCollectionGroup(t,e){return mi.resolve(li.min())}updateCollectionGroup(t,e,n){return mi.resolve()}updateIndexEntries(t,e){return mi.resolve()}}class Wa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Es(ri.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Es(ri.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ja{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ja(t,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ja.DEFAULT_COLLECTION_PERCENTILE=10,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ja.DEFAULT=new Ja(41943040,Ja.DEFAULT_COLLECTION_PERCENTILE,Ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ja.DISABLED=new Ja(-1,0,0);
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
class Qa{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Vn(){return new Qa(0)}static Sn(){return new Qa(-1)}}
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
class Xa{constructor(){this.changes=new Lo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Cs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Ya{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Za{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&_o(n.mutation,t,Ts.empty(),ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ho()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ho()){const r=jo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Fo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=jo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ho())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Uo();const s=Bo(),o=Bo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof To)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),_o(o.mutation,e,o.mutation.getFieldMask(),ti.now())):s.set(e.key,Ts.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ya(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Bo();let r=new ws(((t,e)=>t-e)),i=Ho();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ts.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ho()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=qo();c.forEach((t=>{if(!i.has(t)){const r=yo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return mi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return oi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):mi.resolve(jo());let o=-1,a=i;return s.next((e=>mi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?mi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ho()))).next((t=>({batchId:o,changes:Vo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new oi(e)).next((t=>{let e=Fo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Fo();return this.indexManager.getCollectionParents(t,r).next((s=>mi.forEach(s,(s=>{const o=function(t,e){return new xs(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Cs.newInvalidDocument(r)))}));let n=Fo();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&_o(s.mutation,i,Ts.empty(),ti.now()),Gs(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class tc{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,e){return mi.resolve(this.es.get(e))}saveBundleMetadata(t,e){var n;return this.es.set(e.id,{id:(n=e).id,version:n.version,createTime:ha(n.createTime)}),mi.resolve()}getNamedQuery(t,e){return mi.resolve(this.ns.get(e))}saveNamedQuery(t,e){return this.ns.set(e.name,function(t){return{name:t.name,query:za(t.bundledQuery),readTime:ha(t.readTime)}}(e)),mi.resolve()}}
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
 */class ec{constructor(){this.overlays=new ws(oi.comparator),this.ss=new Map}getOverlay(t,e){return mi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jo();return mi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ce(t,e,r)})),mi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ss.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ss.delete(n)),mi.resolve()}getOverlaysForCollection(t,e,n){const r=jo(),i=e.length+1,s=new oi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return mi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ws(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=jo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=jo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return mi.resolve(o)}ce(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let i=this.ss.get(e);void 0===i&&(i=Ho(),this.ss.set(e,i)),this.ss.set(e,i.add(n.key))}}
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
 */class nc{constructor(){this.rs=new Es(rc.os),this.us=new Es(rc.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,e){const n=new rc(t,e);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ls(new rc(t,e))}fs(t,e){t.forEach((t=>this.removeReference(t,e)))}ds(t){const e=new oi(new ri([])),n=new rc(e,t),r=new rc(e,t+1),i=[];return this.us.forEachInRange([n,r],(t=>{this.ls(t),i.push(t.key)})),i}_s(){this.rs.forEach((t=>this.ls(t)))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const e=new oi(new ri([])),n=new rc(e,t),r=new rc(e,t+1);let i=Ho();return this.us.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new rc(t,0),n=this.rs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rc{constructor(t,e){this.key=t,this.gs=e}static os(t,e){return oi.comparator(t.key,e.key)||Yr(t.gs,e.gs)}static cs(t,e){return Yr(t.gs,e.gs)||oi.comparator(t.key,e.key)}}
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
 */class ic{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ys=1,this.ps=new Es(rc.os)}checkEmpty(t){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Va(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.ps=this.ps.add(new rc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return mi.resolve(s)}lookupMutationBatch(t,e){return mi.resolve(this.Is(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ts(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(t){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rc(e,0),r=new rc(e,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,r],(t=>{const e=this.Is(t.gs);i.push(e)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Es(Yr);return e.forEach((t=>{const e=new rc(t,0),r=new rc(t,Number.POSITIVE_INFINITY);this.ps.forEachInRange([e,r],(t=>{n=n.add(t.gs)}))})),mi.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new rc(new oi(i),0);let o=new Es(Yr);return this.ps.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gs)),!0)}),s),mi.resolve(this.Es(o))}Es(t){const e=[];return t.forEach((t=>{const n=this.Is(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ur(0===this.As(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return mi.forEach(e.mutations,(r=>{const i=new rc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ps=n}))}Pn(t){}containsKey(t,e){const n=new rc(e,0),r=this.ps.firstAfterOrEqual(n);return mi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,mi.resolve()}As(t,e){return this.Ts(t)}Ts(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Is(t){const e=this.Ts(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class sc{constructor(t){this.Rs=t,this.docs=new ws(oi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Rs(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mi.resolve(n?n.document.mutableCopy():Cs.newInvalidDocument(e))}getEntries(t,e){let n=Uo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Cs.newInvalidDocument(t))})),mi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Uo();const s=e.path,o=new oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||hi(ui(o),n)<=0||(r.has(o.key)||Gs(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return mi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Mr()}Ps(t,e){return mi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new oc(this)}getSize(t){return mi.resolve(this.size)}}class oc extends Xa{constructor(t){super(),this.Xn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Xn.addEntry(t,r)):this.Xn.removeEntry(n)})),mi.waitFor(e)}getFromCache(t,e){return this.Xn.getEntry(t,e)}getAllFromCache(t,e){return this.Xn.getEntries(t,e)}}
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
 */class ac{constructor(t){this.persistence=t,this.vs=new Lo((t=>Rs(t)),Ns),this.lastRemoteSnapshotVersion=ei.min(),this.highestTargetId=0,this.bs=0,this.Vs=new nc,this.targetCount=0,this.Ss=Qa.Vn()}forEachTarget(t,e){return this.vs.forEach(((t,n)=>e(n))),mi.resolve()}getLastRemoteSnapshotVersion(t){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),mi.resolve()}xn(t){this.vs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ss=new Qa(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.xn(e),this.targetCount+=1,mi.resolve()}updateTargetData(t,e){return this.xn(e),mi.resolve()}removeTargetData(t,e){return this.vs.delete(e.target),this.Vs.ds(e.targetId),this.targetCount-=1,mi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.vs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.vs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(t){return mi.resolve(this.targetCount)}getTargetData(t,e){const n=this.vs.get(e)||null;return mi.resolve(n)}addMatchingKeys(t,e,n){return this.Vs.hs(e,n),mi.resolve()}removeMatchingKeys(t,e,n){this.Vs.fs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),mi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Vs.ds(e),mi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Vs.ws(e);return mi.resolve(n)}containsKey(t,e){return mi.resolve(this.Vs.containsKey(e))}}
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
 */class cc{constructor(t,e){this.Ds={},this.overlays={},this.Cs=new vi(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new ac(this),this.indexManager=new Ga,this.remoteDocumentCache=function(t){return new sc(t)}((t=>this.referenceDelegate.ks(t))),this.Tt=new Ka(e),this.$s=new tc(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ec,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ds[t.toKey()];return n||(n=new ic(e,this.referenceDelegate),this.Ds[t.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(t,e,n){Dr("MemoryPersistence","Starting transaction:",t);const r=new uc(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Fs(t,e){return mi.or(Object.values(this.Ds).map((n=>()=>n.containsKey(t,e))))}}class uc extends fi{constructor(t){super(),this.currentSequenceNumber=t}}class lc{constructor(t){this.persistence=t,this.Bs=new nc,this.Ls=null}static qs(t){return new lc(t)}get Us(){if(this.Ls)return this.Ls;throw Mr()}addReference(t,e,n){return this.Bs.addReference(n,e),this.Us.delete(n.toString()),mi.resolve()}removeReference(t,e,n){return this.Bs.removeReference(n,e),this.Us.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(t,e){return this.Us.add(e.toString()),mi.resolve()}removeTarget(t,e){this.Bs.ds(e.targetId).forEach((t=>this.Us.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Us.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ms(){this.Ls=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Us,(n=>{const r=oi.fromPath(n);return this.Ks(t,r).next((t=>{t||e.removeEntry(r,ei.min())}))})).next((()=>(this.Ls=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ks(t,e).next((t=>{t?this.Us.delete(e.toString()):this.Us.add(e.toString())}))}ks(t){return 0}Ks(t,e){return mi.or([()=>mi.resolve(this.Bs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Fs(t,e)])}}
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
class hc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ci=n,this.xi=r}static Ni(t,e){let n=Ho(),r=Ho();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hc(t,e.fromCache,n,r)}}
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
 */class dc{constructor(){this.ki=!1}initialize(t,e){this.$i=t,this.indexManager=e,this.ki=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Mi(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Fi(t,e)))}Mi(t,e){if(Ms(e))return mi.resolve(null);let n=js(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Bs(e,null,"F"),n=js(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ho(...r);return this.$i.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Bi(e,r);return this.Li(e,s,i,n.readTime)?this.Mi(t,Bs(e,null,"F")):this.qi(t,s,e,n)}))))})))))}Oi(t,e,n,r){return Ms(e)||r.isEqual(ei.min())?this.Fi(t,e):this.$i.getDocuments(t,n).next((i=>{const s=this.Bi(e,i);return this.Li(e,s,n,r)?this.Fi(t,e):(Nr()<=o["in"].DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hs(e)),this.qi(t,s,e,ci(r,-1)))}))}Bi(t,e){let n=new Es(Js(t));return e.forEach(((e,r)=>{Gs(t,r)&&(n=n.add(r))})),n}Li(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(t,e){return Nr()<=o["in"].DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Hs(e)),this.$i.getDocumentsMatchingQuery(t,e,li.min())}qi(t,e,n,r){return this.$i.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class fc{constructor(t,e,n,r){this.persistence=t,this.Ui=e,this.Tt=r,this.Ki=new ws(Yr),this.Gi=new Lo((t=>Rs(t)),Ns),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.$s=t.getBundleCache(),this.zi(n)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Za(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ki)))}}function pc(t,e,n,r){return new fc(t,e,n,r)}async function mc(t,e){const n=$r(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ho();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Wi:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function gc(t,e){const n=$r(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=mi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Ur(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ho();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function vc(t){const e=$r(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ns.getLastRemoteSnapshotVersion(t)))}function yc(t,e){const n=$r(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ns.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ns.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,ei.min()).withLastLimboFreeSnapshotVersion(ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ns.updateTargetData(t,u))}));let a=Uo(),c=Ho();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(wc(t,s,e.documentUpdates).next((t=>{a=t.Hi,c=t.Ji}))),!r.isEqual(ei.min())){const e=n.Ns.getLastRemoteSnapshotVersion(t).next((e=>n.Ns.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return mi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ki=i,t)))}function wc(t,e,n){let r=Ho(),i=Ho();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Uo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ei.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Hi:r,Ji:i}}))}function _c(t,e){const n=$r(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bc(t,e){const n=$r(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ns.getTargetData(t,e).next((i=>i?(r=i,mi.resolve(r)):n.Ns.allocateTargetId(t).next((i=>(r=new Ba(e,i,0,t.currentSequenceNumber),n.Ns.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ki.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(t.targetId,t),n.Gi.set(e,t.targetId)),t}))}async function Ec(t,e,n){const r=$r(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!gi(t))throw t;Dr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Ic(t,e,n){const r=$r(t);let i=ei.min(),s=Ho();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=$r(t),i=r.Gi.get(n);return void 0!==i?mi.resolve(r.Ki.get(i)):r.Ns.getTargetData(e,n)}(r,t,js(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Ui.getDocumentsMatchingQuery(t,e,n?i:ei.min(),n?s:Ho()))).next((t=>(Tc(r,Ws(e),t),{documents:t,Yi:s})))))}function Tc(t,e,n){let r=t.Qi.get(e)||ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Qi.set(e,r)}class kc{constructor(){this.activeTargetIds=Wo()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sc{constructor(){this.Ur=new kc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,e,n){this.Kr[t]=e}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new kc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Cc{Gr(t){}shutdown(){}}
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
 */class Ac{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Oc=null;function Rc(){return null===Oc?Oc=268435456+Math.round(2147483648*Math.random()):Oc++,"0x"+Oc.toString(16)
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
 */}const Nc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Dc{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}
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
 */const xc="WebChannelConnection";class Pc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.co=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,e,n,r,i){const s=Rc(),o=this.fo(t,e);Dr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this._o(a,r,i),this.wo(t,o,a,n).then((e=>(Dr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Pr("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}mo(t,e,n,r,i,s){return this.lo(t,e,n,r,i)}_o(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Or,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}fo(t,e){const n=Nc[t];return`${this.co}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,e,n,r){const i=Rc();return new Promise(((s,o)=>{const a=new Sr;a.setWithCredentials(!0),a.listenOnce(br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case _r.NO_ERROR:const e=a.getResponseJson();Dr(xc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case _r.TIMEOUT:Dr(xc,`RPC '${t}' ${i} timed out`),o(new Vr(Fr.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=a.getStatus();if(Dr(xc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fr).indexOf(e)>=0?e:Fr.UNKNOWN}(e.status);o(new Vr(t,e.message))}else o(new Vr(Fr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Vr(Fr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Dr(xc,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Dr(xc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}yo(t,e,n){const r=Rc(),i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=yr(),o=wr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Tr({})),this._o(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Dr(xc,`Creating RPC '${t}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Dc({Yr:e=>{h?Dr(xc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Dr(xc,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),Dr(xc,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Zr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,kr.EventType.OPEN,(()=>{h||Dr(xc,`RPC '${t}' stream ${r} transport opened.`)})),f(u,kr.EventType.CLOSE,(()=>{h||(h=!0,Dr(xc,`RPC '${t}' stream ${r} transport closed`),d.oo())})),f(u,kr.EventType.ERROR,(e=>{h||(h=!0,Pr(xc,`RPC '${t}' stream ${r} transport errored:`,e),d.oo(new Vr(Fr.UNAVAILABLE,"The operation could not be completed")))})),f(u,kr.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];Ur(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Dr(xc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=No[t];if(void 0!==e)return Po(e)}(e),i=o.message;void 0===n&&(n=Fr.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.oo(new Vr(n,i)),u.close()}else Dr(xc,`RPC '${t}' stream ${r} received:`,i),d.uo(i)}})),f(o,Er.STAT_EVENT,(e=>{e.stat===Ir.PROXY?Dr(xc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Ir.NOPROXY&&Dr(xc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.ro()}),0),d}}
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
 */function Lc(){return"undefined"!=typeof document?document:null}
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
 */function Mc(t){return new aa(t,!0)}
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
 */class Uc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ys=t,this.timerId=e,this.po=n,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const e=Math.floor(this.Eo+this.bo()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,e-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,(()=>(this.Ro=Date.now(),t()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}
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
 */class $c{constructor(t,e,n,r,i,s,o,a){this.Ys=t,this.So=n,this.Do=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Uc(t,e)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,e){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==t?this.ko.reset():e&&e.code===Fr.RESOURCE_EXHAUSTED?(xr(e.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):e&&e.code===Fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(e)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),e=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Co===e&&this.jo(t,n)}),(e=>{t((()=>{const t=new Vr(Fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.zo(t)}))}))}jo(t,e){const n=this.Qo(this.Co);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((t=>{n((()=>this.zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(t){return Dr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return e=>{this.Ys.enqueueAndForget((()=>this.Co===t?e():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fc extends $c{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.Tt=i}Wo(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.ko.reset();const e=ba(this.Tt,t),n=function(t){if(!("targetChange"in t))return ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ei.min():e.readTime?ha(e.readTime):ei.min()}(t);return this.listener.Ho(e,n)}Jo(t){const e={};e.database=ya(this.Tt),e.addTarget=function(t,e){let n;const r=e.target;return n=Ds(r)?{documents:Ta(t,r)}:{query:ka(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ua(t,e.resumeToken):e.snapshotVersion.compareTo(ei.min())>0&&(n.readTime=ca(t,e.snapshotVersion.toTimestamp())),n}(this.Tt,t);const n=Ca(this.Tt,t);n&&(e.labels=n),this.qo(e)}Yo(t){const e={};e.database=ya(this.Tt),e.removeTarget=t,this.qo(e)}}class Vc extends $c{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(Ur(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const e=Ia(t.writeResults,t.commitTime),n=ha(t.commitTime);return this.listener.eu(n,e)}return Ur(!t.writeResults||0===t.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=ya(this.Tt),this.qo(t)}tu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ea(this.Tt,t)))};this.qo(e)}}
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
 */class jc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,e,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.lo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}mo(t,e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.mo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}terminate(){this.iu=!0}}class qc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(t){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,"Online"===t&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(xr(e),this.cu=!1):Dr("OnlineStateTracker",e)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}
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
 */class Bc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr((t=>{n.enqueueAndForget((async()=>{Yc(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=$r(t);e.mu.add(4),await zc(e),e.pu.set("Unknown"),e.mu.delete(4),await Kc(e)}(this))}))})),this.pu=new qc(n,r)}}async function Kc(t){if(Yc(t))for(const e of t.gu)await e(!0)}async function zc(t){for(const e of t.gu)await e(!1)}function Hc(t,e){const n=$r(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Xc(n)?Qc(n):gu(n).Mo()&&Wc(n,e))}function Gc(t,e){const n=$r(t),r=gu(n);n.wu.delete(e),r.Mo()&&Jc(n,e),0===n.wu.size&&(r.Mo()?r.Bo():Yc(n)&&n.pu.set("Unknown"))}function Wc(t,e){t.Iu.Ot(e.targetId),gu(t).Jo(e)}function Jc(t,e){t.Iu.Ot(e),gu(t).Yo(e)}function Qc(t){t.Iu=new ea({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),gu(t).start(),t.pu.au()}function Xc(t){return Yc(t)&&!gu(t).$o()&&t.wu.size>0}function Yc(t){return 0===$r(t).mu.size}function Zc(t){t.Iu=void 0}async function tu(t){t.wu.forEach(((e,n)=>{Wc(t,e)}))}async function eu(t,e){Zc(t),Xc(t)?(t.pu.fu(e),Qc(t)):t.pu.set("Unknown")}async function nu(t,e,n){if(t.pu.set("Online"),e instanceof Zo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.wu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.wu.delete(r),t.Iu.removeTarget(r))}(t,e)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ru(t,n)}else if(e instanceof Xo?t.Iu.Qt(e):e instanceof Yo?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(ei.min()))try{const e=await vc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Iu.ee(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.wu.get(r);i&&t.wu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.wu.get(e);if(!n)return;t.wu.set(e,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Jc(t,e);const r=new Ba(n.target,e,1,n.sequenceNumber);Wc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Dr("RemoteStore","Failed to raise snapshot:",e),await ru(t,e)}}async function ru(t,e,n){if(!gi(e))throw e;t.mu.add(1),await zc(t),t.pu.set("Offline"),n||(n=()=>vc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Kc(t)}))}function iu(t,e){return e().catch((n=>ru(t,n,e)))}async function su(t){const e=$r(t),n=vu(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;ou(e);)try{const t=await _c(e.localStore,r);if(null===t){0===e._u.length&&n.Bo();break}r=t.batchId,au(e,t)}catch(t){await ru(e,t)}cu(e)&&uu(e)}function ou(t){return Yc(t)&&t._u.length<10}function au(t,e){t._u.push(e);const n=vu(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function cu(t){return Yc(t)&&!vu(t).$o()&&t._u.length>0}function uu(t){vu(t).start()}async function lu(t){vu(t).su()}async function hu(t){const e=vu(t);for(const n of t._u)e.tu(n.mutations)}async function du(t,e,n){const r=t._u.shift(),i=ja.from(r,e,n);await iu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await su(t)}async function fu(t,e){e&&vu(t).Xo&&await async function(t,e){if(n=e.code,xo(n)&&n!==Fr.ABORTED){const n=t._u.shift();vu(t).Fo(),await iu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await su(t)}var n}(t,e),cu(t)&&uu(t)}async function pu(t,e){const n=$r(t);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=Yc(n);n.mu.add(3),await zc(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Kc(n)}async function mu(t,e){const n=$r(t);e?(n.mu.delete(2),await Kc(n)):e||(n.mu.add(2),await zc(n),n.pu.set("Unknown"))}function gu(t){return t.Tu||(t.Tu=function(t,e,n){const r=$r(t);return r.ru(),new Fc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)
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
 */}(t.datastore,t.asyncQueue,{Xr:tu.bind(null,t),no:eu.bind(null,t),Ho:nu.bind(null,t)}),t.gu.push((async e=>{e?(t.Tu.Fo(),Xc(t)?Qc(t):t.pu.set("Unknown")):(await t.Tu.stop(),Zc(t))}))),t.Tu}function vu(t){return t.Eu||(t.Eu=function(t,e,n){const r=$r(t);return r.ru(),new Vc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)}(t.datastore,t.asyncQueue,{Xr:lu.bind(null,t),no:fu.bind(null,t),nu:hu.bind(null,t),eu:du.bind(null,t)}),t.gu.push((async e=>{e?(t.Eu.Fo(),await su(t)):(await t.Eu.stop(),t._u.length>0&&(Dr("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))}))),t.Eu
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
 */}class yu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new yu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(Fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(t,e){if(xr("AsyncQueue",`${e}: ${t}`),gi(t))return new Vr(Fr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class _u{constructor(t){this.comparator=t?(e,n)=>t(e,n)||oi.comparator(e.key,n.key):(t,e)=>oi.comparator(t.key,e.key),this.keyedMap=Fo(),this.sortedSet=new ws(this.comparator)}static emptySet(t){return new _u(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _u))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _u;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class bu{constructor(){this.Au=new ws(oi.comparator)}track(t){const e=t.doc.key,n=this.Au.get(e);n?0!==t.type&&3===n.type?this.Au=this.Au.insert(e,t):3===t.type&&1!==n.type?this.Au=this.Au.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Au=this.Au.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Au=this.Au.remove(e):1===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):Mr():this.Au=this.Au.insert(e,t)}Ru(){const t=[];return this.Au.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Eu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Eu(t,e,_u.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ks(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Iu{constructor(){this.Pu=void 0,this.listeners=[]}}class Tu{constructor(){this.queries=new Lo((t=>zs(t)),Ks),this.onlineState="Unknown",this.vu=new Set}}async function ku(t,e){const n=$r(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Iu),i)try{s.Pu=await n.onListen(r)}catch(t){const n=wu(t,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&Ou(n)}async function Su(t,e){const n=$r(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Cu(t,e){const n=$r(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Vu(i)&&(r=!0);e.Pu=i}}r&&Ou(n)}function Au(t,e,n){const r=$r(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ou(t){t.vu.forEach((t=>{t.next()}))}class Ru{constructor(t,e,n){this.query=t,this.Su=e,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Eu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Du?this.xu(t)&&(this.Su.next(t),e=!0):this.Nu(t,this.onlineState)&&(this.ku(t),e=!0),this.Cu=t,e}onError(t){this.Su.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),e=!0),e}Nu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.$u||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}xu(t){if(t.docChanges.length>0)return!0;const e=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ku(t){t=Eu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}
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
class Nu{constructor(t){this.key=t}}class Du{constructor(t){this.key=t}}class xu{constructor(t,e){this.query=t,this.Ku=e,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Ho(),this.mutatedKeys=Ho(),this.ju=Js(t),this.zu=new _u(this.ju)}get Wu(){return this.Ku}Hu(t,e){const n=e?e.Ju:new bu,r=e?e.zu:this.zu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Gs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Yu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ju(l,a)>0||c&&this.ju(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{zu:s,Ju:n,Li:o,mutatedKeys:i}}Yu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.ju(t.doc,e.doc))),this.Zu(n);const s=e?this.Xu():[],o=0===this.Qu.size&&this.current?1:0,a=o!==this.Gu;return this.Gu=o,0!==i.length||a?{snapshot:new Eu(this.query,t.zu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:s}:{tc:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new bu,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach((t=>this.Ku=this.Ku.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ku=this.Ku.delete(t))),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=Ho(),this.zu.forEach((t=>{this.ec(t.key)&&(this.Qu=this.Qu.add(t.key))}));const e=[];return t.forEach((t=>{this.Qu.has(t)||e.push(new Du(t))})),this.Qu.forEach((n=>{t.has(n)||e.push(new Nu(n))})),e}nc(t){this.Ku=t.Yi,this.Qu=Ho();const e=this.Hu(t.documents);return this.applyChanges(e,!0)}sc(){return Eu.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class Pu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lu{constructor(t){this.key=t,this.ic=!1}}class Mu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.rc={},this.oc=new Lo((t=>zs(t)),Ks),this.uc=new Map,this.cc=new Set,this.ac=new ws(oi.comparator),this.hc=new Map,this.lc=new nc,this.fc={},this.dc=new Map,this._c=Qa.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function Uu(t,e){const n=nl(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const t=await bc(n.localStore,js(e));n.isPrimaryClient&&Hc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await $u(n,e,r,"current"===s,t.resumeToken)}return i}async function $u(t,e,n,r,i){t.mc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Hu(n);i.Li&&(i=await Ic(t.localStore,e.query,!1).then((({documents:t})=>e.view.Hu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Qu(t,e.targetId,o.tc),o.snapshot}(t,e,n,r);const s=await Ic(t.localStore,e,!0),o=new xu(e,s.Yi),a=o.Hu(s.documents),c=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Qu(t,n,u.tc);const l=new Pu(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function Fu(t,e){const n=$r(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter((t=>!Ks(t,e)))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ec(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Gc(n.remoteStore,r.targetId),Wu(n,r.targetId)})).catch(pi)):(Wu(n,r.targetId),await Ec(n.localStore,r.targetId,!0))}async function Vu(t,e,n){const r=rl(t);try{const t=await function(t,e){const n=$r(t),r=ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ho());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Uo(),c=Ho();return n.ji.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=bo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new To(t.key,e,Ss(e.value.mapValue),mo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Vo(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.fc[t.currentUser.toKey()];r||(r=new ws(Yr)),r=r.insert(e,n),t.fc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Zu(r,t.changes),await su(r.remoteStore)}catch(t){const e=wu(t,"Failed to persist write");n.reject(e)}}async function ju(t,e){const n=$r(t);try{const t=await yc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.hc.get(e);r&&(Ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ic=!0:t.modifiedDocuments.size>0?Ur(r.ic):t.removedDocuments.size>0&&(Ur(r.ic),r.ic=!1))})),await Zu(n,t,e)}catch(t){await pi(t)}}function qu(t,e,n){const r=$r(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.oc.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=$r(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.bu(e)&&(r=!0)})),r&&Ou(n)}(r.eventManager,e),t.length&&r.rc.Ho(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bu(t,e,n){const r=$r(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let t=new ws(oi.comparator);t=t.insert(s,Cs.newNoDocument(s,ei.min()));const n=Ho().add(s),i=new Jo(ei.min(),new Map,new Es(Yr),t,n);await ju(r,i),r.ac=r.ac.remove(s),r.hc.delete(e),Yu(r)}else await Ec(r.localStore,e,!1).then((()=>Wu(r,e,n))).catch(pi)}async function Ku(t,e){const n=$r(t),r=e.batch.batchId;try{const t=await gc(n.localStore,e);Gu(n,r,null),Hu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(n,t)}catch(t){await pi(t)}}async function zu(t,e,n){const r=$r(t);try{const t=await function(t,e){const n=$r(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ur(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Gu(r,e,n),Hu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zu(r,t)}catch(n){await pi(n)}}function Hu(t,e){(t.dc.get(e)||[]).forEach((t=>{t.resolve()})),t.dc.delete(e)}function Gu(t,e,n){const r=$r(t);let i=r.fc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function Wu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach((e=>{t.lc.containsKey(e)||Ju(t,e)}))}function Ju(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);null!==n&&(Gc(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Yu(t))}function Qu(t,e,n){for(const r of n)r instanceof Nu?(t.lc.addReference(r.key,e),Xu(t,r)):r instanceof Du?(Dr("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||Ju(t,r.key)):Mr()}function Xu(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(Dr("SyncEngine","New document in limbo: "+n),t.cc.add(r),Yu(t))}function Yu(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new oi(ri.fromString(e)),r=t._c.next();t.hc.set(r,new Lu(n)),t.ac=t.ac.insert(n,r),Hc(t.remoteStore,new Ba(js(Ls(n.path)),r,2,vi.at))}}async function Zu(t,e,n){const r=$r(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach(((t,a)=>{o.push(r.mc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=hc.Ni(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.rc.Ho(i),await async function(t,e){const n=$r(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mi.forEach(e,(e=>mi.forEach(e.Ci,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>mi.forEach(e.xi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gi(t))throw t;Dr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ki.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(t,i)}}}(r.localStore,s))}async function tl(t,e){const n=$r(t);if(!n.currentUser.isEqual(e)){Dr("SyncEngine","User change. New user:",e.toKey());const t=await mc(n.localStore,e);n.currentUser=e,function(t,e){t.dc.forEach((t=>{t.forEach((t=>{t.reject(new Vr(Fr.CANCELLED,e))}))})),t.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Zu(n,t.Wi)}}function el(t,e){const n=$r(t),r=n.hc.get(e);if(r&&r.ic)return Ho().add(r.key);{let t=Ho();const r=n.uc.get(e);if(!r)return t;for(const e of r){const r=n.oc.get(e);t=t.unionWith(r.view.Wu)}return t}}function nl(t){const e=$r(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ju.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=el.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bu.bind(null,e),e.rc.Ho=Cu.bind(null,e.eventManager),e.rc.gc=Au.bind(null,e.eventManager),e}function rl(t){const e=$r(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ku.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zu.bind(null,e),e}class il{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=Mc(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,e){return null}Rc(t,e){return null}Ec(t){return pc(this.persistence,new dc,t.initialUser,this.Tt)}Tc(t){return new cc(lc.qs,this.Tt)}Ic(t){return new Sc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=tl.bind(null,this.syncEngine),await mu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Tu}createDatastore(t){const e=Mc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Pc(r));var r;return function(t,e,n,r){return new jc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>qu(this.syncEngine,t,0),s=Ac.C()?new Ac:new Cc,new Bc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Mu(t,e,n,r,i,s);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=$r(t);Dr("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await zc(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}
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
class ol{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):xr("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class al{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Dr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Dr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=wu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function cl(t,e){t.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await mc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ul(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ll(t);Dr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>pu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>pu(e.remoteStore,n))),t.onlineComponents=e}async function ll(t){return t.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await cl(t,new il)),t.offlineComponents}async function hl(t){return t.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await ul(t,new sl)),t.onlineComponents}function dl(t){return hl(t).then((t=>t.syncEngine))}async function fl(t){const e=await hl(t),n=e.eventManager;return n.onListen=Uu.bind(null,e.syncEngine),n.onUnlisten=Fu.bind(null,e.syncEngine),n}function pl(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ol({next:s=>{e.enqueueAndForget((()=>Su(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Vr(Fr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Vr(Fr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ru(Ls(n.path),s,{includeMetadataChanges:!0,$u:!0});return ku(t,o)}(await fl(t),t.asyncQueue,e,n,r))),r.promise}function ml(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ol({next:n=>{e.enqueueAndForget((()=>Su(t,o))),n.fromCache&&"server"===r.source?i.reject(new Vr(Fr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ru(n,s,{includeMetadataChanges:!0,$u:!0});return ku(t,o)}(await fl(t),t.asyncQueue,e,n,r))),r.promise}const gl=new Map;
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
 */function vl(t,e,n){if(!n)throw new Vr(Fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yl(t,e,n,r){if(!0===e&&!0===r)throw new Vr(Fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wl(t){if(!oi.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _l(t){if(oi.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mr()}function El(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vr(Fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bl(t);throw new Vr(Fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Il{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Vr(Fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vr(Fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Tl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Br;switch(t.type){case"gapi":const e=t.client;return new Gr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vr(Fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=gl.get(t);e&&(Dr("ComponentProvider","Removing Datastore"),gl.delete(t),e.terminate())}(this),Promise.resolve()}}function kl(t,e,n,r={}){var i;const s=(t=El(t,Tl))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Ar.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Vr(Fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}t._authCredentials=new Kr(new qr(e,n))}}
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
 */class Sl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Al(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Sl(this.firestore,t,this._key)}}class Cl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cl(this.firestore,t,this._query)}}class Al extends Cl{constructor(t,e,n){super(t,e,Ls(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Sl(this.firestore,null,new oi(t))}withConverter(t){return new Al(this.firestore,t,this._path)}}function Ol(t,e,...n){if(t=(0,a.m9)(t),vl("collection","path",e),t instanceof Tl){const r=ri.fromString(e,...n);return _l(r),new Al(t,null,r)}{if(!(t instanceof Sl||t instanceof Al))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return _l(r),new Al(t.firestore,null,r)}}function Rl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Xr.R()),vl("doc","path",e),t instanceof Tl){const r=ri.fromString(e,...n);return wl(r),new Sl(t,null,new oi(r))}{if(!(t instanceof Sl||t instanceof Al))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return wl(r),new Sl(t.firestore,t instanceof Al?t.converter:null,new oi(r))}}
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
class Nl{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Uc(this,"async_queue_retry"),this.Hc=()=>{const t=Lc();t&&Dr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const t=Lc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const e=Lc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise((()=>{}));const e=new jr;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Uc.push(t),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(E){if(!gi(E))throw E;Dr("AsyncQueue","Operation failed with retryable error: "+E)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(t){const e=this.qc.then((()=>(this.jc=!0,t().catch((t=>{this.Qc=t,this.jc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw xr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.jc=!1,t))))));return this.qc=e,e}enqueueAfterDelay(t,e,n){this.Jc(),this.Wc.indexOf(t)>-1&&(e=0);const r=yu.createAndSchedule(this,t,e,n,(t=>this.Xc(t)));return this.Gc.push(r),r}Jc(){this.Qc&&Mr()}verifyOperationInProgress(){}async ta(){let t;do{t=this.qc,await t}while(t!==this.qc)}ea(t){for(const e of this.Gc)if(e.timerId===t)return!0;return!1}na(t){return this.ta().then((()=>{this.Gc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Gc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ta()}))}sa(t){this.Wc.push(t)}Xc(t){const e=this.Gc.indexOf(t);this.Gc.splice(e,1)}}class Dl extends Tl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Nl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ll(this),this._firestoreClient.terminate()}}function xl(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&kl(s,...t)}return s}function Pl(t){return t._firestoreClient||Ll(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ll(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new yi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new al(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class Ml{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ml(Ci.fromBase64String(t))}catch(t){throw new Vr(Fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ml(Ci.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Ul{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vr(Fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class $l{constructor(t){this._methodName=t}}
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
 */class Fl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vr(Fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vr(Fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Yr(this._lat,t._lat)||Yr(this._long,t._long)}}
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
 */const Vl=/^__.*__$/;class jl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new To(t,this.data,this.fieldMask,e,this.fieldTransforms):new Io(t,this.data,e,this.fieldTransforms)}}function ql(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Bl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new Bl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.oa({path:n,ca:!1});return r.aa(t),r}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.oa({path:n,ca:!1});return r.ia(),r}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return eh(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(0===t.length)throw this.fa("Document fields must not be empty");if(ql(this.ra)&&Vl.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class Kl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.Tt=n||Mc(t)}wa(t,e,n,r=!1){return new Bl({ra:t,methodName:e,_a:n,path:si.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function zl(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new Kl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hl(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);Xl("Data must be an object, but it was:",o,r);const a=Jl(r,o);let c,u;if(s.merge)c=new Ts(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Yl(e,r,n);if(!o.contains(i))throw new Vr(Fr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nh(t,i)||t.push(i)}c=new Ts(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new jl(new ks(a),c,u)}function Gl(t,e,n,r=!1){return Wl(n,t.wa(r?4:3,e))}function Wl(t,e){if(Ql(t=(0,a.m9)(t)))return Xl("Unsupported field value:",e,t),Jl(t,e);if(t instanceof $l)return function(t,e){if(!ql(e.ra))throw e.fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&4!==e.ra)throw e.fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Wl(i,e.la(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Zs(e.Tt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ti.fromDate(t);return{timestampValue:ca(e.Tt,n)}}if(t instanceof ti){const n=new ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ca(e.Tt,n)}}if(t instanceof Fl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ml)return{bytesValue:ua(e.Tt,t._byteString)};if(t instanceof Sl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:da(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fa(`Unsupported field value: ${bl(t)}`)}(t,e)}function Jl(t,e){const n={};return Ei(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((t,r)=>{const i=Wl(r,e.ua(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ql(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ti||t instanceof Fl||t instanceof Ml||t instanceof Sl||t instanceof $l)}function Xl(t,e,n){if(!Ql(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=bl(n);throw"an object"===r?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function Yl(t,e,n){if((e=(0,a.m9)(e))instanceof Ul)return e._internalPath;if("string"==typeof e)return th(t,e);throw eh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zl=new RegExp("[~\\*/\\[\\]]");function th(t,e,n){if(e.search(Zl)>=0)throw eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ul(...e.split("."))._internalPath}catch(r){throw eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Vr(Fr.INVALID_ARGUMENT,a+t+c)}function nh(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class rh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ih extends rh{data(){return super.data()}}function sh(t,e){return"string"==typeof e?th(t,e):e instanceof Ul?e._internalPath:e._delegate._internalPath}
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
 */function oh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Vr(Fr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{}class ch extends ah{}function uh(t,e,...n){let r=[];e instanceof ah&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof hh)).length,n=t.filter((t=>t instanceof lh)).length;if(e>1||e>0&&n>0)throw new Vr(Fr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const i of r)t=i._apply(t);return t}class lh extends ch{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new lh(t,e,n)}_apply(t){const e=this._parse(t);return ph(t._query,e),new Cl(t.firestore,t.converter,qs(t._query,e))}_parse(t){const e=zl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){fh(o,s);const e=[];for(const n of o)e.push(dh(r,t,n));a={arrayValue:{values:e}}}else a=dh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||fh(o,s),a=Gl(n,e,o,"in"===s||"not-in"===s);return es.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class hh extends ah{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:ns.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)ph(n,i),n=qs(n,i)}(t._query,e),new Cl(t.firestore,t.converter,qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function dh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr(Fr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fs(e)&&-1!==n.indexOf("/"))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ri.fromString(n));if(!oi.isDocumentKey(r))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bi(t,new oi(r))}if(n instanceof Sl)return Bi(t,n._key);throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bl(n)}.`)}function fh(t,e){if(!Array.isArray(t)||0===t.length)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ph(t,e){if(e.isInequality()){const n=$s(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Us(t);null!==i&&mh(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mh(t,e,n){if(!n.isEqual(e))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class gh{convertValue(t,e="none"){switch(Mi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ri(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ni(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mr()}}convertObject(t,e){const n={};return bi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Fl(Ri(t.latitude),Ri(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Pi(t));default:return null}}convertTimestamp(t){const e=Oi(t);return new ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ri.fromString(t);Ur(Ma(n));const r=new wi(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(e)||xr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function vh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class yh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wh extends rh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(sh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class _h extends wh{data(t={}){return super.data(t)}}class bh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new yh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new _h(this._firestore,this._userDataWriter,n.key,n,new yh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Vr(Fr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new _h(t._firestore,t._userDataWriter,n.doc.key,n.doc,new yh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new _h(t._firestore,t._userDataWriter,e.doc.key,e.doc,new yh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Eh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Eh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
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
function Ih(t){t=El(t,Sl);const e=El(t.firestore,Dl);return pl(Pl(e),t._key).then((n=>Oh(e,t,n)))}class Th extends gh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ml(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Sl(this.firestore,null,e)}}function kh(t){t=El(t,Cl);const e=El(t.firestore,Dl),n=Pl(e),r=new Th(e);return oh(t._query),ml(n,t._query).then((n=>new bh(e,r,t,n)))}function Sh(t,e,n){t=El(t,Sl);const r=El(t.firestore,Dl),i=vh(t.converter,e,n);return Ah(r,[Hl(zl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,mo.none())])}function Ch(t,e){const n=El(t.firestore,Dl),r=Rl(t),i=vh(t.converter,e);return Ah(n,[Hl(zl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,mo.exists(!1))]).then((()=>r))}function Ah(t,e){return function(t,e){const n=new jr;return t.asyncQueue.enqueueAndForget((async()=>Vu(await dl(t),e,n))),n.promise}(Pl(t),e)}function Oh(t,e,n){const r=n.docs.get(e._key),i=new Th(t);return new wh(t,i,e._key,r,new yh(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){Or=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Dl(new zr(t.getProvider("auth-internal")),new Jr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vr(Fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Cr,"3.9.0",t),(0,i.KN)(Cr,"3.9.0","esm2017")}()},6650:function(t,e,n){"use strict";n.d(e,{cF:function(){return H}});var r=n(5816),i=n(4444),s=n(8463);
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
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class l extends i.ZR{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function m(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new l(h.CANCELED,"User canceled the upload/download.")}function v(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function y(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function w(t){return new l(h.INVALID_ARGUMENT,t)}function _(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function b(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));
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
class E{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=E.makeFromUrl(t,e)}catch(r){return new E(t,"")}if(""===n.path)return n;throw y(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),w={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:w,postModify:u}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new E(t,i),e.postModify(n);break}}if(null==n)throw v(t);return n}}class I{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function T(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function k(t){t(!1)}
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
 */function S(t){return void 0!==t}function C(t,e,n,r){if(r<e)throw w(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw w(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function A(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
function O(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class R{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new N(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!e||O(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new N(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new N(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());S(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?_():g();r(t)}else{const t=m();r(t)}};this.canceled_?e(!1,new N(!1,null,!0)):this.backoffId_=T(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&k(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class N{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function D(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function x(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function L(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function M(t,e,n,r,i,s,o=!0){const a=A(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return P(u,e),D(u,n),x(u,s),L(u,r),new R(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
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
function U(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function $(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
class F{constructor(t,e){this._service=t,this._location=e instanceof E?e:E.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new F(t,e)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $(this._location.path)}get storage(){return this._service}get parent(){const t=U(this._location.path);if(null===t)return null;const e=new E(this._location.bucket,t);return new F(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw b(t)}}function V(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:E.makeFromBucketSpec(n,t)}function j(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class q{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?E.makeFromBucketSpec(r,this._host):V(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=E.makeFromBucketSpec(this._url,t):this._bucket=V(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){C("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){C("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new F(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new I(_());{const s=M(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const B="@firebase/storage",K="0.11.2",z="storage";function H(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,z),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&G(s,...o),s}function G(t,e,n,r={}){j(t,e,n,r)}
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
 */function W(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new q(n,i,s,e,r.Jn)}function J(){(0,r.Xd)(new s.wA(z,W,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(B,K,""),(0,r.KN)(B,K,"esm2017")}J()},2201:function(t,e,n){"use strict";n.d(e,{PO:function(){return F},p7:function(){return ee}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(e.matched[r],n.matched[i])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?_(t,e):l(e)?_(e,t):t===e}function _(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,I;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function T(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const k=/^[^#]+#/;function S(t,e){return t.replace(k,"#")+e}function C(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=C(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function R(t,e){const n=history.state?history.state.position-e:-1;return n+t}const N=new Map;function D(t,e){N.set(t,e)}function x(t){const e=N.get(t);return N.delete(t),e}let P=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?I.forward:I.back:I.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function U(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function $(t){const{history:e,location:n}=window,r={value:L(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:P()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,U(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const c=a({},U(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function F(t){t=T(t);const e=$(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:S.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return"string"===typeof t||t&&"object"===typeof t}function j(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B=Symbol("");var K;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(K||(K={}));function z(t,e){return a(new Error,{type:t,[B]:!0},e)}function H(t,e){return t instanceof Error&&B in t&&(null==e||!!(t.type&e))}const G="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(t,e){const n=a({},W,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||G;if(l!==G){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function X(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Y(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=X(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function rt(t,e,n){const r=Q(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=lt(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=rt(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ct(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(t){if(j(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Y(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw z(1,{location:t});0,o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw z(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,vt=/\+/g,yt=/%5B/g,wt=/%5D/g,_t=/%5E/g,bt=/%60/g,Et=/%7B/g,It=/%7C/g,Tt=/%7D/g,kt=/%20/g;function St(t){return encodeURI(""+t).replace(It,"|").replace(yt,"[").replace(wt,"]")}function Ct(t){return St(t).replace(Et,"{").replace(Tt,"}").replace(_t,"^")}function At(t){return St(t).replace(vt,"%2B").replace(kt,"+").replace(dt,"%23").replace(ft,"%26").replace(bt,"`").replace(Et,"{").replace(Tt,"}").replace(_t,"^")}function Ot(t){return At(t).replace(mt,"%3D")}function Rt(t){return St(t).replace(dt,"%23").replace(gt,"%3F")}function Nt(t){return null==t?"":Rt(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function xt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(vt," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Pt(t){let e="";for(let n in t){const r=t[n];if(n=Ot(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&At(t))):[r&&At(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Mt=Symbol(""),Ut=Symbol(""),$t=Symbol(""),Ft=Symbol(""),Vt=Symbol("");function jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(z(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(z(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Bt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Kt(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(qt(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&qt(u,n,r,s,t)()}))))}}}return i}function Kt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function zt(t){const e=(0,r.f3)($t),n=(0,r.f3)(Ft),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ht=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zt,setup(t,{slots:e}){const n=(0,i.qj)(zt(t)),{options:s}=(0,r.f3)($t),o=(0,r.Fl)((()=>({[Xt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=Ht;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Vt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ut,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ut,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Mt,l),(0,r.JJ)(Vt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&v(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return Zt(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:m,route:i})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Yt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||xt,o=t.stringifyQuery||Pt,h=t.history;const d=jt(),m=jt(),v=jt(),y=(0,i.XI)(q);let w=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(t=>""+t)),b=c.bind(null,Nt),I=c.bind(null,Dt);function T(t,n){let r,i;return j(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map((t=>t.record))}function C(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=a({},r||y.value),"string"===typeof t){const i=f(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:I(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:b(t.params)}),r.params=b(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=_(I(s.params));const u=p(o,a({},t,{hash:Ct(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pt?Lt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function P(t){return"string"===typeof t?f(n,t,y.value.path):a({},t)}function L(t,e){if(w!==t)return z(8,{from:e,to:t})}function M(t){return F(t)}function U(t){return M(a(P(t),{replace:!0}))}function $(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function F(t,e){const n=w=N(t),r=y.value,i=t.state,s=t.force,c=!0===t.replace,u=$(n);if(u)return F(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&g(o,r,n)&&(h=z(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):B(l,r)).catch((t=>H(t)?H(t,2)?t:et(t):Z(t,l,r))).then((t=>{if(t){if(H(t,2))return F(a({replace:c},P(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=G(l,r,!0,c,i);return K(l,r,t),t}))}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t,e){let n;const[r,i,s]=re(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of d.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).then((()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Bt(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of m.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).catch((t=>H(t,8)?t:Promise.reject(t)))}function K(t,e,n){for(const r of v.list())r(t,e,n)}function G(t,e,n,r,i){const o=L(t,e);if(o)return o;const c=e===q,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),y.value=t,nt(t,e,n,c),et()}let W;function J(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=N(t),i=$(r);if(i)return void F(a(i,{replace:!0}),r).catch(u);w=r;const o=y.value;s&&D(R(o.fullPath,n.delta),A()),B(r,o).catch((t=>H(t,12)?t:H(t,2)?(F(t.to,r).then((t=>{H(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||G(r,o,!1),t&&(n.delta&&!H(t,8)?h.go(-n.delta,!1):n.type===E.pop&&H(t,20)&&h.go(-1,!1)),K(r,o,t)})).catch(u)})))}let Q,X=jt(),Y=jt();function Z(t,e,n){et(t);const r=Y.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return Q&&y.value!==q?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function et(t){return Q||(Q=!t,J(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&x(R(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&O(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let st;const ot=new Set,at={currentRoute:y,listening:!0,addRoute:T,removeRoute:k,hasRoute:C,getRoutes:S,resolve:N,options:t,push:M,replace:U,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:Y.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!st&&y.value===q&&(st=!0,M(h.location).catch((t=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>y.value[i]));t.provide($t,e),t.provide(Ft,(0,i.qj)(n)),t.provide(Vt,y);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(w=q,W&&W(),W=null,y.value=q,st=!1,Q=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>v(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>v(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.2885f134.js.map