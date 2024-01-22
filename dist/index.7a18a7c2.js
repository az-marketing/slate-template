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
})({"kVeB1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f24a5e087a18a7c2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ef18b":[function(require,module,exports) {
var _azRedbar = require("./az-redbar");
var _azMainMenu = require("./az-main-menu");
var _azMiddleHeader = require("./az-middle-header");

},{"./az-redbar":"bVnpV","./az-main-menu":"2IT1o","./az-middle-header":"hfnYc"}],"bVnpV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */ parcelHelpers.export(exports, "AzRedbar", ()=>AzRedbar);
var _lit = require("lit");
var _decoupledMenuParser = require("@drupal/decoupled-menu-parser");
var _azButton = require("./az-button");
var _shadowEventsDatalayer = require("./mixins/shadow-events-datalayer");
class AzRedbar extends (0, _lit.LitElement) {
    static styles = (0, _lit.css)`
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
	`;
    static properties = {
        /**
		 * URL of target site
		 */ thisUrl: {
            type: String
        },
        /**
		 * Base URL of menu endpoint
		 */ baseUrl: {
            type: String
        },
        /**
		 * Machine name of menu
		 */ menuId: {
            type: String
        },
        /**
		 * Branding heading for the menu
		 */ branding: {
            type: String
        },
        /**
		 * An array of objects containing data for the menu tree
		 */ tree: {
            type: Array
        },
        /**
		 * Loading state
		 */ isLoading: {
            type: Boolean,
            attribute: false
        },
        /**
		 * Loading message
		 */ loadingMessage: {
            type: String
        }
    };
    constructor(){
        super();
        this.tree = [];
        this.isLoading = false;
        this.loadingMessage = "Loading...";
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.baseUrl && this.menuId) this.fetchData(this.baseUrl, this.menuId);
    }
    static azMenuLevelTemplate(levels) {
        return (0, _lit.html)` ${levels} `;
    }
    static openMenu(e) {
        e.preventDefault();
        const { target } = e;
        const isExpanded = target.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            target.setAttribute("aria-expanded", "false");
            target.nextElementSibling.classList.remove("show");
        } else {
            target.setAttribute("aria-expanded", "true");
            target.nextElementSibling.classList.add("show");
        }
    }
    azMenuParentTemplate(title, children) {
        return (0, _lit.html)`
			<button
				@click="${AzRedbar.openMenu}"
				role="button"
				aria-expanded="false"
				aria-haspopup="true"
				href="#"
				class="resource-menu btn btn-outline-red"
			>
				${title}
			</button>
			<div class="dropdown-menu dropdown-menu pull-right">
				${this.renderAzMenuLevel(children)}
			</div>
		`;
    }
    static azMenuLinkTemplate(title, href) {
        return (0, _lit.html)`<div class="dropdown-item">
			<a
				href=${href}
				@click="${(e)=>{
            (0, _shadowEventsDatalayer.eventDataLayerPush)(e, "az-redbar");
        }}"
				>${title}</a
			>
		</div>`;
    }
    static azMenuItemTemplate(title) {
        return (0, _lit.html)`${title}`;
    }
    renderAzMenuLevel(level) {
        const levels = level.map((item)=>this.renderAzMenuItem(item));
        return AzRedbar.azMenuLevelTemplate(levels);
    }
    renderAzMenuItem(item) {
        let titleTest = item && item.link && item.link.attributes && item.link.attributes.title;
        let hrefTest = item && item.link && item.link.href;
        let childrenTest = item && item.children;
        const title = titleTest ? item.link.attributes.title : undefined;
        let href = hrefTest ? item.link.href : undefined;
        const children = childrenTest ? item.children : undefined;
        if (children.length) return this.azMenuParentTemplate(title, children);
        if (href) {
            href = href.charAt(0) === "/" ? this.thisUrl + href : href;
            return AzRedbar.azMenuLinkTemplate(title, href);
        }
        return AzRedbar.azMenuItemTemplate(title);
    }
    fetchData(baseURL, menuID) {
        this.isLoading = true;
        const url = `${baseURL}/system/menu/${menuID}/linkset`;
        fetch(url, {}).then((response)=>{
            if (response.ok) return response.json();
            this.isLoading = false;
            throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
        }).then((json)=>{
            try {
                const denormalized = (0, _decoupledMenuParser.denormalize)(json, menuID);
                this.tree = denormalized.tree;
            } catch (e) {
                throw new Error("Unable to denormalize menu.");
            }
            this.isLoading = false;
        });
    }
    render() {
        return (0, _lit.html)`
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
								${this.isLoading ? (0, _lit.html)`
											<button
												role="button"
												aria-expanded="false"
												aria-haspopup="true"
												href="#"
												class="resource-menu btn btn-outline-red"
											>
												<slot name="loading">${this.loadingMessage}</slot>
											</button>
									  ` : this.renderAzMenuLevel(this.tree)}
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
		`;
    }
}
customElements.get("az-redbar") || customElements.define("az-redbar", AzRedbar);

},{"lit":"4antt","@drupal/decoupled-menu-parser":"jNybe","./az-button":"9jpdB","./mixins/shadow-events-datalayer":"2ihYi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>b);
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: r, getOwnPropertyNames: h, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), y = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class b extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? y;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...h(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$Eg = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$ES(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$E_ ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$E_?.delete(t);
    }
    _$ES() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$E_?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$E_?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EO(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f)(this[t], s)) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$Eg = this._$EP());
    }
    C(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$ET ??= new Set).add(t);
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$Eg;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.C(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$E_?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$Ej();
        } catch (s) {
            throw t = !1, this._$Ej(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$E_?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ej() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$Eg;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$ET &&= this._$ET.forEach((t)=>this._$EO(t, this[t])), this._$Ej();
    }
    updated(t) {}
    firstUpdated(t) {}
}
b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
}, b[d("elementProperties")] = new Map, b[d("finalized")] = new Map, p?.({
    ReactiveElement: b
}), (a.reactiveElementVersions ??= []).push("2.0.3");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>w);
parcelHelpers.export(exports, "nothing", ()=>T);
parcelHelpers.export(exports, "render", ()=>j);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${(Math.random() + "").slice(9)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), A = new WeakMap, E = r.createTreeWalker(r, 129);
function C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = P(t, s);
        if (this.el = V.createElement(f, n), E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? k : "?" === e[1] ? H : "@" === e[1] ? I : R
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function N(t, i, s = t, e) {
    if (i === w) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
}
class S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        E.currentNode = e;
        let h = E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = E.nextNode(), o++);
        }
        return E.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : u(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new S(e, this), s = t.u(this.options);
            t.p(i), this.$(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new V(t)), i;
    }
    T(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new M(this.k(l()), this.k(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = T;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = N(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== w, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = N(this, e[s + n], i, n), r === w && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === T ? t = T : t !== T && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.O(t);
    }
    O(t) {
        t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class k extends R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    O(t) {
        this.element[this.name] = t === T ? void 0 : t;
    }
}
class H extends R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    O(t) {
        this.element.toggleAttribute(this.name, !!t && t !== T);
    }
}
class I extends R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = N(this, t, i, 0) ?? T) === w) return;
        const s = this._$AH, e = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== T && (s === T || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        N(this, t);
    }
}
const z = {
    j: e,
    P: h,
    A: o,
    C: 1,
    M: P,
    L: S,
    R: u,
    V: N,
    D: M,
    I: R,
    H,
    N: I,
    U: k,
    B: L
}, Z = t.litHtmlPolyfillSupport;
Z?.(V, M), (t.litHtmlVersions ??= []).push("3.1.1");
const j = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new M(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "_$LE", ()=>o);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s._$litElement$ = !0, s["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: s
});
const r = globalThis.litElementPolyfillSupport;
r?.({
    LitElement: s
});
const o = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.0.3");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNybe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.denormalize = exports.parse = void 0;
var menu_1 = require("edb09cf8fce140f3");
/**
 * Denormalizes a set of links into an instance of a Menu.
 * {@inheritDoc Menu.from}
 * {@see {@link NormalizedMenuInterface}}
 */ function denormalize(normalized, menuID) {
    return menu_1.Menu.from(normalized, menuID);
}
exports.denormalize = denormalize;
/**
 * Parses Drupal menu JSON into a Menu instance.
 * {@see {@link denormalize}}
 */ function parse(json, menuID) {
    return denormalize(JSON.parse(json), menuID);
}
exports.parse = parse;

},{"edb09cf8fce140f3":"GMWcq"}],"GMWcq":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = void 0;
var linkset_1 = require("7d0854a8e0f619cb");
var menu_element_1 = require("46e00cbabc28d811");
var Menu = /** @class */ function() {
    function Menu(machineName, linkset) {
        this.id = machineName;
        this.linkset = linkset;
        this.elements = this.linkset.elements;
        this.size = this.linkset.size;
        this.tree = (0, menu_element_1.buildTree)(__spreadArray([], this.elements, true));
    }
    Menu.prototype[Symbol.iterator] = function() {
        var elems = this.elements;
        var pointer = 0;
        return {
            next: function() {
                if (pointer < elems.length) return {
                    value: elems[pointer++],
                    done: false
                };
                else return {
                    value: undefined,
                    done: true
                };
            }
        };
    };
    /**
     * {@inheritDoc LinksetInterface.hasLinkTo}
     */ Menu.prototype.hasLinkTo = function(relationType) {
        return this.linkset.hasLinkTo(relationType);
    };
    /**
     * {@inheritDoc LinksetInterface.linkTo}
     */ Menu.prototype.linkTo = function(relationType) {
        return this.linkset.linkTo(relationType);
    };
    /**
     * {@inheritDoc LinksetInterface.linksTo}
     */ Menu.prototype.linksTo = function(relationType) {
        return new Menu(this.id, this.linkset.linksTo(relationType));
    };
    /**
     * {@inheritDoc LinksetInterface.linksFrom}
     */ Menu.prototype.linksFrom = function(anchor) {
        return new Menu(this.id, this.linkset.linksTo(anchor));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttribute}
     */ Menu.prototype.linksWithAttribute = function(name) {
        return new Menu(this.id, this.linkset.linksWithAttribute(name));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttributeValue}
     */ Menu.prototype.linksWithAttributeValue = function(name, value) {
        return new Menu(this.id, this.linkset.linksWithAttributeValue(name, value));
    };
    /**
     * Creates a new menu from a normalized linkset.
     * @param normalized
     *   A normalized linkset.
     * @param menuID
     *   A menu machine name.o
     * @returns a new Menu object containing only link elements belonging to the given menu.
     */ Menu.from = function(normalized, menuID) {
        var linkset = (0, linkset_1.denormalize)(normalized);
        var machineNames = [];
        if (!menuID) linkset.linksWithAttribute("machine-name").elements.forEach(function(link) {
            if (!machineNames.includes(link.attributes["machine-name"][0])) machineNames.push(link.attributes["machine-name"][0]);
        });
        else machineNames.push(menuID);
        var menus = machineNames.map(function(machineName) {
            return new Menu(machineName, linkset.linksWithAttributeValue("machine-name", machineName));
        });
        return menuID ? menus.shift() : menus;
    };
    return Menu;
}();
exports.Menu = Menu;

},{"7d0854a8e0f619cb":"jGyDh","46e00cbabc28d811":"2pasX"}],"jGyDh":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.denormalize = exports.parse = void 0;
var linkset_1 = require("8e45e105b2f16e74");
var link_1 = require("3f7f0a7716fef8f2");
/**
 * Denormalizes a set of links into an instance of a Linkset.
 * {@inheritDoc Linkset.from}
 * {@see {@link NormalizedLinksetInterface}}
 */ function denormalize(normalized) {
    var links = [];
    normalized.linkset.forEach(function(contextObject) {
        var anchor = contextObject.anchor, rels = __rest(contextObject, [
            "anchor"
        ]);
        Object.keys(rels).forEach(function(rel) {
            contextObject[rel].forEach(function(targetObject) {
                links.push(new link_1.Link(__assign({
                    anchor: anchor,
                    rel: rel
                }, targetObject)));
            });
        });
    });
    return new linkset_1.Linkset(links);
}
exports.denormalize = denormalize;
/**
 * Parses an application/linkset+json document into a Linkset instance.
 * {@see {@link denormalize}}
 */ function parse(json) {
    return denormalize(JSON.parse(json));
}
exports.parse = parse;

},{"8e45e105b2f16e74":"ggoA5","3f7f0a7716fef8f2":"5BAQn"}],"ggoA5":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Linkset = void 0;
/**
 * A set of links.
 * @internal
 */ var Linkset = /** @class */ function() {
    function Linkset(links) {
        this.elements = links;
        this.size = links.length;
    }
    /**
     * {@inheritDoc LinksetInterface.hasLinkTo}
     */ Linkset.prototype.hasLinkTo = function(relationType) {
        return this.elements.some(function(link) {
            return link.rel === relationType;
        });
    };
    /**
     * {@inheritDoc LinksetInterface.linkTo}
     */ Linkset.prototype.linkTo = function(relationType) {
        return this.elements.find(function(link) {
            return link.rel === relationType;
        });
    };
    /**
     * {@inheritDoc LinksetInterface.linksTo}
     */ Linkset.prototype.linksTo = function(relationType) {
        return new Linkset(this.elements.filter(function(link) {
            return link.rel === relationType;
        }));
    };
    /**
     * {@inheritDoc LinksetInterface.linksFrom}
     */ Linkset.prototype.linksFrom = function(anchor) {
        return new Linkset(this.elements.filter(function(link) {
            return link.anchor === anchor;
        }));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttribute}
     */ Linkset.prototype.linksWithAttribute = function(name) {
        return new Linkset(this.elements.filter(function(link) {
            return Object.prototype.hasOwnProperty.call(link.attributes, name);
        }));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttributeValue}
     */ Linkset.prototype.linksWithAttributeValue = function(name, value) {
        return new Linkset(this.linksWithAttribute(name).elements.filter(function(link) {
            var values = Array.isArray(link.attributes[name]) ? link.attributes[name] : [
                link.attributes[name]
            ];
            return values.some(function(v) {
                return isAttributeEqual(v, value);
            });
        }));
    };
    /**
     * Implements the iterable protocol.
     */ Linkset.prototype[Symbol.iterator] = function() {
        var elems = this.elements;
        var pointer = 0;
        return {
            next: function() {
                if (pointer < elems.length) return {
                    value: elems[pointer++],
                    done: false
                };
                else return {
                    value: undefined,
                    done: true
                };
            }
        };
    };
    /**
     * {@inheritDoc NormalizableLinksetInterface.normalize}
     */ Linkset.prototype.normalize = function() {
        var contexts = {};
        this.elements.forEach(function(_a) {
            var anchor = _a.anchor, rel = _a.rel, target = __rest(_a, [
                "anchor",
                "rel"
            ]);
            if (!Object.hasOwnProperty.call(contexts, anchor)) contexts[anchor] = {};
            if (!Object.hasOwnProperty.call(contexts[anchor], rel)) contexts[anchor][rel] = [];
            var href = target.href, attributes = target.attributes;
            var targetObject = __assign({
                href: href
            }, attributes);
            contexts[anchor][rel].push(targetObject);
        });
        return {
            linkset: Object.entries(contexts).reduce(function(carry, _a) {
                var anchor = _a[0], rels = _a[1];
                return __spreadArray(__spreadArray([], carry), [
                    __assign({
                        anchor: anchor
                    }, rels)
                ]);
            }, [])
        };
    };
    return Linkset;
}();
exports.Linkset = Linkset;
/**
 * Checks target attribute values for equality, respecting that a value may be internationalized.
 * @param a - A target attribute value.
 * @param b - Another target attribute value.
 * @returns boolean
 *   True if both values are strictly equivalent. If the input values are internationalized, both the value and language
 *   must match.
 * {@see {@link TargetAttributeValue}}
 */ function isAttributeEqual(a, b) {
    if (typeof a !== typeof b) return false;
    if (typeof a === "string" && typeof b === "string") return a === b;
    return a.value === a.value && a.language === a.language;
}

},{}],"5BAQn":[function(require,module,exports) {
"use strict";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Link = void 0;
/**
 * A web link.
 * @internal
 */ var Link = /** @class */ function() {
    /**
     * Constructs a new link.
     * @param parameters - the link's parameters.
     * @see {@link LinkParameters}
     */ function Link(parameters) {
        var anchor = parameters.anchor, rel = parameters.rel, href = parameters.href, attributes = __rest(parameters, [
            "anchor",
            "rel",
            "href"
        ]);
        this.anchor = anchor;
        this.rel = rel;
        this.href = href;
        this.attributes = attributes;
    }
    return Link;
}();
exports.Link = Link;

},{}],"2pasX":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildTree = exports.hierarchyCompare = exports.MenuElement = void 0;
var MenuElement = /** @class */ function() {
    function MenuElement(link, children) {
        if (children === void 0) children = [];
        this.link = link;
        this.children = buildTree(__spreadArray([], children, true));
    }
    Object.defineProperty(MenuElement.prototype, "title", {
        get: function() {
            return this.link.attributes.title;
        },
        enumerable: false,
        configurable: true
    });
    return MenuElement;
}();
exports.MenuElement = MenuElement;
function hierarchyCompare(a, b) {
    if (a.length === 0 && b.length === 0) return 0; // Nothing to sort
    if (a.length === 0 && b.length > 0) return -1; // End of A hierarchy
    if (a.length > 0 && b.length === 0) return 1; // End of B hierarchy
    // Compare the end of both hierarchies
    if (a.length === 1 && b.length === 1) return parseInt(a[0]) - parseInt(b[0]);
    // If the top levels are equal, compare the children
    if (a[0] === b[0]) return hierarchyCompare(a.slice(1), b.slice(1));
    // Compare the top levels
    return parseInt(a[0]) - parseInt(b[0]);
}
exports.hierarchyCompare = hierarchyCompare;
function buildTree(links) {
    // If there aren't any links or there is only one link, take a shortcut and return early.
    if (links.length < 2) return links.length ? [
        new MenuElement(links.shift())
    ] : [];
    // Sorting by the hierarchy key is essential to capture link order and for the algorithm below to correctly build
    // subtrees.
    links.sort(function(a, b) {
        return hierarchyCompare(a.attributes["hierarchy"], b.attributes["hierarchy"]);
    });
    var elements = [];
    var last;
    var children = [];
    do {
        var curr = links.shift();
        if (last) {
            if (curr.attributes["hierarchy"].length > last.attributes["hierarchy"].length) children.push(curr);
            else {
                elements.push(new MenuElement(last, children));
                last = curr;
                children = [];
            }
        } else last = curr;
    }while (links.length);
    elements.push(new MenuElement(last, children));
    return elements;
}
exports.buildTree = buildTree;

},{}],"9jpdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AzButton", ()=>AzButton);
var _lit = require("lit");
var _delegateFocusMixinJs = require("./mixins/delegate-focus-mixin.js");
var _azButtonCssJs = require("./styles/az-button-css.js");
var _azButtonCssJsDefault = parcelHelpers.interopDefault(_azButtonCssJs);
var _shadowEventsDatalayer = require("./mixins/shadow-events-datalayer");
class AzButton extends (0, _delegateFocusMixinJs.DelegateFocusMixin)((0, _lit.LitElement)) {
    static properties = {
        /**
		 * Set to URL to render <a> element styled as button.
		 */ link: {
            type: String,
            reflect: true
        },
        target: {
            type: String,
            reflect: true
        },
        toggle: {
            type: String,
            reflect: true
        },
        event: {
            type: String,
            reflect: true
        },
        elmid: {
            type: String,
            reflect: true
        },
        value: {
            type: String,
            reflect: true
        }
    };
    static get styles() {
        return [
            (0, _azButtonCssJsDefault.default)
        ];
    }
    constructor(){
        super();
    }
    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
    }
    changeAttributes() {
        this.setAttribute("closed", "true");
        this.setAttribute("aria-expanded", "true");
        this.requestUpdate();
    }
    _handleClick(e) {
        (0, _shadowEventsDatalayer.eventDataLayerPush)(e, "");
        if (this.event) {
            let event = new Event(this.event);
            document.querySelector(this.target).dispatchEvent(event);
            return;
        } else {
            let openAzOffCanvasMenu = new Event("open-az-offcanvas-menu");
            document.querySelector(this.target).dispatchEvent(openAzOffCanvasMenu);
        }
    }
    render() {
        return (0, _lit.html)`
			${this.link ? (0, _lit.html)`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${0, _shadowEventsDatalayer.eventDataLayerPush}" id="${this.elmid}">${this.value}<slot></slot></a>` : (0, _lit.html)`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick}" id="${this.elmid}">${this.value}<slot></slot></button>`}
		`;
    }
    firstUpdated() {
        super.firstUpdated();
        this.setAttribute("role", "button");
    }
    /**
   * @protected
   */ get focusElement() {
        return this.shadowRoot.querySelector(".button");
    }
}
customElements.get("az-button") || customElements.define("az-button", AzButton);

},{"lit":"4antt","./mixins/delegate-focus-mixin.js":"iTSFJ","./styles/az-button-css.js":"jVub0","./mixins/shadow-events-datalayer":"2ihYi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTSFJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DelegateFocusMixin", ()=>DelegateFocusMixin);
const $$tabindex = Symbol("tabindex");
const $$oldTabindex = Symbol("oldTabindex");
const $$newTabindex = Symbol("newTabindex");
const DelegateFocusMixin = (superClass)=>class extends superClass {
        static get properties() {
            return {
                tabIndex: {
                    converter: {
                        fromAttribute: Number,
                        toAttribute: (value)=>value == null ? null : value.toString()
                    },
                    noAccessor: true,
                    reflect: true
                },
                /**
         * If true, the user cannot interact with this element.
         */ disabled: {
                    type: Boolean,
                    reflect: true
                }
            };
        }
        constructor(){
            super();
            if (!this.hasAttribute("tabindex")) this.tabIndex = 0;
        }
        get tabIndex() {
            return this[$$tabindex];
        }
        set tabIndex(value) {
            const oldValue = this[$$tabindex];
            this[$$tabindex] = value;
            this.requestUpdate("tabIndex", oldValue);
        }
        firstUpdated() {
            this.addEventListener("focusin", (e)=>{
                if (e.composedPath()[0] === this) this._focus();
            });
            this.addEventListener("keydown", (e)=>{
                if (!e.defaultPrevented && e.shiftKey && e.keyCode === 9) {
                    // Flag is checked in _focus event handler.
                    this._isShiftTabbing = true;
                    HTMLElement.prototype.focus.apply(this);
                    // Event handling in IE is asynchronous and the flag is removed asynchronously as well
                    setTimeout(()=>{
                        this._isShiftTabbing = false;
                    }, 0);
                }
            });
        }
        update(props) {
            if (props.has("disabled")) this._disabledChanged(this.disabled, props.get("disabled"));
            if (props.has("tabIndex")) {
                // save value of tabindex, as it can be overridden to
                // undefined in case if the element is disabled
                this[$$newTabindex] = this.tabIndex;
                this._tabIndexChanged(this.tabIndex);
            }
            super.update(props);
        }
        updated(props) {
            super.updated(props);
            if (props.has("disabled")) {
                this.focusElement.disabled = this.disabled;
                if (this.disabled) this.blur();
            }
            if (props.has("tabIndex") && this[$$newTabindex] !== undefined) {
                this.focusElement.tabIndex = this[$$newTabindex];
                this[$$newTabindex] = undefined;
            }
        }
        /**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */ get focusElement() {
            window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
            return this;
        }
        _focus() {
            if (this._isShiftTabbing) return;
            this.focusElement.focus();
        }
        /**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @protected
     */ focus() {
            if (this.disabled) return;
            this.focusElement.focus();
        }
        /**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @protected
     */ blur() {
            this.focusElement.blur();
        }
        _disabledChanged(disabled, oldDisabled) {
            if (disabled) {
                this[$$oldTabindex] = this.tabIndex;
                this.tabIndex = -1;
                this.setAttribute("aria-disabled", "true");
            } else if (oldDisabled) {
                if (this[$$oldTabindex] !== undefined) this.tabIndex = this[$$oldTabindex];
                this.removeAttribute("aria-disabled");
            }
        }
        _tabIndexChanged(tabindex) {
            if (this.disabled && tabindex) {
                // If tabindex attribute was changed while checkbox was disabled
                if (this.tabIndex !== -1) this[$$oldTabindex] = this.tabIndex;
                this.tabIndex = null;
            }
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVub0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
exports.default = azButtonStyles = (0, _lit.css)`
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
	`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ihYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventDataLayerPush", ()=>eventDataLayerPush);
const eventDataLayerPush = (e, location = "")=>{
    // Add window.dataLayer if doesnt exist
    window.dataLayer = window.dataLayer || [];
    // Fetch reference to the element that was actually clicked
    var targetElement = e.composedPath()[0];
    // Fetch reference to the element's parent dropdown which was clicked
    var parentDropDown = e.composedPath()[3].innerText ? e.composedPath()[3].innerText.split("\n")[0] : "";
    window.dataLayer.push({
        event: "shadow_event_" + e.type,
        shadow_event: {
            elementInnerHTML: targetElement.textContent || "",
            elementInnerText: targetElement.innerText || "",
            title: "shadow-dom-link",
            element: targetElement,
            elementClasses: targetElement.className || "",
            elementId: targetElement.id || "",
            elementLocation: location || "",
            elementTarget: targetElement.target || "",
            elementUrl: targetElement.href || targetElement.action || "",
            originalEvent: e,
            parent: parentDropDown || "",
            inShadowDom: true
        }
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IT1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainMenu", ()=>MainMenu);
var _decoupledMenuParser = require("@drupal/decoupled-menu-parser");
var _lit = require("lit");
var _runtime = require("regenerator-runtime/runtime");
var _shadowEventsDatalayer = require("./mixins/shadow-events-datalayer");
class MainMenu extends (0, _lit.LitElement) {
    static properties = {
        thisUrl: {
            type: String
        },
        data: {
            attribute: false
        },
        /**
		 * Base URL of menu endpoint
		 */ baseUrl: {
            type: String
        },
        /**
		 * Machine name of menu
		 */ menuId: {
            type: String
        },
        /**
		 * Branding heading for the menu
		 */ branding: {
            type: String
        },
        /**
		 * An array of objects containing data for the menu tree
		 */ tree: {
            type: Array
        },
        /**
		 * Loading state
		 */ isLoading: {
            type: Boolean,
            attribute: false
        },
        /**
		 * Loading message
		 */ loadingMessage: {
            type: String
        }
    };
    static menuLevelTemplate(levels) {
        return (0, _lit.html)` ${levels} `;
    }
    fetchData(baseURL, menuID) {
        this.isLoading = true;
        const url = `${baseURL}/system/menu/${menuID}/linkset`;
        fetch(url, {}).then((response)=>{
            if (response.ok) return response.json();
            this.isLoading = false;
            throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
        }).then((json)=>{
            try {
                const denormalized = (0, _decoupledMenuParser.denormalize)(json, menuID);
                this.tree = denormalized.tree;
            } catch (e) {
                throw new Error("Unable to denormalize menu.");
            }
            this.isLoading = false;
        });
    }
    menuParentTemplate(title, children) {
        return (0, _lit.html)`<li
			part="menu-item"
			class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open"
		>
			<button
				@click="${MainMenu.openMenu}"
				role="button"
				aria-expanded="false"
				aria-haspopup="true"
				href="#"
				class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle"
			>
				${title}
			</button>
			<div class="dropdown-menu">${this.renderAzMenuLevel(children)}</div>
		</li>`;
    }
    static openMenu(e) {
        e.preventDefault();
        const { target } = e;
        let cur = document.querySelector("az-main-menu").shadowRoot.querySelector(".nav-item.show button");
        const isExpanded = target.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            target.parentElement.classList.remove("show");
            target.setAttribute("aria-expanded", "false");
            target.nextElementSibling.classList.remove("show");
        } else {
            if (cur) {
                cur.parentElement.classList.remove("show");
                cur.setAttribute("aria-expanded", "false");
                cur.nextElementSibling.classList.remove("show");
            }
            target.parentElement.classList.add("show");
            target.setAttribute("aria-expanded", "true");
            target.nextElementSibling.classList.add("show");
        }
    }
    renderAzMenuLevel(level) {
        const levels = level.map((item)=>this.renderAzMenuItem(item));
        return MainMenu.menuLevelTemplate(levels);
    }
    static azMenuTopLevelLinkTemplate(title, href) {
        href = href.charAt(0) === "/" ? this.thisUrl + href : href;
        return (0, _lit.html)`<li part="menu-item" class="nav-item">
			<a href=${href} class="nav-link">${title}</a>
		</li>`;
    }
    static menuLinkTemplate(title, href) {
        href = href.charAt(0) === "/" ? this.thisUrl + href : href;
        return (0, _lit.html)`<a
			part="menu-item"
			class="dropdown-item"
			href=${href}
			@click="${(e)=>{
            (0, _shadowEventsDatalayer.eventDataLayerPush)(e, "az-main-menu");
        }}"
			>${title}</a
		>`;
    }
    static menuItemTemplate(title) {
        return (0, _lit.html)`<li part="menu-item">${title}</li>`;
    }
    renderAzMenuItem(item) {
        const title = item?.link?.attributes?.title;
        let href = item?.link?.href;
        const children = item?.children;
        const hierarchyArray = item?.link?.attributes?.["hierarchy"];
        // Safely calculate the hierarchy level
        let hierarchyLevel = 0;
        hierarchyLevel = hierarchyArray.length;
        // Construct the full URL if needed
        const fullHref = href && href.charAt(0) === "/" ? `${this.thisUrl}${href}` : href;
        // Logic to determine the type of menu item to render
        if (children && children.length) return this.menuParentTemplate(title, children);
        if (children && children.length === 0 && fullHref && hierarchyLevel === 1) return MainMenu.azMenuTopLevelLinkTemplate(title, fullHref);
        if (fullHref) return MainMenu.menuLinkTemplate(title, fullHref);
        return MainMenu.menuItemTemplate(title);
    }
    constructor(){
        super();
        this.tree = [];
        this.isLoading = false;
        this.loadingMessage = "Loading...";
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.baseUrl && this.menuId) this.fetchData(this.baseUrl, this.menuId);
    }
    static styles = (0, _lit.css)`
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
	`;
    async firstUpdated() {
        // Give the browser a chance to paint
        await new Promise((r)=>setTimeout(r, 0));
        this.addEventListener("open-az-offcanvas-menu", this.handleOpen);
        await new Promise((r)=>setTimeout(r, 0));
        this.addEventListener("close-az-offcanvas-menu", this.handleClose);
    }
    handleClose = (event)=>{
        this.setAttribute("state", "closed");
        document.body.style.overflowY = "initial";
    };
    handleOpen = (event)=>{
        this.setAttribute("state", "open");
        document.body.style.overflowY = "hidden";
    };
    render() {
        return (0, _lit.html)`
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
								${this.isLoading ? (0, _lit.html)`<li
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
									  </li>` : this.renderAzMenuLevel(this.tree)}
							</ul>
						</nav>
					</section>
				</nav>
			</div>
		`;
    }
}
customElements.get("az-main-menu") || customElements.define("az-main-menu", MainMenu);

},{"@drupal/decoupled-menu-parser":"jNybe","lit":"4antt","regenerator-runtime/runtime":"dXNgZ","./mixins/shadow-events-datalayer":"2ihYi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"hfnYc":[function(require,module,exports) {
var _lit = require("lit");
var _azButton = require("./az-button");
var _azSelectMenu = require("./az-select-menu");
/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */ class AzLogoSelectCta extends (0, _lit.LitElement) {
    static styles = (0, _lit.css)`
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
	`;
    render() {
        return (0, _lit.html)`
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
    `;
    }
}
customElements.get("az-middle-header") || customElements.define("az-middle-header", AzLogoSelectCta);

},{"lit":"4antt","./az-button":"9jpdB","./az-select-menu":"cuRNw"}],"cuRNw":[function(require,module,exports) {
var _lit = require("lit");
var _decoupledMenuParser = require("@drupal/decoupled-menu-parser");
var _popperLite = require("@popperjs/core/lib/popper-lite");
var _azButton = require("./az-button");
var _shadowEventsDatalayer = require("./mixins/shadow-events-datalayer");
class AzSelectMenu extends (0, _lit.LitElement) {
    static styles = (0, _lit.css)`
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
	`;
    static get properties() {
        return {
            /**
			 * Base URL of menu endpoint
			 */ baseUrl: {
                type: String
            },
            /**
			 * Machine name of menu
			 */ menuId: {
                type: String
            },
            /**
			 * Branding heading for the menu
			 */ branding: {
                type: String
            },
            /**
			 * An array of objects containing data for the menu tree
			 */ tree: {
                type: Array
            },
            /**
			 * Loading state
			 */ isLoading: {
                type: Boolean,
                attribute: false
            },
            /**
			 * Loading message
			 */ loadingMessage: {
                type: String
            }
        };
    }
    constructor(){
        super();
        this.tree = [];
        this.isLoading = false;
        this.loadingMessage = "Loading...";
    }
    _showTooltip = ()=>{
        // Make the tooltip visible
        this.tooltip.setAttribute("data-show", "");
        // Enable the event listeners
        this.popperInstance.setOptions({
            modifiers: [
                {
                    name: "eventListeners",
                    enabled: true
                }
            ]
        });
        // Update its position
        this.popperInstance.update();
    };
    _hideTooltip = ()=>{
        // Hide the tooltip
        this.tooltip.removeAttribute("data-show");
        // Disable the event listeners
        this.popperInstance.setOptions({
            modifiers: [
                {
                    name: "eventListeners",
                    enabled: false
                }
            ]
        });
    };
    _handleEvents = (e)=>{
        // Hide the popover when user touches any part of the screen, except the
        // select form button regardless of state.
        const selectElementHref = this.select.options[this.select.selectedIndex].dataset.href;
        //  If a navigable link is selected in the dropdown.
        if (!selectElementHref.includes("%3Cnolink%3E")) {
            this.select.setAttribute("aria-invalid", "false");
            this.btn.classList.remove("disabled");
            switch(e.type){
                case "click":
                    this._hideTooltip();
                    // If the link works, don't allow the button to focus.
                    e.stopImmediatePropagation();
                    window.location = selectElementHref;
                    break;
                default:
                    break;
            }
        } else {
            this.btn.classList.add("disabled");
            this.select.setAttribute("aria-invalid", "true");
            switch(e.type){
                case "click":
                    if (this.btn) {
                        this.select.focus();
                        this._showTooltip();
                    }
                    break;
                case "focus":
                case "mouseenter":
                    if (this.btn) this._showTooltip();
                    else this._hideTooltip();
                    break;
                case "mouseleave":
                    this._hideTooltip();
                    break;
                default:
                    break;
            }
        }
    };
    connectedCallback() {
        super.connectedCallback();
        if (this.baseUrl && this.menuId) this.fetchData(this.baseUrl, this.menuId);
    }
    disconnectedCallback() {
        if (super.disconnectedCallback) super.disconnectedCallback();
    }
    static azMenuLevelTemplate(levels) {
        return (0, _lit.html)` ${levels} `;
    }
    static azMenuOptionTemplate(title, href) {
        return (0, _lit.html)`<option
			data-href="${href}"
			@click="${(e)=>{
            (0, _shadowEventsDatalayer.eventDataLayerPush)(e, "az-select-menu");
        }}"
		>
			${title}
		</option>`;
    }
    static azMenuItemTemplate(title) {
        return (0, _lit.html)`${title}`;
    }
    renderAzSelectMenuOptions(level) {
        const levels = level.map((item)=>this.renderAzMenuItem(item));
        return AzSelectMenu.azMenuLevelTemplate(levels);
    }
    renderAzMenuItem(item) {
        const title = item?.link?.attributes?.title;
        let href = item?.link?.href;
        // check if external or relative href
        href = href.charAt(0) === "/" ? "https://www.arizona.edu" + href : href;
        if (href) return AzSelectMenu.azMenuOptionTemplate(title, href);
        return this.azMenuItemTemplate(title);
    }
    fetchData(baseURL, menuID) {
        this.isLoading = true;
        const url = `${baseURL}/system/menu/${menuID}/linkset`;
        fetch(url, {}).then((response)=>{
            if (response.ok) return response.json();
            this.isLoading = false;
            throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
        }).then((json)=>{
            try {
                const denormalized = (0, _decoupledMenuParser.denormalize)(json, menuID);
                this.tree = denormalized.tree;
            } catch (e) {
                throw new Error("Unable to denormalize menu.");
            }
            this.isLoading = false;
        });
    }
    async firstUpdated() {
        // Give the browser a chance to paint
        await new Promise((r)=>setTimeout(r, 0));
        this.btn = this.shadowRoot.querySelector("#button");
        this.btn.addEventListener("click", this._handleEvents, {
            passive: true
        });
        this.btn.addEventListener("mouseenter", this._handleEvents, {
            passive: true
        });
        this.btn.addEventListener("mouseleave", this._handleEvents, {
            passive: true
        });
        this.btn.addEventListener("focus", this._handleEvents, {
            passive: true
        });
        this.btn.addEventListener("touchstart", this._handleEvents, {
            passive: true
        });
        this.btn.addEventListener("blur", this._handleEvents, {
            passive: true
        });
        this.form = this.shadowRoot.querySelector("form");
        this.tooltip = this.shadowRoot.querySelector("#tooltip");
        this.popperInstance = (0, _popperLite.createPopper)(this.form, this.tooltip, {
            placement: "top",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [
                            0,
                            8
                        ]
                    }
                }
            ]
        });
        this.select = this.shadowRoot.querySelector("select");
    }
    render() {
        return (0, _lit.html)`
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
						${this.isLoading ? (0, _lit.html)`<slot name="loading">${this.loadingMessage}</slot>` : this.renderAzSelectMenuOptions(this.tree)}
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
		`;
    }
}
customElements.get("az-select-menu") || customElements.define("az-select-menu", AzSelectMenu);

},{"lit":"4antt","@drupal/decoupled-menu-parser":"jNybe","@popperjs/core/lib/popper-lite":"gKW1N","./az-button":"9jpdB","./mixins/shadow-events-datalayer":"2ihYi"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":false,"./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kVeB1","ef18b"], "ef18b", "parcelRequirefbca")

//# sourceMappingURL=index.7a18a7c2.js.map
