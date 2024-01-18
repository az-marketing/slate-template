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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`),i="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const o=[],a=[],l=document.createTreeWalker(e.content,133,null,!1);let d=0,h=-1,u=0;const{strings:f,values:{length:m}}=t;for(;u<m;){const t=l.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let o=0;for(let t=0;t<n;t++)s(e[t].name,i)&&o++;for(;o-- >0;){const e=f[u],n=p.exec(e)[2],o=n.toLowerCase()+i,a=t.getAttribute(o);t.removeAttribute(o);const s=a.split(r);this.parts.push({type:"attribute",index:h,name:n,strings:s}),u+=s.length-1}}"TEMPLATE"===t.tagName&&(a.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,a=e.split(r),l=a.length-1;for(let e=0;e<l;e++){let o,r=a[e];if(""===r)o=c();else{const t=p.exec(r);null!==t&&s(t[2],i)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-i.length)+t[3]),o=document.createTextNode(r)}n.insertBefore(o,t),this.parts.push({type:"node",index:++h})}""===a[l]?(n.insertBefore(c(),t),o.push(t)):t.data=a[l],u+=l}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&h!==d||(h++,e.insertBefore(c(),t)),d=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(o.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),u++}}else l.currentNode=a.pop()}for(const t of o)t.parentNode.removeChild(t)}}const s=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:n},parts:o}=t,r=document.createTreeWalker(n,133,null,!1);let i=u(o),a=o[i],s=-1,l=0;const c=[];let p=null;for(;r.nextNode();){s++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==a&&a.index===s;)a.index=null!==p?-1:a.index-l,i=u(o,i),a=o[i]}c.forEach((t=>t.parentNode.removeChild(t)))}const h=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},u=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};function f(t,e,n=null){const{element:{content:o},parts:r}=t;if(null==n)return void o.appendChild(e);const i=document.createTreeWalker(o,133,null,!1);let a=u(r),s=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===n&&(s=h(e),n.parentNode.insertBefore(e,n));-1!==a&&r[a].index===l;){if(s>0){for(;-1!==a;)r[a].index+=s,a=u(r,a);return}a=u(r,a)}}}
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
 */const m=new WeakMap,b=t=>"function"==typeof t&&m.has(t),g={},v={};
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
class y{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],o=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,a=0,s=0,c=r.nextNode();for(;a<o.length;)if(i=o[a],l(i)){for(;s<i.index;)s++,"TEMPLATE"===c.nodeName&&(n.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=n.pop(),c=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${n} `;class k{constructor(t,e,n,o){this.strings=t,this.values=e,this.type=n,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let a=0;a<t;a++){const t=this.strings[a],s=t.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===t.indexOf("--\x3e",s+1);const l=p.exec(t);e+=null===l?t+(r?x:o):t.substr(0,l.index)+l[1]+l[2]+i+l[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}const _=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let o="";for(let r=0;r<e;r++){o+=t[r];const e=n[r];if(void 0!==e){const t=e.value;if(_(t)||!S(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||_(t)&&t===this.value||(this.value=t,b(t)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof k?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),o=n._clone();n.update(t.values),this.__commitNode(o),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,o=0;for(const r of t)n=e[o],void 0===n&&(n=new N(this.options),e.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(e[o-1])),n.setValue(r),n.commit(),o++;o<e.length&&(e.length=o,this.clear(n&&n.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class j extends z{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let C=!1;(()=>{try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function L(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);return o=e.keyString.get(r),void 0===o&&(o=new a(t,t.getTemplateElement()),e.keyString.set(r,o)),e.stringsArray.set(t.strings,o),o}const M=new Map,I=new WeakMap,U=(t,n,o)=>{let r=I.get(n);void 0===r&&(e(n,n.firstChild),I.set(n,r=new N(Object.assign({templateFactory:L},o))),r.appendInto(n)),r.setValue(t),r.commit()};const V=new
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
class{handleAttributeExpressions(t,e,n,o){const r=e[0];if("."===r){return new j(t,e.slice(1),n).parts}if("@"===r)return[new A(t,e.slice(1),o.eventContext)];if("?"===r)return[new E(t,e.slice(1),n)];return new z(t,e,n).parts}handleTextExpression(t){return new N(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(t,...e)=>new k(t,e,"html",V),F=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const $=t=>e=>{const o=F(e.type,t);let r=M.get(o);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},M.set(o,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);if(i=r.keyString.get(s),void 0===i){const n=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,t),i=new a(e,n),r.keyString.set(s,i)}return r.stringsArray.set(e.strings,i),i},W=["html","svg"],D=new Set,B=(t,e,n)=>{D.add(t);const o=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,t);const a=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{W.forEach((e=>{const n=M.get(F(e,t));void 0!==n&&n.keyString.forEach((t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{n.add(t)})),d(t,n)}))}))})(t);const s=o.content;n?f(n,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),d(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:G},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,n)=>{const o=this._attributeNameForProperty(n,e);void 0!==o&&(this._attributeToPropertyMap.set(o,n),t.push(o))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=q){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,o=this.getPropertyDescriptor(t,n,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdateInternal(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||q}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this[J]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=G){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,o=e.converter||Z,r="function"==typeof o?o:o.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,o=e.converter;return(o&&o.toAttribute||Z.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=q){const o=this.constructor,r=o._attributeNameForProperty(t,n);if(void 0!==r){const t=o._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(t);if(void 0!==o){const t=n.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let o=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X[J]=!0;const Y=Element.prototype;Y.msMatchesSelector||Y.webkitMatchesSelector;
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
const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class tt{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce(((e,n,o)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[o+1]),t[0]);return new tt(n,K)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const nt={};class ot extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight(((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t)),n),n=e(t,new Set),o=[];n.forEach((t=>o.unshift(t))),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new tt(String(e),K)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return nt}}ot.finalized=!0,ot.render=(t,n,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const r=o.scopeName,i=I.has(n),a=H&&11===n.nodeType&&!!n.host,s=a&&!D.has(r),l=s?document.createDocumentFragment():n;if(U(t,l,Object.assign({templateFactory:$(r)},o)),s){const t=I.get(l);I.delete(l);const o=t.value instanceof y?t.value.template:void 0;B(r,l,o),e(n,n.firstChild),n.appendChild(l),I.set(n,t)}!i&&a&&window.ShadyCSS.styleElement(n.host)},ot.shadowRootOptions={mode:"open"};var rt={};Object.defineProperty(rt,"__esModule",{value:!0}),rt.denormalize=rt.parse=void 0;var it={},at=it&&it.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(it,"__esModule",{value:!0}),it.Menu=void 0;var st={},lt=st&&st.__assign||function(){return lt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},lt.apply(this,arguments)},ct=st&&st.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(st,"__esModule",{value:!0}),st.denormalize=st.parse=void 0;var pt={},dt=pt&&pt.__assign||function(){return dt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},dt.apply(this,arguments)},ht=pt&&pt.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},ut=pt&&pt.__spreadArray||function(t,e){for(var n=0,o=e.length,r=t.length;n<o;n++,r++)t[r]=e[n];return t};Object.defineProperty(pt,"__esModule",{value:!0}),pt.Linkset=void 0;var ft=function(){function t(t){this.elements=t,this.size=t.length}return t.prototype.hasLinkTo=function(t){return this.elements.some((function(e){return e.rel===t}))},t.prototype.linkTo=function(t){return this.elements.find((function(e){return e.rel===t}))},t.prototype.linksTo=function(e){return new t(this.elements.filter((function(t){return t.rel===e})))},t.prototype.linksFrom=function(e){return new t(this.elements.filter((function(t){return t.anchor===e})))},t.prototype.linksWithAttribute=function(e){return new t(this.elements.filter((function(t){return Object.prototype.hasOwnProperty.call(t.attributes,e)})))},t.prototype.linksWithAttributeValue=function(e,n){return new t(this.linksWithAttribute(e).elements.filter((function(t){return(Array.isArray(t.attributes[e])?t.attributes[e]:[t.attributes[e]]).some((function(t){return typeof(e=t)==typeof(o=n)&&("string"==typeof e&&"string"==typeof o?e===o:e.value==e.value&&e.language==e.language);var e,o}))})))},t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.normalize=function(){var t={};return this.elements.forEach((function(e){var n=e.anchor,o=e.rel,r=ht(e,["anchor","rel"]);Object.hasOwnProperty.call(t,n)||(t[n]={}),Object.hasOwnProperty.call(t[n],o)||(t[n][o]=[]);var i=r.href,a=r.attributes,s=dt({href:i},a);t[n][o].push(s)})),{linkset:Object.entries(t).reduce((function(t,e){var n=e[0],o=e[1];return ut(ut([],t),[dt({anchor:n},o)])}),[])}},t}();pt.Linkset=ft;var mt={},bt=mt&&mt.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(mt,"__esModule",{value:!0}),mt.Link=void 0;var gt=function(t){var e=t.anchor,n=t.rel,o=t.href,r=bt(t,["anchor","rel","href"]);this.anchor=e,this.rel=n,this.href=o,this.attributes=r};function vt(t){var e=[];return t.linkset.forEach((function(t){var n=t.anchor,o=ct(t,["anchor"]);Object.keys(o).forEach((function(o){t[o].forEach((function(t){e.push(new mt.Link(lt({anchor:n,rel:o},t)))}))}))})),new pt.Linkset(e)}mt.Link=gt,st.denormalize=vt,st.parse=function(t){return vt(JSON.parse(t))};var yt={},wt=yt&&yt.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(yt,"__esModule",{value:!0}),yt.buildTree=yt.hierarchyCompare=yt.MenuElement=void 0;var xt=function(){function t(t,e){void 0===e&&(e=[]),this.link=t,this.children=_t(wt([],e,!0))}return Object.defineProperty(t.prototype,"title",{get:function(){return this.link.attributes.title},enumerable:!1,configurable:!0}),t}();function kt(t,e){return 0===t.length&&0===e.length?0:0===t.length&&e.length>0?-1:t.length>0&&0===e.length?1:1===t.length&&1===e.length?parseInt(t[0])-parseInt(e[0]):t[0]===e[0]?kt(t.slice(1),e.slice(1)):parseInt(t[0])-parseInt(e[0])}function _t(t){if(t.length<2)return t.length?[new xt(t.shift())]:[];t.sort((function(t,e){return kt(t.attributes.hierarchy,e.attributes.hierarchy)}));var e,n=[],o=[];do{var r=t.shift();e?r.attributes.hierarchy.length>e.attributes.hierarchy.length?o.push(r):(n.push(new xt(e,o)),e=r,o=[]):e=r}while(t.length);return n.push(new xt(e,o)),n}yt.MenuElement=xt,yt.hierarchyCompare=kt,yt.buildTree=_t;var St=function(){function t(t,e){this.id=t,this.linkset=e,this.elements=this.linkset.elements,this.size=this.linkset.size,this.tree=(0,yt.buildTree)(at([],this.elements,!0))}return t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.hasLinkTo=function(t){return this.linkset.hasLinkTo(t)},t.prototype.linkTo=function(t){return this.linkset.linkTo(t)},t.prototype.linksTo=function(e){return new t(this.id,this.linkset.linksTo(e))},t.prototype.linksFrom=function(e){return new t(this.id,this.linkset.linksTo(e))},t.prototype.linksWithAttribute=function(e){return new t(this.id,this.linkset.linksWithAttribute(e))},t.prototype.linksWithAttributeValue=function(e,n){return new t(this.id,this.linkset.linksWithAttributeValue(e,n))},t.from=function(e,n){var o=(0,st.denormalize)(e),r=[];n?r.push(n):o.linksWithAttribute("machine-name").elements.forEach((function(t){r.includes(t.attributes["machine-name"][0])||r.push(t.attributes["machine-name"][0])}));var i=r.map((function(e){return new t(e,o.linksWithAttributeValue("machine-name",e))}));return n?i.shift():i},t}();function zt(t,e){return it.Menu.from(t,e)}it.Menu=St,rt.denormalize=zt,rt.parse=function(t,e){return zt(JSON.parse(t),e)};var Pt=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function p(t,e,n,o){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new j(o||[]);return r(a,"_invoke",{value:z(t,n,s)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var h="suspendedStart",u="executing",f="completed",m={};function b(){}function g(){}function v(){}var y={};c(y,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==n&&o.call(x,a)&&(y=x);var k=v.prototype=b.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(r,i,a,s){var l=d(t[r],t,i);if("throw"!==l.type){var c=l.arg,p=c.value;return p&&"object"==typeof p&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(p).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}var i;r(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return i=i?i.then(r,r):r()}})}function z(t,e,n){var o=h;return function(r,i){if(o===u)throw new Error("Generator is already running");if(o===f){if("throw"===r)throw i;return C()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=u;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?f:"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=f,n.method="throw",n.arg=l.arg)}}}function P(t,n){var o=n.method,r=t.iterator[o];if(r===e)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var i=d(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=v,r(k,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:g,configurable:!0}),g.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(S.prototype),c(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new S(p(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),c(k,l,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(o,r){return s.type="throw",s.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:T(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}({});try{regeneratorRuntime=Pt}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Pt:Function("r","regeneratorRuntime = r")(Pt)}const Nt=(t,e="")=>{window.dataLayer=window.dataLayer||[];var n=t.composedPath()[0],o=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:n.textContent||"",elementInnerText:n.innerText||"",title:"shadow-dom-link",element:n,elementClasses:n.className||"",elementId:n.id||"",elementLocation:e||"",elementTarget:n.target||"",elementUrl:n.href||n.action||"",originalEvent:t,parent:o||"",inShadowDom:!0}})};class Et extends ot{static get properties(){return{thisUrl:{type:String},data:{attribute:!1},baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}}}static menuLevelTemplate(t){return R` ${t} `}fetchData(t,e){this.isLoading=!0;const n=`${t}/system/menu/${e}/linkset`;fetch(n,{}).then((t=>{if(t.ok)return t.json();throw this.isLoading=!1,new Error(`Unable to fetch ${n}. ${t.status} ${t.statusText}`)})).then((t=>{try{const n=(0,rt.denormalize)(t,e);this.tree=n.tree}catch(t){throw new Error("Unable to denormalize menu.")}this.isLoading=!1}))}menuParentTemplate(t,e){return R`<li
			part="menu-item"
			class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open"
		>
			<button
				@click="${Et.openMenu}"
				role="button"
				aria-expanded="false"
				aria-haspopup="true"
				href="#"
				class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle"
			>
				${t}
			</button>
			<div class="dropdown-menu">${this.renderAzMenuLevel(e)}</div>
		</li>`}static openMenu(t){t.preventDefault();const{target:e}=t;let n=document.querySelector("az-main-menu").shadowRoot.querySelector(".nav-item.show button");"true"===e.getAttribute("aria-expanded")?(e.parentElement.classList.remove("show"),e.setAttribute("aria-expanded","false"),e.nextElementSibling.classList.remove("show")):(n&&(n.parentElement.classList.remove("show"),n.setAttribute("aria-expanded","false"),n.nextElementSibling.classList.remove("show")),e.parentElement.classList.add("show"),e.setAttribute("aria-expanded","true"),e.nextElementSibling.classList.add("show"))}renderAzMenuLevel(t){const e=t.map((t=>this.renderAzMenuItem(t)));return Et.menuLevelTemplate(e)}static azMenuTopLevelLinkTemplate(t,e){return e="/"===e.charAt(0)?this.thisUrl+e:e,R`<li part="menu-item" class="nav-item">
			<a href=${e} class="nav-link">${t}</a>
		</li>`}static menuLinkTemplate(t,e){return e="/"===e.charAt(0)?this.thisUrl+e:e,R`<a
			part="menu-item"
			class="dropdown-item"
			href=${e}
			@click="${t=>{Nt(t,"az-main-menu")}}"
			>${t}</a
		>`}static menuItemTemplate(t){return R`<li part="menu-item">${t}</li>`}renderAzMenuItem(t){const e=t?.link?.attributes?.title,n=t?.link?.href,o=t?.children,r=t?.link?.attributes?.["drupal-menu-hierarchy"];let i=0;if(r&&r.length>0){const t=r[0].match(/\./g);i=t?t.length:0}const a=n&&"/"===n.charAt(0)?`${this.thisUrl}${n}`:n;return o&&o.length?this.menuParentTemplate(e,o):o&&0===o.length&&a&&1===i?Et.azMenuTopLevelLinkTemplate(e,a):a?Et.menuLinkTemplate(e,a):Et.menuItemTemplate(e)}constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}static get styles(){return et`
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
				--font-family-sans-serif: proxima-nova, calibri, -apple-system,
					BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
					"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
					"Segoe UI Symbol", "Noto Color Emoji";
				--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
					"Liberation Mono", "Courier New", monospace;
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
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
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
			.h1,
			.h2,
			.h3,
			.h4,
			.h5,
			.h6,
			.text-size-h1,
			.text-size-h2,
			.text-size-h3,
			.text-size-h4,
			.text-size-h5,
			.text-size-h6,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-bottom: 0.5rem;
				font-weight: 500;
				line-height: 1.2;
			}
			.h1,
			.text-size-h1,
			h1 {
				font-size: 2.5rem;
			}
			.h2,
			.text-size-h2,
			h2 {
				font-size: 2rem;
			}
			.h3,
			.text-size-h3,
			h3 {
				font-size: 1.75rem;
			}
			.h4,
			.text-size-h4,
			h4 {
				font-size: 1.5rem;
			}
			.h5,
			.text-size-h5,
			h5 {
				font-size: 1.25rem;
			}
			.h6,
			.text-size-h6,
			h6 {
				font-size: 1rem;
			}
			.display-1 {
				font-size: 6rem;
				font-weight: 300;
				line-height: 1.2;
			}
			.display-2 {
				font-size: 5.5rem;
				font-weight: 300;
				line-height: 1.2;
			}
			.display-3 {
				font-size: 4.5rem;
				font-weight: 300;
				line-height: 1.2;
			}
			.display-4 {
				font-size: 3.5rem;
				font-weight: 300;
				line-height: 1.2;
			}
			.container,
			.container-lg {
				width: 100%;
				padding-right: 15px;
				padding-left: 15px;
				margin-right: auto;
				margin-left: auto;
			}
			@media (min-width: 576px) {
				.container {
					max-width: 540px;
				}
			}
			@media (min-width: 768px) {
				.container {
					max-width: 720px;
				}
			}
			@media (min-width: 992px) {
				.container,
				.container-lg {
					max-width: 960px;
					border-top: 1px solid var(--cool-gray);
				}
			}
			@media (min-width: 1200px) {
				.container,
				.container-lg {
					max-width: 1140px;
				}
			}
			.row {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				margin-right: -15px;
				margin-left: -15px;
			}
			.form-control {
				display: block;
				width: 100%;
				height: calc(1.5em + 0.75rem + 2px);
				padding: 0.375rem 0.75rem;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.5;
				color: #495057;
				background-color: #fff;
				background-clip: padding-box;
				border: 1px solid #ced4da;
				border-radius: 0;
				transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}
			@media (prefers-reduced-motion: reduce) {
				.form-control {
					transition: none;
				}
			}
			.dropdown-item:active {
				background-color: rgba(255, 255, 255, 0.15);
				color: white;
			}
			.nav-item-parent button[aria-expanded="true"] {
				background-color: rgba(255, 255, 255, 0.15);
			}
			.navbar-offcanvas .nav-item .nav-link:focus {
				background-color: rgba(255, 255, 255, 0.15);
			}

			.form-control::-ms-expand {
				background-color: transparent;
				border: 0;
			}
			.form-control:-moz-focusring {
				color: transparent;
				text-shadow: 0 0 0 #495057;
			}
			.form-control:focus {
				color: #495057;
				background-color: #fff;
				border-color: #1e56b9;
				outline: 0;
				box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
			}
			.form-control::-webkit-input-placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control::-moz-placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control:-ms-input-placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control::-ms-input-placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control::placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control:disabled,
			.form-control[readonly] {
				background-color: #e9ecef;
				opacity: 1;
			}
			input[type="date"].form-control,
			input[type="datetime-local"].form-control,
			input[type="month"].form-control,
			input[type="time"].form-control {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
			}
			.form-control-lg {
				height: calc(1.5em + 1rem + 2px);
				padding: 0.5rem 1rem;
				font-size: 1.25rem;
				line-height: 1.5;
			}
			.form-group {
				margin-bottom: 1rem;
			}
			.form-text {
				display: block;
				margin-top: 0.25rem;
			}
			.form-row {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				margin-right: -5px;
				margin-left: -5px;
			}
			.form-row > [class*="col-"] {
				padding-right: 5px;
				padding-left: 5px;
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
				padding: 0.375rem 0.75rem;
				font-size: 1rem;
				line-height: 1.5;
				border-radius: 0;
				transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
					border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}
			@media (prefers-reduced-motion: reduce) {
				.btn {
					transition: none;
				}
			}
			.btn:hover {
				color: #212529;
				text-decoration: none;
			}
			.btn:focus {
				outline: 0;
				box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
			}
			.btn:disabled {
				opacity: 0.65;
			}
			.btn:not(:disabled):not(.disabled) {
				cursor: pointer;
			}
			.btn-link {
				font-weight: 400;
				color: #8b0015;
				text-decoration: none;
			}
			.btn-link:hover {
				color: #3f0009;
				text-decoration: underline;
			}
			.btn-link:focus {
				text-decoration: underline;
			}
			.btn-link:disabled {
				color: #6c757d;
				pointer-events: none;
			}
			.btn-group-lg > .btn,
			.btn-lg {
				padding: 0.5rem 1rem;
				font-size: 1.25rem;
				line-height: 1.5;
				border-radius: 0;
			}
			.btn-block,
			.btn-group-block,
			.btn-group-block .btn {
				display: block;
				width: 100%;
			}
			.btn-block + .btn-block,
			.btn-block + .btn-group-block,
			.btn-group-block .btn + .btn,
			.btn-group-block .btn + .btn-block,
			.btn-group-block .btn + .btn-group-block,
			.btn-group-block .btn-block + .btn,
			.btn-group-block .btn-group-block + .btn,
			.btn-group-block + .btn-block,
			.btn-group-block + .btn-group-block {
				margin-top: 0.5rem;
			}
			.btn-group-block input.btn[type="button"],
			.btn-group-block input.btn[type="reset"],
			.btn-group-block input.btn[type="submit"],
			input.btn-group-block[type="button"],
			input.btn-group-block[type="reset"],
			input.btn-group-block[type="submit"],
			input[type="button"].btn-block,
			input[type="reset"].btn-block,
			input[type="submit"].btn-block {
				width: 100%;
			}
			.dropdown {
				position: relative;
			}
			.dropdown-toggle {
				white-space: nowrap;
			}
			.dropdown-toggle::after {
				display: inline-block;
				margin-left: 0.255em;
				vertical-align: 0.255em;
				content: "";
				border-top: 0.3em solid;
				border-right: 0.3em solid transparent;
				border-bottom: 0;
				border-left: 0.3em solid transparent;
			}
			.dropdown-toggle:empty::after {
				margin-left: 0;
			}
			.dropdown-menu {
				position: absolute;
				top: 100%;
				left: 0;
				z-index: 1000;
				display: none;
				float: left;
				min-width: 10rem;
				padding: 0.5rem 0;
				margin: 0 0 0;
				font-size: 16px;
				color: #212529;
				text-align: left;
				list-style: none;
				background-color: #fff;
				background-clip: padding-box;
				border: 1px solid rgba(0, 0, 0, 0.15);
			}
			.dropdown-menu.show {
				display: block;
			}
			.dropdown-menu[x-placement^="bottom"],
			.dropdown-menu[x-placement^="left"],
			.dropdown-menu[x-placement^="right"],
			.dropdown-menu[x-placement^="top"] {
				right: auto;
				bottom: auto;
			}
			.dropdown-item {
				display: block;
				width: 100%;
				padding: 0.25rem 1.5rem;
				clear: both;
				font-weight: 400;
				color: #fff;
				text-align: inherit;
				white-space: nowrap;
				background-color: transparent;
				border: 0;
			}
			.dropdown-item:focus,
			.dropdown-item:hover {
				color: #fff;
				text-decoration: none;
				background-color: #1e5288;
			}
			.dropdown-item:active {
				color: #0c234b;
				text-decoration: none;
				background-color: #fff;
			}
			.dropdown-item:disabled {
				color: #6c757d;
				pointer-events: none;
				background-color: transparent;
			}
			.dropdown-header {
				display: block;
				padding: 0.5rem 1.5rem;
				margin-bottom: 0;
				font-size: 0.875rem;
				color: #6c757d;
				white-space: nowrap;
			}
			.dropdown-item-text {
				display: block;
				padding: 0.25rem 1.5rem;
				color: #fff;
			}
			.btn-group {
				position: relative;
				display: -ms-inline-flexbox;
				display: inline-flex;
				vertical-align: middle;
			}
			.btn-group > .btn {
				position: relative;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto;
			}
			.btn-group > .btn:hover {
				z-index: 1;
			}
			.btn-group > .btn:active,
			.btn-group > .btn:focus {
				z-index: 1;
			}
			.btn-group > .btn-group:not(:first-child),
			.btn-group > .btn:not(:first-child) {
				margin-left: -2px;
			}
			.btn-group-toggle > .btn,
			.btn-group-toggle > .btn-group > .btn {
				margin-bottom: 0;
			}
			.btn-group-toggle > .btn input[type="checkbox"],
			.btn-group-toggle > .btn input[type="radio"],
			.btn-group-toggle > .btn-group > .btn input[type="checkbox"],
			.btn-group-toggle > .btn-group > .btn input[type="radio"] {
				position: absolute;
				clip: rect(0, 0, 0, 0);
				pointer-events: none;
			}
			.input-group {
				position: relative;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				-ms-flex-align: stretch;
				align-items: stretch;
				width: 100%;
			}
			.input-group > .form-control {
				position: relative;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto;
				width: 1%;
				min-width: 0;
				margin-bottom: 0;
			}
			.input-group > .form-control + .form-control {
				margin-left: -1px;
			}
			.input-group > .form-control:focus {
				z-index: 3;
			}
			.input-group-append,
			.input-group-btn {
				display: -ms-flexbox;
				display: flex;
			}
			.input-group-append .btn,
			.input-group-btn .btn {
				position: relative;
				z-index: 2;
			}
			.input-group-append .btn:focus,
			.input-group-btn .btn:focus {
				z-index: 3;
			}
			.input-group-append .btn + .btn,
			.input-group-append .btn + .input-group-text,
			.input-group-append .input-group-text + .btn,
			.input-group-append .input-group-text + .input-group-text,
			.input-group-btn .btn + .btn,
			.input-group-btn .btn + .input-group-text,
			.input-group-btn .input-group-text + .btn,
			.input-group-btn .input-group-text + .input-group-text {
				margin-left: -1px;
			}
			.input-group-btn {
				margin-right: -1px;
			}
			.input-group-append {
				margin-left: -1px;
			}
			.input-group-text {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-align: center;
				align-items: center;
				padding: 0.375rem 0.75rem;
				margin-bottom: 0;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.5;
				color: #495057;
				text-align: center;
				white-space: nowrap;
				background-color: #e9ecef;
				border: 1px solid #ced4da;
			}
			.input-group-text input[type="checkbox"],
			.input-group-text input[type="radio"] {
				margin-top: 0;
			}
			.input-group-lg > .form-control:not(textarea) {
				height: calc(1.5em + 1rem + 2px);
			}
			.input-group-lg > .form-control,
			.input-group-lg > .input-group-append > .btn,
			.input-group-lg > .input-group-append > .input-group-text,
			.input-group-lg > .input-group-btn > .btn,
			.input-group-lg > .input-group-btn > .input-group-text {
				padding: 0.5rem 1rem;
				font-size: 1.25rem;
				line-height: 1.5;
			}
			.nav {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				padding-left: 0;
				margin-bottom: 0;
				list-style: none;
			}
			.nav-link {
				display: block;
				padding: 0.5rem 1rem;
			}
			.nav-link:focus,
			.nav-link:hover {
				text-decoration: none;
			}
			.navbar {
				position: relative;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				-ms-flex-align: center;
				align-items: center;
				-ms-flex-pack: justify;
				justify-content: space-between;
				padding: 0 1rem;
			}
			.navbar .container,
			.navbar .container-lg {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				-ms-flex-align: center;
				align-items: center;
				-ms-flex-pack: justify;
				justify-content: space-between;
			}
			.navbar-nav {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-direction: column;
				flex-direction: column;
				padding-left: 0;
				margin-bottom: 0;
				list-style: none;
			}
			.navbar-nav .nav-link {
				padding-right: 0;
				padding-left: 0;
			}
			.navbar-nav .dropdown-menu {
				position: static;
				float: none;
			}
			.navbar-text {
				display: inline-block;
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;
			}
			.label {
				display: inline-block;
				padding: 0.25em 0.4em;
				font-size: 75%;
				font-weight: 700;
				line-height: 1;
				text-align: center;
				white-space: nowrap;
				vertical-align: baseline;
				transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
					border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}
			@media (prefers-reduced-motion: reduce) {
				.label {
					transition: none;
				}
			}
			a.label:focus,
			a.label:hover {
				text-decoration: none;
			}
			.label:empty {
				display: none;
			}
			.btn .label {
				position: relative;
				top: -1px;
			}
			@-webkit-keyframes progress-bar-stripes {
				from {
					background-position: 1rem 0;
				}
				to {
					background-position: 0 0;
				}
			}
			@keyframes progress-bar-stripes {
				from {
					background-position: 1rem 0;
				}
				to {
					background-position: 0 0;
				}
			}
			.close {
				float: right;
				font-size: 1.5rem;
				font-weight: 700;
				line-height: 1;
				color: #000;
				text-shadow: 0 1px 0 #fff;
				opacity: 0.5;
			}
			.close:hover {
				color: #000;
				text-decoration: none;
			}
			.close:not(:disabled):not(.disabled):focus,
			.close:not(:disabled):not(.disabled):hover {
				opacity: 0.75;
			}
			button.close {
				padding: 0;
				background-color: transparent;
				border: 0;
			}
			@-webkit-keyframes spinner-border {
				to {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
			@keyframes spinner-border {
				to {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
			@-webkit-keyframes spinner-grow {
				0% {
					-webkit-transform: scale(0);
					transform: scale(0);
				}
				50% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
			@keyframes spinner-grow {
				0% {
					-webkit-transform: scale(0);
					transform: scale(0);
				}
				50% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
			.bg-white {
				background-color: #fff !important;
			}
			.clearfix::after {
				display: block;
				clear: both;
				content: "";
			}
			.d-block {
				display: block !important;
			}
			.d-flex {
				display: -ms-flexbox !important;
				display: flex !important;
			}
			@media (min-width: 992px) {
				.d-lg-block {
					display: block !important;
				}
				.d-lg-flex {
					display: -ms-flexbox !important;
					display: flex !important;
				}
			}
			.flex-row {
				-ms-flex-direction: row !important;
				flex-direction: row !important;
			}
			.justify-content-center {
				-ms-flex-pack: center !important;
				justify-content: center !important;
			}
			.justify-content-between {
				-ms-flex-pack: justify !important;
				justify-content: space-between !important;
			}
			.align-items-center {
				-ms-flex-align: center !important;
				align-items: center !important;
			}
			.align-content-center {
				-ms-flex-line-pack: center !important;
				align-content: center !important;
			}
			.align-content-between {
				-ms-flex-line-pack: justify !important;
				align-content: space-between !important;
			}
			@media (min-width: 992px) {
				.flex-lg-row {
					-ms-flex-direction: row !important;
					flex-direction: row !important;
				}
				.justify-content-lg-center {
					-ms-flex-pack: center !important;
					justify-content: center !important;
				}
				.justify-content-lg-between {
					-ms-flex-pack: justify !important;
					justify-content: space-between !important;
				}
				.align-items-lg-center {
					-ms-flex-align: center !important;
					align-items: center !important;
				}
				.align-content-lg-center {
					-ms-flex-line-pack: center !important;
					align-content: center !important;
				}
				.align-content-lg-between {
					-ms-flex-line-pack: justify !important;
					align-content: space-between !important;
				}
			}
			@supports ((position: -webkit-sticky) or (position: sticky)) {
				.sticky-top {
					position: -webkit-sticky;
					position: sticky;
					top: 0;
					z-index: 1020;
				}
			}
			.sr-only {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				white-space: nowrap;
				border: 0;
			}
			.h-25 {
				height: 25% !important;
			}
			.h-50 {
				height: 50% !important;
			}
			.h-75 {
				height: 75% !important;
			}
			.h-100 {
				height: 100% !important;
			}
			.text-size-h1,
			.text-size-h2,
			.text-size-h3,
			.text-size-h4,
			.text-size-h5,
			.text-size-h6 {
				margin-bottom: 0 !important;
			}
			.text-justify {
				text-align: justify !important;
			}
			.text-center {
				text-align: center !important;
			}
			@media (min-width: 992px) {
				.text-lg-center {
					text-align: center !important;
				}
			}
			.text-white {
				color: #fff !important;
			}
			.text-body {
				color: #212529 !important;
			}
			.text-white-50 {
				color: rgba(255, 255, 255, 0.5) !important;
			}
			@media print {
				*,
				::after,
				::before {
					text-shadow: none !important;
					box-shadow: none !important;
				}
				a:not(.btn) {
					text-decoration: underline;
				}
				h2,
				h3 {
					orphans: 3;
					widows: 3;
				}
				h2,
				h3 {
					page-break-after: avoid;
				}
				@page {
					size: a3;
				}
				body {
					min-width: 992px !important;
				}
				.container {
					min-width: 992px !important;
				}
				.navbar {
					display: none;
				}
				.label {
					border: 1px solid #000;
				}
			}
			.bg-white {
				color: #000;
				background-color: #fff;
			}
			.bg-white .h1,
			.bg-white .h2,
			.bg-white .h3,
			.bg-white .h4,
			.bg-white .h5,
			.bg-white .h6,
			.bg-white .text-size-h1,
			.bg-white .text-size-h2,
			.bg-white .text-size-h3,
			.bg-white .text-size-h4,
			.bg-white .text-size-h5,
			.bg-white .text-size-h6,
			.bg-white h1,
			.bg-white h2,
			.bg-white h3,
			.bg-white h4,
			.bg-white h5,
			.bg-white h6 {
				color: inherit;
			}
			.bg-chili {
				color: #fff;
				background-color: #8b0015;
			}
			.bg-chili .h1,
			.bg-chili .h2,
			.bg-chili .h3,
			.bg-chili .h4,
			.bg-chili .h5,
			.bg-chili .h6,
			.bg-chili .text-size-h1,
			.bg-chili .text-size-h2,
			.bg-chili .text-size-h3,
			.bg-chili .text-size-h4,
			.bg-chili .text-size-h5,
			.bg-chili .text-size-h6,
			.bg-chili h1,
			.bg-chili h2,
			.bg-chili h3,
			.bg-chili h4,
			.bg-chili h5,
			.bg-chili h6 {
				color: inherit;
			}
			.text-white {
				color: #fff !important;
			}
			.text-chili {
				color: #8b0015 !important;
			}
			.h1,
			.h2,
			.text-size-h1,
			.text-size-h2,
			h1,
			h2 {
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
				color: #49595e;
				font-display: block;
			}
			.arizona-header {
				position: relative;
			}
			.btn-redbar .icon-text {
				display: block;
				margin: -5px;
				font-size: 10px;
				line-height: 10px;
			}
			.btn-redbar .icon {
				margin: -5px;
				font-size: 24px;
				line-height: 24px;
			}
			.btn.btn-redbar {
				width: 60px;
				height: 50px;
				padding: 0;
				color: #fff;
				background-color: #ab0520;
				border: 2px solid #ab0520;
			}
			.btn.btn-redbar:focus {
				background-color: #8b0015;
				border: 2px solid #8b0015;
				outline: 0;
				box-shadow: none;
			}
			body {
				color: #403635;
			}
			.h1,
			.h2,
			.text-size-h1,
			.text-size-h2,
			h1,
			h2 {
				margin: 1.042em 0 0.667em;
			}
			.h3,
			.h4,
			.h5,
			.h6,
			.text-size-h3,
			.text-size-h4,
			.text-size-h5,
			.text-size-h6,
			h3,
			h4,
			h5,
			h6 {
				margin: 1.042em 0 0.667em;
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
				color: #49595e;
				font-display: block;
			}
			a {
				font-weight: 700;
				text-decoration: underline;
			}
			.btn {
				font-weight: 500;
				text-transform: uppercase;
				text-decoration: none;
				letter-spacing: 0.04em;
				white-space: normal;
				border-width: 2px;
			}
			.btn-link {
				color: #8b0015;
			}
			.btn-group-block .dropdown-menu {
				min-width: 100%;
			}
			.dropdown-menu {
				color: #e2e9eb;
				background-color: #0c234b;
			}
			.dropdown-item {
				color: #fff;
				text-decoration: none;
			}
			.dropdown-item:focus,
			.dropdown-item:hover {
				color: #fff;
				background-color: #1e5288;
			}
			.dropdown-item:active {
				color: #0c234b;
				background-color: #fff;
			}
			.dropdown-item:disabled {
				color: #6c757d;
			}
			.nav-link {
				color: #1e5288;
				text-decoration: none;
			}
			.nav-link:focus,
			.nav-link:hover {
				color: #001c48;
			}
			.nav-link:active {
				color: #001c48;
			}
			.nav-link:active {
				background-color: #e9ecef;
			}
			.navbar {
				padding: 0 1rem;
			}
			.navbar-nav .nav-link {
				font-weight: 600;
				background-color: inherit;
				border: none;
			}
			.navbar-nav .nav-link {
				padding: 1.25rem 1.5rem;
			}
			.offcanvas-toggle {
				display: none;
			}
			@-webkit-keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 0.75;
				}
			}
			@keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 0.75;
				}
			}
			.navbar-offcanvas {
				position: fixed;
				top: 0;
				right: 0;
				z-index: 2000;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-direction: column;
				flex-direction: column;
				width: 325px;
				max-width: 90%;
				height: 100vh;
				max-height: 100vh;
				overflow-y: hidden;
				background-color: #0c234b;
				border: none;
				transition: -webkit-transform 0.3s ease-in-out;
				transition: transform 0.3s ease-in-out;
				transition: transform 0.3s ease-in-out,
					-webkit-transform 0.3s ease-in-out;
				-webkit-transform: translateX(100vw);
				transform: translateX(100vw);
			}
			:host([state="open"]) .navbar-offcanvas {
				-webkit-transform: translateX(0);
				transform: translateX(0);
				overflow-y: scroll;
			}
			.navbar-offcanvas.open {
				-webkit-transform: translateX(0);
				transform: translateX(0);
			}
			.navbar-offcanvas .navbar-offcanvas-header {
				display: block;
				width: 100%;
			}
			.navbar-offcanvas .navbar-offcanvas-home {
				font-weight: 400;
				color: #fff;
				text-decoration: none;
			}
			.navbar-offcanvas .navbar-offcanvas-search .form-control {
				height: auto;
				margin: 0;
				border: none;
			}
			.navbar-offcanvas
				.navbar-offcanvas-search
				.input-group
				input.form-control {
				height: 60px;
				padding-left: 20px;
			}
			.navbar-offcanvas
				.navbar-offcanvas-search
				.input-group
				.input-group-append
				> button.btn-search {
				height: 60px;
				width: 60px;
				font-size: 24px;
				border: 0;
				padding: 0;
			}
			.navbar-offcanvas .navbar-nav {
				width: 100%;
				overflow-y: auto;
			}
			.navbar-offcanvas .navbar-nav .nav-link {
				font-weight: 600;
			}
			.navbar-offcanvas ul.navbar-nav li.nav-item a.nav-link,
			.navbar-offcanvas .nav-item-parent .nav-link {
			}
			.navbar-offcanvas .nav-item .nav-link {
				padding: 12px 20px;
				color: #fff;
				text-align: left;
				width: 100%;
				min-height: 48px;
			}
			.navbar-offcanvas .dropdown-menu {
				padding: 0;
				margin: 0;
				background-color: rgba(255, 255, 255, 0.15);
				border: none;
			}
			.navbar-offcanvas .dropdown-menu .dropdown-item {
				padding: 14px 20px 14px 35px;
				white-space: normal;
			}
			.navbar-offcanvas .dropdown-toggle {
				display: -ms-flexbox;
				display: flex;
				-ms-flex-align: center;
				align-items: center;
				-ms-flex-pack: justify;
				justify-content: space-between;
				white-space: normal;
			}
			.navbar-offcanvas .dropdown-toggle::after {
				font-size: 1rem;
				vertical-align: unset;
				content: " ";
				border: none;
				margin-left: 20px;
				background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDI0IDI0JyBoZWlnaHQ9JzI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0cHgnIGZpbGw9JyNGRkZGRkYnPjxnPjxyZWN0IGZpbGw9J25vbmUnIGhlaWdodD0nMjQnIHdpZHRoPScyNCcvPjwvZz48Zz48Zz48cGF0aCBkPSdNMTksMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNlYxM3onLz48L2c+PC9nPjwvc3ZnPg==");
				height: 18px;
				width: 16px;
				background-size: cover;
				background-position: center;
			}
			.navbar-offcanvas .nav-item.show .dropdown-toggle::after {
				background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiLz48L3N2Zz4=");
			}
			.container .navbar-offcanvas.open {
				-webkit-transform: translateX(0);
				transform: translateX(0);
			}
			.btn-menu {
				width: 60px;
				height: 50px;
				border: 0;
				padding: 0;
				font-size: 10px;
				background-color: #ab0520;
			}
			.btn-menu:hover {
				background-color: #8b0015;
			}
			.btn-menu span.material-icons-sharp {
				display: block;
				font-size: 24px;
				line-height: 24px;
			}
			.btn-menu-offcanvas-nav {
				width: 60px;
				height: 50px;
				border: 0;
				padding: 0;
				font-size: 10px;
			}
			.btn-menu-offcanvas-nav span.material-icons-sharp {
				display: block;
				font-size: 24px;
				line-height: 24px;
			}
			@media (min-width: 992px) {
				.navbar-offcanvas {
					position: relative;
					display: -ms-flexbox;
					display: flex;
					-ms-flex-wrap: wrap;
					flex-wrap: wrap;
					-ms-flex-align: center;
					align-items: center;
					-ms-flex-pack: justify;
					justify-content: space-between;
					max-width: 100%;
					padding: 0 1rem;
					padding: initial;
					overflow-y: initial;
					background-color: initial;
					border: initial;
					-webkit-transform: initial;
					transform: initial;
					top: initial;
					right: initial;
					z-index: initial;
					-ms-flex-direction: initial;
					flex-direction: initial;
					width: initial;
					height: initial;
					transition: initial;
					border-top: 1px solid #e9ecef;
				}
				.navbar .navbar-offcanvas .container,
				.navbar .navbar-offcanvas .container-lg,
				.navbar-offcanvas .navbar .container,
				.navbar-offcanvas .navbar .container-lg {
					display: -ms-flexbox;
					display: flex;
					-ms-flex-wrap: wrap;
					flex-wrap: wrap;
					-ms-flex-align: center;
					align-items: center;
					-ms-flex-pack: justify;
					justify-content: space-between;
				}
				.navbar-offcanvas.open {
					-webkit-transform: initial;
					transform: initial;
				}
				.navbar-offcanvas .navbar-offcanvas-header {
					display: none;
				}
				.navbar-offcanvas .navbar-nav {
					display: -ms-flexbox;
					display: flex;
					-ms-flex-direction: column;
					flex-direction: column;
					padding-left: 0;
					margin-bottom: 0;
					list-style: none;
					width: initial;
					overflow-y: initial;
				}
				.navbar-offcanvas .navbar-nav .nav-link {
					display: block;
					padding: 0.5rem 1rem;
					font-weight: 600;
				}
				.navbar-offcanvas .navbar-nav .nav-link:focus,
				.navbar-offcanvas .navbar-nav .nav-link:hover {
					text-decoration: none;
				}
				.navbar-offcanvas .nav-item .nav-link {
					padding: 20px 14px 21px;
					color: #1e5288;
				}
				.navbar-offcanvas .nav-item .nav-link.show,
				.navbar-offcanvas .nav-item .nav-link:hover {
					color: #001c48;
					background-color: #f8f9fa;
				}
				.navbar-offcanvas .nav-item:hover {
					color: #001c48;
					background-color: #f8f9fa;
				}
				.navbar-offcanvas .nav-item:active .nav-link {
					color: #001c48;
					background-color: #e9ecef;
				}
				.navbar-offcanvas .dropdown-menu {
					padding: 0.5rem 0;
					margin: 0 0 0;
					background-color: #0c234b;
					border: none;
					border: 1px solid rgba(0, 0, 0, 0.15);
					position: absolute;
				}
				.navbar-offcanvas .dropdown-menu .dropdown-item {
					padding: 4px 22px;
					white-space: nowrap;
				}
				.navbar-offcanvas .dropdown-toggle {
					display: -ms-flexbox;
					display: flex;
					-ms-flex-align: center;
					align-items: center;
					-ms-flex-pack: justify;
					justify-content: space-between;
				}
				.navbar-offcanvas .dropdown-toggle::after {
					font-size: inherit;
					vertical-align: 0.255em;
					content: "";
					border-top: 0.3em solid;
					border-right: 0.3em solid transparent;
					border-bottom: 0;
					border-left: 0.3em solid transparent;
					margin-left: 0.225em;
					height: auto;
					width: auto;
				}
			}
		`}async firstUpdated(){await new Promise((t=>setTimeout(t,0))),this.addEventListener("open-az-offcanvas-menu",this.handleOpen),await new Promise((t=>setTimeout(t,0))),this.addEventListener("close-az-offcanvas-menu",this.handleClose)}handleClose=t=>{this.setAttribute("state","closed"),document.body.style.overflowY="initial"};handleOpen=t=>{this.setAttribute("state","open"),document.body.style.overflowY="hidden"};render(){return R`
			<div class="container">
				<nav class="navbar-offcanvas offcanvas-toggle" id="navbarOffcanvasDemo">
					<div class="navbar-offcanvas-header">
						<div
							class="bg-chili d-flex justify-content-between align-items-center"
						>
							<az-button
								theme="primary"
								redbar
								link="https://www.arizona.edu"
								aria-expanded="false"
								aria-haspopup="true"
								target="az-main-menu"
								aria-controls="navbarOffcanvasDemo"
							>
								<svg
									class="icon"
									title="home"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FFFFFF"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
								</svg>
								<span class="icon-text"> home </span>
							</az-button>
							<az-button
								theme="primary"
								redbar
								role="button"
								aria-expanded="false"
								aria-haspopup="true"
								target="az-main-menu"
								aria-controls="navbarOffcanvasDemo"
								event="close-az-offcanvas-menu"
							>
								<svg
									class="icon"
									title="close"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FFFFFF"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
									/>
								</svg>
								<span class="icon-text"> close </span>
							</az-button>
						</div>
						<section class="region region-navigation-offcanvas">
							<div
								class="search-block-form bg-white navbar-offcanvas-search"
								data-drupal-selector="search-block-form-2"
								id="block-az-barrio-offcanvas-searchform"
								role="search"
							>
								<form
									action="${this.thisUrl}/search/google"
									method="GET"
									id="search-block-form"
									accept-charset="UTF-8"
									class="search-form search-block-form"
								>
									<div class="input-group">
										<label for="edit-keys--2" class="sr-only">Search</label>
										<input
											title="Enter the terms you wish to search for."
											data-drupal-selector="edit-keys"
											type="search"
											id="edit-keys--2"
											name="keys"
											value=""
											size="15"
											maxlength="128"
											class="form-search form-control"
											placeholder="Search this site"
											aria-label="Search this site"
										/>
										<div
											data-drupal-selector="edit-actions"
											class="form-actions js-form-wrapper input-group-append"
											id="edit-actions--2"
										>
											<button
												data-drupal-selector="edit-submit"
												type="submit"
												id="edit-submit--2"
												value="Search"
												class="button js-form-submit form-submit btn"
											>
												<svg
													id="search-icon-menu"
													title="search"
													xmlns="http://www.w3.org/2000/svg"
													height="24px"
													viewBox="0 0 24 24"
													width="24px"
													fill="#212529"
												>
													<path d="M0 0h24v24H0V0z" fill="none" />
													<path
														d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
													/>
												</svg>
											</button>
										</div>
									</div>
								</form>
							</div>
						</section>
					</div>
					<section class="region region-navigation">
						<nav
							role="navigation"
							aria-labelledby="block-az-barrio-main-menu-menu"
							id="block-az-barrio-main-menu"
							class="block block-menu navigation menu--main"
						>
							<h2
								class="sr-only"
								id="block-az-barrio-main-menu-menu"
								slot
								name="brand"
							>
								${this.branding}
							</h2>
							<ul
								block="block-az-barrio-main-menu"
								class="clearfix navbar-nav flex-lg-row"
							>
								${this.isLoading?R`<li
											part="menu-item"
											class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open"
									  >
											<button
												role="button"
												aria-expanded="false"
												aria-haspopup="true"
												href="#"
												class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle"
											>
												<slot name="loading">${this.loadingMessage}</slot>
											</button>
									  </li>`:this.renderAzMenuLevel(this.tree)}
							</ul>
						</nav>
					</section>
				</nav>
			</div>
		`}}customElements.get("az-main-menu")||customElements.define("az-main-menu",Et)})();