(()=>{function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}var t=globalThis,i={},o={},r=t.parcelRequirefbca;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequirefbca=r);var a=r.register;a("fYgrz",function(t,i){e(t.exports,"css",()=>r("iSKEb").css),e(t.exports,"html",()=>r("19cNw").html),e(t.exports,"LitElement",()=>r("h3wye").LitElement),r("aA4Rn"),r("19cNw"),r("h3wye"),r("bWWHI")}),a("aA4Rn",function(t,i){e(t.exports,"ReactiveElement",()=>_),e(t.exports,"css",()=>r("iSKEb").css);var o=r("iSKEb");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{is:a,defineProperty:s,getOwnPropertyDescriptor:l,getOwnPropertyNames:n,getOwnPropertySymbols:f,getPrototypeOf:c}=Object,m=globalThis,d=m.trustedTypes,h=d?d.emptyScript:"",p=m.reactiveElementPolyfillSupport,u=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!a(e,t),x={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&s(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let a=o?.call(this);r.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(u("elementProperties")))return;let e=c(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(u("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(u("properties"))){let e=this.properties;for(let t of[...n(e),...f(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift((0,o.getCompatibleStyle)(i));else void 0!==e&&t.push((0,o.getCompatibleStyle)(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,o.adoptStyles)(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:g;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??b)(this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach(e=>this._$EO(e,this[e])),this._$Ej()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[u("elementProperties")]=new Map,_[u("finalized")]=new Map,p?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.0.3")}),a("iSKEb",function(t,i){e(t.exports,"css",()=>f),e(t.exports,"adoptStyles",()=>c),e(t.exports,"getCompatibleStyle",()=>m);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class l{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}let n=e=>new l("string"==typeof e?e:e+"",void 0,a),f=(e,...t)=>new l(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,a),c=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),r=o.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}},m=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return n(t)})(e):e}),a("19cNw",function(t,i){e(t.exports,"html",()=>$),e(t.exports,"noChange",()=>z),e(t.exports,"render",()=>q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=globalThis,r=o.trustedTypes,a=r?r.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,n="?"+l,f=`<${n}>`,c=document,m=()=>c.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,p=e=>h(e)||"function"==typeof e?.[Symbol.iterator],u="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,x=/>/g,_=RegExp(`>|${u}(?:([^\\s"'>=/]+)(${u}*=${u}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,v=/"/g,y=/^(?:script|style|textarea|title)$/i,k=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=k(1),z=(k(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),E=new WeakMap,P=c.createTreeWalker(c,129);function S(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(t):t}let C=(e,t)=>{let i=e.length-1,o=[],r,a=2===t?"<svg>":"",n=g;for(let t=0;t<i;t++){let i=e[t],c,m,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,null!==(m=n.exec(i)));)h=n.lastIndex,n===g?"!--"===m[1]?n=b:void 0!==m[1]?n=x:void 0!==m[2]?(y.test(m[2])&&(r=RegExp("</"+m[2],"g")),n=_):void 0!==m[3]&&(n=_):n===_?">"===m[0]?(n=r??g,d=-1):void 0===m[1]?d=-2:(d=n.lastIndex-m[2].length,c=m[1],n=void 0===m[3]?_:'"'===m[3]?v:w):n===v||n===w?n=_:n===b||n===x?n=g:(n=_,r=void 0);let p=n===_&&e[t+1].startsWith("/>")?" ":"";a+=n===g?i+f:d>=0?(o.push(c),i.slice(0,d)+s+i.slice(d)+l+p):i+l+(-2===d?t:p)}return[S(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class L{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,f=0,c=e.length-1,d=this.parts,[h,p]=C(e,t);if(this.el=L.createElement(h,i),P.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=P.nextNode())&&d.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(s)){let t=p[f++],i=o.getAttribute(e).split(l),r=/([.?@])?(.*)/.exec(t);d.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?R:"?"===r[1]?H:"@"===r[1]?O:N}),o.removeAttribute(e)}else e.startsWith(l)&&(d.push({type:6,index:a}),o.removeAttribute(e));if(y.test(o.tagName)){let e=o.textContent.split(l),t=e.length-1;if(t>0){o.textContent=r?r.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],m()),P.nextNode(),d.push({type:2,index:++a});o.append(e[t],m())}}}else if(8===o.nodeType){if(o.data===n)d.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(l,e+1));)d.push({type:7,index:a}),e+=l.length-1}}a++}}static createElement(e,t){let i=c.createElement("template");return i.innerHTML=e,i}}function D(e,t,i=e,o){if(t===z)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,a=d(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=D(e,r._$AS(e,t.values),r,o)),t}class U{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??c).importNode(t,!0);P.currentNode=o;let r=P.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new T(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new M(r,this,e)),this._$AV.push(t),l=i[++s]}a!==l?.index&&(r=P.nextNode(),a++)}return P.currentNode=c,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){d(e=D(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(c.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=L.createElement(S(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new U(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=E.get(e.strings);return void 0===t&&E.set(e.strings,t=new L(e)),t}T(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new T(this.k(m()),this.k(m()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(e,t=this,i,o){let r=this.strings,a=!1;if(void 0===r)(a=!d(e=D(this,e,t,0))||e!==this._$AH&&e!==z)&&(this._$AH=e);else{let o,s;let l=e;for(e=r[0],o=0;o<r.length-1;o++)(s=D(this,l[i+o],t,o))===z&&(s=this._$AH[o]),a||=!d(s)||s!==this._$AH[o],s===A?e=A:e!==A&&(e+=(s??"")+r[o+1]),this._$AH[o]=s}a&&!o&&this.O(e)}O(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class R extends N{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===A?void 0:e}}class H extends N{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class O extends N{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??A)===z)return;let i=this._$AH,o=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==A&&(i===A||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class M{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}let I=o.litHtmlPolyfillSupport;I?.(L,T),(o.litHtmlVersions??=[]).push("3.1.1");let q=(e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new T(t.insertBefore(m(),e),e,void 0,i??{})}return r._$AI(e),r}}),a("h3wye",function(t,i){e(t.exports,"css",()=>r("iSKEb").css),e(t.exports,"ReactiveElement",()=>r("aA4Rn").ReactiveElement),e(t.exports,"html",()=>r("19cNw").html),e(t.exports,"render",()=>r("19cNw").render),e(t.exports,"noChange",()=>r("19cNw").noChange),e(t.exports,"LitElement",()=>s);var o=r("aA4Rn"),a=r("19cNw");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends o.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,a.render)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return a.noChange}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});let l=globalThis.litElementPolyfillSupport;l?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.3")}),a("bWWHI",function(e,t){}),r("fYgrz");var s=r("iSKEb"),l=r("19cNw"),n=r("h3wye");class f extends n.LitElement{static styles=(0,s.css)`
		* {
			box-sizing: border-box;
		}
		[class*=" ua-brand-"],
		[class^="ua-brand-"] {
			font-family: ua-brand-symbols !important;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			speak: none;
			font-style: normal;
			font-weight: 400;
			font-variant: normal;
			text-transform: none;
			line-height: 1;
		}
		html.sticky-footer body {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			min-height: 100vh;
			height: 100%;
			font-size: 16px;
			line-height: 1.5;
		}
		body {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
			font-size: 16px;
			line-height: 1.5;
		}
		footer,
		nav,
		section,
		summary {
			display: block;
		}
		hr {
			position: relative;
			background: url(https://www.arizona.edu/img/sky-triangles-hr.svg) center
				center no-repeat;
			background-size: 2em 0.625em;
			border-top: 0;
			border-color: #007d84;
			height: 10px;
			width: 100%;
			margin-top: 24px;
			margin-bottom: 24px;
			border: 0;
			box-sizing: content-box;
		}
		#footer_site hr:after,
		#footer_site hr:before {
			border-color: transparent;
			border-color: rgba(55, 55, 55, 0.09);
			width: 100%;
		}
		hr:before {
			content: " ";
			border-top-width: 1px;
			border-top-style: solid;
			border-top-color: inherit;
			position: absolute;
			width: calc(50% - 26px);
			top: 4px;
			left: 0;
		}
		hr:after {
			content: " ";
			border-top-width: 1px;
			border-top-style: solid;
			border-top-color: inherit;
			position: absolute;
			width: calc(50% - 26px);
			top: 4px;
			right: 0;
		}
		p {
			margin: 0 0 12px;
			font-size: 16px;
		}
		p.smal {
			font-size: 87%;
		}
		.text-center {
			text-align: center;
		}
		.text-align-center {
			text-align: center;
		}
		@media (min-width: 1200px) {
			.text-right-lg {
				text-align: right;
			}
		}
		.page-row {
			-webkit-box-flex: 0;
			-ms-flex: none;
			flex: none;
		}
		.container {
			width: 100%;
			padding-right: 15px;
			padding-left: 15px;
			margin-right: auto;
			margin-left: auto;
		}
		.container:after,
		.container:before {
			display: table;
			content: " ";
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
		.row section {
			align-items: center;
		}
		.row:before,
		.row:after {
			display: table;
			content: " ";
		}

		.page-row-padding-bottom:after,
		.page-row-padding-top:before {
			height: 0.8em;
			background: #f4ede5;
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
		@media (min-width: 768px) {
			.container {
				width: 752px;
			}
		}
		@media (min-width: 992px) {
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
			border: 0;
			vertical-align: middle;
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
		ol,
		ul {
			margin-top: 0;
			margin-bottom: 12px;
		}
		.h3,
		.h4,
		.h5,
		.h6,
		h3,
		h4,
		h5,
		h6 {
			font-weight: 500;
			line-height: 1.1;
			color: #49595e;
		}
		.h5,
		h5 {
			font-size: 16px;
		}
		.h4,
		.h5,
		.h6,
		h4,
		h5,
		h6 {
			margin-top: 12px;
			margin-bottom: 12px;
		}
		.h1,
		.h2,
		.h3,
		.h4,
		.h5,
		.h6,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: 500;
			line-height: 1.1;
			color: #49595e;
		}
		.initialism,
		.text-uppercase {
			text-transform: uppercase;
		}
		.bold,
		bold,
		strong {
			font-weight: 700;
		}
		b,
		strong {
			font-weight: 700;
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
		.mb-0,
		.my-0 {
			margin-bottom: 0 !important;
			margin-bottom: 0 !important;
		}
		.mt-0,
		.my-0 {
			margin-top: 0 !important;
			margin-top: 0 !important;
		}
		.text-muted {
			color: #495057;
		}
		.container-collapsed .column {
			min-height: initial;
		}
		.visible-lg-block,
		.visible-lg-inline,
		.visible-lg-inline-block,
		.visible-md-block,
		.visible-md-inline,
		.visible-md-inline-block,
		.visible-sm-block,
		.visible-sm-inline,
		.visible-sm-inline-block,
		.visible-xs-block,
		.visible-xs-inline,
		.visible-xs-inline-block {
			display: none !important;
		}
		.small,
		small {
			font-size: 87%;
		}
		html.ua-brand-icons.external-links
			.remove-external-link-icon[target="_blank"]
			.pseudo-link
			span,
		html.ua-brand-icons.external-links
			.remove-external-link-icon[target="_blank"]
			.psuedo-link
			span,
		html.ua-brand-icons.external-links [target="_blank"] {
			padding-right: 0.8em;
		}
		html.external-links .pseudo-link:after,
		html.external-links [target="_blank"]:after {
			border-bottom: 0.3125em solid transparent;
			border-left: 0.3125em solid transparent;
			border-right: 0.3125em solid #8f1124;
			border-top: 0.3125em solid #8f1124;
			content: "";
			display: inline-block;
			height: 0;
			position: relative;
			top: 0;
			width: 0;
			right: 0;
		}
		html.ua-brand-icons.external-links
			.remove-external-link-icon[target="_blank"]
			.pseudo-link
			span:after,
		html.ua-brand-icons.external-links
			.remove-external-link-icon[target="_blank"]
			.psuedo-link
			span:after,
		html.ua-brand-icons.external-links [target="_blank"]:after {
			content: "\E648";
			font-family: ua-brand-symbols;
			font-size: 0.7em;
			border-width: 0;
		}
		#footer_site {
			background: #f4ede5;
			padding: 2.5rem 0;
			color: #49595e;
			line-height: 1.5;
		}
		#footer_site hr {
			background: 0 0;
		}
		#footer_site a {
			color: #8b0015;
			text-decoration: underline;
		}
		#footer_site ul {
			display: inline-block;
			margin: 0;
			padding: 1rem 0 0;
		}
		#block-bean-uaqs-footer-links-bean-informa h5 strong {
			font-size: 16px;
			font-weight: 500;
			color: black;
		}
		#footer_site #block-bean-uaqs-footer-links-bean-main ul {
			display: inline-block;
			padding: 0;
			margin: 0 0 12px;
			text-align: right;
		}
		@media (min-width: 768px) {
			text-align: left;
		}
		#footer_site ul > li {
			border-right: 1px solid #e2e9eb;
			display: inline-block;
			list-style: none;
			padding: 0 0.75rem;
		}
		#footer_site ul > li.last {
			border-right: 0;
		}
		#footer_site #block-bean-uaqs-footer-links-bean-main ul li {
			border-right: 0px solid hsl(196, 8%, 74%);
			display: inline-block;
			list-style: none;
			padding: 0 0 0 0.75rem;
		}
		#footer_site #block-bean-uaqs-footer-links-bean-main ul li a {
			color: #49595e;
			text-decoration: none;
			text-transform: none;
		}

		#footer_site #footer_sub ul {
			display: block;
			margin: 0;
			padding: 0 0 0;
			width: 100%;
		}
		#footer_site #footer_sub .two-col-menu ul {
			-moz-column-count: 2;
			-moz-column-gap: 2em;
			-webkit-column-count: 2;
			-webkit-column-gap: 2em;
			column-count: 2;
			column-gap: 2em;
			display: block;
		}
		#footer_site #footer_sub ul li {
			border-right: 0px solid #b6bec1;
			display: block;
			list-style: none;
			padding: 0;
			margin: 0;
			width: max-content;
			width: -moz-max-content;
		}
		#footer_site ul li a {
			color: #49595e;
			font-weight: 600;
			display: block;
			text-decoration: none;
			font-size: 16px;
			line-height: inherit;
			vertical-align: top;
			text-transform: none;
			margin: 7px 0;
		}
		#footer_sub ul.menu li a i {
			margin: 0 0.5em 0 0;
		}
		.bg-warm-gray {
			background-color: #f4ede5;
		}
		.paragraphs-item-uaqs-full-width-bg-wrapper {
			margin-top: -1px;
		}
		.background-wrapper {
			padding: 3rem 0;
		}
		#footer_sub .background-wrapper {
			padding: 0;
			margin: 0 -16px;
		}

		#footer_site .footer-top-wrap {
			padding: 0 13px;
		}

		#footer_site .top-menu li {
			font-size: 16px;
			font-weight: 600;
		}

		#footer_site .footer-top-wrap hr {
			margin-top: 32px;
			margin-bottom: 17px;
		}

		#footer_site ul.menu-bottom li a {
			margin: 3px 0;
			max-width: 222px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		#footer_site ul li a {
			border-bottom: 2px solid transparent;
		}

		#footer_site ul li a:hover {
			border-bottom: 2px solid #49595e;
		}

		#footer_site ul.menu-bottom li a i {
			margin: 0 9px 0 0;
		}

		#footer_site ul.menu-bottom li a i::before {
			display: inline-block;
			width: 16px;
			height: 16px;
		}

		.topic-menu {
			columns: 2;
		}

		.bottom-text-wrap {
			color: black;
		}

		@media screen and (max-width: 991px) {
			#footer_site #block-bean-uaqs-footer-links-bean-main ul {
				text-align: right;
			}
			.bottom-text-wrap {
				text-align: right;
			}
			.number-bottom {
				display: block;
			}
			.topic-menu {
				columns: 1;
			}
			#footer_site #footer_sub ul.menu-bottom {
				margin-bottom: 21px;
			}
		}

		@media screen and (max-width: 767px) {
			#footer_site #block-bean-uaqs-footer-links-bean-main ul {
				margin-top: 21px;
				text-align: center;
			}

			.bottom-text-wrap {
				text-align: center;
			}
		}
		@font-face {
			font-family: "az-icons";
			src: url("fonts/az-icons.eot?d54800");
			src: url("fonts/az-icons.eot?d54800#iefix") format("embedded-opentype"),
				url("fonts/az-icons.ttf?d54800") format("truetype"),
				url("fonts/az-icons.woff?d54800") format("woff"),
				url("fonts/az-icons.svg?d54800#az-icons") format("svg");
			font-weight: normal;
			font-style: normal;
			font-display: block;
		}

		[class^="az-icon-"]::before,
		[class*=" az-icon-"]::before {
			/* use !important to prevent issues with browser extensions that change fonts */
			font-family: "az-icons" !important;
			speak: never;
			font-style: normal;
			font-weight: normal;
			font-variant: normal;
			text-transform: none;
			line-height: 1;

			/* Better Font Rendering =========== */
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		.az-icon-arizona:before {
			content: "\\e900";
		}
		.az-icon-award:before {
			content: "\\e901";
		}
		.az-icon-cost:before {
			content: "\\e902";
		}
		.az-icon-facebook:before {
			content: "\\e903";
		}
		.az-icon-financial-aid:before {
			content: "\\e904";
		}
		.az-icon-grad-cap:before {
			content: "\\e905";
		}
		.az-icon-instagram:before {
			content: "\\e906";
		}
		.az-icon-linkedin:before {
			content: "\\e907";
		}
		.az-icon-majors-and-degrees:before {
			content: "\\e908";
		}
		.az-icon-map-marker:before {
			content: "\\e909";
		}
		.az-icon-pinterest:before {
			content: "\\e90a";
		}
		.az-icon-scholarship:before {
			content: "\\e90b";
		}
		.az-icon-sign-post:before {
			content: "\\e90c";
		}
		.az-icon-spotify:before {
			content: "\\e90d";
		}
		.az-icon-spring-fling:before {
			content: "\\e90e";
		}
		.az-icon-tiktok:before {
			content: "\\e90f";
		}
		.az-icon-twitter:before {
			content: "\\e910";
		}
		.az-icon-wildcat:before {
			content: "\\e911";
		}
		.az-icon-youtube:before {
			content: "\\e912";
		}
		.az-icon-vimeo:before {
			content: "\\e913";
		}
	`;render(){return(0,l.html)`
			<footer id="footer_site" class="page page-row" role="contentinfo">
				<div class="region region-footer">
					<div
						class="container d-flex footer-top-wrap justify-content-between align-items-center"
					>
						<div class="row">
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div
								class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center-xs text-left-not-xs"
							>
								<div class="row px-0">
									<div class="col-xs-12">
										<a
											href="https://www.arizona.edu/"
											title="Home"
											class="remove-external-link-icon active"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><img
												src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png"
												alt="Home"
										/></a>
									</div>
								</div>
							</div>
							<!-- Add the extra clearfix for only the required viewport -->
							<div class="clearfix visible-xs-block"></div>
							<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 py-0">
								<div
									id="block-bean-uaqs-footer-links-bean-main"
									class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs"
									role="complementary"
								>
									<ul class="menu top-menu">
										<li class="menu__item is-leaf first leaf">
											<a
												href="https://talent.arizona.edu"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Employment</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://cirt.arizona.edu"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Emergency Information</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://www.arizona.edu/title-ix"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Title IX / Non-Discrimination</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://safety.arizona.edu/"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Campus Safety</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://clery.arizona.edu/annual-reports"
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Annual Security Report</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://www.arizona.edu/copyright"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Copyright</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://www.arizona.edu/campus-accessibility"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Campus Accessibility</a
											>
										</li>
										<li class="menu__item is-leaf leaf">
											<a
												href="https://www.arizona.edu/contact-us"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Contact Us</a
											>
										</li>
										<li class="menu__item is-leaf last leaf">
											<a
												href="https://www.arizona.edu/website-feedback"
												title=""
												class="menu__link"
												@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
												>Feedback</a
											>
										</li>
									</ul>
								</div>
								<div
									id="block-bean-footer-university-address"
									class="block block-bean last even"
									role="complementary"
								>
									<div
										class="entity entity-bean bean-uaqs-contact-summary clearfix"
										about="/block/footer---university-address"
									>
										<div class="content">
											<p
												class="bottom-text-wrap text-right text-right-sm text-right-md text-right-lg"
											>
												The University of Arizona | Tucson, Arizona 85721 |
												<span class="number-bottom"
													><a href="tel:520-621-2211">520-621-2211</a></span
												>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12"><hr /></div>
						</div>
					</div>
				</div>
				<div id="footer_sub" class="region region-footer-sub">
					<div class="container">
						<div class="row">
							<div
								id="block-bean-uaqs-footer-links-bean-information"
								class="block block-bean first odd col-xs-12 col-sm-6 col-md-3 col-lg-3"
								role="complementary"
							>
								<h5><strong class="text-uppercase">Information for</strong></h5>
								<ul class="menu menu-bottom">
									<li class="menu__item is-leaf first leaf">
										<a
											href="https://www.arizona.edu/admissions"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Future Students</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/students"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Current Students</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/faculty-staff"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Faculty &amp; Staff</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/alumni-donors"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Alumni &amp; Donors</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/parents-visitors"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Parents &amp; Visitors</a
										>
									</li>
									<li class="menu__item is-leaf last leaf">
										<a
											href="https://corporate.arizona.edu/"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Corporations &amp; Businesses</a
										>
									</li>
								</ul>
							</div>
							<div class="clearfix visible-xs-block col-xs-12">
								<hr />
							</div>
							<div
								id="block-bean-uaqs-footer-links-bean-topics"
								class="block block-bean even col-xs-12 col-sm-6 col-md-5"
								role="complementary"
							>
								<h5><strong class="text-uppercase">Topics</strong></h5>
								<ul class="menu menu-bottom topic-menu">
									<li class="menu__item is-leaf first leaf">
										<a
											href="https://www.arizona.edu/about"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>About the University</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/academics"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Academics</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/arts-museums"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Arts &amp; Museums</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/athletics-recreation"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Athletics &amp; Recreation</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/colleges-schools"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Colleges, Schools, Departments</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://diversity.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Diversity</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.environment.arizona.edu"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Environment &amp; Sustainability</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://international.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>International Engagement</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/health-sciences"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Health &amp; Medical</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/libraries"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Libraries</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://uaforyou.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Outreach &amp; Extension</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://research.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Research &amp; Innovation</a
										>
									</li>
									<li class="menu__item is-leaf last leaf">
										<a
											href="https://www.arizona.edu/purpose-mission-values"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											>Purpose, Mission &amp; Values</a
										>
									</li>
								</ul>
							</div>
							<div class="clearfix visible-xs-block col-xs-12">
								<hr />
							</div>
							<div class="clearfix visible-sm-block col-xs-12">
								<hr />
							</div>
							<div
								id="block-bean-uaqs-footer-links-bean-resources"
								class="block block-bean odd col-xs-12 col-sm-6 col-md-2 clearfix"
								role="complementary"
							>
								<h5><strong class="text-uppercase">Resources</strong></h5>
								<ul class="menu menu-bottom">
									<li class="menu__item is-leaf first leaf">
										<a
											href="https://directory.arizona.edu/"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-directory"></i>Directory</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://www.arizona.edu/calendars-events"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-calendar"></i>Calendars</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://map.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-campus-map"></i>Campus Map</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://news.arizona.edu"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-news"></i>News</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://phonebook.arizona.edu/"
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-directory"></i>Phonebook</a
										>
									</li>
									<li class="menu__item is-leaf last leaf">
										<a
											href="https://www.arizona.edu/weather"
											title=""
											class="menu__link"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="ua-brand-weather"></i>Weather</a
										>
									</li>
								</ul>
							</div>
							<div
								id="block-bean-uaqs-footer-links-bean-connect"
								class="block block-bean even col-xs-12 col-sm-6 col-md-2 clearfix"
								role="complementary"
							>
								<h5><strong class="text-uppercase">Connect</strong></h5>
								<ul class="menu menu-bottom">
									<li class="menu__item is-leaf first leaf">
										<a
											class="menu__link"
											href="https://facebook.com/uarizona"
											target="_blank"
											title="Click here to visit our Facebook page"
											rel="noopener noreferrer"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="az-icon-facebook"></i>Facebook</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://twitter.com/uarizona"
											target="_blank"
											title="Click here to visit our Twitter page"
											rel="noopener noreferrer"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="az-icon-twitter"></i>Twitter</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://instagram.com/uarizona"
											target="_blank"
											title="Click here to visit our Instagram page"
											rel="noopener noreferrer"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="az-icon-instagram"></i>Instagram</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://linkedin.com/edu/university-of-arizona-17783"
											target="_blank"
											title="Click here to visit our LinkedIn page"
											rel="noopener noreferrer"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="az-icon-linkedin"></i>LinkedIn</a
										>
									</li>
									<li class="menu__item is-leaf leaf">
										<a
											href="https://youtube.com/universityofarizona"
											target="_blank"
											title="Click here to visit our YouTube page"
											rel="noopener noreferrer"
											@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
											><i class="az-icon-youtube"></i>YouTube</a
										>
									</li>
								</ul>
							</div>
							<div
								id="block-bean-uaqs-footer"
								class="block block-bean last odd"
								role="complementary"
							>
								<div
									class="entity entity-bean bean-uaqs-flexible-block clearfix"
									about="/block/uaqs-footer"
								>
									<div class="content"></div>
								</div>
							</div>
						</div>
						<div
							class="entity entity-paragraphs-item paragraphs-item-uaqs-full-width-bg-wrapper mb-0  background-wrapper bg-warm-gray"
						>
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<hr />
										<p class="text-align-center text-muted mt-0 mb-0">
											<em
												>We respectfully acknowledge the University of Arizona
												is on the land and territories of Indigenous peoples.
												Today, Arizona is home to 22 federally recognized
												tribes, with Tucson being home to the O’odham and the
												Yaqui. Committed to diversity and inclusion, the
												University strives to build sustainable relationships
												with sovereign Native Nations and Indigenous communities
												through education offerings, partnerships, and community
												service.</em
											>
										</p>
									</div>
								</div>
							</div>
						</div>
						<!--Close wrapper-->
						<div class="container container-collapsed">
							<div class="row">
								<div class="column col-sm-12"><div></div></div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 text-center">
								<hr />
								<p class="small">
									<a
										href="https://www.arizona.edu/information-security-privacy"
										target="_blank"
										@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
										>University Information Security and Privacy</a
									>
								</p>
								<p class="copyright small">
									© <span>${new Date().getFullYear()}</span> The Arizona Board
									of Regents on behalf of
									<a
										href="https://www.arizona.edu"
										target="_blank"
										@click="${e=>{eventDataLayerPush(e,"az-footer")}}"
										>The University of Arizona</a
									>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`}}customElements.get("az-footer")||customElements.define("az-footer",f)})();