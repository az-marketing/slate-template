// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
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
    generator._invoke = makeInvokeMethod(innerFn, self, context);

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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
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
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

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

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

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
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
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

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

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
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
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
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
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
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

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

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

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
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/lit-html/lib/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodes = exports.reparentNodes = exports.isCEPolyfill = void 0;

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
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

exports.isCEPolyfill = isCEPolyfill;

const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */


exports.reparentNodes = reparentNodes;

const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

exports.removeNodes = removeNodes;
},{}],"node_modules/lit-html/lib/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastAttributeNameRegex = exports.createMarker = exports.isTemplatePartActive = exports.Template = exports.boundAttributeSuffix = exports.markerRegex = exports.nodeMarker = exports.marker = void 0;

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
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

exports.marker = marker;
const nodeMarker = `<!--${marker}-->`;
exports.nodeMarker = nodeMarker;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

exports.markerRegex = markerRegex;
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

exports.boundAttributeSuffix = boundAttributeSuffix;

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {
      strings,
      values: {
        length
      }
    } = result;

    while (partIndex < length) {
      const node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {
              length
            } = attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            let count = 0;

            for (let i = 0; i < length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              const stringForPart = strings[partIndex]; // Find the attribute name

              const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index,
                name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          const data = node.data;

          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings = data.split(markerRegex);
            const lastIndex = strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings[i];

              if (s === '') {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            let i = -1;

            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}

exports.Template = Template;

const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.


exports.isTemplatePartActive = isTemplatePartActive;

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */


exports.createMarker = createMarker;
const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
exports.lastAttributeNameRegex = lastAttributeNameRegex;
},{}],"node_modules/lit-html/lib/modify-template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodesFromTemplate = removeNodesFromTemplate;
exports.insertNodeIntoTemplate = insertNodeIntoTemplate;

var _template = require("./template.js");

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
const walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  const {
    element: {
      content
    },
    parts
  } = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let part = parts[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    const node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(n => n.parentNode.removeChild(n));
}

const countNodes = node => {
  let count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts.length; i++) {
    const part = parts[i];

    if ((0, _template.isTemplatePartActive)(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node, refNode = null) {
  const {
    element: {
      content
    },
    parts
  } = template; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let insertCount = 0;
  let walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    const walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}
},{"./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/directive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDirective = exports.directive = void 0;

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
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};

exports.directive = directive;

const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

exports.isDirective = isDirective;
},{}],"node_modules/lit-html/lib/part.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nothing = exports.noChange = void 0;

/**
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

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

exports.noChange = noChange;
const nothing = {};
exports.nothing = nothing;
},{}],"node_modules/lit-html/lib/template-instance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateInstance = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

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
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // There are a number of steps in the lifecycle of a template instance's
    // DOM fragment:
    //  1. Clone - create the instance fragment
    //  2. Adopt - adopt into the main document
    //  3. Process - find part markers and create parts
    //  4. Upgrade - upgrade custom elements
    //  5. Update - set node, attribute, property, etc., values
    //  6. Connect - connect to the document. Optional and outside of this
    //     method.
    //
    // We have a few constraints on the ordering of these steps:
    //  * We need to upgrade before updating, so that property values will pass
    //    through any property setters.
    //  * We would like to process before upgrading so that we're sure that the
    //    cloned fragment is inert and not disturbed by self-modifying DOM.
    //  * We want custom elements to upgrade even in disconnected fragments.
    //
    // Given these constraints, with full custom elements support we would
    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
    //
    // But Safari does not implement CustomElementRegistry#upgrade, so we
    // can not implement that order and still have upgrade-before-update and
    // upgrade disconnected fragments. So we instead sacrifice the
    // process-before-upgrade constraint, since in Custom Elements v1 elements
    // must not modify their light DOM in the constructor. We still have issues
    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
    // that don't strictly adhere to the no-modification rule because shadow
    // DOM, which may be created in the constructor, is emulated by being placed
    // in the light DOM.
    //
    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
    // in one step.
    //
    // The Custom Elements v1 polyfill supports upgrade(), so the order when
    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
    // Connect.
    const fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(fragment, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode(); // Loop through all the nodes and parts of a template

    while (partIndex < parts.length) {
      part = parts[partIndex];

      if (!(0, _template.isTemplatePartActive)(part)) {
        this.__parts.push(undefined);

        partIndex++;
        continue;
      } // Progress the tree walker until we find our next part's node.
      // Note that multiple parts may share the same node (attribute parts
      // on a single element), so this loop may not run at all.


      while (nodeIndex < part.index) {
        nodeIndex++;

        if (node.nodeName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }

        if ((node = walker.nextNode()) === null) {
          // We've exhausted the content inside a nested template element.
          // Because we still have parts (the outer for-loop), we know:
          // - There is a template in the stack
          // - The walker will find a nextNode outside the template
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      } // We've arrived at our part's node.


      if (part.type === 'node') {
        const part = this.processor.handleTextExpression(this.options);
        part.insertAfterNode(node.previousSibling);

        this.__parts.push(part);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }

      partIndex++;
    }

    if (_dom.isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

exports.TemplateInstance = TemplateInstance;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/template-result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGTemplateResult = exports.TemplateResult = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

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
 * @module lit-html
 */

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: s => s
});
const commentMarker = ` ${_template.marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const l = this.strings.length - 1;
    let html = '';
    let isCommentBinding = false;

    for (let i = 0; i < l; i++) {
      const s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
      // into the template source before it's parsed by the browser's HTML
      // parser. The marker type is based on whether the expression is in an
      // attribute, text, or comment position.
      //   * For node-position bindings we insert a comment with the marker
      //     sentinel as its text content, like <!--{{lit-guid}}-->.
      //   * For attribute bindings we insert just the marker sentinel for the
      //     first binding, so that we support unquoted attribute bindings.
      //     Subsequent bindings can use a comment marker because multi-binding
      //     attributes must be quoted.
      //   * For comment bindings we insert just the marker sentinel so we don't
      //     close the comment.
      //
      // The following code scans the template source, but is *not* an HTML
      // parser. We don't need to track the tree structure of the HTML, only
      // whether a binding is inside a comment, and if not, if it appears to be
      // the first binding in an attribute.

      const commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
      // comment close. Because <-- can appear in an attribute value there can
      // be false positives.

      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
      // expression. This can match "name=value" like structures in text,
      // comments, and attribute values, so there can be false-positives.

      const attributeMatch = _template.lastAttributeNameRegex.exec(s);

      if (attributeMatch === null) {
        // We're only in this branch if we don't have a attribute-like
        // preceding sequence. For comments, this guards against unusual
        // attribute values like <div foo="<!--${'bar'}">. Cases like
        // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
        // below.
        html += s + (isCommentBinding ? commentMarker : _template.nodeMarker);
      } else {
        // For attributes we use just a marker sentinel, and also append a
        // $lit$ suffix to the name to opt-out of attribute-specific parsing
        // that IE and Edge do for style and certain SVG attributes.
        html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template.boundAttributeSuffix + attributeMatch[3] + _template.marker;
      }
    }

    html += this.strings[l];
    return html;
  }

  getTemplateElement() {
    const template = document.createElement('template');
    let value = this.getHTML();

    if (policy !== undefined) {
      // this is secure because `this.strings` is a TemplateStringsArray.
      // TODO: validate this when
      // https://github.com/tc39/proposal-array-is-template-object is
      // implemented.
      value = policy.createHTML(value);
    }

    template.innerHTML = value;
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


exports.TemplateResult = TemplateResult;

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    (0, _dom.reparentNodes)(content, svgElement.firstChild);
    return template;
  }

}

exports.SVGTemplateResult = SVGTemplateResult;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/parts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isIterable = exports.isPrimitive = void 0;

var _directive = require("./directive.js");

var _dom = require("./dom.js");

var _part = require("./part.js");

var _templateInstance = require("./template-instance.js");

var _templateResult = require("./template-result.js");

var _template = require("./template.js");

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
const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};

exports.isPrimitive = isPrimitive;

const isIterable = value => {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */


exports.isIterable = isIterable;

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts = this.parts; // If we're assigning an attribute via syntax like:
    //    attr="${foo}"  or  attr=${foo}
    // but not
    //    attr="${foo} ${bar}" or attr="${foo} baz"
    // then we don't want to coerce the attribute value into one long
    // string. Instead we want to just return the value itself directly,
    // so that sanitizeDOMValue can get the actual value rather than
    // String(value)
    // The exception is if v is an array, in which case we do want to smash
    // it together into a string without calling String() on the array.
    //
    // This also allows trusted values (when using TrustedTypes) being
    // assigned to DOM sinks without being stringified in the process.

    if (l === 1 && strings[0] === '' && strings[1] === '') {
      const v = parts[0].value;

      if (typeof v === 'symbol') {
        return String(v);
      }

      if (typeof v === 'string' || !isIterable(v)) {
        return v;
      }
    }

    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === 'string' ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
/**
 * A Part that controls all or part of an attribute value.
 */


exports.AttributeCommitter = AttributeCommitter;

class AttributePart {
  constructor(committer) {
    this.value = undefined;
    this.committer = committer;
  }

  setValue(value) {
    if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!(0, _directive.isDirective)(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while ((0, _directive.isDirective)(this.value)) {
      const directive = this.value;
      this.value = _part.noChange;
      directive(this);
    }

    if (this.value === _part.noChange) {
      return;
    }

    this.committer.commit();
  }

}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */


exports.AttributePart = AttributePart;

class NodePart {
  constructor(options) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild((0, _template.createMarker)());
    this.endNode = container.appendChild((0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part.__insert(this.startNode = (0, _template.createMarker)());

    part.__insert(this.endNode = (0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref.__insert(this.startNode = (0, _template.createMarker)());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }

    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    const value = this.__pendingValue;

    if (value === _part.noChange) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof _templateResult.TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === _part.nothing) {
      this.value = _part.nothing;
      this.clear();
    } else {
      // Fallback, will render the string representation
      this.__commitText(value);
    }
  }

  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  __commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this.__insert(value);

    this.value = value;
  }

  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
    // it can't be implicitly converted - i.e. it's a symbol.

    const valueAsString = typeof value === 'string' ? value : String(value);

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }

    this.value = value;
  }

  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _templateInstance.TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this.__commitNode(fragment);

      this.value = instance;
    }
  }

  __commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


exports.NodePart = NodePart;

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const value = !!this.__pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }

      this.value = value;
    }

    this.__pendingValue = _part.noChange;
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


exports.BooleanAttributePart = BooleanAttributePart;

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.element[this.name] = this._getValue();
    }
  }

}

exports.PropertyCommitter = PropertyCommitter;

class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


exports.PropertyPart = PropertyPart;
let eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    this.value = newListener;
    this.__pendingValue = _part.noChange;
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


exports.EventPart = EventPart;

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);
},{"./directive.js":"node_modules/lit-html/lib/directive.js","./dom.js":"node_modules/lit-html/lib/dom.js","./part.js":"node_modules/lit-html/lib/part.js","./template-instance.js":"node_modules/lit-html/lib/template-instance.js","./template-result.js":"node_modules/lit-html/lib/template-result.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/template-factory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateFactory = templateFactory;
exports.templateCaches = void 0;

var _template = require("./template.js");

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
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template.marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template.Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}

const templateCaches = new Map();
exports.templateCaches = templateCaches;
},{"./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = void 0;

var _dom = require("./dom.js");

var _parts = require("./parts.js");

var _templateFactory = require("./template-factory.js");

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
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

exports.parts = parts;

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({
      templateFactory: _templateFactory.templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

exports.render = render;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./parts.js":"node_modules/lit-html/lib/parts.js","./template-factory.js":"node_modules/lit-html/lib/template-factory.js"}],"node_modules/lit-html/lib/default-template-processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = void 0;

var _parts = require("./parts.js");

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
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const committer = new _parts.PropertyCommitter(element, name.slice(1), strings);
      return committer.parts;
    }

    if (prefix === '@') {
      return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
    }

    const committer = new _parts.AttributeCommitter(element, name, strings);
    return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts.NodePart(options);
  }

}

exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
const defaultTemplateProcessor = new DefaultTemplateProcessor();
exports.defaultTemplateProcessor = defaultTemplateProcessor;
},{"./parts.js":"node_modules/lit-html/lib/parts.js"}],"node_modules/lit-html/lit-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DefaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "defaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.TemplateResult;
  }
});
Object.defineProperty(exports, "directive", {
  enumerable: true,
  get: function () {
    return _directive.directive;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function () {
    return _directive.isDirective;
  }
});
Object.defineProperty(exports, "removeNodes", {
  enumerable: true,
  get: function () {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, "reparentNodes", {
  enumerable: true,
  get: function () {
    return _dom.reparentNodes;
  }
});
Object.defineProperty(exports, "noChange", {
  enumerable: true,
  get: function () {
    return _part.noChange;
  }
});
Object.defineProperty(exports, "nothing", {
  enumerable: true,
  get: function () {
    return _part.nothing;
  }
});
Object.defineProperty(exports, "AttributeCommitter", {
  enumerable: true,
  get: function () {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, "AttributePart", {
  enumerable: true,
  get: function () {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, "BooleanAttributePart", {
  enumerable: true,
  get: function () {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, "EventPart", {
  enumerable: true,
  get: function () {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, "isIterable", {
  enumerable: true,
  get: function () {
    return _parts.isIterable;
  }
});
Object.defineProperty(exports, "isPrimitive", {
  enumerable: true,
  get: function () {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, "NodePart", {
  enumerable: true,
  get: function () {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, "PropertyCommitter", {
  enumerable: true,
  get: function () {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, "PropertyPart", {
  enumerable: true,
  get: function () {
    return _parts.PropertyPart;
  }
});
Object.defineProperty(exports, "parts", {
  enumerable: true,
  get: function () {
    return _render.parts;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
Object.defineProperty(exports, "templateCaches", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateFactory;
  }
});
Object.defineProperty(exports, "TemplateInstance", {
  enumerable: true,
  get: function () {
    return _templateInstance.TemplateInstance;
  }
});
Object.defineProperty(exports, "createMarker", {
  enumerable: true,
  get: function () {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, "isTemplatePartActive", {
  enumerable: true,
  get: function () {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function () {
    return _template.Template;
  }
});
exports.svg = exports.html = void 0;

var _defaultTemplateProcessor = require("./lib/default-template-processor.js");

var _templateResult = require("./lib/template-result.js");

var _directive = require("./lib/directive.js");

var _dom = require("./lib/dom.js");

var _part = require("./lib/part.js");

var _parts = require("./lib/parts.js");

var _render = require("./lib/render.js");

var _templateFactory = require("./lib/template-factory.js");

var _templateInstance = require("./lib/template-instance.js");

var _template = require("./lib/template.js");

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
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// TODO(justinfagnani): remove line when we get NodePart moving methods
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


const html = (strings, ...values) => new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */


exports.html = html;

const svg = (strings, ...values) => new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);

exports.svg = svg;
},{"./lib/default-template-processor.js":"node_modules/lit-html/lib/default-template-processor.js","./lib/template-result.js":"node_modules/lit-html/lib/template-result.js","./lib/directive.js":"node_modules/lit-html/lib/directive.js","./lib/dom.js":"node_modules/lit-html/lib/dom.js","./lib/part.js":"node_modules/lit-html/lib/part.js","./lib/parts.js":"node_modules/lit-html/lib/parts.js","./lib/render.js":"node_modules/lit-html/lib/render.js","./lib/template-factory.js":"node_modules/lit-html/lib/template-factory.js","./lib/template-instance.js":"node_modules/lit-html/lib/template-instance.js","./lib/template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/shady-render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _litHtml.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function () {
    return _litHtml.svg;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function () {
    return _litHtml.TemplateResult;
  }
});
exports.render = exports.shadyTemplateFactory = void 0;

var _dom = require("./dom.js");

var _modifyTemplate = require("./modify-template.js");

var _render = require("./render.js");

var _templateFactory = require("./template-factory.js");

var _templateInstance = require("./template-instance.js");

var _template = require("./template.js");

var _litHtml = require("../lit-html.js");

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
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;

let compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn(`Incompatible ShadyCSS version detected. ` + `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` + `@webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


const shadyTemplateFactory = scopeName => result => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);

  let templateCache = _templateFactory.templateCaches.get(cacheKey);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };

    _templateFactory.templateCaches.set(cacheKey, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  }

  const key = result.strings.join(_template.marker);
  template = templateCache.keyString.get(key);

  if (template === undefined) {
    const element = result.getTemplateElement();

    if (compatibleShadyCSSVersion) {
      window.ShadyCSS.prepareTemplateDom(element, scopeName);
    }

    template = new _template.Template(result, element);
    templateCache.keyString.set(key, template);
  }

  templateCache.stringsArray.set(result.strings, template);
  return template;
};

exports.shadyTemplateFactory = shadyTemplateFactory;
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

const removeStylesFromLitTemplates = scopeName => {
  TEMPLATE_TYPES.forEach(type => {
    const templates = _templateFactory.templateCaches.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(template => {
        const {
          element: {
            content
          }
        } = template; // IE 11 doesn't support the iterable param Set constructor

        const styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(s => {
          styles.add(s);
        });
        (0, _modifyTemplate.removeNodesFromTemplate)(template, styles);
      });
    }
  });
};

const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  const templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  const styles = renderedDOM.querySelectorAll('style');
  const {
    length
  } = styles; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  const condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (let i = 0; i < length; i++) {
    const style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  const content = templateElement.content;

  if (!!template) {
    (0, _modifyTemplate.insertNodeIntoTemplate)(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  const style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    const removes = new Set();
    removes.add(condensedStyle);
    (0, _modifyTemplate.removeNodesFromTemplate)(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


const render = (result, container, options) => {
  if (!options || typeof options !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  const scopeName = options.scopeName;

  const hasRendered = _render.parts.has(container);

  const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  (0, _render.render)(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    const part = _render.parts.get(renderContainer);

    _render.parts.delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.


    const template = part.value instanceof _templateInstance.TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    (0, _dom.removeNodes)(container, container.firstChild);
    container.appendChild(renderContainer);

    _render.parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

exports.render = render;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./modify-template.js":"node_modules/lit-html/lib/modify-template.js","./render.js":"node_modules/lit-html/lib/render.js","./template-factory.js":"node_modules/lit-html/lib/template-factory.js","./template-instance.js":"node_modules/lit-html/lib/template-instance.js","./template.js":"node_modules/lit-html/lib/template.js","../lit-html.js":"node_modules/lit-html/lit-html.js"}],"node_modules/lit-element/lib/updating-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatingElement = exports.notEqual = exports.defaultConverter = void 0;

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
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = (prop, _obj) => prop;

const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },

  fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
        return JSON.parse(value);
    }

    return value;
  }

};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

exports.defaultConverter = defaultConverter;

const notEqual = (value, old) => {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};

exports.notEqual = notEqual;
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

class UpdatingElement extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  static get observedAttributes() {
    // note: piggy backing on this to ensure we're finalized.
    this.finalize();
    const attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays

    this._classProperties.forEach((v, p) => {
      const attr = this._attributeNameForProperty(p, v);

      if (attr !== undefined) {
        this._attributeToPropertyMap.set(attr, p);

        attributes.push(attr);
      }
    });

    return attributes;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */

  /** @nocollapse */


  static _ensureClassProperties() {
    // ensure private storage for property declarations.
    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
      this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

      const superProperties = Object.getPrototypeOf(this)._classProperties;

      if (superProperties !== undefined) {
        superProperties.forEach((v, k) => this._classProperties.set(k, v));
      }
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */


  static createProperty(name, options = defaultPropertyDeclaration) {
    // Note, since this can be called by the `@property` decorator which
    // is called before `finalize`, we ensure storage exists for property
    // metadata.
    this._ensureClassProperties();

    this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
    // it would be lost otherwise and that would never be the user's intention;
    // Instead, we expect users to call `requestUpdate` themselves from
    // user-defined accessors. Note that if the super has an accessor we will
    // still overwrite it


    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
      return;
    }

    const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
    const descriptor = this.getPropertyDescriptor(name, key, options);

    if (descriptor !== undefined) {
      Object.defineProperty(this.prototype, name, descriptor);
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */


  static getPropertyDescriptor(name, key, options) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[key];
      },

      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdateInternal(name, oldValue, options);
      },

      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */


  static getPropertyOptions(name) {
    return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */


  static finalize() {
    // finalize any superclasses
    const superCtor = Object.getPrototypeOf(this);

    if (!superCtor.hasOwnProperty(finalized)) {
      superCtor.finalize();
    }

    this[finalized] = true;

    this._ensureClassProperties(); // initialize Map populated in observedAttributes


    this._attributeToPropertyMap = new Map(); // make any properties
    // Note, only process "own" properties since this element will inherit
    // any properties defined on the superClass, and finalization ensures
    // the entire prototype chain is finalized.

    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      const props = this.properties; // support symbols in properties (IE11 does not support this)

      const propKeys = [...Object.getOwnPropertyNames(props), ...(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])]; // This for/of is ok because propKeys is an array

      for (const p of propKeys) {
        // note, use of `any` is due to TypeSript lack of support for symbol in
        // index types
        // tslint:disable-next-line:no-any no symbol in index
        this.createProperty(p, props[p]);
      }
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */


  static _attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */


  static _valueHasChanged(value, old, hasChanged = notEqual) {
    return hasChanged(value, old);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */


  static _propertyValueFromAttribute(value, options) {
    const type = options.type;
    const converter = options.converter || defaultConverter;
    const fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
    return fromAttribute ? fromAttribute(value, type) : value;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */


  static _propertyValueToAttribute(value, options) {
    if (options.reflect === undefined) {
      return;
    }

    const type = options.type;
    const converter = options.converter;
    const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
    return toAttribute(value, type);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */


  initialize() {
    this._updateState = 0;
    this._updatePromise = new Promise(res => this._enableUpdatingResolver = res);
    this._changedProperties = new Map();

    this._saveInstanceProperties(); // ensures first update will be caught by an early access of
    // `updateComplete`


    this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */


  _saveInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    this.constructor._classProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        const value = this[p];
        delete this[p];

        if (!this._instanceProperties) {
          this._instanceProperties = new Map();
        }

        this._instanceProperties.set(p, value);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */


  _applyInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    // tslint:disable-next-line:no-any
    this._instanceProperties.forEach((v, p) => this[p] = v);

    this._instanceProperties = undefined;
  }

  connectedCallback() {
    // Ensure first connection completes an update. Updates cannot complete
    // before connection.
    this.enableUpdating();
  }

  enableUpdating() {
    if (this._enableUpdatingResolver !== undefined) {
      this._enableUpdatingResolver();

      this._enableUpdatingResolver = undefined;
    }
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */


  disconnectedCallback() {}
  /**
   * Synchronizes property values when attributes change.
   */


  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      this._attributeToProperty(name, value);
    }
  }

  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    const ctor = this.constructor;

    const attr = ctor._attributeNameForProperty(name, options);

    if (attr !== undefined) {
      const attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


      if (attrValue === undefined) {
        return;
      } // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting


      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      } // mark state not reflecting


      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
    }
  }

  _attributeToProperty(name, value) {
    // Use tracking info to avoid deserializing attribute value if it was
    // just set from a property setter.
    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
      return;
    }

    const ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
    // the type; it has issues with tracking types through statics
    // tslint:disable-next-line:no-unnecessary-type-assertion

    const propName = ctor._attributeToPropertyMap.get(name);

    if (propName !== undefined) {
      const options = ctor.getPropertyOptions(propName); // mark state reflecting

      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
      this[propName] = // tslint:disable-next-line:no-any
      ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */


  requestUpdateInternal(name, oldValue, options) {
    let shouldRequestUpdate = true; // If we have a property key, perform property update steps.

    if (name !== undefined) {
      const ctor = this.constructor;
      options = options || ctor.getPropertyOptions(name);

      if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
        if (!this._changedProperties.has(name)) {
          this._changedProperties.set(name, oldValue);
        } // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `_reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.


        if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
          if (this._reflectingProperties === undefined) {
            this._reflectingProperties = new Map();
          }

          this._reflectingProperties.set(name, options);
        }
      } else {
        // Abort the request if the property should not be considered changed.
        shouldRequestUpdate = false;
      }
    }

    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
      this._updatePromise = this._enqueueUpdate();
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */


  requestUpdate(name, oldValue) {
    this.requestUpdateInternal(name, oldValue);
    return this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */


  async _enqueueUpdate() {
    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;

    try {
      // Ensure any previous update has resolved before updating.
      // This `await` also ensures that property changes are batched.
      await this._updatePromise;
    } catch (e) {// Ignore any previous errors. We only care that the previous cycle is
      // done. Any error should have been handled in the previous update.
    }

    const result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
    // enable coordinating updates with a scheduler. Note, the result is
    // checked to avoid delaying an additional microtask unless we need to.

    if (result != null) {
      await result;
    }

    return !this._hasRequestedUpdate;
  }

  get _hasRequestedUpdate() {
    return this._updateState & STATE_UPDATE_REQUESTED;
  }

  get hasUpdated() {
    return this._updateState & STATE_HAS_UPDATED;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */


  performUpdate() {
    // Abort any update if one is not pending when this is called.
    // This can happen if `performUpdate` is called early to "flush"
    // the update.
    if (!this._hasRequestedUpdate) {
      return;
    } // Mixin instance properties once, if they exist.


    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }

    let shouldUpdate = false;
    const changedProperties = this._changedProperties;

    try {
      shouldUpdate = this.shouldUpdate(changedProperties);

      if (shouldUpdate) {
        this.update(changedProperties);
      } else {
        this._markUpdated();
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false; // Ensure element can accept additional updates after an exception.

      this._markUpdated();

      throw e;
    }

    if (shouldUpdate) {
      if (!(this._updateState & STATE_HAS_UPDATED)) {
        this._updateState = this._updateState | STATE_HAS_UPDATED;
        this.firstUpdated(changedProperties);
      }

      this.updated(changedProperties);
    }
  }

  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */


  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   * @deprecated Override `getUpdateComplete()` instead for forward
   *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
   */


  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async getUpdateComplete() {
   *       await super.getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */


  getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  update(_changedProperties) {
    if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
      // Use forEach so this works even if for/of loops are compiled to for
      // loops expecting arrays
      this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));

      this._reflectingProperties = undefined;
    }

    this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  firstUpdated(_changedProperties) {}

}

exports.UpdatingElement = UpdatingElement;
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;
},{}],"node_modules/lit-element/lib/decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = property;
exports.internalProperty = internalProperty;
exports.query = query;
exports.queryAsync = queryAsync;
exports.queryAll = queryAll;
exports.eventOptions = eventOptions;
exports.queryAssignedNodes = queryAssignedNodes;
exports.state = exports.customElement = void 0;

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
const legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

const standardCustomElement = (tagName, descriptor) => {
  const {
    kind,
    elements
  } = descriptor;
  return {
    kind,
    elements,

    // This callback is called once the class is otherwise fully defined
    finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }

  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */


const customElement = tagName => classOrDescriptor => typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);

exports.customElement = customElement;

const standardProperty = (options, element) => {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign(Object.assign({}, element), {
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},

      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },

      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    };
  }
};

const legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return (protoOrDescriptor, name) => name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 * @deprecated `internalProperty` has been renamed to `state` in lit-element
 *     3.0. Please update to `state` now to be compatible with 3.0.
 */


function internalProperty(options) {
  return property({
    attribute: false,
    hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged
  });
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 */


const state = options => internalProperty(options);
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */


exports.state = state;

function query(selector, cache) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelector(selector);
      },

      enumerable: true,
      configurable: true
    };

    if (cache) {
      const prop = name !== undefined ? name : protoOrDescriptor.key;
      const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;

      descriptor.get = function () {
        if (this[key] === undefined) {
          this[key] = this.renderRoot.querySelector(selector);
        }

        return this[key];
      };
    }

    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
} // Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.

/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */


function queryAsync(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      async get() {
        await this.updateComplete;
        return this.renderRoot.querySelector(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */


function queryAll(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelectorAll(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

const legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};

const standardQuery = (descriptor, element) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor
});

const standardEventOptions = (options, element) => {
  return Object.assign(Object.assign({}, element), {
    finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }

  });
};

const legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */


function eventOptions(options) {
  // Return value typed as any to prevent TypeScript from complaining that
  // standard decorator function signature does not match TypeScript decorator
  // signature
  // TODO(kschaaf): unclear why it was only failing on this decorator and not
  // the others
  return (protoOrDescriptor, name) => name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
} // x-browser support for matches
// tslint:disable-next-line:no-any


const ElementProto = Element.prototype;
const legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAssignedNodes(slotName = '', flatten = false, selector = '') {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        const slotSelector = `slot${slotName ? `[name=${slotName}]` : ':not([name])'}`;
        const slot = this.renderRoot.querySelector(slotSelector);
        let nodes = slot && slot.assignedNodes({
          flatten
        });

        if (nodes && selector) {
          nodes = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE && ( // tslint:disable-next-line:no-any testing existence on older browsers
          node.matches ? node.matches(selector) : legacyMatches.call(node, selector)));
        }

        return nodes;
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
},{}],"node_modules/lit-element/lib/css-tag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.unsafeCSS = exports.CSSResult = exports.supportsAdoptingStyleSheets = void 0;

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

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
exports.supportsAdoptingStyleSheets = supportsAdoptingStyleSheets;
const constructionToken = Symbol();

class CSSResult {
  constructor(cssText, safeToken) {
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  get styleSheet() {
    if (this._styleSheet === undefined) {
      // Note, if `supportsAdoptingStyleSheets` is true then we assume
      // CSSStyleSheet is constructable.
      if (supportsAdoptingStyleSheets) {
        this._styleSheet = new CSSStyleSheet();

        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }

    return this._styleSheet;
  }

  toString() {
    return this.cssText;
  }

}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */


exports.CSSResult = CSSResult;

const unsafeCSS = value => {
  return new CSSResult(String(value), constructionToken);
};

exports.unsafeCSS = unsafeCSS;

const textFromCSSResult = value => {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


const css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};

exports.css = css;
},{}],"node_modules/lit-element/lit-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  ReactiveElement: true,
  html: true,
  svg: true,
  TemplateResult: true,
  SVGTemplateResult: true
};
Object.defineProperty(exports, "ReactiveElement", {
  enumerable: true,
  get: function () {
    return _updatingElement.UpdatingElement;
  }
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _litHtml.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function () {
    return _litHtml.svg;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function () {
    return _litHtml.TemplateResult;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function () {
    return _litHtml.SVGTemplateResult;
  }
});
exports.LitElement = void 0;

var _shadyRender = require("lit-html/lib/shady-render.js");

var _updatingElement = require("./lib/updating-element.js");

Object.keys(_updatingElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _updatingElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _updatingElement[key];
    }
  });
});

var _decorators = require("./lib/decorators.js");

Object.keys(_decorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _decorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _decorators[key];
    }
  });
});

var _litHtml = require("lit-html/lit-html.js");

var _cssTag = require("./lib/css-tag.js");

Object.keys(_cssTag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cssTag[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cssTag[key];
    }
  });
});

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
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

class LitElement extends _updatingElement.UpdatingElement {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */


  static _getUniqueStyles() {
    // Only gather styles once per class
    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
      return;
    } // Take care not to call `this.getStyles()` multiple times since this
    // generates new CSSResults each time.
    // TODO(sorvell): Since we do not cache CSSResults by input, any
    // shared styles will generate new stylesheet objects, which is wasteful.
    // This should be addressed when a browser ships constructable
    // stylesheets.


    const userStyles = this.getStyles();

    if (Array.isArray(userStyles)) {
      // De-duplicate styles preserving the _last_ instance in the set.
      // This is a performance optimization to avoid duplicated styles that can
      // occur especially when composing via subclassing.
      // The last item is kept to try to preserve the cascade order with the
      // assumption that it's most important that last added styles override
      // previous styles.
      const addStyles = (styles, set) => styles.reduceRight((set, s) => // Note: On IE set.add() does not return the set
      Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set); // Array.from does not work on Set in IE, otherwise return
      // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


      const set = addStyles(userStyles, new Set());
      const styles = [];
      set.forEach(v => styles.unshift(v));
      this._styles = styles;
    } else {
      this._styles = userStyles === undefined ? [] : [userStyles];
    } // Ensure that there are no invalid CSSStyleSheet instances here. They are
    // invalid in two conditions.
    // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
    //     this is impossible to check except via .replaceSync or use
    // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
    //     false)


    this._styles = this._styles.map(s => {
      if (s instanceof CSSStyleSheet && !_cssTag.supportsAdoptingStyleSheets) {
        // Flatten the cssText from the passed constructible stylesheet (or
        // undetectable non-constructible stylesheet). The user might have
        // expected to update their stylesheets over time, but the alternative
        // is a crash.
        const cssText = Array.prototype.slice.call(s.cssRules).reduce((css, rule) => css + rule.cssText, '');
        return (0, _cssTag.unsafeCSS)(cssText);
      }

      return s;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */


  initialize() {
    super.initialize();

    this.constructor._getUniqueStyles();

    this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
    // element's getRootNode(). While this could be done, we're choosing not to
    // support this now since it would require different logic around de-duping.

    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */


  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */


  adoptStyles() {
    const styles = this.constructor._styles;

    if (styles.length === 0) {
      return;
    } // There are three separate cases here based on Shadow DOM support.
    // (1) shadowRoot polyfilled: use ShadyCSS
    // (2) shadowRoot.adoptedStyleSheets available: use it
    // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
    // rendering


    if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s => s.cssText), this.localName);
    } else if (_cssTag.supportsAdoptingStyleSheets) {
      this.renderRoot.adoptedStyleSheets = styles.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
      // This must be done after rendering so the actual style insertion is done
      // in `update`.
      this._needsShimAdoptedStyleSheets = true;
    }
  }

  connectedCallback() {
    super.connectedCallback(); // Note, first update/render handles styleElement so we only call this if
    // connected after first update.

    if (this.hasUpdated && window.ShadyCSS !== undefined) {
      window.ShadyCSS.styleElement(this);
    }
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */


  update(changedProperties) {
    // Setting properties in `render` should not trigger an update. Since
    // updates are allowed after super.update, it's important to call `render`
    // before that.
    const templateResult = this.render();
    super.update(changedProperties); // If render is not implemented by the component, don't call lit-html render

    if (templateResult !== renderNotImplemented) {
      this.constructor.render(templateResult, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      });
    } // When native Shadow DOM is used but adoptedStyles are not supported,
    // insert styling after rendering to ensure adoptedStyles have highest
    // priority.


    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;

      this.constructor._styles.forEach(s => {
        const style = document.createElement('style');
        style.textContent = s.cssText;
        this.renderRoot.appendChild(style);
      });
    }
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */


  render() {
    return renderNotImplemented;
  }

}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */


exports.LitElement = LitElement;
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = _shadyRender.render;
/** @nocollapse */

LitElement.shadowRootOptions = {
  mode: 'open'
};
},{"lit-html/lib/shady-render.js":"node_modules/lit-html/lib/shady-render.js","./lib/updating-element.js":"node_modules/lit-element/lib/updating-element.js","./lib/decorators.js":"node_modules/lit-element/lib/decorators.js","lit-html/lit-html.js":"node_modules/lit-html/lit-html.js","./lib/css-tag.js":"node_modules/lit-element/lib/css-tag.js"}],"node_modules/linkset/dist/core/linkset.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkset = void 0;
;
/**
 * A set of links.
 * @internal
 */
var Linkset = /** @class */ (function () {
    function Linkset(links) {
        this.elements = links;
        this.size = links.length;
    }
    /**
     * {@inheritDoc LinksetInterface.hasLinkTo}
     */
    Linkset.prototype.hasLinkTo = function (relationType) {
        return this.elements.some(function (link) { return link.rel === relationType; });
    };
    /**
     * {@inheritDoc LinksetInterface.linkTo}
     */
    Linkset.prototype.linkTo = function (relationType) {
        return this.elements.find(function (link) { return link.rel === relationType; });
    };
    /**
     * {@inheritDoc LinksetInterface.linksTo}
     */
    Linkset.prototype.linksTo = function (relationType) {
        return new Linkset(this.elements.filter(function (link) { return link.rel === relationType; }));
    };
    /**
     * {@inheritDoc LinksetInterface.linksFrom}
     */
    Linkset.prototype.linksFrom = function (anchor) {
        return new Linkset(this.elements.filter(function (link) { return link.anchor === anchor; }));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttribute}
     */
    Linkset.prototype.linksWithAttribute = function (name) {
        return new Linkset(this.elements.filter(function (link) { return Object.prototype.hasOwnProperty.call(link.attributes, name); }));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttributeValue}
     */
    Linkset.prototype.linksWithAttributeValue = function (name, value) {
        return new Linkset(this.linksWithAttribute(name).elements.filter(function (link) {
            var values = (Array.isArray(link.attributes[name]) ? link.attributes[name] : [link.attributes[name]]);
            return values.some(function (v) { return isAttributeEqual(v, value); });
        }));
    };
    /**
     * Implements the iterable protocol.
     */
    Linkset.prototype[Symbol.iterator] = function () {
        var elems = this.elements;
        var pointer = 0;
        return {
            next: function () {
                if (pointer < elems.length) {
                    return { value: elems[pointer++], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    };
    /**
     * {@inheritDoc NormalizableLinksetInterface.normalize}
     */
    Linkset.prototype.normalize = function () {
        var contexts = {};
        this.elements.forEach(function (_a) {
            var anchor = _a.anchor, rel = _a.rel, target = __rest(_a, ["anchor", "rel"]);
            if (!Object.hasOwnProperty.call(contexts, anchor))
                contexts[anchor] = {};
            if (!Object.hasOwnProperty.call(contexts[anchor], rel))
                contexts[anchor][rel] = [];
            var href = target.href, attributes = target.attributes;
            var targetObject = __assign({ href: href }, attributes);
            contexts[anchor][rel].push(targetObject);
        });
        return {
            linkset: Object.entries(contexts).reduce(function (carry, _a) {
                var anchor = _a[0], rels = _a[1];
                return __spreadArray(__spreadArray([], carry), [__assign({ anchor: anchor }, rels)]);
            }, []),
        };
    };
    return Linkset;
}());
exports.Linkset = Linkset;
/**
 * Checks target attribute values for equality, respecting that a value may be internationalized.
 * @param a - A target attribute value.
 * @param b - Another target attribute value.
 * @returns boolean
 *   True if both values are strictly equivalent. If the input values are internationalized, both the value and language
 *   must match.
 * {@see {@link TargetAttributeValue}}
 */
function isAttributeEqual(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a === b;
    }
    return a.value === a.value
        && a.language === a.language;
}

},{}],"node_modules/linkset-menu/dist/core/menu-element.js":[function(require,module,exports) {
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTree = exports.MenuElement = void 0;
var MenuElement = /** @class */ (function () {
    function MenuElement(link, children) {
        if (children === void 0) { children = []; }
        this.link = link;
        this.children = buildTree(__spreadArray([], children));
    }
    Object.defineProperty(MenuElement.prototype, "title", {
        get: function () {
            return this.link.attributes.title;
        },
        enumerable: false,
        configurable: true
    });
    return MenuElement;
}());
exports.MenuElement = MenuElement;
function buildTree(links) {
    // If there aren't any links or there is only one link, take a shortcut and return early.
    if (links.length < 2) {
        return links.length ? [new MenuElement(links.shift())] : [];
    }
    // Sorting by the hierarchy key is essential to capture link order and for the algorithm below to correctly build
    // subtrees.
    links.sort(function (a, b) {
        return a.attributes['drupal-menu-hierarchy'][0].localeCompare(b.attributes['drupal-menu-hierarchy'][0]);
    });
    var elements = [];
    var last;
    var children = [];
    do {
        var curr = links.shift();
        if (last) {
            if (curr.attributes['drupal-menu-hierarchy'][0].length > last.attributes['drupal-menu-hierarchy'][0].length) {
                children.push(curr);
            }
            else {
                elements.push(new MenuElement(last, children));
                last = curr;
                children = [];
            }
        }
        else {
            last = curr;
        }
    } while (links.length);
    elements.push(new MenuElement(last, children));
    return elements;
}
exports.buildTree = buildTree;

},{}],"node_modules/linkset-menu/dist/core/menu.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var linkset_1 = require("linkset/dist/core/linkset");
var menu_element_1 = require("./menu-element");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(machineName, linkset) {
        var _this = _super.call(this, linkset.elements) || this;
        _this.id = machineName;
        _this.tree = menu_element_1.buildTree(__spreadArray([], _this.elements));
        return _this;
    }
    /**
     * {@inheritDoc LinksetInterface.linksTo}
     */
    Menu.prototype.linksTo = function (relationType) {
        return new Menu(this.id, _super.prototype.linksTo.call(this, relationType));
    };
    /**
     * {@inheritDoc LinksetInterface.linksFrom}
     */
    Menu.prototype.linksFrom = function (anchor) {
        return new Menu(this.id, _super.prototype.linksTo.call(this, anchor));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttribute}
     */
    Menu.prototype.linksWithAttribute = function (name) {
        return new Menu(this.id, _super.prototype.linksWithAttribute.call(this, name));
    };
    /**
     * {@inheritdoc LinksetInterface.linksWithAttributeValue}
     */
    Menu.prototype.linksWithAttributeValue = function (name, value) {
        return new Menu(this.id, _super.prototype.linksWithAttributeValue.call(this, name, value));
    };
    return Menu;
}(linkset_1.Linkset));
exports.Menu = Menu;

},{"linkset/dist/core/linkset":"node_modules/linkset/dist/core/linkset.js","./menu-element":"node_modules/linkset-menu/dist/core/menu-element.js"}],"node_modules/linkset/dist/core/link.js":[function(require,module,exports) {
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
;
/**
 * A web link.
 * @internal
 */
var Link = /** @class */ (function () {
    /**
     * Constructs a new link.
     * @param parameters - the link's parameters.
     * @see {@link LinkParameters}
     */
    function Link(parameters) {
        var anchor = parameters.anchor, rel = parameters.rel, href = parameters.href, attributes = __rest(parameters, ["anchor", "rel", "href"]);
        this.anchor = anchor;
        this.rel = rel;
        this.href = href;
        this.attributes = attributes;
    }
    return Link;
}());
exports.Link = Link;

},{}],"node_modules/linkset/dist/index.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.denormalize = exports.parse = void 0;
var linkset_1 = require("./core/linkset");
var link_1 = require("./core/link");
/**
 * Denormalizes a set of links into an instance of a Linkset.
 * {@inheritDoc Linkset.from}
 * {@see {@link NormalizedLinksetInterface}}
 */
function denormalize(normalized) {
    var links = [];
    normalized.linkset.forEach(function (contextObject) {
        var anchor = contextObject.anchor, rels = __rest(contextObject, ["anchor"]);
        Object.keys(rels).forEach(function (rel) {
            contextObject[rel].forEach(function (targetObject) {
                links.push(new link_1.Link(__assign({ anchor: anchor, rel: rel }, targetObject)));
            });
        });
    });
    return new linkset_1.Linkset(links);
}
exports.denormalize = denormalize;
/**
 * Parses an application/linkset+json document into a Linkset instance.
 * {@see {@link denormalize}}
 */
function parse(json) {
    return denormalize(JSON.parse(json));
}
exports.parse = parse;

},{"./core/linkset":"node_modules/linkset/dist/core/linkset.js","./core/link":"node_modules/linkset/dist/core/link.js"}],"node_modules/linkset-menu/dist/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denormalize = exports.parse = void 0;
var menu_1 = require("./core/menu");
var linkset_1 = require("linkset");
/**
 * Denormalizes a set of links into an instance of a Menu.
 * {@inheritDoc Menu.from}
 * {@see {@link NormalizedMenuInterface}}
 */
function denormalize(normalized, menuID) {
    var linkset = linkset_1.denormalize(normalized);
    var machineNames = [];
    if (!menuID) {
        linkset.linksWithAttribute('drupal-menu-machine-name').elements.forEach(function (link) {
            if (!machineNames.includes(link.attributes["drupal-menu-machine-name"][0])) {
                machineNames.push(link.attributes["drupal-menu-machine-name"][0]);
            }
        });
    }
    else {
        machineNames.push(menuID);
    }
    var menus = machineNames.map(function (machineName) {
        return new menu_1.Menu(machineName, linkset.linksWithAttributeValue('drupal-menu-machine-name', machineName));
    });
    return menuID ? menus.shift() : menus;
}
exports.denormalize = denormalize;
/**
 * Parses Drupal menu JSON into a Menu instance.
 * {@see {@link denormalize}}
 */
function parse(json, menuID) {
    return denormalize(JSON.parse(json), menuID);
}
exports.parse = parse;

},{"./core/menu":"node_modules/linkset-menu/dist/core/menu.js","linkset":"node_modules/linkset/dist/index.js"}],"src/mixins/delegate-focus-mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DelegateFocusMixin = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var $$tabindex = Symbol('tabindex');
var $$oldTabindex = Symbol('oldTabindex');
var $$newTabindex = Symbol('newTabindex');

var DelegateFocusMixin = function DelegateFocusMixin(superClass) {
  return /*#__PURE__*/function (_superClass) {
    _inherits(_class, _superClass);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);

      if (!_this.hasAttribute('tabindex')) {
        _this.tabIndex = 0;
      }

      return _this;
    }

    _createClass(_class, [{
      key: "tabIndex",
      get: function get() {
        return this[$$tabindex];
      },
      set: function set(value) {
        var oldValue = this[$$tabindex];
        this[$$tabindex] = value;
        this.requestUpdate('tabIndex', oldValue);
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this2 = this;

        this.addEventListener('focusin', function (e) {
          if (e.composedPath()[0] === _this2) {
            _this2._focus();
          }
        });
        this.addEventListener('keydown', function (e) {
          if (!e.defaultPrevented && e.shiftKey && e.keyCode === 9) {
            // Flag is checked in _focus event handler.
            _this2._isShiftTabbing = true;
            HTMLElement.prototype.focus.apply(_this2); // Event handling in IE is asynchronous and the flag is removed asynchronously as well

            setTimeout(function () {
              _this2._isShiftTabbing = false;
            }, 0);
          }
        });
      }
    }, {
      key: "update",
      value: function update(props) {
        if (props.has('disabled')) {
          this._disabledChanged(this.disabled, props.get('disabled'));
        }

        if (props.has('tabIndex')) {
          // save value of tabindex, as it can be overridden to
          // undefined in case if the element is disabled
          this[$$newTabindex] = this.tabIndex;

          this._tabIndexChanged(this.tabIndex);
        }

        _get(_getPrototypeOf(_class.prototype), "update", this).call(this, props);
      }
    }, {
      key: "updated",
      value: function updated(props) {
        _get(_getPrototypeOf(_class.prototype), "updated", this).call(this, props);

        if (props.has('disabled')) {
          this.focusElement.disabled = this.disabled;

          if (this.disabled) {
            this.blur();
          }
        }

        if (props.has('tabIndex') && this[$$newTabindex] !== undefined) {
          this.focusElement.tabIndex = this[$$newTabindex];
          this[$$newTabindex] = undefined;
        }
      }
      /**
       * Any element extending this mixin is required to implement this getter.
       * It returns the actual focusable element in the component.
       */

    }, {
      key: "focusElement",
      get: function get() {
        window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName, ">"));
        return this;
      }
    }, {
      key: "_focus",
      value: function _focus() {
        if (this._isShiftTabbing) {
          return;
        }

        this.focusElement.focus();
      }
      /**
       * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
       * @protected
       */

    }, {
      key: "focus",
      value: function focus() {
        if (this.disabled) {
          return;
        }

        this.focusElement.focus();
      }
      /**
       * Native bluring in the host element does nothing because it does not have the focus.
       * In chrome it works, but not in FF.
       * @protected
       */

    }, {
      key: "blur",
      value: function blur() {
        this.focusElement.blur();
      }
    }, {
      key: "_disabledChanged",
      value: function _disabledChanged(disabled, oldDisabled) {
        if (disabled) {
          this[$$oldTabindex] = this.tabIndex;
          this.tabIndex = -1;
          this.setAttribute('aria-disabled', 'true');
        } else if (oldDisabled) {
          if (this[$$oldTabindex] !== undefined) {
            this.tabIndex = this[$$oldTabindex];
          }

          this.removeAttribute('aria-disabled');
        }
      }
    }, {
      key: "_tabIndexChanged",
      value: function _tabIndexChanged(tabindex) {
        if (this.disabled && tabindex) {
          // If tabindex attribute was changed while checkbox was disabled
          if (this.tabIndex !== -1) {
            this[$$oldTabindex] = this.tabIndex;
          }

          this.tabIndex = null;
        }
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          tabIndex: {
            converter: {
              fromAttribute: Number,
              toAttribute: function toAttribute(value) {
                return value == null ? null : value.toString();
              }
            },
            noAccessor: true,
            reflect: true
          },

          /**
           * If true, the user cannot interact with this element.
           */
          disabled: {
            type: Boolean,
            reflect: true
          }
        };
      }
    }]);

    return _class;
  }(superClass);
};

exports.DelegateFocusMixin = DelegateFocusMixin;
},{}],"src/styles/az-button-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _litElement.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .button {\n        display: inline-block;\n        padding: 0.375rem 0.75rem;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border-style: solid;\n        border-width: 1px;\n        border-radius: 0;\n        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n        display: inline-block;\n        margin-bottom: 0;\n        font-weight: 700;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        -ms-touch-action: manipulation;\n        touch-action: manipulation;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid transparent;\n        padding: 6px 12px;\n        font-size: 16px;\n        line-height: 1.5;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        font-weight: 500;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .04em;\n        white-space: normal;\n        border-width: 2px;\n        border-color: transparent;\n    }\n    .button:hover {\n        text-decoration: none;\n    }\n    .button:focus {\n        outline: 0;\n        box-shadow: 0 0 0 0;\n    }\n    .button[disabled] {\n        pointer-events: none;\n        opacity: 0.65;\n    }\n    @media (prefers-reduced-motion: reduce) {\n        .button {\n            transition: none;\n        }\n    }\n    :host {\n        outline: none;\n        margin-right: 4px;\n        font-family: inherit;\n    }\n    :host([size=\"large\"]) .button {\n        padding: 0.5rem 1rem;\n        font-size: 1.25rem;\n        line-height: 1.5;\n        border-radius: 0.3rem;\n    }\n    :host([size=\"small\"]) .button {\n        padding: 0.25rem 0.5rem;\n        font-size: 0.875rem;\n        line-height: 1.5;\n        border-radius: 0.2rem;\n    }\n    :host([block]){\n        display: block;\n    }\n    :host([block]) .button {\n        display: block;\n        width: 100%;\n        padding: 6px 0;\n    }\n    :host([redbar]),\n    :host([redbar]) .button {\n        width: 60px;\n        height: 50px;\n        display: inline-block;\n    }\n    :host([redbar]) ::slotted(svg) {\n        margin: -5px 0 0 0;\n        font-size: 24px;\n        line-height: 24px;\n    }\n    :host([theme=\"primary\"]) .button {\n        color: #fff;\n        background-color: #8b0015;\n    }\n\n    :host([theme=\"primary\"]) .button:hover,\n    :host([theme=\"primary\"]) .button:focus {\n        border-color: transparent;\n        background-color: #ab0520;\n    }\n    :host([theme=\"primary\"][outline]) .button {\n        color: #8b0015;\n        border-color: #8b0015;\n        background-color: transparent;\n    }\n    :host([theme=\"primary\"][outline]) .button:hover,\n    :host([theme=\"primary\"][outline]) .button:focus {\n        color: #fff;\n        background-color: #8b0015;\n        border-color: #8b0015;\n    }\n    :host([theme=\"primary\"][outline]) .button[disabled] {\n        background-color: transparent;\n    }\n    :host([theme=\"az-red\"]) .button,\n    :host([theme=\"red\"]) .button {\n        color: #fff;\n        background-color: #ab0520;\n    }\n    :host([theme=\"red\"]) .button:hover,\n    :host([theme=\"red\"]) .button:focus,\n    :host([theme=\"az-red\"]) .button:hover,\n    :host([theme=\"az-red\"]) .button:focus {\n        border-color: transparent;\n        background-color: #8b0015;\n    }\n    :host([theme=\"az-red\"][outline]) .button,\n    :host([theme=\"red\"][outline]) .button {\n        color: #8b0015;\n        border-color: #8b0015;\n        background-color: transparent;\n    }\n    :host([theme=\"az-red\"][outline]) .button:hover,\n    :host([theme=\"az-red\"][outline]) .button:focus,\n    :host([theme=\"red\"][outline]) .button:hover,\n    :host([theme=\"red\"][outline]) .button:focus {\n        color: #fff;\n        background-color: #8b0015;\n        border-color: #8b0015;\n    }\n\n    // Bloom\n    :host([theme=\"bloom\"]) .button {\n        color: #fff;\n        background-color: #8b0015;\n    }\n    :host([theme=\"bloom\"]) .button:hover,\n    :host([theme=\"bloom\"]) .button:focus {\n        border-color: transparent;\n        background-color: #ab0520;\n    }\n\n    // Bloom Outline\n    :host([theme=\"bloom\"][outline]) .button {\n        color: white;\n        border-color: rgb(239, 64, 86) !important;\n        background-color: transparent;\n    }\n    :host([theme=\"bloom\"][outline]) .button:hover,\n    :host([theme=\"bloom\"][outline]) .button:focus {\n        color: white;\n        background-color: rgb(139, 0, 21) !important;\n        border-color: rgb(139, 0, 21) !important;\n    }\n    :host([theme=\"bloom\"][outline]) .button[disabled] {\n        background-color: transparent;\n    }\n    ::slotted(.icon-text) {\n        display: block;\n        margin: -5px;\n        font-size: 10px;\n        line-height: 10px;\n    }\n"])));

exports.default = _default;
},{"lit-element":"node_modules/lit-element/lit-element.js"}],"src/az-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AzButton = void 0;

var _litElement = require("lit-element");

var _delegateFocusMixin = require("./mixins/delegate-focus-mixin.js");

var _azButtonCss = _interopRequireDefault(require("./styles/az-button-css.js"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AzButton = /*#__PURE__*/function (_DelegateFocusMixin) {
  _inherits(AzButton, _DelegateFocusMixin);

  var _super = _createSuper(AzButton);

  function AzButton() {
    _classCallCheck(this, AzButton);

    return _super.call(this);
  }

  _createClass(AzButton, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      // console.log('attribute change: ', name, newVal);
      _get(_getPrototypeOf(AzButton.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
    }
  }, {
    key: "changeAttributes",
    value: function changeAttributes() {
      this.setAttribute('closed', 'true');
      this.setAttribute('aria-expanded', 'true');
      this.requestUpdate();
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(e) {
      if (this.event) {
        var event = new Event(this.event);
        document.querySelector(this.target).dispatchEvent(event);
        return;
      } else {
        var openAzOffCanvasMenu = new Event('open-az-offcanvas-menu');
        document.querySelector(this.target).dispatchEvent(openAzOffCanvasMenu);
        console.log(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), this.link ? (0, _litElement.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <a class=\"button\" href=\"", "\" ?disabled=\"", "\">\n              <slot></slot>\n            </a>\n          "])), this.link, this.disabled) : (0, _litElement.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            <button type=\"button\" class=\"button\" ?disabled=\"", "\" role=\"presentation\" @click=\"", "\">\n              <slot></slot>\n            </button>\n          "])), this.disabled, this._handleClick));
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      _get(_getPrototypeOf(AzButton.prototype), "firstUpdated", this).call(this);

      this.setAttribute('role', 'button');
    }
    /**
     * @protected
     */

  }, {
    key: "focusElement",
    get: function get() {
      return this.shadowRoot.querySelector('.button');
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        /**
         * Set to URL to render <a> element styled as button.
         */
        link: {
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
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_azButtonCss.default];
    }
  }]);

  return AzButton;
}((0, _delegateFocusMixin.DelegateFocusMixin)(_litElement.LitElement));

exports.AzButton = AzButton;
customElements.get('az-button') || customElements.define('az-button', AzButton);
},{"lit-element":"node_modules/lit-element/lit-element.js","./mixins/delegate-focus-mixin.js":"src/mixins/delegate-focus-mixin.js","./styles/az-button-css.js":"src/styles/az-button-css.js"}],"src/az-redbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AzRedbar = void 0;

var _litElement = require("lit-element");

var _linksetMenu = require("linkset-menu");

require("./az-button");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
* TODO: Create a class for your element that extends the LitElement
* base class.
*/
var AzRedbar = /*#__PURE__*/function (_LitElement) {
  _inherits(AzRedbar, _LitElement);

  var _super = _createSuper(AzRedbar);

  function AzRedbar() {
    var _this;

    _classCallCheck(this, AzRedbar);

    _this = _super.call(this);
    _this.tree = [];
    _this.isLoading = false;
    _this.loadingMessage = 'Loading...';
    return _this;
  }

  _createClass(AzRedbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(AzRedbar.prototype), "connectedCallback", this).call(this);

      if (this.baseUrl && this.menuId) {
        this.fetchData(this.baseUrl, this.menuId);
      }
    }
  }, {
    key: "azMenuParentTemplate",
    value: function azMenuParentTemplate(title, children) {
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t\t<button\n\t\t\t\t\t\t@click=\"", "\"\n\t\t\t\t\t\trole=\"button\"\n\t\t\t\t\t\taria-expanded=\"false\"\n\t\t\t\t\t\taria-haspopup=\"true\"\n\t\t\t\t\t\thref=\"#\"\n\t\t\t\t\t\tclass=\"resource-menu btn btn-outline-red\"\n\t\t\t\t\t>\n\t\t\t\t\t\t", "\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu pull-right\">\n\t\t\t\t\t\t", "\n\t\t\t\t\t\t</div>\n\t\t\t\t"])), AzRedbar.openMenu, title, this.renderAzMenuLevel(children));
    }
  }, {
    key: "renderAzMenuLevel",
    value: function renderAzMenuLevel(level) {
      var _this2 = this;

      var levels = level.map(function (item) {
        return _this2.renderAzMenuItem(item);
      });
      return AzRedbar.azMenuLevelTemplate(levels);
    }
  }, {
    key: "renderAzMenuItem",
    value: function renderAzMenuItem(item) {
      var _item$link, _item$link$attributes, _item$link2;

      var title = item === null || item === void 0 ? void 0 : (_item$link = item.link) === null || _item$link === void 0 ? void 0 : (_item$link$attributes = _item$link.attributes) === null || _item$link$attributes === void 0 ? void 0 : _item$link$attributes.title;
      var href = item === null || item === void 0 ? void 0 : (_item$link2 = item.link) === null || _item$link2 === void 0 ? void 0 : _item$link2.href;
      var children = item === null || item === void 0 ? void 0 : item.children;

      if (children.length) {
        return this.azMenuParentTemplate(title, children);
      }

      if (href) {
        return AzRedbar.azMenuLinkTemplate(title, href);
      }

      return AzRedbar.azMenuItemTemplate(title);
    }
  }, {
    key: "fetchData",
    value: function fetchData(baseURL, menuID) {
      var _this3 = this;

      this.isLoading = true;
      var url = "".concat(baseURL, "/system/menu/").concat(menuID, "/linkset");
      fetch(url, {}).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        _this3.isLoading = false;
        throw new Error("Unable to fetch ".concat(url, ". ").concat(response.status, " ").concat(response.statusText));
      }).then(function (json) {
        try {
          var denormalized = (0, _linksetMenu.denormalize)(json, menuID);
          _this3.tree = denormalized.tree;
        } catch (e) {
          throw new Error('Unable to denormalize menu.');
        }

        _this3.isLoading = false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t<header class=\"bg-red arizona-header\" id=\"header_arizona\" role=\"banner\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<section class=\"ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"search-block-form block block-search block-search-form-block\" data-drupal-selector=\"search-block-form\" id=\"block-az-barrio-search\" role=\"search\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form action=\"https://arizona.edu/search/google\" method=\"GET\" id=\"search-block-form\" accept-charset=\"UTF-8\" class=\"search-form search-block-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"edit-keys\" class=\"sr-only\">Search</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input title=\"Enter the terms you wish to search for.\" data-drupal-selector=\"edit-keys\" type=\"search\" id=\"edit-keys\" name=\"keys\" value=\"\" size=\"15\" maxlength=\"128\" class=\"form-search form-control\" placeholder=\"Search this site\" aria-label=\"Search this site\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-drupal-selector=\"edit-actions\" class=\"form-actions js-form-wrapper input-group-append\" id=\"edit-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button data-drupal-selector=\"edit-submit\" type=\"submit\" id=\"edit-submit\" value=\"Search\" class=\"button js-form-submit form-submit btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg id=\"search-icon\" title=\"search\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#8B0015\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"resources\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t<section class=\"redbar-buttons d-lg-none\">\n\t\t\t\t\t\t\t\t\t\t\t\t<az-button theme=\"red\" redbar role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" target=\"az-main-menu\" aria-controls=\"navbarOffcanvasDemo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon\"  id=\"button-search-icon\" title=\"search\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-text\"> search </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</az-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<az-button theme=\"red\" redbar role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" target=\"az-main-menu\" aria-controls=\"navbarOffcanvasDemo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon\" title=\"menu\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-text\"> menu </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</az-button>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</header>\n\t\t\t"])), this.isLoading ? (0, _litElement.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" href=\"#\" class=\"resource-menu btn btn-outline-red\"><slot name=\"loading\">", "</slot></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"])), this.loadingMessage) : this.renderAzMenuLevel(this.tree));
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\t\t\t\t\t* {\n\t\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t}\n\t\t\t\t\t\theader {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.arizona-header {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\tbackground-color: #ab0520;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.container {\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tpadding-right: 15px;\n\t\t\t\t\t\t\t\tpadding-left: 15px;\n\t\t\t\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.row {\n\t\t\t\t\t\t\t\tdisplay: -ms-flexbox;\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\tmargin-right: -15px;\n\t\t\t\t\t\t\t\tmargin-left: -15px;\n\t\t\t\t\t\t\t\tpadding-top: 6.59px;\n\t\t\t\t\t\t\t\tpadding-bottom: 8.59px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.row section{\n\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.redbar-buttons {\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\theight: 50px;\n\t\t\t\t\t\t\t\tmax-height: 50px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.arizona-header {\n\t\t\t\t\t\t\t\theight: 50px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media (min-width: 576px) {\n\t\t\t\t\t\t\t\t.container, .container-sm {\n\t\t\t\t\t\t\t\t\t\tmax-width: 540px;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\t\t\t.container, .container-md, .container-sm {\n\t\t\t\t\t\t\t\t\t\tmax-width: 720px;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 992px) {\n\t\t\t\t\t\t\t\t.container, .container-lg, .container-md, .container-sm {\n\t\t\t\t\t\t\t\t\t\tmax-width: 960px;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 1200px){\n\t\t\t\t\t\t\t\t.container, .container-lg, .container-md, .container-sm, .container-xl {\n\t\t\t\t\t\t\t\t\t\tmax-width: 1140px;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.arizona-line-logo {\n\t\t\t\t\t\t\t\twidth: 211px;\n\t\t\t\t\t\t\t\theight: 16px;\n\t\t\t\t\t\t\t\tmargin: 17px 20px 17px 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 576px){\n\t\t\t\t\t\t\t\tsvg#search-icon {\n\t\t\t\t\t\t\t\t\t\twidth: 266.41px;\n\t\t\t\t\t\t\t\t\t\theight: 19.8px;\n\t\t\t\t\t\t\t\t\t\tmargin: 15.11px 20px 15.1px 10px;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.ml-auto, .mx-auto {\n\t\t\t\t\t\t\t\tmargin-left: auto!important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.d-none {\n\t\t\t\t\t\t\t\tdisplay: none!important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 992px) {\n\t\t\t\t\t\t\t\t.d-lg-block {\n\t\t\t\t\t\t\t\t\t\t-webkit-box-orient: horizontal!important;\n\t\t\t\t\t\t\t\t\t\t-webkit-box-direction: normal!important;\n\t\t\t\t\t\t\t\t\t\t-ms-flex-direction: row!important;\n\t\t\t\t\t\t\t\t\t\tflex-direction: row!important;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex !important;                }\n\t\t\t\t\t\t\t\t.d-lg-none {\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: none !important;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 1200px) {\n\t\t\t\t\t\t\t\t.d-xl-block {\n\t\t\t\t\t\t\t\t\t\t-webkit-box-orient: horizontal!important;\n\t\t\t\t\t\t\t\t\t\t-webkit-box-direction: normal!important;\n\t\t\t\t\t\t\t\t\t\t-ms-flex-direction: row!important;\n\t\t\t\t\t\t\t\t\t\tflex-direction: row!important;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex !important;                }\n\t\t\t\t\t\t}\n\t\t\t\t\t\theader #search-block-form {\n\t\t\t\t\t\t\t\t/* padding: 5px 12px; */\n\t\t\t\t\t\t\t\tflex-flow: row wrap;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search-block-form {\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\tborder: 1px solid var(--bloom);\n\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.form-control:focus {\n\t\t\t\t\t\t\t\tborder-color: hsl(191deg 9% 65%);\n\t\t\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t\t\t\t-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);\n\t\t\t\t\t\t\t\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.sr-only {\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\twidth: 1px;\n\t\t\t\t\t\t\t\theight: 1px;\n\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\tmargin: -1px;\n\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\tclip: rect(0,0,0,0);\n\t\t\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlabel {\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\tmargin-bottom: .5rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.input-group {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\tdisplay: -ms-flexbox;\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t-ms-flex-align: center;\n\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tborder: 1px solid var(--bloom);\n\t\t\t\t\t\t\t\tright: 1px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t-ms-flex: 1 1 auto;\n\t\t\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\t\t\twidth: 1%;\n\t\t\t\t\t\t\t\tmin-width: 0;\n\t\t\t\t\t\t\t\tmargin-bottom: -1px;\n\t\t\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-block-form {\n\t\t\t\t\t\t\t\theight: 37px;\n\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\twidth: 228px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-block-form input {\n\t\t\t\t\t\t\t\theight: 34px;\n\t\t\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\t\t\tpadding: 0px 37px 0px 9px;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tinput[type=\"search\"] {\n\t\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.form-control {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\theight: calc(1.5em + .75rem + 2px);\n\t\t\t\t\t\t\t\tpadding: .375rem .75rem;\n\t\t\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tcolor: #495057;\n\t\t\t\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\t\t\t\tbackground-clip: padding-box;\n\t\t\t\t\t\t\t\t/* border: 1px solid #ced4da; */\n\t\t\t\t\t\t\t\tborder-radius: 0;\n\t\t\t\t\t\t\t\ttransition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t[type=search] {\n\t\t\t\t\t\t\t\toutline-offset: -2px;\n\t\t\t\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-block-form .input-group-append button#edit-submit {\n\t\t\t\t\t\t\t\tbackground-color: hsl(0deg 0% 100%);\n\t\t\t\t\t\t\t\tpadding: 0px;\n\t\t\t\t\t\t\t\theight: 33px;\n\t\t\t\t\t\t\t\twidth: 34px;\n\t\t\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0px;\n\t\t\t\t\t\t\t\tright: -1px;\n\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-block-form .input-group-append button#edit-submit\n\t\t\t\t\t\t.search-block-form .input-group-append button#edit-submit svg {\n\t\t\t\t\t\t\t\theight: 23px;\n\t\t\t\t\t\t\t\twidth: 35px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-block-form .input-group-append button#edit-submit:focus {\n\t\t\t\t\t\t\t\tborder-color: hsl(191deg 9% 65%);\n\t\t\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t\t\t\t-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);\n\t\t\t\t\t\t\t\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.input-group-append button#edit-submit svg {\n\t\t\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t\t\t\twidth: 20px;\n\t\t\t\t\t\t\t\tmargin: 3px 0px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton, input {\n\t\t\t\t\t\t\t\toverflow: visible;\n\t\t\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton, input, optgroup, select, textarea {\n\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\tfont-family: inherit;\n\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\tline-height: inherit;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn:not(:disabled):not(.disabled) {\n\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.bd-example>.btn, .bd-example>.btn-group {\n\t\t\t\t\t\t\t\tmargin-top: .25rem;\n\t\t\t\t\t\t\t\tmargin-bottom: .25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn {\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t\t\tletter-spacing: .04em;\n\t\t\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t\t\t\tborder-width: 2px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn {\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\tcolor: #212529;\n\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\t-webkit-user-select: none;\n\t\t\t\t\t\t\t\t-moz-user-select: none;\n\t\t\t\t\t\t\t\t-ms-user-select: none;\n\t\t\t\t\t\t\t\tuser-select: none;\n\t\t\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\t\t\tborder: 2px solid transparent;\n\t\t\t\t\t\t\t\tpadding: .375rem .75rem;\n\t\t\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tborder-radius: 0;\n\t\t\t\t\t\t\t\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t[type=button], [type=reset], [type=submit], button {\n\t\t\t\t\t\t\t\t-webkit-appearance: button;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton, select {\n\t\t\t\t\t\t\t\ttext-transform: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton, input {\n\t\t\t\t\t\t\t\toverflow: visible;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton, input, optgroup, select, textarea {\n\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\tfont-family: inherit;\n\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\tline-height: inherit;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbutton {\n\t\t\t\t\t\t\t\tborder-radius: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn-hollow-default:hover, .btn-outline-red:hover {\n\t\t\t\t\t\t\t\tbackground-color: #8B0015 !important;\n\t\t\t\t\t\t\t\tborder-color: #8B0015 !important;\n\t\t\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn:hover {\n\t\t\t\t\t\t\t\tcolor: #212529;\n\t\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {\n\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.btn-hollow-default, .btn-outline-red {\n\t\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\t\tborder-color: #ef4056 !important;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.input-group-append {\n\t\t\t\t\t\t\t\tmargin-left: -2px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.input-group-append, .input-group-btn, .input-group-prepend {\n\t\t\t\t\t\t\t\tdisplay: -ms-flexbox;\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.material-icons-sharp {\n\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\tline-height: inherit;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resource-menu .dropdown-menu {\n\t\t\t\t\t\t\t\tfont-size: 0.8125em;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-menu.dropdown-menu-right, .dropdown-menu.pull-right {\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t@media (min-width: 768px){\n\t\t\t\t\t\t\t\t.dropdown-menu {\n\t\t\t\t\t\t\t\t\t\tpadding: 10px 0 0 0;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t.dropdown-menu {\n\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\ttop: 100%;\n\t\t\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\t\t\tz-index: 1000;\n\t\t\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\t\tmin-width: 160px;\n\t\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\t\t\t\tpadding: 5px 0 5px 0;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\tbackground-color: rgba(0,28,72,.97);\n\t\t\t\t\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\t\t\t\t\tborder-radius: 0;\n\t\t\t\t\t\t\t\t\t\t-webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\n\t\t\t\t\t\t\t\t\t\tbox-shadow: 0 6px 12px rgb(0 0 0 / 18%);\n\t\t\t\t\t\t\t\t\t\tbackground-clip: barder-box;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t.dropdown-menu-right {\n\t\t\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\t\t\tleft: auto;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-menu {\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: calc(100% - 1px);\n\t\t\t\t\t\t\t\tleft: 5px;\n\t\t\t\t\t\t\t\tz-index: 1000;\n\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\tpadding: 5px 0px;\n\t\t\t\t\t\t\t\tmargin: 2px 0px 0px;\n\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\t\tbackground-color: rgba(0, 28, 72, 0.97);\n\t\t\t\t\t\t\t\tbackground-clip: padding-box;\n\t\t\t\t\t\t\t\tborder: 1px solid rgba(0, 0, 0, 0.15);\n\t\t\t\t\t\t\t\tborder-radius: 0px;\n\t\t\t\t\t\t\t\tbox-shadow: rgb(0 0 0 / 18%) 0px 6px 12px;\n\t\t\t\t\t\t\t\tmin-width: 0px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-menu.show {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resources {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\tmargin-left: 17px;\n\t\t\t\t\t\t\t\tpadding: 0 2px 0 6px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resources:hover button + .dropdown-menu, .resources button + .dropdown-menu:focus{\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resources .caret{\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\tright: 12px;\n\t\t\t\t\t\t\t\ttop: 19px;\n\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\twidth: 0;\n\t\t\t\t\t\t\t\theight: 0;\n\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\tborder-top: 4px dashed;\n\t\t\t\t\t\t\t\tborder-right: 4px solid transparent;\n\t\t\t\t\t\t\t\tborder-left: 4px solid transparent;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resources button {\n\t\t\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t\t\t\theight: 37px;\n\t\t\t\t\t\t\t\tpadding: 3px 28px 3px 16px;\n\t\t\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.resources button:hover{\n\t\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-item a {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t\t\tpadding: 6px 20px;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-item {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tclear: both;\n\t\t\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.dropdown-item:hover {\n\t\t\t\t\t\t\t\tbackground-color: var(--azurite);\n\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t"])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Base URL of menu endpoint
         */
        baseUrl: {
          type: String
        },

        /**
         * Machine name of menu
         */
        menuId: {
          type: String
        },

        /**
         * Branding heading for the menu
         */
        branding: {
          type: String
        },

        /**
         * An array of objects containing data for the menu tree
         */
        tree: {
          type: Array
        },

        /**
         * Loading state
         */
        isLoading: {
          type: Boolean,
          attribute: false
        },

        /**
         * Loading message
         */
        loadingMessage: {
          type: String
        }
      };
    }
  }, {
    key: "azMenuLevelTemplate",
    value: function azMenuLevelTemplate(levels) {
      return (0, _litElement.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\t\t\t\t\t", "\n\t\t\t\t"])), levels);
    }
  }, {
    key: "openMenu",
    value: function openMenu(e) {
      e.preventDefault();
      var target = e.target;
      var isExpanded = target.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        target.setAttribute('aria-expanded', 'false');
        target.nextElementSibling.classList.remove('show');
      } else {
        target.setAttribute('aria-expanded', 'true');
        target.nextElementSibling.classList.add('show');
      }
    }
  }, {
    key: "azMenuLinkTemplate",
    value: function azMenuLinkTemplate(title, href) {
      return (0, _litElement.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<div class=\"dropdown-item\"><a href=", ">", "</a></div>"])), href, title);
    }
  }, {
    key: "azMenuItemTemplate",
    value: function azMenuItemTemplate(title) {
      return (0, _litElement.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", ""])), title);
    }
  }]);

  return AzRedbar;
}(_litElement.LitElement);

exports.AzRedbar = AzRedbar;
},{"lit-element":"node_modules/lit-element/lit-element.js","linkset-menu":"node_modules/linkset-menu/dist/index.js","./az-button":"src/az-button.js"}],"node_modules/@gdwc/components/gdwc-menu/gdwc-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GdwcMenu = void 0;

var _litElement = require("lit-element");

var _linksetMenu = require("linkset-menu");

class GdwcMenu extends _litElement.LitElement {
  static get styles() {
    return (0, _litElement.css)`
      :host {
        display: block;
      }
      :host(.dark) {
        background-color: black;
        color: white;
      }
      :host(.light) {
        background-color: lightgrey;
      }
      .gdwc-menu li > ul {
        display: none;
      }
      .gdwc-menu ul.show {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Base URL of menu endpoint
       */
      baseUrl: {
        type: String
      },

      /**
       * Machine name of menu
       */
      menuId: {
        type: String
      },

      /**
       * Branding heading for the menu
       */
      branding: {
        type: String
      },

      /**
       * An array of objects containing data for the menu tree
       */
      tree: {
        type: Array
      },

      /**
       * Loading state
       */
      isLoading: {
        type: Boolean,
        attribute: false
      },

      /**
       * Loading message
       */
      loadingMessage: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.tree = [];
    this.isLoading = false;
    this.loadingMessage = 'Loading...';
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.baseUrl && this.menuId) {
      this.fetchData(this.baseUrl, this.menuId);
    }
  }

  static menuLevelTemplate(levels) {
    return (0, _litElement.html)`<ul part="menu-level">
      ${levels}
    </ul>`;
  }

  menuParentTemplate(title, children) {
    return (0, _litElement.html)`<li part="menu-item">
      <a
        @click="${GdwcMenu.openMenu}"
        role="button"
        aria-expanded="false"
        aria-haspopup="true"
        href="#"
      >
        ${title}
      </a>
      ${this.renderMenuLevel(children)}
    </li>`;
  }

  static menuLinkTemplate(title, href) {
    return (0, _litElement.html)`<li part="menu-item"><a href=${href}>${title}</a></li>`;
  }

  static menuItemTemplate(title) {
    return (0, _litElement.html)`<li part="menu-item">${title}</li>`;
  }

  renderMenuLevel(level) {
    const levels = level.map(item => this.renderMenuItem(item));
    return GdwcMenu.menuLevelTemplate(levels);
  }

  renderMenuItem(item) {
    const title = item?.link?.attributes?.title;
    const href = item?.link?.href;
    const children = item?.children;

    if (children.length) {
      return this.menuParentTemplate(title, children);
    }

    if (href) {
      return GdwcMenu.menuLinkTemplate(title, href);
    }

    return GdwcMenu.menuItemTemplate(title);
  }

  fetchData(baseURL, menuID) {
    this.isLoading = true;
    const url = `${baseURL}/system/menu/${menuID}/linkset`;
    fetch(url, {}).then(response => {
      if (response.ok) {
        return response.json();
      }

      this.isLoading = false;
      throw new Error(`Unable to fetch ${url}. ${response.status} ${response.statusText}`);
    }).then(json => {
      try {
        const denormalized = (0, _linksetMenu.denormalize)(json, menuID);
        this.tree = denormalized.tree;
      } catch (e) {
        throw new Error('Unable to denormalize menu.');
      }

      this.isLoading = false;
    });
  }

  render() {
    return (0, _litElement.html)`
      <div class="gdwc-menu">
        <slot name="brand"><h2>${this.branding}</h2></slot>
        ${this.isLoading ? (0, _litElement.html)`<slot name="loading">${this.loadingMessage}</slot>` : this.renderMenuLevel(this.tree)}
      </div>
    `;
  }

  static openMenu(e) {
    e.preventDefault();
    const {
      target
    } = e;
    const isExpanded = target.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      target.setAttribute('aria-expanded', 'false');
      target.nextElementSibling.classList.remove('show');
    } else {
      target.setAttribute('aria-expanded', 'true');
      target.nextElementSibling.classList.add('show');
    }
  }

}

exports.GdwcMenu = GdwcMenu;
},{"lit-element":"node_modules/lit-element/lit-element.js","linkset-menu":"node_modules/linkset-menu/dist/index.js"}],"node_modules/@gdwc/components/menu.js":[function(require,module,exports) {
"use strict";

var _gdwcMenu = require("./gdwc-menu/gdwc-menu.js");

if (!customElements.get('gdwc-menu')) {
  customElements.define('gdwc-menu', _gdwcMenu.GdwcMenu);
}
},{"./gdwc-menu/gdwc-menu.js":"node_modules/@gdwc/components/gdwc-menu/gdwc-menu.js"}],"src/az-main-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainMenu = void 0;

var _litElement = require("lit-element");

var _gdwcMenu = require("@gdwc/components/gdwc-menu/gdwc-menu.js");

require("@gdwc/components/menu");

var _linksetMenu = require("linkset-menu");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MainMenu = /*#__PURE__*/function (_GdwcMenu) {
  _inherits(MainMenu, _GdwcMenu);

  var _super = _createSuper(MainMenu);

  function MainMenu() {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      _this.setAttribute('state', 'closed');

      document.body.style.overflowY = "initial";
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (event) {
      _this.setAttribute('state', 'open');

      document.body.style.overflowY = "hidden";
    });

    _this.tree = [];
    _this.isLoading = false;
    _this.loadingMessage = 'Loading...';
    return _this;
  }

  _createClass(MainMenu, [{
    key: "fetchData",
    value: function fetchData(baseURL, menuID) {
      var _this2 = this;

      this.isLoading = true;
      var url = "".concat(baseURL, "/system/menu/").concat(menuID, "/linkset");
      fetch(url, {}).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        _this2.isLoading = false;
        throw new Error("Unable to fetch ".concat(url, ". ").concat(response.status, " ").concat(response.statusText));
      }).then(function (json) {
        try {
          var denormalized = (0, _linksetMenu.denormalize)(json, menuID);
          _this2.tree = denormalized.tree;
        } catch (e) {
          throw new Error('Unable to denormalize menu.');
        }

        _this2.isLoading = false;
      });
    }
  }, {
    key: "menuParentTemplate",
    value: function menuParentTemplate(title, children) {
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<li part=\"menu-item\" class=\"nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open\">\n      <button\n        @click=\"", "\"\n        role=\"button\"\n        aria-expanded=\"false\"\n        aria-haspopup=\"true\"\n        href=\"#\"\n        class=\"nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle\"\n      >\n        ", "\n      </button>\n      <div class=\"dropdown-menu\">\n\n      ", "\n        </div>\n    </li>"])), MainMenu.openMenu, title, this.renderAzMenuLevel(children));
    }
  }, {
    key: "renderAzMenuLevel",
    value: function renderAzMenuLevel(level) {
      var _this3 = this;

      var levels = level.map(function (item) {
        return _this3.renderAzMenuItem(item);
      });
      return MainMenu.menuLevelTemplate(levels);
    }
  }, {
    key: "renderAzMenuItem",
    value: function renderAzMenuItem(item) {
      var _item$link, _item$link$attributes, _item$link2, _item$link3, _item$link3$attribute;

      var title = item === null || item === void 0 ? void 0 : (_item$link = item.link) === null || _item$link === void 0 ? void 0 : (_item$link$attributes = _item$link.attributes) === null || _item$link$attributes === void 0 ? void 0 : _item$link$attributes.title;
      var href = item === null || item === void 0 ? void 0 : (_item$link2 = item.link) === null || _item$link2 === void 0 ? void 0 : _item$link2.href;
      var children = item === null || item === void 0 ? void 0 : item.children;
      var hierarchy = item === null || item === void 0 ? void 0 : (_item$link3 = item.link) === null || _item$link3 === void 0 ? void 0 : (_item$link3$attribute = _item$link3.attributes) === null || _item$link3$attribute === void 0 ? void 0 : _item$link3$attribute['drupal-menu-hierarchy'];
      hierarchy = hierarchy[0].match(/\./g).length;

      if (children && children.length) {
        return this.menuParentTemplate(title, children);
      }

      if (children && children.length === 0 && href && hierarchy && hierarchy === 1) {
        return MainMenu.azMenuTopLevelLinkTemplate(title, href);
      }

      if (href) {
        return MainMenu.menuLinkTemplate(title, href);
      }

      return MainMenu.menuItemTemplate(title);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(MainMenu.prototype), "connectedCallback", this).call(this);

      if (this.baseUrl && this.menuId) {
        this.fetchData(this.baseUrl, this.menuId);
      }
    }
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (r) {
                  return setTimeout(r, 0);
                });

              case 2:
                this.addEventListener('open-az-offcanvas-menu', this.handleOpen);
                _context.next = 5;
                return new Promise(function (r) {
                  return setTimeout(r, 0);
                });

              case 5:
                this.addEventListener('close-az-offcanvas-menu', this.handleClose);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <div class=\"container\">\n                <nav class=\"navbar-offcanvas offcanvas-toggle\" id=\"navbarOffcanvasDemo\">\n                    <div class=\"navbar-offcanvas-header\">\n                        <div class=\"bg-chili d-flex justify-content-between align-items-center\">\n                            <az-button theme=\"primary\" redbar href=\"/\" aria-expanded=\"false\" aria-haspopup=\"true\" target=\"az-main-menu\" aria-controls=\"navbarOffcanvasDemo\">\n                                <svg class=\"icon\" title=\"home\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z\"/></svg>\n                                <span class=\"icon-text\"> home </span>\n                            </az-button>\n                            <az-button theme=\"primary\" redbar role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" target=\"az-main-menu\" aria-controls=\"navbarOffcanvasDemo\" event=\"close-az-offcanvas-menu\">\n                                <svg class=\"icon\" title=\"close\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\"/></svg>\n                                <span class=\"icon-text\"> close </span>\n                            </az-button>\n                        </div>\n                        <section class=\"region region-navigation-offcanvas\">\n                            <div class=\"search-block-form bg-white navbar-offcanvas-search\" data-drupal-selector=\"search-block-form-2\" id=\"block-az-barrio-offcanvas-searchform\" role=\"search\">\n                                <form action=\"https://arizona.edu/search/google\" method=\"GET\" id=\"search-block-form\" accept-charset=\"UTF-8\" class=\"search-form search-block-form\">\n                                    <div class=\"input-group\">\n                                        <label for=\"edit-keys--2\" class=\"sr-only\">Search</label>\n                                        <input title=\"Enter the terms you wish to search for.\" data-drupal-selector=\"edit-keys\" type=\"search\" id=\"edit-keys--2\" name=\"keys\" value=\"\" size=\"15\" maxlength=\"128\" class=\"form-search form-control\" placeholder=\"Search this site\" aria-label=\"Search this site\">\n                                        <div data-drupal-selector=\"edit-actions\" class=\"form-actions js-form-wrapper input-group-append\" id=\"edit-actions--2\">\n                                            <button data-drupal-selector=\"edit-submit\" type=\"submit\" id=\"edit-submit--2\" value=\"Search\" class=\"button js-form-submit form-submit btn\">\n                                            <svg id=\"search-icon-menu\" title=\"search\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#212529\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </section>\n                    </div>\n                    <section class=\"region region-navigation\">\n                        <nav role=\"navigation\" aria-labelledby=\"block-az-barrio-main-menu-menu\" id=\"block-az-barrio-main-menu\" class=\"block block-menu navigation menu--main\">\n                            <h2 class=\"sr-only\" id=\"block-az-barrio-main-menu-menu\" slot name=\"brand\">", "</h2>\n                            <ul block=\"block-az-barrio-main-menu\" class=\"clearfix navbar-nav flex-lg-row\">\n                                ", "\n                            </ul>\n                        </nav>\n                    </section>\n                </nav>\n            </div>\n      "])), this.branding, this.isLoading ? (0, _litElement.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<li part=\"menu-item\" class=\"nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open\">\n                                    <button role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" href=\"#\" class=\"nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle\">\n                                        <slot name=\"loading\">", "</slot>\n                                    </button>\n                                  </li>"])), this.loadingMessage) : this.renderAzMenuLevel(this.tree));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        baseUrl: {
          type: String
        },
        menuId: {
          type: String
        },
        data: {
          attribute: false
        }
      };
    }
  }, {
    key: "menuLevelTemplate",
    value: function menuLevelTemplate(levels) {
      return (0, _litElement.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      ", "\n\n    "])), levels);
    }
  }, {
    key: "openMenu",
    value: function openMenu(e) {
      e.preventDefault();
      var target = e.target;
      var cur = document.querySelector('az-main-menu').shadowRoot.querySelector('.nav-item.show button');
      var isExpanded = target.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        target.parentElement.classList.remove('show');
        target.setAttribute('aria-expanded', 'false');
        target.nextElementSibling.classList.remove('show');
      } else {
        if (cur) {
          cur.parentElement.classList.remove('show');
          cur.setAttribute('aria-expanded', 'false');
          cur.nextElementSibling.classList.remove('show');
        }

        target.parentElement.classList.add('show');
        target.setAttribute('aria-expanded', 'true');
        target.nextElementSibling.classList.add('show');
      }
    }
  }, {
    key: "azMenuTopLevelLinkTemplate",
    value: function azMenuTopLevelLinkTemplate(title, href) {
      return (0, _litElement.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<li part=\"menu-item\" class=\"nav-item\"><a href=", " class=\"nav-link\">", "</a></li>"])), href, title);
    }
  }, {
    key: "menuLinkTemplate",
    value: function menuLinkTemplate(title, href) {
      return (0, _litElement.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<a part=\"menu-item\" class=\"dropdown-item\" href=", ">", "</a>"])), href, title);
    }
  }, {
    key: "menuItemTemplate",
    value: function menuItemTemplate(title) {
      return (0, _litElement.html)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<li part=\"menu-item\">", "</li>"])), title);
    }
  }, {
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n   :root {\n       --blue: #0c234b;\n       --red: #ab0520;\n       --white: #fff;\n       --bloom: #ef4056;\n       --chili: #8b0015;\n       --sky: #81d3eb;\n       --oasis: #378dbd;\n       --azurite: #1e5288;\n       --midnight: #001c48;\n       --cool-gray: #e2e9eb;\n       --warm-gray: #f4ede5;\n       --leaf: #70b865;\n       --river: #007d84;\n       --silver: #9eabae;\n       --mesa: #a95c42;\n       --ash: #403635;\n       --sage: #4a634e;\n       --black: #000;\n       --success: #70b865;\n       --info: #81d3eb;\n       --warning: #f19e1f;\n       --danger: #a95c42;\n       --light: #dee2e6;\n       --dark: #343a40;\n       --breakpoint-xs: 0;\n       --breakpoint-sm: 576px;\n       --breakpoint-md: 768px;\n       --breakpoint-lg: 992px;\n       --breakpoint-xl: 1200px;\n       --font-family-sans-serif: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n       --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n   }\n   *,\n   ::after,\n   ::before {\n       box-sizing: border-box;\n   }\n   html {\n       font-family: sans-serif;\n       line-height: 1.15;\n       -webkit-text-size-adjust: 100%;\n       -webkit-tap-highlight-color: transparent;\n       font-size: 16px;\n   }\n   header,\n   main,\n   nav,\n   section {\n       display: block;\n   }\n   :host {\n       margin: 0;\n       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n       font-size: 1rem;\n       font-weight: 400;\n       line-height: 1.5;\n       color: #212529;\n       text-align: left;\n       background-color: #fff;\n   }\n   div {\n    font-size: 16px;\n\n   }\n   [tabindex=\"-1\"]:focus:not(:focus-visible) {\n       outline: 0 !important;\n   }\n   h1,\n   h2,\n   h3,\n   h4,\n   h5,\n   h6 {\n       margin-top: 0;\n       margin-bottom: 0.5rem;\n   }\n   ul {\n       margin-top: 0;\n       margin-bottom: 1rem;\n   }\n   ul ul {\n       margin-bottom: 0;\n   }\n   a {\n       color: #8b0015;\n       text-decoration: none;\n       background-color: transparent;\n   }\n   a:hover {\n       color: #3f0009;\n       text-decoration: underline;\n   }\n   a:not([href]):not([class]) {\n       color: inherit;\n       text-decoration: none;\n   }\n   a:not([href]):not([class]):hover {\n       color: inherit;\n       text-decoration: none;\n   }\n   label {\n       display: inline-block;\n       margin-bottom: 0.5rem;\n   }\n   button {\n       border-radius: 0;\n   }\n   button:focus:not(:focus-visible) {\n       outline: 0;\n   }\n   button,\n   input {\n       margin: 0;\n       font-family: inherit;\n       font-size: inherit;\n       line-height: inherit;\n   }\n   button,\n   input {\n       overflow: visible;\n   }\n   button {\n       text-transform: none;\n   }\n   [role=\"button\"] {\n       cursor: pointer;\n   }\n   [type=\"button\"],\n   [type=\"reset\"],\n   [type=\"submit\"],\n   button {\n       -webkit-appearance: button;\n   }\n   [type=\"button\"]:not(:disabled),\n   [type=\"reset\"]:not(:disabled),\n   [type=\"submit\"]:not(:disabled),\n   button:not(:disabled) {\n       cursor: pointer;\n   }\n   [type=\"button\"]::-moz-focus-inner,\n   [type=\"reset\"]::-moz-focus-inner,\n   [type=\"submit\"]::-moz-focus-inner,\n   button::-moz-focus-inner {\n       padding: 0;\n       border-style: none;\n   }\n   input[type=\"checkbox\"],\n   input[type=\"radio\"] {\n       box-sizing: border-box;\n       padding: 0;\n   }\n   [type=\"number\"]::-webkit-inner-spin-button,\n   [type=\"number\"]::-webkit-outer-spin-button {\n       height: auto;\n   }\n   [type=\"search\"] {\n       outline-offset: -2px;\n       -webkit-appearance: none;\n   }\n   [type=\"search\"]::-webkit-search-decoration {\n       -webkit-appearance: none;\n   }\n   ::-webkit-file-upload-button {\n       font: inherit;\n       -webkit-appearance: button;\n   }\n   [hidden] {\n       display: none !important;\n   }\n   .h1,\n   .h2,\n   .h3,\n   .h4,\n   .h5,\n   .h6,\n   .text-size-h1,\n   .text-size-h2,\n   .text-size-h3,\n   .text-size-h4,\n   .text-size-h5,\n   .text-size-h6,\n   h1,\n   h2,\n   h3,\n   h4,\n   h5,\n   h6 {\n       margin-bottom: 0.5rem;\n       font-weight: 500;\n       line-height: 1.2;\n   }\n   .h1,\n   .text-size-h1,\n   h1 {\n       font-size: 2.5rem;\n   }\n   .h2,\n   .text-size-h2,\n   h2 {\n       font-size: 2rem;\n   }\n   .h3,\n   .text-size-h3,\n   h3 {\n       font-size: 1.75rem;\n   }\n   .h4,\n   .text-size-h4,\n   h4 {\n       font-size: 1.5rem;\n   }\n   .h5,\n   .text-size-h5,\n   h5 {\n       font-size: 1.25rem;\n   }\n   .h6,\n   .text-size-h6,\n   h6 {\n       font-size: 1rem;\n   }\n   .display-1 {\n       font-size: 6rem;\n       font-weight: 300;\n       line-height: 1.2;\n   }\n   .display-2 {\n       font-size: 5.5rem;\n       font-weight: 300;\n       line-height: 1.2;\n   }\n   .display-3 {\n       font-size: 4.5rem;\n       font-weight: 300;\n       line-height: 1.2;\n   }\n   .display-4 {\n       font-size: 3.5rem;\n       font-weight: 300;\n       line-height: 1.2;\n   }\n   .container,\n   .container-lg {\n       width: 100%;\n       padding-right: 15px;\n       padding-left: 15px;\n       margin-right: auto;\n       margin-left: auto;\n       border-top: 1px solid var(--coolgray);\n   }\n   @media (min-width: 576px) {\n       .container {\n           max-width: 540px;\n       }\n   }\n   @media (min-width: 768px) {\n       .container {\n           max-width: 720px;\n       }\n   }\n   @media (min-width: 992px) {\n       .container,\n       .container-lg {\n           max-width: 960px;\n       }\n   }\n   @media (min-width: 1200px) {\n       .container,\n       .container-lg {\n           max-width: 1140px;\n       }\n   }\n   .row {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       margin-right: -15px;\n       margin-left: -15px;\n   }\n   .form-control {\n       display: block;\n       width: 100%;\n       height: calc(1.5em + 0.75rem + 2px);\n       padding: 0.375rem 0.75rem;\n       font-size: 1rem;\n       font-weight: 400;\n       line-height: 1.5;\n       color: #495057;\n       background-color: #fff;\n       background-clip: padding-box;\n       border: 1px solid #ced4da;\n       border-radius: 0;\n       transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n   }\n   @media (prefers-reduced-motion: reduce) {\n       .form-control {\n           transition: none;\n       }\n   }\n   .dropdown-item:active {\n        background-color: rgba(255,255,255,.15);\n        color: white;\n    }\n    .nav-item-parent button[aria-expanded=\"true\"] {\n        background-color: rgba(255,255,255,.15);\n\n    }\n    .navbar-offcanvas .nav-item .nav-link:focus {\n        background-color: rgba(255,255,255,.15);\n\n    }\n\n   .form-control::-ms-expand {\n       background-color: transparent;\n       border: 0;\n   }\n   .form-control:-moz-focusring {\n       color: transparent;\n       text-shadow: 0 0 0 #495057;\n   }\n   .form-control:focus {\n       color: #495057;\n       background-color: #fff;\n       border-color: #1e56b9;\n       outline: 0;\n       box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);\n   }\n   .form-control::-webkit-input-placeholder {\n       color: #6c757d;\n       opacity: 1;\n   }\n   .form-control::-moz-placeholder {\n       color: #6c757d;\n       opacity: 1;\n   }\n   .form-control:-ms-input-placeholder {\n       color: #6c757d;\n       opacity: 1;\n   }\n   .form-control::-ms-input-placeholder {\n       color: #6c757d;\n       opacity: 1;\n   }\n   .form-control::placeholder {\n       color: #6c757d;\n       opacity: 1;\n   }\n   .form-control:disabled,\n   .form-control[readonly] {\n       background-color: #e9ecef;\n       opacity: 1;\n   }\n   input[type=\"date\"].form-control,\n   input[type=\"datetime-local\"].form-control,\n   input[type=\"month\"].form-control,\n   input[type=\"time\"].form-control {\n       -webkit-appearance: none;\n       -moz-appearance: none;\n       appearance: none;\n   }\n   .form-control-lg {\n       height: calc(1.5em + 1rem + 2px);\n       padding: 0.5rem 1rem;\n       font-size: 1.25rem;\n       line-height: 1.5;\n   }\n   .form-group {\n       margin-bottom: 1rem;\n   }\n   .form-text {\n       display: block;\n       margin-top: 0.25rem;\n   }\n   .form-row {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       margin-right: -5px;\n       margin-left: -5px;\n   }\n   .form-row > [class*=\"col-\"] {\n       padding-right: 5px;\n       padding-left: 5px;\n   }\n   .btn {\n       display: inline-block;\n       font-weight: 500;\n       color: #212529;\n       text-align: center;\n       vertical-align: middle;\n       -webkit-user-select: none;\n       -moz-user-select: none;\n       -ms-user-select: none;\n       user-select: none;\n       background-color: transparent;\n       border: 2px solid transparent;\n       padding: 0.375rem 0.75rem;\n       font-size: 1rem;\n       line-height: 1.5;\n       border-radius: 0;\n       transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n   }\n   @media (prefers-reduced-motion: reduce) {\n       .btn {\n           transition: none;\n       }\n   }\n   .btn:hover {\n       color: #212529;\n       text-decoration: none;\n   }\n   .btn:focus {\n       outline: 0;\n       box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);\n   }\n   .btn:disabled {\n       opacity: 0.65;\n   }\n   .btn:not(:disabled):not(.disabled) {\n       cursor: pointer;\n   }\n   .btn-link {\n       font-weight: 400;\n       color: #8b0015;\n       text-decoration: none;\n   }\n   .btn-link:hover {\n       color: #3f0009;\n       text-decoration: underline;\n   }\n   .btn-link:focus {\n       text-decoration: underline;\n   }\n   .btn-link:disabled {\n       color: #6c757d;\n       pointer-events: none;\n   }\n   .btn-group-lg > .btn,\n   .btn-lg {\n       padding: 0.5rem 1rem;\n       font-size: 1.25rem;\n       line-height: 1.5;\n       border-radius: 0;\n   }\n   .btn-block,\n   .btn-group-block,\n   .btn-group-block .btn {\n       display: block;\n       width: 100%;\n   }\n   .btn-block + .btn-block,\n   .btn-block + .btn-group-block,\n   .btn-group-block .btn + .btn,\n   .btn-group-block .btn + .btn-block,\n   .btn-group-block .btn + .btn-group-block,\n   .btn-group-block .btn-block + .btn,\n   .btn-group-block .btn-group-block + .btn,\n   .btn-group-block + .btn-block,\n   .btn-group-block + .btn-group-block {\n       margin-top: 0.5rem;\n   }\n   .btn-group-block input.btn[type=\"button\"],\n   .btn-group-block input.btn[type=\"reset\"],\n   .btn-group-block input.btn[type=\"submit\"],\n   input.btn-group-block[type=\"button\"],\n   input.btn-group-block[type=\"reset\"],\n   input.btn-group-block[type=\"submit\"],\n   input[type=\"button\"].btn-block,\n   input[type=\"reset\"].btn-block,\n   input[type=\"submit\"].btn-block {\n       width: 100%;\n   }\n   .dropdown {\n       position: relative;\n   }\n   .dropdown-toggle {\n       white-space: nowrap;\n   }\n   .dropdown-toggle::after {\n       display: inline-block;\n       margin-left: 0.255em;\n       vertical-align: 0.255em;\n       content: \"\";\n       border-top: 0.3em solid;\n       border-right: 0.3em solid transparent;\n       border-bottom: 0;\n       border-left: 0.3em solid transparent;\n   }\n   .dropdown-toggle:empty::after {\n       margin-left: 0;\n   }\n   .dropdown-menu {\n       position: absolute;\n       top: 100%;\n       left: 0;\n       z-index: 1000;\n       display: none;\n       float: left;\n       min-width: 10rem;\n       padding: 0.5rem 0;\n       margin: 0 0 0;\n       font-size: 16px;\n       color: #212529;\n       text-align: left;\n       list-style: none;\n       background-color: #fff;\n       background-clip: padding-box;\n       border: 1px solid rgba(0, 0, 0, 0.15);\n   }\n   .dropdown-menu.show {\n    display: block;\n}\n   .dropdown-menu[x-placement^=\"bottom\"],\n   .dropdown-menu[x-placement^=\"left\"],\n   .dropdown-menu[x-placement^=\"right\"],\n   .dropdown-menu[x-placement^=\"top\"] {\n       right: auto;\n       bottom: auto;\n   }\n   .dropdown-item {\n       display: block;\n       width: 100%;\n       padding: 0.25rem 1.5rem;\n       clear: both;\n       font-weight: 400;\n       color: #fff;\n       text-align: inherit;\n       white-space: nowrap;\n       background-color: transparent;\n       border: 0;\n   }\n   .dropdown-item:focus,\n   .dropdown-item:hover {\n       color: #fff;\n       text-decoration: none;\n       background-color: #1e5288;\n   }\n   .dropdown-item:active {\n       color: #0c234b;\n       text-decoration: none;\n       background-color: #fff;\n   }\n   .dropdown-item:disabled {\n       color: #6c757d;\n       pointer-events: none;\n       background-color: transparent;\n   }\n   .dropdown-header {\n       display: block;\n       padding: 0.5rem 1.5rem;\n       margin-bottom: 0;\n       font-size: 0.875rem;\n       color: #6c757d;\n       white-space: nowrap;\n   }\n   .dropdown-item-text {\n       display: block;\n       padding: 0.25rem 1.5rem;\n       color: #fff;\n   }\n   .btn-group {\n       position: relative;\n       display: -ms-inline-flexbox;\n       display: inline-flex;\n       vertical-align: middle;\n   }\n   .btn-group > .btn {\n       position: relative;\n       -ms-flex: 1 1 auto;\n       flex: 1 1 auto;\n   }\n   .btn-group > .btn:hover {\n       z-index: 1;\n   }\n   .btn-group > .btn:active,\n   .btn-group > .btn:focus {\n       z-index: 1;\n   }\n   .btn-group > .btn-group:not(:first-child),\n   .btn-group > .btn:not(:first-child) {\n       margin-left: -2px;\n   }\n   .btn-group-toggle > .btn,\n   .btn-group-toggle > .btn-group > .btn {\n       margin-bottom: 0;\n   }\n   .btn-group-toggle > .btn input[type=\"checkbox\"],\n   .btn-group-toggle > .btn input[type=\"radio\"],\n   .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"],\n   .btn-group-toggle > .btn-group > .btn input[type=\"radio\"] {\n       position: absolute;\n       clip: rect(0, 0, 0, 0);\n       pointer-events: none;\n   }\n   .input-group {\n       position: relative;\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       -ms-flex-align: stretch;\n       align-items: stretch;\n       width: 100%;\n   }\n   .input-group > .form-control {\n       position: relative;\n       -ms-flex: 1 1 auto;\n       flex: 1 1 auto;\n       width: 1%;\n       min-width: 0;\n       margin-bottom: 0;\n   }\n   .input-group > .form-control + .form-control {\n       margin-left: -1px;\n   }\n   .input-group > .form-control:focus {\n       z-index: 3;\n   }\n   .input-group-append,\n   .input-group-btn {\n       display: -ms-flexbox;\n       display: flex;\n   }\n   .input-group-append .btn,\n   .input-group-btn .btn {\n       position: relative;\n       z-index: 2;\n   }\n   .input-group-append .btn:focus,\n   .input-group-btn .btn:focus {\n       z-index: 3;\n   }\n   .input-group-append .btn + .btn,\n   .input-group-append .btn + .input-group-text,\n   .input-group-append .input-group-text + .btn,\n   .input-group-append .input-group-text + .input-group-text,\n   .input-group-btn .btn + .btn,\n   .input-group-btn .btn + .input-group-text,\n   .input-group-btn .input-group-text + .btn,\n   .input-group-btn .input-group-text + .input-group-text {\n       margin-left: -1px;\n   }\n   .input-group-btn {\n       margin-right: -1px;\n   }\n   .input-group-append {\n       margin-left: -1px;\n   }\n   .input-group-text {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-align: center;\n       align-items: center;\n       padding: 0.375rem 0.75rem;\n       margin-bottom: 0;\n       font-size: 1rem;\n       font-weight: 400;\n       line-height: 1.5;\n       color: #495057;\n       text-align: center;\n       white-space: nowrap;\n       background-color: #e9ecef;\n       border: 1px solid #ced4da;\n   }\n   .input-group-text input[type=\"checkbox\"],\n   .input-group-text input[type=\"radio\"] {\n       margin-top: 0;\n   }\n   .input-group-lg > .form-control:not(textarea) {\n       height: calc(1.5em + 1rem + 2px);\n   }\n   .input-group-lg > .form-control,\n   .input-group-lg > .input-group-append > .btn,\n   .input-group-lg > .input-group-append > .input-group-text,\n   .input-group-lg > .input-group-btn > .btn,\n   .input-group-lg > .input-group-btn > .input-group-text {\n       padding: 0.5rem 1rem;\n       font-size: 1.25rem;\n       line-height: 1.5;\n   }\n   .nav {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       padding-left: 0;\n       margin-bottom: 0;\n       list-style: none;\n   }\n   .nav-link {\n       display: block;\n       padding: 0.5rem 1rem;\n   }\n   .nav-link:focus,\n   .nav-link:hover {\n       text-decoration: none;\n   }\n   .navbar {\n       position: relative;\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       -ms-flex-align: center;\n       align-items: center;\n       -ms-flex-pack: justify;\n       justify-content: space-between;\n       padding: 0 1rem;\n   }\n   .navbar .container,\n   .navbar .container-lg {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n       -ms-flex-align: center;\n       align-items: center;\n       -ms-flex-pack: justify;\n       justify-content: space-between;\n   }\n   .navbar-nav {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-direction: column;\n       flex-direction: column;\n       padding-left: 0;\n       margin-bottom: 0;\n       list-style: none;\n   }\n   .navbar-nav .nav-link {\n       padding-right: 0;\n       padding-left: 0;\n   }\n   .navbar-nav .dropdown-menu {\n       position: static;\n       float: none;\n   }\n   .navbar-text {\n       display: inline-block;\n       padding-top: 0.5rem;\n       padding-bottom: 0.5rem;\n   }\n   .label {\n       display: inline-block;\n       padding: 0.25em 0.4em;\n       font-size: 75%;\n       font-weight: 700;\n       line-height: 1;\n       text-align: center;\n       white-space: nowrap;\n       vertical-align: baseline;\n       transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n   }\n   @media (prefers-reduced-motion: reduce) {\n       .label {\n           transition: none;\n       }\n   }\n   a.label:focus,\n   a.label:hover {\n       text-decoration: none;\n   }\n   .label:empty {\n       display: none;\n   }\n   .btn .label {\n       position: relative;\n       top: -1px;\n   }\n   @-webkit-keyframes progress-bar-stripes {\n       from {\n           background-position: 1rem 0;\n       }\n       to {\n           background-position: 0 0;\n       }\n   }\n   @keyframes progress-bar-stripes {\n       from {\n           background-position: 1rem 0;\n       }\n       to {\n           background-position: 0 0;\n       }\n   }\n   .close {\n       float: right;\n       font-size: 1.5rem;\n       font-weight: 700;\n       line-height: 1;\n       color: #000;\n       text-shadow: 0 1px 0 #fff;\n       opacity: 0.5;\n   }\n   .close:hover {\n       color: #000;\n       text-decoration: none;\n   }\n   .close:not(:disabled):not(.disabled):focus,\n   .close:not(:disabled):not(.disabled):hover {\n       opacity: 0.75;\n   }\n   button.close {\n       padding: 0;\n       background-color: transparent;\n       border: 0;\n   }\n   @-webkit-keyframes spinner-border {\n       to {\n           -webkit-transform: rotate(360deg);\n           transform: rotate(360deg);\n       }\n   }\n   @keyframes spinner-border {\n       to {\n           -webkit-transform: rotate(360deg);\n           transform: rotate(360deg);\n       }\n   }\n   @-webkit-keyframes spinner-grow {\n       0% {\n           -webkit-transform: scale(0);\n           transform: scale(0);\n       }\n       50% {\n           opacity: 1;\n           -webkit-transform: none;\n           transform: none;\n       }\n   }\n   @keyframes spinner-grow {\n       0% {\n           -webkit-transform: scale(0);\n           transform: scale(0);\n       }\n       50% {\n           opacity: 1;\n           -webkit-transform: none;\n           transform: none;\n       }\n   }\n   .bg-white {\n       background-color: #fff !important;\n   }\n   .clearfix::after {\n       display: block;\n       clear: both;\n       content: \"\";\n   }\n   .d-block {\n       display: block !important;\n   }\n   .d-flex {\n       display: -ms-flexbox !important;\n       display: flex !important;\n   }\n   @media (min-width: 992px) {\n       .d-lg-block {\n           display: block !important;\n       }\n       .d-lg-flex {\n           display: -ms-flexbox !important;\n           display: flex !important;\n       }\n   }\n   .flex-row {\n       -ms-flex-direction: row !important;\n       flex-direction: row !important;\n   }\n   .justify-content-center {\n       -ms-flex-pack: center !important;\n       justify-content: center !important;\n   }\n   .justify-content-between {\n       -ms-flex-pack: justify !important;\n       justify-content: space-between !important;\n   }\n   .align-items-center {\n       -ms-flex-align: center !important;\n       align-items: center !important;\n   }\n   .align-content-center {\n       -ms-flex-line-pack: center !important;\n       align-content: center !important;\n   }\n   .align-content-between {\n       -ms-flex-line-pack: justify !important;\n       align-content: space-between !important;\n   }\n   @media (min-width: 992px) {\n       .flex-lg-row {\n           -ms-flex-direction: row !important;\n           flex-direction: row !important;\n       }\n       .justify-content-lg-center {\n           -ms-flex-pack: center !important;\n           justify-content: center !important;\n       }\n       .justify-content-lg-between {\n           -ms-flex-pack: justify !important;\n           justify-content: space-between !important;\n       }\n       .align-items-lg-center {\n           -ms-flex-align: center !important;\n           align-items: center !important;\n       }\n       .align-content-lg-center {\n           -ms-flex-line-pack: center !important;\n           align-content: center !important;\n       }\n       .align-content-lg-between {\n           -ms-flex-line-pack: justify !important;\n           align-content: space-between !important;\n       }\n   }\n   @supports ((position: -webkit-sticky) or (position: sticky)) {\n       .sticky-top {\n           position: -webkit-sticky;\n           position: sticky;\n           top: 0;\n           z-index: 1020;\n       }\n   }\n   .sr-only {\n       position: absolute;\n       width: 1px;\n       height: 1px;\n       padding: 0;\n       margin: -1px;\n       overflow: hidden;\n       clip: rect(0, 0, 0, 0);\n       white-space: nowrap;\n       border: 0;\n   }\n   .h-25 {\n       height: 25% !important;\n   }\n   .h-50 {\n       height: 50% !important;\n   }\n   .h-75 {\n       height: 75% !important;\n   }\n   .h-100 {\n       height: 100% !important;\n   }\n   .text-size-h1,\n   .text-size-h2,\n   .text-size-h3,\n   .text-size-h4,\n   .text-size-h5,\n   .text-size-h6 {\n       margin-bottom: 0 !important;\n   }\n   .text-justify {\n       text-align: justify !important;\n   }\n   .text-center {\n       text-align: center !important;\n   }\n   @media (min-width: 992px) {\n       .text-lg-center {\n           text-align: center !important;\n       }\n   }\n   .text-white {\n       color: #fff !important;\n   }\n   .text-body {\n       color: #212529 !important;\n   }\n   .text-white-50 {\n       color: rgba(255, 255, 255, 0.5) !important;\n   }\n   @media print {\n       *,\n       ::after,\n       ::before {\n           text-shadow: none !important;\n           box-shadow: none !important;\n       }\n       a:not(.btn) {\n           text-decoration: underline;\n       }\n       h2,\n       h3 {\n           orphans: 3;\n           widows: 3;\n       }\n       h2,\n       h3 {\n           page-break-after: avoid;\n       }\n       @page {\n           size: a3;\n       }\n       body {\n           min-width: 992px !important;\n       }\n       .container {\n           min-width: 992px !important;\n       }\n       .navbar {\n           display: none;\n       }\n       .label {\n           border: 1px solid #000;\n       }\n   }\n   .bg-white {\n       color: #000;\n       background-color: #fff;\n   }\n   .bg-white .h1,\n   .bg-white .h2,\n   .bg-white .h3,\n   .bg-white .h4,\n   .bg-white .h5,\n   .bg-white .h6,\n   .bg-white .text-size-h1,\n   .bg-white .text-size-h2,\n   .bg-white .text-size-h3,\n   .bg-white .text-size-h4,\n   .bg-white .text-size-h5,\n   .bg-white .text-size-h6,\n   .bg-white h1,\n   .bg-white h2,\n   .bg-white h3,\n   .bg-white h4,\n   .bg-white h5,\n   .bg-white h6 {\n       color: inherit;\n   }\n   .bg-chili {\n       color: #fff;\n       background-color: #8b0015;\n   }\n   .bg-chili .h1,\n   .bg-chili .h2,\n   .bg-chili .h3,\n   .bg-chili .h4,\n   .bg-chili .h5,\n   .bg-chili .h6,\n   .bg-chili .text-size-h1,\n   .bg-chili .text-size-h2,\n   .bg-chili .text-size-h3,\n   .bg-chili .text-size-h4,\n   .bg-chili .text-size-h5,\n   .bg-chili .text-size-h6,\n   .bg-chili h1,\n   .bg-chili h2,\n   .bg-chili h3,\n   .bg-chili h4,\n   .bg-chili h5,\n   .bg-chili h6 {\n       color: inherit;\n   }\n   .text-white {\n       color: #fff !important;\n   }\n   .text-chili {\n       color: #8b0015 !important;\n   }\n   .h1,\n   .h2,\n   .text-size-h1,\n   .text-size-h2,\n   h1,\n   h2 {\n       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n       color: #49595e;\n       font-display: block;\n   }\n   .arizona-header {\n       position: relative;\n   }\n   .btn-redbar .icon-text {\n       display: block;\n       margin: -5px;\n       font-size: 10px;\n       line-height: 10px;\n   }\n   .btn-redbar .icon {\n       margin: -5px;\n       font-size: 24px;\n       line-height: 24px;\n   }\n   .btn.btn-redbar {\n       width: 60px;\n       height: 50px;\n       padding: 0;\n       color: #fff;\n       background-color: #ab0520;\n       border: 2px solid #ab0520;\n   }\n   .btn.btn-redbar:focus {\n       background-color: #8b0015;\n       border: 2px solid #8b0015;\n       outline: 0;\n       box-shadow: none;\n   }\n   body {\n       color: #403635;\n   }\n   .h1,\n   .h2,\n   .text-size-h1,\n   .text-size-h2,\n   h1,\n   h2 {\n       margin: 1.042em 0 0.667em;\n   }\n   .h3,\n   .h4,\n   .h5,\n   .h6,\n   .text-size-h3,\n   .text-size-h4,\n   .text-size-h5,\n   .text-size-h6,\n   h3,\n   h4,\n   h5,\n   h6 {\n       margin: 1.042em 0 0.667em;\n       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n       color: #49595e;\n       font-display: block;\n   }\n   a {\n       font-weight: 700;\n       text-decoration: underline;\n   }\n   .btn {\n       font-weight: 500;\n       text-transform: uppercase;\n       text-decoration: none;\n       letter-spacing: 0.04em;\n       white-space: normal;\n       border-width: 2px;\n   }\n   .btn-link {\n       color: #8b0015;\n   }\n   .btn-group-block .dropdown-menu {\n       min-width: 100%;\n   }\n   .dropdown-menu {\n       color: #e2e9eb;\n       background-color: #0c234b;\n   }\n   .dropdown-item {\n       color: #fff;\n       text-decoration: none;\n   }\n   .dropdown-item:focus,\n   .dropdown-item:hover {\n       color: #fff;\n       background-color: #1e5288;\n   }\n   .dropdown-item:active {\n       color: #0c234b;\n       background-color: #fff;\n   }\n   .dropdown-item:disabled {\n       color: #6c757d;\n   }\n   .nav-link {\n       color: #1e5288;\n       text-decoration: none;\n   }\n   .nav-link:focus,\n   .nav-link:hover {\n       color: #001c48;\n   }\n   .nav-link:active {\n       color: #001c48;\n   }\n   .nav-link:active {\n       background-color: #e9ecef;\n   }\n   .navbar {\n       padding: 0 1rem;\n   }\n   .navbar-nav .nav-link {\n       font-weight: 700;\n       background-color: inherit;\n       border: none;\n   }\n   .navbar-nav .nav-link {\n       padding: 1.25rem 1.5rem;\n   }\n   .offcanvas-toggle {\n       display: none;\n   }\n   @-webkit-keyframes fadein {\n       from {\n           opacity: 0;\n       }\n       to {\n           opacity: 0.75;\n       }\n   }\n   @keyframes fadein {\n       from {\n           opacity: 0;\n       }\n       to {\n           opacity: 0.75;\n       }\n   }\n   .navbar-offcanvas {\n       position: fixed;\n       top: 0;\n       right: 0;\n       z-index: 2000;\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-direction: column;\n       flex-direction: column;\n       width: 325px;\n       max-width: 90%;\n       height: 100vh;\n       max-height: 100vh;\n       overflow-y: hidden;\n       background-color: #0c234b;\n       border: none;\n       transition: -webkit-transform 0.3s ease-in-out;\n       transition: transform 0.3s ease-in-out;\n       transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n       -webkit-transform: translateX(100vw);\n       transform: translateX(100vw);\n   }\n   :host([state=\"open\"]) .navbar-offcanvas {\n        -webkit-transform: translateX(0);\n        transform: translateX(0);\n    }\n   .navbar-offcanvas.open {\n       -webkit-transform: translateX(0);\n       transform: translateX(0);\n   }\n   .navbar-offcanvas .navbar-offcanvas-header {\n       display: block;\n       width: 100%;\n   }\n   .navbar-offcanvas .navbar-offcanvas-home {\n       font-weight: 400;\n       color: #fff;\n       text-decoration: none;\n   }\n   .navbar-offcanvas .navbar-offcanvas-search .form-control {\n       height: auto;\n       margin: 0;\n       border: none;\n   }\n   .navbar-offcanvas .navbar-offcanvas-search .input-group input.form-control {\n       height: 60px;\n       padding-left: 20px;\n   }\n   .navbar-offcanvas .navbar-offcanvas-search .input-group .input-group-append > button.btn-search {\n       height: 60px;\n       width: 60px;\n       font-size: 24px;\n       border: 0;\n       padding: 0;\n   }\n   .navbar-offcanvas .navbar-nav {\n       width: 100%;\n       overflow-y: auto;\n   }\n   .navbar-offcanvas .navbar-nav .nav-link {\n       font-weight: 500;\n   }\n   .navbar-offcanvas ul.navbar-nav li.nav-item a.nav-link,\n   .navbar-offcanvas .nav-item-parent .nav-link {\n       text-transform: uppercase;\n   }\n   .navbar-offcanvas .nav-item .nav-link {\n       padding: 12px 20px;\n       color: #fff;\n       text-align: left;\n       width: 100%;\n       min-height: 48px;\n   }\n   .navbar-offcanvas .dropdown-menu {\n       padding: 0;\n       margin: 0;\n       background-color: rgba(255, 255, 255, 0.15);\n       border: none;\n   }\n   .navbar-offcanvas .dropdown-menu .dropdown-item {\n       padding: 14px 20px 14px 35px;\n       white-space: normal;\n   }\n   .navbar-offcanvas .dropdown-toggle {\n       display: -ms-flexbox;\n       display: flex;\n       -ms-flex-align: center;\n       align-items: center;\n       -ms-flex-pack: justify;\n       justify-content: space-between;\n       white-space: normal;\n   }\n   .navbar-offcanvas .dropdown-toggle::after {\n        font-size: 1rem;\n        vertical-align: unset;\n        content: \" \";\n        border: none;\n        margin-left: 20px;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDI0IDI0JyBoZWlnaHQ9JzI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0cHgnIGZpbGw9JyNGRkZGRkYnPjxnPjxyZWN0IGZpbGw9J25vbmUnIGhlaWdodD0nMjQnIHdpZHRoPScyNCcvPjwvZz48Zz48Zz48cGF0aCBkPSdNMTksMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNlYxM3onLz48L2c+PC9nPjwvc3ZnPg==\");\n        height: 24px;\n        width: 24px;\n    }\n    .navbar-offcanvas .nav-item.show .dropdown-toggle::after {\n        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiLz48L3N2Zz4=');\n    }\n   .container .navbar-offcanvas.open {\n       -webkit-transform: translateX(0);\n       transform: translateX(0);\n   }\n   .btn-menu {\n       width: 60px;\n       height: 50px;\n       border: 0;\n       padding: 0;\n       font-size: 10px;\n       background-color: #ab0520;\n   }\n   .btn-menu:hover {\n       background-color: #8b0015;\n   }\n   .btn-menu span.material-icons-sharp {\n       display: block;\n       font-size: 24px;\n       line-height: 24px;\n   }\n   .btn-menu-offcanvas-nav {\n       width: 60px;\n       height: 50px;\n       border: 0;\n       padding: 0;\n       font-size: 10px;\n   }\n   .btn-menu-offcanvas-nav span.material-icons-sharp {\n       display: block;\n       font-size: 24px;\n       line-height: 24px;\n   }\n   @media (min-width: 992px) {\n       .navbar-offcanvas {\n           position: relative;\n           display: -ms-flexbox;\n           display: flex;\n           -ms-flex-wrap: wrap;\n           flex-wrap: wrap;\n           -ms-flex-align: center;\n           align-items: center;\n           -ms-flex-pack: justify;\n           justify-content: space-between;\n           max-width: 100%;\n           padding: 0 1rem;\n           padding: initial;\n           overflow-y: initial;\n           background-color: initial;\n           border: initial;\n           -webkit-transform: initial;\n           transform: initial;\n           top: initial;\n           right: initial;\n           z-index: initial;\n           -ms-flex-direction: initial;\n           flex-direction: initial;\n           width: initial;\n           height: initial;\n           transition: initial;\n       }\n       .navbar .navbar-offcanvas .container,\n       .navbar .navbar-offcanvas .container-lg,\n       .navbar-offcanvas .navbar .container,\n       .navbar-offcanvas .navbar .container-lg {\n           display: -ms-flexbox;\n           display: flex;\n           -ms-flex-wrap: wrap;\n           flex-wrap: wrap;\n           -ms-flex-align: center;\n           align-items: center;\n           -ms-flex-pack: justify;\n           justify-content: space-between;\n       }\n       .navbar-offcanvas.open {\n           -webkit-transform: initial;\n           transform: initial;\n       }\n       .navbar-offcanvas .navbar-offcanvas-header {\n           display: none;\n       }\n       .navbar-offcanvas .navbar-nav {\n           display: -ms-flexbox;\n           display: flex;\n           -ms-flex-direction: column;\n           flex-direction: column;\n           padding-left: 0;\n           margin-bottom: 0;\n           list-style: none;\n           width: initial;\n           overflow-y: initial;\n       }\n       .navbar-offcanvas .navbar-nav .nav-link {\n           display: block;\n           padding: 0.5rem 1rem;\n           font-weight: 700;\n       }\n       .navbar-offcanvas .navbar-nav .nav-link:focus,\n       .navbar-offcanvas .navbar-nav .nav-link:hover {\n           text-decoration: none;\n       }\n       .navbar-offcanvas .nav-item .nav-link {\n           padding: 0.85rem 0.85rem;\n           color: #1e5288;\n       }\n       .navbar-offcanvas .nav-item .nav-link.show,\n       .navbar-offcanvas .nav-item .nav-link:hover {\n           color: #001c48;\n           background-color: #f8f9fa;\n       }\n       .navbar-offcanvas .nav-item:hover {\n           color: #001c48;\n           background-color: #f8f9fa;\n       }\n       .navbar-offcanvas .nav-item:active .nav-link {\n           color: #001c48;\n           background-color: #e9ecef;\n       }\n       .navbar-offcanvas .dropdown-menu {\n           padding: 0.5rem 0;\n           margin: 0 0 0;\n           background-color: #0c234b;\n           border: none;\n           border: 1px solid rgba(0, 0, 0, 0.15);\n           position: absolute;\n       }\n       .navbar-offcanvas .dropdown-menu .dropdown-item {\n           padding: 0.25rem 1.5rem;\n           white-space: nowrap;\n       }\n       .navbar-offcanvas .dropdown-toggle {\n           display: -ms-flexbox;\n           display: flex;\n           -ms-flex-align: center;\n           align-items: center;\n           -ms-flex-pack: justify;\n           justify-content: space-between;\n       }\n       .navbar-offcanvas .dropdown-toggle::after {\n           font-size: inherit;\n           vertical-align: 0.255em;\n           content: \"\";\n           border-top: 0.3em solid;\n           border-right: 0.3em solid transparent;\n           border-bottom: 0;\n           border-left: 0.3em solid transparent;\n           margin-left: 0.225em;\n           height: auto;\n           width: auto;\n       }\n   }\n       "])));
    }
  }]);

  return MainMenu;
}(_gdwcMenu.GdwcMenu);

exports.MainMenu = MainMenu;
customElements.get('az-main-menu') || customElements.define('az-main-menu', MainMenu);
},{"lit-element":"node_modules/lit-element/lit-element.js","@gdwc/components/gdwc-menu/gdwc-menu.js":"node_modules/@gdwc/components/gdwc-menu/gdwc-menu.js","@gdwc/components/menu":"node_modules/@gdwc/components/menu.js","linkset-menu":"node_modules/linkset-menu/dist/index.js"}],"node_modules/@popperjs/core/lib/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierPhases = exports.afterWrite = exports.write = exports.beforeWrite = exports.afterMain = exports.main = exports.beforeMain = exports.afterRead = exports.read = exports.beforeRead = exports.placements = exports.variationPlacements = exports.reference = exports.popper = exports.viewport = exports.clippingParents = exports.end = exports.start = exports.basePlacements = exports.auto = exports.left = exports.right = exports.bottom = exports.top = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/modifiers/applyStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getBasePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],"node_modules/@popperjs/core/lib/dom-utils/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0, _getComputedStyle.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0, _getParentNode.default)(element);

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./isTableElement.js":"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js"}],"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"node_modules/@popperjs/core/lib/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"node_modules/@popperjs/core/lib/utils/within.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = within;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}
},{"./math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],"node_modules/@popperjs/core/lib/utils/expandToHashMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"node_modules/@popperjs/core/lib/modifiers/arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("development" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../utils/mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","../utils/expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/modifiers/computeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToStyles = mapToStyles;
exports.default = void 0;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)((0, _math.round)(x * dpr) / dpr) || 0,
    y: (0, _math.round)((0, _math.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums.top) {
      sideY = _enums.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left) {
      sideX = _enums.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("development" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/eventListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/rectToClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","./getViewportRect.js":"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js","./getDocumentRect.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js","./listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../utils/rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getVariation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"node_modules/@popperjs/core/lib/utils/computeOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
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

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","./getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/detectOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(referenceElement);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","../dom-utils/getClippingRect.js":"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js","./rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","./expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js"}],"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","./detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js"}],"node_modules/@popperjs/core/lib/modifiers/flip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getOppositeVariationPlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/computeAutoPlacement.js":"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js"}],"node_modules/@popperjs/core/lib/modifiers/hide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js"}],"node_modules/@popperjs/core/lib/modifiers/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],"node_modules/@popperjs/core/lib/utils/getAltAxis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0, _within.default)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

      var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0, _within.default)(tether ? (0, _math.min)(_min, tetherMin) : _min, _offset, tether ? (0, _math.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/getAltAxis.js":"node_modules/@popperjs/core/lib/utils/getAltAxis.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getHTMLElementScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getNodeScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/orderModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"node_modules/@popperjs/core/lib/utils/validateModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"node_modules/@popperjs/core/lib/utils/format.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/uniqueBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/mergeByName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"node_modules/@popperjs/core/lib/createPopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperGenerator = popperGenerator;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.createPopper = void 0;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
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
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("development" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
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

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
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
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js","./dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","./dom-utils/listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./utils/orderModifiers.js":"node_modules/@popperjs/core/lib/utils/orderModifiers.js","./utils/debounce.js":"node_modules/@popperjs/core/lib/utils/debounce.js","./utils/validateModifiers.js":"node_modules/@popperjs/core/lib/utils/validateModifiers.js","./utils/uniqueBy.js":"node_modules/@popperjs/core/lib/utils/uniqueBy.js","./utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./utils/mergeByName.js":"node_modules/@popperjs/core/lib/utils/mergeByName.js","./utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/popper-lite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js"}],"node_modules/@popperjs/core/lib/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./modifiers/offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./modifiers/flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./modifiers/preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","./modifiers/arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./modifiers/hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js"}],"node_modules/@popperjs/core/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"node_modules/@popperjs/core/lib/enums.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js","./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./popper.js":"node_modules/@popperjs/core/lib/popper.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js"}],"src/az-select-menu.js":[function(require,module,exports) {
"use strict";

var _litElement = require("lit-element");

var _core = require("@popperjs/core");

var _linksetMenu = require("linkset-menu");

require("./az-button");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AzSelectMenu = /*#__PURE__*/function (_LitElement) {
  _inherits(AzSelectMenu, _LitElement);

  var _super = _createSuper(AzSelectMenu);

  function AzSelectMenu() {
    var _this;

    _classCallCheck(this, AzSelectMenu);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_showTooltip", function () {
      // Make the tooltip visible
      _this.tooltip.setAttribute('data-show', ''); // Enable the event listeners


      _this.popperInstance.setOptions({
        modifiers: [{
          name: 'eventListeners',
          enabled: true
        }]
      }); // Update its position


      _this.popperInstance.update();
    });

    _defineProperty(_assertThisInitialized(_this), "_hideTooltip", function () {
      // Hide the tooltip
      _this.tooltip.removeAttribute('data-show'); // Disable the event listeners


      _this.popperInstance.setOptions({
        modifiers: [{
          name: 'eventListeners',
          enabled: false
        }]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_handleEvents", function (e) {
      // Hide the popover when user touches any part of the screen, except the
      // select form button regardless of state.
      var selectElementHref = _this.select.options[_this.select.selectedIndex].dataset.href; //  If a navigable link is selected in the dropdown.

      if (!selectElementHref.includes('%3Cnolink%3E')) {
        _this.select.setAttribute('aria-invalid', 'false');

        _this.btn.classList.remove('disabled');

        switch (e.type) {
          case 'click':
            _this._hideTooltip(); // If the link works, don't allow the button to focus.


            e.stopImmediatePropagation();
            window.location = selectElementHref;
            break;

          default:
            break;
        }
      } //  Don't follow link if using the nolink setting.
      else {
          _this.btn.classList.add('disabled');

          _this.select.setAttribute('aria-invalid', 'true');

          switch (e.type) {
            case 'click':
              if (_this.btn) {
                _this.select.focus();

                _this._showTooltip();
              }

              break;

            case 'focus':
            case 'mouseenter':
              if (_this.btn) {
                _this._showTooltip();
              } else {
                _this._hideTooltip();
              }

              break;

            case 'mouseleave':
              _this._hideTooltip();

              break;

            default:
              break;
          }
        }
    });

    _this.tree = [];
    _this.isLoading = false;
    _this.loadingMessage = 'Loading...';
    return _this;
  }

  _createClass(AzSelectMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(AzSelectMenu.prototype), "connectedCallback", this).call(this);

      if (this.baseUrl && this.menuId) {
        this.fetchData(this.baseUrl, this.menuId);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (_get(_getPrototypeOf(AzSelectMenu.prototype), "disconnectedCallback", this)) {
        _get(_getPrototypeOf(AzSelectMenu.prototype), "disconnectedCallback", this).call(this);
      }
    }
  }, {
    key: "renderAzSelectMenuOptions",
    value: function renderAzSelectMenuOptions(level) {
      var _this2 = this;

      var levels = level.map(function (item) {
        return _this2.renderAzMenuItem(item);
      });
      return AzSelectMenu.azMenuLevelTemplate(levels);
    }
  }, {
    key: "renderAzMenuItem",
    value: function renderAzMenuItem(item) {
      var _item$link, _item$link$attributes, _item$link2;

      var title = item === null || item === void 0 ? void 0 : (_item$link = item.link) === null || _item$link === void 0 ? void 0 : (_item$link$attributes = _item$link.attributes) === null || _item$link$attributes === void 0 ? void 0 : _item$link$attributes.title;
      var href = item === null || item === void 0 ? void 0 : (_item$link2 = item.link) === null || _item$link2 === void 0 ? void 0 : _item$link2.href;

      if (href) {
        return AzSelectMenu.azMenuOptionTemplate(title, href);
      }

      return this.azMenuItemTemplate(title);
    }
  }, {
    key: "fetchData",
    value: function fetchData(baseURL, menuID) {
      var _this3 = this;

      this.isLoading = true;
      var url = "".concat(baseURL, "/system/menu/").concat(menuID, "/linkset");
      fetch(url, {}).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        _this3.isLoading = false;
        throw new Error("Unable to fetch ".concat(url, ". ").concat(response.status, " ").concat(response.statusText));
      }).then(function (json) {
        try {
          var denormalized = (0, _linksetMenu.denormalize)(json, menuID);
          _this3.tree = denormalized.tree;
        } catch (e) {
          throw new Error('Unable to denormalize menu.');
        }

        _this3.isLoading = false;
      });
    }
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (r) {
                  return setTimeout(r, 0);
                });

              case 2:
                this.btn = this.shadowRoot.querySelector('#button');
                this.btn.addEventListener('click', this._handleEvents, {
                  passive: true
                });
                this.btn.addEventListener('mouseenter', this._handleEvents, {
                  passive: true
                });
                this.btn.addEventListener('mouseleave', this._handleEvents, {
                  passive: true
                });
                this.btn.addEventListener('focus', this._handleEvents, {
                  passive: true
                });
                this.btn.addEventListener('touchstart', this._handleEvents, {
                  passive: true
                });
                this.btn.addEventListener('blur', this._handleEvents, {
                  passive: true
                });
                this.form = this.shadowRoot.querySelector('form');
                this.tooltip = this.shadowRoot.querySelector('#tooltip');
                this.popperInstance = (0, _core.createPopper)(this.form, this.tooltip, {
                  placement: 'top',
                  modifiers: [{
                    name: 'offset',
                    options: {
                      offset: [0, 8]
                    }
                  }]
                });
                this.select = this.shadowRoot.querySelector('select');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n     <form aria-describedby=\"tooltip\">\n            <div id=\"tooltip\" role=\"tooltip\">\n              Please make a selection.\n              <div id=\"arrow\" data-popper-arrow></div>\n            </div>\n\n            <div class=\"input-group\">\n              <span class=\"input-group-addon input-group-addon-no-border\"><div class=\"select-menu-label\">I am </div></span>\n              <label for=\"uaqs-navigation-select-menu-uaqs-audience-select-menu\" class=\"sr-only\">Select your audience</label>\n              <select id=\"uaqs-navigation-select-menu-uaqs-audience-select-menu\" class=\"form-control select-primary\" aria-invalid=\"true\">\n                <option data-href=\"https://www.arizona.edu/%3Cnolink%3E\">choose an option</option>\n                ", "\n              </select>\n              <span class=\"input-group-btn\">\n                <button id=\"button\" class=\"btn btn-primary disabled\" role=\"button\" type=\"button\" tabindex=\"0\">Go<span class=\"sr-only\">to the page for that group</span></button>\n              </span>\n            </div>\n          </form>\n    "])), this.isLoading ? (0, _litElement.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<slot name=\"loading\">", "</slot>"])), this.loadingMessage) : this.renderAzSelectMenuOptions(this.tree));
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n* {\n       -webkit-box-sizing: border-box;\n       box-sizing: border-box;\n}\n\n.input-group .form-control, .input-group-addon, .input-group-btn {\n    display: table-cell;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 700;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  padding: 6px 12px;\n  font-size: 16px;\n  line-height: 1.5;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn {\n  background-clip: border-box;\n  font-weight: 700;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  white-space: normal;\n}\n\n.input-group-addon, .input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  color: #49595e;\n  text-align: center;\n  background-color: #fff;\n  border: 1px solid #cbd1e0;\n  border-radius: 0;\n}\n\n.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child>.btn, .input-group-btn:first-child>.btn-group>.btn, .input-group-btn:first-child>.dropdown-toggle, .input-group-btn:last-child>.btn-group:not(:last-child)>.btn, .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group .form-control, .input-group-addon, .input-group-btn {\n  display: table-cell;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 6px 12px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #49595e;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #cbd1e0;\n    border-radius: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  }\n  .form-control {\n    border: 2px solid #cbd1e0;\n  }\n  button, input, select, textarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n  button, select {\n    text-transform: none;\n  }\n  button, input, optgroup, select, textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n  }\n  select.select-primary:active, select.select-primary:focus, select.select-primary:hover {\n    box-shadow: none;\n    outline: 0;\n  }\n  select.select-primary:focus, select.select-primary:hover {\n      border-bottom: 3px solid #ab0520;\n  }\n.input-group-addon.input-group-addon-no-border {\n  border: none;\n}\nselect.select-primary {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  background-color: #f4f6f9;\n  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);  background-repeat: no-repeat;\n  background-position: 95% 50%;\n  background-position: calc(100% - 10px) 50%;\n  border-top: 1px solid transparent;\n  border-right: 0;\n  border-bottom: 3px solid #cbd1e0;\n  border-left: 0;\n  border-radius: 0;\n  box-shadow: none;\n  color: #57585a;\n  font-size: 16px;\n  font-family: MiloWeb,sans-serif;\n  font-weight: 700;\n  letter-spacing: .25px;\n  line-height: 1.5em;\n  outline: none;\n  text-indent: .01px;\n  -webkit-transition: .15s all ease-in-out;\n  transition: .15s all ease-in-out;\n  text-overflow: '';\n}\n\nselect.select-primary {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n  appearance: none;\n  background-color: #f4f6f9;\n  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);  background-repeat: no-repeat;\n  background-position: 95% 50%;\n  background-position: calc(100% - 10px) 50%;\n  border-right: 0;\n  border-bottom: 3px solid #cbd1e0;\n  border-top: 0px solid white;\n  border-left: 0;\n  border-radius: 0;\n  box-shadow: none;\n  color: #57585a;\n  font-size: 16px;\n  font-family: MiloWeb,sans-serif;\n  font-weight: 700;\n  letter-spacing: .25px;\n  line-height: 1.5em;\n  outline: none;\n  text-indent: .01px;\n  -webkit-transition: .15s all ease-in-out;\n  transition: .15s all ease-in-out;\n  text-overflow: '';\n}\n.input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group {\n  z-index: 2;\n  margin-left: -2px;\n  margin-top: 0;\n  padding: 5px 8px;\n}\n.input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child>.btn-group:not(:first-child)>.btn, .input-group-btn:first-child>.btn:not(:first-child), .input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group>.btn, .input-group-btn:last-child>.dropdown-toggle {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-btn>.btn {\n  position: relative;\n}\n.btn-blue.disabled, .btn-blue.disabled.active, .btn-blue.disabled.focus, .btn-blue.disabled:active, .btn-blue.disabled:focus, .btn-blue.disabled:hover, .btn-blue[disabled], .btn-blue[disabled].active, .btn-blue[disabled].focus, .btn-blue[disabled]:active, .btn-blue[disabled]:focus, .btn-blue[disabled]:hover, .btn-primary.disabled, .btn-primary.disabled.active, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled], .btn-primary[disabled].active, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover, fieldset[disabled] .btn-blue, fieldset[disabled] .btn-blue.active, fieldset[disabled] .btn-blue.focus, fieldset[disabled] .btn-blue:active, fieldset[disabled] .btn-blue:focus, fieldset[disabled] .btn-blue:hover, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary.active, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:hover {\n  background: #495057;\n  border-color: #495057;\n}\n.input-group-btn>.btn {\n  position: relative;\n}\n.btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: .65;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-blue, .btn-primary {\n  color: #fff;\n  background-color: #0c234b;\n  border-color: #0c234b;\n  border-width: 2px;\n  background-clip: border-box;\n  -webkit-transition: all .1s ease-in-out;\n  transition: all .1s ease-in-out;\n}\n\n      #tooltip[data-show] {\n        display: block;\n        font-size: 14px;\n      }\n      #tooltip{\n        display: none;\n        font-size: 14px;\n      }\n      #tooltip[data-hide]{\n        display: none;\n      }\n\n      #arrow,\n      #arrow::before {\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        background: inherit;\n      }\n\n      #arrow {\n        visibility: hidden;\n\n      }\n\n      #arrow::before {\n        visibility: visible;\n        content: '';\n        transform: rotate(45deg);\n        border: 1px solid #0c234b;\n\n      }\n\n      #tooltip[data-popper-placement^=\"top\"] > #arrow {\n        bottom: -5px;\n\n      }\n      #tooltip[data-popper-placement^=\"top\"] > #arrow:before {\n\n      border-top: 1px solid transparent;\n      border-left: 1px solid transparent;\n      }\n      #tooltip[data-popper-placement^='bottom'] > #arrow {\n        top: -4px;\n      }\n\n      #tooltip[data-popper-placement^='left'] > #arrow {\n        right: -4px;\n      }\n\n      #tooltip[data-popper-placement^='right'] > #arrow {\n        left: -4px;\n      }\n      #tooltip {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        z-index: 1060;\n        display: none;\n        max-width: 276px;\n        font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n        font-style: normal;\n        font-weight: 400;\n        line-height: 1.5;\n        text-align: start;\n        text-decoration: none;\n        text-shadow: none;\n        text-transform: none;\n        letter-spacing: normal;\n        word-break: normal;\n        word-spacing: normal;\n        white-space: normal;\n        line-break: auto;\n        font-size: 1rem;\n        overflow-wrap: break-word;\n        background-color: rgb(255, 255, 255);\n        background-clip: padding-box;\n        border: 1px solid #0c234b;\n        padding: 5px;\n        font-size: 18px;\n\n\n    }\n\n      #arrow {\n        position: absolute;\n        display: block;\n        width: 1rem;\n        height: 0.5rem;\n        margin: 0 0.3rem;\n      }\n\n      .popover .arrow::before, .popover .arrow::after {\n        position: absolute;\n        display: block;\n        content: \"\";\n        border-color: transparent;\n        border-style: solid;\n\n      }\n\n      .bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n        margin-bottom: 0.5rem;\n      }\n\n      .bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n        bottom: calc(-0.5rem - 1px);\n      }\n\n      .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n        bottom: 0;\n        border-width: 0.5rem 0.5rem 0;\n        border-top-color: rgba(0, 0, 0, 0.25);\n      }\n\n      .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n        bottom: 1px;\n        border-width: 0.5rem 0.5rem 0;\n        border-top-color: #fff;\n      }\n\n      .bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n        margin-left: 0.5rem;\n      }\n\n      .bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n        left: calc(-0.5rem - 1px);\n        width: 0.5rem;\n        height: 1rem;\n        margin: 0.3rem 0;\n      }\n\n      .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n        left: 0;\n        border-width: 0.5rem 0.5rem 0.5rem 0;\n        border-right-color: rgba(0, 0, 0, 0.25);\n      }\n\n      .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n        left: 1px;\n        border-width: 0.5rem 0.5rem 0.5rem 0;\n        border-right-color: #fff;\n      }\n\n      .bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n        margin-top: 0.5rem;\n      }\n\n      .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n        top: calc(-0.5rem - 1px);\n      }\n\n      .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n        top: 0;\n        border-width: 0 0.5rem 0.5rem 0.5rem;\n        border-bottom-color: rgba(0, 0, 0, 0.25);\n      }\n\n      .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n        top: 1px;\n        border-width: 0 0.5rem 0.5rem 0.5rem;\n        border-bottom-color: #fff;\n      }\n\n      .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        display: block;\n        width: 1rem;\n        margin-left: -0.5rem;\n        content: \"\";\n        border-bottom: 1px solid #f7f7f7;\n      }\n\n      .bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n        margin-right: 0.5rem;\n      }\n\n      .bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n        right: calc(-0.5rem - 1px);\n        width: 0.5rem;\n        height: 1rem;\n        margin: 0.3rem 0;\n      }\n\n      .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n        right: 0;\n        border-width: 0.5rem 0 0.5rem 0.5rem;\n        border-left-color: rgba(0, 0, 0, 0.25);\n      }\n\n      .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n        right: 1px;\n        border-width: 0.5rem 0 0.5rem 0.5rem;\n        border-left-color: #fff;\n      }\n\n      .popover-header {\n        padding: 0.5rem 0.75rem;\n        margin-bottom: 0;\n        font-size: 1rem;\n        background-color: #f7f7f7;\n        border-bottom: 1px solid #ebebeb;\n      }\n\n      .popover-header:empty {\n        display: none;\n      }\n\n      .popover-body {\n        padding: 0.5rem 0.75rem;\n        color: #212529;\n      }\n\n      .input-group {\n        position: relative;\n        display: table;\n        border-collapse: separate;\n    }\n@charset \"UTF-8\"; /*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n*,\n::after,\n::before {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n}\nheader {\n    display: block;\n}\nbody {\n    margin: 0;\n    font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    text-align: left;\n    background-color: #fff;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n    outline: 0 !important;\n}\na {\n    color: #8b0015;\n    text-decoration: none;\n    background-color: transparent;\n}\na:hover {\n    color: #3f0009;\n    text-decoration: underline;\n}\na:not([href]):not([class]) {\n    color: inherit;\n    text-decoration: none;\n}\na:not([href]):not([class]):hover {\n    color: inherit;\n    text-decoration: none;\n}\nlabel {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n}\nbutton {\n    border-radius: 0;\n}\nbutton:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n}\nbutton,\ninput,\nselect {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\nbutton,\ninput {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\n[role=\"button\"] {\n    cursor: pointer;\n}\nselect {\n    word-wrap: normal;\n}\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\nbutton {\n    -webkit-appearance: button;\n}\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled),\nbutton:not(:disabled) {\n    cursor: pointer;\n}\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n[type=\"search\"] {\n    outline-offset: -2px;\n    -webkit-appearance: none;\n}\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n    font: inherit;\n    -webkit-appearance: button;\n}\n[hidden] {\n    display: none !important;\n}\n.col,\n.col-1,\n.col-10,\n.col-11,\n.col-12,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-lg,\n.col-lg-1,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-md,\n.col-md-1,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-sm,\n.col-sm-1,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9 {\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.col {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n.col-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n}\n.col-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n}\n.col-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n}\n.col-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n}\n.col-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n}\n.col-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n}\n.col-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n}\n.col-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n}\n.col-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col-xs-offset-1,\n.offset-1 {\n    margin-left: 8.333333%;\n}\n.col-xs-offset-2,\n.offset-2 {\n    margin-left: 16.666667%;\n}\n.col-xs-offset-3,\n.offset-3 {\n    margin-left: 25%;\n}\n.col-xs-offset-4,\n.offset-4 {\n    margin-left: 33.333333%;\n}\n.col-xs-offset-5,\n.offset-5 {\n    margin-left: 41.666667%;\n}\n.col-xs-offset-6,\n.offset-6 {\n    margin-left: 50%;\n}\n.col-xs-offset-7,\n.offset-7 {\n    margin-left: 58.333333%;\n}\n.col-xs-offset-8,\n.offset-8 {\n    margin-left: 66.666667%;\n}\n.col-xs-offset-9,\n.offset-9 {\n    margin-left: 75%;\n}\n.col-xs-offset-10,\n.offset-10 {\n    margin-left: 83.333333%;\n}\n.col-xs-offset-11,\n.offset-11 {\n    margin-left: 91.666667%;\n}\n@media (min-width: 576px) {\n    .col-sm {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-sm-1 {\n        flex: 0 0 8.333333%;\n        max-width: 8.333333%;\n    }\n    .col-sm-2 {\n        flex: 0 0 16.666667%;\n        max-width: 16.666667%;\n    }\n    .col-sm-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-sm-4 {\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n    }\n    .col-sm-5 {\n        flex: 0 0 41.666667%;\n        max-width: 41.666667%;\n    }\n    .col-sm-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-sm-7 {\n        flex: 0 0 58.333333%;\n        max-width: 58.333333%;\n    }\n    .col-sm-8 {\n        flex: 0 0 66.666667%;\n        max-width: 66.666667%;\n    }\n    .col-sm-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-sm-10 {\n        flex: 0 0 83.333333%;\n        max-width: 83.333333%;\n    }\n    .col-sm-11 {\n        flex: 0 0 91.666667%;\n        max-width: 91.666667%;\n    }\n    .col-sm-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .offset-sm-0 {\n        margin-left: 0;\n    }\n    .col-sm-offset-1,\n    .offset-sm-1 {\n        margin-left: 8.333333%;\n    }\n    .col-sm-offset-2,\n    .offset-sm-2 {\n        margin-left: 16.666667%;\n    }\n    .col-sm-offset-3,\n    .offset-sm-3 {\n        margin-left: 25%;\n    }\n    .col-sm-offset-4,\n    .offset-sm-4 {\n        margin-left: 33.333333%;\n    }\n    .col-sm-offset-5,\n    .offset-sm-5 {\n        margin-left: 41.666667%;\n    }\n    .col-sm-offset-6,\n    .offset-sm-6 {\n        margin-left: 50%;\n    }\n    .col-sm-offset-7,\n    .offset-sm-7 {\n        margin-left: 58.333333%;\n    }\n    .col-sm-offset-8,\n    .offset-sm-8 {\n        margin-left: 66.666667%;\n    }\n    .col-sm-offset-9,\n    .offset-sm-9 {\n        margin-left: 75%;\n    }\n    .col-sm-offset-10,\n    .offset-sm-10 {\n        margin-left: 83.333333%;\n    }\n    .col-sm-offset-11,\n    .offset-sm-11 {\n        margin-left: 91.666667%;\n    }\n}\n@media (min-width: 768px) {\n    .col-md {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-md-1 {\n        flex: 0 0 8.333333%;\n        max-width: 8.333333%;\n    }\n    .col-md-2 {\n        flex: 0 0 16.666667%;\n        max-width: 16.666667%;\n    }\n    .col-md-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-md-4 {\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n    }\n    .col-md-5 {\n        flex: 0 0 41.666667%;\n        max-width: 41.666667%;\n    }\n    .col-md-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-md-7 {\n        flex: 0 0 58.333333%;\n        max-width: 58.333333%;\n    }\n    .col-md-8 {\n        flex: 0 0 66.666667%;\n        max-width: 66.666667%;\n    }\n    .col-md-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-md-10 {\n        flex: 0 0 83.333333%;\n        max-width: 83.333333%;\n    }\n    .col-md-11 {\n        flex: 0 0 91.666667%;\n        max-width: 91.666667%;\n    }\n    .col-md-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .offset-md-0 {\n        margin-left: 0;\n    }\n    .col-md-offset-1,\n    .offset-md-1 {\n        margin-left: 8.333333%;\n    }\n    .col-md-offset-2,\n    .offset-md-2 {\n        margin-left: 16.666667%;\n    }\n    .col-md-offset-3,\n    .offset-md-3 {\n        margin-left: 25%;\n    }\n    .col-md-offset-4,\n    .offset-md-4 {\n        margin-left: 33.333333%;\n    }\n    .col-md-offset-5,\n    .offset-md-5 {\n        margin-left: 41.666667%;\n    }\n    .col-md-offset-6,\n    .offset-md-6 {\n        margin-left: 50%;\n    }\n    .col-md-offset-7,\n    .offset-md-7 {\n        margin-left: 58.333333%;\n    }\n    .col-md-offset-8,\n    .offset-md-8 {\n        margin-left: 66.666667%;\n    }\n    .col-md-offset-9,\n    .offset-md-9 {\n        margin-left: 75%;\n    }\n    .col-md-offset-10,\n    .offset-md-10 {\n        margin-left: 83.333333%;\n    }\n    .col-md-offset-11,\n    .offset-md-11 {\n        margin-left: 91.666667%;\n    }\n}\n@media (min-width: 992px) {\n    .col-lg {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-lg-1 {\n        flex: 0 0 8.333333%;\n        max-width: 8.333333%;\n    }\n    .col-lg-2 {\n        flex: 0 0 16.666667%;\n        max-width: 16.666667%;\n    }\n    .col-lg-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-lg-4 {\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n    }\n    .col-lg-5 {\n        flex: 0 0 41.666667%;\n        max-width: 41.666667%;\n    }\n    .col-lg-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-lg-7 {\n        flex: 0 0 58.333333%;\n        max-width: 58.333333%;\n    }\n    .col-lg-8 {\n        flex: 0 0 66.666667%;\n        max-width: 66.666667%;\n    }\n    .col-lg-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-lg-10 {\n        flex: 0 0 83.333333%;\n        max-width: 83.333333%;\n    }\n    .col-lg-11 {\n        flex: 0 0 91.666667%;\n        max-width: 91.666667%;\n    }\n    .col-lg-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .offset-lg-0 {\n        margin-left: 0;\n    }\n    .col-lg-offset-1,\n    .offset-lg-1 {\n        margin-left: 8.333333%;\n    }\n    .col-lg-offset-2,\n    .offset-lg-2 {\n        margin-left: 16.666667%;\n    }\n    .col-lg-offset-3,\n    .offset-lg-3 {\n        margin-left: 25%;\n    }\n    .col-lg-offset-4,\n    .offset-lg-4 {\n        margin-left: 33.333333%;\n    }\n    .col-lg-offset-5,\n    .offset-lg-5 {\n        margin-left: 41.666667%;\n    }\n    .col-lg-offset-6,\n    .offset-lg-6 {\n        margin-left: 50%;\n    }\n    .col-lg-offset-7,\n    .offset-lg-7 {\n        margin-left: 58.333333%;\n    }\n    .col-lg-offset-8,\n    .offset-lg-8 {\n        margin-left: 66.666667%;\n    }\n    .col-lg-offset-9,\n    .offset-lg-9 {\n        margin-left: 75%;\n    }\n    .col-lg-offset-10,\n    .offset-lg-10 {\n        margin-left: 83.333333%;\n    }\n    .col-lg-offset-11,\n    .offset-lg-11 {\n        margin-left: 91.666667%;\n    }\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n    .form-control {\n        transition: none;\n    }\n}\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0;\n}\n.form-control:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #495057;\n}\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #1e56b9;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);\n}\n.form-control::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n.form-control::placeholder {\n    color: #6c757d;\n    opacity: 1;\n}\n.form-control:disabled,\n.form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1;\n}\ninput[type=\"date\"].form-control,\ninput[type=\"datetime-local\"].form-control,\ninput[type=\"month\"].form-control,\ninput[type=\"time\"].form-control {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\nselect.form-control:focus::-ms-value {\n    color: #495057;\n    background-color: #fff;\n}\n.col-form-label {\n    padding-top: calc(0.375rem + 1px);\n    padding-bottom: calc(0.375rem + 1px);\n    margin-bottom: 0;\n    font-size: inherit;\n    line-height: 1.5;\n}\n.col-form-label-lg {\n    padding-top: calc(0.5rem + 1px);\n    padding-bottom: calc(0.5rem + 1px);\n    font-size: 1.25rem;\n    line-height: 1.5;\n}\n.col-form-label-sm {\n    padding-top: calc(0.25rem + 1px);\n    padding-bottom: calc(0.25rem + 1px);\n    font-size: 0.875rem;\n    line-height: 1.5;\n}\n.form-control-sm {\n    height: calc(1.5em + 0.5rem + 2px);\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n}\n.form-control-lg {\n    height: calc(1.5em + 1rem + 2px);\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n}\nselect.form-control[multiple],\nselect.form-control[size] {\n    height: auto;\n}\n.form-group {\n    margin-bottom: 1rem;\n}\n.form-text {\n    display: block;\n    margin-top: 0.25rem;\n}\n.btn {\n    display: inline-block;\n    font-weight: 500;\n    color: #212529;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-color: transparent;\n    border: 2px solid transparent;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n    .btn {\n        transition: none;\n    }\n}\n.btn:hover {\n    color: #212529;\n    text-decoration: none;\n}\n.btn.focus,\n.btn:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);\n}\n.btn.disabled,\n.btn:disabled {\n    opacity: 0.65;\n}\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer;\n}\na.btn.disabled {\n    pointer-events: none;\n}\n.btn-info {\n    color: #212529;\n    background-color: #81d3eb;\n    border-color: #81d3eb;\n}\n.btn-info:hover {\n    color: #212529;\n    background-color: #60c7e6;\n    border-color: #55c4e4;\n}\n.btn-info.focus,\n.btn-info:focus {\n    color: #212529;\n    background-color: #60c7e6;\n    border-color: #55c4e4;\n    box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);\n}\n.btn-info.disabled,\n.btn-info:disabled {\n    color: #212529;\n    background-color: #81d3eb;\n    border-color: #81d3eb;\n}\n.btn-info:not(:disabled):not(.disabled).active,\n.btn-info:not(:disabled):not(.disabled):active {\n    color: #212529;\n    background-color: #55c4e4;\n    border-color: #4ac0e2;\n}\n.btn-info:not(:disabled):not(.disabled).active:focus,\n.btn-info:not(:disabled):not(.disabled):active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);\n}\n.btn-link {\n    font-weight: 400;\n    color: #8b0015;\n    text-decoration: none;\n}\n.btn-link:hover {\n    color: #3f0009;\n    text-decoration: underline;\n}\n.btn-link.focus,\n.btn-link:focus {\n    text-decoration: underline;\n}\n.btn-link.disabled,\n.btn-link:disabled {\n    color: #6c757d;\n    pointer-events: none;\n}\n.btn-group-lg > .btn,\n.btn-lg {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.btn-group-sm > .btn,\n.btn-sm {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.btn-block,\n.btn-group-block,\n.btn-group-block .btn {\n    display: block;\n    width: 100%;\n}\n.btn-block + .btn-block,\n.btn-block + .btn-group-block,\n.btn-group-block .btn + .btn,\n.btn-group-block .btn + .btn-block,\n.btn-group-block .btn + .btn-group-block,\n.btn-group-block .btn-block + .btn,\n.btn-group-block .btn-group-block + .btn,\n.btn-group-block + .btn-block,\n.btn-group-block + .btn-group-block {\n    margin-top: 0.5rem;\n}\n.btn-group-block input.btn[type=\"button\"],\n.btn-group-block input.btn[type=\"reset\"],\n.btn-group-block input.btn[type=\"submit\"],\ninput.btn-group-block[type=\"button\"],\ninput.btn-group-block[type=\"reset\"],\ninput.btn-group-block[type=\"submit\"],\ninput[type=\"button\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"submit\"].btn-block {\n    width: 100%;\n}\n.btn-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n}\n.btn-group > .btn {\n    position: relative;\n    flex: 1 1 auto;\n}\n.btn-group > .btn:hover {\n    z-index: 1;\n}\n.btn-group > .btn:active,\n.btn-group > .btn:focus {\n    z-index: 1;\n}\n.btn-group > .btn-group:not(:first-child),\n.btn-group > .btn:not(:first-child) {\n    margin-left: -2px;\n}\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n    margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=\"checkbox\"],\n.btn-group-toggle > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"radio\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none;\n}\n.input-group {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100%;\n}\n.input-group > .form-control {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0;\n    margin-bottom: 0;\n}\n.input-group > .form-control + .form-control {\n    margin-left: -1px;\n}\n.input-group > .form-control:focus {\n    z-index: 3;\n}\n.input-group-btn {\n    display: flex;\n}\n.input-group-btn .btn {\n    position: relative;\n    z-index: 2;\n}\n.input-group-btn .btn:focus {\n    z-index: 3;\n}\n.input-group-btn .btn + .btn,\n.input-group-btn .btn + .input-group-text,\n.input-group-btn .input-group-text + .btn,\n.input-group-btn .input-group-text + .input-group-text {\n    margin-left: -1px;\n}\n.input-group-btn {\n    margin-right: -1px;\n}\n.input-group-text {\n    display: flex;\n    align-items: center;\n    padding: 0.375rem 0.75rem;\n    margin-bottom: 0;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    text-align: center;\n    white-space: nowrap;\n    background-color: #e9ecef;\n    border: 1px solid #ced4da;\n}\n.input-group-text input[type=\"checkbox\"],\n.input-group-text input[type=\"radio\"] {\n    margin-top: 0;\n}\n.input-group-lg > .form-control:not(textarea) {\n    height: calc(1.5em + 1rem + 2px);\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-btn > .btn,\n.input-group-lg > .input-group-btn > .input-group-text {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n}\n.input-group-sm > .form-control:not(textarea) {\n    height: calc(1.5em + 0.5rem + 2px);\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-btn > .btn,\n.input-group-sm > .input-group-btn > .input-group-text {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n}\n.page-link {\n    position: relative;\n    display: block;\n    padding: 0.5rem 0.75rem;\n    margin-left: -1px;\n    line-height: 1.25;\n    color: #1e5288;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n}\n.page-link:hover {\n    z-index: 2;\n    color: #001c48;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6;\n}\n.page-link:focus {\n    z-index: 3;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);\n}\n.label {\n    display: inline-block;\n    padding: 0.25em 0.4em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n    .label {\n        transition: none;\n    }\n}\na.label:focus,\na.label:hover {\n    text-decoration: none;\n}\n.label:empty {\n    display: none;\n}\n.btn .label {\n    position: relative;\n    top: -1px;\n}\n.label-info {\n    color: #212529;\n    background-color: #81d3eb;\n}\na.label-info:focus,\na.label-info:hover {\n    color: #212529;\n    background-color: #55c4e4;\n}\na.focus.label-info,\na.label-info:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(129, 211, 235, 0.5);\n}\n@-webkit-keyframes progress-bar-stripes {\n    from {\n        background-position: 1rem 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n@keyframes progress-bar-stripes {\n    from {\n        background-position: 1rem 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n.popover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1060;\n    display: block;\n    max-width: 276px;\n    font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n    font-size: 1rem;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.popover-header {\n    padding: 0.5rem 0.75rem;\n    margin-bottom: 0;\n    font-size: 1rem;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n}\n.popover-header:empty {\n    display: none;\n}\n.popover-body {\n    padding: 0.5rem 0.75rem;\n    color: #212529;\n}\n@-webkit-keyframes spinner-border {\n    to {\n        transform: rotate(360deg);\n    }\n}\n@keyframes spinner-border {\n    to {\n        transform: rotate(360deg);\n    }\n}\n@-webkit-keyframes spinner-grow {\n    0% {\n        transform: scale(0);\n    }\n    50% {\n        opacity: 1;\n        transform: none;\n    }\n}\n@keyframes spinner-grow {\n    0% {\n        transform: scale(0);\n    }\n    50% {\n        opacity: 1;\n        transform: none;\n    }\n}\n.border {\n    border: 1px solid #dee2e6 !important;\n}\n.border-top {\n    border-top: 1px solid #dee2e6 !important;\n}\n.border-right {\n    border-right: 1px solid #dee2e6 !important;\n}\n.border-bottom {\n    border-bottom: 1px solid #dee2e6 !important;\n}\n.border-left {\n    border-left: 1px solid #dee2e6 !important;\n}\n.border-0 {\n    border: 0 !important;\n}\n.border-top-0 {\n    border-top: 0 !important;\n}\n.border-right-0 {\n    border-right: 0 !important;\n}\n.border-bottom-0 {\n    border-bottom: 0 !important;\n}\n.border-left-0 {\n    border-left: 0 !important;\n}\n.border-info {\n    border-color: #81d3eb !important;\n}\n.clearfix::after {\n    display: block;\n    clear: both;\n    content: \"\";\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sticky-top {\n        position: -webkit-sticky;\n        position: sticky;\n        top: 0;\n        z-index: 1020;\n    }\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n}\n.page-header {\n    margin-bottom: 1.5rem !important;\n}\n.page-header {\n    margin-top: 3rem !important;\n}\n.page-header {\n    padding-bottom: 1rem !important;\n}\n.text-left {\n    text-align: left !important;\n}\n.text-right {\n    text-align: right !important;\n}\n.text-center {\n    text-align: center !important;\n}\n@media (min-width: 576px) {\n    .text-sm-left {\n        text-align: left !important;\n    }\n    .text-sm-right {\n        text-align: right !important;\n    }\n    .text-sm-center {\n        text-align: center !important;\n    }\n}\n@media (min-width: 768px) {\n    .text-md-left {\n        text-align: left !important;\n    }\n    .text-md-right {\n        text-align: right !important;\n    }\n    .text-md-center {\n        text-align: center !important;\n    }\n}\n@media (min-width: 992px) {\n    .text-lg-left {\n        text-align: left !important;\n    }\n    .text-lg-right {\n        text-align: right !important;\n    }\n    .text-lg-center {\n        text-align: center !important;\n    }\n}\n.text-info {\n    color: #81d3eb !important;\n}\na.text-info:focus,\na.text-info:hover {\n    color: #3fbce1 !important;\n}\n.text-body {\n    color: #212529 !important;\n}\n.text-reset {\n    color: inherit !important;\n}\n@media print {\n    *,\n    ::after,\n    ::before {\n        text-shadow: none !important;\n        box-shadow: none !important;\n    }\n    a:not(.btn) {\n        text-decoration: underline;\n    }\n    @page {\n        size: a3;\n    }\n    body {\n        min-width: 992px !important;\n    }\n    .label {\n        border: 1px solid #000;\n    }\n}\n.text-primary {\n    color: #0c234b !important;\n}\n.text-info {\n    color: #1e5288 !important;\n}\n.arizona-header {\n    position: relative;\n}\nbody {\n    color: #403635;\n}\na {\n    font-weight: 700;\n    text-decoration: underline;\n}\n.label-info {\n    color: #001c48;\n    background-color: #81d3eb;\n}\n.label-default {\n    color: #fff;\n    background-color: #8b0015;\n}\n.label-primary {\n    color: #fff;\n    background-color: #0c234b;\n}\n.btn {\n    font-weight: 500;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: 0.04em;\n    white-space: normal;\n    border-width: 2px;\n}\n.btn-info {\n    color: #001c48;\n}\n.btn-link {\n    color: #8b0015;\n}\n.btn-default {\n    color: #fff;\n    background-color: #8b0015;\n}\n.btn-default:hover {\n    color: #fff;\n    background-color: #ab0520;\n}\n.btn-default:active {\n    background-color: #a50019;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #0c234b;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #1e5288;\n}\n.btn-primary:active {\n    background-color: #133877;\n}\n.btn-hollow-default {\n    color: #8b0015;\n    border-color: #8b0015;\n}\n.btn-hollow-default:hover {\n    color: #fff;\n    background-color: #8b0015;\n}\n.btn-hollow-primary {\n    color: #0c234b;\n    border-color: #0c234b;\n}\n.btn-hollow-primary:hover {\n    color: #fff;\n    background-color: #0c234b;\n}\n.btn-info:hover {\n    color: #001c48;\n}\n@-webkit-keyframes fadein {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 0.75;\n    }\n}\n@keyframes fadein {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 0.75;\n    }\n}\n.btn-menu {\n    width: 60px;\n    height: 50px;\n    border: 0;\n    padding: 0;\n    font-size: 10px;\n    background-color: #ab0520;\n}\n.btn-menu:hover {\n    background-color: #8b0015;\n}\n.page-link {\n    color: #1e5288;\n}\n.page-link:hover {\n    color: #001c48;\n}\n@charset \"UTF-8\";\n@import url(https://cdn.uadigital.arizona.edu/lib/ua-brand-fonts/1.0.0/milo.min.css); /*!\n * Bootstrap v3.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */ /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n    font-family: sans-serif;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n}\nbody {\n    margin: 0;\n}\nheader,\nmenu {\n    display: block;\n}\n[hidden] {\n    display: none;\n}\na {\n    background-color: transparent;\n}\na:active,\na:hover {\n    outline: 0;\n}\nbutton,\ninput,\nselect {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n}\nbutton {\n    overflow: visible;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\ninput {\n    line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\ninput[type=\"search\"] {\n    -webkit-appearance: textfield;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n} /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n    *,\n    :after,\n    :before {\n        color: #000 !important;\n        text-shadow: none !important;\n        background: 0 0 !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n    }\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n    .label {\n        border: 1px solid #000;\n    }\n}\n* {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n:after,\n:before {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 10px;\n    -webkit-tap-highlight-color: transparent;\n}\nbody {\n    font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #403635;\n    background-color: #fff;\n}\nbutton,\ninput,\nselect {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\na {\n    color: #8b0015;\n    text-decoration: none;\n}\na:focus,\na:hover {\n    color: #8b0015;\n    text-decoration: underline;\n}\na:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n[role=\"button\"] {\n    cursor: pointer;\n}\n.text-left {\n    text-align: left;\n}\n.text-right {\n    text-align: right;\n}\n.text-center {\n    text-align: center;\n}\n.text-primary {\n    color: #0c234b;\n}\na.text-primary:focus,\na.text-primary:hover {\n    color: #050e1f;\n}\n.text-info {\n    color: #001c48;\n}\na.text-info:focus,\na.text-info:hover {\n    color: #000815;\n}\n.page-header {\n    padding-bottom: 11px;\n    margin: 48px 0 24px;\n    border-bottom: 1px solid #fff;\n}\n.col-lg-1,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-md-1,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-sm-1,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-xs-1,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 16px;\n    padding-left: 16px;\n}\n.col-xs-1,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9 {\n    float: left;\n}\n.col-xs-1 {\n    width: 8.333333%;\n}\n.col-xs-2 {\n    width: 16.666667%;\n}\n.col-xs-3 {\n    width: 25%;\n}\n.col-xs-4 {\n    width: 33.333333%;\n}\n.col-xs-5 {\n    width: 41.666667%;\n}\n.col-xs-6 {\n    width: 50%;\n}\n.col-xs-7 {\n    width: 58.333333%;\n}\n.col-xs-8 {\n    width: 66.666667%;\n}\n.col-xs-9 {\n    width: 75%;\n}\n.col-xs-10 {\n    width: 83.333333%;\n}\n.col-xs-11 {\n    width: 91.666667%;\n}\n.col-xs-12 {\n    width: 100%;\n}\n.col-xs-offset-0 {\n    margin-left: 0;\n}\n.col-xs-offset-1 {\n    margin-left: 8.333333%;\n}\n.col-xs-offset-2 {\n    margin-left: 16.666667%;\n}\n.col-xs-offset-3 {\n    margin-left: 25%;\n}\n.col-xs-offset-4 {\n    margin-left: 33.333333%;\n}\n.col-xs-offset-5 {\n    margin-left: 41.666667%;\n}\n.col-xs-offset-6 {\n    margin-left: 50%;\n}\n.col-xs-offset-7 {\n    margin-left: 58.333333%;\n}\n.col-xs-offset-8 {\n    margin-left: 66.666667%;\n}\n.col-xs-offset-9 {\n    margin-left: 75%;\n}\n.col-xs-offset-10 {\n    margin-left: 83.333333%;\n}\n.col-xs-offset-11 {\n    margin-left: 91.666667%;\n}\n.col-xs-offset-12 {\n    margin-left: 100%;\n}\n@media (min-width: 768px) {\n    .col-sm-1,\n    .col-sm-10,\n    .col-sm-11,\n    .col-sm-12,\n    .col-sm-2,\n    .col-sm-3,\n    .col-sm-4,\n    .col-sm-5,\n    .col-sm-6,\n    .col-sm-7,\n    .col-sm-8,\n    .col-sm-9 {\n        float: left;\n    }\n    .col-sm-1 {\n        width: 8.333333%;\n    }\n    .col-sm-2 {\n        width: 16.666667%;\n    }\n    .col-sm-3 {\n        width: 25%;\n    }\n    .col-sm-4 {\n        width: 33.333333%;\n    }\n    .col-sm-5 {\n        width: 41.666667%;\n    }\n    .col-sm-6 {\n        width: 50%;\n    }\n    .col-sm-7 {\n        width: 58.333333%;\n    }\n    .col-sm-8 {\n        width: 66.666667%;\n    }\n    .col-sm-9 {\n        width: 75%;\n    }\n    .col-sm-10 {\n        width: 83.333333%;\n    }\n    .col-sm-11 {\n        width: 91.666667%;\n    }\n    .col-sm-12 {\n        width: 100%;\n    }\n    .col-sm-offset-0 {\n        margin-left: 0;\n    }\n    .col-sm-offset-1 {\n        margin-left: 8.333333%;\n    }\n    .col-sm-offset-2 {\n        margin-left: 16.666667%;\n    }\n    .col-sm-offset-3 {\n        margin-left: 25%;\n    }\n    .col-sm-offset-4 {\n        margin-left: 33.333333%;\n    }\n    .col-sm-offset-5 {\n        margin-left: 41.666667%;\n    }\n    .col-sm-offset-6 {\n        margin-left: 50%;\n    }\n    .col-sm-offset-7 {\n        margin-left: 58.333333%;\n    }\n    .col-sm-offset-8 {\n        margin-left: 66.666667%;\n    }\n    .col-sm-offset-9 {\n        margin-left: 75%;\n    }\n    .col-sm-offset-10 {\n        margin-left: 83.333333%;\n    }\n    .col-sm-offset-11 {\n        margin-left: 91.666667%;\n    }\n    .col-sm-offset-12 {\n        margin-left: 100%;\n    }\n}\n@media (min-width: 992px) {\n    .col-md-1,\n    .col-md-10,\n    .col-md-11,\n    .col-md-12,\n    .col-md-2,\n    .col-md-3,\n    .col-md-4,\n    .col-md-5,\n    .col-md-6,\n    .col-md-7,\n    .col-md-8,\n    .col-md-9 {\n        float: left;\n    }\n    .col-md-1 {\n        width: 8.333333%;\n    }\n    .col-md-2 {\n        width: 16.666667%;\n    }\n    .col-md-3 {\n        width: 25%;\n    }\n    .col-md-4 {\n        width: 33.333333%;\n    }\n    .col-md-5 {\n        width: 41.666667%;\n    }\n    .col-md-6 {\n        width: 50%;\n    }\n    .col-md-7 {\n        width: 58.333333%;\n    }\n    .col-md-8 {\n        width: 66.666667%;\n    }\n    .col-md-9 {\n        width: 75%;\n    }\n    .col-md-10 {\n        width: 83.333333%;\n    }\n    .col-md-11 {\n        width: 91.666667%;\n    }\n    .col-md-12 {\n        width: 100%;\n    }\n    .col-md-offset-0 {\n        margin-left: 0;\n    }\n    .col-md-offset-1 {\n        margin-left: 8.333333%;\n    }\n    .col-md-offset-2 {\n        margin-left: 16.666667%;\n    }\n    .col-md-offset-3 {\n        margin-left: 25%;\n    }\n    .col-md-offset-4 {\n        margin-left: 33.333333%;\n    }\n    .col-md-offset-5 {\n        margin-left: 41.666667%;\n    }\n    .col-md-offset-6 {\n        margin-left: 50%;\n    }\n    .col-md-offset-7 {\n        margin-left: 58.333333%;\n    }\n    .col-md-offset-8 {\n        margin-left: 66.666667%;\n    }\n    .col-md-offset-9 {\n        margin-left: 75%;\n    }\n    .col-md-offset-10 {\n        margin-left: 83.333333%;\n    }\n    .col-md-offset-11 {\n        margin-left: 91.666667%;\n    }\n    .col-md-offset-12 {\n        margin-left: 100%;\n    }\n}\n@media (min-width: 1200px) {\n    .col-lg-1,\n    .col-lg-10,\n    .col-lg-11,\n    .col-lg-12,\n    .col-lg-2,\n    .col-lg-3,\n    .col-lg-4,\n    .col-lg-5,\n    .col-lg-6,\n    .col-lg-7,\n    .col-lg-8,\n    .col-lg-9 {\n        float: left;\n    }\n    .col-lg-1 {\n        width: 8.333333%;\n    }\n    .col-lg-2 {\n        width: 16.666667%;\n    }\n    .col-lg-3 {\n        width: 25%;\n    }\n    .col-lg-4 {\n        width: 33.333333%;\n    }\n    .col-lg-5 {\n        width: 41.666667%;\n    }\n    .col-lg-6 {\n        width: 50%;\n    }\n    .col-lg-7 {\n        width: 58.333333%;\n    }\n    .col-lg-8 {\n        width: 66.666667%;\n    }\n    .col-lg-9 {\n        width: 75%;\n    }\n    .col-lg-10 {\n        width: 83.333333%;\n    }\n    .col-lg-11 {\n        width: 91.666667%;\n    }\n    .col-lg-12 {\n        width: 100%;\n    }\n    .col-lg-offset-0 {\n        margin-left: 0;\n    }\n    .col-lg-offset-1 {\n        margin-left: 8.333333%;\n    }\n    .col-lg-offset-2 {\n        margin-left: 16.666667%;\n    }\n    .col-lg-offset-3 {\n        margin-left: 25%;\n    }\n    .col-lg-offset-4 {\n        margin-left: 33.333333%;\n    }\n    .col-lg-offset-5 {\n        margin-left: 41.666667%;\n    }\n    .col-lg-offset-6 {\n        margin-left: 50%;\n    }\n    .col-lg-offset-7 {\n        margin-left: 58.333333%;\n    }\n    .col-lg-offset-8 {\n        margin-left: 66.666667%;\n    }\n    .col-lg-offset-9 {\n        margin-left: 75%;\n    }\n    .col-lg-offset-10 {\n        margin-left: 83.333333%;\n    }\n    .col-lg-offset-11 {\n        margin-left: 91.666667%;\n    }\n    .col-lg-offset-12 {\n        margin-left: 100%;\n    }\n}\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700;\n}\ninput[type=\"search\"] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    margin: 4px 0 0;\n    line-height: normal;\n}\ninput[type=\"checkbox\"].disabled,\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"radio\"][disabled] {\n    cursor: not-allowed;\n}\ninput[type=\"file\"] {\n    display: block;\n}\ninput[type=\"range\"] {\n    display: block;\n    width: 100%;\n}\nselect[multiple],\nselect[size] {\n    height: auto;\n}\ninput[type=\"checkbox\"]:focus,\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 6px 12px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #49595e;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #cbd1e0;\n    border-radius: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #9eabae;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(158, 171, 174, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(158, 171, 174, 0.6);\n}\n.form-control::-moz-placeholder {\n    color: #49595e;\n    opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n    color: #49595e;\n}\n.form-control::-webkit-input-placeholder {\n    color: #49595e;\n}\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0;\n}\n.form-control[disabled],\n.form-control[readonly] {\n    background-color: #fff;\n    opacity: 1;\n}\n.form-control[disabled] {\n    cursor: not-allowed;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    input[type=\"date\"].form-control,\n    input[type=\"datetime-local\"].form-control,\n    input[type=\"month\"].form-control,\n    input[type=\"time\"].form-control {\n        line-height: 38px;\n    }\n    .input-group-sm input[type=\"date\"],\n    .input-group-sm input[type=\"datetime-local\"],\n    .input-group-sm input[type=\"month\"],\n    .input-group-sm input[type=\"time\"],\n    .input-group-sm > .input-group-btn > input.btn[type=\"date\"],\n    .input-group-sm > .input-group-btn > input.btn[type=\"datetime-local\"],\n    .input-group-sm > .input-group-btn > input.btn[type=\"month\"],\n    .input-group-sm > .input-group-btn > input.btn[type=\"time\"],\n    .input-group-sm > input.form-control[type=\"date\"],\n    .input-group-sm > input.form-control[type=\"datetime-local\"],\n    .input-group-sm > input.form-control[type=\"month\"],\n    .input-group-sm > input.form-control[type=\"time\"],\n    .input-group-sm > input.input-group-addon[type=\"date\"],\n    .input-group-sm > input.input-group-addon[type=\"datetime-local\"],\n    .input-group-sm > input.input-group-addon[type=\"month\"],\n    .input-group-sm > input.input-group-addon[type=\"time\"],\n    input[type=\"date\"].input-sm,\n    input[type=\"datetime-local\"].input-sm,\n    input[type=\"month\"].input-sm,\n    input[type=\"time\"].input-sm {\n        line-height: 33px;\n    }\n    .input-group-lg input[type=\"date\"],\n    .input-group-lg input[type=\"datetime-local\"],\n    .input-group-lg input[type=\"month\"],\n    .input-group-lg input[type=\"time\"],\n    .input-group-lg > .input-group-btn > input.btn[type=\"date\"],\n    .input-group-lg > .input-group-btn > input.btn[type=\"datetime-local\"],\n    .input-group-lg > .input-group-btn > input.btn[type=\"month\"],\n    .input-group-lg > .input-group-btn > input.btn[type=\"time\"],\n    .input-group-lg > input.form-control[type=\"date\"],\n    .input-group-lg > input.form-control[type=\"datetime-local\"],\n    .input-group-lg > input.form-control[type=\"month\"],\n    .input-group-lg > input.form-control[type=\"time\"],\n    .input-group-lg > input.input-group-addon[type=\"date\"],\n    .input-group-lg > input.input-group-addon[type=\"datetime-local\"],\n    .input-group-lg > input.input-group-addon[type=\"month\"],\n    .input-group-lg > input.input-group-addon[type=\"time\"],\n    input[type=\"date\"].input-lg,\n    input[type=\"datetime-local\"].input-lg,\n    input[type=\"month\"].input-lg,\n    input[type=\"time\"].input-lg {\n        line-height: 49px;\n    }\n}\n.form-group {\n    margin-bottom: 15px;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn,\n.input-sm {\n    height: 33px;\n    padding: 5px 10px;\n    font-size: 14px;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.input-group-sm > .input-group-btn > select.btn,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\nselect.input-sm {\n    height: 33px;\n    line-height: 33px;\n}\n.input-group-sm > .input-group-btn > select.btn[multiple],\n.input-group-sm > select.form-control[multiple],\n.input-group-sm > select.input-group-addon[multiple],\nselect[multiple].input-sm {\n    height: auto;\n}\n.form-group-sm .form-control {\n    height: 33px;\n    padding: 5px 10px;\n    font-size: 14px;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.form-group-sm select.form-control {\n    height: 33px;\n    line-height: 33px;\n}\n.form-group-sm select[multiple].form-control {\n    height: auto;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn,\n.input-lg {\n    height: 49px;\n    padding: 10px 16px;\n    font-size: 20px;\n    line-height: 1.333333;\n    border-radius: 0;\n}\n.input-group-lg > .input-group-btn > select.btn,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\nselect.input-lg {\n    height: 49px;\n    line-height: 49px;\n}\n.input-group-lg > .input-group-btn > select.btn[multiple],\n.input-group-lg > select.form-control[multiple],\n.input-group-lg > select.input-group-addon[multiple],\nselect[multiple].input-lg {\n    height: auto;\n}\n.form-group-lg .form-control {\n    height: 49px;\n    padding: 10px 16px;\n    font-size: 20px;\n    line-height: 1.333333;\n    border-radius: 0;\n}\n.form-group-lg select.form-control {\n    height: 49px;\n    line-height: 49px;\n}\n.form-group-lg select[multiple].form-control {\n    height: auto;\n}\n.btn {\n    display: inline-block;\n    margin-bottom: 0;\n    font-weight: 700;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    padding: 6px 12px;\n    font-size: 16px;\n    line-height: 1.5;\n    border-radius: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn.focus,\n.btn:focus,\n.btn:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.btn:active {\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\na.btn.disabled {\n    pointer-events: none;\n}\n.btn-default {\n    color: #fff;\n    background-color: #8b0015;\n    border-color: #8b0015;\n}\n.btn-default.focus,\n.btn-default:focus {\n    color: #fff;\n    background-color: #58000d;\n    border-color: #0c0002;\n}\n.btn-default:hover {\n    color: #fff;\n    background-color: #58000d;\n    border-color: #4e000c;\n}\n.btn-default:active {\n    color: #fff;\n    background-color: #58000d;\n    background-image: none;\n    border-color: #4e000c;\n}\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover {\n    color: #fff;\n    background-color: #340008;\n    border-color: #0c0002;\n}\n.btn-default.disabled.focus,\n.btn-default.disabled:focus,\n.btn-default.disabled:hover,\n.btn-default[disabled].focus,\n.btn-default[disabled]:focus,\n.btn-default[disabled]:hover {\n    background-color: #8b0015;\n    border-color: #8b0015;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #0c234b;\n    border-color: #0c234b;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n    color: #fff;\n    background-color: #050e1f;\n    border-color: #000;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #050e1f;\n    border-color: #040a16;\n}\n.btn-primary:active {\n    color: #fff;\n    background-color: #050e1f;\n    background-image: none;\n    border-color: #040a16;\n}\n.btn-primary:active.focus,\n.btn-primary:active:focus,\n.btn-primary:active:hover {\n    color: #fff;\n    background-color: #000;\n    border-color: #000;\n}\n.btn-primary.disabled.focus,\n.btn-primary.disabled:focus,\n.btn-primary.disabled:hover,\n.btn-primary[disabled].focus,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled]:hover {\n    background-color: #0c234b;\n    border-color: #0c234b;\n}\n.btn-info {\n    color: #fff;\n    background-color: #81d3eb;\n    border-color: #81d3eb;\n}\n.btn-info.focus,\n.btn-info:focus {\n    color: #fff;\n    background-color: #55c4e4;\n    border-color: #20a5cc;\n}\n.btn-info:hover {\n    color: #fff;\n    background-color: #55c4e4;\n    border-color: #4cc1e3;\n}\n.btn-info:active {\n    color: #fff;\n    background-color: #55c4e4;\n    background-image: none;\n    border-color: #4cc1e3;\n}\n.btn-info:active.focus,\n.btn-info:active:focus,\n.btn-info:active:hover {\n    color: #fff;\n    background-color: #36b9df;\n    border-color: #20a5cc;\n}\n.btn-info.disabled.focus,\n.btn-info.disabled:focus,\n.btn-info.disabled:hover,\n.btn-info[disabled].focus,\n.btn-info[disabled]:focus,\n.btn-info[disabled]:hover {\n    background-color: #81d3eb;\n    border-color: #81d3eb;\n}\n.btn-link {\n    font-weight: 400;\n    color: #8b0015;\n    border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link[disabled] {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n.btn-link,\n.btn-link:active,\n.btn-link:focus,\n.btn-link:hover {\n    border-color: transparent;\n}\n.btn-link:focus,\n.btn-link:hover {\n    color: #8b0015;\n    text-decoration: underline;\n    background-color: transparent;\n}\n.btn-link[disabled]:focus,\n.btn-link[disabled]:hover {\n    color: #495057;\n    text-decoration: none;\n}\n.btn-group-lg > .btn,\n.btn-lg {\n    padding: 10px 16px;\n    font-size: 20px;\n    line-height: 1.333333;\n    border-radius: 0;\n}\n.btn-group-sm > .btn,\n.btn-sm {\n    padding: 5px 10px;\n    font-size: 14px;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.btn-group-xs > .btn,\n.btn-xs {\n    padding: 1px 5px;\n    font-size: 14px;\n    line-height: 1.5;\n    border-radius: 0;\n}\n.btn-block {\n    display: block;\n    width: 100%;\n}\n.btn-block + .btn-block {\n    margin-top: 5px;\n}\ninput[type=\"button\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"submit\"].btn-block {\n    width: 100%;\n}\n.btn-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n.btn-group > .btn {\n    position: relative;\n    float: left;\n}\n.btn-group > .btn:active,\n.btn-group > .btn:focus,\n.btn-group > .btn:hover {\n    z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n    margin-left: -1px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n    border-radius: 0;\n}\n.btn-group > .btn:first-child {\n    margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n    float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none;\n}\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n    float: none;\n    padding-right: 0;\n    padding-left: 0;\n}\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0;\n}\n.input-group .form-control:focus {\n    z-index: 3;\n}\n.input-group .form-control,\n.input-group-addon,\n.input-group-btn {\n    display: table-cell;\n}\n.input-group .form-control:not(:first-child):not(:last-child),\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n    width: 1%;\n    white-space: nowrap;\n    vertical-align: middle;\n}\n.input-group-addon {\n    padding: 6px 12px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1;\n    color: #49595e;\n    text-align: center;\n    background-color: #fff;\n    border: 1px solid #cbd1e0;\n    border-radius: 0;\n}\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 14px;\n    border-radius: 0;\n}\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 20px;\n    border-radius: 0;\n}\n.input-group-addon input[type=\"checkbox\"],\n.input-group-addon input[type=\"radio\"] {\n    margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n    border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n    border-left: 0;\n}\n.input-group-btn {\n    position: relative;\n    font-size: 0;\n    white-space: nowrap;\n}\n.input-group-btn > .btn {\n    position: relative;\n}\n.input-group-btn > .btn + .btn {\n    margin-left: -1px;\n}\n.input-group-btn > .btn:active,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:hover {\n    z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n    margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px;\n}\n.label {\n    display: inline;\n    padding: 0.2em 0.6em 0.3em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: 0.25em;\n}\n.label:empty {\n    display: none;\n}\n.btn .label {\n    position: relative;\n    top: -1px;\n}\na.label:focus,\na.label:hover {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer;\n}\n.label-default {\n    background-color: #ab0520;\n}\n.label-default[href]:focus,\n.label-default[href]:hover {\n    background-color: #790417;\n}\n.label-primary {\n    background-color: #0c234b;\n}\n.label-primary[href]:focus,\n.label-primary[href]:hover {\n    background-color: #050e1f;\n}\n.label-info {\n    background-color: #81d3eb;\n}\n.label-info[href]:focus,\n.label-info[href]:hover {\n    background-color: #55c4e4;\n}\n@-webkit-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n@keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0;\n    }\n    to {\n        background-position: 0 0;\n    }\n}\n.popover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1060;\n    display: none;\n    max-width: 276px;\n    padding: 1px;\n    font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.5;\n    line-break: auto;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    white-space: normal;\n    font-size: 16px;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #1e5288;\n    border: 1px solid #1e5288;\n    border-radius: 0;\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.popover.top {\n    margin-top: -10px;\n}\n.popover.right {\n    margin-left: 10px;\n}\n.popover.bottom {\n    margin-top: 10px;\n}\n.popover.left {\n    margin-left: -10px;\n}\n.popover-content {\n    padding: 9px 14px;\n}\n.clearfix:after,\n.clearfix:before {\n    display: table;\n    content: \" \";\n}\n.clearfix:after {\n    clear: both;\n}\n.center-block {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n.hidden {\n    display: none !important;\n}\n@media (max-width: 767px) {\n    .hidden-xs {\n        display: none !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .hidden-sm {\n        display: none !important;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .hidden-md {\n        display: none !important;\n    }\n}\n@media (min-width: 1200px) {\n    .hidden-lg {\n        display: none !important;\n    }\n}\nhtml {\n    font-size: 16px;\n}\nbody {\n    font-family: MiloWeb, Verdana, Geneva, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\na {\n    font-weight: 700;\n    -webkit-transition: color 0.1s ease-in-out;\n    transition: color 0.1s ease-in-out;\n}\n.page-header {\n    margin: 3rem 0 2rem;\n    line-height: 1.2;\n}\nlabel {\n    color: #49595e;\n}\n.label {\n    border-radius: 0;\n}\n.form-control {\n    border: 2px solid #cbd1e0;\n}\n.btn {\n    background-clip: border-box;\n    font-weight: 700;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    white-space: normal;\n}\n.btn-default {\n    color: #fff;\n    background-color: #8b0015;\n    border-color: #8b0015;\n    border-width: 2px;\n    background-clip: border-box;\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n.btn-default.focus,\n.btn-default:focus {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-default:hover {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-default:active {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-default:active {\n    background-image: none;\n}\n.btn-default.disabled,\n.btn-default.disabled.focus,\n.btn-default.disabled:active,\n.btn-default.disabled:focus,\n.btn-default.disabled:hover,\n.btn-default[disabled],\n.btn-default[disabled].focus,\n.btn-default[disabled]:active,\n.btn-default[disabled]:focus,\n.btn-default[disabled]:hover {\n    background: #495057;\n    border-color: #495057;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #0c234b;\n    border-color: #0c234b;\n    border-width: 2px;\n    background-clip: border-box;\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-primary:active {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-primary:active.focus,\n.btn-primary:active:focus,\n.btn-primary:active:hover {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-primary:active {\n    background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary.disabled.focus,\n.btn-primary.disabled:active,\n.btn-primary.disabled:focus,\n.btn-primary.disabled:hover,\n.btn-primary[disabled],\n.btn-primary[disabled].focus,\n.btn-primary[disabled]:active,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled]:hover {\n    background: #495057;\n    border-color: #495057;\n}\n.btn-info {\n    color: #fff;\n    background-color: #81d3eb;\n    border-color: #81d3eb;\n    border-width: 2px;\n    background-clip: border-box;\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n.btn-info.focus,\n.btn-info:focus {\n    color: #fff;\n    background-color: #5c939e;\n    border-color: #5c939e;\n}\n.btn-info:hover {\n    color: #fff;\n    background-color: #5c939e;\n    border-color: #5c939e;\n}\n.btn-info:active {\n    color: #fff;\n    background-color: #5c939e;\n    border-color: #5c939e;\n}\n.btn-info:active.focus,\n.btn-info:active:focus,\n.btn-info:active:hover {\n    color: #fff;\n    background-color: #5c939e;\n    border-color: #5c939e;\n}\n.btn-info:active {\n    background-image: none;\n}\n.btn-info.disabled,\n.btn-info.disabled.focus,\n.btn-info.disabled:active,\n.btn-info.disabled:focus,\n.btn-info.disabled:hover,\n.btn-info[disabled],\n.btn-info[disabled].focus,\n.btn-info[disabled]:active,\n.btn-info[disabled]:focus,\n.btn-info[disabled]:hover {\n    background: #495057;\n    border-color: #495057;\n}\n.btn-link {\n    font-weight: 700;\n}\n.input-group-btn {\n    position: relative;\n    white-space: nowrap;\n}\n.input-group-btn > .btn {\n    position: relative;\n}\n.input-group-btn > .btn + .btn {\n    margin-left: -2px;\n}\n.input-group-btn > .btn:active,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:hover {\n    z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n    margin-right: -2px;\n    margin-top: 0;\n    padding: 5px 8px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -2px;\n    margin-top: 0;\n    padding: 5px 8px;\n}\n.label {\n    font-size: 0.7em;\n    font-weight: 700;\n    line-height: 1.5;\n    color: #fff;\n    margin: 0 0.5em;\n}\n.popover {\n    padding: 0;\n    -webkit-box-shadow: 0 0 0 transparent;\n    box-shadow: 0 0 0 transparent;\n}\n.text {\n    color: #fff;\n    font-family: MiloWeb, Verdana, Geneva, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n}\n.btn-hollow,\n.btn-hollow-default {\n    color: #8b0015;\n    background-color: transparent;\n    border-color: #8b0015;\n    border-width: 2px;\n    background-clip: border-box;\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n.btn-hollow-default.focus,\n.btn-hollow-default:focus,\n.btn-hollow.focus,\n.btn-hollow:focus {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-hollow-default:hover,\n.btn-hollow:hover {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-hollow-default:active,\n.btn-hollow:active {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-hollow-default:active.focus,\n.btn-hollow-default:active:focus,\n.btn-hollow-default:active:hover,\n.btn-hollow:active.focus,\n.btn-hollow:active:focus,\n.btn-hollow:active:hover {\n    color: #fff;\n    background-color: #ab0520;\n    border-color: #ab0520;\n}\n.btn-hollow-default:active,\n.btn-hollow:active {\n    background-image: none;\n}\n.btn-hollow-default.disabled,\n.btn-hollow-default.disabled.focus,\n.btn-hollow-default.disabled:active,\n.btn-hollow-default.disabled:focus,\n.btn-hollow-default.disabled:hover,\n.btn-hollow-default[disabled],\n.btn-hollow-default[disabled].focus,\n.btn-hollow-default[disabled]:active,\n.btn-hollow-default[disabled]:focus,\n.btn-hollow-default[disabled]:hover,\n.btn-hollow.disabled,\n.btn-hollow.disabled.focus,\n.btn-hollow.disabled:active,\n.btn-hollow.disabled:focus,\n.btn-hollow.disabled:hover,\n.btn-hollow[disabled],\n.btn-hollow[disabled].focus,\n.btn-hollow[disabled]:active,\n.btn-hollow[disabled]:focus,\n.btn-hollow[disabled]:hover {\n    background: #495057;\n    border-color: #495057;\n}\n.btn-hollow-primary {\n    color: #0c234b;\n    background-color: transparent;\n    border-color: #0c234b;\n    border-width: 2px;\n    background-clip: border-box;\n    -webkit-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out;\n}\n.btn-hollow-primary.focus,\n.btn-hollow-primary:focus {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-hollow-primary:hover {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-hollow-primary:active {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-hollow-primary:active.focus,\n.btn-hollow-primary:active:focus,\n.btn-hollow-primary:active:hover {\n    color: #fff;\n    background-color: #1e5288;\n    border-color: #1e5288;\n}\n.btn-hollow-primary:active {\n    background-image: none;\n}\n.btn-hollow-primary.disabled,\n.btn-hollow-primary.disabled.focus,\n.btn-hollow-primary.disabled:active,\n.btn-hollow-primary.disabled:focus,\n.btn-hollow-primary.disabled:hover,\n.btn-hollow-primary[disabled],\n.btn-hollow-primary[disabled].focus,\n.btn-hollow-primary[disabled]:active,\n.btn-hollow-primary[disabled]:focus,\n.btn-hollow-primary[disabled]:hover {\n    background: #495057;\n    border-color: #495057;\n}\n.btn-icon:before {\n    line-height: 1.5;\n    margin-right: -0.5em;\n}\n.search-form {\n    position: relative;\n    height: 38px;\n}\n.search-form .form-control::-webkit-input-placeholder {\n    font-size: 40px;\n    font-size: 0.75em;\n}\n.input-search {\n    padding-right: 40px;\n    padding-right: 2.5em;\n}\n.btn-search {\n    text-indent: -9999em;\n    width: 40px;\n    height: 40px;\n    top: 0;\n    right: 0;\n    width: 2.5rem;\n    height: 2.5rem;\n    border: 0;\n    background-repeat: no-repeat;\n    background-size: 24px 24px;\n    background-size: 1.5rem 1.5rem;\n    background-position: 7px 6px;\n    background-position: right 7px top 6px;\n    outline: 0;\n    position: absolute;\n    z-index: 0;\n    background-image: url(img/search-chili.svg);\n    background-color: transparent;\n}\n.btn-search:active,\n.btn-search:focus,\n.btn-search:hover {\n    opacity: 0.5;\n}\n@media (max-width: 767px) {\n    .text-left-xs {\n        text-align: left;\n    }\n    .text-center-xs {\n        text-align: center;\n    }\n    .text-right-xs {\n        text-align: right;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .text-left-sm {\n        text-align: left;\n    }\n    .text-center-sm {\n        text-align: center;\n    }\n    .text-right-sm {\n        text-align: right;\n    }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n    .text-left-md {\n        text-align: left;\n    }\n    .text-center-md {\n        text-align: center;\n    }\n    .text-right-md {\n        text-align: right;\n    }\n}\n@media (min-width: 1200px) {\n    .text-left-lg {\n        text-align: left;\n    }\n    .text-center-lg {\n        text-align: center;\n    }\n    .text-right-lg {\n        text-align: right;\n    }\n}\n.bottom-buffer-xs-0 {\n    margin-bottom: 0;\n}\n.bottom-buffer-1,\n.bottom-buffer-xs-1 {\n    margin-bottom: 1px;\n}\n.bottom-buffer-5,\n.bottom-buffer-xs-5 {\n    margin-bottom: 5px;\n}\n.bottom-buffer-10,\n.bottom-buffer-xs-10 {\n    margin-bottom: 10px;\n}\n.bottom-buffer-15,\n.bottom-buffer-xs-15 {\n    margin-bottom: 15px;\n}\n.bottom-buffer-20,\n.bottom-buffer-xs-20 {\n    margin-bottom: 20px;\n}\n.bottom-buffer-25,\n.bottom-buffer-xs-25 {\n    margin-bottom: 25px;\n}\n.bottom-buffer-30,\n.bottom-buffer-xs-30 {\n    margin-bottom: 30px;\n}\n.bottom-buffer-50,\n.bottom-buffer-xs-50 {\n    margin-bottom: 50px;\n}\n@media (min-width: 768px) {\n    .bottom-buffer-sm-0,\n    .bottom-buffer-sm-reset {\n        margin-bottom: 0;\n    }\n    .bottom-buffer-sm-1 {\n        margin-bottom: 1px;\n    }\n    .bottom-buffer-sm-5 {\n        margin-bottom: 5px;\n    }\n    .bottom-buffer-sm-10 {\n        margin-bottom: 10px;\n    }\n    .bottom-buffer-sm-15 {\n        margin-bottom: 15px;\n    }\n    .bottom-buffer-sm-20 {\n        margin-bottom: 20px;\n    }\n    .bottom-buffer-sm-25 {\n        margin-bottom: 25px;\n    }\n    .bottom-buffer-sm-30 {\n        margin-bottom: 30px;\n    }\n    .bottom-buffer-sm-50 {\n        margin-bottom: 50px;\n    }\n}\n@media (min-width: 992px) {\n    .bottom-buffer-md-0,\n    .bottom-buffer-md-reset {\n        margin-bottom: 0;\n    }\n    .bottom-buffer-md-1 {\n        margin-bottom: 1px;\n    }\n    .bottom-buffer-md-5 {\n        margin-bottom: 5px;\n    }\n    .bottom-buffer-md-10 {\n        margin-bottom: 10px;\n    }\n    .bottom-buffer-md-15 {\n        margin-bottom: 15px;\n    }\n    .bottom-buffer-md-20 {\n        margin-bottom: 20px;\n    }\n    .bottom-buffer-md-25 {\n        margin-bottom: 25px;\n    }\n    .bottom-buffer-md-30 {\n        margin-bottom: 30px;\n    }\n    .bottom-buffer-md-50 {\n        margin-bottom: 50px;\n    }\n}\n@media (min-width: 1200px) {\n    .bottom-buffer-lg-0,\n    .bottom-buffer-lg-reset {\n        margin-bottom: 0;\n    }\n    .bottom-buffer-lg-1 {\n        margin-bottom: 1px;\n    }\n    .bottom-buffer-lg-5 {\n        margin-bottom: 5px;\n    }\n    .bottom-buffer-lg-10 {\n        margin-bottom: 10px;\n    }\n    .bottom-buffer-lg-15 {\n        margin-bottom: 15px;\n    }\n    .bottom-buffer-lg-20 {\n        margin-bottom: 20px;\n    }\n    .bottom-buffer-lg-25 {\n        margin-bottom: 25px;\n    }\n    .bottom-buffer-lg-30 {\n        margin-bottom: 30px;\n    }\n    .bottom-buffer-lg-50 {\n        margin-bottom: 50px;\n    }\n}\n.top-buffer-xs-0 {\n    margin-top: 0;\n}\n.top-buffer-xs-1 {\n    margin-top: 1px;\n}\n.top-buffer-xs-5 {\n    margin-top: 5px;\n}\n.top-buffer-xs-10 {\n    margin-top: 10px;\n}\n.top-buffer-xs-15 {\n    margin-top: 15px;\n}\n.top-buffer-xs-20 {\n    margin-top: 20px;\n}\n.top-buffer-xs-25 {\n    margin-top: 25px;\n}\n.top-buffer-xs-30 {\n    margin-top: 30px;\n}\n.top-buffer-xs-50 {\n    margin-top: 50px;\n}\n@media (min-width: 768px) {\n    .top-buffer-sm-0,\n    .top-buffer-sm-reset {\n        margin-top: 0;\n    }\n    .top-buffer-sm-1 {\n        margin-top: 1px;\n    }\n    .top-buffer-sm-5 {\n        margin-top: 5px;\n    }\n    .top-buffer-sm-10 {\n        margin-top: 10px;\n    }\n    .top-buffer-sm-15 {\n        margin-top: 15px;\n    }\n    .top-buffer-sm-20 {\n        margin-top: 20px;\n    }\n    .top-buffer-sm-25 {\n        margin-top: 25px;\n    }\n    .top-buffer-sm-30 {\n        margin-top: 30px;\n    }\n    .top-buffer-sm-50 {\n        margin-top: 50px;\n    }\n}\n@media (min-width: 992px) {\n    .top-buffer-md-0,\n    .top-buffer-md-reset {\n        margin-top: 0;\n    }\n    .top-buffer-md-1 {\n        margin-top: 1px;\n    }\n    .top-buffer-md-5 {\n        margin-top: 5px;\n    }\n    .top-buffer-md-10 {\n        margin-top: 10px;\n    }\n    .top-buffer-md-15 {\n        margin-top: 15px;\n    }\n    .top-buffer-md-20 {\n        margin-top: 20px;\n    }\n    .top-buffer-md-25 {\n        margin-top: 25px;\n    }\n    .top-buffer-md-30 {\n        margin-top: 30px;\n    }\n    .top-buffer-md-50 {\n        margin-top: 50px;\n    }\n}\n@media (min-width: 1200px) {\n    .top-buffer-lg-0,\n    .top-buffer-lg-reset {\n        margin-top: 0;\n    }\n    .top-buffer-lg-1 {\n        margin-top: 1px;\n    }\n    .top-buffer-lg-5 {\n        margin-top: 5px;\n    }\n    .top-buffer-lg-10 {\n        margin-top: 10px;\n    }\n    .top-buffer-lg-15 {\n        margin-top: 15px;\n    }\n    .top-buffer-lg-20 {\n        margin-top: 20px;\n    }\n    .top-buffer-lg-25 {\n        margin-top: 25px;\n    }\n    .top-buffer-lg-30 {\n        margin-top: 30px;\n    }\n    .top-buffer-lg-50 {\n        margin-top: 50px;\n    }\n}\n.right-buffer-xs-0 {\n    padding-right: 0;\n}\n.right-buffer-xs-1 {\n    padding-right: 1px;\n}\n.right-buffer-xs-5 {\n    padding-right: 5px;\n}\n.right-buffer-xs-10 {\n    padding-right: 10px;\n}\n.right-buffer-xs-15 {\n    padding-right: 15px;\n}\n.right-buffer-xs-20 {\n    padding-right: 20px;\n}\n.right-buffer-xs-30 {\n    padding-right: 30px;\n}\n.left-buffer-xs-0 {\n    padding-left: 0;\n}\n.left-buffer-xs-1 {\n    padding-left: 1px;\n}\n.left-buffer-xs-5 {\n    padding-left: 5px;\n}\n.left-buffer-xs-10 {\n    padding-left: 10px;\n}\n.left-buffer-xs-15 {\n    padding-left: 15px;\n}\n.left-buffer-xs-20 {\n    padding-left: 20px;\n}\n.left-buffer-xs-30 {\n    padding-left: 30px;\n}\n@media (min-width: 768px) {\n    .right-buffer-sm-0 {\n        padding-right: 0;\n    }\n    .right-buffer-sm-1 {\n        padding-right: 1px;\n    }\n    .right-buffer-sm-5 {\n        padding-right: 5px;\n    }\n    .right-buffer-sm-10 {\n        padding-right: 10px;\n    }\n    .right-buffer-sm-reset {\n        padding-right: 16px;\n    }\n    .right-buffer-sm-15 {\n        padding-right: 15px;\n    }\n    .right-buffer-sm-20 {\n        padding-right: 20px;\n    }\n    .right-buffer-sm-30 {\n        padding-right: 30px;\n    }\n    .left-buffer-sm-0 {\n        padding-left: 0;\n    }\n    .left-buffer-sm-1 {\n        padding-left: 1px;\n    }\n    .left-buffer-sm-5 {\n        padding-left: 5px;\n    }\n    .left-buffer-sm-10 {\n        padding-left: 10px;\n    }\n    .left-buffer-sm-15 {\n        padding-left: 15px;\n    }\n    .left-buffer-sm-reset {\n        padding-left: 16px;\n    }\n    .left-buffer-sm-20 {\n        padding-left: 20px;\n    }\n    .left-buffer-sm-30 {\n        padding-left: 30px;\n    }\n}\n@media (min-width: 992px) {\n    .right-buffer-md-0 {\n        padding-right: 0;\n    }\n    .right-buffer-md-1 {\n        padding-right: 1px;\n    }\n    .right-buffer-md-5 {\n        padding-right: 5px;\n    }\n    .right-buffer-md-10 {\n        padding-right: 10px;\n    }\n    .right-buffer-md-15 {\n        padding-right: 15px;\n    }\n    .right-buffer-md-reset {\n        padding-right: 16px;\n    }\n    .right-buffer-md-20 {\n        padding-right: 20px;\n    }\n    .right-buffer-md-30 {\n        padding-right: 30px;\n    }\n    .left-buffer-md-0 {\n        padding-left: 0;\n    }\n    .left-buffer-md-1 {\n        padding-left: 1px;\n    }\n    .left-buffer-md-5 {\n        padding-left: 5px;\n    }\n    .left-buffer-md-10 {\n        padding-left: 10px;\n    }\n    .left-buffer-md-15 {\n        padding-left: 15px;\n    }\n    .left-buffer-md-reset {\n        padding-left: 16px;\n    }\n    .left-buffer-md-20 {\n        padding-left: 20px;\n    }\n    .left-buffer-md-30 {\n        padding-left: 30px;\n    }\n}\n@media (min-width: 1200px) {\n    .right-buffer-lg-0 {\n        padding-right: 0;\n    }\n    .right-buffer-lg-1 {\n        padding-right: 1px;\n    }\n    .right-buffer-lg-5 {\n        padding-right: 5px;\n    }\n    .right-buffer-lg-10 {\n        padding-right: 10px;\n    }\n    .right-buffer-lg-15 {\n        padding-right: 15px;\n    }\n    .right-buffer-lg-reset {\n        padding-right: 16px;\n    }\n    .right-buffer-lg-20 {\n        padding-right: 20px;\n    }\n    .right-buffer-lg-30 {\n        padding-right: 30px;\n    }\n    .left-buffer-lg-0 {\n        padding-left: 0;\n    }\n    .left-buffer-lg-1 {\n        padding-left: 1px;\n    }\n    .left-buffer-lg-5 {\n        padding-left: 5px;\n    }\n    .left-buffer-lg-10 {\n        padding-left: 10px;\n    }\n    .left-buffer-lg-15 {\n        padding-left: 15px;\n    }\n    .left-buffer-lg-reset {\n        padding-left: 16px;\n    }\n    .left-buffer-lg-20 {\n        padding-left: 20px;\n    }\n    .left-buffer-lg-30 {\n        padding-left: 30px;\n    }\n}\n\n           "])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Base URL of menu endpoint
         */
        baseUrl: {
          type: String
        },

        /**
         * Machine name of menu
         */
        menuId: {
          type: String
        },

        /**
         * Branding heading for the menu
         */
        branding: {
          type: String
        },

        /**
         * An array of objects containing data for the menu tree
         */
        tree: {
          type: Array
        },

        /**
         * Loading state
         */
        isLoading: {
          type: Boolean,
          attribute: false
        },

        /**
         * Loading message
         */
        loadingMessage: {
          type: String
        }
      };
    }
  }, {
    key: "azMenuLevelTemplate",
    value: function azMenuLevelTemplate(levels) {
      return (0, _litElement.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n           ", "\n       "])), levels);
    }
  }, {
    key: "azMenuOptionTemplate",
    value: function azMenuOptionTemplate(title, href) {
      return (0, _litElement.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<option data-href=\"", "\">", "</option>"])), href, title);
    }
  }, {
    key: "azMenuItemTemplate",
    value: function azMenuItemTemplate(title) {
      return (0, _litElement.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["", ""])), title);
    }
  }]);

  return AzSelectMenu;
}(_litElement.LitElement);

customElements.get('az-select-menu') || customElements.define('az-select-menu', AzSelectMenu);
},{"lit-element":"node_modules/lit-element/lit-element.js","@popperjs/core":"node_modules/@popperjs/core/lib/index.js","linkset-menu":"node_modules/linkset-menu/dist/index.js","./az-button":"src/az-button.js"}],"src/az-middle-header.js":[function(require,module,exports) {
"use strict";

var _litElement = require("lit-element");

require("./az-button");

require("./az-select-menu");

var _templateObject, _templateObject2;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
var AzLogoSelectCta = /*#__PURE__*/function (_LitElement) {
  _inherits(AzLogoSelectCta, _LitElement);

  var _super = _createSuper(AzLogoSelectCta);

  function AzLogoSelectCta() {
    _classCallCheck(this, AzLogoSelectCta);

    return _super.apply(this, arguments);
  }

  _createClass(AzLogoSelectCta, [{
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <header class=\"header page-row\" id=\"header_site\" role=\"banner\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                    <a href=\"/\" title=\"The University of Arizona, Tucson, Arizona | Home\" class=\"header__logo active\" rel=\"home\" id=\"logo\"><img src=\"https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png\" alt=\"The University of Arizona, Tucson, Arizona | Home\" class=\"header__logo-image\"></a>              </div>\n                    <div class=\"col-xs-12 col-sm-6 col-lg-8\">\n                        <div class=\"row\">\n                            <div class=\"region region-header-2\">\n                            <div id=\"block-bean-uaqs-audience-select\" class=\"block block-bean col-xs-12 top-buffer-xs-20 bottom-buffer-xs-20 col-sm-12 top-buffer-sm-15 bottom-buffer-sm-10 col-md-11 top-buffer-md-30 bottom-buffer-md-15 col-lg-5 col-lg-offset-2 top-buffer-lg-50 bottom-buffer-lg-5 left-buffer-lg-0 right-buffer-lg-0 first odd\" role=\"complementary\" aria-label=\"select menu\">\n                                 <az-select-menu baseurl=\"https://live-az-admissions.pantheonsite.io\" menuId=\"header----select-menu\"></az-select-menu>\n                            </div>\n\n                                <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-3 right-buffer-md-0 left-buffer-sm-3 right-buffer-sm-reset left-buffer-md-0 right-buffer-lg-5 left-buffer-lg-5 bottom-buffer-5 top-buffer-sm-0 top-buffer-lg-50 col-lg-offset-0\">\n                                    <div id=\"block-bean-cta-request-info\" class=\"block block-bean even\" role=\"complementary\" aria-label=\"call to action link\">\n                                        <az-button theme=\"primary\" block outline=\"true\" link=\"https://www.arizona.edu/student-life/virtual-visit\">Visit Virtually</az-button>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-md-3 col-lg-2 left-buffer-md-5 left-buffer-lg-0 bottom-buffer-30 top-buffer-md-0 top-buffer-lg-50\"><div id=\"block-bean-cta-apply\" class=\"block block-bean last even\" role=\"complementary\" aria-label=\"call to action link\">\n                                    <az-button theme=\"primary\" block link=\"https://www.arizona.edu/how-apply-uarizona\">Apply</az-button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> <!-- /.row -->\n            </div> <!-- /.container -->\n        </header>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n       :host {\n        font-family: inherit;\n        -ms-text-size-adjust: inherit;\n        -webkit-text-size-adjust: inherit;\n        }\n        body {\n            margin: 0;\n        }\n    header,\n    menu {\n        display: block;\n    }\n    [hidden] {\n        display: none;\n    }\n    a {\n        background-color: transparent;\n    }\n    a:active,\n    a:hover {\n        outline: 0;\n    }\n    img {\n        border: 0;\n    }\n    select {\n        color: inherit;\n        font: inherit;\n        margin: 0;\n    }\n    select {\n        text-transform: none;\n    } /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n    @media print {\n        *,\n        :after,\n        :before {\n            color: #000 !important;\n            text-shadow: none !important;\n            background: 0 0 !important;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n        a,\n        a:visited {\n            text-decoration: underline;\n        }\n        a[href]:after {\n            content: \" (\" attr(href) \")\";\n        }\n        a[href^=\"#\"]:after,\n        a[href^=\"javascript:\"]:after {\n            content: \"\";\n        }\n        img {\n            page-break-inside: avoid;\n        }\n        img {\n            max-width: 100% !important;\n        }\n        .label {\n            border: 1px solid #000;\n        }\n    }\n    * {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    :after,\n    :before {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    html {\n        font-size: 10px;\n        -webkit-tap-highlight-color: transparent;\n    }\n    body {\n        font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;\n        font-size: 16px;\n        line-height: 1.5;\n        color: #403635;\n        background-color: #fff;\n    }\n    select {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n    }\n    a {\n        color: #8b0015;\n        text-decoration: none;\n    }\n    a:focus,\n    a:hover {\n        color: #8b0015;\n        text-decoration: underline;\n    }\n    a:focus {\n        outline: 5px auto -webkit-focus-ring-color;\n        outline-offset: -2px;\n    }\n    img {\n        vertical-align: middle;\n    }\n    [role=\"button\"] {\n        cursor: pointer;\n    }\n    .page-header{\n        padding-bottom: 11px;\n        margin: 48px 0 24px;\n        border-bottom: 1px solid #fff;\n    }\n    .page-row > .row{\n        border-bottom: 1px solid #E2E9EB;\n    }\n    .container {\n        padding-right: 16px;\n        padding-left: 16px;\n        margin-right: auto;\n        margin-left: auto;\n    }\n    .container:after,\n    .container:before {\n        display: table;\n        content: \" \";\n    }\n    .container:after {\n        clear: both;\n    }\n    @media (min-width: 768px) {\n        .container {\n            width: 752px;\n        }\n    }\n    @media (min-width: 992px) {\n        .container {\n            width: 972px;\n        }\n    }\n    @media (min-width: 1200px) {\n        .container {\n            width: 1172px;\n        }\n    }\n    .row {\n        margin-right: -15px;\n        margin-left: -15px;\n    }\n    .row:after,\n    .row:before {\n        display: table;\n        content: \" \";\n    }\n    .row:after {\n        clear: both;\n    }\n    .col-lg-1,\n    .col-lg-10,\n    .col-lg-11,\n    .col-lg-12,\n    .col-lg-2,\n    .col-lg-3,\n    .col-lg-4,\n    .col-lg-5,\n    .col-lg-6,\n    .col-lg-7,\n    .col-lg-8,\n    .col-lg-9,\n    .col-md-1,\n    .col-md-10,\n    .col-md-11,\n    .col-md-12,\n    .col-md-2,\n    .col-md-3,\n    .col-md-4,\n    .col-md-5,\n    .col-md-6,\n    .col-md-7,\n    .col-md-8,\n    .col-md-9,\n    .col-sm-1,\n    .col-sm-10,\n    .col-sm-11,\n    .col-sm-12,\n    .col-sm-2,\n    .col-sm-3,\n    .col-sm-4,\n    .col-sm-5,\n    .col-sm-6,\n    .col-sm-7,\n    .col-sm-8,\n    .col-sm-9,\n    .col-xs-1,\n    .col-xs-10,\n    .col-xs-11,\n    .col-xs-12,\n    .col-xs-2,\n    .col-xs-3,\n    .col-xs-4,\n    .col-xs-5,\n    .col-xs-6,\n    .col-xs-7,\n    .col-xs-8,\n    .col-xs-9 {\n        position: relative;\n        min-height: 1px;\n        padding-right: 16px;\n        padding-left: 16px;\n    }\n    .col-xs-1,\n    .col-xs-10,\n    .col-xs-11,\n    .col-xs-12,\n    .col-xs-2,\n    .col-xs-3,\n    .col-xs-4,\n    .col-xs-5,\n    .col-xs-6,\n    .col-xs-7,\n    .col-xs-8,\n    .col-xs-9 {\n        float: left;\n    }\n    .col-xs-1 {\n        width: 8.333333%;\n    }\n    .col-xs-2 {\n        width: 16.666667%;\n    }\n    .col-xs-3 {\n        width: 25%;\n    }\n    .col-xs-4 {\n        width: 33.333333%;\n    }\n    .col-xs-5 {\n        width: 41.666667%;\n    }\n    .col-xs-6 {\n        width: 50%;\n    }\n    .col-xs-7 {\n        width: 58.333333%;\n    }\n    .col-xs-8 {\n        width: 66.666667%;\n    }\n    .col-xs-9 {\n        width: 75%;\n    }\n    .col-xs-10 {\n        width: 83.333333%;\n    }\n    .col-xs-11 {\n        width: 91.666667%;\n    }\n    .col-xs-12 {\n        width: 100%;\n    }\n    .col-xs-offset-0 {\n        margin-left: 0;\n    }\n    .col-xs-offset-1 {\n        margin-left: 8.333333%;\n    }\n    .col-xs-offset-2 {\n        margin-left: 16.666667%;\n    }\n    .col-xs-offset-3 {\n        margin-left: 25%;\n    }\n    .col-xs-offset-4 {\n        margin-left: 33.333333%;\n    }\n    .col-xs-offset-5 {\n        margin-left: 41.666667%;\n    }\n    .col-xs-offset-6 {\n        margin-left: 50%;\n    }\n    .col-xs-offset-7 {\n        margin-left: 58.333333%;\n    }\n    .col-xs-offset-8 {\n        margin-left: 66.666667%;\n    }\n    .col-xs-offset-9 {\n        margin-left: 75%;\n    }\n    .col-xs-offset-10 {\n        margin-left: 83.333333%;\n    }\n    .col-xs-offset-11 {\n        margin-left: 91.666667%;\n    }\n    .col-xs-offset-12 {\n        margin-left: 100%;\n    }\n    @media (min-width: 768px) {\n        .col-sm-1,\n        .col-sm-10,\n        .col-sm-11,\n        .col-sm-12,\n        .col-sm-2,\n        .col-sm-3,\n        .col-sm-4,\n        .col-sm-5,\n        .col-sm-6,\n        .col-sm-7,\n        .col-sm-8,\n        .col-sm-9 {\n            float: left;\n        }\n        .col-sm-1 {\n            width: 8.333333%;\n        }\n        .col-sm-2 {\n            width: 16.666667%;\n        }\n        .col-sm-3 {\n            width: 25%;\n        }\n        .col-sm-4 {\n            width: 33.333333%;\n        }\n        .col-sm-5 {\n            width: 41.666667%;\n        }\n        .col-sm-6 {\n            width: 50%;\n        }\n        .col-sm-7 {\n            width: 58.333333%;\n        }\n        .col-sm-8 {\n            width: 66.666667%;\n        }\n        .col-sm-9 {\n            width: 75%;\n        }\n        .col-sm-10 {\n            width: 83.333333%;\n        }\n        .col-sm-11 {\n            width: 91.666667%;\n        }\n        .col-sm-12 {\n            width: 100%;\n        }\n        .col-sm-offset-0 {\n            margin-left: 0;\n        }\n        .col-sm-offset-1 {\n            margin-left: 8.333333%;\n        }\n        .col-sm-offset-2 {\n            margin-left: 16.666667%;\n        }\n        .col-sm-offset-3 {\n            margin-left: 25%;\n        }\n        .col-sm-offset-4 {\n            margin-left: 33.333333%;\n        }\n        .col-sm-offset-5 {\n            margin-left: 41.666667%;\n        }\n        .col-sm-offset-6 {\n            margin-left: 50%;\n        }\n        .col-sm-offset-7 {\n            margin-left: 58.333333%;\n        }\n        .col-sm-offset-8 {\n            margin-left: 66.666667%;\n        }\n        .col-sm-offset-9 {\n            margin-left: 75%;\n        }\n        .col-sm-offset-10 {\n            margin-left: 83.333333%;\n        }\n        .col-sm-offset-11 {\n            margin-left: 91.666667%;\n        }\n        .col-sm-offset-12 {\n            margin-left: 100%;\n        }\n    }\n    @media (min-width: 992px) {\n        .col-md-1,\n        .col-md-10,\n        .col-md-11,\n        .col-md-12,\n        .col-md-2,\n        .col-md-3,\n        .col-md-4,\n        .col-md-5,\n        .col-md-6,\n        .col-md-7,\n        .col-md-8,\n        .col-md-9 {\n            float: left;\n        }\n        .col-md-1 {\n            width: 8.333333%;\n        }\n        .col-md-2 {\n            width: 16.666667%;\n        }\n        .col-md-3 {\n            width: 25%;\n        }\n        .col-md-4 {\n            width: 33.333333%;\n        }\n        .col-md-5 {\n            width: 41.666667%;\n        }\n        .col-md-6 {\n            width: 50%;\n        }\n        .col-md-7 {\n            width: 58.333333%;\n        }\n        .col-md-8 {\n            width: 66.666667%;\n        }\n        .col-md-9 {\n            width: 75%;\n        }\n        .col-md-10 {\n            width: 83.333333%;\n        }\n        .col-md-11 {\n            width: 91.666667%;\n        }\n        .col-md-12 {\n            width: 100%;\n        }\n        .col-md-offset-0 {\n            margin-left: 0;\n        }\n        .col-md-offset-1 {\n            margin-left: 8.333333%;\n        }\n        .col-md-offset-2 {\n            margin-left: 16.666667%;\n        }\n        .col-md-offset-3 {\n            margin-left: 25%;\n        }\n        .col-md-offset-4 {\n            margin-left: 33.333333%;\n        }\n        .col-md-offset-5 {\n            margin-left: 41.666667%;\n        }\n        .col-md-offset-6 {\n            margin-left: 50%;\n        }\n        .col-md-offset-7 {\n            margin-left: 58.333333%;\n        }\n        .col-md-offset-8 {\n            margin-left: 66.666667%;\n        }\n        .col-md-offset-9 {\n            margin-left: 75%;\n        }\n        .col-md-offset-10 {\n            margin-left: 83.333333%;\n        }\n        .col-md-offset-11 {\n            margin-left: 91.666667%;\n        }\n        .col-md-offset-12 {\n            margin-left: 100%;\n        }\n    }\n    @media (min-width: 1200px) {\n        .col-lg-1,\n        .col-lg-10,\n        .col-lg-11,\n        .col-lg-12,\n        .col-lg-2,\n        .col-lg-3,\n        .col-lg-4,\n        .col-lg-5,\n        .col-lg-6,\n        .col-lg-7,\n        .col-lg-8,\n        .col-lg-9 {\n            float: left;\n        }\n        .col-lg-1 {\n            width: 8.333333%;\n        }\n        .col-lg-2 {\n            width: 16.666667%;\n        }\n        .col-lg-3 {\n            width: 25%;\n        }\n        .col-lg-4 {\n            width: 33.333333%;\n        }\n        .col-lg-5 {\n            width: 41.666667%;\n        }\n        .col-lg-6 {\n            width: 50%;\n        }\n        .col-lg-7 {\n            width: 58.333333%;\n        }\n        .col-lg-8 {\n            width: 66.666667%;\n        }\n        .col-lg-9 {\n            width: 75%;\n        }\n        .col-lg-10 {\n            width: 83.333333%;\n        }\n        .col-lg-11 {\n            width: 91.666667%;\n        }\n        .col-lg-12 {\n            width: 100%;\n        }\n        .col-lg-offset-0 {\n            margin-left: 0;\n        }\n        .col-lg-offset-1 {\n            margin-left: 8.333333%;\n        }\n        .col-lg-offset-2 {\n            margin-left: 16.666667%;\n        }\n        .col-lg-offset-3 {\n            margin-left: 25%;\n        }\n        .col-lg-offset-4 {\n            margin-left: 33.333333%;\n        }\n        .col-lg-offset-5 {\n            margin-left: 41.666667%;\n        }\n        .col-lg-offset-6 {\n            margin-left: 50%;\n        }\n        .col-lg-offset-7 {\n            margin-left: 58.333333%;\n        }\n        .col-lg-offset-8 {\n            margin-left: 66.666667%;\n        }\n        .col-lg-offset-9 {\n            margin-left: 75%;\n        }\n        .col-lg-offset-10 {\n            margin-left: 83.333333%;\n        }\n        .col-lg-offset-11 {\n            margin-left: 91.666667%;\n        }\n        .col-lg-offset-12 {\n            margin-left: 100%;\n        }\n    }\n    label {\n        display: inline-block;\n        max-width: 100%;\n        margin-bottom: 5px;\n        font-weight: 700;\n    }\n    select[multiple],\n    select[size] {\n        height: auto;\n    }\n    .label {\n        display: inline;\n        padding: 0.2em 0.6em 0.3em;\n        font-size: 75%;\n        font-weight: 700;\n        line-height: 1;\n        color: #fff;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: baseline;\n        border-radius: 0.25em;\n    }\n    .label:empty {\n        display: none;\n    }\n    a.label:focus,\n    a.label:hover {\n        color: #fff;\n        text-decoration: none;\n        cursor: pointer;\n    }\n    .label-default {\n        background-color: #ab0520;\n    }\n    .label-default[href]:focus,\n    .label-default[href]:hover {\n        background-color: #790417;\n    }\n    .label-info {\n        background-color: #81d3eb;\n    }\n    .label-info[href]:focus,\n    .label-info[href]:hover {\n        background-color: #55c4e4;\n    }\n    @-webkit-keyframes progress-bar-stripes {\n        from {\n            background-position: 40px 0;\n        }\n        to {\n            background-position: 0 0;\n        }\n    }\n    @keyframes progress-bar-stripes {\n        from {\n            background-position: 40px 0;\n        }\n        to {\n            background-position: 0 0;\n        }\n    }\n    html {\n        font-size: 16px;\n    }\n    a {\n        font-weight: 700;\n        -webkit-transition: color 0.1s ease-in-out;\n        transition: color 0.1s ease-in-out;\n    }\n    .page-header {\n        margin: 3rem 0 2rem;\n        line-height: 1.2;\n    }\n    label {\n        color: #49595e;\n    }\n    .label {\n        border-radius: 0;\n    }\n    select {\n        border: 0;\n        outline: 1px solid #cbd1e0;\n        background-color: #fff;\n        border-radius: 0;\n    }\n    .label {\n        font-size: 0.7em;\n        font-weight: 700;\n        line-height: 1.5;\n        color: #fff;\n        margin: 0 0.5em;\n    }\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n    a.link-container {\n        color: inherit;\n        display: block;\n        font-weight: inherit;\n    }\n    a.link-container:focus,\n    a.link-container:hover {\n        background-color: #eef1f1;\n        outline: 0;\n        text-decoration: none;\n        color: inherit;\n    }\n    .arizona-logo {\n        display: inline-block;\n        height: 20px;\n        margin: 19px 0 20px;\n        max-width: 80%;\n        float: left;\n        width: 276px;\n        padding: 0 0 0 0.6rem;\n    }\n    .bottom-buffer-xs-0 {\n        margin-bottom: 0;\n    }\n    .bottom-buffer-1,\n    .bottom-buffer-xs-1 {\n        margin-bottom: 1px;\n    }\n    .bottom-buffer-5,\n    .bottom-buffer-xs-5 {\n        margin-bottom: 5px;\n    }\n    .bottom-buffer-10,\n    .bottom-buffer-xs-10 {\n        margin-bottom: 10px;\n    }\n    .bottom-buffer-15,\n    .bottom-buffer-xs-15 {\n        margin-bottom: 15px;\n    }\n    .bottom-buffer-20,\n    .bottom-buffer-xs-20 {\n        margin-bottom: 20px;\n    }\n    .bottom-buffer-25,\n    .bottom-buffer-xs-25 {\n        margin-bottom: 25px;\n    }\n    .bottom-buffer-30,\n    .bottom-buffer-xs-30 {\n        margin-bottom: 30px;\n    }\n    .bottom-buffer-50,\n    .bottom-buffer-xs-50 {\n        margin-bottom: 50px;\n    }\n    @media (min-width: 768px) {\n        .bottom-buffer-sm-0,\n        .bottom-buffer-sm-reset {\n            margin-bottom: 0;\n        }\n        .bottom-buffer-sm-1 {\n            margin-bottom: 1px;\n        }\n        .bottom-buffer-sm-5 {\n            margin-bottom: 5px;\n        }\n        .bottom-buffer-sm-10 {\n            margin-bottom: 10px;\n        }\n        .bottom-buffer-sm-15 {\n            margin-bottom: 15px;\n        }\n        .bottom-buffer-sm-20 {\n            margin-bottom: 20px;\n        }\n        .bottom-buffer-sm-25 {\n            margin-bottom: 25px;\n        }\n        .bottom-buffer-sm-30 {\n            margin-bottom: 30px;\n        }\n        .bottom-buffer-sm-50 {\n            margin-bottom: 50px;\n        }\n    }\n    @media (min-width: 992px) {\n        .bottom-buffer-md-0,\n        .bottom-buffer-md-reset {\n            margin-bottom: 0;\n        }\n        .bottom-buffer-md-1 {\n            margin-bottom: 1px;\n        }\n        .bottom-buffer-md-5 {\n            margin-bottom: 5px;\n        }\n        .bottom-buffer-md-10 {\n            margin-bottom: 10px;\n        }\n        .bottom-buffer-md-15 {\n            margin-bottom: 15px;\n        }\n        .bottom-buffer-md-20 {\n            margin-bottom: 20px;\n        }\n        .bottom-buffer-md-25 {\n            margin-bottom: 25px;\n        }\n        .bottom-buffer-md-30 {\n            margin-bottom: 30px;\n        }\n        .bottom-buffer-md-50 {\n            margin-bottom: 50px;\n        }\n    }\n    @media (min-width: 1200px) {\n        .bottom-buffer-lg-0,\n        .bottom-buffer-lg-reset {\n            margin-bottom: 0;\n        }\n        .bottom-buffer-lg-1 {\n            margin-bottom: 1px;\n        }\n        .bottom-buffer-lg-5 {\n            margin-bottom: 5px;\n        }\n        .bottom-buffer-lg-10 {\n            margin-bottom: 10px;\n        }\n        .bottom-buffer-lg-15 {\n            margin-bottom: 15px;\n        }\n        .bottom-buffer-lg-20 {\n            margin-bottom: 20px;\n        }\n        .bottom-buffer-lg-25 {\n            margin-bottom: 25px;\n        }\n        .bottom-buffer-lg-30 {\n            margin-bottom: 30px;\n        }\n        .bottom-buffer-lg-50 {\n            margin-bottom: 50px;\n        }\n    }\n    .top-buffer-xs-0 {\n        margin-top: 0;\n    }\n    .top-buffer-xs-1 {\n        margin-top: 1px;\n    }\n    .top-buffer-xs-5 {\n        margin-top: 5px;\n    }\n    .top-buffer-xs-10 {\n        margin-top: 10px;\n    }\n    .top-buffer-xs-15 {\n        margin-top: 15px;\n    }\n    .top-buffer-xs-20 {\n        margin-top: 20px;\n    }\n    .top-buffer-xs-25 {\n        margin-top: 25px;\n    }\n    .top-buffer-xs-30 {\n        margin-top: 30px;\n    }\n    .top-buffer-xs-50 {\n        margin-top: 50px;\n    }\n    @media (min-width: 768px) {\n        .top-buffer-sm-0,\n        .top-buffer-sm-reset {\n            margin-top: 0;\n        }\n        .top-buffer-sm-1 {\n            margin-top: 1px;\n        }\n        .top-buffer-sm-5 {\n            margin-top: 5px;\n        }\n        .top-buffer-sm-10 {\n            margin-top: 10px;\n        }\n        .top-buffer-sm-15 {\n            margin-top: 15px;\n        }\n        .top-buffer-sm-20 {\n            margin-top: 20px;\n        }\n        .top-buffer-sm-25 {\n            margin-top: 25px;\n        }\n        .top-buffer-sm-30 {\n            margin-top: 30px;\n        }\n        .top-buffer-sm-50 {\n            margin-top: 50px;\n        }\n    }\n    @media (min-width: 992px) {\n        .top-buffer-md-0,\n        .top-buffer-md-reset {\n            margin-top: 0;\n        }\n        .top-buffer-md-1 {\n            margin-top: 1px;\n        }\n        .top-buffer-md-5 {\n            margin-top: 5px;\n        }\n        .top-buffer-md-10 {\n            margin-top: 10px;\n        }\n        .top-buffer-md-15 {\n            margin-top: 15px;\n        }\n        .top-buffer-md-20 {\n            margin-top: 20px;\n        }\n        .top-buffer-md-25 {\n            margin-top: 25px;\n        }\n        .top-buffer-md-30 {\n            margin-top: 30px;\n        }\n        .top-buffer-md-50 {\n            margin-top: 50px;\n        }\n    }\n    @media (min-width: 1200px) {\n        .top-buffer-lg-0,\n        .top-buffer-lg-reset {\n            margin-top: 0;\n        }\n        .top-buffer-lg-1 {\n            margin-top: 1px;\n        }\n        .top-buffer-lg-5 {\n            margin-top: 5px;\n        }\n        .top-buffer-lg-10 {\n            margin-top: 10px;\n        }\n        .top-buffer-lg-15 {\n            margin-top: 15px;\n        }\n        .top-buffer-lg-20 {\n            margin-top: 20px;\n        }\n        .top-buffer-lg-25 {\n            margin-top: 25px;\n        }\n        .top-buffer-lg-30 {\n            margin-top: 30px;\n        }\n        .top-buffer-lg-50 {\n            margin-top: 50px;\n        }\n    }\n    .right-buffer-xs-0 {\n        padding-right: 0;\n    }\n    .right-buffer-xs-1 {\n        padding-right: 1px;\n    }\n    .right-buffer-xs-5 {\n        padding-right: 5px;\n    }\n    .right-buffer-xs-10 {\n        padding-right: 10px;\n    }\n    .right-buffer-xs-15 {\n        padding-right: 15px;\n    }\n    .right-buffer-xs-20 {\n        padding-right: 20px;\n    }\n    .right-buffer-xs-30 {\n        padding-right: 30px;\n    }\n    .left-buffer-xs-0 {\n        padding-left: 0;\n    }\n    .left-buffer-xs-1 {\n        padding-left: 1px;\n    }\n    .left-buffer-xs-5 {\n        padding-left: 5px;\n    }\n    .left-buffer-xs-10 {\n        padding-left: 10px;\n    }\n    .left-buffer-xs-15 {\n        padding-left: 15px;\n    }\n    .left-buffer-xs-20 {\n        padding-left: 20px;\n    }\n    .left-buffer-xs-30 {\n        padding-left: 30px;\n    }\n    @media (min-width: 768px) {\n        .right-buffer-sm-0 {\n            padding-right: 0;\n        }\n        .right-buffer-sm-1 {\n            padding-right: 1px;\n        }\n        .right-buffer-sm-5 {\n            padding-right: 5px;\n        }\n        .right-buffer-sm-10 {\n            padding-right: 10px;\n        }\n        .right-buffer-sm-reset {\n            padding-right: 16px;\n        }\n        .right-buffer-sm-15 {\n            padding-right: 15px;\n        }\n        .right-buffer-sm-20 {\n            padding-right: 20px;\n        }\n        .right-buffer-sm-30 {\n            padding-right: 30px;\n        }\n        .left-buffer-sm-0 {\n            padding-left: 0;\n        }\n        .left-buffer-sm-1 {\n            padding-left: 1px;\n        }\n        .left-buffer-sm-5 {\n            padding-left: 5px;\n        }\n        .left-buffer-sm-10 {\n            padding-left: 10px;\n        }\n        .left-buffer-sm-15 {\n            padding-left: 15px;\n        }\n        .left-buffer-sm-reset {\n            padding-left: 16px;\n        }\n        .left-buffer-sm-20 {\n            padding-left: 20px;\n        }\n        .left-buffer-sm-30 {\n            padding-left: 30px;\n        }\n    }\n    @media (min-width: 992px) {\n        .right-buffer-md-0 {\n            padding-right: 0;\n        }\n        .right-buffer-md-1 {\n            padding-right: 1px;\n        }\n        .right-buffer-md-5 {\n            padding-right: 5px;\n        }\n        .right-buffer-md-10 {\n            padding-right: 10px;\n        }\n        .right-buffer-md-15 {\n            padding-right: 15px;\n        }\n        .right-buffer-md-reset {\n            padding-right: 16px;\n        }\n        .right-buffer-md-20 {\n            padding-right: 20px;\n        }\n        .right-buffer-md-30 {\n            padding-right: 30px;\n        }\n        .left-buffer-md-0 {\n            padding-left: 0;\n        }\n        .left-buffer-md-1 {\n            padding-left: 1px;\n        }\n        .left-buffer-md-5 {\n            padding-left: 5px;\n        }\n        .left-buffer-md-10 {\n            padding-left: 10px;\n        }\n        .left-buffer-md-15 {\n            padding-left: 15px;\n        }\n        .left-buffer-md-reset {\n            padding-left: 16px;\n        }\n        .left-buffer-md-20 {\n            padding-left: 20px;\n        }\n        .left-buffer-md-30 {\n            padding-left: 30px;\n        }\n    }\n    @media (min-width: 1200px) {\n        .right-buffer-lg-0 {\n            padding-right: 0;\n        }\n        .right-buffer-lg-1 {\n            padding-right: 1px;\n        }\n        .right-buffer-lg-5 {\n            padding-right: 5px;\n        }\n        .right-buffer-lg-10 {\n            padding-right: 10px;\n        }\n        .right-buffer-lg-15 {\n            padding-right: 15px;\n        }\n        .right-buffer-lg-reset {\n            padding-right: 16px;\n        }\n        .right-buffer-lg-20 {\n            padding-right: 20px;\n        }\n        .right-buffer-lg-30 {\n            padding-right: 30px;\n        }\n        .left-buffer-lg-0 {\n            padding-left: 0;\n        }\n        .left-buffer-lg-1 {\n            padding-left: 1px;\n        }\n        .left-buffer-lg-5 {\n            padding-left: 5px;\n        }\n        .left-buffer-lg-10 {\n            padding-left: 10px;\n        }\n        .left-buffer-lg-15 {\n            padding-left: 15px;\n        }\n        .left-buffer-lg-reset {\n            padding-left: 16px;\n        }\n        .left-buffer-lg-20 {\n            padding-left: 20px;\n        }\n        .left-buffer-lg-30 {\n            padding-left: 30px;\n        }\n    }\n    header {\n        display: block;\n    }\n    [hidden] {\n        display: none;\n    }\n    html {\n        font-family: MiloWeb, Verdana, Geneva, sans-serif;\n        font-size: 100%;\n        -ms-text-size-adjust: 100%;\n        -webkit-text-size-adjust: 100%;\n        line-height: 1.5em;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n    }\n    .header__logo {\n        float: left;\n        width: 100%;\n        text-align: center;\n        margin: 24px 0;\n        margin: 1.5rem 0;\n        padding: 0;\n    }\n    @media (min-width: 48em) {\n        .header__logo {\n            width: auto;\n            text-align: left;\n            margin: 40px 0;\n            margin: 2rem 0;\n        }\n    }\n    .header__logo-image {\n        vertical-align: bottom;\n        width: 100%;\n        max-width: 400px;\n        height: auto;\n    }\n    .header__site-link:link,\n    .header__site-link:visited {\n        color: #000;\n        text-decoration: none;\n    }\n    .header__site-link:focus,\n    .header__site-link:hover {\n        text-decoration: underline;\n    }\n    #logo a.webheader,\n    #logo a.webheader:hover,\n    #logo.webheader {\n        font-weight: 700;\n        text-transform: uppercase;\n        color: #0c234b;\n        font-size: 1.8em;\n        text-decoration: none;\n        display: flex;\n        line-height: 0.9em;\n        text-align: left;\n    }\n    header#header_ua {\n        max-height: 59px;\n        min-height: 10px;\n    }\n    @media print {\n        a:link,\n        a:visited {\n            text-decoration: underline !important;\n        }\n        a:link.header__site-link,\n        a:visited.header__site-link {\n            text-decoration: none !important;\n        }\n        #page,\n        body {\n            color: #000;\n            background-color: transparent !important;\n            background-image: none !important;\n        }\n    }\n\n                  "])));
    }
  }]);

  return AzLogoSelectCta;
}(_litElement.LitElement);

customElements.get('az-middle-header') || customElements.define('az-middle-header', AzLogoSelectCta);
},{"lit-element":"node_modules/lit-element/lit-element.js","./az-button":"src/az-button.js","./az-select-menu":"src/az-select-menu.js"}],"src/header.js":[function(require,module,exports) {
"use strict";

require("regenerator-runtime/runtime");

var _azRedbar = require("./az-redbar");

var _azMainMenu = require("./az-main-menu");

var _azMiddleHeader = require("./az-middle-header");

customElements.define('az-redbar', _azRedbar.AzRedbar);
customElements.define('az-main-menu', _azMainMenu.AzMainMenu);
customElements.define('az-middle-header', _azMiddleHeader.AzMiddleHeader);
},{"regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","./az-redbar":"src/az-redbar.js","./az-main-menu":"src/az-main-menu.js","./az-middle-header":"src/az-middle-header.js"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58696" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/header.js"], null)
//# sourceMappingURL=/header.40c62c09.js.map