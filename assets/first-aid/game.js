function z0(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var wf = { exports: {} }, fi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug;
function T0() {
  if (ug) return fi;
  ug = 1;
  var x = Symbol.for("react.transitional.element"), w = Symbol.for("react.fragment");
  function A(d, T, G) {
    var Q = null;
    if (G !== void 0 && (Q = "" + G), T.key !== void 0 && (Q = "" + T.key), "key" in T) {
      G = {};
      for (var N in T)
        N !== "key" && (G[N] = T[N]);
    } else G = T;
    return T = G.ref, {
      $$typeof: x,
      type: d,
      key: Q,
      ref: T !== void 0 ? T : null,
      props: G
    };
  }
  return fi.Fragment = w, fi.jsx = A, fi.jsxs = A, fi;
}
var cg;
function E0() {
  return cg || (cg = 1, wf.exports = T0()), wf.exports;
}
var f = E0(), Af = { exports: {} }, J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;
function w0() {
  if (og) return J;
  og = 1;
  var x = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), et = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), O = Symbol.for("react.view_transition"), I = Symbol.iterator;
  function F(s) {
    return s === null || typeof s != "object" ? null : (s = I && s[I] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, tt = Object.assign, Yt = {};
  function Vt(s, E, U) {
    this.props = s, this.context = E, this.refs = Yt, this.updater = U || V;
  }
  Vt.prototype.isReactComponent = {}, Vt.prototype.setState = function(s, E) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, E, "setState");
  }, Vt.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = Vt.prototype;
  function q(s, E, U) {
    this.props = s, this.context = E, this.refs = Yt, this.updater = U || V;
  }
  var ct = q.prototype = new fe();
  ct.constructor = q, tt(ct, Vt.prototype), ct.isPureReactComponent = !0;
  var xt = Array.isArray;
  function Z() {
  }
  var st = { H: null, A: null, T: null, S: null }, Qe = Object.prototype.hasOwnProperty;
  function ze(s, E, U) {
    var Y = U.ref;
    return {
      $$typeof: x,
      type: s,
      key: E,
      ref: Y !== void 0 ? Y : null,
      props: U
    };
  }
  function Te(s, E) {
    return ze(s.type, E, s.props);
  }
  function re(s) {
    return typeof s == "object" && s !== null && s.$$typeof === x;
  }
  function xl(s) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(U) {
      return E[U];
    });
  }
  var Wl = /\/+/g;
  function qt(s, E) {
    return typeof s == "object" && s !== null && s.key != null ? xl("" + s.key) : E.toString(36);
  }
  function M(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Z, Z) : (s.status = "pending", s.then(
          function(E) {
            s.status === "pending" && (s.status = "fulfilled", s.value = E);
          },
          function(E) {
            s.status === "pending" && (s.status = "rejected", s.reason = E);
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
  function X(s, E, U, Y, ot) {
    var ft = typeof s;
    (ft === "undefined" || ft === "boolean") && (s = null);
    var ht = !1;
    if (s === null) ht = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case x:
            case w:
              ht = !0;
              break;
            case _:
              return ht = s._init, X(
                ht(s._payload),
                E,
                U,
                Y,
                ot
              );
          }
      }
    if (ht)
      return ot = ot(s), ht = Y === "" ? "." + qt(s, 0) : Y, xt(ot) ? (U = "", ht != null && (U = ht.replace(Wl, "$&/") + "/"), X(ot, E, U, "", function(nl) {
        return nl;
      })) : ot != null && (re(ot) && (ot = Te(
        ot,
        U + (ot.key == null || s && s.key === ot.key ? "" : ("" + ot.key).replace(
          Wl,
          "$&/"
        ) + "/") + ht
      )), E.push(ot)), 1;
    ht = 0;
    var j = Y === "" ? "." : Y + ":";
    if (xt(s))
      for (var K = 0; K < s.length; K++)
        Y = s[K], ft = j + qt(Y, K), ht += X(
          Y,
          E,
          U,
          ft,
          ot
        );
    else if (K = F(s), typeof K == "function")
      for (s = K.call(s), K = 0; !(Y = s.next()).done; )
        Y = Y.value, ft = j + qt(Y, K++), ht += X(
          Y,
          E,
          U,
          ft,
          ot
        );
    else if (ft === "object") {
      if (typeof s.then == "function")
        return X(
          M(s),
          E,
          U,
          Y,
          ot
        );
      throw E = String(s), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ht;
  }
  function L(s, E, U) {
    if (s == null) return s;
    var Y = [], ot = 0;
    return X(s, Y, "", "", function(ft) {
      return E.call(U, ft, ot++);
    }), Y;
  }
  function St(s) {
    if (s._status === -1) {
      var E = s._result, U = E();
      U.then(
        function(Y) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = Y, U.status === void 0 && (U.status = "fulfilled", U.value = Y));
        },
        function(Y) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = Y, U.status === void 0 && (U.status = "rejected", U.reason = Y));
        }
      ), s._status === -1 && (s._status = 0, s._result = U);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var gt = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function je(s) {
    var E = st.T, U = {};
    U.types = E !== null ? E.types : null, st.T = U;
    try {
      var Y = s(), ot = st.S;
      ot !== null && ot(U, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Z, gt);
    } catch (ft) {
      gt(ft);
    } finally {
      E !== null && U.types !== null && (E.types = U.types), st.T = E;
    }
  }
  function ll(s) {
    var E = st.T;
    if (E !== null) {
      var U = E.types;
      U === null ? E.types = [s] : U.indexOf(s) === -1 && U.push(s);
    } else je(ll.bind(null, s));
  }
  var $l = {
    map: L,
    forEach: function(s, E, U) {
      L(
        s,
        function() {
          E.apply(this, arguments);
        },
        U
      );
    },
    count: function(s) {
      var E = 0;
      return L(s, function() {
        E++;
      }), E;
    },
    toArray: function(s) {
      return L(s, function(E) {
        return E;
      }) || [];
    },
    only: function(s) {
      if (!re(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return J.Activity = v, J.Children = $l, J.Component = Vt, J.Fragment = A, J.Profiler = T, J.PureComponent = q, J.StrictMode = d, J.Suspense = et, J.ViewTransition = O, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = st, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return st.H.useMemoCache(s);
    }
  }, J.addTransitionType = ll, J.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(s, E, U) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var Y = tt({}, s.props), ot = s.key;
    if (E != null)
      for (ft in E.key !== void 0 && (ot = "" + E.key), E)
        !Qe.call(E, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && E.ref === void 0 || (Y[ft] = E[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) Y.children = U;
    else if (1 < ft) {
      for (var ht = Array(ft), j = 0; j < ft; j++)
        ht[j] = arguments[j + 2];
      Y.children = ht;
    }
    return ze(s.type, ot, Y);
  }, J.createContext = function(s) {
    return s = {
      $$typeof: Q,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: G,
      _context: s
    }, s;
  }, J.createElement = function(s, E, U) {
    var Y, ot = {}, ft = null;
    if (E != null)
      for (Y in E.key !== void 0 && (ft = "" + E.key), E)
        Qe.call(E, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (ot[Y] = E[Y]);
    var ht = arguments.length - 2;
    if (ht === 1) ot.children = U;
    else if (1 < ht) {
      for (var j = Array(ht), K = 0; K < ht; K++)
        j[K] = arguments[K + 2];
      ot.children = j;
    }
    if (s && s.defaultProps)
      for (Y in ht = s.defaultProps, ht)
        ot[Y] === void 0 && (ot[Y] = ht[Y]);
    return ze(s, ft, ot);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(s) {
    return { $$typeof: N, render: s };
  }, J.isValidElement = re, J.lazy = function(s) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: s },
      _init: St
    };
  }, J.memo = function(s, E) {
    return {
      $$typeof: k,
      type: s,
      compare: E === void 0 ? null : E
    };
  }, J.startTransition = je, J.unstable_useCacheRefresh = function() {
    return st.H.useCacheRefresh();
  }, J.use = function(s) {
    return st.H.use(s);
  }, J.useActionState = function(s, E, U) {
    return st.H.useActionState(s, E, U);
  }, J.useCallback = function(s, E) {
    return st.H.useCallback(s, E);
  }, J.useContext = function(s) {
    return st.H.useContext(s);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(s, E) {
    return st.H.useDeferredValue(s, E);
  }, J.useEffect = function(s, E) {
    return st.H.useEffect(s, E);
  }, J.useEffectEvent = function(s) {
    return st.H.useEffectEvent(s);
  }, J.useId = function() {
    return st.H.useId();
  }, J.useImperativeHandle = function(s, E, U) {
    return st.H.useImperativeHandle(s, E, U);
  }, J.useInsertionEffect = function(s, E) {
    return st.H.useInsertionEffect(s, E);
  }, J.useLayoutEffect = function(s, E) {
    return st.H.useLayoutEffect(s, E);
  }, J.useMemo = function(s, E) {
    return st.H.useMemo(s, E);
  }, J.useOptimistic = function(s, E) {
    return st.H.useOptimistic(s, E);
  }, J.useReducer = function(s, E, U) {
    return st.H.useReducer(s, E, U);
  }, J.useRef = function(s) {
    return st.H.useRef(s);
  }, J.useState = function(s) {
    return st.H.useState(s);
  }, J.useSyncExternalStore = function(s, E, U) {
    return st.H.useSyncExternalStore(
      s,
      E,
      U
    );
  }, J.useTransition = function() {
    return st.H.useTransition();
  }, J.version = "19.3.0", J;
}
var fg;
function Df() {
  return fg || (fg = 1, Af.exports = w0()), Af.exports;
}
var Tt = Df();
const A0 = /* @__PURE__ */ z0(Tt);
var Nf = { exports: {} }, ri = {}, Cf = { exports: {} }, Of = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function N0() {
  return rg || (rg = 1, (function(x) {
    function w(M, X) {
      var L = M.length;
      M.push(X);
      t: for (; 0 < L; ) {
        var St = L - 1 >>> 1, gt = M[St];
        if (0 < T(gt, X))
          M[St] = X, M[L] = gt, L = St;
        else break t;
      }
    }
    function A(M) {
      return M.length === 0 ? null : M[0];
    }
    function d(M) {
      if (M.length === 0) return null;
      var X = M[0], L = M.pop();
      if (L !== X) {
        M[0] = L;
        t: for (var St = 0, gt = M.length, je = gt >>> 1; St < je; ) {
          var ll = 2 * (St + 1) - 1, $l = M[ll], s = ll + 1, E = M[s];
          if (0 > T($l, L))
            s < gt && 0 > T(E, $l) ? (M[St] = E, M[s] = L, St = s) : (M[St] = $l, M[ll] = L, St = ll);
          else if (s < gt && 0 > T(E, L))
            M[St] = E, M[s] = L, St = s;
          else break t;
        }
      }
      return X;
    }
    function T(M, X) {
      var L = M.sortIndex - X.sortIndex;
      return L !== 0 ? L : M.id - X.id;
    }
    if (x.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var G = performance;
      x.unstable_now = function() {
        return G.now();
      };
    } else {
      var Q = Date, N = Q.now();
      x.unstable_now = function() {
        return Q.now() - N;
      };
    }
    var et = [], k = [], _ = 1, v = null, O = 3, I = !1, F = !1, V = !1, tt = !1, Yt = typeof setTimeout == "function" ? setTimeout : null, Vt = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function q(M) {
      for (var X = A(k); X !== null; ) {
        if (X.callback === null) d(k);
        else if (X.startTime <= M)
          d(k), X.sortIndex = X.expirationTime, w(et, X);
        else break;
        X = A(k);
      }
    }
    function ct(M) {
      if (V = !1, q(M), !F)
        if (A(et) !== null)
          F = !0, xt || (xt = !0, re());
        else {
          var X = A(k);
          X !== null && qt(ct, X.startTime - M);
        }
    }
    var xt = !1, Z = -1, st = 5, Qe = -1;
    function ze() {
      return tt ? !0 : !(x.unstable_now() - Qe < st);
    }
    function Te() {
      if (tt = !1, xt) {
        var M = x.unstable_now();
        Qe = M;
        var X = !0;
        try {
          t: {
            F = !1, V && (V = !1, Vt(Z), Z = -1), I = !0;
            var L = O;
            try {
              e: {
                for (q(M), v = A(et); v !== null && !(v.expirationTime > M && ze()); ) {
                  var St = v.callback;
                  if (typeof St == "function") {
                    v.callback = null, O = v.priorityLevel;
                    var gt = St(
                      v.expirationTime <= M
                    );
                    if (M = x.unstable_now(), typeof gt == "function") {
                      v.callback = gt, q(M), X = !0;
                      break e;
                    }
                    v === A(et) && d(et), q(M);
                  } else d(et);
                  v = A(et);
                }
                if (v !== null) X = !0;
                else {
                  var je = A(k);
                  je !== null && qt(
                    ct,
                    je.startTime - M
                  ), X = !1;
                }
              }
              break t;
            } finally {
              v = null, O = L, I = !1;
            }
            X = void 0;
          }
        } finally {
          X ? re() : xt = !1;
        }
      }
    }
    var re;
    if (typeof fe == "function")
      re = function() {
        fe(Te);
      };
    else if (typeof MessageChannel < "u") {
      var xl = new MessageChannel(), Wl = xl.port2;
      xl.port1.onmessage = Te, re = function() {
        Wl.postMessage(null);
      };
    } else
      re = function() {
        Yt(Te, 0);
      };
    function qt(M, X) {
      Z = Yt(function() {
        M(x.unstable_now());
      }, X);
    }
    x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, x.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : st = 0 < M ? Math.floor(1e3 / M) : 5;
    }, x.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, x.unstable_next = function(M) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = O;
      }
      var L = O;
      O = X;
      try {
        return M();
      } finally {
        O = L;
      }
    }, x.unstable_requestPaint = function() {
      tt = !0;
    }, x.unstable_runWithPriority = function(M, X) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var L = O;
      O = M;
      try {
        return X();
      } finally {
        O = L;
      }
    }, x.unstable_scheduleCallback = function(M, X, L) {
      var St = x.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? St + L : St) : L = St, M) {
        case 1:
          var gt = -1;
          break;
        case 2:
          gt = 250;
          break;
        case 5:
          gt = 1073741823;
          break;
        case 4:
          gt = 1e4;
          break;
        default:
          gt = 5e3;
      }
      return gt = L + gt, M = {
        id: _++,
        callback: X,
        priorityLevel: M,
        startTime: L,
        expirationTime: gt,
        sortIndex: -1
      }, L > St ? (M.sortIndex = L, w(k, M), A(et) === null && M === A(k) && (V ? (Vt(Z), Z = -1) : V = !0, qt(ct, L - St))) : (M.sortIndex = gt, w(et, M), F || I || (F = !0, xt || (xt = !0, re()))), M;
    }, x.unstable_shouldYield = ze, x.unstable_wrapCallback = function(M) {
      var X = O;
      return function() {
        var L = O;
        O = X;
        try {
          return M.apply(this, arguments);
        } finally {
          O = L;
        }
      };
    };
  })(Of)), Of;
}
var sg;
function C0() {
  return sg || (sg = 1, Cf.exports = N0()), Cf.exports;
}
var _f = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hg;
function O0() {
  if (hg) return $t;
  hg = 1;
  var x = Df();
  function w(_) {
    var v = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        v += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return "Minified React error #" + _ + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var d = {
    d: {
      f: A,
      r: function() {
        throw Error(w(522));
      },
      D: A,
      C: A,
      L: A,
      m: A,
      X: A,
      S: A,
      M: A
    },
    p: 0,
    findDOMNode: null
  }, T = Symbol.for("react.portal"), G = Symbol.for("react.recoverable"), Q = Symbol.for("react.optimistic_key");
  function N(_, v, O) {
    var I = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: I == null ? null : I === Q ? Q : "" + I,
      children: _,
      containerInfo: v,
      implementation: O
    };
  }
  var et = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(_, v) {
    if (_ === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, $t.browser = function(_) {
    return { $$typeof: G, _reason: _ };
  }, $t.createPortal = function(_, v) {
    var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(w(299));
    return N(_, v, null, O);
  }, $t.flushSync = function(_) {
    var v = et.T, O = d.p;
    try {
      if (et.T = null, d.p = 2, _) return _();
    } finally {
      et.T = v, d.p = O, d.d.f();
    }
  }, $t.preconnect = function(_, v) {
    typeof _ == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, d.d.C(_, v));
  }, $t.prefetchDNS = function(_) {
    typeof _ == "string" && d.d.D(_);
  }, $t.preinit = function(_, v) {
    if (typeof _ == "string" && v && typeof v.as == "string") {
      var O = v.as, I = k(O, v.crossOrigin), F = typeof v.integrity == "string" ? v.integrity : void 0, V = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      O === "style" ? d.d.S(
        _,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: I,
          integrity: F,
          fetchPriority: V
        }
      ) : O === "script" && d.d.X(_, {
        crossOrigin: I,
        integrity: F,
        fetchPriority: V,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, $t.preinitModule = function(_, v) {
    if (typeof _ == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var O = k(
            v.as,
            v.crossOrigin
          );
          d.d.M(_, {
            crossOrigin: O,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && d.d.M(_);
  }, $t.preload = function(_, v) {
    if (typeof _ == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var O = v.as, I = k(O, v.crossOrigin);
      d.d.L(_, O, {
        crossOrigin: I,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, $t.preloadModule = function(_, v) {
    if (typeof _ == "string")
      if (v) {
        var O = k(v.as, v.crossOrigin);
        d.d.m(_, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: O,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else d.d.m(_);
  }, $t.requestFormReset = function(_) {
    d.d.r(_);
  }, $t.unstable_batchedUpdates = function(_, v) {
    return _(v);
  }, $t.useFormState = function(_, v, O) {
    return et.H.useFormState(_, v, O);
  }, $t.useFormStatus = function() {
    return et.H.useHostTransitionStatus();
  }, $t.version = "19.3.0", $t;
}
var dg;
function _0() {
  if (dg) return _f.exports;
  dg = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (w) {
        console.error(w);
      }
  }
  return x(), _f.exports = O0(), _f.exports;
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
var gg;
function M0() {
  if (gg) return ri;
  gg = 1;
  var x = C0(), w = Df(), A = _0();
  function d(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function G(t) {
    for (var e = t, l = e; l && !l.alternate; )
      e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function Q(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function et(t) {
    if (G(t) !== t)
      throw Error(d(188));
  }
  function k(t) {
    var e = t.alternate;
    if (!e) {
      if (e = G(t), e === null) throw Error(d(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return et(a), t;
          if (i === n) return et(a), e;
          i = i.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var u = !1, c = a.child; c; ) {
          if (c === l) {
            u = !0, l = a, n = i;
            break;
          }
          if (c === n) {
            u = !0, n = a, l = i;
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === l) {
              u = !0, l = i, n = a;
              break;
            }
            if (c === n) {
              u = !0, n = i, l = a;
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(d(189));
        }
      }
      if (l.alternate !== n) throw Error(d(190));
    }
    if (l.tag !== 3) throw Error(d(188));
    return l.stateNode.current === l ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = _(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function v(t, e, l, n, a, i) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && l(t, n, a, i) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && v(
        t.child,
        e,
        l,
        n,
        a,
        i
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function O(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function I(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function F(t) {
    var e = [null, null], l = O(t);
    return l === null || V(
      e,
      t,
      l.child,
      { foundSelf: !1 }
    ), e;
  }
  function V(t, e, l, n) {
    for (; l !== null; ) {
      if (l === e) n.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (n.foundSelf) return t[1] = l, !0;
        t[0] = l;
      } else if ((l.tag !== 22 || l.memoizedState === null) && V(
        t,
        e,
        l.child,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function tt(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(d(559));
    }
  }
  var Yt = null, Vt = null;
  function fe(t, e, l) {
    return t === l ? !0 : t === e ? (Yt = t, !0) : !1;
  }
  function q(t, e, l) {
    return t === l ? (Vt = t, !1) : t === e ? (Vt !== null && (Yt = t), !0) : !1;
  }
  function ct(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function xt(t, e, l) {
    for (var n = 0, a = t; a; a = l(a)) n++;
    a = 0;
    for (var i = e; i; i = l(i)) a++;
    for (; 0 < n - a; ) t = l(t), n--;
    for (; 0 < a - n; ) e = l(e), a--;
    for (; n--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = l(t), e = l(e);
    }
    return null;
  }
  var Z = Object.assign, st = Symbol.for("react.element"), Qe = Symbol.for("react.transitional.element"), ze = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), xl = Symbol.for("react.profiler"), Wl = Symbol.for("react.consumer"), qt = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), je = Symbol.for("react.activity"), ll = Symbol.for("react.legacy_hidden"), $l = Symbol.for("react.memo_cache_sentinel"), s = Symbol.for("react.view_transition"), E = Symbol.for("react.recoverable"), U = Symbol.iterator;
  function Y(t) {
    return t === null || typeof t != "object" ? null : (t = U && t[U] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ot = Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Te:
        return "Fragment";
      case xl:
        return "Profiler";
      case re:
        return "StrictMode";
      case X:
        return "Suspense";
      case L:
        return "SuspenseList";
      case je:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ze:
          return "Portal";
        case qt:
          return t.displayName || "Context";
        case Wl:
          return (t._context.displayName || "Context") + ".Consumer";
        case M:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case St:
          return e = t.displayName || null, e !== null ? e : ft(t.type) || "Memo";
        case gt:
          e = t._payload, t = t._init;
          try {
            return ft(t(e));
          } catch {
          }
      }
    return null;
  }
  var ht = Array.isArray, j = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Xu = [], zn = -1;
  function Xe(t) {
    return { current: t };
  }
  function Lt(t) {
    0 > zn || (t.current = Xu[zn], Xu[zn] = null, zn--);
  }
  function Et(t, e) {
    zn++, Xu[zn] = t.current, t.current = e;
  }
  var Ve = Xe(null), ma = Xe(null), bl = Xe(null), si = Xe(null);
  function hi(t, e) {
    switch (Et(bl, e), Et(ma, t), Et(Ve, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? md(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = md(e), t = pd(e, t);
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
    Lt(Ve), Et(Ve, t);
  }
  function Tn() {
    Lt(Ve), Lt(ma), Lt(bl);
  }
  function Vu(t) {
    var e = t.memoizedState;
    e !== null && (ra._currentValue = e.memoizedState, Et(si, t)), e = Ve.current;
    var l = pd(e, t.type);
    e !== l && (Et(ma, t), Et(Ve, l));
  }
  function di(t) {
    ma.current === t && (Lt(Ve), Lt(ma)), si.current === t && (Lt(si), ra._currentValue = nl);
  }
  var Lu, Uf;
  function Sl(t) {
    if (Lu === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Lu = e && e[1] || "", Uf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lu + t + Uf;
  }
  var Zu = !1;
  function Ku(t, e) {
    if (!t || Zu) return "";
    Zu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (C) {
                  var h = C;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (C) {
                  h = C;
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
              } catch (C) {
                h = C;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (C) {
            if (C && h && typeof C.stack == "string")
              return [C.stack, h.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), u = i[0], c = i[1];
      if (u && c) {
        var o = u.split(`
`), m = c.split(`
`);
        for (a = n = 0; n < o.length && !o[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < m.length && !m[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === o.length || a === m.length)
          for (n = o.length - 1, a = m.length - 1; 1 <= n && 0 <= a && o[n] !== m[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (o[n] !== m[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || o[n] !== m[a]) {
                  var b = `
` + o[n].replace(" at new ", " at ");
                  return t.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", t.displayName)), b;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Zu = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Sl(l) : "";
  }
  function Ag(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Sl(t.type);
      case 16:
        return Sl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Sl("Suspense Fallback") : Sl("Suspense");
      case 19:
        return Sl("SuspenseList");
      case 0:
      case 15:
        return Ku(t.type, !1);
      case 11:
        return Ku(t.type.render, !1);
      case 1:
        return Ku(t.type, !0);
      case 31:
        return Sl("Activity");
      case 30:
        return Sl("ViewTransition");
      default:
        return "";
    }
  }
  function Yf(t) {
    try {
      var e = "", l = null;
      do
        e += Ag(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Ju = Object.prototype.hasOwnProperty, ku = x.unstable_scheduleCallback, Fu = x.unstable_cancelCallback, Ng = x.unstable_shouldYield, Cg = x.unstable_requestPaint, se = x.unstable_now, Og = x.unstable_getCurrentPriorityLevel, qf = x.unstable_ImmediatePriority, Bf = x.unstable_UserBlockingPriority, gi = x.unstable_NormalPriority, _g = x.unstable_LowPriority, Gf = x.unstable_IdlePriority, Mg = x.log, Rg = x.unstable_setDisableYieldValue, pa = null, he = null;
  function zl(t) {
    if (typeof Mg == "function" && Rg(t), he && typeof he.setStrictMode == "function")
      try {
        he.setStrictMode(pa, t);
      } catch {
      }
  }
  var de = Math.clz32 ? Math.clz32 : Hg, Dg = Math.log, jg = Math.LN2;
  function Hg(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Dg(t) / jg | 0) | 0;
  }
  var mi = 256, pi = 262144, vi = 4194304;
  function Il(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
  function yi(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, u = t.pingedLanes;
    t = t.warmLanes;
    var c = n & 134217727;
    return c !== 0 ? (n = c & ~i, n !== 0 ? a = Il(n) : (u &= c, u !== 0 ? a = Il(u) : l || (l = c & ~t, l !== 0 && (a = Il(l))))) : (c = n & ~i, c !== 0 ? a = Il(c) : u !== 0 ? a = Il(u) : l || (l = n & ~t, l !== 0 && (a = Il(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function va(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Qf(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - de(l), a = 1 << n;
        e |= t[n], l &= ~a;
      }
    return e;
  }
  function Ug(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Xf() {
    var t = vi;
    return vi <<= 1, (vi & 62914560) === 0 && (vi = 4194304), t;
  }
  function Wu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ya(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Yg(t, e, l, n, a, i) {
    var u = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var c = t.entanglements, o = t.expirationTimes, m = t.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var b = 31 - de(l), z = 1 << b;
      c[b] = 0, o[b] = -1;
      var h = m[b];
      if (h !== null)
        for (m[b] = null, b = 0; b < h.length; b++) {
          var y = h[b];
          y !== null && (y.lane &= -536870913);
        }
      l &= ~z;
    }
    n !== 0 && Vf(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function Vf(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - de(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Lf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - de(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function Zf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : $u(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function $u(t) {
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
  function Iu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Kf() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Pd(t.type));
  }
  function Jf(t, e) {
    var l = K.p;
    try {
      return K.p = t, e();
    } finally {
      K.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + al, ne = "__reactProps$" + al, En = "__reactContainer$" + al, kf = "__reactEvents$" + al, qg = "__reactListeners$" + al, Bg = "__reactHandles$" + al, Ff = "__reactResources$" + al, xa = "__reactMarker$" + al, xi = "__reactLoad$" + al;
  function bi(t) {
    delete t[Zt], delete t[ne], delete t[qg], delete t[Bg];
  }
  function Pl(t) {
    var e;
    if (e = t[Zt]) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[En] || l[Zt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Dd(t); t !== null; ) {
            if (l = t[Zt]) return l;
            t = Dd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function wn(t) {
    if (t = t[Zt] || t[En]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ba(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(d(33));
  }
  function An(t) {
    var e = t[Ff];
    return e || (e = t[Ff] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Bt(t) {
    t[xa] = !0;
  }
  function Wf(t) {
    t[xi] = void 0;
  }
  var $f = /* @__PURE__ */ new Set(), If = {};
  function tn(t, e) {
    Nn(t, e), Nn(t + "Capture", e);
  }
  function Nn(t, e) {
    for (If[t] = e, t = 0; t < e.length; t++)
      $f.add(e[t]);
  }
  var Gg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Pf = {}, tr = {};
  function Qg(t) {
    return Ju.call(tr, t) ? !0 : Ju.call(Pf, t) ? !1 : Gg.test(t) ? tr[t] = !0 : (Pf[t] = !0, !1);
  }
  var rt = !1;
  function er() {
    var t = rt;
    return rt = !1, t;
  }
  function Si(t, e, l) {
    if (Qg(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, l);
      }
  }
  function zi(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, l);
    }
  }
  function il(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, n);
    }
  }
  function ge(t) {
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
  function lr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Xg(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(u) {
          l = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(u) {
          l = "" + u;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Pu(t) {
    if (!t._valueTracker) {
      var e = lr(t) ? "checked" : "value";
      t._valueTracker = Xg(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function nr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = lr(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  var Vg = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(
      Vg,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(t, e, l, n, a, i, u, c) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ge(e)) : t.value !== "" + ge(e) && (t.value = "" + ge(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? u === "number" && t.value == e ? ec(t, ge(t.value)) : ec(t, ge(e)) : l != null ? ec(t, ge(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + ge(c) : t.removeAttribute("name");
  }
  function ar(t, e, l, n, a, i, u, c) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Pu(t);
        return;
      }
      l = l != null ? "" + ge(l) : "", e = e != null ? "" + ge(e) : l, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = c ? t.checked : !!n, t.defaultChecked = !!n, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), Pu(t);
  }
  function ec(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Cn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ge(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ir(t, e, l) {
    if (e != null && (e = "" + ge(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ge(l) : "";
  }
  function ur(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(d(92));
        if (ht(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = ge(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), Pu(t);
  }
  function On(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Lg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cr(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Lg.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function or(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(d(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "", rt = !0);
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && (cr(t, a, n), rt = !0);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && cr(t, i, e[i]);
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
  var Zg = /* @__PURE__ */ new Map([
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
  ]), Kg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ti(t) {
    return Kg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Le() {
  }
  var nc = null;
  function ac(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var _n = null, Mn = null;
  function fr(t) {
    var e = wn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ne] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (tc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ee(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ne] || null;
                if (!a) throw Error(d(90));
                tc(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && nr(n);
          }
          break t;
        case "textarea":
          ir(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Cn(t, !!l.multiple, e, !1);
      }
    }
  }
  var ic = !1;
  function rr(t, e, l) {
    if (ic) return t(e, l);
    ic = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (ic = !1, (_n !== null || Mn !== null) && (Tu(), _n && (e = _n, t = Mn, Mn = _n = null, fr(e), t)))
        for (e = 0; e < t.length; e++) fr(t[e]);
    }
  }
  function Sa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ne] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
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
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        d(231, e, typeof l)
      );
    return l;
  }
  var ul = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uc = !1;
  if (ul)
    try {
      var za = {};
      Object.defineProperty(za, "passive", {
        get: function() {
          uc = !0;
        }
      }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
    } catch {
      uc = !1;
    }
  var Tl = null, cc = null, Ei = null;
  function sr() {
    if (Ei) return Ei;
    var t, e = cc, l = e.length, n, a = "value" in Tl ? Tl.value : Tl.textContent, i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var u = l - t;
    for (n = 1; n <= u && e[l - n] === a[i - n]; n++) ;
    return Ei = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function wi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ai() {
    return !0;
  }
  function hr() {
    return !1;
  }
  function Pt(t) {
    function e(l, n, a, i, u) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (l = t[c], this[c] = l ? l(i) : i[c]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ai : hr, this.isPropagationStopped = hr, this;
    }
    return Z(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ai);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ai);
      },
      persist: function() {
      },
      isPersistent: Ai
    }), e;
  }
  var El = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ni = Pt(El), Ta = Z({}, El, { view: 0, detail: 0 }), Jg = Pt(Ta), oc, fc, Ea, Ci = Z({}, Ta, {
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
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ea && (Ea && t.type === "mousemove" ? (oc = t.screenX - Ea.screenX, fc = t.screenY - Ea.screenY) : fc = oc = 0, Ea = t), oc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : fc;
    }
  }), dr = Pt(Ci), kg = Z({}, Ci, { dataTransfer: 0 }), Fg = Pt(kg), Wg = Z({}, Ta, { relatedTarget: 0 }), rc = Pt(Wg), $g = Z({}, El, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ig = Pt($g), Pg = Z({}, El, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), tm = Pt(Pg), em = Z({}, El, { data: 0 }), gr = Pt(em), lm = {
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
  }, nm = {
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
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function im(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = am[t]) ? !!e[t] : !1;
  }
  function sc() {
    return im;
  }
  var um = Z({}, Ta, {
    key: function(t) {
      if (t.key) {
        var e = lm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = wi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(t) {
      return t.type === "keypress" ? wi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? wi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), cm = Pt(um), om = Z({}, Ci, {
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
  }), mr = Pt(om), fm = Z({}, El, { submitter: 0 }), rm = Pt(fm), sm = Z({}, Ta, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), hm = Pt(sm), dm = Z({}, El, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gm = Pt(dm), mm = Z({}, Ci, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pm = Pt(mm), vm = Z({}, El, {
    newState: 0,
    oldState: 0,
    source: 0
  }), ym = Pt(vm), xm = [9, 13, 27, 32], hc = ul && "CompositionEvent" in window, wa = null;
  ul && "documentMode" in document && (wa = document.documentMode);
  var bm = ul && "TextEvent" in window && !wa, pr = ul && (!hc || wa && 8 < wa && 11 >= wa), vr = " ", yr = !1;
  function xr(t, e) {
    switch (t) {
      case "keyup":
        return xm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function br(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Rn = !1;
  function Sm(t, e) {
    switch (t) {
      case "compositionend":
        return br(e);
      case "keypress":
        return e.which !== 32 ? null : (yr = !0, vr);
      case "textInput":
        return t = e.data, t === vr && yr ? null : t;
      default:
        return null;
    }
  }
  function zm(t, e) {
    if (Rn)
      return t === "compositionend" || !hc && xr(t, e) ? (t = sr(), Ei = cc = Tl = null, Rn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return pr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Tm = {
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
  function Sr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Tm[t.type] : e === "textarea";
  }
  function zr(t, e, l, n) {
    _n ? Mn ? Mn.push(n) : Mn = [n] : _n = n, e = Ou(e, "onChange"), 0 < e.length && (l = new Ni(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Aa = null, Na = null;
  function Em(t) {
    fd(t, 0);
  }
  function Oi(t) {
    var e = ba(t);
    if (nr(e)) return t;
  }
  function Tr(t, e) {
    if (t === "change") return e;
  }
  var Er = !1;
  if (ul) {
    var dc;
    if (ul) {
      var gc = "oninput" in document;
      if (!gc) {
        var wr = document.createElement("div");
        wr.setAttribute("oninput", "return;"), gc = typeof wr.oninput == "function";
      }
      dc = gc;
    } else dc = !1;
    Er = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ar() {
    Aa && (Aa.detachEvent("onpropertychange", Nr), Na = Aa = null);
  }
  function Nr(t) {
    if (t.propertyName === "value" && Oi(Na)) {
      var e = [];
      zr(
        e,
        Na,
        t,
        ac(t)
      ), rr(Em, e);
    }
  }
  function wm(t, e, l) {
    t === "focusin" ? (Ar(), Aa = e, Na = l, Aa.attachEvent("onpropertychange", Nr)) : t === "focusout" && Ar();
  }
  function Am(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Oi(Na);
  }
  function Nm(t, e) {
    if (t === "click") return Oi(e);
  }
  function Cm(t, e) {
    if (t === "input" || t === "change")
      return Oi(e);
  }
  function Om(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var me = typeof Object.is == "function" ? Object.is : Om;
  function Ca(t, e) {
    if (me(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Ju.call(e, a) || !me(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function mc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Cr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Or(t, e) {
    var l = Cr(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Cr(l);
    }
  }
  function _r(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? _r(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Mr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = mc(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = mc(t.document);
    }
    return e;
  }
  function pc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var _m = ul && "documentMode" in document && 11 >= document.documentMode, Dn = null, vc = null, Oa = null, yc = !1;
  function Rr(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || Dn == null || Dn !== mc(n) || (n = Dn, "selectionStart" in n && pc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Oa && Ca(Oa, n) || (Oa = n, n = Ou(vc, "onSelect"), 0 < n.length && (e = new Ni(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Dn)));
  }
  function en(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var jn = {
    animationend: en("Animation", "AnimationEnd"),
    animationiteration: en("Animation", "AnimationIteration"),
    animationstart: en("Animation", "AnimationStart"),
    transitionrun: en("Transition", "TransitionRun"),
    transitionstart: en("Transition", "TransitionStart"),
    transitioncancel: en("Transition", "TransitionCancel"),
    transitionend: en("Transition", "TransitionEnd")
  }, xc = {}, Dr = {};
  ul && (Dr = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
  function ln(t) {
    if (xc[t]) return xc[t];
    if (!jn[t]) return t;
    var e = jn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Dr)
        return xc[t] = e[l];
    return t;
  }
  var jr = ln("animationend"), Hr = ln("animationiteration"), Ur = ln("animationstart"), Mm = ln("transitionrun"), Rm = ln("transitionstart"), Dm = ln("transitioncancel"), Yr = ln("transitionend"), qr = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bc.push("scrollEnd");
  function He(t, e) {
    qr.set(t, e), tn(e, [t]);
  }
  var jm = 0;
  function cl(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = Be.identifierPrefix;
    var l = jm++;
    return t = "_" + t + "t_" + l.toString(32) + "_", e.autoName = t;
  }
  function Br(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, l = ta;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = t[l[n]];
        if (a != null) {
          if (a === "none") return "none";
          e = e == null ? a : e + (" " + a);
        }
      }
    return e ?? t.default;
  }
  function ol(t, e) {
    return t = Br(t), e = Br(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var _i = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, we = [], Hn = 0, Sc = 0;
  function Mi() {
    for (var t = Hn, e = Sc = Hn = 0; e < t; ) {
      var l = we[e];
      we[e++] = null;
      var n = we[e];
      we[e++] = null;
      var a = we[e];
      we[e++] = null;
      var i = we[e];
      if (we[e++] = null, n !== null && a !== null) {
        var u = n.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), n.pending = a;
      }
      i !== 0 && Gr(l, a, i);
    }
  }
  function Ri(t, e, l, n) {
    we[Hn++] = t, we[Hn++] = e, we[Hn++] = l, we[Hn++] = n, Sc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function zc(t, e, l, n) {
    return Ri(t, e, l, n), Di(t);
  }
  function nn(t, e) {
    return Ri(t, null, null, e), Di(t);
  }
  function Gr(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - de(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function Di(t) {
    if (50 < $a)
      throw $a = 0, zu = null, Error(d(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = {};
  function Hm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ae(t, e, l, n) {
    return new Hm(t, e, l, n);
  }
  function Tc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function fl(t, e) {
    var l = t.alternate;
    return l === null ? (l = ae(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 1206910976, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Qr(t, e) {
    t.flags &= 1206910978;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ji(t, e, l, n, a, i) {
    var u = 0;
    if (n = t, typeof n == "function") Tc(n) && (u = 1);
    else if (typeof n == "string")
      u = f0(
        t,
        l,
        Ve.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (n) {
        case je:
          return t = ae(31, l, e, a), t.elementType = je, t.lanes = i, t;
        case Te:
          return an(l.children, a, i, e);
        case re:
          u = 8, a |= 24;
          break;
        case xl:
          return t = ae(12, l, e, a | 2), t.elementType = xl, t.lanes = i, t;
        case X:
          return t = ae(13, l, e, a), t.elementType = X, t.lanes = i, t;
        case L:
          return t = ae(19, l, e, a), t.elementType = L, t.lanes = i, t;
        case ll:
        case s:
          return t = a | 32, t = ae(30, l, e, t), t.elementType = s, t.lanes = i, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case qt:
                u = 10;
                break t;
              case Wl:
                u = 9;
                break t;
              case M:
                u = 11;
                break t;
              case St:
                u = 14;
                break t;
              case gt:
                u = 16, n = null;
                break t;
            }
          u = 29, l = Error(
            d(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = ae(u, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function an(t, e, l, n) {
    return t = ae(7, t, n, e), t.lanes = l, t;
  }
  function Ec(t, e, l) {
    return t = ae(6, t, null, e), t.lanes = l, t;
  }
  function Xr(t) {
    var e = ae(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function wc(t, e, l) {
    return e = ae(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Vr = /* @__PURE__ */ new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Vr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Yf(e)
      }, Vr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Yf(e)
    };
  }
  var Yn = [], qn = 0, Hi = null, _a = 0, Ne = [], Ce = 0, wl = null, Ze = 1, Ke = "";
  function rl(t, e) {
    Yn[qn++] = _a, Yn[qn++] = Hi, Hi = t, _a = e;
  }
  function Lr(t, e, l) {
    Ne[Ce++] = Ze, Ne[Ce++] = Ke, Ne[Ce++] = wl, wl = t;
    var n = Ze;
    t = Ke;
    var a = 32 - de(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - de(e) + a;
    if (30 < i) {
      var u = a - a % 5;
      i = (n & (1 << u) - 1).toString(32), n >>= u, a -= u, Ze = 1 << 32 - de(e) + a | l << a | n, Ke = i + t;
    } else
      Ze = 1 << i | l << a | n, Ke = t;
  }
  function Ui(t) {
    t.return !== null && (rl(t, 1), Lr(t, 1, 0));
  }
  function Ac(t) {
    for (; t === Hi; )
      Hi = Yn[--qn], Yn[qn] = null, _a = Yn[--qn], Yn[qn] = null;
    for (; t === wl; )
      wl = Ne[--Ce], Ne[Ce] = null, Ke = Ne[--Ce], Ne[Ce] = null, Ze = Ne[--Ce], Ne[Ce] = null;
  }
  function Zr(t, e) {
    Ne[Ce++] = Ze, Ne[Ce++] = Ke, Ne[Ce++] = wl, Ze = e.id, Ke = e.overflow, wl = t;
  }
  var Gt = null, wt = null, P = !1, Al = null, Oe = !1, Nc = Error(d(519));
  function Nl(t) {
    var e = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ma(Ae(e, t)), Nc;
  }
  function Kr(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Zt] = t, e[ne] = n, l) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Pa.length; l++)
          nt(Pa[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e), ar(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), ur(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || dd(e.textContent, l) ? (n.popover != null && (nt("beforetoggle", e), nt("toggle", e)), n.onScroll != null && nt("scroll", e), n.onScrollEnd != null && nt("scrollend", e), n.onClick != null && (e.onclick = Le), e = !0) : e = !1, e || Nl(t, !0);
  }
  function Yi(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          Oe = !1;
          return;
        case 27:
        case 3:
          Oe = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function Bn(t) {
    if (t !== Gt) return !1;
    if (!P) return Yi(t), P = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || af(t.type, t.memoizedProps)), l = !l), l && wt && Nl(t), Yi(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
      wt = Rd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
      wt = Rd(t);
    } else
      e === 27 ? (e = wt, Vl(t.type) ? (t = gf, gf = null, wt = t) : wt = e) : wt = Gt ? Me(t.stateNode.nextSibling) : null;
    return !0;
  }
  function un() {
    wt = Gt = null, P = !1;
  }
  function Cc() {
    var t = Al;
    return t !== null && (ce === null ? ce = t : ce.push.apply(
      ce,
      t
    ), Al = null), t;
  }
  function Ma(t) {
    Al === null ? Al = [t] : Al.push(t);
  }
  var Oc = Xe(null), cn = null, sl = null;
  function Cl(t, e, l) {
    Et(Oc, e._currentValue), e._currentValue = l;
  }
  function hl(t) {
    t._currentValue = Oc.current, Lt(Oc);
  }
  function qi(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function _c(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var u = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var c = i;
          i = a;
          for (var o = 0; o < e.length; o++)
            if (c.context === e[o]) {
              i.lanes |= l, c = i.alternate, c !== null && (c.lanes |= l), qi(
                i.return,
                l,
                t
              ), n || (u = null);
              break t;
            }
          i = c.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(d(341));
        u.lanes |= l, i = u.alternate, i !== null && (i.lanes |= l), qi(u, l, t), u = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= l, u = a.alternate, u !== null && (u.lanes |= l), qi(
          a.return,
          l,
          t
        ), u = a.child, u = u !== null ? u.sibling : null) : u = a.child;
      if (u !== null) u.return = a;
      else
        for (u = a; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (a = u.sibling, a !== null) {
            a.return = u.return, u = a;
            break;
          }
          u = u.return;
        }
      a = u;
    }
  }
  function on(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(d(387));
        if (u = u.memoizedProps, u !== null) {
          var c = a.type;
          me(a.pendingProps.value, u.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === si.current) {
        if (u = a.alternate, u === null) throw Error(d(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ra) : t = [ra]);
      }
      a = a.return;
    }
    return t !== null && _c(
      e,
      t,
      l,
      n
    ), e.flags |= 262144, t !== null;
  }
  function Bi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!me(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function fn(t) {
    cn = t, sl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Kt(t) {
    return Jr(cn, t);
  }
  function Gi(t, e) {
    return cn === null && fn(t), Jr(t, e);
  }
  function Jr(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, sl === null) {
      if (t === null) throw Error(d(308));
      sl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else sl = sl.next = e;
    return l;
  }
  var Um = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Ym = x.unstable_scheduleCallback, qm = x.unstable_NormalPriority, Rt = {
    $$typeof: qt,
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
  function Ra(t) {
    t.refCount--, t.refCount === 0 && Ym(qm, function() {
      t.controller.abort();
    });
  }
  function kr(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var l = t.transitionTypes;
      for (l === null && (l = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var n = e[t];
        l.indexOf(n) === -1 && l.push(n);
      }
    }
  }
  var Da = null;
  function Bm(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var ja = null, Rc = 0, rn = 0, Gn = null;
  function Gm(t, e) {
    if (ja === null) {
      var l = ja = [];
      Rc = 0, rn = Fo(), Gn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Rc++, e.then(Fr, Fr), e;
  }
  function Fr() {
    if (--Rc === 0 && (Da = null, ja !== null)) {
      Gn !== null && (Gn.status = "fulfilled");
      var t = ja;
      ja = null, rn = 0, Gn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Qm(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Wr = j.S;
  j.S = function(t, e) {
    if (Xh = se(), typeof e == "object" && e !== null && typeof e.then == "function" && Gm(t, e), Da !== null)
      for (var l = aa; l !== null; )
        kr(l, Da), l = l.next;
    if (l = t.types, l !== null) {
      for (var n = aa; n !== null; )
        kr(n, l), n = n.next;
      if (rn !== 0) {
        n = Da, n === null && (n = Da = []);
        for (var a = 0; a < l.length; a++) {
          var i = l[a];
          n.indexOf(i) === -1 && n.push(i);
        }
      }
    }
    Wr !== null && Wr(t, e);
  };
  var sn = Xe(null);
  function Dc() {
    var t = sn.current;
    return t !== null ? t : zt.pooledCache;
  }
  function Qi(t, e) {
    e === null ? Et(sn, sn.current) : Et(sn, e.pool);
  }
  function $r() {
    var t = Dc();
    return t === null ? null : { parent: Rt._currentValue, pool: t };
  }
  var Qn = Error(d(460)), jc = Error(d(474)), Xi = Error(d(542)), Vi = { then: function() {
  } };
  function Ir(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Pr(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Le, Le), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, es(t), t === void 0 && !("reason" in e) ? Error(d(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Le, Le);
        else {
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(d(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, es(t), t;
        }
        throw dn = e, Qn;
    }
  }
  function hn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (dn = l, Qn) : l;
    }
  }
  var dn = null;
  function ts() {
    if (dn === null) throw Error(d(459));
    var t = dn;
    return dn = null, t;
  }
  function es(t) {
    if (t === Qn || t === Xi)
      throw Error(d(483));
  }
  var Xn = null, Ha = 0;
  function Li(t) {
    var e = Ha;
    return Ha += 1, Xn === null && (Xn = []), Pr(Xn, t, e);
  }
  function Ol(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Zi(t, e) {
    throw e.$$typeof === st ? Error(d(525)) : (t = Object.prototype.toString.call(e), Error(
      d(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function ls(t) {
    function e(g, r) {
      if (t) {
        var p = g.deletions;
        p === null ? (g.deletions = [r], g.flags |= 16) : p.push(r);
      }
    }
    function l(g, r) {
      if (!t) return null;
      for (; r !== null; )
        e(g, r), r = r.sibling;
      return null;
    }
    function n(g) {
      for (var r = /* @__PURE__ */ new Map(); g !== null; )
        g.key === null ? r.set(g.index, g) : r.set(g.key, g), g = g.sibling;
      return r;
    }
    function a(g, r) {
      return g = fl(g, r), g.index = 0, g.sibling = null, g;
    }
    function i(g, r, p) {
      return g.index = p, t ? (p = g.alternate, p !== null ? (p = p.index, p < r ? (g.flags |= 2, r) : p) : (g.flags |= 134217730, r)) : (g.flags |= 1048576, r);
    }
    function u(g) {
      return t && g.alternate === null && (g.flags |= 134217730), g;
    }
    function c(g, r, p, S) {
      return r === null || r.tag !== 6 ? (r = Ec(p, g.mode, S), r.return = g, r) : (r = a(r, p), r.return = g, r);
    }
    function o(g, r, p, S) {
      var R = p.type;
      return R === Te ? (g = b(
        g,
        r,
        p.props.children,
        S,
        p.key
      ), Ol(g, p), g) : r !== null && (r.elementType === R || typeof R == "object" && R !== null && R.$$typeof === gt && hn(R) === r.type) ? (r = a(r, p.props), Ol(r, p), r.return = g, r) : (r = ji(
        p.type,
        p.key,
        p.props,
        null,
        g.mode,
        S
      ), Ol(r, p), r.return = g, r);
    }
    function m(g, r, p, S) {
      return r === null || r.tag !== 4 || r.stateNode.containerInfo !== p.containerInfo || r.stateNode.implementation !== p.implementation ? (r = wc(p, g.mode, S), r.return = g, r) : (r = a(r, p.children || []), r.return = g, r);
    }
    function b(g, r, p, S, R) {
      return r === null || r.tag !== 7 ? (r = an(
        p,
        g.mode,
        S,
        R
      ), r.return = g, r) : (r = a(r, p), r.return = g, r);
    }
    function z(g, r, p) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return r = Ec(
          "" + r,
          g.mode,
          p
        ), r.return = g, r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Qe:
            return p = ji(
              r.type,
              r.key,
              r.props,
              null,
              g.mode,
              p
            ), Ol(p, r), p.return = g, p;
          case ze:
            return r = wc(
              r,
              g.mode,
              p
            ), r.return = g, r;
          case gt:
            return r = hn(r), z(g, r, p);
        }
        if (ht(r) || Y(r))
          return r = an(
            r,
            g.mode,
            p,
            null
          ), r.return = g, r;
        if (typeof r.then == "function")
          return z(g, Li(r), p);
        if (r.$$typeof === qt)
          return z(
            g,
            Gi(g, r),
            p
          );
        Zi(g, r);
      }
      return null;
    }
    function h(g, r, p, S) {
      var R = r !== null ? r.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return R !== null ? null : c(g, r, "" + p, S);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Qe:
            return p.key === R ? o(g, r, p, S) : null;
          case ze:
            return p.key === R ? m(g, r, p, S) : null;
          case gt:
            return p = hn(p), h(g, r, p, S);
        }
        if (ht(p) || Y(p))
          return R !== null ? null : b(g, r, p, S, null);
        if (typeof p.then == "function")
          return h(
            g,
            r,
            Li(p),
            S
          );
        if (p.$$typeof === qt)
          return h(
            g,
            r,
            Gi(g, p),
            S
          );
        Zi(g, p);
      }
      return null;
    }
    function y(g, r, p, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return g = g.get(p) || null, c(r, g, "" + S, R);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Qe:
            return g = g.get(
              S.key === null ? p : S.key
            ) || null, o(r, g, S, R);
          case ze:
            return g = g.get(
              S.key === null ? p : S.key
            ) || null, m(r, g, S, R);
          case gt:
            return S = hn(S), y(
              g,
              r,
              p,
              S,
              R
            );
        }
        if (ht(S) || Y(S))
          return g = g.get(p) || null, b(r, g, S, R, null);
        if (typeof S.then == "function")
          return y(
            g,
            r,
            p,
            Li(S),
            R
          );
        if (S.$$typeof === qt)
          return y(
            g,
            r,
            p,
            Gi(r, S),
            R
          );
        Zi(r, S);
      }
      return null;
    }
    function C(g, r, p, S) {
      for (var R = null, it = null, H = r, B = r = 0, Ht = null; H !== null && B < p.length; B++) {
        H.index > B ? (Ht = H, H = null) : Ht = H.sibling;
        var ut = h(
          g,
          H,
          p[B],
          S
        );
        if (ut === null) {
          H === null && (H = Ht);
          break;
        }
        t && H && ut.alternate === null && e(g, H), r = i(ut, r, B), it === null ? R = ut : it.sibling = ut, it = ut, H = Ht;
      }
      if (B === p.length)
        return l(g, H), P && rl(g, B), R;
      if (H === null) {
        for (; B < p.length; B++)
          H = z(g, p[B], S), H !== null && (r = i(
            H,
            r,
            B
          ), it === null ? R = H : it.sibling = H, it = H);
        return P && rl(g, B), R;
      }
      for (H = n(H); B < p.length; B++)
        Ht = y(
          H,
          g,
          B,
          p[B],
          S
        ), Ht !== null && (t && (ut = Ht.alternate, ut !== null && H.delete(ut.key === null ? B : ut.key)), r = i(
          Ht,
          r,
          B
        ), it === null ? R = Ht : it.sibling = Ht, it = Ht);
      return t && H.forEach(function(kl) {
        return e(g, kl);
      }), P && rl(g, B), R;
    }
    function D(g, r, p, S) {
      if (p == null) throw Error(d(151));
      for (var R = null, it = null, H = r, B = r = 0, Ht = null, ut = p.next(); H !== null && !ut.done; B++, ut = p.next()) {
        H.index > B ? (Ht = H, H = null) : Ht = H.sibling;
        var kl = h(g, H, ut.value, S);
        if (kl === null) {
          H === null && (H = Ht);
          break;
        }
        t && H && kl.alternate === null && e(g, H), r = i(kl, r, B), it === null ? R = kl : it.sibling = kl, it = kl, H = Ht;
      }
      if (ut.done)
        return l(g, H), P && rl(g, B), R;
      if (H === null) {
        for (; !ut.done; B++, ut = p.next())
          ut = z(g, ut.value, S), ut !== null && (r = i(ut, r, B), it === null ? R = ut : it.sibling = ut, it = ut);
        return P && rl(g, B), R;
      }
      for (H = n(H); !ut.done; B++, ut = p.next())
        ut = y(H, g, B, ut.value, S), ut !== null && (t && (Ht = ut.alternate, Ht !== null && H.delete(
          Ht.key === null ? B : Ht.key
        )), r = i(ut, r, B), it === null ? R = ut : it.sibling = ut, it = ut);
      return t && H.forEach(function(S0) {
        return e(g, S0);
      }), P && rl(g, B), R;
    }
    function $(g, r, p, S) {
      if (typeof p == "object" && p !== null && p.type === Te && p.key === null && p.props.ref === void 0 && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Qe:
            t: {
              for (var R = p.key; r !== null; ) {
                if (r.key === R) {
                  if (R = p.type, R === Te) {
                    if (r.tag === 7) {
                      l(
                        g,
                        r.sibling
                      ), S = a(
                        r,
                        p.props.children
                      ), Ol(S, p), S.return = g, g = S;
                      break t;
                    }
                  } else if (r.elementType === R || typeof R == "object" && R !== null && R.$$typeof === gt && hn(R) === r.type) {
                    l(
                      g,
                      r.sibling
                    ), S = a(r, p.props), Ol(S, p), S.return = g, g = S;
                    break t;
                  }
                  l(g, r);
                  break;
                } else e(g, r);
                r = r.sibling;
              }
              p.type === Te ? (S = an(
                p.props.children,
                g.mode,
                S,
                p.key
              ), Ol(S, p), S.return = g, g = S) : (S = ji(
                p.type,
                p.key,
                p.props,
                null,
                g.mode,
                S
              ), Ol(S, p), S.return = g, g = S);
            }
            return u(g);
          case ze:
            t: {
              for (R = p.key; r !== null; ) {
                if (r.key === R)
                  if (r.tag === 4 && r.stateNode.containerInfo === p.containerInfo && r.stateNode.implementation === p.implementation) {
                    l(
                      g,
                      r.sibling
                    ), S = a(r, p.children || []), S.return = g, g = S;
                    break t;
                  } else {
                    l(g, r);
                    break;
                  }
                else e(g, r);
                r = r.sibling;
              }
              S = wc(p, g.mode, S), S.return = g, g = S;
            }
            return u(g);
          case gt:
            return p = hn(p), $(
              g,
              r,
              p,
              S
            );
        }
        if (ht(p))
          return C(
            g,
            r,
            p,
            S
          );
        if (Y(p)) {
          if (R = Y(p), typeof R != "function") throw Error(d(150));
          return p = R.call(p), D(
            g,
            r,
            p,
            S
          );
        }
        if (typeof p.then == "function")
          return $(
            g,
            r,
            Li(p),
            S
          );
        if (p.$$typeof === qt)
          return $(
            g,
            r,
            Gi(g, p),
            S
          );
        Zi(g, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, r !== null && r.tag === 6 ? (l(g, r.sibling), S = a(r, p), S.return = g, g = S) : (l(g, r), S = Ec(p, g.mode, S), S.return = g, g = S), u(g)) : l(g, r);
    }
    return function(g, r, p, S) {
      try {
        Ha = 0;
        var R = $(
          g,
          r,
          p,
          S
        );
        return Xn = null, R;
      } catch (H) {
        if (H === Qn || H === Xi) throw H;
        var it = ae(29, H, null, g.mode);
        return it.lanes = S, it.return = g, it;
      } finally {
      }
    };
  }
  var gn = ls(!0), ns = ls(!1), _l = !1;
  function Hc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Uc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ml(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (dt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Di(t), Gr(t, null, l), e;
    }
    return Ri(t, n, e, l), Di(t);
  }
  function Ua(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Lf(t, l);
    }
  }
  function Yc(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = u : i = i.next = u, l = l.next;
        } while (l !== null);
        i === null ? a = i = e : i = i.next = e;
      } else a = i = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var qc = !1;
  function Ya() {
    if (qc) {
      var t = Gn;
      if (t !== null) throw t;
    }
  }
  function qa(t, e, l, n) {
    qc = !1;
    var a = t.updateQueue;
    _l = !1;
    var i = a.firstBaseUpdate, u = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var o = c, m = o.next;
      o.next = null, u === null ? i = m : u.next = m, u = o;
      var b = t.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== u && (c === null ? b.firstBaseUpdate = m : c.next = m, b.lastBaseUpdate = o));
    }
    if (i !== null) {
      var z = a.baseState;
      u = 0, b = m = o = null, c = i;
      do {
        var h = c.lane & -536870913, y = h !== c.lane;
        if (y ? (at & h) === h : (n & h) === h) {
          h !== 0 && h === rn && (qc = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var C = t, D = c;
            h = e;
            var $ = l;
            switch (D.tag) {
              case 1:
                if (C = D.payload, typeof C == "function") {
                  z = C.call($, z, h);
                  break t;
                }
                z = C;
                break t;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = D.payload, h = typeof C == "function" ? C.call($, z, h) : C, h == null) break t;
                z = Z({}, z, h);
                break t;
              case 2:
                _l = !0;
            }
          }
          h = c.callback, h !== null && (t.flags |= 64, y && (t.flags |= 8192), y = a.callbacks, y === null ? a.callbacks = [h] : y.push(h));
        } else
          y = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, b === null ? (m = b = y, o = z) : b = b.next = y, u |= h;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          y = c, c = y.next, y.next = null, a.lastBaseUpdate = y, a.shared.pending = null;
        }
      } while (!0);
      b === null && (o = z), a.baseState = o, a.firstBaseUpdate = m, a.lastBaseUpdate = b, i === null && (a.shared.lanes = 0), Bl |= u, t.lanes = u, t.memoizedState = z;
    }
  }
  function as(t, e) {
    if (typeof t != "function")
      throw Error(d(191, t));
    t.call(e);
  }
  function is(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        as(l[t], e);
  }
  var Dl = Xe(null), Ki = Xe(0);
  function us(t, e) {
    t = vl, Et(Ki, t), Et(Dl, e), vl = t | e.baseLanes;
  }
  function Bc() {
    Et(Ki, vl), Et(Dl, Dl.current);
  }
  function Gc() {
    vl = Ki.current, Lt(Dl), Lt(Ki);
  }
  var Jt = Xe(null), It = null;
  function jl(t) {
    var e = t.alternate;
    Et(kt, kt.current & 1), Et(Jt, t), It === null && (e === null || Dl.current !== null || e.memoizedState !== null) && (It = t);
  }
  function Qc(t) {
    Et(kt, kt.current), Et(Jt, t), It === null && (It = t);
  }
  function cs(t) {
    t.tag === 22 ? (Et(kt, kt.current), Et(Jt, t), It === null && (It = t)) : Hl();
  }
  function Hl() {
    Et(kt, kt.current), Et(Jt, Jt.current);
  }
  function pe(t) {
    Lt(Jt), It === t && (It = null), Lt(kt);
  }
  var kt = Xe(0);
  function Ba(t, e) {
    Et(Jt, Jt.current), Et(kt, e);
  }
  function Xc(t) {
    Lt(kt), Lt(Jt), It === t && (It = null);
  }
  function Ji(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || hf(l) || df(l)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var dl = 0, W = null, bt = null, Dt = null, ki = !1, Vn = !1, mn = !1, Fi = 0, Ga = 0, Ln = null, Xm = 0;
  function Ot() {
    throw Error(d(321));
  }
  function Vc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!me(t[l], e[l])) return !1;
    return !0;
  }
  function Lc(t, e, l, n, a, i) {
    return dl = i, W = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, j.H = t === null || t.memoizedState === null ? Ls : Zs, mn = !1, i = l(n, a), mn = !1, Vn && (i = fs(
      e,
      l,
      n,
      a
    )), os(t), i;
  }
  function os(t) {
    j.H = lu;
    var e = bt !== null && bt.next !== null;
    if (dl = 0, Dt = bt = W = null, ki = !1, Ga = 0, Ln = null, e) throw Error(d(300));
    t === null || jt || (t = t.dependencies, t !== null && Bi(t) && (jt = !0));
  }
  function fs(t, e, l, n) {
    W = t;
    var a = 0;
    do {
      if (Vn && (Ln = null), Ga = 0, Vn = !1, 25 <= a) throw Error(d(301));
      if (a += 1, Dt = bt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = Wm, i = e(l, n);
    } while (Vn);
    return i;
  }
  function Vm() {
    var t = j.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Qa(e) : e, t = t.useState()[0], (bt !== null ? bt.memoizedState : null) !== t && (W.flags |= 1024), e;
  }
  function Zc() {
    var t = Fi !== 0;
    return Fi = 0, t;
  }
  function Kc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Jc(t) {
    if (ki) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ki = !1;
    }
    dl = 0, Dt = bt = W = null, Vn = !1, Ga = Fi = 0, Ln = null;
  }
  function te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t, Dt;
  }
  function Mt() {
    if (bt === null) {
      var t = W.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = Dt === null ? W.memoizedState : Dt.next;
    if (e !== null)
      Dt = e, bt = t;
    else {
      if (t === null)
        throw W.alternate === null ? Error(d(467)) : Error(d(310));
      bt = t, t = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }, Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t;
    }
    return Dt;
  }
  function Wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qa(t) {
    var e = Ga;
    return Ga += 1, Ln === null && (Ln = []), t = Pr(Ln, t, e), e = W, (Dt === null ? e.memoizedState : Dt.next) === null && (e = e.alternate, j.H = e === null || e.memoizedState === null ? Ls : Zs), t;
  }
  function $i(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Qa(t);
      if (t.$$typeof === E) return;
      if (t.$$typeof === qt) return Kt(t);
    }
    throw Error(d(438, String(t)));
  }
  function kc(t) {
    var e = null, l = W.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = W.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Wi(), W.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = $l;
    return e.index++, l;
  }
  function gl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ii(t) {
    var e = Mt();
    return Fc(e, bt, t);
  }
  function Fc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = i.next, i.next = u;
      }
      e.baseQueue = a = i, n.pending = null;
    }
    if (i = t.baseState, a === null) t.memoizedState = i;
    else {
      e = a.next;
      var c = u = null, o = null, m = e, b = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (at & z) === z : (dl & z) === z) {
          var h = m.revertLane;
          if (h === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === rn && (b = !0);
          else if ((dl & h) === h) {
            m = m.next, h === rn && (b = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, o === null ? (c = o = z, u = i) : o = o.next = z, W.lanes |= h, Bl |= h;
          z = m.action, mn && l(i, z), i = m.hasEagerState ? m.eagerState : l(i, z);
        } else
          h = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, o === null ? (c = o = h, u = i) : o = o.next = h, W.lanes |= z, Bl |= z;
        m = m.next;
      } while (m !== null && m !== e);
      if (o === null ? u = i : o.next = c, !me(i, t.memoizedState) && (jt = !0, b && (l = Gn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = u, t.baseQueue = o, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Wc(t) {
    var e = Mt(), l = e.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var u = a = a.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== a);
      me(i, e.memoizedState) || (jt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function rs(t, e, l) {
    var n = W, a = Mt(), i = P;
    if (i) {
      if (l === void 0) throw Error(d(407));
      l = l();
    } else l = e();
    var u = !me(
      (bt || a).memoizedState,
      l
    );
    if (u && (a.memoizedState = l, jt = !0), a = a.queue, Pc(ds.bind(null, n, a, t), [
      t
    ]), t = a.getSnapshot !== e || u || Dt !== null && (Dt.memoizedState.tag & 1) !== 0, Zn(
      t ? 9 : 8,
      { destroy: void 0 },
      hs.bind(null, n, a, l, e),
      null
    ), t) {
      if (n.flags |= 2048, zt === null) throw Error(d(349));
      i || (dl & 127) !== 0 || ss(n, e, l);
    }
    return l;
  }
  function ss(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = W.updateQueue, e === null ? (e = Wi(), W.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function hs(t, e, l, n) {
    e.value = l, e.getSnapshot = n, gs(e) && ms(t);
  }
  function ds(t, e, l) {
    return l(function() {
      gs(e) && ms(t);
    });
  }
  function gs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !me(t, l);
    } catch {
      return !0;
    }
  }
  function ms(t) {
    var e = nn(t, 2);
    e !== null && oe(e, t, 2);
  }
  function $c(t) {
    var e = te();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), mn) {
        zl(!0);
        try {
          l();
        } finally {
          zl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gl,
      lastRenderedState: t
    }, e;
  }
  function ps(t, e, l, n) {
    return t.baseState = l, Fc(
      t,
      bt,
      typeof n == "function" ? n : gl
    );
  }
  function Lm(t, e, l, n, a) {
    if (eu(t)) throw Error(d(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: a,
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
      j.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, vs(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function vs(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = j.T, u = {};
      u.types = i !== null ? i.types : null, j.T = u;
      try {
        var c = l(a, n), o = j.S;
        o !== null && o(u, c), ys(t, e, c);
      } catch (m) {
        Ic(t, e, m);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), j.T = i;
      }
    } else
      try {
        i = l(a, n), ys(t, e, i);
      } catch (m) {
        Ic(t, e, m);
      }
  }
  function ys(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        xs(t, e, n);
      },
      function(n) {
        return Ic(t, e, n);
      }
    ) : xs(t, e, l);
  }
  function xs(t, e, l) {
    e.status = "fulfilled", e.value = l, bs(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, vs(t, l)));
  }
  function Ic(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, bs(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function bs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ss(t, e) {
    return e;
  }
  function zs(t, e) {
    if (P) {
      var l = zt.formState;
      if (l !== null) {
        t: {
          var n = W;
          if (P) {
            if (wt) {
              e: {
                for (var a = wt, i = Oe; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (a = Me(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                wt = Me(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            Nl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = te(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ss,
      lastRenderedState: e
    }, l.queue = n, l = Qs.bind(
      null,
      W,
      n
    ), n.dispatch = l, n = $c(!1), i = ao.bind(
      null,
      W,
      !1,
      n.queue
    ), n = te(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = Lm.bind(
      null,
      W,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Ts(t) {
    var e = Mt();
    return Es(e, bt, t);
  }
  function Es(t, e, l) {
    if (e = Fc(
      t,
      e,
      Ss
    )[0], t = Ii(gl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Qa(e);
      } catch (u) {
        throw u === Qn ? Xi : u;
      }
    else n = e;
    e = Mt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (W.flags |= 2048, Zn(
      9,
      { destroy: void 0 },
      Zm.bind(null, a, l),
      null
    )), [n, i, t];
  }
  function Zm(t, e) {
    t.action = e;
  }
  function ws(t) {
    var e = Mt(), l = bt;
    if (l !== null)
      return Es(e, l, t);
    Mt(), e = e.memoizedState, l = Mt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Zn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = W.updateQueue, e === null && (e = Wi(), W.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function As() {
    return Mt().memoizedState;
  }
  function Pi(t, e, l, n) {
    var a = te();
    W.flags |= t, a.memoizedState = Zn(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function tu(t, e, l, n) {
    var a = Mt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    bt !== null && n !== null && Vc(n, bt.memoizedState.deps) ? a.memoizedState = Zn(e, i, l, n) : (W.flags |= t, a.memoizedState = Zn(
      1 | e,
      i,
      l,
      n
    ));
  }
  function Ns(t, e) {
    Pi(8390656, 8, t, e);
  }
  function Pc(t, e) {
    tu(2048, 8, t, e);
  }
  function Km(t) {
    W.flags |= 4;
    var e = W.updateQueue;
    if (e === null)
      e = Wi(), W.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Cs(t) {
    var e = Mt().memoizedState;
    return Km({ ref: e, nextImpl: t }), function() {
      if ((dt & 2) !== 0) throw Error(d(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Os(t, e) {
    return tu(4, 2, t, e);
  }
  function _s(t, e) {
    return tu(4, 4, t, e);
  }
  function Ms(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Rs(t, e, l) {
    l = l != null ? l.concat([t]) : null, tu(4, 4, Ms.bind(null, e, t), l);
  }
  function to() {
  }
  function Ds(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Vc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function js(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Vc(e, n[1]))
      return n[0];
    if (n = t(), mn) {
      zl(!0);
      try {
        t();
      } finally {
        zl(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function eo(t, e, l) {
    return l === void 0 || (dl & 1073741824) !== 0 && (at & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Lh(), W.lanes |= t, Bl |= t, l);
  }
  function Hs(t, e, l, n) {
    return me(l, e) ? l : Dl.current !== null ? (t = eo(t, l, n), me(t, e) || (jt = !0), t) : (dl & 106) === 0 || (dl & 1073741824) !== 0 && (at & 261930) === 0 ? (jt = !0, t.memoizedState = l) : (t = Lh(), W.lanes |= t, Bl |= t, e);
  }
  function Us(t, e, l, n, a) {
    var i = K.p;
    K.p = i !== 0 && 8 > i ? i : 8;
    var u = j.T, c = {};
    c.types = u !== null ? u.types : null, j.T = c, ao(t, !1, e, l);
    try {
      var o = a(), m = j.S;
      if (m !== null && m(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var b = Qm(
          o,
          n
        );
        Xa(
          t,
          e,
          b,
          be(t)
        );
      } else
        Xa(
          t,
          e,
          n,
          be(t)
        );
    } catch (z) {
      Xa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: z },
        be()
      );
    } finally {
      K.p = i, u !== null && c.types !== null && (u.types = c.types), j.T = u;
    }
  }
  function Jm() {
  }
  function lo(t, e, l, n) {
    if (t.tag !== 5) throw Error(d(476));
    var a = Ys(t).queue;
    Us(
      t,
      a,
      e,
      nl,
      l === null ? Jm : function() {
        return qs(t), l(n);
      }
    );
  }
  function Ys(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: nl,
      baseState: nl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gl,
        lastRenderedState: nl
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function qs(t) {
    var e = Ys(t);
    e.next === null && (e = t.alternate.memoizedState), Xa(
      t,
      e.next.queue,
      {},
      be()
    );
  }
  function no() {
    return Kt(ra);
  }
  function Bs() {
    return Mt().memoizedState;
  }
  function Gs() {
    return Mt().memoizedState;
  }
  function km(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = be();
          t = Ml(l);
          var n = Rl(e, t, l);
          n !== null && (oe(n, e, l), Ua(n, e, l)), e = { cache: Mc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Fm(t, e, l) {
    var n = be();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(t) ? Xs(e, l) : (l = zc(t, e, l, n), l !== null && (oe(l, t, n), Vs(l, e, n)));
  }
  function Qs(t, e, l) {
    var n = be();
    Xa(t, e, l, n);
  }
  function Xa(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (eu(t)) Xs(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, c = i(u, l);
          if (a.hasEagerState = !0, a.eagerState = c, me(c, u))
            return Ri(t, e, a, 0), zt === null && Mi(), !1;
        } catch {
        } finally {
        }
      if (l = zc(t, e, a, n), l !== null)
        return oe(l, t, n), Vs(l, e, n), !0;
    }
    return !1;
  }
  function ao(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: Fo(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(t)) {
      if (e) throw Error(d(479));
    } else
      e = zc(
        t,
        l,
        n,
        2
      ), e !== null && oe(e, t, 2);
  }
  function eu(t) {
    var e = t.alternate;
    return t === W || e !== null && e === W;
  }
  function Xs(t, e) {
    Vn = ki = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Vs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Lf(t, l);
    }
  }
  var lu = {
    readContext: Kt,
    use: $i,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
    useEffectEvent: Ot
  }, Ls = {
    readContext: Kt,
    use: $i,
    useCallback: function(t, e) {
      return te().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Kt,
    useEffect: Ns,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Pi(
        4194308,
        4,
        Ms.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Pi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Pi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = te();
      e = e === void 0 ? null : e;
      var n = t();
      if (mn) {
        zl(!0);
        try {
          t();
        } finally {
          zl(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = te();
      if (l !== void 0) {
        var a = l(e);
        if (mn) {
          zl(!0);
          try {
            l(e);
          } finally {
            zl(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = Fm.bind(
        null,
        W,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = te();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = $c(t);
      var e = t.queue, l = Qs.bind(null, W, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: to,
    useDeferredValue: function(t, e) {
      var l = te();
      return eo(l, t, e);
    },
    useTransition: function() {
      var t = $c(!1);
      return t = Us.bind(
        null,
        W,
        t.queue,
        !0,
        !1
      ), te().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = W, a = te();
      if (P) {
        if (l === void 0)
          throw Error(d(407));
        l = l();
      } else {
        if (l = e(), zt === null)
          throw Error(d(349));
        (at & 127) !== 0 || ss(n, e, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return a.queue = i, Ns(ds.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, Zn(
        9,
        { destroy: void 0 },
        hs.bind(
          null,
          n,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = te(), e = zt.identifierPrefix;
      if (P) {
        var l = Ke, n = Ze;
        l = (n & ~(1 << 32 - de(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Fi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Xm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: no,
    useFormState: zs,
    useActionState: zs,
    useOptimistic: function(t) {
      var e = te();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = ao.bind(
        null,
        W,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: kc,
    useCacheRefresh: function() {
      return te().memoizedState = km.bind(
        null,
        W
      );
    },
    useEffectEvent: function(t) {
      var e = te(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((dt & 2) !== 0)
          throw Error(d(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Zs = {
    readContext: Kt,
    use: $i,
    useCallback: Ds,
    useContext: Kt,
    useEffect: Pc,
    useImperativeHandle: Rs,
    useInsertionEffect: Os,
    useLayoutEffect: _s,
    useMemo: js,
    useReducer: Ii,
    useRef: As,
    useState: function() {
      return Ii(gl);
    },
    useDebugValue: to,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return Hs(
        l,
        bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ii(gl)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Qa(t),
        e
      ];
    },
    useSyncExternalStore: rs,
    useId: Bs,
    useHostTransitionStatus: no,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function(t, e) {
      var l = Mt();
      return ps(l, bt, t, e);
    },
    useMemoCache: kc,
    useCacheRefresh: Gs,
    useEffectEvent: Cs
  }, Wm = {
    readContext: Kt,
    use: $i,
    useCallback: Ds,
    useContext: Kt,
    useEffect: Pc,
    useImperativeHandle: Rs,
    useInsertionEffect: Os,
    useLayoutEffect: _s,
    useMemo: js,
    useReducer: Wc,
    useRef: As,
    useState: function() {
      return Wc(gl);
    },
    useDebugValue: to,
    useDeferredValue: function(t, e) {
      var l = Mt();
      return bt === null ? eo(l, t, e) : Hs(
        l,
        bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Wc(gl)[0], e = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Qa(t),
        e
      ];
    },
    useSyncExternalStore: rs,
    useId: Bs,
    useHostTransitionStatus: no,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function(t, e) {
      var l = Mt();
      return bt !== null ? ps(l, bt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: Gs,
    useEffectEvent: Cs
  };
  function io(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : Z({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var uo = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = be(), a = Ml(n);
      a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (oe(e, t, n), Ua(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = be(), a = Ml(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (oe(e, t, n), Ua(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = be(), n = Ml(l);
      n.tag = 2, e != null && (n.callback = e), e = Rl(t, n, l), e !== null && (oe(e, t, l), Ua(e, t, l));
    }
  };
  function Ks(t, e, l, n, a, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, u) : e.prototype && e.prototype.isPureReactComponent ? !Ca(l, n) || !Ca(a, i) : !0;
  }
  function Js(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && uo.enqueueReplaceState(e, e.state, null);
  }
  function pn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = Z({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function ks(t) {
    _i(t);
  }
  function Fs(t) {
    console.error(t);
  }
  function Ws(t) {
    _i(t);
  }
  function nu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function $s(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function co(t, e, l) {
    return l = Ml(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      nu(t, e);
    }, l;
  }
  function Is(t) {
    return t = Ml(t), t.tag = 3, t;
  }
  function Ps(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        $s(e, l, n);
      };
    }
    var u = l.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      $s(e, l, n), typeof a != "function" && (Gl === null ? Gl = /* @__PURE__ */ new Set([this]) : Gl.add(this));
      var c = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function $m(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && on(
        e,
        l,
        a,
        !0
      ), l = Jt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return It === null ? Eu() : l.alternate === null && _t === 0 && (_t = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Vi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Ko(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Vi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Ko(t, n, a)), !1;
        }
        throw Error(d(435, l.tag));
      }
      return Ko(t, n, a), Eu(), !1;
    }
    if (P)
      return e = Jt.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Nc && (t = Error(d(422), { cause: n }), Ma(Ae(t, l)))) : (n !== Nc && (e = Error(d(423), {
        cause: n
      }), Ma(
        Ae(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Ae(n, l), a = co(
        t.stateNode,
        n,
        a
      ), Yc(t, a), _t !== 4 && (_t = 2)), !1;
    var i = Error(d(520), { cause: n });
    if (i = Ae(i, l), Wa === null ? Wa = [i] : Wa.push(i), _t !== 4 && (_t = 2), e === null) return !0;
    n = Ae(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = co(l.stateNode, n, t), Yc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Gl === null || !Gl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Is(a), Ps(
              a,
              t,
              l,
              n
            ), Yc(l, a), !1;
          break;
        case 22:
          if (l.memoizedState !== null)
            return l.flags |= 65536, !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var oo = Error(d(461)), jt = !1;
  function Ut(t, e, l, n) {
    e.child = t === null ? ns(e, null, l, n) : gn(
      e,
      t.child,
      l,
      n
    );
  }
  function th(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    } else u = n;
    return fn(e), n = Lc(
      t,
      e,
      l,
      u,
      i,
      a
    ), c = Zc(), t !== null && !jt ? (Kc(t, e, a), ml(t, e, a)) : (P && c && Ui(e), e.flags |= 1, Ut(t, e, n, a), e.child);
  }
  function eh(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Tc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, lh(
        t,
        e,
        i,
        n,
        a
      )) : (t = ji(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !vo(t, a)) {
      var u = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ca, l(u, n) && t.ref === e.ref)
        return ml(t, e, a);
    }
    return e.flags |= 1, t = fl(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function lh(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Ca(i, n) && t.ref === e.ref)
        if (jt = !1, e.pendingProps = n = i, vo(t, a))
          (t.flags & 131072) !== 0 && (jt = !0);
        else
          return e.lanes = t.lanes, ml(t, e, a);
    }
    return fo(
      t,
      e,
      l,
      n,
      a
    );
  }
  function nh(t, e, l, n) {
    var a = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, e.child = null;
        return ah(
          t,
          e,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Qi(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? us(e, i) : Bc(), cs(e);
      else
        return n = e.lanes = 536870912, ah(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Qi(e, i.cachePool), us(e, i), Hl(), e.memoizedState = null) : (t !== null && Qi(e, null), Bc(), Hl());
    return Ut(t, e, a, l), e.child;
  }
  function Va(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function ah(t, e, l, n, a) {
    var i = Dc();
    return i = i === null ? null : { parent: Rt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && Qi(e, null), Bc(), cs(e), t !== null && on(t, e, n, !0), e.childLanes = a, null;
  }
  function au(t, e) {
    return e = iu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ih(t, e, l) {
    return gn(e, t.child, null, l), t = au(e, e.pendingProps), t.flags |= 2, pe(e), e.memoizedState = null, t;
  }
  function Im(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (P) {
        if (n.mode === "hidden")
          return t = au(e, n), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Va(null, t);
        if (Qc(e), (t = wt) ? (t = Md(
          t,
          Oe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: wl !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Xr(t), l.return = e, e.child = l, Gt = e, wt = null)) : t = null, t === null) throw Nl(e);
        return e.lanes = 536870912, null;
      }
      return au(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Qc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = ih(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(d(558));
      else if (jt || on(t, e, l, !1), a = (l & t.childLanes) !== 0, jt || a) {
        if (Dl.current === null) {
          if (n = zt, n !== null && (u = Zf(n, l), u !== 0 && u !== i.retryLane))
            throw i.retryLane = u, nn(t, u), oe(n, t, u), oo;
          Eu();
        }
        e = ih(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, wt = Me(u.nextSibling), Gt = e, P = !0, Al = null, Oe = !1, t !== null && Zr(e, t), e = au(e, n), e.flags |= 134221824;
      return e;
    }
    return t = fl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Kn(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(d(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function fo(t, e, l, n, a) {
    return fn(e), l = Lc(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Zc(), t !== null && !jt ? (Kc(t, e, a), ml(t, e, a)) : (P && n && Ui(e), e.flags |= 1, Ut(t, e, l, a), e.child);
  }
  function uh(t, e, l, n, a, i) {
    return fn(e), e.updateQueue = null, l = fs(
      e,
      n,
      l,
      a
    ), os(t), n = Zc(), t !== null && !jt ? (Kc(t, e, i), ml(t, e, i)) : (P && n && Ui(e), e.flags |= 1, Ut(t, e, l, i), e.child);
  }
  function ch(t, e, l, n, a) {
    if (fn(e), e.stateNode === null) {
      var i = Un, u = l.contextType;
      typeof u == "object" && u !== null && (i = Kt(u)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = uo, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, Hc(e), u = l.contextType, i.context = typeof u == "object" && u !== null ? Kt(u) : Un, i.state = e.memoizedState, u = l.getDerivedStateFromProps, typeof u == "function" && (io(
        e,
        l,
        u,
        n
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && uo.enqueueReplaceState(i, i.state, null), qa(e, n, i, a), Ya(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      i = e.stateNode;
      var c = e.memoizedProps, o = pn(l, c);
      i.props = o;
      var m = i.context, b = l.contextType;
      u = Un, typeof b == "object" && b !== null && (u = Kt(b));
      var z = l.getDerivedStateFromProps;
      b = typeof z == "function" || typeof i.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, b || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c || m !== u) && Js(
        e,
        i,
        n,
        u
      ), _l = !1;
      var h = e.memoizedState;
      i.state = h, qa(e, n, i, a), Ya(), m = e.memoizedState, c || h !== m || _l ? (typeof z == "function" && (io(
        e,
        l,
        z,
        n
      ), m = e.memoizedState), (o = _l || Ks(
        e,
        l,
        o,
        n,
        h,
        m,
        u
      )) ? (b || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = m), i.props = n, i.state = m, i.context = u, n = o) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Uc(t, e), u = e.memoizedProps, b = pn(l, u), i.props = b, z = e.pendingProps, h = i.context, m = l.contextType, o = Un, typeof m == "object" && m !== null && (o = Kt(m)), c = l.getDerivedStateFromProps, (m = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== z || h !== o) && Js(
        e,
        i,
        n,
        o
      ), _l = !1, h = e.memoizedState, i.state = h, qa(e, n, i, a), Ya();
      var y = e.memoizedState;
      u !== z || h !== y || _l || t !== null && t.dependencies !== null && Bi(t.dependencies) ? (typeof c == "function" && (io(
        e,
        l,
        c,
        n
      ), y = e.memoizedState), (b = _l || Ks(
        e,
        l,
        b,
        n,
        h,
        y,
        o
      ) || t !== null && t.dependencies !== null && Bi(t.dependencies)) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, y, o), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        y,
        o
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = y), i.props = n, i.state = y, i.context = o, n = b) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return i = n, Kn(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = gn(
      e,
      t.child,
      null,
      a
    ), e.child = gn(
      e,
      null,
      l,
      a
    )) : Ut(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = ml(
      t,
      e,
      a
    ), t;
  }
  function oh(t, e, l, n) {
    return un(), e.flags |= 256, Ut(t, e, l, n), e.child;
  }
  var ro = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function so(t) {
    return { baseLanes: t, cachePool: $r() };
  }
  function ho(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= xe), t;
  }
  function fh(t, e, l) {
    var n = e.pendingProps, a = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (kt.current & 2) !== 0), u && (a = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (P) {
        if (a ? jl(e) : Hl(), (t = wt) ? (t = Md(
          t,
          Oe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: wl !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Xr(t), l.return = e, e.child = l, Gt = e, wt = null)) : t = null, t === null) throw Nl(e);
        return df(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return i = n.children, n = n.fallback, a ? (Hl(), a = e.mode, i = iu(
        { mode: "hidden", children: i },
        a
      ), n = an(
        n,
        a,
        l,
        null
      ), i.return = e, n.return = e, i.sibling = n, e.child = i, n = e.child, n.memoizedState = so(l), n.childLanes = ho(
        t,
        u,
        l
      ), e.memoizedState = ro, Va(null, n)) : (jl(e), go(e, i));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var o = c.dehydrated;
      if (o !== null)
        return Pm(
          t,
          e,
          i,
          u,
          n,
          o,
          c,
          l
        );
    }
    return a ? (Hl(), a = n.fallback, i = e.mode, c = t.child, o = c.sibling, n = fl(c, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = c.subtreeFlags & 1206910976, o !== null ? a = fl(o, a) : (a = an(
      a,
      i,
      l,
      null
    ), a.flags |= 2), a.return = e, n.return = e, n.sibling = a, e.child = n, Va(null, n), n = e.child, a = t.child.memoizedState, a === null ? a = so(l) : (i = a.cachePool, i !== null ? (c = Rt._currentValue, i = i.parent !== c ? { parent: c, pool: c } : i) : i = $r(), a = {
      baseLanes: a.baseLanes | l,
      cachePool: i
    }), n.memoizedState = a, n.childLanes = ho(
      t,
      u,
      l
    ), e.memoizedState = ro, Va(t.child, n)) : (jl(e), l = t.child, t = l.sibling, l = fl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function go(t, e) {
    return e = iu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function iu(t, e) {
    return t = ae(22, t, null, e), t.lanes = 0, t;
  }
  function uu(t, e, l) {
    return gn(e, t.child, null, l), t = go(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Pm(t, e, l, n, a, i, u, c) {
    if (l)
      return e.flags & 256 ? (jl(e), e.flags &= -257, uu(
        t,
        e,
        c
      )) : e.memoizedState !== null ? (Hl(), e.child = t.child, e.flags |= 128, null) : (Hl(), i = a.fallback, u = e.mode, a = iu(
        { mode: "visible", children: a.children },
        u
      ), i = an(
        i,
        u,
        c,
        null
      ), i.flags |= 2, a.return = e, i.return = e, a.sibling = i, e.child = a, gn(e, t.child, null, c), a = e.child, a.memoizedState = so(c), a.childLanes = ho(
        t,
        n,
        c
      ), e.memoizedState = ro, Va(null, a));
    if (jl(e), df(i)) {
      if (n = i.nextSibling && i.nextSibling.dataset, n) var o = n.dgst;
      return n = o, n !== "" && (a = Error(d(419)), a.stack = "", a.digest = n, Ma({ value: a, source: null, stack: null })), uu(
        t,
        e,
        c
      );
    }
    if (jt || on(t, e, c, !1), n = (c & t.childLanes) !== 0, jt || n) {
      if (Dl.current !== null)
        return uu(
          t,
          e,
          c
        );
      if (n = zt, n !== null && (a = Zf(
        n,
        c
      ), a !== 0 && a !== u.retryLane))
        throw u.retryLane = a, nn(t, a), oe(n, t, a), oo;
      return hf(i) || Eu(), uu(
        t,
        e,
        c
      );
    }
    return hf(i) ? (e.flags |= 192, e.child = t.child, null) : (t = u.treeContext, wt = Me(i.nextSibling), Gt = e, P = !0, Al = null, Oe = !1, t !== null && Zr(e, t), e = go(
      e,
      a.children
    ), e.flags |= 134221824, e);
  }
  function rh(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), qi(t.return, e, l);
  }
  function sh(t) {
    for (var e = null; t !== null; ) {
      var l = t.alternate;
      l !== null && Ji(l) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function cu(t, e, l, n, a, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = n, u.tail = l, u.tailMode = a, u.treeForkCount = i);
  }
  function mo(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var l = e.sibling;
      e.sibling = t.child, t.child = e, e = l;
    }
  }
  function po(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var u = kt.current;
    if (e.flags & 128)
      return Ba(e, u), null;
    var c = (u & 2) !== 0;
    if (c ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, Ba(e, u), a === "backwards" && t !== null ? (mo(t), Ut(t, e, n, l), mo(t)) : Ut(t, e, n, l), n = P ? _a : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && rh(t, l, e);
        else if (t.tag === 19)
          rh(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "backwards":
        l = sh(e.child), l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null, mo(e)), cu(
          e,
          !0,
          a,
          null,
          i,
          n
        );
        break;
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && Ji(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        cu(
          e,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        cu(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        l = sh(e.child), l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), cu(
          e,
          !1,
          a,
          l,
          i,
          n
        );
    }
    return e.child;
  }
  function hh(t, e, l) {
    var n = e.pendingProps;
    return Cl(e, e.type, n.value), Ut(t, e, n.children, l), e.child;
  }
  function ml(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Bl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (on(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(d(153));
    if (e.child !== null) {
      for (t = e.child, l = fl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = fl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function vo(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Bi(t)));
  }
  function tp(t, e, l) {
    switch (e.tag) {
      case 3:
        hi(e, e.stateNode.containerInfo), Cl(e, Rt, t.memoizedState.cache), un();
        break;
      case 27:
      case 5:
        Vu(e);
        break;
      case 4:
        hi(e, e.stateNode.containerInfo);
        break;
      case 10:
        Cl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Qc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null)
            return jl(e), e.flags |= 128, null;
          n = on(
            t,
            e,
            l,
            !1
          );
          var a = e.child.childLanes;
          return n || (l & a) !== 0 ? fh(t, e, l) : (jl(e), t = ml(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        }
        jl(e);
        break;
      case 19:
        if (e.flags & 128)
          return po(
            t,
            e,
            l
          );
        if (a = (t.flags & 128) !== 0, n = (l & e.childLanes) !== 0, n || (on(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return po(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ba(e, kt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, nh(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Cl(e, Rt, t.memoizedState.cache);
    }
    return ml(t, e, l);
  }
  function dh(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        jt = !0;
      else {
        if (!vo(t, l) && (e.flags & 128) === 0)
          return jt = !1, tp(
            t,
            e,
            l
          );
        jt = (t.flags & 131072) !== 0;
      }
    else
      jt = !1, P && (e.flags & 1048576) !== 0 && Lr(e, _a, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = hn(e.elementType), e.type = t, typeof t == "function")
            Tc(t) ? (n = pn(t, n), e.tag = 1, e = ch(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = fo(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === M) {
                e.tag = 11, e = th(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === St) {
                e.tag = 14, e = eh(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === qt) {
                e.tag = 10, e.type = t, e = hh(
                  null,
                  e,
                  l
                );
                break t;
              }
            }
            throw e = ft(t) || t, Error(d(306, e, ""));
          }
        }
        return e;
      case 0:
        return fo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = pn(
          n,
          e.pendingProps
        ), ch(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (hi(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(d(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          a = i.element, Uc(t, e), qa(e, n, null, l);
          var u = e.memoizedState;
          if (n = u.cache, Cl(e, Rt, n), n !== i.cache && _c(
            e,
            [Rt],
            l,
            !0
          ), Ya(), n = u.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: u.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = oh(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = Ae(
                Error(d(424)),
                e
              ), Ma(a), e = oh(
                t,
                e,
                n,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (wt = Me(t.firstChild), Gt = e, P = !0, Al = null, Oe = !0, l = ns(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 134221824, l = l.sibling;
            }
          else {
            if (un(), n === a) {
              e = ml(
                t,
                e,
                l
              );
              break t;
            }
            Ut(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Kn(t, e), t === null ? (l = qd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : P || (e.stateNode = vd(
          e.type,
          e.pendingProps,
          bl.current,
          e
        )) : e.memoizedState = qd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Vu(e), t === null && P && (n = e.stateNode = jd(
          e.type,
          e.pendingProps,
          bl.current
        ), Gt = e, Oe = !0, a = wt, Vl(e.type) ? (gf = a, wt = Me(n.firstChild)) : wt = a), Ut(
          t,
          e,
          e.pendingProps.children,
          l
        ), Kn(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && P && ((a = n = wt) && (n = kp(
          n,
          e.type,
          e.pendingProps,
          Oe
        ), n !== null ? (e.stateNode = n, Gt = e, wt = Me(n.firstChild), Oe = !1, a = !0) : a = !1), a || Nl(e)), Vu(e), a = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, n = i.children, af(a, i) ? n = null : u !== null && af(a, u) && (e.flags |= 32), e.memoizedState !== null && (a = Lc(
          t,
          e,
          Vm,
          null,
          null,
          l
        ), ra._currentValue = a), Kn(t, e), Ut(t, e, n, l), e.child;
      case 6:
        return t === null && P && ((t = l = wt) && (l = Fp(
          l,
          e.pendingProps,
          Oe
        ), l !== null ? (e.stateNode = l, Gt = e, wt = null, t = !0) : t = !1), t || Nl(e)), null;
      case 13:
        return fh(t, e, l);
      case 4:
        return hi(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = gn(
          e,
          null,
          n,
          l
        ) : Ut(t, e, n, l), e.child;
      case 11:
        return th(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return n = e.pendingProps, Kn(t, e), Ut(t, e, n, l), e.child;
      case 8:
        return Ut(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Ut(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return hh(t, e, l);
      case 9:
        return a = e.type._context, n = e.pendingProps.children, fn(e), a = Kt(a), n = n(a), e.flags |= 1, Ut(t, e, n, l), e.child;
      case 14:
        return eh(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return lh(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return po(t, e, l);
      case 31:
        return Im(t, e, l);
      case 22:
        return nh(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return fn(e), n = Kt(Rt), t === null ? (a = Dc(), a === null && (a = zt, i = Mc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, Hc(e), Cl(e, Rt, a)) : ((t.lanes & l) !== 0 && (Uc(t, e), qa(e, null, null, l), Ya()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Cl(e, Rt, n)) : (n = i.cache, Cl(e, Rt, n), n !== a.cache && _c(
          e,
          [Rt],
          l,
          !0
        ))), Ut(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), n = e.pendingProps, n.name != null && n.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : P && Ui(e), t !== null && t.memoizedProps.name !== n.name ? e.flags |= 4194816 : Kn(t, e), Ut(t, e, n.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(d(156, e.tag));
  }
  function pl(t) {
    t.flags |= 4;
  }
  function yo(t, e, l, n, a) {
    var i;
    if ((i = (t.mode & 32) !== 0) && (i = l === null ? Xd(e, n) : Xd(e, n) && (n.src !== l.src || n.srcSet !== l.srcSet)), i) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (kh()) t.flags |= 8192;
        else
          throw dn = Vi, jc;
    } else t.flags &= -16777217;
  }
  function gh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vd(e))
      if (kh()) t.flags |= 8192;
      else
        throw dn = Vi, jc;
  }
  function ou(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Xf() : 536870912, t.lanes |= e, $n |= e);
  }
  function La(t, e) {
    if (!P)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = t.tail, n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
          break;
        default:
          for (e = t.tail, l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
      }
  }
  function At(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 1206910976, n |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function ep(t, e, l) {
    var n = e.pendingProps;
    switch (Ac(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(e), null;
      case 1:
        return At(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), hl(Rt), Tn(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Bn(e) ? pl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cc())), At(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (pl(e), i !== null ? (At(e), gh(e, i)) : (At(e), yo(
          e,
          a,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (pl(e), At(e), gh(e, i)) : (At(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && pl(e), At(e), yo(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (di(e), l = bl.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && pl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(d(166));
            return At(e), e.subtreeFlags &= -33554433, null;
          }
          t = Ve.current, Bn(e) ? Kr(e) : (t = jd(a, n, l), e.stateNode = t, pl(e));
        }
        return At(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (di(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && pl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(d(166));
            return At(e), e.subtreeFlags &= -33554433, null;
          }
          if (i = Ve.current, Bn(e))
            Kr(e);
          else {
            var u = ei(
              bl.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? u.createElement("select", {
                      is: n.is
                    }) : u.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? u.createElement(a, { is: n.is }) : u.createElement(a);
                }
            }
            i[Zt] = e, i[ne] = n;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = i;
            t: switch (Wt(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && pl(e);
          }
        }
        return At(e), e.subtreeFlags &= -33554433, yo(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && pl(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(d(166));
          if (t = bl.current, Bn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = Gt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Zt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || dd(t.nodeValue, l)), t || Nl(e, !0);
          } else
            t = ei(t).createTextNode(
              n
            ), t[Zt] = e, e.stateNode = t;
        }
        return At(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Bn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(d(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(557));
              t[Zt] = e;
            } else
              un(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            At(e), t = !1;
          } else
            l = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(d(558));
        }
        return At(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Bn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(d(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(d(317));
              a[Zt] = e;
            } else
              un(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            At(e), a = !1;
          } else
            a = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (pe(e), e) : (pe(e), null);
        }
        return pe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ou(e, e.updateQueue), At(e), null);
      case 4:
        return Tn(), t === null && Po(e.stateNode.containerInfo), e.flags |= 67108864, At(e), null;
      case 10:
        return hl(e.type), At(e), null;
      case 19:
        if (Xc(e), n = e.memoizedState, n === null) return At(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) La(n, !1);
          else {
            if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Ji(t), i !== null) {
                  for (e.flags |= 128, La(n, !1), t = i.updateQueue, e.updateQueue = t, ou(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Qr(l, t), l = l.sibling;
                  return Ba(
                    e,
                    kt.current & 1 | 2
                  ), P && rl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && se() > bu && (e.flags |= 128, a = !0, La(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Ji(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, ou(e, t), La(n, !0), n.tail === null && n.tailMode !== "collapsed" && n.tailMode !== "visible" && !i.alternate && !P)
                return At(e), null;
            } else
              2 * se() - n.renderingStartTime > bu && l !== 536870912 && (e.flags |= 128, a = !0, La(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        if (n.tail !== null) {
          t = n.tail;
          t: {
            for (l = t; l !== null; ) {
              if (l.alternate !== null) {
                l = !1;
                break t;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return n.rendering = t, n.tail = t.sibling, n.renderingStartTime = se(), t.sibling = null, i = kt.current, i = a ? i & 1 | 2 : i & 1, n.tailMode === "visible" || n.tailMode === "collapsed" || !l || P ? Ba(e, i) : (l = i, Et(Jt, e), Et(kt, l), It === null && (It = e)), P && rl(e, n.treeForkCount), t;
        }
        return At(e), null;
      case 22:
      case 23:
        return pe(e), Gc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (At(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : At(e), l = e.updateQueue, l !== null && ou(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && Lt(sn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), hl(Rt), At(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, At(e), null;
    }
    throw Error(d(156, e.tag));
  }
  function lp(t, e) {
    switch (Ac(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return hl(Rt), Tn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return di(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (pe(e), e.alternate === null)
            throw Error(d(340));
          un();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (pe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(d(340));
          un();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Xc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Tn(), null;
      case 10:
        return hl(e.type), null;
      case 22:
      case 23:
        return pe(e), Gc(), t !== null && Lt(sn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return hl(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function mh(t, e) {
    switch (Ac(e), e.tag) {
      case 3:
        hl(Rt), Tn();
        break;
      case 26:
      case 27:
      case 5:
        di(e);
        break;
      case 4:
        Tn();
        break;
      case 31:
        e.memoizedState !== null && pe(e);
        break;
      case 13:
        pe(e);
        break;
      case 19:
        Xc(e);
        break;
      case 10:
        hl(e.type);
        break;
      case 22:
      case 23:
        pe(e), Gc(), t !== null && Lt(sn);
        break;
      case 24:
        hl(Rt);
    }
  }
  function Za(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, u = l.inst;
            n = i(), u.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (c) {
      vt(e, e.return, c);
    }
  }
  function Ul(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var u = n.inst, c = u.destroy;
            if (c !== void 0) {
              u.destroy = void 0, a = e;
              var o = l, m = c;
              try {
                m();
              } catch (b) {
                vt(
                  a,
                  o,
                  b
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (b) {
      vt(e, e.return, b);
    }
  }
  function ph(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        is(e, l);
      } catch (n) {
        vt(t, t.return, n);
      }
    }
  }
  function vh(t, e, l) {
    l.props = pn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      vt(t, e, n);
    }
  }
  function Je(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, i = cl(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== i) && (a.ref = Ed(i)), n = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var u = new Se(t);
              v(
                t.child,
                !1,
                Kp,
                u,
                void 0,
                void 0
              ), t.stateNode = u;
            }
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (c) {
      vt(t, e, c);
    }
  }
  function Ft(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          vt(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          vt(t, e, a);
        }
      else l.current = null;
  }
  function fu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var l = 0; l < e.length; l++)
        _d(
          t.stateNode,
          e[l]
        );
  }
  function yh(t) {
    for (var e = t.return; e !== null && (bo(e) && _d(t.stateNode, e.stateNode), !xo(e)); )
      e = e.return;
  }
  function Ka(t) {
    for (var e = t.return; e !== null && (bo(e) && Jp(t.stateNode, e.stateNode), !xo(e)); )
      e = e.return;
  }
  function xo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function bo(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function So(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function zo(t, e, l) {
    try {
      var n = t.stateNode;
      Cp(n, t.type, l, e), n[ne] = e;
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function xh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vl(t.type) || t.tag === 4;
  }
  function To(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Vl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Eo(t, e, l, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(a, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(a), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Le)), fu(t, n), rt = !0;
    else if (a !== 4 && (a === 27 && (fu(t, n), n = null, Vl(t.type) && (l = t.stateNode, e = null)), t = t.child, t !== null))
      for (Eo(
        t,
        e,
        l,
        n
      ), t = t.sibling; t !== null; )
        Eo(
          t,
          e,
          l,
          n
        ), t = t.sibling;
  }
  function ru(t, e, l, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, e ? l.insertBefore(a, e) : l.appendChild(a), fu(t, n), rt = !0;
    else if (a !== 4 && (a === 27 && (fu(t, n), n = null, Vl(t.type) && (l = t.stateNode)), t = t.child, t !== null))
      for (ru(
        t,
        e,
        l,
        n
      ), t = t.sibling; t !== null; )
        ru(
          t,
          e,
          l,
          n
        ), t = t.sibling;
  }
  function bh(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      Wt(e, n, l), e[Zt] = t, e[ne] = l;
    } catch (i) {
      vt(t, t.return, i);
    }
  }
  var su = !1, ve = null;
  function Sh(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (su = !0);
  }
  var ke = null;
  function zh() {
    var t = ke;
    return ke = null, t;
  }
  var ie = 0;
  function Jn(t, e, l, n, a) {
    return ie = 0, Th(
      t.child,
      e,
      l,
      n,
      a
    );
  }
  function Th(t, e, l, n, a) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var u = t.stateNode;
        if (n !== null) {
          var c = of(u);
          n.push(c), c.view && (i = !0);
        } else
          i || of(u).view && (i = !0);
        su = !0, zd(
          u,
          ie === 0 ? e : e + "_" + ie,
          l
        ), ie++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Th(
        t.child,
        e,
        l,
        n,
        a
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function Fe(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Td(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Fe(
        t.child,
        e
      )), t = t.sibling;
  }
  function hu(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (hu(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(d(544));
          var l = e.name;
          e = ol(e.default, e.share), e !== "none" && (Jn(
            t,
            l,
            e,
            null,
            !1
          ) || Fe(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function wo(t, e) {
    if (t.tag === 30) {
      var l = t.stateNode, n = t.memoizedProps, a = cl(n, l), i = ol(
        n.default,
        l.paired ? n.share : n.enter
      );
      i !== "none" ? Jn(t, a, i, null, !1) ? (hu(t), l.paired || e || ea(t, n.onEnter)) : Fe(t.child, !1) : hu(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        wo(t, e), t = t.sibling;
    else hu(t);
  }
  function Ao(t) {
    if (ve !== null && ve.size !== 0) {
      var e = ve;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var l = t.memoizedProps, n = l.name;
              if (n != null && n !== "auto") {
                var a = e.get(n);
                if (a !== void 0) {
                  var i = ol(
                    l.default,
                    l.share
                  );
                  if (i !== "none" && (Jn(
                    t,
                    n,
                    i,
                    null,
                    !1
                  ) ? (i = t.stateNode, a.paired = i, i.paired = a, ea(t, l.onShare)) : Fe(t.child, !1)), e.delete(n), e.size === 0) break;
                }
              }
            }
            Ao(t);
          }
          t = t.sibling;
        }
    }
  }
  function No(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, l = cl(e, t.stateNode), n = ve !== null ? ve.get(l) : void 0, a = ol(
        e.default,
        n !== void 0 ? e.share : e.exit
      );
      a !== "none" && (Jn(t, l, a, null, !1) ? n !== void 0 ? (a = t.stateNode, n.paired = a, a.paired = n, ve.delete(l), ea(t, e.onShare)) : ea(t, e.onExit) : Fe(t.child, !1)), ve !== null && Ao(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        No(t), t = t.sibling;
    else
      ve !== null && Ao(t);
  }
  function Eh(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, l = cl(e, t.stateNode);
        e = ol(e.default, e.update), t.flags &= -5, e !== "none" && Jn(
          t,
          l,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Eh(t);
      t = t.sibling;
    }
  }
  function Co(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Fe(t.child, !1));
          }
          Co(t);
        }
        t = t.sibling;
      }
  }
  function du(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Fe(t.child, !1), Co(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        du(t), t = t.sibling;
    else Co(t);
  }
  function wh(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Fe(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && wh(t), t = t.sibling;
  }
  function Oo(t, e, l, n, a, i, u) {
    for (var c = !1; e !== null; ) {
      if (e.tag === 5) {
        var o = e.stateNode;
        if (i !== null && ie < i.length) {
          var m = i[ie], b = of(o);
          (m.view || b.view) && (c = !0);
          var z;
          if (z = (t.flags & 4) === 0)
            if (b.clip) z = !0;
            else {
              z = m.rect;
              var h = b.rect;
              z = z.y !== h.y || z.x !== h.x || z.height !== h.height || z.width !== h.width;
            }
          z && (t.flags |= 4), b.abs ? b = !m.abs : (m = m.rect, b = b.rect, b = m.height !== b.height || m.width !== b.width), b && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && zd(
          o,
          ie === 0 ? l : l + "_" + ie,
          a
        ), c && (t.flags & 4) !== 0 || (ke === null && (ke = []), ke.push(
          o,
          ie === 0 ? n : n + "_" + ie,
          e.memoizedProps
        )), ie++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u ? t.flags |= e.flags & 32 : Oo(
        t,
        e.child,
        l,
        n,
        a,
        i,
        u
      ) && (c = !0));
      e = e.sibling;
    }
    return c;
  }
  function Ah(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, n = t.stateNode, a = cl(l, n), i = ol(l.default, l.update), u;
        u = t.memoizedState, t.memoizedState = null, n = t;
        var c = t.child;
        ie = 0, a = Oo(
          n,
          c,
          a,
          a,
          i,
          u,
          !1
        ), (t.flags & 4) !== 0 && a && ea(t, l.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Ah(t);
      t = t.sibling;
    }
  }
  var Qt = !1, mt = !1, We = !1, _o = !1, Nh = typeof WeakSet == "function" ? WeakSet : Set, Xt = null, $e = !1, Ja = !1, gu = !1, Mo = !1;
  function np(t, e, l) {
    if (t = t.containerInfo, lf = sa, t = Mr(t), pc(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var c = 0, o = -1, m = -1, b = 0, z = 0, h = t, y = null;
            e: for (; ; ) {
              for (var C; h !== n || i !== 0 && h.nodeType !== 3 || (o = c + i), h !== u || a !== 0 && h.nodeType !== 3 || (m = c + a), h.nodeType === 3 && (c += h.nodeValue.length), (C = h.firstChild) !== null; )
                y = h, h = C;
              for (; ; ) {
                if (h === t) break e;
                if (y === n && ++b === i && (o = c), y === u && ++z === a && (m = c), (C = h.nextSibling) !== null) break;
                h = y, y = h.parentNode;
              }
              h = C;
            }
            n = o === -1 || m === -1 ? null : { start: o, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (nf = { focusedElem: t, selectionRange: n }, sa = !1, l = (l & 335544064) === l, Xt = e, e = l ? 9270 : 1024; Xt !== null; ) {
      if (t = Xt, l && (n = t.deletions, n !== null))
        for (i = 0; i < n.length; i++)
          l && No(n[i]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        l && Sh(t), mu(l);
      else {
        if (t.tag === 22) {
          if (n = t.alternate, t.memoizedState !== null) {
            n !== null && n.memoizedState === null && l && No(n), mu(l);
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            l && Sh(t), mu(l);
            continue;
          }
        }
        n = t.child, (t.subtreeFlags & e) !== 0 && n !== null ? (n.return = t, Xt = n) : (l && Eh(t), mu(l));
      }
    }
    ve = null;
  }
  function mu(t) {
    for (; Xt !== null; ) {
      var e = Xt, l = t, n = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && n !== null) {
            l = void 0, a = n.memoizedProps, n = n.memoizedState;
            var i = e.stateNode;
            try {
              var u = pn(
                e.type,
                a
              );
              l = i.getSnapshotBeforeUpdate(
                u,
                n
              ), i.__reactInternalSnapshotBeforeUpdate = l;
            } catch (c) {
              vt(e, e.return, c);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (n = e.stateNode.containerInfo, l = n.nodeType, l === 9)
              sf(n);
            else if (l === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  sf(n);
                  break;
                default:
                  n.textContent = "";
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
          l && n !== null && (l = cl(
            n.memoizedProps,
            n.stateNode
          ), a = e.memoizedProps, a = ol(a.default, a.update), a !== "none" && Jn(
            n,
            l,
            a,
            n.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(d(163));
      }
      if (n = e.sibling, n !== null) {
        n.return = e.return, Xt = n;
        break;
      }
      Xt = e.return;
    }
  }
  function Ch(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ie(t, l), n & 4 && Za(5, l);
        break;
      case 1:
        if (Ie(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              vt(l, l.return, u);
            }
          else {
            var a = pn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              vt(
                l,
                l.return,
                u
              );
            }
          }
        n & 64 && ph(l), n & 512 && Je(l, l.return);
        break;
      case 3:
        if (Ie(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            is(t, e);
          } catch (u) {
            vt(l, l.return, u);
          }
        }
        break;
      case 27:
        e === null && n & 4 && bh(l);
      case 26:
      case 5:
        Ie(t, l), e === null && n & 4 && So(l), n & 512 && Je(l, l.return);
        break;
      case 12:
        Ie(t, l);
        break;
      case 31:
        Ie(t, l), n & 4 && Rh(t, l);
        break;
      case 13:
        Ie(t, l), n & 4 && Dh(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = mp.bind(
          null,
          l
        ), Wp(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Qt, !n) {
          var i = e !== null && e.memoizedState !== null || mt;
          e = Qt, a = mt, Qt = n, (mt = i) && !a ? (n = 2, (l.subtreeFlags & 8772) !== 0 && (n |= 1), qe(
            t,
            l,
            n
          )) : Ie(t, l), Qt = e, mt = a;
        }
        break;
      case 30:
        Ie(t, l), n & 512 && Je(l, l.return);
        break;
      case 7:
        n & 512 && Je(l, l.return);
      default:
        Ie(t, l);
    }
  }
  function Ro(t, e) {
    for (t = t.child; t !== null; )
      Oh(t, e), t = t.sibling;
  }
  function Oh(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var l = t.stateNode;
          if (e) {
            var n = l.style;
            typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
          } else {
            var a = t.stateNode, i = t.memoizedProps.style, u = i != null && i.hasOwnProperty("display") ? i.display : null;
            a.style.display = u == null || typeof u == "boolean" ? "" : ("" + u).trim();
          }
        } catch (o) {
          vt(t, t.return, o);
        }
        Do(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, rt = !0;
        } catch (o) {
          vt(t, t.return, o);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          e ? Sd(c, !0) : Sd(t.stateNode, !1);
        } catch (o) {
          vt(t, t.return, o);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Ro(t, e);
        break;
      default:
        Ro(t, e);
    }
  }
  function Do(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var l = t, n = e;
          switch (l.tag) {
            case 4:
              Oh(l, n);
              break t;
            case 22:
              l.memoizedState === null && Do(l, n);
              break t;
            default:
              Do(l, n);
          }
        }
        t = t.sibling;
      }
  }
  function _h(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _h(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && bi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, ue = !1;
  function Ue(t, e, l) {
    for (l = l.child; l !== null; )
      Mh(t, e, l), l = l.sibling;
  }
  function Mh(t, e, l) {
    if (he && typeof he.onCommitFiberUnmount == "function")
      try {
        he.onCommitFiberUnmount(pa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        mt || Ft(l, e), Ue(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && !mt && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        mt || Ft(l, e), Ka(l);
        var n = Nt, a = ue;
        Vl(l.type) && (Nt = l.stateNode, ue = !1), Ue(
          t,
          e,
          l
        ), Hd(
          l.stateNode,
          l.type,
          l.memoizedProps
        ), Nt = n, ue = a;
        break;
      case 5:
        mt || Ft(l, e), Ka(l);
      case 6:
        if (l.tag === 6 && Ka(l), n = Nt, a = ue, Nt = null, Ue(
          t,
          e,
          l
        ), Nt = n, ue = a, Nt !== null)
          if (ue)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(l.stateNode), rt = !0;
            } catch (i) {
              vt(
                l,
                e,
                i
              );
            }
          else
            try {
              Nt.removeChild(l.stateNode), rt = !0;
            } catch (i) {
              vt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Nt !== null && (ue ? (t = Nt, bd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), ha(t)) : bd(Nt, l.stateNode));
        break;
      case 4:
        n = Nt, a = ue, Nt = l.stateNode.containerInfo, ue = !0, Ue(
          t,
          e,
          l
        ), Nt = n, ue = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ul(2, l, e), mt || Ul(4, l, e), Ue(
          t,
          e,
          l
        );
        break;
      case 1:
        mt || (Ft(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && vh(
          l,
          e,
          n
        )), Ue(
          t,
          e,
          l
        );
        break;
      case 21:
        Ue(
          t,
          e,
          l
        );
        break;
      case 22:
        mt = (n = mt) || l.memoizedState !== null, Ue(
          t,
          e,
          l
        ), mt = n;
        break;
      case 30:
        Ft(l, e), Ue(
          t,
          e,
          l
        );
        break;
      case 7:
        mt || Ft(l, e), Ue(
          t,
          e,
          l
        );
        break;
      default:
        Ue(
          t,
          e,
          l
        );
    }
  }
  function Rh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ha(t);
      } catch (l) {
        vt(e, e.return, l);
      }
    }
  }
  function Dh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ha(t);
      } catch (l) {
        vt(e, e.return, l);
      }
  }
  function ap(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Nh()), e;
      default:
        throw Error(d(435, t.tag));
    }
  }
  function pu(t, e) {
    var l = ap(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = pp.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function ee(t, e, l) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Vl(o.type)) {
                Nt = o.stateNode, ue = !1;
                break t;
              }
              break;
            case 5:
              Nt = o.stateNode, ue = !1;
              break t;
            case 3:
            case 4:
              Nt = o.stateNode.containerInfo, ue = !0;
              break t;
          }
          o = o.return;
        }
        if (Nt === null) throw Error(d(160));
        Mh(u, c, i), Nt = null, ue = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        jh(e, t, l), e = e.sibling;
  }
  var Ye = null;
  function jh(t, e, l) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (n = t.updateQueue, n = n !== null ? n.events : null, n !== null))
          for (var i = 0; i < n.length; i++) {
            var u = n[i];
            u.ref.impl = u.nextImpl;
          }
        ee(e, t, l), le(t), a & 4 && (Ul(3, t, t.return), Za(3, t), Ul(5, t, t.return));
        break;
      case 1:
        ee(e, t, l), le(t), a & 512 && (mt || n === null || Ft(n, n.return)), a & 64 && Qt && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? e : l.concat(e))));
        break;
      case 26:
        if (i = Ye, ee(e, t, l), le(t), a & 512 && (mt || n === null || Ft(n, n.return)), a & 4)
          if (a = n !== null ? n.memoizedState : null, l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null)
                if (Qt)
                  t.stateNode = vd(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, l = t.memoizedProps, a = i.ownerDocument || i;
                    e: switch (e) {
                      case "title":
                        n = a.getElementsByTagName("title")[0], (!n || n[xa] || n[Zt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(e), a.head.insertBefore(
                          n,
                          a.querySelector("head > title")
                        )), Wt(n, e, l), n[Zt] = t, Bt(n), e = n;
                        break t;
                      case "link":
                        if (i = Qd(
                          "link",
                          "href",
                          a
                        ).get(e + (l.href || ""))) {
                          for (u = 0; u < i.length; u++)
                            if (n = i[u], n.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && n.getAttribute("rel") === (l.rel == null ? null : l.rel) && n.getAttribute("title") === (l.title == null ? null : l.title) && n.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                              i.splice(u, 1);
                              break e;
                            }
                        }
                        n = a.createElement(e), Wt(n, e, l), a.head.appendChild(n);
                        break;
                      case "meta":
                        if (i = Qd(
                          "meta",
                          "content",
                          a
                        ).get(e + (l.content || ""))) {
                          for (u = 0; u < i.length; u++)
                            if (n = i[u], n.getAttribute("content") === (l.content == null ? null : "" + l.content) && n.getAttribute("name") === (l.name == null ? null : l.name) && n.getAttribute("property") === (l.property == null ? null : l.property) && n.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && n.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                              i.splice(u, 1);
                              break e;
                            }
                        }
                        n = a.createElement(e), Wt(n, e, l), a.head.appendChild(n);
                        break;
                      default:
                        throw Error(d(468, e));
                    }
                    n[Zt] = t, Bt(n), e = n;
                  }
                  t.stateNode = e;
                }
              else
                Qt || yf(i, t.type, t.stateNode);
            else
              t.stateNode = Gd(
                i,
                l,
                t.memoizedProps
              );
          else
            a !== l ? (a === null ? (e = n.stateNode, e === null || mt || e.parentNode.removeChild(e)) : a.count--, l === null ? Qt || yf(i, t.type, t.stateNode) : Gd(i, l, t.memoizedProps)) : l === null && t.stateNode !== null && zo(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        break;
      case 27:
        ee(e, t, l), le(t), a & 512 && (mt || n === null || Ft(n, n.return)), n !== null && a & 4 && zo(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (i = We, We = !1, ee(e, t, l), We = i, le(t), a & 512 && (mt || n === null || Ft(n, n.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            On(e, ""), rt = !0;
          } catch (b) {
            vt(t, t.return, b);
          }
        }
        a & 4 && t.stateNode != null && (e = t.memoizedProps, zo(
          t,
          e,
          n !== null ? n.memoizedProps : e
        )), a & 1024 && (_o = !0);
        break;
      case 6:
        if (ee(e, t, l), le(t), a & 4) {
          if (t.stateNode === null)
            throw Error(d(162));
          e = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = e, rt = !0;
          } catch (b) {
            vt(t, t.return, b);
          }
        }
        break;
      case 3:
        if (rt = !1, Mu = null, i = Ye, Ye = li(e.containerInfo), ee(e, t, l), Ye = i, le(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ha(e.containerInfo);
          } catch (b) {
            vt(t, t.return, b);
          }
        _o && (_o = !1, Hh(t)), rt = !1;
        break;
      case 4:
        a = We, We = Qt, n = er(), i = Ye, Ye = li(
          t.stateNode.containerInfo
        ), ee(e, t, l), le(t), Ye = i, rt && Ja && (gu = !0), rt = n, We = a;
        break;
      case 12:
        ee(e, t, l), le(t);
        break;
      case 31:
        ee(e, t, l), le(t), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, pu(t, e)));
        break;
      case 13:
        ee(e, t, l), le(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (xu = se()), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, pu(t, e)));
        break;
      case 22:
        i = t.memoizedState !== null, u = n !== null && n.memoizedState !== null;
        var c = Qt, o = mt, m = We;
        Qt = c || i, We = m || i, mt = o || u, ee(e, t, l), mt = o, We = m, Qt = c, le(t), a & 8192 && (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, !i || n === null || u || Qt || mt || (e = u || mt, l = Qt, n = mt, Qt = i || Qt, mt = e, Yl(t, 2), Qt = l, mt = n), !i && We || Ro(t, i)), a & 4 && (e = t.updateQueue, e !== null && (l = e.retryQueue, l !== null && (e.retryQueue = null, pu(t, l))));
        break;
      case 19:
        ee(e, t, l), le(t), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, pu(t, e)));
        break;
      case 30:
        a & 512 && (mt || n === null || Ft(n, n.return)), a = er(), i = Ja, u = (l & 335544064) === l, c = t.memoizedProps, Ja = u && ol(
          c.default,
          c.update
        ) !== "none", ee(e, t, l), le(t), u && n !== null && rt && (t.flags |= 4), Ja = i, rt = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (mt || n === null || Ft(n, n.return)), n && n.stateNode !== null && (n.stateNode._fragmentFiber = t);
      default:
        ee(e, t, l), le(t);
    }
  }
  function le(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (xh(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var a = t.return; a !== null; ) {
          if (bo(a)) {
            var i = a.stateNode;
            n === null ? n = [i] : n.push(i);
          }
          if (xo(a)) break;
          a = a.return;
        }
        var u = n;
        if (l == null) throw Error(d(160));
        switch (l.tag) {
          case 27:
            var c = l.stateNode, o = To(t);
            ru(
              t,
              o,
              c,
              u
            );
            break;
          case 5:
            var m = l.stateNode;
            l.flags & 32 && (On(m, ""), l.flags &= -33);
            var b = To(t);
            ru(
              t,
              b,
              m,
              u
            );
            break;
          case 3:
          case 4:
            var z = l.stateNode.containerInfo, h = To(t);
            Eo(
              t,
              h,
              z,
              u
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (y) {
        vt(t, t.return, y);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Hh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Hh(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, sa = !0, e.reset(), sa = !1), t = t.sibling;
      }
  }
  function kn(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Uh(e, t), e = e.sibling;
    else Ah(e);
  }
  function Uh(t, e) {
    var l = t.alternate;
    if (l === null) wo(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Mo = $e = !1, zh(), kn(e, t), !$e && !gu) {
            if (t = ke, t !== null)
              for (var n = 0; n < t.length; n += 3) {
                l = t[n];
                var a = t[n + 1];
                Td(l, t[n + 2]), l = l.ownerDocument.documentElement, l !== null && l.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
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
            )), Mo = !0;
          }
          ke = null;
          break;
        case 5:
          kn(e, t);
          break;
        case 4:
          n = $e, $e = !1, kn(e, t), $e && (gu = !0), $e = n;
          break;
        case 22:
          t.memoizedState === null && (l.memoizedState !== null ? wo(t, !1) : kn(e, t));
          break;
        case 30:
          n = $e, a = zh(), $e = !1, kn(e, t), $e && (t.flags |= 4);
          var i = t.memoizedProps, u = t.stateNode;
          e = cl(i, u), u = cl(l.memoizedProps, u);
          var c = ol(i.default, i.update);
          c === "none" ? e = !1 : (i = l.memoizedState, l.memoizedState = null, l = t.child, ie = 0, e = Oo(
            t,
            l,
            e,
            u,
            c,
            i,
            !0
          ), ie !== (i === null ? 0 : i.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (ea(
            t,
            t.memoizedProps.onUpdate
          ), ke = a) : a !== null && (a.push.apply(a, ke), ke = a), $e = (t.flags & 32) !== 0 ? !0 : n;
          break;
        default:
          kn(e, t);
      }
  }
  function Ie(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Ch(t, e.alternate, e), e = e.sibling;
  }
  function Yl(t, e) {
    for (t = t.child; t !== null; ) {
      var l = t, n = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ul(4, l, l.return), Yl(
            l,
            n
          );
          break;
        case 1:
          Ft(l, l.return);
          var a = l.stateNode;
          typeof a.componentWillUnmount == "function" && vh(
            l,
            l.return,
            a
          ), Yl(
            l,
            n
          );
          break;
        case 27:
          (n & 2) !== 0 && Hd(
            l.stateNode,
            l.type,
            l.memoizedProps
          );
        case 5:
          Ft(l, l.return), l.tag !== 5 && l.tag !== 27 || Ka(l), Yl(
            l,
            n
          );
          break;
        case 6:
          Ka(l);
          break;
        case 26:
          Ft(l, l.return), a = l.stateNode, l.memoizedState !== null || a === null || mt || a.parentNode.removeChild(a), Yl(
            l,
            n
          );
          break;
        case 22:
          l.memoizedState === null && Yl(
            l,
            n
          );
          break;
        case 30:
          Ft(l, l.return), Yl(
            l,
            n
          );
          break;
        case 7:
          Ft(l, l.return);
        default:
          Yl(
            l,
            n
          );
      }
      t = t.sibling;
    }
  }
  function qe(t, e, l) {
    for (l = (e.subtreeFlags & 8772) !== 0 ? l : l & -2, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, i = e, u = i.flags, c = (l & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          qe(
            a,
            i,
            l
          ), Za(4, i);
          break;
        case 1:
          if (qe(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              vt(n, n.return, b);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  as(m[a], o);
            } catch (b) {
              vt(n, n.return, b);
            }
          }
          c && u & 64 && ph(i), Je(i, i.return);
          break;
        case 27:
          (l & 2) !== 0 && bh(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || yh(i), qe(
            a,
            i,
            l
          ), c && n === null && u & 4 && So(i), Je(i, i.return);
          break;
        case 6:
          yh(i);
          break;
        case 26:
          o = i.stateNode, i.memoizedState !== null || o === null || Qt || yf(
            li(o.ownerDocument),
            i.type,
            o
          ), qe(
            a,
            i,
            l
          ), c && n === null && u & 4 && So(i), Je(i, i.return);
          break;
        case 12:
          qe(
            a,
            i,
            l
          );
          break;
        case 31:
          qe(
            a,
            i,
            l
          ), c && u & 4 && Rh(a, i);
          break;
        case 13:
          qe(
            a,
            i,
            l
          ), c && u & 4 && Dh(a, i);
          break;
        case 22:
          i.memoizedState === null && qe(
            a,
            i,
            l
          ), Je(i, i.return);
          break;
        case 30:
          qe(
            a,
            i,
            l
          ), Je(i, i.return);
          break;
        case 7:
          Je(i, i.return);
        default:
          qe(
            a,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function jo(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ra(l));
  }
  function Ho(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ra(t));
  }
  function _e(t, e, l, n) {
    var a = (l & 335544064) === l;
    if (e.subtreeFlags & (a ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Yh(
          t,
          e,
          l,
          n
        ), e = e.sibling;
    else a && wh(e);
  }
  function Yh(t, e, l, n) {
    var a = (l & 335544064) === l;
    a && e.alternate === null && e.return !== null && e.return.alternate !== null && du(e);
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _e(
          t,
          e,
          l,
          n
        ), i & 2048 && Za(9, e);
        break;
      case 1:
        _e(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        _e(
          t,
          e,
          l,
          n
        ), a && Mo && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), i & 2048 && (i = null, e.alternate !== null && (i = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== i && (e.refCount++, i != null && Ra(i)));
        break;
      case 12:
        if (i & 2048) {
          _e(
            t,
            e,
            l,
            n
          ), i = e.stateNode;
          try {
            var u = e.memoizedProps, c = u.id, o = u.onPostCommit;
            typeof o == "function" && o(
              c,
              e.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (m) {
            vt(e, e.return, m);
          }
        } else
          _e(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        _e(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        _e(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? (a && c !== null && c.memoizedState === null && du(c), u._visibility & 2 ? _e(
          t,
          e,
          l,
          n
        ) : ka(
          t,
          e
        )) : (a && c !== null && c.memoizedState !== null && du(e), u._visibility & 2 ? _e(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, Fn(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && jo(c, e);
        break;
      case 24:
        _e(
          t,
          e,
          l,
          n
        ), i & 2048 && Ho(e.alternate, e);
        break;
      case 30:
        a && (i = e.alternate, i !== null && (Fe(i.child, !0), Fe(e.child, !0))), _e(
          t,
          e,
          l,
          n
        );
        break;
      default:
        _e(
          t,
          e,
          l,
          n
        );
    }
  }
  function Fn(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, c = l, o = n, m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Fn(
            i,
            u,
            c,
            o,
            a
          ), Za(8, u);
          break;
        case 23:
          break;
        case 22:
          var b = u.stateNode;
          u.memoizedState !== null ? b._visibility & 2 ? Fn(
            i,
            u,
            c,
            o,
            a
          ) : ka(
            i,
            u
          ) : (b._visibility |= 2, Fn(
            i,
            u,
            c,
            o,
            a
          )), a && m & 2048 && jo(
            u.alternate,
            u
          );
          break;
        case 24:
          Fn(
            i,
            u,
            c,
            o,
            a
          ), a && m & 2048 && Ho(u.alternate, u);
          break;
        default:
          Fn(
            i,
            u,
            c,
            o,
            a
          );
      }
      e = e.sibling;
    }
  }
  function ka(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            ka(l, n), a & 2048 && jo(
              n.alternate,
              n
            );
            break;
          case 24:
            ka(l, n), a & 2048 && Ho(n.alternate, n);
            break;
          default:
            ka(l, n);
        }
        e = e.sibling;
      }
  }
  var vn = 8192;
  function yn(t, e, l) {
    if (t.subtreeFlags & vn)
      for (t = t.child; t !== null; )
        qh(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function qh(t, e, l) {
    switch (t.tag) {
      case 26:
        yn(
          t,
          e,
          l
        ), t.flags & vn && (t.memoizedState !== null ? r0(
          l,
          Ye,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Zd(l, t)));
        break;
      case 5:
        yn(
          t,
          e,
          l
        ), t.flags & vn && (t = t.stateNode, (e & 335544128) === e && Zd(l, t));
        break;
      case 3:
      case 4:
        var n = Ye;
        Ye = li(t.stateNode.containerInfo), yn(
          t,
          e,
          l
        ), Ye = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = vn, vn = 16777216, yn(
          t,
          e,
          l
        ), vn = n) : yn(
          t,
          e,
          l
        ));
        break;
      case 30:
        if ((t.flags & vn) !== 0 && (n = t.memoizedProps.name, n != null && n !== "auto")) {
          var a = t.stateNode;
          a.paired = null, ve === null && (ve = /* @__PURE__ */ new Map()), ve.set(n, a);
        }
        yn(
          t,
          e,
          l
        );
        break;
      default:
        yn(
          t,
          e,
          l
        );
    }
  }
  function Bh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Fa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Xt = n, Qh(
            n,
            t
          );
        }
      Bh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gh(t), t = t.sibling;
  }
  function Gh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fa(t), t.flags & 2048 && Ul(9, t, t.return);
        break;
      case 3:
        Fa(t);
        break;
      case 12:
        Fa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, vu(t)) : Fa(t);
        break;
      default:
        Fa(t);
    }
  }
  function vu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Xt = n, Qh(
            n,
            t
          );
        }
      Bh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ul(8, e, e.return), vu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, vu(e));
          break;
        default:
          vu(e);
      }
      t = t.sibling;
    }
  }
  function Qh(t, e) {
    for (; Xt !== null; ) {
      var l = Xt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ul(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ra(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Xt = n;
      else
        t: for (l = t; Xt !== null; ) {
          n = Xt;
          var a = n.sibling, i = n.return;
          if (_h(n), n === l) {
            Xt = null;
            break t;
          }
          if (a !== null) {
            a.return = i, Xt = a;
            break t;
          }
          Xt = i;
        }
    }
  }
  var ip = {
    getCacheForType: function(t) {
      var e = Kt(Rt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Kt(Rt).controller.signal;
    }
  }, up = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, zt = null, lt = null, at = 0, pt = 0, ye = null, ql = !1, Wn = !1, Uo = !1, vl = 0, _t = 0, Bl = 0, xn = 0, yu = 0, xe = 0, $n = 0, Wa = null, ce = null, Yo = !1, xu = 0, Xh = 0, bu = 1 / 0, Su = null, Gl = null, Ct = 0, Be = null, bn = null, Pe = 0, qo = 0, Bo = null, Vh = null, In = null, Pn = null, ta = null, $a = 0, zu = null;
  function be() {
    return (dt & 2) !== 0 && at !== 0 ? at & -at : j.T !== null ? Fo() : Kf();
  }
  function Lh() {
    if (xe === 0)
      if ((at & 536870912) === 0 || P) {
        var t = pi;
        pi <<= 1, (pi & 3932160) === 0 && (pi = 262144), xe = t;
      } else xe = 536870912;
    return t = Jt.current, t !== null && (t.flags |= 32), xe;
  }
  function ea(t, e) {
    if (e != null) {
      var l = t.stateNode, n = l.ref;
      n === null && (n = l.ref = Ed(
        cl(t.memoizedProps, l)
      )), Pn === null && (Pn = []), Pn.push(e.bind(null, n));
    }
  }
  function oe(t, e, l) {
    (t === zt && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (la(t, 0), Ql(
      t,
      at,
      xe,
      !1
    )), ya(t, l), ((dt & 2) === 0 || t !== zt) && (t === zt && ((dt & 2) === 0 && (xn |= l), _t === 4 && Ql(
      t,
      at,
      xe,
      !1
    )), tl(t));
  }
  function Zh(t, e, l) {
    if ((dt & 6) !== 0) throw Error(d(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || va(t, e), a = n ? fp(t, e) : Qo(t, e, !0), i = n;
    do {
      if (a === 0) {
        Wn && !n && Ql(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !cp(l)) {
          a = Qo(t, e, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = t.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            e = u;
            t: {
              var c = t;
              a = Wa;
              var o = c.current.memoizedState.isDehydrated;
              if (o && (la(c, u).flags |= 256), u = Qo(
                c,
                u,
                !1
              ), u !== 2 && u !== 6) {
                if (Uo && !o) {
                  c.errorRecoveryDisabledLanes |= i, xn |= i, a = 4;
                  break t;
                }
                i = ce, ce = a, i !== null && (ce === null ? ce = i : ce.push.apply(
                  ce,
                  i
                ));
              }
              a = u;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          la(t, 0), Ql(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, i = a, i) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Ql(
                n,
                e,
                xe,
                !ql
              );
              break t;
            case 2:
              ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((e & 62914560) === e && (a = xu + 300 - se(), 10 < a)) {
            if (Ql(
              n,
              e,
              xe,
              !ql
            ), yi(n, 0, !0) !== 0) break t;
            Pe = e, n.timeoutHandle = cf(
              Kh.bind(
                null,
                n,
                l,
                ce,
                Su,
                Yo,
                e,
                xe,
                xn,
                $n,
                ql,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          Kh(
            n,
            l,
            ce,
            Su,
            Yo,
            e,
            xe,
            xn,
            $n,
            ql,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    tl(t);
  }
  function Kh(t, e, l, n, a, i, u, c, o, m, b, z, h, y) {
    t.timeoutHandle = -1;
    var C = e.subtreeFlags, D = (i & 335544064) === i;
    if (z = null, (D || C & 8192 || (C & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Le
    }, ve = null, qh(
      e,
      i,
      z
    ), D && (C = z, D = t.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (C.count++, C.waitingForViewTransition = !0, C = ii.bind(C), D.finished.then(C, C))), C = (i & 62914560) === i ? xu - se() : (i & 4194048) === i ? Xh - se() : 0, C = s0(
      z,
      C
    ), C !== null)) {
      Pe = i, t.cancelPendingCommit = C(
        td.bind(
          null,
          t,
          e,
          i,
          l,
          n,
          a,
          u,
          c,
          o,
          m,
          b,
          z,
          null,
          h,
          y
        )
      ), Ql(t, i, u, !m);
      return;
    }
    td(
      t,
      e,
      i,
      l,
      n,
      a,
      u,
      c,
      o,
      m,
      b,
      z
    );
  }
  function cp(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!me(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ql(t, e, l, n) {
    e = Qf(t, e), e &= ~yu, e &= ~xn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var i = 31 - de(a), u = 1 << i;
      n[i] = -1, a &= ~u;
    }
    l !== 0 && Vf(t, l, e);
  }
  function Tu() {
    return (dt & 6) === 0 ? (Ia(0), !1) : !0;
  }
  function Go() {
    if (lt !== null) {
      if (pt === 0)
        var t = lt.return;
      else
        t = lt, sl = cn = null, Jc(t), Xn = null, Ha = 0, t = lt;
      for (; t !== null; )
        mh(t.alternate, t), t = t.return;
      lt = null;
    }
  }
  function la(t, e) {
    var l = t.timeoutHandle;
    return l !== -1 && (t.timeoutHandle = -1, Mp(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Pe = 0, Go(), zt = t, lt = l = fl(t.current, null), at = e, pt = 0, ye = null, ql = !1, Wn = va(t, e), Uo = !1, $n = xe = yu = xn = Bl = _t = 0, ce = Wa = null, Yo = !1, vl = Qf(t, e), Mi(), l;
  }
  function Jh(t, e) {
    W = null, j.H = lu, e === Qn || e === Xi ? (e = ts(), pt = 3) : e === jc ? (e = ts(), pt = 4) : pt = e === oo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ye = e, lt === null && (_t = 1, nu(
      t,
      Ae(e, t.current)
    ));
  }
  function kh() {
    var t = Jt.current;
    return t === null ? !0 : (at & 4194048) === at ? It === null : (at & 62914560) === at || (at & 536870912) !== 0 ? t === It : !1;
  }
  function Fh() {
    var t = j.H;
    return j.H = lu, t === null ? lu : t;
  }
  function Wh() {
    var t = j.A;
    return j.A = ip, t;
  }
  function Eu() {
    _t = 4, ql || (at & 4194048) !== at && Jt.current !== null || (Wn = !0), (Bl & 134217727) === 0 && (xn & 134217727) === 0 || zt === null || Ql(
      zt,
      at,
      xe,
      !1
    );
  }
  function Qo(t, e, l) {
    var n = dt;
    dt |= 2;
    var a = Fh(), i = Wh();
    (zt !== t || at !== e) && (Su = null, la(t, e)), e = !1;
    var u = _t;
    t: do
      try {
        if (pt !== 0 && lt !== null) {
          var c = lt, o = ye;
          switch (pt) {
            case 8:
              Go(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Jt.current === null && (e = !0);
              var m = pt;
              if (pt = 0, ye = null, na(t, c, o, m), l && Wn) {
                u = 0;
                break t;
              }
              break;
            default:
              m = pt, pt = 0, ye = null, na(t, c, o, m);
          }
        }
        op(), u = _t;
        break;
      } catch (b) {
        Jh(t, b);
      }
    while (!0);
    return e && t.shellSuspendCounter++, sl = cn = null, dt = n, j.H = a, j.A = i, lt === null && (zt = null, at = 0, Mi()), u;
  }
  function op() {
    for (; lt !== null; ) $h(lt);
  }
  function fp(t, e) {
    var l = dt;
    dt |= 2;
    var n = Fh(), a = Wh();
    zt !== t || at !== e ? (Su = null, bu = se() + 500, la(t, e)) : Wn = va(
      t,
      e
    );
    t: do
      try {
        if (pt !== 0 && lt !== null) {
          e = lt;
          var i = ye;
          e: switch (pt) {
            case 1:
              pt = 0, ye = null, na(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Ir(i)) {
                pt = 0, ye = null, Ih(e);
                break;
              }
              e = function() {
                pt !== 2 && pt !== 9 || zt !== t || (pt = 7), tl(t);
              }, i.then(e, e);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              Ir(i) ? (pt = 0, ye = null, Ih(e)) : (pt = 0, ye = null, na(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (lt.tag) {
                case 26:
                  u = lt.memoizedState;
                case 5:
                case 27:
                  var c = lt;
                  if (u ? Vd(u) : c.stateNode.complete) {
                    pt = 0, ye = null;
                    var o = c.sibling;
                    if (o !== null) lt = o;
                    else {
                      var m = c.return;
                      m !== null ? (lt = m, wu(m)) : lt = null;
                    }
                    break e;
                  }
              }
              pt = 0, ye = null, na(t, e, i, 5);
              break;
            case 6:
              pt = 0, ye = null, na(t, e, i, 6);
              break;
            case 8:
              Go(), _t = 6;
              break t;
            default:
              throw Error(d(462));
          }
        }
        rp();
        break;
      } catch (b) {
        Jh(t, b);
      }
    while (!0);
    return sl = cn = null, j.H = n, j.A = a, dt = l, lt !== null ? 0 : (zt = null, at = 0, Mi(), _t);
  }
  function rp() {
    for (; lt !== null && !Ng(); )
      $h(lt);
  }
  function $h(t) {
    var e = dh(t.alternate, t, vl);
    t.memoizedProps = t.pendingProps, e === null ? wu(t) : lt = e;
  }
  function Ih(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = uh(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          at
        );
        break;
      case 11:
        e = uh(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          at
        );
        break;
      case 5:
        Jc(e);
        var n = e;
        n === Gt && (P ? (Yi(n), n.tag === 5 && n.stateNode != null && (wt = n.stateNode)) : (Yi(n), P = !0));
      default:
        mh(l, e), e = lt = Qr(e, vl), e = dh(l, e, vl);
    }
    t.memoizedProps = t.pendingProps, e === null ? wu(t) : lt = e;
  }
  function na(t, e, l, n) {
    sl = cn = null, Jc(e), Xn = null, Ha = 0;
    var a = e.return;
    try {
      if ($m(
        t,
        a,
        e,
        l,
        at
      )) {
        _t = 1, nu(
          t,
          Ae(l, t.current)
        ), lt = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw lt = a, i;
      _t = 1, nu(
        t,
        Ae(l, t.current)
      ), lt = null;
      return;
    }
    e.flags & 32768 ? (P || n === 1 ? t = !0 : Wn || (at & 536870912) !== 0 ? t = !1 : (ql = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Jt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ph(e, t)) : wu(e);
  }
  function wu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ph(
          e,
          ql
        );
        return;
      }
      t = e.return;
      var l = ep(
        e.alternate,
        e,
        vl
      );
      if (l !== null) {
        lt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        lt = e;
        return;
      }
      lt = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function Ph(t, e) {
    do {
      var l = lp(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, lt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        lt = t;
        return;
      }
      lt = t = l;
    } while (t !== null);
    _t = 6, lt = null;
  }
  function td(t, e, l, n, a, i, u, c, o, m, b, z) {
    t.cancelPendingCommit = null;
    do
      Au();
    while (Ct !== 0);
    if ((dt & 6) !== 0) throw Error(d(327));
    if (e !== null) {
      if (e === t.current) throw Error(d(177));
      t === zt && (lt = zt = null, at = 0), bn = e, Be = t, Pe = l, Bo = a, Vh = n, sp(
        t,
        e,
        l,
        u,
        c,
        o,
        z
      );
    }
  }
  function sp(t, e, l, n, a, i, u) {
    var c = e.lanes | e.childLanes;
    if (qo = c, c |= Sc, Yg(
      t,
      l,
      c,
      n,
      a,
      i
    ), Pn = null, (l & 335544064) === l ? (ta = Bm(t), n = 10262) : (ta = null, n = 10256), (e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, vp(gi, function() {
      return Zo(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), su = !1, n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
      n = j.T, j.T = null, a = K.p, K.p = 2, i = dt, dt |= 4;
      try {
        np(t, e, l);
      } finally {
        dt = i, K.p = a, j.T = n;
      }
    }
    Ct = 1, su ? In = Yp(
      u,
      t.containerInfo,
      ta,
      Xo,
      Vo,
      dp,
      Lo,
      Zo,
      hp
    ) : (Xo(), Vo(), Lo());
  }
  function hp(t) {
    if (Ct !== 0) {
      var e = Be.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function dp() {
    Ct === 3 && (Ct = 0, Uh(bn, Be), Ct = 4);
  }
  function Xo() {
    if (Ct === 1) {
      Ct = 0;
      var t = Be, e = bn, l = Pe, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null;
        var a = K.p;
        K.p = 2;
        var i = dt;
        dt |= 4;
        try {
          Ja = gu = !1, jh(e, t, l), l = nf;
          var u = Mr(t.containerInfo), c = l.focusedElem, o = l.selectionRange;
          if (u !== c && c && c.ownerDocument && _r(
            c.ownerDocument.documentElement,
            c
          )) {
            if (o !== null && pc(c)) {
              var m = o.start, b = o.end;
              if (b === void 0 && (b = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  b,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, h = z && z.defaultView || window;
                if (h.getSelection) {
                  var y = h.getSelection(), C = c.textContent.length, D = Math.min(o.start, C), $ = o.end === void 0 ? D : Math.min(o.end, C);
                  !y.extend && D > $ && (u = $, $ = D, D = u);
                  var g = Or(
                    c,
                    D
                  ), r = Or(
                    c,
                    $
                  );
                  if (g && r && (y.rangeCount !== 1 || y.anchorNode !== g.node || y.anchorOffset !== g.offset || y.focusNode !== r.node || y.focusOffset !== r.offset)) {
                    var p = z.createRange();
                    p.setStart(g.node, g.offset), y.removeAllRanges(), D > $ ? (y.addRange(p), y.extend(r.node, r.offset)) : (p.setEnd(r.node, r.offset), y.addRange(p));
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
          sa = !!lf, nf = lf = null;
        } finally {
          dt = i, K.p = a, j.T = n;
        }
      }
      t.current = e, Ct = 2;
    }
  }
  function Vo() {
    if (Ct === 2) {
      Ct = 0;
      var t = Be, e = bn, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = j.T, j.T = null;
        var n = K.p;
        K.p = 2;
        var a = dt;
        dt |= 4;
        try {
          Ch(t, e.alternate, e);
        } finally {
          dt = a, K.p = n, j.T = l;
        }
      }
      Ct = 3;
    }
  }
  function Lo() {
    if (Ct === 4 || Ct === 3) {
      Ct = 0;
      var t = In;
      In = null, Cg();
      var e = Be, l = bn, n = Pe, a = Vh, i = (n & 335544064) === n ? 10262 : 10256;
      if ((l.subtreeFlags & i) !== 0 || (l.flags & i) !== 0 ? Ct = 5 : (Ct = 0, bn = Be = null, ed(e, e.pendingLanes)), i = e.pendingLanes, i === 0 && (Gl = null), Iu(n), l = l.stateNode, he && typeof he.onCommitFiberRoot == "function")
        try {
          he.onCommitFiberRoot(
            pa,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = j.T, i = K.p, K.p = 2, j.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var o = a[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          j.T = l, K.p = i;
        }
      }
      if (a = Pn, u = ta, ta = null, a !== null && (Pn = null, u === null && (u = []), t !== null))
        for (o = 0; o < a.length; o++)
          l = (0, a[o])(
            u
          ), l !== void 0 && t.finished.finally(l);
      (Pe & 3) !== 0 && Au(), tl(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === zu ? $a++ : ($a = 0, zu = e) : ($a = 0, zu = null), Ia(0);
    }
  }
  function ed(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ra(e)));
  }
  function Au() {
    return In !== null && (In.skipTransition(), In = null), Xo(), Vo(), Lo(), Zo();
  }
  function Zo() {
    if (Ct !== 5) return !1;
    var t = Be, e = qo;
    qo = 0;
    var l = Iu(Pe), n = j.T, a = K.p;
    try {
      K.p = 32 > l ? 32 : l, j.T = null, l = Bo, Bo = null;
      var i = Be, u = Pe;
      if (Ct = 0, bn = Be = null, Pe = 0, (dt & 6) !== 0) throw Error(d(331));
      var c = dt;
      if (dt |= 4, Gh(i.current), Yh(
        i,
        i.current,
        u,
        l
      ), dt = c, Ia(0, !1), he && typeof he.onPostCommitFiberRoot == "function")
        try {
          he.onPostCommitFiberRoot(pa, i);
        } catch {
        }
      return !0;
    } finally {
      K.p = a, j.T = n, ed(t, e);
    }
  }
  function ld(t, e, l) {
    e = Ae(l, e), e = co(t.stateNode, e, 2), t = Rl(t, e, 2), t !== null && (ya(t, 2), tl(t));
  }
  function vt(t, e, l) {
    if (t.tag === 3)
      ld(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ld(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Gl === null || !Gl.has(n))) {
            t = Ae(l, t), l = Is(2), n = Rl(e, l, 2), n !== null && (Ps(
              l,
              n,
              e,
              t
            ), ya(n, 2), tl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ko(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new up();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Uo = !0, a.add(l), t = gp.bind(null, t, e, l), e.then(t, t));
  }
  function gp(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, zt === t && (at & l) === l && ((_t === 4 || _t === 3 && (at & 62914560) === at && 300 > se() - xu) && (dt & 2) === 0 ? la(t, 0) : yu |= l, $n === at && ($n = 0)), tl(t);
  }
  function nd(t, e) {
    e === 0 && (e = Xf()), t = nn(t, e), t !== null && (ya(t, e), tl(t));
  }
  function mp(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), nd(t, l);
  }
  function pp(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    n !== null && n.delete(e), nd(t, l);
  }
  function vp(t, e) {
    return ku(t, e);
  }
  var aa = null, ia = null, Jo = !1, Nu = !1, ko = !1, Xl = 0;
  function tl(t) {
    t !== ia && t.next === null && (ia === null ? aa = ia = t : ia = ia.next = t), Nu = !0, Jo || (Jo = !0, xp());
  }
  function Ia(t, e) {
    if (!ko && Nu) {
      ko = !0;
      do
        for (var l = !1, n = aa; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var u = n.suspendedLanes, c = n.pingedLanes;
              i = (1 << 31 - de(42 | t) + 1) - 1, i &= a & ~(u & ~c), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, cd(n, i));
          } else
            i = at, i = yi(
              n,
              n === zt ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || va(n, i) || (l = !0, cd(n, i));
          n = n.next;
        }
      while (l);
      ko = !1;
    }
  }
  function yp() {
    ad();
  }
  function ad() {
    Nu = Jo = !1;
    var t = 0;
    Xl !== 0 && _p() && (t = Xl);
    for (var e = se(), l = null, n = aa; n !== null; ) {
      var a = n.next, i = id(n, e);
      i === 0 ? (n.next = null, l === null ? aa = a : l.next = a, a === null && (ia = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (Nu = !0)), n = a;
    }
    Ct !== 0 && Ct !== 5 || Ia(t), Xl !== 0 && (Xl = 0);
  }
  function id(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - de(i), c = 1 << u, o = a[u];
      o === -1 ? ((c & l) === 0 || (c & n) !== 0) && (a[u] = Ug(c, e)) : o <= e && (t.expiredLanes |= c), i &= ~c;
    }
    if (e = zt, l = at, l = yi(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Fu(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || va(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Fu(n), Iu(l)) {
        case 2:
        case 8:
          l = Bf;
          break;
        case 32:
          l = gi;
          break;
        case 268435456:
          l = Gf;
          break;
        default:
          l = gi;
      }
      return n = ud.bind(null, t), l = ku(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Fu(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function ud(t, e) {
    if (Ct !== 0 && Ct !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Au() && t.callbackNode !== l)
      return null;
    var n = at;
    return n = yi(
      t,
      t === zt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (Zh(t, n, e), id(t, se()), t.callbackNode != null && t.callbackNode === l ? ud.bind(null, t) : null);
  }
  function cd(t, e) {
    if (Au()) return null;
    Zh(t, e, !0);
  }
  function xp() {
    Rp(function() {
      (dt & 6) !== 0 ? ku(
        qf,
        yp
      ) : ad();
    });
  }
  function Fo() {
    if (Xl === 0) {
      var t = rn;
      t === 0 && (t = mi, mi <<= 1, (mi & 261888) === 0 && (mi = 256)), Xl = t;
    }
    return Xl;
  }
  function od(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ti(t);
  }
  function bp(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = od(
        (a[ne] || null).action
      ), u = n.submitter;
      u && (e = (e = u[ne] || null) ? od(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var c = new Ni(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Xl !== 0) {
                  var o = new FormData(a, u);
                  lo(
                    l,
                    {
                      pending: !0,
                      data: o,
                      method: a.method,
                      action: i
                    },
                    null,
                    o
                  );
                }
              } else
                typeof i == "function" && (c.preventDefault(), o = new FormData(a, u), lo(
                  l,
                  {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: i
                  },
                  i,
                  o
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Wo = 0; Wo < bc.length; Wo++) {
    var $o = bc[Wo], Sp = $o.toLowerCase(), zp = $o[0].toUpperCase() + $o.slice(1);
    He(
      Sp,
      "on" + zp
    );
  }
  He(jr, "onAnimationEnd"), He(Hr, "onAnimationIteration"), He(Ur, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(Mm, "onTransitionRun"), He(Rm, "onTransitionStart"), He(Dm, "onTransitionCancel"), He(Yr, "onTransitionEnd"), Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]), tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), tn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tp = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa)
  );
  function fd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = n.length - 1; 0 <= u; u--) {
            var c = n[u], o = c.instance, m = c.currentTarget;
            if (c = c.listener, o !== i && a.isPropagationStopped())
              break t;
            i = c, a.currentTarget = m;
            try {
              i(a);
            } catch (b) {
              _i(b);
            }
            a.currentTarget = null, i = o;
          }
        else
          for (u = 0; u < n.length; u++) {
            if (c = n[u], o = c.instance, m = c.currentTarget, c = c.listener, o !== i && a.isPropagationStopped())
              break t;
            i = c, a.currentTarget = m;
            try {
              i(a);
            } catch (b) {
              _i(b);
            }
            a.currentTarget = null, i = o;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[kf];
    l === void 0 && (l = e[kf] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (rd(e, t, 2, !1), l.add(n));
  }
  function Io(t, e, l) {
    var n = 0;
    e && (n |= 4), rd(
      l,
      t,
      n,
      e
    );
  }
  var Cu = "_reactListening" + Math.random().toString(36).slice(2);
  function Po(t) {
    if (!t[Cu]) {
      t[Cu] = !0, $f.forEach(function(l) {
        l !== "selectionchange" && (Tp.has(l) || Io(l, !1, t), Io(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Cu] || (e[Cu] = !0, Io("selectionchange", !1, e));
    }
  }
  function rd(t, e, l, n) {
    switch (Pd(e)) {
      case 2:
        var a = m0;
        break;
      case 8:
        a = p0;
        break;
      default:
        a = bf;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !uc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function tf(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var u = n.tag;
        if (u === 3 || u === 4) {
          var c = n.stateNode.containerInfo;
          if (c === a) break;
          if (u === 4)
            for (u = n.return; u !== null; ) {
              var o = u.tag;
              if ((o === 3 || o === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (u = Pl(c), u === null) return;
            if (o = u.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              n = i = u;
              continue t;
            }
            c = c.parentNode;
          }
        }
        n = n.return;
      }
    rr(function() {
      var m = i, b = ac(l), z = [];
      t: {
        var h = qr.get(t);
        if (h !== void 0) {
          var y = Ni, C = t;
          switch (t) {
            case "keypress":
              if (wi(l) === 0) break t;
            case "keydown":
            case "keyup":
              y = cm;
              break;
            case "focusin":
              C = "focus", y = rc;
              break;
            case "focusout":
              C = "blur", y = rc;
              break;
            case "beforeblur":
            case "afterblur":
              y = rc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = dr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Fg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = hm;
              break;
            case jr:
            case Hr:
            case Ur:
              y = Ig;
              break;
            case Yr:
              y = gm;
              break;
            case "scroll":
            case "scrollend":
              y = Jg;
              break;
            case "wheel":
              y = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = tm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = mr;
              break;
            case "submit":
              y = rm;
              break;
            case "toggle":
            case "beforetoggle":
              y = ym;
          }
          var D = (e & 4) !== 0, $ = !D && (t === "scroll" || t === "scrollend"), g = D ? h !== null ? h + "Capture" : null : h;
          D = [];
          for (var r = m, p; r !== null; ) {
            var S = r;
            if (p = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || p === null || g === null || (S = Sa(r, g), S != null && D.push(
              ti(r, S, p)
            )), $) break;
            r = r.return;
          }
          0 < D.length && (h = new y(
            h,
            C,
            null,
            l,
            b
          ), z.push({ event: h, listeners: D }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (y = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout", y && l !== nc && (C = l.relatedTarget || l.fromElement) && (Pl(C) || C[En]))
            break t;
          (h || y) && (C = b.window === b ? b : (y = b.ownerDocument) ? y.defaultView || y.parentWindow : window, h ? (y = l.relatedTarget || l.toElement, h = m, y = y ? Pl(y) : null, y !== null && ($ = G(y), D = y.tag, y !== $ || D !== 5 && D !== 27 && D !== 6) && (y = null)) : (h = null, y = m), h !== y && (D = dr, S = "onMouseLeave", g = "onMouseEnter", r = "mouse", (t === "pointerout" || t === "pointerover") && (D = mr, S = "onPointerLeave", g = "onPointerEnter", r = "pointer"), $ = h == null ? C : ba(h), p = y == null ? C : ba(y), C = new D(
            S,
            r + "leave",
            h,
            l,
            b
          ), C.target = $, C.relatedTarget = p, S = null, Pl(b) === m && (D = new D(
            g,
            r + "enter",
            y,
            l,
            b
          ), D.target = p, D.relatedTarget = $, S = D), $ = S, D = h && y ? xt(
            h,
            y,
            Ep
          ) : null, h !== null && sd(
            z,
            C,
            h,
            D,
            !1
          ), y !== null && $ !== null && sd(
            z,
            $,
            y,
            D,
            !0
          )));
        }
        t: {
          if (h = m ? ba(m) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file")
            var R = Tr;
          else if (Sr(h))
            if (Er)
              R = Cm;
            else {
              R = Am;
              var it = wm;
            }
          else
            y = h.nodeName, !y || y.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? m && lc(m.elementType) && (R = Tr) : R = Nm;
          if (R && (R = R(t, m))) {
            zr(
              z,
              R,
              l,
              b
            );
            break t;
          }
          it && it(t, h, m);
        }
        switch (it = m ? ba(m) : window, t) {
          case "focusin":
            (Sr(it) || it.contentEditable === "true") && (Dn = it, vc = m, Oa = null);
            break;
          case "focusout":
            Oa = vc = Dn = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Rr(z, l, b);
            break;
          case "selectionchange":
            if (_m) break;
          case "keydown":
          case "keyup":
            Rr(z, l, b);
        }
        var H;
        if (hc)
          t: {
            switch (t) {
              case "compositionstart":
                var B = "onCompositionStart";
                break t;
              case "compositionend":
                B = "onCompositionEnd";
                break t;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break t;
            }
            B = void 0;
          }
        else
          Rn ? xr(t, l) && (B = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (B = "onCompositionStart");
        B && (pr && l.locale !== "ko" && (Rn || B !== "onCompositionStart" ? B === "onCompositionEnd" && Rn && (H = sr()) : (Tl = b, cc = "value" in Tl ? Tl.value : Tl.textContent, Rn = !0)), it = Ou(m, B), 0 < it.length && (B = new gr(
          B,
          t,
          null,
          l,
          b
        ), z.push({ event: B, listeners: it }), H ? B.data = H : (H = br(l), H !== null && (B.data = H)))), (H = bm ? Sm(t, l) : zm(t, l)) && (B = Ou(m, "onBeforeInput"), 0 < B.length && (it = new gr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          b
        ), z.push({
          event: it,
          listeners: B
        }), it.data = H)), bp(
          z,
          t,
          m,
          l,
          b
        );
      }
      fd(z, e);
    });
  }
  function ti(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Ou(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Sa(t, l), a != null && n.unshift(
        ti(t, a, i)
      ), a = Sa(t, e), a != null && n.push(
        ti(t, a, i)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Ep(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sd(t, e, l, n, a) {
    for (var i = e._reactName, u = []; l !== null && l !== n; ) {
      var c = l, o = c.alternate, m = c.stateNode;
      if (c = c.tag, o !== null && o === n) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (o = m, a ? (m = Sa(l, i), m != null && u.unshift(
        ti(l, m, o)
      )) : a || (m = Sa(l, i), m != null && u.push(
        ti(l, m, o)
      ))), l = l.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var wp = /\r\n?/g, Ap = /\u0000|\uFFFD/g;
  function hd(t) {
    return (typeof t == "string" ? t : "" + t).replace(wp, `
`).replace(Ap, "");
  }
  function dd(t, e) {
    return e = hd(e), hd(t) === e;
  }
  function yt(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        if (typeof n == "string")
          e === "body" || e === "textarea" && n === "" || On(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          e !== "body" && On(t, "" + n);
        else return;
        break;
      case "className":
        zi(t, "class", n);
        break;
      case "tabIndex":
        zi(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zi(t, l, n);
        break;
      case "style":
        or(t, n, i);
        return;
      case "data":
        if (e !== "object") {
          zi(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Ti(n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && yt(t, e, "name", a.name, a, null), yt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), yt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), yt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (yt(t, e, "encType", a.encType, a, null), yt(t, e, "method", a.method, a, null), yt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Ti(n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = Le);
        return;
      case "onScroll":
        n != null && nt("scroll", t);
        return;
      case "onScrollEnd":
        n != null && nt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(d(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(d(60));
            (i != null ? i.__html : void 0) !== l && (t.innerHTML = l);
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Ti(n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
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
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Si(t, "popover", n);
        break;
      case "xlinkActuate":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        il(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        il(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Si(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N")
          l = Zg.get(l) || l, Si(t, l, n);
        else return;
    }
    rt = !0;
  }
  function ef(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        or(t, n, i);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(d(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(d(60));
            (i != null ? i.__html : void 0) !== l && (t.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof n == "string") On(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          On(t, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && nt("scroll", t);
        return;
      case "onScrollEnd":
        n != null && nt("scrollend", t);
        return;
      case "onClick":
        n != null && (t.onclick = Le);
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
        if (!If.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), i = l.slice(2, a ? l.length - 7 : void 0), e = t[ne] || null, e = e != null ? e[l] : null, typeof e == "function" && t.removeEventListener(i, e, a), typeof n == "function")) {
              typeof e != "function" && e !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(i, n, a);
              break t;
            }
            rt = !0, l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Si(t, l, n);
          }
        return;
    }
    rt = !0;
  }
  function Wt(t, e, l) {
    switch (e) {
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
        nt("error", t), nt("load", t);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, e));
                default:
                  yt(t, e, i, u, l, null);
              }
          }
        a && yt(t, e, "srcSet", l.srcSet, l, null), n && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var c = i = u = a = null, o = null, m = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var b = l[n];
            if (b != null)
              switch (n) {
                case "name":
                  a = b;
                  break;
                case "type":
                  u = b;
                  break;
                case "checked":
                  o = b;
                  break;
                case "defaultChecked":
                  m = b;
                  break;
                case "value":
                  i = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(d(137, e));
                  break;
                default:
                  yt(t, e, n, b, l, null);
              }
          }
        ar(
          t,
          i,
          c,
          o,
          m,
          u,
          a,
          !1
        );
        return;
      case "select":
        nt("invalid", t), n = u = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (c = l[a], c != null))
            switch (a) {
              case "value":
                i = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "multiple":
                n = c;
              default:
                yt(t, e, a, c, l, null);
            }
        e = i, l = u, t.multiple = !!n, e != null ? Cn(t, !!n, e, !1) : l != null && Cn(t, !!n, l, !0);
        return;
      case "textarea":
        nt("invalid", t), i = a = n = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (c = l[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                a = c;
                break;
              case "children":
                i = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(d(91));
                break;
              default:
                yt(t, e, u, c, l, null);
            }
        ur(t, n, a, i);
        return;
      case "option":
        for (o in l)
          if (l.hasOwnProperty(o) && (n = l[o], n != null))
            switch (o) {
              case "selected":
                t.selected = n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                yt(t, e, o, n, l, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Pa.length; n++)
          nt(Pa[n], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
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
        for (m in l)
          if (l.hasOwnProperty(m) && (n = l[m], n != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, e));
              default:
                yt(t, e, m, n, l, null);
            }
        return;
      default:
        if (lc(e)) {
          for (b in l)
            l.hasOwnProperty(b) && (n = l[b], n !== void 0 && ef(
              t,
              e,
              b,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && (n = l[c], n != null && yt(t, e, c, n, l, null));
  }
  var Np = {};
  function Cp(t, e, l, n) {
    switch (e) {
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
        var a = null, i = null, u = null, c = null, o = null, m = null, b = null;
        for (y in l) {
          var z = l[y];
          if (l.hasOwnProperty(y) && z != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = z;
              default:
                n.hasOwnProperty(y) || yt(t, e, y, null, n, z);
            }
        }
        for (var h in n) {
          var y = n[h];
          if (z = l[h], n.hasOwnProperty(h) && (y != null || z != null))
            switch (h) {
              case "type":
                y !== z && (rt = !0), i = y;
                break;
              case "name":
                y !== z && (rt = !0), a = y;
                break;
              case "checked":
                y !== z && (rt = !0), m = y;
                break;
              case "defaultChecked":
                y !== z && (rt = !0), b = y;
                break;
              case "value":
                y !== z && (rt = !0), u = y;
                break;
              case "defaultValue":
                y !== z && (rt = !0), c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(d(137, e));
                break;
              default:
                y !== z && yt(
                  t,
                  e,
                  h,
                  y,
                  n,
                  z
                );
            }
        }
        tc(
          t,
          u,
          c,
          o,
          m,
          b,
          i,
          a
        );
        return;
      case "select":
        y = u = c = h = null;
        for (i in l)
          if (o = l[i], l.hasOwnProperty(i) && o != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                y = o;
              default:
                n.hasOwnProperty(i) || yt(
                  t,
                  e,
                  i,
                  null,
                  n,
                  o
                );
            }
        for (a in n)
          if (i = n[a], o = l[a], n.hasOwnProperty(a) && (i != null || o != null))
            switch (a) {
              case "value":
                i !== o && (rt = !0), h = i;
                break;
              case "defaultValue":
                i !== o && (rt = !0), c = i;
                break;
              case "multiple":
                i !== o && (rt = !0), u = i;
              default:
                i !== o && yt(
                  t,
                  e,
                  a,
                  i,
                  n,
                  o
                );
            }
        e = c, l = u, n = y, h != null ? Cn(t, !!l, h, !1) : !!n != !!l && (e != null ? Cn(t, !!l, e, !0) : Cn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        y = h = null;
        for (c in l)
          if (a = l[c], l.hasOwnProperty(c) && a != null && !n.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, c, null, n, a);
            }
        for (u in n)
          if (a = n[u], i = l[u], n.hasOwnProperty(u) && (a != null || i != null))
            switch (u) {
              case "value":
                a !== i && (rt = !0), h = a;
                break;
              case "defaultValue":
                a !== i && (rt = !0), y = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(d(91));
                break;
              default:
                a !== i && yt(t, e, u, a, n, i);
            }
        ir(t, h, y);
        return;
      case "option":
        for (var C in l)
          if (h = l[C], l.hasOwnProperty(C) && h != null && !n.hasOwnProperty(C))
            switch (C) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(
                  t,
                  e,
                  C,
                  null,
                  n,
                  h
                );
            }
        for (o in n)
          if (h = n[o], y = l[o], n.hasOwnProperty(o) && h !== y && (h != null || y != null))
            switch (o) {
              case "selected":
                h !== y && (rt = !0), t.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                yt(
                  t,
                  e,
                  o,
                  h,
                  n,
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
        for (var D in l)
          h = l[D], l.hasOwnProperty(D) && h != null && !n.hasOwnProperty(D) && yt(t, e, D, null, n, h);
        for (m in n)
          if (h = n[m], y = l[m], n.hasOwnProperty(m) && h !== y && (h != null || y != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(d(137, e));
                break;
              default:
                yt(
                  t,
                  e,
                  m,
                  h,
                  n,
                  y
                );
            }
        return;
      default:
        if (lc(e)) {
          for (var $ in l)
            h = l[$], l.hasOwnProperty($) && h !== void 0 && !n.hasOwnProperty($) && ef(
              t,
              e,
              $,
              void 0,
              n,
              h
            );
          for (b in n)
            h = n[b], y = l[b], !n.hasOwnProperty(b) || h === y || h === void 0 && y === void 0 || ef(
              t,
              e,
              b,
              h,
              n,
              y
            );
          return;
        }
    }
    for (var g in l)
      h = l[g], l.hasOwnProperty(g) && h != null && !n.hasOwnProperty(g) && yt(t, e, g, null, n, h);
    for (z in n)
      h = n[z], y = l[z], !n.hasOwnProperty(z) || h === y || h == null && y == null || yt(t, e, z, h, n, y);
  }
  function gd(t) {
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
  function Op() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, u = a.initiatorType, c = a.duration;
        if (i && c && gd(u)) {
          for (u = 0, c = a.responseEnd, n += 1; n < l.length; n++) {
            var o = l[n], m = o.startTime;
            if (m > c) break;
            var b = o.transferSize, z = o.initiatorType;
            b && gd(z) && (o = o.responseEnd, u += b * (o < c ? 1 : (c - m) / (o - m)));
          }
          if (--n, e += 8 * (i + u) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var lf = null, nf = null;
  function ei(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function md(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function vd(t, e, l, n) {
    return l = ei(
      l
    ).createElement(t), l[Zt] = n, l[ne] = e, Wt(l, t, e), Bt(l), l;
  }
  function af(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var uf = null;
  function _p() {
    var t = window.event;
    return t && t.type === "popstate" ? t === uf ? !1 : (uf = t, !0) : (uf = null, !1);
  }
  var cf = typeof setTimeout == "function" ? setTimeout : void 0, Mp = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, xd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : cf, Rp = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(t) {
    return yd.resolve(null).then(t).catch(Dp);
  } : cf;
  function Dp(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Vl(t) {
    return t === "head";
  }
  function bd(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), ha(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          mf(
            t.ownerDocument.documentElement
          );
        else if (l === "head") {
          l = t.ownerDocument.head, mf(l);
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling, c = i.nodeName;
            i[xa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = u;
          }
        } else
          l === "body" && mf(t.ownerDocument.body);
      l = a;
    } while (l);
    ha(e);
  }
  function Sd(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function zd(t, e, l) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, l != null && (t.style.viewTransitionClass = l), l = getComputedStyle(t), l.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var n = 1;
      else
        for (var a = n = 0; a < e.length; a++) {
          var i = e[a];
          0 < i.width && 0 < i.height && n++;
        }
      n === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + l.paddingTop, t.marginBottom = "-" + l.paddingBottom);
    }
  }
  function Td(t, e) {
    t = t.style, e = e.style;
    var l = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), l = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (l = e.display, t.display = l == null || typeof l == "boolean" ? "" : l, l = e.margin, l != null ? t.margin = l : (l = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = l == null || typeof l == "boolean" ? "" : l, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function jp(t, e, l) {
    return l = l.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= l.innerHeight && t.left <= l.innerWidth
    };
  }
  function of(t) {
    var e = t.getBoundingClientRect(), l = getComputedStyle(t);
    return jp(e, l, t);
  }
  function Hp(t) {
    return t.documentElement.clientHeight;
  }
  function Up(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Yp(t, e, l, n, a, i, u, c, o) {
    var m = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var b = m.startViewTransition({
        update: function() {
          var h = m.defaultView, y = h.navigation && h.navigation.transition, C = m.fonts.status;
          n();
          var D = [];
          if (C === "loaded" && (Hp(m), m.fonts.status === "loading" && D.push(m.fonts.ready)), C = D.length, t !== null)
            for (var $ = t.suspenseyImages, g = 0, r = 0; r < $.length; r++) {
              var p = $[r];
              if (!p.complete) {
                var S = p.getBoundingClientRect();
                if (0 < S.bottom && 0 < S.right && S.top < h.innerHeight && S.left < h.innerWidth) {
                  if (g += Ld(p), g > Ru) {
                    D.length = C;
                    break;
                  }
                  p = new Promise(
                    Up.bind(p)
                  ), D.push(p);
                }
              }
            }
          if (0 < D.length)
            return h = Promise.race([
              Promise.all(D),
              new Promise(function(R) {
                return setTimeout(R, 500);
              })
            ]).then(a, a), (y ? Promise.allSettled([y.finished, h]) : h).then(i, i);
          if (a(), y)
            return y.finished.then(
              i,
              i
            );
          i();
        },
        types: l
      });
      m.__reactViewTransition = b;
      var z = [];
      return b.ready.then(
        function() {
          for (var h = m.documentElement.getAnimations({
            subtree: !0
          }), y = 0; y < h.length; y++) {
            var C = h[y], D = C.effect, $ = D.pseudoElement;
            if ($ != null && $.startsWith("::view-transition")) {
              z.push(C), C = D.getKeyframes();
              for (var g = $ = void 0, r = !0, p = 0; p < C.length; p++) {
                var S = C[p], R = S.width;
                if ($ === void 0) $ = R;
                else if ($ !== R) {
                  r = !1;
                  break;
                }
                if (R = S.height, g === void 0) g = R;
                else if (g !== R) {
                  r = !1;
                  break;
                }
                delete S.width, delete S.height, S.transform === "none" && delete S.transform;
              }
              r && $ !== void 0 && g !== void 0 && (D.setKeyframes(C), r = getComputedStyle(
                D.target,
                D.pseudoElement
              ), r.width !== $ || r.height !== g) && (r = C[0], r.width = $, r.height = g, r = C[C.length - 1], r.width = $, r.height = g, D.setKeyframes(C));
            }
          }
          u();
        },
        function(h) {
          m.__reactViewTransition === b && (m.__reactViewTransition = null);
          try {
            if (typeof h == "object" && h !== null)
              switch (h.name) {
                case "InvalidStateError":
                  (h.message === "View transition was skipped because document visibility state is hidden." || h.message === "Skipping view transition because document visibility state has become hidden." || h.message === "Skipping view transition because viewport size changed." || h.message === "Transition was aborted because of invalid state") && (h = null);
              }
            h !== null && o(h);
          } finally {
            n(), a(), u();
          }
        }
      ), b.finished.finally(function() {
        for (var h = 0; h < z.length; h++)
          z[h].cancel();
        m.__reactViewTransition === b && (m.__reactViewTransition = null), c();
      }), b;
    } catch {
      return n(), a(), u(), null;
    }
  }
  function Sn(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Sn.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : Z({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Sn.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, l = t.getAnimations({ subtree: !0 }), n = [], a = 0; a < l.length; a++) {
      var i = l[a].effect;
      i !== null && i.target === t && i.pseudoElement === e && n.push(l[a]);
    }
    return n;
  }, Sn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ed(t) {
    return {
      name: t,
      group: new Sn("group", t),
      imagePair: new Sn("image-pair", t),
      old: new Sn("old", t),
      new: new Sn("new", t)
    };
  }
  function Se(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Se.prototype.addEventListener = function(t, e, l) {
    var n = null, a = null;
    if (!(l != null && typeof l != "boolean" && (n = l.signal || null, n !== null && n.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (Ad(i, t, e, l) === -1) {
        var u = this, c = e;
        l != null && typeof l != "boolean" && l.once === !0 && (c = function(o) {
          u.removeEventListener(
            t,
            e,
            l
          ), typeof e == "function" ? e.call(this, o) : e.handleEvent(o);
        }), n !== null && (a = u.removeEventListener.bind(
          u,
          t,
          e,
          l
        ), n.addEventListener("abort", a, { once: !0 }), a = n.removeEventListener.bind(n, "abort", a)), n = ua(l), i.push({
          type: t,
          listener: e,
          optionsOrUseCapture: l,
          attachedListener: c,
          cleanup: a
        }), v(
          this._fragmentFiber.child,
          !1,
          qp,
          t,
          c,
          n
        );
      }
      this._eventListeners = i;
    }
  };
  function qp(t, e, l, n) {
    return tt(t).addEventListener(
      e,
      l,
      n
    ), !1;
  }
  Se.prototype.removeEventListener = function(t, e, l) {
    var n = this._eventListeners;
    if (n !== null && (e = Ad(
      n,
      t,
      e,
      l
    ), e !== -1)) {
      var a = n[e];
      l = a.attachedListener;
      var i = a.cleanup;
      a = ua(a.optionsOrUseCapture), v(
        this._fragmentFiber.child,
        !1,
        Bp,
        t,
        l,
        a
      ), n.splice(e, 1), i !== null && i();
    }
  };
  function Bp(t, e, l, n) {
    return tt(t).removeEventListener(
      e,
      l,
      n
    ), !1;
  }
  function ua(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function wd(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Ad(t, e, l, n) {
    if (t.length === 0) return -1;
    n = wd(n);
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      if (i.type === e && i.listener === l && wd(i.optionsOrUseCapture) === n)
        return a;
    }
    return -1;
  }
  Se.prototype.dispatchEvent = function(t) {
    var e = O(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = tt(e);
    var l = this._eventListeners;
    if (l !== null && 0 < l.length || !t.bubbles) {
      var n = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (l)
        for (var a = 0; a < l.length; a++) {
          var i = l[a];
          n.addEventListener(
            i.type,
            i.attachedListener,
            ua(i.optionsOrUseCapture)
          );
        }
      if (e.appendChild(n), t = n.dispatchEvent(t), l)
        for (a = 0; a < l.length; a++)
          i = l[a], n.removeEventListener(
            i.type,
            i.attachedListener,
            ua(i.optionsOrUseCapture)
          );
      return e.removeChild(n), t;
    }
    return e.dispatchEvent(t);
  }, Se.prototype.focus = function(t) {
    v(
      this._fragmentFiber.child,
      !0,
      Nd,
      t,
      void 0,
      void 0
    );
  };
  function Nd(t, e) {
    return t.tag === 6 ? !1 : (t = tt(t), $p(t, e));
  }
  Se.prototype.focusLast = function(t) {
    var e = [];
    v(
      this._fragmentFiber.child,
      !0,
      ff,
      e,
      void 0,
      void 0
    );
    for (var l = e.length - 1; 0 <= l && !Nd(e[l], t); l--) ;
  };
  function ff(t, e) {
    return e.push(t), !1;
  }
  Se.prototype.blur = function() {
    var t = O(
      this._fragmentFiber
    );
    t !== null && (t = tt(t), t = ei(t).activeElement, t !== null && v(
      this._fragmentFiber.child,
      !1,
      Gp,
      t,
      void 0,
      void 0
    ));
  };
  function Gp(t, e) {
    return t.tag === 6 ? !1 : (t = tt(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Se.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), v(
      this._fragmentFiber.child,
      !1,
      Qp,
      t,
      void 0,
      void 0
    );
  };
  function Qp(t, e) {
    return t.tag === 6 || (t = tt(t), e.observe(t)), !1;
  }
  Se.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), v(
        this._fragmentFiber.child,
        !1,
        Xp,
        t,
        void 0,
        void 0
      );
      for (var l = e = 0; l < Ge.length; l++) {
        var n = Ge[l];
        n.fragmentInstance === this && n.observer === t ? t.unobserve(n.instance) : Ge[e++] = n;
      }
      Ge.length = e;
    }
  };
  function Xp(t, e) {
    return t.tag === 6 || (t = tt(t), e.unobserve(t)), !1;
  }
  var Ge = [], rf = !1;
  function Vp(t, e, l) {
    Ge.push({
      fragmentInstance: t,
      observer: e,
      instance: l
    }), rf || (rf = !0, Ip(function() {
      rf = !1;
      var n = Ge;
      Ge = [];
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  Se.prototype.getClientRects = function() {
    var t = [];
    return v(
      this._fragmentFiber.child,
      !1,
      Lp,
      t,
      void 0,
      void 0
    ), t;
  };
  function Lp(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var l = t.ownerDocument.createRange();
      l.selectNodeContents(t), e.push.apply(e, l.getClientRects());
    } else
      t = tt(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Se.prototype.getRootNode = function(t) {
    var e = O(
      this._fragmentFiber
    );
    return e === null ? this : tt(e).getRootNode(t);
  }, Se.prototype.compareDocumentPosition = function(t) {
    var e = O(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var l = [];
    v(
      this._fragmentFiber.child,
      !1,
      ff,
      l,
      void 0,
      void 0
    );
    var n = tt(e);
    if (l.length === 0) {
      if (l = n, I(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (l = e);
      }
      e = this._fragmentFiber;
      var a = n = l.compareDocumentPosition(t);
      return l === t ? a = Node.DOCUMENT_POSITION_CONTAINS : n & Node.DOCUMENT_POSITION_CONTAINED_BY && (l = F(e)[1], l === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = tt(l).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = tt(l[0]), a = tt(l[l.length - 1]);
    var i = I(this._fragmentFiber) ? e.parentElement : n;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    n = i.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var u = e.compareDocumentPosition(t), c = a.compareDocumentPosition(t), o = u & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = n && i && u & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, e = n && e === t || i && a === t || o || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !n && e === t || !i && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : u, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Zp(
      e,
      this._fragmentFiber,
      l[0],
      l[l.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Zp(t, e, l, n, a) {
    var i = Pl(a);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (l = !!i)
        t: {
          for (; i !== null; ) {
            if (i.tag === 7 && (i === e || i.alternate === e)) {
              l = !0;
              break t;
            }
            i = i.return;
          }
          l = !1;
        }
      return l;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return i = a.ownerDocument, a === i || a === i.documentElement || a === i.body;
      t: {
        for (i = e, e = O(e); i !== null; ) {
          if (!(i.tag !== 5 && i.tag !== 3 && i.tag !== 27 || i !== e && i.alternate !== e)) {
            i = !0;
            break t;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!i) && !(e = i === l) && (e = xt(
      l,
      i,
      ct
    ), e === null ? e = !1 : (v(
      e,
      !0,
      fe,
      i,
      l
    ), i = Yt, Yt = null, e = i !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!i) && !(e = i === n) && (e = xt(
      n,
      i,
      ct
    ), e === null ? e = !1 : (v(
      e,
      !0,
      q,
      i,
      n
    ), i = Yt, Vt = Yt = null, e = i !== null)), e) : !1;
  }
  function Cd(t, e) {
    var l = t.ownerDocument.createRange();
    l.selectNodeContents(t), t = l.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Se.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(d(566));
    var e = [];
    v(
      this._fragmentFiber.child,
      !1,
      ff,
      e,
      void 0,
      void 0
    );
    var l = t !== !1;
    if (e.length === 0) {
      var n = F(
        this._fragmentFiber
      );
      if (n = l ? n[1] || n[0] || O(this._fragmentFiber) : n[0] || n[1], n === null) return;
      if (n.tag === 6) {
        t = tt(n), Cd(t, l);
        return;
      }
      if (n = tt(n), n.nodeType !== 9) {
        if (n.nodeType === 11) {
          l = "host" in n ? n.host : null, l !== null && l.scrollIntoView(t);
          return;
        }
        n.scrollIntoView(t);
      }
    }
    for (n = l ? e.length - 1 : 0; n !== (l ? -1 : e.length); ) {
      var a = e[n];
      a.tag === 6 ? (a = tt(a), Cd(a, l)) : tt(a).scrollIntoView(t), n += l ? -1 : 1;
    }
  };
  function Kp(t, e) {
    return t = tt(t), Od(t, e), !1;
  }
  function Od(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function _d(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n];
        t.addEventListener(
          a.type,
          a.attachedListener,
          ua(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (l = e._observers, l !== null && l.forEach(function(i) {
      for (var u = 0, c = 0; c < Ge.length; c++) {
        var o = Ge[c];
        (o.fragmentInstance !== e || o.observer !== i || o.instance !== t) && (Ge[u++] = o);
      }
      Ge.length = u, i.observe(t);
    }), Od(t, e));
  }
  function Jp(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          ua(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (l = e._observers, l !== null && l.forEach(function(i) {
      typeof i.rootMargin == "string" ? Vp(
        e,
        i,
        t
      ) : i.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function sf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          sf(l), bi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function kp(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Me(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Fp(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function Md(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function hf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function df(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Wp(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Me(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var gf = null;
  function Rd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Me(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Dd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function $p(t, e) {
    function l() {
      n = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var n = !1;
    try {
      t.ownerDocument.addEventListener("focus", l, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", l, !0);
    }
    return n;
  }
  function Ip(t) {
    xd(function() {
      xd(function(e) {
        return t(e);
      });
    });
  }
  function jd(t, e, l) {
    switch (e = ei(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(d(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(d(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(d(454));
        return t;
      default:
        throw Error(d(451));
    }
  }
  function Hd(t, e, l) {
    for (var n in l) {
      var a = l[n];
      l.hasOwnProperty(n) && a != null && yt(t, e, n, null, Np, a);
    }
    l.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Le && (t.onclick = null), bi(t);
  }
  function mf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    bi(t);
  }
  var Re = /* @__PURE__ */ new Map(), Ud = /* @__PURE__ */ new Set();
  function li(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var yl = K.d;
  K.d = {
    f: Pp,
    r: t0,
    D: e0,
    C: l0,
    L: n0,
    m: a0,
    X: u0,
    S: i0,
    M: c0
  };
  function Pp() {
    var t = yl.f(), e = Tu();
    return t || e;
  }
  function t0(t) {
    var e = wn(t);
    e !== null && e.tag === 5 && e.type === "form" ? qs(e) : yl.r(t);
  }
  var ca = typeof document > "u" ? null : document;
  function Yd(t, e, l) {
    var n = ca;
    if (n && typeof e == "string" && e) {
      var a = Ee(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Ud.has(a) || (Ud.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), Wt(e, "link", t), Bt(e), n.head.appendChild(e)));
    }
  }
  function e0(t) {
    yl.D(t), Yd("dns-prefetch", t, null);
  }
  function l0(t, e) {
    yl.C(t, e), Yd("preconnect", t, e);
  }
  function n0(t, e, l) {
    yl.L(t, e, l);
    var n = ca;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ee(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ee(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ee(t) + '"]';
      var i = a;
      switch (e) {
        case "style":
          i = oa(t);
          break;
        case "script":
          i = fa(t);
      }
      if (!(Re.has(i) || (t = Z(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Re.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ni(i)) || e === "script" && n.querySelector(ai(i))))) {
        var u = n.createElement("link");
        Wt(u, "link", t), e === "style" && (u[xi] = !0, u.onload = u.onerror = function() {
          Wf(u);
        }), Bt(u), n.head.appendChild(u);
      }
    }
  }
  function a0(t, e) {
    yl.m(t, e);
    var l = ca;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ee(n) + '"][href="' + Ee(t) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = fa(t);
      }
      if (!Re.has(i) && (t = Z({ rel: "modulepreload", href: t }, e), Re.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ai(i)))
              return;
        }
        n = l.createElement("link"), Wt(n, "link", t), Bt(n), l.head.appendChild(n);
      }
    }
  }
  function i0(t, e, l) {
    yl.S(t, e, l);
    var n = ca;
    if (n && t) {
      var a = An(n).hoistableStyles, i = oa(t);
      e = e || "default";
      var u = a.get(i);
      if (!u) {
        var c = { loading: 0, preload: null };
        if (u = n.querySelector(
          ni(i)
        ))
          c.loading = 5;
        else {
          t = Z(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Re.get(i)) && pf(t, l);
          var o = u = n.createElement("link");
          Bt(o), Wt(o, "link", t), o._p = new Promise(function(m, b) {
            o.onload = m, o.onerror = b;
          }), o.addEventListener("load", function() {
            c.loading |= 1;
          }), o.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, _u(u, e, n);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: c
        }, a.set(i, u);
      }
    }
  }
  function u0(t, e) {
    yl.X(t, e);
    var l = ca;
    if (l && t) {
      var n = An(l).hoistableScripts, a = fa(t), i = n.get(a);
      i || (i = l.querySelector(ai(a)), i || (t = Z({ src: t, async: !0 }, e), (e = Re.get(a)) && vf(t, e), i = l.createElement("script"), Bt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function c0(t, e) {
    yl.M(t, e);
    var l = ca;
    if (l && t) {
      var n = An(l).hoistableScripts, a = fa(t), i = n.get(a);
      i || (i = l.querySelector(ai(a)), i || (t = Z({ src: t, async: !0, type: "module" }, e), (e = Re.get(a)) && vf(t, e), i = l.createElement("script"), Bt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function qd(t, e, l, n) {
    var a = (a = bl.current) ? li(a) : null;
    if (!a) throw Error(d(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (l = oa(l.href), e = An(
          a
        ).hoistableStyles, n = e.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = oa(l.href);
          var i = An(
            a
          ).hoistableStyles, u = i.get(t);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = a.querySelector(
            ni(t)
          )) ? i._p || (u.instance = i, u.state.loading = 5) : (i = Re.get(t), i || (i = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Re.set(t, i)), o0(
            a,
            t,
            i,
            u.state
          ))), e && n === null)
            throw Error(d(528, ""));
          return u;
        }
        if (e && n !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (l = fa(l), e = An(
          a
        ).hoistableScripts, n = e.get(l), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, t));
    }
  }
  function oa(t) {
    return 'href="' + Ee(t) + '"';
  }
  function ni(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Bd(t) {
    return Z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function o0(t, e, l, n) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[xi] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[xi] = !0, e.onload = e.onerror = Wf.bind(null, e), Wt(e, "link", l), Bt(e), t.head.appendChild(e);
    n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    });
  }
  function fa(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function ai(t) {
    return "script[async]" + t;
  }
  function Gd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Ee(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Bt(n), n;
          var a = Z({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Bt(n), Wt(n, "style", a), _u(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = oa(l.href);
          var i = t.querySelector(
            ni(a)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Bt(i), i;
          n = Bd(l), (a = Re.get(a)) && pf(n, a), i = (t.ownerDocument || t).createElement("link"), Bt(i);
          var u = i;
          return u._p = new Promise(function(c, o) {
            u.onload = c, u.onerror = o;
          }), Wt(i, "link", n), e.state.loading |= 4, _u(i, l.precedence, t), e.instance = i;
        case "script":
          return i = fa(l.src), (a = t.querySelector(
            ai(i)
          )) ? (e.instance = a, Bt(a), a) : (n = l, (a = Re.get(i)) && (n = Z({}, l), vf(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Bt(a), Wt(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(d(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, _u(n, l.precedence, t));
    return e.instance;
  }
  function _u(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, u = 0; u < n.length; u++) {
      var c = n[u];
      if (c.dataset.precedence === e) i = c;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function pf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function vf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Mu = null;
  function Qd(t, e, l) {
    if (Mu === null) {
      var n = /* @__PURE__ */ new Map(), a = Mu = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Mu, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[xa] || i[Zt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var c = n.get(u);
        c ? c.push(i) : n.set(u, [i]);
      }
    }
    return n;
  }
  function yf(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function f0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Xd(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Vd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ld(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Zd(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Ld(e), t.suspenseyImages.push(e)), t = h0.bind(t), e.decode().then(t, t));
  }
  function r0(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = oa(n.href), i = e.querySelector(
          ni(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ii.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Bt(i);
          return;
        }
        i = e.ownerDocument || e, n = Bd(n), (a = Re.get(a)) && pf(n, a), i = i.createElement("link"), Bt(i);
        var u = i;
        u._p = new Promise(function(c, o) {
          u.onload = c, u.onerror = o;
        }), Wt(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ii.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Ru = 0;
  function s0(t, e) {
    return t.stylesheets && t.count === 0 && ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && ju(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ru === 0 && (Ru = 62500 * Op());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ju(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Ru ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function Kd(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) ju(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ii() {
    this.count--, Kd(this);
  }
  function h0() {
    this.imgCount--, Kd(this);
  }
  var Du = null;
  function ju(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Du = /* @__PURE__ */ new Map(), e.forEach(d0, t), Du = null, ii.call(t));
  }
  function d0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Du.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Du.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var u = a[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (l.set(u.dataset.precedence, u), n = u);
        }
        n && l.set(null, n);
      }
      a = e.instance, u = a.getAttribute("data-precedence"), i = l.get(u) || n, i === n && l.set(null, a), l.set(u, a), this.count++, n = ii.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ra = {
    $$typeof: qt,
    Provider: null,
    Consumer: null,
    _currentValue: nl,
    _currentValue2: nl,
    _threadCount: 0
  };
  function g0(t, e, l, n, a, i, u, c, o) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wu(0), this.hiddenUpdates = Wu(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jd(t, e, l, n, a, i, u, c, o, m, b, z) {
    return t = new g0(
      t,
      e,
      l,
      u,
      o,
      m,
      b,
      z,
      c
    ), e = 1, i === !0 && (e |= 24), i = ae(3, null, null, e), t.current = i, i.stateNode = t, e = Mc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Hc(i), t;
  }
  function kd(t) {
    return t ? (t = Un, t) : Un;
  }
  function Fd(t, e, l, n, a, i) {
    a = kd(a), n.context === null ? n.context = a : n.pendingContext = a, n = Ml(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(t, n, e), l !== null && (oe(l, t, e), Ua(l, t, e));
  }
  function Wd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function xf(t, e) {
    Wd(t, e), (t = t.alternate) && Wd(t, e);
  }
  function $d(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = nn(t, 67108864);
      e !== null && oe(e, t, 67108864), xf(t, 67108864);
    }
  }
  function Id(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = be();
      e = $u(e);
      var l = nn(t, e);
      l !== null && oe(l, t, e), xf(t, e);
    }
  }
  var sa = !0;
  function m0(t, e, l, n) {
    var a = j.T;
    j.T = null;
    var i = K.p;
    try {
      K.p = 2, bf(t, e, l, n);
    } finally {
      K.p = i, j.T = a;
    }
  }
  function p0(t, e, l, n) {
    var a = j.T;
    j.T = null;
    var i = K.p;
    try {
      K.p = 8, bf(t, e, l, n);
    } finally {
      K.p = i, j.T = a;
    }
  }
  function bf(t, e, l, n) {
    if (sa) {
      var a = Sf(n);
      if (a === null)
        tf(
          t,
          e,
          n,
          Hu,
          l
        ), tg(t, n);
      else if (y0(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (tg(t, n), e & 4 && -1 < v0.indexOf(t)) {
        for (; a !== null; ) {
          var i = wn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Il(i.pendingLanes);
                  if (u !== 0) {
                    var c = i;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; u; ) {
                      var o = 1 << 31 - de(u);
                      c.entanglements[1] |= o, u &= ~o;
                    }
                    tl(i), (dt & 6) === 0 && (bu = se() + 500, Ia(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = nn(i, 2), c !== null && oe(c, i, 2), Tu(), xf(i, 2);
            }
          if (i = Sf(n), i === null && tf(
            t,
            e,
            n,
            Hu,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        tf(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Sf(t) {
    return t = ac(t), zf(t);
  }
  var Hu = null;
  function zf(t) {
    if (Hu = null, t = Pl(t), t !== null) {
      var e = G(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = Q(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = N(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Hu = t, null;
  }
  function Pd(t) {
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
        switch (Og()) {
          case qf:
            return 2;
          case Bf:
            return 8;
          case gi:
          case _g:
            return 32;
          case Gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Tf = !1, Ll = null, Zl = null, Kl = null, ui = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), Jl = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ll = null;
        break;
      case "dragenter":
      case "dragleave":
        Zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Kl = null;
        break;
      case "pointerover":
      case "pointerout":
        ui.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ci.delete(e.pointerId);
    }
  }
  function oi(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, e !== null && (e = wn(e), e !== null && $d(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function y0(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Ll = oi(
          Ll,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Zl = oi(
          Zl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Kl = oi(
          Kl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return ui.set(
          i,
          oi(
            ui.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, ci.set(
          i,
          oi(
            ci.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function eg(t) {
    var e = Pl(t.target);
    if (e !== null) {
      var l = G(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = Q(l), e !== null) {
            t.blockedOn = e, Jf(t.priority, function() {
              Id(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = N(l), e !== null) {
            t.blockedOn = e, Jf(t.priority, function() {
              Id(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Uu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Sf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        nc = n, l.target.dispatchEvent(n), nc = null;
      } else
        return e = wn(l), e !== null && $d(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function lg(t, e, l) {
    Uu(t) && l.delete(e);
  }
  function x0() {
    Tf = !1, Ll !== null && Uu(Ll) && (Ll = null), Zl !== null && Uu(Zl) && (Zl = null), Kl !== null && Uu(Kl) && (Kl = null), ui.forEach(lg), ci.forEach(lg);
  }
  function Yu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Tf || (Tf = !0, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      x0
    )));
  }
  var qu = null;
  function ng(t) {
    qu !== t && (qu = t, x.unstable_scheduleCallback(
      x.unstable_NormalPriority,
      function() {
        qu === t && (qu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (zf(n || l) === null)
              continue;
            break;
          }
          var i = wn(l);
          i !== null && (t.splice(e, 3), e -= 3, lo(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function ha(t) {
    function e(o) {
      return Yu(o, t);
    }
    Ll !== null && Yu(Ll, t), Zl !== null && Yu(Zl, t), Kl !== null && Yu(Kl, t), ui.forEach(e), ci.forEach(e);
    for (var l = 0; l < Jl.length; l++) {
      var n = Jl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Jl.length && (l = Jl[0], l.blockedOn === null); )
      eg(l), l.blockedOn === null && Jl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], u = a[ne] || null;
        if (typeof i == "function")
          u || ng(l);
        else if (u) {
          var c = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, u = i[ne] || null)
              c = u.formAction;
            else if (zf(a) !== null) continue;
          } else c = u.action;
          typeof c == "function" ? l[n + 1] = c : (l.splice(n, 3), n -= 3), ng(l);
        }
      }
  }
  function ag() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return a = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function Ef(t) {
    this._internalRoot = t;
  }
  Bu.prototype.render = Ef.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(d(409));
    var l = e.current, n = be();
    Fd(l, n, t, e, null, null);
  }, Bu.prototype.unmount = Ef.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Fd(t.current, 2, null, t, null, null), Tu(), e[En] = null;
    }
  };
  function Bu(t) {
    this._internalRoot = t;
  }
  Bu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Kf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Jl.length && e !== 0 && e < Jl[l].priority; l++) ;
      Jl.splice(l, 0, t), l === 0 && eg(t);
    }
  };
  var ig = w.version;
  if (ig !== "19.3.0")
    throw Error(
      d(
        527,
        ig,
        "19.3.0"
      )
    );
  K.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(d(188)) : (t = Object.keys(t).join(","), Error(d(268, t)));
    return t = k(e), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var b0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gu.isDisabled && Gu.supportsFiber)
      try {
        pa = Gu.inject(
          b0
        ), he = Gu;
      } catch {
      }
  }
  return ri.createRoot = function(t, e) {
    if (!T(t)) throw Error(d(299));
    var l = !1, n = "", a = ks, i = Fs, u = Ws;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = Jd(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      u,
      ag
    ), t[En] = e.current, Po(t), new Ef(e);
  }, ri.hydrateRoot = function(t, e, l) {
    if (!T(t)) throw Error(d(299));
    var n = !1, a = "", i = ks, u = Fs, c = Ws, o = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.formState !== void 0 && (o = l.formState)), e = Jd(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      o,
      i,
      u,
      c,
      ag
    ), e.context = kd(null), l = e.current, n = be(), n = $u(n), a = Ml(n), a.callback = null, Rl(l, a, n), l = n, e.current.lanes = l, ya(e, l), tl(e), t[En] = e.current, Po(t), new Bu(e);
  }, ri.version = "19.3.0", ri;
}
var mg;
function R0() {
  if (mg) return Nf.exports;
  mg = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (w) {
        console.error(w);
      }
  }
  return x(), Nf.exports = M0(), Nf.exports;
}
var D0 = R0();
const pg = {
  "ui.FirstAidChallenge": {
    vi: "Thử thách sơ cứu",
    en: "First aid challenge"
  },
  "ui.4Minutes": {
    vi: "4 phút",
    en: "4 minutes"
  },
  "ui.Close": {
    vi: "Đóng",
    en: "Close"
  },
  "ui.CloseChallenge": {
    vi: "Đóng thử thách",
    en: "Close challenge"
  },
  "ui.LeaveChallenge": {
    vi: "Rời thử thách",
    en: "Leave challenge"
  },
  "ui.DoYouWantToStopThe": {
    vi: "Bạn muốn dừng thử thách?",
    en: "Do you want to stop the challenge?"
  },
  "ui.ThisAttemptWillEndWhenYou": {
    vi: "Lượt chơi này sẽ kết thúc. Khi quay lại, bạn sẽ bắt đầu một lượt mới. Đồng hồ vẫn chạy khi bạn cân nhắc.",
    en: "This attempt will end. When you return, you will start a new attempt. The timer continues while you decide."
  },
  "ui.Continue": {
    vi: "Tiếp tục",
    en: "Continue"
  },
  "ui.ExitChallenge": {
    vi: "Thoát thử thách",
    en: "Exit challenge"
  },
  "ui.Correct": {
    vi: "Chính xác",
    en: "Correct"
  },
  "ui.LetSReviewTheRightAction": {
    vi: "Cùng ghi nhớ cách xử trí đúng",
    en: "Let's review the right action"
  },
  "ui.KeyTakeaway": {
    vi: "Điều cần nhớ",
    en: "Key takeaway"
  },
  "ui.RedCrossReference": {
    vi: "Tham khảo Red Cross",
    en: "Red Cross reference"
  },
  "ui.FirstAidChallenge13": {
    vi: "Thử thách sơ cấp cứu",
    en: "First aid challenge"
  },
  "ui.MINUTES": {
    vi: "PHÚT",
    en: "MINUTES"
  },
  "ui.GOLDEN": {
    vi: "THỜI GIAN",
    en: "GOLDEN"
  },
  "ui.TIME": {
    vi: "VÀNG",
    en: "MINUTES"
  },
  "ui.10Situations": {
    vi: "10 tình huống.",
    en: "10 situations."
  },
  "ui.HowWouldYouRespond": {
    vi: "Bạn sẽ xử trí thế nào?",
    en: "How would you respond?"
  },
  "ui.ShortQuestionsAboutCommonFirstAid": {
    vi: "Những câu hỏi ngắn về sơ cấp cứu thường gặp.",
    en: "Short questions about common first aid situations."
  },
  "ui.ChooseAnActionAndLearnAfter": {
    vi: "Chọn cách xử trí và học thêm sau mỗi câu.",
    en: "Choose an action and learn after each question."
  },
  "ui.StartTheChallenge": {
    vi: "Bắt đầu thử thách",
    en: "Start the challenge"
  },
  "ui.MaybeLater": {
    vi: "Để sau",
    en: "Maybe later"
  },
  "ui.GHMELearnersPracticingFirstAidOn": {
    vi: "Học viên GHME thực hành sơ cứu trên mô hình",
    en: "GHME learners practicing first aid on manikins"
  },
  "ui.KnowledgeFromPracticalTrainingAtGHME": {
    vi: "Kiến thức từ những buổi thực hành tại GHME.",
    en: "Knowledge from practical training at GHME."
  },
  "ui.4MinutesToTestYourKnowledge": {
    vi: "4 phút cho thử thách kiến thức. Bài ôn tập không thay thế đào tạo sơ cứu thực hành.",
    en: "4 minutes to test your knowledge. This review does not replace hands-on first aid training."
  },
  "ui.4GoldenMinutes": {
    vi: "4 phút thời gian vàng",
    en: "4 Golden Minutes"
  },
  "ui.ChallengeComplete": {
    vi: "Đã kết thúc thử thách",
    en: "Challenge complete"
  },
  "ui.Question": {
    vi: "Câu",
    en: "Question"
  },
  "ui.QuestionProgress": {
    vi: "Tiến trình câu hỏi",
    en: "Question progress"
  },
  "ui.TimeRemaining": {
    vi: "Thời gian còn lại",
    en: "Time remaining"
  },
  "ui.PleaseEnterYourFullName": {
    vi: "Vui lòng nhập họ và tên của bạn.",
    en: "Please enter your full name."
  },
  "ui.PleaseEnterAValidPhoneNumber": {
    vi: "Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số).",
    en: "Please enter a valid phone number (9–15 digits)."
  },
  "ui.PleaseCheckYourEmailAddress": {
    vi: "Vui lòng kiểm tra lại địa chỉ email.",
    en: "Please check your email address."
  },
  "ui.CloseParticipantForm": {
    vi: "Đóng form thông tin",
    en: "Close participant form"
  },
  "ui.GHMEFirstAidChallenge": {
    vi: "GHME · Thử thách sơ cứu",
    en: "GHME · First aid challenge"
  },
  "ui.BeforeYouBegin": {
    vi: "Trước khi bắt đầu",
    en: "Before you begin"
  },
  "ui.TellGHMEALittleAboutYourself": {
    vi: "Cho GHME biết một chút về bạn để bắt đầu hành trình 10 tình huống.",
    en: "Tell GHME a little about yourself before you explore these 10 situations."
  },
  "ui.FullName": {
    vi: "Họ và tên",
    en: "Full name"
  },
  "ui.EnterYourFullName": {
    vi: "Nhập họ và tên của bạn",
    en: "Enter your full name"
  },
  "ui.PhoneNumber": {
    vi: "Số điện thoại",
    en: "Phone number"
  },
  "ui.EnterYourPhoneNumber": {
    vi: "Nhập số điện thoại",
    en: "Enter your phone number"
  },
  "ui.Optional": {
    vi: "Không bắt buộc",
    en: "Optional"
  },
  "ui.YouWillStillHaveTheFull": {
    vi: "Bạn vẫn có đủ 4 phút sau bước này.",
    en: "You will still have the full 4 minutes after this step."
  },
  "ui.EnterTheChallenge": {
    vi: "Vào thử thách",
    en: "Enter the challenge"
  },
  "ui.PreviewYourDetailsAreNotSent": {
    vi: "Bản xem trước: thông tin chưa được gửi đến GHME và chỉ được giữ trong lượt truy cập này.",
    en: "Preview: your details are not sent to GHME and are kept only during this page visit."
  },
  "ui.ChooseTheMostAppropriateAction": {
    vi: "Chọn một cách xử trí phù hợp nhất",
    en: "Choose the most appropriate action"
  },
  "ui.CorrectAnswer": {
    vi: "— Đáp án đúng",
    en: "— Correct answer"
  },
  "ui.YourChoiceIncorrect": {
    vi: "— Bạn chọn, chưa chính xác",
    en: "— Your choice, incorrect"
  },
  "ui.HideHint": {
    vi: "Ẩn gợi ý",
    en: "Hide hint"
  },
  "ui.NeedAHint": {
    vi: "Cần một gợi ý?",
    en: "Need a hint?"
  },
  "ui.RememberThisBeforeContinuing": {
    vi: "Ghi nhớ trước khi tiếp tục",
    en: "Remember this before continuing"
  },
  "ui.ChooseHowYouWouldRespond": {
    vi: "Chọn cách bạn sẽ xử trí",
    en: "Choose how you would respond"
  },
  "ui.ReadyToConfirmYourChoice": {
    vi: "Sẵn sàng với lựa chọn của bạn?",
    en: "Ready to confirm your choice?"
  },
  "ui.ViewResults": {
    vi: "Xem kết quả",
    en: "View results"
  },
  "ui.NextQuestion": {
    vi: "Câu tiếp theo",
    en: "Next question"
  },
  "ui.ConfirmAnswer": {
    vi: "Xác nhận đáp án",
    en: "Confirm answer"
  },
  "ui.LetSReviewTheQuestionsYou": {
    vi: "Cùng nhìn lại những câu bạn đã thử.",
    en: "Let's review the questions you attempted."
  },
  "ui.YouHaveAStrongFoundation": {
    vi: "Bạn đã có nền tảng tốt.",
    en: "You have a strong foundation."
  },
  "ui.YouHaveABasicUnderstanding": {
    vi: "Bạn đã có kiến thức cơ bản.",
    en: "You have a basic understanding."
  },
  "ui.EveryQuestionHelpsStrengthenYourKnowledge": {
    vi: "Mỗi câu hỏi là một bước củng cố nền tảng.",
    en: "Every question helps strengthen your knowledge."
  },
  "ui.4MinutesAreUp": {
    vi: "Hết 4 phút",
    en: "4 minutes are up"
  },
  "ui.ChallengeComplete62": {
    vi: "Hoàn thành thử thách",
    en: "Challenge complete"
  },
  "ui.CorrectAnswers": {
    vi: "câu trả lời đúng",
    en: "correct answers"
  },
  "ui.TimeUsed": {
    vi: "Thời gian sử dụng",
    en: "Time used"
  },
  "ui.CompletedIn": {
    vi: "Hoàn thành trong",
    en: "Completed in"
  },
  "ui.AnswersConfirmed": {
    vi: "câu đã xác nhận",
    en: "answers confirmed"
  },
  "ui.EveryCorrectActionHelpsYouPrepare": {
    vi: "Mỗi cách xử trí đúng là một bước để sẵn sàng giúp đỡ.",
    en: "Every correct action helps you prepare to help others."
  },
  "ui.ReviewValue0Situations": {
    vi: "Ôn lại {value0} tình huống",
    en: "Review {value0} situations"
  },
  "ui.ReviewTheAnswers": {
    vi: "Xem lại các đáp án",
    en: "Review the answers"
  },
  "ui.YourStrengths": {
    vi: "Bạn làm tốt",
    en: "Your strengths"
  },
  "ui.TopicsToRevisit": {
    vi: "Bạn nên xem lại",
    en: "Topics to revisit"
  },
  "ui.KeepYourKnowledgeStrong": {
    vi: "Tiếp tục giữ vững kiến thức",
    en: "Keep your knowledge strong"
  },
  "ui.TopicsWithIncorrectOrUnansweredQuestions": {
    vi: "Các chủ đề có câu sai hoặc chưa trả lời.",
    en: "Topics with incorrect or unanswered questions."
  },
  "ui.YouAnsweredAll10SituationsCorrectly": {
    vi: "Bạn đã trả lời đúng cả 10 tình huống. Thực hành thường xuyên giúp củng cố kỹ năng.",
    en: "You answered all 10 situations correctly. Regular practice helps reinforce your skills."
  },
  "ui.AllResults": {
    vi: "Toàn bộ kết quả",
    en: "All results"
  },
  "ui.QuestionsToRevisit": {
    vi: "Các câu cần xem lại",
    en: "Questions to revisit"
  },
  "ui.ReviewYourChoicesRememberTheRight": {
    vi: "Nhìn lại lựa chọn. Ghi nhớ cách xử trí.",
    en: "Review your choices. Remember the right action."
  },
  "ui.ThereAreNoQuestionsToRevisit": {
    vi: "Không có câu nào cần xem lại trong lượt chơi này.",
    en: "There are no questions to revisit in this attempt."
  },
  "ui.Correct79": {
    vi: "· Chính xác",
    en: "· Correct"
  },
  "ui.YourChoice": {
    vi: "Bạn chọn",
    en: "Your choice"
  },
  "ui.NoAnswerConfirmed": {
    vi: "Chưa xác nhận đáp án",
    en: "No answer confirmed"
  },
  "ui.CorrectAnswer82": {
    vi: "Đáp án đúng",
    en: "Correct answer"
  },
  "ui.ViewExplanation": {
    vi: "Xem giải thích",
    en: "View explanation"
  },
  "ui.ShowOnlyQuestionsToRevisit": {
    vi: "Chỉ xem các câu cần ôn lại",
    en: "Show only questions to revisit"
  },
  "ui.ViewAllResults": {
    vi: "Xem toàn bộ kết quả",
    en: "View all results"
  },
  "ui.NextSteps": {
    vi: "Bước tiếp theo",
    en: "Next steps"
  },
  "ui.WantMoreConfidenceInAReal": {
    vi: "Muốn tự tin hơn trong tình huống thật?",
    en: "Want more confidence in a real emergency?"
  },
  "ui.HandsOnPracticeHelpsTurnKnowledge": {
    vi: "Thực hành trực tiếp giúp biến kiến thức thành phản xạ.",
    en: "Hands-on practice helps turn knowledge into action."
  },
  "ui.ExploreFirstAidCourses": {
    vi: "Khám phá khóa học sơ cấp cứu",
    en: "Explore first aid courses"
  },
  "ui.TryTheChallengeAgain": {
    vi: "Làm lại thử thách",
    en: "Try the challenge again"
  },
  "ui.KnowledgeReviewDoesNotReplaceHands": {
    vi: "Bài ôn tập kiến thức · Không thay thế đào tạo sơ cứu thực hành.",
    en: "Knowledge review · Does not replace hands-on first aid training."
  },
  "ui.SituationValue0": {
    vi: "Tình huống {value0}",
    en: "Situation {value0}"
  },
  "ui.Situation": {
    vi: "Tình huống",
    en: "Situation"
  },
  "ui.IllustrationFromAPracticalFirstAid": {
    vi: "Ảnh minh họa từ lớp thực hành sơ cứu.",
    en: "Illustration from a practical first aid class."
  }
}, Sg = Tt.createContext(null);
function vg() {
  if (window.GHMEI18n) return window.GHMEI18n.language;
  try {
    return localStorage.getItem("ghmeLanguage") === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
}
function j0({ children: x }) {
  const [w, A] = Tt.useState(vg);
  Tt.useEffect(() => {
    var Q;
    const T = (N) => A(N.detail.language === "en" ? "en" : "vi"), G = (N) => {
      N.key === "ghmeLanguage" && A(vg());
    };
    return window.addEventListener("ghme:languagechange", T), window.addEventListener("storage", G), window.GHMEI18n || (document.documentElement.lang = w, document.title = w === "en" ? "4 Golden Minutes — GHME" : "4 Phút Thời Gian Vàng — GHME", (Q = document.querySelector('meta[name="description"]')) == null || Q.setAttribute("content", w === "en" ? "10 situations, 4 minutes. Review first aid knowledge with GHME through an interactive challenge." : "10 tình huống, 4 phút. Cùng GHME ôn lại kiến thức sơ cứu qua trải nghiệm tương tác.")), () => {
      window.removeEventListener("ghme:languagechange", T), window.removeEventListener("storage", G);
    };
  }, [w]);
  function d(T, G = {}) {
    var N, et;
    return (((N = pg[T]) == null ? void 0 : N[w]) ?? ((et = pg[T]) == null ? void 0 : et.vi) ?? "").replace(/\{(\w+)\}/g, (k, _) => G[_] ?? k);
  }
  return /* @__PURE__ */ f.jsx(Sg.Provider, { value: { language: w, t: d }, children: x });
}
const Fl = () => Tt.useContext(Sg);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zg = (...x) => x.filter((w, A, d) => !!w && w.trim() !== "" && d.indexOf(w) === A).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U0 = {
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
const Y0 = Tt.forwardRef(
  ({
    color: x = "currentColor",
    size: w = 24,
    strokeWidth: A = 2,
    absoluteStrokeWidth: d,
    className: T = "",
    children: G,
    iconNode: Q,
    ...N
  }, et) => Tt.createElement(
    "svg",
    {
      ref: et,
      ...U0,
      width: w,
      height: w,
      stroke: x,
      strokeWidth: d ? Number(A) * 24 / Number(w) : A,
      className: zg("lucide", T),
      ...N
    },
    [
      ...Q.map(([k, _]) => Tt.createElement(k, _)),
      ...Array.isArray(G) ? G : [G]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (x, w) => {
  const A = Tt.forwardRef(
    ({ className: d, ...T }, G) => Tt.createElement(Y0, {
      ref: G,
      iconNode: w,
      className: zg(`lucide-${H0(x)}`, d),
      ...T
    })
  );
  return A.displayName = `${x}`, A;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = De("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = De("BookOpen", [
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
const B0 = De("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = De("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = De("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = De("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = De("ExternalLink", [
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
const X0 = De("HeartPulse", [
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
const Eg = De("Info", [
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
const V0 = De("Lightbulb", [
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
const L0 = De("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = De("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Z0 = {
  response: {
    category: "Recognizing an emergency",
    scene: `The right action.
A chance to help.`,
    imageAlt: "First aid practice with a manikin in an office",
    question: "Someone suddenly collapses. Once the scene is safe, what should you do first?",
    answers: ["Check responsiveness and breathing, and call for help", "Give the person water", "Wait for the person to regain consciousness", "Immediately pull the person to their feet"],
    hint: "Start by assessing the condition of the person who needs help.",
    explanation: "Check responsiveness and normal breathing for no more than 10 seconds. If the person is unresponsive and not breathing normally, activate emergency services, start CPR and use an AED when available."
  },
  safety: {
    category: "Scene safety",
    scene: `Keep yourself safe.
Be safe to help.`,
    imageAlt: "Safety training at a construction site",
    question: "Before approaching an injured person, what should take priority?",
    answers: ["Take photos of the scene", "Check that the surrounding area is safe", "Move every nearby object", "Rush over regardless of danger"],
    hint: "You can help effectively only when you are not putting yourself in danger.",
    explanation: "Look for hazards such as electricity, traffic or fire before approaching. Do not put yourself in danger."
  },
  cpr: {
    category: "Cardiopulmonary resuscitation",
    scene: `Observe calmly.
Take action.`,
    imageAlt: "CPR practice on a manikin",
    question: "An adult is unresponsive and only gasping. After activating emergency services, what should you do?",
    answers: ["Wait for breathing to return", "Give the person sugar water", "Start CPR and use an AED when available", "Help the person sit up"],
    hint: "Gasping is not normal breathing.",
    explanation: "Unresponsiveness and the absence of normal breathing indicate the need for CPR. Ask someone to call emergency services and get an AED; follow the dispatcher’s instructions."
  },
  rate: {
    category: "Cardiopulmonary resuscitation",
    scene: `The right rhythm.
A chance at life.`,
    imageAlt: "Learners practicing chest compressions on a manikin",
    question: "What is the recommended chest compression rate for adult CPR?",
    answers: ["40–60 compressions/minute", "60–80 compressions/minute", "160–180 compressions/minute", "100–120 compressions/minute"],
    hint: "Chest compressions should be steady, fast and continuous.",
    explanation: "Give chest compressions at 100–120 per minute, allow the chest to fully recoil after each compression and minimize interruptions."
  },
  aed: {
    category: "Using an AED",
    scene: `Listen to the instructions.
Help step by step.`,
    imageAlt: "A first aid education session",
    question: "An AED is analyzing the heart rhythm or preparing to deliver a shock. What must you ensure?",
    answers: ["No one is touching the person receiving care", "Someone holds the person’s arms firmly", "Keep touching the person to check responsiveness", "Remove the electrode pads"],
    hint: "Follow the device’s voice instructions.",
    explanation: "Do not touch the person while the AED is analyzing or delivering a shock. Resume CPR as soon as the device instructs you to do so."
  },
  bleeding: {
    category: "Managing bleeding",
    scene: `Recognize it early.
Help promptly.`,
    imageAlt: "Instruction on using a first aid kit",
    question: "An external wound is bleeding heavily. What is an appropriate initial action?",
    answers: ["Keep lifting the dressing to look", "Apply firm, continuous direct pressure to the wound", "Only wipe away the blood around it", "Let the wound dry on its own"],
    hint: "Use gauze or a clean cloth to apply pressure where the bleeding is occurring.",
    explanation: "Call emergency services for severe bleeding. Use gauze or a clean cloth to apply firm, continuous direct pressure; protect yourself from contact with blood."
  },
  burn: {
    category: "First aid for burns",
    scene: `Practical knowledge.
Everyday protection.`,
    imageAlt: "Teachers attending a first aid class",
    question: "How should you cool a small thermal burn?",
    answers: ["Apply toothpaste immediately", "Place ice directly on the skin", "Cool it under cool running water for at least 20 minutes", "Apply cooking oil to the burn"],
    hint: "Cool water helps reduce heat in the burned area.",
    explanation: "Cool the burn under gently running cool water for at least 20 minutes. Keep the rest of the body warm; do not apply ice directly or use toothpaste."
  },
  breathing: {
    category: "Monitoring the person",
    scene: `Stay and help.
Watch for changes.`,
    imageAlt: "Instruction in care and first aid skills",
    question: "A person is unresponsive but breathing normally, with no signs of injury. What should you do?",
    answers: ["Start chest compressions immediately", "Give the person water", "Leave the person alone", "Call emergency services, use the recovery position and monitor breathing"],
    hint: "Keep the airway clear and continue monitoring.",
    explanation: "Use the recovery position when appropriate, call emergency services and monitor breathing. If breathing becomes abnormal, start CPR as instructed."
  },
  help: {
    category: "Calling for help",
    scene: `Coordinate clearly.
Help more effectively.`,
    imageAlt: "Learners discussing first aid with an instructor",
    question: "Other people are nearby while you provide emergency care. What is the best way to ask for help?",
    answers: ["Assign someone to call emergency services and get an AED if available", "Wait for people to organize themselves", "Ask everyone to leave", "Stop helping to record a video"],
    hint: "Give a clear task to a specific person.",
    explanation: "Ask one person to call emergency services and another to find an AED if available. Coordinate with others helping and follow the dispatcher’s instructions."
  },
  monitor: {
    category: "Ongoing care",
    scene: `First aid is a skill.
Practice to prepare.`,
    imageAlt: "First aid practice at a GHME training class",
    question: "After calling emergency services and providing initial first aid, what should you do while waiting for help?",
    answers: ["Leave when the person seems fine", "Stay, reassure the person and monitor changes in their condition", "Give the person food immediately to restore energy", "Stop monitoring entirely"],
    hint: "The person’s condition may change while waiting for medical personnel.",
    explanation: "Stay if it is safe, reassure the person and monitor responsiveness and breathing. Adapt your care to the person’s condition and the dispatcher’s instructions."
  }
}, el = {
  steps: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps",
  cpr: "https://guidelines.redcross.org/guidelines-database/cpr-techniques-and-sequence/",
  aed: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-cardiac-arrest",
  breathing: "https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person",
  bleeding: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external",
  burns: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns"
}, yg = [
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
    source: el.steps
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
    source: el.steps
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
    source: el.cpr
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
    source: el.cpr
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
    source: el.aed
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
    source: el.bleeding
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
    source: el.burns
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
    source: el.breathing
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
    source: el.steps
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
    source: el.bleeding
  }
], xg = {
  vi: yg,
  en: yg.map((x) => ({ ...x, ...Z0[x.id] }))
}, K0 = (x) => xg[x] || xg.vi, Hf = 240;
function da() {
  return { screen: "closed", index: 0, selected: null, confirmed: !1, hint: !1, usedHint: !1, responses: [], remaining: Hf, deadline: null, finished: !1, timedOut: !1, exit: !1 };
}
function J0(x, w) {
  if (w.type === "autoOpen") return x.screen === "closed" ? { ...da(), screen: "entry" } : x;
  if (w.type === "open") return { ...da(), screen: "entry" };
  if (w.type === "close") return da();
  if (w.type === "intro") return { ...da(), screen: "intro" };
  if (w.type === "start") return { ...da(), screen: "quiz", deadline: w.now + Hf * 1e3 };
  if (w.type === "exit") return { ...x, exit: !0 };
  if (w.type === "continue") return { ...x, exit: !1 };
  if (x.screen !== "quiz") return x;
  const A = Math.max(0, Math.ceil((x.deadline - w.now) / 1e3));
  if (!A) return { ...x, remaining: 0, screen: "result", finished: !0, timedOut: !0, exit: !1 };
  switch (w.type) {
    case "tick":
      return A === x.remaining ? x : { ...x, remaining: A };
    case "select":
      return x.confirmed || x.exit ? x : { ...x, selected: w.value };
    case "hint":
      return { ...x, hint: !x.hint, usedHint: !0 };
    case "confirm":
      return x.selected === null || x.confirmed || x.exit ? x : { ...x, confirmed: !0, remaining: A, responses: [...x.responses, { selected: x.selected, usedHint: x.usedHint }] };
    case "next":
      return !x.confirmed || x.exit ? x : x.index + 1 === w.total ? { ...x, remaining: A, finished: !0, screen: "result" } : { ...x, remaining: A, index: x.index + 1, selected: null, confirmed: !1, hint: !1, usedHint: !1 };
    default:
      return x;
  }
}
function wg(x) {
  return String(Math.floor(x / 60)).padStart(2, "0") + ":" + String(x % 60).padStart(2, "0");
}
function k0({ index: x, total: w, remaining: A, finished: d, answered: T, imageBase: G, onClose: Q }) {
  const { t: N, language: et } = Fl();
  return /* @__PURE__ */ f.jsxs("header", { className: "training-header", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "training-brand", children: [
      /* @__PURE__ */ f.jsx("img", { src: G + "logo-ghme.svg", alt: "GHME" }),
      /* @__PURE__ */ f.jsx("span", { id: "game-title", children: N("ui.4GoldenMinutes") })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "training-progress", children: [
      /* @__PURE__ */ f.jsx("p", { children: d ? N("ui.ChallengeComplete") : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        N("ui.Question"),
        " ",
        /* @__PURE__ */ f.jsx("strong", { children: String(x + 1).padStart(2, "0") }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          " / ",
          w
        ] })
      ] }) }),
      /* @__PURE__ */ f.jsx("div", { role: "progressbar", "aria-label": N("ui.QuestionProgress"), "aria-valuenow": T, "aria-valuemin": 0, "aria-valuemax": w, className: "progress-track", children: /* @__PURE__ */ f.jsx("span", { style: { width: `${T / w * 100}%` } }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: `training-timer${A < 60 && !d ? " is-low" : ""}`, children: d ? /* @__PURE__ */ f.jsx(Qu, { size: 19, "aria-hidden": "true" }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(Tg, { size: 18, "aria-hidden": "true" }),
      /* @__PURE__ */ f.jsx("span", { role: "timer", "aria-label": N("ui.TimeRemaining"), "aria-live": "off", children: wg(A) })
    ] }) }),
    /* @__PURE__ */ f.jsx("button", { className: "close-game", "aria-label": N("ui.CloseChallenge"), title: N("ui.Close"), onClick: Q, children: /* @__PURE__ */ f.jsx(jf, { size: 21, "aria-hidden": "true" }) })
  ] });
}
function F0({ question: x, index: w, imageBase: A }) {
  const { t: d, language: T } = Fl();
  return /* @__PURE__ */ f.jsxs("aside", { className: "situation", "aria-label": d("ui.SituationValue0", { value0: w + 1 }), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "case-label", children: [
      /* @__PURE__ */ f.jsxs("span", { children: [
        d("ui.Situation"),
        " ",
        String(w + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ f.jsx("span", { className: "case-line" })
    ] }),
    /* @__PURE__ */ f.jsxs("figure", { className: "case-visual", children: [
      /* @__PURE__ */ f.jsx("img", { src: A + x.image + ".webp", alt: x.imageAlt }),
      /* @__PURE__ */ f.jsx("figcaption", { children: d("ui.IllustrationFromAPracticalFirstAid") })
    ] })
  ] });
}
function W0({ question: x, correct: w }) {
  const { t: A, language: d } = Fl(), T = x.explanation.split(new RegExp("(?<=[.!?])\\s+")), G = T[0], Q = T.length > 1 ? T.slice(1).join(" ") : x.hint;
  return /* @__PURE__ */ f.jsxs("div", { className: `feedback ${w ? "feedback-correct" : "feedback-review"}`, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "feedback-status", children: [
      w ? /* @__PURE__ */ f.jsx(Qu, { size: 19, "aria-hidden": "true" }) : /* @__PURE__ */ f.jsx(Eg, { size: 19, "aria-hidden": "true" }),
      /* @__PURE__ */ f.jsx("strong", { children: A(w ? "ui.Correct" : "ui.LetSReviewTheRightAction") })
    ] }),
    /* @__PURE__ */ f.jsx("p", { className: "feedback-explanation", children: G }),
    /* @__PURE__ */ f.jsxs("p", { className: "feedback-takeaway", children: [
      /* @__PURE__ */ f.jsx("strong", { children: A("ui.KeyTakeaway") }),
      Q
    ] }),
    /* @__PURE__ */ f.jsxs("a", { href: x.source, target: "_blank", rel: "noreferrer", className: "source-link", children: [
      A("ui.RedCrossReference"),
      /* @__PURE__ */ f.jsx(Q0, { size: 11, "aria-hidden": "true" })
    ] })
  ] });
}
function $0({ question: x, index: w, total: A, selected: d, confirmed: T, hint: G, onSelect: Q, onHint: N, onConfirm: et, onNext: k, headingRef: _ }) {
  const { t: v, language: O } = Fl();
  return /* @__PURE__ */ f.jsxs("section", { className: "decision", "aria-labelledby": "question-title", children: [
    /* @__PURE__ */ f.jsx("p", { className: "question-category", children: x.category }),
    /* @__PURE__ */ f.jsx("h2", { id: "question-title", ref: _, tabIndex: -1, className: "question-heading", children: x.question }),
    /* @__PURE__ */ f.jsxs("fieldset", { className: "decision-choices", disabled: T, children: [
      /* @__PURE__ */ f.jsx("legend", { className: "sr-only", children: v("ui.ChooseTheMostAppropriateAction") }),
      x.answers.map((I, F) => {
        const V = T && F === x.correct, tt = T && d === F && !V;
        return /* @__PURE__ */ f.jsxs("label", { className: `answer-option${d === F ? " is-selected" : ""}${T ? " is-locked" : ""}${V ? " is-correct" : ""}${tt ? " is-incorrect" : ""}`, children: [
          /* @__PURE__ */ f.jsx("input", { type: "radio", name: `answer-${x.id}`, value: F, checked: d === F, onChange: () => Q(F), className: "sr-only" }),
          /* @__PURE__ */ f.jsx("span", { className: "answer-letter", "aria-hidden": "true", children: "ABCD"[F] }),
          /* @__PURE__ */ f.jsxs("span", { className: "answer-text", children: [
            I,
            T && (V || tt) && /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: v(V ? "ui.CorrectAnswer" : "ui.YourChoiceIncorrect") })
          ] }),
          /* @__PURE__ */ f.jsx("span", { className: "answer-mark", "aria-hidden": "true", children: V ? /* @__PURE__ */ f.jsx(Qu, { size: 18 }) : tt ? /* @__PURE__ */ f.jsx(Eg, { size: 18 }) : d === F ? /* @__PURE__ */ f.jsx(B0, { size: 18 }) : null })
        ] }, F);
      })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "learning-space", children: [
      /* @__PURE__ */ f.jsx("div", { "aria-live": "polite", "aria-atomic": "true", children: T && /* @__PURE__ */ f.jsx(W0, { question: x, correct: d === x.correct }) }),
      !T && /* @__PURE__ */ f.jsxs("div", { className: "training-aid", children: [
        /* @__PURE__ */ f.jsxs("button", { className: "hint-toggle", onClick: N, "aria-expanded": G, "aria-controls": "question-hint", children: [
          /* @__PURE__ */ f.jsx(V0, { size: 18, "aria-hidden": "true" }),
          v(G ? "ui.HideHint" : "ui.NeedAHint")
        ] }),
        /* @__PURE__ */ f.jsx("div", { id: "question-hint", className: "hint-content", "aria-live": "polite", children: G && /* @__PURE__ */ f.jsx("p", { children: x.hint }) })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "decision-actions", children: [
      /* @__PURE__ */ f.jsx("span", { className: "decision-step", children: v(T ? "ui.RememberThisBeforeContinuing" : d === null ? "ui.ChooseHowYouWouldRespond" : "ui.ReadyToConfirmYourChoice") }),
      /* @__PURE__ */ f.jsxs("button", { className: "button-primary decision-primary", disabled: d === null, onClick: T ? k : et, children: [
        T ? w === A - 1 ? v("ui.ViewResults") : v("ui.NextQuestion") : v("ui.ConfirmAnswer"),
        /* @__PURE__ */ f.jsx(ga, { size: 18, "aria-hidden": "true" })
      ] })
    ] })
  ] });
}
function I0({ questions: x, responses: w, remaining: A, timedOut: d, onRestart: T, headingRef: G, onCourse: Q }) {
  const { t: N, language: et } = Fl(), k = Tt.useRef(null), [_, v] = Tt.useState(!1), O = (q) => {
    var ct;
    return ((ct = w[q]) == null ? void 0 : ct.selected) === x[q].correct;
  }, I = w.filter((q, ct) => q.selected === x[ct].correct).length, F = x.map((q, ct) => ({ q, i: ct })).filter(({ i: q }) => !O(q)), V = [...new Set(F.map(({ q }) => q.category))], tt = [...new Set(x.filter((q, ct) => O(ct) && !V.includes(q.category)).map((q) => q.category))], Yt = _ ? x.map((q, ct) => ({ q, i: ct })) : F, Vt = () => {
    F.length || v(!0), requestAnimationFrame(() => {
      var q, ct;
      (q = k.current) == null || q.scrollIntoView({ block: "start", behavior: "instant" }), (ct = k.current) == null || ct.focus({ preventScroll: !0 });
    });
  }, fe = d && w.length < x.length ? N("ui.LetSReviewTheQuestionsYou") : I >= 8 ? N("ui.YouHaveAStrongFoundation") : I >= 5 ? N("ui.YouHaveABasicUnderstanding") : N("ui.EveryQuestionHelpsStrengthenYourKnowledge");
  return /* @__PURE__ */ f.jsxs("section", { className: "results", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "result-overview", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "result-hero", children: [
        /* @__PURE__ */ f.jsx("p", { className: "section-label", children: N(d ? "ui.4MinutesAreUp" : "ui.ChallengeComplete62") }),
        /* @__PURE__ */ f.jsxs("h1", { id: "result-title", ref: G, tabIndex: -1, className: "question-heading result-score", children: [
          /* @__PURE__ */ f.jsx("span", { children: I }),
          /* @__PURE__ */ f.jsxs("span", { className: "score-total", children: [
            " / ",
            x.length
          ] }),
          /* @__PURE__ */ f.jsxs("span", { className: "sr-only", children: [
            " ",
            N("ui.CorrectAnswers")
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("h2", { children: fe }),
        /* @__PURE__ */ f.jsxs("p", { className: "result-time", children: [
          N(d ? "ui.TimeUsed" : "ui.CompletedIn"),
          " ",
          /* @__PURE__ */ f.jsx("strong", { children: wg(Hf - A) }),
          w.length < x.length && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            " · ",
            w.length,
            "/",
            x.length,
            " ",
            N("ui.AnswersConfirmed")
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("p", { className: "result-support", children: N("ui.EveryCorrectActionHelpsYouPrepare") }),
        /* @__PURE__ */ f.jsxs("button", { className: "result-review-action", onClick: Vt, children: [
          F.length ? N("ui.ReviewValue0Situations", { value0: F.length }) : N("ui.ReviewTheAnswers"),
          /* @__PURE__ */ f.jsx(ga, { size: 17, "aria-hidden": "true" })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "learning-summary", children: [
        tt.length > 0 && /* @__PURE__ */ f.jsxs("div", { className: "summary-group summary-strength", children: [
          /* @__PURE__ */ f.jsxs("h2", { children: [
            /* @__PURE__ */ f.jsx(Qu, { size: 18, "aria-hidden": "true" }),
            N("ui.YourStrengths")
          ] }),
          /* @__PURE__ */ f.jsx("ul", { children: tt.map((q) => /* @__PURE__ */ f.jsx("li", { children: q }, q)) })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "summary-group summary-revisit", children: [
          /* @__PURE__ */ f.jsxs("h2", { children: [
            /* @__PURE__ */ f.jsx(q0, { size: 18, "aria-hidden": "true" }),
            V.length ? N("ui.TopicsToRevisit") : N("ui.KeepYourKnowledgeStrong")
          ] }),
          V.length ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx("p", { className: "summary-note", children: N("ui.TopicsWithIncorrectOrUnansweredQuestions") }),
            /* @__PURE__ */ f.jsx("ul", { className: "revisit-list", children: V.map((q) => /* @__PURE__ */ f.jsx("li", { children: q }, q)) })
          ] }) : /* @__PURE__ */ f.jsx("p", { className: "summary-note", children: N("ui.YouAnsweredAll10SituationsCorrectly") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("section", { className: "answer-review", "aria-labelledby": "review-title", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "review-heading", children: [
        /* @__PURE__ */ f.jsxs("h2", { id: "review-title", ref: k, tabIndex: -1, children: [
          N(_ ? "ui.AllResults" : "ui.QuestionsToRevisit"),
          " ",
          /* @__PURE__ */ f.jsx("span", { children: Yt.length })
        ] }),
        /* @__PURE__ */ f.jsx("p", { children: N("ui.ReviewYourChoicesRememberTheRight") })
      ] }),
      Yt.length === 0 && /* @__PURE__ */ f.jsx("p", { className: "review-empty", children: N("ui.ThereAreNoQuestionsToRevisit") }),
      /* @__PURE__ */ f.jsx("div", { className: "review-list", children: Yt.map(({ q, i: ct }) => /* @__PURE__ */ f.jsxs("article", { className: "review-row", children: [
        /* @__PURE__ */ f.jsx("span", { className: "review-number", children: String(ct + 1).padStart(2, "0") }),
        /* @__PURE__ */ f.jsxs("div", { className: "review-content", children: [
          /* @__PURE__ */ f.jsxs("p", { className: "review-category", children: [
            q.category,
            _ && O(ct) && /* @__PURE__ */ f.jsxs("span", { children: [
              " ",
              N("ui.Correct79")
            ] })
          ] }),
          /* @__PURE__ */ f.jsx("h3", { children: q.question }),
          /* @__PURE__ */ f.jsxs("div", { className: "review-answers", children: [
            /* @__PURE__ */ f.jsxs("p", { className: O(ct) ? "review-selected is-correct" : "review-selected", children: [
              /* @__PURE__ */ f.jsx("span", { children: N("ui.YourChoice") }),
              w[ct] ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                "ABCD"[w[ct].selected],
                ". ",
                q.answers[w[ct].selected]
              ] }) : N("ui.NoAnswerConfirmed")
            ] }),
            /* @__PURE__ */ f.jsxs("p", { className: "review-correct", children: [
              /* @__PURE__ */ f.jsx("span", { children: N("ui.CorrectAnswer82") }),
              "ABCD"[q.correct],
              ". ",
              q.answers[q.correct]
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("details", { children: [
            /* @__PURE__ */ f.jsxs("summary", { children: [
              N("ui.ViewExplanation"),
              /* @__PURE__ */ f.jsx(G0, { size: 16, "aria-hidden": "true" })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "review-explanation", children: [
              /* @__PURE__ */ f.jsx("p", { children: q.explanation }),
              /* @__PURE__ */ f.jsx("a", { className: "source-link", href: q.source, target: "_blank", rel: "noreferrer", children: N("ui.RedCrossReference") })
            ] })
          ] })
        ] })
      ] }, q.id)) }),
      /* @__PURE__ */ f.jsxs("button", { className: "text-button review-toggle", "aria-pressed": _, onClick: () => v((q) => !q), children: [
        N(_ ? "ui.ShowOnlyQuestionsToRevisit" : "ui.ViewAllResults"),
        /* @__PURE__ */ f.jsx(ga, { size: 16, "aria-hidden": "true" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("section", { className: "result-next", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("p", { className: "section-label", children: N("ui.NextSteps") }),
        /* @__PURE__ */ f.jsx("h2", { children: N("ui.WantMoreConfidenceInAReal") }),
        /* @__PURE__ */ f.jsx("p", { children: N("ui.HandsOnPracticeHelpsTurnKnowledge") })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "result-next-actions", children: [
        /* @__PURE__ */ f.jsxs("a", { className: "button-primary", href: "../#programs", onClick: Q, children: [
          N("ui.ExploreFirstAidCourses"),
          /* @__PURE__ */ f.jsx(ga, { size: 17, "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ f.jsxs("button", { className: "text-button", onClick: T, children: [
          /* @__PURE__ */ f.jsx(L0, { size: 16, "aria-hidden": "true" }),
          N("ui.TryTheChallengeAgain")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("p", { className: "result-note", children: N("ui.KnowledgeReviewDoesNotReplaceHands") })
  ] });
}
function P0({ imageBase: x, headingRef: w, onStart: A, onClose: d }) {
  const { t: T, language: G } = Fl();
  return /* @__PURE__ */ f.jsxs("section", { className: "opening", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "opening-brand", children: [
      /* @__PURE__ */ f.jsx("img", { src: x + "logo-ghme.svg", alt: "GHME" }),
      /* @__PURE__ */ f.jsx("span", { children: T("ui.FirstAidChallenge13") })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "opening-composition", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "opening-content", children: [
        /* @__PURE__ */ f.jsxs("h1", { id: "game-title", ref: w, tabIndex: -1, className: "question-heading opening-title", "aria-label": T("ui.4GoldenMinutes"), children: [
          /* @__PURE__ */ f.jsxs("span", { className: "opening-four", children: [
            "4 ",
            /* @__PURE__ */ f.jsx("span", { children: G === "vi" && T("ui.MINUTES") })
          ] }),
          /* @__PURE__ */ f.jsxs("span", { className: "opening-golden", children: [
            T("ui.GOLDEN"),
            /* @__PURE__ */ f.jsx("br", {}),
            T("ui.TIME"),
            /* @__PURE__ */ f.jsx("span", { className: "title-stop", children: "." })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("p", { className: "opening-question", children: [
          T("ui.10Situations"),
          /* @__PURE__ */ f.jsx("br", {}),
          T("ui.HowWouldYouRespond")
        ] }),
        /* @__PURE__ */ f.jsxs("p", { className: "opening-description", children: [
          T("ui.ShortQuestionsAboutCommonFirstAid"),
          /* @__PURE__ */ f.jsx("br", { className: "desktop-break" }),
          " ",
          T("ui.ChooseAnActionAndLearnAfter")
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "opening-actions", children: [
          /* @__PURE__ */ f.jsxs("button", { className: "button-primary", onClick: A, children: [
            T("ui.StartTheChallenge"),
            /* @__PURE__ */ f.jsx(ga, { size: 18, "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ f.jsx("button", { className: "text-button", onClick: d, children: T("ui.MaybeLater") })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("figure", { className: "opening-visual", children: [
        /* @__PURE__ */ f.jsx("img", { src: x + "bidv.webp", alt: T("ui.GHMELearnersPracticingFirstAidOn") }),
        /* @__PURE__ */ f.jsx("figcaption", { children: T("ui.KnowledgeFromPracticalTrainingAtGHME") })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("p", { className: "opening-note", children: T("ui.4MinutesToTestYourKnowledge") })
  ] });
}
function Rf({ children: x, compact: w, confirmation: A, onClose: d, fallbackRef: T, labelledBy: G, className: Q = "" }) {
  const N = Tt.useRef(null);
  Tt.useEffect(() => {
    const k = N.current, v = k.getRootNode().activeElement || document.activeElement, O = document.body, I = O.style.overflow, F = O.style.paddingRight;
    if (!A) {
      const V = window.innerWidth - document.documentElement.clientWidth;
      O.style.paddingRight = parseFloat(getComputedStyle(O).paddingRight) + V + "px", O.style.overflow = "hidden";
    }
    return k.showModal(), () => {
      k.close(), A || (O.style.overflow = I, O.style.paddingRight = F);
      const V = v != null && v.isConnected && v !== O ? v : T == null ? void 0 : T.current;
      V == null || V.focus({ preventScroll: !0 });
    };
  }, [A, T]);
  const et = (k) => {
    if (k.key !== "Tab" || k.target.closest("dialog") !== N.current) return;
    const _ = [...N.current.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), summary, [tabindex="0"]')].filter((F) => F.closest("dialog") === N.current && F.getClientRects().length), v = N.current.getRootNode().activeElement, O = _[0], I = _[_.length - 1];
    k.shiftKey && (v === O || !_.includes(v)) ? (k.preventDefault(), I == null || I.focus()) : !k.shiftKey && v === I && (k.preventDefault(), O == null || O.focus());
  };
  return /* @__PURE__ */ f.jsx("dialog", { onKeyDown: et, ref: N, role: "dialog", "aria-modal": "true", "aria-labelledby": G || (A ? "exit-title" : "game-title"), className: "game-dialog " + (w ? "entry-dialog " : "") + (A ? "exit-dialog " : "") + Q, onCancel: (k) => {
    k.preventDefault(), k.stopPropagation(), d();
  }, children: x });
}
function tv({ onClose: x, onComplete: w }) {
  const { t: A } = Fl(), d = Tt.useRef(null);
  Tt.useEffect(() => {
    var _;
    (_ = d.current) == null || _.focus();
  }, []);
  const [T, G] = Tt.useState({ name: "", phone: "", email: "" }), [Q, N] = Tt.useState({}), et = (_) => {
    const { name: v, value: O } = _.target;
    G((I) => ({ ...I, [v]: O })), N((I) => ({ ...I, [v]: void 0 }));
  }, k = (_) => {
    var V;
    _.preventDefault();
    const v = { name: T.name.trim(), phone: T.phone.trim(), email: T.email.trim() }, O = {};
    v.name.length < 2 && (O.name = "ui.PleaseEnterYourFullName");
    const I = v.phone.replace(/\D/g, "");
    (!/^\+?[\d\s().-]+$/.test(v.phone) || I.length < 9 || I.length > 15) && (O.phone = "ui.PleaseEnterAValidPhoneNumber"), v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) && (O.email = "ui.PleaseCheckYourEmailAddress"), N(O);
    const F = Object.keys(O)[0];
    if (F) {
      (V = _.currentTarget.elements.namedItem(F)) == null || V.focus();
      return;
    }
    w(v);
  };
  return /* @__PURE__ */ f.jsxs(Rf, { confirmation: !0, labelledBy: "participant-title", className: "participant-dialog", onClose: x, children: [
    /* @__PURE__ */ f.jsx("button", { className: "close-game", onClick: x, "aria-label": A("ui.CloseParticipantForm"), children: /* @__PURE__ */ f.jsx(jf, { size: 20, "aria-hidden": "true" }) }),
    /* @__PURE__ */ f.jsx("p", { className: "participant-eyebrow", children: A("ui.GHMEFirstAidChallenge") }),
    /* @__PURE__ */ f.jsx("h2", { id: "participant-title", children: A("ui.BeforeYouBegin") }),
    /* @__PURE__ */ f.jsx("p", { className: "participant-description", children: A("ui.TellGHMEALittleAboutYourself") }),
    /* @__PURE__ */ f.jsxs("form", { className: "participant-form", noValidate: !0, onSubmit: k, children: [
      /* @__PURE__ */ f.jsxs("label", { htmlFor: "participant-name", children: [
        A("ui.FullName"),
        " ",
        /* @__PURE__ */ f.jsx("span", { "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ f.jsx("input", { ref: d, id: "participant-name", name: "name", autoComplete: "name", required: !0, maxLength: 100, placeholder: A("ui.EnterYourFullName"), value: T.name, onChange: et, "aria-invalid": !!Q.name, "aria-describedby": Q.name ? "participant-name-error" : void 0 }),
      Q.name && /* @__PURE__ */ f.jsx("p", { id: "participant-name-error", className: "field-error", children: A(Q.name) }),
      /* @__PURE__ */ f.jsxs("label", { htmlFor: "participant-phone", children: [
        A("ui.PhoneNumber"),
        " ",
        /* @__PURE__ */ f.jsx("span", { "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ f.jsx("input", { id: "participant-phone", name: "phone", type: "tel", inputMode: "tel", autoComplete: "tel", required: !0, maxLength: 24, placeholder: A("ui.EnterYourPhoneNumber"), value: T.phone, onChange: et, "aria-invalid": !!Q.phone, "aria-describedby": Q.phone ? "participant-phone-error" : void 0 }),
      Q.phone && /* @__PURE__ */ f.jsx("p", { id: "participant-phone-error", className: "field-error", children: A(Q.phone) }),
      /* @__PURE__ */ f.jsxs("label", { htmlFor: "participant-email", children: [
        "Email ",
        /* @__PURE__ */ f.jsx("small", { children: A("ui.Optional") })
      ] }),
      /* @__PURE__ */ f.jsx("input", { id: "participant-email", name: "email", type: "email", autoComplete: "email", maxLength: 254, placeholder: "ban@example.com", value: T.email, onChange: et, "aria-invalid": !!Q.email, "aria-describedby": Q.email ? "participant-email-error" : void 0 }),
      Q.email && /* @__PURE__ */ f.jsx("p", { id: "participant-email-error", className: "field-error", children: A(Q.email) }),
      /* @__PURE__ */ f.jsxs("p", { className: "participant-timing", children: [
        /* @__PURE__ */ f.jsx(Tg, { size: 16, "aria-hidden": "true" }),
        A("ui.YouWillStillHaveTheFull")
      ] }),
      /* @__PURE__ */ f.jsxs("button", { type: "submit", className: "button-primary", children: [
        A("ui.EnterTheChallenge"),
        /* @__PURE__ */ f.jsx(ga, { size: 18, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ f.jsx("p", { className: "participant-notice", children: A("ui.PreviewYourDetailsAreNotSent") })
    ] })
  ] });
}
const ev = /* @__PURE__ */ new Set();
function bg(x) {
  ev.add(x);
  try {
    sessionStorage.setItem(x, "true");
  } catch {
  }
}
function lv({ imageBase: x }) {
  const { t: w, language: A } = Fl(), d = K0(A), [T, G] = Tt.useReducer(J0, void 0, da), Q = Tt.useRef(null), N = Tt.useRef(null), [et, k] = Tt.useState(null), [_, v] = Tt.useState(!1), [O, I] = Tt.useState(!1), F = () => I(!0), V = (xt, Z = {}) => G({ type: xt, now: Date.now(), ...Z }), tt = () => {
    v(!1), bg("ghmeFirstAidGameDismissed"), V("close");
  }, Yt = () => et ? V("start") : v(!0), Vt = (xt) => {
    k(xt), v(!1), V("start");
  }, fe = () => T.screen === "quiz" ? V("exit") : tt();
  Tt.useEffect(() => {
    T.screen !== "closed" && I(!0);
  }, [T.screen]), Tt.useEffect(() => {
    if (T.screen !== "quiz") return;
    const xt = () => G({ type: "tick", now: Date.now() }), Z = setInterval(xt, 250);
    return document.addEventListener("visibilitychange", xt), () => {
      clearInterval(Z), document.removeEventListener("visibilitychange", xt);
    };
  }, [T.screen, T.deadline]), Tt.useEffect(() => {
    var xt;
    T.screen === "result" && bg("ghmeFirstAidGameCompleted"), (xt = Q.current) == null || xt.focus();
  }, [T.screen, T.index]);
  const q = d[T.index], ct = (xt) => {
    const Z = document.getElementById("programs");
    Z && (xt.preventDefault(), tt(), requestAnimationFrame(() => {
      Z.scrollIntoView({ behavior: "instant" }), Z.tabIndex = -1, Z.focus({ preventScroll: !0 }), history.replaceState(null, "", "#programs");
    }));
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("button", { ref: N, type: "button", className: `game-trigger${O ? " is-noticed" : ""}`, onPointerEnter: F, onPointerDown: F, onFocus: F, onClick: () => {
      F(), V("open");
    }, "aria-haspopup": "dialog", "aria-expanded": T.screen !== "closed", children: [
      /* @__PURE__ */ f.jsxs("span", { className: "icon-signal", "aria-hidden": "true", children: [
        /* @__PURE__ */ f.jsx("span", { className: "signal-glow" }),
        /* @__PURE__ */ f.jsxs("span", { className: "signal-waves signal-left", children: [
          /* @__PURE__ */ f.jsx("i", {}),
          /* @__PURE__ */ f.jsx("i", {}),
          /* @__PURE__ */ f.jsx("i", {})
        ] }),
        /* @__PURE__ */ f.jsx("span", { className: "signal-heart", children: /* @__PURE__ */ f.jsx(X0, { className: "game-trigger-icon", size: 32 }) }),
        /* @__PURE__ */ f.jsxs("span", { className: "signal-waves signal-right", children: [
          /* @__PURE__ */ f.jsx("i", {}),
          /* @__PURE__ */ f.jsx("i", {}),
          /* @__PURE__ */ f.jsx("i", {})
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("span", { children: [
        w("ui.FirstAidChallenge"),
        " ",
        /* @__PURE__ */ f.jsx("strong", { children: w("ui.4Minutes") })
      ] })
    ] }),
    T.screen !== "closed" && /* @__PURE__ */ f.jsxs(Rf, { onClose: fe, fallbackRef: N, children: [
      (T.screen === "entry" || T.screen === "intro") && /* @__PURE__ */ f.jsx("button", { className: "close-game", "aria-label": T.screen === "entry" ? w("ui.Close") : w("ui.CloseChallenge"), title: w("ui.Close"), onClick: fe, children: /* @__PURE__ */ f.jsx(jf, { size: 21, "aria-hidden": "true" }) }),
      T.screen === "entry" || T.screen === "intro" ? /* @__PURE__ */ f.jsx(P0, { imageBase: x, headingRef: Q, onStart: Yt, onClose: tt }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx(k0, { index: T.index, total: d.length, answered: T.responses.length, remaining: T.remaining, finished: T.finished, imageBase: x, onClose: fe }),
        /* @__PURE__ */ f.jsx("main", { className: "game-main", children: T.screen === "quiz" ? /* @__PURE__ */ f.jsxs("div", { className: "game-composition", children: [
          /* @__PURE__ */ f.jsx(F0, { question: q, index: T.index, imageBase: x }),
          /* @__PURE__ */ f.jsx($0, { question: q, index: T.index, total: d.length, selected: T.selected, confirmed: T.confirmed, hint: T.hint, onSelect: (xt) => V("select", { value: xt }), onHint: () => V("hint"), onConfirm: () => V("confirm"), onNext: () => V("next", { total: d.length }), headingRef: Q })
        ] }, q.id) : /* @__PURE__ */ f.jsx(I0, { questions: d, responses: T.responses, remaining: T.remaining, timedOut: T.timedOut, onRestart: () => V("intro"), headingRef: Q, onCourse: ct }) })
      ] }),
      _ && /* @__PURE__ */ f.jsx(tv, { onClose: () => v(!1), onComplete: Vt }),
      T.exit && /* @__PURE__ */ f.jsxs(Rf, { confirmation: !0, onClose: () => V("continue"), children: [
        /* @__PURE__ */ f.jsx("p", { className: "section-label", children: w("ui.LeaveChallenge") }),
        /* @__PURE__ */ f.jsx("h2", { id: "exit-title", className: "exit-heading", children: w("ui.DoYouWantToStopThe") }),
        /* @__PURE__ */ f.jsx("p", { className: "exit-description", children: w("ui.ThisAttemptWillEndWhenYou") }),
        /* @__PURE__ */ f.jsxs("div", { className: "exit-actions", children: [
          /* @__PURE__ */ f.jsx("button", { autoFocus: !0, className: "button-primary", onClick: () => V("continue"), children: w("ui.Continue") }),
          /* @__PURE__ */ f.jsx("button", { className: "button-secondary", onClick: tt, children: w("ui.ExitChallenge") })
        ] })
      ] })
    ] })
  ] });
}
const nv = '@import"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap";/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:"Be Vietnam Pro", Arial, sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.static{position:static}.block{display:block}.hidden{display:none}.inline{display:inline}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}}:host{color:#123456;font-family:Be Vietnam Pro,Arial,sans-serif;font-size:16px;line-height:1.5}body{min-width:320px;margin:0}*,:before,:after{--tw-border-style:solid}button,a,label{-webkit-tap-highlight-color:transparent}button,summary,label{touch-action:manipulation}button{cursor:pointer}button:disabled{cursor:not-allowed}:focus-visible{outline-offset:4px;outline:3px solid #528ab7}.question-heading:focus{outline:none}.button-primary{color:#fff;background:#c64d0b;border:1px solid #0000;border-radius:7px;justify-content:center;align-items:center;gap:16px;min-height:50px;padding:13px 22px;font-size:13px;font-weight:600;line-height:1.6;text-decoration:none;transition:background .2s,color .2s;display:inline-flex}.button-primary:hover{background:#a94008}.button-primary:disabled{color:#68788a;background:#edf0f3}.button-secondary{color:#123456;background:#fff;border:1px solid #dce5ed;border-radius:7px;justify-content:center;align-items:center;min-height:50px;padding:13px 22px;font-size:13px;transition:background .2s;display:inline-flex}.button-secondary:hover{background:#eef5fa}.text-button{color:#536980;border-radius:5px;justify-content:center;align-items:center;gap:10px;min-height:44px;padding:8px 10px;font-size:13px;font-weight:500;transition:color .2s,background .2s;display:inline-flex}.text-button:hover{color:#123456;background:#eef5fa}.section-label,.eyebrow{color:#64748b;letter-spacing:1.5px;text-transform:uppercase;font-size:10px;font-weight:600;line-height:1.6}.game-dialog{color:#123456;overscroll-behavior:contain;scrollbar-gutter:stable;background:#fff;border:0;border-radius:16px;width:min(1240px,100% - 80px);max-width:none;max-height:calc(100dvh - 64px);margin:auto;padding:0;position:fixed;top:0;right:0;bottom:0;left:0;overflow-y:auto;box-shadow:0 24px 100px #071d3040}.game-dialog[open]{animation:.22s ease-out reveal}.game-dialog::backdrop{background:#0d2438a6}.close-game{z-index:3;color:#61768a;background:0 0;border:1px solid #0000;border-radius:50%;place-items:center;width:44px;height:44px;transition:background .2s,color .2s;display:grid;position:absolute;top:16px;right:16px}.close-game:hover{color:#123456;background:#eef5fa}.game-main{padding:34px 44px 36px}.training-header{border-bottom:1px solid #e3ebf1;grid-template-columns:1fr 210px 1fr;align-items:center;gap:32px;min-height:78px;padding:16px 80px 16px 44px;display:grid;position:relative}.training-brand{align-items:center;gap:16px;display:flex}.training-brand img{width:90px;height:auto}.training-brand>span{border-left:1px solid #dce5ed;padding-left:16px;font-size:10px;font-weight:500}.training-progress{text-align:center}.training-progress p{margin-bottom:9px;font-size:11px}.training-progress p strong{font-weight:600}.training-progress p span{color:#64748b}.progress-track{background:#e8eef3;border-radius:4px;height:3px;overflow:hidden}.progress-track>span{background:#c64d0b;height:100%;transition:width .22s;display:block}.training-timer{color:#123456;justify-content:flex-end;align-items:center;gap:9px;display:flex}.training-timer svg{color:#73889a}.training-timer [role=timer]{font-variant-numeric:tabular-nums;letter-spacing:-.5px;font-size:22px;font-weight:600}.training-timer.is-low,.training-timer.is-low svg{color:#b7470a}.game-composition{grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);align-items:start;gap:48px;animation:.22s ease-out reveal;display:grid}.case-label{color:#64748b;letter-spacing:1.5px;text-transform:uppercase;align-items:center;gap:16px;margin:3px 0 20px;font-size:10px;font-weight:600;display:flex}.case-line{background:#dce5ed;flex:1;height:1px}.case-visual img{aspect-ratio:1.18;object-fit:cover;background:#eef5fa;border-radius:9px;width:100%}.case-visual figcaption{color:#64748b;margin-top:12px;font-size:10px;line-height:1.6}.decision{min-width:0}.question-category{color:#64748b;margin-bottom:12px;font-size:11px;font-weight:500}.decision h2{letter-spacing:-.75px;text-wrap:pretty;font-size:26px;font-weight:700;line-height:1.45}.decision-choices{gap:9px;margin-top:24px;display:grid}.answer-option{cursor:pointer;background:#fff;border:1px solid #dce5ed;border-radius:7px;align-items:center;gap:14px;min-height:64px;padding:12px 15px;transition:border-color .18s,background .18s,color .18s;display:flex;position:relative}.answer-option:hover{background:#f5f9fc;border-color:#819bb1}.answer-option:has(input:focus-visible){outline-offset:3px;outline:3px solid #528ab7}.answer-letter{color:#536980;border:1px solid #dce5ed;border-radius:50%;flex:0 0 30px;place-items:center;height:30px;font-size:11px;font-weight:600;transition:background .18s,color .18s,border-color .18s;display:grid}.answer-text{flex:1;min-width:0;font-size:12px;font-weight:500;line-height:1.7}.answer-mark{flex:0 0 18px;place-items:center;display:grid}.answer-option.is-selected{background:#eef5fa;border-color:#123456}.answer-option.is-selected .answer-letter{color:#fff;background:#123456;border-color:#123456}.answer-option.is-locked{cursor:default}.answer-option.is-locked:not(.is-correct):not(.is-incorrect){color:#758494;background:#fafbfc}.answer-option.is-correct{background:#f0f7f4;border-color:#548a78}.answer-option.is-correct .answer-letter{color:#fff;background:#2c6d58;border-color:#2c6d58}.answer-option.is-correct .answer-mark{color:#2c6d58}.answer-option.is-incorrect{background:#fff4eb;border-color:#c18b67}.answer-option.is-incorrect .answer-letter{color:#fff;background:#ab4c17;border-color:#ab4c17}.answer-option.is-incorrect .answer-mark{color:#ab4c17}.learning-space{min-height:166px;margin-top:20px}.training-aid{padding-top:4px}.hint-toggle{color:#536980;text-align:left;align-items:center;gap:9px;min-height:40px;padding:6px 0;font-size:12px;font-weight:500;display:inline-flex}.hint-toggle:hover{color:#123456}.hint-toggle svg{color:#b34b13}.hint-content p{color:#536980;border-left:2px solid #d9e6ef;max-width:95%;margin:8px 0 0 27px;padding-left:13px;font-size:12px;line-height:1.8;animation:.2s reveal}.feedback{border-left:2px solid #a6c5b9;padding:0 0 2px 15px;animation:.2s ease-out reveal}.feedback-review{border-color:#d9aa87}.feedback-status{color:#2c6d58;align-items:center;gap:8px;font-size:12px;display:flex}.feedback-status strong{font-weight:600}.feedback-status svg{flex-shrink:0}.feedback-review .feedback-status{color:#a14b19}.feedback-explanation{color:#415a72;margin-top:8px;font-size:12px;line-height:1.8}.feedback-takeaway{color:#536980;margin-top:8px;font-size:11px;line-height:1.8}.feedback-takeaway strong{color:#123456;font-size:10px;font-weight:600;display:block}.source-link{color:#536980;text-underline-offset:3px;align-items:center;gap:5px;padding-block:5px;font-size:10px;text-decoration:underline;display:inline-flex}.source-link:hover{color:#123456}.decision-actions{border-top:1px solid #dce5ed;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;padding-top:18px;display:flex}.decision-step{color:#64748b;max-width:145px;font-size:10px;line-height:1.7}.decision-primary{min-width:214px}.opening{padding:34px 56px 24px}.opening-brand{align-items:center;gap:18px;margin-bottom:42px;display:flex}.opening-brand img{width:112px;height:auto}.opening-brand>span{color:#64748b;border-left:1px solid #dce5ed;padding-left:18px;font-size:11px}.opening-composition{grid-template-columns:1.15fr 1fr;align-items:center;gap:72px;display:grid}.opening-title{letter-spacing:-2.5px;font-weight:700;line-height:1.08}.opening-four{font-size:96px;display:block}.opening-four>span{font-size:55px}.opening-golden{letter-spacing:-1.6px;margin-top:3px;font-size:42px;line-height:1.15;display:block}.title-stop{color:#c64d0b}.opening-question{letter-spacing:-.4px;margin-top:24px;font-size:22px;font-weight:500;line-height:1.5}.opening-description{color:#64748b;margin-top:13px;font-size:12px;line-height:1.9}.opening-actions{align-items:center;gap:24px;margin-top:28px;display:flex}.opening-visual{flex-direction:column;justify-content:center;align-self:stretch;display:flex}.opening-visual img{aspect-ratio:.95;object-fit:cover;background:#eef5fa;border-radius:100px 100px 8px 8px;width:100%}.opening-visual figcaption{color:#64748b;margin-top:16px;font-size:10px}.opening-note{color:#64748b;border-top:1px solid #e3ebf1;margin-top:36px;padding-top:16px;font-size:10px;line-height:1.8}.exit-dialog{scrollbar-gutter:auto;border-radius:12px;width:min(460px,100% - 40px);padding:32px}.exit-heading{letter-spacing:-.5px;margin-top:12px;font-size:23px;font-weight:700;line-height:1.5}.exit-description{color:#64748b;margin:18px 0 22px;font-size:13px;line-height:1.9}.exit-actions{flex-wrap:wrap;gap:10px;display:flex}.results{max-width:1000px;margin:8px auto 0;animation:.22s reveal}.result-overview{grid-template-columns:1fr 1fr;gap:64px;padding-bottom:36px;display:grid}.result-score{letter-spacing:-5px;font-variant-numeric:tabular-nums;margin-top:10px;font-size:100px;font-weight:600;line-height:1.15}.score-total{color:#8b9eae;letter-spacing:-1px;font-size:32px;font-weight:400}.result-hero h2{letter-spacing:-.4px;margin-top:16px;font-size:22px;font-weight:600;line-height:1.5}.result-time{color:#64748b;margin-top:12px;font-size:12px}.result-time strong{color:#123456;font-variant-numeric:tabular-nums;font-weight:500}.result-support{color:#64748b;max-width:320px;margin-top:10px;font-size:12px;line-height:1.9}.learning-summary{border-left:1px solid #dce5ed;padding-left:36px}.summary-group h2{align-items:center;gap:8px;font-size:14px;font-weight:600;display:flex}.summary-group h2 svg{color:#2c6d58}.summary-group ul{flex-wrap:wrap;gap:6px 22px;margin-top:12px;display:flex}.summary-group li{color:#536980;padding-left:12px;font-size:11px;line-height:1.8;position:relative}.summary-group li:before{content:"";background:#819bb1;border-radius:50%;width:3px;height:3px;position:absolute;top:8px;left:0}.summary-group .revisit-list li:before{background:#c64d0b}.summary-note{color:#64748b;margin-top:8px;font-size:11px;line-height:1.8}.answer-review{border-top:1px solid #dce5ed;padding:28px 0}.review-heading{justify-content:space-between;align-items:baseline;gap:20px;margin-bottom:8px;display:flex}.review-heading h2{font-size:18px;font-weight:600}.review-heading h2 span{color:#819bb1;margin-left:8px;font-size:14px;font-weight:400}.review-heading>p{color:#64748b;font-size:10px}.review-row{border-bottom:1px solid #e3ebf1;gap:22px;padding:24px 0;display:flex}.review-number{color:#819bb1;font-variant-numeric:tabular-nums;flex:0 0 30px;padding-top:2px;font-size:18px;font-weight:500}.review-content{flex:1;min-width:0}.review-category{color:#64748b;font-size:10px}.review-content h3{max-width:760px;margin-top:5px;font-size:14px;font-weight:600;line-height:1.8}.review-answers{grid-template-columns:1fr 1fr;gap:24px;margin-top:14px;display:grid}.review-answers p{color:#64748b;font-size:11px;line-height:1.8}.review-answers p>span{color:#819bb1;margin-bottom:4px;font-size:10px;display:block}.review-answers .review-correct{color:#123456}.review-content summary{cursor:pointer;border-radius:4px;align-items:center;gap:8px;width:fit-content;min-height:44px;margin-top:6px;font-size:11px;font-weight:500;list-style:none;display:flex}.review-content summary::-webkit-details-marker{display:none}.review-content summary svg{transition:transform .2s}.review-content details[open] summary svg{transform:rotate(180deg)}.review-explanation{color:#536980;border-left:2px solid #dce5ed;max-width:760px;margin:4px 0 8px;padding-left:16px;font-size:12px;line-height:1.9;animation:.2s reveal}.review-toggle{margin-top:14px;padding-left:0}.review-empty{color:#536980;padding:20px 0 0;font-size:12px}.result-next{border-top:1px solid #dce5ed;grid-template-columns:1fr auto;align-items:center;gap:24px;padding:30px 0 26px;display:grid}.result-next h2{margin-top:8px;font-size:18px;font-weight:600;line-height:1.6}.result-next p:not(.section-label){color:#64748b;margin-top:8px;font-size:12px;line-height:1.9}.result-next-actions{flex-direction:column;align-items:center;gap:8px;display:flex}.result-next-actions .button-primary{padding-inline:18px;font-size:12px}.result-note{color:#64748b;border-top:1px solid #e3ebf1;padding-top:12px;font-size:10px;line-height:1.8}@keyframes reveal{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@media(max-width:1200px){.game-dialog{width:calc(100% - 48px)}.game-main{padding:30px 32px}.training-header{gap:20px;padding-left:32px}.training-brand>span{display:none}.game-composition{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:32px}.decision h2{font-size:24px}.opening{padding-inline:44px}.opening-composition{gap:48px}}@media(max-width:1024px){.game-dialog{max-height:calc(100dvh - 40px)}.game-main{padding:26px 28px}.game-composition{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:28px}.decision h2{font-size:23px}.decision-actions{gap:10px}.decision-step{max-width:120px}.decision-primary{min-width:200px;padding-inline:16px}.opening-brand{margin-bottom:30px}.opening-composition{gap:32px}.opening-four{font-size:84px}.opening-four>span{font-size:48px}.opening-golden{font-size:36px}.result-overview{gap:32px}.learning-summary{padding-left:28px}.result-next{grid-template-columns:1fr}.result-next-actions{flex-direction:row;align-items:flex-start}}@media(max-width:820px){.game-dialog{width:calc(100% - 32px)}.training-header{grid-template-columns:1fr 170px auto;gap:24px;padding-left:24px}.game-main{padding:24px 28px}.game-composition{grid-template-columns:minmax(0,1fr);gap:28px}.case-label{margin-bottom:14px}.case-visual img{aspect-ratio:2.05;object-position:center 48%}.case-visual figcaption{margin-top:8px}.decision h2{font-size:26px}.learning-space{min-height:176px}.decision-step{max-width:none}.opening{padding:30px 36px 24px}.opening-brand{margin-bottom:32px}.opening-composition{grid-template-columns:1.2fr 1fr;gap:26px}.opening-four{font-size:76px}.opening-four>span{font-size:40px}.opening-golden{font-size:31px}.opening-question{font-size:19px}.opening-actions{gap:12px}.opening-actions .button-primary{padding-inline:15px;font-size:12px}.opening-visual img{border-radius:70px 70px 7px 7px}.desktop-break{display:none}.result-overview{gap:24px}.result-score{font-size:86px}.result-hero h2{font-size:20px}.review-heading{display:block}.review-heading>p{margin-top:7px}}@media(max-width:580px){.game-dialog{border-radius:12px;width:calc(100% - 20px);max-height:calc(100dvh - 20px)}.close-game{top:11px;right:8px}.training-header{z-index:2;background:#fff;grid-template-columns:1fr auto;gap:12px;min-height:98px;padding:16px 60px 12px 20px;position:sticky;top:0}.training-brand img{width:84px}.training-progress{text-align:left;order:3;grid-column:1/-1;align-items:center;gap:14px;display:flex}.training-progress p{flex-shrink:0;margin:0;font-size:10px}.progress-track{flex:1}.training-timer [role=timer]{font-size:20px}.game-main{padding:20px 20px 24px}.game-composition{gap:22px}.case-label{margin-top:0;margin-bottom:12px;font-size:9px}.case-visual img{aspect-ratio:1.6;border-radius:6px}.case-visual figcaption{font-size:9px}.question-category{margin-bottom:8px;font-size:10px}.decision h2{letter-spacing:-.5px;font-size:22px;line-height:1.5}.decision-choices{gap:9px;margin-top:20px}.answer-option{gap:11px;min-height:70px;padding:12px}.answer-text{font-size:12px}.answer-letter{flex-basis:28px;height:28px}.learning-space{min-height:205px;margin-top:18px}.feedback{padding-left:12px}.decision-actions{flex-direction:column;align-items:stretch;gap:12px;margin-top:10px;padding-top:16px}.decision-step{font-size:10px}.decision-primary{width:100%}.opening{padding:26px 24px 20px}.opening-brand{gap:12px;margin-bottom:30px;padding-right:26px}.opening-brand img{width:92px}.opening-brand>span{max-width:120px;padding-left:12px;font-size:9px;line-height:1.7}.opening-composition{grid-template-columns:minmax(0,1fr)}.opening-four{font-size:86px}.opening-four>span{font-size:46px}.opening-golden{letter-spacing:-1.3px;font-size:37px}.opening-question{margin-top:22px;font-size:21px}.opening-description{margin-top:12px}.opening-actions{gap:22px;margin-top:24px}.opening-actions .button-primary{min-height:50px;padding-inline:18px}.opening-visual{display:none}.opening-note{margin-top:28px;font-size:9px}.exit-dialog{width:calc(100% - 32px);padding:28px 24px}.result-overview{grid-template-columns:minmax(0,1fr);gap:28px;padding-bottom:26px}.result-score{font-size:96px}.result-hero h2{font-size:21px}.learning-summary{border-top:1px solid #dce5ed;border-left:none;padding:24px 0 0}.summary-group ul{gap:6px 16px}.review-heading h2{font-size:16px}.review-row{gap:12px;padding:22px 0}.review-number{flex-basis:24px;font-size:16px}.review-content h3{font-size:13px}.review-answers{grid-template-columns:minmax(0,1fr);gap:12px}.result-next h2{font-size:18px}.result-next-actions{flex-direction:column;align-items:stretch}.result-next-actions .button-primary{gap:10px;padding-inline:12px;font-size:11px}.result-note{font-size:9px}}@media(prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}.game-trigger{z-index:40;color:#123456;background:#fff;border:1px solid #dce5ed;border-radius:40px;align-items:center;gap:10px;padding:13px 19px;font-size:12px;display:flex;position:fixed;bottom:24px;right:24px;box-shadow:0 4px 20px #12345618}.game-trigger strong{color:#b84709;margin-left:5px}.game-trigger{--trigger-pulse:1.022;transition:transform .2s,border-color .2s,box-shadow .2s;animation:.45s cubic-bezier(.22,1,.36,1) 2.5s backwards trigger-enter,.7s ease-in-out 4.85s trigger-pulse,.7s ease-in-out 19.45s trigger-pulse}.game-trigger-icon{transform-origin:50%;flex-shrink:0;transition:transform .2s;animation:4.8s ease-in-out 3.55s infinite signal-heartbeat}.game-trigger strong{transition:color .2s;animation:.4s ease-in-out 4.45s trigger-emphasis;display:inline-block}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(10px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}@keyframes signal-heartbeat{0%,8%,17%,to{transform:scale(1)}4%{transform:scale(1.08)}12%{transform:scale(1.04)}}@keyframes trigger-emphasis{0%,to{transform:scale(1)}50%{transform:scale(1.04)}}@keyframes trigger-pulse{0%,to{transform:scale(1)}50%{transform:scale(var(--trigger-pulse))}}.game-trigger.is-noticed,.game-trigger.is-noticed strong{animation:none}.icon-signal{--signal-heart:#9e3348;--signal-wave:#c65c79;--signal-strength:.8;pointer-events:none;flex:0 0 70px;justify-content:center;align-items:center;width:70px;height:20px;display:flex;position:relative}.signal-heart{color:var(--signal-heart);transition:transform .2s;display:flex;position:relative}.signal-glow{opacity:.8;background:radial-gradient(#d6628526,#e797b314 48%,#0000 72%);border-radius:50%;width:54px;height:44px;transition:opacity .2s;position:absolute}.signal-waves{position:absolute;top:0;right:0;bottom:0;left:0}.signal-right{transform:scaleX(-1)}.signal-waves i{border-left:2.2px solid var(--signal-wave);opacity:0;transform-origin:100%;border-radius:50%;width:8px;height:24px;margin-top:-12px;animation:4.8s ease-out 3.75s infinite signal-wave;position:absolute;top:50%;left:calc(50% - 23px)}.signal-waves i:nth-child(2){--signal-strength:.62;height:30px;margin-top:-15px;animation-delay:3.9s;left:calc(50% - 28px)}.signal-waves i:nth-child(3){--signal-strength:.44;height:36px;margin-top:-18px;animation-delay:4.05s;left:calc(50% - 33px)}@keyframes signal-wave{0%{opacity:0;transform:translate(2px)scale(.75)}7%,12%{opacity:var(--signal-strength)}23%,to{opacity:0;transform:translate(-1px)scale(1)}}.game-trigger[aria-expanded=true] .game-trigger-icon,.game-trigger[aria-expanded=true] .signal-waves i{animation-play-state:paused}@media(hover:hover)and (pointer:fine){.game-trigger:hover{border-color:#b9cad9;transform:translateY(-2px);box-shadow:0 6px 24px #12345620}.game-trigger:hover .signal-heart{transform:scale(1.04)}.game-trigger:hover .signal-glow{opacity:1}.game-trigger:hover strong{color:#a74008}}.game-trigger:focus-visible{outline-offset:4px;outline:2px solid #528ab7}.game-trigger:active{transition-duration:.12s;transform:scale(.98)}@media(max-width:767px){.game-trigger{--trigger-pulse:1.015}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(6px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}}@media(max-width:1024px){.icon-signal{flex-basis:64px;width:64px}.signal-waves{transform:scaleX(.9)}.signal-right{transform:scaleX(-.9)}}@media(max-width:430px){.icon-signal{--signal-strength:.7;flex-basis:58px;width:58px}.game-trigger-icon{width:28px;height:28px}.signal-glow{opacity:.65;width:48px;height:40px}.signal-waves{transform:scale(.82)}.signal-right{transform:scale(-.82,.82)}.signal-waves i:nth-child(2){--signal-strength:.54}.signal-waves i:nth-child(3){--signal-strength:.38}}@media(prefers-reduced-motion:reduce){.game-trigger,.game-trigger:hover,.game-trigger:active,.game-trigger .game-trigger-icon,.game-trigger:hover .game-trigger-icon,.game-trigger strong,.game-trigger:hover .signal-heart{transform:none}.signal-waves{display:none}}@media(max-width:479px){.game-trigger{padding:11px 15px;bottom:12px;right:12px}}.results{max-width:1060px}.result-overview{grid-template-columns:1.05fr 1fr;align-items:stretch;gap:36px}.result-hero{color:#fff;background:#123456;border-radius:12px;padding:30px 32px}.result-hero .section-label{color:#d8e7f2;font-size:11px}.result-score{color:#fff;margin-top:12px;font-size:94px}.result-hero .score-total{color:#b9cede}.result-hero h2{margin-top:12px;font-size:23px}.result-time,.result-support{color:#d0dfeb;font-size:12px}.result-time strong{color:#fff}.result-support{max-width:370px}.result-review-action{color:#fff;border:1px solid #7895ad;border-radius:6px;align-items:center;gap:12px;min-height:44px;margin-top:20px;padding:10px 14px;font-size:12px;font-weight:500;transition:background .18s;display:inline-flex}.result-review-action:hover{background:#244966}.learning-summary{border:0;flex-direction:column;justify-content:center;gap:26px;padding:10px 0;display:flex}.summary-group{border-left:3px solid #c64d0b;padding-left:20px}.summary-group+.summary-group{margin-top:0}.summary-strength{border-left-color:#2c765e}.summary-group h2{font-size:17px}.summary-strength h2,.summary-strength h2 svg{color:#226348}.summary-revisit h2,.summary-revisit h2 svg{color:#a5420c}.summary-note{color:#4d6276;font-size:12px}.summary-group ul{gap:8px}.summary-group li{color:#245c46;background:#edf6f1;border-radius:5px;padding:6px 10px;font-size:12px}.summary-group li:before{display:none}.summary-group .revisit-list li{color:#85390f;background:#fff1e6}.review-heading h2{font-size:21px}.review-heading h2 span{color:#a5420c;background:#fff0e5;border-radius:50%;place-items:center;min-width:28px;height:28px;padding:0 6px;font-size:13px;font-weight:600;display:inline-grid}#review-title{scroll-margin-top:120px}.review-heading>p,.review-category{color:#52677c;font-size:11px}.review-number{color:#b14912;font-weight:600}.review-content h3{font-size:15px}.review-answers{gap:12px}.review-answers p{color:#78431f;background:#fff4eb;border-radius:6px;padding:12px 14px;font-size:12px}.review-answers p>span{color:#8b471e;margin-bottom:6px;font-size:10px;font-weight:600}.review-answers .review-correct,.review-answers .is-correct{color:#245c46;background:#edf6f1}.review-answers .review-correct>span,.review-answers .is-correct>span{color:#245c46}.review-content summary{color:#123456;font-size:12px}.review-explanation{color:#40596e;background:#f1f6fa;border-left-color:#83a2bc;border-radius:0 5px 5px 0;padding:12px 16px}.review-toggle{color:#a5420c;font-weight:600}.result-next{background:#edf4f9;border:0;border-radius:10px;margin-bottom:24px;padding:26px}.result-next p:not(.section-label),.result-note{color:#52677c}.game-dialog.participant-dialog{border-radius:14px;width:min(490px,100% - 32px);max-height:calc(100dvh - 32px);padding:34px}.participant-eyebrow{letter-spacing:1px;text-transform:uppercase;color:#a5420c;padding-right:20px;font-size:10px;font-weight:600}.participant-dialog h2{letter-spacing:-.7px;margin-top:14px;font-size:28px;font-weight:700;line-height:1.3}.participant-description{color:#52677c;margin-top:12px;font-size:13px;line-height:1.8}.participant-form{margin-top:24px}.participant-form label{align-items:baseline;gap:5px;margin:16px 0 7px;font-size:12px;font-weight:600;display:flex}.participant-form label>span{color:#a5420c}.participant-form label small{color:#65778a;margin-left:auto;font-size:10px;font-weight:400}.participant-form input{box-sizing:border-box;color:#123456;width:100%;height:48px;font:inherit;background:#fff;border:1px solid #b9c9d6;border-radius:6px;padding:12px 14px;font-size:14px;display:block}.participant-form input::placeholder{color:#7a8a99}.participant-form input:focus-visible{outline-offset:2px;border-color:#528ab7;outline:2px solid #528ab7}.participant-form input[aria-invalid=true]{background:#fff8f2;border-color:#ab4c17}.field-error{color:#9a3e0b;margin-top:5px;font-size:11px;line-height:1.6}.participant-timing{color:#52677c;align-items:center;gap:8px;margin:22px 0 14px;font-size:11px;display:flex}.participant-timing svg{flex-shrink:0}.participant-form .button-primary{width:100%}.participant-notice{color:#627589;margin-top:13px;font-size:10px;line-height:1.8}@media(max-width:820px){.result-overview{grid-template-columns:minmax(0,1fr);gap:26px}.result-hero{padding:28px}.learning-summary{padding:0}.result-next{padding:24px}}@media(max-width:580px){.result-hero{padding:24px 20px}.result-score{font-size:84px}.result-hero h2{font-size:21px}.summary-group{padding-left:16px}.summary-group h2{font-size:16px}.review-heading h2{font-size:17px}.review-content h3{font-size:14px}.result-next{padding:22px 18px}.game-dialog.participant-dialog{padding:28px 24px}.participant-dialog h2{font-size:26px}.participant-form input{font-size:16px}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}', Mf = document.getElementById("ghme-first-aid") || document.getElementById("root");
if (Mf && !Mf.shadowRoot) {
  const x = Mf.attachShadow({ mode: "open" }), w = document.createElement("style");
  w.textContent = nv;
  const A = document.createElement("div");
  x.append(w, A);
  const d = new URL(
    /* @vite-ignore */
    "./images/",
    import.meta.url
  ).href;
  D0.createRoot(A).render(/* @__PURE__ */ f.jsx(A0.StrictMode, { children: /* @__PURE__ */ f.jsx(j0, { children: /* @__PURE__ */ f.jsx(lv, { imageBase: d }) }) }));
}
