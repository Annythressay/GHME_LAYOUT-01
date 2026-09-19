function bv(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var wo = { exports: {} }, ci = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;
function Sv() {
  if (ng) return ci;
  ng = 1;
  var x = Symbol.for("react.transitional.element"), w = Symbol.for("react.fragment");
  function O(m, B, Z) {
    var gt = null;
    if (Z !== void 0 && (gt = "" + Z), B.key !== void 0 && (gt = "" + B.key), "key" in B) {
      Z = {};
      for (var k in B)
        k !== "key" && (Z[k] = B[k]);
    } else Z = B;
    return B = Z.ref, {
      $$typeof: x,
      type: m,
      key: gt,
      ref: B !== void 0 ? B : null,
      props: Z
    };
  }
  return ci.Fragment = w, ci.jsx = O, ci.jsxs = O, ci;
}
var ig;
function zv() {
  return ig || (ig = 1, wo.exports = Sv()), wo.exports;
}
var r = zv(), Eo = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug;
function Tv() {
  if (ug) return Q;
  ug = 1;
  var x = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), gt = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), C = Symbol.for("react.view_transition"), V = Symbol.iterator;
  function Tt(s) {
    return s === null || typeof s != "object" ? null : (s = V && s[V] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Wt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, yt = Object.assign, xl = {};
  function il(s, T, U) {
    this.props = s, this.context = T, this.refs = xl, this.updater = U || Wt;
  }
  il.prototype.isReactComponent = {}, il.prototype.setState = function(s, T) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, T, "setState");
  }, il.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ke() {
  }
  ke.prototype = il.prototype;
  function Bl(s, T, U) {
    this.props = s, this.context = T, this.refs = xl, this.updater = U || Wt;
  }
  var Yl = Bl.prototype = new ke();
  Yl.constructor = Bl, yt(Yl, il.prototype), Yl.isPureReactComponent = !0;
  var ul = Array.isArray;
  function F() {
  }
  var it = { H: null, A: null, T: null, S: null }, Gl = Object.prototype.hasOwnProperty;
  function bl(s, T, U) {
    var R = U.ref;
    return {
      $$typeof: x,
      type: s,
      key: T,
      ref: R !== void 0 ? R : null,
      props: U
    };
  }
  function Sl(s, T) {
    return bl(s.type, T, s.props);
  }
  function cl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === x;
  }
  function pe(s) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(U) {
      return T[U];
    });
  }
  var $e = /\/+/g;
  function jt(s, T) {
    return typeof s == "object" && s !== null && s.key != null ? pe("" + s.key) : T.toString(36);
  }
  function _(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(F, F) : (s.status = "pending", s.then(
          function(T) {
            s.status === "pending" && (s.status = "fulfilled", s.value = T);
          },
          function(T) {
            s.status === "pending" && (s.status = "rejected", s.reason = T);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Y(s, T, U, R, et) {
    var at = typeof s;
    (at === "undefined" || at === "boolean") && (s = null);
    var ut = !1;
    if (s === null) ut = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case x:
            case w:
              ut = !0;
              break;
            case N:
              return ut = s._init, Y(
                ut(s._payload),
                T,
                U,
                R,
                et
              );
          }
      }
    if (ut)
      return et = et(s), ut = R === "" ? "." + jt(s, 0) : R, ul(et) ? (U = "", ut != null && (U = ut.replace($e, "$&/") + "/"), Y(et, T, U, "", function(ee) {
        return ee;
      })) : et != null && (cl(et) && (et = Sl(
        et,
        U + (et.key == null || s && s.key === et.key ? "" : ("" + et.key).replace(
          $e,
          "$&/"
        ) + "/") + ut
      )), T.push(et)), 1;
    ut = 0;
    var j = R === "" ? "." : R + ":";
    if (ul(s))
      for (var X = 0; X < s.length; X++)
        R = s[X], at = j + jt(R, X), ut += Y(
          R,
          T,
          U,
          at,
          et
        );
    else if (X = Tt(s), typeof X == "function")
      for (s = X.call(s), X = 0; !(R = s.next()).done; )
        R = R.value, at = j + jt(R, X++), ut += Y(
          R,
          T,
          U,
          at,
          et
        );
    else if (at === "object") {
      if (typeof s.then == "function")
        return Y(
          _(s),
          T,
          U,
          R,
          et
        );
      throw T = String(s), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ut;
  }
  function G(s, T, U) {
    if (s == null) return s;
    var R = [], et = 0;
    return Y(s, R, "", "", function(at) {
      return T.call(U, at, et++);
    }), R;
  }
  function mt(s) {
    if (s._status === -1) {
      var T = s._result, U = T();
      U.then(
        function(R) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = R, U.status === void 0 && (U.status = "fulfilled", U.value = R));
        },
        function(R) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = R, U.status === void 0 && (U.status = "rejected", U.reason = R));
        }
      ), s._status === -1 && (s._status = 0, s._result = U);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Cl(s) {
    var T = it.T, U = {};
    U.types = T !== null ? T.types : null, it.T = U;
    try {
      var R = s(), et = it.S;
      et !== null && et(U, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(F, ft);
    } catch (at) {
      ft(at);
    } finally {
      T !== null && U.types !== null && (T.types = U.types), it.T = T;
    }
  }
  function le(s) {
    var T = it.T;
    if (T !== null) {
      var U = T.types;
      U === null ? T.types = [s] : U.indexOf(s) === -1 && U.push(s);
    } else Cl(le.bind(null, s));
  }
  var Fe = {
    map: G,
    forEach: function(s, T, U) {
      G(
        s,
        function() {
          T.apply(this, arguments);
        },
        U
      );
    },
    count: function(s) {
      var T = 0;
      return G(s, function() {
        T++;
      }), T;
    },
    toArray: function(s) {
      return G(s, function(T) {
        return T;
      }) || [];
    },
    only: function(s) {
      if (!cl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return Q.Activity = b, Q.Children = Fe, Q.Component = il, Q.Fragment = O, Q.Profiler = B, Q.PureComponent = Bl, Q.StrictMode = m, Q.Suspense = H, Q.ViewTransition = C, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = it, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return it.H.useMemoCache(s);
    }
  }, Q.addTransitionType = le, Q.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(s, T, U) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var R = yt({}, s.props), et = s.key;
    if (T != null)
      for (at in T.key !== void 0 && (et = "" + T.key), T)
        !Gl.call(T, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && T.ref === void 0 || (R[at] = T[at]);
    var at = arguments.length - 2;
    if (at === 1) R.children = U;
    else if (1 < at) {
      for (var ut = Array(at), j = 0; j < at; j++)
        ut[j] = arguments[j + 2];
      R.children = ut;
    }
    return bl(s.type, et, R);
  }, Q.createContext = function(s) {
    return s = {
      $$typeof: gt,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: Z,
      _context: s
    }, s;
  }, Q.createElement = function(s, T, U) {
    var R, et = {}, at = null;
    if (T != null)
      for (R in T.key !== void 0 && (at = "" + T.key), T)
        Gl.call(T, R) && R !== "key" && R !== "__self" && R !== "__source" && (et[R] = T[R]);
    var ut = arguments.length - 2;
    if (ut === 1) et.children = U;
    else if (1 < ut) {
      for (var j = Array(ut), X = 0; X < ut; X++)
        j[X] = arguments[X + 2];
      et.children = j;
    }
    if (s && s.defaultProps)
      for (R in ut = s.defaultProps, ut)
        et[R] === void 0 && (et[R] = ut[R]);
    return bl(s, at, et);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(s) {
    return { $$typeof: k, render: s };
  }, Q.isValidElement = cl, Q.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: mt
    };
  }, Q.memo = function(s, T) {
    return {
      $$typeof: J,
      type: s,
      compare: T === void 0 ? null : T
    };
  }, Q.startTransition = Cl, Q.unstable_useCacheRefresh = function() {
    return it.H.useCacheRefresh();
  }, Q.use = function(s) {
    return it.H.use(s);
  }, Q.useActionState = function(s, T, U) {
    return it.H.useActionState(s, T, U);
  }, Q.useCallback = function(s, T) {
    return it.H.useCallback(s, T);
  }, Q.useContext = function(s) {
    return it.H.useContext(s);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(s, T) {
    return it.H.useDeferredValue(s, T);
  }, Q.useEffect = function(s, T) {
    return it.H.useEffect(s, T);
  }, Q.useEffectEvent = function(s) {
    return it.H.useEffectEvent(s);
  }, Q.useId = function() {
    return it.H.useId();
  }, Q.useImperativeHandle = function(s, T, U) {
    return it.H.useImperativeHandle(s, T, U);
  }, Q.useInsertionEffect = function(s, T) {
    return it.H.useInsertionEffect(s, T);
  }, Q.useLayoutEffect = function(s, T) {
    return it.H.useLayoutEffect(s, T);
  }, Q.useMemo = function(s, T) {
    return it.H.useMemo(s, T);
  }, Q.useOptimistic = function(s, T) {
    return it.H.useOptimistic(s, T);
  }, Q.useReducer = function(s, T, U) {
    return it.H.useReducer(s, T, U);
  }, Q.useRef = function(s) {
    return it.H.useRef(s);
  }, Q.useState = function(s) {
    return it.H.useState(s);
  }, Q.useSyncExternalStore = function(s, T, U) {
    return it.H.useSyncExternalStore(
      s,
      T,
      U
    );
  }, Q.useTransition = function() {
    return it.H.useTransition();
  }, Q.version = "19.3.0", Q;
}
var cg;
function Co() {
  return cg || (cg = 1, Eo.exports = Tv()), Eo.exports;
}
var Ft = Co();
const wv = /* @__PURE__ */ bv(Ft);
var No = { exports: {} }, fi = {}, _o = { exports: {} }, Ao = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fg;
function Ev() {
  return fg || (fg = 1, (function(x) {
    function w(_, Y) {
      var G = _.length;
      _.push(Y);
      t: for (; 0 < G; ) {
        var mt = G - 1 >>> 1, ft = _[mt];
        if (0 < B(ft, Y))
          _[mt] = Y, _[G] = ft, G = mt;
        else break t;
      }
    }
    function O(_) {
      return _.length === 0 ? null : _[0];
    }
    function m(_) {
      if (_.length === 0) return null;
      var Y = _[0], G = _.pop();
      if (G !== Y) {
        _[0] = G;
        t: for (var mt = 0, ft = _.length, Cl = ft >>> 1; mt < Cl; ) {
          var le = 2 * (mt + 1) - 1, Fe = _[le], s = le + 1, T = _[s];
          if (0 > B(Fe, G))
            s < ft && 0 > B(T, Fe) ? (_[mt] = T, _[s] = G, mt = s) : (_[mt] = Fe, _[le] = G, mt = le);
          else if (s < ft && 0 > B(T, G))
            _[mt] = T, _[s] = G, mt = s;
          else break t;
        }
      }
      return Y;
    }
    function B(_, Y) {
      var G = _.sortIndex - Y.sortIndex;
      return G !== 0 ? G : _.id - Y.id;
    }
    if (x.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      x.unstable_now = function() {
        return Z.now();
      };
    } else {
      var gt = Date, k = gt.now();
      x.unstable_now = function() {
        return gt.now() - k;
      };
    }
    var H = [], J = [], N = 1, b = null, C = 3, V = !1, Tt = !1, Wt = !1, yt = !1, xl = typeof setTimeout == "function" ? setTimeout : null, il = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
    function Bl(_) {
      for (var Y = O(J); Y !== null; ) {
        if (Y.callback === null) m(J);
        else if (Y.startTime <= _)
          m(J), Y.sortIndex = Y.expirationTime, w(H, Y);
        else break;
        Y = O(J);
      }
    }
    function Yl(_) {
      if (Wt = !1, Bl(_), !Tt)
        if (O(H) !== null)
          Tt = !0, ul || (ul = !0, cl());
        else {
          var Y = O(J);
          Y !== null && jt(Yl, Y.startTime - _);
        }
    }
    var ul = !1, F = -1, it = 5, Gl = -1;
    function bl() {
      return yt ? !0 : !(x.unstable_now() - Gl < it);
    }
    function Sl() {
      if (yt = !1, ul) {
        var _ = x.unstable_now();
        Gl = _;
        var Y = !0;
        try {
          t: {
            Tt = !1, Wt && (Wt = !1, il(F), F = -1), V = !0;
            var G = C;
            try {
              l: {
                for (Bl(_), b = O(H); b !== null && !(b.expirationTime > _ && bl()); ) {
                  var mt = b.callback;
                  if (typeof mt == "function") {
                    b.callback = null, C = b.priorityLevel;
                    var ft = mt(
                      b.expirationTime <= _
                    );
                    if (_ = x.unstable_now(), typeof ft == "function") {
                      b.callback = ft, Bl(_), Y = !0;
                      break l;
                    }
                    b === O(H) && m(H), Bl(_);
                  } else m(H);
                  b = O(H);
                }
                if (b !== null) Y = !0;
                else {
                  var Cl = O(J);
                  Cl !== null && jt(
                    Yl,
                    Cl.startTime - _
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              b = null, C = G, V = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? cl() : ul = !1;
        }
      }
    }
    var cl;
    if (typeof ke == "function")
      cl = function() {
        ke(Sl);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), $e = pe.port2;
      pe.port1.onmessage = Sl, cl = function() {
        $e.postMessage(null);
      };
    } else
      cl = function() {
        xl(Sl, 0);
      };
    function jt(_, Y) {
      F = xl(function() {
        _(x.unstable_now());
      }, Y);
    }
    x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, x.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : it = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, x.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, x.unstable_next = function(_) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = C;
      }
      var G = C;
      C = Y;
      try {
        return _();
      } finally {
        C = G;
      }
    }, x.unstable_requestPaint = function() {
      yt = !0;
    }, x.unstable_runWithPriority = function(_, Y) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var G = C;
      C = _;
      try {
        return Y();
      } finally {
        C = G;
      }
    }, x.unstable_scheduleCallback = function(_, Y, G) {
      var mt = x.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? mt + G : mt) : G = mt, _) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = G + ft, _ = {
        id: N++,
        callback: Y,
        priorityLevel: _,
        startTime: G,
        expirationTime: ft,
        sortIndex: -1
      }, G > mt ? (_.sortIndex = G, w(J, _), O(H) === null && _ === O(J) && (Wt ? (il(F), F = -1) : Wt = !0, jt(Yl, G - mt))) : (_.sortIndex = ft, w(H, _), Tt || V || (Tt = !0, ul || (ul = !0, cl()))), _;
    }, x.unstable_shouldYield = bl, x.unstable_wrapCallback = function(_) {
      var Y = C;
      return function() {
        var G = C;
        C = Y;
        try {
          return _.apply(this, arguments);
        } finally {
          C = G;
        }
      };
    };
  })(Ao)), Ao;
}
var og;
function Nv() {
  return og || (og = 1, _o.exports = Ev()), _o.exports;
}
var Oo = { exports: {} }, Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function _v() {
  if (rg) return Zt;
  rg = 1;
  var x = Co();
  function w(N) {
    var b = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        b += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + N + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O() {
  }
  var m = {
    d: {
      f: O,
      r: function() {
        throw Error(w(522));
      },
      D: O,
      C: O,
      L: O,
      m: O,
      X: O,
      S: O,
      M: O
    },
    p: 0,
    findDOMNode: null
  }, B = Symbol.for("react.portal"), Z = Symbol.for("react.recoverable"), gt = Symbol.for("react.optimistic_key");
  function k(N, b, C) {
    var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: V == null ? null : V === gt ? gt : "" + V,
      children: N,
      containerInfo: b,
      implementation: C
    };
  }
  var H = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(N, b) {
    if (N === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Zt.browser = function(N) {
    return { $$typeof: Z, _reason: N };
  }, Zt.createPortal = function(N, b) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(w(299));
    return k(N, b, null, C);
  }, Zt.flushSync = function(N) {
    var b = H.T, C = m.p;
    try {
      if (H.T = null, m.p = 2, N) return N();
    } finally {
      H.T = b, m.p = C, m.d.f();
    }
  }, Zt.preconnect = function(N, b) {
    typeof N == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, m.d.C(N, b));
  }, Zt.prefetchDNS = function(N) {
    typeof N == "string" && m.d.D(N);
  }, Zt.preinit = function(N, b) {
    if (typeof N == "string" && b && typeof b.as == "string") {
      var C = b.as, V = J(C, b.crossOrigin), Tt = typeof b.integrity == "string" ? b.integrity : void 0, Wt = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      C === "style" ? m.d.S(
        N,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: V,
          integrity: Tt,
          fetchPriority: Wt
        }
      ) : C === "script" && m.d.X(N, {
        crossOrigin: V,
        integrity: Tt,
        fetchPriority: Wt,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Zt.preinitModule = function(N, b) {
    if (typeof N == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var C = J(
            b.as,
            b.crossOrigin
          );
          m.d.M(N, {
            crossOrigin: C,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
          });
        }
      } else b == null && m.d.M(N);
  }, Zt.preload = function(N, b) {
    if (typeof N == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var C = b.as, V = J(C, b.crossOrigin);
      m.d.L(N, C, {
        crossOrigin: V,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Zt.preloadModule = function(N, b) {
    if (typeof N == "string")
      if (b) {
        var C = J(b.as, b.crossOrigin);
        m.d.m(N, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: C,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
        });
      } else m.d.m(N);
  }, Zt.requestFormReset = function(N) {
    m.d.r(N);
  }, Zt.unstable_batchedUpdates = function(N, b) {
    return N(b);
  }, Zt.useFormState = function(N, b, C) {
    return H.H.useFormState(N, b, C);
  }, Zt.useFormStatus = function() {
    return H.H.useHostTransitionStatus();
  }, Zt.version = "19.3.0", Zt;
}
var sg;
function Av() {
  if (sg) return Oo.exports;
  sg = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (w) {
        console.error(w);
      }
  }
  return x(), Oo.exports = _v(), Oo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dg;
function Ov() {
  if (dg) return fi;
  dg = 1;
  var x = Nv(), w = Co(), O = Av();
  function m(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Z(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function gt(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function k(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function H(t) {
    if (Z(t) !== t)
      throw Error(m(188));
  }
  function J(t) {
    var l = t.alternate;
    if (!l) {
      if (l = Z(t), l === null) throw Error(m(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === e) return H(n), t;
          if (i === a) return H(n), l;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (e.return !== a.return) e = n, a = i;
      else {
        for (var u = !1, c = n.child; c; ) {
          if (c === e) {
            u = !0, e = n, a = i;
            break;
          }
          if (c === a) {
            u = !0, a = n, e = i;
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === e) {
              u = !0, e = i, a = n;
              break;
            }
            if (c === a) {
              u = !0, a = i, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (e.alternate !== a) throw Error(m(190));
    }
    if (e.tag !== 3) throw Error(m(188));
    return e.stateNode.current === e ? t : l;
  }
  function N(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = N(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function b(t, l, e, a, n, i) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, a, n, i) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && b(
        t.child,
        l,
        e,
        a,
        n,
        i
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function C(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function V(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function Tt(t) {
    var l = [null, null], e = C(t);
    return e === null || Wt(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function Wt(t, l, e, a) {
    for (; e !== null; ) {
      if (e === l) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Wt(
        t,
        l,
        e.child,
        a
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function yt(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(m(559));
    }
  }
  var xl = null, il = null;
  function ke(t, l, e) {
    return t === e ? !0 : t === l ? (xl = t, !0) : !1;
  }
  function Bl(t, l, e) {
    return t === e ? (il = t, !1) : t === l ? (il !== null && (xl = t), !0) : !1;
  }
  function Yl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ul(t, l, e) {
    for (var a = 0, n = t; n; n = e(n)) a++;
    n = 0;
    for (var i = l; i; i = e(i)) n++;
    for (; 0 < a - n; ) t = e(t), a--;
    for (; 0 < n - a; ) l = e(l), n--;
    for (; a--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var F = Object.assign, it = Symbol.for("react.element"), Gl = Symbol.for("react.transitional.element"), bl = Symbol.for("react.portal"), Sl = Symbol.for("react.fragment"), cl = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), $e = Symbol.for("react.consumer"), jt = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), Cl = Symbol.for("react.activity"), le = Symbol.for("react.legacy_hidden"), Fe = Symbol.for("react.memo_cache_sentinel"), s = Symbol.for("react.view_transition"), T = Symbol.for("react.recoverable"), U = Symbol.iterator;
  function R(t) {
    return t === null || typeof t != "object" ? null : (t = U && t[U] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var et = Symbol.for("react.client.reference");
  function at(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === et ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Sl:
        return "Fragment";
      case pe:
        return "Profiler";
      case cl:
        return "StrictMode";
      case Y:
        return "Suspense";
      case G:
        return "SuspenseList";
      case Cl:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case bl:
          return "Portal";
        case jt:
          return t.displayName || "Context";
        case $e:
          return (t._context.displayName || "Context") + ".Consumer";
        case _:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case mt:
          return l = t.displayName || null, l !== null ? l : at(t.type) || "Memo";
        case ft:
          l = t._payload, t = t._init;
          try {
            return at(t(l));
          } catch {
          }
      }
    return null;
  }
  var ut = Array.isArray, j = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Xu = [], ba = -1;
  function Xl(t) {
    return { current: t };
  }
  function qt(t) {
    0 > ba || (t.current = Xu[ba], Xu[ba] = null, ba--);
  }
  function pt(t, l) {
    ba++, Xu[ba] = t.current, t.current = l;
  }
  var Ql = Xl(null), hn = Xl(null), xe = Xl(null), ri = Xl(null);
  function si(t, l) {
    switch (pt(xe, l), pt(hn, t), pt(Ql, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? hh(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = hh(l), t = gh(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    qt(Ql), pt(Ql, t);
  }
  function Sa() {
    qt(Ql), qt(hn), qt(xe);
  }
  function Qu(t) {
    var l = t.memoizedState;
    l !== null && (on._currentValue = l.memoizedState, pt(ri, t)), l = Ql.current;
    var e = gh(l, t.type);
    l !== e && (pt(hn, t), pt(Ql, e));
  }
  function di(t) {
    hn.current === t && (qt(Ql), qt(hn)), ri.current === t && (qt(ri), on._currentValue = ee);
  }
  var Vu, Uo;
  function be(t) {
    if (Vu === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Vu = l && l[1] || "", Uo = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vu + t + Uo;
  }
  var Zu = !1;
  function Lu(t, l) {
    if (!t || Zu) return "";
    Zu = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (E) {
                  var d = E;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (E) {
                  d = E;
                }
                z = !1;
                try {
                  var y = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), z = !0, new t();
                } finally {
                  z && (y !== void 0 ? Object.defineProperty(t.prototype, "props", y) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                d = E;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (E) {
            if (E && d && typeof E.stack == "string")
              return [E.stack, d.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), u = i[0], c = i[1];
      if (u && c) {
        var f = u.split(`
`), g = c.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < g.length && !g[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === f.length || n === g.length)
          for (a = f.length - 1, n = g.length - 1; 1 <= a && 0 <= n && f[a] !== g[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || f[a] !== g[n]) {
                  var p = `
` + f[a].replace(" at new ", " at ");
                  return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Zu = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? be(e) : "";
  }
  function wg(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return be(t.type);
      case 16:
        return be("Lazy");
      case 13:
        return t.child !== l && l !== null ? be("Suspense Fallback") : be("Suspense");
      case 19:
        return be("SuspenseList");
      case 0:
      case 15:
        return Lu(t.type, !1);
      case 11:
        return Lu(t.type.render, !1);
      case 1:
        return Lu(t.type, !0);
      case 31:
        return be("Activity");
      case 30:
        return be("ViewTransition");
      default:
        return "";
    }
  }
  function Ro(t) {
    try {
      var l = "", e = null;
      do
        l += wg(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ku = Object.prototype.hasOwnProperty, Ju = x.unstable_scheduleCallback, ku = x.unstable_cancelCallback, Eg = x.unstable_shouldYield, Ng = x.unstable_requestPaint, fl = x.unstable_now, _g = x.unstable_getCurrentPriorityLevel, Ho = x.unstable_ImmediatePriority, qo = x.unstable_UserBlockingPriority, hi = x.unstable_NormalPriority, Ag = x.unstable_LowPriority, Bo = x.unstable_IdlePriority, Og = x.log, Mg = x.unstable_setDisableYieldValue, gn = null, ol = null;
  function Se(t) {
    if (typeof Og == "function" && Mg(t), ol && typeof ol.setStrictMode == "function")
      try {
        ol.setStrictMode(gn, t);
      } catch {
      }
  }
  var rl = Math.clz32 ? Math.clz32 : Dg, Cg = Math.log, jg = Math.LN2;
  function Dg(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Cg(t) / jg | 0) | 0;
  }
  var gi = 256, mi = 262144, vi = 4194304;
  function We(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function yi(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, u = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~i, a !== 0 ? n = We(a) : (u &= c, u !== 0 ? n = We(u) : e || (e = c & ~t, e !== 0 && (n = We(e))))) : (c = a & ~i, c !== 0 ? n = We(c) : u !== 0 ? n = We(u) : e || (e = a & ~t, e !== 0 && (n = We(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & i) === 0 && (i = n & -n, e = l & -l, i >= e || i === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function mn(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Yo(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var a = 31 - rl(e), n = 1 << a;
        l |= t[a], e &= ~n;
      }
    return l;
  }
  function Ug(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Go() {
    var t = vi;
    return vi <<= 1, (vi & 62914560) === 0 && (vi = 4194304), t;
  }
  function $u(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function vn(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Rg(t, l, e, a, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, f = t.expirationTimes, g = t.hiddenUpdates;
    for (e = u & ~e; 0 < e; ) {
      var p = 31 - rl(e), z = 1 << p;
      c[p] = 0, f[p] = -1;
      var d = g[p];
      if (d !== null)
        for (g[p] = null, p = 0; p < d.length; p++) {
          var y = d[p];
          y !== null && (y.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && Xo(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~l));
  }
  function Xo(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - rl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Qo(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - rl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function Vo(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : Fu(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function Fu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Wu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zo() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Wh(t.type));
  }
  function Lo(t, l) {
    var e = X.p;
    try {
      return X.p = t, l();
    } finally {
      X.p = e;
    }
  }
  var ae = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + ae, It = "__reactProps$" + ae, za = "__reactContainer$" + ae, Ko = "__reactEvents$" + ae, Hg = "__reactListeners$" + ae, qg = "__reactHandles$" + ae, Jo = "__reactResources$" + ae, yn = "__reactMarker$" + ae, pi = "__reactLoad$" + ae;
  function xi(t) {
    delete t[Bt], delete t[It], delete t[Hg], delete t[qg];
  }
  function Ie(t) {
    var l;
    if (l = t[Bt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[za] || e[Bt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Ch(t); t !== null; ) {
            if (e = t[Bt]) return e;
            t = Ch(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Ta(t) {
    if (t = t[Bt] || t[za]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function pn(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(m(33));
  }
  function wa(t) {
    var l = t[Jo];
    return l || (l = t[Jo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Dt(t) {
    t[yn] = !0;
  }
  function ko(t) {
    t[pi] = void 0;
  }
  var $o = /* @__PURE__ */ new Set(), Fo = {};
  function Pe(t, l) {
    Ea(t, l), Ea(t + "Capture", l);
  }
  function Ea(t, l) {
    for (Fo[t] = l, t = 0; t < l.length; t++)
      $o.add(l[t]);
  }
  var Bg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wo = {}, Io = {};
  function Yg(t) {
    return Ku.call(Io, t) ? !0 : Ku.call(Wo, t) ? !1 : Bg.test(t) ? Io[t] = !0 : (Wo[t] = !0, !1);
  }
  var nt = !1;
  function Po() {
    var t = nt;
    return nt = !1, t;
  }
  function bi(t, l, e) {
    if (Yg(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function Si(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, e);
    }
  }
  function ne(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, a);
    }
  }
  function sl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function tr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Gg(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(u) {
          e = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(u) {
          e = "" + u;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Iu(t) {
    if (!t._valueTracker) {
      var l = tr(t) ? "checked" : "value";
      t._valueTracker = Gg(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function lr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = tr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Xg = /[\n"\\]/g;
  function zl(t) {
    return t.replace(
      Xg,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pu(t, l, e, a, n, i, u, c) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), l != null ? u === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + sl(l)) : t.value !== "" + sl(l) && (t.value = "" + sl(l)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), l != null ? u === "number" && t.value == l ? tc(t, sl(t.value)) : tc(t, sl(l)) : e != null ? tc(t, sl(e)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + sl(c) : t.removeAttribute("name");
  }
  function er(t, l, e, a, n, i, u, c) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), l != null || e != null) {
      if (!(i !== "submit" && i !== "reset" || l != null)) {
        Iu(t);
        return;
      }
      e = e != null ? "" + sl(e) : "", l = l != null ? "" + sl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), Iu(t);
  }
  function tc(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Na(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + sl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function ar(t, l, e) {
    if (l != null && (l = "" + sl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + sl(e) : "";
  }
  function nr(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(m(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = sl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), Iu(t);
  }
  function _a(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Qg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ir(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Qg.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function ur(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(m(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", nt = !0);
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && (ir(t, n, a), nt = !0);
    } else
      for (var i in l)
        l.hasOwnProperty(i) && ir(t, i, l[i]);
  }
  function lc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Zg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zi(t) {
    return Zg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Vl() {
  }
  var ec = null;
  function ac(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Aa = null, Oa = null;
  function cr(t) {
    var l = Ta(t);
    if (l && (t = l.stateNode)) {
      var e = t[It] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Pu(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + zl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[It] || null;
                if (!n) throw Error(m(90));
                Pu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && lr(a);
          }
          break t;
        case "textarea":
          ar(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Na(t, !!e.multiple, l, !1);
      }
    }
  }
  var nc = !1;
  function fr(t, l, e) {
    if (nc) return t(l, e);
    nc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (nc = !1, (Aa !== null || Oa !== null) && (zu(), Aa && (l = Aa, t = Oa, Oa = Aa = null, cr(l), t)))
        for (l = 0; l < t.length; l++) cr(t[l]);
    }
  }
  function xn(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[It] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        m(231, l, typeof e)
      );
    return e;
  }
  var ie = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if (ie)
    try {
      var bn = {};
      Object.defineProperty(bn, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn);
    } catch {
      ic = !1;
    }
  var ze = null, uc = null, Ti = null;
  function or() {
    if (Ti) return Ti;
    var t, l = uc, e = l.length, a, n = "value" in ze ? ze.value : ze.textContent, i = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var u = e - t;
    for (a = 1; a <= u && l[e - a] === n[i - a]; a++) ;
    return Ti = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function wi(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ei() {
    return !0;
  }
  function rr() {
    return !1;
  }
  function Kt(t) {
    function l(e, a, n, i, u) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(i) : i[c]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ei : rr, this.isPropagationStopped = rr, this;
    }
    return F(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ei);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ei);
      },
      persist: function() {
      },
      isPersistent: Ei
    }), l;
  }
  var Te = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ni = Kt(Te), Sn = F({}, Te, { view: 0, detail: 0 }), Lg = Kt(Sn), cc, fc, zn, _i = F({}, Sn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== zn && (zn && t.type === "mousemove" ? (cc = t.screenX - zn.screenX, fc = t.screenY - zn.screenY) : fc = cc = 0, zn = t), cc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : fc;
    }
  }), sr = Kt(_i), Kg = F({}, _i, { dataTransfer: 0 }), Jg = Kt(Kg), kg = F({}, Sn, { relatedTarget: 0 }), oc = Kt(kg), $g = F({}, Te, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fg = Kt($g), Wg = F({}, Te, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Ig = Kt(Wg), Pg = F({}, Te, { data: 0 }), dr = Kt(Pg), tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, lm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, em = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function am(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = em[t]) ? !!l[t] : !1;
  }
  function rc() {
    return am;
  }
  var nm = F({}, Sn, {
    key: function(t) {
      if (t.key) {
        var l = tm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = wi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? lm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(t) {
      return t.type === "keypress" ? wi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? wi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), im = Kt(nm), um = F({}, _i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), hr = Kt(um), cm = F({}, Te, { submitter: 0 }), fm = Kt(cm), om = F({}, Sn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), rm = Kt(om), sm = F({}, Te, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dm = Kt(sm), hm = F({}, _i, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gm = Kt(hm), mm = F({}, Te, {
    newState: 0,
    oldState: 0,
    source: 0
  }), vm = Kt(mm), ym = [9, 13, 27, 32], sc = ie && "CompositionEvent" in window, Tn = null;
  ie && "documentMode" in document && (Tn = document.documentMode);
  var pm = ie && "TextEvent" in window && !Tn, gr = ie && (!sc || Tn && 8 < Tn && 11 >= Tn), mr = " ", vr = !1;
  function yr(t, l) {
    switch (t) {
      case "keyup":
        return ym.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ma = !1;
  function xm(t, l) {
    switch (t) {
      case "compositionend":
        return pr(l);
      case "keypress":
        return l.which !== 32 ? null : (vr = !0, mr);
      case "textInput":
        return t = l.data, t === mr && vr ? null : t;
      default:
        return null;
    }
  }
  function bm(t, l) {
    if (Ma)
      return t === "compositionend" || !sc && yr(t, l) ? (t = or(), Ti = uc = ze = null, Ma = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return gr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Sm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Sm[t.type] : l === "textarea";
  }
  function br(t, l, e, a) {
    Aa ? Oa ? Oa.push(a) : Oa = [a] : Aa = a, l = Au(l, "onChange"), 0 < l.length && (e = new Ni(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var wn = null, En = null;
  function zm(t) {
    ch(t, 0);
  }
  function Ai(t) {
    var l = pn(t);
    if (lr(l)) return t;
  }
  function Sr(t, l) {
    if (t === "change") return l;
  }
  var zr = !1;
  if (ie) {
    var dc;
    if (ie) {
      var hc = "oninput" in document;
      if (!hc) {
        var Tr = document.createElement("div");
        Tr.setAttribute("oninput", "return;"), hc = typeof Tr.oninput == "function";
      }
      dc = hc;
    } else dc = !1;
    zr = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function wr() {
    wn && (wn.detachEvent("onpropertychange", Er), En = wn = null);
  }
  function Er(t) {
    if (t.propertyName === "value" && Ai(En)) {
      var l = [];
      br(
        l,
        En,
        t,
        ac(t)
      ), fr(zm, l);
    }
  }
  function Tm(t, l, e) {
    t === "focusin" ? (wr(), wn = l, En = e, wn.attachEvent("onpropertychange", Er)) : t === "focusout" && wr();
  }
  function wm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ai(En);
  }
  function Em(t, l) {
    if (t === "click") return Ai(l);
  }
  function Nm(t, l) {
    if (t === "input" || t === "change")
      return Ai(l);
  }
  function _m(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var dl = typeof Object.is == "function" ? Object.is : _m;
  function Nn(t, l) {
    if (dl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Ku.call(l, n) || !dl(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function gc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Nr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function _r(t, l) {
    var e = Nr(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Nr(e);
    }
  }
  function Ar(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ar(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Or(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = gc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = gc(t.document);
    }
    return l;
  }
  function mc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Am = ie && "documentMode" in document && 11 >= document.documentMode, Ca = null, vc = null, _n = null, yc = !1;
  function Mr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    yc || Ca == null || Ca !== gc(a) || (a = Ca, "selectionStart" in a && mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), _n && Nn(_n, a) || (_n = a, a = Au(vc, "onSelect"), 0 < a.length && (l = new Ni(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = Ca)));
  }
  function ta(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ja = {
    animationend: ta("Animation", "AnimationEnd"),
    animationiteration: ta("Animation", "AnimationIteration"),
    animationstart: ta("Animation", "AnimationStart"),
    transitionrun: ta("Transition", "TransitionRun"),
    transitionstart: ta("Transition", "TransitionStart"),
    transitioncancel: ta("Transition", "TransitionCancel"),
    transitionend: ta("Transition", "TransitionEnd")
  }, pc = {}, Cr = {};
  ie && (Cr = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function la(t) {
    if (pc[t]) return pc[t];
    if (!ja[t]) return t;
    var l = ja[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Cr)
        return pc[t] = l[e];
    return t;
  }
  var jr = la("animationend"), Dr = la("animationiteration"), Ur = la("animationstart"), Om = la("transitionrun"), Mm = la("transitionstart"), Cm = la("transitioncancel"), Rr = la("transitionend"), Hr = /* @__PURE__ */ new Map(), xc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xc.push("scrollEnd");
  function jl(t, l) {
    Hr.set(t, l), Pe(l, [t]);
  }
  var jm = 0;
  function ue(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = Hl.identifierPrefix;
    var e = jm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function qr(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = Ia;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = t[e[a]];
        if (n != null) {
          if (n === "none") return "none";
          l = l == null ? n : l + (" " + n);
        }
      }
    return l ?? t.default;
  }
  function ce(t, l) {
    return t = qr(t), l = qr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Oi = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Tl = [], Da = 0, bc = 0;
  function Mi() {
    for (var t = Da, l = bc = Da = 0; l < t; ) {
      var e = Tl[l];
      Tl[l++] = null;
      var a = Tl[l];
      Tl[l++] = null;
      var n = Tl[l];
      Tl[l++] = null;
      var i = Tl[l];
      if (Tl[l++] = null, a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), a.pending = n;
      }
      i !== 0 && Br(e, n, i);
    }
  }
  function Ci(t, l, e, a) {
    Tl[Da++] = t, Tl[Da++] = l, Tl[Da++] = e, Tl[Da++] = a, bc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Sc(t, l, e, a) {
    return Ci(t, l, e, a), ji(t);
  }
  function ea(t, l) {
    return Ci(t, null, null, l), ji(t);
  }
  function Br(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= e, a = i.alternate, a !== null && (a.childLanes |= e), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && l !== null && (n = 31 - rl(e), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), i) : null;
  }
  function ji(t) {
    if (50 < $n)
      throw $n = 0, Su = null, Error(m(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ua = {};
  function Dm(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(t, l, e, a) {
    return new Dm(t, l, e, a);
  }
  function zc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function fe(t, l) {
    var e = t.alternate;
    return e === null ? (e = Pt(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Yr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Di(t, l, e, a, n, i) {
    var u = 0;
    if (a = t, typeof a == "function") zc(a) && (u = 1);
    else if (typeof a == "string")
      u = cv(
        t,
        e,
        Ql.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case Cl:
          return t = Pt(31, e, l, n), t.elementType = Cl, t.lanes = i, t;
        case Sl:
          return aa(e.children, n, i, l);
        case cl:
          u = 8, n |= 24;
          break;
        case pe:
          return t = Pt(12, e, l, n | 2), t.elementType = pe, t.lanes = i, t;
        case Y:
          return t = Pt(13, e, l, n), t.elementType = Y, t.lanes = i, t;
        case G:
          return t = Pt(19, e, l, n), t.elementType = G, t.lanes = i, t;
        case le:
        case s:
          return t = n | 32, t = Pt(30, e, l, t), t.elementType = s, t.lanes = i, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case jt:
                u = 10;
                break t;
              case $e:
                u = 9;
                break t;
              case _:
                u = 11;
                break t;
              case mt:
                u = 14;
                break t;
              case ft:
                u = 16, a = null;
                break t;
            }
          u = 29, e = Error(
            m(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = Pt(u, e, l, n), l.elementType = t, l.type = a, l.lanes = i, l;
  }
  function aa(t, l, e, a) {
    return t = Pt(7, t, a, l), t.lanes = e, t;
  }
  function Tc(t, l, e) {
    return t = Pt(6, t, null, l), t.lanes = e, t;
  }
  function Gr(t) {
    var l = Pt(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function wc(t, l, e) {
    return l = Pt(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Xr = /* @__PURE__ */ new WeakMap();
  function wl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Xr.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Ro(l)
      }, Xr.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Ro(l)
    };
  }
  var Ra = [], Ha = 0, Ui = null, An = 0, El = [], Nl = 0, we = null, Zl = 1, Ll = "";
  function oe(t, l) {
    Ra[Ha++] = An, Ra[Ha++] = Ui, Ui = t, An = l;
  }
  function Qr(t, l, e) {
    El[Nl++] = Zl, El[Nl++] = Ll, El[Nl++] = we, we = t;
    var a = Zl;
    t = Ll;
    var n = 32 - rl(a) - 1;
    a &= ~(1 << n), e += 1;
    var i = 32 - rl(l) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, Zl = 1 << 32 - rl(l) + n | e << n | a, Ll = i + t;
    } else
      Zl = 1 << i | e << n | a, Ll = t;
  }
  function Ri(t) {
    t.return !== null && (oe(t, 1), Qr(t, 1, 0));
  }
  function Ec(t) {
    for (; t === Ui; )
      Ui = Ra[--Ha], Ra[Ha] = null, An = Ra[--Ha], Ra[Ha] = null;
    for (; t === we; )
      we = El[--Nl], El[Nl] = null, Ll = El[--Nl], El[Nl] = null, Zl = El[--Nl], El[Nl] = null;
  }
  function Vr(t, l) {
    El[Nl++] = Zl, El[Nl++] = Ll, El[Nl++] = we, Zl = l.id, Ll = l.overflow, we = t;
  }
  var Ut = null, xt = null, $ = !1, Ee = null, _l = !1, Nc = Error(m(519));
  function Ne(t) {
    var l = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw On(wl(l, t)), Nc;
  }
  function Zr(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Bt] = t, l[It] = a, e) {
      case "dialog":
        I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Wn.length; e++)
          I(Wn[e], l);
        break;
      case "source":
        I("error", l);
        break;
      case "img":
      case "image":
      case "link":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "input":
        I("invalid", l), er(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        I("invalid", l);
        break;
      case "textarea":
        I("invalid", l), nr(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || sh(l.textContent, e) ? (a.popover != null && (I("beforetoggle", l), I("toggle", l)), a.onScroll != null && I("scroll", l), a.onScrollEnd != null && I("scrollend", l), a.onClick != null && (l.onclick = Vl), l = !0) : l = !1, l || Ne(t, !0);
  }
  function Hi(t) {
    for (Ut = t.return; Ut; )
      switch (Ut.tag) {
        case 5:
        case 31:
        case 13:
          _l = !1;
          return;
        case 27:
        case 3:
          _l = !0;
          return;
        default:
          Ut = Ut.return;
      }
  }
  function qa(t) {
    if (t !== Ut) return !1;
    if (!$) return Hi(t), $ = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ao(t.type, t.memoizedProps)), e = !e), e && xt && Ne(t), Hi(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(317));
      xt = Mh(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(317));
      xt = Mh(t);
    } else
      l === 27 ? (l = xt, Qe(t.type) ? (t = ho, ho = null, xt = t) : xt = l) : xt = Ut ? Ol(t.stateNode.nextSibling) : null;
    return !0;
  }
  function na() {
    xt = Ut = null, $ = !1;
  }
  function _c() {
    var t = Ee;
    return t !== null && (el === null ? el = t : el.push.apply(
      el,
      t
    ), Ee = null), t;
  }
  function On(t) {
    Ee === null ? Ee = [t] : Ee.push(t);
  }
  var Ac = Xl(null), ia = null, re = null;
  function _e(t, l, e) {
    pt(Ac, l._currentValue), l._currentValue = e;
  }
  function se(t) {
    t._currentValue = Ac.current, qt(Ac);
  }
  function qi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Oc(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var c = i;
          i = n;
          for (var f = 0; f < l.length; f++)
            if (c.context === l[f]) {
              i.lanes |= e, c = i.alternate, c !== null && (c.lanes |= e), qi(
                i.return,
                e,
                t
              ), a || (u = null);
              break t;
            }
          i = c.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(m(341));
        u.lanes |= e, i = u.alternate, i !== null && (i.lanes |= e), qi(u, e, t), u = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= e, u = n.alternate, u !== null && (u.lanes |= e), qi(
          n.return,
          e,
          t
        ), u = n.child, u = u !== null ? u.sibling : null) : u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (n = u.sibling, n !== null) {
            n.return = u.return, u = n;
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function ua(t, l, e, a) {
    t = null;
    for (var n = l, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(m(387));
        if (u = u.memoizedProps, u !== null) {
          var c = n.type;
          dl(n.pendingProps.value, u.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === ri.current) {
        if (u = n.alternate, u === null) throw Error(m(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(on) : t = [on]);
      }
      n = n.return;
    }
    return t !== null && Oc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144, t !== null;
  }
  function Bi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!dl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ca(t) {
    ia = t, re = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Yt(t) {
    return Lr(ia, t);
  }
  function Yi(t, l) {
    return ia === null && ca(t), Lr(t, l);
  }
  function Lr(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, re === null) {
      if (t === null) throw Error(m(308));
      re = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else re = re.next = l;
    return e;
  }
  var Um = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Rm = x.unstable_scheduleCallback, Hm = x.unstable_NormalPriority, _t = {
    $$typeof: jt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mc() {
    return {
      controller: new Um(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mn(t) {
    t.refCount--, t.refCount === 0 && Rm(Hm, function() {
      t.controller.abort();
    });
  }
  function Kr(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var a = l[t];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var Cn = null;
  function qm(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var jn = null, Cc = 0, fa = 0, Ba = null;
  function Bm(t, l) {
    if (jn === null) {
      var e = jn = [];
      Cc = 0, fa = kf(), Ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Cc++, l.then(Jr, Jr), l;
  }
  function Jr() {
    if (--Cc === 0 && (Cn = null, jn !== null)) {
      Ba !== null && (Ba.status = "fulfilled");
      var t = jn;
      jn = null, fa = 0, Ba = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Ym(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var kr = j.S;
  j.S = function(t, l) {
    if (Gd = fl(), typeof l == "object" && l !== null && typeof l.then == "function" && Bm(t, l), Cn !== null)
      for (var e = en; e !== null; )
        Kr(e, Cn), e = e.next;
    if (e = t.types, e !== null) {
      for (var a = en; a !== null; )
        Kr(a, e), a = a.next;
      if (fa !== 0) {
        a = Cn, a === null && (a = Cn = []);
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    kr !== null && kr(t, l);
  };
  var oa = Xl(null);
  function jc() {
    var t = oa.current;
    return t !== null ? t : vt.pooledCache;
  }
  function Gi(t, l) {
    l === null ? pt(oa, oa.current) : pt(oa, l.pool);
  }
  function $r() {
    var t = jc();
    return t === null ? null : { parent: _t._currentValue, pool: t };
  }
  var Ya = Error(m(460)), Dc = Error(m(474)), Xi = Error(m(542)), Qi = { then: function() {
  } };
  function Fr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Wr(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Vl, Vl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Pr(t), t === void 0 && !("reason" in l) ? Error(m(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Vl, Vl);
        else {
          if (t = vt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(m(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Pr(t), t;
        }
        throw sa = l, Ya;
    }
  }
  function ra(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (sa = e, Ya) : e;
    }
  }
  var sa = null;
  function Ir() {
    if (sa === null) throw Error(m(459));
    var t = sa;
    return sa = null, t;
  }
  function Pr(t) {
    if (t === Ya || t === Xi)
      throw Error(m(483));
  }
  var Ga = null, Dn = 0;
  function Vi(t) {
    var l = Dn;
    return Dn += 1, Ga === null && (Ga = []), Wr(Ga, t, l);
  }
  function Ae(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Zi(t, l) {
    throw l.$$typeof === it ? Error(m(525)) : (t = Object.prototype.toString.call(l), Error(
      m(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function ts(t) {
    function l(h, o) {
      if (t) {
        var v = h.deletions;
        v === null ? (h.deletions = [o], h.flags |= 16) : v.push(o);
      }
    }
    function e(h, o) {
      if (!t) return null;
      for (; o !== null; )
        l(h, o), o = o.sibling;
      return null;
    }
    function a(h) {
      for (var o = /* @__PURE__ */ new Map(); h !== null; )
        h.key === null ? o.set(h.index, h) : o.set(h.key, h), h = h.sibling;
      return o;
    }
    function n(h, o) {
      return h = fe(h, o), h.index = 0, h.sibling = null, h;
    }
    function i(h, o, v) {
      return h.index = v, t ? (v = h.alternate, v !== null ? (v = v.index, v < o ? (h.flags |= 2, o) : v) : (h.flags |= 134217730, o)) : (h.flags |= 1048576, o);
    }
    function u(h) {
      return t && h.alternate === null && (h.flags |= 134217730), h;
    }
    function c(h, o, v, S) {
      return o === null || o.tag !== 6 ? (o = Tc(v, h.mode, S), o.return = h, o) : (o = n(o, v), o.return = h, o);
    }
    function f(h, o, v, S) {
      var A = v.type;
      return A === Sl ? (h = p(
        h,
        o,
        v.props.children,
        S,
        v.key
      ), Ae(h, v), h) : o !== null && (o.elementType === A || typeof A == "object" && A !== null && A.$$typeof === ft && ra(A) === o.type) ? (o = n(o, v.props), Ae(o, v), o.return = h, o) : (o = Di(
        v.type,
        v.key,
        v.props,
        null,
        h.mode,
        S
      ), Ae(o, v), o.return = h, o);
    }
    function g(h, o, v, S) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = wc(v, h.mode, S), o.return = h, o) : (o = n(o, v.children || []), o.return = h, o);
    }
    function p(h, o, v, S, A) {
      return o === null || o.tag !== 7 ? (o = aa(
        v,
        h.mode,
        S,
        A
      ), o.return = h, o) : (o = n(o, v), o.return = h, o);
    }
    function z(h, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Tc(
          "" + o,
          h.mode,
          v
        ), o.return = h, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gl:
            return v = Di(
              o.type,
              o.key,
              o.props,
              null,
              h.mode,
              v
            ), Ae(v, o), v.return = h, v;
          case bl:
            return o = wc(
              o,
              h.mode,
              v
            ), o.return = h, o;
          case ft:
            return o = ra(o), z(h, o, v);
        }
        if (ut(o) || R(o))
          return o = aa(
            o,
            h.mode,
            v,
            null
          ), o.return = h, o;
        if (typeof o.then == "function")
          return z(h, Vi(o), v);
        if (o.$$typeof === jt)
          return z(
            h,
            Yi(h, o),
            v
          );
        Zi(h, o);
      }
      return null;
    }
    function d(h, o, v, S) {
      var A = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return A !== null ? null : c(h, o, "" + v, S);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Gl:
            return v.key === A ? f(h, o, v, S) : null;
          case bl:
            return v.key === A ? g(h, o, v, S) : null;
          case ft:
            return v = ra(v), d(h, o, v, S);
        }
        if (ut(v) || R(v))
          return A !== null ? null : p(h, o, v, S, null);
        if (typeof v.then == "function")
          return d(
            h,
            o,
            Vi(v),
            S
          );
        if (v.$$typeof === jt)
          return d(
            h,
            o,
            Yi(h, v),
            S
          );
        Zi(h, v);
      }
      return null;
    }
    function y(h, o, v, S, A) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return h = h.get(v) || null, c(o, h, "" + S, A);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Gl:
            return h = h.get(
              S.key === null ? v : S.key
            ) || null, f(o, h, S, A);
          case bl:
            return h = h.get(
              S.key === null ? v : S.key
            ) || null, g(o, h, S, A);
          case ft:
            return S = ra(S), y(
              h,
              o,
              v,
              S,
              A
            );
        }
        if (ut(S) || R(S))
          return h = h.get(v) || null, p(o, h, S, A, null);
        if (typeof S.then == "function")
          return y(
            h,
            o,
            v,
            Vi(S),
            A
          );
        if (S.$$typeof === jt)
          return y(
            h,
            o,
            v,
            Yi(o, S),
            A
          );
        Zi(o, S);
      }
      return null;
    }
    function E(h, o, v, S) {
      for (var A = null, tt = null, D = o, q = o = 0, Mt = null; D !== null && q < v.length; q++) {
        D.index > q ? (Mt = D, D = null) : Mt = D.sibling;
        var lt = d(
          h,
          D,
          v[q],
          S
        );
        if (lt === null) {
          D === null && (D = Mt);
          break;
        }
        t && D && lt.alternate === null && l(h, D), o = i(lt, o, q), tt === null ? A = lt : tt.sibling = lt, tt = lt, D = Mt;
      }
      if (q === v.length)
        return e(h, D), $ && oe(h, q), A;
      if (D === null) {
        for (; q < v.length; q++)
          D = z(h, v[q], S), D !== null && (o = i(
            D,
            o,
            q
          ), tt === null ? A = D : tt.sibling = D, tt = D);
        return $ && oe(h, q), A;
      }
      for (D = a(D); q < v.length; q++)
        Mt = y(
          D,
          h,
          q,
          v[q],
          S
        ), Mt !== null && (t && (lt = Mt.alternate, lt !== null && D.delete(lt.key === null ? q : lt.key)), o = i(
          Mt,
          o,
          q
        ), tt === null ? A = Mt : tt.sibling = Mt, tt = Mt);
      return t && D.forEach(function(Je) {
        return l(h, Je);
      }), $ && oe(h, q), A;
    }
    function M(h, o, v, S) {
      if (v == null) throw Error(m(151));
      for (var A = null, tt = null, D = o, q = o = 0, Mt = null, lt = v.next(); D !== null && !lt.done; q++, lt = v.next()) {
        D.index > q ? (Mt = D, D = null) : Mt = D.sibling;
        var Je = d(h, D, lt.value, S);
        if (Je === null) {
          D === null && (D = Mt);
          break;
        }
        t && D && Je.alternate === null && l(h, D), o = i(Je, o, q), tt === null ? A = Je : tt.sibling = Je, tt = Je, D = Mt;
      }
      if (lt.done)
        return e(h, D), $ && oe(h, q), A;
      if (D === null) {
        for (; !lt.done; q++, lt = v.next())
          lt = z(h, lt.value, S), lt !== null && (o = i(lt, o, q), tt === null ? A = lt : tt.sibling = lt, tt = lt);
        return $ && oe(h, q), A;
      }
      for (D = a(D); !lt.done; q++, lt = v.next())
        lt = y(D, h, q, lt.value, S), lt !== null && (t && (Mt = lt.alternate, Mt !== null && D.delete(
          Mt.key === null ? q : Mt.key
        )), o = i(lt, o, q), tt === null ? A = lt : tt.sibling = lt, tt = lt);
      return t && D.forEach(function(xv) {
        return l(h, xv);
      }), $ && oe(h, q), A;
    }
    function K(h, o, v, S) {
      if (typeof v == "object" && v !== null && v.type === Sl && v.key === null && v.props.ref === void 0 && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Gl:
            t: {
              for (var A = v.key; o !== null; ) {
                if (o.key === A) {
                  if (A = v.type, A === Sl) {
                    if (o.tag === 7) {
                      e(
                        h,
                        o.sibling
                      ), S = n(
                        o,
                        v.props.children
                      ), Ae(S, v), S.return = h, h = S;
                      break t;
                    }
                  } else if (o.elementType === A || typeof A == "object" && A !== null && A.$$typeof === ft && ra(A) === o.type) {
                    e(
                      h,
                      o.sibling
                    ), S = n(o, v.props), Ae(S, v), S.return = h, h = S;
                    break t;
                  }
                  e(h, o);
                  break;
                } else l(h, o);
                o = o.sibling;
              }
              v.type === Sl ? (S = aa(
                v.props.children,
                h.mode,
                S,
                v.key
              ), Ae(S, v), S.return = h, h = S) : (S = Di(
                v.type,
                v.key,
                v.props,
                null,
                h.mode,
                S
              ), Ae(S, v), S.return = h, h = S);
            }
            return u(h);
          case bl:
            t: {
              for (A = v.key; o !== null; ) {
                if (o.key === A)
                  if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    e(
                      h,
                      o.sibling
                    ), S = n(o, v.children || []), S.return = h, h = S;
                    break t;
                  } else {
                    e(h, o);
                    break;
                  }
                else l(h, o);
                o = o.sibling;
              }
              S = wc(v, h.mode, S), S.return = h, h = S;
            }
            return u(h);
          case ft:
            return v = ra(v), K(
              h,
              o,
              v,
              S
            );
        }
        if (ut(v))
          return E(
            h,
            o,
            v,
            S
          );
        if (R(v)) {
          if (A = R(v), typeof A != "function") throw Error(m(150));
          return v = A.call(v), M(
            h,
            o,
            v,
            S
          );
        }
        if (typeof v.then == "function")
          return K(
            h,
            o,
            Vi(v),
            S
          );
        if (v.$$typeof === jt)
          return K(
            h,
            o,
            Yi(h, v),
            S
          );
        Zi(h, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (e(h, o.sibling), S = n(o, v), S.return = h, h = S) : (e(h, o), S = Tc(v, h.mode, S), S.return = h, h = S), u(h)) : e(h, o);
    }
    return function(h, o, v, S) {
      try {
        Dn = 0;
        var A = K(
          h,
          o,
          v,
          S
        );
        return Ga = null, A;
      } catch (D) {
        if (D === Ya || D === Xi) throw D;
        var tt = Pt(29, D, null, h.mode);
        return tt.lanes = S, tt.return = h, tt;
      } finally {
      }
    };
  }
  var da = ts(!0), ls = ts(!1), Oe = !1;
  function Uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Me(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ce(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ct & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = ji(t), Br(t, null, e), l;
    }
    return Ci(t, a, l, e), ji(t);
  }
  function Un(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Qo(t, e);
    }
  }
  function Hc(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, i = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var u = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = u : i = i.next = u, e = e.next;
        } while (e !== null);
        i === null ? n = i = l : i = i.next = l;
      } else n = i = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var qc = !1;
  function Rn() {
    if (qc) {
      var t = Ba;
      if (t !== null) throw t;
    }
  }
  function Hn(t, l, e, a) {
    qc = !1;
    var n = t.updateQueue;
    Oe = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var f = c, g = f.next;
      f.next = null, u === null ? i = g : u.next = g, u = f;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== u && (c === null ? p.firstBaseUpdate = g : c.next = g, p.lastBaseUpdate = f));
    }
    if (i !== null) {
      var z = n.baseState;
      u = 0, p = g = f = null, c = i;
      do {
        var d = c.lane & -536870913, y = d !== c.lane;
        if (y ? (P & d) === d : (a & d) === d) {
          d !== 0 && d === fa && (qc = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var E = t, M = c;
            d = l;
            var K = e;
            switch (M.tag) {
              case 1:
                if (E = M.payload, typeof E == "function") {
                  z = E.call(K, z, d);
                  break t;
                }
                z = E;
                break t;
              case 3:
                E.flags = E.flags & -65537 | 128;
              case 0:
                if (E = M.payload, d = typeof E == "function" ? E.call(K, z, d) : E, d == null) break t;
                z = F({}, z, d);
                break t;
              case 2:
                Oe = !0;
            }
          }
          d = c.callback, d !== null && (t.flags |= 64, y && (t.flags |= 8192), y = n.callbacks, y === null ? n.callbacks = [d] : y.push(d));
        } else
          y = {
            lane: d,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, p === null ? (g = p = y, f = z) : p = p.next = y, u |= d;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          y = c, c = y.next, y.next = null, n.lastBaseUpdate = y, n.shared.pending = null;
        }
      } while (!0);
      p === null && (f = z), n.baseState = f, n.firstBaseUpdate = g, n.lastBaseUpdate = p, i === null && (n.shared.lanes = 0), Be |= u, t.lanes = u, t.memoizedState = z;
    }
  }
  function es(t, l) {
    if (typeof t != "function")
      throw Error(m(191, t));
    t.call(l);
  }
  function as(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        es(e[t], l);
  }
  var je = Xl(null), Li = Xl(0);
  function ns(t, l) {
    t = ve, pt(Li, t), pt(je, l), ve = t | l.baseLanes;
  }
  function Bc() {
    pt(Li, ve), pt(je, je.current);
  }
  function Yc() {
    ve = Li.current, qt(je), qt(Li);
  }
  var Gt = Xl(null), Lt = null;
  function De(t) {
    var l = t.alternate;
    pt(Xt, Xt.current & 1), pt(Gt, t), Lt === null && (l === null || je.current !== null || l.memoizedState !== null) && (Lt = t);
  }
  function Gc(t) {
    pt(Xt, Xt.current), pt(Gt, t), Lt === null && (Lt = t);
  }
  function is(t) {
    t.tag === 22 ? (pt(Xt, Xt.current), pt(Gt, t), Lt === null && (Lt = t)) : Ue();
  }
  function Ue() {
    pt(Xt, Xt.current), pt(Gt, Gt.current);
  }
  function hl(t) {
    qt(Gt), Lt === t && (Lt = null), qt(Xt);
  }
  var Xt = Xl(0);
  function qn(t, l) {
    pt(Gt, Gt.current), pt(Xt, l);
  }
  function Xc(t) {
    qt(Xt), qt(Gt), Lt === t && (Lt = null);
  }
  function Ki(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || ro(e) || so(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== "independent") {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var de = 0, L = null, ht = null, At = null, Ji = !1, Xa = !1, ha = !1, ki = 0, Bn = 0, Qa = null, Gm = 0;
  function wt() {
    throw Error(m(321));
  }
  function Qc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!dl(t[e], l[e])) return !1;
    return !0;
  }
  function Vc(t, l, e, a, n, i) {
    return de = i, L = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = t === null || t.memoizedState === null ? Qs : Vs, ha = !1, i = e(a, n), ha = !1, Xa && (i = cs(
      l,
      e,
      a,
      n
    )), us(t), i;
  }
  function us(t) {
    j.H = lu;
    var l = ht !== null && ht.next !== null;
    if (de = 0, At = ht = L = null, Ji = !1, Bn = 0, Qa = null, l) throw Error(m(300));
    t === null || Ot || (t = t.dependencies, t !== null && Bi(t) && (Ot = !0));
  }
  function cs(t, l, e, a) {
    L = t;
    var n = 0;
    do {
      if (Xa && (Qa = null), Bn = 0, Xa = !1, 25 <= n) throw Error(m(301));
      if (n += 1, At = ht = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = km, i = l(e, a);
    } while (Xa);
    return i;
  }
  function Xm() {
    var t = j.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Yn(l) : l, t = t.useState()[0], (ht !== null ? ht.memoizedState : null) !== t && (L.flags |= 1024), l;
  }
  function Zc() {
    var t = ki !== 0;
    return ki = 0, t;
  }
  function Lc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function Kc(t) {
    if (Ji) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Ji = !1;
    }
    de = 0, At = ht = L = null, Xa = !1, Bn = ki = 0, Qa = null;
  }
  function Jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return At === null ? L.memoizedState = At = t : At = At.next = t, At;
  }
  function Nt() {
    if (ht === null) {
      var t = L.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var l = At === null ? L.memoizedState : At.next;
    if (l !== null)
      At = l, ht = t;
    else {
      if (t === null)
        throw L.alternate === null ? Error(m(467)) : Error(m(310));
      ht = t, t = {
        memoizedState: ht.memoizedState,
        baseState: ht.baseState,
        baseQueue: ht.baseQueue,
        queue: ht.queue,
        next: null
      }, At === null ? L.memoizedState = At = t : At = At.next = t;
    }
    return At;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yn(t) {
    var l = Bn;
    return Bn += 1, Qa === null && (Qa = []), t = Wr(Qa, t, l), l = L, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? Qs : Vs), t;
  }
  function Fi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Yn(t);
      if (t.$$typeof === T) return;
      if (t.$$typeof === jt) return Yt(t);
    }
    throw Error(m(438, String(t)));
  }
  function Jc(t) {
    var l = null, e = L.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = L.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = $i(), L.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Fe;
    return l.index++, e;
  }
  function he(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Wi(t) {
    var l = Nt();
    return kc(l, ht, t);
  }
  function kc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        n.next = i.next, i.next = u;
      }
      l.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      l = n.next;
      var c = u = null, f = null, g = l, p = !1;
      do {
        var z = g.lane & -536870913;
        if (z !== g.lane ? (P & z) === z : (de & z) === z) {
          var d = g.revertLane;
          if (d === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), z === fa && (p = !0);
          else if ((de & d) === d) {
            g = g.next, d === fa && (p = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, f === null ? (c = f = z, u = i) : f = f.next = z, L.lanes |= d, Be |= d;
          z = g.action, ha && e(i, z), i = g.hasEagerState ? g.eagerState : e(i, z);
        } else
          d = {
            lane: z,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, f === null ? (c = f = d, u = i) : f = f.next = d, L.lanes |= z, Be |= z;
        g = g.next;
      } while (g !== null && g !== l);
      if (f === null ? u = i : f.next = c, !dl(i, t.memoizedState) && (Ot = !0, p && (e = Ba, e !== null)))
        throw e;
      t.memoizedState = i, t.baseState = u, t.baseQueue = f, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function $c(t) {
    var l = Nt(), e = l.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, i = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      dl(i, l.memoizedState) || (Ot = !0), l.memoizedState = i, l.baseQueue === null && (l.baseState = i), e.lastRenderedState = i;
    }
    return [i, a];
  }
  function fs(t, l, e) {
    var a = L, n = Nt(), i = $;
    if (i) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else e = l();
    var u = !dl(
      (ht || n).memoizedState,
      e
    );
    if (u && (n.memoizedState = e, Ot = !0), n = n.queue, Ic(ss.bind(null, a, n, t), [
      t
    ]), t = n.getSnapshot !== l || u || At !== null && (At.memoizedState.tag & 1) !== 0, Va(
      t ? 9 : 8,
      { destroy: void 0 },
      rs.bind(null, a, n, e, l),
      null
    ), t) {
      if (a.flags |= 2048, vt === null) throw Error(m(349));
      i || (de & 127) !== 0 || os(a, l, e);
    }
    return e;
  }
  function os(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = L.updateQueue, l === null ? (l = $i(), L.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function rs(t, l, e, a) {
    l.value = e, l.getSnapshot = a, ds(l) && hs(t);
  }
  function ss(t, l, e) {
    return e(function() {
      ds(l) && hs(t);
    });
  }
  function ds(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !dl(t, e);
    } catch {
      return !0;
    }
  }
  function hs(t) {
    var l = ea(t, 2);
    l !== null && al(l, t, 2);
  }
  function Fc(t) {
    var l = Jt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), ha) {
        Se(!0);
        try {
          e();
        } finally {
          Se(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: he,
      lastRenderedState: t
    }, l;
  }
  function gs(t, l, e, a) {
    return t.baseState = e, kc(
      t,
      ht,
      typeof a == "function" ? a : he
    );
  }
  function Qm(t, l, e, a, n) {
    if (tu(t)) throw Error(m(485));
    if (t = l.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      j.T !== null ? e(!0) : i.isTransition = !1, a(i), e = l.pending, e === null ? (i.next = l.pending = i, ms(l, i)) : (i.next = e.next, l.pending = e.next = i);
    }
  }
  function ms(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var i = j.T, u = {};
      u.types = i !== null ? i.types : null, j.T = u;
      try {
        var c = e(n, a), f = j.S;
        f !== null && f(u, c), vs(t, l, c);
      } catch (g) {
        Wc(t, l, g);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), j.T = i;
      }
    } else
      try {
        i = e(n, a), vs(t, l, i);
      } catch (g) {
        Wc(t, l, g);
      }
  }
  function vs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        ys(t, l, a);
      },
      function(a) {
        return Wc(t, l, a);
      }
    ) : ys(t, l, e);
  }
  function ys(t, l, e) {
    l.status = "fulfilled", l.value = e, ps(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ms(t, e)));
  }
  function Wc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, ps(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function ps(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function xs(t, l) {
    return l;
  }
  function bs(t, l) {
    if ($) {
      var e = vt.formState;
      if (e !== null) {
        t: {
          var a = L;
          if ($) {
            if (xt) {
              l: {
                for (var n = xt, i = _l; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break l;
                  }
                  if (n = Ol(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                xt = Ol(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Ne(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = Jt(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xs,
      lastRenderedState: l
    }, e.queue = a, e = Ys.bind(
      null,
      L,
      a
    ), a.dispatch = e, a = Fc(!1), i = af.bind(
      null,
      L,
      !1,
      a.queue
    ), a = Jt(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = Qm.bind(
      null,
      L,
      n,
      i,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function Ss(t) {
    var l = Nt();
    return zs(l, ht, t);
  }
  function zs(t, l, e) {
    if (l = kc(
      t,
      l,
      xs
    )[0], t = Wi(he)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = Yn(l);
      } catch (u) {
        throw u === Ya ? Xi : u;
      }
    else a = l;
    l = Nt();
    var n = l.queue, i = n.dispatch;
    return e !== l.memoizedState && (L.flags |= 2048, Va(
      9,
      { destroy: void 0 },
      Vm.bind(null, n, e),
      null
    )), [a, i, t];
  }
  function Vm(t, l) {
    t.action = l;
  }
  function Ts(t) {
    var l = Nt(), e = ht;
    if (e !== null)
      return zs(l, e, t);
    Nt(), l = l.memoizedState, e = Nt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Va(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = L.updateQueue, l === null && (l = $i(), L.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function ws() {
    return Nt().memoizedState;
  }
  function Ii(t, l, e, a) {
    var n = Jt();
    L.flags |= t, n.memoizedState = Va(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function Pi(t, l, e, a) {
    var n = Nt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ht !== null && a !== null && Qc(a, ht.memoizedState.deps) ? n.memoizedState = Va(l, i, e, a) : (L.flags |= t, n.memoizedState = Va(
      1 | l,
      i,
      e,
      a
    ));
  }
  function Es(t, l) {
    Ii(8390656, 8, t, l);
  }
  function Ic(t, l) {
    Pi(2048, 8, t, l);
  }
  function Zm(t) {
    L.flags |= 4;
    var l = L.updateQueue;
    if (l === null)
      l = $i(), L.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Ns(t) {
    var l = Nt().memoizedState;
    return Zm({ ref: l, nextImpl: t }), function() {
      if ((ct & 2) !== 0) throw Error(m(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function _s(t, l) {
    return Pi(4, 2, t, l);
  }
  function As(t, l) {
    return Pi(4, 4, t, l);
  }
  function Os(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Ms(t, l, e) {
    e = e != null ? e.concat([t]) : null, Pi(4, 4, Os.bind(null, l, t), e);
  }
  function Pc() {
  }
  function Cs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Qc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function js(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Qc(l, a[1]))
      return a[0];
    if (a = t(), ha) {
      Se(!0);
      try {
        t();
      } finally {
        Se(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function tf(t, l, e) {
    return e === void 0 || (de & 1073741824) !== 0 && (P & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Qd(), L.lanes |= t, Be |= t, e);
  }
  function Ds(t, l, e, a) {
    return dl(e, l) ? e : je.current !== null ? (t = tf(t, e, a), dl(t, l) || (Ot = !0), t) : (de & 106) === 0 || (de & 1073741824) !== 0 && (P & 261930) === 0 ? (Ot = !0, t.memoizedState = e) : (t = Qd(), L.lanes |= t, Be |= t, l);
  }
  function Us(t, l, e, a, n) {
    var i = X.p;
    X.p = i !== 0 && 8 > i ? i : 8;
    var u = j.T, c = {};
    c.types = u !== null ? u.types : null, j.T = c, af(t, !1, l, e);
    try {
      var f = n(), g = j.S;
      if (g !== null && g(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var p = Ym(
          f,
          a
        );
        Gn(
          t,
          l,
          p,
          yl(t)
        );
      } else
        Gn(
          t,
          l,
          a,
          yl(t)
        );
    } catch (z) {
      Gn(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        yl()
      );
    } finally {
      X.p = i, u !== null && c.types !== null && (u.types = c.types), j.T = u;
    }
  }
  function Lm() {
  }
  function lf(t, l, e, a) {
    if (t.tag !== 5) throw Error(m(476));
    var n = Rs(t).queue;
    Us(
      t,
      n,
      l,
      ee,
      e === null ? Lm : function() {
        return Hs(t), e(a);
      }
    );
  }
  function Rs(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: he,
        lastRenderedState: ee
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: he,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Hs(t) {
    var l = Rs(t);
    l.next === null && (l = t.alternate.memoizedState), Gn(
      t,
      l.next.queue,
      {},
      yl()
    );
  }
  function ef() {
    return Yt(on);
  }
  function qs() {
    return Nt().memoizedState;
  }
  function Bs() {
    return Nt().memoizedState;
  }
  function Km(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = yl();
          t = Me(e);
          var a = Ce(l, t, e);
          a !== null && (al(a, l, e), Un(a, l, e)), l = { cache: Mc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Jm(t, l, e) {
    var a = yl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tu(t) ? Gs(l, e) : (e = Sc(t, l, e, a), e !== null && (al(e, t, a), Xs(e, l, a)));
  }
  function Ys(t, l, e) {
    var a = yl();
    Gn(t, l, e, a);
  }
  function Gn(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (tu(t)) Gs(l, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = l.lastRenderedReducer, i !== null))
        try {
          var u = l.lastRenderedState, c = i(u, e);
          if (n.hasEagerState = !0, n.eagerState = c, dl(c, u))
            return Ci(t, l, n, 0), vt === null && Mi(), !1;
        } catch {
        } finally {
        }
      if (e = Sc(t, l, n, a), e !== null)
        return al(e, t, a), Xs(e, l, a), !0;
    }
    return !1;
  }
  function af(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: kf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tu(t)) {
      if (l) throw Error(m(479));
    } else
      l = Sc(
        t,
        e,
        a,
        2
      ), l !== null && al(l, t, 2);
  }
  function tu(t) {
    var l = t.alternate;
    return t === L || l !== null && l === L;
  }
  function Gs(t, l) {
    Xa = Ji = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Xs(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Qo(t, e);
    }
  }
  var lu = {
    readContext: Yt,
    use: Fi,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt,
    useEffectEvent: wt
  }, Qs = {
    readContext: Yt,
    use: Fi,
    useCallback: function(t, l) {
      return Jt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Yt,
    useEffect: Es,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Ii(
        4194308,
        4,
        Os.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Ii(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Ii(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Jt();
      l = l === void 0 ? null : l;
      var a = t();
      if (ha) {
        Se(!0);
        try {
          t();
        } finally {
          Se(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = Jt();
      if (e !== void 0) {
        var n = e(l);
        if (ha) {
          Se(!0);
          try {
            e(l);
          } finally {
            Se(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = Jm.bind(
        null,
        L,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = Jt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Fc(t);
      var l = t.queue, e = Ys.bind(null, L, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, l) {
      var e = Jt();
      return tf(e, t, l);
    },
    useTransition: function() {
      var t = Fc(!1);
      return t = Us.bind(
        null,
        L,
        t.queue,
        !0,
        !1
      ), Jt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = L, n = Jt();
      if ($) {
        if (e === void 0)
          throw Error(m(407));
        e = e();
      } else {
        if (e = l(), vt === null)
          throw Error(m(349));
        (P & 127) !== 0 || os(a, l, e);
      }
      n.memoizedState = e;
      var i = { value: e, getSnapshot: l };
      return n.queue = i, Es(ss.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Va(
        9,
        { destroy: void 0 },
        rs.bind(
          null,
          a,
          i,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Jt(), l = vt.identifierPrefix;
      if ($) {
        var e = Ll, a = Zl;
        e = (a & ~(1 << 32 - rl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = ki++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Gm++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: ef,
    useFormState: bs,
    useActionState: bs,
    useOptimistic: function(t) {
      var l = Jt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = af.bind(
        null,
        L,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Jc,
    useCacheRefresh: function() {
      return Jt().memoizedState = Km.bind(
        null,
        L
      );
    },
    useEffectEvent: function(t) {
      var l = Jt(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((ct & 2) !== 0)
          throw Error(m(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Vs = {
    readContext: Yt,
    use: Fi,
    useCallback: Cs,
    useContext: Yt,
    useEffect: Ic,
    useImperativeHandle: Ms,
    useInsertionEffect: _s,
    useLayoutEffect: As,
    useMemo: js,
    useReducer: Wi,
    useRef: ws,
    useState: function() {
      return Wi(he);
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, l) {
      var e = Nt();
      return Ds(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Wi(he)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : Yn(t),
        l
      ];
    },
    useSyncExternalStore: fs,
    useId: qs,
    useHostTransitionStatus: ef,
    useFormState: Ss,
    useActionState: Ss,
    useOptimistic: function(t, l) {
      var e = Nt();
      return gs(e, ht, t, l);
    },
    useMemoCache: Jc,
    useCacheRefresh: Bs,
    useEffectEvent: Ns
  }, km = {
    readContext: Yt,
    use: Fi,
    useCallback: Cs,
    useContext: Yt,
    useEffect: Ic,
    useImperativeHandle: Ms,
    useInsertionEffect: _s,
    useLayoutEffect: As,
    useMemo: js,
    useReducer: $c,
    useRef: ws,
    useState: function() {
      return $c(he);
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, l) {
      var e = Nt();
      return ht === null ? tf(e, t, l) : Ds(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = $c(he)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : Yn(t),
        l
      ];
    },
    useSyncExternalStore: fs,
    useId: qs,
    useHostTransitionStatus: ef,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function(t, l) {
      var e = Nt();
      return ht !== null ? gs(e, ht, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Jc,
    useCacheRefresh: Bs,
    useEffectEvent: Ns
  };
  function nf(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : F({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var uf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), n = Me(a);
      n.payload = l, e != null && (n.callback = e), l = Ce(t, n, a), l !== null && (al(l, t, a), Un(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), n = Me(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = Ce(t, n, a), l !== null && (al(l, t, a), Un(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = yl(), a = Me(e);
      a.tag = 2, l != null && (a.callback = l), l = Ce(t, a, e), l !== null && (al(l, t, e), Un(l, t, e));
    }
  };
  function Zs(t, l, e, a, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, u) : l.prototype && l.prototype.isPureReactComponent ? !Nn(e, a) || !Nn(n, i) : !0;
  }
  function Ls(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && uf.enqueueReplaceState(l, l.state, null);
  }
  function ga(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = F({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function Ks(t) {
    Oi(t);
  }
  function Js(t) {
    console.error(t);
  }
  function ks(t) {
    Oi(t);
  }
  function eu(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function $s(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function cf(t, l, e) {
    return e = Me(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      eu(t, l);
    }, e;
  }
  function Fs(t) {
    return t = Me(t), t.tag = 3, t;
  }
  function Ws(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        $s(l, e, a);
      };
    }
    var u = e.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      $s(l, e, a), typeof n != "function" && (Ye === null ? Ye = /* @__PURE__ */ new Set([this]) : Ye.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function $m(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && ua(
        l,
        e,
        n,
        !0
      ), e = Gt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Lt === null ? Tu() : e.alternate === null && Et === 0 && (Et = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Qi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Lf(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === Qi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Lf(t, a, n)), !1;
        }
        throw Error(m(435, e.tag));
      }
      return Lf(t, a, n), Tu(), !1;
    }
    if ($)
      return l = Gt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Nc && (t = Error(m(422), { cause: a }), On(wl(t, e)))) : (a !== Nc && (l = Error(m(423), {
        cause: a
      }), On(
        wl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = wl(a, e), n = cf(
        t.stateNode,
        a,
        n
      ), Hc(t, n), Et !== 4 && (Et = 2)), !1;
    var i = Error(m(520), { cause: a });
    if (i = wl(i, e), kn === null ? kn = [i] : kn.push(i), Et !== 4 && (Et = 2), l === null) return !0;
    a = wl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = cf(e.stateNode, a, t), Hc(e, t), !1;
        case 1:
          if (l = e.type, i = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ye === null || !Ye.has(i))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Fs(n), Ws(
              n,
              t,
              e,
              a
            ), Hc(e, n), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var ff = Error(m(461)), Ot = !1;
  function Ct(t, l, e, a) {
    l.child = t === null ? ls(l, null, e, a) : da(
      l,
      t.child,
      e,
      a
    );
  }
  function Is(t, l, e, a, n) {
    e = e.render;
    var i = l.ref;
    if ("ref" in a) {
      var u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    } else u = a;
    return ca(l), a = Vc(
      t,
      l,
      e,
      u,
      i,
      n
    ), c = Zc(), t !== null && !Ot ? (Lc(t, l, n), ge(t, l, n)) : ($ && c && Ri(l), l.flags |= 1, Ct(t, l, a, n), l.child);
  }
  function Ps(t, l, e, a, n) {
    if (t === null) {
      var i = e.type;
      return typeof i == "function" && !zc(i) && i.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = i, td(
        t,
        l,
        i,
        a,
        n
      )) : (t = Di(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (i = t.child, !vf(t, n)) {
      var u = i.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Nn, e(u, a) && t.ref === l.ref)
        return ge(t, l, n);
    }
    return l.flags |= 1, t = fe(i, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function td(t, l, e, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Nn(i, a) && t.ref === l.ref)
        if (Ot = !1, l.pendingProps = a = i, vf(t, n))
          (t.flags & 131072) !== 0 && (Ot = !0);
        else
          return l.lanes = t.lanes, ge(t, l, n);
    }
    return of(
      t,
      l,
      e,
      a,
      n
    );
  }
  function ld(t, l, e, a) {
    var n = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, l.child = null;
        return ed(
          t,
          l,
          i,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Gi(
          l,
          i !== null ? i.cachePool : null
        ), i !== null ? ns(l, i) : Bc(), is(l);
      else
        return a = l.lanes = 536870912, ed(
          t,
          l,
          i !== null ? i.baseLanes | e : e,
          e,
          a
        );
    } else
      i !== null ? (Gi(l, i.cachePool), ns(l, i), Ue(), l.memoizedState = null) : (t !== null && Gi(l, null), Bc(), Ue());
    return Ct(t, l, n, e), l.child;
  }
  function Xn(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function ed(t, l, e, a, n) {
    var i = jc();
    return i = i === null ? null : { parent: _t._currentValue, pool: i }, l.memoizedState = {
      baseLanes: e,
      cachePool: i
    }, t !== null && Gi(l, null), Bc(), is(l), t !== null && ua(t, l, a, !0), l.childLanes = n, null;
  }
  function au(t, l) {
    return l = nu(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function ad(t, l, e) {
    return da(l, t.child, null, e), t = au(l, l.pendingProps), t.flags |= 2, hl(l), l.memoizedState = null, t;
  }
  function Fm(t, l, e) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if ($) {
        if (a.mode === "hidden")
          return t = au(l, a), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Xn(null, t);
        if (Gc(l), (t = xt) ? (t = Oh(
          t,
          _l
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: we !== null ? { id: Zl, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Gr(t), e.return = l, l.child = e, Ut = l, xt = null)) : t = null, t === null) throw Ne(l);
        return l.lanes = 536870912, null;
      }
      return au(l, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Gc(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = ad(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(m(558));
      else if (Ot || ua(t, l, e, !1), n = (e & t.childLanes) !== 0, Ot || n) {
        if (je.current === null) {
          if (a = vt, a !== null && (u = Vo(a, e), u !== 0 && u !== i.retryLane))
            throw i.retryLane = u, ea(t, u), al(a, t, u), ff;
          Tu();
        }
        l = ad(
          t,
          l,
          e
        );
      } else
        t = i.treeContext, xt = Ol(u.nextSibling), Ut = l, $ = !0, Ee = null, _l = !1, t !== null && Vr(l, t), l = au(l, a), l.flags |= 134221824;
      return l;
    }
    return t = fe(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Za(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(m(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function of(t, l, e, a, n) {
    return ca(l), e = Vc(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = Zc(), t !== null && !Ot ? (Lc(t, l, n), ge(t, l, n)) : ($ && a && Ri(l), l.flags |= 1, Ct(t, l, e, n), l.child);
  }
  function nd(t, l, e, a, n, i) {
    return ca(l), l.updateQueue = null, e = cs(
      l,
      a,
      e,
      n
    ), us(t), a = Zc(), t !== null && !Ot ? (Lc(t, l, i), ge(t, l, i)) : ($ && a && Ri(l), l.flags |= 1, Ct(t, l, e, i), l.child);
  }
  function id(t, l, e, a, n) {
    if (ca(l), l.stateNode === null) {
      var i = Ua, u = e.contextType;
      typeof u == "object" && u !== null && (i = Yt(u)), i = new e(a, i), l.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = uf, l.stateNode = i, i._reactInternals = l, i = l.stateNode, i.props = a, i.state = l.memoizedState, i.refs = {}, Uc(l), u = e.contextType, i.context = typeof u == "object" && u !== null ? Yt(u) : Ua, i.state = l.memoizedState, u = e.getDerivedStateFromProps, typeof u == "function" && (nf(
        l,
        e,
        u,
        a
      ), i.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && uf.enqueueReplaceState(i, i.state, null), Hn(l, a, i, n), Rn(), i.state = l.memoizedState), typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = l.stateNode;
      var c = l.memoizedProps, f = ga(e, c);
      i.props = f;
      var g = i.context, p = e.contextType;
      u = Ua, typeof p == "object" && p !== null && (u = Yt(p));
      var z = e.getDerivedStateFromProps;
      p = typeof z == "function" || typeof i.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c || g !== u) && Ls(
        l,
        i,
        a,
        u
      ), Oe = !1;
      var d = l.memoizedState;
      i.state = d, Hn(l, a, i, n), Rn(), g = l.memoizedState, c || d !== g || Oe ? (typeof z == "function" && (nf(
        l,
        e,
        z,
        a
      ), g = l.memoizedState), (f = Oe || Zs(
        l,
        e,
        f,
        a,
        d,
        g,
        u
      )) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), i.props = a, i.state = g, i.context = u, a = f) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      i = l.stateNode, Rc(t, l), u = l.memoizedProps, p = ga(e, u), i.props = p, z = l.pendingProps, d = i.context, g = e.contextType, f = Ua, typeof g == "object" && g !== null && (f = Yt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== z || d !== f) && Ls(
        l,
        i,
        a,
        f
      ), Oe = !1, d = l.memoizedState, i.state = d, Hn(l, a, i, n), Rn();
      var y = l.memoizedState;
      u !== z || d !== y || Oe || t !== null && t.dependencies !== null && Bi(t.dependencies) ? (typeof c == "function" && (nf(
        l,
        e,
        c,
        a
      ), y = l.memoizedState), (p = Oe || Zs(
        l,
        e,
        p,
        a,
        d,
        y,
        f
      ) || t !== null && t.dependencies !== null && Bi(t.dependencies)) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, y, f), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        y,
        f
      )), typeof i.componentDidUpdate == "function" && (l.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = y), i.props = a, i.state = y, i.context = f, a = p) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return i = a, Za(t, l), a = (l.flags & 128) !== 0, i || a ? (i = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : i.render(), l.flags |= 1, t !== null && a ? (l.child = da(
      l,
      t.child,
      null,
      n
    ), l.child = da(
      l,
      null,
      e,
      n
    )) : Ct(t, l, e, n), l.memoizedState = i.state, t = l.child) : t = ge(
      t,
      l,
      n
    ), t;
  }
  function ud(t, l, e, a) {
    return na(), l.flags |= 256, Ct(t, l, e, a), l.child;
  }
  var rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function sf(t) {
    return { baseLanes: t, cachePool: $r() };
  }
  function df(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= vl), t;
  }
  function cd(t, l, e) {
    var a = l.pendingProps, n = !1, i = (l.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0), u && (n = !0, l.flags &= -129), u = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if ($) {
        if (n ? De(l) : Ue(), (t = xt) ? (t = Oh(
          t,
          _l
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: we !== null ? { id: Zl, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Gr(t), e.return = l, l.child = e, Ut = l, xt = null)) : t = null, t === null) throw Ne(l);
        return so(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, n ? (Ue(), n = l.mode, i = nu(
        { mode: "hidden", children: i },
        n
      ), a = aa(
        a,
        n,
        e,
        null
      ), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = sf(e), a.childLanes = df(
        t,
        u,
        e
      ), l.memoizedState = rf, Xn(null, a)) : (De(l), hf(l, i));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if (f !== null)
        return Wm(
          t,
          l,
          i,
          u,
          a,
          f,
          c,
          e
        );
    }
    return n ? (Ue(), n = a.fallback, i = l.mode, c = t.child, f = c.sibling, a = fe(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 1206910976, f !== null ? n = fe(f, n) : (n = aa(
      n,
      i,
      e,
      null
    ), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, Xn(null, a), a = l.child, n = t.child.memoizedState, n === null ? n = sf(e) : (i = n.cachePool, i !== null ? (c = _t._currentValue, i = i.parent !== c ? { parent: c, pool: c } : i) : i = $r(), n = {
      baseLanes: n.baseLanes | e,
      cachePool: i
    }), a.memoizedState = n, a.childLanes = df(
      t,
      u,
      e
    ), l.memoizedState = rf, Xn(t.child, a)) : (De(l), e = t.child, t = e.sibling, e = fe(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (u = l.deletions, u === null ? (l.deletions = [t], l.flags |= 16) : u.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function hf(t, l) {
    return l = nu(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function nu(t, l) {
    return t = Pt(22, t, null, l), t.lanes = 0, t;
  }
  function iu(t, l, e) {
    return da(l, t.child, null, e), t = hf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Wm(t, l, e, a, n, i, u, c) {
    if (e)
      return l.flags & 256 ? (De(l), l.flags &= -257, iu(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (Ue(), l.child = t.child, l.flags |= 128, null) : (Ue(), i = n.fallback, u = l.mode, n = nu(
        { mode: "visible", children: n.children },
        u
      ), i = aa(
        i,
        u,
        c,
        null
      ), i.flags |= 2, n.return = l, i.return = l, n.sibling = i, l.child = n, da(l, t.child, null, c), n = l.child, n.memoizedState = sf(c), n.childLanes = df(
        t,
        a,
        c
      ), l.memoizedState = rf, Xn(null, n));
    if (De(l), so(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var f = a.dgst;
      return a = f, a !== "" && (n = Error(m(419)), n.stack = "", n.digest = a, On({ value: n, source: null, stack: null })), iu(
        t,
        l,
        c
      );
    }
    if (Ot || ua(t, l, c, !1), a = (c & t.childLanes) !== 0, Ot || a) {
      if (je.current !== null)
        return iu(
          t,
          l,
          c
        );
      if (a = vt, a !== null && (n = Vo(
        a,
        c
      ), n !== 0 && n !== u.retryLane))
        throw u.retryLane = n, ea(t, n), al(a, t, n), ff;
      return ro(i) || Tu(), iu(
        t,
        l,
        c
      );
    }
    return ro(i) ? (l.flags |= 192, l.child = t.child, null) : (t = u.treeContext, xt = Ol(i.nextSibling), Ut = l, $ = !0, Ee = null, _l = !1, t !== null && Vr(l, t), l = hf(
      l,
      n.children
    ), l.flags |= 134221824, l);
  }
  function fd(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), qi(t.return, l, e);
  }
  function od(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && Ki(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function uu(t, l, e, a, n, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: i
    } : (u.isBackwards = l, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n, u.treeForkCount = i);
  }
  function gf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function mf(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Xt.current;
    if (l.flags & 128)
      return qn(l, u), null;
    var c = (u & 2) !== 0;
    if (c ? (u = u & 1 | 2, l.flags |= 128) : u &= 1, qn(l, u), n === "backwards" && t !== null ? (gf(t), Ct(t, l, a, e), gf(t)) : Ct(t, l, a, e), a = $ ? An : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && fd(t, e, l);
        else if (t.tag === 19)
          fd(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "backwards":
        e = od(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null, gf(l)), uu(
          l,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Ki(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        uu(
          l,
          !0,
          e,
          null,
          i,
          a
        );
        break;
      case "together":
        uu(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = od(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), uu(
          l,
          !1,
          n,
          e,
          i,
          a
        );
    }
    return l.child;
  }
  function rd(t, l, e) {
    var a = l.pendingProps;
    return _e(l, l.type, a.value), Ct(t, l, a.children, e), l.child;
  }
  function ge(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Be |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (ua(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(m(153));
    if (l.child !== null) {
      for (t = l.child, e = fe(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = fe(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function vf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Bi(t)));
  }
  function Im(t, l, e) {
    switch (l.tag) {
      case 3:
        si(l, l.stateNode.containerInfo), _e(l, _t, t.memoizedState.cache), na();
        break;
      case 27:
      case 5:
        Qu(l);
        break;
      case 4:
        si(l, l.stateNode.containerInfo);
        break;
      case 10:
        _e(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Gc(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return De(l), l.flags |= 128, null;
          a = ua(
            t,
            l,
            e,
            !1
          );
          var n = l.child.childLanes;
          return a || (e & n) !== 0 ? cd(t, l, e) : (De(l), t = ge(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        De(l);
        break;
      case 19:
        if (l.flags & 128)
          return mf(
            t,
            l,
            e
          );
        if (n = (t.flags & 128) !== 0, a = (e & l.childLanes) !== 0, a || (ua(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return mf(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), qn(l, Xt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, ld(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        _e(l, _t, t.memoizedState.cache);
    }
    return ge(t, l, e);
  }
  function sd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Ot = !0;
      else {
        if (!vf(t, e) && (l.flags & 128) === 0)
          return Ot = !1, Im(
            t,
            l,
            e
          );
        Ot = (t.flags & 131072) !== 0;
      }
    else
      Ot = !1, $ && (l.flags & 1048576) !== 0 && Qr(l, An, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = ra(l.elementType), l.type = t, typeof t == "function")
            zc(t) ? (a = ga(t, a), l.tag = 1, l = id(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = of(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === _) {
                l.tag = 11, l = Is(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === mt) {
                l.tag = 14, l = Ps(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === jt) {
                l.tag = 10, l.type = t, l = rd(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = at(t) || t, Error(m(306, l, ""));
          }
        }
        return l;
      case 0:
        return of(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = ga(
          a,
          l.pendingProps
        ), id(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (si(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(m(387));
          a = l.pendingProps;
          var i = l.memoizedState;
          n = i.element, Rc(t, l), Hn(l, a, null, e);
          var u = l.memoizedState;
          if (a = u.cache, _e(l, _t, a), a !== i.cache && Oc(
            l,
            [_t],
            e,
            !0
          ), Rn(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, l.updateQueue.baseState = i, l.memoizedState = i, l.flags & 256) {
              l = ud(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = wl(
                Error(m(424)),
                l
              ), On(n), l = ud(
                t,
                l,
                a,
                e
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (xt = Ol(t.firstChild), Ut = l, $ = !0, Ee = null, _l = !0, e = ls(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
            }
          else {
            if (na(), a === n) {
              l = ge(
                t,
                l,
                e
              );
              break t;
            }
            Ct(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Za(t, l), t === null ? (e = Hh(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : $ || (l.stateNode = mh(
          l.type,
          l.pendingProps,
          xe.current,
          l
        )) : l.memoizedState = Hh(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Qu(l), t === null && $ && (a = l.stateNode = jh(
          l.type,
          l.pendingProps,
          xe.current
        ), Ut = l, _l = !0, n = xt, Qe(l.type) ? (ho = n, xt = Ol(a.firstChild)) : xt = n), Ct(
          t,
          l,
          l.pendingProps.children,
          e
        ), Za(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && $ && ((n = a = xt) && (a = K0(
          a,
          l.type,
          l.pendingProps,
          _l
        ), a !== null ? (l.stateNode = a, Ut = l, xt = Ol(a.firstChild), _l = !1, n = !0) : n = !1), n || Ne(l)), Qu(l), n = l.type, i = l.pendingProps, u = t !== null ? t.memoizedProps : null, a = i.children, ao(n, i) ? a = null : u !== null && ao(n, u) && (l.flags |= 32), l.memoizedState !== null && (n = Vc(
          t,
          l,
          Xm,
          null,
          null,
          e
        ), on._currentValue = n), Za(t, l), Ct(t, l, a, e), l.child;
      case 6:
        return t === null && $ && ((t = e = xt) && (e = J0(
          e,
          l.pendingProps,
          _l
        ), e !== null ? (l.stateNode = e, Ut = l, xt = null, t = !0) : t = !1), t || Ne(l)), null;
      case 13:
        return cd(t, l, e);
      case 4:
        return si(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = da(
          l,
          null,
          a,
          e
        ) : Ct(t, l, a, e), l.child;
      case 11:
        return Is(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return a = l.pendingProps, Za(t, l), Ct(t, l, a, e), l.child;
      case 8:
        return Ct(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Ct(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return rd(t, l, e);
      case 9:
        return n = l.type._context, a = l.pendingProps.children, ca(l), n = Yt(n), a = a(n), l.flags |= 1, Ct(t, l, a, e), l.child;
      case 14:
        return Ps(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return td(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return mf(t, l, e);
      case 31:
        return Fm(t, l, e);
      case 22:
        return ld(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ca(l), a = Yt(_t), t === null ? (n = jc(), n === null && (n = vt, i = Mc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= e), n = i), l.memoizedState = { parent: a, cache: n }, Uc(l), _e(l, _t, n)) : ((t.lanes & e) !== 0 && (Rc(t, l), Hn(l, null, null, e), Rn()), n = t.memoizedState, i = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), _e(l, _t, a)) : (a = i.cache, _e(l, _t, a), a !== n.cache && Oc(
          l,
          [_t],
          e,
          !0
        ))), Ct(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 30:
        return l.stateNode === null && (l.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = l.pendingProps, a.name != null && a.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : $ && Ri(l), t !== null && t.memoizedProps.name !== a.name ? l.flags |= 4194816 : Za(t, l), Ct(t, l, a.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(m(156, l.tag));
  }
  function me(t) {
    t.flags |= 4;
  }
  function yf(t, l, e, a, n) {
    var i;
    if ((i = (t.mode & 32) !== 0) && (i = e === null ? Gh(l, a) : Gh(l, a) && (a.src !== e.src || a.srcSet !== e.srcSet)), i) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Kd()) t.flags |= 8192;
        else
          throw sa = Qi, Dc;
    } else t.flags &= -16777217;
  }
  function dd(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Xh(l))
      if (Kd()) t.flags |= 8192;
      else
        throw sa = Qi, Dc;
  }
  function cu(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Go() : 536870912, t.lanes |= l, $a |= l);
  }
  function Qn(t, l) {
    if (!$)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function bt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function Pm(t, l, e) {
    var a = l.pendingProps;
    switch (Ec(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bt(l), null;
      case 1:
        return bt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), se(_t), Sa(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (qa(l) ? me(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, _c())), bt(l), null;
      case 26:
        var n = l.type, i = l.memoizedState;
        return t === null ? (me(l), i !== null ? (bt(l), dd(l, i)) : (bt(l), yf(
          l,
          n,
          null,
          a,
          e
        ))) : i ? i !== t.memoizedState ? (me(l), bt(l), dd(l, i)) : (bt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && me(l), bt(l), yf(
          l,
          n,
          t,
          a,
          e
        )), null;
      case 27:
        if (di(l), e = xe.current, n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && me(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(m(166));
            return bt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ql.current, qa(l) ? Zr(l) : (t = jh(n, a, e), l.stateNode = t, me(l));
        }
        return bt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (di(l), n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && me(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(m(166));
            return bt(l), l.subtreeFlags &= -33554433, null;
          }
          if (i = Ql.current, qa(l))
            Zr(l);
          else {
            var u = Pn(
              xe.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? u.createElement("select", {
                      is: a.is
                    }) : u.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? u.createElement(n, { is: a.is }) : u.createElement(n);
                }
            }
            i[Bt] = l, i[It] = a;
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            l.stateNode = i;
            t: switch (Vt(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && me(l);
          }
        }
        return bt(l), l.subtreeFlags &= -33554433, yf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && me(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(m(166));
          if (t = xe.current, qa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = Ut, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Bt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || sh(t.nodeValue, e)), t || Ne(l, !0);
          } else
            t = Pn(t).createTextNode(
              a
            ), t[Bt] = l, l.stateNode = t;
        }
        return bt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = qa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(m(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(m(557));
              t[Bt] = l;
            } else
              na(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            bt(l), t = !1;
          } else
            e = _c(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(m(558));
        }
        return bt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = qa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(m(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
              n[Bt] = l;
            } else
              na(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            bt(l), n = !1;
          } else
            n = _c(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
        }
        return hl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), cu(l, l.updateQueue), bt(l), null);
      case 4:
        return Sa(), t === null && If(l.stateNode.containerInfo), l.flags |= 67108864, bt(l), null;
      case 10:
        return se(l.type), bt(l), null;
      case 19:
        if (Xc(l), a = l.memoizedState, a === null) return bt(l), null;
        if (n = (l.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Qn(a, !1);
          else {
            if (Et !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (i = Ki(t), i !== null) {
                  for (l.flags |= 128, Qn(a, !1), t = i.updateQueue, l.updateQueue = t, cu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Yr(e, t), e = e.sibling;
                  return qn(
                    l,
                    Xt.current & 1 | 2
                  ), $ && oe(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && fl() > xu && (l.flags |= 128, n = !0, Qn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Ki(i), t !== null) {
              if (l.flags |= 128, n = !0, t = t.updateQueue, l.updateQueue = t, cu(l, t), Qn(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !$)
                return bt(l), null;
            } else
              2 * fl() - a.renderingStartTime > xu && e !== 536870912 && (l.flags |= 128, n = !0, Qn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (i.sibling = l.child, l.child = i) : (t = a.last, t !== null ? t.sibling = i : l.child = i, a.last = i);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (e = t; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break t;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = fl(), t.sibling = null, i = Xt.current, i = n ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !e || $ ? qn(l, i) : (e = i, pt(Gt, l), pt(Xt, e), Lt === null && (Lt = l)), $ && oe(l, a.treeForkCount), t;
        }
        return bt(l), null;
      case 22:
      case 23:
        return hl(l), Yc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (bt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : bt(l), e = l.updateQueue, e !== null && cu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && qt(oa), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), se(_t), bt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, bt(l), null;
    }
    throw Error(m(156, l.tag));
  }
  function t0(t, l) {
    switch (Ec(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return se(_t), Sa(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return di(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (hl(l), l.alternate === null)
            throw Error(m(340));
          na();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (hl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(m(340));
          na();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return Xc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Sa(), null;
      case 10:
        return se(l.type), null;
      case 22:
      case 23:
        return hl(l), Yc(), t !== null && qt(oa), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return se(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hd(t, l) {
    switch (Ec(l), l.tag) {
      case 3:
        se(_t), Sa();
        break;
      case 26:
      case 27:
      case 5:
        di(l);
        break;
      case 4:
        Sa();
        break;
      case 31:
        l.memoizedState !== null && hl(l);
        break;
      case 13:
        hl(l);
        break;
      case 19:
        Xc(l);
        break;
      case 10:
        se(l.type);
        break;
      case 22:
      case 23:
        hl(l), Yc(), t !== null && qt(oa);
        break;
      case 24:
        se(_t);
    }
  }
  function Vn(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var i = e.create, u = e.inst;
            a = i(), u.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      st(l, l.return, c);
    }
  }
  function Re(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst, c = u.destroy;
            if (c !== void 0) {
              u.destroy = void 0, n = l;
              var f = e, g = c;
              try {
                g();
              } catch (p) {
                st(
                  n,
                  f,
                  p
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (p) {
      st(l, l.return, p);
    }
  }
  function gd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        as(l, e);
      } catch (a) {
        st(t, t.return, a);
      }
    }
  }
  function md(t, l, e) {
    e.props = ga(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      st(t, l, a);
    }
  }
  function Kl(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var n = t.stateNode, i = ue(t.memoizedProps, n);
            (n.ref === null || n.ref.name !== i) && (n.ref = zh(i)), a = n.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var u = new pl(t);
              b(
                t.child,
                !1,
                Z0,
                u,
                void 0,
                void 0
              ), t.stateNode = u;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (c) {
      st(t, l, c);
    }
  }
  function Qt(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          st(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          st(t, l, n);
        }
      else e.current = null;
  }
  function fu(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        Ah(
          t.stateNode,
          l[e]
        );
  }
  function vd(t) {
    for (var l = t.return; l !== null && (xf(l) && Ah(t.stateNode, l.stateNode), !pf(l)); )
      l = l.return;
  }
  function Zn(t) {
    for (var l = t.return; l !== null && (xf(l) && L0(t.stateNode, l.stateNode), !pf(l)); )
      l = l.return;
  }
  function pf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function xf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function bf(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      st(t, t.return, n);
    }
  }
  function Sf(t, l, e) {
    try {
      var a = t.stateNode;
      N0(a, t.type, e, l), a[It] = l;
    } catch (n) {
      st(t, t.return, n);
    }
  }
  function yd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Qe(t.type) || t.tag === 4;
  }
  function zf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || yd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Qe(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Tf(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(n, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(n), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Vl)), fu(t, a), nt = !0;
    else if (n !== 4 && (n === 27 && (fu(t, a), a = null, Qe(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Tf(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        Tf(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function ou(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? e.insertBefore(n, l) : e.appendChild(n), fu(t, a), nt = !0;
    else if (n !== 4 && (n === 27 && (fu(t, a), a = null, Qe(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (ou(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        ou(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function pd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Vt(l, a, e), l[Bt] = t, l[It] = e;
    } catch (i) {
      st(t, t.return, i);
    }
  }
  var ru = !1, gl = null;
  function xd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (ru = !0);
  }
  var Jl = null;
  function bd() {
    var t = Jl;
    return Jl = null, t;
  }
  var tl = 0;
  function La(t, l, e, a, n) {
    return tl = 0, Sd(
      t.child,
      l,
      e,
      a,
      n
    );
  }
  function Sd(t, l, e, a, n) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var u = t.stateNode;
        if (a !== null) {
          var c = uo(u);
          a.push(c), c.view && (i = !0);
        } else
          i || uo(u).view && (i = !0);
        ru = !0, bh(
          u,
          tl === 0 ? l : l + "_" + tl,
          e
        ), tl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && n || Sd(
        t.child,
        l,
        e,
        a,
        n
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function kl(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Sh(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || kl(
        t.child,
        l
      )), t = t.sibling;
  }
  function su(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (su(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(m(544));
          var e = l.name;
          l = ce(l.default, l.share), l !== "none" && (La(
            t,
            e,
            l,
            null,
            !1
          ) || kl(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function wf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, a = t.memoizedProps, n = ue(a, e), i = ce(
        a.default,
        e.paired ? a.share : a.enter
      );
      i !== "none" ? La(t, n, i, null, !1) ? (su(t), e.paired || l || Pa(t, a.onEnter)) : kl(t.child, !1) : su(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        wf(t, l), t = t.sibling;
    else su(t);
  }
  function Ef(t) {
    if (gl !== null && gl.size !== 0) {
      var l = gl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, a = e.name;
              if (a != null && a !== "auto") {
                var n = l.get(a);
                if (n !== void 0) {
                  var i = ce(
                    e.default,
                    e.share
                  );
                  if (i !== "none" && (La(
                    t,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = t.stateNode, n.paired = i, i.paired = n, Pa(t, e.onShare)) : kl(t.child, !1)), l.delete(a), l.size === 0) break;
                }
              }
            }
            Ef(t);
          }
          t = t.sibling;
        }
    }
  }
  function Nf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = ue(l, t.stateNode), a = gl !== null ? gl.get(e) : void 0, n = ce(
        l.default,
        a !== void 0 ? l.share : l.exit
      );
      n !== "none" && (La(t, e, n, null, !1) ? a !== void 0 ? (n = t.stateNode, a.paired = n, n.paired = a, gl.delete(e), Pa(t, l.onShare)) : Pa(t, l.onExit) : kl(t.child, !1)), gl !== null && Ef(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Nf(t), t = t.sibling;
    else
      gl !== null && Ef(t);
  }
  function zd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = ue(l, t.stateNode);
        l = ce(l.default, l.update), t.flags &= -5, l !== "none" && La(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && zd(t);
      t = t.sibling;
    }
  }
  function _f(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, kl(t.child, !1));
          }
          _f(t);
        }
        t = t.sibling;
      }
  }
  function du(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, kl(t.child, !1), _f(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        du(t), t = t.sibling;
    else _f(t);
  }
  function Td(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? kl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Td(t), t = t.sibling;
  }
  function Af(t, l, e, a, n, i, u) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (i !== null && tl < i.length) {
          var g = i[tl], p = uo(f);
          (g.view || p.view) && (c = !0);
          var z;
          if (z = (t.flags & 4) === 0)
            if (p.clip) z = !0;
            else {
              z = g.rect;
              var d = p.rect;
              z = z.y !== d.y || z.x !== d.x || z.height !== d.height || z.width !== d.width;
            }
          z && (t.flags |= 4), p.abs ? p = !g.abs : (g = g.rect, p = p.rect, p = g.height !== p.height || g.width !== p.width), p && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && bh(
          f,
          tl === 0 ? e : e + "_" + tl,
          n
        ), c && (t.flags & 4) !== 0 || (Jl === null && (Jl = []), Jl.push(
          f,
          tl === 0 ? a : a + "_" + tl,
          l.memoizedProps
        )), tl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && u ? t.flags |= l.flags & 32 : Af(
        t,
        l.child,
        e,
        a,
        n,
        i,
        u
      ) && (c = !0));
      l = l.sibling;
    }
    return c;
  }
  function wd(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = t.stateNode, n = ue(e, a), i = ce(e.default, e.update), u;
        u = t.memoizedState, t.memoizedState = null, a = t;
        var c = t.child;
        tl = 0, n = Af(
          a,
          c,
          n,
          n,
          i,
          u,
          !1
        ), (t.flags & 4) !== 0 && n && Pa(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && wd(t);
      t = t.sibling;
    }
  }
  var Rt = !1, ot = !1, $l = !1, Of = !1, Ed = typeof WeakSet == "function" ? WeakSet : Set, Ht = null, Fl = !1, Ln = !1, hu = !1, Mf = !1;
  function l0(t, l, e) {
    if (t = t.containerInfo, lo = rn, t = Or(t), mc(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var i = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break t;
            }
            var c = 0, f = -1, g = -1, p = 0, z = 0, d = t, y = null;
            l: for (; ; ) {
              for (var E; d !== a || i !== 0 && d.nodeType !== 3 || (f = c + i), d !== u || n !== 0 && d.nodeType !== 3 || (g = c + n), d.nodeType === 3 && (c += d.nodeValue.length), (E = d.firstChild) !== null; )
                y = d, d = E;
              for (; ; ) {
                if (d === t) break l;
                if (y === a && ++p === i && (f = c), y === u && ++z === n && (g = c), (E = d.nextSibling) !== null) break;
                d = y, y = d.parentNode;
              }
              d = E;
            }
            a = f === -1 || g === -1 ? null : { start: f, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (eo = { focusedElem: t, selectionRange: a }, rn = !1, e = (e & 335544064) === e, Ht = l, l = e ? 9270 : 1024; Ht !== null; ) {
      if (t = Ht, e && (a = t.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          e && Nf(a[i]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && xd(t), gu(e);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && e && Nf(a), gu(e);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            e && xd(t), gu(e);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & l) !== 0 && a !== null ? (a.return = t, Ht = a) : (e && zd(t), gu(e));
      }
    }
    gl = null;
  }
  function gu(t) {
    for (; Ht !== null; ) {
      var l = Ht, e = t, a = l.alternate, n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            e = void 0, n = a.memoizedProps, a = a.memoizedState;
            var i = l.stateNode;
            try {
              var u = ga(
                l.type,
                n
              );
              e = i.getSnapshotBeforeUpdate(
                u,
                a
              ), i.__reactInternalSnapshotBeforeUpdate = e;
            } catch (c) {
              st(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = l.stateNode.containerInfo, e = a.nodeType, e === 9)
              oo(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  oo(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          e && a !== null && (e = ue(
            a.memoizedProps,
            a.stateNode
          ), n = l.memoizedProps, n = ce(n.default, n.update), n !== "none" && La(
            a,
            e,
            n,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(m(163));
      }
      if (a = l.sibling, a !== null) {
        a.return = l.return, Ht = a;
        break;
      }
      Ht = l.return;
    }
  }
  function Nd(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wl(t, e), a & 4 && Vn(5, e);
        break;
      case 1:
        if (Wl(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (u) {
              st(e, e.return, u);
            }
          else {
            var n = ga(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              st(
                e,
                e.return,
                u
              );
            }
          }
        a & 64 && gd(e), a & 512 && Kl(e, e.return);
        break;
      case 3:
        if (Wl(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            as(t, l);
          } catch (u) {
            st(e, e.return, u);
          }
        }
        break;
      case 27:
        l === null && a & 4 && pd(e);
      case 26:
      case 5:
        Wl(t, e), l === null && a & 4 && bf(e), a & 512 && Kl(e, e.return);
        break;
      case 12:
        Wl(t, e);
        break;
      case 31:
        Wl(t, e), a & 4 && Md(t, e);
        break;
      case 13:
        Wl(t, e), a & 4 && Cd(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = h0.bind(
          null,
          e
        ), k0(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Rt, !a) {
          var i = l !== null && l.memoizedState !== null || ot;
          l = Rt, n = ot, Rt = a, (ot = i) && !n ? (a = 2, (e.subtreeFlags & 8772) !== 0 && (a |= 1), Rl(
            t,
            e,
            a
          )) : Wl(t, e), Rt = l, ot = n;
        }
        break;
      case 30:
        Wl(t, e), a & 512 && Kl(e, e.return);
        break;
      case 7:
        a & 512 && Kl(e, e.return);
      default:
        Wl(t, e);
    }
  }
  function Cf(t, l) {
    for (t = t.child; t !== null; )
      _d(t, l), t = t.sibling;
  }
  function _d(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var a = e.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var n = t.stateNode, i = t.memoizedProps.style, u = i != null && i.hasOwnProperty("display") ? i.display : null;
            n.style.display = u == null || typeof u == "boolean" ? "" : ("" + u).trim();
          }
        } catch (f) {
          st(t, t.return, f);
        }
        jf(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, nt = !0;
        } catch (f) {
          st(t, t.return, f);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? xh(c, !0) : xh(t.stateNode, !1);
        } catch (f) {
          st(t, t.return, f);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Cf(t, l);
        break;
      default:
        Cf(t, l);
    }
  }
  function jf(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, a = l;
          switch (e.tag) {
            case 4:
              _d(e, a);
              break t;
            case 22:
              e.memoizedState === null && jf(e, a);
              break t;
            default:
              jf(e, a);
          }
        }
        t = t.sibling;
      }
  }
  function Ad(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Ad(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && xi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var St = null, ll = !1;
  function Dl(t, l, e) {
    for (e = e.child; e !== null; )
      Od(t, l, e), e = e.sibling;
  }
  function Od(t, l, e) {
    if (ol && typeof ol.onCommitFiberUnmount == "function")
      try {
        ol.onCommitFiberUnmount(gn, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        ot || Qt(e, l), Dl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !ot && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        ot || Qt(e, l), Zn(e);
        var a = St, n = ll;
        Qe(e.type) && (St = e.stateNode, ll = !1), Dl(
          t,
          l,
          e
        ), Dh(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), St = a, ll = n;
        break;
      case 5:
        ot || Qt(e, l), Zn(e);
      case 6:
        if (e.tag === 6 && Zn(e), a = St, n = ll, St = null, Dl(
          t,
          l,
          e
        ), St = a, ll = n, St !== null)
          if (ll)
            try {
              (St.nodeType === 9 ? St.body : St.nodeName === "HTML" ? St.ownerDocument.body : St).removeChild(e.stateNode), nt = !0;
            } catch (i) {
              st(
                e,
                l,
                i
              );
            }
          else
            try {
              St.removeChild(e.stateNode), nt = !0;
            } catch (i) {
              st(
                e,
                l,
                i
              );
            }
        break;
      case 18:
        St !== null && (ll ? (t = St, ph(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), sn(t)) : ph(St, e.stateNode));
        break;
      case 4:
        a = St, n = ll, St = e.stateNode.containerInfo, ll = !0, Dl(
          t,
          l,
          e
        ), St = a, ll = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Re(2, e, l), ot || Re(4, e, l), Dl(
          t,
          l,
          e
        );
        break;
      case 1:
        ot || (Qt(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && md(
          e,
          l,
          a
        )), Dl(
          t,
          l,
          e
        );
        break;
      case 21:
        Dl(
          t,
          l,
          e
        );
        break;
      case 22:
        ot = (a = ot) || e.memoizedState !== null, Dl(
          t,
          l,
          e
        ), ot = a;
        break;
      case 30:
        Qt(e, l), Dl(
          t,
          l,
          e
        );
        break;
      case 7:
        ot || Qt(e, l), Dl(
          t,
          l,
          e
        );
        break;
      default:
        Dl(
          t,
          l,
          e
        );
    }
  }
  function Md(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        sn(t);
      } catch (e) {
        st(l, l.return, e);
      }
    }
  }
  function Cd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        sn(t);
      } catch (e) {
        st(l, l.return, e);
      }
  }
  function e0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Ed()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Ed()), l;
      default:
        throw Error(m(435, t.tag));
    }
  }
  function mu(t, l) {
    var e = e0(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = g0.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function kt(t, l, e) {
    var a = l.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n], u = t, c = l, f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Qe(f.type)) {
                St = f.stateNode, ll = !1;
                break t;
              }
              break;
            case 5:
              St = f.stateNode, ll = !1;
              break t;
            case 3:
            case 4:
              St = f.stateNode.containerInfo, ll = !0;
              break t;
          }
          f = f.return;
        }
        if (St === null) throw Error(m(160));
        Od(u, c, i), St = null, ll = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        jd(l, t, e), l = l.sibling;
  }
  var Ul = null;
  function jd(t, l, e) {
    var a = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var i = 0; i < a.length; i++) {
            var u = a[i];
            u.ref.impl = u.nextImpl;
          }
        kt(l, t, e), $t(t), n & 4 && (Re(3, t, t.return), Vn(3, t), Re(5, t, t.return));
        break;
      case 1:
        kt(l, t, e), $t(t), n & 512 && (ot || a === null || Qt(a, a.return)), n & 64 && Rt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (i = Ul, kt(l, t, e), $t(t), n & 512 && (ot || a === null || Qt(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, e = t.memoizedState, a === null)
            if (e === null)
              if (t.stateNode === null)
                if (Rt)
                  t.stateNode = mh(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, n = i.ownerDocument || i;
                    l: switch (l) {
                      case "title":
                        a = n.getElementsByTagName("title")[0], (!a || a[yn] || a[Bt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(l), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), Vt(a, l, e), a[Bt] = t, Dt(a), l = a;
                        break t;
                      case "link":
                        if (i = Yh(
                          "link",
                          "href",
                          n
                        ).get(l + (e.href || ""))) {
                          for (u = 0; u < i.length; u++)
                            if (a = i[u], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              i.splice(u, 1);
                              break l;
                            }
                        }
                        a = n.createElement(l), Vt(a, l, e), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Yh(
                          "meta",
                          "content",
                          n
                        ).get(l + (e.content || ""))) {
                          for (u = 0; u < i.length; u++)
                            if (a = i[u], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              i.splice(u, 1);
                              break l;
                            }
                        }
                        a = n.createElement(l), Vt(a, l, e), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(m(468, l));
                    }
                    a[Bt] = t, Dt(a), l = a;
                  }
                  t.stateNode = l;
                }
              else
                Rt || yo(i, t.type, t.stateNode);
            else
              t.stateNode = Bh(
                i,
                e,
                t.memoizedProps
              );
          else
            n !== e ? (n === null ? (l = a.stateNode, l === null || ot || l.parentNode.removeChild(l)) : n.count--, e === null ? Rt || yo(i, t.type, t.stateNode) : Bh(i, e, t.memoizedProps)) : e === null && t.stateNode !== null && Sf(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        kt(l, t, e), $t(t), n & 512 && (ot || a === null || Qt(a, a.return)), a !== null && n & 4 && Sf(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = $l, $l = !1, kt(l, t, e), $l = i, $t(t), n & 512 && (ot || a === null || Qt(a, a.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            _a(l, ""), nt = !0;
          } catch (p) {
            st(t, t.return, p);
          }
        }
        n & 4 && t.stateNode != null && (l = t.memoizedProps, Sf(
          t,
          l,
          a !== null ? a.memoizedProps : l
        )), n & 1024 && (Of = !0);
        break;
      case 6:
        if (kt(l, t, e), $t(t), n & 4) {
          if (t.stateNode === null)
            throw Error(m(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, nt = !0;
          } catch (p) {
            st(t, t.return, p);
          }
        }
        break;
      case 3:
        if (nt = !1, Mu = null, i = Ul, Ul = ti(l.containerInfo), kt(l, t, e), Ul = i, $t(t), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            sn(l.containerInfo);
          } catch (p) {
            st(t, t.return, p);
          }
        Of && (Of = !1, Dd(t)), nt = !1;
        break;
      case 4:
        n = $l, $l = Rt, a = Po(), i = Ul, Ul = ti(
          t.stateNode.containerInfo
        ), kt(l, t, e), $t(t), Ul = i, nt && Ln && (hu = !0), nt = a, $l = n;
        break;
      case 12:
        kt(l, t, e), $t(t);
        break;
      case 31:
        kt(l, t, e), $t(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 13:
        kt(l, t, e), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pu = fl()), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 22:
        i = t.memoizedState !== null, u = a !== null && a.memoizedState !== null;
        var c = Rt, f = ot, g = $l;
        Rt = c || i, $l = g || i, ot = f || u, kt(l, t, e), ot = f, $l = g, Rt = c, $t(t), n & 8192 && (l = t.stateNode, l._visibility = i ? l._visibility & -2 : l._visibility | 1, !i || a === null || u || Rt || ot || (l = u || ot, e = Rt, a = ot, Rt = i || Rt, ot = l, He(t, 2), Rt = e, ot = a), !i && $l || Cf(t, i)), n & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, mu(t, e))));
        break;
      case 19:
        kt(l, t, e), $t(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 30:
        n & 512 && (ot || a === null || Qt(a, a.return)), n = Po(), i = Ln, u = (e & 335544064) === e, c = t.memoizedProps, Ln = u && ce(
          c.default,
          c.update
        ) !== "none", kt(l, t, e), $t(t), u && a !== null && nt && (t.flags |= 4), Ln = i, nt = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (ot || a === null || Qt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        kt(l, t, e), $t(t);
    }
  }
  function $t(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (yd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = t.return; n !== null; ) {
          if (xf(n)) {
            var i = n.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (pf(n)) break;
          n = n.return;
        }
        var u = a;
        if (e == null) throw Error(m(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, f = zf(t);
            ou(
              t,
              f,
              c,
              u
            );
            break;
          case 5:
            var g = e.stateNode;
            e.flags & 32 && (_a(g, ""), e.flags &= -33);
            var p = zf(t);
            ou(
              t,
              p,
              g,
              u
            );
            break;
          case 3:
          case 4:
            var z = e.stateNode.containerInfo, d = zf(t);
            Tf(
              t,
              d,
              z,
              u
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (y) {
        st(t, t.return, y);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Dd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Dd(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, rn = !0, l.reset(), rn = !1), t = t.sibling;
      }
  }
  function Ka(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Ud(l, t), l = l.sibling;
    else wd(l);
  }
  function Ud(t, l) {
    var e = t.alternate;
    if (e === null) wf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Mf = Fl = !1, bd(), Ka(l, t), !Fl && !hu) {
            if (t = Jl, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                e = t[a];
                var n = t[a + 1];
                Sh(e, t[a + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            t = l.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Mf = !0;
          }
          Jl = null;
          break;
        case 5:
          Ka(l, t);
          break;
        case 4:
          a = Fl, Fl = !1, Ka(l, t), Fl && (hu = !0), Fl = a;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? wf(t, !1) : Ka(l, t));
          break;
        case 30:
          a = Fl, n = bd(), Fl = !1, Ka(l, t), Fl && (t.flags |= 4);
          var i = t.memoizedProps, u = t.stateNode;
          l = ue(i, u), u = ue(e.memoizedProps, u);
          var c = ce(i.default, i.update);
          c === "none" ? l = !1 : (i = e.memoizedState, e.memoizedState = null, e = t.child, tl = 0, l = Af(
            t,
            e,
            l,
            u,
            c,
            i,
            !0
          ), tl !== (i === null ? 0 : i.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (Pa(
            t,
            t.memoizedProps.onUpdate
          ), Jl = n) : n !== null && (n.push.apply(n, Jl), Jl = n), Fl = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ka(l, t);
      }
  }
  function Wl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Nd(t, l.alternate, l), l = l.sibling;
  }
  function He(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, a = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Re(4, e, e.return), He(
            e,
            a
          );
          break;
        case 1:
          Qt(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && md(
            e,
            e.return,
            n
          ), He(
            e,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Dh(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Qt(e, e.return), e.tag !== 5 && e.tag !== 27 || Zn(e), He(
            e,
            a
          );
          break;
        case 6:
          Zn(e);
          break;
        case 26:
          Qt(e, e.return), n = e.stateNode, e.memoizedState !== null || n === null || ot || n.parentNode.removeChild(n), He(
            e,
            a
          );
          break;
        case 22:
          e.memoizedState === null && He(
            e,
            a
          );
          break;
        case 30:
          Qt(e, e.return), He(
            e,
            a
          );
          break;
        case 7:
          Qt(e, e.return);
        default:
          He(
            e,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Rl(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, i = l, u = i.flags, c = (e & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Rl(
            n,
            i,
            e
          ), Vn(4, i);
          break;
        case 1:
          if (Rl(
            n,
            i,
            e
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (p) {
              st(a, a.return, p);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  es(g[n], f);
            } catch (p) {
              st(a, a.return, p);
            }
          }
          c && u & 64 && gd(i), Kl(i, i.return);
          break;
        case 27:
          (e & 2) !== 0 && pd(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || vd(i), Rl(
            n,
            i,
            e
          ), c && a === null && u & 4 && bf(i), Kl(i, i.return);
          break;
        case 6:
          vd(i);
          break;
        case 26:
          f = i.stateNode, i.memoizedState !== null || f === null || Rt || yo(
            ti(f.ownerDocument),
            i.type,
            f
          ), Rl(
            n,
            i,
            e
          ), c && a === null && u & 4 && bf(i), Kl(i, i.return);
          break;
        case 12:
          Rl(
            n,
            i,
            e
          );
          break;
        case 31:
          Rl(
            n,
            i,
            e
          ), c && u & 4 && Md(n, i);
          break;
        case 13:
          Rl(
            n,
            i,
            e
          ), c && u & 4 && Cd(n, i);
          break;
        case 22:
          i.memoizedState === null && Rl(
            n,
            i,
            e
          ), Kl(i, i.return);
          break;
        case 30:
          Rl(
            n,
            i,
            e
          ), Kl(i, i.return);
          break;
        case 7:
          Kl(i, i.return);
        default:
          Rl(
            n,
            i,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Df(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Mn(e));
  }
  function Uf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Mn(t));
  }
  function Al(t, l, e, a) {
    var n = (e & 335544064) === e;
    if (l.subtreeFlags & (n ? 10262 : 10256))
      for (l = l.child; l !== null; )
        Rd(
          t,
          l,
          e,
          a
        ), l = l.sibling;
    else n && Td(l);
  }
  function Rd(t, l, e, a) {
    var n = (e & 335544064) === e;
    n && l.alternate === null && l.return !== null && l.return.alternate !== null && du(l);
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(
          t,
          l,
          e,
          a
        ), i & 2048 && Vn(9, l);
        break;
      case 1:
        Al(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Al(
          t,
          l,
          e,
          a
        ), n && Mf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), i & 2048 && (i = null, l.alternate !== null && (i = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== i && (l.refCount++, i != null && Mn(i)));
        break;
      case 12:
        if (i & 2048) {
          Al(
            t,
            l,
            e,
            a
          ), i = l.stateNode;
          try {
            var u = l.memoizedProps, c = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              c,
              l.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (g) {
            st(l, l.return, g);
          }
        } else
          Al(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        Al(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        Al(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, c = l.alternate, l.memoizedState !== null ? (n && c !== null && c.memoizedState === null && du(c), u._visibility & 2 ? Al(
          t,
          l,
          e,
          a
        ) : Kn(
          t,
          l
        )) : (n && c !== null && c.memoizedState !== null && du(l), u._visibility & 2 ? Al(
          t,
          l,
          e,
          a
        ) : (u._visibility |= 2, Ja(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && Df(c, l);
        break;
      case 24:
        Al(
          t,
          l,
          e,
          a
        ), i & 2048 && Uf(l.alternate, l);
        break;
      case 30:
        n && (i = l.alternate, i !== null && (kl(i.child, !0), kl(l.child, !0))), Al(
          t,
          l,
          e,
          a
        );
        break;
      default:
        Al(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ja(t, l, e, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var i = t, u = l, c = e, f = a, g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ja(
            i,
            u,
            c,
            f,
            n
          ), Vn(8, u);
          break;
        case 23:
          break;
        case 22:
          var p = u.stateNode;
          u.memoizedState !== null ? p._visibility & 2 ? Ja(
            i,
            u,
            c,
            f,
            n
          ) : Kn(
            i,
            u
          ) : (p._visibility |= 2, Ja(
            i,
            u,
            c,
            f,
            n
          )), n && g & 2048 && Df(
            u.alternate,
            u
          );
          break;
        case 24:
          Ja(
            i,
            u,
            c,
            f,
            n
          ), n && g & 2048 && Uf(u.alternate, u);
          break;
        default:
          Ja(
            i,
            u,
            c,
            f,
            n
          );
      }
      l = l.sibling;
    }
  }
  function Kn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            Kn(e, a), n & 2048 && Df(
              a.alternate,
              a
            );
            break;
          case 24:
            Kn(e, a), n & 2048 && Uf(a.alternate, a);
            break;
          default:
            Kn(e, a);
        }
        l = l.sibling;
      }
  }
  var ma = 8192;
  function va(t, l, e) {
    if (t.subtreeFlags & ma)
      for (t = t.child; t !== null; )
        Hd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Hd(t, l, e) {
    switch (t.tag) {
      case 26:
        va(
          t,
          l,
          e
        ), t.flags & ma && (t.memoizedState !== null ? fv(
          e,
          Ul,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && Vh(e, t)));
        break;
      case 5:
        va(
          t,
          l,
          e
        ), t.flags & ma && (t = t.stateNode, (l & 335544128) === l && Vh(e, t));
        break;
      case 3:
      case 4:
        var a = Ul;
        Ul = ti(t.stateNode.containerInfo), va(
          t,
          l,
          e
        ), Ul = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ma, ma = 16777216, va(
          t,
          l,
          e
        ), ma = a) : va(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & ma) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var n = t.stateNode;
          n.paired = null, gl === null && (gl = /* @__PURE__ */ new Map()), gl.set(a, n);
        }
        va(
          t,
          l,
          e
        );
        break;
      default:
        va(
          t,
          l,
          e
        );
    }
  }
  function qd(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Jn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Ht = a, Yd(
            a,
            t
          );
        }
      qd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bd(t), t = t.sibling;
  }
  function Bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Jn(t), t.flags & 2048 && Re(9, t, t.return);
        break;
      case 3:
        Jn(t);
        break;
      case 12:
        Jn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, vu(t)) : Jn(t);
        break;
      default:
        Jn(t);
    }
  }
  function vu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Ht = a, Yd(
            a,
            t
          );
        }
      qd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Re(8, l, l.return), vu(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, vu(l));
          break;
        default:
          vu(l);
      }
      t = t.sibling;
    }
  }
  function Yd(t, l) {
    for (; Ht !== null; ) {
      var e = Ht;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Re(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Mn(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Ht = a;
      else
        t: for (e = t; Ht !== null; ) {
          a = Ht;
          var n = a.sibling, i = a.return;
          if (Ad(a), a === e) {
            Ht = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Ht = n;
            break t;
          }
          Ht = i;
        }
    }
  }
  var a0 = {
    getCacheForType: function(t) {
      var l = Yt(_t), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Yt(_t).controller.signal;
    }
  }, n0 = typeof WeakMap == "function" ? WeakMap : Map, ct = 0, vt = null, W = null, P = 0, rt = 0, ml = null, qe = !1, ka = !1, Rf = !1, ve = 0, Et = 0, Be = 0, ya = 0, yu = 0, vl = 0, $a = 0, kn = null, el = null, Hf = !1, pu = 0, Gd = 0, xu = 1 / 0, bu = null, Ye = null, zt = 0, Hl = null, pa = null, Il = 0, qf = 0, Bf = null, Xd = null, Fa = null, Wa = null, Ia = null, $n = 0, Su = null;
  function yl() {
    return (ct & 2) !== 0 && P !== 0 ? P & -P : j.T !== null ? kf() : Zo();
  }
  function Qd() {
    if (vl === 0)
      if ((P & 536870912) === 0 || $) {
        var t = mi;
        mi <<= 1, (mi & 3932160) === 0 && (mi = 262144), vl = t;
      } else vl = 536870912;
    return t = Gt.current, t !== null && (t.flags |= 32), vl;
  }
  function Pa(t, l) {
    if (l != null) {
      var e = t.stateNode, a = e.ref;
      a === null && (a = e.ref = zh(
        ue(t.memoizedProps, e)
      )), Wa === null && (Wa = []), Wa.push(l.bind(null, a));
    }
  }
  function al(t, l, e) {
    (t === vt && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null) && (tn(t, 0), Ge(
      t,
      P,
      vl,
      !1
    )), vn(t, e), ((ct & 2) === 0 || t !== vt) && (t === vt && ((ct & 2) === 0 && (ya |= e), Et === 4 && Ge(
      t,
      P,
      vl,
      !1
    )), Pl(t));
  }
  function Vd(t, l, e) {
    if ((ct & 6) !== 0) throw Error(m(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || mn(t, l), n = a ? c0(t, l) : Gf(t, l, !0), i = a;
    do {
      if (n === 0) {
        ka && !a && Ge(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, i && !i0(e)) {
          n = Gf(t, l, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = l, t.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = t.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            l = u;
            t: {
              var c = t;
              n = kn;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (tn(c, u).flags |= 256), u = Gf(
                c,
                u,
                !1
              ), u !== 2 && u !== 6) {
                if (Rf && !f) {
                  c.errorRecoveryDisabledLanes |= i, ya |= i, n = 4;
                  break t;
                }
                i = el, el = n, i !== null && (el === null ? el = i : el.push.apply(
                  el,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          tn(t, 0), Ge(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              Ge(
                a,
                l,
                vl,
                !qe
              );
              break t;
            case 2:
              el = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((l & 62914560) === l && (n = pu + 300 - fl(), 10 < n)) {
            if (Ge(
              a,
              l,
              vl,
              !qe
            ), yi(a, 0, !0) !== 0) break t;
            Il = l, a.timeoutHandle = io(
              Zd.bind(
                null,
                a,
                e,
                el,
                bu,
                Hf,
                l,
                vl,
                ya,
                $a,
                qe,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Zd(
            a,
            e,
            el,
            bu,
            Hf,
            l,
            vl,
            ya,
            $a,
            qe,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pl(t);
  }
  function Zd(t, l, e, a, n, i, u, c, f, g, p, z, d, y) {
    t.timeoutHandle = -1;
    var E = l.subtreeFlags, M = (i & 335544064) === i;
    if (z = null, (M || E & 8192 || (E & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Vl
    }, gl = null, Hd(
      l,
      i,
      z
    ), M && (E = z, M = t.containerInfo, M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition, M != null && (E.count++, E.waitingForViewTransition = !0, E = ai.bind(E), M.finished.then(E, E))), E = (i & 62914560) === i ? pu - fl() : (i & 4194048) === i ? Gd - fl() : 0, E = ov(
      z,
      E
    ), E !== null)) {
      Il = i, t.cancelPendingCommit = E(
        Id.bind(
          null,
          t,
          l,
          i,
          e,
          a,
          n,
          u,
          c,
          f,
          g,
          p,
          z,
          null,
          d,
          y
        )
      ), Ge(t, i, u, !g);
      return;
    }
    Id(
      t,
      l,
      i,
      e,
      a,
      n,
      u,
      c,
      f,
      g,
      p,
      z
    );
  }
  function i0(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!dl(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Ge(t, l, e, a) {
    l = Yo(t, l), l &= ~yu, l &= ~ya, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var i = 31 - rl(n), u = 1 << i;
      a[i] = -1, n &= ~u;
    }
    e !== 0 && Xo(t, e, l);
  }
  function zu() {
    return (ct & 6) === 0 ? (Fn(0), !1) : !0;
  }
  function Yf() {
    if (W !== null) {
      if (rt === 0)
        var t = W.return;
      else
        t = W, re = ia = null, Kc(t), Ga = null, Dn = 0, t = W;
      for (; t !== null; )
        hd(t.alternate, t), t = t.return;
      W = null;
    }
  }
  function tn(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, O0(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Il = 0, Yf(), vt = t, W = e = fe(t.current, null), P = l, rt = 0, ml = null, qe = !1, ka = mn(t, l), Rf = !1, $a = vl = yu = ya = Be = Et = 0, el = kn = null, Hf = !1, ve = Yo(t, l), Mi(), e;
  }
  function Ld(t, l) {
    L = null, j.H = lu, l === Ya || l === Xi ? (l = Ir(), rt = 3) : l === Dc ? (l = Ir(), rt = 4) : rt = l === ff ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ml = l, W === null && (Et = 1, eu(
      t,
      wl(l, t.current)
    ));
  }
  function Kd() {
    var t = Gt.current;
    return t === null ? !0 : (P & 4194048) === P ? Lt === null : (P & 62914560) === P || (P & 536870912) !== 0 ? t === Lt : !1;
  }
  function Jd() {
    var t = j.H;
    return j.H = lu, t === null ? lu : t;
  }
  function kd() {
    var t = j.A;
    return j.A = a0, t;
  }
  function Tu() {
    Et = 4, qe || (P & 4194048) !== P && Gt.current !== null || (ka = !0), (Be & 134217727) === 0 && (ya & 134217727) === 0 || vt === null || Ge(
      vt,
      P,
      vl,
      !1
    );
  }
  function Gf(t, l, e) {
    var a = ct;
    ct |= 2;
    var n = Jd(), i = kd();
    (vt !== t || P !== l) && (bu = null, tn(t, l)), l = !1;
    var u = Et;
    t: do
      try {
        if (rt !== 0 && W !== null) {
          var c = W, f = ml;
          switch (rt) {
            case 8:
              Yf(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (l = !0);
              var g = rt;
              if (rt = 0, ml = null, ln(t, c, f, g), e && ka) {
                u = 0;
                break t;
              }
              break;
            default:
              g = rt, rt = 0, ml = null, ln(t, c, f, g);
          }
        }
        u0(), u = Et;
        break;
      } catch (p) {
        Ld(t, p);
      }
    while (!0);
    return l && t.shellSuspendCounter++, re = ia = null, ct = a, j.H = n, j.A = i, W === null && (vt = null, P = 0, Mi()), u;
  }
  function u0() {
    for (; W !== null; ) $d(W);
  }
  function c0(t, l) {
    var e = ct;
    ct |= 2;
    var a = Jd(), n = kd();
    vt !== t || P !== l ? (bu = null, xu = fl() + 500, tn(t, l)) : ka = mn(
      t,
      l
    );
    t: do
      try {
        if (rt !== 0 && W !== null) {
          l = W;
          var i = ml;
          l: switch (rt) {
            case 1:
              rt = 0, ml = null, ln(t, l, i, 1);
              break;
            case 2:
            case 9:
              if (Fr(i)) {
                rt = 0, ml = null, Fd(l);
                break;
              }
              l = function() {
                rt !== 2 && rt !== 9 || vt !== t || (rt = 7), Pl(t);
              }, i.then(l, l);
              break t;
            case 3:
              rt = 7;
              break t;
            case 4:
              rt = 5;
              break t;
            case 7:
              Fr(i) ? (rt = 0, ml = null, Fd(l)) : (rt = 0, ml = null, ln(t, l, i, 7));
              break;
            case 5:
              var u = null;
              switch (W.tag) {
                case 26:
                  u = W.memoizedState;
                case 5:
                case 27:
                  var c = W;
                  if (u ? Xh(u) : c.stateNode.complete) {
                    rt = 0, ml = null;
                    var f = c.sibling;
                    if (f !== null) W = f;
                    else {
                      var g = c.return;
                      g !== null ? (W = g, wu(g)) : W = null;
                    }
                    break l;
                  }
              }
              rt = 0, ml = null, ln(t, l, i, 5);
              break;
            case 6:
              rt = 0, ml = null, ln(t, l, i, 6);
              break;
            case 8:
              Yf(), Et = 6;
              break t;
            default:
              throw Error(m(462));
          }
        }
        f0();
        break;
      } catch (p) {
        Ld(t, p);
      }
    while (!0);
    return re = ia = null, j.H = a, j.A = n, ct = e, W !== null ? 0 : (vt = null, P = 0, Mi(), Et);
  }
  function f0() {
    for (; W !== null && !Eg(); )
      $d(W);
  }
  function $d(t) {
    var l = sd(t.alternate, t, ve);
    t.memoizedProps = t.pendingProps, l === null ? wu(t) : W = l;
  }
  function Fd(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = nd(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          P
        );
        break;
      case 11:
        l = nd(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          P
        );
        break;
      case 5:
        Kc(l);
        var a = l;
        a === Ut && ($ ? (Hi(a), a.tag === 5 && a.stateNode != null && (xt = a.stateNode)) : (Hi(a), $ = !0));
      default:
        hd(e, l), l = W = Yr(l, ve), l = sd(e, l, ve);
    }
    t.memoizedProps = t.pendingProps, l === null ? wu(t) : W = l;
  }
  function ln(t, l, e, a) {
    re = ia = null, Kc(l), Ga = null, Dn = 0;
    var n = l.return;
    try {
      if ($m(
        t,
        n,
        l,
        e,
        P
      )) {
        Et = 1, eu(
          t,
          wl(e, t.current)
        ), W = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw W = n, i;
      Et = 1, eu(
        t,
        wl(e, t.current)
      ), W = null;
      return;
    }
    l.flags & 32768 ? ($ || a === 1 ? t = !0 : ka || (P & 536870912) !== 0 ? t = !1 : (qe = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Wd(l, t)) : wu(l);
  }
  function wu(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Wd(
          l,
          qe
        );
        return;
      }
      t = l.return;
      var e = Pm(
        l.alternate,
        l,
        ve
      );
      if (e !== null) {
        W = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        W = l;
        return;
      }
      W = l = t;
    } while (l !== null);
    Et === 0 && (Et = 5);
  }
  function Wd(t, l) {
    do {
      var e = t0(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, W = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        W = t;
        return;
      }
      W = t = e;
    } while (t !== null);
    Et = 6, W = null;
  }
  function Id(t, l, e, a, n, i, u, c, f, g, p, z) {
    t.cancelPendingCommit = null;
    do
      Eu();
    while (zt !== 0);
    if ((ct & 6) !== 0) throw Error(m(327));
    if (l !== null) {
      if (l === t.current) throw Error(m(177));
      t === vt && (W = vt = null, P = 0), pa = l, Hl = t, Il = e, Bf = n, Xd = a, o0(
        t,
        l,
        e,
        u,
        c,
        f,
        z
      );
    }
  }
  function o0(t, l, e, a, n, i, u) {
    var c = l.lanes | l.childLanes;
    if (qf = c, c |= bc, Rg(
      t,
      e,
      c,
      a,
      n,
      i
    ), Wa = null, (e & 335544064) === e ? (Ia = qm(t), a = 10262) : (Ia = null, a = 10256), (l.subtreeFlags & a) !== 0 || (l.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, m0(hi, function() {
      return Zf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), ru = !1, a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
      a = j.T, j.T = null, n = X.p, X.p = 2, i = ct, ct |= 4;
      try {
        l0(t, l, e);
      } finally {
        ct = i, X.p = n, j.T = a;
      }
    }
    zt = 1, ru ? Fa = R0(
      u,
      t.containerInfo,
      Ia,
      Xf,
      Qf,
      s0,
      Vf,
      Zf,
      r0
    ) : (Xf(), Qf(), Vf());
  }
  function r0(t) {
    if (zt !== 0) {
      var l = Hl.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function s0() {
    zt === 3 && (zt = 0, Ud(pa, Hl), zt = 4);
  }
  function Xf() {
    if (zt === 1) {
      zt = 0;
      var t = Hl, l = pa, e = Il, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var n = X.p;
        X.p = 2;
        var i = ct;
        ct |= 4;
        try {
          Ln = hu = !1, jd(l, t, e), e = eo;
          var u = Or(t.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (u !== c && c && c.ownerDocument && Ar(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && mc(c)) {
              var g = f.start, p = f.end;
              if (p === void 0 && (p = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  p,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, d = z && z.defaultView || window;
                if (d.getSelection) {
                  var y = d.getSelection(), E = c.textContent.length, M = Math.min(f.start, E), K = f.end === void 0 ? M : Math.min(f.end, E);
                  !y.extend && M > K && (u = K, K = M, M = u);
                  var h = _r(
                    c,
                    M
                  ), o = _r(
                    c,
                    K
                  );
                  if (h && o && (y.rangeCount !== 1 || y.anchorNode !== h.node || y.anchorOffset !== h.offset || y.focusNode !== o.node || y.focusOffset !== o.offset)) {
                    var v = z.createRange();
                    v.setStart(h.node, h.offset), y.removeAllRanges(), M > K ? (y.addRange(v), y.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), y.addRange(v));
                  }
                }
              }
            }
            for (z = [], y = c; y = y.parentNode; )
              y.nodeType === 1 && z.push({
                element: y,
                left: y.scrollLeft,
                top: y.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var S = z[c];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          rn = !!lo, eo = lo = null;
        } finally {
          ct = i, X.p = n, j.T = a;
        }
      }
      t.current = l, zt = 2;
    }
  }
  function Qf() {
    if (zt === 2) {
      zt = 0;
      var t = Hl, l = pa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var a = X.p;
        X.p = 2;
        var n = ct;
        ct |= 4;
        try {
          Nd(t, l.alternate, l);
        } finally {
          ct = n, X.p = a, j.T = e;
        }
      }
      zt = 3;
    }
  }
  function Vf() {
    if (zt === 4 || zt === 3) {
      zt = 0;
      var t = Fa;
      Fa = null, Ng();
      var l = Hl, e = pa, a = Il, n = Xd, i = (a & 335544064) === a ? 10262 : 10256;
      if ((e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? zt = 5 : (zt = 0, pa = Hl = null, Pd(l, l.pendingLanes)), i = l.pendingLanes, i === 0 && (Ye = null), Wu(a), e = e.stateNode, ol && typeof ol.onCommitFiberRoot == "function")
        try {
          ol.onCommitFiberRoot(
            gn,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = j.T, i = X.p, X.p = 2, j.T = null;
        try {
          for (var u = l.onRecoverableError, c = 0; c < n.length; c++) {
            var f = n[c];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          j.T = e, X.p = i;
        }
      }
      if (n = Wa, u = Ia, Ia = null, n !== null && (Wa = null, u === null && (u = []), t !== null))
        for (f = 0; f < n.length; f++)
          e = (0, n[f])(
            u
          ), e !== void 0 && t.finished.finally(e);
      (Il & 3) !== 0 && Eu(), Pl(l), i = l.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? l === Su ? $n++ : ($n = 0, Su = l) : ($n = 0, Su = null), Fn(0);
    }
  }
  function Pd(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Mn(l)));
  }
  function Eu() {
    return Fa !== null && (Fa.skipTransition(), Fa = null), Xf(), Qf(), Vf(), Zf();
  }
  function Zf() {
    if (zt !== 5) return !1;
    var t = Hl, l = qf;
    qf = 0;
    var e = Wu(Il), a = j.T, n = X.p;
    try {
      X.p = 32 > e ? 32 : e, j.T = null, e = Bf, Bf = null;
      var i = Hl, u = Il;
      if (zt = 0, pa = Hl = null, Il = 0, (ct & 6) !== 0) throw Error(m(331));
      var c = ct;
      if (ct |= 4, Bd(i.current), Rd(
        i,
        i.current,
        u,
        e
      ), ct = c, Fn(0, !1), ol && typeof ol.onPostCommitFiberRoot == "function")
        try {
          ol.onPostCommitFiberRoot(gn, i);
        } catch {
        }
      return !0;
    } finally {
      X.p = n, j.T = a, Pd(t, l);
    }
  }
  function th(t, l, e) {
    l = wl(e, l), l = cf(t.stateNode, l, 2), t = Ce(t, l, 2), t !== null && (vn(t, 2), Pl(t));
  }
  function st(t, l, e) {
    if (t.tag === 3)
      th(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          th(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ye === null || !Ye.has(a))) {
            t = wl(e, t), e = Fs(2), a = Ce(l, e, 2), a !== null && (Ws(
              e,
              a,
              l,
              t
            ), vn(a, 2), Pl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Lf(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new n0();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Rf = !0, n.add(e), t = d0.bind(null, t, l, e), l.then(t, t));
  }
  function d0(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, vt === t && (P & e) === e && ((Et === 4 || Et === 3 && (P & 62914560) === P && 300 > fl() - pu) && (ct & 2) === 0 ? tn(t, 0) : yu |= e, $a === P && ($a = 0)), Pl(t);
  }
  function lh(t, l) {
    l === 0 && (l = Go()), t = ea(t, l), t !== null && (vn(t, l), Pl(t));
  }
  function h0(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), lh(t, e);
  }
  function g0(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(l), lh(t, e);
  }
  function m0(t, l) {
    return Ju(t, l);
  }
  var en = null, an = null, Kf = !1, Nu = !1, Jf = !1, Xe = 0;
  function Pl(t) {
    t !== an && t.next === null && (an === null ? en = an = t : an = an.next = t), Nu = !0, Kf || (Kf = !0, y0());
  }
  function Fn(t, l) {
    if (!Jf && Nu) {
      Jf = !0;
      do
        for (var e = !1, a = en; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes, c = a.pingedLanes;
              i = (1 << 31 - rl(42 | t) + 1) - 1, i &= n & ~(u & ~c), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (e = !0, ih(a, i));
          } else
            i = P, i = yi(
              a,
              a === vt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || mn(a, i) || (e = !0, ih(a, i));
          a = a.next;
        }
      while (e);
      Jf = !1;
    }
  }
  function v0() {
    eh();
  }
  function eh() {
    Nu = Kf = !1;
    var t = 0;
    Xe !== 0 && A0() && (t = Xe);
    for (var l = fl(), e = null, a = en; a !== null; ) {
      var n = a.next, i = ah(a, l);
      i === 0 ? (a.next = null, e === null ? en = n : e.next = n, n === null && (an = e)) : (e = a, (t !== 0 || (i & 3) !== 0) && (Nu = !0)), a = n;
    }
    zt !== 0 && zt !== 5 || Fn(t), Xe !== 0 && (Xe = 0);
  }
  function ah(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rl(i), c = 1 << u, f = n[u];
      f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[u] = Ug(c, l)) : f <= l && (t.expiredLanes |= c), i &= ~c;
    }
    if (l = vt, e = P, e = yi(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && ku(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || mn(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && ku(a), Wu(e)) {
        case 2:
        case 8:
          e = qo;
          break;
        case 32:
          e = hi;
          break;
        case 268435456:
          e = Bo;
          break;
        default:
          e = hi;
      }
      return a = nh.bind(null, t), e = Ju(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && ku(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function nh(t, l) {
    if (zt !== 0 && zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Eu() && t.callbackNode !== e)
      return null;
    var a = P;
    return a = yi(
      t,
      t === vt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Vd(t, a, l), ah(t, fl()), t.callbackNode != null && t.callbackNode === e ? nh.bind(null, t) : null);
  }
  function ih(t, l) {
    if (Eu()) return null;
    Vd(t, l, !0);
  }
  function y0() {
    M0(function() {
      (ct & 6) !== 0 ? Ju(
        Ho,
        v0
      ) : eh();
    });
  }
  function kf() {
    if (Xe === 0) {
      var t = fa;
      t === 0 && (t = gi, gi <<= 1, (gi & 261888) === 0 && (gi = 256)), Xe = t;
    }
    return Xe;
  }
  function uh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zi(t);
  }
  function p0(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var i = uh(
        (n[It] || null).action
      ), u = a.submitter;
      u && (l = (l = u[It] || null) ? uh(l.formAction) : u.getAttribute("formAction"), l !== null && (i = l, u = null));
      var c = new Ni(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Xe !== 0) {
                  var f = new FormData(n, u);
                  lf(
                    e,
                    {
                      pending: !0,
                      data: f,
                      method: n.method,
                      action: i
                    },
                    null,
                    f
                  );
                }
              } else
                typeof i == "function" && (c.preventDefault(), f = new FormData(n, u), lf(
                  e,
                  {
                    pending: !0,
                    data: f,
                    method: n.method,
                    action: i
                  },
                  i,
                  f
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var $f = 0; $f < xc.length; $f++) {
    var Ff = xc[$f], x0 = Ff.toLowerCase(), b0 = Ff[0].toUpperCase() + Ff.slice(1);
    jl(
      x0,
      "on" + b0
    );
  }
  jl(jr, "onAnimationEnd"), jl(Dr, "onAnimationIteration"), jl(Ur, "onAnimationStart"), jl("dblclick", "onDoubleClick"), jl("focusin", "onFocus"), jl("focusout", "onBlur"), jl(Om, "onTransitionRun"), jl(Mm, "onTransitionStart"), jl(Cm, "onTransitionCancel"), jl(Rr, "onTransitionEnd"), Ea("onMouseEnter", ["mouseout", "mouseover"]), Ea("onMouseLeave", ["mouseout", "mouseover"]), Ea("onPointerEnter", ["pointerout", "pointerover"]), Ea("onPointerLeave", ["pointerout", "pointerover"]), Pe(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Pe(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Pe("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Pe(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Pe(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Pe(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), S0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wn)
  );
  function ch(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (l)
          for (var u = a.length - 1; 0 <= u; u--) {
            var c = a[u], f = c.instance, g = c.currentTarget;
            if (c = c.listener, f !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = g;
            try {
              i(n);
            } catch (p) {
              Oi(p);
            }
            n.currentTarget = null, i = f;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (c = a[u], f = c.instance, g = c.currentTarget, c = c.listener, f !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = g;
            try {
              i(n);
            } catch (p) {
              Oi(p);
            }
            n.currentTarget = null, i = f;
          }
      }
    }
  }
  function I(t, l) {
    var e = l[Ko];
    e === void 0 && (e = l[Ko] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (fh(l, t, 2, !1), e.add(a));
  }
  function Wf(t, l, e) {
    var a = 0;
    l && (a |= 4), fh(
      e,
      t,
      a,
      l
    );
  }
  var _u = "_reactListening" + Math.random().toString(36).slice(2);
  function If(t) {
    if (!t[_u]) {
      t[_u] = !0, $o.forEach(function(e) {
        e !== "selectionchange" && (S0.has(e) || Wf(e, !1, t), Wf(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[_u] || (l[_u] = !0, Wf("selectionchange", !1, l));
    }
  }
  function fh(t, l, e, a) {
    switch (Wh(l)) {
      case 2:
        var n = hv;
        break;
      case 8:
        n = gv;
        break;
      default:
        n = xo;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !ic || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function Pf(t, l, e, a, n) {
    var i = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var f = u.tag;
              if ((f === 3 || f === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (u = Ie(c), u === null) return;
            if (f = u.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              a = i = u;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    fr(function() {
      var g = i, p = ac(e), z = [];
      t: {
        var d = Hr.get(t);
        if (d !== void 0) {
          var y = Ni, E = t;
          switch (t) {
            case "keypress":
              if (wi(e) === 0) break t;
            case "keydown":
            case "keyup":
              y = im;
              break;
            case "focusin":
              E = "focus", y = oc;
              break;
            case "focusout":
              E = "blur", y = oc;
              break;
            case "beforeblur":
            case "afterblur":
              y = oc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = sr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = rm;
              break;
            case jr:
            case Dr:
            case Ur:
              y = Fg;
              break;
            case Rr:
              y = dm;
              break;
            case "scroll":
            case "scrollend":
              y = Lg;
              break;
            case "wheel":
              y = gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Ig;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = hr;
              break;
            case "submit":
              y = fm;
              break;
            case "toggle":
            case "beforetoggle":
              y = vm;
          }
          var M = (l & 4) !== 0, K = !M && (t === "scroll" || t === "scrollend"), h = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var o = g, v; o !== null; ) {
            var S = o;
            if (v = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || v === null || h === null || (S = xn(o, h), S != null && M.push(
              In(o, S, v)
            )), K) break;
            o = o.return;
          }
          0 < M.length && (d = new y(
            d,
            E,
            null,
            e,
            p
          ), z.push({ event: d, listeners: M }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (y = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", y && e !== ec && (E = e.relatedTarget || e.fromElement) && (Ie(E) || E[za]))
            break t;
          (d || y) && (E = p.window === p ? p : (y = p.ownerDocument) ? y.defaultView || y.parentWindow : window, d ? (y = e.relatedTarget || e.toElement, d = g, y = y ? Ie(y) : null, y !== null && (K = Z(y), M = y.tag, y !== K || M !== 5 && M !== 27 && M !== 6) && (y = null)) : (d = null, y = g), d !== y && (M = sr, S = "onMouseLeave", h = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (M = hr, S = "onPointerLeave", h = "onPointerEnter", o = "pointer"), K = d == null ? E : pn(d), v = y == null ? E : pn(y), E = new M(
            S,
            o + "leave",
            d,
            e,
            p
          ), E.target = K, E.relatedTarget = v, S = null, Ie(p) === g && (M = new M(
            h,
            o + "enter",
            y,
            e,
            p
          ), M.target = v, M.relatedTarget = K, S = M), K = S, M = d && y ? ul(
            d,
            y,
            z0
          ) : null, d !== null && oh(
            z,
            E,
            d,
            M,
            !1
          ), y !== null && K !== null && oh(
            z,
            K,
            y,
            M,
            !0
          )));
        }
        t: {
          if (d = g ? pn(g) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
            var A = Sr;
          else if (xr(d))
            if (zr)
              A = Nm;
            else {
              A = wm;
              var tt = Tm;
            }
          else
            y = d.nodeName, !y || y.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? g && lc(g.elementType) && (A = Sr) : A = Em;
          if (A && (A = A(t, g))) {
            br(
              z,
              A,
              e,
              p
            );
            break t;
          }
          tt && tt(t, d, g);
        }
        switch (tt = g ? pn(g) : window, t) {
          case "focusin":
            (xr(tt) || tt.contentEditable === "true") && (Ca = tt, vc = g, _n = null);
            break;
          case "focusout":
            _n = vc = Ca = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Mr(z, e, p);
            break;
          case "selectionchange":
            if (Am) break;
          case "keydown":
          case "keyup":
            Mr(z, e, p);
        }
        var D;
        if (sc)
          t: {
            switch (t) {
              case "compositionstart":
                var q = "onCompositionStart";
                break t;
              case "compositionend":
                q = "onCompositionEnd";
                break t;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break t;
            }
            q = void 0;
          }
        else
          Ma ? yr(t, e) && (q = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (q = "onCompositionStart");
        q && (gr && e.locale !== "ko" && (Ma || q !== "onCompositionStart" ? q === "onCompositionEnd" && Ma && (D = or()) : (ze = p, uc = "value" in ze ? ze.value : ze.textContent, Ma = !0)), tt = Au(g, q), 0 < tt.length && (q = new dr(
          q,
          t,
          null,
          e,
          p
        ), z.push({ event: q, listeners: tt }), D ? q.data = D : (D = pr(e), D !== null && (q.data = D)))), (D = pm ? xm(t, e) : bm(t, e)) && (q = Au(g, "onBeforeInput"), 0 < q.length && (tt = new dr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          p
        ), z.push({
          event: tt,
          listeners: q
        }), tt.data = D)), p0(
          z,
          t,
          g,
          e,
          p
        );
      }
      ch(z, l);
    });
  }
  function In(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Au(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = xn(t, e), n != null && a.unshift(
        In(t, n, i)
      ), n = xn(t, l), n != null && a.push(
        In(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function z0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function oh(t, l, e, a, n) {
    for (var i = l._reactName, u = []; e !== null && e !== a; ) {
      var c = e, f = c.alternate, g = c.stateNode;
      if (c = c.tag, f !== null && f === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (f = g, n ? (g = xn(e, i), g != null && u.unshift(
        In(e, g, f)
      )) : n || (g = xn(e, i), g != null && u.push(
        In(e, g, f)
      ))), e = e.return;
    }
    u.length !== 0 && t.push({ event: l, listeners: u });
  }
  var T0 = /\r\n?/g, w0 = /\u0000|\uFFFD/g;
  function rh(t) {
    return (typeof t == "string" ? t : "" + t).replace(T0, `
`).replace(w0, "");
  }
  function sh(t, l) {
    return l = rh(l), rh(t) === l;
  }
  function dt(t, l, e, a, n, i) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          l === "body" || l === "textarea" && a === "" || _a(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          l !== "body" && _a(t, "" + a);
        else return;
        break;
      case "className":
        Si(t, "class", a);
        break;
      case "tabIndex":
        Si(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Si(t, e, a);
        break;
      case "style":
        ur(t, a, i);
        return;
      case "data":
        if (l !== "object") {
          Si(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = zi(a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (e === "formAction" ? (l !== "input" && dt(t, l, "name", n.name, n, null), dt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), dt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), dt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (dt(t, l, "encType", n.encType, n, null), dt(t, l, "method", n.method, n, null), dt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = zi(a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Vl);
        return;
      case "onScroll":
        a != null && I("scroll", t);
        return;
      case "onScrollEnd":
        a != null && I("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(m(60));
            (i != null ? i.__html : void 0) !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = zi(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        I("beforetoggle", t), I("toggle", t), bi(t, "popover", a);
        break;
      case "xlinkActuate":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        bi(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = Vg.get(e) || e, bi(t, e, a);
        else return;
    }
    nt = !0;
  }
  function to(t, l, e, a, n, i) {
    switch (e) {
      case "style":
        ur(t, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(m(60));
            (i != null ? i.__html : void 0) !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") _a(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          _a(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && I("scroll", t);
        return;
      case "onScrollEnd":
        a != null && I("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Vl);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Fo.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), i = e.slice(2, n ? e.length - 7 : void 0), l = t[It] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(i, l, n), typeof a == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(i, a, n);
              break t;
            }
            nt = !0, e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : bi(t, e, a);
          }
        return;
    }
    nt = !0;
  }
  function Vt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", t), I("load", t);
        var a = !1, n = !1, i;
        for (i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, l));
                default:
                  dt(t, l, i, u, e, null);
              }
          }
        n && dt(t, l, "srcSet", e.srcSet, e, null), a && dt(t, l, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", t);
        var c = i = u = n = null, f = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var p = e[a];
            if (p != null)
              switch (a) {
                case "name":
                  n = p;
                  break;
                case "type":
                  u = p;
                  break;
                case "checked":
                  f = p;
                  break;
                case "defaultChecked":
                  g = p;
                  break;
                case "value":
                  i = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(m(137, l));
                  break;
                default:
                  dt(t, l, a, p, e, null);
              }
          }
        er(
          t,
          i,
          c,
          f,
          g,
          u,
          n,
          !1
        );
        return;
      case "select":
        I("invalid", t), a = u = i = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                i = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "multiple":
                a = c;
              default:
                dt(t, l, n, c, e, null);
            }
        l = i, e = u, t.multiple = !!a, l != null ? Na(t, !!a, l, !1) : e != null && Na(t, !!a, e, !0);
        return;
      case "textarea":
        I("invalid", t), i = n = a = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                i = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                dt(t, l, u, c, e, null);
            }
        nr(t, a, n, i);
        return;
      case "option":
        for (f in e)
          if (e.hasOwnProperty(f) && (a = e[f], a != null))
            switch (f) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                dt(t, l, f, a, e, null);
            }
        return;
      case "dialog":
        I("beforetoggle", t), I("toggle", t), I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Wn.length; a++)
          I(Wn[a], t);
        break;
      case "image":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", t), I("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, l));
              default:
                dt(t, l, g, a, e, null);
            }
        return;
      default:
        if (lc(l)) {
          for (p in e)
            e.hasOwnProperty(p) && (a = e[p], a !== void 0 && to(
              t,
              l,
              p,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && dt(t, l, c, a, e, null));
  }
  var E0 = {};
  function N0(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, u = null, c = null, f = null, g = null, p = null;
        for (y in e) {
          var z = e[y];
          if (e.hasOwnProperty(y) && z != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                a.hasOwnProperty(y) || dt(t, l, y, null, a, z);
            }
        }
        for (var d in a) {
          var y = a[d];
          if (z = e[d], a.hasOwnProperty(d) && (y != null || z != null))
            switch (d) {
              case "type":
                y !== z && (nt = !0), i = y;
                break;
              case "name":
                y !== z && (nt = !0), n = y;
                break;
              case "checked":
                y !== z && (nt = !0), g = y;
                break;
              case "defaultChecked":
                y !== z && (nt = !0), p = y;
                break;
              case "value":
                y !== z && (nt = !0), u = y;
                break;
              case "defaultValue":
                y !== z && (nt = !0), c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(m(137, l));
                break;
              default:
                y !== z && dt(
                  t,
                  l,
                  d,
                  y,
                  a,
                  z
                );
            }
        }
        Pu(
          t,
          u,
          c,
          f,
          g,
          p,
          i,
          n
        );
        return;
      case "select":
        y = u = c = d = null;
        for (i in e)
          if (f = e[i], e.hasOwnProperty(i) && f != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                y = f;
              default:
                a.hasOwnProperty(i) || dt(
                  t,
                  l,
                  i,
                  null,
                  a,
                  f
                );
            }
        for (n in a)
          if (i = a[n], f = e[n], a.hasOwnProperty(n) && (i != null || f != null))
            switch (n) {
              case "value":
                i !== f && (nt = !0), d = i;
                break;
              case "defaultValue":
                i !== f && (nt = !0), c = i;
                break;
              case "multiple":
                i !== f && (nt = !0), u = i;
              default:
                i !== f && dt(
                  t,
                  l,
                  n,
                  i,
                  a,
                  f
                );
            }
        l = c, e = u, a = y, d != null ? Na(t, !!e, d, !1) : !!a != !!e && (l != null ? Na(t, !!e, l, !0) : Na(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        y = d = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                dt(t, l, c, null, a, n);
            }
        for (u in a)
          if (n = a[u], i = e[u], a.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                n !== i && (nt = !0), d = n;
                break;
              case "defaultValue":
                n !== i && (nt = !0), y = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(m(91));
                break;
              default:
                n !== i && dt(t, l, u, n, a, i);
            }
        ar(t, d, y);
        return;
      case "option":
        for (var E in e)
          if (d = e[E], e.hasOwnProperty(E) && d != null && !a.hasOwnProperty(E))
            switch (E) {
              case "selected":
                t.selected = !1;
                break;
              default:
                dt(
                  t,
                  l,
                  E,
                  null,
                  a,
                  d
                );
            }
        for (f in a)
          if (d = a[f], y = e[f], a.hasOwnProperty(f) && d !== y && (d != null || y != null))
            switch (f) {
              case "selected":
                d !== y && (nt = !0), t.selected = d && typeof d != "function" && typeof d != "symbol";
                break;
              default:
                dt(
                  t,
                  l,
                  f,
                  d,
                  a,
                  y
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var M in e)
          d = e[M], e.hasOwnProperty(M) && d != null && !a.hasOwnProperty(M) && dt(t, l, M, null, a, d);
        for (g in a)
          if (d = a[g], y = e[g], a.hasOwnProperty(g) && d !== y && (d != null || y != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null)
                  throw Error(m(137, l));
                break;
              default:
                dt(
                  t,
                  l,
                  g,
                  d,
                  a,
                  y
                );
            }
        return;
      default:
        if (lc(l)) {
          for (var K in e)
            d = e[K], e.hasOwnProperty(K) && d !== void 0 && !a.hasOwnProperty(K) && to(
              t,
              l,
              K,
              void 0,
              a,
              d
            );
          for (p in a)
            d = a[p], y = e[p], !a.hasOwnProperty(p) || d === y || d === void 0 && y === void 0 || to(
              t,
              l,
              p,
              d,
              a,
              y
            );
          return;
        }
    }
    for (var h in e)
      d = e[h], e.hasOwnProperty(h) && d != null && !a.hasOwnProperty(h) && dt(t, l, h, null, a, d);
    for (z in a)
      d = a[z], y = e[z], !a.hasOwnProperty(z) || d === y || d == null && y == null || dt(t, l, z, d, a, y);
  }
  function dh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function _0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], i = n.transferSize, u = n.initiatorType, c = n.duration;
        if (i && c && dh(u)) {
          for (u = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a], g = f.startTime;
            if (g > c) break;
            var p = f.transferSize, z = f.initiatorType;
            p && dh(z) && (f = f.responseEnd, u += p * (f < c ? 1 : (c - g) / (f - g)));
          }
          if (--a, l += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var lo = null, eo = null;
  function Pn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function hh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gh(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function mh(t, l, e, a) {
    return e = Pn(
      e
    ).createElement(t), e[Bt] = a, e[It] = l, Vt(e, t, l), Dt(e), e;
  }
  function ao(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var no = null;
  function A0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === no ? !1 : (no = t, !0) : (no = null, !1);
  }
  var io = typeof setTimeout == "function" ? setTimeout : void 0, O0 = typeof clearTimeout == "function" ? clearTimeout : void 0, vh = typeof Promise == "function" ? Promise : void 0, yh = typeof requestAnimationFrame == "function" ? requestAnimationFrame : io, M0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof vh < "u" ? function(t) {
    return vh.resolve(null).then(t).catch(C0);
  } : io;
  function C0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Qe(t) {
    return t === "head";
  }
  function ph(t, l) {
    var e = l, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(n), sn(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          go(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, go(e);
          for (var i = e.firstChild; i; ) {
            var u = i.nextSibling, c = i.nodeName;
            i[yn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = u;
          }
        } else
          e === "body" && go(t.ownerDocument.body);
      e = n;
    } while (e);
    sn(l);
  }
  function xh(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function bh(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var a = 1;
      else
        for (var n = a = 0; n < l.length; n++) {
          var i = l[n];
          0 < i.width && 0 < i.height && a++;
        }
      a === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function Sh(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function j0(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function uo(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return j0(l, e, t);
  }
  function D0(t) {
    return t.documentElement.clientHeight;
  }
  function U0(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function R0(t, l, e, a, n, i, u, c, f) {
    var g = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var p = g.startViewTransition({
        update: function() {
          var d = g.defaultView, y = d.navigation && d.navigation.transition, E = g.fonts.status;
          a();
          var M = [];
          if (E === "loaded" && (D0(g), g.fonts.status === "loading" && M.push(g.fonts.ready)), E = M.length, t !== null)
            for (var K = t.suspenseyImages, h = 0, o = 0; o < K.length; o++) {
              var v = K[o];
              if (!v.complete) {
                var S = v.getBoundingClientRect();
                if (0 < S.bottom && 0 < S.right && S.top < d.innerHeight && S.left < d.innerWidth) {
                  if (h += Qh(v), h > Cu) {
                    M.length = E;
                    break;
                  }
                  v = new Promise(
                    U0.bind(v)
                  ), M.push(v);
                }
              }
            }
          if (0 < M.length)
            return d = Promise.race([
              Promise.all(M),
              new Promise(function(A) {
                return setTimeout(A, 500);
              })
            ]).then(n, n), (y ? Promise.allSettled([y.finished, d]) : d).then(i, i);
          if (n(), y)
            return y.finished.then(
              i,
              i
            );
          i();
        },
        types: e
      });
      g.__reactViewTransition = p;
      var z = [];
      return p.ready.then(
        function() {
          for (var d = g.documentElement.getAnimations({
            subtree: !0
          }), y = 0; y < d.length; y++) {
            var E = d[y], M = E.effect, K = M.pseudoElement;
            if (K != null && K.startsWith("::view-transition")) {
              z.push(E), E = M.getKeyframes();
              for (var h = K = void 0, o = !0, v = 0; v < E.length; v++) {
                var S = E[v], A = S.width;
                if (K === void 0) K = A;
                else if (K !== A) {
                  o = !1;
                  break;
                }
                if (A = S.height, h === void 0) h = A;
                else if (h !== A) {
                  o = !1;
                  break;
                }
                delete S.width, delete S.height, S.transform === "none" && delete S.transform;
              }
              o && K !== void 0 && h !== void 0 && (M.setKeyframes(E), o = getComputedStyle(
                M.target,
                M.pseudoElement
              ), o.width !== K || o.height !== h) && (o = E[0], o.width = K, o.height = h, o = E[E.length - 1], o.width = K, o.height = h, M.setKeyframes(E));
            }
          }
          u();
        },
        function(d) {
          g.__reactViewTransition === p && (g.__reactViewTransition = null);
          try {
            if (typeof d == "object" && d !== null)
              switch (d.name) {
                case "InvalidStateError":
                  (d.message === "View transition was skipped because document visibility state is hidden." || d.message === "Skipping view transition because document visibility state has become hidden." || d.message === "Skipping view transition because viewport size changed." || d.message === "Transition was aborted because of invalid state") && (d = null);
              }
            d !== null && f(d);
          } finally {
            a(), n(), u();
          }
        }
      ), p.finished.finally(function() {
        for (var d = 0; d < z.length; d++)
          z[d].cancel();
        g.__reactViewTransition === p && (g.__reactViewTransition = null), c();
      }), p;
    } catch {
      return a(), n(), u(), null;
    }
  }
  function xa(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  xa.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : F({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, xa.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), a = [], n = 0; n < e.length; n++) {
      var i = e[n].effect;
      i !== null && i.target === t && i.pseudoElement === l && a.push(e[n]);
    }
    return a;
  }, xa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function zh(t) {
    return {
      name: t,
      group: new xa("group", t),
      imagePair: new xa("image-pair", t),
      old: new xa("old", t),
      new: new xa("new", t)
    };
  }
  function pl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  pl.prototype.addEventListener = function(t, l, e) {
    var a = null, n = null;
    if (!(e != null && typeof e != "boolean" && (a = e.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (wh(i, t, l, e) === -1) {
        var u = this, c = l;
        e != null && typeof e != "boolean" && e.once === !0 && (c = function(f) {
          u.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, f) : l.handleEvent(f);
        }), a !== null && (n = u.removeEventListener.bind(
          u,
          t,
          l,
          e
        ), a.addEventListener("abort", n, { once: !0 }), n = a.removeEventListener.bind(a, "abort", n)), a = nn(e), i.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: c,
          cleanup: n
        }), b(
          this._fragmentFiber.child,
          !1,
          H0,
          t,
          c,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function H0(t, l, e, a) {
    return yt(t).addEventListener(
      l,
      e,
      a
    ), !1;
  }
  pl.prototype.removeEventListener = function(t, l, e) {
    var a = this._eventListeners;
    if (a !== null && (l = wh(
      a,
      t,
      l,
      e
    ), l !== -1)) {
      var n = a[l];
      e = n.attachedListener;
      var i = n.cleanup;
      n = nn(n.optionsOrUseCapture), b(
        this._fragmentFiber.child,
        !1,
        q0,
        t,
        e,
        n
      ), a.splice(l, 1), i !== null && i();
    }
  };
  function q0(t, l, e, a) {
    return yt(t).removeEventListener(
      l,
      e,
      a
    ), !1;
  }
  function nn(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Th(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function wh(t, l, e, a) {
    if (t.length === 0) return -1;
    a = Th(a);
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      if (i.type === l && i.listener === e && Th(i.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  pl.prototype.dispatchEvent = function(t) {
    var l = C(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = yt(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var a = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          a.addEventListener(
            i.type,
            i.attachedListener,
            nn(i.optionsOrUseCapture)
          );
        }
      if (l.appendChild(a), t = a.dispatchEvent(t), e)
        for (n = 0; n < e.length; n++)
          i = e[n], a.removeEventListener(
            i.type,
            i.attachedListener,
            nn(i.optionsOrUseCapture)
          );
      return l.removeChild(a), t;
    }
    return l.dispatchEvent(t);
  }, pl.prototype.focus = function(t) {
    b(
      this._fragmentFiber.child,
      !0,
      Eh,
      t,
      void 0,
      void 0
    );
  };
  function Eh(t, l) {
    return t.tag === 6 ? !1 : (t = yt(t), $0(t, l));
  }
  pl.prototype.focusLast = function(t) {
    var l = [];
    b(
      this._fragmentFiber.child,
      !0,
      co,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Eh(l[e], t); e--) ;
  };
  function co(t, l) {
    return l.push(t), !1;
  }
  pl.prototype.blur = function() {
    var t = C(
      this._fragmentFiber
    );
    t !== null && (t = yt(t), t = Pn(t).activeElement, t !== null && b(
      this._fragmentFiber.child,
      !1,
      B0,
      t,
      void 0,
      void 0
    ));
  };
  function B0(t, l) {
    return t.tag === 6 ? !1 : (t = yt(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  pl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), b(
      this._fragmentFiber.child,
      !1,
      Y0,
      t,
      void 0,
      void 0
    );
  };
  function Y0(t, l) {
    return t.tag === 6 || (t = yt(t), l.observe(t)), !1;
  }
  pl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), b(
        this._fragmentFiber.child,
        !1,
        G0,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < ql.length; e++) {
        var a = ql[e];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : ql[l++] = a;
      }
      ql.length = l;
    }
  };
  function G0(t, l) {
    return t.tag === 6 || (t = yt(t), l.unobserve(t)), !1;
  }
  var ql = [], fo = !1;
  function X0(t, l, e) {
    ql.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), fo || (fo = !0, F0(function() {
      fo = !1;
      var a = ql;
      ql = [];
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  pl.prototype.getClientRects = function() {
    var t = [];
    return b(
      this._fragmentFiber.child,
      !1,
      Q0,
      t,
      void 0,
      void 0
    ), t;
  };
  function Q0(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = yt(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  pl.prototype.getRootNode = function(t) {
    var l = C(
      this._fragmentFiber
    );
    return l === null ? this : yt(l).getRootNode(t);
  }, pl.prototype.compareDocumentPosition = function(t) {
    var l = C(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    b(
      this._fragmentFiber.child,
      !1,
      co,
      e,
      void 0,
      void 0
    );
    var a = yt(l);
    if (e.length === 0) {
      if (e = a, V(this._fragmentFiber)) {
        t: {
          for (l = this._fragmentFiber.return; l !== null; ) {
            if (l.tag === 4) {
              l = l.stateNode.containerInfo;
              break t;
            }
            if (l.tag === 3 || l.tag === 5 || l.tag === 27)
              break;
            l = l.return;
          }
          l = null;
        }
        l != null && (e = l);
      }
      l = this._fragmentFiber;
      var n = a = e.compareDocumentPosition(t);
      return e === t ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = Tt(l)[1], e === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (t = yt(e).compareDocumentPosition(
        t
      ), n = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = yt(e[0]), n = yt(e[e.length - 1]);
    var i = V(this._fragmentFiber) ? l.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var u = l.compareDocumentPosition(t), c = n.compareDocumentPosition(t), f = u & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && i && u & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = a && l === t || i && n === t || f || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && l === t || !i && n === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : u, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || V0(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function V0(t, l, e, a, n) {
    var i = Ie(n);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!i)
        t: {
          for (; i !== null; ) {
            if (i.tag === 7 && (i === l || i.alternate === l)) {
              e = !0;
              break t;
            }
            i = i.return;
          }
          e = !1;
        }
      return e;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return i = n.ownerDocument, n === i || n === i.documentElement || n === i.body;
      t: {
        for (i = l, l = C(l); i !== null; ) {
          if (!(i.tag !== 5 && i.tag !== 3 && i.tag !== 27 || i !== l && i.alternate !== l)) {
            i = !0;
            break t;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!i) && !(l = i === e) && (l = ul(
      e,
      i,
      Yl
    ), l === null ? l = !1 : (b(
      l,
      !0,
      ke,
      i,
      e
    ), i = xl, xl = null, l = i !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!i) && !(l = i === a) && (l = ul(
      a,
      i,
      Yl
    ), l === null ? l = !1 : (b(
      l,
      !0,
      Bl,
      i,
      a
    ), i = xl, il = xl = null, l = i !== null)), l) : !1;
  }
  function Nh(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  pl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(m(566));
    var l = [];
    b(
      this._fragmentFiber.child,
      !1,
      co,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var a = Tt(
        this._fragmentFiber
      );
      if (a = e ? a[1] || a[0] || C(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = yt(a), Nh(t, e);
        return;
      }
      if (a = yt(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          e = "host" in a ? a.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = e ? l.length - 1 : 0; a !== (e ? -1 : l.length); ) {
      var n = l[a];
      n.tag === 6 ? (n = yt(n), Nh(n, e)) : yt(n).scrollIntoView(t), a += e ? -1 : 1;
    }
  };
  function Z0(t, l) {
    return t = yt(t), _h(t, l), !1;
  }
  function _h(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function Ah(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        t.addEventListener(
          n.type,
          n.attachedListener,
          nn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(i) {
      for (var u = 0, c = 0; c < ql.length; c++) {
        var f = ql[c];
        (f.fragmentInstance !== l || f.observer !== i || f.instance !== t) && (ql[u++] = f);
      }
      ql.length = u, i.observe(t);
    }), _h(t, l));
  }
  function L0(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        t.removeEventListener(
          n.type,
          n.attachedListener,
          nn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(i) {
      typeof i.rootMargin == "string" ? X0(
        l,
        i,
        t
      ) : i.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function oo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oo(e), xi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function K0(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[yn])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Ol(t.nextSibling), t === null) break;
    }
    return null;
  }
  function J0(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ol(t.nextSibling), t === null)) return null;
    return t;
  }
  function Oh(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ol(t.nextSibling), t === null)) return null;
    return t;
  }
  function ro(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function so(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function k0(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ol(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var ho = null;
  function Mh(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Ol(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ch(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function $0(t, l) {
    function e() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return a;
  }
  function F0(t) {
    yh(function() {
      yh(function(l) {
        return t(l);
      });
    });
  }
  function jh(t, l, e) {
    switch (l = Pn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(m(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(m(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(m(454));
        return t;
      default:
        throw Error(m(451));
    }
  }
  function Dh(t, l, e) {
    for (var a in e) {
      var n = e[a];
      e.hasOwnProperty(a) && n != null && dt(t, l, a, null, E0, n);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Vl && (t.onclick = null), xi(t);
  }
  function go(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    xi(t);
  }
  var Ml = /* @__PURE__ */ new Map(), Uh = /* @__PURE__ */ new Set();
  function ti(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ye = X.d;
  X.d = {
    f: W0,
    r: I0,
    D: P0,
    C: tv,
    L: lv,
    m: ev,
    X: nv,
    S: av,
    M: iv
  };
  function W0() {
    var t = ye.f(), l = zu();
    return t || l;
  }
  function I0(t) {
    var l = Ta(t);
    l !== null && l.tag === 5 && l.type === "form" ? Hs(l) : ye.r(t);
  }
  var un = typeof document > "u" ? null : document;
  function Rh(t, l, e) {
    var a = un;
    if (a && typeof l == "string" && l) {
      var n = zl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), Uh.has(n) || (Uh.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Vt(l, "link", t), Dt(l), a.head.appendChild(l)));
    }
  }
  function P0(t) {
    ye.D(t), Rh("dns-prefetch", t, null);
  }
  function tv(t, l) {
    ye.C(t, l), Rh("preconnect", t, l);
  }
  function lv(t, l, e) {
    ye.L(t, l, e);
    var a = un;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + zl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + zl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + zl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + zl(t) + '"]';
      var i = n;
      switch (l) {
        case "style":
          i = cn(t);
          break;
        case "script":
          i = fn(t);
      }
      if (!(Ml.has(i) || (t = F(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Ml.set(i, t), a.querySelector(n) !== null || l === "style" && a.querySelector(li(i)) || l === "script" && a.querySelector(ei(i))))) {
        var u = a.createElement("link");
        Vt(u, "link", t), l === "style" && (u[pi] = !0, u.onload = u.onerror = function() {
          ko(u);
        }), Dt(u), a.head.appendChild(u);
      }
    }
  }
  function ev(t, l) {
    ye.m(t, l);
    var e = un;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + zl(a) + '"][href="' + zl(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = fn(t);
      }
      if (!Ml.has(i) && (t = F({ rel: "modulepreload", href: t }, l), Ml.set(i, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ei(i)))
              return;
        }
        a = e.createElement("link"), Vt(a, "link", t), Dt(a), e.head.appendChild(a);
      }
    }
  }
  function av(t, l, e) {
    ye.S(t, l, e);
    var a = un;
    if (a && t) {
      var n = wa(a).hoistableStyles, i = cn(t);
      l = l || "default";
      var u = n.get(i);
      if (!u) {
        var c = { loading: 0, preload: null };
        if (u = a.querySelector(
          li(i)
        ))
          c.loading = 5;
        else {
          t = F(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Ml.get(i)) && mo(t, e);
          var f = u = a.createElement("link");
          Dt(f), Vt(f, "link", t), f._p = new Promise(function(g, p) {
            f.onload = g, f.onerror = p;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Ou(u, l, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: c
        }, n.set(i, u);
      }
    }
  }
  function nv(t, l) {
    ye.X(t, l);
    var e = un;
    if (e && t) {
      var a = wa(e).hoistableScripts, n = fn(t), i = a.get(n);
      i || (i = e.querySelector(ei(n)), i || (t = F({ src: t, async: !0 }, l), (l = Ml.get(n)) && vo(t, l), i = e.createElement("script"), Dt(i), Vt(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function iv(t, l) {
    ye.M(t, l);
    var e = un;
    if (e && t) {
      var a = wa(e).hoistableScripts, n = fn(t), i = a.get(n);
      i || (i = e.querySelector(ei(n)), i || (t = F({ src: t, async: !0, type: "module" }, l), (l = Ml.get(n)) && vo(t, l), i = e.createElement("script"), Dt(i), Vt(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Hh(t, l, e, a) {
    var n = (n = xe.current) ? ti(n) : null;
    if (!n) throw Error(m(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = cn(e.href), l = wa(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = cn(e.href);
          var i = wa(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            li(t)
          )) ? i._p || (u.instance = i, u.state.loading = 5) : (i = Ml.get(t), i || (i = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ml.set(t, i)), uv(
            n,
            t,
            i,
            u.state
          ))), l && a === null)
            throw Error(m(528, ""));
          return u;
        }
        if (l && a !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = fn(e), l = wa(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, t));
    }
  }
  function cn(t) {
    return 'href="' + zl(t) + '"';
  }
  function li(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function qh(t) {
    return F({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function uv(t, l, e, a) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[pi] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[pi] = !0, l.onload = l.onerror = ko.bind(null, l), Vt(l, "link", e), Dt(l), t.head.appendChild(l);
    a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function fn(t) {
    return '[src="' + zl(t) + '"]';
  }
  function ei(t) {
    return "script[async]" + t;
  }
  function Bh(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + zl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Dt(a), a;
          var n = F({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Dt(a), Vt(a, "style", n), Ou(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = cn(e.href);
          var i = t.querySelector(
            li(n)
          );
          if (i)
            return l.state.loading |= 4, l.instance = i, Dt(i), i;
          a = qh(e), (n = Ml.get(n)) && mo(a, n), i = (t.ownerDocument || t).createElement("link"), Dt(i);
          var u = i;
          return u._p = new Promise(function(c, f) {
            u.onload = c, u.onerror = f;
          }), Vt(i, "link", a), l.state.loading |= 4, Ou(i, e.precedence, t), l.instance = i;
        case "script":
          return i = fn(e.src), (n = t.querySelector(
            ei(i)
          )) ? (l.instance = n, Dt(n), n) : (a = e, (n = Ml.get(i)) && (a = F({}, e), vo(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Dt(n), Vt(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(m(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Ou(a, e.precedence, t));
    return l.instance;
  }
  function Ou(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, u = 0; u < a.length; u++) {
      var c = a[u];
      if (c.dataset.precedence === l) i = c;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function mo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function vo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Mu = null;
  function Yh(t, l, e) {
    if (Mu === null) {
      var a = /* @__PURE__ */ new Map(), n = Mu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Mu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var i = e[n];
      if (!(i[yn] || i[Bt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(l) || "";
        u = t + u;
        var c = a.get(u);
        c ? c.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function yo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function cv(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function Gh(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function Xh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Qh(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Vh(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += Qh(l), t.suspenseyImages.push(l)), t = rv.bind(t), l.decode().then(t, t));
  }
  function fv(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = cn(a.href), i = l.querySelector(
          li(n)
        );
        if (i) {
          l = i._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = ai.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = i, Dt(i);
          return;
        }
        i = l.ownerDocument || l, a = qh(a), (n = Ml.get(n)) && mo(a, n), i = i.createElement("link"), Dt(i);
        var u = i;
        u._p = new Promise(function(c, f) {
          u.onload = c, u.onerror = f;
        }), Vt(i, "link", a), e.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = ai.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Cu = 0;
  function ov(t, l) {
    return t.stylesheets && t.count === 0 && Du(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Du(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Cu === 0 && (Cu = 62500 * _0());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Du(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Cu ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Zh(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Du(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function ai() {
    this.count--, Zh(this);
  }
  function rv() {
    this.imgCount--, Zh(this);
  }
  var ju = null;
  function Du(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ju = /* @__PURE__ */ new Map(), l.forEach(sv, t), ju = null, ai.call(t));
  }
  function sv(t, l) {
    if (!(l.state.loading & 4)) {
      var e = ju.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), ju.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (e.set(u.dataset.precedence, u), a = u);
        }
        a && e.set(null, a);
      }
      n = l.instance, u = n.getAttribute("data-precedence"), i = e.get(u) || a, i === a && e.set(null, n), e.set(u, n), this.count++, a = ai.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var on = {
    $$typeof: jt,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function dv(t, l, e, a, n, i, u, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $u(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $u(0), this.hiddenUpdates = $u(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Lh(t, l, e, a, n, i, u, c, f, g, p, z) {
    return t = new dv(
      t,
      l,
      e,
      u,
      f,
      g,
      p,
      z,
      c
    ), l = 1, i === !0 && (l |= 24), i = Pt(3, null, null, l), t.current = i, i.stateNode = t, l = Mc(), l.refCount++, t.pooledCache = l, l.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Uc(i), t;
  }
  function Kh(t) {
    return t ? (t = Ua, t) : Ua;
  }
  function Jh(t, l, e, a, n, i) {
    n = Kh(n), a.context === null ? a.context = n : a.pendingContext = n, a = Me(l), a.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (a.callback = i), e = Ce(t, a, l), e !== null && (al(e, t, l), Un(e, t, l));
  }
  function kh(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function po(t, l) {
    kh(t, l), (t = t.alternate) && kh(t, l);
  }
  function $h(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = ea(t, 67108864);
      l !== null && al(l, t, 67108864), po(t, 67108864);
    }
  }
  function Fh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = yl();
      l = Fu(l);
      var e = ea(t, l);
      e !== null && al(e, t, l), po(t, l);
    }
  }
  var rn = !0;
  function hv(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var i = X.p;
    try {
      X.p = 2, xo(t, l, e, a);
    } finally {
      X.p = i, j.T = n;
    }
  }
  function gv(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var i = X.p;
    try {
      X.p = 8, xo(t, l, e, a);
    } finally {
      X.p = i, j.T = n;
    }
  }
  function xo(t, l, e, a) {
    if (rn) {
      var n = bo(a);
      if (n === null)
        Pf(
          t,
          l,
          a,
          Uu,
          e
        ), Ih(t, a);
      else if (vv(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (Ih(t, a), l & 4 && -1 < mv.indexOf(t)) {
        for (; n !== null; ) {
          var i = Ta(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = We(i.pendingLanes);
                  if (u !== 0) {
                    var c = i;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; u; ) {
                      var f = 1 << 31 - rl(u);
                      c.entanglements[1] |= f, u &= ~f;
                    }
                    Pl(i), (ct & 6) === 0 && (xu = fl() + 500, Fn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = ea(i, 2), c !== null && al(c, i, 2), zu(), po(i, 2);
            }
          if (i = bo(a), i === null && Pf(
            t,
            l,
            a,
            Uu,
            e
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        Pf(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function bo(t) {
    return t = ac(t), So(t);
  }
  var Uu = null;
  function So(t) {
    if (Uu = null, t = Ie(t), t !== null) {
      var l = Z(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = gt(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = k(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Uu = t, null;
  }
  function Wh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_g()) {
          case Ho:
            return 2;
          case qo:
            return 8;
          case hi:
          case Ag:
            return 32;
          case Bo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zo = !1, Ve = null, Ze = null, Le = null, ni = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new Map(), Ke = [], mv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ih(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ve = null;
        break;
      case "dragenter":
      case "dragleave":
        Ze = null;
        break;
      case "mouseover":
      case "mouseout":
        Le = null;
        break;
      case "pointerover":
      case "pointerout":
        ni.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ii.delete(l.pointerId);
    }
  }
  function ui(t, l, e, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, l !== null && (l = Ta(l), l !== null && $h(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function vv(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return Ve = ui(
          Ve,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return Ze = ui(
          Ze,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return Le = ui(
          Le,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return ni.set(
          i,
          ui(
            ni.get(i) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, ii.set(
          i,
          ui(
            ii.get(i) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Ph(t) {
    var l = Ie(t.target);
    if (l !== null) {
      var e = Z(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = gt(e), l !== null) {
            t.blockedOn = l, Lo(t.priority, function() {
              Fh(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = k(e), l !== null) {
            t.blockedOn = l, Lo(t.priority, function() {
              Fh(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ru(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = bo(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        ec = a, e.target.dispatchEvent(a), ec = null;
      } else
        return l = Ta(e), l !== null && $h(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function tg(t, l, e) {
    Ru(t) && e.delete(l);
  }
  function yv() {
    zo = !1, Ve !== null && Ru(Ve) && (Ve = null), Ze !== null && Ru(Ze) && (Ze = null), Le !== null && Ru(Le) && (Le = null), ni.forEach(tg), ii.forEach(tg);
  }
  function Hu(t, l) {
    t.blockedOn === l && (t.blockedOn = null, zo || (zo = !0, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      yv
    )));
  }
  var qu = null;
  function lg(t) {
    qu !== t && (qu = t, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      function() {
        qu === t && (qu = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (So(a || e) === null)
              continue;
            break;
          }
          var i = Ta(e);
          i !== null && (t.splice(l, 3), l -= 3, lf(
            i,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function sn(t) {
    function l(f) {
      return Hu(f, t);
    }
    Ve !== null && Hu(Ve, t), Ze !== null && Hu(Ze, t), Le !== null && Hu(Le, t), ni.forEach(l), ii.forEach(l);
    for (var e = 0; e < Ke.length; e++) {
      var a = Ke[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ke.length && (e = Ke[0], e.blockedOn === null); )
      Ph(e), e.blockedOn === null && Ke.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], i = e[a + 1], u = n[It] || null;
        if (typeof i == "function")
          u || lg(e);
        else if (u) {
          var c = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[It] || null)
              c = u.formAction;
            else if (So(n) !== null) continue;
          } else c = u.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), lg(e);
        }
      }
  }
  function eg() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return n = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
      };
    }
  }
  function To(t) {
    this._internalRoot = t;
  }
  Bu.prototype.render = To.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(m(409));
    var e = l.current, a = yl();
    Jh(e, a, t, l, null, null);
  }, Bu.prototype.unmount = To.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Jh(t.current, 2, null, t, null, null), zu(), l[za] = null;
    }
  };
  function Bu(t) {
    this._internalRoot = t;
  }
  Bu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Zo();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ke.length && l !== 0 && l < Ke[e].priority; e++) ;
      Ke.splice(e, 0, t), e === 0 && Ph(t);
    }
  };
  var ag = w.version;
  if (ag !== "19.3.0")
    throw Error(
      m(
        527,
        ag,
        "19.3.0"
      )
    );
  X.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(m(188)) : (t = Object.keys(t).join(","), Error(m(268, t)));
    return t = J(l), t = t !== null ? N(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var pv = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yu.isDisabled && Yu.supportsFiber)
      try {
        gn = Yu.inject(
          pv
        ), ol = Yu;
      } catch {
      }
  }
  return fi.createRoot = function(t, l) {
    if (!B(t)) throw Error(m(299));
    var e = !1, a = "", n = Ks, i = Js, u = ks;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError)), l = Lh(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      i,
      u,
      eg
    ), t[za] = l.current, If(t), new To(l);
  }, fi.hydrateRoot = function(t, l, e) {
    if (!B(t)) throw Error(m(299));
    var a = !1, n = "", i = Ks, u = Js, c = ks, f = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), l = Lh(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      f,
      i,
      u,
      c,
      eg
    ), l.context = Kh(null), e = l.current, a = yl(), a = Fu(a), n = Me(a), n.callback = null, Ce(e, n, a), e = a, l.current.lanes = e, vn(l, e), Pl(l), t[za] = l.current, If(t), new Bu(l);
  }, fi.version = "19.3.0", fi;
}
var hg;
function Mv() {
  if (hg) return No.exports;
  hg = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (w) {
        console.error(w);
      }
  }
  return x(), No.exports = Ov(), No.exports;
}
var Cv = Mv();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yg = (...x) => x.filter((w, O, m) => !!w && w.trim() !== "" && m.indexOf(w) === O).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Ft.forwardRef(
  ({
    color: x = "currentColor",
    size: w = 24,
    strokeWidth: O = 2,
    absoluteStrokeWidth: m,
    className: B = "",
    children: Z,
    iconNode: gt,
    ...k
  }, H) => Ft.createElement(
    "svg",
    {
      ref: H,
      ...Dv,
      width: w,
      height: w,
      stroke: x,
      strokeWidth: m ? Number(O) * 24 / Number(w) : O,
      className: yg("lucide", B),
      ...k
    },
    [
      ...gt.map(([J, N]) => Ft.createElement(J, N)),
      ...Array.isArray(Z) ? Z : [Z]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = (x, w) => {
  const O = Ft.forwardRef(
    ({ className: m, ...B }, Z) => Ft.createElement(Uv, {
      ref: Z,
      iconNode: w,
      className: yg(`lucide-${jv(x)}`, m),
      ...B
    })
  );
  return O.displayName = `${x}`, O;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = nl("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = nl("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = nl("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = nl("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = nl("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = nl("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qv = nl("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = nl("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = nl("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = nl("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = nl("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = nl("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = nl("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gv = nl("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), te = {
  steps: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps",
  cpr: "https://guidelines.redcross.org/guidelines-database/cpr-techniques-and-sequence/",
  aed: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-cardiac-arrest",
  breathing: "https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person",
  bleeding: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external",
  burns: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns"
}, oi = [
  {
    id: "response",
    category: "Nhận diện tình huống",
    scene: `Một hành động đúng.
Một cơ hội được trao.`,
    image: "bidv",
    imageAlt: "Ảnh minh họa buổi thực hành sơ cứu với mô hình tại văn phòng",
    question: "Một người đột ngột gục xuống. Khi hiện trường đã an toàn, bạn cần làm gì trước tiên?",
    answers: ["Kiểm tra phản ứng và nhịp thở, gọi hỗ trợ", "Cho người đó uống nước", "Đứng chờ người đó tự tỉnh lại", "Lập tức kéo người đó đứng dậy"],
    correct: 0,
    hint: "Bắt đầu bằng việc nhận biết tình trạng của người cần giúp đỡ.",
    explanation: "Kiểm tra phản ứng và thở bình thường trong tối đa 10 giây. Nếu không phản ứng và không thở bình thường, kích hoạt cấp cứu, bắt đầu CPR và dùng AED khi có.",
    source: te.steps
  },
  {
    id: "safety",
    category: "An toàn hiện trường",
    scene: `An toàn cho bạn.
An toàn để giúp người.`,
    image: "frasers",
    imageAlt: "Ảnh minh họa tập huấn an toàn tại công trường",
    question: "Trước khi tiếp cận một người bị nạn, điều gì cần được ưu tiên?",
    answers: ["Chụp ảnh hiện trường", "Kiểm tra an toàn của khu vực xung quanh", "Di chuyển mọi vật dụng gần đó", "Lập tức chạy đến bất kể nguy hiểm"],
    correct: 1,
    hint: "Bạn chỉ có thể hỗ trợ tốt khi bản thân không gặp nguy hiểm.",
    explanation: "Quan sát các nguy cơ như điện, giao thông hoặc lửa trước khi tiếp cận. Đừng tự đưa mình vào tình huống nguy hiểm.",
    source: te.steps
  },
  {
    id: "cpr",
    category: "Hồi sinh tim phổi",
    scene: `Bình tĩnh quan sát.
Chủ động hành động.`,
    image: "toyota",
    imageAlt: "Ảnh minh họa thực hành hồi sinh tim phổi trên mô hình",
    question: "Người lớn không phản ứng và chỉ thở ngáp cá. Sau khi kích hoạt cấp cứu, bạn cần làm gì?",
    answers: ["Chờ nhịp thở tự trở lại", "Cho uống nước đường", "Bắt đầu CPR và dùng AED khi có", "Đỡ người đó ngồi dậy"],
    correct: 2,
    hint: "Thở ngáp cá không phải là thở bình thường.",
    explanation: "Không phản ứng và không thở bình thường là dấu hiệu cần CPR. Nhờ người gọi cấp cứu và lấy AED; làm theo hướng dẫn của tổng đài.",
    source: te.cpr
  },
  {
    id: "rate",
    category: "Hồi sinh tim phổi",
    scene: `Nhịp ép đúng.
Tiếp nối cơ hội sống.`,
    image: "yody",
    imageAlt: "Ảnh minh họa học viên thực hành ép tim trên mô hình",
    question: "Tần số ép ngực được khuyến nghị khi thực hiện CPR cho người lớn là bao nhiêu?",
    answers: ["40–60 lần/phút", "60–80 lần/phút", "160–180 lần/phút", "100–120 lần/phút"],
    correct: 3,
    hint: "Ép ngực cần đều, nhanh và liên tục.",
    explanation: "Ép ngực 100–120 lần/phút, để ngực nở lại hoàn toàn sau mỗi lần ép và hạn chế gián đoạn.",
    source: te.cpr
  },
  {
    id: "aed",
    category: "Sử dụng AED",
    scene: `Lắng nghe hướng dẫn.
Từng bước hỗ trợ.`,
    image: "olympia",
    imageAlt: "Ảnh minh họa buổi đào tạo kiến thức sơ cứu",
    question: "AED đang phân tích nhịp tim hoặc chuẩn bị sốc điện. Bạn cần bảo đảm điều gì?",
    answers: ["Không ai chạm vào người đang được cấp cứu", "Một người giữ chặt hai tay người đó", "Tiếp tục chạm để kiểm tra phản ứng", "Tháo các miếng điện cực"],
    correct: 0,
    hint: "Hãy làm theo hướng dẫn bằng giọng nói của thiết bị.",
    explanation: "Tránh chạm vào người bệnh khi AED phân tích hoặc sốc điện. Tiếp tục CPR ngay khi thiết bị hướng dẫn.",
    source: te.aed
  },
  {
    id: "bleeding",
    category: "Xử trí chảy máu",
    scene: `Nhận biết sớm.
Hỗ trợ kịp thời.`,
    image: "interfood",
    imageAlt: "Ảnh minh họa hướng dẫn sử dụng bộ dụng cụ sơ cứu",
    question: "Một vết thương ngoài da đang chảy máu nhiều. Biện pháp ban đầu phù hợp là gì?",
    answers: ["Liên tục nhấc gạc lên xem", "Ép trực tiếp, chắc và liên tục lên vết thương", "Chỉ lau máu xung quanh", "Để vết thương tự khô"],
    correct: 1,
    hint: "Dùng gạc hoặc vải sạch để tạo áp lực tại vị trí chảy máu.",
    explanation: "Gọi cấp cứu khi chảy máu nghiêm trọng. Dùng gạc hoặc vải sạch ép trực tiếp, chắc và liên tục; bảo vệ bản thân khỏi tiếp xúc với máu.",
    source: te.bleeding
  },
  {
    id: "burn",
    category: "Sơ cứu bỏng",
    scene: `Kiến thức thiết thực.
Bảo vệ mỗi ngày.`,
    image: "amon",
    imageAlt: "Ảnh minh họa giáo viên trong buổi học sơ cứu",
    question: "Với một vết bỏng nhiệt nhỏ, nên làm mát vùng bỏng bằng cách nào?",
    answers: ["Bôi kem đánh răng ngay", "Chườm đá trực tiếp lên da", "Làm mát dưới vòi nước mát ít nhất 20 phút", "Bôi dầu ăn lên vùng bỏng"],
    correct: 2,
    hint: "Nước mát giúp làm giảm nhiệt tại vùng bị bỏng.",
    explanation: "Làm mát vết bỏng bằng nước mát chảy nhẹ ít nhất 20 phút. Giữ ấm phần cơ thể còn lại; không dùng đá trực tiếp hoặc kem đánh răng.",
    source: te.burns
  },
  {
    id: "breathing",
    category: "Theo dõi người bị nạn",
    scene: `Ở bên hỗ trợ.
Quan sát từng thay đổi.`,
    image: "tri-thien",
    imageAlt: "Ảnh minh họa hướng dẫn kỹ năng chăm sóc và sơ cứu",
    question: "Người không phản ứng nhưng vẫn thở bình thường, không có dấu hiệu chấn thương. Nên làm gì?",
    answers: ["Bắt đầu ép ngực ngay", "Cho uống nước", "Để người đó một mình", "Gọi cấp cứu, đặt tư thế hồi phục và theo dõi thở"],
    correct: 3,
    hint: "Ưu tiên giữ đường thở thông thoáng và tiếp tục quan sát.",
    explanation: "Đặt tư thế hồi phục khi phù hợp, gọi cấp cứu và theo dõi nhịp thở. Nếu chuyển sang không thở bình thường, bắt đầu CPR theo hướng dẫn.",
    source: te.breathing
  },
  {
    id: "help",
    category: "Kích hoạt hỗ trợ",
    scene: `Phối hợp rõ ràng.
Hỗ trợ hiệu quả hơn.`,
    image: "olympia",
    imageAlt: "Ảnh minh họa học viên trao đổi cùng giảng viên sơ cứu",
    question: "Có người xung quanh khi bạn đang hỗ trợ cấp cứu. Cách nhờ giúp đỡ nào phù hợp nhất?",
    answers: ["Chỉ định một người gọi cấp cứu và lấy AED nếu có", "Chờ mọi người tự phân công", "Yêu cầu mọi người rời đi", "Dừng hỗ trợ để quay video"],
    correct: 0,
    hint: "Phân công rõ một việc cho một người cụ thể.",
    explanation: "Nhờ một người gọi cấp cứu, một người tìm AED nếu có. Phối hợp với người hỗ trợ và làm theo hướng dẫn tổng đài.",
    source: te.steps
  },
  {
    id: "monitor",
    category: "Chăm sóc tiếp tục",
    scene: `Sơ cứu là kỹ năng.
Thực hành để sẵn sàng.`,
    image: "bidv",
    imageAlt: "Ảnh minh họa thực hành sơ cứu tại lớp đào tạo GHME",
    question: "Sau khi gọi cấp cứu và sơ cứu ban đầu, bạn nên làm gì trong lúc chờ hỗ trợ?",
    answers: ["Rời đi khi người đó có vẻ ổn", "Ở lại, trấn an và theo dõi thay đổi tình trạng", "Cho ăn để hồi sức ngay", "Ngừng quan sát hoàn toàn"],
    correct: 1,
    hint: "Tình trạng có thể thay đổi trong khi chờ nhân viên y tế.",
    explanation: "Ở lại nếu an toàn, trấn an và theo dõi phản ứng, nhịp thở. Điều chỉnh hỗ trợ theo tình trạng và hướng dẫn của tổng đài.",
    source: te.bleeding
  }
], Do = 240;
function dn() {
  return { screen: "closed", index: 0, selected: null, confirmed: !1, hint: !1, usedHint: !1, responses: [], remaining: Do, deadline: null, finished: !1, timedOut: !1, exit: !1 };
}
function Xv(x, w) {
  if (w.type === "autoOpen") return x.screen === "closed" ? { ...dn(), screen: "entry" } : x;
  if (w.type === "open") return { ...dn(), screen: "entry" };
  if (w.type === "close") return dn();
  if (w.type === "intro") return { ...dn(), screen: "intro" };
  if (w.type === "start") return { ...dn(), screen: "quiz", deadline: w.now + Do * 1e3 };
  if (w.type === "exit") return { ...x, exit: !0 };
  if (w.type === "continue") return { ...x, exit: !1 };
  if (x.screen !== "quiz") return x;
  const O = Math.max(0, Math.ceil((x.deadline - w.now) / 1e3));
  if (!O) return { ...x, remaining: 0, screen: "result", finished: !0, timedOut: !0, exit: !1 };
  switch (w.type) {
    case "tick":
      return O === x.remaining ? x : { ...x, remaining: O };
    case "select":
      return x.confirmed || x.exit ? x : { ...x, selected: w.value };
    case "hint":
      return { ...x, hint: !x.hint, usedHint: !0 };
    case "confirm":
      return x.selected === null || x.confirmed || x.exit ? x : { ...x, confirmed: !0, remaining: O, responses: [...x.responses, { selected: x.selected, usedHint: x.usedHint }] };
    case "next":
      return !x.confirmed || x.exit ? x : x.index + 1 === w.total ? { ...x, remaining: O, finished: !0, screen: "result" } : { ...x, remaining: O, index: x.index + 1, selected: null, confirmed: !1, hint: !1, usedHint: !1 };
    default:
      return x;
  }
}
function Tg(x) {
  return String(Math.floor(x / 60)).padStart(2, "0") + ":" + String(x % 60).padStart(2, "0");
}
function Qv({ index: x, total: w, remaining: O, finished: m, answered: B, imageBase: Z }) {
  const gt = x + 1;
  return /* @__PURE__ */ r.jsx("header", { className: "border-b border-line bg-white", children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto grid min-h-22 max-w-350 grid-cols-[1fr_1fr_1fr] items-center gap-8 pl-8 pr-16 max-sm:grid-cols-[1fr_auto] max-sm:gap-4 max-sm:pl-5 max-sm:pr-14 max-sm:py-4", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex w-fit items-center gap-4 rounded-md", "aria-label": "GHME — trang đầu mini-game", children: [
      /* @__PURE__ */ r.jsx("img", { src: Z + "logo_GHME.svg", alt: "GHME", className: "h-auto w-32 shrink-0 object-contain object-left" }),
      /* @__PURE__ */ r.jsxs("span", { className: "border-l border-line pl-4 text-[11px] leading-5 text-muted max-lg:hidden", children: [
        "KIẾN THỨC SƠ CỨU",
        /* @__PURE__ */ r.jsx("br", {}),
        /* @__PURE__ */ r.jsx("strong", { id: "game-title", className: "font-semibold text-navy", children: "4 phút thời gian vàng" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "mx-auto w-full max-w-64 max-sm:order-3 max-sm:col-span-2 max-sm:max-w-none", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "mb-2 flex justify-between text-xs", children: [
        /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-navy", children: m ? "Đã kết thúc" : `Câu ${gt} / ${w}` }),
        /* @__PURE__ */ r.jsx("span", { className: "text-muted", children: m ? "Tổng kết" : `${Math.round(B / w * 100)}% hành trình` })
      ] }),
      /* @__PURE__ */ r.jsx("div", { role: "progressbar", "aria-label": "Tiến trình câu hỏi", "aria-valuenow": B, "aria-valuemin": 0, "aria-valuemax": w, className: "h-1.5 overflow-hidden rounded-full bg-pale", children: /* @__PURE__ */ r.jsx("div", { className: "h-full rounded-full bg-navy transition-[width] duration-200", style: { width: `${B / w * 100}%` } }) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex size-10 items-center justify-center rounded-full bg-orange-light text-orange", children: /* @__PURE__ */ r.jsx(xg, { size: 19, "aria-hidden": "true" }) }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-[10px] font-medium text-muted", children: "Thời gian còn lại" }),
        /* @__PURE__ */ r.jsx("p", { role: "timer", "aria-label": "Thời gian còn lại", "aria-live": "off", className: `text-[27px] font-bold leading-8 tracking-wide tabular-nums ${O < 60 ? "text-orange" : "text-navy"}`, children: Tg(O) })
      ] })
    ] })
  ] }) });
}
function Vv() {
  return /* @__PURE__ */ r.jsxs("footer", { className: "mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-3 px-6 pb-6 pt-5 text-[11px] text-muted", children: [
    /* @__PURE__ */ r.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ r.jsx(zg, { size: 15, "aria-hidden": "true" }),
      "GHME · Học để sẵn sàng giúp đỡ"
    ] }),
    /* @__PURE__ */ r.jsx("span", { children: "Bài ôn tập kiến thức · Không thay thế đào tạo sơ cứu thực hành" })
  ] });
}
function Zv({ question: x, index: w, imageBase: O }) {
  return /* @__PURE__ */ r.jsxs("aside", { className: "flex min-w-0 flex-col rounded-[18px] bg-pale p-5 lg:p-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-4 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "eyebrow", children: [
        "Tình huống ",
        String(w + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ r.jsx(bg, { size: 20, className: "text-navy/60", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-white", children: [
      /* @__PURE__ */ r.jsx("img", { src: O + x.image + ".webp", alt: x.imageAlt, className: "aspect-[1.13] w-full object-cover max-md:aspect-[1.8]" }),
      /* @__PURE__ */ r.jsx("span", { className: "absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1.5 text-[10px] font-medium text-navy", children: "Ảnh minh họa thực hành" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "pt-5", children: [
      /* @__PURE__ */ r.jsx("span", { className: "mb-3 block h-0.5 w-7 bg-orange" }),
      /* @__PURE__ */ r.jsx("h2", { className: "whitespace-pre-line text-[22px] font-semibold leading-[1.45] tracking-tight text-navy", children: x.scene })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: "situation-note", children: [
      /* @__PURE__ */ r.jsx(pg, { size: 17, "aria-hidden": "true" }),
      "Quan sát tình huống. Bình tĩnh lựa chọn cách xử trí phù hợp nhất."
    ] })
  ] });
}
function Lv({ question: x, index: w, total: O, selected: m, confirmed: B, hint: Z, onSelect: gt, onHint: k, onConfirm: H, onNext: J, headingRef: N }) {
  const b = m === x.correct;
  return /* @__PURE__ */ r.jsxs("section", { className: "flex min-w-0 flex-col py-2 md:pl-2 lg:py-3 lg:pl-4", "aria-labelledby": "question-title", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "eyebrow", children: [
        "Câu hỏi ",
        String(w + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "size-1 rounded-full bg-line" }),
      /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted", children: x.category })
    ] }),
    /* @__PURE__ */ r.jsx("h2", { id: "question-title", ref: N, tabIndex: -1, className: "question-heading text-[26px] font-bold leading-[1.4] tracking-[-0.7px] text-navy lg:text-[29px]", children: x.question }),
    /* @__PURE__ */ r.jsx("p", { id: "answer-instructions", className: "mb-6 mt-3 text-[13px] text-muted", children: "Chọn một đáp án phù hợp nhất." }),
    /* @__PURE__ */ r.jsxs("fieldset", { "aria-describedby": "answer-instructions", disabled: B, className: "grid grid-cols-2 gap-3.5 max-sm:grid-cols-1", children: [
      /* @__PURE__ */ r.jsx("legend", { className: "sr-only", children: "Các đáp án" }),
      x.answers.map((C, V) => /* @__PURE__ */ r.jsxs("label", { className: `answer-option ${m === V ? "is-selected" : ""} ${B ? "is-locked" : ""}`, children: [
        /* @__PURE__ */ r.jsx("input", { type: "radio", name: `answer-${x.id}`, value: V, checked: m === V, onChange: () => gt(V), className: "peer sr-only" }),
        /* @__PURE__ */ r.jsx("span", { className: "answer-letter", children: "ABCD"[V] }),
        /* @__PURE__ */ r.jsx("span", { className: "min-w-0 flex-1 text-[13px] font-medium leading-[1.65]", children: C }),
        m === V && /* @__PURE__ */ r.jsx(Hv, { size: 15, className: "absolute right-2 top-2 text-navy", "aria-hidden": "true" })
      ] }, V))
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "mt-5", "aria-live": "polite", "aria-atomic": "true", children: B && /* @__PURE__ */ r.jsxs("div", { className: `feedback flex gap-3 rounded-xl p-4 ${b ? "bg-pale text-navy" : "bg-orange-light text-navy"}`, children: [
      b ? /* @__PURE__ */ r.jsx(jo, { className: "mt-0.5 shrink-0", size: 21, "aria-hidden": "true" }) : /* @__PURE__ */ r.jsx(Sg, { className: "mt-0.5 shrink-0 text-orange", size: 21, "aria-hidden": "true" }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("p", { className: "mb-1 text-sm font-semibold", children: b ? "Chính xác!" : "Chưa chính xác" }),
        !b && /* @__PURE__ */ r.jsxs("p", { className: "mb-1 text-xs font-semibold", children: [
          "Đáp án phù hợp: ",
          "ABCD"[x.correct],
          ". ",
          x.answers[x.correct]
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs leading-6 text-muted", children: x.explanation }),
        /* @__PURE__ */ r.jsxs("a", { href: x.source, target: "_blank", rel: "noreferrer", className: "mt-1 inline-flex items-center gap-1 text-[10px] underline underline-offset-2", children: [
          "Nguồn kiến thức: Red Cross",
          /* @__PURE__ */ r.jsx(qv, { size: 10, "aria-hidden": "true" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { id: "question-hint", "aria-live": "polite", children: Z && /* @__PURE__ */ r.jsxs("div", { className: "hint-panel", children: [
      /* @__PURE__ */ r.jsx(gg, { size: 18, "aria-hidden": "true" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        /* @__PURE__ */ r.jsx("strong", { children: "Một gợi ý cho bạn" }),
        /* @__PURE__ */ r.jsx("br", {}),
        x.hint
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5", children: [
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "button-secondary", onClick: k, "aria-expanded": Z, "aria-controls": "question-hint", disabled: B, children: [
        /* @__PURE__ */ r.jsx(gg, { size: 17, "aria-hidden": "true" }),
        Z ? "Ẩn gợi ý" : "Gợi ý"
      ] }),
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "button-primary", disabled: m === null, onClick: B ? J : H, children: [
        B ? w === O - 1 ? "Xem kết quả" : "Tiếp theo" : "Xác nhận đáp án",
        /* @__PURE__ */ r.jsx(Gu, { size: 18, "aria-hidden": "true" })
      ] })
    ] })
  ] });
}
function Kv({ questions: x, responses: w, remaining: O, timedOut: m, onRestart: B, headingRef: Z, onCourse: gt }) {
  const k = w.filter((H, J) => H.selected === x[J].correct).length;
  return /* @__PURE__ */ r.jsxs("section", { className: "mx-auto w-full max-w-240 rounded-3xl border border-line bg-white p-7 shadow-[0_12px_50px_#10365e06] md:p-12", children: [
    /* @__PURE__ */ r.jsx("div", { className: "mx-auto flex size-16 items-center justify-center rounded-2xl bg-orange-light text-orange", children: /* @__PURE__ */ r.jsx(Rv, { size: 32, "aria-hidden": "true" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow mt-6 text-center", children: "Mỗi kiến thức đúng, thêm một cơ hội" }),
    /* @__PURE__ */ r.jsx("h1", { id: "result-title", ref: Z, tabIndex: -1, className: "question-heading mt-3 text-center text-3xl font-bold text-navy", children: m ? "Hết 4 phút" : "Bạn đã hoàn thành thử thách!" }),
    /* @__PURE__ */ r.jsx("p", { className: "mt-4 text-center text-xl font-semibold text-navy", children: m && w.length < x.length ? "Cùng nhìn lại những câu bạn đã thử" : k >= 8 ? "Bạn đã có nền tảng tốt" : k >= 5 ? "Bạn đã có kiến thức cơ bản" : "Mỗi câu hỏi là một bước củng cố nền tảng" }),
    /* @__PURE__ */ r.jsx("p", { className: "mx-auto mt-3 max-w-140 text-center text-sm leading-7 text-muted", children: "Trong tình huống thật, kiến thức chỉ là bước đầu. Thực hành giúp bạn phản ứng chính xác và tự tin hơn." }),
    /* @__PURE__ */ r.jsxs("div", { className: "my-8 grid grid-cols-3 divide-x divide-line rounded-2xl bg-pale py-6 text-center", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs("p", { className: "text-3xl font-bold text-navy", children: [
          k,
          /* @__PURE__ */ r.jsxs("span", { className: "text-lg font-normal text-muted", children: [
            " / ",
            x.length
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-muted", children: "Câu trả lời đúng" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-3xl font-bold text-navy", children: w.length }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-muted", children: "Câu đã xác nhận" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-3xl font-bold tabular-nums text-navy max-sm:text-2xl", children: Tg(Do - O) }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-muted", children: "Thời gian sử dụng" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "result-next", children: [
      /* @__PURE__ */ r.jsx("h2", { children: "Muốn tự tin hơn khi gặp tình huống thật?" }),
      /* @__PURE__ */ r.jsx("p", { children: "Khám phá các chương trình thực hành cùng chuyên gia GHME." }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ r.jsxs("a", { className: "button-primary", href: "../#programs", onClick: gt, children: [
          "Khám phá khóa học sơ cấp cứu",
          /* @__PURE__ */ r.jsx(Gu, { size: 17, "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "button-secondary", onClick: B, children: [
          /* @__PURE__ */ r.jsx(Yv, { size: 17, "aria-hidden": "true" }),
          "Làm lại thử thách"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { id: "review", className: "mt-10 border-t border-line pt-7", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "mb-4 text-lg font-semibold text-navy", children: "Cùng nhìn lại kiến thức" }),
      /* @__PURE__ */ r.jsx("div", { className: "divide-y divide-line", children: x.map((H, J) => {
        const N = w[J], b = (N == null ? void 0 : N.selected) === H.correct, C = N ? b ? jo : Sg : Bv;
        return /* @__PURE__ */ r.jsxs("details", { className: "group py-3", children: [
          /* @__PURE__ */ r.jsxs("summary", { className: "flex cursor-pointer list-none items-start gap-3 rounded-md text-sm leading-6 text-navy", children: [
            /* @__PURE__ */ r.jsx(C, { size: 18, className: `mt-1 shrink-0 ${b ? "text-navy" : "text-orange"}`, "aria-hidden": "true" }),
            /* @__PURE__ */ r.jsxs("span", { className: "flex-1", children: [
              /* @__PURE__ */ r.jsxs("strong", { className: "font-medium", children: [
                J + 1,
                ". ",
                H.question
              ] }),
              /* @__PURE__ */ r.jsxs("span", { className: "block text-[11px] text-muted", children: [
                N ? b ? "Trả lời đúng" : "Cần ôn lại" : "Chưa xác nhận",
                " · Xem giải thích"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "ml-7 mt-3 rounded-lg bg-pale p-4 text-xs leading-6 text-muted", children: [
            N && /* @__PURE__ */ r.jsxs("p", { children: [
              "Bạn chọn: ",
              "ABCD"[N.selected],
              ". ",
              H.answers[N.selected]
            ] }),
            /* @__PURE__ */ r.jsxs("p", { className: "font-semibold text-navy", children: [
              "Đáp án: ",
              "ABCD"[H.correct],
              ". ",
              H.answers[H.correct]
            ] }),
            /* @__PURE__ */ r.jsx("p", { children: H.explanation }),
            /* @__PURE__ */ r.jsx("a", { href: H.source, target: "_blank", rel: "noreferrer", className: "underline underline-offset-2", children: "Tham khảo Red Cross" })
          ] })
        ] }, H.id);
      }) })
    ] })
  ] });
}
function Jv({ intro: x, imageBase: w, headingRef: O, onStart: m, onClose: B }) {
  return x ? /* @__PURE__ */ r.jsxs("div", { className: "welcome " + (x ? "welcome-intro" : ""), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "welcome-visual", children: [
      /* @__PURE__ */ r.jsx("img", { className: "welcome-logo", src: w + "logo_GHME.svg", alt: "GHME" }),
      /* @__PURE__ */ r.jsxs("div", { className: "welcome-photo", children: [
        /* @__PURE__ */ r.jsx("img", { src: w + "bidv.webp", alt: "Ảnh minh họa học viên thực hành sơ cứu trên mô hình" }),
        /* @__PURE__ */ r.jsx("span", { children: "Ảnh minh họa thực hành" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "welcome-caption", children: [
        /* @__PURE__ */ r.jsx("span", { className: "eyebrow", children: "Học để sẵn sàng" }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Một chút kiến thức.",
          /* @__PURE__ */ r.jsx("br", {}),
          "Thêm một phần tự tin."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "welcome-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "Thử thách kiến thức sơ cấp cứu" }),
      /* @__PURE__ */ r.jsx("h1", { id: "game-title", ref: O, tabIndex: -1, className: "question-heading welcome-title", children: x ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        "Sẵn sàng cho",
        /* @__PURE__ */ r.jsx("br", {}),
        "tình huống đầu tiên?"
      ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("span", { children: "4 PHÚT" }),
        /* @__PURE__ */ r.jsx("br", {}),
        "THỜI GIAN VÀNG",
        /* @__PURE__ */ r.jsx("span", { className: "text-orange", children: "." })
      ] }) }),
      /* @__PURE__ */ r.jsx("p", { className: "welcome-question", children: x ? "Bình tĩnh lựa chọn. Học thêm sau mỗi câu." : "Bạn sẽ phản ứng thế nào trong những phút đầu tiên?" }),
      /* @__PURE__ */ r.jsx("p", { className: "welcome-description", children: x ? "Chọn một đáp án, xác nhận rồi đọc giải thích trước khi sang câu tiếp theo. Bạn có thể dùng gợi ý bất cứ lúc nào." : "10 câu hỏi ngắn giúp bạn khám phá kiến thức sơ cứu của mình trong khoảng 4 phút." }),
      /* @__PURE__ */ r.jsxs("ul", { className: "welcome-benefits", children: [
        /* @__PURE__ */ r.jsxs("li", { children: [
          /* @__PURE__ */ r.jsx(jo, { size: 17, "aria-hidden": "true" }),
          "10 tình huống thực tế"
        ] }),
        /* @__PURE__ */ r.jsxs("li", { children: [
          /* @__PURE__ */ r.jsx(xg, { size: 17, "aria-hidden": "true" }),
          x ? "Đồng hồ chỉ chạy khi bạn sẵn sàng" : "Khoảng 4 phút, theo nhịp của bạn"
        ] }),
        /* @__PURE__ */ r.jsxs("li", { children: [
          /* @__PURE__ */ r.jsx(pg, { size: 17, "aria-hidden": "true" }),
          "Giải thích sau mỗi câu trả lời"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("button", { className: "button-primary welcome-start", onClick: m, children: [
        x ? "Sẵn sàng, bắt đầu" : "Bắt đầu thử thách",
        /* @__PURE__ */ r.jsx(Gu, { size: 18, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ r.jsx("button", { className: "welcome-later", onClick: B, children: x ? "Quay lại website" : "Để sau" }),
      /* @__PURE__ */ r.jsxs("p", { className: "welcome-trust", children: [
        /* @__PURE__ */ r.jsx(zg, { size: 14, "aria-hidden": "true" }),
        "Không đăng nhập · Không cần thông tin cá nhân"
      ] }),
      x && /* @__PURE__ */ r.jsx("p", { className: "welcome-note", children: "4 phút là thời lượng thử thách, không phải mốc xử trí chung cho mọi tình huống. Bài ôn tập không thay thế đào tạo thực hành." })
    ] })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: "micro-invitation", children: [
    /* @__PURE__ */ r.jsxs("p", { className: "micro-label", children: [
      /* @__PURE__ */ r.jsx("strong", { children: "GHME" }),
      /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " · " }),
      /* @__PURE__ */ r.jsx("span", { children: "4 phút thời gian vàng" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "micro-body", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "micro-duration", "aria-label": "Thời lượng thử thách: 4 phút", children: [
        /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "04:00" }),
        /* @__PURE__ */ r.jsx("small", { "aria-hidden": "true", children: "thời lượng" })
      ] }),
      /* @__PURE__ */ r.jsxs("h1", { id: "game-title", ref: O, tabIndex: -1, className: "question-heading micro-heading", children: [
        "10 tình huống.",
        /* @__PURE__ */ r.jsx("br", {}),
        "Bạn sẽ xử trí",
        /* @__PURE__ */ r.jsx("br", {}),
        "thế nào?"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "micro-actions", children: [
      /* @__PURE__ */ r.jsxs("button", { className: "button-primary micro-start", onClick: m, children: [
        "Thử 4 phút",
        /* @__PURE__ */ r.jsx(Gu, { size: 18, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ r.jsx("button", { className: "micro-later", onClick: B, children: "Để sau" })
    ] })
  ] });
}
function mg({ children: x, compact: w, confirmation: O, onClose: m, fallbackRef: B }) {
  const Z = Ft.useRef(null);
  Ft.useEffect(() => {
    const k = Z.current, J = k.getRootNode().activeElement || document.activeElement, N = document.body, b = N.style.overflow, C = N.style.paddingRight;
    if (!O) {
      const V = window.innerWidth - document.documentElement.clientWidth;
      N.style.paddingRight = parseFloat(getComputedStyle(N).paddingRight) + V + "px", N.style.overflow = "hidden";
    }
    return k.showModal(), () => {
      k.close(), O || (N.style.overflow = b, N.style.paddingRight = C);
      const V = J != null && J.isConnected && J !== N ? J : B == null ? void 0 : B.current;
      V == null || V.focus({ preventScroll: !0 });
    };
  }, [O, B]);
  const gt = (k) => {
    if (k.key !== "Tab" || k.target.closest("dialog") !== Z.current) return;
    const H = [...Z.current.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), summary, [tabindex="0"]')].filter((C) => C.closest("dialog") === Z.current && C.getClientRects().length), J = Z.current.getRootNode().activeElement, N = H[0], b = H[H.length - 1];
    k.shiftKey && (J === N || !H.includes(J)) ? (k.preventDefault(), b == null || b.focus()) : !k.shiftKey && J === b && (k.preventDefault(), N == null || N.focus());
  };
  return /* @__PURE__ */ r.jsx("dialog", { onKeyDown: gt, ref: Z, role: "dialog", "aria-modal": "true", "aria-labelledby": O ? "exit-title" : "game-title", className: "game-dialog " + (w ? "entry-dialog " : "") + (O ? "exit-dialog" : ""), onCancel: (k) => {
    k.preventDefault(), k.stopPropagation(), m();
  }, children: x });
}
const kv = /* @__PURE__ */ new Set();
function vg(x) {
  kv.add(x);
  try {
    sessionStorage.setItem(x, "true");
  } catch {
  }
}
function $v({ imageBase: x }) {
  const [w, O] = Ft.useReducer(Xv, void 0, dn), m = Ft.useRef(null), B = Ft.useRef(null), [Z, gt] = Ft.useState(!1), k = () => gt(!0), H = (V, Tt = {}) => O({ type: V, now: Date.now(), ...Tt }), J = () => {
    vg("ghmeFirstAidGameDismissed"), H("close");
  }, N = () => w.screen === "quiz" ? H("exit") : J();
  Ft.useEffect(() => {
    w.screen !== "closed" && gt(!0);
  }, [w.screen]), Ft.useEffect(() => {
    if (w.screen !== "quiz") return;
    const V = () => O({ type: "tick", now: Date.now() }), Tt = setInterval(V, 250);
    return document.addEventListener("visibilitychange", V), () => {
      clearInterval(Tt), document.removeEventListener("visibilitychange", V);
    };
  }, [w.screen, w.deadline]), Ft.useEffect(() => {
    var V;
    w.screen === "result" && vg("ghmeFirstAidGameCompleted"), (V = m.current) == null || V.focus();
  }, [w.screen, w.index]);
  const b = oi[w.index], C = (V) => {
    const Tt = document.getElementById("programs");
    Tt && (V.preventDefault(), J(), requestAnimationFrame(() => {
      Tt.scrollIntoView({ behavior: "instant" }), Tt.tabIndex = -1, Tt.focus({ preventScroll: !0 }), history.replaceState(null, "", "#programs");
    }));
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("button", { ref: B, type: "button", className: `game-trigger${Z ? " is-noticed" : ""}`, onPointerEnter: k, onPointerDown: k, onFocus: k, onClick: () => {
      k(), H("open");
    }, "aria-haspopup": "dialog", "aria-expanded": w.screen !== "closed", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "icon-signal", "aria-hidden": "true", children: [
        /* @__PURE__ */ r.jsx("span", { className: "signal-glow" }),
        /* @__PURE__ */ r.jsxs("span", { className: "signal-waves signal-left", children: [
          /* @__PURE__ */ r.jsx("i", {}),
          /* @__PURE__ */ r.jsx("i", {}),
          /* @__PURE__ */ r.jsx("i", {})
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "signal-heart", children: /* @__PURE__ */ r.jsx(bg, { className: "game-trigger-icon", size: 32 }) }),
        /* @__PURE__ */ r.jsxs("span", { className: "signal-waves signal-right", children: [
          /* @__PURE__ */ r.jsx("i", {}),
          /* @__PURE__ */ r.jsx("i", {}),
          /* @__PURE__ */ r.jsx("i", {})
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        "Thử thách sơ cứu ",
        /* @__PURE__ */ r.jsx("strong", { children: "4 phút" })
      ] })
    ] }),
    w.screen !== "closed" && /* @__PURE__ */ r.jsxs(mg, { compact: w.screen === "entry", onClose: N, fallbackRef: B, children: [
      /* @__PURE__ */ r.jsx("button", { className: "close-game", "aria-label": w.screen === "entry" ? "Đóng" : "Đóng thử thách", title: "Đóng", onClick: N, children: /* @__PURE__ */ r.jsx(Gv, { size: 21, "aria-hidden": "true" }) }),
      w.screen === "entry" || w.screen === "intro" ? /* @__PURE__ */ r.jsx(Jv, { intro: w.screen === "intro", imageBase: x, headingRef: m, onStart: () => H("start"), onClose: J }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(Qv, { index: w.index, total: oi.length, answered: w.responses.length, remaining: w.remaining, finished: w.finished, imageBase: x }),
        /* @__PURE__ */ r.jsx("main", { className: "game-main", children: w.screen === "quiz" ? /* @__PURE__ */ r.jsxs("div", { className: "game-composition", children: [
          /* @__PURE__ */ r.jsx(Zv, { question: b, index: w.index, imageBase: x }),
          /* @__PURE__ */ r.jsx(Lv, { question: b, index: w.index, total: oi.length, selected: w.selected, confirmed: w.confirmed, hint: w.hint, onSelect: (V) => H("select", { value: V }), onHint: () => H("hint"), onConfirm: () => H("confirm"), onNext: () => H("next", { total: oi.length }), headingRef: m })
        ] }, b.id) : /* @__PURE__ */ r.jsx(Kv, { questions: oi, responses: w.responses, remaining: w.remaining, timedOut: w.timedOut, onRestart: () => H("intro"), headingRef: m, onCourse: C }) }),
        /* @__PURE__ */ r.jsx(Vv, {})
      ] }),
      w.exit && /* @__PURE__ */ r.jsxs(mg, { confirmation: !0, onClose: () => H("continue"), children: [
        /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "Bạn vẫn có thể quay lại bất cứ lúc nào" }),
        /* @__PURE__ */ r.jsx("h2", { id: "exit-title", className: "text-2xl font-bold text-navy mt-3", children: "Bạn muốn dừng thử thách?" }),
        /* @__PURE__ */ r.jsx("p", { className: "my-5 text-sm leading-7 text-muted", children: "Lượt chơi này sẽ kết thúc. Khi quay lại, bạn sẽ bắt đầu một lượt mới. Đồng hồ vẫn chạy khi bạn cân nhắc." }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ r.jsx("button", { autoFocus: !0, className: "button-primary", onClick: () => H("continue"), children: "Tiếp tục" }),
          /* @__PURE__ */ r.jsx("button", { className: "button-secondary", onClick: J, children: "Thoát thử thách" })
        ] })
      ] })
    ] })
  ] });
}
const Fv = '@import"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap";/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:"Be Vietnam Pro", Arial, sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-navy:#123456;--color-orange:#ce510b;--color-orange-light:#fff3e9;--color-muted:#66778c;--color-line:#e0e7ef;--color-pale:#eef5fa;--color-surface:#f6f8fb}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.relative{position:relative}.static{position:static}.top-2{top:calc(var(--spacing) * 2)}.right-2{right:calc(var(--spacing) * 2)}.bottom-3{bottom:calc(var(--spacing) * 3)}.left-3{left:calc(var(--spacing) * 3)}.mx-auto{margin-inline:auto}.my-5{margin-block:calc(var(--spacing) * 5)}.my-8{margin-block:calc(var(--spacing) * 8)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-10{margin-top:calc(var(--spacing) * 10)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-7{margin-left:calc(var(--spacing) * 7)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.aspect-\\[1\\.13\\]{aspect-ratio:1.13}.size-1{width:var(--spacing);height:var(--spacing)}.size-10{width:calc(var(--spacing) * 10);height:calc(var(--spacing) * 10)}.size-16{width:calc(var(--spacing) * 16);height:calc(var(--spacing) * 16)}.h-0\\.5{height:calc(var(--spacing) * .5)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-auto{height:auto}.h-full{height:100%}.min-h-22{min-height:calc(var(--spacing) * 22)}.w-7{width:calc(var(--spacing) * 7)}.w-32{width:calc(var(--spacing) * 32)}.w-fit{width:fit-content}.w-full{width:100%}.max-w-64{max-width:calc(var(--spacing) * 64)}.max-w-140{max-width:calc(var(--spacing) * 140)}.max-w-240{max-width:calc(var(--spacing) * 240)}.max-w-300{max-width:calc(var(--spacing) * 300)}.max-w-350{max-width:calc(var(--spacing) * 350)}.min-w-0{min-width:0}.flex-1{flex:1}.shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[1fr_1fr_1fr\\]{grid-template-columns:1fr 1fr 1fr}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-8{gap:calc(var(--spacing) * 8)}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px * var(--tw-divide-x-reverse));border-inline-end-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-line>:not(:last-child)){border-color:var(--color-line)}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-\\[18px\\]{border-radius:18px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-line{border-color:var(--color-line)}.bg-line{background-color:var(--color-line)}.bg-navy{background-color:var(--color-navy)}.bg-orange{background-color:var(--color-orange)}.bg-orange-light{background-color:var(--color-orange-light)}.bg-pale{background-color:var(--color-pale)}.bg-white{background-color:var(--color-white)}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-left{object-position:left}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-7{padding:calc(var(--spacing) * 7)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pt-7{padding-top:calc(var(--spacing) * 7)}.pr-16{padding-right:calc(var(--spacing) * 16)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[27px\\]{font-size:27px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-6{--tw-leading:calc(var(--spacing) * 6);line-height:calc(var(--spacing) * 6)}.leading-7{--tw-leading:calc(var(--spacing) * 7);line-height:calc(var(--spacing) * 7)}.leading-8{--tw-leading:calc(var(--spacing) * 8);line-height:calc(var(--spacing) * 8)}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-\\[1\\.65\\]{--tw-leading:1.65;line-height:1.65}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[-0\\.7px\\]{--tw-tracking:-.7px;letter-spacing:-.7px}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-pre-line{white-space:pre-line}.text-muted{color:var(--color-muted)}.text-navy{color:var(--color-navy)}.text-navy\\/60{color:#12345699}@supports (color:color-mix(in lab,red,red)){.text-navy\\/60{color:color-mix(in oklab,var(--color-navy) 60%,transparent)}}.text-orange{color:var(--color-orange)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_12px_50px_\\#10365e06\\]{--tw-shadow:0 12px 50px var(--tw-shadow-color,#10365e06);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}@media not all and (min-width:64rem){.max-lg\\:hidden{display:none}}@media not all and (min-width:48rem){.max-md\\:aspect-\\[1\\.8\\]{aspect-ratio:1.8}}@media not all and (min-width:40rem){.max-sm\\:order-3{order:3}.max-sm\\:col-span-2{grid-column:span 2/span 2}.max-sm\\:max-w-none{max-width:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.max-sm\\:gap-4{gap:calc(var(--spacing) * 4)}.max-sm\\:py-4{padding-block:calc(var(--spacing) * 4)}.max-sm\\:pr-14{padding-right:calc(var(--spacing) * 14)}.max-sm\\:pl-5{padding-left:calc(var(--spacing) * 5)}.max-sm\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}}@media(min-width:48rem){.md\\:p-12{padding:calc(var(--spacing) * 12)}.md\\:pl-2{padding-left:calc(var(--spacing) * 2)}}@media(min-width:64rem){.lg\\:p-6{padding:calc(var(--spacing) * 6)}.lg\\:py-3{padding-block:calc(var(--spacing) * 3)}.lg\\:pl-4{padding-left:calc(var(--spacing) * 4)}.lg\\:text-\\[29px\\]{font-size:29px}}}body{min-width:320px;margin:0}button,a,label{-webkit-tap-highlight-color:transparent}button,summary,label{touch-action:manipulation}button{cursor:pointer}button:disabled{cursor:not-allowed}:focus-visible{outline-offset:4px;outline:3px solid #528ab7}.question-heading:focus{outline:none}.eyebrow{--tw-font-weight:var(--font-weight-semibold);font-size:10px;font-weight:var(--font-weight-semibold);--tw-tracking:1.6px;letter-spacing:1.6px;color:var(--color-orange);text-transform:uppercase}.button-primary{min-height:calc(var(--spacing) * 12);justify-content:center;align-items:center;gap:calc(var(--spacing) * 3);border-radius:var(--radius-lg);border-style:var(--tw-border-style);background-color:var(--color-orange);padding-inline:calc(var(--spacing) * 5);padding-block:calc(var(--spacing) * 3);--tw-font-weight:var(--font-weight-semibold);font-size:13px;font-weight:var(--font-weight-semibold);color:var(--color-white);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.2s;border-width:1px;border-color:#0000;transition-duration:.2s;display:inline-flex}@media(hover:hover){.button-primary:hover{background-color:#b64407}}.button-primary:disabled{color:#7e8a98;background-color:#e6eaf0}.button-secondary{min-height:calc(var(--spacing) * 12);justify-content:center;align-items:center;gap:calc(var(--spacing) * 2);border-radius:var(--radius-lg);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-line);background-color:var(--color-white);padding-inline:calc(var(--spacing) * 4);padding-block:calc(var(--spacing) * 3);--tw-font-weight:var(--font-weight-medium);font-size:13px;font-weight:var(--font-weight-medium);color:var(--color-navy);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.2s;transition-duration:.2s;display:inline-flex}@media(hover:hover){.button-secondary:hover{border-color:#12345680}@supports (color:color-mix(in lab,red,red)){.button-secondary:hover{border-color:color-mix(in oklab,var(--color-navy) 50%,transparent)}}.button-secondary:hover{background-color:var(--color-pale)}}.button-secondary:disabled{opacity:.45}.answer-option{min-height:calc(var(--spacing) * 28);cursor:pointer;align-items:flex-start;gap:calc(var(--spacing) * 3);border-radius:var(--radius-xl);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-line);background-color:var(--color-white);padding:calc(var(--spacing) * 4);color:var(--color-navy);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.2s;transition-duration:.2s;display:flex;position:relative}@media(hover:hover){.answer-option:hover{border-color:#12345680}@supports (color:color-mix(in lab,red,red)){.answer-option:hover{border-color:color-mix(in oklab,var(--color-navy) 50%,transparent)}}.answer-option:hover{background-color:#eef5fa66}@supports (color:color-mix(in lab,red,red)){.answer-option:hover{background-color:color-mix(in oklab,var(--color-pale) 40%,transparent)}}}.answer-option:has(input:focus-visible){outline-offset:3px;outline:3px solid #528ab7}.answer-letter{width:calc(var(--spacing) * 8);height:calc(var(--spacing) * 8);border-radius:var(--radius-lg);border-style:var(--tw-border-style);border-width:1px;border-color:var(--color-line);background-color:var(--color-surface);font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height));--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.2s;flex-shrink:0;justify-content:center;align-items:center;transition-duration:.2s;display:flex}.answer-option.is-selected{border-color:var(--color-navy);background-color:var(--color-pale);--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);--tw-ring-color:var(--color-navy)}.answer-option.is-selected .answer-letter{border-color:var(--color-navy);background-color:var(--color-navy);color:var(--color-white)}.answer-option.is-locked{cursor:default}.answer-option.is-locked:not(.is-selected){background-color:#f6f8fb99}@supports (color:color-mix(in lab,red,red)){.answer-option.is-locked:not(.is-selected){background-color:color-mix(in oklab,var(--color-surface) 60%,transparent)}}.answer-option.is-locked:not(.is-selected){color:var(--color-muted)}.skip-link{z-index:50;color:#123456;background:#fff;padding:12px;position:fixed;top:-60px;left:16px}.skip-link:focus{top:12px}.feedback{animation:.18s ease-out reveal}@keyframes reveal{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media(prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}:host{color:#123456;font-family:Be Vietnam Pro,Arial,sans-serif;font-size:16px;line-height:1.5}.game-trigger{z-index:40;color:#123456;background:#fff;border:1px solid #dce5ed;border-radius:40px;align-items:center;gap:10px;padding:13px 19px;font-size:12px;display:flex;position:fixed;bottom:24px;right:24px;box-shadow:0 4px 20px #12345618}.game-trigger strong{color:#b84709;margin-left:5px}.game-trigger{--trigger-pulse:1.022;transition:transform .2s,border-color .2s,box-shadow .2s;animation:.45s cubic-bezier(.22,1,.36,1) 2.5s backwards trigger-enter,.7s ease-in-out 4.85s trigger-pulse,.7s ease-in-out 19.45s trigger-pulse}.game-trigger-icon{transform-origin:50%;flex-shrink:0;transition:transform .2s;animation:4.8s ease-in-out 3.55s infinite signal-heartbeat}.game-trigger strong{transition:color .2s;animation:.4s ease-in-out 4.45s trigger-emphasis;display:inline-block}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(10px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}@keyframes signal-heartbeat{0%,8%,17%,to{transform:scale(1)}4%{transform:scale(1.08)}12%{transform:scale(1.04)}}@keyframes trigger-emphasis{0%,to{transform:scale(1)}50%{transform:scale(1.04)}}@keyframes trigger-pulse{0%,to{transform:scale(1)}50%{transform:scale(var(--trigger-pulse))}}.game-trigger.is-noticed,.game-trigger.is-noticed strong{animation:none}.icon-signal{--signal-heart:#9e3348;--signal-wave:#c65c79;--signal-strength:.8;pointer-events:none;flex:0 0 70px;justify-content:center;align-items:center;width:70px;height:20px;display:flex;position:relative}.signal-heart{color:var(--signal-heart);transition:transform .2s;display:flex;position:relative}.signal-glow{opacity:.8;background:radial-gradient(#d6628526,#e797b314 48%,#0000 72%);border-radius:50%;width:54px;height:44px;transition:opacity .2s;position:absolute}.signal-waves{position:absolute;top:0;right:0;bottom:0;left:0}.signal-right{transform:scaleX(-1)}.signal-waves i{border-left:2.2px solid var(--signal-wave);opacity:0;transform-origin:100%;border-radius:50%;width:8px;height:24px;margin-top:-12px;animation:4.8s ease-out 3.75s infinite signal-wave;position:absolute;top:50%;left:calc(50% - 23px)}.signal-waves i:nth-child(2){--signal-strength:.62;height:30px;margin-top:-15px;animation-delay:3.9s;left:calc(50% - 28px)}.signal-waves i:nth-child(3){--signal-strength:.44;height:36px;margin-top:-18px;animation-delay:4.05s;left:calc(50% - 33px)}@keyframes signal-wave{0%{opacity:0;transform:translate(2px)scale(.75)}7%,12%{opacity:var(--signal-strength)}23%,to{opacity:0;transform:translate(-1px)scale(1)}}.game-trigger[aria-expanded=true] .game-trigger-icon,.game-trigger[aria-expanded=true] .signal-waves i{animation-play-state:paused}@media(hover:hover)and (pointer:fine){.game-trigger:hover{border-color:#b9cad9;transform:translateY(-2px);box-shadow:0 6px 24px #12345620}.game-trigger:hover .signal-heart{transform:scale(1.04)}.game-trigger:hover .signal-glow{opacity:1}.game-trigger:hover strong{color:#a74008}}.game-trigger:focus-visible{outline-offset:4px;outline:2px solid #528ab7}.game-trigger:active{transition-duration:.12s;transform:scale(.98)}@media(max-width:767px){.game-trigger{--trigger-pulse:1.015}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(6px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}}@media(max-width:1024px){.icon-signal{flex-basis:64px;width:64px}.signal-waves{transform:scaleX(.9)}.signal-right{transform:scaleX(-.9)}}@media(max-width:430px){.icon-signal{--signal-strength:.7;flex-basis:58px;width:58px}.game-trigger-icon{width:28px;height:28px}.signal-glow{opacity:.65;width:48px;height:40px}.signal-waves{transform:scale(.82)}.signal-right{transform:scale(-.82,.82)}.signal-waves i:nth-child(2){--signal-strength:.54}.signal-waves i:nth-child(3){--signal-strength:.38}}@media(prefers-reduced-motion:reduce){.game-trigger,.game-trigger:hover,.game-trigger:active,.game-trigger .game-trigger-icon,.game-trigger:hover .game-trigger-icon,.game-trigger strong,.game-trigger:hover .signal-heart{transform:none}.signal-waves{display:none}}.game-dialog{color:#123456;overscroll-behavior:contain;background:#fff;border:1px solid #e0e7ef;border-radius:22px;width:min(1280px,100% - 64px);max-width:none;max-height:calc(100dvh - 64px);margin:auto;padding:0;position:fixed;top:0;right:0;bottom:0;left:0;overflow-y:auto;box-shadow:0 20px 80px #0d243533}.game-dialog[open]{animation:.2s ease-out reveal}.game-dialog::backdrop{background:#102a486b}.exit-dialog{width:min(480px,100% - 40px);padding:32px}.close-game{z-index:2;color:#123456;background:#f1f5f8;border:1px solid #dce5ed;border-radius:50%;place-items:center;width:36px;height:36px;display:grid;position:absolute;top:14px;right:14px}.close-game:hover{background:#e2ecf3}.game-main{padding:28px}.game-composition{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:30px;animation:.18s ease-out reveal;display:grid}.situation-note{color:#52677d;border-top:1px solid #12345618;align-items:flex-start;gap:10px;margin-top:24px;padding-top:18px;font-size:12px;line-height:1.8;display:flex}.situation-note svg{flex-shrink:0;margin-top:3px}.hint-panel{color:#52677d;background:#eef5fa;border-radius:10px;gap:10px;margin-top:15px;padding:14px;font-size:12px;line-height:1.8;display:flex}.hint-panel svg{color:#b84709;flex-shrink:0;margin-top:4px}.hint-panel strong{color:#123456}.welcome{grid-template-columns:.82fr 1.18fr;display:grid}.welcome-visual{background:#edf4f8;flex-direction:column;justify-content:center;padding:32px 26px;display:flex}.welcome-logo{object-fit:contain;object-position:left;width:115px;height:auto;margin-bottom:30px}.welcome-photo{position:relative}.welcome-photo>img{aspect-ratio:.96;object-fit:cover;border-radius:80px 80px 12px 12px;width:100%}.welcome-photo>span{background:#fffffff2;border-radius:4px;padding:5px 8px;font-size:9px;position:absolute;bottom:12px;left:12px}.welcome-caption{margin-top:24px}.welcome-caption p{margin-top:8px;font-size:19px;font-weight:600;line-height:1.6}.welcome-content{padding:52px 34px 28px}.welcome-title{letter-spacing:-1px;margin-top:20px;font-size:31px;font-weight:800;line-height:1.24}.welcome-title>span:first-child{letter-spacing:-2px;font-size:60px}.welcome-question{margin-top:22px;font-size:18px;font-weight:600;line-height:1.65}.welcome-description{color:#52677d;margin-top:10px;font-size:13px;line-height:1.9}.welcome-benefits{color:#52677d;gap:12px;margin:22px 0 25px;font-size:12px;display:grid}.welcome-benefits li{align-items:center;gap:10px;display:flex}.welcome-benefits svg{color:#123456;flex-shrink:0}.welcome-start{width:100%}.welcome-later{color:#52677d;text-underline-offset:4px;min-height:42px;margin:7px auto 0;padding:8px 20px;font-size:12px;text-decoration:underline;display:block}.welcome-trust{color:#52677d;justify-content:center;align-items:center;gap:6px;margin-top:12px;font-size:9px;display:flex}.welcome-note{color:#52677d;border-top:1px solid #dce5ed;margin-top:20px;padding-top:16px;font-size:11px;line-height:1.8}.welcome-intro{max-width:960px;margin:auto}.welcome-intro .welcome-content{padding-top:64px;padding-bottom:40px}.result-next{text-align:center;border-block:1px solid #e0e7ef;padding:26px 0}.result-next h2{font-size:18px;font-weight:600}.result-next p{color:#52677d;margin:10px 0 20px;font-size:13px}@media(max-width:900px){.game-dialog{width:calc(100% - 32px);max-height:calc(100dvh - 32px)}.exit-dialog{width:min(480px,100% - 32px)}.game-main{padding:22px}.game-composition{gap:20px}.welcome-content{padding-inline:24px}.welcome-title{font-size:26px}}@media(max-width:767px){.game-composition{grid-template-columns:minmax(0,1fr)}.game-composition aside{padding:16px}.game-composition aside img{max-height:210px}.game-composition aside h2,.situation-note,.game-composition aside>div:last-of-type{display:none}.welcome{grid-template-columns:minmax(0,1fr)}.welcome-visual{padding:20px 24px}.welcome-logo{width:94px;height:auto;margin:0}.welcome-photo,.welcome-caption{display:none}.welcome-content,.welcome-intro .welcome-content{padding:22px 24px}.welcome-title{margin-top:12px;font-size:29px}.welcome-title>span:first-child{font-size:49px}.welcome-question{margin-top:16px;font-size:17px}.welcome-benefits{gap:10px;margin-block:18px}}@media(max-width:479px){.game-dialog{border-radius:18px;width:calc(100% - 20px);max-height:calc(100dvh - 20px)}.game-main{padding:16px}.game-trigger{padding:11px 15px;bottom:12px;right:12px}.answer-option{min-height:76px}.welcome-trust{font-size:8.5px}.exit-dialog{padding:25px}}*,:before,:after{--tw-border-style:solid}.answer-option{border:1px solid #d6e1eb}.answer-option.is-selected{border:2px solid #123456;padding:15px;box-shadow:0 0 0 1px #123456}.button-secondary{border:1px solid #d6e1eb}.entry-dialog{border-radius:18px;width:480px;max-width:calc(100% - 48px);max-height:calc(100dvh - 80px);margin:0;inset:auto 40px 40px auto;box-shadow:0 12px 40px #102a4820}.entry-dialog::backdrop{background:#102a4852}.entry-dialog[open]{animation:.3s ease-out invite-in}@keyframes invite-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.entry-dialog .close-game{width:44px;height:44px;top:12px;right:12px}.micro-invitation{padding:30px 32px 28px}.micro-label{letter-spacing:.25px;text-transform:uppercase;color:#b84709;padding-right:28px;font-size:10px;font-weight:600;line-height:1.7}.micro-label strong{color:#123456}.micro-body{grid-template-columns:174px minmax(0,1fr);align-items:center;gap:26px;margin:36px 0 28px;display:grid}.micro-duration{text-align:center;color:#123456}.micro-duration>span{letter-spacing:-1.8px;font-variant-numeric:tabular-nums;font-size:52px;font-weight:600;line-height:1.1;display:block}.micro-duration small{color:#66778c;margin-top:8px;font-size:12px;display:block}.micro-heading{letter-spacing:-.8px;margin:0;font-size:26px;font-weight:700;line-height:1.28}.micro-actions{align-items:center;gap:26px;display:flex}.micro-start{min-width:194px}.micro-later{color:#52677d;border-radius:8px;min-height:44px;padding:10px 12px;font-size:12px;transition:background .18s}.micro-later:hover{color:#123456;background:#eef5fa}@media(max-width:800px){.entry-dialog{max-height:calc(100dvh - 48px);bottom:24px;right:24px}}@media(max-width:479px){.entry-dialog{right:12px;bottom:max(12px,env(safe-area-inset-bottom));width:calc(100% - 24px);max-width:none;max-height:calc(100dvh - 36px)}.micro-invitation{padding:28px 22px 24px}.micro-label{padding-right:30px;font-size:9px}.micro-body{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:18px;margin:30px 0 24px}.micro-duration>span{font-size:43px}.micro-duration small{font-size:11px}.micro-heading{letter-spacing:-.6px;font-size:23px}.micro-actions{gap:20px}.micro-start{min-width:166px}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}', Mo = document.getElementById("ghme-first-aid") || document.getElementById("root");
if (Mo && !Mo.shadowRoot) {
  const x = Mo.attachShadow({ mode: "open" }), w = document.createElement("style");
  w.textContent = Fv;
  const O = document.createElement("div");
  x.append(w, O);
  const m = new URL(
    /* @vite-ignore */
    "./images/",
    import.meta.url
  ).href;
  Cv.createRoot(O).render(/* @__PURE__ */ r.jsx(wv.StrictMode, { children: /* @__PURE__ */ r.jsx($v, { imageBase: m }) }));
}
