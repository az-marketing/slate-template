(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class l{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,i=this.t;if(e&&void 0===t){let e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}let r=t=>new l("string"==typeof t?t:t+"",void 0,i),s=(t,...e)=>new l(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,i),a=(i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let e of o){let o=document.createElement("style"),l=t.litNonce;void 0!==l&&o.setAttribute("nonce",l),o.textContent=e.cssText,i.appendChild(o)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return r(e)})(t):t,{is:f,defineProperty:c,getOwnPropertyDescriptor:m,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,g=globalThis,u=g.trustedTypes,b=u?u.emptyScript:"",x=g.reactiveElementPolyfillSupport,_=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},k=(t,e)=>!f(t,e),v={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:l}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){let r=o?.call(this);l.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let t=this.properties;for(let e of[...d(t),...p(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(n(i));else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){let l=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==l?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=i.getPropertyOptions(o),l="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=o,this[o]=l.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??k)(this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach(t=>this._$EO(t,this[t])),this._$Ej()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[_("elementProperties")]=new Map,y[_("finalized")]=new Map,x?.({ReactiveElement:y}),(g.reactiveElementVersions??=[]).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=globalThis,z=$.trustedTypes,A=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,C="?"+S,P=`<${C}>`,T=document,U=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,R=t=>N(t)||"function"==typeof t?.[Symbol.iterator],M="[ 	\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,L=/>/g,q=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,j=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=W(1),F=(W(2),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),J=new WeakMap,K=T.createTreeWalker(T,129);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}let X=(t,e)=>{let i=t.length-1,o=[],l,r=2===e?"<svg>":"",s=O;for(let e=0;e<i;e++){let i=t[e],a,n,f=-1,c=0;for(;c<i.length&&(s.lastIndex=c,null!==(n=s.exec(i)));)c=s.lastIndex,s===O?"!--"===n[1]?s=I:void 0!==n[1]?s=L:void 0!==n[2]?(j.test(n[2])&&(l=RegExp("</"+n[2],"g")),s=q):void 0!==n[3]&&(s=q):s===q?">"===n[0]?(s=l??O,f=-1):void 0===n[1]?f=-2:(f=s.lastIndex-n[2].length,a=n[1],s=void 0===n[3]?q:'"'===n[3]?B:D):s===B||s===D?s=q:s===I||s===L?s=O:(s=q,l=void 0);let m=s===q&&t[e+1].startsWith("/>")?" ":"";r+=s===O?i+P:f>=0?(o.push(a),i.slice(0,f)+E+i.slice(f)+S+m):i+S+(-2===f?e:m)}return[Z(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let l=0,r=0,s=t.length-1,a=this.parts,[n,f]=X(t,e);if(this.el=G.createElement(n,i),K.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(E)){let e=f[r++],i=o.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:l,name:s[2],strings:i,ctor:"."===s[1]?to:"?"===s[1]?tl:"@"===s[1]?tr:ti}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:l}),o.removeAttribute(t));if(j.test(o.tagName)){let t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],U()),K.nextNode(),a.push({type:2,index:++l});o.append(t[e],U())}}}else if(8===o.nodeType){if(o.data===C)a.push({type:2,index:l});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:l}),t+=S.length-1}}l++}}static createElement(t,e){let i=T.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===F)return e;let l=void 0!==o?i._$Co?.[o]:i._$Cl,r=H(e)?void 0:e._$litDirective$;return l?.constructor!==r&&(l?._$AO?.(!1),void 0===r?l=void 0:(l=new r(t))._$AT(t,i,o),void 0!==o?(i._$Co??=[])[o]=l:i._$Cl=l),void 0!==l&&(e=Q(t,l._$AS(t,e.values),l,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);K.currentNode=o;let l=K.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new te(l,l.nextSibling,this,t):1===a.type?e=new a.ctor(l,a.name,a.strings,this,t):6===a.type&&(e=new ts(l,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(l=K.nextNode(),r++)}return K.currentNode=T,o}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){H(t=Q(this,t,e))?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let t=new tt(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let l of t)o===e.length?e.push(i=new te(this.k(U()),this.k(U()),this,this.options)):i=e[o],i._$AI(l),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ti{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,l){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=l,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,o){let l=this.strings,r=!1;if(void 0===l)(r=!H(t=Q(this,t,e,0))||t!==this._$AH&&t!==F)&&(this._$AH=t);else{let o,s;let a=t;for(t=l[0],o=0;o<l.length-1;o++)(s=Q(this,a[i+o],e,o))===F&&(s=this._$AH[o]),r||=!H(s)||s!==this._$AH[o],s===Y?t=Y:t!==Y&&(t+=(s??"")+l[o+1]),this._$AH[o]=s}r&&!o&&this.O(t)}O(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class to extends ti{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Y?void 0:t}}class tl extends ti{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class tr extends ti{constructor(t,e,i,o,l){super(t,e,i,o,l),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??Y)===F)return;let i=this._$AH,o=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,l=t!==Y&&(i===Y||o);o&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ts{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}let ta=$.litHtmlPolyfillSupport;ta?.(G,te),($.litHtmlVersions??=[]).push("3.1.1");let tn=(t,e,i)=>{let o=i?.renderBefore??e,l=o._$litPart$;if(void 0===l){let t=i?.renderBefore??null;o._$litPart$=l=new te(e.insertBefore(U(),t),t,void 0,i??{})}return l._$AI(t),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tf extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tn(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}tf._$litElement$=!0,tf.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tf});let tc=globalThis.litElementPolyfillSupport;tc?.({LitElement:tf}),(globalThis.litElementVersions??=[]).push("4.0.3");let tm=(t,e="")=>{window.dataLayer=window.dataLayer||[];var i=t.composedPath()[0],o=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:i.textContent||"",elementInnerText:i.innerText||"",title:"shadow-dom-link",element:i,elementClasses:i.className||"",elementId:i.id||"",elementLocation:e||"",elementTarget:i.target||"",elementUrl:i.href||i.action||"",originalEvent:t,parent:o||"",inShadowDom:!0}})};class td extends tf{static styles=s`
			* {
				box-sizing: border-box;
			}
			[class*=" ua-brand-"], [class^=ua-brand-] {
				font-family: ua-brand-symbols!important;
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
			body{
    		-webkit-font-smoothing: antialiased;
    		-moz-osx-font-smoothing: grayscale;
    		text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
				font-size: 16px;
				line-height: 1.5;
			}
			footer, nav, section, summary {
				display: block;
			}
			hr {
				position: relative;
				background: url(https://www.arizona.edu/img/sky-triangles-hr.svg) center center no-repeat;
				background-size: 2em .625em;
				border-top: 0;
				border-color: #007d84;
				height: 10px;
				width: 100%;
				margin-top: 24px;
				margin-bottom: 24px;
				border: 0;
				box-sizing: content-box;
			}
			#footer_site hr:after, #footer_site hr:before {
				border-color: transparent;
				border-color: rgba(55,55,55,.09);
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
			p.smal{
				font-size: 87%;
			}
			.text-center {
				text-align: center;
			}
			.text-align-center {
				text-align: center;
			}
			@media (min-width: 1200px){
				.text-right-lg {
					text-align: right;
				}
			}
			.page-row{
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
			.container:after, .container:before{
				display: table;
				content: " ";
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
				.container, .container-lg, .container-md, .container-sm {
					max-width: 960px;
				}
			}
			@media (min-width: 1200px){
				.container, .container-lg, .container-md, .container-sm, .container-xl {
					max-width: 1140px;
				}
			}
			.row section{
				align-items: center;
			}
			.row:before, .row:after{
				display: table;
				content: " ";
			}

			.page-row-padding-bottom:after, .page-row-padding-top:before {
				height: .8em;
				background: #f4ede5;
			}

			.container {
				padding-right: 16px;
				padding-left: 16px;
				margin-right: auto;
				margin-left: auto;
			}

			.container:after, .container:before {
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
			.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
				position: relative;
				min-height: 1px;
				padding-right: 16px;
				padding-left: 16px;
			}
			.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
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
				.col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
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
				.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
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
				.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {
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
			select[multiple], select[size] {
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
			a.label:focus, a.label:hover {
				color: #fff;
				text-decoration: none;
				cursor: pointer;
			}
			.label-default {
				background-color: #ab0520;
			}
			.label-default[href]:focus, .label-default[href]:hover {
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
			a.link-container:focus, a.link-container:hover {
				background-color: #eef1f1;
				outline: 0;
				text-decoration: none;
				color: inherit;
			}
			ol, ul {
    		margin-top: 0;
    		margin-bottom: 12px;
			}
			.h3, .h4, .h5, .h6, h3, h4, h5, h6 {
				font-weight: 500;
				line-height: 1.1;
				color: #49595e;
			}
			.h5, h5 {
				font-size: 16px;
			}
			.h4, .h5, .h6, h4, h5, h6 {
				margin-top: 12px;
				margin-bottom: 12px;
			}
			.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
				font-weight: 500;
				line-height: 1.1;
				color: #49595e;
			}
			.initialism, .text-uppercase {
				text-transform: uppercase;
			}
			.bold, bold, strong {
			  font-weight: 700;
			}
			b, strong {
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
			.bottom-buffer-1, .bottom-buffer-xs-1 {
				margin-bottom: 1px;
			}
			.bottom-buffer-5, .bottom-buffer-xs-5 {
				margin-bottom: 5px;
			}
			.bottom-buffer-10, .bottom-buffer-xs-10 {
				margin-bottom: 10px;
			}
			.bottom-buffer-15, .bottom-buffer-xs-15 {
				margin-bottom: 15px;
			}
			.bottom-buffer-20, .bottom-buffer-xs-20 {
				margin-bottom: 20px;
			}
			.bottom-buffer-25, .bottom-buffer-xs-25 {
				margin-bottom: 25px;
			}
			.bottom-buffer-30, .bottom-buffer-xs-30 {
				margin-bottom: 30px;
			}
			.bottom-buffer-50, .bottom-buffer-xs-50 {
				margin-bottom: 50px;
			}
			@media (min-width: 768px) {
				.bottom-buffer-sm-0, .bottom-buffer-sm-reset {
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
				.bottom-buffer-md-0, .bottom-buffer-md-reset {
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
				.bottom-buffer-lg-0, .bottom-buffer-lg-reset {
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
				.top-buffer-sm-0, .top-buffer-sm-reset {
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
				.top-buffer-md-0, .top-buffer-md-reset {
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
				.top-buffer-lg-0, .top-buffer-lg-reset {
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
			.mb-0, .my-0 {
				margin-bottom: 0!important;
				margin-bottom: 0!important;
			}
			.mt-0, .my-0 {
				margin-top: 0!important;
				margin-top: 0!important;
			}
			.text-muted {
				color: #495057;
			}
			.container-collapsed .column {
				min-height: initial;
			}
			.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {
    		display: none!important;
			}
			.small, small {
				font-size: 87%;
			}
			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span, html.ua-brand-icons.external-links [target=_blank] {
				padding-right: .8em;
			}
			html.external-links .pseudo-link:after, html.external-links [target=_blank]:after {
				border-bottom: .3125em solid transparent;
				border-left: .3125em solid transparent;
				border-right: .3125em solid #8f1124;
				border-top: .3125em solid #8f1124;
				content: '';
				display: inline-block;
				height: 0;
				position: relative;
				top: 0;
				width: 0;
				right: 0;
			}
			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span:after, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span:after, html.ua-brand-icons.external-links [target=_blank]:after {
				content: "\E648";
				font-family: ua-brand-symbols;
				font-size: .7em;
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
				color: #8B0015;
				text-decoration: underline;
			}
			#footer_site ul {
				display: inline-block;
				margin: 0;
				padding: 1rem 0 0;
			}
			#block-bean-uaqs-footer-links-bean-informa h5 strong{
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
			#footer_site ul>li {
				border-right: 1px solid #e2e9eb;
				display: inline-block;
				list-style: none;
				padding: 0 .75rem;
			}
			#footer_site ul>li.last {
				border-right: 0;
			}
			#footer_site #block-bean-uaqs-footer-links-bean-main ul li {
				border-right: 0px solid hsl(196,8%,74%);
				display: inline-block;
				list-style: none;
				padding: 0 0 0 .75rem;
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
				border-right: 0px solid #B6BEC1;
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
				margin: 0 .5em 0 0;
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

			#footer_site .footer-top-wrap{
				padding: 0 13px;
			}

			#footer_site .top-menu li{
				font-size: 16px;
				font-weight: 600;
			}

			#footer_site .footer-top-wrap hr{
				margin-top: 32px;
				margin-bottom: 17px;
			}

			#footer_site ul.menu-bottom li a{
				margin: 3px 0;
				max-width: 222px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			#footer_site ul li a{
				border-bottom: 2px solid transparent;
			}

			#footer_site ul li a:hover{
				border-bottom: 2px solid #49595e;
			}

			#footer_site ul.menu-bottom li a i{
				margin: 0 9px 0 0;
			}

			#footer_site ul.menu-bottom li a i::before{
				display: inline-block;
				width: 16px;
				height: 16px;
			}


			.topic-menu{
				columns: 2;
			}

			.bottom-text-wrap{
				color: black;
			}

			@media screen and (max-width: 991px){
				#footer_site #block-bean-uaqs-footer-links-bean-main ul{
					text-align: right;
				}
				.bottom-text-wrap{
					text-align: right;
				}
				.number-bottom{
					display: block;
				}
				.topic-menu{
					columns: 1;
				}
				#footer_site #footer_sub ul.menu-bottom{
					margin-bottom: 21px;
				}
			}

			@media screen and (max-width: 767px){
				#footer_site #block-bean-uaqs-footer-links-bean-main ul{
					margin-top: 21px;
					text-align: center;
				}

				.bottom-text-wrap{
					text-align: center;
				}
			}
			@font-face {
				font-family: 'az-icons';
				src:  url('fonts/az-icons.eot?d54800');
				src:  url('fonts/az-icons.eot?d54800#iefix') format('embedded-opentype'),
				  url('fonts/az-icons.ttf?d54800') format('truetype'),
				  url('fonts/az-icons.woff?d54800') format('woff'),
				  url('fonts/az-icons.svg?d54800#az-icons') format('svg');
				font-weight: normal;
				font-style: normal;
				font-display: block;
			  }

			  [class^="az-icon-"]::before, [class*=" az-icon-"]::before {
				/* use !important to prevent issues with browser extensions that change fonts */
				font-family: 'az-icons' !important;
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
	`;render(){return V`
			<footer id="footer_site" class="page page-row" role="contentinfo">
				<div class="region region-footer">
					<div class="container d-flex footer-top-wrap justify-content-between align-items-center">
						<div class="row">
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center-xs text-left-not-xs">
								<div class="row px-0">
									<div class="col-xs-12">
										<a href="https://www.arizona.edu/" title="Home" class="remove-external-link-icon active" @click="${t=>{tm(t,"az-footer")}}"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="Home"></a>              </div>
									</div>
								</div>
								<!-- Add the extra clearfix for only the required viewport -->
								<div class="clearfix visible-xs-block"></div>
								<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 py-0">
									<div id="block-bean-uaqs-footer-links-bean-main" class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs" role="complementary">
										<ul class="menu top-menu">
											<li class="menu__item is-leaf first leaf"><a href="https://talent.arizona.edu" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Employment</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://cirt.arizona.edu" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Emergency Information</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/title-ix" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Title IX / Non-Discrimination</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://safety.arizona.edu/" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Campus Safety</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://clery.arizona.edu/annual-reports" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Annual Security Report</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/copyright" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Copyright</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-accessibility" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Campus Accessibility</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/contact-us" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Contact Us</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/website-feedback" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Feedback</a></li>
										</ul>
									</div>
									<div id="block-bean-footer-university-address" class="block block-bean last even" role="complementary">
										<div class="entity entity-bean bean-uaqs-contact-summary clearfix" about="/block/footer---university-address">
											<div class="content">
												<p class="bottom-text-wrap text-right text-right-sm text-right-md text-right-lg">
												The University of Arizona | Tucson, Arizona 85721 |
												<span class="number-bottom"><a href="tel:520-621-2211">520-621-2211</a></span></p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-12"><hr></div>
							</div>
						</div>
					</div>
					<div id="footer_sub" class="region region-footer-sub">
						<div class="container">
							<div class="row">
									<div id="block-bean-uaqs-footer-links-bean-information" class="block block-bean first odd col-xs-12 col-sm-6 col-md-3 col-lg-3" role="complementary">
										<h5><strong class="text-uppercase">Information for</strong></h5>
										<ul class="menu menu-bottom">
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/admissions" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Future Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/students" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Current Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/faculty-staff" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Faculty &amp; Staff</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/alumni-donors" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Alumni &amp; Donors</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/parents-visitors" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Parents &amp; Visitors</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://corporate.arizona.edu/" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Corporations &amp; Businesses</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-topics" class="block block-bean even col-xs-12 col-sm-6 col-md-5" role="complementary">
										<h5><strong class="text-uppercase">Topics</strong></h5>
										<ul class="menu menu-bottom topic-menu">
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/about" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">About the University</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/academics" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Academics</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/arts-museums" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Arts &amp; Museums</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/athletics-recreation" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Athletics &amp; Recreation</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/colleges-schools" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Colleges, Schools, Departments</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://diversity.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Diversity</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.environment.arizona.edu" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Environment &amp; Sustainability</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://international.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">International Engagement</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/health-sciences" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Health &amp; Medical</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/libraries" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Libraries</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://uaforyou.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Outreach &amp; Extension</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://research.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Research &amp; Innovation</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/purpose-mission-values" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}">Purpose, Mission &amp; Values</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div class="clearfix visible-sm-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-resources" class="block block-bean odd col-xs-12 col-sm-6 col-md-2 clearfix" role="complementary">
										<h5><strong class="text-uppercase">Resources</strong></h5>
										<ul class="menu menu-bottom"><li class="menu__item is-leaf first leaf"><a href="https://directory.arizona.edu/" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-directory"></i>Directory</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/calendars-events" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-calendar"></i>Calendars</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://map.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-campus-map"></i>Campus Map</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://news.arizona.edu" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-news"></i>News</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://phonebook.arizona.edu/" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-directory"></i>Phonebook</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/weather" title="" class="menu__link" @click="${t=>{tm(t,"az-footer")}}"><i class="ua-brand-weather"></i>Weather</a></li>
										</ul>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-connect" class="block block-bean even col-xs-12 col-sm-6 col-md-2 clearfix" role="complementary">
										<h5><strong class="text-uppercase">Connect</strong></h5>
										<ul class="menu menu-bottom">
											<li class="menu__item is-leaf first leaf"><a class="menu__link" href="https://facebook.com/uarizona" target="_blank" title="Click here to visit our Facebook page" rel="noopener noreferrer" @click="${t=>{tm(t,"az-footer")}}"><i class="az-icon-facebook"></i>Facebook</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://twitter.com/uarizona" target="_blank" title="Click here to visit our Twitter page" rel="noopener noreferrer" @click="${t=>{tm(t,"az-footer")}}"><i class="az-icon-twitter"></i>Twitter</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://instagram.com/uarizona" target="_blank" title="Click here to visit our Instagram page" rel="noopener noreferrer" @click="${t=>{tm(t,"az-footer")}}"><i class="az-icon-instagram"></i>Instagram</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://linkedin.com/edu/university-of-arizona-17783" target="_blank" title="Click here to visit our LinkedIn page" rel="noopener noreferrer" @click="${t=>{tm(t,"az-footer")}}"><i class="az-icon-linkedin"></i>LinkedIn</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://youtube.com/universityofarizona" target="_blank" title="Click here to visit our YouTube page" rel="noopener noreferrer" @click="${t=>{tm(t,"az-footer")}}"><i class="az-icon-youtube"></i>YouTube</a></li>
										</ul>
									</div>
									<div id="block-bean-uaqs-footer" class="block block-bean last odd" role="complementary">
										<div class="entity entity-bean bean-uaqs-flexible-block clearfix" about="/block/uaqs-footer">
											<div class="content"></div>
										</div>
									</div>
								</div>
								<div class="entity entity-paragraphs-item paragraphs-item-uaqs-full-width-bg-wrapper mb-0  background-wrapper bg-warm-gray">
									<div class="container">
										<div class="row">
											<div class="col-sm-12">
												<hr>
												<p class="text-align-center text-muted mt-0 mb-0"><em>We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.</em></p>
											</div>
										</div>
									</div>
								</div><!--Close wrapper-->
								<div class="container container-collapsed">
									<div class="row">
										<div class="column col-sm-12"><div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 text-center">
								<hr>
								<p class="small"><a href="https://www.arizona.edu/information-security-privacy" target="_blank" @click="${t=>{tm(t,"az-footer")}}">University Information Security and Privacy</a></p>
								<p class="copyright small">© <span>${new Date().getFullYear()}</span> The Arizona Board of Regents on behalf of <a href="https://www.arizona.edu" target="_blank" @click="${t=>{tm(t,"az-footer")}}">The University of Arizona</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`}}customElements.get("az-footer")||customElements.define("az-footer",td)})();