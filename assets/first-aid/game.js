function vp(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var No = { exports: {} }, fi = {};
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
function yp() {
  if (ug) return fi;
  ug = 1;
  var y = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function w(h, H, B) {
    var gt = null;
    if (B !== void 0 && (gt = "" + B), H.key !== void 0 && (gt = "" + H.key), "key" in H) {
      B = {};
      for (var at in H)
        at !== "key" && (B[at] = H[at]);
    } else B = H;
    return H = B.ref, {
      $$typeof: y,
      type: h,
      key: gt,
      ref: H !== void 0 ? H : null,
      props: B
    };
  }
  return fi.Fragment = T, fi.jsx = w, fi.jsxs = w, fi;
}
var cg;
function xp() {
  return cg || (cg = 1, No.exports = yp()), No.exports;
}
var o = xp(), _o = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fg;
function bp() {
  if (fg) return Z;
  fg = 1;
  var y = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), gt = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), E = Symbol.for("react.view_transition"), L = Symbol.iterator;
  function st(s) {
    return s === null || typeof s != "object" ? null : (s = L && s[L] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var St = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, it = Object.assign, qt = {};
  function q(s, N, R) {
    this.props = s, this.context = N, this.refs = qt, this.updater = R || St;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(s, N) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, N, "setState");
  }, q.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function K() {
  }
  K.prototype = q.prototype;
  function Ut(s, N, R) {
    this.props = s, this.context = N, this.refs = qt, this.updater = R || St;
  }
  var Gl = Ut.prototype = new K();
  Gl.constructor = Ut, it(Gl, q.prototype), Gl.isPureReactComponent = !0;
  var fl = Array.isArray;
  function W() {
  }
  var ft = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function Sl(s, N, R) {
    var U = R.ref;
    return {
      $$typeof: y,
      type: s,
      key: N,
      ref: U !== void 0 ? U : null,
      props: R
    };
  }
  function zl(s, N) {
    return Sl(s.type, N, s.props);
  }
  function ol(s) {
    return typeof s == "object" && s !== null && s.$$typeof === y;
  }
  function xe(s) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(R) {
      return N[R];
    });
  }
  var Fe = /\/+/g;
  function Bt(s, N) {
    return typeof s == "object" && s !== null && s.key != null ? xe("" + s.key) : N.toString(36);
  }
  function A(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(W, W) : (s.status = "pending", s.then(
          function(N) {
            s.status === "pending" && (s.status = "fulfilled", s.value = N);
          },
          function(N) {
            s.status === "pending" && (s.status = "rejected", s.reason = N);
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
  function X(s, N, R, U, nt) {
    var ut = typeof s;
    (ut === "undefined" || ut === "boolean") && (s = null);
    var ot = !1;
    if (s === null) ot = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case y:
            case T:
              ot = !0;
              break;
            case O:
              return ot = s._init, X(
                ot(s._payload),
                N,
                R,
                U,
                nt
              );
          }
      }
    if (ot)
      return nt = nt(s), ot = U === "" ? "." + Bt(s, 0) : U, fl(nt) ? (R = "", ot != null && (R = ot.replace(Fe, "$&/") + "/"), X(nt, N, R, "", function(ae) {
        return ae;
      })) : nt != null && (ol(nt) && (nt = zl(
        nt,
        R + (nt.key == null || s && s.key === nt.key ? "" : ("" + nt.key).replace(
          Fe,
          "$&/"
        ) + "/") + ot
      )), N.push(nt)), 1;
    ot = 0;
    var j = U === "" ? "." : U + ":";
    if (fl(s))
      for (var V = 0; V < s.length; V++)
        U = s[V], ut = j + Bt(U, V), ot += X(
          U,
          N,
          R,
          ut,
          nt
        );
    else if (V = st(s), typeof V == "function")
      for (s = V.call(s), V = 0; !(U = s.next()).done; )
        U = U.value, ut = j + Bt(U, V++), ot += X(
          U,
          N,
          R,
          ut,
          nt
        );
    else if (ut === "object") {
      if (typeof s.then == "function")
        return X(
          A(s),
          N,
          R,
          U,
          nt
        );
      throw N = String(s), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function Q(s, N, R) {
    if (s == null) return s;
    var U = [], nt = 0;
    return X(s, U, "", "", function(ut) {
      return N.call(R, ut, nt++);
    }), U;
  }
  function xt(s) {
    if (s._status === -1) {
      var N = s._result, R = N();
      R.then(
        function(U) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = U, R.status === void 0 && (R.status = "fulfilled", R.value = U));
        },
        function(U) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = U, R.status === void 0 && (R.status = "rejected", R.reason = U));
        }
      ), s._status === -1 && (s._status = 0, s._result = R);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var dt = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Dl(s) {
    var N = ft.T, R = {};
    R.types = N !== null ? N.types : null, ft.T = R;
    try {
      var U = s(), nt = ft.S;
      nt !== null && nt(R, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(W, dt);
    } catch (ut) {
      dt(ut);
    } finally {
      N !== null && R.types !== null && (N.types = R.types), ft.T = N;
    }
  }
  function ee(s) {
    var N = ft.T;
    if (N !== null) {
      var R = N.types;
      R === null ? N.types = [s] : R.indexOf(s) === -1 && R.push(s);
    } else Dl(ee.bind(null, s));
  }
  var $e = {
    map: Q,
    forEach: function(s, N, R) {
      Q(
        s,
        function() {
          N.apply(this, arguments);
        },
        R
      );
    },
    count: function(s) {
      var N = 0;
      return Q(s, function() {
        N++;
      }), N;
    },
    toArray: function(s) {
      return Q(s, function(N) {
        return N;
      }) || [];
    },
    only: function(s) {
      if (!ol(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return Z.Activity = b, Z.Children = $e, Z.Component = q, Z.Fragment = w, Z.Profiler = H, Z.PureComponent = Ut, Z.StrictMode = h, Z.Suspense = F, Z.ViewTransition = E, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ft, Z.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return ft.H.useMemoCache(s);
    }
  }, Z.addTransitionType = ee, Z.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Z.cacheSignal = function() {
    return null;
  }, Z.cloneElement = function(s, N, R) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var U = it({}, s.props), nt = s.key;
    if (N != null)
      for (ut in N.key !== void 0 && (nt = "" + N.key), N)
        !Xl.call(N, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && N.ref === void 0 || (U[ut] = N[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) U.children = R;
    else if (1 < ut) {
      for (var ot = Array(ut), j = 0; j < ut; j++)
        ot[j] = arguments[j + 2];
      U.children = ot;
    }
    return Sl(s.type, nt, U);
  }, Z.createContext = function(s) {
    return s = {
      $$typeof: gt,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: B,
      _context: s
    }, s;
  }, Z.createElement = function(s, N, R) {
    var U, nt = {}, ut = null;
    if (N != null)
      for (U in N.key !== void 0 && (ut = "" + N.key), N)
        Xl.call(N, U) && U !== "key" && U !== "__self" && U !== "__source" && (nt[U] = N[U]);
    var ot = arguments.length - 2;
    if (ot === 1) nt.children = R;
    else if (1 < ot) {
      for (var j = Array(ot), V = 0; V < ot; V++)
        j[V] = arguments[V + 2];
      nt.children = j;
    }
    if (s && s.defaultProps)
      for (U in ot = s.defaultProps, ot)
        nt[U] === void 0 && (nt[U] = ot[U]);
    return Sl(s, ut, nt);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(s) {
    return { $$typeof: at, render: s };
  }, Z.isValidElement = ol, Z.lazy = function(s) {
    return {
      $$typeof: O,
      _payload: { _status: -1, _result: s },
      _init: xt
    };
  }, Z.memo = function(s, N) {
    return {
      $$typeof: G,
      type: s,
      compare: N === void 0 ? null : N
    };
  }, Z.startTransition = Dl, Z.unstable_useCacheRefresh = function() {
    return ft.H.useCacheRefresh();
  }, Z.use = function(s) {
    return ft.H.use(s);
  }, Z.useActionState = function(s, N, R) {
    return ft.H.useActionState(s, N, R);
  }, Z.useCallback = function(s, N) {
    return ft.H.useCallback(s, N);
  }, Z.useContext = function(s) {
    return ft.H.useContext(s);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(s, N) {
    return ft.H.useDeferredValue(s, N);
  }, Z.useEffect = function(s, N) {
    return ft.H.useEffect(s, N);
  }, Z.useEffectEvent = function(s) {
    return ft.H.useEffectEvent(s);
  }, Z.useId = function() {
    return ft.H.useId();
  }, Z.useImperativeHandle = function(s, N, R) {
    return ft.H.useImperativeHandle(s, N, R);
  }, Z.useInsertionEffect = function(s, N) {
    return ft.H.useInsertionEffect(s, N);
  }, Z.useLayoutEffect = function(s, N) {
    return ft.H.useLayoutEffect(s, N);
  }, Z.useMemo = function(s, N) {
    return ft.H.useMemo(s, N);
  }, Z.useOptimistic = function(s, N) {
    return ft.H.useOptimistic(s, N);
  }, Z.useReducer = function(s, N, R) {
    return ft.H.useReducer(s, N, R);
  }, Z.useRef = function(s) {
    return ft.H.useRef(s);
  }, Z.useState = function(s) {
    return ft.H.useState(s);
  }, Z.useSyncExternalStore = function(s, N, R) {
    return ft.H.useSyncExternalStore(
      s,
      N,
      R
    );
  }, Z.useTransition = function() {
    return ft.H.useTransition();
  }, Z.version = "19.3.0", Z;
}
var og;
function Do() {
  return og || (og = 1, _o.exports = bp()), _o.exports;
}
var Ot = Do();
const Sp = /* @__PURE__ */ vp(Ot);
var Oo = { exports: {} }, oi = {}, Ao = { exports: {} }, wo = {};
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
function zp() {
  return rg || (rg = 1, (function(y) {
    function T(A, X) {
      var Q = A.length;
      A.push(X);
      t: for (; 0 < Q; ) {
        var xt = Q - 1 >>> 1, dt = A[xt];
        if (0 < H(dt, X))
          A[xt] = X, A[Q] = dt, Q = xt;
        else break t;
      }
    }
    function w(A) {
      return A.length === 0 ? null : A[0];
    }
    function h(A) {
      if (A.length === 0) return null;
      var X = A[0], Q = A.pop();
      if (Q !== X) {
        A[0] = Q;
        t: for (var xt = 0, dt = A.length, Dl = dt >>> 1; xt < Dl; ) {
          var ee = 2 * (xt + 1) - 1, $e = A[ee], s = ee + 1, N = A[s];
          if (0 > H($e, Q))
            s < dt && 0 > H(N, $e) ? (A[xt] = N, A[s] = Q, xt = s) : (A[xt] = $e, A[ee] = Q, xt = ee);
          else if (s < dt && 0 > H(N, Q))
            A[xt] = N, A[s] = Q, xt = s;
          else break t;
        }
      }
      return X;
    }
    function H(A, X) {
      var Q = A.sortIndex - X.sortIndex;
      return Q !== 0 ? Q : A.id - X.id;
    }
    if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      y.unstable_now = function() {
        return B.now();
      };
    } else {
      var gt = Date, at = gt.now();
      y.unstable_now = function() {
        return gt.now() - at;
      };
    }
    var F = [], G = [], O = 1, b = null, E = 3, L = !1, st = !1, St = !1, it = !1, qt = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function Ut(A) {
      for (var X = w(G); X !== null; ) {
        if (X.callback === null) h(G);
        else if (X.startTime <= A)
          h(G), X.sortIndex = X.expirationTime, T(F, X);
        else break;
        X = w(G);
      }
    }
    function Gl(A) {
      if (St = !1, Ut(A), !st)
        if (w(F) !== null)
          st = !0, fl || (fl = !0, ol());
        else {
          var X = w(G);
          X !== null && Bt(Gl, X.startTime - A);
        }
    }
    var fl = !1, W = -1, ft = 5, Xl = -1;
    function Sl() {
      return it ? !0 : !(y.unstable_now() - Xl < ft);
    }
    function zl() {
      if (it = !1, fl) {
        var A = y.unstable_now();
        Xl = A;
        var X = !0;
        try {
          t: {
            st = !1, St && (St = !1, q(W), W = -1), L = !0;
            var Q = E;
            try {
              l: {
                for (Ut(A), b = w(F); b !== null && !(b.expirationTime > A && Sl()); ) {
                  var xt = b.callback;
                  if (typeof xt == "function") {
                    b.callback = null, E = b.priorityLevel;
                    var dt = xt(
                      b.expirationTime <= A
                    );
                    if (A = y.unstable_now(), typeof dt == "function") {
                      b.callback = dt, Ut(A), X = !0;
                      break l;
                    }
                    b === w(F) && h(F), Ut(A);
                  } else h(F);
                  b = w(F);
                }
                if (b !== null) X = !0;
                else {
                  var Dl = w(G);
                  Dl !== null && Bt(
                    Gl,
                    Dl.startTime - A
                  ), X = !1;
                }
              }
              break t;
            } finally {
              b = null, E = Q, L = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ol() : fl = !1;
        }
      }
    }
    var ol;
    if (typeof K == "function")
      ol = function() {
        K(zl);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Fe = xe.port2;
      xe.port1.onmessage = zl, ol = function() {
        Fe.postMessage(null);
      };
    } else
      ol = function() {
        qt(zl, 0);
      };
    function Bt(A, X) {
      W = qt(function() {
        A(y.unstable_now());
      }, X);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, y.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ft = 0 < A ? Math.floor(1e3 / A) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, y.unstable_next = function(A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = E;
      }
      var Q = E;
      E = X;
      try {
        return A();
      } finally {
        E = Q;
      }
    }, y.unstable_requestPaint = function() {
      it = !0;
    }, y.unstable_runWithPriority = function(A, X) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Q = E;
      E = A;
      try {
        return X();
      } finally {
        E = Q;
      }
    }, y.unstable_scheduleCallback = function(A, X, Q) {
      var xt = y.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? xt + Q : xt) : Q = xt, A) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = Q + dt, A = {
        id: O++,
        callback: X,
        priorityLevel: A,
        startTime: Q,
        expirationTime: dt,
        sortIndex: -1
      }, Q > xt ? (A.sortIndex = Q, T(G, A), w(F) === null && A === w(G) && (St ? (q(W), W = -1) : St = !0, Bt(Gl, Q - xt))) : (A.sortIndex = dt, T(F, A), st || L || (st = !0, fl || (fl = !0, ol()))), A;
    }, y.unstable_shouldYield = Sl, y.unstable_wrapCallback = function(A) {
      var X = E;
      return function() {
        var Q = E;
        E = X;
        try {
          return A.apply(this, arguments);
        } finally {
          E = Q;
        }
      };
    };
  })(wo)), wo;
}
var sg;
function Tp() {
  return sg || (sg = 1, Ao.exports = zp()), Ao.exports;
}
var Co = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dg;
function Ep() {
  if (dg) return $t;
  dg = 1;
  var y = Do();
  function T(O) {
    var b = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        b += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + O + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function w() {
  }
  var h = {
    d: {
      f: w,
      r: function() {
        throw Error(T(522));
      },
      D: w,
      C: w,
      L: w,
      m: w,
      X: w,
      S: w,
      M: w
    },
    p: 0,
    findDOMNode: null
  }, H = Symbol.for("react.portal"), B = Symbol.for("react.recoverable"), gt = Symbol.for("react.optimistic_key");
  function at(O, b, E) {
    var L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: L == null ? null : L === gt ? gt : "" + L,
      children: O,
      containerInfo: b,
      implementation: E
    };
  }
  var F = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(O, b) {
    if (O === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, $t.browser = function(O) {
    return { $$typeof: B, _reason: O };
  }, $t.createPortal = function(O, b) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(T(299));
    return at(O, b, null, E);
  }, $t.flushSync = function(O) {
    var b = F.T, E = h.p;
    try {
      if (F.T = null, h.p = 2, O) return O();
    } finally {
      F.T = b, h.p = E, h.d.f();
    }
  }, $t.preconnect = function(O, b) {
    typeof O == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, h.d.C(O, b));
  }, $t.prefetchDNS = function(O) {
    typeof O == "string" && h.d.D(O);
  }, $t.preinit = function(O, b) {
    if (typeof O == "string" && b && typeof b.as == "string") {
      var E = b.as, L = G(E, b.crossOrigin), st = typeof b.integrity == "string" ? b.integrity : void 0, St = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      E === "style" ? h.d.S(
        O,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: L,
          integrity: st,
          fetchPriority: St
        }
      ) : E === "script" && h.d.X(O, {
        crossOrigin: L,
        integrity: st,
        fetchPriority: St,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, $t.preinitModule = function(O, b) {
    if (typeof O == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var E = G(
            b.as,
            b.crossOrigin
          );
          h.d.M(O, {
            crossOrigin: E,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
          });
        }
      } else b == null && h.d.M(O);
  }, $t.preload = function(O, b) {
    if (typeof O == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var E = b.as, L = G(E, b.crossOrigin);
      h.d.L(O, E, {
        crossOrigin: L,
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
  }, $t.preloadModule = function(O, b) {
    if (typeof O == "string")
      if (b) {
        var E = G(b.as, b.crossOrigin);
        h.d.m(O, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: E,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
        });
      } else h.d.m(O);
  }, $t.requestFormReset = function(O) {
    h.d.r(O);
  }, $t.unstable_batchedUpdates = function(O, b) {
    return O(b);
  }, $t.useFormState = function(O, b, E) {
    return F.H.useFormState(O, b, E);
  }, $t.useFormStatus = function() {
    return F.H.useHostTransitionStatus();
  }, $t.version = "19.3.0", $t;
}
var hg;
function Np() {
  if (hg) return Co.exports;
  hg = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (T) {
        console.error(T);
      }
  }
  return y(), Co.exports = Ep(), Co.exports;
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
function _p() {
  if (gg) return oi;
  gg = 1;
  var y = Tp(), T = Do(), w = Np();
  function h(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function H(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function B(t) {
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
  function at(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function F(t) {
    if (B(t) !== t)
      throw Error(h(188));
  }
  function G(t) {
    var l = t.alternate;
    if (!l) {
      if (l = B(t), l === null) throw Error(h(188));
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
          if (i === e) return F(n), t;
          if (i === a) return F(n), l;
          i = i.sibling;
        }
        throw Error(h(188));
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
          if (!u) throw Error(h(189));
        }
      }
      if (e.alternate !== a) throw Error(h(190));
    }
    if (e.tag !== 3) throw Error(h(188));
    return e.stateNode.current === e ? t : l;
  }
  function O(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = O(t), l !== null) return l;
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
  function E(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function L(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function st(t) {
    var l = [null, null], e = E(t);
    return e === null || St(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function St(t, l, e, a) {
    for (; e !== null; ) {
      if (e === l) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && St(
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
  function it(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(h(559));
    }
  }
  var qt = null, q = null;
  function K(t, l, e) {
    return t === e ? !0 : t === l ? (qt = t, !0) : !1;
  }
  function Ut(t, l, e) {
    return t === e ? (q = t, !1) : t === l ? (q !== null && (qt = t), !0) : !1;
  }
  function Gl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function fl(t, l, e) {
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
  var W = Object.assign, ft = Symbol.for("react.element"), Xl = Symbol.for("react.transitional.element"), Sl = Symbol.for("react.portal"), zl = Symbol.for("react.fragment"), ol = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), Fe = Symbol.for("react.consumer"), Bt = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), Dl = Symbol.for("react.activity"), ee = Symbol.for("react.legacy_hidden"), $e = Symbol.for("react.memo_cache_sentinel"), s = Symbol.for("react.view_transition"), N = Symbol.for("react.recoverable"), R = Symbol.iterator;
  function U(t) {
    return t === null || typeof t != "object" ? null : (t = R && t[R] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var nt = Symbol.for("react.client.reference");
  function ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === nt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case zl:
        return "Fragment";
      case xe:
        return "Profiler";
      case ol:
        return "StrictMode";
      case X:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case Dl:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Sl:
          return "Portal";
        case Bt:
          return t.displayName || "Context";
        case Fe:
          return (t._context.displayName || "Context") + ".Consumer";
        case A:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case xt:
          return l = t.displayName || null, l !== null ? l : ut(t.type) || "Memo";
        case dt:
          l = t._payload, t = t._init;
          try {
            return ut(t(l));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, j = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Qu = [], ba = -1;
  function Ql(t) {
    return { current: t };
  }
  function Vt(t) {
    0 > ba || (t.current = Qu[ba], Qu[ba] = null, ba--);
  }
  function zt(t, l) {
    ba++, Qu[ba] = t.current, t.current = l;
  }
  var Vl = Ql(null), gn = Ql(null), be = Ql(null), si = Ql(null);
  function di(t, l) {
    switch (zt(be, l), zt(gn, t), zt(Vl, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? mh(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = mh(l), t = ph(l, t);
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
    Vt(Vl), zt(Vl, t);
  }
  function Sa() {
    Vt(Vl), Vt(gn), Vt(be);
  }
  function Vu(t) {
    var l = t.memoizedState;
    l !== null && (on._currentValue = l.memoizedState, zt(si, t)), l = Vl.current;
    var e = ph(l, t.type);
    l !== e && (zt(gn, t), zt(Vl, e));
  }
  function hi(t) {
    gn.current === t && (Vt(Vl), Vt(gn)), si.current === t && (Vt(si), on._currentValue = ae);
  }
  var Zu, Ho;
  function Se(t) {
    if (Zu === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Zu = l && l[1] || "", Ho = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zu + t + Ho;
  }
  var Lu = !1;
  function Ku(t, l) {
    if (!t || Lu) return "";
    Lu = !0;
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
                } catch (_) {
                  var d = _;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (_) {
                  d = _;
                }
                z = !1;
                try {
                  var v = Object.getOwnPropertyDescriptor(
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
                  z && (v !== void 0 ? Object.defineProperty(t.prototype, "props", v) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                d = _;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (_) {
            if (_ && d && typeof _.stack == "string")
              return [_.stack, d.stack];
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
`), m = c.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < m.length && !m[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === f.length || n === m.length)
          for (a = f.length - 1, n = m.length - 1; 1 <= a && 0 <= n && f[a] !== m[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== m[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || f[a] !== m[n]) {
                  var x = `
` + f[a].replace(" at new ", " at ");
                  return t.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", t.displayName)), x;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Lu = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Se(e) : "";
  }
  function Sg(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Se(t.type);
      case 16:
        return Se("Lazy");
      case 13:
        return t.child !== l && l !== null ? Se("Suspense Fallback") : Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 15:
        return Ku(t.type, !1);
      case 11:
        return Ku(t.type.render, !1);
      case 1:
        return Ku(t.type, !0);
      case 31:
        return Se("Activity");
      case 30:
        return Se("ViewTransition");
      default:
        return "";
    }
  }
  function qo(t) {
    try {
      var l = "", e = null;
      do
        l += Sg(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ju = Object.prototype.hasOwnProperty, ku = y.unstable_scheduleCallback, Fu = y.unstable_cancelCallback, zg = y.unstable_shouldYield, Tg = y.unstable_requestPaint, rl = y.unstable_now, Eg = y.unstable_getCurrentPriorityLevel, Bo = y.unstable_ImmediatePriority, Yo = y.unstable_UserBlockingPriority, gi = y.unstable_NormalPriority, Ng = y.unstable_LowPriority, Go = y.unstable_IdlePriority, _g = y.log, Og = y.unstable_setDisableYieldValue, mn = null, sl = null;
  function ze(t) {
    if (typeof _g == "function" && Og(t), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(mn, t);
      } catch {
      }
  }
  var dl = Math.clz32 ? Math.clz32 : Cg, Ag = Math.log, wg = Math.LN2;
  function Cg(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ag(t) / wg | 0) | 0;
  }
  var mi = 256, pi = 262144, vi = 4194304;
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
  function pn(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Xo(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var a = 31 - dl(e), n = 1 << a;
        l |= t[a], e &= ~n;
      }
    return l;
  }
  function Mg(t, l) {
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
  function Qo() {
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
  function jg(t, l, e, a, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, f = t.expirationTimes, m = t.hiddenUpdates;
    for (e = u & ~e; 0 < e; ) {
      var x = 31 - dl(e), z = 1 << x;
      c[x] = 0, f[x] = -1;
      var d = m[x];
      if (d !== null)
        for (m[x] = null, x = 0; x < d.length; x++) {
          var v = d[x];
          v !== null && (v.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && Vo(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~l));
  }
  function Vo(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - dl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Zo(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - dl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function Lo(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : Wu(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function Wu(t) {
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
  function Ko() {
    var t = V.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ph(t.type));
  }
  function Jo(t, l) {
    var e = V.p;
    try {
      return V.p = t, l();
    } finally {
      V.p = e;
    }
  }
  var ne = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + ne, el = "__reactProps$" + ne, za = "__reactContainer$" + ne, ko = "__reactEvents$" + ne, Dg = "__reactListeners$" + ne, Rg = "__reactHandles$" + ne, Fo = "__reactResources$" + ne, yn = "__reactMarker$" + ne, xi = "__reactLoad$" + ne;
  function bi(t) {
    delete t[Zt], delete t[el], delete t[Dg], delete t[Rg];
  }
  function Ie(t) {
    var l;
    if (l = t[Zt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[za] || e[Zt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Dh(t); t !== null; ) {
            if (e = t[Zt]) return e;
            t = Dh(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Ta(t) {
    if (t = t[Zt] || t[za]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function xn(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(h(33));
  }
  function Ea(t) {
    var l = t[Fo];
    return l || (l = t[Fo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Yt(t) {
    t[yn] = !0;
  }
  function $o(t) {
    t[xi] = void 0;
  }
  var Wo = /* @__PURE__ */ new Set(), Io = {};
  function Pe(t, l) {
    Na(t, l), Na(t + "Capture", l);
  }
  function Na(t, l) {
    for (Io[t] = l, t = 0; t < l.length; t++)
      Wo.add(l[t]);
  }
  var Ug = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Po = {}, tr = {};
  function Hg(t) {
    return Ju.call(tr, t) ? !0 : Ju.call(Po, t) ? !1 : Ug.test(t) ? tr[t] = !0 : (Po[t] = !0, !1);
  }
  var ct = !1;
  function lr() {
    var t = ct;
    return ct = !1, t;
  }
  function Si(t, l, e) {
    if (Hg(l))
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
  function zi(t, l, e) {
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
  function ie(t, l, e, a) {
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
  function hl(t) {
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
  function er(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function qg(t, l, e) {
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
  function Pu(t) {
    if (!t._valueTracker) {
      var l = er(t) ? "checked" : "value";
      t._valueTracker = qg(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function ar(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = er(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Bg = /[\n"\\]/g;
  function Tl(t) {
    return t.replace(
      Bg,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(t, l, e, a, n, i, u, c) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), l != null ? u === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + hl(l)) : t.value !== "" + hl(l) && (t.value = "" + hl(l)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), l != null ? u === "number" && t.value == l ? lc(t, hl(t.value)) : lc(t, hl(l)) : e != null ? lc(t, hl(e)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + hl(c) : t.removeAttribute("name");
  }
  function nr(t, l, e, a, n, i, u, c) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), l != null || e != null) {
      if (!(i !== "submit" && i !== "reset" || l != null)) {
        Pu(t);
        return;
      }
      e = e != null ? "" + hl(e) : "", l = l != null ? "" + hl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), Pu(t);
  }
  function lc(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function _a(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + hl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function ir(t, l, e) {
    if (l != null && (l = "" + hl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + hl(e) : "";
  }
  function ur(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(h(92));
        if (ot(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = hl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), Pu(t);
  }
  function Oa(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cr(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Yg.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function fr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(h(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", ct = !0);
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && (cr(t, n, a), ct = !0);
    } else
      for (var i in l)
        l.hasOwnProperty(i) && cr(t, i, l[i]);
  }
  function ec(t) {
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
  var Gg = /* @__PURE__ */ new Map([
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
  ]), Xg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ti(t) {
    return Xg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Zl() {
  }
  var ac = null;
  function nc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Aa = null, wa = null;
  function or(t) {
    var l = Ta(t);
    if (l && (t = l.stateNode)) {
      var e = t[el] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (tc(
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
              'input[name="' + Tl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[el] || null;
                if (!n) throw Error(h(90));
                tc(
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
              a = e[l], a.form === t.form && ar(a);
          }
          break t;
        case "textarea":
          ir(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && _a(t, !!e.multiple, l, !1);
      }
    }
  }
  var ic = !1;
  function rr(t, l, e) {
    if (ic) return t(l, e);
    ic = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (ic = !1, (Aa !== null || wa !== null) && (Tu(), Aa && (l = Aa, t = wa, wa = Aa = null, or(l), t)))
        for (l = 0; l < t.length; l++) or(t[l]);
    }
  }
  function bn(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[el] || null;
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
        h(231, l, typeof e)
      );
    return e;
  }
  var ue = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uc = !1;
  if (ue)
    try {
      var Sn = {};
      Object.defineProperty(Sn, "passive", {
        get: function() {
          uc = !0;
        }
      }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
    } catch {
      uc = !1;
    }
  var Te = null, cc = null, Ei = null;
  function sr() {
    if (Ei) return Ei;
    var t, l = cc, e = l.length, a, n = "value" in Te ? Te.value : Te.textContent, i = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var u = e - t;
    for (a = 1; a <= u && l[e - a] === n[i - a]; a++) ;
    return Ei = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ni(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function _i() {
    return !0;
  }
  function dr() {
    return !1;
  }
  function It(t) {
    function l(e, a, n, i, u) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(i) : i[c]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _i : dr, this.isPropagationStopped = dr, this;
    }
    return W(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = _i);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = _i);
      },
      persist: function() {
      },
      isPersistent: _i
    }), l;
  }
  var Ee = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Oi = It(Ee), zn = W({}, Ee, { view: 0, detail: 0 }), Qg = It(zn), fc, oc, Tn, Ai = W({}, zn, {
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
      return "movementX" in t ? t.movementX : (t !== Tn && (Tn && t.type === "mousemove" ? (fc = t.screenX - Tn.screenX, oc = t.screenY - Tn.screenY) : oc = fc = 0, Tn = t), fc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : oc;
    }
  }), hr = It(Ai), Vg = W({}, Ai, { dataTransfer: 0 }), Zg = It(Vg), Lg = W({}, zn, { relatedTarget: 0 }), rc = It(Lg), Kg = W({}, Ee, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jg = It(Kg), kg = W({}, Ee, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Fg = It(kg), $g = W({}, Ee, { data: 0 }), gr = It($g), Wg = {
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
  }, Ig = {
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
  }, Pg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function tm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = Pg[t]) ? !!l[t] : !1;
  }
  function sc() {
    return tm;
  }
  var lm = W({}, zn, {
    key: function(t) {
      if (t.key) {
        var l = Wg[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ni(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ig[t.keyCode] || "Unidentified" : "";
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
      return t.type === "keypress" ? Ni(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ni(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), em = It(lm), am = W({}, Ai, {
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
  }), mr = It(am), nm = W({}, Ee, { submitter: 0 }), im = It(nm), um = W({}, zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), cm = It(um), fm = W({}, Ee, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), om = It(fm), rm = W({}, Ai, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sm = It(rm), dm = W({}, Ee, {
    newState: 0,
    oldState: 0,
    source: 0
  }), hm = It(dm), gm = [9, 13, 27, 32], dc = ue && "CompositionEvent" in window, En = null;
  ue && "documentMode" in document && (En = document.documentMode);
  var mm = ue && "TextEvent" in window && !En, pr = ue && (!dc || En && 8 < En && 11 >= En), vr = " ", yr = !1;
  function xr(t, l) {
    switch (t) {
      case "keyup":
        return gm.indexOf(l.keyCode) !== -1;
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
  function br(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ca = !1;
  function pm(t, l) {
    switch (t) {
      case "compositionend":
        return br(l);
      case "keypress":
        return l.which !== 32 ? null : (yr = !0, vr);
      case "textInput":
        return t = l.data, t === vr && yr ? null : t;
      default:
        return null;
    }
  }
  function vm(t, l) {
    if (Ca)
      return t === "compositionend" || !dc && xr(t, l) ? (t = sr(), Ei = cc = Te = null, Ca = !1, t) : null;
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
        return pr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var ym = {
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
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!ym[t.type] : l === "textarea";
  }
  function zr(t, l, e, a) {
    Aa ? wa ? wa.push(a) : wa = [a] : Aa = a, l = wu(l, "onChange"), 0 < l.length && (e = new Oi(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Nn = null, _n = null;
  function xm(t) {
    oh(t, 0);
  }
  function wi(t) {
    var l = xn(t);
    if (ar(l)) return t;
  }
  function Tr(t, l) {
    if (t === "change") return l;
  }
  var Er = !1;
  if (ue) {
    var hc;
    if (ue) {
      var gc = "oninput" in document;
      if (!gc) {
        var Nr = document.createElement("div");
        Nr.setAttribute("oninput", "return;"), gc = typeof Nr.oninput == "function";
      }
      hc = gc;
    } else hc = !1;
    Er = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function _r() {
    Nn && (Nn.detachEvent("onpropertychange", Or), _n = Nn = null);
  }
  function Or(t) {
    if (t.propertyName === "value" && wi(_n)) {
      var l = [];
      zr(
        l,
        _n,
        t,
        nc(t)
      ), rr(xm, l);
    }
  }
  function bm(t, l, e) {
    t === "focusin" ? (_r(), Nn = l, _n = e, Nn.attachEvent("onpropertychange", Or)) : t === "focusout" && _r();
  }
  function Sm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return wi(_n);
  }
  function zm(t, l) {
    if (t === "click") return wi(l);
  }
  function Tm(t, l) {
    if (t === "input" || t === "change")
      return wi(l);
  }
  function Em(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var gl = typeof Object.is == "function" ? Object.is : Em;
  function On(t, l) {
    if (gl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Ju.call(l, n) || !gl(t[n], l[n]))
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
  function Ar(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function wr(t, l) {
    var e = Ar(t);
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
      e = Ar(e);
    }
  }
  function Cr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Cr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Mr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = mc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = mc(t.document);
    }
    return l;
  }
  function pc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Nm = ue && "documentMode" in document && 11 >= document.documentMode, Ma = null, vc = null, An = null, yc = !1;
  function jr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    yc || Ma == null || Ma !== mc(a) || (a = Ma, "selectionStart" in a && pc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), An && On(An, a) || (An = a, a = wu(vc, "onSelect"), 0 < a.length && (l = new Oi(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = Ma)));
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
  }, xc = {}, Dr = {};
  ue && (Dr = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function la(t) {
    if (xc[t]) return xc[t];
    if (!ja[t]) return t;
    var l = ja[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Dr)
        return xc[t] = l[e];
    return t;
  }
  var Rr = la("animationend"), Ur = la("animationiteration"), Hr = la("animationstart"), _m = la("transitionrun"), Om = la("transitionstart"), Am = la("transitioncancel"), qr = la("transitionend"), Br = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bc.push("scrollEnd");
  function Rl(t, l) {
    Br.set(t, l), Pe(l, [t]);
  }
  var wm = 0;
  function ce(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = Bl.identifierPrefix;
    var e = wm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function Yr(t) {
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
  function fe(t, l) {
    return t = Yr(t), l = Yr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Ci = typeof reportError == "function" ? reportError : function(t) {
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
  }, El = [], Da = 0, Sc = 0;
  function Mi() {
    for (var t = Da, l = Sc = Da = 0; l < t; ) {
      var e = El[l];
      El[l++] = null;
      var a = El[l];
      El[l++] = null;
      var n = El[l];
      El[l++] = null;
      var i = El[l];
      if (El[l++] = null, a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), a.pending = n;
      }
      i !== 0 && Gr(e, n, i);
    }
  }
  function ji(t, l, e, a) {
    El[Da++] = t, El[Da++] = l, El[Da++] = e, El[Da++] = a, Sc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function zc(t, l, e, a) {
    return ji(t, l, e, a), Di(t);
  }
  function ea(t, l) {
    return ji(t, null, null, l), Di(t);
  }
  function Gr(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= e, a = i.alternate, a !== null && (a.childLanes |= e), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && l !== null && (n = 31 - dl(e), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), i) : null;
  }
  function Di(t) {
    if (50 < $n)
      throw $n = 0, zu = null, Error(h(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ra = {};
  function Cm(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function al(t, l, e, a) {
    return new Cm(t, l, e, a);
  }
  function Tc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function oe(t, l) {
    var e = t.alternate;
    return e === null ? (e = al(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Xr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Ri(t, l, e, a, n, i) {
    var u = 0;
    if (a = t, typeof a == "function") Tc(a) && (u = 1);
    else if (typeof a == "string")
      u = np(
        t,
        e,
        Vl.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case Dl:
          return t = al(31, e, l, n), t.elementType = Dl, t.lanes = i, t;
        case zl:
          return aa(e.children, n, i, l);
        case ol:
          u = 8, n |= 24;
          break;
        case xe:
          return t = al(12, e, l, n | 2), t.elementType = xe, t.lanes = i, t;
        case X:
          return t = al(13, e, l, n), t.elementType = X, t.lanes = i, t;
        case Q:
          return t = al(19, e, l, n), t.elementType = Q, t.lanes = i, t;
        case ee:
        case s:
          return t = n | 32, t = al(30, e, l, t), t.elementType = s, t.lanes = i, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Bt:
                u = 10;
                break t;
              case Fe:
                u = 9;
                break t;
              case A:
                u = 11;
                break t;
              case xt:
                u = 14;
                break t;
              case dt:
                u = 16, a = null;
                break t;
            }
          u = 29, e = Error(
            h(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = al(u, e, l, n), l.elementType = t, l.type = a, l.lanes = i, l;
  }
  function aa(t, l, e, a) {
    return t = al(7, t, a, l), t.lanes = e, t;
  }
  function Ec(t, l, e) {
    return t = al(6, t, null, l), t.lanes = e, t;
  }
  function Qr(t) {
    var l = al(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Nc(t, l, e) {
    return l = al(
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
  var Vr = /* @__PURE__ */ new WeakMap();
  function Nl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Vr.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: qo(l)
      }, Vr.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: qo(l)
    };
  }
  var Ua = [], Ha = 0, Ui = null, wn = 0, _l = [], Ol = 0, Ne = null, Ll = 1, Kl = "";
  function re(t, l) {
    Ua[Ha++] = wn, Ua[Ha++] = Ui, Ui = t, wn = l;
  }
  function Zr(t, l, e) {
    _l[Ol++] = Ll, _l[Ol++] = Kl, _l[Ol++] = Ne, Ne = t;
    var a = Ll;
    t = Kl;
    var n = 32 - dl(a) - 1;
    a &= ~(1 << n), e += 1;
    var i = 32 - dl(l) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, Ll = 1 << 32 - dl(l) + n | e << n | a, Kl = i + t;
    } else
      Ll = 1 << i | e << n | a, Kl = t;
  }
  function Hi(t) {
    t.return !== null && (re(t, 1), Zr(t, 1, 0));
  }
  function _c(t) {
    for (; t === Ui; )
      Ui = Ua[--Ha], Ua[Ha] = null, wn = Ua[--Ha], Ua[Ha] = null;
    for (; t === Ne; )
      Ne = _l[--Ol], _l[Ol] = null, Kl = _l[--Ol], _l[Ol] = null, Ll = _l[--Ol], _l[Ol] = null;
  }
  function Lr(t, l) {
    _l[Ol++] = Ll, _l[Ol++] = Kl, _l[Ol++] = Ne, Ll = l.id, Kl = l.overflow, Ne = t;
  }
  var Gt = null, Tt = null, $ = !1, _e = null, Al = !1, Oc = Error(h(519));
  function Oe(t) {
    var l = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Cn(Nl(l, t)), Oc;
  }
  function Kr(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Zt] = t, l[el] = a, e) {
      case "dialog":
        P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < In.length; e++)
          P(In[e], l);
        break;
      case "source":
        P("error", l);
        break;
      case "img":
      case "image":
      case "link":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "input":
        P("invalid", l), nr(
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
        P("invalid", l);
        break;
      case "textarea":
        P("invalid", l), ur(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || hh(l.textContent, e) ? (a.popover != null && (P("beforetoggle", l), P("toggle", l)), a.onScroll != null && P("scroll", l), a.onScrollEnd != null && P("scrollend", l), a.onClick != null && (l.onclick = Zl), l = !0) : l = !1, l || Oe(t, !0);
  }
  function qi(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          Al = !1;
          return;
        case 27:
        case 3:
          Al = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function qa(t) {
    if (t !== Gt) return !1;
    if (!$) return qi(t), $ = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || no(t.type, t.memoizedProps)), e = !e), e && Tt && Oe(t), qi(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(317));
      Tt = jh(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(317));
      Tt = jh(t);
    } else
      l === 27 ? (l = Tt, Ve(t.type) ? (t = go, go = null, Tt = t) : Tt = l) : Tt = Gt ? Cl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function na() {
    Tt = Gt = null, $ = !1;
  }
  function Ac() {
    var t = _e;
    return t !== null && (ul === null ? ul = t : ul.push.apply(
      ul,
      t
    ), _e = null), t;
  }
  function Cn(t) {
    _e === null ? _e = [t] : _e.push(t);
  }
  var wc = Ql(null), ia = null, se = null;
  function Ae(t, l, e) {
    zt(wc, l._currentValue), l._currentValue = e;
  }
  function de(t) {
    t._currentValue = wc.current, Vt(wc);
  }
  function Bi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Cc(t, l, e, a) {
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
              i.lanes |= e, c = i.alternate, c !== null && (c.lanes |= e), Bi(
                i.return,
                e,
                t
              ), a || (u = null);
              break t;
            }
          i = c.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(h(341));
        u.lanes |= e, i = u.alternate, i !== null && (i.lanes |= e), Bi(u, e, t), u = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= e, u = n.alternate, u !== null && (u.lanes |= e), Bi(
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
        if (u === null) throw Error(h(387));
        if (u = u.memoizedProps, u !== null) {
          var c = n.type;
          gl(n.pendingProps.value, u.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === si.current) {
        if (u = n.alternate, u === null) throw Error(h(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(on) : t = [on]);
      }
      n = n.return;
    }
    return t !== null && Cc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144, t !== null;
  }
  function Yi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!gl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ca(t) {
    ia = t, se = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Lt(t) {
    return Jr(ia, t);
  }
  function Gi(t, l) {
    return ia === null && ca(t), Jr(t, l);
  }
  function Jr(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, se === null) {
      if (t === null) throw Error(h(308));
      se = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else se = se.next = l;
    return e;
  }
  var Mm = typeof AbortController < "u" ? AbortController : function() {
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
  }, jm = y.unstable_scheduleCallback, Dm = y.unstable_NormalPriority, Mt = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mc() {
    return {
      controller: new Mm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mn(t) {
    t.refCount--, t.refCount === 0 && jm(Dm, function() {
      t.controller.abort();
    });
  }
  function kr(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var a = l[t];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var jn = null;
  function Rm(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Dn = null, jc = 0, fa = 0, Ba = null;
  function Um(t, l) {
    if (Dn === null) {
      var e = Dn = [];
      jc = 0, fa = Ff(), Ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return jc++, l.then(Fr, Fr), l;
  }
  function Fr() {
    if (--jc === 0 && (jn = null, Dn !== null)) {
      Ba !== null && (Ba.status = "fulfilled");
      var t = Dn;
      Dn = null, fa = 0, Ba = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Hm(t, l) {
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
  var $r = j.S;
  j.S = function(t, l) {
    if (Qd = rl(), typeof l == "object" && l !== null && typeof l.then == "function" && Um(t, l), jn !== null)
      for (var e = en; e !== null; )
        kr(e, jn), e = e.next;
    if (e = t.types, e !== null) {
      for (var a = en; a !== null; )
        kr(a, e), a = a.next;
      if (fa !== 0) {
        a = jn, a === null && (a = jn = []);
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    $r !== null && $r(t, l);
  };
  var oa = Ql(null);
  function Dc() {
    var t = oa.current;
    return t !== null ? t : bt.pooledCache;
  }
  function Xi(t, l) {
    l === null ? zt(oa, oa.current) : zt(oa, l.pool);
  }
  function Wr() {
    var t = Dc();
    return t === null ? null : { parent: Mt._currentValue, pool: t };
  }
  var Ya = Error(h(460)), Rc = Error(h(474)), Qi = Error(h(542)), Vi = { then: function() {
  } };
  function Ir(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Pr(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Zl, Zl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, ls(t), t === void 0 && !("reason" in l) ? Error(h(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Zl, Zl);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(h(482));
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
            throw t = l.reason, ls(t), t;
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
  function ts() {
    if (sa === null) throw Error(h(459));
    var t = sa;
    return sa = null, t;
  }
  function ls(t) {
    if (t === Ya || t === Qi)
      throw Error(h(483));
  }
  var Ga = null, Rn = 0;
  function Zi(t) {
    var l = Rn;
    return Rn += 1, Ga === null && (Ga = []), Pr(Ga, t, l);
  }
  function we(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Li(t, l) {
    throw l.$$typeof === ft ? Error(h(525)) : (t = Object.prototype.toString.call(l), Error(
      h(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function es(t) {
    function l(g, r) {
      if (t) {
        var p = g.deletions;
        p === null ? (g.deletions = [r], g.flags |= 16) : p.push(r);
      }
    }
    function e(g, r) {
      if (!t) return null;
      for (; r !== null; )
        l(g, r), r = r.sibling;
      return null;
    }
    function a(g) {
      for (var r = /* @__PURE__ */ new Map(); g !== null; )
        g.key === null ? r.set(g.index, g) : r.set(g.key, g), g = g.sibling;
      return r;
    }
    function n(g, r) {
      return g = oe(g, r), g.index = 0, g.sibling = null, g;
    }
    function i(g, r, p) {
      return g.index = p, t ? (p = g.alternate, p !== null ? (p = p.index, p < r ? (g.flags |= 2, r) : p) : (g.flags |= 134217730, r)) : (g.flags |= 1048576, r);
    }
    function u(g) {
      return t && g.alternate === null && (g.flags |= 134217730), g;
    }
    function c(g, r, p, S) {
      return r === null || r.tag !== 6 ? (r = Ec(p, g.mode, S), r.return = g, r) : (r = n(r, p), r.return = g, r);
    }
    function f(g, r, p, S) {
      var C = p.type;
      return C === zl ? (g = x(
        g,
        r,
        p.props.children,
        S,
        p.key
      ), we(g, p), g) : r !== null && (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === dt && ra(C) === r.type) ? (r = n(r, p.props), we(r, p), r.return = g, r) : (r = Ri(
        p.type,
        p.key,
        p.props,
        null,
        g.mode,
        S
      ), we(r, p), r.return = g, r);
    }
    function m(g, r, p, S) {
      return r === null || r.tag !== 4 || r.stateNode.containerInfo !== p.containerInfo || r.stateNode.implementation !== p.implementation ? (r = Nc(p, g.mode, S), r.return = g, r) : (r = n(r, p.children || []), r.return = g, r);
    }
    function x(g, r, p, S, C) {
      return r === null || r.tag !== 7 ? (r = aa(
        p,
        g.mode,
        S,
        C
      ), r.return = g, r) : (r = n(r, p), r.return = g, r);
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
          case Xl:
            return p = Ri(
              r.type,
              r.key,
              r.props,
              null,
              g.mode,
              p
            ), we(p, r), p.return = g, p;
          case Sl:
            return r = Nc(
              r,
              g.mode,
              p
            ), r.return = g, r;
          case dt:
            return r = ra(r), z(g, r, p);
        }
        if (ot(r) || U(r))
          return r = aa(
            r,
            g.mode,
            p,
            null
          ), r.return = g, r;
        if (typeof r.then == "function")
          return z(g, Zi(r), p);
        if (r.$$typeof === Bt)
          return z(
            g,
            Gi(g, r),
            p
          );
        Li(g, r);
      }
      return null;
    }
    function d(g, r, p, S) {
      var C = r !== null ? r.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return C !== null ? null : c(g, r, "" + p, S);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Xl:
            return p.key === C ? f(g, r, p, S) : null;
          case Sl:
            return p.key === C ? m(g, r, p, S) : null;
          case dt:
            return p = ra(p), d(g, r, p, S);
        }
        if (ot(p) || U(p))
          return C !== null ? null : x(g, r, p, S, null);
        if (typeof p.then == "function")
          return d(
            g,
            r,
            Zi(p),
            S
          );
        if (p.$$typeof === Bt)
          return d(
            g,
            r,
            Gi(g, p),
            S
          );
        Li(g, p);
      }
      return null;
    }
    function v(g, r, p, S, C) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return g = g.get(p) || null, c(r, g, "" + S, C);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Xl:
            return g = g.get(
              S.key === null ? p : S.key
            ) || null, f(r, g, S, C);
          case Sl:
            return g = g.get(
              S.key === null ? p : S.key
            ) || null, m(r, g, S, C);
          case dt:
            return S = ra(S), v(
              g,
              r,
              p,
              S,
              C
            );
        }
        if (ot(S) || U(S))
          return g = g.get(p) || null, x(r, g, S, C, null);
        if (typeof S.then == "function")
          return v(
            g,
            r,
            p,
            Zi(S),
            C
          );
        if (S.$$typeof === Bt)
          return v(
            g,
            r,
            p,
            Gi(r, S),
            C
          );
        Li(r, S);
      }
      return null;
    }
    function _(g, r, p, S) {
      for (var C = null, lt = null, D = r, Y = r = 0, Rt = null; D !== null && Y < p.length; Y++) {
        D.index > Y ? (Rt = D, D = null) : Rt = D.sibling;
        var et = d(
          g,
          D,
          p[Y],
          S
        );
        if (et === null) {
          D === null && (D = Rt);
          break;
        }
        t && D && et.alternate === null && l(g, D), r = i(et, r, Y), lt === null ? C = et : lt.sibling = et, lt = et, D = Rt;
      }
      if (Y === p.length)
        return e(g, D), $ && re(g, Y), C;
      if (D === null) {
        for (; Y < p.length; Y++)
          D = z(g, p[Y], S), D !== null && (r = i(
            D,
            r,
            Y
          ), lt === null ? C = D : lt.sibling = D, lt = D);
        return $ && re(g, Y), C;
      }
      for (D = a(D); Y < p.length; Y++)
        Rt = v(
          D,
          g,
          Y,
          p[Y],
          S
        ), Rt !== null && (t && (et = Rt.alternate, et !== null && D.delete(et.key === null ? Y : et.key)), r = i(
          Rt,
          r,
          Y
        ), lt === null ? C = Rt : lt.sibling = Rt, lt = Rt);
      return t && D.forEach(function(ke) {
        return l(g, ke);
      }), $ && re(g, Y), C;
    }
    function M(g, r, p, S) {
      if (p == null) throw Error(h(151));
      for (var C = null, lt = null, D = r, Y = r = 0, Rt = null, et = p.next(); D !== null && !et.done; Y++, et = p.next()) {
        D.index > Y ? (Rt = D, D = null) : Rt = D.sibling;
        var ke = d(g, D, et.value, S);
        if (ke === null) {
          D === null && (D = Rt);
          break;
        }
        t && D && ke.alternate === null && l(g, D), r = i(ke, r, Y), lt === null ? C = ke : lt.sibling = ke, lt = ke, D = Rt;
      }
      if (et.done)
        return e(g, D), $ && re(g, Y), C;
      if (D === null) {
        for (; !et.done; Y++, et = p.next())
          et = z(g, et.value, S), et !== null && (r = i(et, r, Y), lt === null ? C = et : lt.sibling = et, lt = et);
        return $ && re(g, Y), C;
      }
      for (D = a(D); !et.done; Y++, et = p.next())
        et = v(D, g, Y, et.value, S), et !== null && (t && (Rt = et.alternate, Rt !== null && D.delete(
          Rt.key === null ? Y : Rt.key
        )), r = i(et, r, Y), lt === null ? C = et : lt.sibling = et, lt = et);
      return t && D.forEach(function(pp) {
        return l(g, pp);
      }), $ && re(g, Y), C;
    }
    function k(g, r, p, S) {
      if (typeof p == "object" && p !== null && p.type === zl && p.key === null && p.props.ref === void 0 && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Xl:
            t: {
              for (var C = p.key; r !== null; ) {
                if (r.key === C) {
                  if (C = p.type, C === zl) {
                    if (r.tag === 7) {
                      e(
                        g,
                        r.sibling
                      ), S = n(
                        r,
                        p.props.children
                      ), we(S, p), S.return = g, g = S;
                      break t;
                    }
                  } else if (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === dt && ra(C) === r.type) {
                    e(
                      g,
                      r.sibling
                    ), S = n(r, p.props), we(S, p), S.return = g, g = S;
                    break t;
                  }
                  e(g, r);
                  break;
                } else l(g, r);
                r = r.sibling;
              }
              p.type === zl ? (S = aa(
                p.props.children,
                g.mode,
                S,
                p.key
              ), we(S, p), S.return = g, g = S) : (S = Ri(
                p.type,
                p.key,
                p.props,
                null,
                g.mode,
                S
              ), we(S, p), S.return = g, g = S);
            }
            return u(g);
          case Sl:
            t: {
              for (C = p.key; r !== null; ) {
                if (r.key === C)
                  if (r.tag === 4 && r.stateNode.containerInfo === p.containerInfo && r.stateNode.implementation === p.implementation) {
                    e(
                      g,
                      r.sibling
                    ), S = n(r, p.children || []), S.return = g, g = S;
                    break t;
                  } else {
                    e(g, r);
                    break;
                  }
                else l(g, r);
                r = r.sibling;
              }
              S = Nc(p, g.mode, S), S.return = g, g = S;
            }
            return u(g);
          case dt:
            return p = ra(p), k(
              g,
              r,
              p,
              S
            );
        }
        if (ot(p))
          return _(
            g,
            r,
            p,
            S
          );
        if (U(p)) {
          if (C = U(p), typeof C != "function") throw Error(h(150));
          return p = C.call(p), M(
            g,
            r,
            p,
            S
          );
        }
        if (typeof p.then == "function")
          return k(
            g,
            r,
            Zi(p),
            S
          );
        if (p.$$typeof === Bt)
          return k(
            g,
            r,
            Gi(g, p),
            S
          );
        Li(g, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, r !== null && r.tag === 6 ? (e(g, r.sibling), S = n(r, p), S.return = g, g = S) : (e(g, r), S = Ec(p, g.mode, S), S.return = g, g = S), u(g)) : e(g, r);
    }
    return function(g, r, p, S) {
      try {
        Rn = 0;
        var C = k(
          g,
          r,
          p,
          S
        );
        return Ga = null, C;
      } catch (D) {
        if (D === Ya || D === Qi) throw D;
        var lt = al(29, D, null, g.mode);
        return lt.lanes = S, lt.return = g, lt;
      } finally {
      }
    };
  }
  var da = es(!0), as = es(!1), Ce = !1;
  function Uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hc(t, l) {
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
  function je(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (rt & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = Di(t), Gr(t, null, e), l;
    }
    return ji(t, a, l, e), Di(t);
  }
  function Un(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Zo(t, e);
    }
  }
  function qc(t, l) {
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
  var Bc = !1;
  function Hn() {
    if (Bc) {
      var t = Ba;
      if (t !== null) throw t;
    }
  }
  function qn(t, l, e, a) {
    Bc = !1;
    var n = t.updateQueue;
    Ce = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var f = c, m = f.next;
      f.next = null, u === null ? i = m : u.next = m, u = f;
      var x = t.alternate;
      x !== null && (x = x.updateQueue, c = x.lastBaseUpdate, c !== u && (c === null ? x.firstBaseUpdate = m : c.next = m, x.lastBaseUpdate = f));
    }
    if (i !== null) {
      var z = n.baseState;
      u = 0, x = m = f = null, c = i;
      do {
        var d = c.lane & -536870913, v = d !== c.lane;
        if (v ? (tt & d) === d : (a & d) === d) {
          d !== 0 && d === fa && (Bc = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var _ = t, M = c;
            d = l;
            var k = e;
            switch (M.tag) {
              case 1:
                if (_ = M.payload, typeof _ == "function") {
                  z = _.call(k, z, d);
                  break t;
                }
                z = _;
                break t;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = M.payload, d = typeof _ == "function" ? _.call(k, z, d) : _, d == null) break t;
                z = W({}, z, d);
                break t;
              case 2:
                Ce = !0;
            }
          }
          d = c.callback, d !== null && (t.flags |= 64, v && (t.flags |= 8192), v = n.callbacks, v === null ? n.callbacks = [d] : v.push(d));
        } else
          v = {
            lane: d,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, x === null ? (m = x = v, f = z) : x = x.next = v, u |= d;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          v = c, c = v.next, v.next = null, n.lastBaseUpdate = v, n.shared.pending = null;
        }
      } while (!0);
      x === null && (f = z), n.baseState = f, n.firstBaseUpdate = m, n.lastBaseUpdate = x, i === null && (n.shared.lanes = 0), Ye |= u, t.lanes = u, t.memoizedState = z;
    }
  }
  function ns(t, l) {
    if (typeof t != "function")
      throw Error(h(191, t));
    t.call(l);
  }
  function is(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        ns(e[t], l);
  }
  var De = Ql(null), Ki = Ql(0);
  function us(t, l) {
    t = ve, zt(Ki, t), zt(De, l), ve = t | l.baseLanes;
  }
  function Yc() {
    zt(Ki, ve), zt(De, De.current);
  }
  function Gc() {
    ve = Ki.current, Vt(De), Vt(Ki);
  }
  var Kt = Ql(null), Wt = null;
  function Re(t) {
    var l = t.alternate;
    zt(Jt, Jt.current & 1), zt(Kt, t), Wt === null && (l === null || De.current !== null || l.memoizedState !== null) && (Wt = t);
  }
  function Xc(t) {
    zt(Jt, Jt.current), zt(Kt, t), Wt === null && (Wt = t);
  }
  function cs(t) {
    t.tag === 22 ? (zt(Jt, Jt.current), zt(Kt, t), Wt === null && (Wt = t)) : Ue();
  }
  function Ue() {
    zt(Jt, Jt.current), zt(Kt, Kt.current);
  }
  function ml(t) {
    Vt(Kt), Wt === t && (Wt = null), Vt(Jt);
  }
  var Jt = Ql(0);
  function Bn(t, l) {
    zt(Kt, Kt.current), zt(Jt, l);
  }
  function Qc(t) {
    Vt(Jt), Vt(Kt), Wt === t && (Wt = null);
  }
  function Ji(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || so(e) || ho(e)))
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
  var he = 0, J = null, yt = null, jt = null, ki = !1, Xa = !1, ha = !1, Fi = 0, Yn = 0, Qa = null, qm = 0;
  function At() {
    throw Error(h(321));
  }
  function Vc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!gl(t[e], l[e])) return !1;
    return !0;
  }
  function Zc(t, l, e, a, n, i) {
    return he = i, J = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = t === null || t.memoizedState === null ? Zs : Ls, ha = !1, i = e(a, n), ha = !1, Xa && (i = os(
      l,
      e,
      a,
      n
    )), fs(t), i;
  }
  function fs(t) {
    j.H = eu;
    var l = yt !== null && yt.next !== null;
    if (he = 0, jt = yt = J = null, ki = !1, Yn = 0, Qa = null, l) throw Error(h(300));
    t === null || Dt || (t = t.dependencies, t !== null && Yi(t) && (Dt = !0));
  }
  function os(t, l, e, a) {
    J = t;
    var n = 0;
    do {
      if (Xa && (Qa = null), Yn = 0, Xa = !1, 25 <= n) throw Error(h(301));
      if (n += 1, jt = yt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = Lm, i = l(e, a);
    } while (Xa);
    return i;
  }
  function Bm() {
    var t = j.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Gn(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (J.flags |= 1024), l;
  }
  function Lc() {
    var t = Fi !== 0;
    return Fi = 0, t;
  }
  function Kc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function Jc(t) {
    if (ki) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      ki = !1;
    }
    he = 0, jt = yt = J = null, Xa = !1, Yn = Fi = 0, Qa = null;
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return jt === null ? J.memoizedState = jt = t : jt = jt.next = t, jt;
  }
  function Ct() {
    if (yt === null) {
      var t = J.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var l = jt === null ? J.memoizedState : jt.next;
    if (l !== null)
      jt = l, yt = t;
    else {
      if (t === null)
        throw J.alternate === null ? Error(h(467)) : Error(h(310));
      yt = t, t = {
        memoizedState: yt.memoizedState,
        baseState: yt.baseState,
        baseQueue: yt.baseQueue,
        queue: yt.queue,
        next: null
      }, jt === null ? J.memoizedState = jt = t : jt = jt.next = t;
    }
    return jt;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gn(t) {
    var l = Yn;
    return Yn += 1, Qa === null && (Qa = []), t = Pr(Qa, t, l), l = J, (jt === null ? l.memoizedState : jt.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? Zs : Ls), t;
  }
  function Wi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Gn(t);
      if (t.$$typeof === N) return;
      if (t.$$typeof === Bt) return Lt(t);
    }
    throw Error(h(438, String(t)));
  }
  function kc(t) {
    var l = null, e = J.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = J.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = $i(), J.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = $e;
    return l.index++, e;
  }
  function ge(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Ii(t) {
    var l = Ct();
    return Fc(l, yt, t);
  }
  function Fc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(h(311));
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
      var c = u = null, f = null, m = l, x = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (tt & z) === z : (he & z) === z) {
          var d = m.revertLane;
          if (d === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === fa && (x = !0);
          else if ((he & d) === d) {
            m = m.next, d === fa && (x = !0);
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
            }, f === null ? (c = f = z, u = i) : f = f.next = z, J.lanes |= d, Ye |= d;
          z = m.action, ha && e(i, z), i = m.hasEagerState ? m.eagerState : e(i, z);
        } else
          d = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, f === null ? (c = f = d, u = i) : f = f.next = d, J.lanes |= z, Ye |= z;
        m = m.next;
      } while (m !== null && m !== l);
      if (f === null ? u = i : f.next = c, !gl(i, t.memoizedState) && (Dt = !0, x && (e = Ba, e !== null)))
        throw e;
      t.memoizedState = i, t.baseState = u, t.baseQueue = f, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function $c(t) {
    var l = Ct(), e = l.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, i = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      gl(i, l.memoizedState) || (Dt = !0), l.memoizedState = i, l.baseQueue === null && (l.baseState = i), e.lastRenderedState = i;
    }
    return [i, a];
  }
  function rs(t, l, e) {
    var a = J, n = Ct(), i = $;
    if (i) {
      if (e === void 0) throw Error(h(407));
      e = e();
    } else e = l();
    var u = !gl(
      (yt || n).memoizedState,
      e
    );
    if (u && (n.memoizedState = e, Dt = !0), n = n.queue, Pc(hs.bind(null, a, n, t), [
      t
    ]), t = n.getSnapshot !== l || u || jt !== null && (jt.memoizedState.tag & 1) !== 0, Va(
      t ? 9 : 8,
      { destroy: void 0 },
      ds.bind(null, a, n, e, l),
      null
    ), t) {
      if (a.flags |= 2048, bt === null) throw Error(h(349));
      i || (he & 127) !== 0 || ss(a, l, e);
    }
    return e;
  }
  function ss(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = J.updateQueue, l === null ? (l = $i(), J.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function ds(t, l, e, a) {
    l.value = e, l.getSnapshot = a, gs(l) && ms(t);
  }
  function hs(t, l, e) {
    return e(function() {
      gs(l) && ms(t);
    });
  }
  function gs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !gl(t, e);
    } catch {
      return !0;
    }
  }
  function ms(t) {
    var l = ea(t, 2);
    l !== null && cl(l, t, 2);
  }
  function Wc(t) {
    var l = Pt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), ha) {
        ze(!0);
        try {
          e();
        } finally {
          ze(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ge,
      lastRenderedState: t
    }, l;
  }
  function ps(t, l, e, a) {
    return t.baseState = e, Fc(
      t,
      yt,
      typeof a == "function" ? a : ge
    );
  }
  function Ym(t, l, e, a, n) {
    if (lu(t)) throw Error(h(485));
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
      j.T !== null ? e(!0) : i.isTransition = !1, a(i), e = l.pending, e === null ? (i.next = l.pending = i, vs(l, i)) : (i.next = e.next, l.pending = e.next = i);
    }
  }
  function vs(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var i = j.T, u = {};
      u.types = i !== null ? i.types : null, j.T = u;
      try {
        var c = e(n, a), f = j.S;
        f !== null && f(u, c), ys(t, l, c);
      } catch (m) {
        Ic(t, l, m);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), j.T = i;
      }
    } else
      try {
        i = e(n, a), ys(t, l, i);
      } catch (m) {
        Ic(t, l, m);
      }
  }
  function ys(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        xs(t, l, a);
      },
      function(a) {
        return Ic(t, l, a);
      }
    ) : xs(t, l, e);
  }
  function xs(t, l, e) {
    l.status = "fulfilled", l.value = e, bs(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, vs(t, e)));
  }
  function Ic(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, bs(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function bs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Ss(t, l) {
    return l;
  }
  function zs(t, l) {
    if ($) {
      var e = bt.formState;
      if (e !== null) {
        t: {
          var a = J;
          if ($) {
            if (Tt) {
              l: {
                for (var n = Tt, i = Al; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break l;
                  }
                  if (n = Cl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Tt = Cl(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Oe(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = Pt(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ss,
      lastRenderedState: l
    }, e.queue = a, e = Xs.bind(
      null,
      J,
      a
    ), a.dispatch = e, a = Wc(!1), i = nf.bind(
      null,
      J,
      !1,
      a.queue
    ), a = Pt(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = Ym.bind(
      null,
      J,
      n,
      i,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function Ts(t) {
    var l = Ct();
    return Es(l, yt, t);
  }
  function Es(t, l, e) {
    if (l = Fc(
      t,
      l,
      Ss
    )[0], t = Ii(ge)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = Gn(l);
      } catch (u) {
        throw u === Ya ? Qi : u;
      }
    else a = l;
    l = Ct();
    var n = l.queue, i = n.dispatch;
    return e !== l.memoizedState && (J.flags |= 2048, Va(
      9,
      { destroy: void 0 },
      Gm.bind(null, n, e),
      null
    )), [a, i, t];
  }
  function Gm(t, l) {
    t.action = l;
  }
  function Ns(t) {
    var l = Ct(), e = yt;
    if (e !== null)
      return Es(l, e, t);
    Ct(), l = l.memoizedState, e = Ct();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Va(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = J.updateQueue, l === null && (l = $i(), J.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function _s() {
    return Ct().memoizedState;
  }
  function Pi(t, l, e, a) {
    var n = Pt();
    J.flags |= t, n.memoizedState = Va(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function tu(t, l, e, a) {
    var n = Ct();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    yt !== null && a !== null && Vc(a, yt.memoizedState.deps) ? n.memoizedState = Va(l, i, e, a) : (J.flags |= t, n.memoizedState = Va(
      1 | l,
      i,
      e,
      a
    ));
  }
  function Os(t, l) {
    Pi(8390656, 8, t, l);
  }
  function Pc(t, l) {
    tu(2048, 8, t, l);
  }
  function Xm(t) {
    J.flags |= 4;
    var l = J.updateQueue;
    if (l === null)
      l = $i(), J.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function As(t) {
    var l = Ct().memoizedState;
    return Xm({ ref: l, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(h(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ws(t, l) {
    return tu(4, 2, t, l);
  }
  function Cs(t, l) {
    return tu(4, 4, t, l);
  }
  function Ms(t, l) {
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
  function js(t, l, e) {
    e = e != null ? e.concat([t]) : null, tu(4, 4, Ms.bind(null, l, t), e);
  }
  function tf() {
  }
  function Ds(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Vc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Rs(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Vc(l, a[1]))
      return a[0];
    if (a = t(), ha) {
      ze(!0);
      try {
        t();
      } finally {
        ze(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function lf(t, l, e) {
    return e === void 0 || (he & 1073741824) !== 0 && (tt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Zd(), J.lanes |= t, Ye |= t, e);
  }
  function Us(t, l, e, a) {
    return gl(e, l) ? e : De.current !== null ? (t = lf(t, e, a), gl(t, l) || (Dt = !0), t) : (he & 106) === 0 || (he & 1073741824) !== 0 && (tt & 261930) === 0 ? (Dt = !0, t.memoizedState = e) : (t = Zd(), J.lanes |= t, Ye |= t, l);
  }
  function Hs(t, l, e, a, n) {
    var i = V.p;
    V.p = i !== 0 && 8 > i ? i : 8;
    var u = j.T, c = {};
    c.types = u !== null ? u.types : null, j.T = c, nf(t, !1, l, e);
    try {
      var f = n(), m = j.S;
      if (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var x = Hm(
          f,
          a
        );
        Xn(
          t,
          l,
          x,
          xl(t)
        );
      } else
        Xn(
          t,
          l,
          a,
          xl(t)
        );
    } catch (z) {
      Xn(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        xl()
      );
    } finally {
      V.p = i, u !== null && c.types !== null && (u.types = c.types), j.T = u;
    }
  }
  function Qm() {
  }
  function ef(t, l, e, a) {
    if (t.tag !== 5) throw Error(h(476));
    var n = qs(t).queue;
    Hs(
      t,
      n,
      l,
      ae,
      e === null ? Qm : function() {
        return Bs(t), e(a);
      }
    );
  }
  function qs(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ge,
        lastRenderedState: ae
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
        lastRenderedReducer: ge,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Bs(t) {
    var l = qs(t);
    l.next === null && (l = t.alternate.memoizedState), Xn(
      t,
      l.next.queue,
      {},
      xl()
    );
  }
  function af() {
    return Lt(on);
  }
  function Ys() {
    return Ct().memoizedState;
  }
  function Gs() {
    return Ct().memoizedState;
  }
  function Vm(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = xl();
          t = Me(e);
          var a = je(l, t, e);
          a !== null && (cl(a, l, e), Un(a, l, e)), l = { cache: Mc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Zm(t, l, e) {
    var a = xl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lu(t) ? Qs(l, e) : (e = zc(t, l, e, a), e !== null && (cl(e, t, a), Vs(e, l, a)));
  }
  function Xs(t, l, e) {
    var a = xl();
    Xn(t, l, e, a);
  }
  function Xn(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (lu(t)) Qs(l, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = l.lastRenderedReducer, i !== null))
        try {
          var u = l.lastRenderedState, c = i(u, e);
          if (n.hasEagerState = !0, n.eagerState = c, gl(c, u))
            return ji(t, l, n, 0), bt === null && Mi(), !1;
        } catch {
        } finally {
        }
      if (e = zc(t, l, n, a), e !== null)
        return cl(e, t, a), Vs(e, l, a), !0;
    }
    return !1;
  }
  function nf(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: Ff(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lu(t)) {
      if (l) throw Error(h(479));
    } else
      l = zc(
        t,
        e,
        a,
        2
      ), l !== null && cl(l, t, 2);
  }
  function lu(t) {
    var l = t.alternate;
    return t === J || l !== null && l === J;
  }
  function Qs(t, l) {
    Xa = ki = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Vs(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Zo(t, e);
    }
  }
  var eu = {
    readContext: Lt,
    use: Wi,
    useCallback: At,
    useContext: At,
    useEffect: At,
    useImperativeHandle: At,
    useLayoutEffect: At,
    useInsertionEffect: At,
    useMemo: At,
    useReducer: At,
    useRef: At,
    useState: At,
    useDebugValue: At,
    useDeferredValue: At,
    useTransition: At,
    useSyncExternalStore: At,
    useId: At,
    useHostTransitionStatus: At,
    useFormState: At,
    useActionState: At,
    useOptimistic: At,
    useMemoCache: At,
    useCacheRefresh: At,
    useEffectEvent: At
  }, Zs = {
    readContext: Lt,
    use: Wi,
    useCallback: function(t, l) {
      return Pt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Lt,
    useEffect: Os,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Pi(
        4194308,
        4,
        Ms.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Pi(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Pi(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Pt();
      l = l === void 0 ? null : l;
      var a = t();
      if (ha) {
        ze(!0);
        try {
          t();
        } finally {
          ze(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = Pt();
      if (e !== void 0) {
        var n = e(l);
        if (ha) {
          ze(!0);
          try {
            e(l);
          } finally {
            ze(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = Zm.bind(
        null,
        J,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = Pt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Wc(t);
      var l = t.queue, e = Xs.bind(null, J, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: tf,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return lf(e, t, l);
    },
    useTransition: function() {
      var t = Wc(!1);
      return t = Hs.bind(
        null,
        J,
        t.queue,
        !0,
        !1
      ), Pt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = J, n = Pt();
      if ($) {
        if (e === void 0)
          throw Error(h(407));
        e = e();
      } else {
        if (e = l(), bt === null)
          throw Error(h(349));
        (tt & 127) !== 0 || ss(a, l, e);
      }
      n.memoizedState = e;
      var i = { value: e, getSnapshot: l };
      return n.queue = i, Os(hs.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Va(
        9,
        { destroy: void 0 },
        ds.bind(
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
      var t = Pt(), l = bt.identifierPrefix;
      if ($) {
        var e = Kl, a = Ll;
        e = (a & ~(1 << 32 - dl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = Fi++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = qm++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: af,
    useFormState: zs,
    useActionState: zs,
    useOptimistic: function(t) {
      var l = Pt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = nf.bind(
        null,
        J,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: kc,
    useCacheRefresh: function() {
      return Pt().memoizedState = Vm.bind(
        null,
        J
      );
    },
    useEffectEvent: function(t) {
      var l = Pt(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((rt & 2) !== 0)
          throw Error(h(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Ls = {
    readContext: Lt,
    use: Wi,
    useCallback: Ds,
    useContext: Lt,
    useEffect: Pc,
    useImperativeHandle: js,
    useInsertionEffect: ws,
    useLayoutEffect: Cs,
    useMemo: Rs,
    useReducer: Ii,
    useRef: _s,
    useState: function() {
      return Ii(ge);
    },
    useDebugValue: tf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return Us(
        e,
        yt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Ii(ge)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Gn(t),
        l
      ];
    },
    useSyncExternalStore: rs,
    useId: Ys,
    useHostTransitionStatus: af,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function(t, l) {
      var e = Ct();
      return ps(e, yt, t, l);
    },
    useMemoCache: kc,
    useCacheRefresh: Gs,
    useEffectEvent: As
  }, Lm = {
    readContext: Lt,
    use: Wi,
    useCallback: Ds,
    useContext: Lt,
    useEffect: Pc,
    useImperativeHandle: js,
    useInsertionEffect: ws,
    useLayoutEffect: Cs,
    useMemo: Rs,
    useReducer: $c,
    useRef: _s,
    useState: function() {
      return $c(ge);
    },
    useDebugValue: tf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return yt === null ? lf(e, t, l) : Us(
        e,
        yt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = $c(ge)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Gn(t),
        l
      ];
    },
    useSyncExternalStore: rs,
    useId: Ys,
    useHostTransitionStatus: af,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function(t, l) {
      var e = Ct();
      return yt !== null ? ps(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: Gs,
    useEffectEvent: As
  };
  function uf(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : W({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var cf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = xl(), n = Me(a);
      n.payload = l, e != null && (n.callback = e), l = je(t, n, a), l !== null && (cl(l, t, a), Un(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = xl(), n = Me(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = je(t, n, a), l !== null && (cl(l, t, a), Un(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = xl(), a = Me(e);
      a.tag = 2, l != null && (a.callback = l), l = je(t, a, e), l !== null && (cl(l, t, e), Un(l, t, e));
    }
  };
  function Ks(t, l, e, a, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, u) : l.prototype && l.prototype.isPureReactComponent ? !On(e, a) || !On(n, i) : !0;
  }
  function Js(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && cf.enqueueReplaceState(l, l.state, null);
  }
  function ga(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = W({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function ks(t) {
    Ci(t);
  }
  function Fs(t) {
    console.error(t);
  }
  function $s(t) {
    Ci(t);
  }
  function au(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ws(t, l, e) {
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
  function ff(t, l, e) {
    return e = Me(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      au(t, l);
    }, e;
  }
  function Is(t) {
    return t = Me(t), t.tag = 3, t;
  }
  function Ps(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        Ws(l, e, a);
      };
    }
    var u = e.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Ws(l, e, a), typeof n != "function" && (Ge === null ? Ge = /* @__PURE__ */ new Set([this]) : Ge.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Km(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && ua(
        l,
        e,
        n,
        !0
      ), e = Kt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Wt === null ? Eu() : e.alternate === null && wt === 0 && (wt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Vi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Kf(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === Vi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Kf(t, a, n)), !1;
        }
        throw Error(h(435, e.tag));
      }
      return Kf(t, a, n), Eu(), !1;
    }
    if ($)
      return l = Kt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Oc && (t = Error(h(422), { cause: a }), Cn(Nl(t, e)))) : (a !== Oc && (l = Error(h(423), {
        cause: a
      }), Cn(
        Nl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Nl(a, e), n = ff(
        t.stateNode,
        a,
        n
      ), qc(t, n), wt !== 4 && (wt = 2)), !1;
    var i = Error(h(520), { cause: a });
    if (i = Nl(i, e), Fn === null ? Fn = [i] : Fn.push(i), wt !== 4 && (wt = 2), l === null) return !0;
    a = Nl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = ff(e.stateNode, a, t), qc(e, t), !1;
        case 1:
          if (l = e.type, i = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ge === null || !Ge.has(i))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Is(n), Ps(
              n,
              t,
              e,
              a
            ), qc(e, n), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var of = Error(h(461)), Dt = !1;
  function Ht(t, l, e, a) {
    l.child = t === null ? as(l, null, e, a) : da(
      l,
      t.child,
      e,
      a
    );
  }
  function td(t, l, e, a, n) {
    e = e.render;
    var i = l.ref;
    if ("ref" in a) {
      var u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    } else u = a;
    return ca(l), a = Zc(
      t,
      l,
      e,
      u,
      i,
      n
    ), c = Lc(), t !== null && !Dt ? (Kc(t, l, n), me(t, l, n)) : ($ && c && Hi(l), l.flags |= 1, Ht(t, l, a, n), l.child);
  }
  function ld(t, l, e, a, n) {
    if (t === null) {
      var i = e.type;
      return typeof i == "function" && !Tc(i) && i.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = i, ed(
        t,
        l,
        i,
        a,
        n
      )) : (t = Ri(
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
      if (e = e.compare, e = e !== null ? e : On, e(u, a) && t.ref === l.ref)
        return me(t, l, n);
    }
    return l.flags |= 1, t = oe(i, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function ed(t, l, e, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (On(i, a) && t.ref === l.ref)
        if (Dt = !1, l.pendingProps = a = i, vf(t, n))
          (t.flags & 131072) !== 0 && (Dt = !0);
        else
          return l.lanes = t.lanes, me(t, l, n);
    }
    return rf(
      t,
      l,
      e,
      a,
      n
    );
  }
  function ad(t, l, e, a) {
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
        return nd(
          t,
          l,
          i,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Xi(
          l,
          i !== null ? i.cachePool : null
        ), i !== null ? us(l, i) : Yc(), cs(l);
      else
        return a = l.lanes = 536870912, nd(
          t,
          l,
          i !== null ? i.baseLanes | e : e,
          e,
          a
        );
    } else
      i !== null ? (Xi(l, i.cachePool), us(l, i), Ue(), l.memoizedState = null) : (t !== null && Xi(l, null), Yc(), Ue());
    return Ht(t, l, n, e), l.child;
  }
  function Qn(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function nd(t, l, e, a, n) {
    var i = Dc();
    return i = i === null ? null : { parent: Mt._currentValue, pool: i }, l.memoizedState = {
      baseLanes: e,
      cachePool: i
    }, t !== null && Xi(l, null), Yc(), cs(l), t !== null && ua(t, l, a, !0), l.childLanes = n, null;
  }
  function nu(t, l) {
    return l = iu(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function id(t, l, e) {
    return da(l, t.child, null, e), t = nu(l, l.pendingProps), t.flags |= 2, ml(l), l.memoizedState = null, t;
  }
  function Jm(t, l, e) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if ($) {
        if (a.mode === "hidden")
          return t = nu(l, a), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Qn(null, t);
        if (Xc(l), (t = Tt) ? (t = Mh(
          t,
          Al
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Ll, overflow: Kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Qr(t), e.return = l, l.child = e, Gt = l, Tt = null)) : t = null, t === null) throw Oe(l);
        return l.lanes = 536870912, null;
      }
      return nu(l, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Xc(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = id(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(h(558));
      else if (Dt || ua(t, l, e, !1), n = (e & t.childLanes) !== 0, Dt || n) {
        if (De.current === null) {
          if (a = bt, a !== null && (u = Lo(a, e), u !== 0 && u !== i.retryLane))
            throw i.retryLane = u, ea(t, u), cl(a, t, u), of;
          Eu();
        }
        l = id(
          t,
          l,
          e
        );
      } else
        t = i.treeContext, Tt = Cl(u.nextSibling), Gt = l, $ = !0, _e = null, Al = !1, t !== null && Lr(l, t), l = nu(l, a), l.flags |= 134221824;
      return l;
    }
    return t = oe(t.child, {
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
        throw Error(h(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function rf(t, l, e, a, n) {
    return ca(l), e = Zc(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = Lc(), t !== null && !Dt ? (Kc(t, l, n), me(t, l, n)) : ($ && a && Hi(l), l.flags |= 1, Ht(t, l, e, n), l.child);
  }
  function ud(t, l, e, a, n, i) {
    return ca(l), l.updateQueue = null, e = os(
      l,
      a,
      e,
      n
    ), fs(t), a = Lc(), t !== null && !Dt ? (Kc(t, l, i), me(t, l, i)) : ($ && a && Hi(l), l.flags |= 1, Ht(t, l, e, i), l.child);
  }
  function cd(t, l, e, a, n) {
    if (ca(l), l.stateNode === null) {
      var i = Ra, u = e.contextType;
      typeof u == "object" && u !== null && (i = Lt(u)), i = new e(a, i), l.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = cf, l.stateNode = i, i._reactInternals = l, i = l.stateNode, i.props = a, i.state = l.memoizedState, i.refs = {}, Uc(l), u = e.contextType, i.context = typeof u == "object" && u !== null ? Lt(u) : Ra, i.state = l.memoizedState, u = e.getDerivedStateFromProps, typeof u == "function" && (uf(
        l,
        e,
        u,
        a
      ), i.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && cf.enqueueReplaceState(i, i.state, null), qn(l, a, i, n), Hn(), i.state = l.memoizedState), typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = l.stateNode;
      var c = l.memoizedProps, f = ga(e, c);
      i.props = f;
      var m = i.context, x = e.contextType;
      u = Ra, typeof x == "object" && x !== null && (u = Lt(x));
      var z = e.getDerivedStateFromProps;
      x = typeof z == "function" || typeof i.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, x || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c || m !== u) && Js(
        l,
        i,
        a,
        u
      ), Ce = !1;
      var d = l.memoizedState;
      i.state = d, qn(l, a, i, n), Hn(), m = l.memoizedState, c || d !== m || Ce ? (typeof z == "function" && (uf(
        l,
        e,
        z,
        a
      ), m = l.memoizedState), (f = Ce || Ks(
        l,
        e,
        f,
        a,
        d,
        m,
        u
      )) ? (x || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = m), i.props = a, i.state = m, i.context = u, a = f) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      i = l.stateNode, Hc(t, l), u = l.memoizedProps, x = ga(e, u), i.props = x, z = l.pendingProps, d = i.context, m = e.contextType, f = Ra, typeof m == "object" && m !== null && (f = Lt(m)), c = e.getDerivedStateFromProps, (m = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== z || d !== f) && Js(
        l,
        i,
        a,
        f
      ), Ce = !1, d = l.memoizedState, i.state = d, qn(l, a, i, n), Hn();
      var v = l.memoizedState;
      u !== z || d !== v || Ce || t !== null && t.dependencies !== null && Yi(t.dependencies) ? (typeof c == "function" && (uf(
        l,
        e,
        c,
        a
      ), v = l.memoizedState), (x = Ce || Ks(
        l,
        e,
        x,
        a,
        d,
        v,
        f
      ) || t !== null && t.dependencies !== null && Yi(t.dependencies)) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, v, f), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        v,
        f
      )), typeof i.componentDidUpdate == "function" && (l.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = v), i.props = a, i.state = v, i.context = f, a = x) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), a = !1);
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
    )) : Ht(t, l, e, n), l.memoizedState = i.state, t = l.child) : t = me(
      t,
      l,
      n
    ), t;
  }
  function fd(t, l, e, a) {
    return na(), l.flags |= 256, Ht(t, l, e, a), l.child;
  }
  var sf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function df(t) {
    return { baseLanes: t, cachePool: Wr() };
  }
  function hf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= yl), t;
  }
  function od(t, l, e) {
    var a = l.pendingProps, n = !1, i = (l.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (Jt.current & 2) !== 0), u && (n = !0, l.flags &= -129), u = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if ($) {
        if (n ? Re(l) : Ue(), (t = Tt) ? (t = Mh(
          t,
          Al
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Ll, overflow: Kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Qr(t), e.return = l, l.child = e, Gt = l, Tt = null)) : t = null, t === null) throw Oe(l);
        return ho(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, n ? (Ue(), n = l.mode, i = iu(
        { mode: "hidden", children: i },
        n
      ), a = aa(
        a,
        n,
        e,
        null
      ), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = df(e), a.childLanes = hf(
        t,
        u,
        e
      ), l.memoizedState = sf, Qn(null, a)) : (Re(l), gf(l, i));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if (f !== null)
        return km(
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
    return n ? (Ue(), n = a.fallback, i = l.mode, c = t.child, f = c.sibling, a = oe(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 1206910976, f !== null ? n = oe(f, n) : (n = aa(
      n,
      i,
      e,
      null
    ), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, Qn(null, a), a = l.child, n = t.child.memoizedState, n === null ? n = df(e) : (i = n.cachePool, i !== null ? (c = Mt._currentValue, i = i.parent !== c ? { parent: c, pool: c } : i) : i = Wr(), n = {
      baseLanes: n.baseLanes | e,
      cachePool: i
    }), a.memoizedState = n, a.childLanes = hf(
      t,
      u,
      e
    ), l.memoizedState = sf, Qn(t.child, a)) : (Re(l), e = t.child, t = e.sibling, e = oe(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (u = l.deletions, u === null ? (l.deletions = [t], l.flags |= 16) : u.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function gf(t, l) {
    return l = iu(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function iu(t, l) {
    return t = al(22, t, null, l), t.lanes = 0, t;
  }
  function uu(t, l, e) {
    return da(l, t.child, null, e), t = gf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function km(t, l, e, a, n, i, u, c) {
    if (e)
      return l.flags & 256 ? (Re(l), l.flags &= -257, uu(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (Ue(), l.child = t.child, l.flags |= 128, null) : (Ue(), i = n.fallback, u = l.mode, n = iu(
        { mode: "visible", children: n.children },
        u
      ), i = aa(
        i,
        u,
        c,
        null
      ), i.flags |= 2, n.return = l, i.return = l, n.sibling = i, l.child = n, da(l, t.child, null, c), n = l.child, n.memoizedState = df(c), n.childLanes = hf(
        t,
        a,
        c
      ), l.memoizedState = sf, Qn(null, n));
    if (Re(l), ho(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var f = a.dgst;
      return a = f, a !== "" && (n = Error(h(419)), n.stack = "", n.digest = a, Cn({ value: n, source: null, stack: null })), uu(
        t,
        l,
        c
      );
    }
    if (Dt || ua(t, l, c, !1), a = (c & t.childLanes) !== 0, Dt || a) {
      if (De.current !== null)
        return uu(
          t,
          l,
          c
        );
      if (a = bt, a !== null && (n = Lo(
        a,
        c
      ), n !== 0 && n !== u.retryLane))
        throw u.retryLane = n, ea(t, n), cl(a, t, n), of;
      return so(i) || Eu(), uu(
        t,
        l,
        c
      );
    }
    return so(i) ? (l.flags |= 192, l.child = t.child, null) : (t = u.treeContext, Tt = Cl(i.nextSibling), Gt = l, $ = !0, _e = null, Al = !1, t !== null && Lr(l, t), l = gf(
      l,
      n.children
    ), l.flags |= 134221824, l);
  }
  function rd(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Bi(t.return, l, e);
  }
  function sd(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && Ji(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function cu(t, l, e, a, n, i) {
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
  function mf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function pf(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Jt.current;
    if (l.flags & 128)
      return Bn(l, u), null;
    var c = (u & 2) !== 0;
    if (c ? (u = u & 1 | 2, l.flags |= 128) : u &= 1, Bn(l, u), n === "backwards" && t !== null ? (mf(t), Ht(t, l, a, e), mf(t)) : Ht(t, l, a, e), a = $ ? wn : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && rd(t, e, l);
        else if (t.tag === 19)
          rd(t, e, l);
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
        e = sd(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null, mf(l)), cu(
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
          if (t = n.alternate, t !== null && Ji(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        cu(
          l,
          !0,
          e,
          null,
          i,
          a
        );
        break;
      case "together":
        cu(
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
        e = sd(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), cu(
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
  function dd(t, l, e) {
    var a = l.pendingProps;
    return Ae(l, l.type, a.value), Ht(t, l, a.children, e), l.child;
  }
  function me(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Ye |= l.lanes, (e & l.childLanes) === 0)
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
      throw Error(h(153));
    if (l.child !== null) {
      for (t = l.child, e = oe(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = oe(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function vf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Yi(t)));
  }
  function Fm(t, l, e) {
    switch (l.tag) {
      case 3:
        di(l, l.stateNode.containerInfo), Ae(l, Mt, t.memoizedState.cache), na();
        break;
      case 27:
      case 5:
        Vu(l);
        break;
      case 4:
        di(l, l.stateNode.containerInfo);
        break;
      case 10:
        Ae(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Xc(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Re(l), l.flags |= 128, null;
          a = ua(
            t,
            l,
            e,
            !1
          );
          var n = l.child.childLanes;
          return a || (e & n) !== 0 ? od(t, l, e) : (Re(l), t = me(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        Re(l);
        break;
      case 19:
        if (l.flags & 128)
          return pf(
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
            return pf(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Bn(l, Jt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, ad(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Ae(l, Mt, t.memoizedState.cache);
    }
    return me(t, l, e);
  }
  function hd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Dt = !0;
      else {
        if (!vf(t, e) && (l.flags & 128) === 0)
          return Dt = !1, Fm(
            t,
            l,
            e
          );
        Dt = (t.flags & 131072) !== 0;
      }
    else
      Dt = !1, $ && (l.flags & 1048576) !== 0 && Zr(l, wn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = ra(l.elementType), l.type = t, typeof t == "function")
            Tc(t) ? (a = ga(t, a), l.tag = 1, l = cd(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = rf(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === A) {
                l.tag = 11, l = td(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === xt) {
                l.tag = 14, l = ld(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === Bt) {
                l.tag = 10, l.type = t, l = dd(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = ut(t) || t, Error(h(306, l, ""));
          }
        }
        return l;
      case 0:
        return rf(
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
        ), cd(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (di(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(h(387));
          a = l.pendingProps;
          var i = l.memoizedState;
          n = i.element, Hc(t, l), qn(l, a, null, e);
          var u = l.memoizedState;
          if (a = u.cache, Ae(l, Mt, a), a !== i.cache && Cc(
            l,
            [Mt],
            e,
            !0
          ), Hn(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, l.updateQueue.baseState = i, l.memoizedState = i, l.flags & 256) {
              l = fd(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = Nl(
                Error(h(424)),
                l
              ), Cn(n), l = fd(
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
              for (Tt = Cl(t.firstChild), Gt = l, $ = !0, _e = null, Al = !0, e = as(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
            }
          else {
            if (na(), a === n) {
              l = me(
                t,
                l,
                e
              );
              break t;
            }
            Ht(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Za(t, l), t === null ? (e = Bh(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : $ || (l.stateNode = vh(
          l.type,
          l.pendingProps,
          be.current,
          l
        )) : l.memoizedState = Bh(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Vu(l), t === null && $ && (a = l.stateNode = Rh(
          l.type,
          l.pendingProps,
          be.current
        ), Gt = l, Al = !0, n = Tt, Ve(l.type) ? (go = n, Tt = Cl(a.firstChild)) : Tt = n), Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), Za(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && $ && ((n = a = Tt) && (a = V0(
          a,
          l.type,
          l.pendingProps,
          Al
        ), a !== null ? (l.stateNode = a, Gt = l, Tt = Cl(a.firstChild), Al = !1, n = !0) : n = !1), n || Oe(l)), Vu(l), n = l.type, i = l.pendingProps, u = t !== null ? t.memoizedProps : null, a = i.children, no(n, i) ? a = null : u !== null && no(n, u) && (l.flags |= 32), l.memoizedState !== null && (n = Zc(
          t,
          l,
          Bm,
          null,
          null,
          e
        ), on._currentValue = n), Za(t, l), Ht(t, l, a, e), l.child;
      case 6:
        return t === null && $ && ((t = e = Tt) && (e = Z0(
          e,
          l.pendingProps,
          Al
        ), e !== null ? (l.stateNode = e, Gt = l, Tt = null, t = !0) : t = !1), t || Oe(l)), null;
      case 13:
        return od(t, l, e);
      case 4:
        return di(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = da(
          l,
          null,
          a,
          e
        ) : Ht(t, l, a, e), l.child;
      case 11:
        return td(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return a = l.pendingProps, Za(t, l), Ht(t, l, a, e), l.child;
      case 8:
        return Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return dd(t, l, e);
      case 9:
        return n = l.type._context, a = l.pendingProps.children, ca(l), n = Lt(n), a = a(n), l.flags |= 1, Ht(t, l, a, e), l.child;
      case 14:
        return ld(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return ed(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return pf(t, l, e);
      case 31:
        return Jm(t, l, e);
      case 22:
        return ad(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ca(l), a = Lt(Mt), t === null ? (n = Dc(), n === null && (n = bt, i = Mc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= e), n = i), l.memoizedState = { parent: a, cache: n }, Uc(l), Ae(l, Mt, n)) : ((t.lanes & e) !== 0 && (Hc(t, l), qn(l, null, null, e), Hn()), n = t.memoizedState, i = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), Ae(l, Mt, a)) : (a = i.cache, Ae(l, Mt, a), a !== n.cache && Cc(
          l,
          [Mt],
          e,
          !0
        ))), Ht(
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
        }), a = l.pendingProps, a.name != null && a.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : $ && Hi(l), t !== null && t.memoizedProps.name !== a.name ? l.flags |= 4194816 : Za(t, l), Ht(t, l, a.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(h(156, l.tag));
  }
  function pe(t) {
    t.flags |= 4;
  }
  function yf(t, l, e, a, n) {
    var i;
    if ((i = (t.mode & 32) !== 0) && (i = e === null ? Qh(l, a) : Qh(l, a) && (a.src !== e.src || a.srcSet !== e.srcSet)), i) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (kd()) t.flags |= 8192;
        else
          throw sa = Vi, Rc;
    } else t.flags &= -16777217;
  }
  function gd(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vh(l))
      if (kd()) t.flags |= 8192;
      else
        throw sa = Vi, Rc;
  }
  function fu(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Qo() : 536870912, t.lanes |= l, Fa |= l);
  }
  function Vn(t, l) {
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
  function Et(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function $m(t, l, e) {
    var a = l.pendingProps;
    switch (_c(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(l), null;
      case 1:
        return Et(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), de(Mt), Sa(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (qa(l) ? pe(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ac())), Et(l), null;
      case 26:
        var n = l.type, i = l.memoizedState;
        return t === null ? (pe(l), i !== null ? (Et(l), gd(l, i)) : (Et(l), yf(
          l,
          n,
          null,
          a,
          e
        ))) : i ? i !== t.memoizedState ? (pe(l), Et(l), gd(l, i)) : (Et(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && pe(l), Et(l), yf(
          l,
          n,
          t,
          a,
          e
        )), null;
      case 27:
        if (hi(l), e = be.current, n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && pe(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(h(166));
            return Et(l), l.subtreeFlags &= -33554433, null;
          }
          t = Vl.current, qa(l) ? Kr(l) : (t = Rh(n, a, e), l.stateNode = t, pe(l));
        }
        return Et(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (hi(l), n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && pe(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(h(166));
            return Et(l), l.subtreeFlags &= -33554433, null;
          }
          if (i = Vl.current, qa(l))
            Kr(l);
          else {
            var u = ti(
              be.current
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
            i[Zt] = l, i[el] = a;
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
            t: switch (Ft(i, n, a), n) {
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
            a && pe(l);
          }
        }
        return Et(l), l.subtreeFlags &= -33554433, yf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && pe(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(h(166));
          if (t = be.current, qa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = Gt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Zt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || hh(t.nodeValue, e)), t || Oe(l, !0);
          } else
            t = ti(t).createTextNode(
              a
            ), t[Zt] = l, l.stateNode = t;
        }
        return Et(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = qa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(h(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(557));
              t[Zt] = l;
            } else
              na(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), t = !1;
          } else
            e = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (ml(l), l) : (ml(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(h(558));
        }
        return Et(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = qa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(h(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
              n[Zt] = l;
            } else
              na(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), n = !1;
          } else
            n = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (ml(l), l) : (ml(l), null);
        }
        return ml(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), fu(l, l.updateQueue), Et(l), null);
      case 4:
        return Sa(), t === null && Pf(l.stateNode.containerInfo), l.flags |= 67108864, Et(l), null;
      case 10:
        return de(l.type), Et(l), null;
      case 19:
        if (Qc(l), a = l.memoizedState, a === null) return Et(l), null;
        if (n = (l.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Vn(a, !1);
          else {
            if (wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (i = Ji(t), i !== null) {
                  for (l.flags |= 128, Vn(a, !1), t = i.updateQueue, l.updateQueue = t, fu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Xr(e, t), e = e.sibling;
                  return Bn(
                    l,
                    Jt.current & 1 | 2
                  ), $ && re(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && rl() > bu && (l.flags |= 128, n = !0, Vn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Ji(i), t !== null) {
              if (l.flags |= 128, n = !0, t = t.updateQueue, l.updateQueue = t, fu(l, t), Vn(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !$)
                return Et(l), null;
            } else
              2 * rl() - a.renderingStartTime > bu && e !== 536870912 && (l.flags |= 128, n = !0, Vn(a, !1), l.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = rl(), t.sibling = null, i = Jt.current, i = n ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !e || $ ? Bn(l, i) : (e = i, zt(Kt, l), zt(Jt, e), Wt === null && (Wt = l)), $ && re(l, a.treeForkCount), t;
        }
        return Et(l), null;
      case 22:
      case 23:
        return ml(l), Gc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Et(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Et(l), e = l.updateQueue, e !== null && fu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && Vt(oa), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), de(Mt), Et(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Et(l), null;
    }
    throw Error(h(156, l.tag));
  }
  function Wm(t, l) {
    switch (_c(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return de(Mt), Sa(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return hi(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (ml(l), l.alternate === null)
            throw Error(h(340));
          na();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (ml(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(h(340));
          na();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return Qc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Sa(), null;
      case 10:
        return de(l.type), null;
      case 22:
      case 23:
        return ml(l), Gc(), t !== null && Vt(oa), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return de(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(t, l) {
    switch (_c(l), l.tag) {
      case 3:
        de(Mt), Sa();
        break;
      case 26:
      case 27:
      case 5:
        hi(l);
        break;
      case 4:
        Sa();
        break;
      case 31:
        l.memoizedState !== null && ml(l);
        break;
      case 13:
        ml(l);
        break;
      case 19:
        Qc(l);
        break;
      case 10:
        de(l.type);
        break;
      case 22:
      case 23:
        ml(l), Gc(), t !== null && Vt(oa);
        break;
      case 24:
        de(Mt);
    }
  }
  function Zn(t, l) {
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
      pt(l, l.return, c);
    }
  }
  function He(t, l, e) {
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
              var f = e, m = c;
              try {
                m();
              } catch (x) {
                pt(
                  n,
                  f,
                  x
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (x) {
      pt(l, l.return, x);
    }
  }
  function pd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        is(l, e);
      } catch (a) {
        pt(t, t.return, a);
      }
    }
  }
  function vd(t, l, e) {
    e.props = ga(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      pt(t, l, a);
    }
  }
  function Jl(t, l) {
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
            var n = t.stateNode, i = ce(t.memoizedProps, n);
            (n.ref === null || n.ref.name !== i) && (n.ref = Eh(i)), a = n.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var u = new bl(t);
              b(
                t.child,
                !1,
                X0,
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
      pt(t, l, c);
    }
  }
  function kt(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          pt(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          pt(t, l, n);
        }
      else e.current = null;
  }
  function ou(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        Ch(
          t.stateNode,
          l[e]
        );
  }
  function yd(t) {
    for (var l = t.return; l !== null && (bf(l) && Ch(t.stateNode, l.stateNode), !xf(l)); )
      l = l.return;
  }
  function Ln(t) {
    for (var l = t.return; l !== null && (bf(l) && Q0(t.stateNode, l.stateNode), !xf(l)); )
      l = l.return;
  }
  function xf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function bf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Sf(t) {
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
      pt(t, t.return, n);
    }
  }
  function zf(t, l, e) {
    try {
      var a = t.stateNode;
      T0(a, t.type, e, l), a[el] = l;
    } catch (n) {
      pt(t, t.return, n);
    }
  }
  function xd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ve(t.type) || t.tag === 4;
  }
  function Tf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ve(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ef(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(n, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(n), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Zl)), ou(t, a), ct = !0;
    else if (n !== 4 && (n === 27 && (ou(t, a), a = null, Ve(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Ef(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        Ef(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function ru(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? e.insertBefore(n, l) : e.appendChild(n), ou(t, a), ct = !0;
    else if (n !== 4 && (n === 27 && (ou(t, a), a = null, Ve(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (ru(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        ru(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function bd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Ft(l, a, e), l[Zt] = t, l[el] = e;
    } catch (i) {
      pt(t, t.return, i);
    }
  }
  var su = !1, pl = null;
  function Sd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (su = !0);
  }
  var kl = null;
  function zd() {
    var t = kl;
    return kl = null, t;
  }
  var nl = 0;
  function La(t, l, e, a, n) {
    return nl = 0, Td(
      t.child,
      l,
      e,
      a,
      n
    );
  }
  function Td(t, l, e, a, n) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var u = t.stateNode;
        if (a !== null) {
          var c = co(u);
          a.push(c), c.view && (i = !0);
        } else
          i || co(u).view && (i = !0);
        su = !0, zh(
          u,
          nl === 0 ? l : l + "_" + nl,
          e
        ), nl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && n || Td(
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
  function Fl(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Th(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || Fl(
        t.child,
        l
      )), t = t.sibling;
  }
  function du(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (du(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(h(544));
          var e = l.name;
          l = fe(l.default, l.share), l !== "none" && (La(
            t,
            e,
            l,
            null,
            !1
          ) || Fl(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Nf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, a = t.memoizedProps, n = ce(a, e), i = fe(
        a.default,
        e.paired ? a.share : a.enter
      );
      i !== "none" ? La(t, n, i, null, !1) ? (du(t), e.paired || l || Pa(t, a.onEnter)) : Fl(t.child, !1) : du(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Nf(t, l), t = t.sibling;
    else du(t);
  }
  function _f(t) {
    if (pl !== null && pl.size !== 0) {
      var l = pl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, a = e.name;
              if (a != null && a !== "auto") {
                var n = l.get(a);
                if (n !== void 0) {
                  var i = fe(
                    e.default,
                    e.share
                  );
                  if (i !== "none" && (La(
                    t,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = t.stateNode, n.paired = i, i.paired = n, Pa(t, e.onShare)) : Fl(t.child, !1)), l.delete(a), l.size === 0) break;
                }
              }
            }
            _f(t);
          }
          t = t.sibling;
        }
    }
  }
  function Of(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = ce(l, t.stateNode), a = pl !== null ? pl.get(e) : void 0, n = fe(
        l.default,
        a !== void 0 ? l.share : l.exit
      );
      n !== "none" && (La(t, e, n, null, !1) ? a !== void 0 ? (n = t.stateNode, a.paired = n, n.paired = a, pl.delete(e), Pa(t, l.onShare)) : Pa(t, l.onExit) : Fl(t.child, !1)), pl !== null && _f(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Of(t), t = t.sibling;
    else
      pl !== null && _f(t);
  }
  function Ed(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = ce(l, t.stateNode);
        l = fe(l.default, l.update), t.flags &= -5, l !== "none" && La(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Ed(t);
      t = t.sibling;
    }
  }
  function Af(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, Fl(t.child, !1));
          }
          Af(t);
        }
        t = t.sibling;
      }
  }
  function hu(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Fl(t.child, !1), Af(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        hu(t), t = t.sibling;
    else Af(t);
  }
  function Nd(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Fl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Nd(t), t = t.sibling;
  }
  function wf(t, l, e, a, n, i, u) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (i !== null && nl < i.length) {
          var m = i[nl], x = co(f);
          (m.view || x.view) && (c = !0);
          var z;
          if (z = (t.flags & 4) === 0)
            if (x.clip) z = !0;
            else {
              z = m.rect;
              var d = x.rect;
              z = z.y !== d.y || z.x !== d.x || z.height !== d.height || z.width !== d.width;
            }
          z && (t.flags |= 4), x.abs ? x = !m.abs : (m = m.rect, x = x.rect, x = m.height !== x.height || m.width !== x.width), x && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && zh(
          f,
          nl === 0 ? e : e + "_" + nl,
          n
        ), c && (t.flags & 4) !== 0 || (kl === null && (kl = []), kl.push(
          f,
          nl === 0 ? a : a + "_" + nl,
          l.memoizedProps
        )), nl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && u ? t.flags |= l.flags & 32 : wf(
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
  function _d(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = t.stateNode, n = ce(e, a), i = fe(e.default, e.update), u;
        u = t.memoizedState, t.memoizedState = null, a = t;
        var c = t.child;
        nl = 0, n = wf(
          a,
          c,
          n,
          n,
          i,
          u,
          !1
        ), (t.flags & 4) !== 0 && n && Pa(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && _d(t);
      t = t.sibling;
    }
  }
  var Xt = !1, ht = !1, $l = !1, Cf = !1, Od = typeof WeakSet == "function" ? WeakSet : Set, Qt = null, Wl = !1, Kn = !1, gu = !1, Mf = !1;
  function Im(t, l, e) {
    if (t = t.containerInfo, eo = rn, t = Mr(t), pc(t)) {
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
            var c = 0, f = -1, m = -1, x = 0, z = 0, d = t, v = null;
            l: for (; ; ) {
              for (var _; d !== a || i !== 0 && d.nodeType !== 3 || (f = c + i), d !== u || n !== 0 && d.nodeType !== 3 || (m = c + n), d.nodeType === 3 && (c += d.nodeValue.length), (_ = d.firstChild) !== null; )
                v = d, d = _;
              for (; ; ) {
                if (d === t) break l;
                if (v === a && ++x === i && (f = c), v === u && ++z === n && (m = c), (_ = d.nextSibling) !== null) break;
                d = v, v = d.parentNode;
              }
              d = _;
            }
            a = f === -1 || m === -1 ? null : { start: f, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ao = { focusedElem: t, selectionRange: a }, rn = !1, e = (e & 335544064) === e, Qt = l, l = e ? 9270 : 1024; Qt !== null; ) {
      if (t = Qt, e && (a = t.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          e && Of(a[i]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Sd(t), mu(e);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && e && Of(a), mu(e);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            e && Sd(t), mu(e);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & l) !== 0 && a !== null ? (a.return = t, Qt = a) : (e && Ed(t), mu(e));
      }
    }
    pl = null;
  }
  function mu(t) {
    for (; Qt !== null; ) {
      var l = Qt, e = t, a = l.alternate, n = l.flags;
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
              pt(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = l.stateNode.containerInfo, e = a.nodeType, e === 9)
              ro(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ro(a);
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
          e && a !== null && (e = ce(
            a.memoizedProps,
            a.stateNode
          ), n = l.memoizedProps, n = fe(n.default, n.update), n !== "none" && La(
            a,
            e,
            n,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(h(163));
      }
      if (a = l.sibling, a !== null) {
        a.return = l.return, Qt = a;
        break;
      }
      Qt = l.return;
    }
  }
  function Ad(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Il(t, e), a & 4 && Zn(5, e);
        break;
      case 1:
        if (Il(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (u) {
              pt(e, e.return, u);
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
              pt(
                e,
                e.return,
                u
              );
            }
          }
        a & 64 && pd(e), a & 512 && Jl(e, e.return);
        break;
      case 3:
        if (Il(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
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
            is(t, l);
          } catch (u) {
            pt(e, e.return, u);
          }
        }
        break;
      case 27:
        l === null && a & 4 && bd(e);
      case 26:
      case 5:
        Il(t, e), l === null && a & 4 && Sf(e), a & 512 && Jl(e, e.return);
        break;
      case 12:
        Il(t, e);
        break;
      case 31:
        Il(t, e), a & 4 && jd(t, e);
        break;
      case 13:
        Il(t, e), a & 4 && Dd(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = r0.bind(
          null,
          e
        ), L0(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Xt, !a) {
          var i = l !== null && l.memoizedState !== null || ht;
          l = Xt, n = ht, Xt = a, (ht = i) && !n ? (a = 2, (e.subtreeFlags & 8772) !== 0 && (a |= 1), ql(
            t,
            e,
            a
          )) : Il(t, e), Xt = l, ht = n;
        }
        break;
      case 30:
        Il(t, e), a & 512 && Jl(e, e.return);
        break;
      case 7:
        a & 512 && Jl(e, e.return);
      default:
        Il(t, e);
    }
  }
  function jf(t, l) {
    for (t = t.child; t !== null; )
      wd(t, l), t = t.sibling;
  }
  function wd(t, l) {
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
          pt(t, t.return, f);
        }
        Df(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, ct = !0;
        } catch (f) {
          pt(t, t.return, f);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? Sh(c, !0) : Sh(t.stateNode, !1);
        } catch (f) {
          pt(t, t.return, f);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && jf(t, l);
        break;
      default:
        jf(t, l);
    }
  }
  function Df(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, a = l;
          switch (e.tag) {
            case 4:
              wd(e, a);
              break t;
            case 22:
              e.memoizedState === null && Df(e, a);
              break t;
            default:
              Df(e, a);
          }
        }
        t = t.sibling;
      }
  }
  function Cd(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Cd(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && bi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, il = !1;
  function Ul(t, l, e) {
    for (e = e.child; e !== null; )
      Md(t, l, e), e = e.sibling;
  }
  function Md(t, l, e) {
    if (sl && typeof sl.onCommitFiberUnmount == "function")
      try {
        sl.onCommitFiberUnmount(mn, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        ht || kt(e, l), Ul(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !ht && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        ht || kt(e, l), Ln(e);
        var a = Nt, n = il;
        Ve(e.type) && (Nt = e.stateNode, il = !1), Ul(
          t,
          l,
          e
        ), Uh(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), Nt = a, il = n;
        break;
      case 5:
        ht || kt(e, l), Ln(e);
      case 6:
        if (e.tag === 6 && Ln(e), a = Nt, n = il, Nt = null, Ul(
          t,
          l,
          e
        ), Nt = a, il = n, Nt !== null)
          if (il)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(e.stateNode), ct = !0;
            } catch (i) {
              pt(
                e,
                l,
                i
              );
            }
          else
            try {
              Nt.removeChild(e.stateNode), ct = !0;
            } catch (i) {
              pt(
                e,
                l,
                i
              );
            }
        break;
      case 18:
        Nt !== null && (il ? (t = Nt, bh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), sn(t)) : bh(Nt, e.stateNode));
        break;
      case 4:
        a = Nt, n = il, Nt = e.stateNode.containerInfo, il = !0, Ul(
          t,
          l,
          e
        ), Nt = a, il = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        He(2, e, l), ht || He(4, e, l), Ul(
          t,
          l,
          e
        );
        break;
      case 1:
        ht || (kt(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && vd(
          e,
          l,
          a
        )), Ul(
          t,
          l,
          e
        );
        break;
      case 21:
        Ul(
          t,
          l,
          e
        );
        break;
      case 22:
        ht = (a = ht) || e.memoizedState !== null, Ul(
          t,
          l,
          e
        ), ht = a;
        break;
      case 30:
        kt(e, l), Ul(
          t,
          l,
          e
        );
        break;
      case 7:
        ht || kt(e, l), Ul(
          t,
          l,
          e
        );
        break;
      default:
        Ul(
          t,
          l,
          e
        );
    }
  }
  function jd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        sn(t);
      } catch (e) {
        pt(l, l.return, e);
      }
    }
  }
  function Dd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        sn(t);
      } catch (e) {
        pt(l, l.return, e);
      }
  }
  function Pm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Od()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Od()), l;
      default:
        throw Error(h(435, t.tag));
    }
  }
  function pu(t, l) {
    var e = Pm(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = s0.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function tl(t, l, e) {
    var a = l.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n], u = t, c = l, f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Ve(f.type)) {
                Nt = f.stateNode, il = !1;
                break t;
              }
              break;
            case 5:
              Nt = f.stateNode, il = !1;
              break t;
            case 3:
            case 4:
              Nt = f.stateNode.containerInfo, il = !0;
              break t;
          }
          f = f.return;
        }
        if (Nt === null) throw Error(h(160));
        Md(u, c, i), Nt = null, il = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Rd(l, t, e), l = l.sibling;
  }
  var Hl = null;
  function Rd(t, l, e) {
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
        tl(l, t, e), ll(t), n & 4 && (He(3, t, t.return), Zn(3, t), He(5, t, t.return));
        break;
      case 1:
        tl(l, t, e), ll(t), n & 512 && (ht || a === null || kt(a, a.return)), n & 64 && Xt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (i = Hl, tl(l, t, e), ll(t), n & 512 && (ht || a === null || kt(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, e = t.memoizedState, a === null)
            if (e === null)
              if (t.stateNode === null)
                if (Xt)
                  t.stateNode = vh(
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
                        a = n.getElementsByTagName("title")[0], (!a || a[yn] || a[Zt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(l), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), Ft(a, l, e), a[Zt] = t, Yt(a), l = a;
                        break t;
                      case "link":
                        if (i = Xh(
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
                        a = n.createElement(l), Ft(a, l, e), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Xh(
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
                        a = n.createElement(l), Ft(a, l, e), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(h(468, l));
                    }
                    a[Zt] = t, Yt(a), l = a;
                  }
                  t.stateNode = l;
                }
              else
                Xt || yo(i, t.type, t.stateNode);
            else
              t.stateNode = Gh(
                i,
                e,
                t.memoizedProps
              );
          else
            n !== e ? (n === null ? (l = a.stateNode, l === null || ht || l.parentNode.removeChild(l)) : n.count--, e === null ? Xt || yo(i, t.type, t.stateNode) : Gh(i, e, t.memoizedProps)) : e === null && t.stateNode !== null && zf(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        tl(l, t, e), ll(t), n & 512 && (ht || a === null || kt(a, a.return)), a !== null && n & 4 && zf(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = $l, $l = !1, tl(l, t, e), $l = i, ll(t), n & 512 && (ht || a === null || kt(a, a.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Oa(l, ""), ct = !0;
          } catch (x) {
            pt(t, t.return, x);
          }
        }
        n & 4 && t.stateNode != null && (l = t.memoizedProps, zf(
          t,
          l,
          a !== null ? a.memoizedProps : l
        )), n & 1024 && (Cf = !0);
        break;
      case 6:
        if (tl(l, t, e), ll(t), n & 4) {
          if (t.stateNode === null)
            throw Error(h(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, ct = !0;
          } catch (x) {
            pt(t, t.return, x);
          }
        }
        break;
      case 3:
        if (ct = !1, Mu = null, i = Hl, Hl = li(l.containerInfo), tl(l, t, e), Hl = i, ll(t), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            sn(l.containerInfo);
          } catch (x) {
            pt(t, t.return, x);
          }
        Cf && (Cf = !1, Ud(t)), ct = !1;
        break;
      case 4:
        n = $l, $l = Xt, a = lr(), i = Hl, Hl = li(
          t.stateNode.containerInfo
        ), tl(l, t, e), ll(t), Hl = i, ct && Kn && (gu = !0), ct = a, $l = n;
        break;
      case 12:
        tl(l, t, e), ll(t);
        break;
      case 31:
        tl(l, t, e), ll(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, pu(t, l)));
        break;
      case 13:
        tl(l, t, e), ll(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (xu = rl()), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, pu(t, l)));
        break;
      case 22:
        i = t.memoizedState !== null, u = a !== null && a.memoizedState !== null;
        var c = Xt, f = ht, m = $l;
        Xt = c || i, $l = m || i, ht = f || u, tl(l, t, e), ht = f, $l = m, Xt = c, ll(t), n & 8192 && (l = t.stateNode, l._visibility = i ? l._visibility & -2 : l._visibility | 1, !i || a === null || u || Xt || ht || (l = u || ht, e = Xt, a = ht, Xt = i || Xt, ht = l, qe(t, 2), Xt = e, ht = a), !i && $l || jf(t, i)), n & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, pu(t, e))));
        break;
      case 19:
        tl(l, t, e), ll(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, pu(t, l)));
        break;
      case 30:
        n & 512 && (ht || a === null || kt(a, a.return)), n = lr(), i = Kn, u = (e & 335544064) === e, c = t.memoizedProps, Kn = u && fe(
          c.default,
          c.update
        ) !== "none", tl(l, t, e), ll(t), u && a !== null && ct && (t.flags |= 4), Kn = i, ct = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (ht || a === null || kt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        tl(l, t, e), ll(t);
    }
  }
  function ll(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (xd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = t.return; n !== null; ) {
          if (bf(n)) {
            var i = n.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (xf(n)) break;
          n = n.return;
        }
        var u = a;
        if (e == null) throw Error(h(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, f = Tf(t);
            ru(
              t,
              f,
              c,
              u
            );
            break;
          case 5:
            var m = e.stateNode;
            e.flags & 32 && (Oa(m, ""), e.flags &= -33);
            var x = Tf(t);
            ru(
              t,
              x,
              m,
              u
            );
            break;
          case 3:
          case 4:
            var z = e.stateNode.containerInfo, d = Tf(t);
            Ef(
              t,
              d,
              z,
              u
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (v) {
        pt(t, t.return, v);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Ud(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Ud(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, rn = !0, l.reset(), rn = !1), t = t.sibling;
      }
  }
  function Ka(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Hd(l, t), l = l.sibling;
    else _d(l);
  }
  function Hd(t, l) {
    var e = t.alternate;
    if (e === null) Nf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Mf = Wl = !1, zd(), Ka(l, t), !Wl && !gu) {
            if (t = kl, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                e = t[a];
                var n = t[a + 1];
                Th(e, t[a + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
          kl = null;
          break;
        case 5:
          Ka(l, t);
          break;
        case 4:
          a = Wl, Wl = !1, Ka(l, t), Wl && (gu = !0), Wl = a;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Nf(t, !1) : Ka(l, t));
          break;
        case 30:
          a = Wl, n = zd(), Wl = !1, Ka(l, t), Wl && (t.flags |= 4);
          var i = t.memoizedProps, u = t.stateNode;
          l = ce(i, u), u = ce(e.memoizedProps, u);
          var c = fe(i.default, i.update);
          c === "none" ? l = !1 : (i = e.memoizedState, e.memoizedState = null, e = t.child, nl = 0, l = wf(
            t,
            e,
            l,
            u,
            c,
            i,
            !0
          ), nl !== (i === null ? 0 : i.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (Pa(
            t,
            t.memoizedProps.onUpdate
          ), kl = n) : n !== null && (n.push.apply(n, kl), kl = n), Wl = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ka(l, t);
      }
  }
  function Il(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Ad(t, l.alternate, l), l = l.sibling;
  }
  function qe(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, a = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          He(4, e, e.return), qe(
            e,
            a
          );
          break;
        case 1:
          kt(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && vd(
            e,
            e.return,
            n
          ), qe(
            e,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Uh(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          kt(e, e.return), e.tag !== 5 && e.tag !== 27 || Ln(e), qe(
            e,
            a
          );
          break;
        case 6:
          Ln(e);
          break;
        case 26:
          kt(e, e.return), n = e.stateNode, e.memoizedState !== null || n === null || ht || n.parentNode.removeChild(n), qe(
            e,
            a
          );
          break;
        case 22:
          e.memoizedState === null && qe(
            e,
            a
          );
          break;
        case 30:
          kt(e, e.return), qe(
            e,
            a
          );
          break;
        case 7:
          kt(e, e.return);
        default:
          qe(
            e,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ql(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, i = l, u = i.flags, c = (e & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ql(
            n,
            i,
            e
          ), Zn(4, i);
          break;
        case 1:
          if (ql(
            n,
            i,
            e
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (x) {
              pt(a, a.return, x);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  ns(m[n], f);
            } catch (x) {
              pt(a, a.return, x);
            }
          }
          c && u & 64 && pd(i), Jl(i, i.return);
          break;
        case 27:
          (e & 2) !== 0 && bd(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || yd(i), ql(
            n,
            i,
            e
          ), c && a === null && u & 4 && Sf(i), Jl(i, i.return);
          break;
        case 6:
          yd(i);
          break;
        case 26:
          f = i.stateNode, i.memoizedState !== null || f === null || Xt || yo(
            li(f.ownerDocument),
            i.type,
            f
          ), ql(
            n,
            i,
            e
          ), c && a === null && u & 4 && Sf(i), Jl(i, i.return);
          break;
        case 12:
          ql(
            n,
            i,
            e
          );
          break;
        case 31:
          ql(
            n,
            i,
            e
          ), c && u & 4 && jd(n, i);
          break;
        case 13:
          ql(
            n,
            i,
            e
          ), c && u & 4 && Dd(n, i);
          break;
        case 22:
          i.memoizedState === null && ql(
            n,
            i,
            e
          ), Jl(i, i.return);
          break;
        case 30:
          ql(
            n,
            i,
            e
          ), Jl(i, i.return);
          break;
        case 7:
          Jl(i, i.return);
        default:
          ql(
            n,
            i,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Rf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Mn(e));
  }
  function Uf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Mn(t));
  }
  function wl(t, l, e, a) {
    var n = (e & 335544064) === e;
    if (l.subtreeFlags & (n ? 10262 : 10256))
      for (l = l.child; l !== null; )
        qd(
          t,
          l,
          e,
          a
        ), l = l.sibling;
    else n && Nd(l);
  }
  function qd(t, l, e, a) {
    var n = (e & 335544064) === e;
    n && l.alternate === null && l.return !== null && l.return.alternate !== null && hu(l);
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wl(
          t,
          l,
          e,
          a
        ), i & 2048 && Zn(9, l);
        break;
      case 1:
        wl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        wl(
          t,
          l,
          e,
          a
        ), n && Mf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), i & 2048 && (i = null, l.alternate !== null && (i = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== i && (l.refCount++, i != null && Mn(i)));
        break;
      case 12:
        if (i & 2048) {
          wl(
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
          } catch (m) {
            pt(l, l.return, m);
          }
        } else
          wl(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        wl(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        wl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, c = l.alternate, l.memoizedState !== null ? (n && c !== null && c.memoizedState === null && hu(c), u._visibility & 2 ? wl(
          t,
          l,
          e,
          a
        ) : Jn(
          t,
          l
        )) : (n && c !== null && c.memoizedState !== null && hu(l), u._visibility & 2 ? wl(
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
        ))), i & 2048 && Rf(c, l);
        break;
      case 24:
        wl(
          t,
          l,
          e,
          a
        ), i & 2048 && Uf(l.alternate, l);
        break;
      case 30:
        n && (i = l.alternate, i !== null && (Fl(i.child, !0), Fl(l.child, !0))), wl(
          t,
          l,
          e,
          a
        );
        break;
      default:
        wl(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ja(t, l, e, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var i = t, u = l, c = e, f = a, m = u.flags;
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
          ), Zn(8, u);
          break;
        case 23:
          break;
        case 22:
          var x = u.stateNode;
          u.memoizedState !== null ? x._visibility & 2 ? Ja(
            i,
            u,
            c,
            f,
            n
          ) : Jn(
            i,
            u
          ) : (x._visibility |= 2, Ja(
            i,
            u,
            c,
            f,
            n
          )), n && m & 2048 && Rf(
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
          ), n && m & 2048 && Uf(u.alternate, u);
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
  function Jn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            Jn(e, a), n & 2048 && Rf(
              a.alternate,
              a
            );
            break;
          case 24:
            Jn(e, a), n & 2048 && Uf(a.alternate, a);
            break;
          default:
            Jn(e, a);
        }
        l = l.sibling;
      }
  }
  var ma = 8192;
  function pa(t, l, e) {
    if (t.subtreeFlags & ma)
      for (t = t.child; t !== null; )
        Bd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Bd(t, l, e) {
    switch (t.tag) {
      case 26:
        pa(
          t,
          l,
          e
        ), t.flags & ma && (t.memoizedState !== null ? ip(
          e,
          Hl,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && Lh(e, t)));
        break;
      case 5:
        pa(
          t,
          l,
          e
        ), t.flags & ma && (t = t.stateNode, (l & 335544128) === l && Lh(e, t));
        break;
      case 3:
      case 4:
        var a = Hl;
        Hl = li(t.stateNode.containerInfo), pa(
          t,
          l,
          e
        ), Hl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ma, ma = 16777216, pa(
          t,
          l,
          e
        ), ma = a) : pa(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & ma) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var n = t.stateNode;
          n.paired = null, pl === null && (pl = /* @__PURE__ */ new Map()), pl.set(a, n);
        }
        pa(
          t,
          l,
          e
        );
        break;
      default:
        pa(
          t,
          l,
          e
        );
    }
  }
  function Yd(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function kn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, Xd(
            a,
            t
          );
        }
      Yd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gd(t), t = t.sibling;
  }
  function Gd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        kn(t), t.flags & 2048 && He(9, t, t.return);
        break;
      case 3:
        kn(t);
        break;
      case 12:
        kn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, vu(t)) : kn(t);
        break;
      default:
        kn(t);
    }
  }
  function vu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, Xd(
            a,
            t
          );
        }
      Yd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          He(8, l, l.return), vu(l);
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
  function Xd(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          He(8, e, l);
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
      if (a = e.child, a !== null) a.return = e, Qt = a;
      else
        t: for (e = t; Qt !== null; ) {
          a = Qt;
          var n = a.sibling, i = a.return;
          if (Cd(a), a === e) {
            Qt = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Qt = n;
            break t;
          }
          Qt = i;
        }
    }
  }
  var t0 = {
    getCacheForType: function(t) {
      var l = Lt(Mt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Lt(Mt).controller.signal;
    }
  }, l0 = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, bt = null, I = null, tt = 0, mt = 0, vl = null, Be = !1, ka = !1, Hf = !1, ve = 0, wt = 0, Ye = 0, va = 0, yu = 0, yl = 0, Fa = 0, Fn = null, ul = null, qf = !1, xu = 0, Qd = 0, bu = 1 / 0, Su = null, Ge = null, _t = 0, Bl = null, ya = null, Pl = 0, Bf = 0, Yf = null, Vd = null, $a = null, Wa = null, Ia = null, $n = 0, zu = null;
  function xl() {
    return (rt & 2) !== 0 && tt !== 0 ? tt & -tt : j.T !== null ? Ff() : Ko();
  }
  function Zd() {
    if (yl === 0)
      if ((tt & 536870912) === 0 || $) {
        var t = pi;
        pi <<= 1, (pi & 3932160) === 0 && (pi = 262144), yl = t;
      } else yl = 536870912;
    return t = Kt.current, t !== null && (t.flags |= 32), yl;
  }
  function Pa(t, l) {
    if (l != null) {
      var e = t.stateNode, a = e.ref;
      a === null && (a = e.ref = Eh(
        ce(t.memoizedProps, e)
      )), Wa === null && (Wa = []), Wa.push(l.bind(null, a));
    }
  }
  function cl(t, l, e) {
    (t === bt && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (tn(t, 0), Xe(
      t,
      tt,
      yl,
      !1
    )), vn(t, e), ((rt & 2) === 0 || t !== bt) && (t === bt && ((rt & 2) === 0 && (va |= e), wt === 4 && Xe(
      t,
      tt,
      yl,
      !1
    )), te(t));
  }
  function Ld(t, l, e) {
    if ((rt & 6) !== 0) throw Error(h(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || pn(t, l), n = a ? n0(t, l) : Xf(t, l, !0), i = a;
    do {
      if (n === 0) {
        ka && !a && Xe(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, i && !e0(e)) {
          n = Xf(t, l, !1), i = !1;
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
              n = Fn;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (tn(c, u).flags |= 256), u = Xf(
                c,
                u,
                !1
              ), u !== 2 && u !== 6) {
                if (Hf && !f) {
                  c.errorRecoveryDisabledLanes |= i, va |= i, n = 4;
                  break t;
                }
                i = ul, ul = n, i !== null && (ul === null ? ul = i : ul.push.apply(
                  ul,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          tn(t, 0), Xe(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              Xe(
                a,
                l,
                yl,
                !Be
              );
              break t;
            case 2:
              ul = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((l & 62914560) === l && (n = xu + 300 - rl(), 10 < n)) {
            if (Xe(
              a,
              l,
              yl,
              !Be
            ), yi(a, 0, !0) !== 0) break t;
            Pl = l, a.timeoutHandle = uo(
              Kd.bind(
                null,
                a,
                e,
                ul,
                Su,
                qf,
                l,
                yl,
                va,
                Fa,
                Be,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Kd(
            a,
            e,
            ul,
            Su,
            qf,
            l,
            yl,
            va,
            Fa,
            Be,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    te(t);
  }
  function Kd(t, l, e, a, n, i, u, c, f, m, x, z, d, v) {
    t.timeoutHandle = -1;
    var _ = l.subtreeFlags, M = (i & 335544064) === i;
    if (z = null, (M || _ & 8192 || (_ & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zl
    }, pl = null, Bd(
      l,
      i,
      z
    ), M && (_ = z, M = t.containerInfo, M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition, M != null && (_.count++, _.waitingForViewTransition = !0, _ = ni.bind(_), M.finished.then(_, _))), _ = (i & 62914560) === i ? xu - rl() : (i & 4194048) === i ? Qd - rl() : 0, _ = up(
      z,
      _
    ), _ !== null)) {
      Pl = i, t.cancelPendingCommit = _(
        th.bind(
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
          m,
          x,
          z,
          null,
          d,
          v
        )
      ), Xe(t, i, u, !m);
      return;
    }
    th(
      t,
      l,
      i,
      e,
      a,
      n,
      u,
      c,
      f,
      m,
      x,
      z
    );
  }
  function e0(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!gl(i(), n)) return !1;
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
  function Xe(t, l, e, a) {
    l = Xo(t, l), l &= ~yu, l &= ~va, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var i = 31 - dl(n), u = 1 << i;
      a[i] = -1, n &= ~u;
    }
    e !== 0 && Vo(t, e, l);
  }
  function Tu() {
    return (rt & 6) === 0 ? (Wn(0), !1) : !0;
  }
  function Gf() {
    if (I !== null) {
      if (mt === 0)
        var t = I.return;
      else
        t = I, se = ia = null, Jc(t), Ga = null, Rn = 0, t = I;
      for (; t !== null; )
        md(t.alternate, t), t = t.return;
      I = null;
    }
  }
  function tn(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, _0(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Pl = 0, Gf(), bt = t, I = e = oe(t.current, null), tt = l, mt = 0, vl = null, Be = !1, ka = pn(t, l), Hf = !1, Fa = yl = yu = va = Ye = wt = 0, ul = Fn = null, qf = !1, ve = Xo(t, l), Mi(), e;
  }
  function Jd(t, l) {
    J = null, j.H = eu, l === Ya || l === Qi ? (l = ts(), mt = 3) : l === Rc ? (l = ts(), mt = 4) : mt = l === of ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, vl = l, I === null && (wt = 1, au(
      t,
      Nl(l, t.current)
    ));
  }
  function kd() {
    var t = Kt.current;
    return t === null ? !0 : (tt & 4194048) === tt ? Wt === null : (tt & 62914560) === tt || (tt & 536870912) !== 0 ? t === Wt : !1;
  }
  function Fd() {
    var t = j.H;
    return j.H = eu, t === null ? eu : t;
  }
  function $d() {
    var t = j.A;
    return j.A = t0, t;
  }
  function Eu() {
    wt = 4, Be || (tt & 4194048) !== tt && Kt.current !== null || (ka = !0), (Ye & 134217727) === 0 && (va & 134217727) === 0 || bt === null || Xe(
      bt,
      tt,
      yl,
      !1
    );
  }
  function Xf(t, l, e) {
    var a = rt;
    rt |= 2;
    var n = Fd(), i = $d();
    (bt !== t || tt !== l) && (Su = null, tn(t, l)), l = !1;
    var u = wt;
    t: do
      try {
        if (mt !== 0 && I !== null) {
          var c = I, f = vl;
          switch (mt) {
            case 8:
              Gf(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Kt.current === null && (l = !0);
              var m = mt;
              if (mt = 0, vl = null, ln(t, c, f, m), e && ka) {
                u = 0;
                break t;
              }
              break;
            default:
              m = mt, mt = 0, vl = null, ln(t, c, f, m);
          }
        }
        a0(), u = wt;
        break;
      } catch (x) {
        Jd(t, x);
      }
    while (!0);
    return l && t.shellSuspendCounter++, se = ia = null, rt = a, j.H = n, j.A = i, I === null && (bt = null, tt = 0, Mi()), u;
  }
  function a0() {
    for (; I !== null; ) Wd(I);
  }
  function n0(t, l) {
    var e = rt;
    rt |= 2;
    var a = Fd(), n = $d();
    bt !== t || tt !== l ? (Su = null, bu = rl() + 500, tn(t, l)) : ka = pn(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && I !== null) {
          l = I;
          var i = vl;
          l: switch (mt) {
            case 1:
              mt = 0, vl = null, ln(t, l, i, 1);
              break;
            case 2:
            case 9:
              if (Ir(i)) {
                mt = 0, vl = null, Id(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || bt !== t || (mt = 7), te(t);
              }, i.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Ir(i) ? (mt = 0, vl = null, Id(l)) : (mt = 0, vl = null, ln(t, l, i, 7));
              break;
            case 5:
              var u = null;
              switch (I.tag) {
                case 26:
                  u = I.memoizedState;
                case 5:
                case 27:
                  var c = I;
                  if (u ? Vh(u) : c.stateNode.complete) {
                    mt = 0, vl = null;
                    var f = c.sibling;
                    if (f !== null) I = f;
                    else {
                      var m = c.return;
                      m !== null ? (I = m, Nu(m)) : I = null;
                    }
                    break l;
                  }
              }
              mt = 0, vl = null, ln(t, l, i, 5);
              break;
            case 6:
              mt = 0, vl = null, ln(t, l, i, 6);
              break;
            case 8:
              Gf(), wt = 6;
              break t;
            default:
              throw Error(h(462));
          }
        }
        i0();
        break;
      } catch (x) {
        Jd(t, x);
      }
    while (!0);
    return se = ia = null, j.H = a, j.A = n, rt = e, I !== null ? 0 : (bt = null, tt = 0, Mi(), wt);
  }
  function i0() {
    for (; I !== null && !zg(); )
      Wd(I);
  }
  function Wd(t) {
    var l = hd(t.alternate, t, ve);
    t.memoizedProps = t.pendingProps, l === null ? Nu(t) : I = l;
  }
  function Id(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = ud(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          tt
        );
        break;
      case 11:
        l = ud(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          tt
        );
        break;
      case 5:
        Jc(l);
        var a = l;
        a === Gt && ($ ? (qi(a), a.tag === 5 && a.stateNode != null && (Tt = a.stateNode)) : (qi(a), $ = !0));
      default:
        md(e, l), l = I = Xr(l, ve), l = hd(e, l, ve);
    }
    t.memoizedProps = t.pendingProps, l === null ? Nu(t) : I = l;
  }
  function ln(t, l, e, a) {
    se = ia = null, Jc(l), Ga = null, Rn = 0;
    var n = l.return;
    try {
      if (Km(
        t,
        n,
        l,
        e,
        tt
      )) {
        wt = 1, au(
          t,
          Nl(e, t.current)
        ), I = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw I = n, i;
      wt = 1, au(
        t,
        Nl(e, t.current)
      ), I = null;
      return;
    }
    l.flags & 32768 ? ($ || a === 1 ? t = !0 : ka || (tt & 536870912) !== 0 ? t = !1 : (Be = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Kt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Pd(l, t)) : Nu(l);
  }
  function Nu(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Pd(
          l,
          Be
        );
        return;
      }
      t = l.return;
      var e = $m(
        l.alternate,
        l,
        ve
      );
      if (e !== null) {
        I = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        I = l;
        return;
      }
      I = l = t;
    } while (l !== null);
    wt === 0 && (wt = 5);
  }
  function Pd(t, l) {
    do {
      var e = Wm(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, I = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        I = t;
        return;
      }
      I = t = e;
    } while (t !== null);
    wt = 6, I = null;
  }
  function th(t, l, e, a, n, i, u, c, f, m, x, z) {
    t.cancelPendingCommit = null;
    do
      _u();
    while (_t !== 0);
    if ((rt & 6) !== 0) throw Error(h(327));
    if (l !== null) {
      if (l === t.current) throw Error(h(177));
      t === bt && (I = bt = null, tt = 0), ya = l, Bl = t, Pl = e, Yf = n, Vd = a, u0(
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
  function u0(t, l, e, a, n, i, u) {
    var c = l.lanes | l.childLanes;
    if (Bf = c, c |= Sc, jg(
      t,
      e,
      c,
      a,
      n,
      i
    ), Wa = null, (e & 335544064) === e ? (Ia = Rm(t), a = 10262) : (Ia = null, a = 10256), (l.subtreeFlags & a) !== 0 || (l.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, d0(gi, function() {
      return Lf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), su = !1, a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
      a = j.T, j.T = null, n = V.p, V.p = 2, i = rt, rt |= 4;
      try {
        Im(t, l, e);
      } finally {
        rt = i, V.p = n, j.T = a;
      }
    }
    _t = 1, su ? $a = j0(
      u,
      t.containerInfo,
      Ia,
      Qf,
      Vf,
      f0,
      Zf,
      Lf,
      c0
    ) : (Qf(), Vf(), Zf());
  }
  function c0(t) {
    if (_t !== 0) {
      var l = Bl.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function f0() {
    _t === 3 && (_t = 0, Hd(ya, Bl), _t = 4);
  }
  function Qf() {
    if (_t === 1) {
      _t = 0;
      var t = Bl, l = ya, e = Pl, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var n = V.p;
        V.p = 2;
        var i = rt;
        rt |= 4;
        try {
          Kn = gu = !1, Rd(l, t, e), e = ao;
          var u = Mr(t.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (u !== c && c && c.ownerDocument && Cr(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && pc(c)) {
              var m = f.start, x = f.end;
              if (x === void 0 && (x = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  x,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, d = z && z.defaultView || window;
                if (d.getSelection) {
                  var v = d.getSelection(), _ = c.textContent.length, M = Math.min(f.start, _), k = f.end === void 0 ? M : Math.min(f.end, _);
                  !v.extend && M > k && (u = k, k = M, M = u);
                  var g = wr(
                    c,
                    M
                  ), r = wr(
                    c,
                    k
                  );
                  if (g && r && (v.rangeCount !== 1 || v.anchorNode !== g.node || v.anchorOffset !== g.offset || v.focusNode !== r.node || v.focusOffset !== r.offset)) {
                    var p = z.createRange();
                    p.setStart(g.node, g.offset), v.removeAllRanges(), M > k ? (v.addRange(p), v.extend(r.node, r.offset)) : (p.setEnd(r.node, r.offset), v.addRange(p));
                  }
                }
              }
            }
            for (z = [], v = c; v = v.parentNode; )
              v.nodeType === 1 && z.push({
                element: v,
                left: v.scrollLeft,
                top: v.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var S = z[c];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          rn = !!eo, ao = eo = null;
        } finally {
          rt = i, V.p = n, j.T = a;
        }
      }
      t.current = l, _t = 2;
    }
  }
  function Vf() {
    if (_t === 2) {
      _t = 0;
      var t = Bl, l = ya, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var a = V.p;
        V.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Ad(t, l.alternate, l);
        } finally {
          rt = n, V.p = a, j.T = e;
        }
      }
      _t = 3;
    }
  }
  function Zf() {
    if (_t === 4 || _t === 3) {
      _t = 0;
      var t = $a;
      $a = null, Tg();
      var l = Bl, e = ya, a = Pl, n = Vd, i = (a & 335544064) === a ? 10262 : 10256;
      if ((e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? _t = 5 : (_t = 0, ya = Bl = null, lh(l, l.pendingLanes)), i = l.pendingLanes, i === 0 && (Ge = null), Iu(a), e = e.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
        try {
          sl.onCommitFiberRoot(
            mn,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = j.T, i = V.p, V.p = 2, j.T = null;
        try {
          for (var u = l.onRecoverableError, c = 0; c < n.length; c++) {
            var f = n[c];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          j.T = e, V.p = i;
        }
      }
      if (n = Wa, u = Ia, Ia = null, n !== null && (Wa = null, u === null && (u = []), t !== null))
        for (f = 0; f < n.length; f++)
          e = (0, n[f])(
            u
          ), e !== void 0 && t.finished.finally(e);
      (Pl & 3) !== 0 && _u(), te(l), i = l.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? l === zu ? $n++ : ($n = 0, zu = l) : ($n = 0, zu = null), Wn(0);
    }
  }
  function lh(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Mn(l)));
  }
  function _u() {
    return $a !== null && ($a.skipTransition(), $a = null), Qf(), Vf(), Zf(), Lf();
  }
  function Lf() {
    if (_t !== 5) return !1;
    var t = Bl, l = Bf;
    Bf = 0;
    var e = Iu(Pl), a = j.T, n = V.p;
    try {
      V.p = 32 > e ? 32 : e, j.T = null, e = Yf, Yf = null;
      var i = Bl, u = Pl;
      if (_t = 0, ya = Bl = null, Pl = 0, (rt & 6) !== 0) throw Error(h(331));
      var c = rt;
      if (rt |= 4, Gd(i.current), qd(
        i,
        i.current,
        u,
        e
      ), rt = c, Wn(0, !1), sl && typeof sl.onPostCommitFiberRoot == "function")
        try {
          sl.onPostCommitFiberRoot(mn, i);
        } catch {
        }
      return !0;
    } finally {
      V.p = n, j.T = a, lh(t, l);
    }
  }
  function eh(t, l, e) {
    l = Nl(e, l), l = ff(t.stateNode, l, 2), t = je(t, l, 2), t !== null && (vn(t, 2), te(t));
  }
  function pt(t, l, e) {
    if (t.tag === 3)
      eh(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          eh(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ge === null || !Ge.has(a))) {
            t = Nl(e, t), e = Is(2), a = je(l, e, 2), a !== null && (Ps(
              e,
              a,
              l,
              t
            ), vn(a, 2), te(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Kf(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new l0();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Hf = !0, n.add(e), t = o0.bind(null, t, l, e), l.then(t, t));
  }
  function o0(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, bt === t && (tt & e) === e && ((wt === 4 || wt === 3 && (tt & 62914560) === tt && 300 > rl() - xu) && (rt & 2) === 0 ? tn(t, 0) : yu |= e, Fa === tt && (Fa = 0)), te(t);
  }
  function ah(t, l) {
    l === 0 && (l = Qo()), t = ea(t, l), t !== null && (vn(t, l), te(t));
  }
  function r0(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), ah(t, e);
  }
  function s0(t, l) {
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
        throw Error(h(314));
    }
    a !== null && a.delete(l), ah(t, e);
  }
  function d0(t, l) {
    return ku(t, l);
  }
  var en = null, an = null, Jf = !1, Ou = !1, kf = !1, Qe = 0;
  function te(t) {
    t !== an && t.next === null && (an === null ? en = an = t : an = an.next = t), Ou = !0, Jf || (Jf = !0, g0());
  }
  function Wn(t, l) {
    if (!kf && Ou) {
      kf = !0;
      do
        for (var e = !1, a = en; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes, c = a.pingedLanes;
              i = (1 << 31 - dl(42 | t) + 1) - 1, i &= n & ~(u & ~c), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (e = !0, ch(a, i));
          } else
            i = tt, i = yi(
              a,
              a === bt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || pn(a, i) || (e = !0, ch(a, i));
          a = a.next;
        }
      while (e);
      kf = !1;
    }
  }
  function h0() {
    nh();
  }
  function nh() {
    Ou = Jf = !1;
    var t = 0;
    Qe !== 0 && N0() && (t = Qe);
    for (var l = rl(), e = null, a = en; a !== null; ) {
      var n = a.next, i = ih(a, l);
      i === 0 ? (a.next = null, e === null ? en = n : e.next = n, n === null && (an = e)) : (e = a, (t !== 0 || (i & 3) !== 0) && (Ou = !0)), a = n;
    }
    _t !== 0 && _t !== 5 || Wn(t), Qe !== 0 && (Qe = 0);
  }
  function ih(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - dl(i), c = 1 << u, f = n[u];
      f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[u] = Mg(c, l)) : f <= l && (t.expiredLanes |= c), i &= ~c;
    }
    if (l = bt, e = tt, e = yi(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Fu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || pn(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && Fu(a), Iu(e)) {
        case 2:
        case 8:
          e = Yo;
          break;
        case 32:
          e = gi;
          break;
        case 268435456:
          e = Go;
          break;
        default:
          e = gi;
      }
      return a = uh.bind(null, t), e = ku(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && Fu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function uh(t, l) {
    if (_t !== 0 && _t !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (_u() && t.callbackNode !== e)
      return null;
    var a = tt;
    return a = yi(
      t,
      t === bt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Ld(t, a, l), ih(t, rl()), t.callbackNode != null && t.callbackNode === e ? uh.bind(null, t) : null);
  }
  function ch(t, l) {
    if (_u()) return null;
    Ld(t, l, !0);
  }
  function g0() {
    O0(function() {
      (rt & 6) !== 0 ? ku(
        Bo,
        h0
      ) : nh();
    });
  }
  function Ff() {
    if (Qe === 0) {
      var t = fa;
      t === 0 && (t = mi, mi <<= 1, (mi & 261888) === 0 && (mi = 256)), Qe = t;
    }
    return Qe;
  }
  function fh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ti(t);
  }
  function m0(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var i = fh(
        (n[el] || null).action
      ), u = a.submitter;
      u && (l = (l = u[el] || null) ? fh(l.formAction) : u.getAttribute("formAction"), l !== null && (i = l, u = null));
      var c = new Oi(
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
                if (Qe !== 0) {
                  var f = new FormData(n, u);
                  ef(
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
                typeof i == "function" && (c.preventDefault(), f = new FormData(n, u), ef(
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
  for (var $f = 0; $f < bc.length; $f++) {
    var Wf = bc[$f], p0 = Wf.toLowerCase(), v0 = Wf[0].toUpperCase() + Wf.slice(1);
    Rl(
      p0,
      "on" + v0
    );
  }
  Rl(Rr, "onAnimationEnd"), Rl(Ur, "onAnimationIteration"), Rl(Hr, "onAnimationStart"), Rl("dblclick", "onDoubleClick"), Rl("focusin", "onFocus"), Rl("focusout", "onBlur"), Rl(_m, "onTransitionRun"), Rl(Om, "onTransitionStart"), Rl(Am, "onTransitionCancel"), Rl(qr, "onTransitionEnd"), Na("onMouseEnter", ["mouseout", "mouseover"]), Na("onMouseLeave", ["mouseout", "mouseover"]), Na("onPointerEnter", ["pointerout", "pointerover"]), Na("onPointerLeave", ["pointerout", "pointerover"]), Pe(
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
  var In = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), y0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(In)
  );
  function oh(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (l)
          for (var u = a.length - 1; 0 <= u; u--) {
            var c = a[u], f = c.instance, m = c.currentTarget;
            if (c = c.listener, f !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = m;
            try {
              i(n);
            } catch (x) {
              Ci(x);
            }
            n.currentTarget = null, i = f;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (c = a[u], f = c.instance, m = c.currentTarget, c = c.listener, f !== i && n.isPropagationStopped())
              break t;
            i = c, n.currentTarget = m;
            try {
              i(n);
            } catch (x) {
              Ci(x);
            }
            n.currentTarget = null, i = f;
          }
      }
    }
  }
  function P(t, l) {
    var e = l[ko];
    e === void 0 && (e = l[ko] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (rh(l, t, 2, !1), e.add(a));
  }
  function If(t, l, e) {
    var a = 0;
    l && (a |= 4), rh(
      e,
      t,
      a,
      l
    );
  }
  var Au = "_reactListening" + Math.random().toString(36).slice(2);
  function Pf(t) {
    if (!t[Au]) {
      t[Au] = !0, Wo.forEach(function(e) {
        e !== "selectionchange" && (y0.has(e) || If(e, !1, t), If(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Au] || (l[Au] = !0, If("selectionchange", !1, l));
    }
  }
  function rh(t, l, e, a) {
    switch (Ph(l)) {
      case 2:
        var n = rp;
        break;
      case 8:
        n = sp;
        break;
      default:
        n = bo;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !uc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function to(t, l, e, a, n) {
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
    rr(function() {
      var m = i, x = nc(e), z = [];
      t: {
        var d = Br.get(t);
        if (d !== void 0) {
          var v = Oi, _ = t;
          switch (t) {
            case "keypress":
              if (Ni(e) === 0) break t;
            case "keydown":
            case "keyup":
              v = em;
              break;
            case "focusin":
              _ = "focus", v = rc;
              break;
            case "focusout":
              _ = "blur", v = rc;
              break;
            case "beforeblur":
            case "afterblur":
              v = rc;
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
              v = hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = cm;
              break;
            case Rr:
            case Ur:
            case Hr:
              v = Jg;
              break;
            case qr:
              v = om;
              break;
            case "scroll":
            case "scrollend":
              v = Qg;
              break;
            case "wheel":
              v = sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Fg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = mr;
              break;
            case "submit":
              v = im;
              break;
            case "toggle":
            case "beforetoggle":
              v = hm;
          }
          var M = (l & 4) !== 0, k = !M && (t === "scroll" || t === "scrollend"), g = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var r = m, p; r !== null; ) {
            var S = r;
            if (p = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || p === null || g === null || (S = bn(r, g), S != null && M.push(
              Pn(r, S, p)
            )), k) break;
            r = r.return;
          }
          0 < M.length && (d = new v(
            d,
            _,
            null,
            e,
            x
          ), z.push({ event: d, listeners: M }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (v = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", v && e !== ac && (_ = e.relatedTarget || e.fromElement) && (Ie(_) || _[za]))
            break t;
          (d || v) && (_ = x.window === x ? x : (v = x.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (v = e.relatedTarget || e.toElement, d = m, v = v ? Ie(v) : null, v !== null && (k = B(v), M = v.tag, v !== k || M !== 5 && M !== 27 && M !== 6) && (v = null)) : (d = null, v = m), d !== v && (M = hr, S = "onMouseLeave", g = "onMouseEnter", r = "mouse", (t === "pointerout" || t === "pointerover") && (M = mr, S = "onPointerLeave", g = "onPointerEnter", r = "pointer"), k = d == null ? _ : xn(d), p = v == null ? _ : xn(v), _ = new M(
            S,
            r + "leave",
            d,
            e,
            x
          ), _.target = k, _.relatedTarget = p, S = null, Ie(x) === m && (M = new M(
            g,
            r + "enter",
            v,
            e,
            x
          ), M.target = p, M.relatedTarget = k, S = M), k = S, M = d && v ? fl(
            d,
            v,
            x0
          ) : null, d !== null && sh(
            z,
            _,
            d,
            M,
            !1
          ), v !== null && k !== null && sh(
            z,
            k,
            v,
            M,
            !0
          )));
        }
        t: {
          if (d = m ? xn(m) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file")
            var C = Tr;
          else if (Sr(d))
            if (Er)
              C = Tm;
            else {
              C = Sm;
              var lt = bm;
            }
          else
            v = d.nodeName, !v || v.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? m && ec(m.elementType) && (C = Tr) : C = zm;
          if (C && (C = C(t, m))) {
            zr(
              z,
              C,
              e,
              x
            );
            break t;
          }
          lt && lt(t, d, m);
        }
        switch (lt = m ? xn(m) : window, t) {
          case "focusin":
            (Sr(lt) || lt.contentEditable === "true") && (Ma = lt, vc = m, An = null);
            break;
          case "focusout":
            An = vc = Ma = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, jr(z, e, x);
            break;
          case "selectionchange":
            if (Nm) break;
          case "keydown":
          case "keyup":
            jr(z, e, x);
        }
        var D;
        if (dc)
          t: {
            switch (t) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break t;
              case "compositionend":
                Y = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break t;
            }
            Y = void 0;
          }
        else
          Ca ? xr(t, e) && (Y = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Y = "onCompositionStart");
        Y && (pr && e.locale !== "ko" && (Ca || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Ca && (D = sr()) : (Te = x, cc = "value" in Te ? Te.value : Te.textContent, Ca = !0)), lt = wu(m, Y), 0 < lt.length && (Y = new gr(
          Y,
          t,
          null,
          e,
          x
        ), z.push({ event: Y, listeners: lt }), D ? Y.data = D : (D = br(e), D !== null && (Y.data = D)))), (D = mm ? pm(t, e) : vm(t, e)) && (Y = wu(m, "onBeforeInput"), 0 < Y.length && (lt = new gr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          x
        ), z.push({
          event: lt,
          listeners: Y
        }), lt.data = D)), m0(
          z,
          t,
          m,
          e,
          x
        );
      }
      oh(z, l);
    });
  }
  function Pn(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function wu(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = bn(t, e), n != null && a.unshift(
        Pn(t, n, i)
      ), n = bn(t, l), n != null && a.push(
        Pn(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function x0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sh(t, l, e, a, n) {
    for (var i = l._reactName, u = []; e !== null && e !== a; ) {
      var c = e, f = c.alternate, m = c.stateNode;
      if (c = c.tag, f !== null && f === a) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (f = m, n ? (m = bn(e, i), m != null && u.unshift(
        Pn(e, m, f)
      )) : n || (m = bn(e, i), m != null && u.push(
        Pn(e, m, f)
      ))), e = e.return;
    }
    u.length !== 0 && t.push({ event: l, listeners: u });
  }
  var b0 = /\r\n?/g, S0 = /\u0000|\uFFFD/g;
  function dh(t) {
    return (typeof t == "string" ? t : "" + t).replace(b0, `
`).replace(S0, "");
  }
  function hh(t, l) {
    return l = dh(l), dh(t) === l;
  }
  function vt(t, l, e, a, n, i) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          l === "body" || l === "textarea" && a === "" || Oa(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          l !== "body" && Oa(t, "" + a);
        else return;
        break;
      case "className":
        zi(t, "class", a);
        break;
      case "tabIndex":
        zi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zi(t, e, a);
        break;
      case "style":
        fr(t, a, i);
        return;
      case "data":
        if (l !== "object") {
          zi(t, "data", a);
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
        a = Ti(a), t.setAttribute(e, a);
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
          typeof i == "function" && (e === "formAction" ? (l !== "input" && vt(t, l, "name", n.name, n, null), vt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), vt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), vt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (vt(t, l, "encType", n.encType, n, null), vt(t, l, "method", n.method, n, null), vt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Ti(a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Zl);
        return;
      case "onScroll":
        a != null && P("scroll", t);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(h(60));
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
        e = Ti(a), t.setAttributeNS(
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
        P("beforetoggle", t), P("toggle", t), Si(t, "popover", a);
        break;
      case "xlinkActuate":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ie(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ie(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ie(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ie(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Si(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = Gg.get(e) || e, Si(t, e, a);
        else return;
    }
    ct = !0;
  }
  function lo(t, l, e, a, n, i) {
    switch (e) {
      case "style":
        fr(t, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(h(60));
            (i != null ? i.__html : void 0) !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Oa(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Oa(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && P("scroll", t);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Zl);
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
        if (!Io.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), i = e.slice(2, n ? e.length - 7 : void 0), l = t[el] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(i, l, n), typeof a == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(i, a, n);
              break t;
            }
            ct = !0, e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Si(t, e, a);
          }
        return;
    }
    ct = !0;
  }
  function Ft(t, l, e) {
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
        P("error", t), P("load", t);
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
                  throw Error(h(137, l));
                default:
                  vt(t, l, i, u, e, null);
              }
          }
        n && vt(t, l, "srcSet", e.srcSet, e, null), a && vt(t, l, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", t);
        var c = i = u = n = null, f = null, m = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var x = e[a];
            if (x != null)
              switch (a) {
                case "name":
                  n = x;
                  break;
                case "type":
                  u = x;
                  break;
                case "checked":
                  f = x;
                  break;
                case "defaultChecked":
                  m = x;
                  break;
                case "value":
                  i = x;
                  break;
                case "defaultValue":
                  c = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(h(137, l));
                  break;
                default:
                  vt(t, l, a, x, e, null);
              }
          }
        nr(
          t,
          i,
          c,
          f,
          m,
          u,
          n,
          !1
        );
        return;
      case "select":
        P("invalid", t), a = u = i = null;
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
                vt(t, l, n, c, e, null);
            }
        l = i, e = u, t.multiple = !!a, l != null ? _a(t, !!a, l, !1) : e != null && _a(t, !!a, e, !0);
        return;
      case "textarea":
        P("invalid", t), i = n = a = null;
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
                if (c != null) throw Error(h(91));
                break;
              default:
                vt(t, l, u, c, e, null);
            }
        ur(t, a, n, i);
        return;
      case "option":
        for (f in e)
          if (e.hasOwnProperty(f) && (a = e[f], a != null))
            switch (f) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                vt(t, l, f, a, e, null);
            }
        return;
      case "dialog":
        P("beforetoggle", t), P("toggle", t), P("cancel", t), P("close", t);
        break;
      case "iframe":
      case "object":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < In.length; a++)
          P(In[a], t);
        break;
      case "image":
        P("error", t), P("load", t);
        break;
      case "details":
        P("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", t), P("load", t);
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
        for (m in e)
          if (e.hasOwnProperty(m) && (a = e[m], a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, l));
              default:
                vt(t, l, m, a, e, null);
            }
        return;
      default:
        if (ec(l)) {
          for (x in e)
            e.hasOwnProperty(x) && (a = e[x], a !== void 0 && lo(
              t,
              l,
              x,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && vt(t, l, c, a, e, null));
  }
  var z0 = {};
  function T0(t, l, e, a) {
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
        var n = null, i = null, u = null, c = null, f = null, m = null, x = null;
        for (v in e) {
          var z = e[v];
          if (e.hasOwnProperty(v) && z != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                a.hasOwnProperty(v) || vt(t, l, v, null, a, z);
            }
        }
        for (var d in a) {
          var v = a[d];
          if (z = e[d], a.hasOwnProperty(d) && (v != null || z != null))
            switch (d) {
              case "type":
                v !== z && (ct = !0), i = v;
                break;
              case "name":
                v !== z && (ct = !0), n = v;
                break;
              case "checked":
                v !== z && (ct = !0), m = v;
                break;
              case "defaultChecked":
                v !== z && (ct = !0), x = v;
                break;
              case "value":
                v !== z && (ct = !0), u = v;
                break;
              case "defaultValue":
                v !== z && (ct = !0), c = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(h(137, l));
                break;
              default:
                v !== z && vt(
                  t,
                  l,
                  d,
                  v,
                  a,
                  z
                );
            }
        }
        tc(
          t,
          u,
          c,
          f,
          m,
          x,
          i,
          n
        );
        return;
      case "select":
        v = u = c = d = null;
        for (i in e)
          if (f = e[i], e.hasOwnProperty(i) && f != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                v = f;
              default:
                a.hasOwnProperty(i) || vt(
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
                i !== f && (ct = !0), d = i;
                break;
              case "defaultValue":
                i !== f && (ct = !0), c = i;
                break;
              case "multiple":
                i !== f && (ct = !0), u = i;
              default:
                i !== f && vt(
                  t,
                  l,
                  n,
                  i,
                  a,
                  f
                );
            }
        l = c, e = u, a = v, d != null ? _a(t, !!e, d, !1) : !!a != !!e && (l != null ? _a(t, !!e, l, !0) : _a(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        v = d = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, l, c, null, a, n);
            }
        for (u in a)
          if (n = a[u], i = e[u], a.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                n !== i && (ct = !0), d = n;
                break;
              case "defaultValue":
                n !== i && (ct = !0), v = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(h(91));
                break;
              default:
                n !== i && vt(t, l, u, n, a, i);
            }
        ir(t, d, v);
        return;
      case "option":
        for (var _ in e)
          if (d = e[_], e.hasOwnProperty(_) && d != null && !a.hasOwnProperty(_))
            switch (_) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(
                  t,
                  l,
                  _,
                  null,
                  a,
                  d
                );
            }
        for (f in a)
          if (d = a[f], v = e[f], a.hasOwnProperty(f) && d !== v && (d != null || v != null))
            switch (f) {
              case "selected":
                d !== v && (ct = !0), t.selected = d && typeof d != "function" && typeof d != "symbol";
                break;
              default:
                vt(
                  t,
                  l,
                  f,
                  d,
                  a,
                  v
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
          d = e[M], e.hasOwnProperty(M) && d != null && !a.hasOwnProperty(M) && vt(t, l, M, null, a, d);
        for (m in a)
          if (d = a[m], v = e[m], a.hasOwnProperty(m) && d !== v && (d != null || v != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null)
                  throw Error(h(137, l));
                break;
              default:
                vt(
                  t,
                  l,
                  m,
                  d,
                  a,
                  v
                );
            }
        return;
      default:
        if (ec(l)) {
          for (var k in e)
            d = e[k], e.hasOwnProperty(k) && d !== void 0 && !a.hasOwnProperty(k) && lo(
              t,
              l,
              k,
              void 0,
              a,
              d
            );
          for (x in a)
            d = a[x], v = e[x], !a.hasOwnProperty(x) || d === v || d === void 0 && v === void 0 || lo(
              t,
              l,
              x,
              d,
              a,
              v
            );
          return;
        }
    }
    for (var g in e)
      d = e[g], e.hasOwnProperty(g) && d != null && !a.hasOwnProperty(g) && vt(t, l, g, null, a, d);
    for (z in a)
      d = a[z], v = e[z], !a.hasOwnProperty(z) || d === v || d == null && v == null || vt(t, l, z, d, a, v);
  }
  function gh(t) {
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
  function E0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], i = n.transferSize, u = n.initiatorType, c = n.duration;
        if (i && c && gh(u)) {
          for (u = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a], m = f.startTime;
            if (m > c) break;
            var x = f.transferSize, z = f.initiatorType;
            x && gh(z) && (f = f.responseEnd, u += x * (f < c ? 1 : (c - m) / (f - m)));
          }
          if (--a, l += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var eo = null, ao = null;
  function ti(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function mh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ph(t, l) {
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
  function vh(t, l, e, a) {
    return e = ti(
      e
    ).createElement(t), e[Zt] = a, e[el] = l, Ft(e, t, l), Yt(e), e;
  }
  function no(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var io = null;
  function N0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === io ? !1 : (io = t, !0) : (io = null, !1);
  }
  var uo = typeof setTimeout == "function" ? setTimeout : void 0, _0 = typeof clearTimeout == "function" ? clearTimeout : void 0, yh = typeof Promise == "function" ? Promise : void 0, xh = typeof requestAnimationFrame == "function" ? requestAnimationFrame : uo, O0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof yh < "u" ? function(t) {
    return yh.resolve(null).then(t).catch(A0);
  } : uo;
  function A0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ve(t) {
    return t === "head";
  }
  function bh(t, l) {
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
          mo(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, mo(e);
          for (var i = e.firstChild; i; ) {
            var u = i.nextSibling, c = i.nodeName;
            i[yn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = u;
          }
        } else
          e === "body" && mo(t.ownerDocument.body);
      e = n;
    } while (e);
    sn(l);
  }
  function Sh(t, l) {
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
  function zh(t, l, e) {
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
  function Th(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function w0(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function co(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return w0(l, e, t);
  }
  function C0(t) {
    return t.documentElement.clientHeight;
  }
  function M0(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function j0(t, l, e, a, n, i, u, c, f) {
    var m = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var x = m.startViewTransition({
        update: function() {
          var d = m.defaultView, v = d.navigation && d.navigation.transition, _ = m.fonts.status;
          a();
          var M = [];
          if (_ === "loaded" && (C0(m), m.fonts.status === "loading" && M.push(m.fonts.ready)), _ = M.length, t !== null)
            for (var k = t.suspenseyImages, g = 0, r = 0; r < k.length; r++) {
              var p = k[r];
              if (!p.complete) {
                var S = p.getBoundingClientRect();
                if (0 < S.bottom && 0 < S.right && S.top < d.innerHeight && S.left < d.innerWidth) {
                  if (g += Zh(p), g > ju) {
                    M.length = _;
                    break;
                  }
                  p = new Promise(
                    M0.bind(p)
                  ), M.push(p);
                }
              }
            }
          if (0 < M.length)
            return d = Promise.race([
              Promise.all(M),
              new Promise(function(C) {
                return setTimeout(C, 500);
              })
            ]).then(n, n), (v ? Promise.allSettled([v.finished, d]) : d).then(i, i);
          if (n(), v)
            return v.finished.then(
              i,
              i
            );
          i();
        },
        types: e
      });
      m.__reactViewTransition = x;
      var z = [];
      return x.ready.then(
        function() {
          for (var d = m.documentElement.getAnimations({
            subtree: !0
          }), v = 0; v < d.length; v++) {
            var _ = d[v], M = _.effect, k = M.pseudoElement;
            if (k != null && k.startsWith("::view-transition")) {
              z.push(_), _ = M.getKeyframes();
              for (var g = k = void 0, r = !0, p = 0; p < _.length; p++) {
                var S = _[p], C = S.width;
                if (k === void 0) k = C;
                else if (k !== C) {
                  r = !1;
                  break;
                }
                if (C = S.height, g === void 0) g = C;
                else if (g !== C) {
                  r = !1;
                  break;
                }
                delete S.width, delete S.height, S.transform === "none" && delete S.transform;
              }
              r && k !== void 0 && g !== void 0 && (M.setKeyframes(_), r = getComputedStyle(
                M.target,
                M.pseudoElement
              ), r.width !== k || r.height !== g) && (r = _[0], r.width = k, r.height = g, r = _[_.length - 1], r.width = k, r.height = g, M.setKeyframes(_));
            }
          }
          u();
        },
        function(d) {
          m.__reactViewTransition === x && (m.__reactViewTransition = null);
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
      ), x.finished.finally(function() {
        for (var d = 0; d < z.length; d++)
          z[d].cancel();
        m.__reactViewTransition === x && (m.__reactViewTransition = null), c();
      }), x;
    } catch {
      return a(), n(), u(), null;
    }
  }
  function xa(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  xa.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : W({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, xa.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), a = [], n = 0; n < e.length; n++) {
      var i = e[n].effect;
      i !== null && i.target === t && i.pseudoElement === l && a.push(e[n]);
    }
    return a;
  }, xa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Eh(t) {
    return {
      name: t,
      group: new xa("group", t),
      imagePair: new xa("image-pair", t),
      old: new xa("old", t),
      new: new xa("new", t)
    };
  }
  function bl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  bl.prototype.addEventListener = function(t, l, e) {
    var a = null, n = null;
    if (!(e != null && typeof e != "boolean" && (a = e.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (_h(i, t, l, e) === -1) {
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
          D0,
          t,
          c,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function D0(t, l, e, a) {
    return it(t).addEventListener(
      l,
      e,
      a
    ), !1;
  }
  bl.prototype.removeEventListener = function(t, l, e) {
    var a = this._eventListeners;
    if (a !== null && (l = _h(
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
        R0,
        t,
        e,
        n
      ), a.splice(l, 1), i !== null && i();
    }
  };
  function R0(t, l, e, a) {
    return it(t).removeEventListener(
      l,
      e,
      a
    ), !1;
  }
  function nn(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Nh(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function _h(t, l, e, a) {
    if (t.length === 0) return -1;
    a = Nh(a);
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      if (i.type === l && i.listener === e && Nh(i.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  bl.prototype.dispatchEvent = function(t) {
    var l = E(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = it(l);
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
  }, bl.prototype.focus = function(t) {
    b(
      this._fragmentFiber.child,
      !0,
      Oh,
      t,
      void 0,
      void 0
    );
  };
  function Oh(t, l) {
    return t.tag === 6 ? !1 : (t = it(t), K0(t, l));
  }
  bl.prototype.focusLast = function(t) {
    var l = [];
    b(
      this._fragmentFiber.child,
      !0,
      fo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Oh(l[e], t); e--) ;
  };
  function fo(t, l) {
    return l.push(t), !1;
  }
  bl.prototype.blur = function() {
    var t = E(
      this._fragmentFiber
    );
    t !== null && (t = it(t), t = ti(t).activeElement, t !== null && b(
      this._fragmentFiber.child,
      !1,
      U0,
      t,
      void 0,
      void 0
    ));
  };
  function U0(t, l) {
    return t.tag === 6 ? !1 : (t = it(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  bl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), b(
      this._fragmentFiber.child,
      !1,
      H0,
      t,
      void 0,
      void 0
    );
  };
  function H0(t, l) {
    return t.tag === 6 || (t = it(t), l.observe(t)), !1;
  }
  bl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), b(
        this._fragmentFiber.child,
        !1,
        q0,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < Yl.length; e++) {
        var a = Yl[e];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : Yl[l++] = a;
      }
      Yl.length = l;
    }
  };
  function q0(t, l) {
    return t.tag === 6 || (t = it(t), l.unobserve(t)), !1;
  }
  var Yl = [], oo = !1;
  function B0(t, l, e) {
    Yl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), oo || (oo = !0, J0(function() {
      oo = !1;
      var a = Yl;
      Yl = [];
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  bl.prototype.getClientRects = function() {
    var t = [];
    return b(
      this._fragmentFiber.child,
      !1,
      Y0,
      t,
      void 0,
      void 0
    ), t;
  };
  function Y0(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = it(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  bl.prototype.getRootNode = function(t) {
    var l = E(
      this._fragmentFiber
    );
    return l === null ? this : it(l).getRootNode(t);
  }, bl.prototype.compareDocumentPosition = function(t) {
    var l = E(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    b(
      this._fragmentFiber.child,
      !1,
      fo,
      e,
      void 0,
      void 0
    );
    var a = it(l);
    if (e.length === 0) {
      if (e = a, L(this._fragmentFiber)) {
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
      return e === t ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = st(l)[1], e === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (t = it(e).compareDocumentPosition(
        t
      ), n = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = it(e[0]), n = it(e[e.length - 1]);
    var i = L(this._fragmentFiber) ? l.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var u = l.compareDocumentPosition(t), c = n.compareDocumentPosition(t), f = u & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && i && u & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = a && l === t || i && n === t || f || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && l === t || !i && n === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : u, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || G0(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function G0(t, l, e, a, n) {
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
        for (i = l, l = E(l); i !== null; ) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!i) && !(l = i === e) && (l = fl(
      e,
      i,
      Gl
    ), l === null ? l = !1 : (b(
      l,
      !0,
      K,
      i,
      e
    ), i = qt, qt = null, l = i !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!i) && !(l = i === a) && (l = fl(
      a,
      i,
      Gl
    ), l === null ? l = !1 : (b(
      l,
      !0,
      Ut,
      i,
      a
    ), i = qt, q = qt = null, l = i !== null)), l) : !1;
  }
  function Ah(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  bl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(h(566));
    var l = [];
    b(
      this._fragmentFiber.child,
      !1,
      fo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var a = st(
        this._fragmentFiber
      );
      if (a = e ? a[1] || a[0] || E(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = it(a), Ah(t, e);
        return;
      }
      if (a = it(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          e = "host" in a ? a.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = e ? l.length - 1 : 0; a !== (e ? -1 : l.length); ) {
      var n = l[a];
      n.tag === 6 ? (n = it(n), Ah(n, e)) : it(n).scrollIntoView(t), a += e ? -1 : 1;
    }
  };
  function X0(t, l) {
    return t = it(t), wh(t, l), !1;
  }
  function wh(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function Ch(t, l) {
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
      for (var u = 0, c = 0; c < Yl.length; c++) {
        var f = Yl[c];
        (f.fragmentInstance !== l || f.observer !== i || f.instance !== t) && (Yl[u++] = f);
      }
      Yl.length = u, i.observe(t);
    }), wh(t, l));
  }
  function Q0(t, l) {
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
      typeof i.rootMargin == "string" ? B0(
        l,
        i,
        t
      ) : i.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function ro(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ro(e), bi(e);
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
  function V0(t, l, e, a) {
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
      if (t = Cl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Z0(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Mh(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function so(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ho(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function L0(t, l) {
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
  function Cl(t) {
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
  var go = null;
  function jh(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Cl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Dh(t) {
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
  function K0(t, l) {
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
  function J0(t) {
    xh(function() {
      xh(function(l) {
        return t(l);
      });
    });
  }
  function Rh(t, l, e) {
    switch (l = ti(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(h(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(h(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(h(454));
        return t;
      default:
        throw Error(h(451));
    }
  }
  function Uh(t, l, e) {
    for (var a in e) {
      var n = e[a];
      e.hasOwnProperty(a) && n != null && vt(t, l, a, null, z0, n);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Zl && (t.onclick = null), bi(t);
  }
  function mo(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    bi(t);
  }
  var Ml = /* @__PURE__ */ new Map(), Hh = /* @__PURE__ */ new Set();
  function li(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ye = V.d;
  V.d = {
    f: k0,
    r: F0,
    D: $0,
    C: W0,
    L: I0,
    m: P0,
    X: lp,
    S: tp,
    M: ep
  };
  function k0() {
    var t = ye.f(), l = Tu();
    return t || l;
  }
  function F0(t) {
    var l = Ta(t);
    l !== null && l.tag === 5 && l.type === "form" ? Bs(l) : ye.r(t);
  }
  var un = typeof document > "u" ? null : document;
  function qh(t, l, e) {
    var a = un;
    if (a && typeof l == "string" && l) {
      var n = Tl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), Hh.has(n) || (Hh.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Ft(l, "link", t), Yt(l), a.head.appendChild(l)));
    }
  }
  function $0(t) {
    ye.D(t), qh("dns-prefetch", t, null);
  }
  function W0(t, l) {
    ye.C(t, l), qh("preconnect", t, l);
  }
  function I0(t, l, e) {
    ye.L(t, l, e);
    var a = un;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + Tl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + Tl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + Tl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + Tl(t) + '"]';
      var i = n;
      switch (l) {
        case "style":
          i = cn(t);
          break;
        case "script":
          i = fn(t);
      }
      if (!(Ml.has(i) || (t = W(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Ml.set(i, t), a.querySelector(n) !== null || l === "style" && a.querySelector(ei(i)) || l === "script" && a.querySelector(ai(i))))) {
        var u = a.createElement("link");
        Ft(u, "link", t), l === "style" && (u[xi] = !0, u.onload = u.onerror = function() {
          $o(u);
        }), Yt(u), a.head.appendChild(u);
      }
    }
  }
  function P0(t, l) {
    ye.m(t, l);
    var e = un;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + Tl(a) + '"][href="' + Tl(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = fn(t);
      }
      if (!Ml.has(i) && (t = W({ rel: "modulepreload", href: t }, l), Ml.set(i, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ai(i)))
              return;
        }
        a = e.createElement("link"), Ft(a, "link", t), Yt(a), e.head.appendChild(a);
      }
    }
  }
  function tp(t, l, e) {
    ye.S(t, l, e);
    var a = un;
    if (a && t) {
      var n = Ea(a).hoistableStyles, i = cn(t);
      l = l || "default";
      var u = n.get(i);
      if (!u) {
        var c = { loading: 0, preload: null };
        if (u = a.querySelector(
          ei(i)
        ))
          c.loading = 5;
        else {
          t = W(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Ml.get(i)) && po(t, e);
          var f = u = a.createElement("link");
          Yt(f), Ft(f, "link", t), f._p = new Promise(function(m, x) {
            f.onload = m, f.onerror = x;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Cu(u, l, a);
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
  function lp(t, l) {
    ye.X(t, l);
    var e = un;
    if (e && t) {
      var a = Ea(e).hoistableScripts, n = fn(t), i = a.get(n);
      i || (i = e.querySelector(ai(n)), i || (t = W({ src: t, async: !0 }, l), (l = Ml.get(n)) && vo(t, l), i = e.createElement("script"), Yt(i), Ft(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function ep(t, l) {
    ye.M(t, l);
    var e = un;
    if (e && t) {
      var a = Ea(e).hoistableScripts, n = fn(t), i = a.get(n);
      i || (i = e.querySelector(ai(n)), i || (t = W({ src: t, async: !0, type: "module" }, l), (l = Ml.get(n)) && vo(t, l), i = e.createElement("script"), Yt(i), Ft(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Bh(t, l, e, a) {
    var n = (n = be.current) ? li(n) : null;
    if (!n) throw Error(h(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = cn(e.href), l = Ea(
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
          var i = Ea(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            ei(t)
          )) ? i._p || (u.instance = i, u.state.loading = 5) : (i = Ml.get(t), i || (i = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ml.set(t, i)), ap(
            n,
            t,
            i,
            u.state
          ))), l && a === null)
            throw Error(h(528, ""));
          return u;
        }
        if (l && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = fn(e), l = Ea(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, t));
    }
  }
  function cn(t) {
    return 'href="' + Tl(t) + '"';
  }
  function ei(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Yh(t) {
    return W({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ap(t, l, e, a) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[xi] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[xi] = !0, l.onload = l.onerror = $o.bind(null, l), Ft(l, "link", e), Yt(l), t.head.appendChild(l);
    a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function fn(t) {
    return '[src="' + Tl(t) + '"]';
  }
  function ai(t) {
    return "script[async]" + t;
  }
  function Gh(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Tl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Yt(a), a;
          var n = W({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Yt(a), Ft(a, "style", n), Cu(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = cn(e.href);
          var i = t.querySelector(
            ei(n)
          );
          if (i)
            return l.state.loading |= 4, l.instance = i, Yt(i), i;
          a = Yh(e), (n = Ml.get(n)) && po(a, n), i = (t.ownerDocument || t).createElement("link"), Yt(i);
          var u = i;
          return u._p = new Promise(function(c, f) {
            u.onload = c, u.onerror = f;
          }), Ft(i, "link", a), l.state.loading |= 4, Cu(i, e.precedence, t), l.instance = i;
        case "script":
          return i = fn(e.src), (n = t.querySelector(
            ai(i)
          )) ? (l.instance = n, Yt(n), n) : (a = e, (n = Ml.get(i)) && (a = W({}, e), vo(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Yt(n), Ft(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(h(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Cu(a, e.precedence, t));
    return l.instance;
  }
  function Cu(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, u = 0; u < a.length; u++) {
      var c = a[u];
      if (c.dataset.precedence === l) i = c;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function po(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function vo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Mu = null;
  function Xh(t, l, e) {
    if (Mu === null) {
      var a = /* @__PURE__ */ new Map(), n = Mu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Mu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var i = e[n];
      if (!(i[yn] || i[Zt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function np(t, l, e) {
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
  function Qh(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function Vh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zh(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Lh(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += Zh(l), t.suspenseyImages.push(l)), t = cp.bind(t), l.decode().then(t, t));
  }
  function ip(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = cn(a.href), i = l.querySelector(
          ei(n)
        );
        if (i) {
          l = i._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = ni.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = i, Yt(i);
          return;
        }
        i = l.ownerDocument || l, a = Yh(a), (n = Ml.get(n)) && po(a, n), i = i.createElement("link"), Yt(i);
        var u = i;
        u._p = new Promise(function(c, f) {
          u.onload = c, u.onerror = f;
        }), Ft(i, "link", a), e.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = ni.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var ju = 0;
  function up(t, l) {
    return t.stylesheets && t.count === 0 && Ru(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Ru(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + l);
      0 < t.imgBytes && ju === 0 && (ju = 62500 * E0());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ru(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > ju ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Kh(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ru(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function ni() {
    this.count--, Kh(this);
  }
  function cp() {
    this.imgCount--, Kh(this);
  }
  var Du = null;
  function Ru(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Du = /* @__PURE__ */ new Map(), l.forEach(fp, t), Du = null, ni.call(t));
  }
  function fp(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Du.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Du.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (e.set(u.dataset.precedence, u), a = u);
        }
        a && e.set(null, a);
      }
      n = l.instance, u = n.getAttribute("data-precedence"), i = e.get(u) || a, i === a && e.set(null, n), e.set(u, n), this.count++, a = ni.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var on = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0
  };
  function op(t, l, e, a, n, i, u, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $u(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $u(0), this.hiddenUpdates = $u(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jh(t, l, e, a, n, i, u, c, f, m, x, z) {
    return t = new op(
      t,
      l,
      e,
      u,
      f,
      m,
      x,
      z,
      c
    ), l = 1, i === !0 && (l |= 24), i = al(3, null, null, l), t.current = i, i.stateNode = t, l = Mc(), l.refCount++, t.pooledCache = l, l.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Uc(i), t;
  }
  function kh(t) {
    return t ? (t = Ra, t) : Ra;
  }
  function Fh(t, l, e, a, n, i) {
    n = kh(n), a.context === null ? a.context = n : a.pendingContext = n, a = Me(l), a.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (a.callback = i), e = je(t, a, l), e !== null && (cl(e, t, l), Un(e, t, l));
  }
  function $h(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function xo(t, l) {
    $h(t, l), (t = t.alternate) && $h(t, l);
  }
  function Wh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = ea(t, 67108864);
      l !== null && cl(l, t, 67108864), xo(t, 67108864);
    }
  }
  function Ih(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = xl();
      l = Wu(l);
      var e = ea(t, l);
      e !== null && cl(e, t, l), xo(t, l);
    }
  }
  var rn = !0;
  function rp(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var i = V.p;
    try {
      V.p = 2, bo(t, l, e, a);
    } finally {
      V.p = i, j.T = n;
    }
  }
  function sp(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var i = V.p;
    try {
      V.p = 8, bo(t, l, e, a);
    } finally {
      V.p = i, j.T = n;
    }
  }
  function bo(t, l, e, a) {
    if (rn) {
      var n = So(a);
      if (n === null)
        to(
          t,
          l,
          a,
          Uu,
          e
        ), tg(t, a);
      else if (hp(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (tg(t, a), l & 4 && -1 < dp.indexOf(t)) {
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
                      var f = 1 << 31 - dl(u);
                      c.entanglements[1] |= f, u &= ~f;
                    }
                    te(i), (rt & 6) === 0 && (bu = rl() + 500, Wn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = ea(i, 2), c !== null && cl(c, i, 2), Tu(), xo(i, 2);
            }
          if (i = So(a), i === null && to(
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
        to(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function So(t) {
    return t = nc(t), zo(t);
  }
  var Uu = null;
  function zo(t) {
    if (Uu = null, t = Ie(t), t !== null) {
      var l = B(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = gt(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = at(l), t !== null) return t;
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
  function Ph(t) {
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
        switch (Eg()) {
          case Bo:
            return 2;
          case Yo:
            return 8;
          case gi:
          case Ng:
            return 32;
          case Go:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var To = !1, Ze = null, Le = null, Ke = null, ii = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), Je = [], dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tg(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ze = null;
        break;
      case "dragenter":
      case "dragleave":
        Le = null;
        break;
      case "mouseover":
      case "mouseout":
        Ke = null;
        break;
      case "pointerover":
      case "pointerout":
        ii.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ui.delete(l.pointerId);
    }
  }
  function ci(t, l, e, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, l !== null && (l = Ta(l), l !== null && Wh(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function hp(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return Ze = ci(
          Ze,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return Le = ci(
          Le,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return Ke = ci(
          Ke,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return ii.set(
          i,
          ci(
            ii.get(i) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, ui.set(
          i,
          ci(
            ui.get(i) || null,
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
  function lg(t) {
    var l = Ie(t.target);
    if (l !== null) {
      var e = B(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = gt(e), l !== null) {
            t.blockedOn = l, Jo(t.priority, function() {
              Ih(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = at(e), l !== null) {
            t.blockedOn = l, Jo(t.priority, function() {
              Ih(e);
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
  function Hu(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = So(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        ac = a, e.target.dispatchEvent(a), ac = null;
      } else
        return l = Ta(e), l !== null && Wh(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function eg(t, l, e) {
    Hu(t) && e.delete(l);
  }
  function gp() {
    To = !1, Ze !== null && Hu(Ze) && (Ze = null), Le !== null && Hu(Le) && (Le = null), Ke !== null && Hu(Ke) && (Ke = null), ii.forEach(eg), ui.forEach(eg);
  }
  function qu(t, l) {
    t.blockedOn === l && (t.blockedOn = null, To || (To = !0, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      gp
    )));
  }
  var Bu = null;
  function ag(t) {
    Bu !== t && (Bu = t, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      function() {
        Bu === t && (Bu = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (zo(a || e) === null)
              continue;
            break;
          }
          var i = Ta(e);
          i !== null && (t.splice(l, 3), l -= 3, ef(
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
      return qu(f, t);
    }
    Ze !== null && qu(Ze, t), Le !== null && qu(Le, t), Ke !== null && qu(Ke, t), ii.forEach(l), ui.forEach(l);
    for (var e = 0; e < Je.length; e++) {
      var a = Je[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Je.length && (e = Je[0], e.blockedOn === null); )
      lg(e), e.blockedOn === null && Je.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], i = e[a + 1], u = n[el] || null;
        if (typeof i == "function")
          u || ag(e);
        else if (u) {
          var c = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[el] || null)
              c = u.formAction;
            else if (zo(n) !== null) continue;
          } else c = u.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), ag(e);
        }
      }
  }
  function ng() {
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
  function Eo(t) {
    this._internalRoot = t;
  }
  Yu.prototype.render = Eo.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(h(409));
    var e = l.current, a = xl();
    Fh(e, a, t, l, null, null);
  }, Yu.prototype.unmount = Eo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Fh(t.current, 2, null, t, null, null), Tu(), l[za] = null;
    }
  };
  function Yu(t) {
    this._internalRoot = t;
  }
  Yu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Ko();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Je.length && l !== 0 && l < Je[e].priority; e++) ;
      Je.splice(e, 0, t), e === 0 && lg(t);
    }
  };
  var ig = T.version;
  if (ig !== "19.3.0")
    throw Error(
      h(
        527,
        ig,
        "19.3.0"
      )
    );
  V.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(h(188)) : (t = Object.keys(t).join(","), Error(h(268, t)));
    return t = G(l), t = t !== null ? O(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var mp = {
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
        mn = Gu.inject(
          mp
        ), sl = Gu;
      } catch {
      }
  }
  return oi.createRoot = function(t, l) {
    if (!H(t)) throw Error(h(299));
    var e = !1, a = "", n = ks, i = Fs, u = $s;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError)), l = Jh(
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
      ng
    ), t[za] = l.current, Pf(t), new Eo(l);
  }, oi.hydrateRoot = function(t, l, e) {
    if (!H(t)) throw Error(h(299));
    var a = !1, n = "", i = ks, u = Fs, c = $s, f = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), l = Jh(
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
      ng
    ), l.context = kh(null), e = l.current, a = xl(), a = Wu(a), n = Me(a), n.callback = null, je(e, n, a), e = a, l.current.lanes = e, vn(l, e), te(l), t[za] = l.current, Pf(t), new Yu(l);
  }, oi.version = "19.3.0", oi;
}
var mg;
function Op() {
  if (mg) return Oo.exports;
  mg = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (T) {
        console.error(T);
      }
  }
  return y(), Oo.exports = _p(), Oo.exports;
}
var Ap = Op();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vg = (...y) => y.filter((T, w, h) => !!T && T.trim() !== "" && h.indexOf(T) === w).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cp = {
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
const Mp = Ot.forwardRef(
  ({
    color: y = "currentColor",
    size: T = 24,
    strokeWidth: w = 2,
    absoluteStrokeWidth: h,
    className: H = "",
    children: B,
    iconNode: gt,
    ...at
  }, F) => Ot.createElement(
    "svg",
    {
      ref: F,
      ...Cp,
      width: T,
      height: T,
      stroke: y,
      strokeWidth: h ? Number(w) * 24 / Number(T) : w,
      className: vg("lucide", H),
      ...at
    },
    [
      ...gt.map(([G, O]) => Ot.createElement(G, O)),
      ...Array.isArray(B) ? B : [B]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = (y, T) => {
  const w = Ot.forwardRef(
    ({ className: h, ...H }, B) => Ot.createElement(Mp, {
      ref: B,
      iconNode: T,
      className: vg(`lucide-${wp(y)}`, h),
      ...H
    })
  );
  return w.displayName = `${y}`, w;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = jl("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = jl("BookOpen", [
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
const Dp = jl("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = jl("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = jl("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = jl("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = jl("ExternalLink", [
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
const Hp = jl("HeartPulse", [
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
const xg = jl("Info", [
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
const qp = jl("Lightbulb", [
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
const Bp = jl("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = jl("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), le = {
  steps: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps",
  cpr: "https://guidelines.redcross.org/guidelines-database/cpr-techniques-and-sequence/",
  aed: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-cardiac-arrest",
  breathing: "https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person",
  bleeding: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external",
  burns: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns"
}, ri = [
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
    source: le.steps
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
    source: le.steps
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
    source: le.cpr
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
    source: le.cpr
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
    source: le.aed
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
    source: le.bleeding
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
    source: le.burns
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
    source: le.breathing
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
    source: le.steps
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
    source: le.bleeding
  }
], Uo = 240;
function dn() {
  return { screen: "closed", index: 0, selected: null, confirmed: !1, hint: !1, usedHint: !1, responses: [], remaining: Uo, deadline: null, finished: !1, timedOut: !1, exit: !1 };
}
function Yp(y, T) {
  if (T.type === "autoOpen") return y.screen === "closed" ? { ...dn(), screen: "entry" } : y;
  if (T.type === "open") return { ...dn(), screen: "entry" };
  if (T.type === "close") return dn();
  if (T.type === "intro") return { ...dn(), screen: "intro" };
  if (T.type === "start") return { ...dn(), screen: "quiz", deadline: T.now + Uo * 1e3 };
  if (T.type === "exit") return { ...y, exit: !0 };
  if (T.type === "continue") return { ...y, exit: !1 };
  if (y.screen !== "quiz") return y;
  const w = Math.max(0, Math.ceil((y.deadline - T.now) / 1e3));
  if (!w) return { ...y, remaining: 0, screen: "result", finished: !0, timedOut: !0, exit: !1 };
  switch (T.type) {
    case "tick":
      return w === y.remaining ? y : { ...y, remaining: w };
    case "select":
      return y.confirmed || y.exit ? y : { ...y, selected: T.value };
    case "hint":
      return { ...y, hint: !y.hint, usedHint: !0 };
    case "confirm":
      return y.selected === null || y.confirmed || y.exit ? y : { ...y, confirmed: !0, remaining: w, responses: [...y.responses, { selected: y.selected, usedHint: y.usedHint }] };
    case "next":
      return !y.confirmed || y.exit ? y : y.index + 1 === T.total ? { ...y, remaining: w, finished: !0, screen: "result" } : { ...y, remaining: w, index: y.index + 1, selected: null, confirmed: !1, hint: !1, usedHint: !1 };
    default:
      return y;
  }
}
function bg(y) {
  return String(Math.floor(y / 60)).padStart(2, "0") + ":" + String(y % 60).padStart(2, "0");
}
function Gp({ index: y, total: T, remaining: w, finished: h, answered: H, imageBase: B, onClose: gt }) {
  return /* @__PURE__ */ o.jsxs("header", { className: "training-header", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "training-brand", children: [
      /* @__PURE__ */ o.jsx("img", { src: B + "logo-ghme.svg", alt: "GHME" }),
      /* @__PURE__ */ o.jsx("span", { id: "game-title", children: "4 phút thời gian vàng" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "training-progress", children: [
      /* @__PURE__ */ o.jsx("p", { children: h ? "Đã kết thúc thử thách" : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "Câu ",
        /* @__PURE__ */ o.jsx("strong", { children: String(y + 1).padStart(2, "0") }),
        /* @__PURE__ */ o.jsxs("span", { children: [
          " / ",
          T
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx("div", { role: "progressbar", "aria-label": "Tiến trình câu hỏi", "aria-valuenow": H, "aria-valuemin": 0, "aria-valuemax": T, className: "progress-track", children: /* @__PURE__ */ o.jsx("span", { style: { width: `${H / T * 100}%` } }) })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `training-timer${w < 60 && !h ? " is-low" : ""}`, children: h ? /* @__PURE__ */ o.jsx(Xu, { size: 19, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(yg, { size: 18, "aria-hidden": "true" }),
      /* @__PURE__ */ o.jsx("span", { role: "timer", "aria-label": "Thời gian còn lại", "aria-live": "off", children: bg(w) })
    ] }) }),
    /* @__PURE__ */ o.jsx("button", { className: "close-game", "aria-label": "Đóng thử thách", title: "Đóng", onClick: gt, children: /* @__PURE__ */ o.jsx(Ro, { size: 21, "aria-hidden": "true" }) })
  ] });
}
function Xp({ question: y, index: T, imageBase: w }) {
  return /* @__PURE__ */ o.jsxs("aside", { className: "situation", "aria-label": `Tình huống ${T + 1}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "case-label", children: [
      /* @__PURE__ */ o.jsxs("span", { children: [
        "Tình huống ",
        String(T + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "case-line" })
    ] }),
    /* @__PURE__ */ o.jsxs("figure", { className: "case-visual", children: [
      /* @__PURE__ */ o.jsx("img", { src: w + y.image + ".webp", alt: y.imageAlt }),
      /* @__PURE__ */ o.jsx("figcaption", { children: "Ảnh minh họa từ lớp thực hành sơ cứu." })
    ] })
  ] });
}
function Qp({ question: y, correct: T }) {
  const w = y.explanation.split(new RegExp("(?<=[.!?])\\s+")), h = w[0], H = w.length > 1 ? w.slice(1).join(" ") : y.hint;
  return /* @__PURE__ */ o.jsxs("div", { className: `feedback ${T ? "feedback-correct" : "feedback-review"}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "feedback-status", children: [
      T ? /* @__PURE__ */ o.jsx(Xu, { size: 19, "aria-hidden": "true" }) : /* @__PURE__ */ o.jsx(xg, { size: 19, "aria-hidden": "true" }),
      /* @__PURE__ */ o.jsx("strong", { children: T ? "Chính xác" : "Cùng ghi nhớ cách xử trí đúng" })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: "feedback-explanation", children: h }),
    /* @__PURE__ */ o.jsxs("p", { className: "feedback-takeaway", children: [
      /* @__PURE__ */ o.jsx("strong", { children: "Điều cần nhớ" }),
      H
    ] }),
    /* @__PURE__ */ o.jsxs("a", { href: y.source, target: "_blank", rel: "noreferrer", className: "source-link", children: [
      "Tham khảo Red Cross",
      /* @__PURE__ */ o.jsx(Up, { size: 11, "aria-hidden": "true" })
    ] })
  ] });
}
function Vp({ question: y, index: T, total: w, selected: h, confirmed: H, hint: B, onSelect: gt, onHint: at, onConfirm: F, onNext: G, headingRef: O }) {
  return /* @__PURE__ */ o.jsxs("section", { className: "decision", "aria-labelledby": "question-title", children: [
    /* @__PURE__ */ o.jsx("p", { className: "question-category", children: y.category }),
    /* @__PURE__ */ o.jsx("h2", { id: "question-title", ref: O, tabIndex: -1, className: "question-heading", children: y.question }),
    /* @__PURE__ */ o.jsxs("fieldset", { className: "decision-choices", disabled: H, children: [
      /* @__PURE__ */ o.jsx("legend", { className: "sr-only", children: "Chọn một cách xử trí phù hợp nhất" }),
      y.answers.map((b, E) => {
        const L = H && E === y.correct, st = H && h === E && !L;
        return /* @__PURE__ */ o.jsxs("label", { className: `answer-option${h === E ? " is-selected" : ""}${H ? " is-locked" : ""}${L ? " is-correct" : ""}${st ? " is-incorrect" : ""}`, children: [
          /* @__PURE__ */ o.jsx("input", { type: "radio", name: `answer-${y.id}`, value: E, checked: h === E, onChange: () => gt(E), className: "sr-only" }),
          /* @__PURE__ */ o.jsx("span", { className: "answer-letter", "aria-hidden": "true", children: "ABCD"[E] }),
          /* @__PURE__ */ o.jsxs("span", { className: "answer-text", children: [
            b,
            H && (L || st) && /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: L ? " — Đáp án đúng" : " — Bạn chọn, chưa chính xác" })
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "answer-mark", "aria-hidden": "true", children: L ? /* @__PURE__ */ o.jsx(Xu, { size: 18 }) : st ? /* @__PURE__ */ o.jsx(xg, { size: 18 }) : h === E ? /* @__PURE__ */ o.jsx(Dp, { size: 18 }) : null })
        ] }, E);
      })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "learning-space", children: [
      /* @__PURE__ */ o.jsx("div", { "aria-live": "polite", "aria-atomic": "true", children: H && /* @__PURE__ */ o.jsx(Qp, { question: y, correct: h === y.correct }) }),
      !H && /* @__PURE__ */ o.jsxs("div", { className: "training-aid", children: [
        /* @__PURE__ */ o.jsxs("button", { className: "hint-toggle", onClick: at, "aria-expanded": B, "aria-controls": "question-hint", children: [
          /* @__PURE__ */ o.jsx(qp, { size: 18, "aria-hidden": "true" }),
          B ? "Ẩn gợi ý" : "Cần một gợi ý?"
        ] }),
        /* @__PURE__ */ o.jsx("div", { id: "question-hint", className: "hint-content", "aria-live": "polite", children: B && /* @__PURE__ */ o.jsx("p", { children: y.hint }) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "decision-actions", children: [
      /* @__PURE__ */ o.jsx("span", { className: "decision-step", children: H ? "Ghi nhớ trước khi tiếp tục" : h === null ? "Chọn cách bạn sẽ xử trí" : "Sẵn sàng với lựa chọn của bạn?" }),
      /* @__PURE__ */ o.jsxs("button", { className: "button-primary decision-primary", disabled: h === null, onClick: H ? G : F, children: [
        H ? T === w - 1 ? "Xem kết quả" : "Câu tiếp theo" : "Xác nhận đáp án",
        /* @__PURE__ */ o.jsx(hn, { size: 18, "aria-hidden": "true" })
      ] })
    ] })
  ] });
}
function Zp({ questions: y, responses: T, remaining: w, timedOut: h, onRestart: H, headingRef: B, onCourse: gt }) {
  const at = Ot.useRef(null), [F, G] = Ot.useState(!1), O = (q) => {
    var K;
    return ((K = T[q]) == null ? void 0 : K.selected) === y[q].correct;
  }, b = T.filter((q, K) => q.selected === y[K].correct).length, E = y.map((q, K) => ({ q, i: K })).filter(({ i: q }) => !O(q)), L = [...new Set(E.map(({ q }) => q.category))], st = [...new Set(y.filter((q, K) => O(K) && !L.includes(q.category)).map((q) => q.category))], St = F ? y.map((q, K) => ({ q, i: K })) : E, it = () => {
    E.length || G(!0), requestAnimationFrame(() => {
      var q, K;
      (q = at.current) == null || q.scrollIntoView({ block: "start", behavior: "instant" }), (K = at.current) == null || K.focus({ preventScroll: !0 });
    });
  }, qt = h && T.length < y.length ? "Cùng nhìn lại những câu bạn đã thử." : b >= 8 ? "Bạn đã có nền tảng tốt." : b >= 5 ? "Bạn đã có kiến thức cơ bản." : "Mỗi câu hỏi là một bước củng cố nền tảng.";
  return /* @__PURE__ */ o.jsxs("section", { className: "results", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "result-overview", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "result-hero", children: [
        /* @__PURE__ */ o.jsx("p", { className: "section-label", children: h ? "Hết 4 phút" : "Hoàn thành thử thách" }),
        /* @__PURE__ */ o.jsxs("h1", { id: "result-title", ref: B, tabIndex: -1, className: "question-heading result-score", children: [
          /* @__PURE__ */ o.jsx("span", { children: b }),
          /* @__PURE__ */ o.jsxs("span", { className: "score-total", children: [
            " / ",
            y.length
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: " câu trả lời đúng" })
        ] }),
        /* @__PURE__ */ o.jsx("h2", { children: qt }),
        /* @__PURE__ */ o.jsxs("p", { className: "result-time", children: [
          h ? "Thời gian sử dụng" : "Hoàn thành trong",
          " ",
          /* @__PURE__ */ o.jsx("strong", { children: bg(Uo - w) }),
          T.length < y.length && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            " · ",
            T.length,
            "/",
            y.length,
            " câu đã xác nhận"
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "result-support", children: "Mỗi cách xử trí đúng là một bước để sẵn sàng giúp đỡ." }),
        /* @__PURE__ */ o.jsxs("button", { className: "result-review-action", onClick: it, children: [
          E.length ? `Ôn lại ${E.length} tình huống` : "Xem lại các đáp án",
          /* @__PURE__ */ o.jsx(hn, { size: 17, "aria-hidden": "true" })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "learning-summary", children: [
        st.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "summary-group summary-strength", children: [
          /* @__PURE__ */ o.jsxs("h2", { children: [
            /* @__PURE__ */ o.jsx(Xu, { size: 18, "aria-hidden": "true" }),
            "Bạn làm tốt"
          ] }),
          /* @__PURE__ */ o.jsx("ul", { children: st.map((q) => /* @__PURE__ */ o.jsx("li", { children: q }, q)) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "summary-group summary-revisit", children: [
          /* @__PURE__ */ o.jsxs("h2", { children: [
            /* @__PURE__ */ o.jsx(jp, { size: 18, "aria-hidden": "true" }),
            L.length ? "Bạn nên xem lại" : "Tiếp tục giữ vững kiến thức"
          ] }),
          L.length ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx("p", { className: "summary-note", children: "Các chủ đề có câu sai hoặc chưa trả lời." }),
            /* @__PURE__ */ o.jsx("ul", { className: "revisit-list", children: L.map((q) => /* @__PURE__ */ o.jsx("li", { children: q }, q)) })
          ] }) : /* @__PURE__ */ o.jsx("p", { className: "summary-note", children: "Bạn đã trả lời đúng cả 10 tình huống. Thực hành thường xuyên giúp củng cố kỹ năng." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("section", { className: "answer-review", "aria-labelledby": "review-title", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "review-heading", children: [
        /* @__PURE__ */ o.jsxs("h2", { id: "review-title", ref: at, tabIndex: -1, children: [
          F ? "Toàn bộ kết quả" : "Các câu cần xem lại",
          " ",
          /* @__PURE__ */ o.jsx("span", { children: St.length })
        ] }),
        /* @__PURE__ */ o.jsx("p", { children: "Nhìn lại lựa chọn. Ghi nhớ cách xử trí." })
      ] }),
      St.length === 0 && /* @__PURE__ */ o.jsx("p", { className: "review-empty", children: "Không có câu nào cần xem lại trong lượt chơi này." }),
      /* @__PURE__ */ o.jsx("div", { className: "review-list", children: St.map(({ q, i: K }) => /* @__PURE__ */ o.jsxs("article", { className: "review-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "review-number", children: String(K + 1).padStart(2, "0") }),
        /* @__PURE__ */ o.jsxs("div", { className: "review-content", children: [
          /* @__PURE__ */ o.jsxs("p", { className: "review-category", children: [
            q.category,
            F && O(K) && /* @__PURE__ */ o.jsx("span", { children: " · Chính xác" })
          ] }),
          /* @__PURE__ */ o.jsx("h3", { children: q.question }),
          /* @__PURE__ */ o.jsxs("div", { className: "review-answers", children: [
            /* @__PURE__ */ o.jsxs("p", { className: O(K) ? "review-selected is-correct" : "review-selected", children: [
              /* @__PURE__ */ o.jsx("span", { children: "Bạn chọn" }),
              T[K] ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "ABCD"[T[K].selected],
                ". ",
                q.answers[T[K].selected]
              ] }) : "Chưa xác nhận đáp án"
            ] }),
            /* @__PURE__ */ o.jsxs("p", { className: "review-correct", children: [
              /* @__PURE__ */ o.jsx("span", { children: "Đáp án đúng" }),
              "ABCD"[q.correct],
              ". ",
              q.answers[q.correct]
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("details", { children: [
            /* @__PURE__ */ o.jsxs("summary", { children: [
              "Xem giải thích",
              /* @__PURE__ */ o.jsx(Rp, { size: 16, "aria-hidden": "true" })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "review-explanation", children: [
              /* @__PURE__ */ o.jsx("p", { children: q.explanation }),
              /* @__PURE__ */ o.jsx("a", { className: "source-link", href: q.source, target: "_blank", rel: "noreferrer", children: "Tham khảo Red Cross" })
            ] })
          ] })
        ] })
      ] }, q.id)) }),
      /* @__PURE__ */ o.jsxs("button", { className: "text-button review-toggle", "aria-pressed": F, onClick: () => G((q) => !q), children: [
        F ? "Chỉ xem các câu cần ôn lại" : "Xem toàn bộ kết quả",
        /* @__PURE__ */ o.jsx(hn, { size: 16, "aria-hidden": "true" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("section", { className: "result-next", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("p", { className: "section-label", children: "Bước tiếp theo" }),
        /* @__PURE__ */ o.jsx("h2", { children: "Muốn tự tin hơn trong tình huống thật?" }),
        /* @__PURE__ */ o.jsx("p", { children: "Thực hành trực tiếp giúp biến kiến thức thành phản xạ." })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "result-next-actions", children: [
        /* @__PURE__ */ o.jsxs("a", { className: "button-primary", href: "../#programs", onClick: gt, children: [
          "Khám phá khóa học sơ cấp cứu",
          /* @__PURE__ */ o.jsx(hn, { size: 17, "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ o.jsxs("button", { className: "text-button", onClick: H, children: [
          /* @__PURE__ */ o.jsx(Bp, { size: 16, "aria-hidden": "true" }),
          "Làm lại thử thách"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: "result-note", children: "Bài ôn tập kiến thức · Không thay thế đào tạo sơ cứu thực hành." })
  ] });
}
function Lp({ imageBase: y, headingRef: T, onStart: w, onClose: h }) {
  return /* @__PURE__ */ o.jsxs("section", { className: "opening", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "opening-brand", children: [
      /* @__PURE__ */ o.jsx("img", { src: y + "logo-ghme.svg", alt: "GHME" }),
      /* @__PURE__ */ o.jsx("span", { children: "Thử thách sơ cấp cứu" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "opening-composition", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "opening-content", children: [
        /* @__PURE__ */ o.jsxs("h1", { id: "game-title", ref: T, tabIndex: -1, className: "question-heading opening-title", children: [
          /* @__PURE__ */ o.jsxs("span", { className: "opening-four", children: [
            "4 ",
            /* @__PURE__ */ o.jsx("span", { children: "PHÚT" })
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "opening-golden", children: [
            "THỜI GIAN",
            /* @__PURE__ */ o.jsx("br", {}),
            "VÀNG",
            /* @__PURE__ */ o.jsx("span", { className: "title-stop", children: "." })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("p", { className: "opening-question", children: [
          "10 tình huống.",
          /* @__PURE__ */ o.jsx("br", {}),
          "Bạn sẽ xử trí thế nào?"
        ] }),
        /* @__PURE__ */ o.jsxs("p", { className: "opening-description", children: [
          "Những câu hỏi ngắn về sơ cấp cứu thường gặp.",
          /* @__PURE__ */ o.jsx("br", { className: "desktop-break" }),
          " Chọn cách xử trí và học thêm sau mỗi câu."
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "opening-actions", children: [
          /* @__PURE__ */ o.jsxs("button", { className: "button-primary", onClick: w, children: [
            "Bắt đầu thử thách",
            /* @__PURE__ */ o.jsx(hn, { size: 18, "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ o.jsx("button", { className: "text-button", onClick: h, children: "Để sau" })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("figure", { className: "opening-visual", children: [
        /* @__PURE__ */ o.jsx("img", { src: y + "bidv.webp", alt: "Học viên GHME thực hành sơ cứu trên mô hình" }),
        /* @__PURE__ */ o.jsx("figcaption", { children: "Kiến thức từ những buổi thực hành tại GHME." })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("p", { className: "opening-note", children: "4 phút cho thử thách kiến thức. Bài ôn tập không thay thế đào tạo sơ cứu thực hành." })
  ] });
}
function jo({ children: y, compact: T, confirmation: w, onClose: h, fallbackRef: H, labelledBy: B, className: gt = "" }) {
  const at = Ot.useRef(null);
  Ot.useEffect(() => {
    const G = at.current, b = G.getRootNode().activeElement || document.activeElement, E = document.body, L = E.style.overflow, st = E.style.paddingRight;
    if (!w) {
      const St = window.innerWidth - document.documentElement.clientWidth;
      E.style.paddingRight = parseFloat(getComputedStyle(E).paddingRight) + St + "px", E.style.overflow = "hidden";
    }
    return G.showModal(), () => {
      G.close(), w || (E.style.overflow = L, E.style.paddingRight = st);
      const St = b != null && b.isConnected && b !== E ? b : H == null ? void 0 : H.current;
      St == null || St.focus({ preventScroll: !0 });
    };
  }, [w, H]);
  const F = (G) => {
    if (G.key !== "Tab" || G.target.closest("dialog") !== at.current) return;
    const O = [...at.current.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), summary, [tabindex="0"]')].filter((st) => st.closest("dialog") === at.current && st.getClientRects().length), b = at.current.getRootNode().activeElement, E = O[0], L = O[O.length - 1];
    G.shiftKey && (b === E || !O.includes(b)) ? (G.preventDefault(), L == null || L.focus()) : !G.shiftKey && b === L && (G.preventDefault(), E == null || E.focus());
  };
  return /* @__PURE__ */ o.jsx("dialog", { onKeyDown: F, ref: at, role: "dialog", "aria-modal": "true", "aria-labelledby": B || (w ? "exit-title" : "game-title"), className: "game-dialog " + (T ? "entry-dialog " : "") + (w ? "exit-dialog " : "") + gt, onCancel: (G) => {
    G.preventDefault(), G.stopPropagation(), h();
  }, children: y });
}
function Kp({ onClose: y, onComplete: T }) {
  const w = Ot.useRef(null);
  Ot.useEffect(() => {
    var G;
    (G = w.current) == null || G.focus();
  }, []);
  const [h, H] = Ot.useState({ name: "", phone: "", email: "" }), [B, gt] = Ot.useState({}), at = (G) => {
    const { name: O, value: b } = G.target;
    H((E) => ({ ...E, [O]: b })), gt((E) => ({ ...E, [O]: void 0 }));
  }, F = (G) => {
    var st;
    G.preventDefault();
    const O = { name: h.name.trim(), phone: h.phone.trim(), email: h.email.trim() }, b = {};
    O.name.length < 2 && (b.name = "Vui lòng nhập họ và tên của bạn.");
    const E = O.phone.replace(/\D/g, "");
    (!/^\+?[\d\s().-]+$/.test(O.phone) || E.length < 9 || E.length > 15) && (b.phone = "Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số)."), O.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O.email) && (b.email = "Vui lòng kiểm tra lại địa chỉ email."), gt(b);
    const L = Object.keys(b)[0];
    if (L) {
      (st = G.currentTarget.elements.namedItem(L)) == null || st.focus();
      return;
    }
    T(O);
  };
  return /* @__PURE__ */ o.jsxs(jo, { confirmation: !0, labelledBy: "participant-title", className: "participant-dialog", onClose: y, children: [
    /* @__PURE__ */ o.jsx("button", { className: "close-game", onClick: y, "aria-label": "Đóng form thông tin", children: /* @__PURE__ */ o.jsx(Ro, { size: 20, "aria-hidden": "true" }) }),
    /* @__PURE__ */ o.jsx("p", { className: "participant-eyebrow", children: "GHME · Thử thách sơ cứu" }),
    /* @__PURE__ */ o.jsx("h2", { id: "participant-title", children: "Trước khi bắt đầu" }),
    /* @__PURE__ */ o.jsx("p", { className: "participant-description", children: "Cho GHME biết một chút về bạn để bắt đầu hành trình 10 tình huống." }),
    /* @__PURE__ */ o.jsxs("form", { className: "participant-form", noValidate: !0, onSubmit: F, children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "participant-name", children: [
        "Họ và tên ",
        /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ o.jsx("input", { ref: w, id: "participant-name", name: "name", autoComplete: "name", required: !0, maxLength: 100, placeholder: "Nhập họ và tên của bạn", value: h.name, onChange: at, "aria-invalid": !!B.name, "aria-describedby": B.name ? "participant-name-error" : void 0 }),
      B.name && /* @__PURE__ */ o.jsx("p", { id: "participant-name-error", className: "field-error", children: B.name }),
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "participant-phone", children: [
        "Số điện thoại ",
        /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ o.jsx("input", { id: "participant-phone", name: "phone", type: "tel", inputMode: "tel", autoComplete: "tel", required: !0, maxLength: 24, placeholder: "Nhập số điện thoại", value: h.phone, onChange: at, "aria-invalid": !!B.phone, "aria-describedby": B.phone ? "participant-phone-error" : void 0 }),
      B.phone && /* @__PURE__ */ o.jsx("p", { id: "participant-phone-error", className: "field-error", children: B.phone }),
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "participant-email", children: [
        "Email ",
        /* @__PURE__ */ o.jsx("small", { children: "Không bắt buộc" })
      ] }),
      /* @__PURE__ */ o.jsx("input", { id: "participant-email", name: "email", type: "email", autoComplete: "email", maxLength: 254, placeholder: "ban@example.com", value: h.email, onChange: at, "aria-invalid": !!B.email, "aria-describedby": B.email ? "participant-email-error" : void 0 }),
      B.email && /* @__PURE__ */ o.jsx("p", { id: "participant-email-error", className: "field-error", children: B.email }),
      /* @__PURE__ */ o.jsxs("p", { className: "participant-timing", children: [
        /* @__PURE__ */ o.jsx(yg, { size: 16, "aria-hidden": "true" }),
        "Bạn vẫn có đủ 4 phút sau bước này."
      ] }),
      /* @__PURE__ */ o.jsxs("button", { type: "submit", className: "button-primary", children: [
        "Vào thử thách",
        /* @__PURE__ */ o.jsx(hn, { size: 18, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "participant-notice", children: "Bản xem trước: thông tin chưa được gửi đến GHME và chỉ được giữ trong lượt truy cập này." })
    ] })
  ] });
}
const Jp = /* @__PURE__ */ new Set();
function pg(y) {
  Jp.add(y);
  try {
    sessionStorage.setItem(y, "true");
  } catch {
  }
}
function kp({ imageBase: y }) {
  const [T, w] = Ot.useReducer(Yp, void 0, dn), h = Ot.useRef(null), H = Ot.useRef(null), [B, gt] = Ot.useState(null), [at, F] = Ot.useState(!1), [G, O] = Ot.useState(!1), b = () => O(!0), E = (K, Ut = {}) => w({ type: K, now: Date.now(), ...Ut }), L = () => {
    F(!1), pg("ghmeFirstAidGameDismissed"), E("close");
  }, st = () => B ? E("start") : F(!0), St = (K) => {
    gt(K), F(!1), E("start");
  }, it = () => T.screen === "quiz" ? E("exit") : L();
  Ot.useEffect(() => {
    T.screen !== "closed" && O(!0);
  }, [T.screen]), Ot.useEffect(() => {
    if (T.screen !== "quiz") return;
    const K = () => w({ type: "tick", now: Date.now() }), Ut = setInterval(K, 250);
    return document.addEventListener("visibilitychange", K), () => {
      clearInterval(Ut), document.removeEventListener("visibilitychange", K);
    };
  }, [T.screen, T.deadline]), Ot.useEffect(() => {
    var K;
    T.screen === "result" && pg("ghmeFirstAidGameCompleted"), (K = h.current) == null || K.focus();
  }, [T.screen, T.index]);
  const qt = ri[T.index], q = (K) => {
    const Ut = document.getElementById("programs");
    Ut && (K.preventDefault(), L(), requestAnimationFrame(() => {
      Ut.scrollIntoView({ behavior: "instant" }), Ut.tabIndex = -1, Ut.focus({ preventScroll: !0 }), history.replaceState(null, "", "#programs");
    }));
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("button", { ref: H, type: "button", className: `game-trigger${G ? " is-noticed" : ""}`, onPointerEnter: b, onPointerDown: b, onFocus: b, onClick: () => {
      b(), E("open");
    }, "aria-haspopup": "dialog", "aria-expanded": T.screen !== "closed", children: [
      /* @__PURE__ */ o.jsxs("span", { className: "icon-signal", "aria-hidden": "true", children: [
        /* @__PURE__ */ o.jsx("span", { className: "signal-glow" }),
        /* @__PURE__ */ o.jsxs("span", { className: "signal-waves signal-left", children: [
          /* @__PURE__ */ o.jsx("i", {}),
          /* @__PURE__ */ o.jsx("i", {}),
          /* @__PURE__ */ o.jsx("i", {})
        ] }),
        /* @__PURE__ */ o.jsx("span", { className: "signal-heart", children: /* @__PURE__ */ o.jsx(Hp, { className: "game-trigger-icon", size: 32 }) }),
        /* @__PURE__ */ o.jsxs("span", { className: "signal-waves signal-right", children: [
          /* @__PURE__ */ o.jsx("i", {}),
          /* @__PURE__ */ o.jsx("i", {}),
          /* @__PURE__ */ o.jsx("i", {})
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        "Thử thách sơ cứu ",
        /* @__PURE__ */ o.jsx("strong", { children: "4 phút" })
      ] })
    ] }),
    T.screen !== "closed" && /* @__PURE__ */ o.jsxs(jo, { onClose: it, fallbackRef: H, children: [
      (T.screen === "entry" || T.screen === "intro") && /* @__PURE__ */ o.jsx("button", { className: "close-game", "aria-label": T.screen === "entry" ? "Đóng" : "Đóng thử thách", title: "Đóng", onClick: it, children: /* @__PURE__ */ o.jsx(Ro, { size: 21, "aria-hidden": "true" }) }),
      T.screen === "entry" || T.screen === "intro" ? /* @__PURE__ */ o.jsx(Lp, { imageBase: y, headingRef: h, onStart: st, onClose: L }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Gp, { index: T.index, total: ri.length, answered: T.responses.length, remaining: T.remaining, finished: T.finished, imageBase: y, onClose: it }),
        /* @__PURE__ */ o.jsx("main", { className: "game-main", children: T.screen === "quiz" ? /* @__PURE__ */ o.jsxs("div", { className: "game-composition", children: [
          /* @__PURE__ */ o.jsx(Xp, { question: qt, index: T.index, imageBase: y }),
          /* @__PURE__ */ o.jsx(Vp, { question: qt, index: T.index, total: ri.length, selected: T.selected, confirmed: T.confirmed, hint: T.hint, onSelect: (K) => E("select", { value: K }), onHint: () => E("hint"), onConfirm: () => E("confirm"), onNext: () => E("next", { total: ri.length }), headingRef: h })
        ] }, qt.id) : /* @__PURE__ */ o.jsx(Zp, { questions: ri, responses: T.responses, remaining: T.remaining, timedOut: T.timedOut, onRestart: () => E("intro"), headingRef: h, onCourse: q }) })
      ] }),
      at && /* @__PURE__ */ o.jsx(Kp, { onClose: () => F(!1), onComplete: St }),
      T.exit && /* @__PURE__ */ o.jsxs(jo, { confirmation: !0, onClose: () => E("continue"), children: [
        /* @__PURE__ */ o.jsx("p", { className: "section-label", children: "Rời thử thách" }),
        /* @__PURE__ */ o.jsx("h2", { id: "exit-title", className: "exit-heading", children: "Bạn muốn dừng thử thách?" }),
        /* @__PURE__ */ o.jsx("p", { className: "exit-description", children: "Lượt chơi này sẽ kết thúc. Khi quay lại, bạn sẽ bắt đầu một lượt mới. Đồng hồ vẫn chạy khi bạn cân nhắc." }),
        /* @__PURE__ */ o.jsxs("div", { className: "exit-actions", children: [
          /* @__PURE__ */ o.jsx("button", { autoFocus: !0, className: "button-primary", onClick: () => E("continue"), children: "Tiếp tục" }),
          /* @__PURE__ */ o.jsx("button", { className: "button-secondary", onClick: L, children: "Thoát thử thách" })
        ] })
      ] })
    ] })
  ] });
}
const Fp = '@import"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap";/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:"Be Vietnam Pro", Arial, sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.static{position:static}.block{display:block}.hidden{display:none}.inline{display:inline}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}}:host{color:#123456;font-family:Be Vietnam Pro,Arial,sans-serif;font-size:16px;line-height:1.5}body{min-width:320px;margin:0}*,:before,:after{--tw-border-style:solid}button,a,label{-webkit-tap-highlight-color:transparent}button,summary,label{touch-action:manipulation}button{cursor:pointer}button:disabled{cursor:not-allowed}:focus-visible{outline-offset:4px;outline:3px solid #528ab7}.question-heading:focus{outline:none}.button-primary{color:#fff;background:#c64d0b;border:1px solid #0000;border-radius:7px;justify-content:center;align-items:center;gap:16px;min-height:50px;padding:13px 22px;font-size:13px;font-weight:600;line-height:1.6;text-decoration:none;transition:background .2s,color .2s;display:inline-flex}.button-primary:hover{background:#a94008}.button-primary:disabled{color:#68788a;background:#edf0f3}.button-secondary{color:#123456;background:#fff;border:1px solid #dce5ed;border-radius:7px;justify-content:center;align-items:center;min-height:50px;padding:13px 22px;font-size:13px;transition:background .2s;display:inline-flex}.button-secondary:hover{background:#eef5fa}.text-button{color:#536980;border-radius:5px;justify-content:center;align-items:center;gap:10px;min-height:44px;padding:8px 10px;font-size:13px;font-weight:500;transition:color .2s,background .2s;display:inline-flex}.text-button:hover{color:#123456;background:#eef5fa}.section-label,.eyebrow{color:#64748b;letter-spacing:1.5px;text-transform:uppercase;font-size:10px;font-weight:600;line-height:1.6}.game-dialog{color:#123456;overscroll-behavior:contain;scrollbar-gutter:stable;background:#fff;border:0;border-radius:16px;width:min(1240px,100% - 80px);max-width:none;max-height:calc(100dvh - 64px);margin:auto;padding:0;position:fixed;top:0;right:0;bottom:0;left:0;overflow-y:auto;box-shadow:0 24px 100px #071d3040}.game-dialog[open]{animation:.22s ease-out reveal}.game-dialog::backdrop{background:#0d2438a6}.close-game{z-index:3;color:#61768a;background:0 0;border:1px solid #0000;border-radius:50%;place-items:center;width:44px;height:44px;transition:background .2s,color .2s;display:grid;position:absolute;top:16px;right:16px}.close-game:hover{color:#123456;background:#eef5fa}.game-main{padding:34px 44px 36px}.training-header{border-bottom:1px solid #e3ebf1;grid-template-columns:1fr 210px 1fr;align-items:center;gap:32px;min-height:78px;padding:16px 80px 16px 44px;display:grid;position:relative}.training-brand{align-items:center;gap:16px;display:flex}.training-brand img{width:90px;height:auto}.training-brand>span{border-left:1px solid #dce5ed;padding-left:16px;font-size:10px;font-weight:500}.training-progress{text-align:center}.training-progress p{margin-bottom:9px;font-size:11px}.training-progress p strong{font-weight:600}.training-progress p span{color:#64748b}.progress-track{background:#e8eef3;border-radius:4px;height:3px;overflow:hidden}.progress-track>span{background:#c64d0b;height:100%;transition:width .22s;display:block}.training-timer{color:#123456;justify-content:flex-end;align-items:center;gap:9px;display:flex}.training-timer svg{color:#73889a}.training-timer [role=timer]{font-variant-numeric:tabular-nums;letter-spacing:-.5px;font-size:22px;font-weight:600}.training-timer.is-low,.training-timer.is-low svg{color:#b7470a}.game-composition{grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);align-items:start;gap:48px;animation:.22s ease-out reveal;display:grid}.case-label{color:#64748b;letter-spacing:1.5px;text-transform:uppercase;align-items:center;gap:16px;margin:3px 0 20px;font-size:10px;font-weight:600;display:flex}.case-line{background:#dce5ed;flex:1;height:1px}.case-visual img{aspect-ratio:1.18;object-fit:cover;background:#eef5fa;border-radius:9px;width:100%}.case-visual figcaption{color:#64748b;margin-top:12px;font-size:10px;line-height:1.6}.decision{min-width:0}.question-category{color:#64748b;margin-bottom:12px;font-size:11px;font-weight:500}.decision h2{letter-spacing:-.75px;text-wrap:pretty;font-size:26px;font-weight:700;line-height:1.45}.decision-choices{gap:9px;margin-top:24px;display:grid}.answer-option{cursor:pointer;background:#fff;border:1px solid #dce5ed;border-radius:7px;align-items:center;gap:14px;min-height:64px;padding:12px 15px;transition:border-color .18s,background .18s,color .18s;display:flex;position:relative}.answer-option:hover{background:#f5f9fc;border-color:#819bb1}.answer-option:has(input:focus-visible){outline-offset:3px;outline:3px solid #528ab7}.answer-letter{color:#536980;border:1px solid #dce5ed;border-radius:50%;flex:0 0 30px;place-items:center;height:30px;font-size:11px;font-weight:600;transition:background .18s,color .18s,border-color .18s;display:grid}.answer-text{flex:1;min-width:0;font-size:12px;font-weight:500;line-height:1.7}.answer-mark{flex:0 0 18px;place-items:center;display:grid}.answer-option.is-selected{background:#eef5fa;border-color:#123456}.answer-option.is-selected .answer-letter{color:#fff;background:#123456;border-color:#123456}.answer-option.is-locked{cursor:default}.answer-option.is-locked:not(.is-correct):not(.is-incorrect){color:#758494;background:#fafbfc}.answer-option.is-correct{background:#f0f7f4;border-color:#548a78}.answer-option.is-correct .answer-letter{color:#fff;background:#2c6d58;border-color:#2c6d58}.answer-option.is-correct .answer-mark{color:#2c6d58}.answer-option.is-incorrect{background:#fff4eb;border-color:#c18b67}.answer-option.is-incorrect .answer-letter{color:#fff;background:#ab4c17;border-color:#ab4c17}.answer-option.is-incorrect .answer-mark{color:#ab4c17}.learning-space{min-height:166px;margin-top:20px}.training-aid{padding-top:4px}.hint-toggle{color:#536980;text-align:left;align-items:center;gap:9px;min-height:40px;padding:6px 0;font-size:12px;font-weight:500;display:inline-flex}.hint-toggle:hover{color:#123456}.hint-toggle svg{color:#b34b13}.hint-content p{color:#536980;border-left:2px solid #d9e6ef;max-width:95%;margin:8px 0 0 27px;padding-left:13px;font-size:12px;line-height:1.8;animation:.2s reveal}.feedback{border-left:2px solid #a6c5b9;padding:0 0 2px 15px;animation:.2s ease-out reveal}.feedback-review{border-color:#d9aa87}.feedback-status{color:#2c6d58;align-items:center;gap:8px;font-size:12px;display:flex}.feedback-status strong{font-weight:600}.feedback-status svg{flex-shrink:0}.feedback-review .feedback-status{color:#a14b19}.feedback-explanation{color:#415a72;margin-top:8px;font-size:12px;line-height:1.8}.feedback-takeaway{color:#536980;margin-top:8px;font-size:11px;line-height:1.8}.feedback-takeaway strong{color:#123456;font-size:10px;font-weight:600;display:block}.source-link{color:#536980;text-underline-offset:3px;align-items:center;gap:5px;padding-block:5px;font-size:10px;text-decoration:underline;display:inline-flex}.source-link:hover{color:#123456}.decision-actions{border-top:1px solid #dce5ed;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;padding-top:18px;display:flex}.decision-step{color:#64748b;max-width:145px;font-size:10px;line-height:1.7}.decision-primary{min-width:214px}.opening{padding:34px 56px 24px}.opening-brand{align-items:center;gap:18px;margin-bottom:42px;display:flex}.opening-brand img{width:112px;height:auto}.opening-brand>span{color:#64748b;border-left:1px solid #dce5ed;padding-left:18px;font-size:11px}.opening-composition{grid-template-columns:1.15fr 1fr;align-items:center;gap:72px;display:grid}.opening-title{letter-spacing:-2.5px;font-weight:700;line-height:1.08}.opening-four{font-size:96px;display:block}.opening-four>span{font-size:55px}.opening-golden{letter-spacing:-1.6px;margin-top:3px;font-size:42px;line-height:1.15;display:block}.title-stop{color:#c64d0b}.opening-question{letter-spacing:-.4px;margin-top:24px;font-size:22px;font-weight:500;line-height:1.5}.opening-description{color:#64748b;margin-top:13px;font-size:12px;line-height:1.9}.opening-actions{align-items:center;gap:24px;margin-top:28px;display:flex}.opening-visual{flex-direction:column;justify-content:center;align-self:stretch;display:flex}.opening-visual img{aspect-ratio:.95;object-fit:cover;background:#eef5fa;border-radius:100px 100px 8px 8px;width:100%}.opening-visual figcaption{color:#64748b;margin-top:16px;font-size:10px}.opening-note{color:#64748b;border-top:1px solid #e3ebf1;margin-top:36px;padding-top:16px;font-size:10px;line-height:1.8}.exit-dialog{scrollbar-gutter:auto;border-radius:12px;width:min(460px,100% - 40px);padding:32px}.exit-heading{letter-spacing:-.5px;margin-top:12px;font-size:23px;font-weight:700;line-height:1.5}.exit-description{color:#64748b;margin:18px 0 22px;font-size:13px;line-height:1.9}.exit-actions{flex-wrap:wrap;gap:10px;display:flex}.results{max-width:1000px;margin:8px auto 0;animation:.22s reveal}.result-overview{grid-template-columns:1fr 1fr;gap:64px;padding-bottom:36px;display:grid}.result-score{letter-spacing:-5px;font-variant-numeric:tabular-nums;margin-top:10px;font-size:100px;font-weight:600;line-height:1.15}.score-total{color:#8b9eae;letter-spacing:-1px;font-size:32px;font-weight:400}.result-hero h2{letter-spacing:-.4px;margin-top:16px;font-size:22px;font-weight:600;line-height:1.5}.result-time{color:#64748b;margin-top:12px;font-size:12px}.result-time strong{color:#123456;font-variant-numeric:tabular-nums;font-weight:500}.result-support{color:#64748b;max-width:320px;margin-top:10px;font-size:12px;line-height:1.9}.learning-summary{border-left:1px solid #dce5ed;padding-left:36px}.summary-group h2{align-items:center;gap:8px;font-size:14px;font-weight:600;display:flex}.summary-group h2 svg{color:#2c6d58}.summary-group ul{flex-wrap:wrap;gap:6px 22px;margin-top:12px;display:flex}.summary-group li{color:#536980;padding-left:12px;font-size:11px;line-height:1.8;position:relative}.summary-group li:before{content:"";background:#819bb1;border-radius:50%;width:3px;height:3px;position:absolute;top:8px;left:0}.summary-group .revisit-list li:before{background:#c64d0b}.summary-note{color:#64748b;margin-top:8px;font-size:11px;line-height:1.8}.answer-review{border-top:1px solid #dce5ed;padding:28px 0}.review-heading{justify-content:space-between;align-items:baseline;gap:20px;margin-bottom:8px;display:flex}.review-heading h2{font-size:18px;font-weight:600}.review-heading h2 span{color:#819bb1;margin-left:8px;font-size:14px;font-weight:400}.review-heading>p{color:#64748b;font-size:10px}.review-row{border-bottom:1px solid #e3ebf1;gap:22px;padding:24px 0;display:flex}.review-number{color:#819bb1;font-variant-numeric:tabular-nums;flex:0 0 30px;padding-top:2px;font-size:18px;font-weight:500}.review-content{flex:1;min-width:0}.review-category{color:#64748b;font-size:10px}.review-content h3{max-width:760px;margin-top:5px;font-size:14px;font-weight:600;line-height:1.8}.review-answers{grid-template-columns:1fr 1fr;gap:24px;margin-top:14px;display:grid}.review-answers p{color:#64748b;font-size:11px;line-height:1.8}.review-answers p>span{color:#819bb1;margin-bottom:4px;font-size:10px;display:block}.review-answers .review-correct{color:#123456}.review-content summary{cursor:pointer;border-radius:4px;align-items:center;gap:8px;width:fit-content;min-height:44px;margin-top:6px;font-size:11px;font-weight:500;list-style:none;display:flex}.review-content summary::-webkit-details-marker{display:none}.review-content summary svg{transition:transform .2s}.review-content details[open] summary svg{transform:rotate(180deg)}.review-explanation{color:#536980;border-left:2px solid #dce5ed;max-width:760px;margin:4px 0 8px;padding-left:16px;font-size:12px;line-height:1.9;animation:.2s reveal}.review-toggle{margin-top:14px;padding-left:0}.review-empty{color:#536980;padding:20px 0 0;font-size:12px}.result-next{border-top:1px solid #dce5ed;grid-template-columns:1fr auto;align-items:center;gap:24px;padding:30px 0 26px;display:grid}.result-next h2{margin-top:8px;font-size:18px;font-weight:600;line-height:1.6}.result-next p:not(.section-label){color:#64748b;margin-top:8px;font-size:12px;line-height:1.9}.result-next-actions{flex-direction:column;align-items:center;gap:8px;display:flex}.result-next-actions .button-primary{padding-inline:18px;font-size:12px}.result-note{color:#64748b;border-top:1px solid #e3ebf1;padding-top:12px;font-size:10px;line-height:1.8}@keyframes reveal{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@media(max-width:1200px){.game-dialog{width:calc(100% - 48px)}.game-main{padding:30px 32px}.training-header{gap:20px;padding-left:32px}.training-brand>span{display:none}.game-composition{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:32px}.decision h2{font-size:24px}.opening{padding-inline:44px}.opening-composition{gap:48px}}@media(max-width:1024px){.game-dialog{max-height:calc(100dvh - 40px)}.game-main{padding:26px 28px}.game-composition{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:28px}.decision h2{font-size:23px}.decision-actions{gap:10px}.decision-step{max-width:120px}.decision-primary{min-width:200px;padding-inline:16px}.opening-brand{margin-bottom:30px}.opening-composition{gap:32px}.opening-four{font-size:84px}.opening-four>span{font-size:48px}.opening-golden{font-size:36px}.result-overview{gap:32px}.learning-summary{padding-left:28px}.result-next{grid-template-columns:1fr}.result-next-actions{flex-direction:row;align-items:flex-start}}@media(max-width:820px){.game-dialog{width:calc(100% - 32px)}.training-header{grid-template-columns:1fr 170px auto;gap:24px;padding-left:24px}.game-main{padding:24px 28px}.game-composition{grid-template-columns:minmax(0,1fr);gap:28px}.case-label{margin-bottom:14px}.case-visual img{aspect-ratio:2.05;object-position:center 48%}.case-visual figcaption{margin-top:8px}.decision h2{font-size:26px}.learning-space{min-height:176px}.decision-step{max-width:none}.opening{padding:30px 36px 24px}.opening-brand{margin-bottom:32px}.opening-composition{grid-template-columns:1.2fr 1fr;gap:26px}.opening-four{font-size:76px}.opening-four>span{font-size:40px}.opening-golden{font-size:31px}.opening-question{font-size:19px}.opening-actions{gap:12px}.opening-actions .button-primary{padding-inline:15px;font-size:12px}.opening-visual img{border-radius:70px 70px 7px 7px}.desktop-break{display:none}.result-overview{gap:24px}.result-score{font-size:86px}.result-hero h2{font-size:20px}.review-heading{display:block}.review-heading>p{margin-top:7px}}@media(max-width:580px){.game-dialog{border-radius:12px;width:calc(100% - 20px);max-height:calc(100dvh - 20px)}.close-game{top:11px;right:8px}.training-header{z-index:2;background:#fff;grid-template-columns:1fr auto;gap:12px;min-height:98px;padding:16px 60px 12px 20px;position:sticky;top:0}.training-brand img{width:84px}.training-progress{text-align:left;order:3;grid-column:1/-1;align-items:center;gap:14px;display:flex}.training-progress p{flex-shrink:0;margin:0;font-size:10px}.progress-track{flex:1}.training-timer [role=timer]{font-size:20px}.game-main{padding:20px 20px 24px}.game-composition{gap:22px}.case-label{margin-top:0;margin-bottom:12px;font-size:9px}.case-visual img{aspect-ratio:1.6;border-radius:6px}.case-visual figcaption{font-size:9px}.question-category{margin-bottom:8px;font-size:10px}.decision h2{letter-spacing:-.5px;font-size:22px;line-height:1.5}.decision-choices{gap:9px;margin-top:20px}.answer-option{gap:11px;min-height:70px;padding:12px}.answer-text{font-size:12px}.answer-letter{flex-basis:28px;height:28px}.learning-space{min-height:205px;margin-top:18px}.feedback{padding-left:12px}.decision-actions{flex-direction:column;align-items:stretch;gap:12px;margin-top:10px;padding-top:16px}.decision-step{font-size:10px}.decision-primary{width:100%}.opening{padding:26px 24px 20px}.opening-brand{gap:12px;margin-bottom:30px;padding-right:26px}.opening-brand img{width:92px}.opening-brand>span{max-width:120px;padding-left:12px;font-size:9px;line-height:1.7}.opening-composition{grid-template-columns:minmax(0,1fr)}.opening-four{font-size:86px}.opening-four>span{font-size:46px}.opening-golden{letter-spacing:-1.3px;font-size:37px}.opening-question{margin-top:22px;font-size:21px}.opening-description{margin-top:12px}.opening-actions{gap:22px;margin-top:24px}.opening-actions .button-primary{min-height:50px;padding-inline:18px}.opening-visual{display:none}.opening-note{margin-top:28px;font-size:9px}.exit-dialog{width:calc(100% - 32px);padding:28px 24px}.result-overview{grid-template-columns:minmax(0,1fr);gap:28px;padding-bottom:26px}.result-score{font-size:96px}.result-hero h2{font-size:21px}.learning-summary{border-top:1px solid #dce5ed;border-left:none;padding:24px 0 0}.summary-group ul{gap:6px 16px}.review-heading h2{font-size:16px}.review-row{gap:12px;padding:22px 0}.review-number{flex-basis:24px;font-size:16px}.review-content h3{font-size:13px}.review-answers{grid-template-columns:minmax(0,1fr);gap:12px}.result-next h2{font-size:18px}.result-next-actions{flex-direction:column;align-items:stretch}.result-next-actions .button-primary{gap:10px;padding-inline:12px;font-size:11px}.result-note{font-size:9px}}@media(prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}.game-trigger{z-index:40;color:#123456;background:#fff;border:1px solid #dce5ed;border-radius:40px;align-items:center;gap:10px;padding:13px 19px;font-size:12px;display:flex;position:fixed;bottom:24px;right:24px;box-shadow:0 4px 20px #12345618}.game-trigger strong{color:#b84709;margin-left:5px}.game-trigger{--trigger-pulse:1.022;transition:transform .2s,border-color .2s,box-shadow .2s;animation:.45s cubic-bezier(.22,1,.36,1) 2.5s backwards trigger-enter,.7s ease-in-out 4.85s trigger-pulse,.7s ease-in-out 19.45s trigger-pulse}.game-trigger-icon{transform-origin:50%;flex-shrink:0;transition:transform .2s;animation:4.8s ease-in-out 3.55s infinite signal-heartbeat}.game-trigger strong{transition:color .2s;animation:.4s ease-in-out 4.45s trigger-emphasis;display:inline-block}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(10px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}@keyframes signal-heartbeat{0%,8%,17%,to{transform:scale(1)}4%{transform:scale(1.08)}12%{transform:scale(1.04)}}@keyframes trigger-emphasis{0%,to{transform:scale(1)}50%{transform:scale(1.04)}}@keyframes trigger-pulse{0%,to{transform:scale(1)}50%{transform:scale(var(--trigger-pulse))}}.game-trigger.is-noticed,.game-trigger.is-noticed strong{animation:none}.icon-signal{--signal-heart:#9e3348;--signal-wave:#c65c79;--signal-strength:.8;pointer-events:none;flex:0 0 70px;justify-content:center;align-items:center;width:70px;height:20px;display:flex;position:relative}.signal-heart{color:var(--signal-heart);transition:transform .2s;display:flex;position:relative}.signal-glow{opacity:.8;background:radial-gradient(#d6628526,#e797b314 48%,#0000 72%);border-radius:50%;width:54px;height:44px;transition:opacity .2s;position:absolute}.signal-waves{position:absolute;top:0;right:0;bottom:0;left:0}.signal-right{transform:scaleX(-1)}.signal-waves i{border-left:2.2px solid var(--signal-wave);opacity:0;transform-origin:100%;border-radius:50%;width:8px;height:24px;margin-top:-12px;animation:4.8s ease-out 3.75s infinite signal-wave;position:absolute;top:50%;left:calc(50% - 23px)}.signal-waves i:nth-child(2){--signal-strength:.62;height:30px;margin-top:-15px;animation-delay:3.9s;left:calc(50% - 28px)}.signal-waves i:nth-child(3){--signal-strength:.44;height:36px;margin-top:-18px;animation-delay:4.05s;left:calc(50% - 33px)}@keyframes signal-wave{0%{opacity:0;transform:translate(2px)scale(.75)}7%,12%{opacity:var(--signal-strength)}23%,to{opacity:0;transform:translate(-1px)scale(1)}}.game-trigger[aria-expanded=true] .game-trigger-icon,.game-trigger[aria-expanded=true] .signal-waves i{animation-play-state:paused}@media(hover:hover)and (pointer:fine){.game-trigger:hover{border-color:#b9cad9;transform:translateY(-2px);box-shadow:0 6px 24px #12345620}.game-trigger:hover .signal-heart{transform:scale(1.04)}.game-trigger:hover .signal-glow{opacity:1}.game-trigger:hover strong{color:#a74008}}.game-trigger:focus-visible{outline-offset:4px;outline:2px solid #528ab7}.game-trigger:active{transition-duration:.12s;transform:scale(.98)}@media(max-width:767px){.game-trigger{--trigger-pulse:1.015}@keyframes trigger-enter{0%{opacity:0;visibility:hidden;transform:translateY(6px)scale(.97)}to{opacity:1;visibility:visible;transform:translateY(0)scale(1)}}}@media(max-width:1024px){.icon-signal{flex-basis:64px;width:64px}.signal-waves{transform:scaleX(.9)}.signal-right{transform:scaleX(-.9)}}@media(max-width:430px){.icon-signal{--signal-strength:.7;flex-basis:58px;width:58px}.game-trigger-icon{width:28px;height:28px}.signal-glow{opacity:.65;width:48px;height:40px}.signal-waves{transform:scale(.82)}.signal-right{transform:scale(-.82,.82)}.signal-waves i:nth-child(2){--signal-strength:.54}.signal-waves i:nth-child(3){--signal-strength:.38}}@media(prefers-reduced-motion:reduce){.game-trigger,.game-trigger:hover,.game-trigger:active,.game-trigger .game-trigger-icon,.game-trigger:hover .game-trigger-icon,.game-trigger strong,.game-trigger:hover .signal-heart{transform:none}.signal-waves{display:none}}@media(max-width:479px){.game-trigger{padding:11px 15px;bottom:12px;right:12px}}.results{max-width:1060px}.result-overview{grid-template-columns:1.05fr 1fr;align-items:stretch;gap:36px}.result-hero{color:#fff;background:#123456;border-radius:12px;padding:30px 32px}.result-hero .section-label{color:#d8e7f2;font-size:11px}.result-score{color:#fff;margin-top:12px;font-size:94px}.result-hero .score-total{color:#b9cede}.result-hero h2{margin-top:12px;font-size:23px}.result-time,.result-support{color:#d0dfeb;font-size:12px}.result-time strong{color:#fff}.result-support{max-width:370px}.result-review-action{color:#fff;border:1px solid #7895ad;border-radius:6px;align-items:center;gap:12px;min-height:44px;margin-top:20px;padding:10px 14px;font-size:12px;font-weight:500;transition:background .18s;display:inline-flex}.result-review-action:hover{background:#244966}.learning-summary{border:0;flex-direction:column;justify-content:center;gap:26px;padding:10px 0;display:flex}.summary-group{border-left:3px solid #c64d0b;padding-left:20px}.summary-group+.summary-group{margin-top:0}.summary-strength{border-left-color:#2c765e}.summary-group h2{font-size:17px}.summary-strength h2,.summary-strength h2 svg{color:#226348}.summary-revisit h2,.summary-revisit h2 svg{color:#a5420c}.summary-note{color:#4d6276;font-size:12px}.summary-group ul{gap:8px}.summary-group li{color:#245c46;background:#edf6f1;border-radius:5px;padding:6px 10px;font-size:12px}.summary-group li:before{display:none}.summary-group .revisit-list li{color:#85390f;background:#fff1e6}.review-heading h2{font-size:21px}.review-heading h2 span{color:#a5420c;background:#fff0e5;border-radius:50%;place-items:center;min-width:28px;height:28px;padding:0 6px;font-size:13px;font-weight:600;display:inline-grid}#review-title{scroll-margin-top:120px}.review-heading>p,.review-category{color:#52677c;font-size:11px}.review-number{color:#b14912;font-weight:600}.review-content h3{font-size:15px}.review-answers{gap:12px}.review-answers p{color:#78431f;background:#fff4eb;border-radius:6px;padding:12px 14px;font-size:12px}.review-answers p>span{color:#8b471e;margin-bottom:6px;font-size:10px;font-weight:600}.review-answers .review-correct,.review-answers .is-correct{color:#245c46;background:#edf6f1}.review-answers .review-correct>span,.review-answers .is-correct>span{color:#245c46}.review-content summary{color:#123456;font-size:12px}.review-explanation{color:#40596e;background:#f1f6fa;border-left-color:#83a2bc;border-radius:0 5px 5px 0;padding:12px 16px}.review-toggle{color:#a5420c;font-weight:600}.result-next{background:#edf4f9;border:0;border-radius:10px;margin-bottom:24px;padding:26px}.result-next p:not(.section-label),.result-note{color:#52677c}.game-dialog.participant-dialog{border-radius:14px;width:min(490px,100% - 32px);max-height:calc(100dvh - 32px);padding:34px}.participant-eyebrow{letter-spacing:1px;text-transform:uppercase;color:#a5420c;padding-right:20px;font-size:10px;font-weight:600}.participant-dialog h2{letter-spacing:-.7px;margin-top:14px;font-size:28px;font-weight:700;line-height:1.3}.participant-description{color:#52677c;margin-top:12px;font-size:13px;line-height:1.8}.participant-form{margin-top:24px}.participant-form label{align-items:baseline;gap:5px;margin:16px 0 7px;font-size:12px;font-weight:600;display:flex}.participant-form label>span{color:#a5420c}.participant-form label small{color:#65778a;margin-left:auto;font-size:10px;font-weight:400}.participant-form input{box-sizing:border-box;color:#123456;width:100%;height:48px;font:inherit;background:#fff;border:1px solid #b9c9d6;border-radius:6px;padding:12px 14px;font-size:14px;display:block}.participant-form input::placeholder{color:#7a8a99}.participant-form input:focus-visible{outline-offset:2px;border-color:#528ab7;outline:2px solid #528ab7}.participant-form input[aria-invalid=true]{background:#fff8f2;border-color:#ab4c17}.field-error{color:#9a3e0b;margin-top:5px;font-size:11px;line-height:1.6}.participant-timing{color:#52677c;align-items:center;gap:8px;margin:22px 0 14px;font-size:11px;display:flex}.participant-timing svg{flex-shrink:0}.participant-form .button-primary{width:100%}.participant-notice{color:#627589;margin-top:13px;font-size:10px;line-height:1.8}@media(max-width:820px){.result-overview{grid-template-columns:minmax(0,1fr);gap:26px}.result-hero{padding:28px}.learning-summary{padding:0}.result-next{padding:24px}}@media(max-width:580px){.result-hero{padding:24px 20px}.result-score{font-size:84px}.result-hero h2{font-size:21px}.summary-group{padding-left:16px}.summary-group h2{font-size:16px}.review-heading h2{font-size:17px}.review-content h3{font-size:14px}.result-next{padding:22px 18px}.game-dialog.participant-dialog{padding:28px 24px}.participant-dialog h2{font-size:26px}.participant-form input{font-size:16px}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}', Mo = document.getElementById("ghme-first-aid") || document.getElementById("root");
if (Mo && !Mo.shadowRoot) {
  const y = Mo.attachShadow({ mode: "open" }), T = document.createElement("style");
  T.textContent = Fp;
  const w = document.createElement("div");
  y.append(T, w);
  const h = new URL(
    /* @vite-ignore */
    "./images/",
    import.meta.url
  ).href;
  Ap.createRoot(w).render(/* @__PURE__ */ o.jsx(Sp.StrictMode, { children: /* @__PURE__ */ o.jsx(kp, { imageBase: h }) }));
}
