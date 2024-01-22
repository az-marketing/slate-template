(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,s=this.t;if(e&&void 0===t){let e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}let r=t=>new o("string"==typeof t?t:t+"",void 0,s),n=(s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let e of i){let i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return r(e)})(t):t,{is:h,defineProperty:a,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,b=globalThis,m=b.trustedTypes,f=m?m.emptyScript:"",$=b.reactiveElementPolyfillSupport,g=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&a(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let r=i?.call(this);o.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;let t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){let t=this.properties;for(let e of[...c(t),...u(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let s of new Set(t.flat(1/0).reverse()))e.unshift(l(s));else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){let o=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(!((s??=this.constructor.getPropertyOptions(t)).hasChanged??y)(this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach(t=>this._$EO(t,this[t])),this._$Ej()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[g("elementProperties")]=new Map,v[g("finalized")]=new Map,$?.({ReactiveElement:v}),(b.reactiveElementVersions??=[]).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=globalThis,x=E.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,k="?"+C,P=`<${k}>`,T=document,U=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,z=t=>N(t)||"function"==typeof t?.[Symbol.iterator],I="[ 	\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,L=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,j=/^(?:script|style|textarea|title)$/i,q=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),W=q(1),V=(q(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=T.createTreeWalker(T,129);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}let G=(t,e)=>{let s=t.length-1,i=[],o,r=2===e?"<svg>":"",n=O;for(let e=0;e<s;e++){let s=t[e],l,h,a=-1,d=0;for(;d<s.length&&(n.lastIndex=d,null!==(h=n.exec(s)));)d=n.lastIndex,n===O?"!--"===h[1]?n=R:void 0!==h[1]?n=M:void 0!==h[2]?(j.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=L):void 0!==h[3]&&(n=L):n===L?">"===h[0]?(n=o??O,a=-1):void 0===h[1]?a=-2:(a=n.lastIndex-h[2].length,l=h[1],n=void 0===h[3]?L:'"'===h[3]?D:B):n===D||n===B?n=L:n===R||n===M?n=O:(n=L,o=void 0);let c=n===L&&t[e+1].startsWith("/>")?" ":"";r+=n===O?s+P:a>=0?(i.push(l),s.slice(0,a)+w+s.slice(a)+C+c):s+C+(-2===a?e:c)}return[F(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0,n=t.length-1,l=this.parts,[h,a]=G(t,e);if(this.el=Q.createElement(h,s),Z.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(w)){let e=a[r++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?ts:"?"===n[1]?ti:"@"===n[1]?to:te}),i.removeAttribute(t)}else t.startsWith(C)&&(l.push({type:6,index:o}),i.removeAttribute(t));if(j.test(i.tagName)){let t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),Z.nextNode(),l.push({type:2,index:++o});i.append(t[e],U())}}}else if(8===i.nodeType){if(i.data===k)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)l.push({type:7,index:o}),t+=C.length-1}}o++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl,r=H(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t))._$AT(t,s,i),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);Z.currentNode=i;let o=Z.nextNode(),r=0,n=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new tt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tr(o,this,t)),this._$AV.push(e),l=s[++n]}r!==l?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=T,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){H(t=X(this,t,e))?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):z(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new Y(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Q(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new tt(this.k(U()),this.k(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){let o=this.strings,r=!1;if(void 0===o)(r=!H(t=X(this,t,e,0))||t!==this._$AH&&t!==V)&&(this._$AH=t);else{let i,n;let l=t;for(t=o[0],i=0;i<o.length-1;i++)(n=X(this,l[s+i],e,i))===V&&(n=this._$AH[i]),r||=!H(n)||n!==this._$AH[i],n===K?t=K:t!==K&&(t+=(n??"")+o[i+1]),this._$AH[i]=n}r&&!i&&this.O(t)}O(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ts extends te{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===K?void 0:t}}class ti extends te{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class to extends te{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??K)===V)return;let s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tr{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}let tn=E.litHtmlPolyfillSupport;tn?.(Q,tt),(E.litHtmlVersions??=[]).push("3.1.1");let tl=(t,e,s)=>{let i=s?.renderBefore??e,o=i._$litPart$;if(void 0===o){let t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class th extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tl(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}th._$litElement$=!0,th.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:th});let ta=globalThis.litElementPolyfillSupport;ta?.({LitElement:th}),(globalThis.litElementVersions??=[]).push("4.0.3");let td=Symbol("tabindex"),tc=Symbol("oldTabindex"),tu=Symbol("newTabindex"),tp=t=>class extends t{static get properties(){return{tabIndex:{converter:{fromAttribute:Number,toAttribute:t=>null==t?null:t.toString()},noAccessor:!0,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.hasAttribute("tabindex")||(this.tabIndex=0)}get tabIndex(){return this[td]}set tabIndex(t){let e=this[td];this[td]=t,this.requestUpdate("tabIndex",e)}firstUpdated(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this&&this._focus()}),this.addEventListener("keydown",t=>{!t.defaultPrevented&&t.shiftKey&&9===t.keyCode&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),setTimeout(()=>{this._isShiftTabbing=!1},0))})}update(t){t.has("disabled")&&this._disabledChanged(this.disabled,t.get("disabled")),t.has("tabIndex")&&(this[tu]=this.tabIndex,this._tabIndexChanged(this.tabIndex)),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&(this.focusElement.disabled=this.disabled,this.disabled&&this.blur()),t.has("tabIndex")&&void 0!==this[tu]&&(this.focusElement.tabIndex=this[tu],this[tu]=void 0)}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this._isShiftTabbing||this.focusElement.focus()}focus(){this.disabled||this.focusElement.focus()}blur(){this.focusElement.blur()}_disabledChanged(t,e){t?(this[tc]=this.tabIndex,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):e&&(void 0!==this[tc]&&(this.tabIndex=this[tc]),this.removeAttribute("aria-disabled"))}_tabIndexChanged(t){this.disabled&&t&&(-1!==this.tabIndex&&(this[tc]=this.tabIndex),this.tabIndex=null)}};var tb=((t,...e)=>new o(1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,s))`
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
`;let tm=(t,e="")=>{window.dataLayer=window.dataLayer||[];var s=t.composedPath()[0],i=t.composedPath()[3].innerText?t.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+t.type,shadow_event:{elementInnerHTML:s.textContent||"",elementInnerText:s.innerText||"",title:"shadow-dom-link",element:s,elementClasses:s.className||"",elementId:s.id||"",elementLocation:e||"",elementTarget:s.target||"",elementUrl:s.href||s.action||"",originalEvent:t,parent:i||"",inShadowDom:!0}})};class tf extends tp(th){static properties={link:{type:String,reflect:!0},target:{type:String,reflect:!0},toggle:{type:String,reflect:!0},event:{type:String,reflect:!0},elmid:{type:String,reflect:!0},value:{type:String,reflect:!0}};static get styles(){return[tb]}constructor(){super()}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}changeAttributes(){this.setAttribute("closed","true"),this.setAttribute("aria-expanded","true"),this.requestUpdate()}_handleClick(t){if(tm(t,""),this.event){let t=new Event(this.event);document.querySelector(this.target).dispatchEvent(t);return}{let t=new Event("open-az-offcanvas-menu");document.querySelector(this.target).dispatchEvent(t)}}render(){return W`
			${this.link?W`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${tm}" id="${this.elmid}">${this.value}<slot></slot></a>`:W`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
		`}firstUpdated(){super.firstUpdated(),this.setAttribute("role","button")}get focusElement(){return this.shadowRoot.querySelector(".button")}}customElements.get("az-button")||customElements.define("az-button",tf)})();