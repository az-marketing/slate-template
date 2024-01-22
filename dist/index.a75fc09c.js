(()=>{
    function e(e, t, i, o) {
        Object.defineProperty(e, t, {
            get: i,
            set: o,
            enumerable: !0,
            configurable: !0
        });
    }
    var t = globalThis, i = {}, o = {}, r = t.parcelRequire94c2;
    null == r && ((r = function(e) {
        if (e in i) return i[e].exports;
        if (e in o) {
            var t = o[e];
            delete o[e];
            var r = {
                id: e,
                exports: {}
            };
            return i[e] = r, t.call(r.exports, r, r.exports), r.exports;
        }
        var a = Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a;
    }).register = function(e, t) {
        o[e] = t;
    }, t.parcelRequire94c2 = r);
    var a = r.register;
    a("ce3eZ", function(t, i) {
        e(t.exports, "css", ()=>r("aR0Op").css), e(t.exports, "supportsAdoptingStyleSheets", ()=>r("aR0Op").supportsAdoptingStyleSheets), e(t.exports, "unsafeCSS", ()=>r("aR0Op").unsafeCSS), e(t.exports, "LitElement", ()=>l), e(t.exports, "html", ()=>r("gDATu").html); /**
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
        var o = r("2ny1h"), a = r("69p5A");
        r("k3gML"), r("gDATu");
        var n = r("aR0Op");
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
        let s = {};
        class l extends a.UpdatingElement {
            static getStyles() {
                return this.styles;
            }
            static _getUniqueStyles() {
                if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
                let e = this.getStyles();
                if (Array.isArray(e)) {
                    let t = (e, i)=>e.reduceRight((e, i)=>Array.isArray(i) ? t(i, e) : (e.add(i), e), i), i = t(e, new Set), o = [];
                    i.forEach((e)=>o.unshift(e)), this._styles = o;
                } else this._styles = void 0 === e ? [] : [
                    e
                ];
                this._styles = this._styles.map((e)=>{
                    if (e instanceof CSSStyleSheet && !n.supportsAdoptingStyleSheets) {
                        let t = Array.prototype.slice.call(e.cssRules).reduce((e, t)=>e + t.cssText, "");
                        return (0, n.unsafeCSS)(t);
                    }
                    return e;
                });
            }
            initialize() {
                super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
            }
            createRenderRoot() {
                return this.attachShadow(this.constructor.shadowRootOptions);
            }
            adoptStyles() {
                let e = this.constructor._styles;
                0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? n.supportsAdoptingStyleSheets ? this.renderRoot.adoptedStyleSheets = e.map((e)=>e instanceof CSSStyleSheet ? e : e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e)=>e.cssText), this.localName));
            }
            connectedCallback() {
                super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
            }
            update(e) {
                let t = this.render();
                super.update(e), t !== s && this.constructor.render(t, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e)=>{
                    let t = document.createElement("style");
                    t.textContent = e.cssText, this.renderRoot.appendChild(t);
                }));
            }
            render() {
                return s;
            }
        }
        l.finalized = !0, l.render = o.render, l.shadowRootOptions = {
            mode: "open"
        };
    }), a("2ny1h", function(t, i) {
        e(t.exports, "render", ()=>b); /**
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
        var o = r("4ZP3J"), a = r("3Qbow"), n = r("9hBdL"), s = r("4j44n"), l = r("2FsDN"), c = r("96TOB");
        r("gDATu"), r("aL6n3");
        let d = (e, t)=>`${e}--${t}`, f = !0;
        void 0 === window.ShadyCSS ? f = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), f = !1);
        let p = (e)=>(t)=>{
                let i = d(t.type, e), o = (0, s.templateCaches).get(i);
                void 0 === o && (o = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, (0, s.templateCaches).set(i, o));
                let r = o.stringsArray.get(t.strings);
                if (void 0 !== r) return r;
                let a = t.strings.join(c.marker);
                if (void 0 === (r = o.keyString.get(a))) {
                    let i = t.getTemplateElement();
                    f && window.ShadyCSS.prepareTemplateDom(i, e), r = new c.Template(t, i), o.keyString.set(a, r);
                }
                return o.stringsArray.set(t.strings, r), r;
            }, m = [
            "html",
            "svg"
        ], h = (e)=>{
            m.forEach((t)=>{
                let i = (0, s.templateCaches).get(d(t, e));
                void 0 !== i && i.keyString.forEach((e)=>{
                    let { element: { content: t } } = e, i = new Set;
                    Array.from(t.querySelectorAll("style")).forEach((e)=>{
                        i.add(e);
                    }), (0, a.removeNodesFromTemplate)(e, i);
                });
            });
        }, u = new Set, g = (e, t, i)=>{
            u.add(e);
            let o = i ? i.element : document.createElement("template"), r = t.querySelectorAll("style"), { length: n } = r;
            if (0 === n) {
                window.ShadyCSS.prepareTemplateStyles(o, e);
                return;
            }
            let s = document.createElement("style");
            for(let e = 0; e < n; e++){
                let t = r[e];
                t.parentNode.removeChild(t), s.textContent += t.textContent;
            }
            h(e);
            let l = o.content;
            i ? (0, a.insertNodeIntoTemplate)(i, s, l.firstChild) : l.insertBefore(s, l.firstChild), window.ShadyCSS.prepareTemplateStyles(o, e);
            let c = l.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== c) t.insertBefore(c.cloneNode(!0), t.firstChild);
            else if (i) {
                l.insertBefore(s, l.firstChild);
                let e = new Set;
                e.add(s), (0, a.removeNodesFromTemplate)(i, e);
            }
        }, b = (e, t, i)=>{
            if (!i || "object" != typeof i || !i.scopeName) throw Error("The `scopeName` option is required.");
            let r = i.scopeName, a = (0, n.parts).has(t), s = f && 11 === t.nodeType && !!t.host, c = s && !u.has(r), d = c ? document.createDocumentFragment() : t;
            if ((0, n.render)(e, d, Object.assign({
                templateFactory: p(r)
            }, i)), c) {
                let e = (0, n.parts).get(d);
                (0, n.parts).delete(d), g(r, d, e.value instanceof l.TemplateInstance ? e.value.template : void 0), (0, o.removeNodes)(t, t.firstChild), t.appendChild(d), (0, n.parts).set(t, e);
            }
            !a && s && window.ShadyCSS.styleElement(t.host);
        };
    }), a("4ZP3J", function(t, i) {
        e(t.exports, "isCEPolyfill", ()=>o), e(t.exports, "reparentNodes", ()=>r), e(t.exports, "removeNodes", ()=>a); /**
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
        let o = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback, r = (e, t, i = null, o = null)=>{
            for(; t !== i;){
                let i = t.nextSibling;
                e.insertBefore(t, o), t = i;
            }
        }, a = (e, t, i = null)=>{
            for(; t !== i;){
                let i = t.nextSibling;
                e.removeChild(t), t = i;
            }
        };
    }), a("3Qbow", function(t, i) {
        e(t.exports, "removeNodesFromTemplate", ()=>a), e(t.exports, "insertNodeIntoTemplate", ()=>l); /**
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
        var o = r("96TOB");
        function a(e, t) {
            let { element: { content: i }, parts: o } = e, r = document.createTreeWalker(i, 133, null, !1), a = s(o), n = o[a], l = -1, c = 0, d = [], f = null;
            for(; r.nextNode();){
                l++;
                let e = r.currentNode;
                for(e.previousSibling === f && (f = null), t.has(e) && (d.push(e), null === f && (f = e)), null !== f && c++; void 0 !== n && n.index === l;)n.index = null !== f ? -1 : n.index - c, a = s(o, a), n = o[a];
            }
            d.forEach((e)=>e.parentNode.removeChild(e));
        }
        let n = (e)=>{
            let t = 11 === e.nodeType ? 0 : 1, i = document.createTreeWalker(e, 133, null, !1);
            for(; i.nextNode();)t++;
            return t;
        }, s = (e, t = -1)=>{
            for(let i = t + 1; i < e.length; i++){
                let t = e[i];
                if ((0, o.isTemplatePartActive)(t)) return i;
            }
            return -1;
        };
        function l(e, t, i = null) {
            let { element: { content: o }, parts: r } = e;
            if (null == i) {
                o.appendChild(t);
                return;
            }
            let a = document.createTreeWalker(o, 133, null, !1), l = s(r), c = 0, d = -1;
            for(; a.nextNode();)for(d++, a.currentNode === i && (c = n(t), i.parentNode.insertBefore(t, i)); -1 !== l && r[l].index === d;){
                if (c > 0) {
                    for(; -1 !== l;)r[l].index += c, l = s(r, l);
                    return;
                }
                l = s(r, l);
            }
        }
    }), a("96TOB", function(t, i) {
        e(t.exports, "marker", ()=>o), e(t.exports, "nodeMarker", ()=>r), e(t.exports, "boundAttributeSuffix", ()=>n), e(t.exports, "Template", ()=>s), e(t.exports, "lastAttributeNameRegex", ()=>f), e(t.exports, "createMarker", ()=>d), e(t.exports, "isTemplatePartActive", ()=>c); /**
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
        let o = `{{lit-${String(Math.random()).slice(2)}}}`, r = `<!--${o}-->`, a = RegExp(`${o}|${r}`), n = "$lit$";
        class s {
            constructor(e, t){
                this.parts = [], this.element = t;
                let i = [], r = [], s = document.createTreeWalker(t.content, 133, null, !1), c = 0, p = -1, m = 0, { strings: h, values: { length: u } } = e;
                for(; m < u;){
                    let e = s.nextNode();
                    if (null === e) {
                        s.currentNode = r.pop();
                        continue;
                    }
                    if (p++, 1 === e.nodeType) {
                        if (e.hasAttributes()) {
                            let t = e.attributes, { length: i } = t, o = 0;
                            for(let e = 0; e < i; e++)l(t[e].name, n) && o++;
                            for(; o-- > 0;){
                                let t = f.exec(h[m])[2], i = t.toLowerCase() + n, o = e.getAttribute(i);
                                e.removeAttribute(i);
                                let r = o.split(a);
                                this.parts.push({
                                    type: "attribute",
                                    index: p,
                                    name: t,
                                    strings: r
                                }), m += r.length - 1;
                            }
                        }
                        "TEMPLATE" === e.tagName && (r.push(e), s.currentNode = e.content);
                    } else if (3 === e.nodeType) {
                        let t = e.data;
                        if (t.indexOf(o) >= 0) {
                            let o = e.parentNode, r = t.split(a), s = r.length - 1;
                            for(let t = 0; t < s; t++){
                                let i;
                                let a = r[t];
                                if ("" === a) i = d();
                                else {
                                    let e = f.exec(a);
                                    null !== e && l(e[2], n) && (a = a.slice(0, e.index) + e[1] + e[2].slice(0, -n.length) + e[3]), i = document.createTextNode(a);
                                }
                                o.insertBefore(i, e), this.parts.push({
                                    type: "node",
                                    index: ++p
                                });
                            }
                            "" === r[s] ? (o.insertBefore(d(), e), i.push(e)) : e.data = r[s], m += s;
                        }
                    } else if (8 === e.nodeType) {
                        if (e.data === o) {
                            let t = e.parentNode;
                            (null === e.previousSibling || p === c) && (p++, t.insertBefore(d(), e)), c = p, this.parts.push({
                                type: "node",
                                index: p
                            }), null === e.nextSibling ? e.data = "" : (i.push(e), p--), m++;
                        } else {
                            let t = -1;
                            for(; -1 !== (t = e.data.indexOf(o, t + 1));)this.parts.push({
                                type: "node",
                                index: -1
                            }), m++;
                        }
                    }
                }
                for (let e of i)e.parentNode.removeChild(e);
            }
        }
        let l = (e, t)=>{
            let i = e.length - t.length;
            return i >= 0 && e.slice(i) === t;
        }, c = (e)=>-1 !== e.index, d = ()=>document.createComment(""), f = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    }), a("9hBdL", function(t, i) {
        e(t.exports, "parts", ()=>s), e(t.exports, "render", ()=>l); /**
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
        var o = r("4ZP3J"), a = r("9Of8t"), n = r("4j44n");
        let s = new WeakMap, l = (e, t, i)=>{
            let r = s.get(t);
            void 0 === r && ((0, o.removeNodes)(t, t.firstChild), s.set(t, r = new a.NodePart(Object.assign({
                templateFactory: n.templateFactory
            }, i))), r.appendInto(t)), r.setValue(e), r.commit();
        };
    }), a("9Of8t", function(t, i) {
        e(t.exports, "AttributeCommitter", ()=>p), e(t.exports, "NodePart", ()=>h), e(t.exports, "BooleanAttributePart", ()=>u), e(t.exports, "PropertyCommitter", ()=>g), e(t.exports, "EventPart", ()=>_); /**
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
        var o = r("gRGRg"), a = r("4ZP3J"), n = r("1P4pI"), s = r("2FsDN"), l = r("aL6n3"), c = r("96TOB");
        let d = (e)=>null === e || !("object" == typeof e || "function" == typeof e), f = (e)=>Array.isArray(e) || !!(e && e[Symbol.iterator]);
        class p {
            constructor(e, t, i){
                this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
                for(let e = 0; e < i.length - 1; e++)this.parts[e] = this._createPart();
            }
            _createPart() {
                return new m(this);
            }
            _getValue() {
                let e = this.strings, t = e.length - 1, i = this.parts;
                if (1 === t && "" === e[0] && "" === e[1]) {
                    let e = i[0].value;
                    if ("symbol" == typeof e) return String(e);
                    if ("string" == typeof e || !f(e)) return e;
                }
                let o = "";
                for(let r = 0; r < t; r++){
                    o += e[r];
                    let t = i[r];
                    if (void 0 !== t) {
                        let e = t.value;
                        if (d(e) || !f(e)) o += "string" == typeof e ? e : String(e);
                        else for (let t of e)o += "string" == typeof t ? t : String(t);
                    }
                }
                return o + e[t];
            }
            commit() {
                this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
            }
        }
        class m {
            constructor(e){
                this.value = void 0, this.committer = e;
            }
            setValue(e) {
                e === n.noChange || d(e) && e === this.value || (this.value = e, (0, o.isDirective)(e) || (this.committer.dirty = !0));
            }
            commit() {
                for(; (0, o.isDirective)(this.value);){
                    let e = this.value;
                    this.value = n.noChange, e(this);
                }
                this.value !== n.noChange && this.committer.commit();
            }
        }
        class h {
            constructor(e){
                this.value = void 0, this.__pendingValue = void 0, this.options = e;
            }
            appendInto(e) {
                this.startNode = e.appendChild((0, c.createMarker)()), this.endNode = e.appendChild((0, c.createMarker)());
            }
            insertAfterNode(e) {
                this.startNode = e, this.endNode = e.nextSibling;
            }
            appendIntoPart(e) {
                e.__insert(this.startNode = (0, c.createMarker)()), e.__insert(this.endNode = (0, c.createMarker)());
            }
            insertAfterPart(e) {
                e.__insert(this.startNode = (0, c.createMarker)()), this.endNode = e.endNode, e.endNode = this.startNode;
            }
            setValue(e) {
                this.__pendingValue = e;
            }
            commit() {
                if (null === this.startNode.parentNode) return;
                for(; (0, o.isDirective)(this.__pendingValue);){
                    let e = this.__pendingValue;
                    this.__pendingValue = n.noChange, e(this);
                }
                let e = this.__pendingValue;
                e !== n.noChange && (d(e) ? e !== this.value && this.__commitText(e) : e instanceof l.TemplateResult ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : f(e) ? this.__commitIterable(e) : e === n.nothing ? (this.value = n.nothing, this.clear()) : this.__commitText(e));
            }
            __insert(e) {
                this.endNode.parentNode.insertBefore(e, this.endNode);
            }
            __commitNode(e) {
                this.value !== e && (this.clear(), this.__insert(e), this.value = e);
            }
            __commitText(e) {
                let t = this.startNode.nextSibling, i = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
                t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e;
            }
            __commitTemplateResult(e) {
                let t = this.options.templateFactory(e);
                if (this.value instanceof s.TemplateInstance && this.value.template === t) this.value.update(e.values);
                else {
                    let i = new s.TemplateInstance(t, e.processor, this.options), o = i._clone();
                    i.update(e.values), this.__commitNode(o), this.value = i;
                }
            }
            __commitIterable(e) {
                let t;
                Array.isArray(this.value) || (this.value = [], this.clear());
                let i = this.value, o = 0;
                for (let r of e)void 0 === (t = i[o]) && (t = new h(this.options), i.push(t), 0 === o ? t.appendIntoPart(this) : t.insertAfterPart(i[o - 1])), t.setValue(r), t.commit(), o++;
                o < i.length && (i.length = o, this.clear(t && t.endNode));
            }
            clear(e = this.startNode) {
                (0, a.removeNodes)(this.startNode.parentNode, e.nextSibling, this.endNode);
            }
        }
        class u {
            constructor(e, t, i){
                if (this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw Error("Boolean attributes can only contain a single expression");
                this.element = e, this.name = t, this.strings = i;
            }
            setValue(e) {
                this.__pendingValue = e;
            }
            commit() {
                for(; (0, o.isDirective)(this.__pendingValue);){
                    let e = this.__pendingValue;
                    this.__pendingValue = n.noChange, e(this);
                }
                if (this.__pendingValue === n.noChange) return;
                let e = !!this.__pendingValue;
                this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = n.noChange;
            }
        }
        class g extends p {
            constructor(e, t, i){
                super(e, t, i), this.single = 2 === i.length && "" === i[0] && "" === i[1];
            }
            _createPart() {
                return new b(this);
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue();
            }
            commit() {
                this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
            }
        }
        class b extends m {
        }
        let x = !1;
        (()=>{
            try {
                let e = {
                    get capture () {
                        return x = !0, !1;
                    }
                };
                window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
            } catch (e) {}
        })();
        class _ {
            constructor(e, t, i){
                this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (e)=>this.handleEvent(e);
            }
            setValue(e) {
                this.__pendingValue = e;
            }
            commit() {
                for(; (0, o.isDirective)(this.__pendingValue);){
                    let e = this.__pendingValue;
                    this.__pendingValue = n.noChange, e(this);
                }
                if (this.__pendingValue === n.noChange) return;
                let e = this.__pendingValue, t = this.value, i = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), r = null != e && (null == t || i);
                i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = w(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = n.noChange;
            }
            handleEvent(e) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
            }
        }
        let w = (e)=>e && (x ? {
                capture: e.capture,
                passive: e.passive,
                once: e.once
            } : e.capture);
    }), a("gRGRg", function(t, i) {
        e(t.exports, "isDirective", ()=>r); /**
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
        let o = new WeakMap, r = (e)=>"function" == typeof e && o.has(e);
    }), a("1P4pI", function(t, i) {
        e(t.exports, "noChange", ()=>o), e(t.exports, "nothing", ()=>r); /**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
        let o = {}, r = {};
    }), a("2FsDN", function(t, i) {
        e(t.exports, "TemplateInstance", ()=>n); /**
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
        var o = r("4ZP3J"), a = r("96TOB");
        class n {
            constructor(e, t, i){
                this.__parts = [], this.template = e, this.processor = t, this.options = i;
            }
            update(e) {
                let t = 0;
                for (let i of this.__parts)void 0 !== i && i.setValue(e[t]), t++;
                for (let e of this.__parts)void 0 !== e && e.commit();
            }
            _clone() {
                let e;
                let t = o.isCEPolyfill ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(t, 133, null, !1), s = 0, l = 0, c = n.nextNode();
                for(; s < r.length;){
                    if (e = r[s], !(0, a.isTemplatePartActive)(e)) {
                        this.__parts.push(void 0), s++;
                        continue;
                    }
                    for(; l < e.index;)l++, "TEMPLATE" === c.nodeName && (i.push(c), n.currentNode = c.content), null === (c = n.nextNode()) && (n.currentNode = i.pop(), c = n.nextNode());
                    if ("node" === e.type) {
                        let e = this.processor.handleTextExpression(this.options);
                        e.insertAfterNode(c.previousSibling), this.__parts.push(e);
                    } else this.__parts.push(...this.processor.handleAttributeExpressions(c, e.name, e.strings, this.options));
                    s++;
                }
                return o.isCEPolyfill && (document.adoptNode(t), customElements.upgrade(t)), t;
            }
        }
    }), a("aL6n3", function(t, i) {
        e(t.exports, "TemplateResult", ()=>l), e(t.exports, "SVGTemplateResult", ()=>c); /**
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
        var o = r("4ZP3J"), a = r("96TOB");
        let n = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: (e)=>e
        }), s = ` ${a.marker} `;
        class l {
            constructor(e, t, i, o){
                this.strings = e, this.values = t, this.type = i, this.processor = o;
            }
            getHTML() {
                let e = this.strings.length - 1, t = "", i = !1;
                for(let o = 0; o < e; o++){
                    let e = this.strings[o], r = e.lastIndexOf("<!--");
                    i = (r > -1 || i) && -1 === e.indexOf("-->", r + 1);
                    let n = (0, a.lastAttributeNameRegex).exec(e);
                    null === n ? t += e + (i ? s : a.nodeMarker) : t += e.substr(0, n.index) + n[1] + n[2] + a.boundAttributeSuffix + n[3] + a.marker;
                }
                return t + this.strings[e];
            }
            getTemplateElement() {
                let e = document.createElement("template"), t = this.getHTML();
                return void 0 !== n && (t = n.createHTML(t)), e.innerHTML = t, e;
            }
        }
        class c extends l {
            getHTML() {
                return `<svg>${super.getHTML()}</svg>`;
            }
            getTemplateElement() {
                let e = super.getTemplateElement(), t = e.content, i = t.firstChild;
                return t.removeChild(i), (0, o.reparentNodes)(t, i.firstChild), e;
            }
        }
    }), a("4j44n", function(t, i) {
        e(t.exports, "templateFactory", ()=>a), e(t.exports, "templateCaches", ()=>n); /**
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
        var o = r("96TOB");
        function a(e) {
            let t = n.get(e.type);
            void 0 === t && (t = {
                stringsArray: new WeakMap,
                keyString: new Map
            }, n.set(e.type, t));
            let i = t.stringsArray.get(e.strings);
            if (void 0 !== i) return i;
            let r = e.strings.join(o.marker);
            return void 0 === (i = t.keyString.get(r)) && (i = new o.Template(e, e.getTemplateElement()), t.keyString.set(r, i)), t.stringsArray.set(e.strings, i), i;
        }
        let n = new Map;
    }), a("gDATu", function(t, i) {
        e(t.exports, "html", ()=>n); /**
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
        var o = r("ijFgS"), a = r("aL6n3");
        r("gRGRg"), r("4ZP3J"), r("1P4pI"), r("9Of8t"), r("9hBdL"), r("4j44n"), r("2FsDN"), r("96TOB"), "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
        let n = (e, ...t)=>new a.TemplateResult(e, t, "html", o.defaultTemplateProcessor);
    }), a("ijFgS", function(t, i) {
        e(t.exports, "defaultTemplateProcessor", ()=>a); /**
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
        var o = r("9Of8t");
        let a = new class {
            handleAttributeExpressions(e, t, i, r) {
                let a = t[0];
                return "." === a ? new o.PropertyCommitter(e, t.slice(1), i).parts : "@" === a ? [
                    new o.EventPart(e, t.slice(1), r.eventContext)
                ] : "?" === a ? [
                    new o.BooleanAttributePart(e, t.slice(1), i)
                ] : new o.AttributeCommitter(e, t, i).parts;
            }
            handleTextExpression(e) {
                return new o.NodePart(e);
            }
        };
    }), a("69p5A", function(t, i) {
        e(t.exports, "UpdatingElement", ()=>s), window.JSCompiler_renameProperty = (e, t)=>e;
        let o = {
            toAttribute (e, t) {
                switch(t){
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e);
                }
                return e;
            },
            fromAttribute (e, t) {
                switch(t){
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e);
                }
                return e;
            }
        }, r = (e, t)=>t !== e && (t == t || e == e), a = {
            attribute: !0,
            type: String,
            converter: o,
            reflect: !1,
            hasChanged: r
        }, n = "finalized";
        class s extends HTMLElement {
            constructor(){
                super(), this.initialize();
            }
            static get observedAttributes() {
                this.finalize();
                let e = [];
                return this._classProperties.forEach((t, i)=>{
                    let o = this._attributeNameForProperty(i, t);
                    void 0 !== o && (this._attributeToPropertyMap.set(o, i), e.push(o));
                }), e;
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    let e = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== e && e.forEach((e, t)=>this._classProperties.set(t, e));
                }
            }
            static createProperty(e, t = a) {
                if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
                let i = "symbol" == typeof e ? Symbol() : `__${e}`, o = this.getPropertyDescriptor(e, i, t);
                void 0 !== o && Object.defineProperty(this.prototype, e, o);
            }
            static getPropertyDescriptor(e, t, i) {
                return {
                    get () {
                        return this[t];
                    },
                    set (o) {
                        let r = this[e];
                        this[t] = o, this.requestUpdateInternal(e, r, i);
                    },
                    configurable: !0,
                    enumerable: !0
                };
            }
            static getPropertyOptions(e) {
                return this._classProperties && this._classProperties.get(e) || a;
            }
            static finalize() {
                let e = Object.getPrototypeOf(this);
                if (e.hasOwnProperty(n) || e.finalize(), this[n] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                    let e = this.properties;
                    for (let t of [
                        ...Object.getOwnPropertyNames(e),
                        ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []
                    ])this.createProperty(t, e[t]);
                }
            }
            static _attributeNameForProperty(e, t) {
                let i = t.attribute;
                return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
            }
            static _valueHasChanged(e, t, i = r) {
                return i(e, t);
            }
            static _propertyValueFromAttribute(e, t) {
                let i = t.type, r = t.converter || o, a = "function" == typeof r ? r : r.fromAttribute;
                return a ? a(e, i) : e;
            }
            static _propertyValueToAttribute(e, t) {
                if (void 0 === t.reflect) return;
                let i = t.type, r = t.converter;
                return (r && r.toAttribute || o.toAttribute)(e, i);
            }
            initialize() {
                this._updateState = 0, this._updatePromise = new Promise((e)=>this._enableUpdatingResolver = e), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal();
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach((e, t)=>{
                    if (this.hasOwnProperty(t)) {
                        let e = this[t];
                        delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e);
                    }
                });
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach((e, t)=>this[t] = e), this._instanceProperties = void 0;
            }
            connectedCallback() {
                this.enableUpdating();
            }
            enableUpdating() {
                void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
            }
            disconnectedCallback() {}
            attributeChangedCallback(e, t, i) {
                t !== i && this._attributeToProperty(e, i);
            }
            _propertyToAttribute(e, t, i = a) {
                let o = this.constructor, r = o._attributeNameForProperty(e, i);
                if (void 0 !== r) {
                    let e = o._propertyValueToAttribute(t, i);
                    if (void 0 === e) return;
                    this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(r) : this.setAttribute(r, e), this._updateState = -9 & this._updateState;
                }
            }
            _attributeToProperty(e, t) {
                if (8 & this._updateState) return;
                let i = this.constructor, o = i._attributeToPropertyMap.get(e);
                if (void 0 !== o) {
                    let e = i.getPropertyOptions(o);
                    this._updateState = 16 | this._updateState, this[o] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState;
                }
            }
            requestUpdateInternal(e, t, i) {
                let o = !0;
                if (void 0 !== e) {
                    let r = this.constructor;
                    i = i || r.getPropertyOptions(e), r._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : o = !1;
                }
                !this._hasRequestedUpdate && o && (this._updatePromise = this._enqueueUpdate());
            }
            requestUpdate(e, t) {
                return this.requestUpdateInternal(e, t), this.updateComplete;
            }
            async _enqueueUpdate() {
                this._updateState = 4 | this._updateState;
                try {
                    await this._updatePromise;
                } catch (e) {}
                let e = this.performUpdate();
                return null != e && await e, !this._hasRequestedUpdate;
            }
            get _hasRequestedUpdate() {
                return 4 & this._updateState;
            }
            get hasUpdated() {
                return 1 & this._updateState;
            }
            performUpdate() {
                if (!this._hasRequestedUpdate) return;
                this._instanceProperties && this._applyInstanceProperties();
                let e = !1, t = this._changedProperties;
                try {
                    (e = this.shouldUpdate(t)) ? this.update(t) : this._markUpdated();
                } catch (t) {
                    throw e = !1, this._markUpdated(), t;
                }
                e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t));
            }
            _markUpdated() {
                this._changedProperties = new Map, this._updateState = -5 & this._updateState;
            }
            get updateComplete() {
                return this._getUpdateComplete();
            }
            _getUpdateComplete() {
                return this.getUpdateComplete();
            }
            getUpdateComplete() {
                return this._updatePromise;
            }
            shouldUpdate(e) {
                return !0;
            }
            update(e) {
                void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e, t)=>this._propertyToAttribute(t, this[t], e)), this._reflectingProperties = void 0), this._markUpdated();
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        s[n] = !0;
    }), a("k3gML", function(e, t) {
        let i = Element.prototype;
        i.msMatchesSelector || i.webkitMatchesSelector;
    }), a("aR0Op", function(t, i) {
        e(t.exports, "supportsAdoptingStyleSheets", ()=>o), e(t.exports, "unsafeCSS", ()=>n), e(t.exports, "css", ()=>l); /**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ 
        let o = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, r = Symbol();
        class a {
            constructor(e, t){
                if (t !== r) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e;
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (o ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
            }
            toString() {
                return this.cssText;
            }
        }
        let n = (e)=>new a(String(e), r), s = (e)=>{
            if (e instanceof a) return e.cssText;
            if ("number" == typeof e) return e;
            throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
        }, l = (e, ...t)=>new a(t.reduce((t, i, o)=>t + s(i) + e[o + 1], e[0]), r);
    }), a("hKngg", function(t, i) {
        e(t.exports, "eventDataLayerPush", ()=>o);
        let o = (e, t = "")=>{
            window.dataLayer = window.dataLayer || [];
            var i = e.composedPath()[0], o = e.composedPath()[3].innerText ? e.composedPath()[3].innerText.split("\n")[0] : "";
            window.dataLayer.push({
                event: "shadow_event_" + e.type,
                shadow_event: {
                    elementInnerHTML: i.textContent || "",
                    elementInnerText: i.innerText || "",
                    title: "shadow-dom-link",
                    element: i,
                    elementClasses: i.className || "",
                    elementId: i.id || "",
                    elementLocation: t || "",
                    elementTarget: i.target || "",
                    elementUrl: i.href || i.action || "",
                    originalEvent: e,
                    parent: o || "",
                    inShadowDom: !0
                }
            });
        };
    }), r("ce3eZ");
    var n = r("aR0Op"), s = r("gDATu"), l = r("ce3eZ"), c = r("hKngg");
    class d extends l.LitElement {
        static get styles() {
            return (0, n.css)`
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
		`;
        }
        render() {
            return (0, s.html)`
			<footer id="footer_site" class="page page-row" role="contentinfo">
				<div class="region region-footer">
					<div class="container d-flex footer-top-wrap justify-content-between align-items-center">
						<div class="row">
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center-xs text-left-not-xs">
								<div class="row px-0">
									<div class="col-xs-12">
										<a href="https://www.arizona.edu/" title="Home" class="remove-external-link-icon active" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="Home"></a>              </div>
									</div>
								</div>
								<!-- Add the extra clearfix for only the required viewport -->
								<div class="clearfix visible-xs-block"></div>
								<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 py-0">
									<div id="block-bean-uaqs-footer-links-bean-main" class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs" role="complementary">
										<ul class="menu top-menu">
											<li class="menu__item is-leaf first leaf"><a href="https://talent.arizona.edu" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Employment</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://cirt.arizona.edu" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Emergency Information</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/title-ix" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Title IX / Non-Discrimination</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://safety.arizona.edu/" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Campus Safety</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://clery.arizona.edu/annual-reports" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Annual Security Report</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/copyright" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Copyright</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-accessibility" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Campus Accessibility</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/contact-us" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Contact Us</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/website-feedback" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Feedback</a></li>
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
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/admissions" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Future Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/students" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Current Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/faculty-staff" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Faculty &amp; Staff</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/alumni-donors" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Alumni &amp; Donors</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/parents-visitors" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Parents &amp; Visitors</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://corporate.arizona.edu/" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Corporations &amp; Businesses</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-topics" class="block block-bean even col-xs-12 col-sm-6 col-md-5" role="complementary">
										<h5><strong class="text-uppercase">Topics</strong></h5>
										<ul class="menu menu-bottom topic-menu">
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/about" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">About the University</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/academics" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Academics</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/arts-museums" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Arts &amp; Museums</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/athletics-recreation" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Athletics &amp; Recreation</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/colleges-schools" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Colleges, Schools, Departments</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://diversity.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Diversity</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.environment.arizona.edu" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Environment &amp; Sustainability</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://international.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">International Engagement</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/health-sciences" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Health &amp; Medical</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/libraries" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Libraries</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://uaforyou.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Outreach &amp; Extension</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://research.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Research &amp; Innovation</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/purpose-mission-values" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">Purpose, Mission &amp; Values</a></li>
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
										<ul class="menu menu-bottom"><li class="menu__item is-leaf first leaf"><a href="https://directory.arizona.edu/" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-directory"></i>Directory</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/calendars-events" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-calendar"></i>Calendars</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://map.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-campus-map"></i>Campus Map</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://news.arizona.edu" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-news"></i>News</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://phonebook.arizona.edu/" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-directory"></i>Phonebook</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/weather" title="" class="menu__link" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="ua-brand-weather"></i>Weather</a></li>
										</ul>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-connect" class="block block-bean even col-xs-12 col-sm-6 col-md-2 clearfix" role="complementary">
										<h5><strong class="text-uppercase">Connect</strong></h5>
										<ul class="menu menu-bottom">
											<li class="menu__item is-leaf first leaf"><a class="menu__link" href="https://facebook.com/uarizona" target="_blank" title="Click here to visit our Facebook page" rel="noopener noreferrer" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="az-icon-facebook"></i>Facebook</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://twitter.com/uarizona" target="_blank" title="Click here to visit our Twitter page" rel="noopener noreferrer" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="az-icon-twitter"></i>Twitter</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://instagram.com/uarizona" target="_blank" title="Click here to visit our Instagram page" rel="noopener noreferrer" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="az-icon-instagram"></i>Instagram</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://linkedin.com/edu/university-of-arizona-17783" target="_blank" title="Click here to visit our LinkedIn page" rel="noopener noreferrer" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="az-icon-linkedin"></i>LinkedIn</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://youtube.com/universityofarizona" target="_blank" title="Click here to visit our YouTube page" rel="noopener noreferrer" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}"><i class="az-icon-youtube"></i>YouTube</a></li>
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
								<p class="small"><a href="https://www.arizona.edu/information-security-privacy" target="_blank" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">University Information Security and Privacy</a></p>
								<p class="copyright small">© <span>${new Date().getFullYear()}</span> The Arizona Board of Regents on behalf of <a href="https://www.arizona.edu" target="_blank" @click="${(e)=>{
                (0, c.eventDataLayerPush)(e, "az-footer");
            }}">The University of Arizona</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`;
        }
    }
    customElements.get("az-footer") || customElements.define("az-footer", d);
})();

//# sourceMappingURL=index.a75fc09c.js.map
