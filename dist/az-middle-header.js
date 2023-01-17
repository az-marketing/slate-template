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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},o=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${o}--\x3e`,n=new RegExp(`${o}|${r}`),i="$lit$";class l{constructor(t,e){this.parts=[],this.element=e;const r=[],l=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,f=-1,b=0;const{strings:u,values:{length:m}}=t;for(;b<m;){const t=s.nextNode();if(null!==t){if(f++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let r=0;for(let t=0;t<o;t++)a(e[t].name,i)&&r++;for(;r-- >0;){const e=u[b],o=d.exec(e)[2],r=o.toLowerCase()+i,l=t.getAttribute(r);t.removeAttribute(r);const a=l.split(n);this.parts.push({type:"attribute",index:f,name:o,strings:a}),b+=a.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const o=t.parentNode,l=e.split(n),s=l.length-1;for(let e=0;e<s;e++){let r,n=l[e];if(""===n)r=p();else{const t=d.exec(n);null!==t&&a(t[2],i)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-i.length)+t[3]),r=document.createTextNode(n)}o.insertBefore(r,t),this.parts.push({type:"node",index:++f})}""===l[s]?(o.insertBefore(p(),t),r.push(t)):t.data=l[s],b+=s}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&f!==c||(f++,e.insertBefore(p(),t)),c=f,this.parts.push({type:"node",index:f}),null===t.nextSibling?t.data="":(r.push(t),f--),b++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),b++}}else s.currentNode=l.pop()}for(const t of r)t.parentNode.removeChild(t)}}const a=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},s=t=>-1!==t.index,p=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:o},parts:r}=t,n=document.createTreeWalker(o,133,null,!1);let i=b(r),l=r[i],a=-1,s=0;const p=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(p.push(t),null===d&&(d=t)),null!==d&&s++;void 0!==l&&l.index===a;)l.index=null!==d?-1:l.index-s,i=b(r,i),l=r[i]}p.forEach((t=>t.parentNode.removeChild(t)))}const f=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},b=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(s(e))return o}return-1};function u(t,e,o=null){const{element:{content:r},parts:n}=t;if(null==o)return void r.appendChild(e);const i=document.createTreeWalker(r,133,null,!1);let l=b(n),a=0,s=-1;for(;i.nextNode();){s++;for(i.currentNode===o&&(a=f(e),o.parentNode.insertBefore(e,o));-1!==l&&n[l].index===s;){if(a>0){for(;-1!==l;)n[l].index+=a,l=b(n,l);return}l=b(n,l)}}}
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
 */const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),h={},x={};
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
class w{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,l=0,a=0,p=n.nextNode();for(;l<r.length;)if(i=r[l],s(i)){for(;a<i.index;)a++,"TEMPLATE"===p.nodeName&&(o.push(p),n.currentNode=p.content),null===(p=n.nextNode())&&(n.currentNode=o.pop(),p=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(p.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(p,i.name,i.strings,this.options));l++}else this.__parts.push(void 0),l++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${o} `;class k{constructor(t,e,o,r){this.strings=t,this.values=e,this.type=o,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let l=0;l<t;l++){const t=this.strings[l],a=t.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===t.indexOf("--\x3e",a+1);const s=d.exec(t);e+=null===s?t+(n?v:r):t.substr(0,s.index)+s[1]+s[2]+i+s[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}const _=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new A(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let r="";for(let n=0;n<e;n++){r+=t[n];const e=o[n];if(void 0!==e){const t=e.value;if(_(t)||!S(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===h||_(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=h,t(this)}this.value!==h&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}const t=this.__pendingValue;t!==h&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof k?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===x?(this.value=x,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const o=new w(e,t.processor,this.options),r=o._clone();o.update(t.values),this.__commitNode(r),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,r=0;for(const n of t)o=e[r],void 0===o&&(o=new E(this.options),e.push(o),0===r?o.appendIntoPart(this):o.insertAfterPart(e[r-1])),o.setValue(n),o.commit(),r++;r<e.length&&(e.length=r,this.clear(o&&o.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}if(this.__pendingValue===h)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=h}}class O extends z{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends A{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class C{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}if(this.__pendingValue===h)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=P(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=h}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const P=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function I(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(o);return r=e.keyString.get(n),void 0===r&&(r=new l(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const j=new Map,R=new WeakMap,U=(t,o,r)=>{let n=R.get(o);void 0===n&&(e(o,o.firstChild),R.set(o,n=new E(Object.assign({templateFactory:I},r))),n.appendInto(o)),n.setValue(t),n.commit()};const L=new
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
class{handleAttributeExpressions(t,e,o,r){const n=e[0];if("."===n){return new O(t,e.slice(1),o).parts}if("@"===n)return[new C(t,e.slice(1),r.eventContext)];if("?"===n)return[new T(t,e.slice(1),o)];return new z(t,e,o).parts}handleTextExpression(t){return new E(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const V=(t,...e)=>new k(t,e,"html",L),W=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const D=t=>e=>{const r=W(e.type,t);let n=j.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(r,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(o);if(i=n.keyString.get(a),void 0===i){const o=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(o,t),i=new l(e,o),n.keyString.set(a,i)}return n.stringsArray.set(e.strings,i),i},G=["html","svg"],H=new Set,Z=(t,e,o)=>{H.add(t);const r=o?o.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,t);const l=document.createElement("style");for(let t=0;t<i;t++){const e=n[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{G.forEach((e=>{const o=j.get(W(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),c(t,o)}))}))})(t);const a=r.content;o?u(o,l,a.firstChild):a.insertBefore(l,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const s=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==s)e.insertBefore(s.cloneNode(!0),e.firstChild);else if(o){a.insertBefore(l,a.firstChild);const t=new Set;t.add(l),c(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Y=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:Y},J="finalized";class q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const r=this._attributeNameForProperty(o,e);void 0!==r&&(this._attributeToPropertyMap.set(r,o),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this[J]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=Y){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,r=e.converter||Q,n="function"==typeof r?r:r.fromAttribute;return n?n(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,r=e.converter;return(r&&r.toAttribute||Q.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=F){const r=this.constructor,n=r._attributeNameForProperty(t,o);if(void 0!==n){const t=r._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,r=o._attributeToPropertyMap.get(t);if(void 0!==r){const t=o.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let r=!0;if(void 0!==t){const n=this.constructor;o=o||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q[J]=!0;const $=Element.prototype;$.msMatchesSelector||$.webkitMatchesSelector;
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
const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class tt{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const o=e.reduce(((e,o,r)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]);return new tt(o,K)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ot={};class rt extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),r=[];o.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new tt(String(e),K)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ot&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ot}}rt.finalized=!0,rt.render=(t,o,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=R.has(o),l=B&&11===o.nodeType&&!!o.host,a=l&&!H.has(n),s=a?document.createDocumentFragment():o;if(U(t,s,Object.assign({templateFactory:D(n)},r)),a){const t=R.get(s);R.delete(s);const r=t.value instanceof w?t.value.template:void 0;Z(n,s,r),e(o,o.firstChild),o.appendChild(s),R.set(o,t)}!i&&l&&window.ShadyCSS.styleElement(o.host)},rt.shadowRootOptions={mode:"open"};const nt=Symbol("tabindex"),it=Symbol("oldTabindex"),lt=Symbol("newTabindex"),at=t=>class extends t{static get properties(){return{tabIndex:{converter:{fromAttribute:Number,toAttribute:t=>null==t?null:t.toString()},noAccessor:!0,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.hasAttribute("tabindex")||(this.tabIndex=0)}get tabIndex(){return this[nt]}set tabIndex(t){const e=this[nt];this[nt]=t,this.requestUpdate("tabIndex",e)}firstUpdated(){this.addEventListener("focusin",(t=>{t.composedPath()[0]===this&&this._focus()})),this.addEventListener("keydown",(t=>{!t.defaultPrevented&&t.shiftKey&&9===t.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),setTimeout((()=>{this._isShiftTabbing=!1}),0))}))}update(t){t.has("disabled")&&this._disabledChanged(this.disabled,t.get("disabled")),t.has("tabIndex")&&(this[lt]=this.tabIndex,this._tabIndexChanged(this.tabIndex)),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&(this.focusElement.disabled=this.disabled,this.disabled&&this.blur()),t.has("tabIndex")&&void 0!==this[lt]&&(this.focusElement.tabIndex=this[lt],this[lt]=void 0)}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this._isShiftTabbing||this.focusElement.focus()}focus(){this.disabled||this.focusElement.focus()}blur(){this.focusElement.blur()}_disabledChanged(t,e){t?(this[it]=this.tabIndex,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):e&&(void 0!==this[it]&&(this.tabIndex=this[it]),this.removeAttribute("aria-disabled"))}_tabIndexChanged(t){this.disabled&&t&&(-1!==this.tabIndex&&(this[it]=this.tabIndex),this.tabIndex=null)}};var st=et`
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
`;const pt=(t,e="")=>{window.dataLayer=window.dataLayer||[];var o=t.composedPath()[0],r=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:o.textContent||"",elementInnerText:o.innerText||"",title:"shadow-dom-link",element:o,elementClasses:o.className||"",elementId:o.id||"",elementLocation:e||"",elementTarget:o.target||"",elementUrl:o.href||o.action||"",originalEvent:t,parent:r||"",inShadowDom:!0}})};class dt extends(at(rt)){static get properties(){return{link:{type:String,reflect:!0},target:{type:String,reflect:!0},toggle:{type:String,reflect:!0},event:{type:String,reflect:!0},elmid:{type:String,reflect:!0},value:{type:String,reflect:!0}}}static get styles(){return[st]}constructor(){super()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o)}changeAttributes(){this.setAttribute("closed","true"),this.setAttribute("aria-expanded","true"),this.requestUpdate()}_handleClick(t){if(pt(t,""),this.event){let t=new Event(this.event);document.querySelector(this.target).dispatchEvent(t)}else{let t=new Event("open-az-offcanvas-menu");document.querySelector(this.target).dispatchEvent(t)}}render(){return V`
			${this.link?V`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${pt}" id="${this.elmid}">${this.value}<slot></slot></a>`:V`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
		`}firstUpdated(){super.firstUpdated(),this.setAttribute("role","button")}get focusElement(){return this.shadowRoot.querySelector(".button")}}function ct(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ft(t){return t instanceof ct(t).Element||t instanceof Element}function bt(t){return t instanceof ct(t).HTMLElement||t instanceof HTMLElement}function ut(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ct(t).ShadowRoot||t instanceof ShadowRoot)}customElements.get("az-button")||customElements.define("az-button",dt);Math.max,Math.min;var mt=Math.round;function gt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function ht(t,e,o){void 0===e&&(e=!1),void 0===o&&(o=!1);var r=t.getBoundingClientRect(),n=1,i=1;e&&bt(t)&&(n=t.offsetWidth>0&&mt(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&mt(r.height)/t.offsetHeight||1);var l=(ft(t)?ct(t):window).visualViewport,a=!!/^((?!chrome|android).)*safari/i.test(gt())&&o,s=(r.left+(a&&l?l.offsetLeft:0))/n,p=(r.top+(a&&l?l.offsetTop:0))/i,d=r.width/n,c=r.height/i;return{width:d,height:c,top:p,right:s+d,bottom:p+c,left:s,x:s,y:p}}function xt(t){var e=ct(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function wt(t){return t?(t.nodeName||"").toLowerCase():null}function yt(t){return((ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function vt(t){return ht(yt(t)).left+xt(t).scrollLeft}function kt(t){return ct(t).getComputedStyle(t)}function _t(t){var e=kt(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function St(t,e,o){void 0===o&&(o=!1);var r,n,i=bt(e),l=bt(e)&&function(t){var e=t.getBoundingClientRect(),o=mt(e.width)/t.offsetWidth||1,r=mt(e.height)/t.offsetHeight||1;return 1!==o||1!==r}(e),a=yt(e),s=ht(t,l,o),p={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(i||!i&&!o)&&(("body"!==wt(e)||_t(a))&&(p=(r=e)!==ct(r)&&bt(r)?{scrollLeft:(n=r).scrollLeft,scrollTop:n.scrollTop}:xt(r)),bt(e)?((d=ht(e,!0)).x+=e.clientLeft,d.y+=e.clientTop):a&&(d.x=vt(a))),{x:s.left+p.scrollLeft-d.x,y:s.top+p.scrollTop-d.y,width:s.width,height:s.height}}function zt(t){return"html"===wt(t)?t:t.assignedSlot||t.parentNode||(ut(t)?t.host:null)||yt(t)}function At(t){return["html","body","#document"].indexOf(wt(t))>=0?t.ownerDocument.body:bt(t)&&_t(t)?t:At(zt(t))}function Et(t,e){var o;void 0===e&&(e=[]);var r=At(t),n=r===(null==(o=t.ownerDocument)?void 0:o.body),i=ct(r),l=n?[i].concat(i.visualViewport||[],_t(r)?r:[]):r,a=e.concat(l);return n?a:a.concat(Et(zt(l)))}function Tt(t){return["table","td","th"].indexOf(wt(t))>=0}function Ot(t){return bt(t)&&"fixed"!==kt(t).position?t.offsetParent:null}function Nt(t){for(var e=ct(t),o=Ot(t);o&&Tt(o)&&"static"===kt(o).position;)o=Ot(o);return o&&("html"===wt(o)||"body"===wt(o)&&"static"===kt(o).position)?e:o||function(t){var e=/firefox/i.test(gt());if(/Trident/i.test(gt())&&bt(t)&&"fixed"===kt(t).position)return null;var o=zt(t);for(ut(o)&&(o=o.host);bt(o)&&["html","body"].indexOf(wt(o))<0;){var r=kt(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(t)||e}var Mt="top",Ct="bottom",Pt="right",It="left",jt="start",Rt="end",Ut=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Lt(t){var e=new Map,o=new Set,r=[];function n(t){o.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!o.has(t)){var r=e.get(t);r&&n(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){o.has(t.name)||n(t)})),r}function Vt(t){var e=Lt(t);return Ut.reduce((function(t,o){return t.concat(e.filter((function(t){return t.phase===o})))}),[])}function Wt(t){var e=t.reduce((function(t,e){var o=t[e.name];return t[e.name]=o?Object.assign({},o,e,{options:Object.assign({},o.options,e.options),data:Object.assign({},o.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function Dt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Gt(t){void 0===t&&(t={});var e=t,o=e.defaultModifiers,r=void 0===o?[]:o,n=e.defaultOptions,i=void 0===n?Bt:n;return function(t,e,o){void 0===o&&(o=i);var n,l,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},s=[],p=!1,d={state:a,setOptions:function(o){var n="function"==typeof o?o(a.options):o;c(),a.options=Object.assign({},i,a.options,n),a.scrollParents={reference:ft(t)?Et(t):t.contextElement?Et(t.contextElement):[],popper:Et(e)};var l=Vt(Wt([].concat(r,a.options.modifiers)));return a.orderedModifiers=l.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,o=t.options,r=void 0===o?{}:o,n=t.effect;if("function"==typeof n){var i=n({state:a,name:e,instance:d,options:r}),l=function(){};s.push(i||l)}})),d.update()},forceUpdate:function(){if(!p){var t=a.elements,e=t.reference,o=t.popper;if(Dt(e,o)){var r,n,i,l;a.rects={reference:St(e,Nt(o),"fixed"===a.options.strategy),popper:(r=o,n=ht(r),i=r.offsetWidth,l=r.offsetHeight,Math.abs(n.width-i)<=1&&(i=n.width),Math.abs(n.height-l)<=1&&(l=n.height),{x:r.offsetLeft,y:r.offsetTop,width:i,height:l})},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var s=0;s<a.orderedModifiers.length;s++)if(!0!==a.reset){var c=a.orderedModifiers[s],f=c.fn,b=c.options,u=void 0===b?{}:b,m=c.name;"function"==typeof f&&(a=f({state:a,options:u,name:m,instance:d})||a)}else a.reset=!1,s=-1}}},update:(n=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return l||(l=new Promise((function(t){Promise.resolve().then((function(){l=void 0,t(n())}))}))),l}),destroy:function(){c(),p=!0}};if(!Dt(t,e))return d;function c(){s.forEach((function(t){return t()})),s=[]}return d.setOptions(o).then((function(t){!p&&o.onFirstUpdate&&o.onFirstUpdate(t)})),d}}var Ht={passive:!0};function Zt(t){return t.split("-")[0]}function Qt(t){return t.split("-")[1]}function Yt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ft(t){var e,o=t.reference,r=t.element,n=t.placement,i=n?Zt(n):null,l=n?Qt(n):null,a=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2;switch(i){case Mt:e={x:a,y:o.y-r.height};break;case Ct:e={x:a,y:o.y+o.height};break;case Pt:e={x:o.x+o.width,y:s};break;case It:e={x:o.x-r.width,y:s};break;default:e={x:o.x,y:o.y}}var p=i?Yt(i):null;if(null!=p){var d="y"===p?"height":"width";switch(l){case jt:e[p]=e[p]-(o[d]/2-r[d]/2);break;case Rt:e[p]=e[p]+(o[d]/2-r[d]/2)}}return e}var Jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qt(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,l=t.offsets,a=t.position,s=t.gpuAcceleration,p=t.adaptive,d=t.roundOffsets,c=t.isFixed,f=l.x,b=void 0===f?0:f,u=l.y,m=void 0===u?0:u,g="function"==typeof d?d({x:b,y:m}):{x:b,y:m};b=g.x,m=g.y;var h=l.hasOwnProperty("x"),x=l.hasOwnProperty("y"),w=It,y=Mt,v=window;if(p){var k=Nt(o),_="clientHeight",S="clientWidth";if(k===ct(o)&&"static"!==kt(k=yt(o)).position&&"absolute"===a&&(_="scrollHeight",S="scrollWidth"),n===Mt||(n===It||n===Pt)&&i===Rt)y=Ct,m-=(c&&k===v&&v.visualViewport?v.visualViewport.height:k[_])-r.height,m*=s?1:-1;if(n===It||(n===Mt||n===Ct)&&i===Rt)w=Pt,b-=(c&&k===v&&v.visualViewport?v.visualViewport.width:k[S])-r.width,b*=s?1:-1}var z,A=Object.assign({position:a},p&&Jt),E=!0===d?function(t){var e=t.x,o=t.y,r=window.devicePixelRatio||1;return{x:mt(e*r)/r||0,y:mt(o*r)/r||0}}({x:b,y:m}):{x:b,y:m};return b=E.x,m=E.y,s?Object.assign({},A,((z={})[y]=x?"0":"",z[w]=h?"0":"",z.transform=(v.devicePixelRatio||1)<=1?"translate("+b+"px, "+m+"px)":"translate3d("+b+"px, "+m+"px, 0)",z)):Object.assign({},A,((e={})[y]=x?m+"px":"",e[w]=h?b+"px":"",e.transform="",e))}var $t=Gt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=void 0===n||n,l=r.resize,a=void 0===l||l,s=ct(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach((function(t){t.addEventListener("scroll",o.update,Ht)})),a&&s.addEventListener("resize",o.update,Ht),function(){i&&p.forEach((function(t){t.removeEventListener("scroll",o.update,Ht)})),a&&s.removeEventListener("resize",o.update,Ht)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,o=t.name;e.modifiersData[o]=Ft({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=void 0===r||r,i=o.adaptive,l=void 0===i||i,a=o.roundOffsets,s=void 0===a||a,p={placement:Zt(e.placement),variation:Qt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,qt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:s})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,qt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var o=e.styles[t]||{},r=e.attributes[t]||{},n=e.elements[t];bt(n)&&wt(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(t){var e=r[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],n=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:o[t]).reduce((function(t,e){return t[e]="",t}),{});bt(r)&&wt(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]}]}),Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.denormalize=Xt.parse=void 0;var Kt,te={},ee=te&&te.__extends||(Kt=function(t,e){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},Kt(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}Kt(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),oe=te&&te.__spreadArray||function(t,e){for(var o=0,r=e.length,n=t.length;o<r;o++,n++)t[n]=e[o];return t};Object.defineProperty(te,"__esModule",{value:!0}),te.Menu=void 0;var re={},ne=re&&re.__assign||function(){return ne=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},ne.apply(this,arguments)},ie=re&&re.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o},le=re&&re.__spreadArray||function(t,e){for(var o=0,r=e.length,n=t.length;o<r;o++,n++)t[n]=e[o];return t};Object.defineProperty(re,"__esModule",{value:!0}),re.Linkset=void 0;var ae=function(){function t(t){this.elements=t,this.size=t.length}return t.prototype.hasLinkTo=function(t){return this.elements.some((function(e){return e.rel===t}))},t.prototype.linkTo=function(t){return this.elements.find((function(e){return e.rel===t}))},t.prototype.linksTo=function(e){return new t(this.elements.filter((function(t){return t.rel===e})))},t.prototype.linksFrom=function(e){return new t(this.elements.filter((function(t){return t.anchor===e})))},t.prototype.linksWithAttribute=function(e){return new t(this.elements.filter((function(t){return Object.prototype.hasOwnProperty.call(t.attributes,e)})))},t.prototype.linksWithAttributeValue=function(e,o){return new t(this.linksWithAttribute(e).elements.filter((function(t){return(Array.isArray(t.attributes[e])?t.attributes[e]:[t.attributes[e]]).some((function(t){return typeof(e=t)==typeof(r=o)&&("string"==typeof e&&"string"==typeof r?e===r:e.value==e.value&&e.language==e.language);var e,r}))})))},t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.normalize=function(){var t={};return this.elements.forEach((function(e){var o=e.anchor,r=e.rel,n=ie(e,["anchor","rel"]);Object.hasOwnProperty.call(t,o)||(t[o]={}),Object.hasOwnProperty.call(t[o],r)||(t[o][r]=[]);var i=n.href,l=n.attributes,a=ne({href:i},l);t[o][r].push(a)})),{linkset:Object.entries(t).reduce((function(t,e){var o=e[0],r=e[1];return le(le([],t),[ne({anchor:o},r)])}),[])}},t}();re.Linkset=ae;var se={},pe=se&&se.__spreadArray||function(t,e){for(var o=0,r=e.length,n=t.length;o<r;o++,n++)t[n]=e[o];return t};Object.defineProperty(se,"__esModule",{value:!0}),se.buildTree=se.MenuElement=void 0;var de=function(){function t(t,e){void 0===e&&(e=[]),this.link=t,this.children=ce(pe([],e))}return Object.defineProperty(t.prototype,"title",{get:function(){return this.link.attributes.title},enumerable:!1,configurable:!0}),t}();function ce(t){if(t.length<2)return t.length?[new de(t.shift())]:[];t.sort((function(t,e){return t.attributes["drupal-menu-hierarchy"][0].localeCompare(e.attributes["drupal-menu-hierarchy"][0])}));var e,o=[],r=[];do{var n=t.shift();e?n.attributes["drupal-menu-hierarchy"][0].length>e.attributes["drupal-menu-hierarchy"][0].length?r.push(n):(o.push(new de(e,r)),e=n,r=[]):e=n}while(t.length);return o.push(new de(e,r)),o}se.MenuElement=de,se.buildTree=ce;var fe=function(t){function e(e,o){var r=t.call(this,o.elements)||this;return r.id=e,r.tree=se.buildTree(oe([],r.elements)),r}return ee(e,t),e.prototype.linksTo=function(o){return new e(this.id,t.prototype.linksTo.call(this,o))},e.prototype.linksFrom=function(o){return new e(this.id,t.prototype.linksTo.call(this,o))},e.prototype.linksWithAttribute=function(o){return new e(this.id,t.prototype.linksWithAttribute.call(this,o))},e.prototype.linksWithAttributeValue=function(o,r){return new e(this.id,t.prototype.linksWithAttributeValue.call(this,o,r))},e}(re.Linkset);te.Menu=fe;var be={},ue=be&&be.__assign||function(){return ue=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},ue.apply(this,arguments)},me=be&&be.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o};Object.defineProperty(be,"__esModule",{value:!0}),be.denormalize=be.parse=void 0;var ge={},he=ge&&ge.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o};Object.defineProperty(ge,"__esModule",{value:!0}),ge.Link=void 0;var xe=function(t){var e=t.anchor,o=t.rel,r=t.href,n=he(t,["anchor","rel","href"]);this.anchor=e,this.rel=o,this.href=r,this.attributes=n};function we(t){var e=[];return t.linkset.forEach((function(t){var o=t.anchor,r=me(t,["anchor"]);Object.keys(r).forEach((function(r){t[r].forEach((function(t){e.push(new ge.Link(ue({anchor:o,rel:r},t)))}))}))})),new re.Linkset(e)}function ye(t,e){var o=be.denormalize(t),r=[];e?r.push(e):o.linksWithAttribute("drupal-menu-machine-name").elements.forEach((function(t){r.includes(t.attributes["drupal-menu-machine-name"][0])||r.push(t.attributes["drupal-menu-machine-name"][0])}));var n=r.map((function(t){return new te.Menu(t,o.linksWithAttributeValue("drupal-menu-machine-name",t))}));return e?n.shift():n}ge.Link=xe,be.denormalize=we,be.parse=function(t){return we(JSON.parse(t))},Xt.denormalize=ye,Xt.parse=function(t,e){return ye(JSON.parse(t),e)};class ve extends rt{static get styles(){return et`
* {
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
}

.input-group .form-control, .input-group-addon, .input-group-btn {
    display: table-cell;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.btn {
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
  border-radius: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn {
  background-clip: border-box;
  font-weight: 700;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  letter-spacing: .04em;
  text-transform: uppercase;
  white-space: normal;
}

.input-group-addon, .input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #49595e;
  text-align: center;
  background-color: #fff;
  border: 1px solid #cbd1e0;
  border-radius: 0;
}

.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child>.btn, .input-group-btn:first-child>.btn-group>.btn, .input-group-btn:first-child>.dropdown-toggle, .input-group-btn:last-child>.btn-group:not(:last-child)>.btn, .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group .form-control, .input-group-addon, .input-group-btn {
  display: table-cell;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.form-control {
    display: block;
    width: 100%;
    height: 38px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    color: #49595e;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cbd1e0;
    border-radius: 0;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  }
  .form-control {
    border: 2px solid #cbd1e0;
  }
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button, select {
    text-transform: none;
  }
  button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  select.select-primary:active, select.select-primary:focus, select.select-primary:hover {
    box-shadow: none;
    outline: 0;
  }
  select.select-primary:focus, select.select-primary:hover {
      border-bottom: 3px solid #ab0520;
  }
.input-group-addon.input-group-addon-no-border {
  border: none;
}
select.select-primary {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #f4f6f9;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);  background-repeat: no-repeat;
  background-position: 95% 50%;
  background-position: calc(100% - 10px) 50%;
  border-top: 1px solid transparent;
  border-right: 0;
  border-bottom: 3px solid #cbd1e0;
  border-left: 0;
  border-radius: 0;
  box-shadow: none;
  color: #57585a;
  font-size: 16px;
  font-family: MiloWeb,sans-serif;
  font-weight: 700;
  letter-spacing: .25px;
  line-height: 1.5em;
  outline: none;
  text-indent: .01px;
  -webkit-transition: .15s all ease-in-out;
  transition: .15s all ease-in-out;
  text-overflow: '';
}

select.select-primary {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
  appearance: none;
  background-color: #f4f6f9;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);  background-repeat: no-repeat;
  background-position: 95% 50%;
  background-position: calc(100% - 10px) 50%;
  border-right: 0;
  border-bottom: 3px solid #cbd1e0;
  border-top: 0px solid white;
  border-left: 0;
  border-radius: 0;
  box-shadow: none;
  color: #57585a;
  font-size: 16px;
  font-family: MiloWeb,sans-serif;
  font-weight: 700;
  letter-spacing: .25px;
  line-height: 1.5em;
  outline: none;
  text-indent: .01px;
  -webkit-transition: .15s all ease-in-out;
  transition: .15s all ease-in-out;
  text-overflow: '';
}
.input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group {
  z-index: 2;
  margin-left: -2px;
  margin-top: 0;
  padding: 5px 8px;
}
.input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group {
  z-index: 2;
  margin-left: -1px;
}
.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child>.btn-group:not(:first-child)>.btn, .input-group-btn:first-child>.btn:not(:first-child), .input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group>.btn, .input-group-btn:last-child>.dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-btn>.btn {
  position: relative;
}

.input-group-btn>.btn {
  position: relative;
}
.btn.disabled, .btn[disabled], fieldset[disabled] .btn {
  cursor: not-allowed;
  opacity: .65;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-blue, .btn-primary {
  color: #fff;
  background-color: #0c234b;
  border-color: #0c234b;
  border-width: 2px;
  background-clip: border-box;
  -webkit-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
}

      #tooltip[data-show] {
        display: block;
        font-size: 14px;
      }
      #tooltip{
        display: none;
        font-size: 14px;
      }
      #tooltip[data-hide]{
        display: none;
      }

      #arrow,
      #arrow::before {
        position: absolute;
        width: 8px;
        height: 8px;
        background: inherit;
      }

      #arrow {
        visibility: hidden;

      }

      #arrow::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
        border: 1px solid #0c234b;

      }

      #tooltip[data-popper-placement^="top"] > #arrow {
        bottom: -5px;

      }
      #tooltip[data-popper-placement^="top"] > #arrow:before {

      border-top: 1px solid transparent;
      border-left: 1px solid transparent;
      }
      #tooltip[data-popper-placement^='bottom'] > #arrow {
        top: -4px;
      }

      #tooltip[data-popper-placement^='left'] > #arrow {
        right: -4px;
      }

      #tooltip[data-popper-placement^='right'] > #arrow {
        left: -4px;
      }
      #tooltip {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1060;
        display: none;
        max-width: 276px;
        font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        text-align: start;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-break: normal;
        word-spacing: normal;
        white-space: normal;
        line-break: auto;
        font-size: 1rem;
        overflow-wrap: break-word;
        background-color: rgb(255, 255, 255);
        background-clip: padding-box;
        border: 1px solid #0c234b;
        padding: 5px;
        font-size: 18px;


    }

      #arrow {
        position: absolute;
        display: block;
        width: 1rem;
        height: 0.5rem;
        margin: 0 0.3rem;
      }

      .popover .arrow::before, .popover .arrow::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;

      }

      .bs-popover-top, .bs-popover-auto[x-placement^="top"] {
        margin-bottom: 0.5rem;
      }

      .bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow {
        bottom: calc(-0.5rem - 1px);
      }

      .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {
        bottom: 0;
        border-width: 0.5rem 0.5rem 0;
        border-top-color: rgba(0, 0, 0, 0.25);
      }

      .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {
        bottom: 1px;
        border-width: 0.5rem 0.5rem 0;
        border-top-color: #fff;
      }

      .bs-popover-right, .bs-popover-auto[x-placement^="right"] {
        margin-left: 0.5rem;
      }

      .bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow {
        left: calc(-0.5rem - 1px);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
      }

      .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {
        left: 0;
        border-width: 0.5rem 0.5rem 0.5rem 0;
        border-right-color: rgba(0, 0, 0, 0.25);
      }

      .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {
        left: 1px;
        border-width: 0.5rem 0.5rem 0.5rem 0;
        border-right-color: #fff;
      }

      .bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {
        margin-top: 0.5rem;
      }

      .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow {
        top: calc(-0.5rem - 1px);
      }

      .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {
        top: 0;
        border-width: 0 0.5rem 0.5rem 0.5rem;
        border-bottom-color: rgba(0, 0, 0, 0.25);
      }

      .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {
        top: 1px;
        border-width: 0 0.5rem 0.5rem 0.5rem;
        border-bottom-color: #fff;
      }

      .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 1rem;
        margin-left: -0.5rem;
        content: "";
        border-bottom: 1px solid #f7f7f7;
      }

      .bs-popover-left, .bs-popover-auto[x-placement^="left"] {
        margin-right: 0.5rem;
      }

      .bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow {
        right: calc(-0.5rem - 1px);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
      }

      .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {
        right: 0;
        border-width: 0.5rem 0 0.5rem 0.5rem;
        border-left-color: rgba(0, 0, 0, 0.25);
      }

      .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {
        right: 1px;
        border-width: 0.5rem 0 0.5rem 0.5rem;
        border-left-color: #fff;
      }

      .popover-header {
        padding: 0.5rem 0.75rem;
        margin-bottom: 0;
        font-size: 1rem;
        background-color: #f7f7f7;
        border-bottom: 1px solid #ebebeb;
      }

      .popover-header:empty {
        display: none;
      }

      .popover-body {
        padding: 0.5rem 0.75rem;
        color: #212529;
      }

      .input-group {
        position: relative;
        display: table;
        border-collapse: separate;
    }
@charset "UTF-8"; /*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

*,
::after,
::before {
    box-sizing: border-box;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}
header {
    display: block;
}
body {
    margin: 0;
    font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
[tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
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
button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}
button,
input,
select {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button,
input {
    overflow: visible;
}
button,
select {
    text-transform: none;
}
[role="button"] {
    cursor: pointer;
}
select {
    word-wrap: normal;
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
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.col-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}
.col-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}
.col-3 {
    flex: 0 0 25%;
    max-width: 25%;
}
.col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
.col-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}
.col-6 {
    flex: 0 0 50%;
    max-width: 50%;
}
.col-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}
.col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}
.col-9 {
    flex: 0 0 75%;
    max-width: 75%;
}
.col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}
.col-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}
.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}
.col-xs-offset-1,
.offset-1 {
    margin-left: 8.333333%;
}
.col-xs-offset-2,
.offset-2 {
    margin-left: 16.666667%;
}
.col-xs-offset-3,
.offset-3 {
    margin-left: 25%;
}
.col-xs-offset-4,
.offset-4 {
    margin-left: 33.333333%;
}
.col-xs-offset-5,
.offset-5 {
    margin-left: 41.666667%;
}
.col-xs-offset-6,
.offset-6 {
    margin-left: 50%;
}
.col-xs-offset-7,
.offset-7 {
    margin-left: 58.333333%;
}
.col-xs-offset-8,
.offset-8 {
    margin-left: 66.666667%;
}
.col-xs-offset-9,
.offset-9 {
    margin-left: 75%;
}
.col-xs-offset-10,
.offset-10 {
    margin-left: 83.333333%;
}
.col-xs-offset-11,
.offset-11 {
    margin-left: 91.666667%;
}
@media (min-width: 576px) {
    .col-sm {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-sm-1 {
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-sm-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-sm-5 {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-sm-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-sm-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-sm-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-sm-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-sm-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .offset-sm-0 {
        margin-left: 0;
    }
    .col-sm-offset-1,
    .offset-sm-1 {
        margin-left: 8.333333%;
    }
    .col-sm-offset-2,
    .offset-sm-2 {
        margin-left: 16.666667%;
    }
    .col-sm-offset-3,
    .offset-sm-3 {
        margin-left: 25%;
    }
    .col-sm-offset-4,
    .offset-sm-4 {
        margin-left: 33.333333%;
    }
    .col-sm-offset-5,
    .offset-sm-5 {
        margin-left: 41.666667%;
    }
    .col-sm-offset-6,
    .offset-sm-6 {
        margin-left: 50%;
    }
    .col-sm-offset-7,
    .offset-sm-7 {
        margin-left: 58.333333%;
    }
    .col-sm-offset-8,
    .offset-sm-8 {
        margin-left: 66.666667%;
    }
    .col-sm-offset-9,
    .offset-sm-9 {
        margin-left: 75%;
    }
    .col-sm-offset-10,
    .offset-sm-10 {
        margin-left: 83.333333%;
    }
    .col-sm-offset-11,
    .offset-sm-11 {
        margin-left: 91.666667%;
    }
}
@media (min-width: 768px) {
    .col-md {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-md-1 {
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-md-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-md-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-md-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-md-5 {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-md-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-md-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-md-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-md-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-md-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-md-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .offset-md-0 {
        margin-left: 0;
    }
    .col-md-offset-1,
    .offset-md-1 {
        margin-left: 8.333333%;
    }
    .col-md-offset-2,
    .offset-md-2 {
        margin-left: 16.666667%;
    }
    .col-md-offset-3,
    .offset-md-3 {
        margin-left: 25%;
    }
    .col-md-offset-4,
    .offset-md-4 {
        margin-left: 33.333333%;
    }
    .col-md-offset-5,
    .offset-md-5 {
        margin-left: 41.666667%;
    }
    .col-md-offset-6,
    .offset-md-6 {
        margin-left: 50%;
    }
    .col-md-offset-7,
    .offset-md-7 {
        margin-left: 58.333333%;
    }
    .col-md-offset-8,
    .offset-md-8 {
        margin-left: 66.666667%;
    }
    .col-md-offset-9,
    .offset-md-9 {
        margin-left: 75%;
    }
    .col-md-offset-10,
    .offset-md-10 {
        margin-left: 83.333333%;
    }
    .col-md-offset-11,
    .offset-md-11 {
        margin-left: 91.666667%;
    }
}
@media (min-width: 992px) {
    .col-lg {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-lg-1 {
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-lg-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-lg-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lg-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-lg-5 {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lg-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-lg-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lg-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-lg-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-lg-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .offset-lg-0 {
        margin-left: 0;
    }
    .col-lg-offset-1,
    .offset-lg-1 {
        margin-left: 8.333333%;
    }
    .col-lg-offset-2,
    .offset-lg-2 {
        margin-left: 16.666667%;
    }
    .col-lg-offset-3,
    .offset-lg-3 {
        margin-left: 25%;
    }
    .col-lg-offset-4,
    .offset-lg-4 {
        margin-left: 33.333333%;
    }
    .col-lg-offset-5,
    .offset-lg-5 {
        margin-left: 41.666667%;
    }
    .col-lg-offset-6,
    .offset-lg-6 {
        margin-left: 50%;
    }
    .col-lg-offset-7,
    .offset-lg-7 {
        margin-left: 58.333333%;
    }
    .col-lg-offset-8,
    .offset-lg-8 {
        margin-left: 66.666667%;
    }
    .col-lg-offset-9,
    .offset-lg-9 {
        margin-left: 75%;
    }
    .col-lg-offset-10,
    .offset-lg-10 {
        margin-left: 83.333333%;
    }
    .col-lg-offset-11,
    .offset-lg-11 {
        margin-left: 91.666667%;
    }
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
.form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
}
.form-control:-ms-input-placeholder {
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
select.form-control:focus::-ms-value {
    color: #495057;
    background-color: #fff;
}
.col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
.col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5;
}
.col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
    line-height: 1.5;
}
.form-control-sm {
    height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
}
.form-control-lg {
    height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
}
select.form-control[multiple],
select.form-control[size] {
    height: auto;
}
.form-group {
    margin-bottom: 1rem;
}
.form-text {
    display: block;
    margin-top: 0.25rem;
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
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
.btn.focus,
.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
}
.btn.disabled,
.btn:disabled {
    opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
a.btn.disabled {
    pointer-events: none;
}
.btn-info {
    color: #212529;
    background-color: #81d3eb;
    border-color: #81d3eb;
}
.btn-info:hover {
    color: #212529;
    background-color: #60c7e6;
    border-color: #55c4e4;
}
.btn-info.focus,
.btn-info:focus {
    color: #212529;
    background-color: #60c7e6;
    border-color: #55c4e4;
    box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);
}
.btn-info.disabled,
.btn-info:disabled {
    color: #212529;
    background-color: #81d3eb;
    border-color: #81d3eb;
}
.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active {
    color: #212529;
    background-color: #55c4e4;
    border-color: #4ac0e2;
}
.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);
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
.btn-link.focus,
.btn-link:focus {
    text-decoration: underline;
}
.btn-link.disabled,
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
.btn-group-sm > .btn,
.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
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
.btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}
.btn-group > .btn {
    position: relative;
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
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
}
.input-group > .form-control {
    position: relative;
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
.input-group-btn {
    display: flex;
}
.input-group-btn .btn {
    position: relative;
    z-index: 2;
}
.input-group-btn .btn:focus {
    z-index: 3;
}
.input-group-btn .btn + .btn,
.input-group-btn .btn + .input-group-text,
.input-group-btn .input-group-text + .btn,
.input-group-btn .input-group-text + .input-group-text {
    margin-left: -1px;
}
.input-group-btn {
    margin-right: -1px;
}
.input-group-text {
    display: flex;
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
.input-group-lg > .input-group-btn > .btn,
.input-group-lg > .input-group-btn > .input-group-text {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
}
.input-group-sm > .form-control:not(textarea) {
    height: calc(1.5em + 0.5rem + 2px);
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-btn > .btn,
.input-group-sm > .input-group-btn > .input-group-text {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
}
.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #1e5288;
    background-color: #fff;
    border: 1px solid #dee2e6;
}
.page-link:hover {
    z-index: 2;
    color: #001c48;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
.page-link:focus {
    z-index: 3;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
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
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
.label-info {
    color: #212529;
    background-color: #81d3eb;
}
a.label-info:focus,
a.label-info:hover {
    color: #212529;
    background-color: #55c4e4;
}
a.focus.label-info,
a.label-info:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(129, 211, 235, 0.5);
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
.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 1rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.popover-header {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
}
.popover-header:empty {
    display: none;
}
.popover-body {
    padding: 0.5rem 0.75rem;
    color: #212529;
}
@-webkit-keyframes spinner-border {
    to {
        transform: rotate(360deg);
    }
}
@keyframes spinner-border {
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes spinner-grow {
    0% {
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
    }
}
@keyframes spinner-grow {
    0% {
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
    }
}
.border {
    border: 1px solid #dee2e6 !important;
}
.border-top {
    border-top: 1px solid #dee2e6 !important;
}
.border-right {
    border-right: 1px solid #dee2e6 !important;
}
.border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
}
.border-left {
    border-left: 1px solid #dee2e6 !important;
}
.border-0 {
    border: 0 !important;
}
.border-top-0 {
    border-top: 0 !important;
}
.border-right-0 {
    border-right: 0 !important;
}
.border-bottom-0 {
    border-bottom: 0 !important;
}
.border-left-0 {
    border-left: 0 !important;
}
.border-info {
    border-color: #81d3eb !important;
}
.clearfix::after {
    display: block;
    clear: both;
    content: "";
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
.page-header {
    margin-bottom: 1.5rem !important;
}
.page-header {
    margin-top: 3rem !important;
}
.page-header {
    padding-bottom: 1rem !important;
}
.text-left {
    text-align: left !important;
}
.text-right {
    text-align: right !important;
}
.text-center {
    text-align: center !important;
}
@media (min-width: 576px) {
    .text-sm-left {
        text-align: left !important;
    }
    .text-sm-right {
        text-align: right !important;
    }
    .text-sm-center {
        text-align: center !important;
    }
}
@media (min-width: 768px) {
    .text-md-left {
        text-align: left !important;
    }
    .text-md-right {
        text-align: right !important;
    }
    .text-md-center {
        text-align: center !important;
    }
}
@media (min-width: 992px) {
    .text-lg-left {
        text-align: left !important;
    }
    .text-lg-right {
        text-align: right !important;
    }
    .text-lg-center {
        text-align: center !important;
    }
}
.text-info {
    color: #81d3eb !important;
}
a.text-info:focus,
a.text-info:hover {
    color: #3fbce1 !important;
}
.text-body {
    color: #212529 !important;
}
.text-reset {
    color: inherit !important;
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
    @page {
        size: a3;
    }
    body {
        min-width: 992px !important;
    }
    .label {
        border: 1px solid #000;
    }
}
.text-primary {
    color: #0c234b !important;
}
.text-info {
    color: #1e5288 !important;
}
.arizona-header {
    position: relative;
}
body {
    color: #403635;
}
a {
    font-weight: 700;
    text-decoration: underline;
}
.label-info {
    color: #001c48;
    background-color: #81d3eb;
}
.label-default {
    color: #fff;
    background-color: #8b0015;
}
.label-primary {
    color: #fff;
    background-color: #0c234b;
}
.btn {
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.04em;
    white-space: normal;
    border-width: 2px;
}
.btn-info {
    color: #001c48;
}
.btn-link {
    color: #8b0015;
}
.btn-default {
    color: #fff;
    background-color: #8b0015;
}
.btn-default:hover {
    color: #fff;
    background-color: #ab0520;
}
.btn-default:active {
    background-color: #a50019;
}
.btn-primary {
    color: #fff;
    background-color: #0c234b;
}
.btn-primary:hover {
    color: #fff;
    background-color: #1e5288;
}
.btn-primary:active {
    background-color: #133877;
}
.btn-hollow-default {
    color: #8b0015;
    border-color: #8b0015;
}
.btn-hollow-default:hover {
    color: #fff;
    background-color: #8b0015;
}
.btn-hollow-primary {
    color: #0c234b;
    border-color: #0c234b;
}
.btn-hollow-primary:hover {
    color: #fff;
    background-color: #0c234b;
}
.btn-info:hover {
    color: #001c48;
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
.page-link {
    color: #1e5288;
}
.page-link:hover {
    color: #001c48;
}
@charset "UTF-8";
@import url(https://cdn.uadigital.arizona.edu/lib/ua-brand-fonts/1.0.0/milo.min.css); /*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
}
header,
menu {
    display: block;
}
[hidden] {
    display: none;
}
a {
    background-color: transparent;
}
a:active,
a:hover {
    outline: 0;
}
button,
input,
select {
    color: inherit;
    font: inherit;
    margin: 0;
}
button {
    overflow: visible;
}
button,
select {
    text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}
button[disabled],
html input[disabled] {
    cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
input {
    line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}
input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
} /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
    *,
    :after,
    :before {
        color: #000 !important;
        text-shadow: none !important;
        background: 0 0 !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
    a,
    a:visited {
        text-decoration: underline;
    }
    a[href]:after {
        content: " (" attr(href) ")";
    }
    a[href^="#"]:after,
    a[href^="javascript:"]:after {
        content: "";
    }
    .label {
        border: 1px solid #000;
    }
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:after,
:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    font-size: 10px;
    -webkit-tap-highlight-color: transparent;
}
body {
    font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #403635;
    background-color: #fff;
}
button,
input,
select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
a {
    color: #8b0015;
    text-decoration: none;
}
a:focus,
a:hover {
    color: #8b0015;
    text-decoration: underline;
}
a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
[role="button"] {
    cursor: pointer;
}
.text-left {
    text-align: left;
}
.text-right {
    text-align: right;
}
.text-center {
    text-align: center;
}
.text-primary {
    color: #0c234b;
}
a.text-primary:focus,
a.text-primary:hover {
    color: #050e1f;
}
.text-info {
    color: #001c48;
}
a.text-info:focus,
a.text-info:hover {
    color: #000815;
}
.page-header {
    padding-bottom: 11px;
    margin: 48px 0 24px;
    border-bottom: 1px solid #fff;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 16px;
    padding-left: 16px;
}
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
    float: left;
}
.col-xs-1 {
    width: 8.333333%;
}
.col-xs-2 {
    width: 16.666667%;
}
.col-xs-3 {
    width: 25%;
}
.col-xs-4 {
    width: 33.333333%;
}
.col-xs-5 {
    width: 41.666667%;
}
.col-xs-6 {
    width: 50%;
}
.col-xs-7 {
    width: 58.333333%;
}
.col-xs-8 {
    width: 66.666667%;
}
.col-xs-9 {
    width: 75%;
}
.col-xs-10 {
    width: 83.333333%;
}
.col-xs-11 {
    width: 91.666667%;
}
.col-xs-12 {
    width: 100%;
}
.col-xs-offset-0 {
    margin-left: 0;
}
.col-xs-offset-1 {
    margin-left: 8.333333%;
}
.col-xs-offset-2 {
    margin-left: 16.666667%;
}
.col-xs-offset-3 {
    margin-left: 25%;
}
.col-xs-offset-4 {
    margin-left: 33.333333%;
}
.col-xs-offset-5 {
    margin-left: 41.666667%;
}
.col-xs-offset-6 {
    margin-left: 50%;
}
.col-xs-offset-7 {
    margin-left: 58.333333%;
}
.col-xs-offset-8 {
    margin-left: 66.666667%;
}
.col-xs-offset-9 {
    margin-left: 75%;
}
.col-xs-offset-10 {
    margin-left: 83.333333%;
}
.col-xs-offset-11 {
    margin-left: 91.666667%;
}
.col-xs-offset-12 {
    margin-left: 100%;
}
@media (min-width: 768px) {
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9 {
        float: left;
    }
    .col-sm-1 {
        width: 8.333333%;
    }
    .col-sm-2 {
        width: 16.666667%;
    }
    .col-sm-3 {
        width: 25%;
    }
    .col-sm-4 {
        width: 33.333333%;
    }
    .col-sm-5 {
        width: 41.666667%;
    }
    .col-sm-6 {
        width: 50%;
    }
    .col-sm-7 {
        width: 58.333333%;
    }
    .col-sm-8 {
        width: 66.666667%;
    }
    .col-sm-9 {
        width: 75%;
    }
    .col-sm-10 {
        width: 83.333333%;
    }
    .col-sm-11 {
        width: 91.666667%;
    }
    .col-sm-12 {
        width: 100%;
    }
    .col-sm-offset-0 {
        margin-left: 0;
    }
    .col-sm-offset-1 {
        margin-left: 8.333333%;
    }
    .col-sm-offset-2 {
        margin-left: 16.666667%;
    }
    .col-sm-offset-3 {
        margin-left: 25%;
    }
    .col-sm-offset-4 {
        margin-left: 33.333333%;
    }
    .col-sm-offset-5 {
        margin-left: 41.666667%;
    }
    .col-sm-offset-6 {
        margin-left: 50%;
    }
    .col-sm-offset-7 {
        margin-left: 58.333333%;
    }
    .col-sm-offset-8 {
        margin-left: 66.666667%;
    }
    .col-sm-offset-9 {
        margin-left: 75%;
    }
    .col-sm-offset-10 {
        margin-left: 83.333333%;
    }
    .col-sm-offset-11 {
        margin-left: 91.666667%;
    }
    .col-sm-offset-12 {
        margin-left: 100%;
    }
}
@media (min-width: 992px) {
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9 {
        float: left;
    }
    .col-md-1 {
        width: 8.333333%;
    }
    .col-md-2 {
        width: 16.666667%;
    }
    .col-md-3 {
        width: 25%;
    }
    .col-md-4 {
        width: 33.333333%;
    }
    .col-md-5 {
        width: 41.666667%;
    }
    .col-md-6 {
        width: 50%;
    }
    .col-md-7 {
        width: 58.333333%;
    }
    .col-md-8 {
        width: 66.666667%;
    }
    .col-md-9 {
        width: 75%;
    }
    .col-md-10 {
        width: 83.333333%;
    }
    .col-md-11 {
        width: 91.666667%;
    }
    .col-md-12 {
        width: 100%;
    }
    .col-md-offset-0 {
        margin-left: 0;
    }
    .col-md-offset-1 {
        margin-left: 8.333333%;
    }
    .col-md-offset-2 {
        margin-left: 16.666667%;
    }
    .col-md-offset-3 {
        margin-left: 25%;
    }
    .col-md-offset-4 {
        margin-left: 33.333333%;
    }
    .col-md-offset-5 {
        margin-left: 41.666667%;
    }
    .col-md-offset-6 {
        margin-left: 50%;
    }
    .col-md-offset-7 {
        margin-left: 58.333333%;
    }
    .col-md-offset-8 {
        margin-left: 66.666667%;
    }
    .col-md-offset-9 {
        margin-left: 75%;
    }
    .col-md-offset-10 {
        margin-left: 83.333333%;
    }
    .col-md-offset-11 {
        margin-left: 91.666667%;
    }
    .col-md-offset-12 {
        margin-left: 100%;
    }
}
@media (min-width: 1200px) {
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9 {
        float: left;
    }
    .col-lg-1 {
        width: 8.333333%;
    }
    .col-lg-2 {
        width: 16.666667%;
    }
    .col-lg-3 {
        width: 25%;
    }
    .col-lg-4 {
        width: 33.333333%;
    }
    .col-lg-5 {
        width: 41.666667%;
    }
    .col-lg-6 {
        width: 50%;
    }
    .col-lg-7 {
        width: 58.333333%;
    }
    .col-lg-8 {
        width: 66.666667%;
    }
    .col-lg-9 {
        width: 75%;
    }
    .col-lg-10 {
        width: 83.333333%;
    }
    .col-lg-11 {
        width: 91.666667%;
    }
    .col-lg-12 {
        width: 100%;
    }
    .col-lg-offset-0 {
        margin-left: 0;
    }
    .col-lg-offset-1 {
        margin-left: 8.333333%;
    }
    .col-lg-offset-2 {
        margin-left: 16.666667%;
    }
    .col-lg-offset-3 {
        margin-left: 25%;
    }
    .col-lg-offset-4 {
        margin-left: 33.333333%;
    }
    .col-lg-offset-5 {
        margin-left: 41.666667%;
    }
    .col-lg-offset-6 {
        margin-left: 50%;
    }
    .col-lg-offset-7 {
        margin-left: 58.333333%;
    }
    .col-lg-offset-8 {
        margin-left: 66.666667%;
    }
    .col-lg-offset-9 {
        margin-left: 75%;
    }
    .col-lg-offset-10 {
        margin-left: 83.333333%;
    }
    .col-lg-offset-11 {
        margin-left: 91.666667%;
    }
    .col-lg-offset-12 {
        margin-left: 100%;
    }
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
input[type="search"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
input[type="checkbox"],
input[type="radio"] {
    margin: 4px 0 0;
    line-height: normal;
}
input[type="checkbox"].disabled,
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="radio"][disabled] {
    cursor: not-allowed;
}
input[type="file"] {
    display: block;
}
input[type="range"] {
    display: block;
    width: 100%;
}
select[multiple],
select[size] {
    height: auto;
}
input[type="checkbox"]:focus,
input[type="file"]:focus,
input[type="radio"]:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}
.form-control {
    display: block;
    width: 100%;
    height: 38px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    color: #49595e;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cbd1e0;
    border-radius: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}
.form-control:focus {
    border-color: #9eabae;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(158, 171, 174, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(158, 171, 174, 0.6);
}
.form-control::-moz-placeholder {
    color: #49595e;
    opacity: 1;
}
.form-control:-ms-input-placeholder {
    color: #49595e;
}
.form-control::-webkit-input-placeholder {
    color: #49595e;
}
.form-control::-ms-expand {
    background-color: transparent;
    border: 0;
}
.form-control[disabled],
.form-control[readonly] {
    background-color: #fff;
    opacity: 1;
}
.form-control[disabled] {
    cursor: not-allowed;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="date"].form-control,
    input[type="datetime-local"].form-control,
    input[type="month"].form-control,
    input[type="time"].form-control {
        line-height: 38px;
    }
    .input-group-sm input[type="date"],
    .input-group-sm input[type="datetime-local"],
    .input-group-sm input[type="month"],
    .input-group-sm input[type="time"],
    .input-group-sm > .input-group-btn > input.btn[type="date"],
    .input-group-sm > .input-group-btn > input.btn[type="datetime-local"],
    .input-group-sm > .input-group-btn > input.btn[type="month"],
    .input-group-sm > .input-group-btn > input.btn[type="time"],
    .input-group-sm > input.form-control[type="date"],
    .input-group-sm > input.form-control[type="datetime-local"],
    .input-group-sm > input.form-control[type="month"],
    .input-group-sm > input.form-control[type="time"],
    .input-group-sm > input.input-group-addon[type="date"],
    .input-group-sm > input.input-group-addon[type="datetime-local"],
    .input-group-sm > input.input-group-addon[type="month"],
    .input-group-sm > input.input-group-addon[type="time"],
    input[type="date"].input-sm,
    input[type="datetime-local"].input-sm,
    input[type="month"].input-sm,
    input[type="time"].input-sm {
        line-height: 33px;
    }
    .input-group-lg input[type="date"],
    .input-group-lg input[type="datetime-local"],
    .input-group-lg input[type="month"],
    .input-group-lg input[type="time"],
    .input-group-lg > .input-group-btn > input.btn[type="date"],
    .input-group-lg > .input-group-btn > input.btn[type="datetime-local"],
    .input-group-lg > .input-group-btn > input.btn[type="month"],
    .input-group-lg > .input-group-btn > input.btn[type="time"],
    .input-group-lg > input.form-control[type="date"],
    .input-group-lg > input.form-control[type="datetime-local"],
    .input-group-lg > input.form-control[type="month"],
    .input-group-lg > input.form-control[type="time"],
    .input-group-lg > input.input-group-addon[type="date"],
    .input-group-lg > input.input-group-addon[type="datetime-local"],
    .input-group-lg > input.input-group-addon[type="month"],
    .input-group-lg > input.input-group-addon[type="time"],
    input[type="date"].input-lg,
    input[type="datetime-local"].input-lg,
    input[type="month"].input-lg,
    input[type="time"].input-lg {
        line-height: 49px;
    }
}
.form-group {
    margin-bottom: 15px;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn,
.input-sm {
    height: 33px;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 0;
}
.input-group-sm > .input-group-btn > select.btn,
.input-group-sm > select.form-control,
.input-group-sm > select.input-group-addon,
select.input-sm {
    height: 33px;
    line-height: 33px;
}
.input-group-sm > .input-group-btn > select.btn[multiple],
.input-group-sm > select.form-control[multiple],
.input-group-sm > select.input-group-addon[multiple],
select[multiple].input-sm {
    height: auto;
}
.form-group-sm .form-control {
    height: 33px;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 0;
}
.form-group-sm select.form-control {
    height: 33px;
    line-height: 33px;
}
.form-group-sm select[multiple].form-control {
    height: auto;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn,
.input-lg {
    height: 49px;
    padding: 10px 16px;
    font-size: 20px;
    line-height: 1.333333;
    border-radius: 0;
}
.input-group-lg > .input-group-btn > select.btn,
.input-group-lg > select.form-control,
.input-group-lg > select.input-group-addon,
select.input-lg {
    height: 49px;
    line-height: 49px;
}
.input-group-lg > .input-group-btn > select.btn[multiple],
.input-group-lg > select.form-control[multiple],
.input-group-lg > select.input-group-addon[multiple],
select[multiple].input-lg {
    height: auto;
}
.form-group-lg .form-control {
    height: 49px;
    padding: 10px 16px;
    font-size: 20px;
    line-height: 1.333333;
    border-radius: 0;
}
.form-group-lg select.form-control {
    height: 49px;
    line-height: 49px;
}
.form-group-lg select[multiple].form-control {
    height: auto;
}
.btn {
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
    border-radius: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}
.btn.focus,
.btn:focus,
.btn:hover {
    color: #fff;
    text-decoration: none;
}
.btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    -webkit-box-shadow: none;
    box-shadow: none;
}
a.btn.disabled {
    pointer-events: none;
}
.btn-default {
    color: #fff;
    background-color: #8b0015;
    border-color: #8b0015;
}
.btn-default.focus,
.btn-default:focus {
    color: #fff;
    background-color: #58000d;
    border-color: #0c0002;
}
.btn-default:hover {
    color: #fff;
    background-color: #58000d;
    border-color: #4e000c;
}
.btn-default:active {
    color: #fff;
    background-color: #58000d;
    background-image: none;
    border-color: #4e000c;
}
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover {
    color: #fff;
    background-color: #340008;
    border-color: #0c0002;
}
.btn-default.disabled.focus,
.btn-default.disabled:focus,
.btn-default.disabled:hover,
.btn-default[disabled].focus,
.btn-default[disabled]:focus,
.btn-default[disabled]:hover {
    background-color: #8b0015;
    border-color: #8b0015;
}
.btn-primary {
    color: #fff;
    background-color: #0c234b;
    border-color: #0c234b;
}
.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
    background-color: #050e1f;
    border-color: #000;
}
.btn-primary:hover {
    color: #fff;
    background-color: #050e1f;
    border-color: #040a16;
}
.btn-primary:active {
    color: #fff;
    background-color: #050e1f;
    background-image: none;
    border-color: #040a16;
}
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover {
    color: #fff;
    background-color: #000;
    border-color: #000;
}
.btn-info {
    color: #fff;
    background-color: #81d3eb;
    border-color: #81d3eb;
}
.btn-info.focus,
.btn-info:focus {
    color: #fff;
    background-color: #55c4e4;
    border-color: #20a5cc;
}
.btn-info:hover {
    color: #fff;
    background-color: #55c4e4;
    border-color: #4cc1e3;
}
.btn-info:active {
    color: #fff;
    background-color: #55c4e4;
    background-image: none;
    border-color: #4cc1e3;
}
.btn-info:active.focus,
.btn-info:active:focus,
.btn-info:active:hover {
    color: #fff;
    background-color: #36b9df;
    border-color: #20a5cc;
}
.btn-info.disabled.focus,
.btn-info.disabled:focus,
.btn-info.disabled:hover,
.btn-info[disabled].focus,
.btn-info[disabled]:focus,
.btn-info[disabled]:hover {
    background-color: #81d3eb;
    border-color: #81d3eb;
}
.btn-link {
    font-weight: 400;
    color: #8b0015;
    border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link[disabled] {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-link,
.btn-link:active,
.btn-link:focus,
.btn-link:hover {
    border-color: transparent;
}
.btn-link:focus,
.btn-link:hover {
    color: #8b0015;
    text-decoration: underline;
    background-color: transparent;
}
.btn-link[disabled]:focus,
.btn-link[disabled]:hover {
    color: #495057;
    text-decoration: none;
}
.btn-group-lg > .btn,
.btn-lg {
    padding: 10px 16px;
    font-size: 20px;
    line-height: 1.333333;
    border-radius: 0;
}
.btn-group-sm > .btn,
.btn-sm {
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 0;
}
.btn-group-xs > .btn,
.btn-xs {
    padding: 1px 5px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 0;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-block + .btn-block {
    margin-top: 5px;
}
input[type="button"].btn-block,
input[type="reset"].btn-block,
input[type="submit"].btn-block {
    width: 100%;
}
.btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.btn-group > .btn {
    position: relative;
    float: left;
}
.btn-group > .btn:active,
.btn-group > .btn:focus,
.btn-group > .btn:hover {
    z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
    margin-left: -1px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0;
}
.btn-group > .btn:first-child {
    margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
    float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
    border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group[class*="col-"] {
    float: none;
    padding-right: 0;
    padding-left: 0;
}
.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
}
.input-group .form-control:focus {
    z-index: 3;
}
.input-group .form-control,
.input-group-addon,
.input-group-btn {
    display: table-cell;
}
.input-group .form-control:not(:first-child):not(:last-child),
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.input-group-addon,
.input-group-btn {
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
}
.input-group-addon {
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #49595e;
    text-align: center;
    background-color: #fff;
    border: 1px solid #cbd1e0;
    border-radius: 0;
}
.input-group-addon.input-sm,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .input-group-addon.btn {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 0;
}
.input-group-addon.input-lg,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .input-group-addon.btn {
    padding: 10px 16px;
    font-size: 20px;
    border-radius: 0;
}
.input-group-addon input[type="checkbox"],
.input-group-addon input[type="radio"] {
    margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-addon:first-child {
    border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group-addon:last-child {
    border-left: 0;
}
.input-group-btn {
    position: relative;
    font-size: 0;
    white-space: nowrap;
}
.input-group-btn > .btn {
    position: relative;
}
.input-group-btn > .btn + .btn {
    margin-left: -1px;
}
.input-group-btn > .btn:active,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:hover {
    z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
    margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
    z-index: 2;
    margin-left: -1px;
}
.label {
    display: inline;
    padding: 0.2em 0.6em 0.3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
}
.label:empty {
    display: none;
}
.btn .label {
    position: relative;
    top: -1px;
}
a.label:focus,
a.label:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
.label-default {
    background-color: #ab0520;
}
.label-default[href]:focus,
.label-default[href]:hover {
    background-color: #790417;
}
.label-primary {
    background-color: #0c234b;
}
.label-primary[href]:focus,
.label-primary[href]:hover {
    background-color: #050e1f;
}
.label-info {
    background-color: #81d3eb;
}
.label-info[href]:focus,
.label-info[href]:hover {
    background-color: #55c4e4;
}
@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0;
    }
    to {
        background-position: 0 0;
    }
}
@keyframes progress-bar-stripes {
    from {
        background-position: 40px 0;
    }
    to {
        background-position: 0 0;
    }
}
.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    max-width: 276px;
    padding: 1px;
    font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    line-break: auto;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    font-size: 16px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #1e5288;
    border: 1px solid #1e5288;
    border-radius: 0;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.popover.top {
    margin-top: -10px;
}
.popover.right {
    margin-left: 10px;
}
.popover.bottom {
    margin-top: 10px;
}
.popover.left {
    margin-left: -10px;
}
.popover-content {
    padding: 9px 14px;
}
.clearfix:after,
.clearfix:before {
    display: table;
    content: " ";
}
.clearfix:after {
    clear: both;
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.hidden {
    display: none !important;
}
@media (max-width: 767px) {
    .hidden-xs {
        display: none !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .hidden-sm {
        display: none !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .hidden-md {
        display: none !important;
    }
}
@media (min-width: 1200px) {
    .hidden-lg {
        display: none !important;
    }
}
html {
    font-size: 16px;
}
body {
    font-family: MiloWeb, Verdana, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
a {
    font-weight: 700;
    -webkit-transition: color 0.1s ease-in-out;
    transition: color 0.1s ease-in-out;
}
.page-header {
    margin: 3rem 0 2rem;
    line-height: 1.2;
}
label {
    color: #49595e;
}
.label {
    border-radius: 0;
}
.form-control {
    border: 2px solid #cbd1e0;
}
.btn {
    background-clip: border-box;
    font-weight: 700;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: normal;
}
.btn-default {
    color: #fff;
    background-color: #8b0015;
    border-color: #8b0015;
    border-width: 2px;
    background-clip: border-box;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
.btn-default.focus,
.btn-default:focus {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-default:hover {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-default:active {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-default:active {
    background-image: none;
}
.btn-default.disabled,
.btn-default.disabled.focus,
.btn-default.disabled:active,
.btn-default.disabled:focus,
.btn-default.disabled:hover,
.btn-default[disabled],
.btn-default[disabled].focus,
.btn-default[disabled]:active,
.btn-default[disabled]:focus,
.btn-default[disabled]:hover {
    background: #495057;
    border-color: #495057;
}
.btn-primary {
    color: #fff;
    background-color: #0c234b;
    border-color: #0c234b;
    border-width: 2px;
    background-clip: border-box;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-primary:hover {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-primary:active {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-primary:active {
    background-image: none;
}
.btn-info {
    color: #fff;
    background-color: #81d3eb;
    border-color: #81d3eb;
    border-width: 2px;
    background-clip: border-box;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
.btn-info.focus,
.btn-info:focus {
    color: #fff;
    background-color: #5c939e;
    border-color: #5c939e;
}
.btn-info:hover {
    color: #fff;
    background-color: #5c939e;
    border-color: #5c939e;
}
.btn-info:active {
    color: #fff;
    background-color: #5c939e;
    border-color: #5c939e;
}
.btn-info:active.focus,
.btn-info:active:focus,
.btn-info:active:hover {
    color: #fff;
    background-color: #5c939e;
    border-color: #5c939e;
}
.btn-info:active {
    background-image: none;
}
.btn-info.disabled,
.btn-info.disabled.focus,
.btn-info.disabled:active,
.btn-info.disabled:focus,
.btn-info.disabled:hover,
.btn-info[disabled],
.btn-info[disabled].focus,
.btn-info[disabled]:active,
.btn-info[disabled]:focus,
.btn-info[disabled]:hover {
    background: #495057;
    border-color: #495057;
}
.btn-link {
    font-weight: 700;
}
.input-group-btn {
    position: relative;
    white-space: nowrap;
}
.input-group-btn > .btn {
    position: relative;
}
.input-group-btn > .btn + .btn {
    margin-left: -2px;
}
.input-group-btn > .btn:active,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:hover {
    z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
    margin-right: -2px;
    margin-top: 0;
    padding: 5px 8px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
    z-index: 2;
    margin-left: -2px;
    margin-top: 0;
    padding: 5px 12px;
}
.label {
    font-size: 0.7em;
    font-weight: 700;
    line-height: 1.5;
    color: #fff;
    margin: 0 0.5em;
}
.popover {
    padding: 0;
    -webkit-box-shadow: 0 0 0 transparent;
    box-shadow: 0 0 0 transparent;
}
.text {
    color: #fff;
    font-family: MiloWeb, Verdana, Geneva, sans-serif;
    font-style: normal;
    font-weight: 500;
}
.btn-hollow,
.btn-hollow-default {
    color: #8b0015;
    background-color: transparent;
    border-color: #8b0015;
    border-width: 2px;
    background-clip: border-box;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
.btn-hollow-default.focus,
.btn-hollow-default:focus,
.btn-hollow.focus,
.btn-hollow:focus {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-hollow-default:hover,
.btn-hollow:hover {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-hollow-default:active,
.btn-hollow:active {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-hollow-default:active.focus,
.btn-hollow-default:active:focus,
.btn-hollow-default:active:hover,
.btn-hollow:active.focus,
.btn-hollow:active:focus,
.btn-hollow:active:hover {
    color: #fff;
    background-color: #ab0520;
    border-color: #ab0520;
}
.btn-hollow-default:active,
.btn-hollow:active {
    background-image: none;
}
.btn-hollow-default.disabled,
.btn-hollow-default.disabled.focus,
.btn-hollow-default.disabled:active,
.btn-hollow-default.disabled:focus,
.btn-hollow-default.disabled:hover,
.btn-hollow-default[disabled],
.btn-hollow-default[disabled].focus,
.btn-hollow-default[disabled]:active,
.btn-hollow-default[disabled]:focus,
.btn-hollow-default[disabled]:hover,
.btn-hollow.disabled,
.btn-hollow.disabled.focus,
.btn-hollow.disabled:active,
.btn-hollow.disabled:focus,
.btn-hollow.disabled:hover,
.btn-hollow[disabled],
.btn-hollow[disabled].focus,
.btn-hollow[disabled]:active,
.btn-hollow[disabled]:focus,
.btn-hollow[disabled]:hover {
    background: #495057;
    border-color: #495057;
}
.btn-hollow-primary {
    color: #0c234b;
    background-color: transparent;
    border-color: #0c234b;
    border-width: 2px;
    background-clip: border-box;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
.btn-hollow-primary.focus,
.btn-hollow-primary:focus {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-hollow-primary:hover {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-hollow-primary:active {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-hollow-primary:active.focus,
.btn-hollow-primary:active:focus,
.btn-hollow-primary:active:hover {
    color: #fff;
    background-color: #1e5288;
    border-color: #1e5288;
}
.btn-hollow-primary:active {
    background-image: none;
}
.btn-hollow-primary.disabled,
.btn-hollow-primary.disabled.focus,
.btn-hollow-primary.disabled:active,
.btn-hollow-primary.disabled:focus,
.btn-hollow-primary.disabled:hover,
.btn-hollow-primary[disabled],
.btn-hollow-primary[disabled].focus,
.btn-hollow-primary[disabled]:active,
.btn-hollow-primary[disabled]:focus,
.btn-hollow-primary[disabled]:hover {
    background: #495057;
    border-color: #495057;
}
.btn-icon:before {
    line-height: 1.5;
    margin-right: -0.5em;
}
.search-form {
    position: relative;
    height: 38px;
}
.search-form .form-control::-webkit-input-placeholder {
    font-size: 40px;
    font-size: 0.75em;
}
.input-search {
    padding-right: 40px;
    padding-right: 2.5em;
}
.btn-search {
    text-indent: -9999em;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    width: 2.5rem;
    height: 2.5rem;
    border: 0;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-size: 1.5rem 1.5rem;
    background-position: 7px 6px;
    background-position: right 7px top 6px;
    outline: 0;
    position: absolute;
    z-index: 0;
    background-image: url(img/search-chili.svg);
    background-color: transparent;
}
.btn-search:active,
.btn-search:focus,
.btn-search:hover {
    opacity: 0.5;
}
@media (max-width: 767px) {
    .text-left-xs {
        text-align: left;
    }
    .text-center-xs {
        text-align: center;
    }
    .text-right-xs {
        text-align: right;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .text-left-sm {
        text-align: left;
    }
    .text-center-sm {
        text-align: center;
    }
    .text-right-sm {
        text-align: right;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .text-left-md {
        text-align: left;
    }
    .text-center-md {
        text-align: center;
    }
    .text-right-md {
        text-align: right;
    }
}
@media (min-width: 1200px) {
    .text-left-lg {
        text-align: left;
    }
    .text-center-lg {
        text-align: center;
    }
    .text-right-lg {
        text-align: right;
    }
}
.bottom-buffer-xs-0 {
    margin-bottom: 0;
}
.bottom-buffer-1,
.bottom-buffer-xs-1 {
    margin-bottom: 1px;
}
.bottom-buffer-5,
.bottom-buffer-xs-5 {
    margin-bottom: 5px;
}
.bottom-buffer-10,
.bottom-buffer-xs-10 {
    margin-bottom: 10px;
}
.bottom-buffer-15,
.bottom-buffer-xs-15 {
    margin-bottom: 15px;
}
.bottom-buffer-20,
.bottom-buffer-xs-20 {
    margin-bottom: 20px;
}
.bottom-buffer-25,
.bottom-buffer-xs-25 {
    margin-bottom: 25px;
}
.bottom-buffer-30,
.bottom-buffer-xs-30 {
    margin-bottom: 30px;
}
.bottom-buffer-50,
.bottom-buffer-xs-50 {
    margin-bottom: 50px;
}
@media (min-width: 768px) {
    .bottom-buffer-sm-0,
    .bottom-buffer-sm-reset {
        margin-bottom: 0;
    }
    .bottom-buffer-sm-1 {
        margin-bottom: 1px;
    }
    .bottom-buffer-sm-5 {
        margin-bottom: 5px;
    }
    .bottom-buffer-sm-10 {
        margin-bottom: 10px;
    }
    .bottom-buffer-sm-15 {
        margin-bottom: 15px;
    }
    .bottom-buffer-sm-20 {
        margin-bottom: 20px;
    }
    .bottom-buffer-sm-25 {
        margin-bottom: 25px;
    }
    .bottom-buffer-sm-30 {
        margin-bottom: 30px;
    }
    .bottom-buffer-sm-50 {
        margin-bottom: 50px;
    }
}
@media (min-width: 992px) {
    .bottom-buffer-md-0,
    .bottom-buffer-md-reset {
        margin-bottom: 0;
    }
    .bottom-buffer-md-1 {
        margin-bottom: 1px;
    }
    .bottom-buffer-md-5 {
        margin-bottom: 5px;
    }
    .bottom-buffer-md-10 {
        margin-bottom: 10px;
    }
    .bottom-buffer-md-15 {
        margin-bottom: 15px;
    }
    .bottom-buffer-md-20 {
        margin-bottom: 20px;
    }
    .bottom-buffer-md-25 {
        margin-bottom: 25px;
    }
    .bottom-buffer-md-30 {
        margin-bottom: 30px;
    }
    .bottom-buffer-md-50 {
        margin-bottom: 50px;
    }
}
@media (min-width: 1200px) {
    .bottom-buffer-lg-0,
    .bottom-buffer-lg-reset {
        margin-bottom: 0;
    }
    .bottom-buffer-lg-1 {
        margin-bottom: 1px;
    }
    .bottom-buffer-lg-5 {
        margin-bottom: 5px;
    }
    .bottom-buffer-lg-10 {
        margin-bottom: 10px;
    }
    .bottom-buffer-lg-15 {
        margin-bottom: 15px;
    }
    .bottom-buffer-lg-20 {
        margin-bottom: 20px;
    }
    .bottom-buffer-lg-25 {
        margin-bottom: 25px;
    }
    .bottom-buffer-lg-30 {
        margin-bottom: 30px;
    }
    .bottom-buffer-lg-50 {
        margin-bottom: 50px;
    }
}
.top-buffer-xs-0 {
    margin-top: 0;
}
.top-buffer-xs-1 {
    margin-top: 1px;
}
.top-buffer-xs-5 {
    margin-top: 5px;
}
.top-buffer-xs-10 {
    margin-top: 10px;
}
.top-buffer-xs-15 {
    margin-top: 15px;
}
.top-buffer-xs-20 {
    margin-top: 20px;
}
.top-buffer-xs-25 {
    margin-top: 25px;
}
.top-buffer-xs-30 {
    margin-top: 30px;
}
.top-buffer-xs-50 {
    margin-top: 50px;
}
@media (min-width: 768px) {
    .top-buffer-sm-0,
    .top-buffer-sm-reset {
        margin-top: 0;
    }
    .top-buffer-sm-1 {
        margin-top: 1px;
    }
    .top-buffer-sm-5 {
        margin-top: 5px;
    }
    .top-buffer-sm-10 {
        margin-top: 10px;
    }
    .top-buffer-sm-15 {
        margin-top: 15px;
    }
    .top-buffer-sm-20 {
        margin-top: 20px;
    }
    .top-buffer-sm-25 {
        margin-top: 25px;
    }
    .top-buffer-sm-30 {
        margin-top: 30px;
    }
    .top-buffer-sm-50 {
        margin-top: 50px;
    }
}
@media (min-width: 992px) {
    .top-buffer-md-0,
    .top-buffer-md-reset {
        margin-top: 0;
    }
    .top-buffer-md-1 {
        margin-top: 1px;
    }
    .top-buffer-md-5 {
        margin-top: 5px;
    }
    .top-buffer-md-10 {
        margin-top: 10px;
    }
    .top-buffer-md-15 {
        margin-top: 15px;
    }
    .top-buffer-md-20 {
        margin-top: 20px;
    }
    .top-buffer-md-25 {
        margin-top: 25px;
    }
    .top-buffer-md-30 {
        margin-top: 30px;
    }
    .top-buffer-md-50 {
        margin-top: 50px;
    }
}
@media (min-width: 1200px) {
    .top-buffer-lg-0,
    .top-buffer-lg-reset {
        margin-top: 0;
    }
    .top-buffer-lg-1 {
        margin-top: 1px;
    }
    .top-buffer-lg-5 {
        margin-top: 5px;
    }
    .top-buffer-lg-10 {
        margin-top: 10px;
    }
    .top-buffer-lg-15 {
        margin-top: 15px;
    }
    .top-buffer-lg-20 {
        margin-top: 20px;
    }
    .top-buffer-lg-25 {
        margin-top: 25px;
    }
    .top-buffer-lg-30 {
        margin-top: 30px;
    }
    .top-buffer-lg-50 {
        margin-top: 50px;
    }
}
.right-buffer-xs-0 {
    padding-right: 0;
}
.right-buffer-xs-1 {
    padding-right: 1px;
}
.right-buffer-xs-5 {
    padding-right: 5px;
}
.right-buffer-xs-10 {
    padding-right: 10px;
}
.right-buffer-xs-15 {
    padding-right: 15px;
}
.right-buffer-xs-20 {
    padding-right: 20px;
}
.right-buffer-xs-30 {
    padding-right: 30px;
}
.left-buffer-xs-0 {
    padding-left: 0;
}
.left-buffer-xs-1 {
    padding-left: 1px;
}
.left-buffer-xs-5 {
    padding-left: 5px;
}
.left-buffer-xs-10 {
    padding-left: 10px;
}
.left-buffer-xs-15 {
    padding-left: 15px;
}
.left-buffer-xs-20 {
    padding-left: 20px;
}
.left-buffer-xs-30 {
    padding-left: 30px;
}
@media (min-width: 768px) {
    .right-buffer-sm-0 {
        padding-right: 0;
    }
    .right-buffer-sm-1 {
        padding-right: 1px;
    }
    .right-buffer-sm-5 {
        padding-right: 5px;
    }
    .right-buffer-sm-10 {
        padding-right: 10px;
    }
    .right-buffer-sm-reset {
        padding-right: 16px;
    }
    .right-buffer-sm-15 {
        padding-right: 15px;
    }
    .right-buffer-sm-20 {
        padding-right: 20px;
    }
    .right-buffer-sm-30 {
        padding-right: 30px;
    }
    .left-buffer-sm-0 {
        padding-left: 0;
    }
    .left-buffer-sm-1 {
        padding-left: 1px;
    }
    .left-buffer-sm-5 {
        padding-left: 5px;
    }
    .left-buffer-sm-10 {
        padding-left: 10px;
    }
    .left-buffer-sm-15 {
        padding-left: 15px;
    }
    .left-buffer-sm-reset {
        padding-left: 16px;
    }
    .left-buffer-sm-20 {
        padding-left: 20px;
    }
    .left-buffer-sm-30 {
        padding-left: 30px;
    }
}
@media (min-width: 992px) {
    .right-buffer-md-0 {
        padding-right: 0;
    }
    .right-buffer-md-1 {
        padding-right: 1px;
    }
    .right-buffer-md-5 {
        padding-right: 5px;
    }
    .right-buffer-md-10 {
        padding-right: 10px;
    }
    .right-buffer-md-15 {
        padding-right: 15px;
    }
    .right-buffer-md-reset {
        padding-right: 16px;
    }
    .right-buffer-md-20 {
        padding-right: 20px;
    }
    .right-buffer-md-30 {
        padding-right: 30px;
    }
    .left-buffer-md-0 {
        padding-left: 0;
    }
    .left-buffer-md-1 {
        padding-left: 1px;
    }
    .left-buffer-md-5 {
        padding-left: 5px;
    }
    .left-buffer-md-10 {
        padding-left: 10px;
    }
    .left-buffer-md-15 {
        padding-left: 15px;
    }
    .left-buffer-md-reset {
        padding-left: 16px;
    }
    .left-buffer-md-20 {
        padding-left: 20px;
    }
    .left-buffer-md-30 {
        padding-left: 30px;
    }
}
@media (min-width: 1200px) {
    .right-buffer-lg-0 {
        padding-right: 0;
    }
    .right-buffer-lg-1 {
        padding-right: 1px;
    }
    .right-buffer-lg-5 {
        padding-right: 5px;
    }
    .right-buffer-lg-10 {
        padding-right: 10px;
    }
    .right-buffer-lg-15 {
        padding-right: 15px;
    }
    .right-buffer-lg-reset {
        padding-right: 16px;
    }
    .right-buffer-lg-20 {
        padding-right: 20px;
    }
    .right-buffer-lg-30 {
        padding-right: 30px;
    }
    .left-buffer-lg-0 {
        padding-left: 0;
    }
    .left-buffer-lg-1 {
        padding-left: 1px;
    }
    .left-buffer-lg-5 {
        padding-left: 5px;
    }
    .left-buffer-lg-10 {
        padding-left: 10px;
    }
    .left-buffer-lg-15 {
        padding-left: 15px;
    }
    .left-buffer-lg-reset {
        padding-left: 16px;
    }
    .left-buffer-lg-20 {
        padding-left: 20px;
    }
    .left-buffer-lg-30 {
        padding-left: 30px;
    }
}

           `}static get properties(){return{baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}}}constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}_showTooltip=()=>{this.tooltip.setAttribute("data-show",""),this.popperInstance.setOptions({modifiers:[{name:"eventListeners",enabled:!0}]}),this.popperInstance.update()};_hideTooltip=()=>{this.tooltip.removeAttribute("data-show"),this.popperInstance.setOptions({modifiers:[{name:"eventListeners",enabled:!1}]})};_handleEvents=t=>{const e=this.select.options[this.select.selectedIndex].dataset.href;if(e.includes("%3Cnolink%3E"))switch(this.btn.classList.add("disabled"),this.select.setAttribute("aria-invalid","true"),t.type){case"click":this.btn&&(this.select.focus(),this._showTooltip());break;case"focus":case"mouseenter":this.btn?this._showTooltip():this._hideTooltip();break;case"mouseleave":this._hideTooltip()}else if(this.select.setAttribute("aria-invalid","false"),this.btn.classList.remove("disabled"),"click"===t.type)this._hideTooltip(),t.stopImmediatePropagation(),window.location=e};connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}static azMenuLevelTemplate(t){return V`
           ${t}
       `}static azMenuOptionTemplate(t,e){return V`<option data-href="${e}" @click="${t=>{pt(t,"az-select-menu")}}">${t}</option>`}static azMenuItemTemplate(t){return V`${t}`}renderAzSelectMenuOptions(t){const e=t.map((t=>this.renderAzMenuItem(t)));return ve.azMenuLevelTemplate(e)}renderAzMenuItem(t){const e=t?.link?.attributes?.title;let o=t?.link?.href;return o="/"===o.charAt(0)?"https://www.arizona.edu"+o:o,o?ve.azMenuOptionTemplate(e,o):this.azMenuItemTemplate(e)}fetchData(t,e){this.isLoading=!0;const o=`${t}/system/menu/${e}/linkset`;fetch(o,{}).then((t=>{if(t.ok)return t.json();throw this.isLoading=!1,new Error(`Unable to fetch ${o}. ${t.status} ${t.statusText}`)})).then((t=>{try{const o=(0,Xt.denormalize)(t,e);this.tree=o.tree}catch(t){throw new Error("Unable to denormalize menu.")}this.isLoading=!1}))}async firstUpdated(){await new Promise((t=>setTimeout(t,0))),this.btn=this.shadowRoot.querySelector("#button"),this.btn.addEventListener("click",this._handleEvents,{passive:!0}),this.btn.addEventListener("mouseenter",this._handleEvents,{passive:!0}),this.btn.addEventListener("mouseleave",this._handleEvents,{passive:!0}),this.btn.addEventListener("focus",this._handleEvents,{passive:!0}),this.btn.addEventListener("touchstart",this._handleEvents,{passive:!0}),this.btn.addEventListener("blur",this._handleEvents,{passive:!0}),this.form=this.shadowRoot.querySelector("form"),this.tooltip=this.shadowRoot.querySelector("#tooltip"),this.popperInstance=$t(this.form,this.tooltip,{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),this.select=this.shadowRoot.querySelector("select")}render(){return V`
     <form aria-describedby="tooltip">
            <div id="tooltip" role="tooltip">
              Please make a selection.
              <div id="arrow" data-popper-arrow></div>
            </div>

            <div class="input-group">
              <span class="input-group-addon input-group-addon-no-border"><div class="select-menu-label">I am </div></span>
              <label for="uaqs-navigation-select-menu-uaqs-audience-select-menu" class="sr-only">Select your audience</label>
              <select id="uaqs-navigation-select-menu-uaqs-audience-select-menu" class="form-control select-primary" aria-invalid="true">
                <option data-href="https://www.arizona.edu/%3Cnolink%3E">choose an option</option>
                ${this.isLoading?V`<slot name="loading">${this.loadingMessage}</slot>`:this.renderAzSelectMenuOptions(this.tree)}
              </select>
              <span class="input-group-btn">
                <button id="button" class="btn btn-primary btn-blue disabled" role="button" type="button" tabindex="0">Go<span class="sr-only">to the page for that group</span></button>
              </span>
            </div>
          </form>
    `}}customElements.get("az-select-menu")||customElements.define("az-select-menu",ve);customElements.get("az-middle-header")||customElements.define("az-middle-header",class extends rt{static get styles(){return et`
       :host {
        font-family: inherit;
        -ms-text-size-adjust: inherit;
        -webkit-text-size-adjust: inherit;
        }
        body {
            margin: 0;
        }
    header,
    menu {
        display: block;
    }
    [hidden] {
        display: none;
    }
    a {
        background-color: transparent;
    }
    a:active,
    a:hover {
        outline: 0;
    }
    img {
        border: 0;
    }
    select {
        color: inherit;
        font: inherit;
        margin: 0;
    }

    select {
        text-transform: none;
    } /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
    @media print {
        *,
        :after,
        :before {
            color: #000 !important;
            text-shadow: none !important;
            background: 0 0 !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }
        a,
        a:visited {
            text-decoration: underline;
        }
        a[href]:after {
            content: " (" attr(href) ")";
        }
        a[href^="#"]:after,
        a[href^="javascript:"]:after {
            content: "";
        }
        img {
            page-break-inside: avoid;
        }
        img {
            max-width: 100% !important;
        }
        .label {
            border: 1px solid #000;
        }
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    :after,
    :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #403635;
        background-color: #fff;
    }
    select {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    a {
        color: #8b0015;
        text-decoration: none;
    }
    a:focus,
    a:hover {
        color: #8b0015;
        text-decoration: underline;
    }
    a:focus {
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
    }
    img {
        vertical-align: middle;
    }
    [role="button"] {
        cursor: pointer;
    }
    .page-header{
        padding-bottom: 11px;
        margin: 48px 0 24px;
        border-bottom: 1px solid #fff;
    }
    .page-row > .row{
        border-bottom: 1px solid #E2E9EB;
    }
    .container {
        padding-right: 16px;
        padding-left: 16px;
        margin-right: auto;
        margin-left: auto;
    }
    .container:after,
    .container:before {
        display: table;
        content: " ";
    }
    .container:after {
        clear: both;
    }

    #block-bean-cta-request-info{
        margin-top: 17px;
        padding-left: 23px;
        max-width: 539px;
    }
    
    #block-bean-cta-apply{
        margin-top: 16px;
        padding-left: 23px;
        max-width: 539px;
        margin-bottom: 16px;
    }

    .region-header-2{
        max-width: 540px;
        margin: auto;
    }


    @media (min-width: 768px) {
        .container {
            width: 752px;
        }
        .region #block-bean-uaqs-audience-select{
                padding-right: 35px;
                padding-left: 25px;
                margin-top: 27px;
        }
        #block-bean-cta-request-info{
            margin-top: 39px;
            padding-left: 23px;
            max-width: 352px;
        }
        
        #block-bean-cta-apply{
            margin-top: 16px;
            padding-left: 23px;
            max-width: 352px;
            margin-bottom: 16px;
        }
    }
    @media (min-width: 992px){
        #block-bean-cta-request-info{
            margin-top: 0;
            padding-left: 0;
        }
        #block-bean-cta-apply{
            margin-top: 0;
            padding-left: 0;
        }
        .region #block-bean-uaqs-audience-select{
            padding-right: 33px;
            padding-left: 15px;
            margin-top: 0px;
        }
        .region-header-2{
            max-width: 100%;
        }
    }
    @media (min-width: 1200px){
        .region #block-bean-uaqs-audience-select{
            padding-right: 16px;
            padding-left: 29px;
            margin-top: 0px;
        }
        #block-bean-cta-request-info{
            margin-top: 0px;
            padding-left: 0;
            max-width: 100%;
        }
        
        #block-bean-cta-apply{
            margin-top: 0px;
            padding-left: 0;
            max-width: 100%;
            margin-bottom: 0;
        }
    }
    @media (min-width: 992px) {
        .region-header-2{
            margin-top: 23px;
        }
        .container {
            width: 972px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1172px;
        }
    }
    .row {
        margin-right: -15px;
        margin-left: -15px;
    }
    .row:after,
    .row:before {
        display: table;
        content: " ";
    }
    .row:after {
        clear: both;
    }
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9 {
        position: relative;
        min-height: 1px;
        padding-right: 11px;
        padding-left: 2px;
    }
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9 {
        float: left;
    }
    .col-xs-1 {
        width: 8.333333%;
    }
    .col-xs-2 {
        width: 16.666667%;
    }
    .col-xs-3 {
        width: 25%;
    }
    .col-xs-4 {
        width: 33.333333%;
    }
    .col-xs-5 {
        width: 41.666667%;
    }
    .col-xs-6 {
        width: 50%;
    }
    .col-xs-7 {
        width: 58.333333%;
    }
    .col-xs-8 {
        width: 66.666667%;
    }
    .col-xs-9 {
        width: 75%;
    }
    .col-xs-10 {
        width: 83.333333%;
    }
    .col-xs-11 {
        width: 91.666667%;
    }
    .col-xs-12 {
        width: 100%;
    }
    .col-xs-offset-0 {
        margin-left: 0;
    }
    .col-xs-offset-1 {
        margin-left: 8.333333%;
    }
    .col-xs-offset-2 {
        margin-left: 16.666667%;
    }
    .col-xs-offset-3 {
        margin-left: 25%;
    }
    .col-xs-offset-4 {
        margin-left: 33.333333%;
    }
    .col-xs-offset-5 {
        margin-left: 41.666667%;
    }
    .col-xs-offset-6 {
        margin-left: 50%;
    }
    .col-xs-offset-7 {
        margin-left: 58.333333%;
    }
    .col-xs-offset-8 {
        margin-left: 66.666667%;
    }
    .col-xs-offset-9 {
        margin-left: 75%;
    }
    .col-xs-offset-10 {
        margin-left: 83.333333%;
    }
    .col-xs-offset-11 {
        margin-left: 91.666667%;
    }
    .col-xs-offset-12 {
        margin-left: 100%;
    }
    #block-bean-uaqs-audience-select{
        padding-right: 20px;
        padding-left: 26px;
        margin-top: 18px;
    }
    @media (min-width: 768px) {
        .col-sm-1,
        .col-sm-10,
        .col-sm-11,
        .col-sm-12,
        .col-sm-2,
        .col-sm-3,
        .col-sm-4,
        .col-sm-5,
        .col-sm-6,
        .col-sm-7,
        .col-sm-8,
        .col-sm-9 {
            float: left;
        }
        .col-sm-1 {
            width: 8.333333%;
        }
        .col-sm-2 {
            width: 16.666667%;
        }
        .col-sm-3 {
            width: 25%;
        }
        .col-sm-4 {
            width: 33.333333%;
        }
        .col-sm-5 {
            width: 41.666667%;
        }
        .col-sm-6 {
            width: 50%;
        }
        .col-sm-7 {
            width: 58.333333%;
        }
        .col-sm-8 {
            width: 66.666667%;
        }
        .col-sm-9 {
            width: 75%;
        }
        .col-sm-10 {
            width: 83.333333%;
        }
        .col-sm-11 {
            width: 91.666667%;
        }
        .col-sm-12 {
            width: 100%;
        }
        .col-sm-offset-0 {
            margin-left: 0;
        }
        .col-sm-offset-1 {
            margin-left: 8.333333%;
        }
        .col-sm-offset-2 {
            margin-left: 16.666667%;
        }
        .col-sm-offset-3 {
            margin-left: 25%;
        }
        .col-sm-offset-4 {
            margin-left: 33.333333%;
        }
        .col-sm-offset-5 {
            margin-left: 41.666667%;
        }
        .col-sm-offset-6 {
            margin-left: 50%;
        }
        .col-sm-offset-7 {
            margin-left: 58.333333%;
        }
        .col-sm-offset-8 {
            margin-left: 66.666667%;
        }
        .col-sm-offset-9 {
            margin-left: 75%;
        }
        .col-sm-offset-10 {
            margin-left: 83.333333%;
        }
        .col-sm-offset-11 {
            margin-left: 91.666667%;
        }
        .col-sm-offset-12 {
            margin-left: 100%;
        }
    }
    @media (min-width: 992px) {
        .col-md-1,
        .col-md-10,
        .col-md-11,
        .col-md-12,
        .col-md-2,
        .col-md-3,
        .col-md-4,
        .col-md-5,
        .col-md-6,
        .col-md-7,
        .col-md-8,
        .col-md-9 {
            float: left;
        }
        .col-md-1 {
            width: 8.333333%;
        }
        .col-md-2 {
            width: 16.666667%;
        }
        .col-md-3 {
            width: 25%;
        }
        .col-md-4 {
            width: 33.333333%;
        }
        .col-md-5 {
            width: 41.666667%;
        }
        .col-md-6 {
            width: 50%;
        }
        .col-md-7 {
            width: 58.333333%;
        }
        .col-md-8 {
            width: 66.666667%;
        }
        .col-md-9 {
            width: 75%;
        }
        .col-md-10 {
            width: 83.333333%;
        }
        .col-md-11 {
            width: 91.666667%;
        }
        .col-md-12 {
            width: 100%;
        }
        .col-md-offset-0 {
            margin-left: 0;
        }
        .col-md-offset-1 {
            margin-left: 8.333333%;
        }
        .col-md-offset-2 {
            margin-left: 16.666667%;
        }
        .col-md-offset-3 {
            margin-left: 25%;
        }
        .col-md-offset-4 {
            margin-left: 33.333333%;
        }
        .col-md-offset-5 {
            margin-left: 41.666667%;
        }
        .col-md-offset-6 {
            margin-left: 50%;
        }
        .col-md-offset-7 {
            margin-left: 58.333333%;
        }
        .col-md-offset-8 {
            margin-left: 66.666667%;
        }
        .col-md-offset-9 {
            margin-left: 75%;
        }
        .col-md-offset-10 {
            margin-left: 83.333333%;
        }
        .col-md-offset-11 {
            margin-left: 91.666667%;
        }
        .col-md-offset-12 {
            margin-left: 100%;
        }
    }
    @media (min-width: 992px) {
        .col-lg-1,
        .col-lg-10,
        .col-lg-11,
        .col-lg-12,
        .col-lg-2,
        .col-lg-3,
        .col-lg-4,
        .col-lg-5,
        .col-lg-6,
        .col-lg-7,
        .col-lg-8,
        .col-lg-9 {
            float: left;
        }
        .col-lg-1 {
            width: 8.333333%;
        }
        .col-lg-2 {
            width: 16.666667%;
        }
        .col-lg-3 {
            width: 25%;
        }
        .col-lg-4 {
            width: 33.333333%;
        }
        .col-lg-5 {
            width: 41.666667%;
        }
        .col-lg-6 {
            width: 50%;
        }
        .col-lg-7 {
            width: 58.333333%;
        }
        .col-lg-8 {
            width: 66.666667%;
        }
        .col-lg-9 {
            width: 75%;
        }
        .col-lg-10 {
            width: 83.333333%;
        }
        .col-lg-11 {
            width: 91.666667%;
        }
        .col-lg-12 {
            width: 100%;
        }
        .col-lg-offset-0 {
            margin-left: 0;
        }
        .col-lg-offset-1 {
            margin-left: 8.333333%;
        }
        .col-lg-offset-2 {
            margin-left: 16.666667%;
        }
        .col-lg-offset-3 {
            margin-left: 25%;
        }
        .col-lg-offset-4 {
            margin-left: 33.333333%;
        }
        .col-lg-offset-5 {
            margin-left: 41.666667%;
        }
        .col-lg-offset-6 {
            margin-left: 50%;
        }
        .col-lg-offset-7 {
            margin-left: 58.333333%;
        }
        .col-lg-offset-8 {
            margin-left: 66.666667%;
        }
        .col-lg-offset-9 {
            margin-left: 75%;
        }
        .col-lg-offset-10 {
            margin-left: 83.333333%;
        }
        .col-lg-offset-11 {
            margin-left: 91.666667%;
        }
        .col-lg-offset-12 {
            margin-left: 100%;
        }
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }
    select[multiple],
    select[size] {
        height: auto;
    }
    .label {
        display: inline;
        padding: 0.2em 0.6em 0.3em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25em;
    }
    .label:empty {
        display: none;
    }
    a.label:focus,
    a.label:hover {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
    .label-default {
        background-color: #ab0520;
    }
    .label-default[href]:focus,
    .label-default[href]:hover {
        background-color: #790417;
    }
    .label-info {
        background-color: #81d3eb;
    }
    .label-info[href]:focus,
    .label-info[href]:hover {
        background-color: #55c4e4;
    }
    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 40px 0;
        }
        to {
            background-position: 0 0;
        }
    }
    @keyframes progress-bar-stripes {
        from {
            background-position: 40px 0;
        }
        to {
            background-position: 0 0;
        }
    }
    html {
        font-size: 16px;
    }
    a {
        font-weight: 700;
        -webkit-transition: color 0.1s ease-in-out;
        transition: color 0.1s ease-in-out;
    }
    .page-header {
        margin: 3rem 0 2rem;
        line-height: 1.2;
    }
    label {
        color: #49595e;
    }
    .label {
        border-radius: 0;
    }
    select {
        border: 0;
        outline: 1px solid #cbd1e0;
        background-color: #fff;
        border-radius: 0;
    }
    .label {
        font-size: 0.7em;
        font-weight: 700;
        line-height: 1.5;
        color: #fff;
        margin: 0 0.5em;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    a.link-container {
        color: inherit;
        display: block;
        font-weight: inherit;
    }
    a.link-container:focus,
    a.link-container:hover {
        background-color: #eef1f1;
        outline: 0;
        text-decoration: none;
        color: inherit;
    }
    .arizona-logo {
        display: inline-block;
        height: 20px;
        margin: 19px 0 20px;
        max-width: 80%;
        float: left;
        width: 276px;
        padding: 0 0 0 0.6rem;
    }
    .bottom-buffer-xs-0 {
        margin-bottom: 0;
    }
    .bottom-buffer-1,
    .bottom-buffer-xs-1 {
        margin-bottom: 1px;
    }
    .bottom-buffer-5,
    .bottom-buffer-xs-5 {
        margin-bottom: 5px;
    }
    .bottom-buffer-10,
    .bottom-buffer-xs-10 {
        margin-bottom: 10px;
    }
    .bottom-buffer-15,
    .bottom-buffer-xs-15 {
        margin-bottom: 15px;
    }
    .bottom-buffer-20,
    .bottom-buffer-xs-20 {
        margin-bottom: 20px;
    }
    .bottom-buffer-25,
    .bottom-buffer-xs-25 {
        margin-bottom: 25px;
    }
    .bottom-buffer-30,
    .bottom-buffer-xs-30 {
        margin-bottom: 30px;
    }
    .bottom-buffer-50,
    .bottom-buffer-xs-50 {
        margin-bottom: 50px;
    }
    @media (min-width: 768px) {
        .bottom-buffer-sm-0,
        .bottom-buffer-sm-reset {
            margin-bottom: 0;
        }
        .bottom-buffer-sm-1 {
            margin-bottom: 1px;
        }
        .bottom-buffer-sm-5 {
            margin-bottom: 5px;
        }
        .bottom-buffer-sm-10 {
            margin-bottom: 10px;
        }
        .bottom-buffer-sm-15 {
            margin-bottom: 15px;
        }
        .bottom-buffer-sm-20 {
            margin-bottom: 20px;
        }
        .bottom-buffer-sm-25 {
            margin-bottom: 25px;
        }
        .bottom-buffer-sm-30 {
            margin-bottom: 30px;
        }
        .bottom-buffer-sm-50 {
            margin-bottom: 50px;
        }
    }
    @media (min-width: 992px) {
        .bottom-buffer-md-0,
        .bottom-buffer-md-reset {
            margin-bottom: 0;
        }
        .bottom-buffer-md-1 {
            margin-bottom: 1px;
        }
        .bottom-buffer-md-5 {
            margin-bottom: 5px;
        }
        .bottom-buffer-md-10 {
            margin-bottom: 10px;
        }
        .bottom-buffer-md-15 {
            margin-bottom: 15px;
        }
        .bottom-buffer-md-20 {
            margin-bottom: 20px;
        }
        .bottom-buffer-md-25 {
            margin-bottom: 25px;
        }
        .bottom-buffer-md-30 {
            margin-bottom: 30px;
        }
        .bottom-buffer-md-50 {
            margin-bottom: 50px;
        }
    }
    @media (min-width: 1200px) {
        .bottom-buffer-lg-0,
        .bottom-buffer-lg-reset {
            margin-bottom: 0;
        }
        .bottom-buffer-lg-1 {
            margin-bottom: 1px;
        }
        .bottom-buffer-lg-5 {
            margin-bottom: 5px;
        }
        .bottom-buffer-lg-10 {
            margin-bottom: 10px;
        }
        .bottom-buffer-lg-15 {
            margin-bottom: 15px;
        }
        .bottom-buffer-lg-20 {
            margin-bottom: 20px;
        }
        .bottom-buffer-lg-25 {
            margin-bottom: 25px;
        }
        .bottom-buffer-lg-30 {
            margin-bottom: 30px;
        }
        .bottom-buffer-lg-50 {
            margin-bottom: 50px;
        }
    }
    .top-buffer-xs-0 {
        margin-top: 0;
    }
    .top-buffer-xs-1 {
        margin-top: 1px;
    }
    .top-buffer-xs-5 {
        margin-top: 5px;
    }
    .top-buffer-xs-10 {
        margin-top: 10px;
    }
    .top-buffer-xs-15 {
        margin-top: 15px;
    }
    .top-buffer-xs-20 {
        margin-top: 20px;
    }
    .top-buffer-xs-25 {
        margin-top: 25px;
    }
    .top-buffer-xs-30 {
        margin-top: 30px;
    }
    .top-buffer-xs-50 {
        margin-top: 50px;
    }
    @media (min-width: 768px) {
        .top-buffer-sm-0,
        .top-buffer-sm-reset {
            margin-top: 0;
        }
        .top-buffer-sm-1 {
            margin-top: 1px;
        }
        .top-buffer-sm-5 {
            margin-top: 5px;
        }
        .top-buffer-sm-10 {
            margin-top: 10px;
        }
        .top-buffer-sm-15 {
            margin-top: 15px;
        }
        .top-buffer-sm-20 {
            margin-top: 20px;
        }
        .top-buffer-sm-25 {
            margin-top: 25px;
        }
        .top-buffer-sm-30 {
            margin-top: 30px;
        }
        .top-buffer-sm-50 {
            margin-top: 50px;
        }
    }
    @media (min-width: 992px) {
        .top-buffer-md-0,
        .top-buffer-md-reset {
            margin-top: 0;
        }
        .top-buffer-md-1 {
            margin-top: 1px;
        }
        .top-buffer-md-5 {
            margin-top: 5px;
        }
        .top-buffer-md-10 {
            margin-top: 10px;
        }
        .top-buffer-md-15 {
            margin-top: 15px;
        }
        .top-buffer-md-20 {
            margin-top: 20px;
        }
        .top-buffer-md-25 {
            margin-top: 25px;
        }
        .top-buffer-md-30 {
            margin-top: 30px;
        }
        .top-buffer-md-50 {
            margin-top: 50px;
        }
    }
    @media (min-width: 1200px) {
        .top-buffer-lg-0,
        .top-buffer-lg-reset {
            margin-top: 0;
        }
        .top-buffer-lg-1 {
            margin-top: 1px;
        }
        .top-buffer-lg-5 {
            margin-top: 5px;
        }
        .top-buffer-lg-10 {
            margin-top: 10px;
        }
        .top-buffer-lg-15 {
            margin-top: 15px;
        }
        .top-buffer-lg-20 {
            margin-top: 20px;
        }
        .top-buffer-lg-25 {
            margin-top: 25px;
        }
        .top-buffer-lg-30 {
            margin-top: 30px;
        }
        .top-buffer-lg-50 {
            margin-top: 50px;
        }
    }
    .right-buffer-xs-0 {
        padding-right: 0;
    }
    .right-buffer-xs-1 {
        padding-right: 1px;
    }
    .right-buffer-xs-5 {
        padding-right: 5px;
    }
    .right-buffer-xs-10 {
        padding-right: 10px;
    }
    .right-buffer-xs-15 {
        padding-right: 15px;
    }
    .right-buffer-xs-20 {
        padding-right: 20px;
    }
    .right-buffer-xs-30 {
        padding-right: 30px;
    }
    .left-buffer-xs-0 {
        padding-left: 0;
    }
    .left-buffer-xs-1 {
        padding-left: 1px;
    }
    .left-buffer-xs-5 {
        padding-left: 5px;
    }
    .left-buffer-xs-10 {
        padding-left: 10px;
    }
    .left-buffer-xs-15 {
        padding-left: 15px;
    }
    .left-buffer-xs-20 {
        padding-left: 20px;
    }
    .left-buffer-xs-30 {
        padding-left: 30px;
    }
    @media (min-width: 768px) {
        .right-buffer-sm-0 {
            padding-right: 0;
        }
        .right-buffer-sm-1 {
            padding-right: 1px;
        }
        .right-buffer-sm-5 {
            padding-right: 5px;
        }
        .right-buffer-sm-10 {
            padding-right: 10px;
        }
        .right-buffer-sm-reset {
            padding-right: 16px;
        }
        .right-buffer-sm-15 {
            padding-right: 15px;
        }
        .right-buffer-sm-20 {
            padding-right: 20px;
        }
        .right-buffer-sm-30 {
            padding-right: 30px;
        }
        .left-buffer-sm-0 {
            padding-left: 0;
        }
        .left-buffer-sm-1 {
            padding-left: 1px;
        }
        .left-buffer-sm-5 {
            padding-left: 5px;
        }
        .left-buffer-sm-10 {
            padding-left: 10px;
        }
        .left-buffer-sm-15 {
            padding-left: 15px;
        }
        .left-buffer-sm-reset {
            padding-left: 16px;
        }
        .left-buffer-sm-20 {
            padding-left: 20px;
        }
        .left-buffer-sm-30 {
            padding-left: 30px;
        }
    }
    @media (min-width: 992px) {
        .right-buffer-md-0 {
            padding-right: 0;
        }
        .right-buffer-md-1 {
            padding-right: 1px;
        }
        .right-buffer-md-5 {
            padding-right: 5px;
        }
        .right-buffer-md-10 {
            padding-right: 10px;
        }
        .right-buffer-md-15 {
            padding-right: 15px;
        }
        .right-buffer-md-reset {
            padding-right: 16px;
        }
        .right-buffer-md-20 {
            padding-right: 20px;
        }
        .right-buffer-md-30 {
            padding-right: 30px;
        }
        .left-buffer-md-0 {
            padding-left: 0;
        }
        .left-buffer-md-1 {
            padding-left: 1px;
        }
        .left-buffer-md-5 {
            padding-left: 5px;
        }
        .left-buffer-md-10 {
            padding-left: 10px;
        }
        .left-buffer-md-15 {
            padding-left: 15px;
        }
        .left-buffer-md-reset {
            padding-left: 16px;
        }
        .left-buffer-md-20 {
            padding-left: 20px;
        }
        .left-buffer-md-30 {
            padding-left: 30px;
        }
    }
    @media (min-width: 1200px) {
        .right-buffer-lg-0 {
            padding-right: 0;
        }
        .right-buffer-lg-1 {
            padding-right: 1px;
        }
        .right-buffer-lg-5 {
            padding-right: 5px;
        }
        .right-buffer-lg-10 {
            padding-right: 10px;
        }
        .right-buffer-lg-15 {
            padding-right: 15px;
        }
        .right-buffer-lg-reset {
            padding-right: 16px;
        }
        .right-buffer-lg-20 {
            padding-right: 20px;
        }
        .right-buffer-lg-30 {
            padding-right: 30px;
        }
        .left-buffer-lg-0 {
            padding-left: 0;
        }
        .left-buffer-lg-1 {
            padding-left: 1px;
        }
        .left-buffer-lg-5 {
            padding-left: 5px;
        }
        .left-buffer-lg-10 {
            padding-left: 10px;
        }
        .left-buffer-lg-15 {
            padding-left: 15px;
        }
        .left-buffer-lg-reset {
            padding-left: 16px;
        }
        .left-buffer-lg-20 {
            padding-left: 20px;
        }
        .left-buffer-lg-30 {
            padding-left: 30px;
        }
    }
    header {
        display: block;
    }
    [hidden] {
        display: none;
    }
    html {
        font-family: MiloWeb, Verdana, Geneva, sans-serif;
        font-size: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1.5em;
    }
    body {
        margin: 0;
        padding: 0;
    }
    .header__logo {
        float: left;
        width: 100%;
        text-align: center;
        // margin: 24px 0;
        // margin: 1.5rem 0;
        margin: 39px 0 24px;
        padding: 0;
    }
    @media (min-width: 48em) {
        .header__logo {
            width: 100%;
            text-align: left;
            margin: 30px 26px;
        }
    }
    .header__logo-image {
        vertical-align: bottom;
        width: 100%;
        max-width: 510px;
        height: auto;
    }
    @media (min-width: 768px){
        .header__logo-image{
            max-width: 332px;
        }
    }
    .header__site-link:link,
    .header__site-link:visited {
        color: #000;
        text-decoration: none;
    }
    .header__site-link:focus,
    .header__site-link:hover {
        text-decoration: underline;
    }
    #logo a.webheader,
    #logo a.webheader:hover,
    #logo.webheader {
        font-weight: 700;
        text-transform: uppercase;
        color: #0c234b;
        font-size: 1.8em;
        text-decoration: none;
        display: flex;
        line-height: 0.9em;
        text-align: left;
    }
    header#header_ua {
        max-height: 59px;
        min-height: 10px;
    }
    @media print {
        a:link,
        a:visited {
            text-decoration: underline !important;
        }
        a:link.header__site-link,
        a:visited.header__site-link {
            text-decoration: none !important;
        }
        #page,
        body {
            color: #000;
            background-color: transparent !important;
            background-image: none !important;
        }
    }

                  `}render(){return V`
    <header class="header page-row" id="header_site" role="banner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="https://www.arizona.edu/" title="The University of Arizona, Tucson, Arizona | Home" class="header__logo active" rel="home" id="logo"><img src="https://www.arizona.edu/sites/default/files/www_webheader-01.svg" alt="The University of Arizona, Tucson, Arizona | Home" class="header__logo-image"></a>              
                </div>
                <div class="col-xs-12 col-sm-6 col-md-8">
                    <div class="row">
                        <div class="region region-header-2">
                            <div id="block-bean-uaqs-audience-select" class="block first odd col-12 col-lg-6" role="complementary" aria-label="select menu">
                                <az-select-menu baseurl="https://live-az-admissions.pantheonsite.io" menuId="header----select-menu"></az-select-menu>
                            </div>
                            <div class="col-12 pr-0 col-lg-6 block block-block-content block-block-content6c97ac4e-e033-4a8e-90d7-0d93867d625a">
                                <div class="col-lg-6 pl-lg-1 pr-lg-1">
                                    <div id="block-bean-cta-request-info" class="block block-bean even" role="complementary" aria-label="call to action link">
                                        <az-button theme="primary" block outline="true" link="https://www.arizona.edu/admissions/visit" elmid="cta-visit" value="Visit"></az-button>
                                    </div>
                                </div>
                                <div class="col-lg-6 pl-lg-2 pr-0"><div id="block-bean-cta-apply" class="block block-bean last even" role="complementary" aria-label="call to action link">
                                    <az-button theme="primary" block link="https://www.arizona.edu/admissions/apply" elmid="cta-apply" value="Apply"></az-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /.row -->
        </div> <!-- /.container -->
    </header>
    `}})})();