parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ytxR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodes=exports.reparentNodes=exports.isCEPolyfill=void 0;const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback;exports.isCEPolyfill=e;const o=(e,o,l=null,s=null)=>{for(;o!==l;){const l=o.nextSibling;e.insertBefore(o,s),o=l}};exports.reparentNodes=o;const l=(e,o,l=null)=>{for(;o!==l;){const l=o.nextSibling;e.removeChild(o),o=l}};exports.removeNodes=l;
},{}],"Av0K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lastAttributeNameRegex=exports.createMarker=exports.isTemplatePartActive=exports.Template=exports.boundAttributeSuffix=exports.markerRegex=exports.nodeMarker=exports.marker=void 0;const e=`{{lit-${String(Math.random()).slice(2)}}}`;exports.marker=e;const t=`\x3c!--${e}--\x3e`;exports.nodeMarker=t;const r=new RegExp(`${e}|${t}`);exports.markerRegex=r;const s="$lit$";exports.boundAttributeSuffix=s;class o{constructor(t,o){this.parts=[],this.element=o;const i=[],l=[],p=document.createTreeWalker(o.content,133,null,!1);let c=0,d=-1,u=0;const{strings:f,values:{length:h}}=t;for(;u<h;){const t=p.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)n(e[t].name,s)&&i++;for(;i-- >0;){const e=f[u],o=x.exec(e)[2],n=o.toLowerCase()+s,i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:o,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),p.currentNode=t.content)}else if(3===t.nodeType){const o=t.data;if(o.indexOf(e)>=0){const e=t.parentNode,l=o.split(r),p=l.length-1;for(let r=0;r<p;r++){let o,i=l[r];if(""===i)o=a();else{const e=x.exec(i);null!==e&&n(e[2],s)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),o=document.createTextNode(i)}e.insertBefore(o,t),this.parts.push({type:"node",index:++d})}""===l[p]?(e.insertBefore(a(),t),i.push(t)):t.data=l[p],u+=p}}else if(8===t.nodeType)if(t.data===e){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(a(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let r=-1;for(;-1!==(r=t.data.indexOf(e,r+1));)this.parts.push({type:"node",index:-1}),u++}}else p.currentNode=l.pop()}for(const e of i)e.parentNode.removeChild(e)}}exports.Template=o;const n=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},i=e=>-1!==e.index;exports.isTemplatePartActive=i;const a=()=>document.createComment("");exports.createMarker=a;const x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;exports.lastAttributeNameRegex=x;
},{}],"NXoq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodesFromTemplate=n,exports.insertNodeIntoTemplate=l;var e=require("./template.js");const t=133;function n(e,n){const{element:{content:r},parts:l}=e,u=document.createTreeWalker(r,t,null,!1);let c=o(l),d=l[c],s=-1,i=0;const a=[];let p=null;for(;u.nextNode();){s++;const e=u.currentNode;for(e.previousSibling===p&&(p=null),n.has(e)&&(a.push(e),null===p&&(p=e)),null!==p&&i++;void 0!==d&&d.index===s;)d.index=null!==p?-1:d.index-i,d=l[c=o(l,c)]}a.forEach(e=>e.parentNode.removeChild(e))}const r=e=>{let n=11===e.nodeType?0:1;const r=document.createTreeWalker(e,t,null,!1);for(;r.nextNode();)n++;return n},o=(t,n=-1)=>{for(let r=n+1;r<t.length;r++){const n=t[r];if((0,e.isTemplatePartActive)(n))return r}return-1};function l(e,n,l=null){const{element:{content:u},parts:c}=e;if(null==l)return void u.appendChild(n);const d=document.createTreeWalker(u,t,null,!1);let s=o(c),i=0,a=-1;for(;d.nextNode();){for(a++,d.currentNode===l&&(i=r(n),l.parentNode.insertBefore(n,l));-1!==s&&c[s].index===a;){if(i>0){for(;-1!==s;)c[s].index+=i,s=o(c,s);return}s=o(c,s)}}}
},{"./template.js":"Av0K"}],"uWh2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDirective=exports.directive=void 0;const e=new WeakMap,t=t=>(...s)=>{const i=t(...s);return e.set(i,!0),i};exports.directive=t;const s=t=>"function"==typeof t&&e.has(t);exports.isDirective=s;
},{}],"pnLb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nothing=exports.noChange=void 0;const e={};exports.noChange=e;const o={};exports.nothing=o;
},{}],"bn5t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TemplateInstance=void 0;var e=require("./dom.js"),t=require("./template.js");class s{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const s=e.isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let i,p=0,l=0,a=n.nextNode();for(;p<r.length;)if(i=r[p],(0,t.isTemplatePartActive)(i)){for(;l<i.index;)l++,"TEMPLATE"===a.nodeName&&(o.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=o.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));p++}else this.__parts.push(void 0),p++;return e.isCEPolyfill&&(document.adoptNode(s),customElements.upgrade(s)),s}}exports.TemplateInstance=s;
},{"./dom.js":"ytxR","./template.js":"Av0K"}],"cVNN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVGTemplateResult=exports.TemplateResult=void 0;var e=require("./dom.js"),t=require("./template.js");const s=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),r=` ${t.marker} `;class l{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let s="",l=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");l=(i>-1||l)&&-1===e.indexOf("--\x3e",i+1);const o=t.lastAttributeNameRegex.exec(e);s+=null===o?e+(l?r:t.nodeMarker):e.substr(0,o.index)+o[1]+o[2]+t.boundAttributeSuffix+o[3]+t.marker}return s+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==s&&(t=s.createHTML(t)),e.innerHTML=t,e}}exports.TemplateResult=l;class n extends l{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),s=t.content,r=s.firstChild;return s.removeChild(r),(0,e.reparentNodes)(s,r.firstChild),t}}exports.SVGTemplateResult=n;
},{"./dom.js":"ytxR","./template.js":"Av0K"}],"atl2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventPart=exports.PropertyPart=exports.PropertyCommitter=exports.BooleanAttributePart=exports.NodePart=exports.AttributePart=exports.AttributeCommitter=exports.isIterable=exports.isPrimitive=void 0;var t=require("./directive.js"),e=require("./dom.js"),i=require("./part.js"),s=require("./template-instance.js"),n=require("./template-result.js"),r=require("./template.js");const o=t=>null===t||!("object"==typeof t||"function"==typeof t);exports.isPrimitive=o;const a=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);exports.isIterable=a;class h{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!a(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(o(t)||!a(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}exports.AttributeCommitter=h;class l{constructor(t){this.value=void 0,this.committer=t}setValue(e){e===i.noChange||o(e)&&e===this.value||(this.value=e,(0,t.isDirective)(e)||(this.committer.dirty=!0))}commit(){for(;(0,t.isDirective)(this.value);){const t=this.value;this.value=i.noChange,t(this)}this.value!==i.noChange&&this.committer.commit()}}exports.AttributePart=l;class u{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild((0,r.createMarker)()),this.endNode=t.appendChild((0,r.createMarker)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=(0,r.createMarker)()),t.__insert(this.endNode=(0,r.createMarker)())}insertAfterPart(t){t.__insert(this.startNode=(0,r.createMarker)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}const e=this.__pendingValue;e!==i.noChange&&(o(e)?e!==this.value&&this.__commitText(e):e instanceof n.TemplateResult?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):a(e)?this.__commitIterable(e):e===i.nothing?(this.value=i.nothing,this.clear()):this.__commitText(e))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const i=new s.TemplateInstance(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)void 0===(i=e[s])&&(i=new u(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){(0,e.removeNodes)(this.startNode.parentNode,t.nextSibling,this.endNode)}}exports.NodePart=u;class d{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.noChange}}exports.BooleanAttributePart=d;class c extends h{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new p(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}exports.PropertyCommitter=c;class p extends l{}exports.PropertyPart=p;let _=!1;(()=>{try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}})();class m{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),r=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.noChange}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}exports.EventPart=m;const v=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
},{"./directive.js":"uWh2","./dom.js":"ytxR","./part.js":"pnLb","./template-instance.js":"bn5t","./template-result.js":"cVNN","./template.js":"Av0K"}],"gbKZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templateFactory=t,exports.templateCaches=void 0;var e=require("./template.js");function t(t){let s=r.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(e.marker);return void 0===(n=s.keyString.get(a))&&(n=new e.Template(t,t.getTemplateElement()),s.keyString.set(a,n)),s.stringsArray.set(t.strings,n),n}const r=new Map;exports.templateCaches=r;
},{"./template.js":"Av0K"}],"Fhpq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.parts=void 0;var e=require("./dom.js"),t=require("./parts.js"),r=require("./template-factory.js");const s=new WeakMap;exports.parts=s;const o=(o,a,p)=>{let d=s.get(a);void 0===d&&((0,e.removeNodes)(a,a.firstChild),s.set(a,d=new t.NodePart(Object.assign({templateFactory:r.templateFactory},p))),d.appendInto(a)),d.setValue(o),d.commit()};exports.render=o;
},{"./dom.js":"ytxR","./parts.js":"atl2","./template-factory.js":"gbKZ"}],"LBiL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultTemplateProcessor=exports.DefaultTemplateProcessor=void 0;var e=require("./parts.js");class t{handleAttributeExpressions(t,r,s,o){const a=r[0];if("."===a){return new e.PropertyCommitter(t,r.slice(1),s).parts}return"@"===a?[new e.EventPart(t,r.slice(1),o.eventContext)]:"?"===a?[new e.BooleanAttributePart(t,r.slice(1),s)]:new e.AttributeCommitter(t,r,s).parts}handleTextExpression(t){return new e.NodePart(t)}}exports.DefaultTemplateProcessor=t;const r=new t;exports.defaultTemplateProcessor=r;
},{"./parts.js":"atl2"}],"SPDu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DefaultTemplateProcessor",{enumerable:!0,get:function(){return e.DefaultTemplateProcessor}}),Object.defineProperty(exports,"defaultTemplateProcessor",{enumerable:!0,get:function(){return e.defaultTemplateProcessor}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return t.SVGTemplateResult}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return t.TemplateResult}}),Object.defineProperty(exports,"directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(exports,"isDirective",{enumerable:!0,get:function(){return r.isDirective}}),Object.defineProperty(exports,"removeNodes",{enumerable:!0,get:function(){return n.removeNodes}}),Object.defineProperty(exports,"reparentNodes",{enumerable:!0,get:function(){return n.reparentNodes}}),Object.defineProperty(exports,"noChange",{enumerable:!0,get:function(){return o.noChange}}),Object.defineProperty(exports,"nothing",{enumerable:!0,get:function(){return o.nothing}}),Object.defineProperty(exports,"AttributeCommitter",{enumerable:!0,get:function(){return i.AttributeCommitter}}),Object.defineProperty(exports,"AttributePart",{enumerable:!0,get:function(){return i.AttributePart}}),Object.defineProperty(exports,"BooleanAttributePart",{enumerable:!0,get:function(){return i.BooleanAttributePart}}),Object.defineProperty(exports,"EventPart",{enumerable:!0,get:function(){return i.EventPart}}),Object.defineProperty(exports,"isIterable",{enumerable:!0,get:function(){return i.isIterable}}),Object.defineProperty(exports,"isPrimitive",{enumerable:!0,get:function(){return i.isPrimitive}}),Object.defineProperty(exports,"NodePart",{enumerable:!0,get:function(){return i.NodePart}}),Object.defineProperty(exports,"PropertyCommitter",{enumerable:!0,get:function(){return i.PropertyCommitter}}),Object.defineProperty(exports,"PropertyPart",{enumerable:!0,get:function(){return i.PropertyPart}}),Object.defineProperty(exports,"parts",{enumerable:!0,get:function(){return u.parts}}),Object.defineProperty(exports,"render",{enumerable:!0,get:function(){return u.render}}),Object.defineProperty(exports,"templateCaches",{enumerable:!0,get:function(){return p.templateCaches}}),Object.defineProperty(exports,"templateFactory",{enumerable:!0,get:function(){return p.templateFactory}}),Object.defineProperty(exports,"TemplateInstance",{enumerable:!0,get:function(){return a.TemplateInstance}}),Object.defineProperty(exports,"createMarker",{enumerable:!0,get:function(){return s.createMarker}}),Object.defineProperty(exports,"isTemplatePartActive",{enumerable:!0,get:function(){return s.isTemplatePartActive}}),Object.defineProperty(exports,"Template",{enumerable:!0,get:function(){return s.Template}}),exports.svg=exports.html=void 0;var e=require("./lib/default-template-processor.js"),t=require("./lib/template-result.js"),r=require("./lib/directive.js"),n=require("./lib/dom.js"),o=require("./lib/part.js"),i=require("./lib/parts.js"),u=require("./lib/render.js"),p=require("./lib/template-factory.js"),a=require("./lib/template-instance.js"),s=require("./lib/template.js");"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const l=(r,...n)=>new t.TemplateResult(r,n,"html",e.defaultTemplateProcessor);exports.html=l;const c=(r,...n)=>new t.SVGTemplateResult(r,n,"svg",e.defaultTemplateProcessor);exports.svg=c;
},{"./lib/default-template-processor.js":"LBiL","./lib/template-result.js":"cVNN","./lib/directive.js":"uWh2","./lib/dom.js":"ytxR","./lib/part.js":"pnLb","./lib/parts.js":"atl2","./lib/render.js":"Fhpq","./lib/template-factory.js":"gbKZ","./lib/template-instance.js":"bn5t","./lib/template.js":"Av0K"}],"eBH8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return a.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return a.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return a.TemplateResult}}),exports.render=exports.shadyTemplateFactory=void 0;var e=require("./dom.js"),t=require("./modify-template.js"),r=require("./render.js"),o=require("./template-factory.js"),n=require("./template-instance.js"),s=require("./template.js"),a=require("../lit-html.js");const l=(e,t)=>`${e}--${t}`;let i=!0;void 0===window.ShadyCSS?i=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),i=!1);const d=e=>t=>{const r=l(t.type,e);let n=o.templateCaches.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},o.templateCaches.set(r,n));let a=n.stringsArray.get(t.strings);if(void 0!==a)return a;const d=t.strings.join(s.marker);if(void 0===(a=n.keyString.get(d))){const r=t.getTemplateElement();i&&window.ShadyCSS.prepareTemplateDom(r,e),a=new s.Template(t,r),n.keyString.set(d,a)}return n.stringsArray.set(t.strings,a),a};exports.shadyTemplateFactory=d;const p=["html","svg"],c=e=>{p.forEach(r=>{const n=o.templateCaches.get(l(r,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:r}}=e,o=new Set;Array.from(r.querySelectorAll("style")).forEach(e=>{o.add(e)}),(0,t.removeNodesFromTemplate)(e,o)})})},m=new Set,y=(e,r,o)=>{m.add(e);const n=o?o.element:document.createElement("template"),s=r.querySelectorAll("style"),{length:a}=s;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(n,e);const l=document.createElement("style");for(let t=0;t<a;t++){const e=s[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}c(e);const i=n.content;o?(0,t.insertNodeIntoTemplate)(o,l,i.firstChild):i.insertBefore(l,i.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const d=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)r.insertBefore(d.cloneNode(!0),r.firstChild);else if(o){i.insertBefore(l,i.firstChild);const e=new Set;e.add(l),(0,t.removeNodesFromTemplate)(o,e)}},S=(t,o,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,l=r.parts.has(o),p=i&&11===o.nodeType&&!!o.host,c=p&&!m.has(a),S=c?document.createDocumentFragment():o;if((0,r.render)(t,S,Object.assign({templateFactory:d(a)},s)),c){const t=r.parts.get(S);r.parts.delete(S);const s=t.value instanceof n.TemplateInstance?t.value.template:void 0;y(a,S,s),(0,e.removeNodes)(o,o.firstChild),o.appendChild(S),r.parts.set(o,t)}!l&&p&&window.ShadyCSS.styleElement(o.host)};exports.render=S;
},{"./dom.js":"ytxR","./modify-template.js":"NXoq","./render.js":"Fhpq","./template-factory.js":"gbKZ","./template-instance.js":"bn5t","./template.js":"Av0K","../lit-html.js":"SPDu"}],"fKvB":[function(require,module,exports) {
"use strict";var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UpdatingElement=exports.notEqual=exports.defaultConverter=void 0,window.JSCompiler_renameProperty=((t,e)=>t);const e={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}};exports.defaultConverter=e;const r=(t,e)=>e!==t&&(e==e||t==t);exports.notEqual=r;const s={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:r},i=1,a=4,o=8,p=16,n="finalized";class h extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=s){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||s}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(n)||t.finalize(),this[n]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=r){return s(t,e)}static _propertyValueFromAttribute(t,r){const s=r.type,i=r.converter||e,a="function"==typeof i?i:i.fromAttribute;return a?a(t,s):t}static _propertyValueToAttribute(t,r){if(void 0===r.reflect)return;const s=r.type,i=r.converter;return(i&&i.toAttribute||e.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=s){const i=this.constructor,a=i._attributeNameForProperty(t,r);if(void 0!==a){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=this._updateState|o,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=this._updateState&~o}}_attributeToProperty(t,e){if(this._updateState&o)return;const r=this.constructor,s=r._attributeToPropertyMap.get(t);if(void 0!==s){const t=r.getPropertyOptions(s);this._updateState=this._updateState|p,this[s]=r._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~p}}requestUpdateInternal(t,e,r){let s=!0;if(void 0!==t){const i=this.constructor;r=r||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&p||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|a;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&a}get hasUpdated(){return this._updateState&i}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(r){throw t=!1,this._markUpdated(),r}t&&(this._updateState&i||(this._updateState=this._updateState|i,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~a}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}exports.UpdatingElement=h,h[t=n]=!0;
},{}],"FzpZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.property=i,exports.internalProperty=s,exports.query=u,exports.queryAsync=l,exports.queryAll=a,exports.eventOptions=m,exports.queryAssignedNodes=g,exports.state=exports.customElement=void 0;const e=(e,t)=>(window.customElements.define(e,t),t),t=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}},r=r=>n=>"function"==typeof n?e(r,n):t(r,n);exports.customElement=r;const n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}),o=(e,t,r)=>{t.constructor.createProperty(r,e)};function i(e){return(t,r)=>void 0!==r?o(e,t,r):n(e,t)}function s(e){return i({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}const c=e=>s(e);function u(e,t){return(r,n)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t=void 0!==n?n:r.key,i="symbol"==typeof t?Symbol():`__${t}`;o.get=function(){return void 0===this[i]&&(this[i]=this.renderRoot.querySelector(e)),this[i]}}return void 0!==n?d(o,r,n):p(o,r)}}function l(e){return(t,r)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?d(n,t,r):p(n,t)}}function a(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==r?d(n,t,r):p(n,t)}}exports.state=c;const d=(e,t,r)=>{Object.defineProperty(t,r,e)},p=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),y=(e,t)=>Object.assign(Object.assign({},t),{finisher(r){Object.assign(r.prototype[t.key],e)}}),f=(e,t,r)=>{Object.assign(t[r],e)};function m(e){return(t,r)=>void 0!==r?f(e,t,r):y(e,t)}const h=Element.prototype,b=h.msMatchesSelector||h.webkitMatchesSelector;function g(e="",t=!1,r=""){return(n,o)=>{const i={get(){const n=`slot${e?`[name=${e}]`:":not([name])"}`,o=this.renderRoot.querySelector(n);let i=o&&o.assignedNodes({flatten:t});return i&&r&&(i=i.filter(e=>e.nodeType===Node.ELEMENT_NODE&&(e.matches?e.matches(r):b.call(e,r)))),i},enumerable:!0,configurable:!0};return void 0!==o?d(i,n,o):p(i,n)}}
},{}],"ZFCR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.css=exports.unsafeCSS=exports.CSSResult=exports.supportsAdoptingStyleSheets=void 0;const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;exports.supportsAdoptingStyleSheets=e;const t=Symbol();class s{constructor(e,s){if(s!==t)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(e?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}exports.CSSResult=s;const o=e=>new s(String(e),t);exports.unsafeCSS=o;const r=e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},n=(e,...o)=>{const n=o.reduce((t,s,o)=>t+r(s)+e[o+1],e[0]);return new s(n,t)};exports.css=n;
},{}],"bhxD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={LitElement:!0,ReactiveElement:!0,html:!0,svg:!0,TemplateResult:!0,SVGTemplateResult:!0};Object.defineProperty(exports,"ReactiveElement",{enumerable:!0,get:function(){return r.UpdatingElement}}),Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return o.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return o.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return o.TemplateResult}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return o.SVGTemplateResult}}),exports.LitElement=void 0;var t=require("lit-html/lib/shady-render.js"),r=require("./lib/updating-element.js");Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in exports&&exports[t]===r[t]||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}}))});var s=require("./lib/decorators.js");Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in exports&&exports[t]===s[t]||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return s[t]}}))});var o=require("lit-html/lit-html.js"),n=require("./lib/css-tag.js");Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in exports&&exports[t]===n[t]||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}}))}),(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const i={};class l extends r.UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),s=[];r.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!n.supportsAdoptingStyleSheets){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return(0,n.unsafeCSS)(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?n.supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==i&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return i}}exports.LitElement=l,l.finalized=!0,l.render=t.render,l.shadowRootOptions={mode:"open"};
},{"lit-html/lib/shady-render.js":"eBH8","./lib/updating-element.js":"fKvB","./lib/decorators.js":"FzpZ","lit-html/lit-html.js":"SPDu","./lib/css-tag.js":"ZFCR"}],"tktD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.eventDataLayerPush=void 0;const e=(e,t="")=>{window.dataLayer=window.dataLayer||[];var n=e.composedPath()[0],a=e.composedPath()[3].innerText?e.composedPath()[3].innerText.split("\n")[0]:"";window.dataLayer.push({event:"shadow_event_"+e.type,shadow_event:{elementInnerHTML:n.textContent||"",elementInnerText:n.innerText||"",title:"shadow-dom-link",element:n,elementClasses:n.className||"",elementId:n.id||"",elementLocation:t||"",elementTarget:n.target||"",elementUrl:n.href||n.action||"",originalEvent:e,parent:a||"",inShadowDom:!0}})};exports.eventDataLayerPush=e;
},{}],"dZb0":[function(require,module,exports) {
"use strict";var e=require("lit-element"),t=require("./mixins/shadow-events-datalayer");class i extends e.LitElement{static get styles(){return e.css`
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
    		color: #49595e;
    		text-decoration: underline;
			}
			#footer_site ul {
				display: inline-block;
				margin: 0;
				padding: 1rem 0 0;
			}
			#footer_site #block-bean-uaqs-footer-links-bean-main ul {
				display: inline-block;
				padding: 0;
				margin: 0 0 12px;
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
				color: hsl(0,0%,20%);
				text-decoration: none;
				text-transform: none;
				font-size: 14px;
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
			}
			#footer_site ul li a {
				color: hsl(0,0%,20%);
				font-weight: normal;
				display: block;
				text-decoration: none;
				font-size: 14px;
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




		`}render(){return e.html`
			<footer id="footer_site" class="page page-row" role="contentinfo">
				<div class="region region-footer">
					<div class="container">
						<div class="row">
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 text-center-xs text-left-not-xs">
								<div class="row bottom-buffer-30">
									<div class="col-xs-12">
										<a href="https://www.arizona.edu/" title="Home" class="remove-external-link-icon active" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="Home"></a>              </div>
									</div>
								</div>
								<!-- Add the extra clearfix for only the required viewport -->
								<div class="clearfix visible-xs-block"></div>
								<div class="col-xs-12 col-sm-7 col-md-8 col-lg-8">
									<div id="block-bean-uaqs-footer-links-bean-main" class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs" role="complementary">
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="https://talent.arizona.edu" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Employment</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://cirt.arizona.edu" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Emergency Information</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/title-ix" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Title IX / Non-Discrimination</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-safety" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Campus Safety</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://cirt.arizona.edu/ualert" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">UAlert</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/copyright" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Copyright</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-accessibility" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Campus Accessibility</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/contact-us" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Contact Us</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/website-feedback" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Feedback</a></li>
										</ul>
									</div>
									<div id="block-bean-footer-university-address" class="block block-bean last even" role="complementary">
										<div class="entity entity-bean bean-uaqs-contact-summary clearfix" about="/block/footer---university-address">
											<div class="content">
												<p class="text-center-xs text-right-sm text-right-md text-right-lg"><span>
												The University of Arizona | Tucson, Arizona 85721 | </span><span>
												<a href="tel:520-621-2211">520-621-2211</a></span></p>
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
									<div id="block-bean-uaqs-footer-links-bean-informa" class="block block-bean first odd col-xs-12 col-sm-4 col-md-3 col-lg-3" role="complementary">
										<h5><strong class="text-uppercase">Information for</strong></h5>
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="http://www.arizona.edu/future-students" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Future Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/students" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Current Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/faculty-staff" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Faculty &amp; Staff</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/alumni-donors" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Alumni &amp; Donors</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/parents-visitors" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Parents &amp; Visitors</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/corporations-businesses" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Corporations &amp; Businesses</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-topics" class="block block-bean even col-xs-12 col-sm-8 col-md-5 two-col-menu" role="complementary">
										<h5><strong class="text-uppercase">Topics</strong></h5>
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/about" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">About the University</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/academics" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Academics</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/arts-museums" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Arts &amp; Museums</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/athletics-recreation" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Athletics &amp; Recreation</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/colleges-schools" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Colleges, Schools, Departments</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://diversity.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Diversity</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.environment.arizona.edu" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Environment &amp; Sustainability</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://international.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Global Engagement</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/health-sciences" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Health &amp; Medical</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/libraries" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Libraries</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://uaforyou.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Outreach &amp; Extension</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://research.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Research &amp; Innovation</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/purpose-mission-values" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">Purpose, Mission &amp; Values</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div class="clearfix visible-sm-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-resourc" class="block block-bean odd col-xs-6 col-sm-4 col-md-2 clearfix" role="complementary">
										<h5><strong class="text-uppercase">Resources</strong></h5>
										<ul class="menu"><li class="menu__item is-leaf first leaf"><a href="http://directory.arizona.edu/index" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-directory"></i>A-Z Index</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/calendars-events" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-calendar"></i>Calendars</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://map.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-campus-map"></i>Campus Map</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://news.arizona.edu" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-news"></i>News</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://directory.arizona.edu/phonebook" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-directory"></i>Phonebook</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/weather" title="" class="menu__link" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-weather"></i>Weather</a></li>
										</ul>
									</div>
									<div id="block-uaqs-social-media-uaqs-social-media-links" class="block block-uaqs-social-media even col-xs-6 col-sm-4 col-md-2" role="complementary">
										<h5><strong class="text-uppercase">Connect</strong></h5>
										<div class="content">
											<ul id="social-media-links">
												<li class="uaqs-social-media"><a href="https://facebook.com/uarizona" target="_blank" title="Click here to visit our Facebook page" rel="noopener noreferrer" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-facebook"></i>Facebook</a></li>
												<li class="uaqs-social-media"><a href="https://twitter.com/uarizona" target="_blank" title="Click here to visit our Twitter page" rel="noopener noreferrer" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-twitter"></i>Twitter</a></li>
												<li class="uaqs-social-media"><a href="https://instagram.com/uarizona" target="_blank" title="Click here to visit our Instagram page" rel="noopener noreferrer" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-instagram"></i>Instagram</a></li>
												<li class="uaqs-social-media"><a href="https://linkedin.com/edu/university-of-arizona-17783" target="_blank" title="Click here to visit our LinkedIn page" rel="noopener noreferrer" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-linkedin"></i>LinkedIn</a></li>
												<li class="uaqs-social-media"><a href="https://youtube.com/universityofarizona" target="_blank" title="Click here to visit our YouTube page" rel="noopener noreferrer" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}"><i class="ua-brand-youtube"></i>YouTube</a></li>
											</ul>
										</div>
									</div>
									<div id="block-bean-uagc-footer" class="block block-bean last odd" role="complementary">
										<div class="entity entity-bean bean-uaqs-flexible-block clearfix" about="/block/uagc-footer">
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
												<hr>
												<p class="text-align-center text-muted mt-0 mb-0">We are affiliated with the&nbsp;<a class="text-muted" href="https://www.uagc.edu" target="_blank" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">University of Arizona Global Campus</a></p>
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
								<p class="small"><a href="https://www.arizona.edu/information-security-privacy" target="_blank" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">University Information Security and Privacy</a></p>
								<p class="copyright small">© 2021 The Arizona Board of Regents on behalf of <a href="https://www.arizona.edu" target="_blank" @click="${e=>{(0,t.eventDataLayerPush)(e,"az-footer")}}">The University of Arizona</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`}}customElements.get("az-footer")||customElements.define("az-footer",i);
},{"lit-element":"bhxD","./mixins/shadow-events-datalayer":"tktD"}]},{},["dZb0"], "az_redbar")
