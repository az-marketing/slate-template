(()=>{function t(t,e,o,r){Object.defineProperty(t,e,{get:o,set:r,enumerable:!0,configurable:!0})}var e=globalThis,o={},r={},n=e.parcelRequirefbca;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequirefbca=n);"use strict";var i=n.register;i("fYgrz",function(e,o){t(e.exports,"css",()=>n("iSKEb").css),t(e.exports,"html",()=>n("19cNw").html),t(e.exports,"LitElement",()=>n("h3wye").LitElement),n("aA4Rn"),n("19cNw"),n("h3wye"),n("bWWHI")}),i("aA4Rn",function(e,o){t(e.exports,"ReactiveElement",()=>w),t(e.exports,"css",()=>n("iSKEb").css);var r=n("iSKEb");let{is:i,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:s,getOwnPropertySymbols:p,getPrototypeOf:d}=Object,c=globalThis,f=c.trustedTypes,b=f?f.emptyScript:"",u=c.reactiveElementPolyfillSupport,m=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},h=(t,e)=>!i(t,e),x={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:h};Symbol.metadata??=Symbol("metadata"),c.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&a(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){let{get:r,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){let i=r?.call(this);n.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;let t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){let t=this.properties;for(let e of[...s(t),...p(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,o]of e)this.elementProperties.set(t,o)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let o of new Set(t.flat(1/0).reverse()))e.unshift((0,r.getCompatibleStyle)(o));else void 0!==t&&e.push((0,r.getCompatibleStyle)(t));return e}static _$Eu(t,e){let o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,r.adoptStyles)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e){let o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:g).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){let o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(!((o??=this.constructor.getPropertyOptions(t)).hasChanged??h)(this[t],e))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],o)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach(t=>this._$EO(t,this[t])),this._$Ej()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,u?.({ReactiveElement:w}),(c.reactiveElementVersions??=[]).push("2.0.3")}),i("iSKEb",function(e,o){t(e.exports,"css",()=>p),t(e.exports,"adoptStyles",()=>d),t(e.exports,"getCompatibleStyle",()=>c);let r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class l{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let o=void 0!==e&&1===e.length;o&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(e,t))}return t}toString(){return this.cssText}}let s=t=>new l("string"==typeof t?t:t+"",void 0,i),p=(t,...e)=>new l(1===t.length?t[0]:e.reduce((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]),t,i),d=(t,e)=>{if(n)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let o of e){let e=document.createElement("style"),n=r.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=o.cssText,t.appendChild(e)}},c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return s(e)})(t):t}),i("19cNw",function(e,o){t(e.exports,"html",()=>A),t(e.exports,"noChange",()=>E),t(e.exports,"render",()=>D);let r=globalThis,n=r.trustedTypes,i=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,s="?"+l,p=`<${s}>`,d=document,c=()=>d.createComment(""),f=t=>null===t||"object"!=typeof t&&"function"!=typeof t,b=Array.isArray,u=t=>b(t)||"function"==typeof t?.[Symbol.iterator],m="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,x=/>/g,w=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,y=/"/g,k=/^(?:script|style|textarea|title)$/i,z=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),A=z(1),E=(z(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),_=new WeakMap,$=d.createTreeWalker(d,129);function M(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}let j=(t,e)=>{let o=t.length-1,r=[],n,i=2===e?"<svg>":"",s=g;for(let e=0;e<o;e++){let o=t[e],d,c,f=-1,b=0;for(;b<o.length&&(s.lastIndex=b,null!==(c=s.exec(o)));)b=s.lastIndex,s===g?"!--"===c[1]?s=h:void 0!==c[1]?s=x:void 0!==c[2]?(k.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=w):void 0!==c[3]&&(s=w):s===w?">"===c[0]?(s=n??g,f=-1):void 0===c[1]?f=-2:(f=s.lastIndex-c[2].length,d=c[1],s=void 0===c[3]?w:'"'===c[3]?y:v):s===y||s===v?s=w:s===h||s===x?s=g:(s=w,n=void 0);let u=s===w&&t[e+1].startsWith("/>")?" ":"";i+=s===g?o+p:f>=0?(r.push(d),o.slice(0,f)+a+o.slice(f)+l+u):o+l+(-2===f?e:u)}return[M(t,i+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class L{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,p=0,d=t.length-1,f=this.parts,[b,u]=j(t,e);if(this.el=L.createElement(b,o),$.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=$.nextNode())&&f.length<d;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(a)){let e=u[p++],o=r.getAttribute(t).split(l),n=/([.?@])?(.*)/.exec(e);f.push({type:1,index:i,name:n[2],strings:o,ctor:"."===n[1]?N:"?"===n[1]?U:"@"===n[1]?R:C}),r.removeAttribute(t)}else t.startsWith(l)&&(f.push({type:6,index:i}),r.removeAttribute(t));if(k.test(r.tagName)){let t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=n?n.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],c()),$.nextNode(),f.push({type:2,index:++i});r.append(t[e],c())}}}else if(8===r.nodeType)if(r.data===s)f.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)f.push({type:7,index:i}),t+=l.length-1}i++}}static createElement(t,e){let o=d.createElement("template");return o.innerHTML=t,o}}function I(t,e,o=t,r){if(e===E)return e;let n=void 0!==r?o._$Co?.[r]:o._$Cl,i=f(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(t))._$AT(t,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(e=I(t,n._$AS(t,e.values),n,r)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??d).importNode(e,!0);$.currentNode=r;let n=$.nextNode(),i=0,a=0,l=o[0];for(;void 0!==l;){if(i===l.index){let e;2===l.type?e=new O(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new P(n,this,t)),this._$AV.push(e),l=o[++a]}i!==l?.index&&(n=$.nextNode(),i++)}return $.currentNode=d,r}p(t){let e=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){f(t=I(this,t,e))?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&f(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=L.createElement(M(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{let t=new T(r,this),o=t.u(this.options);t.p(e),this.$(o),this._$AH=t}}_$AC(t){let e=_.get(t.strings);return void 0===e&&_.set(t.strings,e=new L(t)),e}T(t){b(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,r=0;for(let n of t)r===e.length?e.push(o=new O(this.k(c()),this.k(c()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class C{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=S}_$AI(t,e=this,o,r){let n=this.strings,i=!1;if(void 0===n)(i=!f(t=I(this,t,e,0))||t!==this._$AH&&t!==E)&&(this._$AH=t);else{let r,a,l=t;for(t=n[0],r=0;r<n.length-1;r++)(a=I(this,l[o+r],e,r))===E&&(a=this._$AH[r]),i||=!f(a)||a!==this._$AH[r],a===S?t=S:t!==S&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}i&&!r&&this.O(t)}O(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class N extends C{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===S?void 0:t}}class U extends C{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class R extends C{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??S)===E)return;let o=this._$AH,r=t===S&&o!==S||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==S&&(o===S||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class P{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}let H=r.litHtmlPolyfillSupport;H?.(L,O),(r.litHtmlVersions??=[]).push("3.1.1");let D=(t,e,o)=>{let r=o?.renderBefore??e,n=r._$litPart$;if(void 0===n){let t=o?.renderBefore??null;r._$litPart$=n=new O(e.insertBefore(c(),t),t,void 0,o??{})}return n._$AI(t),n}}),i("h3wye",function(e,o){t(e.exports,"css",()=>n("iSKEb").css),t(e.exports,"ReactiveElement",()=>n("aA4Rn").ReactiveElement),t(e.exports,"html",()=>n("19cNw").html),t(e.exports,"noChange",()=>n("19cNw").noChange),t(e.exports,"render",()=>n("19cNw").render),t(e.exports,"LitElement",()=>a);var r=n("aA4Rn"),i=n("19cNw");class a extends r.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,i.render)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.noChange}}a._$litElement$=!0,a.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:a});let l=globalThis.litElementPolyfillSupport;l?.({LitElement:a}),(globalThis.litElementVersions??=[]).push("4.0.3")}),i("bWWHI",function(t,e){}),n("fYgrz");"use strict";var a=n("iSKEb"),l=n("19cNw"),s=n("h3wye"),p={};Object.defineProperty(p,"__esModule",{value:!0}),p.denormalize=p.parse=void 0;"use strict";var d={},c=d&&d.__spreadArray||function(t,e,o){if(o||2==arguments.length)for(var r,n=0,i=e.length;n<i;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(d,"__esModule",{value:!0}),d.Menu=void 0;"use strict";var f={},b=f&&f.__assign||function(){return(b=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},u=f&&f.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o};Object.defineProperty(f,"__esModule",{value:!0}),f.denormalize=f.parse=void 0;"use strict";var m={},g=m&&m.__assign||function(){return(g=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},h=m&&m.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o},x=m&&m.__spreadArray||function(t,e){for(var o=0,r=e.length,n=t.length;o<r;o++,n++)t[n]=e[o];return t};Object.defineProperty(m,"__esModule",{value:!0}),m.Linkset=void 0,m.Linkset=function(){function t(t){this.elements=t,this.size=t.length}return t.prototype.hasLinkTo=function(t){return this.elements.some(function(e){return e.rel===t})},t.prototype.linkTo=function(t){return this.elements.find(function(e){return e.rel===t})},t.prototype.linksTo=function(e){return new t(this.elements.filter(function(t){return t.rel===e}))},t.prototype.linksFrom=function(e){return new t(this.elements.filter(function(t){return t.anchor===e}))},t.prototype.linksWithAttribute=function(e){return new t(this.elements.filter(function(t){return Object.prototype.hasOwnProperty.call(t.attributes,e)}))},t.prototype.linksWithAttributeValue=function(e,o){return new t(this.linksWithAttribute(e).elements.filter(function(t){return(Array.isArray(t.attributes[e])?t.attributes[e]:[t.attributes[e]]).some(function(t){var e,r;return typeof(e=t)==typeof(r=o)&&("string"==typeof e&&"string"==typeof r?e===r:e.value==e.value&&e.language==e.language)})}))},t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.normalize=function(){var t={};return this.elements.forEach(function(e){var o=e.anchor,r=e.rel,n=h(e,["anchor","rel"]);Object.hasOwnProperty.call(t,o)||(t[o]={}),Object.hasOwnProperty.call(t[o],r)||(t[o][r]=[]);var i=n.href,a=n.attributes,l=g({href:i},a);t[o][r].push(l)}),{linkset:Object.entries(t).reduce(function(t,e){var o=e[0],r=e[1];return x(x([],t),[g({anchor:o},r)])},[])}},t}();var w={},v=w&&w.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o};function y(t){var e=[];return t.linkset.forEach(function(t){var o=t.anchor;Object.keys(u(t,["anchor"])).forEach(function(r){t[r].forEach(function(t){e.push(new w.Link(b({anchor:o,rel:r},t)))})})}),new m.Linkset(e)}"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.Link=void 0,w.Link=function(t){var e=t.anchor,o=t.rel,r=t.href,n=v(t,["anchor","rel","href"]);this.anchor=e,this.rel=o,this.href=r,this.attributes=n},f.denormalize=y,f.parse=function(t){return y(JSON.parse(t))};var k={},z=k&&k.__spreadArray||function(t,e,o){if(o||2==arguments.length)for(var r,n=0,i=e.length;n<i;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(k,"__esModule",{value:!0}),k.buildTree=k.hierarchyCompare=k.MenuElement=void 0;var A=function(){function t(t,e){void 0===e&&(e=[]),this.link=t,this.children=S(z([],e,!0))}return Object.defineProperty(t.prototype,"title",{get:function(){return this.link.attributes.title},enumerable:!1,configurable:!0}),t}();function E(t,e){return 0===t.length&&0===e.length?0:0===t.length&&e.length>0?-1:t.length>0&&0===e.length?1:1===t.length&&1===e.length?parseInt(t[0])-parseInt(e[0]):t[0]===e[0]?E(t.slice(1),e.slice(1)):parseInt(t[0])-parseInt(e[0])}function S(t){if(t.length<2)return t.length?[new A(t.shift())]:[];t.sort(function(t,e){return E(t.attributes.hierarchy,e.attributes.hierarchy)});var e,o=[],r=[];do{var n=t.shift();e?n.attributes.hierarchy.length>e.attributes.hierarchy.length?r.push(n):(o.push(new A(e,r)),e=n,r=[]):e=n}while(t.length)return o.push(new A(e,r)),o}function _(t,e){return d.Menu.from(t,e)}k.MenuElement=A,k.hierarchyCompare=E,k.buildTree=S,d.Menu=function(){function t(t,e){this.id=t,this.linkset=e,this.elements=this.linkset.elements,this.size=this.linkset.size,this.tree=(0,k.buildTree)(c([],this.elements,!0))}return t.prototype[Symbol.iterator]=function(){var t=this.elements,e=0;return{next:function(){return e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}},t.prototype.hasLinkTo=function(t){return this.linkset.hasLinkTo(t)},t.prototype.linkTo=function(t){return this.linkset.linkTo(t)},t.prototype.linksTo=function(e){return new t(this.id,this.linkset.linksTo(e))},t.prototype.linksFrom=function(e){return new t(this.id,this.linkset.linksTo(e))},t.prototype.linksWithAttribute=function(e){return new t(this.id,this.linkset.linksWithAttribute(e))},t.prototype.linksWithAttributeValue=function(e,o){return new t(this.id,this.linkset.linksWithAttributeValue(e,o))},t.from=function(e,o){var r=(0,f.denormalize)(e),n=[];o?n.push(o):r.linksWithAttribute("machine-name").elements.forEach(function(t){n.includes(t.attributes["machine-name"][0])||n.push(t.attributes["machine-name"][0])});var i=n.map(function(e){return new t(e,r.linksWithAttributeValue("machine-name",e))});return o?i.shift():i},t}(),p.denormalize=_,p.parse=function(t,e){return _(JSON.parse(t),e)},n("fYgrz");var l=n("19cNw"),s=n("h3wye");let $=Symbol("tabindex"),M=Symbol("oldTabindex"),j=Symbol("newTabindex"),L=t=>class extends t{static get properties(){return{tabIndex:{converter:{fromAttribute:Number,toAttribute:t=>null==t?null:t.toString()},noAccessor:!0,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.hasAttribute("tabindex")||(this.tabIndex=0)}get tabIndex(){return this[$]}set tabIndex(t){let e=this[$];this[$]=t,this.requestUpdate("tabIndex",e)}firstUpdated(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this&&this._focus()}),this.addEventListener("keydown",t=>{!t.defaultPrevented&&t.shiftKey&&9===t.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),setTimeout(()=>{this._isShiftTabbing=!1},0))})}update(t){t.has("disabled")&&this._disabledChanged(this.disabled,t.get("disabled")),t.has("tabIndex")&&(this[j]=this.tabIndex,this._tabIndexChanged(this.tabIndex)),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&(this.focusElement.disabled=this.disabled,this.disabled&&this.blur()),t.has("tabIndex")&&void 0!==this[j]&&(this.focusElement.tabIndex=this[j],this[j]=void 0)}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this._isShiftTabbing||this.focusElement.focus()}focus(){this.disabled||this.focusElement.focus()}blur(){this.focusElement.blur()}_disabledChanged(t,e){t?(this[M]=this.tabIndex,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):e&&(void 0!==this[M]&&(this.tabIndex=this[M]),this.removeAttribute("aria-disabled"))}_tabIndexChanged(t){this.disabled&&t&&(-1!==this.tabIndex&&(this[M]=this.tabIndex),this.tabIndex=null)}};n("fYgrz");var a=n("iSKEb"),I=azButtonStyles=(0,a.css)`
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
			transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
			letter-spacing: 0.04em;
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
		:host([block]) {
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
	`;let T=(t,e="")=>{window.dataLayer=window.dataLayer||[];var o=t.composedPath()[0],r=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:o.textContent||"",elementInnerText:o.innerText||"",title:"shadow-dom-link",element:o,elementClasses:o.className||"",elementId:o.id||"",elementLocation:e||"",elementTarget:o.target||"",elementUrl:o.href||o.action||"",originalEvent:t,parent:r||"",inShadowDom:!0}})};class O extends L(s.LitElement){static properties={link:{type:String,reflect:!0},target:{type:String,reflect:!0},toggle:{type:String,reflect:!0},event:{type:String,reflect:!0},elmid:{type:String,reflect:!0},value:{type:String,reflect:!0}};static get styles(){return[I]}constructor(){super()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o)}changeAttributes(){this.setAttribute("closed","true"),this.setAttribute("aria-expanded","true"),this.requestUpdate()}_handleClick(t){if(T(t,""),this.event){let t=new Event(this.event);document.querySelector(this.target).dispatchEvent(t);return}{let t=new Event("open-az-offcanvas-menu");document.querySelector(this.target).dispatchEvent(t)}}render(){return(0,l.html)`
			${this.link?(0,l.html)`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${T}" id="${this.elmid}">${this.value}<slot></slot></a>`:(0,l.html)`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
		`}firstUpdated(){super.firstUpdated(),this.setAttribute("role","button")}get focusElement(){return this.shadowRoot.querySelector(".button")}}customElements.get("az-button")||customElements.define("az-button",O);class C extends s.LitElement{static styles=(0,a.css)`
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
		button span {
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
		.row section {
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
			.container,
			.container-sm {
				max-width: 540px;
			}
		}
		@media (min-width: 768px) {
			.container,
			.container-md,
			.container-sm {
				max-width: 720px;
			}
		}
		@media (min-width: 992px) {
			.arizona-header {
				height: auto;
			}
			.container,
			.container-lg,
			.container-md,
			.container-sm {
				max-width: 960px;
			}
		}
		@media (min-width: 1200px) {
			.container,
			.container-lg,
			.container-md,
			.container-sm,
			.container-xl {
				max-width: 1140px;
			}
		}
		.arizona-line-logo {
			width: 211px;
			height: 16px;
			margin: 17px 20px 17px 10px;
		}
		@media (min-width: 576px) {
			svg#search-icon {
				width: 266.41px;
				height: 19.8px;
				margin: 15.11px 20px 15.1px 10px;
			}
		}
		.ml-auto,
		.mx-auto {
			margin-left: auto !important;
		}
		.d-none {
			display: none !important;
		}
		@media (min-width: 992px) {
			.d-lg-block {
				-webkit-box-orient: horizontal !important;
				-webkit-box-direction: normal !important;
				-ms-flex-direction: row !important;
				flex-direction: row !important;
				display: flex !important;
			}
			.d-lg-none {
				display: none !important;
			}
		}
		@media (min-width: 1200px) {
			.d-xl-block {
				-webkit-box-orient: horizontal !important;
				-webkit-box-direction: normal !important;
				-ms-flex-direction: row !important;
				flex-direction: row !important;
				display: flex !important;
			}
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
			-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
				0 0 8px rgb(158 171 174 / 60%);
			box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
				0 0 8px rgb(158 171 174 / 60%);
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
		label {
			display: inline-block;
			margin-bottom: 0.5rem;
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
		.input-group > .custom-file,
		.input-group > .custom-select,
		.input-group > .form-control,
		.input-group > .form-control-plaintext {
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
		#block-az-barrio-search {
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
			height: calc(1.5em + 0.75rem + 2px);
			padding: 0.375rem 0.75rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			/* border: 1px solid #ced4da; */
			border-radius: 0;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		[type="search"] {
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
			border-left: 1px solid #ced4da;
		}
		.search-block-form
			.input-group-append
			button#edit-submit
			.search-block-form
			.input-group-append
			button#edit-submit
			svg {
			height: 23px;
			width: 35px;
		}
		.search-block-form .input-group-append button#edit-submit:focus {
			border-color: hsl(191deg 9% 65%);
			outline: 0;
			-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
				0 0 8px rgb(158 171 174 / 60%);
			box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
				0 0 8px rgb(158 171 174 / 60%);
		}
		.input-group-append button#edit-submit svg {
			height: 30px;
			width: 20px;
			margin: 3px 0px;
		}
		button,
		input {
			overflow: visible;
			border: none;
		}
		button,
		input,
		optgroup,
		select,
		textarea {
			margin: 0;
			font-family: inherit;
			font-size: inherit;
			line-height: inherit;
		}
		.btn:not(:disabled):not(.disabled) {
			cursor: pointer;
		}
		.bd-example > .btn,
		.bd-example > .btn-group {
			margin-top: 0.25rem;
			margin-bottom: 0.25rem;
		}
		.btn {
			font-weight: 500;
			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: 0.04em;
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
			padding: 0.375rem 0.75rem;
			font-size: 1rem;
			line-height: 1.5;
			border-radius: 0;
			transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
				border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		[type="button"],
		[type="reset"],
		[type="submit"],
		button {
			-webkit-appearance: button;
		}
		button,
		select {
			text-transform: none;
		}
		button,
		input {
			overflow: visible;
		}
		button,
		input,
		optgroup,
		select,
		textarea {
			margin: 0;
			font-family: inherit;
			font-size: inherit;
			line-height: inherit;
		}
		button {
			border-radius: 0;
		}
		.btn-hollow-default:hover,
		.btn-outline-red:hover {
			background-color: #8b0015 !important;
			border-color: #8b0015 !important;
			color: white;
		}
		.btn:hover {
			color: #212529;
			text-decoration: none;
		}
		[type="button"]:not(:disabled),
		[type="reset"]:not(:disabled),
		[type="submit"]:not(:disabled),
		button:not(:disabled) {
			cursor: pointer;
		}
		.btn-hollow-default,
		.btn-outline-red {
			color: white;
			border-color: #ef4056 !important;
		}

		.input-group-append {
			margin-left: -2px;
		}
		.input-group-append,
		.input-group-btn,
		.input-group-prepend {
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
		.dropdown-menu.dropdown-menu-right,
		.dropdown-menu.pull-right {
			right: 0;
			left: auto;
		}
		@media (min-width: 768px) {
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
				background-color: rgba(0, 28, 72, 0.97);
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
		.resources:hover button + .dropdown-menu,
		.resources button + .dropdown-menu:focus {
			display: block;
		}
		.resources .caret {
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
		.resources button:hover {
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
	`;static properties={thisUrl:{type:String},baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}};constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}static azMenuLevelTemplate(t){return(0,l.html)` ${t} `}static openMenu(t){t.preventDefault();let{target:e}=t;"true"===e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),e.nextElementSibling.classList.remove("show")):(e.setAttribute("aria-expanded","true"),e.nextElementSibling.classList.add("show"))}azMenuParentTemplate(t,e){return(0,l.html)`
			<button
				@click="${C.openMenu}"
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
		`}static azMenuLinkTemplate(t,e){return(0,l.html)`<div class="dropdown-item">
			<a
				href=${e}
				@click="${t=>{T(t,"az-redbar")}}"
				>${t}</a
			>
		</div>`}static azMenuItemTemplate(t){return(0,l.html)`${t}`}renderAzMenuLevel(t){let e=t.map(t=>this.renderAzMenuItem(t));return C.azMenuLevelTemplate(e)}renderAzMenuItem(t){let e=t&&t.link&&t.link.attributes&&t.link.attributes.title,o=t&&t.link&&t.link.href,r=t&&t.children,n=e?t.link.attributes.title:void 0,i=o?t.link.href:void 0,a=r?t.children:void 0;return a.length?this.azMenuParentTemplate(n,a):i?(i="/"===i.charAt(0)?this.thisUrl+i:i,C.azMenuLinkTemplate(n,i)):C.azMenuItemTemplate(n)}fetchData(t,e){this.isLoading=!0;let o=`${t}/system/menu/${e}/linkset`;fetch(o,{}).then(t=>{if(t.ok)return t.json();throw this.isLoading=!1,Error(`Unable to fetch ${o}. ${t.status} ${t.statusText}`)}).then(t=>{try{let o=(0,p.denormalize)(t,e);this.tree=o.tree}catch(t){throw Error("Unable to denormalize menu.")}this.isLoading=!1})}render(){return(0,l.html)`
			<header class="bg-red arizona-header" id="header_arizona" role="banner">
				<div class="container">
					<div class="row">
						<section
							class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities"
						>
							<div
								class="search-block-form block block-search block-search-form-block"
								data-drupal-selector="search-block-form"
								id="block-az-barrio-search"
								role="search"
							>
								<div class="content">
									<form
										action="${this.thisUrl}/search/google"
										method="GET"
										id="search-block-form"
										accept-charset="UTF-8"
										class="search-form search-block-form"
									>
										<div class="input-group">
											<label for="edit-keys" class="sr-only">Search</label>
											<input
												title="Enter the terms you wish to search for."
												data-drupal-selector="edit-keys"
												type="search"
												id="edit-keys"
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
												id="edit-actions"
											>
												<button
													data-drupal-selector="edit-submit"
													type="submit"
													id="edit-submit"
													value="Search"
													class="button js-form-submit form-submit btn"
												>
													<svg
														id="search-icon"
														title="search"
														xmlns="http://www.w3.org/2000/svg"
														height="24px"
														viewBox="0 0 24 24"
														width="24px"
														fill="#8B0015"
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
							</div>
							<div class="resources">
								<span class="caret"></span>
								${this.isLoading?(0,l.html)`
											<button
												role="button"
												aria-expanded="false"
												aria-haspopup="true"
												href="#"
												class="resource-menu btn btn-outline-red"
											>
												<slot name="loading">${this.loadingMessage}</slot>
											</button>
									  `:this.renderAzMenuLevel(this.tree)}
							</div>
						</section>
						<section class="redbar-buttons d-lg-none">
							<az-button
								theme="red"
								redbar
								role="button"
								aria-expanded="false"
								aria-haspopup="true"
								target="az-main-menu"
								aria-controls="navbarOffcanvasDemo"
							>
								<svg
									class="icon"
									id="button-search-icon"
									title="search"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FFFFFF"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path
										d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
									/>
								</svg>
								<span class="icon-text"> search </span>
							</az-button>
							<az-button
								theme="red"
								redbar
								role="button"
								aria-expanded="false"
								aria-haspopup="true"
								target="az-main-menu"
								aria-controls="navbarOffcanvasDemo"
							>
								<svg
									class="icon"
									title="menu"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#FFFFFF"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
								</svg>
								<span class="icon-text"> menu </span>
							</az-button>
						</section>
					</div>
				</div>
			</header>
		`}}customElements.get("az-redbar")||customElements.define("az-redbar",C),n("fYgrz");var a=n("iSKEb"),l=n("19cNw"),s=n("h3wye"),N=function(t){"use strict";var e,o=Object.prototype,r=o.hasOwnProperty,n=Object.defineProperty||function(t,e,o){t[e]=o.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function p(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,o){return t[e]=o}}function d(t,o,r,i){var a,l,s,p,d=Object.create((o&&o.prototype instanceof g?o:g).prototype);return n(d,"_invoke",{value:(a=t,l=r,s=new _(i||[]),p=f,function(t,o){if(p===b)throw Error("Generator is already running");if(p===u){if("throw"===t)throw o;return M()}for(s.method=t,s.arg=o;;){var r=s.delegate;if(r){var n=function t(o,r){var n=r.method,i=o.iterator[n];if(i===e)return(r.delegate=null,"throw"===n&&o.iterator.return&&(r.method="return",r.arg=e,t(o,r),"throw"===r.method))?m:("return"!==n&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+n+"' method")),m);var a=c(i,o.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var l=a.arg;return l?l.done?(r[o.resultName]=l.value,r.next=o.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):l:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,m)}(r,s);if(n){if(n===m)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(p===f)throw p=u,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);p=b;var i=c(a,l,s);if("normal"===i.type){if(p=s.done?u:"suspendedYield",i.arg===m)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(p=u,s.method="throw",s.arg=i.arg)}})}),d}function c(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f="suspendedStart",b="executing",u="completed",m={};function g(){}function h(){}function x(){}var w={};p(w,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v($([])));y&&y!==o&&r.call(y,a)&&(w=y);var k=x.prototype=g.prototype=Object.create(w);function z(t){["next","throw","return"].forEach(function(e){p(t,e,function(t){return this._invoke(e,t)})})}function A(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e(function(o,a){!function o(n,i,a,l){var s=c(t[n],t,i);if("throw"===s.type)l(s.arg);else{var p=s.arg,d=p.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then(function(t){o("next",t,a,l)},function(t){o("throw",t,a,l)}):e.resolve(d).then(function(t){p.value=t,a(p)},function(t){return o("throw",t,a,l)})}}(n,i,o,a)})}return o=o?o.then(a,a):a()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function $(t){if(t){var o=t[a];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function o(){for(;++n<t.length;)if(r.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=e,o.done=!0,o};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return h.prototype=x,n(k,"constructor",{value:x,configurable:!0}),n(x,"constructor",{value:h,configurable:!0}),h.displayName=p(x,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},z(A.prototype),p(A.prototype,l,function(){return this}),t.AsyncIterator=A,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new A(d(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then(function(t){return t.done?t.value:a.next()})},z(k),p(k,s,"Generator"),p(k,a,function(){return this}),p(k,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=$,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var o in this)"t"===o.charAt(0)&&r.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function n(r,n){return l.type="throw",l.arg=t,o.next=r,n&&(o.method="next",o.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),p=r.call(a,"finallyLoc");if(s&&p){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else if(p){if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),S(o),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;S(o)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,o,r){return this.delegate={iterator:$(t),resultName:o,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}({});try{regeneratorRuntime=N}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=N:Function("r","regeneratorRuntime = r")(N)}class U extends s.LitElement{static properties={thisUrl:{type:String},data:{attribute:!1},baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}};static menuLevelTemplate(t){return(0,l.html)` ${t} `}fetchData(t,e){this.isLoading=!0;let o=`${t}/system/menu/${e}/linkset`;fetch(o,{}).then(t=>{if(t.ok)return t.json();throw this.isLoading=!1,Error(`Unable to fetch ${o}. ${t.status} ${t.statusText}`)}).then(t=>{try{let o=(0,p.denormalize)(t,e);this.tree=o.tree}catch(t){throw Error("Unable to denormalize menu.")}this.isLoading=!1})}menuParentTemplate(t,e){return(0,l.html)`<li
			part="menu-item"
			class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open"
		>
      <button
        @click="${U.openMenu}"
        role="button"
        aria-expanded="false"
        aria-haspopup="true"
        href="#"
        class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle"
      >
        ${t}
      </button>
			<div class="dropdown-menu">${this.renderAzMenuLevel(e)}</div>
    </li>`}static openMenu(t){t.preventDefault();let{target:e}=t,o=document.querySelector("az-main-menu").shadowRoot.querySelector(".nav-item.show button");"true"===e.getAttribute("aria-expanded")?(e.parentElement.classList.remove("show"),e.setAttribute("aria-expanded","false"),e.nextElementSibling.classList.remove("show")):(o&&(o.parentElement.classList.remove("show"),o.setAttribute("aria-expanded","false"),o.nextElementSibling.classList.remove("show")),e.parentElement.classList.add("show"),e.setAttribute("aria-expanded","true"),e.nextElementSibling.classList.add("show"))}renderAzMenuLevel(t){let e=t.map(t=>this.renderAzMenuItem(t));return U.menuLevelTemplate(e)}static azMenuTopLevelLinkTemplate(t,e){return e="/"===e.charAt(0)?this.thisUrl+e:e,(0,l.html)`<li part="menu-item" class="nav-item">
			<a href=${e} class="nav-link">${t}</a>
		</li>`}static menuLinkTemplate(t,e){return e="/"===e.charAt(0)?this.thisUrl+e:e,(0,l.html)`<a
			part="menu-item"
			class="dropdown-item"
			href=${e}
			@click="${t=>{T(t,"az-main-menu")}}"
			>${t}</a
		>`}static menuItemTemplate(t){return(0,l.html)`<li part="menu-item">${t}</li>`}renderAzMenuItem(t){let e=t?.link?.attributes?.title,o=t?.link?.href,r=t?.children,n=t?.link?.attributes?.hierarchy,i=0;i=n.length;let a=o&&"/"===o.charAt(0)?`${this.thisUrl}${o}`:o;return r&&r.length?this.menuParentTemplate(e,r):r&&0===r.length&&a&&1===i?U.azMenuTopLevelLinkTemplate(e,a):a?U.menuLinkTemplate(e,a):U.menuItemTemplate(e)}constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}static styles=(0,a.css)`
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
       transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
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
   .navbar-offcanvas .navbar-offcanvas-search .input-group input.form-control {
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
       `;async firstUpdated(){await new Promise(t=>setTimeout(t,0)),this.addEventListener("open-az-offcanvas-menu",this.handleOpen),await new Promise(t=>setTimeout(t,0)),this.addEventListener("close-az-offcanvas-menu",this.handleClose)}handleClose=t=>{this.setAttribute("state","closed"),document.body.style.overflowY="initial"};handleOpen=t=>{this.setAttribute("state","open"),document.body.style.overflowY="hidden"};render(){return(0,l.html)`
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
                                ${this.isLoading?(0,l.html)`<li
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
      `}}customElements.get("az-main-menu")||customElements.define("az-main-menu",U),n("fYgrz");var a=n("iSKEb"),l=n("19cNw"),s=n("h3wye");n("fYgrz");var a=n("iSKEb"),l=n("19cNw"),s=n("h3wye");function R(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function P(t){var e=R(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=R(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function D(t){if("undefined"==typeof ShadowRoot)return!1;var e=R(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var B=Math.round;function W(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function G(t,e,o){void 0===e&&(e=!1),void 0===o&&(o=!1);var r=t.getBoundingClientRect(),n=1,i=1;e&&H(t)&&(n=t.offsetWidth>0&&B(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&B(r.height)/t.offsetHeight||1);var a=(P(t)?R(t):window).visualViewport,l=!!/^((?!chrome|android).)*safari/i.test(W())&&o,s=(r.left+(l&&a?a.offsetLeft:0))/n,p=(r.top+(l&&a?a.offsetTop:0))/i,d=r.width/n,c=r.height/i;return{width:d,height:c,top:p,right:s+d,bottom:p+c,left:s,x:s,y:p}}function Z(t){var e=R(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function F(t){return t?(t.nodeName||"").toLowerCase():null}function V(t){return((P(t)?t.ownerDocument:t.document)||window.document).documentElement}function Y(t){return R(t).getComputedStyle(t)}function Q(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function J(t){return"html"===F(t)?t:t.assignedSlot||t.parentNode||(D(t)?t.host:null)||V(t)}function X(t,e){void 0===e&&(e=[]);var o,r=function t(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:H(e)&&Q(e)?e:t(J(e))}(t),n=r===(null==(o=t.ownerDocument)?void 0:o.body),i=R(r),a=n?[i].concat(i.visualViewport||[],Q(r)?r:[]):r,l=e.concat(a);return n?l:l.concat(X(J(a)))}function q(t){return H(t)&&"fixed"!==Y(t).position?t.offsetParent:null}function K(t){for(var e=R(t),o=q(t);o&&["table","td","th"].indexOf(F(o))>=0&&"static"===Y(o).position;)o=q(o);return o&&("html"===F(o)||"body"===F(o)&&"static"===Y(o).position)?e:o||function(t){var e=/firefox/i.test(W());if(/Trident/i.test(W())&&H(t)&&"fixed"===Y(t).position)return null;var o=J(t);for(D(o)&&(o=o.host);H(o)&&0>["html","body"].indexOf(F(o));){var r=Y(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(t)||e}var tt="bottom",te="right",to="left",tr=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],tn={placement:"bottom",modifiers:[],strategy:"absolute"};function ti(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}var ta={passive:!0};function tl(t){return t.split("-")[0]}function ts(t){return t.split("-")[1]}var tp={top:"auto",right:"auto",bottom:"auto",left:"auto"};function td(t){var e,o,r,n,i,a,l,s=t.popper,p=t.popperRect,d=t.placement,c=t.variation,f=t.offsets,b=t.position,u=t.gpuAcceleration,m=t.adaptive,g=t.roundOffsets,h=t.isFixed,x=f.x,w=void 0===x?0:x,v=f.y,y=void 0===v?0:v,k="function"==typeof g?g({x:w,y:y}):{x:w,y:y};w=k.x,y=k.y;var z=f.hasOwnProperty("x"),A=f.hasOwnProperty("y"),E=to,S="top",_=window;if(m){var $=K(s),M="clientHeight",j="clientWidth";$===R(s)&&"static"!==Y($=V(s)).position&&"absolute"===b&&(M="scrollHeight",j="scrollWidth"),("top"===d||(d===to||d===te)&&"end"===c)&&(S=tt,y-=(h&&$===_&&_.visualViewport?_.visualViewport.height:$[M])-p.height,y*=u?1:-1),(d===to||("top"===d||d===tt)&&"end"===c)&&(E=te,w-=(h&&$===_&&_.visualViewport?_.visualViewport.width:$[j])-p.width,w*=u?1:-1)}var L=Object.assign({position:b},m&&tp),I=!0===g?(e={x:w,y:y},o=R(s),r=e.x,n=e.y,{x:B(r*(i=o.devicePixelRatio||1))/i||0,y:B(n*i)/i||0}):{x:w,y:y};return(w=I.x,y=I.y,u)?Object.assign({},L,((l={})[S]=A?"0":"",l[E]=z?"0":"",l.transform=1>=(_.devicePixelRatio||1)?"translate("+w+"px, "+y+"px)":"translate3d("+w+"px, "+y+"px, 0)",l)):Object.assign({},L,((a={})[S]=A?y+"px":"",a[E]=z?w+"px":"",a.transform="",a))}var tc=function(t){void 0===t&&(t={});var e=t,o=e.defaultModifiers,r=void 0===o?[]:o,n=e.defaultOptions,i=void 0===n?tn:n;return function(t,e,o){void 0===o&&(o=i);var n,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},tn,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},s=[],p=!1,d={state:l,setOptions:function(o){var n,a,p,f,b,u,m="function"==typeof o?o(l.options):o;c(),l.options=Object.assign({},i,l.options,m),l.scrollParents={reference:P(t)?X(t):t.contextElement?X(t.contextElement):[],popper:X(e)};var g=(a=Object.keys(n=[].concat(r,l.options.modifiers).reduce(function(t,e){var o=t[e.name];return t[e.name]=o?Object.assign({},o,e,{options:Object.assign({},o.options,e.options),data:Object.assign({},o.data,e.data)}):e,t},{})).map(function(t){return n[t]}),p=new Map,f=new Set,b=[],a.forEach(function(t){p.set(t.name,t)}),a.forEach(function(t){f.has(t.name)||function t(e){f.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!f.has(e)){var o=p.get(e);o&&t(o)}}),b.push(e)}(t)}),u=b,tr.reduce(function(t,e){return t.concat(u.filter(function(t){return t.phase===e}))},[]));return l.orderedModifiers=g.filter(function(t){return t.enabled}),l.orderedModifiers.forEach(function(t){var e=t.name,o=t.options,r=t.effect;if("function"==typeof r){var n=r({state:l,name:e,instance:d,options:void 0===o?{}:o});s.push(n||function(){})}}),d.update()},forceUpdate:function(){if(!p){var t=l.elements,e=t.reference,o=t.popper;if(ti(e,o)){l.rects={reference:function(t,e,o){void 0===o&&(o=!1);var r,n,i,a=H(e),l=H(e)&&(n=B((r=e.getBoundingClientRect()).width)/e.offsetWidth||1,i=B(r.height)/e.offsetHeight||1,1!==n||1!==i),s=V(e),p=G(t,l,o),d={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!o)&&((("body"!==F(e)||Q(s))&&(d=function(t){return t!==R(t)&&H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:Z(t)}(e)),H(e))?(c=G(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=G(V(s)).left+Z(s).scrollLeft)),{x:p.left+d.scrollLeft-c.x,y:p.top+d.scrollTop-c.y,width:p.width,height:p.height}}(e,K(o),"fixed"===l.options.strategy),popper:(r=G(o),n=o.offsetWidth,i=o.offsetHeight,1>=Math.abs(r.width-n)&&(n=r.width),1>=Math.abs(r.height-i)&&(i=r.height),{x:o.offsetLeft,y:o.offsetTop,width:n,height:i})},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(t){return l.modifiersData[t.name]=Object.assign({},t.data)});for(var r,n,i,a=0;a<l.orderedModifiers.length;a++){if(!0===l.reset){l.reset=!1,a=-1;continue}var s=l.orderedModifiers[a],c=s.fn,f=s.options,b=void 0===f?{}:f,u=s.name;"function"==typeof c&&(l=c({state:l,options:b,name:u,instance:d})||l)}}}},update:(n=function(){return new Promise(function(t){d.forceUpdate(),t(l)})},function(){return a||(a=new Promise(function(t){Promise.resolve().then(function(){a=void 0,t(n())})})),a}),destroy:function(){c(),p=!0}};if(!ti(t,e))return d;function c(){s.forEach(function(t){return t()}),s=[]}return d.setOptions(o).then(function(t){!p&&o.onFirstUpdate&&o.onFirstUpdate(t)}),d}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=void 0===n||n,a=r.resize,l=void 0===a||a,s=R(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach(function(t){t.addEventListener("scroll",o.update,ta)}),l&&s.addEventListener("resize",o.update,ta),function(){i&&p.forEach(function(t){t.removeEventListener("scroll",o.update,ta)}),l&&s.removeEventListener("resize",o.update,ta)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,o=t.name;e.modifiersData[o]=function(t){var e,o=t.reference,r=t.element,n=t.placement,i=n?tl(n):null,a=n?ts(n):null,l=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2;switch(i){case"top":e={x:l,y:o.y-r.height};break;case tt:e={x:l,y:o.y+o.height};break;case te:e={x:o.x+o.width,y:s};break;case to:e={x:o.x-r.width,y:s};break;default:e={x:o.x,y:o.y}}var p=i?["top","bottom"].indexOf(i)>=0?"x":"y":null;if(null!=p){var d="y"===p?"height":"width";switch(a){case"start":e[p]=e[p]-(o[d]/2-r[d]/2);break;case"end":e[p]=e[p]+(o[d]/2-r[d]/2)}}return e}({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=o.adaptive,i=o.roundOffsets,a=void 0===i||i,l={placement:tl(e.placement),variation:ts(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,td(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:void 0===n||n,roundOffsets:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,td(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach(function(t){var o=e.styles[t]||{},r=e.attributes[t]||{},n=e.elements[t];H(n)&&F(n)&&(Object.assign(n.style,o),Object.keys(r).forEach(function(t){var e=r[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)}))})},effect:function(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(t){var r=e.elements[t],n=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:o[t]).reduce(function(t,e){return t[e]="",t},{});H(r)&&F(r)&&(Object.assign(r.style,i),Object.keys(n).forEach(function(t){r.removeAttribute(t)}))})}},requires:["computeStyles"]}]});class tf extends s.LitElement{static styles=(0,a.css)`
			* {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}

			.input-group .form-control,
			.input-group-addon,
			.input-group-btn {
				display: table-cell;
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
				letter-spacing: 0.04em;
				text-transform: uppercase;
				white-space: normal;
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

			.input-group .form-control:first-child,
			.input-group-addon:first-child,
			.input-group-btn:first-child > .btn,
			.input-group-btn:first-child > .btn-group > .btn,
			.input-group-btn:first-child > .dropdown-toggle,
			.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
			.input-group-btn:last-child
				> .btn:not(:last-child):not(.dropdown-toggle) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}

			.input-group .form-control:not(:first-child):not(:last-child),
			.input-group-addon:not(:first-child):not(:last-child),
			.input-group-btn:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
			.input-group .form-control,
			.input-group-addon,
			.input-group-btn {
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
				-webkit-transition: border-color ease-in-out 0.15s,
					box-shadow ease-in-out 0.15s;
				-webkit-transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
			}
			.form-control {
				border: 2px solid #cbd1e0;
			}
			button,
			input,
			select,
			textarea {
				font-family: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			button,
			select {
				text-transform: none;
			}
			button,
			input,
			optgroup,
			select,
			textarea {
				color: inherit;
				font: inherit;
				margin: 0;
			}
			select.select-primary:active,
			select.select-primary:focus,
			select.select-primary:hover {
				box-shadow: none;
				outline: 0;
			}
			select.select-primary:focus,
			select.select-primary:hover {
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
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);
				background-repeat: no-repeat;
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
				font-family: MiloWeb, sans-serif;
				font-weight: 700;
				letter-spacing: 0.25px;
				line-height: 1.5em;
				outline: none;
				text-indent: 0.01px;
				-webkit-transition: 0.15s all ease-in-out;
				transition: 0.15s all ease-in-out;
				text-overflow: "";
			}

			select.select-primary {
				-webkit-appearance: none;
				-moz-appearance: none;
				-o-appearance: none;
				appearance: none;
				background-color: #f4f6f9;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);
				background-repeat: no-repeat;
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
				font-family: MiloWeb, sans-serif;
				font-weight: 700;
				letter-spacing: 0.25px;
				line-height: 1.5em;
				outline: none;
				text-indent: 0.01px;
				-webkit-transition: 0.15s all ease-in-out;
				transition: 0.15s all ease-in-out;
				text-overflow: "";
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -2px;
				margin-top: 0;
				padding: 5px 8px;
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -1px;
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
			.input-group-btn > .btn {
				position: relative;
			}

			.input-group-btn > .btn {
				position: relative;
			}
			.btn.disabled,
			.btn[disabled],
			fieldset[disabled] .btn {
				cursor: not-allowed;
				opacity: 0.65;
				-webkit-box-shadow: none;
				box-shadow: none;
			}
			.btn-blue,
			.btn-primary {
				color: #fff;
				background-color: #0c234b;
				border-color: #0c234b;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			#tooltip[data-show] {
				display: block;
				font-size: 14px;
			}
			#tooltip {
				display: none;
				font-size: 14px;
			}
			#tooltip[data-hide] {
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
				content: "";
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
			#tooltip[data-popper-placement^="bottom"] > #arrow {
				top: -4px;
			}

			#tooltip[data-popper-placement^="left"] > #arrow {
				right: -4px;
			}

			#tooltip[data-popper-placement^="right"] > #arrow {
				left: -4px;
			}
			#tooltip {
				position: absolute;
				top: 0px;
				left: 0px;
				z-index: 1060;
				display: none;
				max-width: 276px;
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
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

			.popover .arrow::before,
			.popover .arrow::after {
				position: absolute;
				display: block;
				content: "";
				border-color: transparent;
				border-style: solid;
			}

			.bs-popover-top,
			.bs-popover-auto[x-placement^="top"] {
				margin-bottom: 0.5rem;
			}

			.bs-popover-top > .arrow,
			.bs-popover-auto[x-placement^="top"] > .arrow {
				bottom: calc(-0.5rem - 1px);
			}

			.bs-popover-top > .arrow::before,
			.bs-popover-auto[x-placement^="top"] > .arrow::before {
				bottom: 0;
				border-width: 0.5rem 0.5rem 0;
				border-top-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-top > .arrow::after,
			.bs-popover-auto[x-placement^="top"] > .arrow::after {
				bottom: 1px;
				border-width: 0.5rem 0.5rem 0;
				border-top-color: #fff;
			}

			.bs-popover-right,
			.bs-popover-auto[x-placement^="right"] {
				margin-left: 0.5rem;
			}

			.bs-popover-right > .arrow,
			.bs-popover-auto[x-placement^="right"] > .arrow {
				left: calc(-0.5rem - 1px);
				width: 0.5rem;
				height: 1rem;
				margin: 0.3rem 0;
			}

			.bs-popover-right > .arrow::before,
			.bs-popover-auto[x-placement^="right"] > .arrow::before {
				left: 0;
				border-width: 0.5rem 0.5rem 0.5rem 0;
				border-right-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-right > .arrow::after,
			.bs-popover-auto[x-placement^="right"] > .arrow::after {
				left: 1px;
				border-width: 0.5rem 0.5rem 0.5rem 0;
				border-right-color: #fff;
			}

			.bs-popover-bottom,
			.bs-popover-auto[x-placement^="bottom"] {
				margin-top: 0.5rem;
			}

			.bs-popover-bottom > .arrow,
			.bs-popover-auto[x-placement^="bottom"] > .arrow {
				top: calc(-0.5rem - 1px);
			}

			.bs-popover-bottom > .arrow::before,
			.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
				top: 0;
				border-width: 0 0.5rem 0.5rem 0.5rem;
				border-bottom-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-bottom > .arrow::after,
			.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
				top: 1px;
				border-width: 0 0.5rem 0.5rem 0.5rem;
				border-bottom-color: #fff;
			}

			.bs-popover-bottom .popover-header::before,
			.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
				position: absolute;
				top: 0;
				left: 50%;
				display: block;
				width: 1rem;
				margin-left: -0.5rem;
				content: "";
				border-bottom: 1px solid #f7f7f7;
			}

			.bs-popover-left,
			.bs-popover-auto[x-placement^="left"] {
				margin-right: 0.5rem;
			}

			.bs-popover-left > .arrow,
			.bs-popover-auto[x-placement^="left"] > .arrow {
				right: calc(-0.5rem - 1px);
				width: 0.5rem;
				height: 1rem;
				margin: 0.3rem 0;
			}

			.bs-popover-left > .arrow::before,
			.bs-popover-auto[x-placement^="left"] > .arrow::before {
				right: 0;
				border-width: 0.5rem 0 0.5rem 0.5rem;
				border-left-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-left > .arrow::after,
			.bs-popover-auto[x-placement^="left"] > .arrow::after {
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
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
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
				-webkit-transition: border-color ease-in-out 0.15s,
					box-shadow ease-in-out 0.15s;
				-webkit-transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
			}
			.form-control:focus {
				border-color: #9eabae;
				outline: 0;
				-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
					0 0 8px rgba(158, 171, 174, 0.6);
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
					0 0 8px rgba(158, 171, 174, 0.6);
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
			.btn-group
				> .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
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
			.input-group-btn:last-child
				> .btn:not(:last-child):not(.dropdown-toggle) {
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
	`;static get properties(){return{baseUrl:{type:String},menuId:{type:String},branding:{type:String},tree:{type:Array},isLoading:{type:Boolean,attribute:!1},loadingMessage:{type:String}}}constructor(){super(),this.tree=[],this.isLoading=!1,this.loadingMessage="Loading..."}_showTooltip=()=>{this.tooltip.setAttribute("data-show",""),this.popperInstance.setOptions({modifiers:[{name:"eventListeners",enabled:!0}]}),this.popperInstance.update()};_hideTooltip=()=>{this.tooltip.removeAttribute("data-show"),this.popperInstance.setOptions({modifiers:[{name:"eventListeners",enabled:!1}]})};shadowSelect=t=>{window.dataLayer=window.dataLayer||[];let e=this.select.options[this.select.selectedIndex],o=e.dataset.title.trim();window.dataLayer.push({event:"shadow_event_click",shadow_event:{elementInnerHTML:o,elementInnerText:o.split(" ").join("-"),title:"shadow-dom-link",element:e,elementLocation:"az-select-menu",elementUrl:e.dataset.href,originalEvent:"click",inShadowDom:!0}})};_handleEvents=t=>{let e=this.select.options[this.select.selectedIndex].dataset.href;if(e.includes("%3Cnolink%3E"))switch(this.btn.classList.add("disabled"),this.select.setAttribute("aria-invalid","true"),t.type){case"click":this.btn&&(this.select.focus(),this._showTooltip());break;case"focus":case"mouseenter":this.btn?this._showTooltip():this._hideTooltip();break;case"mouseleave":this._hideTooltip()}else this.select.setAttribute("aria-invalid","false"),this.btn.classList.remove("disabled"),"click"===t.type&&(this._hideTooltip(),t.stopImmediatePropagation(),window.location=e)};connectedCallback(){super.connectedCallback(),this.baseUrl&&this.menuId&&this.fetchData(this.baseUrl,this.menuId)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}static azMenuLevelTemplate(t){return(0,l.html)` ${t} `}static azMenuOptionTemplate(t,e){return(0,l.html)`<option
			data-href="${e}"
			data-title="${t}"
		>
			${t}
		</option>`}static azMenuItemTemplate(t){return(0,l.html)`${t}`}renderAzSelectMenuOptions(t){let e=t.map(t=>this.renderAzMenuItem(t));return tf.azMenuLevelTemplate(e)}renderAzMenuItem(t){let e=t?.link?.attributes?.title,o=t?.link?.href;return(o="/"===o.charAt(0)?"https://www.arizona.edu"+o:o)?tf.azMenuOptionTemplate(e,o):this.azMenuItemTemplate(e)}fetchData(t,e){this.isLoading=!0;let o=`${t}/system/menu/${e}/linkset`;fetch(o,{}).then(t=>{if(t.ok)return t.json();throw this.isLoading=!1,Error(`Unable to fetch ${o}. ${t.status} ${t.statusText}`)}).then(t=>{try{let o=(0,p.denormalize)(t,e);this.tree=o.tree}catch(t){throw Error("Unable to denormalize menu.")}this.isLoading=!1})}async firstUpdated(){await new Promise(t=>setTimeout(t,0)),this.btn=this.shadowRoot.querySelector("#button"),this.btn.addEventListener("click",this._handleEvents,{passive:!0}),this.btn.addEventListener("mouseenter",this._handleEvents,{passive:!0}),this.btn.addEventListener("mouseleave",this._handleEvents,{passive:!0}),this.btn.addEventListener("focus",this._handleEvents,{passive:!0}),this.btn.addEventListener("touchstart",this._handleEvents,{passive:!0}),this.btn.addEventListener("blur",this._handleEvents,{passive:!0}),this.form=this.shadowRoot.querySelector("form"),this.tooltip=this.shadowRoot.querySelector("#tooltip"),this.popperInstance=tc(this.form,this.tooltip,{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),this.select=this.shadowRoot.querySelector("select"),this.select.addEventListener("change",this.shadowSelect,{passive:!0})}render(){return(0,l.html)`
			<form aria-describedby="tooltip">
				<div id="tooltip" role="tooltip">
					Please make a selection.
					<div id="arrow" data-popper-arrow></div>
				</div>

				<div class="input-group">
					<span class="input-group-addon input-group-addon-no-border"
						><div class="select-menu-label">I am</div></span
					>
					<label
						for="uaqs-navigation-select-menu-uaqs-audience-select-menu"
						class="sr-only"
						>Select your audience</label
					>
					<select
						id="uaqs-navigation-select-menu-uaqs-audience-select-menu"
						class="form-control select-primary"
						aria-invalid="true"
					>
						<option data-href="https://www.arizona.edu/%3Cnolink%3E">
							choose an option
						</option>
						${this.isLoading?(0,l.html)`<slot name="loading">${this.loadingMessage}</slot>`:this.renderAzSelectMenuOptions(this.tree)}
					</select>
					<span class="input-group-btn">
						<button
							id="button"
							class="btn btn-primary btn-blue disabled"
							role="button"
							type="button"
							tabindex="0"
						>
							Go<span class="sr-only">to the page for that group</span>
						</button>
					</span>
				</div>
			</form>
		`}}customElements.get("az-select-menu")||customElements.define("az-select-menu",tf);class tb extends s.LitElement{static styles=(0,a.css)`
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
			}
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
			.page-header {
				padding-bottom: 11px;
				margin: 48px 0 24px;
				border-bottom: 1px solid #fff;
			}
			.page-row > .row {
				border-bottom: 1px solid #e2e9eb;
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

			#block-bean-cta-request-info {
				margin-top: 17px;
				padding-left: 23px;
				max-width: 539px;
			}

			#block-bean-cta-apply {
				margin-top: 16px;
				padding-left: 23px;
				max-width: 539px;
				margin-bottom: 16px;
			}

			.region-header-2 {
				max-width: 540px;
				margin: auto;
			}

			@media (min-width: 768px) {
				.container {
					width: 752px;
				}
				.region #block-bean-uaqs-audience-select {
					padding-right: 35px;
					padding-left: 25px;
					margin-top: 27px;
				}
				#block-bean-cta-request-info {
					margin-top: 39px;
					padding-left: 23px;
					max-width: 352px;
				}

				#block-bean-cta-apply {
					margin-top: 16px;
					padding-left: 23px;
					max-width: 352px;
					margin-bottom: 16px;
				}
			}
			@media (min-width: 992px) {
				#block-bean-cta-request-info {
					margin-top: 0;
					padding-left: 0;
				}
				#block-bean-cta-apply {
					margin-top: 0;
					padding-left: 0;
				}
				.region #block-bean-uaqs-audience-select {
					padding-right: 33px;
					padding-left: 15px;
					margin-top: 0px;
				}
				.region-header-2 {
					max-width: 100%;
				}
			}
			@media (min-width: 1200px) {
				.region #block-bean-uaqs-audience-select {
					padding-right: 16px;
					padding-left: 29px;
					margin-top: 0px;
				}
				#block-bean-cta-request-info {
					margin-top: 0px;
					padding-left: 0;
					max-width: 100%;
				}

				#block-bean-cta-apply {
					margin-top: 0px;
					padding-left: 0;
					max-width: 100%;
					margin-bottom: 0;
				}
			}
			@media (min-width: 992px) {
				.region-header-2 {
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
			#block-bean-uaqs-audience-select {
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
			@media (min-width: 768px) {
				.header__logo-image {
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
	`;render(){return(0,l.html)`
    <header class="header page-row" id="header_site" role="banner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="https://www.arizona.edu/" title="The University of Arizona, Tucson, Arizona | Home" class="header__logo active" rel="home" id="logo"><img src="https://www.arizona.edu/sites/default/files/www_webheader-01.svg" alt="The University of Arizona, Tucson, Arizona | Home" class="header__logo-image"></a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-8">
                    <div class="row">
                        <div class="region region-header-2">
                            <div id="block-bean-uaqs-audience-select" class="block first odd col-12 col-lg-6 block-az-select-menu block-az-select-menuselect-menu" role="complementary" aria-label="select menu">
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
    `}}customElements.get("az-middle-header")||customElements.define("az-middle-header",tb)})();