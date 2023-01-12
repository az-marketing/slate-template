// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cw9uS":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ae46bdacbc9e1f3f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jmYii":[function(require,module,exports) {
!function() {
    function t(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function n(t, n) {
        for(var e = 0; e < n.length; e++){
            var i = n[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function e(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }
    function i(t, n) {
        return i = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t;
        }, i(t, n);
    }
    function o(t, n) {
        return i(t, n);
    }
    function r(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), n && o(t, n);
    }
    function a(t, n) {
        return n || (n = t.slice(0)), Object.freeze(Object.defineProperties(t, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, s(t);
    }
    function f(t) {
        return s(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function d(t) {
        return t && t.constructor === Symbol ? "symbol" : typeof t;
    }
    function m(t, n) {
        return !n || "object" !== d(n) && "function" != typeof n ? c(t) : n;
    }
    function u(t) {
        var n = l();
        return function() {
            var e, i = f(t);
            if (n) {
                var o = f(this).constructor;
                e = Reflect.construct(i, arguments, o);
            } else e = i.apply(this, arguments);
            return m(this, e);
        };
    }
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
 */ function p(t, n) {
        for(; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = f(t)););
        return t;
    }
    function h(t, n, e) {
        return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, n, e) {
            var i = p(t, n);
            if (i) {
                var o = Object.getOwnPropertyDescriptor(i, n);
                return o.get ? o.get.call(e || t) : o.value;
            }
        }, h(t, n, e);
    }
    function g(t, n, e) {
        return h(t, n, e);
    }
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
 */ /**
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
 */ var b = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback, x = function(t, n) {
        for(var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; n !== e;){
            var i = n.nextSibling;
            t.removeChild(n), n = i;
        }
    }, v = "{{lit-".concat(String(Math.random()).slice(2), "}}"), w = "<!--".concat(v, "-->"), y = new RegExp("".concat(v, "|").concat(w)), _ = "$lit$", k = function n(e, i) {
        "use strict";
        t(this, n), this.parts = [], this.element = i;
        for(var o = [], r = [], a = document.createTreeWalker(i.content, 133, null, !1), l = 0, s = -1, f = 0, c = e.strings, d = e.values.length; f < d;){
            var m = a.nextNode();
            if (null !== m) {
                if (s++, 1 === m.nodeType) {
                    if (m.hasAttributes()) {
                        for(var u = m.attributes, p = u.length, h = 0, g = 0; g < p; g++)S(u[g].name, _) && h++;
                        for(; h-- > 0;){
                            var b = c[f], x = C.exec(b)[2], w = x.toLowerCase() + _, k = m.getAttribute(w);
                            m.removeAttribute(w);
                            var z = k.split(y);
                            this.parts.push({
                                type: "attribute",
                                index: s,
                                name: x,
                                strings: z
                            }), f += z.length - 1;
                        }
                    }
                    "TEMPLATE" === m.tagName && (r.push(m), a.currentNode = m.content);
                } else if (3 === m.nodeType) {
                    var T = m.data;
                    if (T.indexOf(v) >= 0) {
                        for(var A = m.parentNode, N = T.split(y), E = N.length - 1, O = 0; O < E; O++){
                            var U = void 0, R = N[O];
                            if ("" === R) U = P();
                            else {
                                var V = C.exec(R);
                                null !== V && S(V[2], _) && (R = R.slice(0, V.index) + V[1] + V[2].slice(0, -_.length) + V[3]), U = document.createTextNode(R);
                            }
                            A.insertBefore(U, m), this.parts.push({
                                type: "node",
                                index: ++s
                            });
                        }
                        "" === N[E] ? (A.insertBefore(P(), m), o.push(m)) : m.data = N[E], f += E;
                    }
                } else if (8 === m.nodeType) {
                    if (m.data === v) {
                        var q = m.parentNode;
                        null !== m.previousSibling && s !== l || (s++, q.insertBefore(P(), m)), l = s, this.parts.push({
                            type: "node",
                            index: s
                        }), null === m.nextSibling ? m.data = "" : (o.push(m), s--), f++;
                    } else for(var M = -1; -1 !== (M = m.data.indexOf(v, M + 1));)this.parts.push({
                        type: "node",
                        index: -1
                    }), f++;
                }
            } else a.currentNode = r.pop();
        }
        var I = !0, j = !1, L = void 0;
        try {
            for(var B, F = o[Symbol.iterator](); !(I = (B = F.next()).done); I = !0){
                var H = B.value;
                H.parentNode.removeChild(H);
            }
        } catch (t1) {
            j = !0, L = t1;
        } finally{
            try {
                I || null == F.return || F.return();
            } finally{
                if (j) throw L;
            }
        }
    }, S = function(t, n) {
        var e = t.length - n.length;
        return e >= 0 && t.slice(e) === n;
    }, z = function(t) {
        return -1 !== t.index;
    }, P = function() {
        return document.createComment("");
    }, C = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/, T = 133;
    function A(t, n) {
        for(var e = t.element.content, i = t.parts, o = document.createTreeWalker(e, T, null, !1), r = E(i), a = i[r], l = -1, s = 0, f = [], c = null; o.nextNode();){
            l++;
            var d = o.currentNode;
            for(d.previousSibling === c && (c = null), n.has(d) && (f.push(d), null === c && (c = d)), null !== c && s++; void 0 !== a && a.index === l;)a.index = null !== c ? -1 : a.index - s, a = i[r = E(i, r)];
        }
        f.forEach(function(t) {
            return t.parentNode.removeChild(t);
        });
    }
    var N = function(t) {
        for(var n = 11 === t.nodeType ? 0 : 1, e = document.createTreeWalker(t, T, null, !1); e.nextNode();)n++;
        return n;
    }, E = function(t) {
        for(var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, e = n + 1; e < t.length; e++){
            var i = t[e];
            if (z(i)) return e;
        }
        return -1;
    };
    function O(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = t.element.content, o = t.parts;
        if (null != e) for(var r = document.createTreeWalker(i, T, null, !1), a = E(o), l = 0, s = -1; r.nextNode();){
            s++;
            var f = r.currentNode;
            for(f === e && (l = N(n), e.parentNode.insertBefore(n, e)); -1 !== a && o[a].index === s;){
                if (l > 0) {
                    for(; -1 !== a;)o[a].index += l, a = E(o, a);
                    return;
                }
                a = E(o, a);
            }
        }
        else i.appendChild(n);
    }
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
 */ /**
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
 */ /**
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
 */ function U(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for(var e = 0, i = new Array(n); e < n; e++)i[e] = t[e];
        return i;
    }
    function R(t) {
        if (Array.isArray(t)) return U(t);
    }
    function V(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }
    function q() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function M(t, n) {
        if (t) {
            if ("string" == typeof t) return U(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? U(t, n) : void 0;
        }
    }
    function I(t) {
        return R(t) || V(t) || M(t) || q();
    }
    var j = new WeakMap, L = function(t) {
        return "function" == typeof t && j.has(t);
    }, B = {}, F = {}, H = function() {
        "use strict";
        function n(e, i, o) {
            t(this, n), this.__parts = [], this.template = e, this.processor = i, this.options = o;
        }
        return e(n, [
            {
                key: "update",
                value: function(t) {
                    var n = 0, e = !0, i = !1, o = void 0;
                    try {
                        for(var r, a = this.__parts[Symbol.iterator](); !(e = (r = a.next()).done); e = !0){
                            var l = r.value;
                            void 0 !== l && l.setValue(t[n]), n++;
                        }
                    } catch (t1) {
                        i = !0, o = t1;
                    } finally{
                        try {
                            e || null == a.return || a.return();
                        } finally{
                            if (i) throw o;
                        }
                    }
                    var s = !0, f = !1, c = void 0;
                    try {
                        for(var d, m = this.__parts[Symbol.iterator](); !(s = (d = m.next()).done); s = !0){
                            var u = d.value;
                            void 0 !== u && u.commit();
                        }
                    } catch (t2) {
                        f = !0, c = t2;
                    } finally{
                        try {
                            s || null == m.return || m.return();
                        } finally{
                            if (f) throw c;
                        }
                    }
                }
            },
            {
                key: "_clone",
                value: function() {
                    for(var t, n = b ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), e = [], i = this.template.parts, o = document.createTreeWalker(n, 133, null, !1), r = 0, a = 0, l = o.nextNode(); r < i.length;){
                        var s;
                        if (t = i[r], z(t)) {
                            for(; a < t.index;)a++, "TEMPLATE" === l.nodeName && (e.push(l), o.currentNode = l.content), null === (l = o.nextNode()) && (o.currentNode = e.pop(), l = o.nextNode());
                            if ("node" === t.type) {
                                var f = this.processor.handleTextExpression(this.options);
                                f.insertAfterNode(l.previousSibling), this.__parts.push(f);
                            } else (s = this.__parts).push.apply(s, I(this.processor.handleAttributeExpressions(l, t.name, t.strings, this.options)));
                            r++;
                        } else this.__parts.push(void 0), r++;
                    }
                    return b && (document.adoptNode(n), customElements.upgrade(n)), n;
                }
            }
        ]), n;
    }(), D = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
        createHTML: function(t) {
            return t;
        }
    }), W = " ".concat(v, " "), J = function() {
        "use strict";
        function n(e, i, o, r) {
            t(this, n), this.strings = e, this.values = i, this.type = o, this.processor = r;
        }
        return e(n, [
            {
                key: "getHTML",
                value: function() {
                    for(var t = this.strings.length - 1, n = "", e = !1, i = 0; i < t; i++){
                        var o = this.strings[i], r = o.lastIndexOf("<!--");
                        e = (r > -1 || e) && -1 === o.indexOf("-->", r + 1);
                        var a = C.exec(o);
                        n += null === a ? o + (e ? W : w) : o.substr(0, a.index) + a[1] + a[2] + _ + a[3] + v;
                    }
                    return n += this.strings[t];
                }
            },
            {
                key: "getTemplateElement",
                value: function() {
                    var t = document.createElement("template"), n = this.getHTML();
                    return void 0 !== D && (n = D.createHTML(n)), t.innerHTML = n, t;
                }
            }
        ]), n;
    }(), $ = function(t) {
        return null === t || !("object" == typeof t || "function" == typeof t);
    }, G = function(t) {
        return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
    }, Y = function() {
        "use strict";
        function n(e, i, o) {
            t(this, n), this.dirty = !0, this.element = e, this.name = i, this.strings = o, this.parts = [];
            for(var r = 0; r < o.length - 1; r++)this.parts[r] = this._createPart();
        }
        return e(n, [
            {
                key: "_createPart",
                value: function() {
                    return new X(this);
                }
            },
            {
                key: "_getValue",
                value: function() {
                    var t = this.strings, n = t.length - 1, e = this.parts;
                    if (1 === n && "" === t[0] && "" === t[1]) {
                        var i = e[0].value;
                        if ("symbol" === (void 0 === i ? "undefined" : d(i))) return String(i);
                        if ("string" == typeof i || !G(i)) return i;
                    }
                    for(var o = "", r = 0; r < n; r++){
                        o += t[r];
                        var a = e[r];
                        if (void 0 !== a) {
                            var l = a.value, s = !0, f = !1, c = void 0;
                            if ($(l) || !G(l)) o += "string" == typeof l ? l : String(l);
                            else try {
                                for(var m, u = l[Symbol.iterator](); !(s = (m = u.next()).done); s = !0){
                                    var p = m.value;
                                    o += "string" == typeof p ? p : String(p);
                                }
                            } catch (t1) {
                                f = !0, c = t1;
                            } finally{
                                try {
                                    s || null == u.return || u.return();
                                } finally{
                                    if (f) throw c;
                                }
                            }
                        }
                    }
                    return o += t[n];
                }
            },
            {
                key: "commit",
                value: function() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
                }
            }
        ]), n;
    }(), X = function() {
        "use strict";
        function n(e) {
            t(this, n), this.value = void 0, this.committer = e;
        }
        return e(n, [
            {
                key: "setValue",
                value: function(t) {
                    t === B || $(t) && t === this.value || (this.value = t, L(t) || (this.committer.dirty = !0));
                }
            },
            {
                key: "commit",
                value: function() {
                    for(; L(this.value);){
                        var t = this.value;
                        this.value = B, t(this);
                    }
                    this.value !== B && this.committer.commit();
                }
            }
        ]), n;
    }(), Z = function() {
        "use strict";
        function n(e) {
            t(this, n), this.value = void 0, this.__pendingValue = void 0, this.options = e;
        }
        return e(n, [
            {
                key: "appendInto",
                value: function(t) {
                    this.startNode = t.appendChild(P()), this.endNode = t.appendChild(P());
                }
            },
            {
                key: "insertAfterNode",
                value: function(t) {
                    this.startNode = t, this.endNode = t.nextSibling;
                }
            },
            {
                key: "appendIntoPart",
                value: function(t) {
                    t.__insert(this.startNode = P()), t.__insert(this.endNode = P());
                }
            },
            {
                key: "insertAfterPart",
                value: function(t) {
                    t.__insert(this.startNode = P()), this.endNode = t.endNode, t.endNode = this.startNode;
                }
            },
            {
                key: "setValue",
                value: function(t) {
                    this.__pendingValue = t;
                }
            },
            {
                key: "commit",
                value: function() {
                    if (null !== this.startNode.parentNode) {
                        for(; L(this.__pendingValue);){
                            var t = this.__pendingValue;
                            this.__pendingValue = B, t(this);
                        }
                        var n = this.__pendingValue;
                        n !== B && ($(n) ? n !== this.value && this.__commitText(n) : n instanceof J ? this.__commitTemplateResult(n) : n instanceof Node ? this.__commitNode(n) : G(n) ? this.__commitIterable(n) : n === F ? (this.value = F, this.clear()) : this.__commitText(n));
                    }
                }
            },
            {
                key: "__insert",
                value: function(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode);
                }
            },
            {
                key: "__commitNode",
                value: function(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t);
                }
            },
            {
                key: "__commitText",
                value: function(t) {
                    var n = this.startNode.nextSibling, e = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                    n === this.endNode.previousSibling && 3 === n.nodeType ? n.data = e : this.__commitNode(document.createTextNode(e)), this.value = t;
                }
            },
            {
                key: "__commitTemplateResult",
                value: function(t) {
                    var n = this.options.templateFactory(t);
                    if (this.value instanceof H && this.value.template === n) this.value.update(t.values);
                    else {
                        var e = new H(n, t.processor, this.options), i = e._clone();
                        e.update(t.values), this.__commitNode(i), this.value = e;
                    }
                }
            },
            {
                key: "__commitIterable",
                value: function(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    var e, i = this.value, o = 0, r = !0, a = !1, l = void 0;
                    try {
                        for(var s, f = t[Symbol.iterator](); !(r = (s = f.next()).done); r = !0){
                            var c = s.value;
                            void 0 === (e = i[o]) && (e = new n(this.options), i.push(e), 0 === o ? e.appendIntoPart(this) : e.insertAfterPart(i[o - 1])), e.setValue(c), e.commit(), o++;
                        }
                    } catch (t1) {
                        a = !0, l = t1;
                    } finally{
                        try {
                            r || null == f.return || f.return();
                        } finally{
                            if (a) throw l;
                        }
                    }
                    o < i.length && (i.length = o, this.clear(e && e.endNode));
                }
            },
            {
                key: "clear",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
                    x(this.startNode.parentNode, t.nextSibling, this.endNode);
                }
            }
        ]), n;
    }(), K = function() {
        "use strict";
        function n(e, i, o) {
            if (t(this, n), this.value = void 0, this.__pendingValue = void 0, 2 !== o.length || "" !== o[0] || "" !== o[1]) throw new Error("Boolean attributes can only contain a single expression");
            this.element = e, this.name = i, this.strings = o;
        }
        return e(n, [
            {
                key: "setValue",
                value: function(t) {
                    this.__pendingValue = t;
                }
            },
            {
                key: "commit",
                value: function() {
                    for(; L(this.__pendingValue);){
                        var t = this.__pendingValue;
                        this.__pendingValue = B, t(this);
                    }
                    if (this.__pendingValue !== B) {
                        var n = !!this.__pendingValue;
                        this.value !== n && (n ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = n), this.__pendingValue = B;
                    }
                }
            }
        ]), n;
    }(), Q = function(n) {
        "use strict";
        r(o, n);
        var i = u(o);
        function o(n, e, r) {
            var a;
            return t(this, o), (a = i.call(this, n, e, r)).single = 2 === r.length && "" === r[0] && "" === r[1], a;
        }
        return e(o, [
            {
                key: "_createPart",
                value: function() {
                    return new tt(this);
                }
            },
            {
                key: "_getValue",
                value: function() {
                    return this.single ? this.parts[0].value : g(f(o.prototype), "_getValue", this).call(this);
                }
            },
            {
                key: "commit",
                value: function() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
                }
            }
        ]), o;
    }(Y), tt = function(n) {
        "use strict";
        r(i, n);
        var e = u(i);
        function i() {
            return t(this, i), e.apply(this, arguments);
        }
        return i;
    }(X), nt = !1;
    !function() {
        try {
            var t = {
                get capture () {
                    return nt = !0, !1;
                }
            };
            window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
        } catch (t1) {}
    }();
    var et = function() {
        "use strict";
        function n(e, i, o) {
            var r = this;
            t(this, n), this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = o, this.__boundHandleEvent = function(t) {
                return r.handleEvent(t);
            };
        }
        return e(n, [
            {
                key: "setValue",
                value: function(t) {
                    this.__pendingValue = t;
                }
            },
            {
                key: "commit",
                value: function() {
                    for(; L(this.__pendingValue);){
                        var t = this.__pendingValue;
                        this.__pendingValue = B, t(this);
                    }
                    if (this.__pendingValue !== B) {
                        var n = this.__pendingValue, e = this.value, i = null == n || null != e && (n.capture !== e.capture || n.once !== e.once || n.passive !== e.passive), o = null != n && (null == e || i);
                        i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o && (this.__options = it(n), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = n, this.__pendingValue = B;
                    }
                }
            },
            {
                key: "handleEvent",
                value: function(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
                }
            }
        ]), n;
    }(), it = function(t) {
        return t && (nt ? {
            capture: t.capture,
            passive: t.passive,
            once: t.once
        } : t.capture);
    };
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
 */ function ot(t) {
        var n = rt.get(t.type);
        void 0 === n && (n = {
            stringsArray: new WeakMap,
            keyString: new Map
        }, rt.set(t.type, n));
        var e = n.stringsArray.get(t.strings);
        if (void 0 !== e) return e;
        var i = t.strings.join(v);
        return void 0 === (e = n.keyString.get(i)) && (e = new k(t, t.getTemplateElement()), n.keyString.set(i, e)), n.stringsArray.set(t.strings, e), e;
    }
    var rt = new Map, at = new WeakMap, lt = function(t, n, e) {
        var i = at.get(n);
        void 0 === i && (x(n, n.firstChild), at.set(n, i = new Z(Object.assign({
            templateFactory: ot
        }, e))), i.appendInto(n)), i.setValue(t), i.commit();
    }, st = new (function() {
        "use strict";
        function n() {
            t(this, n);
        }
        return e(n, [
            {
                key: "handleAttributeExpressions",
                value: function(t, n, e, i) {
                    var o = n[0];
                    return "." === o ? new Q(t, n.slice(1), e).parts : "@" === o ? [
                        new et(t, n.slice(1), i.eventContext)
                    ] : "?" === o ? [
                        new K(t, n.slice(1), e)
                    ] : new Y(t, n, e).parts;
                }
            },
            {
                key: "handleTextExpression",
                value: function(t) {
                    return new Z(t);
                }
            }
        ]), n;
    }());
    "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
    var ft = function(t) {
        for(var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)e[i - 1] = arguments[i];
        return new J(t, e, "html", st);
    }, ct = function(t, n) {
        return "".concat(t, "--").concat(n);
    }, dt = !0;
    void 0 === window.ShadyCSS ? dt = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), dt = !1);
    var mt = function(t) {
        return function(n) {
            var e = ct(n.type, t), i = rt.get(e);
            void 0 === i && (i = {
                stringsArray: new WeakMap,
                keyString: new Map
            }, rt.set(e, i));
            var o = i.stringsArray.get(n.strings);
            if (void 0 !== o) return o;
            var r = n.strings.join(v);
            if (void 0 === (o = i.keyString.get(r))) {
                var a = n.getTemplateElement();
                dt && window.ShadyCSS.prepareTemplateDom(a, t), o = new k(n, a), i.keyString.set(r, o);
            }
            return i.stringsArray.set(n.strings, o), o;
        };
    }, ut = [
        "html",
        "svg"
    ], pt = new Set, ht = function(t, n, e) {
        pt.add(t);
        var i = e ? e.element : document.createElement("template"), o = n.querySelectorAll("style"), r = o.length;
        if (0 !== r) {
            for(var a = document.createElement("style"), l = 0; l < r; l++){
                var s = o[l];
                s.parentNode.removeChild(s), a.textContent += s.textContent;
            }
            !function(t) {
                ut.forEach(function(n) {
                    var e = rt.get(ct(n, t));
                    void 0 !== e && e.keyString.forEach(function(t) {
                        var n = t.element.content, e = new Set;
                        Array.from(n.querySelectorAll("style")).forEach(function(t) {
                            e.add(t);
                        }), A(t, e);
                    });
                });
            }(t);
            var f = i.content;
            e ? O(e, a, f.firstChild) : f.insertBefore(a, f.firstChild), window.ShadyCSS.prepareTemplateStyles(i, t);
            var c = f.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== c) n.insertBefore(c.cloneNode(!0), n.firstChild);
            else if (e) {
                f.insertBefore(a, f.firstChild);
                var d = new Set;
                d.add(a), A(e, d);
            }
        } else window.ShadyCSS.prepareTemplateStyles(i, t);
    };
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
 */ function gt(t, n, e, i, o, r, a) {
        try {
            var l = t[r](a), s = l.value;
        } catch (t1) {
            return void e(t1);
        }
        l.done ? n(s) : Promise.resolve(s).then(i, o);
    }
    function bt(t) {
        return function() {
            var n = this, e = arguments;
            return new Promise(function(i, o) {
                var r = t.apply(n, e);
                function a(t) {
                    gt(r, i, o, a, l, "next", t);
                }
                function l(t) {
                    gt(r, i, o, a, l, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function xt() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function vt(t, n, e) {
        return vt = xt() ? Reflect.construct : function(t, n, e) {
            var i = [
                null
            ];
            i.push.apply(i, n);
            var r = new (Function.bind.apply(t, i));
            return e && o(r, e.prototype), r;
        }, vt.apply(null, arguments);
    }
    function wt(t, n, e) {
        return vt.apply(null, arguments);
    }
    function yt(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return yt = function(t) {
            if (null === t || (e = t, -1 === Function.toString.call(e).indexOf("[native code]"))) return t;
            var e;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, i);
            }
            function i() {
                return wt(t, arguments, f(this).constructor);
            }
            return i.prototype = Object.create(t.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(i, t);
        }, yt(t);
    }
    function _t(t, n) {
        var e, i, o, r, a = function(t) {
            return function(n) {
                return l([
                    t,
                    n
                ]);
            };
        }, l = function(a) {
            if (e) throw new TypeError("Generator is already executing.");
            for(; r && (r = 0, a[0] && (s = 0)), s;)try {
                if (e = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                switch(i = 0, o && (a = [
                    2 & a[0],
                    o.value
                ]), a[0]){
                    case 0:
                    case 1:
                        o = a;
                        break;
                    case 4:
                        return s.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        s.label++, i = a[1], a = [
                            0
                        ];
                        continue;
                    case 7:
                        a = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                            s.label = a[1];
                            break;
                        }
                        if (6 === a[0] && s.label < o[1]) {
                            s.label = o[1], o = a;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(a);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                a = n.call(t, s);
            } catch (t1) {
                a = [
                    6,
                    t1
                ], i = 0;
            } finally{
                e = o = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            };
        }, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this;
        }), r;
    }
    Object.create;
    Object.create;
    window.JSCompiler_renameProperty = function(t, n) {
        return t;
    };
    var kt = {
        toAttribute: function(t, n) {
            switch(n){
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t);
            }
            return t;
        },
        fromAttribute: function(t, n) {
            switch(n){
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t);
            }
            return t;
        }
    }, St = function(t, n) {
        return n !== t && (n == n || t == t);
    }, zt = {
        attribute: !0,
        type: String,
        converter: kt,
        reflect: !1,
        hasChanged: St
    }, Pt = "finalized", Ct = function(n) {
        "use strict";
        r(o, n);
        var i = u(o);
        function o() {
            var n;
            return t(this, o), (n = i.call(this)).initialize(), n;
        }
        return e(o, [
            {
                key: "initialize",
                value: function() {
                    var t = this;
                    this._updateState = 0, this._updatePromise = new Promise(function(n) {
                        return t._enableUpdatingResolver = n;
                    }), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal();
                }
            },
            {
                key: "_saveInstanceProperties",
                value: function() {
                    var t = this;
                    this.constructor._classProperties.forEach(function(n, e) {
                        if (t.hasOwnProperty(e)) {
                            var i = t[e];
                            delete t[e], t._instanceProperties || (t._instanceProperties = new Map), t._instanceProperties.set(e, i);
                        }
                    });
                }
            },
            {
                key: "_applyInstanceProperties",
                value: function() {
                    var t = this;
                    this._instanceProperties.forEach(function(n, e) {
                        return t[e] = n;
                    }), this._instanceProperties = void 0;
                }
            },
            {
                key: "connectedCallback",
                value: function() {
                    this.enableUpdating();
                }
            },
            {
                key: "enableUpdating",
                value: function() {
                    void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
                }
            },
            {
                key: "disconnectedCallback",
                value: function() {}
            },
            {
                key: "attributeChangedCallback",
                value: function(t, n, e) {
                    n !== e && this._attributeToProperty(t, e);
                }
            },
            {
                key: "_propertyToAttribute",
                value: function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zt, i = this.constructor, o = i._attributeNameForProperty(t, e);
                    if (void 0 !== o) {
                        var r = i._propertyValueToAttribute(n, e);
                        if (void 0 === r) return;
                        this._updateState = 8 | this._updateState, null == r ? this.removeAttribute(o) : this.setAttribute(o, r), this._updateState = -9 & this._updateState;
                    }
                }
            },
            {
                key: "_attributeToProperty",
                value: function(t, n) {
                    if (!(8 & this._updateState)) {
                        var e = this.constructor, i = e._attributeToPropertyMap.get(t);
                        if (void 0 !== i) {
                            var o = e.getPropertyOptions(i);
                            this._updateState = 16 | this._updateState, this[i] = e._propertyValueFromAttribute(n, o), this._updateState = -17 & this._updateState;
                        }
                    }
                }
            },
            {
                key: "requestUpdateInternal",
                value: function(t, n, e) {
                    var i = !0;
                    if (void 0 !== t) {
                        var o = this.constructor;
                        e = e || o.getPropertyOptions(t), o._valueHasChanged(this[t], n, e.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, n), !0 !== e.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(t, e))) : i = !1;
                    }
                    !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
                }
            },
            {
                key: "requestUpdate",
                value: function(t, n) {
                    return this.requestUpdateInternal(t, n), this.updateComplete;
                }
            },
            {
                key: "_enqueueUpdate",
                value: function() {
                    var t = this;
                    return bt(function() {
                        var n;
                        return _t(this, function(e) {
                            switch(e.label){
                                case 0:
                                    t._updateState = 4 | t._updateState, e.label = 1;
                                case 1:
                                    return e.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        t._updatePromise
                                    ];
                                case 2:
                                    return e.sent(), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return e.sent(), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return null == (n = t.performUpdate()) ? [
                                        3,
                                        6
                                    ] : [
                                        4,
                                        n
                                    ];
                                case 5:
                                    e.sent(), e.label = 6;
                                case 6:
                                    return [
                                        2,
                                        !t._hasRequestedUpdate
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "_hasRequestedUpdate",
                get: function() {
                    return 4 & this._updateState;
                }
            },
            {
                key: "hasUpdated",
                get: function() {
                    return 1 & this._updateState;
                }
            },
            {
                key: "performUpdate",
                value: function() {
                    if (this._hasRequestedUpdate) {
                        this._instanceProperties && this._applyInstanceProperties();
                        var t = !1, n = this._changedProperties;
                        try {
                            (t = this.shouldUpdate(n)) ? this.update(n) : this._markUpdated();
                        } catch (n1) {
                            throw t = !1, this._markUpdated(), n1;
                        }
                        t && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(n)), this.updated(n));
                    }
                }
            },
            {
                key: "_markUpdated",
                value: function() {
                    this._changedProperties = new Map, this._updateState = -5 & this._updateState;
                }
            },
            {
                key: "updateComplete",
                get: function() {
                    return this._getUpdateComplete();
                }
            },
            {
                key: "_getUpdateComplete",
                value: function() {
                    return this.getUpdateComplete();
                }
            },
            {
                key: "getUpdateComplete",
                value: function() {
                    return this._updatePromise;
                }
            },
            {
                key: "shouldUpdate",
                value: function(t) {
                    return !0;
                }
            },
            {
                key: "update",
                value: function(t) {
                    var n = this;
                    void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function(t, e) {
                        return n._propertyToAttribute(e, n[e], t);
                    }), this._reflectingProperties = void 0), this._markUpdated();
                }
            },
            {
                key: "updated",
                value: function(t) {}
            },
            {
                key: "firstUpdated",
                value: function(t) {}
            }
        ], [
            {
                key: "observedAttributes",
                get: function() {
                    var t = this;
                    this.finalize();
                    var n = [];
                    return this._classProperties.forEach(function(e, i) {
                        var o = t._attributeNameForProperty(i, e);
                        void 0 !== o && (t._attributeToPropertyMap.set(o, i), n.push(o));
                    }), n;
                }
            },
            {
                key: "_ensureClassProperties",
                value: function() {
                    var t = this;
                    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                        this._classProperties = new Map;
                        var n = Object.getPrototypeOf(this)._classProperties;
                        void 0 !== n && n.forEach(function(n, e) {
                            return t._classProperties.set(e, n);
                        });
                    }
                }
            },
            {
                key: "createProperty",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zt;
                    if (this._ensureClassProperties(), this._classProperties.set(t, n), !n.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        var e = "symbol" === (void 0 === t ? "undefined" : d(t)) ? Symbol() : "__".concat(t), i = this.getPropertyDescriptor(t, e, n);
                        void 0 !== i && Object.defineProperty(this.prototype, t, i);
                    }
                }
            },
            {
                key: "getPropertyDescriptor",
                value: function(t, n, e) {
                    return {
                        get: function() {
                            return this[n];
                        },
                        set: function(i) {
                            var o = this[t];
                            this[n] = i, this.requestUpdateInternal(t, o, e);
                        },
                        configurable: !0,
                        enumerable: !0
                    };
                }
            },
            {
                key: "getPropertyOptions",
                value: function(t) {
                    return this._classProperties && this._classProperties.get(t) || zt;
                }
            },
            {
                key: "finalize",
                value: function() {
                    var t = Object.getPrototypeOf(this);
                    if (t.hasOwnProperty(Pt) || t.finalize(), this[Pt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                        var n = this.properties, e = I(Object.getOwnPropertyNames(n)).concat(I("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n) : [])), i = !0, o = !1, r = void 0;
                        try {
                            for(var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done); i = !0){
                                var s = a.value;
                                this.createProperty(s, n[s]);
                            }
                        } catch (t1) {
                            o = !0, r = t1;
                        } finally{
                            try {
                                i || null == l.return || l.return();
                            } finally{
                                if (o) throw r;
                            }
                        }
                    }
                }
            },
            {
                key: "_attributeNameForProperty",
                value: function(t, n) {
                    var e = n.attribute;
                    return !1 === e ? void 0 : "string" == typeof e ? e : "string" == typeof t ? t.toLowerCase() : void 0;
                }
            },
            {
                key: "_valueHasChanged",
                value: function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : St;
                    return e(t, n);
                }
            },
            {
                key: "_propertyValueFromAttribute",
                value: function(t, n) {
                    var e = n.type, i = n.converter || kt, o = "function" == typeof i ? i : i.fromAttribute;
                    return o ? o(t, e) : t;
                }
            },
            {
                key: "_propertyValueToAttribute",
                value: function(t, n) {
                    if (void 0 !== n.reflect) {
                        var e = n.type, i = n.converter;
                        return (i && i.toAttribute || kt.toAttribute)(t, e);
                    }
                }
            }
        ]), o;
    }(yt(HTMLElement));
    Ct[Pt] = !0;
    var Tt = Element.prototype;
    Tt.msMatchesSelector || Tt.webkitMatchesSelector;
    /**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ var At = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Nt = Symbol(), Et = function() {
        "use strict";
        function n(e, i) {
            if (t(this, n), i !== Nt) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e;
        }
        return e(n, [
            {
                key: "styleSheet",
                get: function() {
                    return void 0 === this._styleSheet && (At ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
                }
            },
            {
                key: "toString",
                value: function() {
                    return this.cssText;
                }
            }
        ]), n;
    }(), Ot = function(t) {
        if (t instanceof Et) return t.cssText;
        if ("number" == typeof t) return t;
        throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    }, Ut = function(t) {
        for(var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)e[i - 1] = arguments[i];
        var o = e.reduce(function(n, e, i) {
            return n + Ot(e) + t[i + 1];
        }, t[0]);
        return new Et(o, Nt);
    };
    (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
    var Rt = {}, Vt = function(n) {
        "use strict";
        r(o, n);
        var i = u(o);
        function o() {
            return t(this, o), i.apply(this, arguments);
        }
        return e(o, [
            {
                key: "initialize",
                value: function() {
                    g(f(o.prototype), "initialize", this).call(this), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
                }
            },
            {
                key: "createRenderRoot",
                value: function() {
                    return this.attachShadow(this.constructor.shadowRootOptions);
                }
            },
            {
                key: "adoptStyles",
                value: function() {
                    var t = this.constructor._styles;
                    0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? At ? this.renderRoot.adoptedStyleSheets = t.map(function(t) {
                        return t instanceof CSSStyleSheet ? t : t.styleSheet;
                    }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(function(t) {
                        return t.cssText;
                    }), this.localName));
                }
            },
            {
                key: "connectedCallback",
                value: function() {
                    g(f(o.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
                }
            },
            {
                key: "update",
                value: function(t) {
                    var n = this, e = this.render();
                    g(f(o.prototype), "update", this).call(this, t), e !== Rt && this.constructor.render(e, this.renderRoot, {
                        scopeName: this.localName,
                        eventContext: this
                    }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function(t) {
                        var e = document.createElement("style");
                        e.textContent = t.cssText, n.renderRoot.appendChild(e);
                    }));
                }
            },
            {
                key: "render",
                value: function() {
                    return Rt;
                }
            }
        ], [
            {
                key: "getStyles",
                value: function() {
                    return this.styles;
                }
            },
            {
                key: "_getUniqueStyles",
                value: function() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
                        var t = this.getStyles();
                        if (Array.isArray(t)) {
                            var n = function(t, e) {
                                return t.reduceRight(function(t, e) {
                                    return Array.isArray(e) ? n(e, t) : (t.add(e), t);
                                }, e);
                            }, e = n(t, new Set), i = [];
                            e.forEach(function(t) {
                                return i.unshift(t);
                            }), this._styles = i;
                        } else this._styles = void 0 === t ? [] : [
                            t
                        ];
                        this._styles = this._styles.map(function(t) {
                            if (t instanceof CSSStyleSheet && !At) {
                                var n = Array.prototype.slice.call(t.cssRules).reduce(function(t, n) {
                                    return t + n.cssText;
                                }, "");
                                return new Et(String(n), Nt);
                            }
                            return t;
                        });
                    }
                }
            }
        ]), o;
    }(Ct);
    Vt.finalized = !0, Vt.render = function(t, n, e) {
        if (!e || "object" != typeof e || !e.scopeName) throw new Error("The `scopeName` option is required.");
        var i = e.scopeName, o = at.has(n), r = dt && 11 === n.nodeType && !!n.host, a = r && !pt.has(i), l = a ? document.createDocumentFragment() : n;
        if (lt(t, l, Object.assign({
            templateFactory: mt(i)
        }, e)), a) {
            var s = at.get(l);
            at.delete(l);
            var f = s.value instanceof H ? s.value.template : void 0;
            ht(i, l, f), x(n, n.firstChild), n.appendChild(l), at.set(n, s);
        }
        !o && r && window.ShadyCSS.styleElement(n.host);
    }, Vt.shadowRootOptions = {
        mode: "open"
    };
    var qt = function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        window.dataLayer = window.dataLayer || [];
        var e = t.composedPath()[0], i = t.composedPath()[3].innerText ? t.composedPath()[3].innerText.split("\n")[0] : "";
        window.dataLayer.push({
            event: "shadow_event_" + t.type,
            shadow_event: {
                elementInnerHTML: e.textContent || "",
                elementInnerText: e.innerText || "",
                title: "shadow-dom-link",
                element: e,
                elementClasses: e.className || "",
                elementId: e.id || "",
                elementLocation: n || "",
                elementTarget: e.target || "",
                elementUrl: e.href || e.action || "",
                originalEvent: t,
                parent: i || "",
                inShadowDom: !0
            }
        });
    };
    function Mt() {
        var t = a([
            '\n			* {\n				box-sizing: border-box;\n			}\n			[class*=" ua-brand-"], [class^=ua-brand-] {\n				font-family: ua-brand-symbols!important;\n				-webkit-font-smoothing: antialiased;\n				-moz-osx-font-smoothing: grayscale;\n				speak: none;\n				font-style: normal;\n				font-weight: 400;\n				font-variant: normal;\n				text-transform: none;\n				line-height: 1;\n			}\n			html.sticky-footer body {\n				display: -webkit-box;\n				display: -ms-flexbox;\n				display: flex;\n				-webkit-box-orient: vertical;\n				-webkit-box-direction: normal;\n				-ms-flex-direction: column;\n				flex-direction: column;\n				min-height: 100vh;\n				height: 100%;\n				font-size: 16px;\n				line-height: 1.5;\n			}\n			body{\n    		-webkit-font-smoothing: antialiased;\n    		-moz-osx-font-smoothing: grayscale;\n    		text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);\n				font-size: 16px;\n				line-height: 1.5;\n			}\n			footer, nav, section, summary {\n				display: block;\n			}\n			hr {\n				position: relative;\n				background: url(https://www.arizona.edu/img/sky-triangles-hr.svg) center center no-repeat;\n				background-size: 2em .625em;\n				border-top: 0;\n				border-color: #007d84;\n				height: 10px;\n				width: 100%;\n				margin-top: 24px;\n				margin-bottom: 24px;\n				border: 0;\n				box-sizing: content-box;\n			}\n			#footer_site hr:after, #footer_site hr:before {\n				border-color: transparent;\n				border-color: rgba(55,55,55,.09);\n				width: 100%;\n			}\n			hr:before {\n				content: " ";\n				border-top-width: 1px;\n				border-top-style: solid;\n				border-top-color: inherit;\n				position: absolute;\n				width: calc(50% - 26px);\n				top: 4px;\n				left: 0;\n			}\n			hr:after {\n				content: " ";\n				border-top-width: 1px;\n				border-top-style: solid;\n				border-top-color: inherit;\n				position: absolute;\n				width: calc(50% - 26px);\n				top: 4px;\n				right: 0;\n			}\n			p {\n				margin: 0 0 12px;\n				font-size: 16px;\n			}\n			p.smal{\n				font-size: 87%;\n			}\n			.text-center {\n				text-align: center;\n			}\n			.text-align-center {\n				text-align: center;\n			}\n			@media (min-width: 1200px){\n				.text-right-lg {\n					text-align: right;\n				}\n			}\n			.page-row{\n				-webkit-box-flex: 0;\n				-ms-flex: none;\n				flex: none;\n			}\n			.container {\n				width: 100%;\n				padding-right: 15px;\n				padding-left: 15px;\n				margin-right: auto;\n				margin-left: auto;\n			}\n			.container:after, .container:before{\n				display: table;\n				content: " ";\n			}\n			@media (min-width: 576px) {\n				.container, .container-sm {\n					max-width: 540px;\n				}\n			}\n			@media (min-width: 768px) {\n				.container, .container-md, .container-sm {\n					max-width: 720px;\n				}\n			}\n			@media (min-width: 992px) {\n				.container, .container-lg, .container-md, .container-sm {\n					max-width: 960px;\n				}\n			}\n			@media (min-width: 1200px){\n				.container, .container-lg, .container-md, .container-sm, .container-xl {\n					max-width: 1140px;\n				}\n			}\n			.row section{\n				align-items: center;\n			}\n			.row:before, .row:after{\n				display: table;\n				content: " ";\n			}\n\n			.page-row-padding-bottom:after, .page-row-padding-top:before {\n				height: .8em;\n				background: #f4ede5;\n			}\n\n			.container {\n				padding-right: 16px;\n				padding-left: 16px;\n				margin-right: auto;\n				margin-left: auto;\n			}\n\n			.container:after, .container:before {\n				display: table;\n				content: " ";\n			}\n			.container:after {\n				clear: both;\n			}\n			@media (min-width: 768px) {\n				.container {\n					width: 752px;\n				}\n			}\n			@media (min-width: 992px) {\n				.container {\n					width: 972px;\n				}\n			}\n			@media (min-width: 1200px) {\n					.container {\n							width: 1172px;\n					}\n			}\n			.row {\n					margin-right: -15px;\n					margin-left: -15px;\n			}\n			.row:after,\n			.row:before {\n					display: table;\n					content: " ";\n			}\n			.row:after {\n					clear: both;\n			}\n			.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n				position: relative;\n				min-height: 1px;\n				padding-right: 16px;\n				padding-left: 16px;\n			}\n			.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n				float: left;\n			}\n			.col-xs-1 {\n				width: 8.333333%;\n			}\n			.col-xs-2 {\n				width: 16.666667%;\n			}\n			.col-xs-3 {\n				width: 25%;\n			}\n			.col-xs-4 {\n				width: 33.333333%;\n			}\n			.col-xs-5 {\n				width: 41.666667%;\n			}\n			.col-xs-6 {\n				width: 50%;\n			}\n			.col-xs-7 {\n				width: 58.333333%;\n			}\n			.col-xs-8 {\n				width: 66.666667%;\n			}\n			.col-xs-9 {\n				width: 75%;\n			}\n			.col-xs-10 {\n				width: 83.333333%;\n			}\n			.col-xs-11 {\n				width: 91.666667%;\n			}\n			.col-xs-12 {\n				width: 100%;\n			}\n			.col-xs-offset-0 {\n				margin-left: 0;\n			}\n			.col-xs-offset-1 {\n				margin-left: 8.333333%;\n			}\n			.col-xs-offset-2 {\n				margin-left: 16.666667%;\n			}\n			.col-xs-offset-3 {\n				margin-left: 25%;\n			}\n			.col-xs-offset-4 {\n				margin-left: 33.333333%;\n			}\n			.col-xs-offset-5 {\n				margin-left: 41.666667%;\n			}\n			.col-xs-offset-6 {\n				margin-left: 50%;\n			}\n			.col-xs-offset-7 {\n				margin-left: 58.333333%;\n			}\n			.col-xs-offset-8 {\n				margin-left: 66.666667%;\n			}\n			.col-xs-offset-9 {\n				margin-left: 75%;\n			}\n			.col-xs-offset-10 {\n				margin-left: 83.333333%;\n			}\n			.col-xs-offset-11 {\n				margin-left: 91.666667%;\n			}\n			.col-xs-offset-12 {\n				margin-left: 100%;\n			}\n			@media (min-width: 768px) {\n				.col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {\n					float: left;\n				}\n				.col-sm-1 {\n					width: 8.333333%;\n				}\n				.col-sm-2 {\n					width: 16.666667%;\n				}\n				.col-sm-3 {\n					width: 25%;\n				}\n				.col-sm-4 {\n					width: 33.333333%;\n				}\n				.col-sm-5 {\n					width: 41.666667%;\n				}\n				.col-sm-6 {\n					width: 50%;\n				}\n				.col-sm-7 {\n					width: 58.333333%;\n				}\n				.col-sm-8 {\n					width: 66.666667%;\n				}\n				.col-sm-9 {\n					width: 75%;\n				}\n				.col-sm-10 {\n					width: 83.333333%;\n				}\n				.col-sm-11 {\n					width: 91.666667%;\n				}\n				.col-sm-12 {\n					width: 100%;\n				}\n				.col-sm-offset-0 {\n					margin-left: 0;\n				}\n				.col-sm-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-sm-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-sm-offset-3 {\n					margin-left: 25%;\n				}\n				.col-sm-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-sm-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-sm-offset-6 {\n					margin-left: 50%;\n				}\n				.col-sm-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-sm-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-sm-offset-9 {\n					margin-left: 75%;\n				}\n				.col-sm-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-sm-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-sm-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			@media (min-width: 992px) {\n				.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {\n					float: left;\n				}\n				.col-md-1 {\n					width: 8.333333%;\n				}\n				.col-md-2 {\n					width: 16.666667%;\n				}\n				.col-md-3 {\n					width: 25%;\n				}\n				.col-md-4 {\n					width: 33.333333%;\n				}\n				.col-md-5 {\n					width: 41.666667%;\n				}\n				.col-md-6 {\n					width: 50%;\n				}\n				.col-md-7 {\n					width: 58.333333%;\n				}\n				.col-md-8 {\n					width: 66.666667%;\n				}\n				.col-md-9 {\n					width: 75%;\n				}\n				.col-md-10 {\n					width: 83.333333%;\n				}\n				.col-md-11 {\n					width: 91.666667%;\n				}\n				.col-md-12 {\n					width: 100%;\n				}\n				.col-md-offset-0 {\n					margin-left: 0;\n				}\n				.col-md-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-md-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-md-offset-3 {\n					margin-left: 25%;\n				}\n				.col-md-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-md-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-md-offset-6 {\n					margin-left: 50%;\n				}\n				.col-md-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-md-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-md-offset-9 {\n					margin-left: 75%;\n				}\n				.col-md-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-md-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-md-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			@media (min-width: 1200px) {\n				.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {\n					float: left;\n				}\n				.col-lg-1 {\n					width: 8.333333%;\n				}\n				.col-lg-2 {\n					width: 16.666667%;\n				}\n				.col-lg-3 {\n					width: 25%;\n				}\n				.col-lg-4 {\n					width: 33.333333%;\n				}\n				.col-lg-5 {\n					width: 41.666667%;\n				}\n				.col-lg-6 {\n					width: 50%;\n				}\n				.col-lg-7 {\n					width: 58.333333%;\n				}\n				.col-lg-8 {\n					width: 66.666667%;\n				}\n				.col-lg-9 {\n					width: 75%;\n				}\n				.col-lg-10 {\n					width: 83.333333%;\n				}\n				.col-lg-11 {\n					width: 91.666667%;\n				}\n				.col-lg-12 {\n					width: 100%;\n				}\n				.col-lg-offset-0 {\n					margin-left: 0;\n				}\n				.col-lg-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-lg-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-lg-offset-3 {\n					margin-left: 25%;\n				}\n				.col-lg-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-lg-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-lg-offset-6 {\n					margin-left: 50%;\n				}\n				.col-lg-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-lg-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-lg-offset-9 {\n					margin-left: 75%;\n				}\n				.col-lg-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-lg-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-lg-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			label {\n				display: inline-block;\n				max-width: 100%;\n				margin-bottom: 5px;\n				font-weight: 700;\n			}\n			select[multiple], select[size] {\n				height: auto;\n			}\n			.label {\n				display: inline;\n				padding: 0.2em 0.6em 0.3em;\n				font-size: 75%;\n				font-weight: 700;\n				line-height: 1;\n				color: #fff;\n				text-align: center;\n				white-space: nowrap;\n				vertical-align: baseline;\n				border-radius: 0.25em;\n			}\n			.label:empty {\n				display: none;\n			}\n			a.label:focus, a.label:hover {\n				color: #fff;\n				text-decoration: none;\n				cursor: pointer;\n			}\n			.label-default {\n				background-color: #ab0520;\n			}\n			.label-default[href]:focus, .label-default[href]:hover {\n				background-color: #790417;\n			}\n			.label-info {\n				background-color: #81d3eb;\n			}\n			.label-info[href]:focus,\n			.label-info[href]:hover {\n				background-color: #55c4e4;\n			}\n			@-webkit-keyframes progress-bar-stripes {\n				from {\n					background-position: 40px 0;\n				}\n				to {\n					background-position: 0 0;\n				}\n			}\n			@keyframes progress-bar-stripes {\n				from {\n					background-position: 40px 0;\n				}\n				to {\n					background-position: 0 0;\n				}\n			}\n			a {\n				font-weight: 700;\n				-webkit-transition: color 0.1s ease-in-out;\n				transition: color 0.1s ease-in-out;\n			}\n			.page-header {\n				margin: 3rem 0 2rem;\n				line-height: 1.2;\n			}\n			label {\n				color: #49595e;\n			}\n			.label {\n				border-radius: 0;\n			}\n			select {\n				border: 0;\n				outline: 1px solid #cbd1e0;\n				background-color: #fff;\n				border-radius: 0;\n			}\n			.label {\n				font-size: 0.7em;\n				font-weight: 700;\n				line-height: 1.5;\n				color: #fff;\n				margin: 0 0.5em;\n			}\n			img {\n				max-width: 100%;\n				height: auto;\n				border: 0;\n				vertical-align: middle;\n			}\n			a.link-container {\n				color: inherit;\n				display: block;\n				font-weight: inherit;\n			}\n			a.link-container:focus, a.link-container:hover {\n				background-color: #eef1f1;\n				outline: 0;\n				text-decoration: none;\n				color: inherit;\n			}\n			ol, ul {\n    		margin-top: 0;\n    		margin-bottom: 12px;\n			}\n			.h3, .h4, .h5, .h6, h3, h4, h5, h6 {\n				font-weight: 500;\n				line-height: 1.1;\n				color: #49595e;\n			}\n			.h5, h5 {\n				font-size: 16px;\n			}\n			.h4, .h5, .h6, h4, h5, h6 {\n				margin-top: 12px;\n				margin-bottom: 12px;\n			}\n			.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n				font-weight: 500;\n				line-height: 1.1;\n				color: #49595e;\n			}\n			.initialism, .text-uppercase {\n				text-transform: uppercase;\n			}\n			.bold, bold, strong {\n			  font-weight: 700;\n			}\n			b, strong {\n				font-weight: 700;\n			}\n\n\n\n			.arizona-logo {\n				display: inline-block;\n				height: 20px;\n				margin: 19px 0 20px;\n				max-width: 80%;\n				float: left;\n				width: 276px;\n				padding: 0 0 0 0.6rem;\n			}\n			.bottom-buffer-xs-0 {\n				margin-bottom: 0;\n			}\n			.bottom-buffer-1, .bottom-buffer-xs-1 {\n				margin-bottom: 1px;\n			}\n			.bottom-buffer-5, .bottom-buffer-xs-5 {\n				margin-bottom: 5px;\n			}\n			.bottom-buffer-10, .bottom-buffer-xs-10 {\n				margin-bottom: 10px;\n			}\n			.bottom-buffer-15, .bottom-buffer-xs-15 {\n				margin-bottom: 15px;\n			}\n			.bottom-buffer-20, .bottom-buffer-xs-20 {\n				margin-bottom: 20px;\n			}\n			.bottom-buffer-25, .bottom-buffer-xs-25 {\n				margin-bottom: 25px;\n			}\n			.bottom-buffer-30, .bottom-buffer-xs-30 {\n				margin-bottom: 30px;\n			}\n			.bottom-buffer-50, .bottom-buffer-xs-50 {\n				margin-bottom: 50px;\n			}\n			@media (min-width: 768px) {\n				.bottom-buffer-sm-0, .bottom-buffer-sm-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-sm-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-sm-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-sm-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-sm-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-sm-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-sm-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-sm-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-sm-50 {\n					margin-bottom: 50px;\n				}\n			}\n			@media (min-width: 992px) {\n				.bottom-buffer-md-0, .bottom-buffer-md-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-md-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-md-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-md-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-md-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-md-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-md-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-md-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-md-50 {\n					margin-bottom: 50px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.bottom-buffer-lg-0, .bottom-buffer-lg-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-lg-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-lg-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-lg-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-lg-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-lg-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-lg-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-lg-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-lg-50 {\n					margin-bottom: 50px;\n				}\n			}\n			.top-buffer-xs-0 {\n				margin-top: 0;\n			}\n			.top-buffer-xs-1 {\n				margin-top: 1px;\n			}\n			.top-buffer-xs-5 {\n				margin-top: 5px;\n			}\n			.top-buffer-xs-10 {\n				margin-top: 10px;\n			}\n			.top-buffer-xs-15 {\n				margin-top: 15px;\n			}\n			.top-buffer-xs-20 {\n				margin-top: 20px;\n			}\n			.top-buffer-xs-25 {\n				margin-top: 25px;\n			}\n			.top-buffer-xs-30 {\n				margin-top: 30px;\n			}\n			.top-buffer-xs-50 {\n				margin-top: 50px;\n			}\n			@media (min-width: 768px) {\n				.top-buffer-sm-0, .top-buffer-sm-reset {\n					margin-top: 0;\n				}\n				.top-buffer-sm-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-sm-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-sm-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-sm-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-sm-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-sm-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-sm-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-sm-50 {\n					margin-top: 50px;\n				}\n			}\n			@media (min-width: 992px) {\n				.top-buffer-md-0, .top-buffer-md-reset {\n					margin-top: 0;\n				}\n				.top-buffer-md-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-md-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-md-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-md-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-md-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-md-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-md-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-md-50 {\n					margin-top: 50px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.top-buffer-lg-0, .top-buffer-lg-reset {\n					margin-top: 0;\n				}\n				.top-buffer-lg-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-lg-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-lg-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-lg-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-lg-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-lg-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-lg-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-lg-50 {\n					margin-top: 50px;\n				}\n			}\n			.right-buffer-xs-0 {\n				padding-right: 0;\n			}\n			.right-buffer-xs-1 {\n				padding-right: 1px;\n			}\n			.right-buffer-xs-5 {\n				padding-right: 5px;\n			}\n			.right-buffer-xs-10 {\n				padding-right: 10px;\n			}\n			.right-buffer-xs-15 {\n				padding-right: 15px;\n			}\n			.right-buffer-xs-20 {\n				padding-right: 20px;\n			}\n			.right-buffer-xs-30 {\n				padding-right: 30px;\n			}\n			.left-buffer-xs-0 {\n				padding-left: 0;\n			}\n			.left-buffer-xs-1 {\n				padding-left: 1px;\n			}\n			.left-buffer-xs-5 {\n				padding-left: 5px;\n			}\n			.left-buffer-xs-10 {\n				padding-left: 10px;\n			}\n			.left-buffer-xs-15 {\n				padding-left: 15px;\n			}\n			.left-buffer-xs-20 {\n				padding-left: 20px;\n			}\n			.left-buffer-xs-30 {\n				padding-left: 30px;\n			}\n			@media (min-width: 768px) {\n				.right-buffer-sm-0 {\n					padding-right: 0;\n				}\n				.right-buffer-sm-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-sm-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-sm-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-sm-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-sm-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-sm-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-sm-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-sm-0 {\n					padding-left: 0;\n				}\n				.left-buffer-sm-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-sm-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-sm-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-sm-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-sm-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-sm-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-sm-30 {\n					padding-left: 30px;\n				}\n			}\n			@media (min-width: 992px) {\n				.right-buffer-md-0 {\n					padding-right: 0;\n				}\n				.right-buffer-md-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-md-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-md-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-md-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-md-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-md-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-md-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-md-0 {\n					padding-left: 0;\n				}\n				.left-buffer-md-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-md-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-md-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-md-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-md-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-md-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-md-30 {\n					padding-left: 30px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.right-buffer-lg-0 {\n					padding-right: 0;\n				}\n				.right-buffer-lg-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-lg-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-lg-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-lg-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-lg-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-lg-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-lg-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-lg-0 {\n					padding-left: 0;\n				}\n				.left-buffer-lg-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-lg-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-lg-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-lg-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-lg-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-lg-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-lg-30 {\n					padding-left: 30px;\n				}\n			}\n			.mb-0, .my-0 {\n				margin-bottom: 0!important;\n				margin-bottom: 0!important;\n			}\n			.mt-0, .my-0 {\n				margin-top: 0!important;\n				margin-top: 0!important;\n			}\n			.text-muted {\n				color: #495057;\n			}\n			.container-collapsed .column {\n				min-height: initial;\n			}\n			.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {\n    		display: none!important;\n			}\n			.small, small {\n				font-size: 87%;\n			}\n			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span, html.ua-brand-icons.external-links [target=_blank] {\n				padding-right: .8em;\n			}\n			html.external-links .pseudo-link:after, html.external-links [target=_blank]:after {\n				border-bottom: .3125em solid transparent;\n				border-left: .3125em solid transparent;\n				border-right: .3125em solid #8f1124;\n				border-top: .3125em solid #8f1124;\n				content: \'\';\n				display: inline-block;\n				height: 0;\n				position: relative;\n				top: 0;\n				width: 0;\n				right: 0;\n			}\n			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span:after, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span:after, html.ua-brand-icons.external-links [target=_blank]:after {\n				content: "E648";\n				font-family: ua-brand-symbols;\n				font-size: .7em;\n				border-width: 0;\n			}\n			#footer_site {\n				background: #f4ede5;\n				padding: 2.5rem 0;\n				color: #49595e;\n				line-height: 1.5;\n			}\n			#footer_site hr {\n				background: 0 0;\n			}\n			#footer_site a {\n				color: #8B0015;\n				text-decoration: underline;\n			}\n			#footer_site ul {\n				display: inline-block;\n				margin: 0;\n				padding: 1rem 0 0;\n			}\n			#block-bean-uaqs-footer-links-bean-informa h5 strong{\n				font-size: 16px;\n				font-weight: 500;\n				color: black;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul {\n				display: inline-block;\n				padding: 0;\n				margin: 0 0 12px;\n				text-align: center;\n			}\n			@media (min-width: 768px) {\n				text-align: left;\n			}\n			#footer_site ul>li {\n				border-right: 1px solid #e2e9eb;\n				display: inline-block;\n				list-style: none;\n				padding: 0 .75rem;\n			}\n			#footer_site ul>li.last {\n				border-right: 0;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul li {\n				border-right: 0px solid hsl(196,8%,74%);\n				display: inline-block;\n				list-style: none;\n				padding: 0 0 0 .75rem;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul li a {\n				color: hsl(0,0%,20%);\n				text-decoration: none;\n				text-transform: none;\n				font-size: 14px;\n			}\n\n			#footer_site #footer_sub ul {\n				display: block;\n				margin: 0;\n				padding: 0 0 0;\n				width: 100%;\n			}\n			#footer_site #footer_sub .two-col-menu ul {\n				-moz-column-count: 2;\n				-moz-column-gap: 2em;\n				-webkit-column-count: 2;\n				-webkit-column-gap: 2em;\n				column-count: 2;\n				column-gap: 2em;\n				display: block;\n			}\n			#footer_site #footer_sub ul li {\n				border-right: 0px solid #B6BEC1;\n				display: block;\n				list-style: none;\n				padding: 0;\n				margin: 0;\n			}\n			#footer_site ul li a {\n				color: #49595e;\n				font-weight: 500;\n				display: block;\n				text-decoration: none;\n				font-size: 16px;\n				line-height: inherit;\n				vertical-align: top;\n				text-transform: none;\n				margin: 7px 0;\n			}\n			#footer_sub ul.menu li a i {\n				margin: 0 .5em 0 0;\n			}\n			.bg-warm-gray {\n				background-color: #f4ede5;\n			}\n			.paragraphs-item-uaqs-full-width-bg-wrapper {\n				margin-top: -1px;\n			}\n			.background-wrapper {\n				padding: 3rem 0;\n			}\n			#footer_sub .background-wrapper {\n			  padding: 0;\n			  margin: 0 -16px;\n			}\n\n\n\n\n		'
        ], [
            '\n			* {\n				box-sizing: border-box;\n			}\n			[class*=" ua-brand-"], [class^=ua-brand-] {\n				font-family: ua-brand-symbols!important;\n				-webkit-font-smoothing: antialiased;\n				-moz-osx-font-smoothing: grayscale;\n				speak: none;\n				font-style: normal;\n				font-weight: 400;\n				font-variant: normal;\n				text-transform: none;\n				line-height: 1;\n			}\n			html.sticky-footer body {\n				display: -webkit-box;\n				display: -ms-flexbox;\n				display: flex;\n				-webkit-box-orient: vertical;\n				-webkit-box-direction: normal;\n				-ms-flex-direction: column;\n				flex-direction: column;\n				min-height: 100vh;\n				height: 100%;\n				font-size: 16px;\n				line-height: 1.5;\n			}\n			body{\n    		-webkit-font-smoothing: antialiased;\n    		-moz-osx-font-smoothing: grayscale;\n    		text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);\n				font-size: 16px;\n				line-height: 1.5;\n			}\n			footer, nav, section, summary {\n				display: block;\n			}\n			hr {\n				position: relative;\n				background: url(https://www.arizona.edu/img/sky-triangles-hr.svg) center center no-repeat;\n				background-size: 2em .625em;\n				border-top: 0;\n				border-color: #007d84;\n				height: 10px;\n				width: 100%;\n				margin-top: 24px;\n				margin-bottom: 24px;\n				border: 0;\n				box-sizing: content-box;\n			}\n			#footer_site hr:after, #footer_site hr:before {\n				border-color: transparent;\n				border-color: rgba(55,55,55,.09);\n				width: 100%;\n			}\n			hr:before {\n				content: " ";\n				border-top-width: 1px;\n				border-top-style: solid;\n				border-top-color: inherit;\n				position: absolute;\n				width: calc(50% - 26px);\n				top: 4px;\n				left: 0;\n			}\n			hr:after {\n				content: " ";\n				border-top-width: 1px;\n				border-top-style: solid;\n				border-top-color: inherit;\n				position: absolute;\n				width: calc(50% - 26px);\n				top: 4px;\n				right: 0;\n			}\n			p {\n				margin: 0 0 12px;\n				font-size: 16px;\n			}\n			p.smal{\n				font-size: 87%;\n			}\n			.text-center {\n				text-align: center;\n			}\n			.text-align-center {\n				text-align: center;\n			}\n			@media (min-width: 1200px){\n				.text-right-lg {\n					text-align: right;\n				}\n			}\n			.page-row{\n				-webkit-box-flex: 0;\n				-ms-flex: none;\n				flex: none;\n			}\n			.container {\n				width: 100%;\n				padding-right: 15px;\n				padding-left: 15px;\n				margin-right: auto;\n				margin-left: auto;\n			}\n			.container:after, .container:before{\n				display: table;\n				content: " ";\n			}\n			@media (min-width: 576px) {\n				.container, .container-sm {\n					max-width: 540px;\n				}\n			}\n			@media (min-width: 768px) {\n				.container, .container-md, .container-sm {\n					max-width: 720px;\n				}\n			}\n			@media (min-width: 992px) {\n				.container, .container-lg, .container-md, .container-sm {\n					max-width: 960px;\n				}\n			}\n			@media (min-width: 1200px){\n				.container, .container-lg, .container-md, .container-sm, .container-xl {\n					max-width: 1140px;\n				}\n			}\n			.row section{\n				align-items: center;\n			}\n			.row:before, .row:after{\n				display: table;\n				content: " ";\n			}\n\n			.page-row-padding-bottom:after, .page-row-padding-top:before {\n				height: .8em;\n				background: #f4ede5;\n			}\n\n			.container {\n				padding-right: 16px;\n				padding-left: 16px;\n				margin-right: auto;\n				margin-left: auto;\n			}\n\n			.container:after, .container:before {\n				display: table;\n				content: " ";\n			}\n			.container:after {\n				clear: both;\n			}\n			@media (min-width: 768px) {\n				.container {\n					width: 752px;\n				}\n			}\n			@media (min-width: 992px) {\n				.container {\n					width: 972px;\n				}\n			}\n			@media (min-width: 1200px) {\n					.container {\n							width: 1172px;\n					}\n			}\n			.row {\n					margin-right: -15px;\n					margin-left: -15px;\n			}\n			.row:after,\n			.row:before {\n					display: table;\n					content: " ";\n			}\n			.row:after {\n					clear: both;\n			}\n			.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n				position: relative;\n				min-height: 1px;\n				padding-right: 16px;\n				padding-left: 16px;\n			}\n			.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n				float: left;\n			}\n			.col-xs-1 {\n				width: 8.333333%;\n			}\n			.col-xs-2 {\n				width: 16.666667%;\n			}\n			.col-xs-3 {\n				width: 25%;\n			}\n			.col-xs-4 {\n				width: 33.333333%;\n			}\n			.col-xs-5 {\n				width: 41.666667%;\n			}\n			.col-xs-6 {\n				width: 50%;\n			}\n			.col-xs-7 {\n				width: 58.333333%;\n			}\n			.col-xs-8 {\n				width: 66.666667%;\n			}\n			.col-xs-9 {\n				width: 75%;\n			}\n			.col-xs-10 {\n				width: 83.333333%;\n			}\n			.col-xs-11 {\n				width: 91.666667%;\n			}\n			.col-xs-12 {\n				width: 100%;\n			}\n			.col-xs-offset-0 {\n				margin-left: 0;\n			}\n			.col-xs-offset-1 {\n				margin-left: 8.333333%;\n			}\n			.col-xs-offset-2 {\n				margin-left: 16.666667%;\n			}\n			.col-xs-offset-3 {\n				margin-left: 25%;\n			}\n			.col-xs-offset-4 {\n				margin-left: 33.333333%;\n			}\n			.col-xs-offset-5 {\n				margin-left: 41.666667%;\n			}\n			.col-xs-offset-6 {\n				margin-left: 50%;\n			}\n			.col-xs-offset-7 {\n				margin-left: 58.333333%;\n			}\n			.col-xs-offset-8 {\n				margin-left: 66.666667%;\n			}\n			.col-xs-offset-9 {\n				margin-left: 75%;\n			}\n			.col-xs-offset-10 {\n				margin-left: 83.333333%;\n			}\n			.col-xs-offset-11 {\n				margin-left: 91.666667%;\n			}\n			.col-xs-offset-12 {\n				margin-left: 100%;\n			}\n			@media (min-width: 768px) {\n				.col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {\n					float: left;\n				}\n				.col-sm-1 {\n					width: 8.333333%;\n				}\n				.col-sm-2 {\n					width: 16.666667%;\n				}\n				.col-sm-3 {\n					width: 25%;\n				}\n				.col-sm-4 {\n					width: 33.333333%;\n				}\n				.col-sm-5 {\n					width: 41.666667%;\n				}\n				.col-sm-6 {\n					width: 50%;\n				}\n				.col-sm-7 {\n					width: 58.333333%;\n				}\n				.col-sm-8 {\n					width: 66.666667%;\n				}\n				.col-sm-9 {\n					width: 75%;\n				}\n				.col-sm-10 {\n					width: 83.333333%;\n				}\n				.col-sm-11 {\n					width: 91.666667%;\n				}\n				.col-sm-12 {\n					width: 100%;\n				}\n				.col-sm-offset-0 {\n					margin-left: 0;\n				}\n				.col-sm-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-sm-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-sm-offset-3 {\n					margin-left: 25%;\n				}\n				.col-sm-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-sm-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-sm-offset-6 {\n					margin-left: 50%;\n				}\n				.col-sm-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-sm-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-sm-offset-9 {\n					margin-left: 75%;\n				}\n				.col-sm-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-sm-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-sm-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			@media (min-width: 992px) {\n				.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {\n					float: left;\n				}\n				.col-md-1 {\n					width: 8.333333%;\n				}\n				.col-md-2 {\n					width: 16.666667%;\n				}\n				.col-md-3 {\n					width: 25%;\n				}\n				.col-md-4 {\n					width: 33.333333%;\n				}\n				.col-md-5 {\n					width: 41.666667%;\n				}\n				.col-md-6 {\n					width: 50%;\n				}\n				.col-md-7 {\n					width: 58.333333%;\n				}\n				.col-md-8 {\n					width: 66.666667%;\n				}\n				.col-md-9 {\n					width: 75%;\n				}\n				.col-md-10 {\n					width: 83.333333%;\n				}\n				.col-md-11 {\n					width: 91.666667%;\n				}\n				.col-md-12 {\n					width: 100%;\n				}\n				.col-md-offset-0 {\n					margin-left: 0;\n				}\n				.col-md-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-md-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-md-offset-3 {\n					margin-left: 25%;\n				}\n				.col-md-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-md-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-md-offset-6 {\n					margin-left: 50%;\n				}\n				.col-md-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-md-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-md-offset-9 {\n					margin-left: 75%;\n				}\n				.col-md-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-md-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-md-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			@media (min-width: 1200px) {\n				.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {\n					float: left;\n				}\n				.col-lg-1 {\n					width: 8.333333%;\n				}\n				.col-lg-2 {\n					width: 16.666667%;\n				}\n				.col-lg-3 {\n					width: 25%;\n				}\n				.col-lg-4 {\n					width: 33.333333%;\n				}\n				.col-lg-5 {\n					width: 41.666667%;\n				}\n				.col-lg-6 {\n					width: 50%;\n				}\n				.col-lg-7 {\n					width: 58.333333%;\n				}\n				.col-lg-8 {\n					width: 66.666667%;\n				}\n				.col-lg-9 {\n					width: 75%;\n				}\n				.col-lg-10 {\n					width: 83.333333%;\n				}\n				.col-lg-11 {\n					width: 91.666667%;\n				}\n				.col-lg-12 {\n					width: 100%;\n				}\n				.col-lg-offset-0 {\n					margin-left: 0;\n				}\n				.col-lg-offset-1 {\n					margin-left: 8.333333%;\n				}\n				.col-lg-offset-2 {\n					margin-left: 16.666667%;\n				}\n				.col-lg-offset-3 {\n					margin-left: 25%;\n				}\n				.col-lg-offset-4 {\n					margin-left: 33.333333%;\n				}\n				.col-lg-offset-5 {\n					margin-left: 41.666667%;\n				}\n				.col-lg-offset-6 {\n					margin-left: 50%;\n				}\n				.col-lg-offset-7 {\n					margin-left: 58.333333%;\n				}\n				.col-lg-offset-8 {\n					margin-left: 66.666667%;\n				}\n				.col-lg-offset-9 {\n					margin-left: 75%;\n				}\n				.col-lg-offset-10 {\n					margin-left: 83.333333%;\n				}\n				.col-lg-offset-11 {\n					margin-left: 91.666667%;\n				}\n				.col-lg-offset-12 {\n					margin-left: 100%;\n				}\n			}\n			label {\n				display: inline-block;\n				max-width: 100%;\n				margin-bottom: 5px;\n				font-weight: 700;\n			}\n			select[multiple], select[size] {\n				height: auto;\n			}\n			.label {\n				display: inline;\n				padding: 0.2em 0.6em 0.3em;\n				font-size: 75%;\n				font-weight: 700;\n				line-height: 1;\n				color: #fff;\n				text-align: center;\n				white-space: nowrap;\n				vertical-align: baseline;\n				border-radius: 0.25em;\n			}\n			.label:empty {\n				display: none;\n			}\n			a.label:focus, a.label:hover {\n				color: #fff;\n				text-decoration: none;\n				cursor: pointer;\n			}\n			.label-default {\n				background-color: #ab0520;\n			}\n			.label-default[href]:focus, .label-default[href]:hover {\n				background-color: #790417;\n			}\n			.label-info {\n				background-color: #81d3eb;\n			}\n			.label-info[href]:focus,\n			.label-info[href]:hover {\n				background-color: #55c4e4;\n			}\n			@-webkit-keyframes progress-bar-stripes {\n				from {\n					background-position: 40px 0;\n				}\n				to {\n					background-position: 0 0;\n				}\n			}\n			@keyframes progress-bar-stripes {\n				from {\n					background-position: 40px 0;\n				}\n				to {\n					background-position: 0 0;\n				}\n			}\n			a {\n				font-weight: 700;\n				-webkit-transition: color 0.1s ease-in-out;\n				transition: color 0.1s ease-in-out;\n			}\n			.page-header {\n				margin: 3rem 0 2rem;\n				line-height: 1.2;\n			}\n			label {\n				color: #49595e;\n			}\n			.label {\n				border-radius: 0;\n			}\n			select {\n				border: 0;\n				outline: 1px solid #cbd1e0;\n				background-color: #fff;\n				border-radius: 0;\n			}\n			.label {\n				font-size: 0.7em;\n				font-weight: 700;\n				line-height: 1.5;\n				color: #fff;\n				margin: 0 0.5em;\n			}\n			img {\n				max-width: 100%;\n				height: auto;\n				border: 0;\n				vertical-align: middle;\n			}\n			a.link-container {\n				color: inherit;\n				display: block;\n				font-weight: inherit;\n			}\n			a.link-container:focus, a.link-container:hover {\n				background-color: #eef1f1;\n				outline: 0;\n				text-decoration: none;\n				color: inherit;\n			}\n			ol, ul {\n    		margin-top: 0;\n    		margin-bottom: 12px;\n			}\n			.h3, .h4, .h5, .h6, h3, h4, h5, h6 {\n				font-weight: 500;\n				line-height: 1.1;\n				color: #49595e;\n			}\n			.h5, h5 {\n				font-size: 16px;\n			}\n			.h4, .h5, .h6, h4, h5, h6 {\n				margin-top: 12px;\n				margin-bottom: 12px;\n			}\n			.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n				font-weight: 500;\n				line-height: 1.1;\n				color: #49595e;\n			}\n			.initialism, .text-uppercase {\n				text-transform: uppercase;\n			}\n			.bold, bold, strong {\n			  font-weight: 700;\n			}\n			b, strong {\n				font-weight: 700;\n			}\n\n\n\n			.arizona-logo {\n				display: inline-block;\n				height: 20px;\n				margin: 19px 0 20px;\n				max-width: 80%;\n				float: left;\n				width: 276px;\n				padding: 0 0 0 0.6rem;\n			}\n			.bottom-buffer-xs-0 {\n				margin-bottom: 0;\n			}\n			.bottom-buffer-1, .bottom-buffer-xs-1 {\n				margin-bottom: 1px;\n			}\n			.bottom-buffer-5, .bottom-buffer-xs-5 {\n				margin-bottom: 5px;\n			}\n			.bottom-buffer-10, .bottom-buffer-xs-10 {\n				margin-bottom: 10px;\n			}\n			.bottom-buffer-15, .bottom-buffer-xs-15 {\n				margin-bottom: 15px;\n			}\n			.bottom-buffer-20, .bottom-buffer-xs-20 {\n				margin-bottom: 20px;\n			}\n			.bottom-buffer-25, .bottom-buffer-xs-25 {\n				margin-bottom: 25px;\n			}\n			.bottom-buffer-30, .bottom-buffer-xs-30 {\n				margin-bottom: 30px;\n			}\n			.bottom-buffer-50, .bottom-buffer-xs-50 {\n				margin-bottom: 50px;\n			}\n			@media (min-width: 768px) {\n				.bottom-buffer-sm-0, .bottom-buffer-sm-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-sm-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-sm-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-sm-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-sm-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-sm-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-sm-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-sm-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-sm-50 {\n					margin-bottom: 50px;\n				}\n			}\n			@media (min-width: 992px) {\n				.bottom-buffer-md-0, .bottom-buffer-md-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-md-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-md-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-md-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-md-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-md-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-md-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-md-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-md-50 {\n					margin-bottom: 50px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.bottom-buffer-lg-0, .bottom-buffer-lg-reset {\n					margin-bottom: 0;\n				}\n				.bottom-buffer-lg-1 {\n					margin-bottom: 1px;\n				}\n				.bottom-buffer-lg-5 {\n					margin-bottom: 5px;\n				}\n				.bottom-buffer-lg-10 {\n					margin-bottom: 10px;\n				}\n				.bottom-buffer-lg-15 {\n					margin-bottom: 15px;\n				}\n				.bottom-buffer-lg-20 {\n					margin-bottom: 20px;\n				}\n				.bottom-buffer-lg-25 {\n					margin-bottom: 25px;\n				}\n				.bottom-buffer-lg-30 {\n					margin-bottom: 30px;\n				}\n				.bottom-buffer-lg-50 {\n					margin-bottom: 50px;\n				}\n			}\n			.top-buffer-xs-0 {\n				margin-top: 0;\n			}\n			.top-buffer-xs-1 {\n				margin-top: 1px;\n			}\n			.top-buffer-xs-5 {\n				margin-top: 5px;\n			}\n			.top-buffer-xs-10 {\n				margin-top: 10px;\n			}\n			.top-buffer-xs-15 {\n				margin-top: 15px;\n			}\n			.top-buffer-xs-20 {\n				margin-top: 20px;\n			}\n			.top-buffer-xs-25 {\n				margin-top: 25px;\n			}\n			.top-buffer-xs-30 {\n				margin-top: 30px;\n			}\n			.top-buffer-xs-50 {\n				margin-top: 50px;\n			}\n			@media (min-width: 768px) {\n				.top-buffer-sm-0, .top-buffer-sm-reset {\n					margin-top: 0;\n				}\n				.top-buffer-sm-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-sm-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-sm-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-sm-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-sm-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-sm-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-sm-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-sm-50 {\n					margin-top: 50px;\n				}\n			}\n			@media (min-width: 992px) {\n				.top-buffer-md-0, .top-buffer-md-reset {\n					margin-top: 0;\n				}\n				.top-buffer-md-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-md-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-md-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-md-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-md-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-md-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-md-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-md-50 {\n					margin-top: 50px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.top-buffer-lg-0, .top-buffer-lg-reset {\n					margin-top: 0;\n				}\n				.top-buffer-lg-1 {\n					margin-top: 1px;\n				}\n				.top-buffer-lg-5 {\n					margin-top: 5px;\n				}\n				.top-buffer-lg-10 {\n					margin-top: 10px;\n				}\n				.top-buffer-lg-15 {\n					margin-top: 15px;\n				}\n				.top-buffer-lg-20 {\n					margin-top: 20px;\n				}\n				.top-buffer-lg-25 {\n					margin-top: 25px;\n				}\n				.top-buffer-lg-30 {\n					margin-top: 30px;\n				}\n				.top-buffer-lg-50 {\n					margin-top: 50px;\n				}\n			}\n			.right-buffer-xs-0 {\n				padding-right: 0;\n			}\n			.right-buffer-xs-1 {\n				padding-right: 1px;\n			}\n			.right-buffer-xs-5 {\n				padding-right: 5px;\n			}\n			.right-buffer-xs-10 {\n				padding-right: 10px;\n			}\n			.right-buffer-xs-15 {\n				padding-right: 15px;\n			}\n			.right-buffer-xs-20 {\n				padding-right: 20px;\n			}\n			.right-buffer-xs-30 {\n				padding-right: 30px;\n			}\n			.left-buffer-xs-0 {\n				padding-left: 0;\n			}\n			.left-buffer-xs-1 {\n				padding-left: 1px;\n			}\n			.left-buffer-xs-5 {\n				padding-left: 5px;\n			}\n			.left-buffer-xs-10 {\n				padding-left: 10px;\n			}\n			.left-buffer-xs-15 {\n				padding-left: 15px;\n			}\n			.left-buffer-xs-20 {\n				padding-left: 20px;\n			}\n			.left-buffer-xs-30 {\n				padding-left: 30px;\n			}\n			@media (min-width: 768px) {\n				.right-buffer-sm-0 {\n					padding-right: 0;\n				}\n				.right-buffer-sm-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-sm-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-sm-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-sm-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-sm-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-sm-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-sm-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-sm-0 {\n					padding-left: 0;\n				}\n				.left-buffer-sm-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-sm-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-sm-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-sm-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-sm-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-sm-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-sm-30 {\n					padding-left: 30px;\n				}\n			}\n			@media (min-width: 992px) {\n				.right-buffer-md-0 {\n					padding-right: 0;\n				}\n				.right-buffer-md-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-md-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-md-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-md-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-md-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-md-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-md-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-md-0 {\n					padding-left: 0;\n				}\n				.left-buffer-md-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-md-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-md-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-md-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-md-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-md-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-md-30 {\n					padding-left: 30px;\n				}\n			}\n			@media (min-width: 1200px) {\n				.right-buffer-lg-0 {\n					padding-right: 0;\n				}\n				.right-buffer-lg-1 {\n					padding-right: 1px;\n				}\n				.right-buffer-lg-5 {\n					padding-right: 5px;\n				}\n				.right-buffer-lg-10 {\n					padding-right: 10px;\n				}\n				.right-buffer-lg-15 {\n					padding-right: 15px;\n				}\n				.right-buffer-lg-reset {\n					padding-right: 16px;\n				}\n				.right-buffer-lg-20 {\n					padding-right: 20px;\n				}\n				.right-buffer-lg-30 {\n					padding-right: 30px;\n				}\n				.left-buffer-lg-0 {\n					padding-left: 0;\n				}\n				.left-buffer-lg-1 {\n					padding-left: 1px;\n				}\n				.left-buffer-lg-5 {\n					padding-left: 5px;\n				}\n				.left-buffer-lg-10 {\n					padding-left: 10px;\n				}\n				.left-buffer-lg-15 {\n					padding-left: 15px;\n				}\n				.left-buffer-lg-reset {\n					padding-left: 16px;\n				}\n				.left-buffer-lg-20 {\n					padding-left: 20px;\n				}\n				.left-buffer-lg-30 {\n					padding-left: 30px;\n				}\n			}\n			.mb-0, .my-0 {\n				margin-bottom: 0!important;\n				margin-bottom: 0!important;\n			}\n			.mt-0, .my-0 {\n				margin-top: 0!important;\n				margin-top: 0!important;\n			}\n			.text-muted {\n				color: #495057;\n			}\n			.container-collapsed .column {\n				min-height: initial;\n			}\n			.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {\n    		display: none!important;\n			}\n			.small, small {\n				font-size: 87%;\n			}\n			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span, html.ua-brand-icons.external-links [target=_blank] {\n				padding-right: .8em;\n			}\n			html.external-links .pseudo-link:after, html.external-links [target=_blank]:after {\n				border-bottom: .3125em solid transparent;\n				border-left: .3125em solid transparent;\n				border-right: .3125em solid #8f1124;\n				border-top: .3125em solid #8f1124;\n				content: \'\';\n				display: inline-block;\n				height: 0;\n				position: relative;\n				top: 0;\n				width: 0;\n				right: 0;\n			}\n			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span:after, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span:after, html.ua-brand-icons.external-links [target=_blank]:after {\n				content: "\\E648";\n				font-family: ua-brand-symbols;\n				font-size: .7em;\n				border-width: 0;\n			}\n			#footer_site {\n				background: #f4ede5;\n				padding: 2.5rem 0;\n				color: #49595e;\n				line-height: 1.5;\n			}\n			#footer_site hr {\n				background: 0 0;\n			}\n			#footer_site a {\n				color: #8B0015;\n				text-decoration: underline;\n			}\n			#footer_site ul {\n				display: inline-block;\n				margin: 0;\n				padding: 1rem 0 0;\n			}\n			#block-bean-uaqs-footer-links-bean-informa h5 strong{\n				font-size: 16px;\n				font-weight: 500;\n				color: black;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul {\n				display: inline-block;\n				padding: 0;\n				margin: 0 0 12px;\n				text-align: center;\n			}\n			@media (min-width: 768px) {\n				text-align: left;\n			}\n			#footer_site ul>li {\n				border-right: 1px solid #e2e9eb;\n				display: inline-block;\n				list-style: none;\n				padding: 0 .75rem;\n			}\n			#footer_site ul>li.last {\n				border-right: 0;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul li {\n				border-right: 0px solid hsl(196,8%,74%);\n				display: inline-block;\n				list-style: none;\n				padding: 0 0 0 .75rem;\n			}\n			#footer_site #block-bean-uaqs-footer-links-bean-main ul li a {\n				color: hsl(0,0%,20%);\n				text-decoration: none;\n				text-transform: none;\n				font-size: 14px;\n			}\n\n			#footer_site #footer_sub ul {\n				display: block;\n				margin: 0;\n				padding: 0 0 0;\n				width: 100%;\n			}\n			#footer_site #footer_sub .two-col-menu ul {\n				-moz-column-count: 2;\n				-moz-column-gap: 2em;\n				-webkit-column-count: 2;\n				-webkit-column-gap: 2em;\n				column-count: 2;\n				column-gap: 2em;\n				display: block;\n			}\n			#footer_site #footer_sub ul li {\n				border-right: 0px solid #B6BEC1;\n				display: block;\n				list-style: none;\n				padding: 0;\n				margin: 0;\n			}\n			#footer_site ul li a {\n				color: #49595e;\n				font-weight: 500;\n				display: block;\n				text-decoration: none;\n				font-size: 16px;\n				line-height: inherit;\n				vertical-align: top;\n				text-transform: none;\n				margin: 7px 0;\n			}\n			#footer_sub ul.menu li a i {\n				margin: 0 .5em 0 0;\n			}\n			.bg-warm-gray {\n				background-color: #f4ede5;\n			}\n			.paragraphs-item-uaqs-full-width-bg-wrapper {\n				margin-top: -1px;\n			}\n			.background-wrapper {\n				padding: 3rem 0;\n			}\n			#footer_sub .background-wrapper {\n			  padding: 0;\n			  margin: 0 -16px;\n			}\n\n\n\n\n		'
        ]);
        return Mt = function() {
            return t;
        }, t;
    }
    function It() {
        var t = a([
            '\n			<footer id="footer_site" class="page page-row" role="contentinfo">\n				<div class="region region-footer">\n					<div class="container">\n						<div class="row">\n							<div class="page-row-padding-top page-row-padding-bottom"></div>\n							<div class="page-row-padding-top page-row-padding-bottom"></div>\n							<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 text-center-xs text-left-not-xs">\n								<div class="row bottom-buffer-30">\n									<div class="col-xs-12">\n										<a href="https://www.arizona.edu/" title="Home" class="remove-external-link-icon active" @click="',
            '"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="Home"></a>              </div>\n									</div>\n								</div>\n								<!-- Add the extra clearfix for only the required viewport -->\n								<div class="clearfix visible-xs-block"></div>\n								<div class="col-xs-12 col-sm-7 col-md-8 col-lg-8">\n									<div id="block-bean-uaqs-footer-links-bean-main" class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs" role="complementary">\n										<ul class="menu">\n											<li class="menu__item is-leaf first leaf"><a href="https://talent.arizona.edu" title="" class="menu__link" @click="',
            '">Employment</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://cirt.arizona.edu" title="" class="menu__link" @click="',
            '">Emergency Information</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/title-ix" title="" class="menu__link" @click="',
            '">Title IX / Non-Discrimination</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-safety" title="" class="menu__link" @click="',
            '">Campus Safety</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://cirt.arizona.edu/ualert" class="menu__link" @click="',
            '">UAlert</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/copyright" title="" class="menu__link" @click="',
            '">Copyright</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-accessibility" title="" class="menu__link" @click="',
            '">Campus Accessibility</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/contact-us" title="" class="menu__link" @click="',
            '">Contact Us</a></li>\n											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/website-feedback" title="" class="menu__link" @click="',
            '">Feedback</a></li>\n										</ul>\n									</div>\n									<div id="block-bean-footer-university-address" class="block block-bean last even" role="complementary">\n										<div class="entity entity-bean bean-uaqs-contact-summary clearfix" about="/block/footer---university-address">\n											<div class="content">\n												<p class="text-center text-right-sm text-right-md text-right-lg"><span>\n												The University of Arizona | Tucson, Arizona 85721 | </span><span>\n												<a href="tel:520-621-2211">520-621-2211</a></span></p>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="col-xs-12"><hr></div>\n							</div>\n						</div>\n					</div>\n					<div id="footer_sub" class="region region-footer-sub">\n						<div class="container">\n							<div class="row">\n									<div id="block-bean-uaqs-footer-links-bean-informa" class="block block-bean first odd col-xs-12 col-sm-4 col-md-3 col-lg-3" role="complementary">\n										<h5><strong class="text-uppercase">Information for</strong></h5>\n										<ul class="menu">\n											<li class="menu__item is-leaf first leaf"><a href="http://www.arizona.edu/future-students" class="menu__link" @click="',
            '">Future Students</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/students" title="" class="menu__link" @click="',
            '">Current Students</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/faculty-staff" title="" class="menu__link" @click="',
            '">Faculty &amp; Staff</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/alumni-donors" title="" class="menu__link" @click="',
            '">Alumni &amp; Donors</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/parents-visitors" title="" class="menu__link" @click="',
            '">Parents &amp; Visitors</a></li>\n											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/corporations-businesses" title="" class="menu__link" @click="',
            '">Corporations &amp; Businesses</a></li>\n										</ul>\n									</div>\n									<div class="clearfix visible-xs-block col-xs-12">\n										<hr>\n									</div>\n									<div id="block-bean-uaqs-footer-links-bean-topics" class="block block-bean even col-xs-12 col-sm-8 col-md-5 two-col-menu" role="complementary">\n										<h5><strong class="text-uppercase">Topics</strong></h5>\n										<ul class="menu">\n											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/about" title="" class="menu__link" @click="',
            '">About the University</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/academics" title="" class="menu__link" @click="',
            '">Academics</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/arts-museums" title="" class="menu__link" @click="',
            '">Arts &amp; Museums</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/athletics-recreation" title="" class="menu__link" @click="',
            '">Athletics &amp; Recreation</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/colleges-schools" title="" class="menu__link" @click="',
            '">Colleges, Schools, Departments</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://diversity.arizona.edu" class="menu__link" @click="',
            '">Diversity</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.environment.arizona.edu" title="" class="menu__link" @click="',
            '">Environment &amp; Sustainability</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://international.arizona.edu" class="menu__link" @click="',
            '">Global Engagement</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/health-sciences" title="" class="menu__link" @click="',
            '">Health &amp; Medical</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/libraries" title="" class="menu__link" @click="',
            '">Libraries</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://uaforyou.arizona.edu" class="menu__link" @click="',
            '">Outreach &amp; Extension</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://research.arizona.edu" class="menu__link" @click="',
            '">Research &amp; Innovation</a></li>\n											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/purpose-mission-values" title="" class="menu__link" @click="',
            '">Purpose, Mission &amp; Values</a></li>\n										</ul>\n									</div>\n									<div class="clearfix visible-xs-block col-xs-12">\n										<hr>\n									</div>\n									<div class="clearfix visible-sm-block col-xs-12">\n										<hr>\n									</div>\n									<div id="block-bean-uaqs-footer-links-bean-resourc" class="block block-bean odd col-xs-6 col-sm-4 col-md-2 clearfix" role="complementary">\n										<h5><strong class="text-uppercase">Resources</strong></h5>\n										<ul class="menu"><li class="menu__item is-leaf first leaf"><a href="http://directory.arizona.edu/index" class="menu__link" @click="',
            '"><i class="ua-brand-directory"></i>A-Z Index</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/calendars-events" title="" class="menu__link" @click="',
            '"><i class="ua-brand-calendar"></i>Calendars</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://map.arizona.edu" class="menu__link" @click="',
            '"><i class="ua-brand-campus-map"></i>Campus Map</a></li>\n											<li class="menu__item is-leaf leaf"><a href="https://news.arizona.edu" class="menu__link" @click="',
            '"><i class="ua-brand-news"></i>News</a></li>\n											<li class="menu__item is-leaf leaf"><a href="http://directory.arizona.edu/phonebook" class="menu__link" @click="',
            '"><i class="ua-brand-directory"></i>Phonebook</a></li>\n											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/weather" title="" class="menu__link" @click="',
            '"><i class="ua-brand-weather"></i>Weather</a></li>\n										</ul>\n									</div>\n									<div id="block-uaqs-social-media-uaqs-social-media-links" class="block block-uaqs-social-media even col-xs-6 col-sm-4 col-md-2" role="complementary">\n										<h5><strong class="text-uppercase">Connect</strong></h5>\n										<div class="content">\n											<ul id="social-media-links">\n												<li class="uaqs-social-media"><a href="https://facebook.com/uarizona" target="_blank" title="Click here to visit our Facebook page" rel="noopener noreferrer" @click="',
            '"><i class="ua-brand-facebook"></i>Facebook</a></li>\n												<li class="uaqs-social-media"><a href="https://twitter.com/uarizona" target="_blank" title="Click here to visit our Twitter page" rel="noopener noreferrer" @click="',
            '"><i class="ua-brand-twitter"></i>Twitter</a></li>\n												<li class="uaqs-social-media"><a href="https://instagram.com/uarizona" target="_blank" title="Click here to visit our Instagram page" rel="noopener noreferrer" @click="',
            '"><i class="ua-brand-instagram"></i>Instagram</a></li>\n												<li class="uaqs-social-media"><a href="https://linkedin.com/edu/university-of-arizona-17783" target="_blank" title="Click here to visit our LinkedIn page" rel="noopener noreferrer" @click="',
            '"><i class="ua-brand-linkedin"></i>LinkedIn</a></li>\n												<li class="uaqs-social-media"><a href="https://youtube.com/universityofarizona" target="_blank" title="Click here to visit our YouTube page" rel="noopener noreferrer" @click="',
            '"><i class="ua-brand-youtube"></i>YouTube</a></li>\n											</ul>\n										</div>\n									</div>\n									<div id="block-bean-uagc-footer" class="block block-bean last odd" role="complementary">\n										<div class="entity entity-bean bean-uaqs-flexible-block clearfix" about="/block/uagc-footer">\n											<div class="content"></div>\n										</div>\n									</div>\n								</div>\n								<div class="entity entity-paragraphs-item paragraphs-item-uaqs-full-width-bg-wrapper mb-0  background-wrapper bg-warm-gray">\n									<div class="container">\n										<div class="row">\n											<div class="col-sm-12">\n												<hr>\n												<p class="text-align-center text-muted mt-0 mb-0"><em>We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.</em></p>\n												<hr>\n												<p class="text-align-center text-muted mt-0 mb-0">We are affiliated with the&nbsp;<a class="text-muted" href="https://www.uagc.edu" target="_blank" @click="',
            '">University of Arizona Global Campus</a></p>\n											</div>\n										</div>\n									</div>\n								</div><!--Close wrapper-->\n								<div class="container container-collapsed">\n									<div class="row">\n										<div class="column col-sm-12"><div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="row">\n							<div class="col-xs-12 text-center">\n								<hr>\n								<p class="small"><a href="https://www.arizona.edu/information-security-privacy" target="_blank" @click="',
            '">University Information Security and Privacy</a></p>\n								<p class="copyright small">\xa9 2021 The Arizona Board of Regents on behalf of <a href="https://www.arizona.edu" target="_blank" @click="',
            '">The University of Arizona</a>.</p>\n							</div>\n						</div>\n					</div>\n				</div>\n			</footer>\n		'
        ]);
        return It = function() {
            return t;
        }, t;
    }
    var jt = function(n) {
        "use strict";
        r(o, n);
        var i = u(o);
        function o() {
            return t(this, o), i.apply(this, arguments);
        }
        return e(o, [
            {
                key: "render",
                value: function() {
                    return ft(It(), function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    }, function(t) {
                        qt(t, "az-footer");
                    });
                }
            }
        ], [
            {
                key: "styles",
                get: function() {
                    return Ut(Mt());
                }
            }
        ]), o;
    }(Vt);
    customElements.get("az-footer") || customElements.define("az-footer", jt);
}();

},{}]},["cw9uS","jmYii"], "jmYii", "parcelRequirefbca")

//# sourceMappingURL=index.bc9e1f3f.js.map
