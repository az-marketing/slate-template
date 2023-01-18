(()=>{
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`),i="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const o=[],s=[],l=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:b,values:{length:m}}=t;for(;h<m;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let o=0;for(let t=0;t<n;t++)a(e[t].name,i)&&o++;for(;o-- >0;){const e=b[h],n=p.exec(e)[2],o=n.toLowerCase()+i,s=t.getAttribute(o);t.removeAttribute(o);const a=s.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:a}),h+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(r),l=s.length-1;for(let e=0;e<l;e++){let o,r=s[e];if(""===r)o=d();else{const t=p.exec(r);null!==t&&a(t[2],i)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-i.length)+t[3]),o=document.createTextNode(r)}n.insertBefore(o,t),this.parts.push({type:"node",index:++u})}""===s[l]?(n.insertBefore(d(),t),o.push(t)):t.data=s[l],h+=l}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(d(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(o.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else l.currentNode=s.pop()}for(const t of o)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:n},parts:o}=t,r=document.createTreeWalker(n,133,null,!1);let i=h(o),s=o[i],a=-1,l=0;const d=[];let p=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==s&&s.index===a;)s.index=null!==p?-1:s.index-l,i=h(o,i),s=o[i]}d.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},h=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};function b(t,e,n=null){const{element:{content:o},parts:r}=t;if(null==n)return void o.appendChild(e);const i=document.createTreeWalker(o,133,null,!1);let s=h(r),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=h(r,s);return}s=h(r,s)}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class x{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],o=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,d=r.nextNode();for(;s<o.length;)if(i=o[s],l(i)){for(;a<i.index;)a++,"TEMPLATE"===d.nodeName&&(n.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=n.pop(),d=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${n} `;class _{constructor(t,e,n,o){this.strings=t,this.values=e,this.type=n,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let s=0;s<t;s++){const t=this.strings[s],a=t.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===t.indexOf("--\x3e",a+1);const l=p.exec(t);e+=null===l?t+(r?v:o):t.substr(0,l.index)+l[1]+l[2]+i+l[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}const S=t=>null===t||!("object"==typeof t||"function"==typeof t),k=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new z(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!k(t))return t}let o="";for(let r=0;r<e;r++){o+=t[r];const e=n[r];if(void 0!==e){const t=e.value;if(S(t)||!k(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):k(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const n=new x(e,t.processor,this.options),o=n._clone();n.update(t.values),this.__commitNode(o),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,o=0;for(const r of t)n=e[o],void 0===n&&(n=new C(this.options),e.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(e[o-1])),n.setValue(r),n.commit(),o++;o<e.length&&(e.length=o,this.clear(n&&n.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class A extends P{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends z{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function U(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);return o=e.keyString.get(r),void 0===o&&(o=new s(t,t.getTemplateElement()),e.keyString.set(r,o)),e.stringsArray.set(t.strings,o),o}const j=new Map,I=new WeakMap,V=(t,n,o)=>{let r=I.get(n);void 0===r&&(e(n,n.firstChild),I.set(n,r=new C(Object.assign({templateFactory:U},o))),r.appendInto(n)),r.setValue(t),r.commit()};const L=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,o){const r=e[0];if("."===r){return new A(t,e.slice(1),n).parts}if("@"===r)return[new N(t,e.slice(1),o.eventContext)];if("?"===r)return[new E(t,e.slice(1),n)];return new P(t,e,n).parts}handleTextExpression(t){return new C(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const $=(t,...e)=>new _(t,e,"html",L),R=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const B=t=>e=>{const o=R(e.type,t);let r=j.get(o);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(o,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(n);if(i=r.keyString.get(a),void 0===i){const n=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(n,t),i=new s(e,n),r.keyString.set(a,i)}return r.stringsArray.set(e.strings,i),i},H=["html","svg"],q=new Set,W=(t,e,n)=>{q.add(t);const o=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,t);const s=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{H.forEach((e=>{const n=j.get(R(e,t));void 0!==n&&n.keyString.forEach((t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{n.add(t)})),c(t,n)}))}))})(t);const a=o.content;n?b(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),c(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J},K="finalized";class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,n)=>{const o=this._attributeNameForProperty(n,e);void 0!==o&&(this._attributeToPropertyMap.set(o,n),t.push(o))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,o=this.getPropertyDescriptor(t,n,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdateInternal(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||G}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(K)||t.finalize(),this[K]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=J){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,o=e.converter||D,r="function"==typeof o?o:o.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,o=e.converter;return(o&&o.toAttribute||D.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=G){const o=this.constructor,r=o._attributeNameForProperty(t,n);if(void 0!==r){const t=o._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(t);if(void 0!==o){const t=n.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let o=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Q[K]=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class tt{constructor(t,e){if(e!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce(((e,n,o)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[o+1]),t[0]);return new tt(n,Z)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const nt={};class ot extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight(((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t)),n),n=e(t,new Set),o=[];n.forEach((t=>o.unshift(t))),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Y){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new tt(String(e),Z)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return nt}}ot.finalized=!0,ot.render=(t,n,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const r=o.scopeName,i=I.has(n),s=F&&11===n.nodeType&&!!n.host,a=s&&!q.has(r),l=a?document.createDocumentFragment():n;if(V(t,l,Object.assign({templateFactory:B(r)},o)),a){const t=I.get(l);I.delete(l);const o=t.value instanceof x?t.value.template:void 0;W(r,l,o),e(n,n.firstChild),n.appendChild(l),I.set(n,t)}!i&&s&&window.ShadyCSS.styleElement(n.host)},ot.shadowRootOptions={mode:"open"};var rt={};Object.defineProperty(rt,"__esModule",{value:!0}),rt.denormalize=rt.parse=void 0;var it,st={},at=st&&st.__extends||(it=function(t,e){return it=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},it(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}it(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),lt=st&&st.__spreadArray||function(t,e){for(var n=0,o=e.length,r=t.length;n<o;n++,r++)t[r]=e[n];return t};Object.defineProperty(st,"__esModule",{value:!0}),st.Menu=void 0;var dt={},pt=dt&&dt.__assign||function(){return pt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},pt.apply(this,arguments)},ct=dt&&dt.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},ut=dt&&dt.__spreadArray||function(t,e){for(var n=0,o=e.length,r=t.length;n<o;n++,r++)t[r]=e[n];return t};Object.defineProperty(dt,"__esModule",{value:!0}),dt.Linkset=void 0;var ht=function(){function t(t){this.elements=t,this.size=t.length}return t.prototype.hasLinkTo=function(t){return this.elements.some((function(e){return e.rel===t}))},t.prototype.linkTo=function(t){return this.elements.find((function(e){return e.rel===t}))},t.prototype.linksTo=function(e){return new t(this.elements.filter((function(t){return t.rel===e})))},t.prototype.linksFrom=function(e){return new t(this.elements.filter((function(t){return t.anchor===e})))},t.prototype.linksWithAttribute=function(e){return new t(this.elements.filter((function(t){return Object.prototype.hasOwnProperty.call(t.attributes,e)})))},t.prototype.linksWithAttributeValue=function(e,n){return new t(this.linksWithAttribute(e).elements.filter((function(t){return(Array.isArray(t.attributes[e])?t.attributes[e]:[t.attributes[e]]).some((function(t){return typeof(e=t)==typeof(o=n)&&("string"==typeof e&&"string"==typeof o?e===o:e.value==e.value&&e.language==e.language);var e,o}))})))},t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.normalize=function(){var t={};return this.elements.forEach((function(e){var n=e.anchor,o=e.rel,r=ct(e,["anchor","rel"]);Object.hasOwnProperty.call(t,n)||(t[n]={}),Object.hasOwnProperty.call(t[n],o)||(t[n][o]=[]);var i=r.href,s=r.attributes,a=pt({href:i},s);t[n][o].push(a)})),{linkset:Object.entries(t).reduce((function(t,e){var n=e[0],o=e[1];return ut(ut([],t),[pt({anchor:n},o)])}),[])}},t}();dt.Linkset=ht;var bt={},mt=bt&&bt.__spreadArray||function(t,e){for(var n=0,o=e.length,r=t.length;n<o;n++,r++)t[r]=e[n];return t};Object.defineProperty(bt,"__esModule",{value:!0}),bt.buildTree=bt.MenuElement=void 0;var ft=function(){function t(t,e){void 0===e&&(e=[]),this.link=t,this.children=gt(mt([],e))}return Object.defineProperty(t.prototype,"title",{get:function(){return this.link.attributes.title},enumerable:!1,configurable:!0}),t}();function gt(t){if(t.length<2)return t.length?[new ft(t.shift())]:[];t.sort((function(t,e){return t.attributes["drupal-menu-hierarchy"][0].localeCompare(e.attributes["drupal-menu-hierarchy"][0])}));var e,n=[],o=[];do{var r=t.shift();e?r.attributes["drupal-menu-hierarchy"][0].length>e.attributes["drupal-menu-hierarchy"][0].length?o.push(r):(n.push(new ft(e,o)),e=r,o=[]):e=r}while(t.length);return n.push(new ft(e,o)),n}bt.MenuElement=ft,bt.buildTree=gt;var yt=function(t){function e(e,n){var o=t.call(this,n.elements)||this;return o.id=e,o.tree=bt.buildTree(lt([],o.elements)),o}return at(e,t),e.prototype.linksTo=function(n){return new e(this.id,t.prototype.linksTo.call(this,n))},e.prototype.linksFrom=function(n){return new e(this.id,t.prototype.linksTo.call(this,n))},e.prototype.linksWithAttribute=function(n){return new e(this.id,t.prototype.linksWithAttribute.call(this,n))},e.prototype.linksWithAttributeValue=function(n,o){return new e(this.id,t.prototype.linksWithAttributeValue.call(this,n,o))},e}(dt.Linkset);st.Menu=yt;var xt={},wt=xt&&xt.__assign||function(){return wt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},wt.apply(this,arguments)},vt=xt&&xt.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(xt,"__esModule",{value:!0}),xt.denormalize=xt.parse=void 0;var _t={},St=_t&&_t.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(_t,"__esModule",{value:!0}),_t.Link=void 0;var kt=function(t){var e=t.anchor,n=t.rel,o=t.href,r=St(t,["anchor","rel","href"]);this.anchor=e,this.rel=n,this.href=o,this.attributes=r};function Pt(t){var e=[];return t.linkset.forEach((function(t){var n=t.anchor,o=vt(t,["anchor"]);Object.keys(o).forEach((function(o){t[o].forEach((function(t){e.push(new _t.Link(wt({anchor:n,rel:o},t)))}))}))})),new dt.Linkset(e)}function zt(t,e){var n=xt.denormalize(t),o=[];e?o.push(e):n.linksWithAttribute("drupal-menu-machine-name").elements.forEach((function(t){o.includes(t.attributes["drupal-menu-machine-name"][0])||o.push(t.attributes["drupal-menu-machine-name"][0])}));var r=o.map((function(t){return new st.Menu(t,n.linksWithAttributeValue("drupal-menu-machine-name",t))}));return e?r.shift():r}_t.Link=kt,xt.denormalize=Pt,xt.parse=function(t){return Pt(JSON.parse(t))},rt.denormalize=zt,rt.parse=function(t,e){return zt(JSON.parse(t),e)};const Ct=Symbol("tabindex"),Et=Symbol("oldTabindex"),At=Symbol("newTabindex"),Tt=t=>class extends t{static get properties(){return{tabIndex:{converter:{fromAttribute:Number,toAttribute:t=>null==t?null:t.toString()},noAccessor:!0,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.hasAttribute("tabindex")||(this.tabIndex=0)}get tabIndex(){return this[Ct]}set tabIndex(t){const e=this[Ct];this[Ct]=t,this.requestUpdate("tabIndex",e)}firstUpdated(){this.addEventListener("focusin",(t=>{t.composedPath()[0]===this&&this._focus()})),this.addEventListener("keydown",(t=>{!t.defaultPrevented&&t.shiftKey&&9===t.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),setTimeout((()=>{this._isShiftTabbing=!1}),0))}))}update(t){t.has("disabled")&&this._disabledChanged(this.disabled,t.get("disabled")),t.has("tabIndex")&&(this[At]=this.tabIndex,this._tabIndexChanged(this.tabIndex)),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&(this.focusElement.disabled=this.disabled,this.disabled&&this.blur()),t.has("tabIndex")&&void 0!==this[At]&&(this.focusElement.tabIndex=this[At],this[At]=void 0)}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this._isShiftTabbing||this.focusElement.focus()}focus(){this.disabled||this.focusElement.focus()}blur(){this.focusElement.blur()}_disabledChanged(t,e){t?(this[Et]=this.tabIndex,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):e&&(void 0!==this[Et]&&(this.tabIndex=this[Et]),this.removeAttribute("aria-disabled"))}_tabIndexChanged(t){this.disabled&&t&&(-1!==this.tabIndex&&(this[Et]=this.tabIndex),this.tabIndex=null)}};var Ot=et`
    .button {
        display: inline-block;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-style: solid;
        border-width: 1px;
        border-radius: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        font-size: 16px;
        line-height: 1.5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: .04em;
        white-space: normal;
        border-width: 2px;
        border-color: transparent;
    }
    .button:hover {
        text-decoration: none;
    }
    .button:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
    }
    .button[disabled] {
        pointer-events: none;
        opacity: 0.65;
    }
    @media (prefers-reduced-motion: reduce) {
        .button {
            transition: none;
        }
    }
    :host {
        outline: none;
        margin-right: 4px;
        font-family: inherit;
    }
    :host([size="large"]) .button {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }
    :host([size="small"]) .button {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }
    :host([block]){
        display: block;
    }
    :host([block]) .button {
        display: block;
        width: 100%;
        padding: 6px 0;
    }
    :host([redbar]),
    :host([redbar]) .button {
        width: 60px;
        height: 50px;
        display: inline-block;
    }
    :host([redbar]) ::slotted(svg) {
        margin: -5px 0 0 0;
        font-size: 24px;
        line-height: 24px;
    }
    :host([theme="primary"]) .button {
        color: #fff;
        background-color: #8b0015;
    }

    :host([theme="primary"]) .button:hover,
    :host([theme="primary"]) .button:focus {
        border-color: transparent;
        background-color: #ab0520;
    }
    :host([theme="primary"][outline]) .button {
        color: #8b0015;
        border-color: #8b0015;
        background-color: transparent;
    }
    :host([theme="primary"][outline]) .button:hover,
    :host([theme="primary"][outline]) .button:focus {
        color: #fff;
        background-color: #8b0015;
        border-color: #8b0015;
    }
    :host([theme="primary"][outline]) .button[disabled] {
        background-color: transparent;
    }
    :host([theme="az-red"]) .button,
    :host([theme="red"]) .button {
        color: #fff;
        background-color: #ab0520;
    }
    :host([theme="red"]) .button:hover,
    :host([theme="red"]) .button:focus,
    :host([theme="az-red"]) .button:hover,
    :host([theme="az-red"]) .button:focus {
        border-color: transparent;
        background-color: #8b0015;
    }
    :host([theme="az-red"][outline]) .button,
    :host([theme="red"][outline]) .button {
        color: #8b0015;
        border-color: #8b0015;
        background-color: transparent;
    }
    :host([theme="az-red"][outline]) .button:hover,
    :host([theme="az-red"][outline]) .button:focus,
    :host([theme="red"][outline]) .button:hover,
    :host([theme="red"][outline]) .button:focus {
        color: #fff;
        background-color: #8b0015;
        border-color: #8b0015;
    }

    // Bloom
    :host([theme="bloom"]) .button {
        color: #fff;
        background-color: #8b0015;
    }
    :host([theme="bloom"]) .button:hover,
    :host([theme="bloom"]) .button:focus {
        border-color: transparent;
        background-color: #ab0520;
    }

    // Bloom Outline
    :host([theme="bloom"][outline]) .button {
        color: white;
        border-color: rgb(239, 64, 86) !important;
        background-color: transparent;
    }
    :host([theme="bloom"][outline]) .button:hover,
    :host([theme="bloom"][outline]) .button:focus {
        color: white;
        background-color: rgb(139, 0, 21) !important;
        border-color: rgb(139, 0, 21) !important;
    }
    :host([theme="bloom"][outline]) .button[disabled] {
        background-color: transparent;
    }
    ::slotted(.icon-text) {
        display: block;
        margin: -5px;
        font-size: 10px;
        line-height: 10px;
    }
`;const Nt=(t,e="")=>{window.dataLayer=window.dataLayer||[];var n=t.composedPath()[0],o=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:n.textContent||"",elementInnerText:n.innerText||"",title:"shadow-dom-link",element:n,elementClasses:n.className||"",elementId:n.id||"",elementLocation:e||"",elementTarget:n.target||"",elementUrl:n.href||n.action||"",originalEvent:t,parent:o||"",inShadowDom:!0}})};class Mt extends(Tt(ot)){static get properties(){return{link:{type:String,reflect:!0},target:{type:String,reflect:!0},toggle:{type:String,reflect:!0},event:{type:String,reflect:!0},elmid:{type:String,reflect:!0},value:{type:String,reflect:!0}}}static get styles(){return[Ot]}constructor(){super()}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n)}changeAttributes(){this.setAttribute("closed","true"),this.setAttribute("aria-expanded","true"),this.requestUpdate()}_handleClick(t){if(Nt(t,""),this.event){let t=new Event(this.event);document.querySelector(this.target).dispatchEvent(t)}else{let t=new Event("open-az-offcanvas-menu");document.querySelector(this.target).dispatchEvent(t)}}render(){return $`
			${this.link?$`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${Nt}" id="${this.elmid}">${this.value}<slot></slot></a>`:$`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
		`}firstUpdated(){super.firstUpdated(),this.setAttribute("role","button")}get focusElement(){return this.shadowRoot.querySelector(".button")}}customElements.get("az-button")||customElements.define("az-button",Mt);class Ut extends ot{static get styles(){return et`
						:root {
   					    --blue: #0c234b;
   					    --red: #ab0520;
   					    --white: #fff;
   					    --bloom: #ef4056;
   					    --chili: #8b0015;
   					    --sky: #81d3eb;
   					    --oasis: #378dbd;
   					    --azurite: #1e5288;
   					    --midnight: #001c48;
   					    --cool-gray: #e2e9eb;
   					    --warm-gray: #f4ede5;
   					    --leaf: #70b865;
   					    --river: #007d84;
   					    --silver: #9eabae;
   					    --mesa: #a95c42;
   					    --ash: #403635;
   					    --sage: #4a634e;
   					    --black: #000;
   					    --success: #70b865;
   					    --info: #81d3eb;
   					    --warning: #f19e1f;
   					    --danger: #a95c42;
   					    --light: #dee2e6;
   					    --dark: #343a40;
   					    --breakpoint-xs: 0;
   					    --breakpoint-sm: 576px;
   					    --breakpoint-md: 768px;
   					    --breakpoint-lg: 992px;
   					    --breakpoint-xl: 1200px;
   					    --font-family-sans-serif: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   					    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   					}
   					*,
   					::after,
   					::before {
   					    box-sizing: border-box;
   					}
   					header,
   					main,
   					nav,
   					section {
   					    display: block;
   					}
   					:host {
   					    margin: 0;
   					    font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   					    font-size: 1rem;
   					    font-weight: 400;
   					    line-height: 1.5;
   					    color: #212529;
   					    text-align: left;
   					    background-color: #fff;
   					}
   					div {
   					 font-size: 16px;
   					}
   					[tabindex="-1"]:focus:not(:focus-visible) {
   					    outline: 0 !important;
   					}
   					h1,
   					h2,
   					h3,
   					h4,
   					h5,
   					h6 {
   					    margin-top: 0;
   					    margin-bottom: 0.5rem;
   					}
   					ul {
   					    margin-top: 0;
   					    margin-bottom: 1rem;
   					}
   					ul ul {
   					    margin-bottom: 0;
   					}
   					a {
   					    color: #8b0015;
   					    text-decoration: none;
   					    background-color: transparent;
   					}
   					a:hover {
   					    color: #3f0009;
   					    text-decoration: underline;
   					}
   					a:not([href]):not([class]) {
   					    color: inherit;
   					    text-decoration: none;
   					}
   					a:not([href]):not([class]):hover {
   					    color: inherit;
   					    text-decoration: none;
   					}
   					label {
   					    display: inline-block;
   					    margin-bottom: 0.5rem;
   					}
   					button {
   					    border-radius: 0;
   					}
					   button span{
						   font-family: proxima-nova !important;
					   }
   					button:focus:not(:focus-visible) {
   					    outline: 0;
   					}
   					button,
   					input {
   					    margin: 0;
   					    font-family: inherit;
   					    font-size: inherit;
   					    line-height: inherit;
   					}
   					button,
   					input {
   					    overflow: visible;
   					}
   					button {
   					    text-transform: none;
   					}
   					[role="button"] {
   					    cursor: pointer;
   					}
   					[type="button"],
   					[type="reset"],
   					[type="submit"],
   					button {
   					    -webkit-appearance: button;
   					}
   					[type="button"]:not(:disabled),
   					[type="reset"]:not(:disabled),
   					[type="submit"]:not(:disabled),
   					button:not(:disabled) {
   					    cursor: pointer;
   					}
   					[type="button"]::-moz-focus-inner,
   					[type="reset"]::-moz-focus-inner,
   					[type="submit"]::-moz-focus-inner,
   					button::-moz-focus-inner {
   					    padding: 0;
   					    border-style: none;
   					}
   					input[type="checkbox"],
   					input[type="radio"] {
   					    box-sizing: border-box;
   					    padding: 0;
   					}
   					[type="number"]::-webkit-inner-spin-button,
   					[type="number"]::-webkit-outer-spin-button {
   					    height: auto;
   					}
   					[type="search"] {
   					    outline-offset: -2px;
   					    -webkit-appearance: none;
   					}
   					[type="search"]::-webkit-search-decoration {
   					    -webkit-appearance: none;
   					}
   					::-webkit-file-upload-button {
   					    font: inherit;
   					    -webkit-appearance: button;
   					}
   					[hidden] {
   					    display: none !important;
   					}
						* {
								box-sizing: border-box;
						}
						header {
								display: block;
						}
						.arizona-header {
								position: relative;
								color: #fff;
								background-color: #ab0520;
								height: 50px;
						}
						.container {
								width: 100%;
								padding-right: 15px;
								padding-left: 15px;
								margin-right: auto;
								margin-left: auto;
						}
						.row {
								display: -ms-flexbox;
								display: flex;
								-ms-flex-wrap: wrap;
								flex-wrap: wrap;
								align-items: center;
								justify-content: flex-end;
								margin-right: -15px;
								margin-left: -15px;
								padding: 5px 0;
						}
						.row section{
								align-items: center;
						}
						.redbar-buttons {
								position: absolute;
								top: 0;
								right: 0;
								height: 53px;
								max-height: 53px;
						}

						@media (min-width: 576px) {
								.container, .container-sm {
										max-width: 540px;
								}
						}
						@media (min-width: 768px) {
								.container, .container-md, .container-sm {
										max-width: 720px;
								}
						}
						@media (min-width: 992px) {
							.arizona-header{
								height: auto;
							}
								.container, .container-lg, .container-md, .container-sm {
										max-width: 960px;
								}
						}
						@media (min-width: 1200px){
								.container, .container-lg, .container-md, .container-sm, .container-xl {
										max-width: 1140px;
								}
						}
						.arizona-line-logo {
								width: 211px;
								height: 16px;
								margin: 17px 20px 17px 10px;
						}
						@media (min-width: 576px){
								svg#search-icon {
										width: 266.41px;
										height: 19.8px;
										margin: 15.11px 20px 15.1px 10px;
								}
						}
						.ml-auto, .mx-auto {
								margin-left: auto!important;
						}
						.d-none {
								display: none!important;
						}
						@media (min-width: 992px) {
								.d-lg-block {
										-webkit-box-orient: horizontal!important;
										-webkit-box-direction: normal!important;
										-ms-flex-direction: row!important;
										flex-direction: row!important;
										display: flex !important;                }
								.d-lg-none {
												display: none !important;
								}

						}
						@media (min-width: 1200px) {
								.d-xl-block {
										-webkit-box-orient: horizontal!important;
										-webkit-box-direction: normal!important;
										-ms-flex-direction: row!important;
										flex-direction: row!important;
										display: flex !important;                }
						}
						header #search-block-form {
								/* padding: 5px 12px; */
								flex-flow: row wrap;
						}
						#search-block-form {
								display: flex;
								overflow: hidden;
								position: relative;
						}
						.form-control:focus {
								border-color: hsl(191deg 9% 65%);
								outline: 0;
								-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
								box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
						}
						.sr-only {
								position: absolute;
								width: 1px;
								height: 1px;
								padding: 0;
								margin: -1px;
								overflow: hidden;
								clip: rect(0,0,0,0);
								white-space: nowrap;
								border: 0;
						}
						label {
								display: inline-block;
								margin-bottom: .5rem;
						}
						.input-group {
								position: relative;
								display: -ms-flexbox;
								display: flex;
								-ms-flex-wrap: wrap;
								flex-wrap: wrap;
								-ms-flex-align: center;
								align-items: center;
								width: 100%;
								right: 1px;
						}
						.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext {
								position: relative;
								-ms-flex: 1 1 auto;
								flex: 1 1 auto;
								min-width: 0;
								border: none;
						}
						.search-block-form {
								overflow: hidden;
								width: 189.5px;
								background-color: white;
						}
						#block-az-barrio-search{
							border: 1px solid var(--bloom);
							padding: 4px 0 5px;
						}
						.search-block-form input {
								height: 34px;
								font-size: 16px;
								padding: 0px 37px 0px 13px;
								width: 100%;
						}
						input[type="search"] {
								box-sizing: border-box;
						}
						.form-control {
								display: block;
								width: 100%;
								height: calc(1.5em + .75rem + 2px);
								padding: .375rem .75rem;
								font-size: 1rem;
								font-weight: 400;
								line-height: 1.5;
								color: #495057;
								background-color: #fff;
								background-clip: padding-box;
								/* border: 1px solid #ced4da; */
								border-radius: 0;
								transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
						}
						[type=search] {
								outline-offset: -2px;
								-webkit-appearance: none;
						}
						.search-block-form .input-group-append button#edit-submit {
								background-color: hsl(0deg 0% 100%);
								padding: 0px;
								border: none;
								position: absolute;
								top: 0px;
								right: 1px;
								text-align: center;
								padding: 0 8px;
								border-left: 1px solid #CED4DA;
						}
						.search-block-form .input-group-append button#edit-submit
						.search-block-form .input-group-append button#edit-submit svg {
								height: 23px;
								width: 35px;
						}
						.search-block-form .input-group-append button#edit-submit:focus {
								border-color: hsl(191deg 9% 65%);
								outline: 0;
								-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
								box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
						}
						.input-group-append button#edit-submit svg {
								height: 30px;
								width: 20px;
								margin: 3px 0px;
						}
						button, input {
								overflow: visible;
								border: none;
						}
						button, input, optgroup, select, textarea {
								margin: 0;
								font-family: inherit;
								font-size: inherit;
								line-height: inherit;
						}
						.btn:not(:disabled):not(.disabled) {
								cursor: pointer;
						}
						.bd-example>.btn, .bd-example>.btn-group {
								margin-top: .25rem;
								margin-bottom: .25rem;
						}
						.btn {
								font-weight: 500;
								text-transform: uppercase;
								text-decoration: none;
								letter-spacing: .04em;
								white-space: normal;
								border-width: 2px;
						}
						.btn {
								display: inline-block;
								font-weight: 500;
								color: #212529;
								text-align: center;
								vertical-align: middle;
								-webkit-user-select: none;
								-moz-user-select: none;
								-ms-user-select: none;
								user-select: none;
								background-color: transparent;
								border: 2px solid transparent;
								padding: .375rem .75rem;
								font-size: 1rem;
								line-height: 1.5;
								border-radius: 0;
								transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
						}
						[type=button], [type=reset], [type=submit], button {
								-webkit-appearance: button;
						}
						button, select {
								text-transform: none;
						}
						button, input {
								overflow: visible;
						}
						button, input, optgroup, select, textarea {
								margin: 0;
								font-family: inherit;
								font-size: inherit;
								line-height: inherit;
						}
						button {
								border-radius: 0;
						}
						.btn-hollow-default:hover, .btn-outline-red:hover {
								background-color: #8B0015 !important;
								border-color: #8B0015 !important;
								color:white;
						}
						.btn:hover {
								color: #212529;
								text-decoration: none;
						}
						[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
								cursor: pointer;
						}
						.btn-hollow-default, .btn-outline-red {
								color: white;
								border-color: #ef4056 !important;
						}

						.input-group-append {
								margin-left: -2px;
						}
						.input-group-append, .input-group-btn, .input-group-prepend {
								display: -ms-flexbox;
								display: flex;
						}
						.material-icons-sharp {
								font-size: inherit;
								line-height: inherit;
						}
						.resource-menu .dropdown-menu {
								font-size: 0.8125em;
						}
						.dropdown-menu.dropdown-menu-right, .dropdown-menu.pull-right {
								right: 0;
								left: auto;
						}
						@media (min-width: 768px){
								.dropdown-menu {
										padding: 10px 0 0 0;
								}
								.dropdown-menu {
										position: absolute;
										top: 100%;
										left: 0;
										z-index: 1000;
										display: none;
										float: left;
										min-width: 160px;
										margin: 0;
										list-style: none;
										padding: 5px 0 5px 0;
										font-size: 16px;
										text-align: left;
										background-color: rgba(0,28,72,.97);
										border: 0;
										border: 0;
										border-radius: 0;
										-webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
										box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
										background-clip: barder-box;
								}
								.dropdown-menu-right {
										right: 0;
										left: auto;
								}
						}
						.dropdown-menu {
								position: absolute;
								top: calc(100% - 1px);
								left: 5px;
								z-index: 1000;
								display: none;
								padding: 5px 0px;
								margin: 2px 0px 0px;
								font-size: 16px;
								text-align: left;
								list-style: none;
								background-color: rgba(0, 28, 72, 0.97);
								background-clip: padding-box;
								border: 1px solid rgba(0, 0, 0, 0.15);
								border-radius: 0px;
								box-shadow: rgb(0 0 0 / 18%) 0px 6px 12px;
								min-width: 0px;
						}
						.dropdown-menu.show {
								display: block;
						}
						.resources {
								position: relative;
								margin-left: 10px;
								padding: 0 2px 0 6px;
						}
						.resources:hover button + .dropdown-menu, .resources button + .dropdown-menu:focus{
								display: block;
						}
						.resources .caret{
								position: absolute;
								right: 30px;
								top: 18px;
								margin: 0;
								display: inline-block;
								width: 0;
								height: 0;
								vertical-align: middle;
								border-top: 4px dashed;
								border-right: 4px solid transparent;
								border-left: 4px solid transparent;
						}
						.resources button {
								font-size: 14px;
								height: auto;
								padding: 8px 40px 9px 24px;
								font-weight: bold;
						}
						.resources button:hover{
								color: white;
						}
						.dropdown-item a {
								display: block;
								color: #fff;
								text-decoration: none;
								padding: 6px 20px;
								width: 100%;
						}
						.dropdown-item {
								display: block;
								width: 100%;
								clear: both;
								font-weight: bold;
								color: #fff;
								text-align: inherit;
								white-space: nowrap;
								background-color: transparent;
								border: 0;
								font-size: 12px;
								text-align: left;
						}
						.dropdown-item:hover {
								background-color: var(--azurite);
						}


						`}static get properties(){return{thisUrl:{type:String},baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}}}constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}static azMenuLevelTemplate(t){return $`
					${t}
				`}static openMenu(t){t.preventDefault();const{target:e}=t;"true"===e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),e.nextElementSibling.classList.remove("show")):(e.setAttribute("aria-expanded","true"),e.nextElementSibling.classList.add("show"))}azMenuParentTemplate(t,e){return $`
					<button
						@click="${Ut.openMenu}"
						role="button"
						aria-expanded="false"
						aria-haspopup="true"
						href="#"
						class="resource-menu btn btn-outline-red"
					>
						${t}
					</button>
					<div class="dropdown-menu dropdown-menu pull-right">
						${this.renderAzMenuLevel(e)}
						</div>
				`}static azMenuLinkTemplate(t,e){return $`<div class="dropdown-item"><a href=${e} @click="${t=>{Nt(t,"az-redbar")}}">${t}</a></div>`}static azMenuItemTemplate(t){return $`${t}`}renderAzMenuLevel(t){const e=t.map((t=>this.renderAzMenuItem(t)));return Ut.azMenuLevelTemplate(e)}renderAzMenuItem(t){let e=t&&t.link&&t.link.attributes&&t.link.attributes.title,n=t&&t.link&&t.link.href,o=t&&t.children;const r=e?t.link.attributes.title:void 0;let i=n?t.link.href:void 0;const s=o?t.children:void 0;return s.length?this.azMenuParentTemplate(r,s):i?(i="/"===i.charAt(0)?this.thisUrl+i:i,Ut.azMenuLinkTemplate(r,i)):Ut.azMenuItemTemplate(r)}fetchData(t,e){this.isLoading=!0;const n=`${t}/system/menu/${e}/linkset`;fetch(n,{}).then((t=>{if(t.ok)return t.json();throw this.isLoading=!1,new Error(`Unable to fetch ${n}. ${t.status} ${t.statusText}`)})).then((t=>{try{const n=(0,rt.denormalize)(t,e);this.tree=n.tree}catch(t){throw new Error("Unable to denormalize menu.")}this.isLoading=!1}))}render(){return $`
				<header class="bg-red arizona-header" id="header_arizona" role="banner">
						<div class="container">
								<div class="row">
										<section class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities">
												<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-az-barrio-search" role="search">
														<div class="content">
																<form action="${this.thisUrl}/search/google" method="GET" id="search-block-form" accept-charset="UTF-8" class="search-form search-block-form">
																		<div class="input-group">
																				<label for="edit-keys" class="sr-only">Search</label>
																				<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search form-control" placeholder="Search this site" aria-label="Search this site">
																				<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper input-group-append" id="edit-actions">
																						<button data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit btn">
																								<svg id="search-icon" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#8B0015"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
																						</button>
																				</div>
																		</div>
																</form>
														</div>
												</div>
												<div class="resources">
														<span class="caret"></span>
														${this.isLoading?$`
																<button role="button" aria-expanded="false" aria-haspopup="true" href="#" class="resource-menu btn btn-outline-red"><slot name="loading">${this.loadingMessage}</slot></button>
																`:this.renderAzMenuLevel(this.tree)}
												</div>
										</section>
										<section class="redbar-buttons d-lg-none">
												<az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
														<svg class="icon"  id="button-search-icon" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
														<span class="icon-text"> search </span>
												</az-button>
												<az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
														<svg class="icon" title="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
														<span class="icon-text"> menu </span>
												</az-button>
										</section>
								</div>
						</div>
				</header>
			`}}customElements.get("az-redbar")||customElements.define("az-redbar",Ut)})();