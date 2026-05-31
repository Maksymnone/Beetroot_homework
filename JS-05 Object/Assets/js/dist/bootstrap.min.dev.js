"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v5.3.8 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var _xt;

  var t = new Map(),
      e = {
    set: function set(e, i, n) {
      t.has(e) || t.set(e, new Map());
      var s = t.get(e);
      s.has(i) || 0 === s.size ? s.set(i, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(e, i) {
      return t.has(e) && t.get(e).get(i) || null;
    },
    remove: function remove(e, i) {
      if (!t.has(e)) return;
      var n = t.get(e);
      n["delete"](i), 0 === n.size && t["delete"](e);
    }
  },
      i = "transitionend",
      n = function n(t) {
    return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
      return "#".concat(CSS.escape(e));
    })), t;
  },
      s = function s(t) {
    return null == t ? "".concat(t) : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
  },
      o = function o(t) {
    t.dispatchEvent(new Event(i));
  },
      r = function r(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      a = function a(t) {
    return r(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null;
  },
      l = function l(t) {
    if (!r(t) || 0 === t.getClientRects().length) return !1;
    var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      var _e2 = t.closest("summary");

      if (_e2 && _e2.parentNode !== i) return !1;
      if (null === _e2) return !1;
    }

    return e;
  },
      c = function c(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
  },
      d = function d() {},
      u = function u(t) {
    t.offsetHeight;
  },
      f = function f() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      p = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      g = function g(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i2 = t.NAME,
            _n2 = e.fn[_i2];
        e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
          return e.fn[_i2] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t2 = _step.value;

          _t2();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }), p.push(e)) : e();
  },
      _ = function _(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    return "function" == typeof t ? t.call.apply(t, _toConsumableArray(e)) : i;
  },
      b = function b(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!n) return void _(t);

    var s = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var r = !1;

    var a = function a(_ref) {
      var n = _ref.target;
      n === e && (r = !0, e.removeEventListener(i, a), _(t));
    };

    e.addEventListener(i, a), setTimeout(function () {
      r || o(e);
    }, s);
  },
      v = function v(t, e, i, n) {
    var s = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
  },
      y = /[^.]*(?=\..*)\.|.*/,
      w = /\..*/,
      A = /::\d+$/,
      E = {};

  var T = 1;
  var C = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && "".concat(e, "::").concat(T++) || t.uidEvent || T++;
  }

  function k(t) {
    var e = x(t);
    return t.uidEvent = e, E[e] = E[e] || {}, E[e];
  }

  function L(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }

  function S(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e || i;
    var o = N(t);
    return O.has(o) || (o = t), [n, s, o];
  }

  function D(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    var _S = S(e, i, n),
        _S2 = _slicedToArray(_S, 3),
        o = _S2[0],
        r = _S2[1],
        a = _S2[2];

    if (e in C) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      r = _t3(r);
    }

    var l = k(t),
        c = l[a] || (l[a] = {}),
        h = L(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = x(r, e.replace(y, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _a = _step2.value;
              if (_a === _r) return j(s, {
                delegateTarget: _r
              }), n.oneOff && P.off(t, s.type, e, i), i.apply(_r, [s]);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      };
    }(t, i, r) : function (t, e) {
      return function i(n) {
        return j(n, {
          delegateTarget: t
        }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function $(t, e, i, n, s) {
    var o = L(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function I(t, e, i, n) {
    var s = e[i] || {};

    for (var _i3 = 0, _Object$entries = Object.entries(s); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          _o = _Object$entries$_i[0],
          _r2 = _Object$entries$_i[1];

      _o.includes(n) && $(t, e, i, _r2.callable, _r2.delegationSelector);
    }
  }

  function N(t) {
    return t = t.replace(w, ""), C[t] || t;
  }

  var P = {
    on: function on(t, e, i, n) {
      D(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      D(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _S3 = S(e, i, n),
          _S4 = _slicedToArray(_S3, 3),
          s = _S4[0],
          o = _S4[1],
          r = _S4[2],
          a = r !== e,
          l = k(t),
          c = l[r] || {},
          h = e.startsWith(".");

      if (void 0 === o) {
        if (h) {
          for (var _i4 = 0, _Object$keys = Object.keys(l); _i4 < _Object$keys.length; _i4++) {
            var _i5 = _Object$keys[_i4];
            I(t, l, _i5, e.slice(1));
          }
        }

        for (var _i6 = 0, _Object$entries2 = Object.entries(c); _i6 < _Object$entries2.length; _i6++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
              _i7 = _Object$entries2$_i[0],
              _n3 = _Object$entries2$_i[1];

          var _s2 = _i7.replace(A, "");

          a && !e.includes(_s2) || $(t, l, r, _n3.callable, _n3.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        $(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = f();
      var s = null,
          o = !0,
          r = !0,
          a = !1;
      e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = j(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };

  function j(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i8], 2),
          i = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];

      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };

    for (var _i8 = 0, _Object$entries3 = Object.entries(e); _i8 < _Object$entries3.length; _i8++) {
      _loop();
    }

    return t;
  }

  function M(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;

    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }

  function F(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var H = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(F(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(F(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = i[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _n4 = _step3.value;

          var _i9 = _n4.replace(/^bs/, "");

          _i9 = _i9.charAt(0).toLowerCase() + _i9.slice(1), e[_i9] = M(t.dataset[_n4]);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-".concat(F(e))));
    }
  };

  var W =
  /*#__PURE__*/
  function () {
    function W() {
      _classCallCheck(this, W);
    }

    _createClass(W, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = r(e) ? H.getDataAttribute(e, "config") : {};
        return _objectSpread({}, this.constructor.Default, {}, "object" == _typeof(i) ? i : {}, {}, r(e) ? H.getDataAttributes(e) : {}, {}, "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i10 = 0, _Object$entries4 = Object.entries(e); _i10 < _Object$entries4.length; _i10++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i10], 2),
              _i11 = _Object$entries4$_i[0],
              _n5 = _Object$entries4$_i[1];

          var _e4 = t[_i11],
              _o2 = r(_e4) ? "element" : s(_e4);

          if (!new RegExp(_n5).test(_o2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_i11, "\" provided type \"").concat(_o2, "\" but expected type \"").concat(_n5, "\"."));
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);

    return W;
  }();

  var B =
  /*#__PURE__*/
  function (_W) {
    _inherits(B, _W);

    function B(t, i) {
      var _this;

      _classCallCheck(this, B);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(B).call(this)), (t = a(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(B, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Object.getOwnPropertyNames(this)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _t4 = _step4.value;
            this[_t4] = null;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        b(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return e.get(a(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.8";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return B;
  }(W);

  var z = function z(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i12 = t.getAttribute("href");

      if (!_i12 || !_i12.includes("#") && !_i12.startsWith(".")) return null;
      _i12.includes("#") && !_i12.startsWith("#") && (_i12 = "#".concat(_i12.split("#")[1])), e = _i12 && "#" !== _i12 ? _i12.trim() : null;
    }

    return e ? e.split(",").map(function (t) {
      return n(t);
    }).join(",") : null;
  },
      R = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode.closest(e);

      for (; n;) {
        i.push(n), n = n.parentNode.closest(e);
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(",");
      return this.find(e, t).filter(function (t) {
        return !c(t) && l(t);
      });
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = z(t);
      return e && R.findOne(e) ? e : null;
    },
    getElementFromSelector: function getElementFromSelector(t) {
      var e = z(t);
      return e ? R.findOne(e) : null;
    },
    getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
      var e = z(t);
      return e ? R.find(e) : [];
    }
  },
      q = function q(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        n = t.NAME;
    P.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
      var s = R.getElementFromSelector(this) || this.closest(".".concat(n));
      t.getOrCreateInstance(s)[e]();
    });
  },
      V = ".bs.alert",
      K = "close".concat(V),
      Q = "closed".concat(V);

  var X =
  /*#__PURE__*/
  function (_B) {
    _inherits(X, _B);

    function X() {
      _classCallCheck(this, X);

      return _possibleConstructorReturn(this, _getPrototypeOf(X).apply(this, arguments));
    }

    _createClass(X, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (P.trigger(this._element, K).defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), P.trigger(this._element, Q), this.dispose();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = X.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return X;
  }(B);

  q(X, "close"), g(X);
  var Y = '[data-bs-toggle="button"]';

  var U =
  /*#__PURE__*/
  function (_B2) {
    _inherits(U, _B2);

    function U() {
      _classCallCheck(this, U);

      return _possibleConstructorReturn(this, _getPrototypeOf(U).apply(this, arguments));
    }

    _createClass(U, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = U.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return U;
  }(B);

  P.on(document, "click.bs.button.data-api", Y, function (t) {
    t.preventDefault();
    var e = t.target.closest(Y);
    U.getOrCreateInstance(e).toggle();
  }), g(U);
  var G = ".bs.swipe",
      J = "touchstart".concat(G),
      Z = "touchmove".concat(G),
      tt = "touchend".concat(G),
      et = "pointerdown".concat(G),
      it = "pointerup".concat(G),
      nt = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      st = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var ot =
  /*#__PURE__*/
  function (_W2) {
    _inherits(ot, _W2);

    function ot(t, e) {
      var _this3;

      _classCallCheck(this, ot);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ot).call(this)), _this3._element = t, t && ot.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(ot, [{
      key: "dispose",
      value: function dispose() {
        P.off(this._element, G);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && _(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? (P.on(this._element, et, function (t) {
          return _this4._start(t);
        }), P.on(this._element, it, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, J, function (t) {
          return _this4._start(t);
        }), P.on(this._element, Z, function (t) {
          return _this4._move(t);
        }), P.on(this._element, tt, function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }, {
      key: "Default",
      get: function get() {
        return nt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return st;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }]);

    return ot;
  }(W);

  var rt = ".bs.carousel",
      at = ".data-api",
      lt = "ArrowLeft",
      ct = "ArrowRight",
      ht = "next",
      dt = "prev",
      ut = "left",
      ft = "right",
      pt = "slide".concat(rt),
      mt = "slid".concat(rt),
      gt = "keydown".concat(rt),
      _t = "mouseenter".concat(rt),
      bt = "mouseleave".concat(rt),
      vt = "dragstart".concat(rt),
      yt = "load".concat(rt).concat(at),
      wt = "click".concat(rt).concat(at),
      At = "carousel",
      Et = "active",
      Tt = ".active",
      Ct = ".carousel-item",
      Ot = Tt + Ct,
      xt = (_xt = {}, _defineProperty(_xt, lt, ft), _defineProperty(_xt, ct, ut), _xt),
      kt = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      Lt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var St =
  /*#__PURE__*/
  function (_B3) {
    _inherits(St, _B3);

    function St(t, e) {
      var _this5;

      _classCallCheck(this, St);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(St).call(this, t, e)), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = R.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === At && _this5.cycle();
      return _this5;
    }

    _createClass(St, [{
      key: "next",
      value: function next() {
        this._slide(ht);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && l(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(dt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && o(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;

        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;

        this._config.ride && (this._isSliding ? P.one(this._element, mt, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, mt, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var n = t > i ? ht : dt;

        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(St.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;

        this._config.keyboard && P.on(this._element, gt, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, _t, function () {
          return _this9.pause();
        }), P.on(this._element, bt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = R.find(".carousel-item img", this._element)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _t5 = _step5.value;
            P.on(_t5, vt, function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(ut));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(ft));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new ot(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = xt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = R.findOne(Tt, this._indicatorsElement);
        e.classList.remove(Et), e.removeAttribute("aria-current");
        var i = R.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(Et), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();

        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;

        var i = this._getActive(),
            n = t === ht,
            s = e || v(this._getItems(), i, n, this._config.wrap);

        if (s === i) return;

        var o = this._getItemIndex(s),
            r = function r(e) {
          return P.trigger(_this11._element, e, {
            relatedTarget: s,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r(pt).defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), u(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(Et), i.classList.remove(Et, c, l), _this11._isSliding = !1, r(mt);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return R.findOne(Ot, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return R.find(Ct, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return m() ? t === ut ? dt : ht : t === ut ? ht : dt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return m() ? t === dt ? ut : ft : t === dt ? ft : ut;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = St.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return kt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Lt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return St;
  }(B);

  P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = R.getElementFromSelector(this);
    if (!e || !e.classList.contains(At)) return;
    t.preventDefault();
    var i = St.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), P.on(window, yt, function () {
    var t = R.find('[data-bs-ride="carousel"]');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = t[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _e5 = _step6.value;
        St.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }), g(St);
  var Dt = ".bs.collapse",
      $t = "show".concat(Dt),
      It = "shown".concat(Dt),
      Nt = "hide".concat(Dt),
      Pt = "hidden".concat(Dt),
      jt = "click".concat(Dt, ".data-api"),
      Mt = "show",
      Ft = "collapse",
      Ht = "collapsing",
      Wt = ":scope .".concat(Ft, " .").concat(Ft),
      Bt = '[data-bs-toggle="collapse"]',
      zt = {
    parent: null,
    toggle: !0
  },
      Rt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var qt =
  /*#__PURE__*/
  function (_B4) {
    _inherits(qt, _B4);

    function qt(t, e) {
      var _this12;

      _classCallCheck(this, qt);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(qt).call(this, t, e)), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = R.find(Bt);
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = i[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _t6 = _step7.value;

          var _e6 = R.getSelectorFromElement(_t6),
              _i13 = R.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i13.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(qt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return qt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (P.trigger(this._element, $t).defaultPrevented) return;
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = t[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        var e = this._getDimension();

        this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(Ht), _this13._element.classList.add(Ft, Mt), _this13._element.style[e] = "", P.trigger(_this13._element, It);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (P.trigger(this._element, Nt).defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this._triggerArray[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _t7 = _step9.value;

            var _e8 = R.getElementFromSelector(_t7);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(Ht), _this14._element.classList.add(Ft), P.trigger(_this14._element, Pt);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Mt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = a(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;

        var t = this._getFirstLevelChildren(Bt);

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _e9 = _step10.value;

            var _t8 = R.getElementFromSelector(_e9);

            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
              _iterator10["return"]();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = R.find(Wt, this._config.parent);
        return R.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = t[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _i14 = _step11.value;
              _i14.classList.toggle("collapsed", !e), _i14.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = qt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return zt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return qt;
  }(B);

  P.on(document, jt, Bt, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = R.getMultipleElementsFromSelector(this)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var _t9 = _step12.value;
        qt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
          _iterator12["return"]();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }), g(qt);
  var Vt = "top",
      Kt = "bottom",
      Qt = "right",
      Xt = "left",
      Yt = "auto",
      Ut = [Vt, Kt, Qt, Xt],
      Gt = "start",
      Jt = "end",
      Zt = "clippingParents",
      te = "viewport",
      ee = "popper",
      ie = "reference",
      ne = Ut.reduce(function (t, e) {
    return t.concat([e + "-" + Gt, e + "-" + Jt]);
  }, []),
      se = [].concat(Ut, [Yt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + Gt, e + "-" + Jt]);
  }, []),
      oe = "beforeRead",
      re = "read",
      ae = "afterRead",
      le = "beforeMain",
      ce = "main",
      he = "afterMain",
      de = "beforeWrite",
      ue = "write",
      fe = "afterWrite",
      pe = [oe, re, ae, le, ce, he, de, ue, fe];

  function me(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ge(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function _e(t) {
    return t instanceof ge(t).Element || t instanceof Element;
  }

  function be(t) {
    return t instanceof ge(t).HTMLElement || t instanceof HTMLElement;
  }

  function ve(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ge(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var ye = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        be(s) && me(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          be(n) && me(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function we(t) {
    return t.split("-")[0];
  }

  var Ae = Math.max,
      Ee = Math.min,
      Te = Math.round;

  function Ce() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }

  function Oe() {
    return !/^((?!chrome|android).)*safari/i.test(Ce());
  }

  function xe(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
        s = 1,
        o = 1;
    e && be(t) && (s = t.offsetWidth > 0 && Te(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Te(n.height) / t.offsetHeight || 1);
    var r = (_e(t) ? ge(t) : window).visualViewport,
        a = !Oe() && i,
        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        c = (n.top + (a && r ? r.offsetTop : 0)) / o,
        h = n.width / s,
        d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }

  function ke(t) {
    var e = xe(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Le(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ve(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Se(t) {
    return ge(t).getComputedStyle(t);
  }

  function De(t) {
    return ["table", "td", "th"].indexOf(me(t)) >= 0;
  }

  function $e(t) {
    return ((_e(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Ie(t) {
    return "html" === me(t) ? t : t.assignedSlot || t.parentNode || (ve(t) ? t.host : null) || $e(t);
  }

  function Ne(t) {
    return be(t) && "fixed" !== Se(t).position ? t.offsetParent : null;
  }

  function Pe(t) {
    for (var e = ge(t), i = Ne(t); i && De(i) && "static" === Se(i).position;) {
      i = Ne(i);
    }

    return i && ("html" === me(i) || "body" === me(i) && "static" === Se(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Ce());
      if (/Trident/i.test(Ce()) && be(t) && "fixed" === Se(t).position) return null;
      var i = Ie(t);

      for (ve(i) && (i = i.host); be(i) && ["html", "body"].indexOf(me(i)) < 0;) {
        var n = Se(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function je(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function Me(t, e, i) {
    return Ae(t, Ee(e, i));
  }

  function Fe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function He(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var We = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = we(i.placement),
          l = je(a),
          c = [Xt, Qt].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return Fe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : He(t, Ut));
        }(s.padding, i),
            d = ke(o),
            u = "y" === l ? Vt : Xt,
            f = "y" === l ? Kt : Qt,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Pe(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            A = Me(v, w, y),
            E = l;

        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Le(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Be(t) {
    return t.split("-")[1];
  }

  var ze = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Re(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = t.isFixed,
        u = r.x,
        f = void 0 === u ? 0 : u,
        p = r.y,
        m = void 0 === p ? 0 : p,
        g = "function" == typeof h ? h({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = g.x, m = g.y;

    var _ = r.hasOwnProperty("x"),
        b = r.hasOwnProperty("y"),
        v = Xt,
        y = Vt,
        w = window;

    if (c) {
      var A = Pe(i),
          E = "clientHeight",
          T = "clientWidth";
      A === ge(i) && "static" !== Se(A = $e(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === Vt || (s === Xt || s === Qt) && o === Jt) && (y = Kt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Xt && (s !== Vt && s !== Kt || o !== Jt) || (v = Qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }

    var C,
        O = Object.assign({
      position: a
    }, c && ze),
        x = !0 === h ? function (t, e) {
      var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
      return {
        x: Te(i * s) / s || 0,
        y: Te(n * s) / s || 0
      };
    }({
      x: f,
      y: m
    }, ge(i)) : {
      x: f,
      y: m
    };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }

  var qe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: we(e.placement),
        variation: Be(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s,
        isFixed: "fixed" === e.options.strategy
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Re(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Re(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var Ve = {
    passive: !0
  };
  var Ke = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = ge(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Ve);
      }), a && l.addEventListener("resize", i.update, Ve), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Ve);
        }), a && l.removeEventListener("resize", i.update, Ve);
      };
    },
    data: {}
  };
  var Qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Xe(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Qe[t];
    });
  }

  var Ye = {
    start: "end",
    end: "start"
  };

  function Ue(t) {
    return t.replace(/start|end/g, function (t) {
      return Ye[t];
    });
  }

  function Ge(t) {
    var e = ge(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Je(t) {
    return xe($e(t)).left + Ge(t).scrollLeft;
  }

  function Ze(t) {
    var e = Se(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function ti(t) {
    return ["html", "body", "#document"].indexOf(me(t)) >= 0 ? t.ownerDocument.body : be(t) && Ze(t) ? t : ti(Ie(t));
  }

  function ei(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = ti(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ge(n),
        r = s ? [o].concat(o.visualViewport || [], Ze(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(ei(Ie(r)));
  }

  function ii(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function ni(t, e, i) {
    return e === te ? ii(function (t, e) {
      var i = ge(t),
          n = $e(t),
          s = i.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          a = 0,
          l = 0;

      if (s) {
        o = s.width, r = s.height;
        var c = Oe();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }

      return {
        width: o,
        height: r,
        x: a + Je(t),
        y: l
      };
    }(t, i)) : _e(e) ? function (t, e) {
      var i = xe(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : ii(function (t) {
      var e,
          i = $e(t),
          n = Ge(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = Ae(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Ae(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Je(t),
          l = -n.scrollTop;
      return "rtl" === Se(s || i).direction && (a += Ae(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }($e(t)));
  }

  function si(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? we(s) : null,
        r = s ? Be(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case Vt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case Kt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case Qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case Xt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? je(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case Gt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case Jt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function oi(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.strategy,
        r = void 0 === o ? t.strategy : o,
        a = i.boundary,
        l = void 0 === a ? Zt : a,
        c = i.rootBoundary,
        h = void 0 === c ? te : c,
        d = i.elementContext,
        u = void 0 === d ? ee : d,
        f = i.altBoundary,
        p = void 0 !== f && f,
        m = i.padding,
        g = void 0 === m ? 0 : m,
        _ = Fe("number" != typeof g ? g : He(g, Ut)),
        b = u === ee ? ie : ee,
        v = t.rects.popper,
        y = t.elements[p ? b : u],
        w = function (t, e, i, n) {
      var s = "clippingParents" === e ? function (t) {
        var e = ei(Ie(t)),
            i = ["absolute", "fixed"].indexOf(Se(t).position) >= 0 && be(t) ? Pe(t) : t;
        return _e(i) ? e.filter(function (t) {
          return _e(t) && Le(t, i) && "body" !== me(t);
        }) : [];
      }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
        var s = ni(t, i, n);
        return e.top = Ae(s.top, e.top), e.right = Ee(s.right, e.right), e.bottom = Ee(s.bottom, e.bottom), e.left = Ae(s.left, e.left), e;
      }, ni(t, r, n));
      return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }(_e(y) ? y : y.contextElement || $e(t.elements.popper), l, h, r),
        A = xe(t.elements.reference),
        E = si({
      reference: A,
      element: v,
      placement: s
    }),
        T = ii(Object.assign({}, v, E)),
        C = u === ee ? T : A,
        O = {
      top: w.top - C.top + _.top,
      bottom: C.bottom - w.bottom + _.bottom,
      left: w.left - C.left + _.left,
      right: C.right - w.right + _.right
    },
        x = t.modifiersData.offset;

    if (u === ee && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [Qt, Kt].indexOf(t) >= 0 ? 1 : -1,
            i = [Vt, Kt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function ri(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? se : l,
        h = Be(n),
        d = h ? a ? ne : ne.filter(function (t) {
      return Be(t) === h;
    }) : Ut,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = oi(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[we(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var ai = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = we(g), b = l || (_ !== g && p ? function (t) {
          if (we(t) === Yt) return [];
          var e = Xe(t);
          return [Ue(t), e, Ue(e)];
        }(g) : [Xe(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(we(i) === Yt ? ri(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
              x = we(O),
              k = Be(O) === Gt,
              L = [Vt, Kt].indexOf(x) >= 0,
              S = L ? "width" : "height",
              D = oi(e, {
            placement: O,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              $ = L ? k ? Qt : Xt : k ? Kt : Vt;
          y[S] > w[S] && ($ = Xe($));
          var I = Xe($),
              N = [];

          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }

          A.set(O, N);
        }

        if (E) for (var P = function P(t) {
          var e = v.find(function (e) {
            var i = A.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function li(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ci(t) {
    return [Vt, Qt, Kt, Xt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var hi = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = oi(e, {
        elementContext: "reference"
      }),
          a = oi(e, {
        altBoundary: !0
      }),
          l = li(r, n),
          c = li(a, s, o),
          h = ci(l),
          d = ci(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      di = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = se.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = we(t),
              s = [Xt, Vt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [Xt, Qt].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      ui = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = si({
        reference: e.rects.reference,
        element: e.rects.popper,
        placement: e.placement
      });
    },
    data: {}
  },
      fi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = oi(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = we(e.placement),
          b = Be(e.placement),
          v = !b,
          y = je(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          O = "number" == typeof C ? {
        mainAxis: C,
        altAxis: C
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
        x: 0,
        y: 0
      };

      if (A) {
        if (o) {
          var L,
              S = "y" === y ? Vt : Xt,
              D = "y" === y ? Kt : Qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              j = f ? -T[$] / 2 : 0,
              M = b === Gt ? E[$] : T[$],
              F = b === Gt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? ke(H) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              z = B[S],
              R = B[D],
              q = Me(0, E[$], W[$]),
              V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && Pe(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Me(f ? Ee(N, I + V - Y - X) : N, I, f ? Ae(P, U) : P);
          A[y] = G, k[y] = G - I;
        }

        if (a) {
          var J,
              Z = "x" === y ? Vt : Xt,
              tt = "x" === y ? Kt : Qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [Vt, Xt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
            var n = Me(t, e, i);
            return n > i ? i : n;
          }(at, et, lt) : Me(f ? at : nt, et, f ? lt : st);
          A[w] = ct, k[w] = ct - et;
        }

        e.modifiersData[n] = k;
      }
    },
    requiresIfExists: ["offset"]
  };

  function pi(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = be(e),
        r = be(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = Te(e.width) / t.offsetWidth || 1,
          n = Te(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = $e(e),
        l = xe(t, r, i),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== me(e) || Ze(a)) && (c = (n = e) !== ge(n) && be(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Ge(n)), be(e) ? ((h = xe(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Je(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  function mi(t) {
    var e = new Map(),
        i = new Set(),
        n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }

  var gi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function _i() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function bi(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? gi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, gi, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: _e(t) ? ei(t) : t.contextElement ? ei(t.contextElement) : [],
            popper: ei(e)
          };

          var r,
              c,
              u = function (t) {
            var e = mi(t);
            return pe.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (_i(e, i)) {
              a.rects = {
                reference: pi(e, Pe(i), "fixed" === a.options.strategy),
                popper: ke(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!_i(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var vi = bi(),
      yi = bi({
    defaultModifiers: [Ke, ui, qe, ye]
  }),
      wi = bi({
    defaultModifiers: [Ke, ui, qe, ye, di, ai, fi, We, hi]
  });
  var Ai = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: he,
    afterRead: ae,
    afterWrite: fe,
    applyStyles: ye,
    arrow: We,
    auto: Yt,
    basePlacements: Ut,
    beforeMain: le,
    beforeRead: oe,
    beforeWrite: de,
    bottom: Kt,
    clippingParents: Zt,
    computeStyles: qe,
    createPopper: wi,
    createPopperBase: vi,
    createPopperLite: yi,
    detectOverflow: oi,
    end: Jt,
    eventListeners: Ke,
    flip: ai,
    hide: hi,
    left: Xt,
    main: ce,
    modifierPhases: pe,
    offset: di,
    placements: se,
    popper: ee,
    popperGenerator: bi,
    popperOffsets: ui,
    preventOverflow: fi,
    read: re,
    reference: ie,
    right: Qt,
    start: Gt,
    top: Vt,
    variationPlacements: ne,
    viewport: te,
    write: ue
  }, Symbol.toStringTag, {
    value: "Module"
  })),
      Ei = "dropdown",
      Ti = ".bs.dropdown",
      Ci = ".data-api",
      Oi = "ArrowUp",
      xi = "ArrowDown",
      ki = "hide".concat(Ti),
      Li = "hidden".concat(Ti),
      Si = "show".concat(Ti),
      Di = "shown".concat(Ti),
      $i = "click".concat(Ti).concat(Ci),
      Ii = "keydown".concat(Ti).concat(Ci),
      Ni = "keyup".concat(Ti).concat(Ci),
      Pi = "show",
      ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Mi = "".concat(ji, ".").concat(Pi),
      Fi = ".dropdown-menu",
      Hi = m() ? "top-end" : "top-start",
      Wi = m() ? "top-start" : "top-end",
      Bi = m() ? "bottom-end" : "bottom-start",
      zi = m() ? "bottom-start" : "bottom-end",
      Ri = m() ? "left-start" : "right-start",
      qi = m() ? "right-start" : "left-start",
      Vi = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      Ki = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var Qi =
  /*#__PURE__*/
  function (_B5) {
    _inherits(Qi, _B5);

    function Qi(t, e) {
      var _this15;

      _classCallCheck(this, Qi);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Qi).call(this, t, e)), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = R.next(_this15._element, Fi)[0] || R.prev(_this15._element, Fi)[0] || R.findOne(Fi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(Qi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (c(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!P.trigger(this._element, Si, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _ref4;

                var _t10 = _step13.value;
                P.on(_t10, "mouseover", d);
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                  _iterator13["return"]();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (c(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!P.trigger(this._element, ki, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _ref5;

                var _t11 = _step14.value;
                P.off(_t11, "mouseover", d);
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                  _iterator14["return"]();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(Qi.prototype), "_getConfig", this).call(this, t)).reference) && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Ei.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : r(this._config.reference) ? t = a(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = wi(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(Pi);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Ri;
        if (t.classList.contains("dropstart")) return qi;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? Wi : Hi : e ? zi : Bi;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, _(this._config.popperConfig, [void 0, t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return l(t);
        });
        i.length && v(i, e, t === xi, !i.includes(e)).focus();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Qi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = R.find(Mi);
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = e[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _i15 = _step15.value;

            var _e10 = Qi.getInstance(_i15);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _n6 = t.composedPath(),
                _s3 = _n6.includes(_e10._menu);

            if (_n6.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s3 || "outside" === _e10._config.autoClose && _s3) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
              _iterator15["return"]();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [Oi, xi].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t.delegateTarget.parentNode),
            o = Qi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }, {
      key: "Default",
      get: function get() {
        return Vi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ki;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ei;
      }
    }]);

    return Qi;
  }(B);

  P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function (t) {
    t.preventDefault(), Qi.getOrCreateInstance(this).toggle();
  }), g(Qi);
  var Xi = "backdrop",
      Yi = "show",
      Ui = "mousedown.bs.".concat(Xi),
      Gi = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      Ji = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var Zi =
  /*#__PURE__*/
  function (_W3) {
    _inherits(Zi, _W3);

    function Zi(t) {
      var _this17;

      _classCallCheck(this, Zi);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Zi).call(this)), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }

    _createClass(Zi, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void _(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && u(e), e.classList.add(Yi), this._emulateAnimation(function () {
          _(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;

        this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(function () {
          _this18.dispose(), _(t);
        })) : _(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");

          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }

        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = a(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), P.on(t, Ui, function () {
          _(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        b(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Gi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ji;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Xi;
      }
    }]);

    return Zi;
  }(W);

  var tn = ".bs.focustrap",
      en = "focusin".concat(tn),
      nn = "keydown.tab".concat(tn),
      sn = "backward",
      on = {
    autofocus: !0,
    trapElement: null
  },
      rn = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var an =
  /*#__PURE__*/
  function (_W4) {
    _inherits(an, _W4);

    function an(t) {
      var _this20;

      _classCallCheck(this, an);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(an).call(this)), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }

    _createClass(an, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, function (t) {
          return _this21._handleFocusin(t);
        }), P.on(document, nn, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, P.off(document, tn));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = R.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === sn ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? sn : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return on;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return an;
  }(W);

  var ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      cn = ".sticky-top",
      hn = "padding-right",
      dn = "margin-right";

  var un =
  /*#__PURE__*/
  function () {
    function un() {
      _classCallCheck(this, un);

      this._element = document.body;
    }

    _createClass(un, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, hn, function (e) {
          return e + t;
        }), this._setElementAttributes(ln, hn, function (e) {
          return e + t;
        }), this._setElementAttributes(cn, dn, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + n) return;

          _this22._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && H.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = H.getDataAttribute(t, e);
          null !== i ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (r(t)) e(t);else {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = R.find(t, this._element)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _i16 = _step16.value;
              e(_i16);
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                _iterator16["return"]();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }
        }
      }
    }]);

    return un;
  }();

  var fn = ".bs.modal",
      pn = "hide".concat(fn),
      mn = "hidePrevented".concat(fn),
      gn = "hidden".concat(fn),
      _n = "show".concat(fn),
      bn = "shown".concat(fn),
      vn = "resize".concat(fn),
      yn = "click.dismiss".concat(fn),
      wn = "mousedown.dismiss".concat(fn),
      An = "keydown.dismiss".concat(fn),
      En = "click".concat(fn, ".data-api"),
      Tn = "modal-open",
      Cn = "show",
      On = "modal-static",
      xn = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      kn = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var Ln =
  /*#__PURE__*/
  function (_B6) {
    _inherits(Ln, _B6);

    function Ln(t, e) {
      var _this23;

      _classCallCheck(this, Ln);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Ln).call(this, t, e)), _this23._dialog = R.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new un(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(Ln, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, _n, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Ln.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Zi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new an({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = R.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, P.trigger(_this26._element, bn, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        P.on(this._element, An, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), P.on(window, vn, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), P.on(this._element, wn, function (t) {
          P.one(_this27._element, yn, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Tn), _this28._resetAdjustments(), _this28._scrollBar.reset(), P.trigger(_this28._element, gn);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;

        if (P.trigger(this._element, mn).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(On) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(function () {
          _this29._element.classList.remove(On), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        if (i && !t) {
          var _t13 = m() ? "paddingLeft" : "paddingRight";

          this._element.style[_t13] = "".concat(e, "px");
        }

        if (!i && t) {
          var _t14 = m() ? "paddingRight" : "paddingLeft";

          this._element.style[_t14] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Ln.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return xn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return kn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return Ln;
  }(B);

  P.on(document, En, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = R.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, _n, function (t) {
      t.defaultPrevented || P.one(e, gn, function () {
        l(_this30) && _this30.focus();
      });
    });
    var i = R.findOne(".modal.show");
    i && Ln.getInstance(i).hide(), Ln.getOrCreateInstance(e).toggle(this);
  }), q(Ln), g(Ln);
  var Sn = ".bs.offcanvas",
      Dn = ".data-api",
      $n = "load".concat(Sn).concat(Dn),
      In = "show",
      Nn = "showing",
      Pn = "hiding",
      jn = ".offcanvas.show",
      Mn = "show".concat(Sn),
      Fn = "shown".concat(Sn),
      Hn = "hide".concat(Sn),
      Wn = "hidePrevented".concat(Sn),
      Bn = "hidden".concat(Sn),
      zn = "resize".concat(Sn),
      Rn = "click".concat(Sn).concat(Dn),
      qn = "keydown.dismiss".concat(Sn),
      Vn = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Kn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Qn =
  /*#__PURE__*/
  function (_B7) {
    _inherits(Qn, _B7);

    function Qn(t, e) {
      var _this31;

      _classCallCheck(this, Qn);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(Qn).call(this, t, e)), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(Qn, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || P.trigger(this._element, Mn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new un().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(In), _this32._element.classList.remove(Nn), P.trigger(_this32._element, Fn, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(In, Pn), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new un().reset(), P.trigger(_this33._element, Bn);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Qn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new Zi({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : P.trigger(_this34._element, Wn);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new an({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        P.on(this._element, qn, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : P.trigger(_this35._element, Wn));
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Qn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Vn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Kn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }]);

    return Qn;
  }(B);

  P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = R.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
    P.one(e, Bn, function () {
      l(_this36) && _this36.focus();
    });
    var i = R.findOne(jn);
    i && i !== e && Qn.getInstance(i).hide(), Qn.getOrCreateInstance(e).toggle(this);
  }), P.on(window, $n, function () {
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = R.find(jn)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var _t15 = _step17.value;
        Qn.getOrCreateInstance(_t15).show();
      }
    } catch (err) {
      _didIteratorError17 = true;
      _iteratorError17 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
          _iterator17["return"]();
        }
      } finally {
        if (_didIteratorError17) {
          throw _iteratorError17;
        }
      }
    }
  }), P.on(window, zn, function () {
    var _iteratorNormalCompletion18 = true;
    var _didIteratorError18 = false;
    var _iteratorError18 = undefined;

    try {
      for (var _iterator18 = R.find("[aria-modal][class*=show][class*=offcanvas-]")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
        var _t16 = _step18.value;
        "fixed" !== getComputedStyle(_t16).position && Qn.getOrCreateInstance(_t16).hide();
      }
    } catch (err) {
      _didIteratorError18 = true;
      _iteratorError18 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
          _iterator18["return"]();
        }
      } finally {
        if (_didIteratorError18) {
          throw _iteratorError18;
        }
      }
    }
  }), q(Qn), g(Qn);

  var Xn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Yn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Gn = function Gn(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !Yn.has(i) || Boolean(Un.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      Jn = {
    allowList: Xn,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      Zn = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      ts = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var es =
  /*#__PURE__*/
  function (_W5) {
    _inherits(es, _W5);

    function es(t) {
      var _this37;

      _classCallCheck(this, es);

      _this37 = _possibleConstructorReturn(this, _getPrototypeOf(es).call(this)), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(es, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;

        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread({}, this._config.content, {}, t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;

        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);

        for (var _i17 = 0, _Object$entries5 = Object.entries(this._config.content); _i17 < _Object$entries5.length; _i17++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i17], 2),
              _e11 = _Object$entries5$_i[0],
              _i18 = _Object$entries5$_i[1];

          this._setContent(t, _i18, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(es.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries6 = Object.entries(t); _i19 < _Object$entries6.length; _i19++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i19], 2),
              _e12 = _Object$entries6$_i[0],
              _i20 = _Object$entries6$_i[1];

          _get(_getPrototypeOf(es.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, ts);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = R.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? r(e) ? this._putElementInTemplate(a(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var n = new window.DOMParser().parseFromString(t, "text/html"),
              s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = s[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var _ref8;

              var _t17 = _step19.value;

              var _i21 = _t17.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i21)) {
                _t17.remove();

                continue;
              }

              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                  _s4 = [].concat(e["*"] || [], e[_i21] || []);

              var _iteratorNormalCompletion20 = true;
              var _didIteratorError20 = false;
              var _iteratorError20 = undefined;

              try {
                for (var _iterator20 = _n7[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                  var _e13 = _step20.value;
                  Gn(_e13, _s4) || _t17.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _didIteratorError20 = true;
                _iteratorError20 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                    _iterator20["return"]();
                  }
                } finally {
                  if (_didIteratorError20) {
                    throw _iteratorError20;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                _iterator19["return"]();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return _(t, [void 0, this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Jn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return es;
  }(W);

  var is = new Set(["sanitize", "allowList", "sanitizeFn"]),
      ns = "fade",
      ss = "show",
      os = ".tooltip-inner",
      rs = ".modal",
      as = "hide.bs.modal",
      ls = "hover",
      cs = "focus",
      hs = "click",
      ds = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      us = {
    allowList: Xn,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  },
      fs = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };

  var ps =
  /*#__PURE__*/
  function (_B8) {
    _inherits(ps, _B8);

    function ps(t, e) {
      var _this39;

      _classCallCheck(this, ps);

      if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      _this39 = _possibleConstructorReturn(this, _getPrototypeOf(ps).call(this, t, e)), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }

    _createClass(ps, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(ps.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = P.trigger(this._element, this.constructor.eventName("show")),
            e = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        this._disposePopper();

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var n = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(ss), "ontouchstart" in document.documentElement) {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _ref9;

              var _t18 = _step21.value;
              P.on(_t18, "mouseover", d);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                _iterator21["return"]();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }

        this._queueCallback(function () {
          P.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) {
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
              for (var _iterator22 = (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                var _ref10;

                var _t19 = _step22.value;
                P.off(_t19, "mouseover", d);
              }
            } catch (err) {
              _didIteratorError22 = true;
              _iteratorError22 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                  _iterator22["return"]();
                }
              } finally {
                if (_didIteratorError22) {
                  throw _iteratorError22;
                }
              }
            }
          }

          this._activeTrigger[hs] = !1, this._activeTrigger[cs] = !1, this._activeTrigger[ls] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), P.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();

        if (!e) return null;
        e.classList.remove(ns, ss), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ns), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new es(_objectSpread({}, this._config, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return _defineProperty({}, os, this._getTitle());
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ns);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(ss);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = _(this._config.placement, [this, t, this._element]),
            i = ds[e.toUpperCase()];

        return wi(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return _(t, [this._element, this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread({}, e, {}, _(this._config.popperConfig, [void 0, e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;

        var t = this._config.trigger.split(" ");

        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = t[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var _e14 = _step23.value;
            if ("click" === _e14) P.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              var e = _this44._initializeOnDelegatedTarget(t);

              e._activeTrigger[hs] = !(e._isShown() && e._activeTrigger[hs]), e.toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i22 = _e14 === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              P.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? cs : ls] = !0, e._enter();
              }), P.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? cs : ls] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, P.on(this._element.closest(rs), as, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");

        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;

        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;

        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = H.getDataAttributes(this._element);

        for (var _i23 = 0, _Object$keys2 = Object.keys(e); _i23 < _Object$keys2.length; _i23++) {
          var _t21 = _Object$keys2[_i23];
          is.has(_t21) && delete e[_t21];
        }

        return t = _objectSpread({}, e, {}, "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _i24 = 0, _Object$entries7 = Object.entries(this._config); _i24 < _Object$entries7.length; _i24++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i24], 2),
              _e15 = _Object$entries7$_i[0],
              _i25 = _Object$entries7$_i[1];

          this.constructor.Default[_e15] !== _i25 && (t[_e15] = _i25);
        }

        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ps.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return us;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return fs;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }]);

    return ps;
  }(B);

  g(ps);

  var ms = ".popover-header",
      gs = ".popover-body",
      _s = _objectSpread({}, ps.Default, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      bs = _objectSpread({}, ps.DefaultType, {
    content: "(null|string|element|function)"
  });

  var vs =
  /*#__PURE__*/
  function (_ps) {
    _inherits(vs, _ps);

    function vs() {
      _classCallCheck(this, vs);

      return _possibleConstructorReturn(this, _getPrototypeOf(vs).apply(this, arguments));
    }

    _createClass(vs, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        var _ref12;

        return _ref12 = {}, _defineProperty(_ref12, ms, this._getTitle()), _defineProperty(_ref12, gs, this._getContent()), _ref12;
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = vs.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return _s;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return bs;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }]);

    return vs;
  }(ps);

  g(vs);
  var ys = ".bs.scrollspy",
      ws = "activate".concat(ys),
      As = "click".concat(ys),
      Es = "load".concat(ys, ".data-api"),
      Ts = "active",
      Cs = "[href]",
      Os = ".nav-link",
      xs = "".concat(Os, ", .nav-item > ").concat(Os, ", .list-group-item"),
      ks = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1]
  },
      Ls = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  var Ss =
  /*#__PURE__*/
  function (_B9) {
    _inherits(Ss, _B9);

    function Ss(t, e) {
      var _this47;

      _classCallCheck(this, Ss);

      _this47 = _possibleConstructorReturn(this, _getPrototypeOf(Ss).call(this, t, e)), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(Ss, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = this._observableSections.values()[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _t22 = _step24.value;

            this._observer.observe(_t22);
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
              _iterator24["return"]();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Ss.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = a(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i26 = _this48._rootElement || window,
                _n8 = e.offsetTop - _this48._element.offsetTop;

            if (_i26.scrollTo) return void _i26.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i26.scrollTop = _n8;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;

        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;

        var e = function e(t) {
          return _this50._targetLinks.get("#".concat(t.target.id));
        },
            i = function i(t) {
          _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
        },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = n;
        var _iteratorNormalCompletion25 = true;
        var _didIteratorError25 = false;
        var _iteratorError25 = undefined;

        try {
          for (var _iterator25 = t[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
            var _o4 = _step25.value;

            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }

            var _t23 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (s && _t23) {
              if (i(_o4), !n) return;
            } else s || _t23 || i(_o4);
          }
        } catch (err) {
          _didIteratorError25 = true;
          _iteratorError25 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
              _iterator25["return"]();
            }
          } finally {
            if (_didIteratorError25) {
              throw _iteratorError25;
            }
          }
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = R.find(Cs, this._config.target);
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = t[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _e16 = _step26.value;
            if (!_e16.hash || c(_e16)) continue;

            var _t24 = R.findOne(decodeURI(_e16.hash), this._element);

            l(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Ts), this._activateParents(t), P.trigger(this._element, ws, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Ts);else {
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = R.parents(t, ".nav, .list-group")[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _e17 = _step27.value;
              var _iteratorNormalCompletion28 = true;
              var _didIteratorError28 = false;
              var _iteratorError28 = undefined;

              try {
                for (var _iterator28 = R.prev(_e17, xs)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                  var _t25 = _step28.value;

                  _t25.classList.add(Ts);
                }
              } catch (err) {
                _didIteratorError28 = true;
                _iteratorError28 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                    _iterator28["return"]();
                  }
                } finally {
                  if (_didIteratorError28) {
                    throw _iteratorError28;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                _iterator27["return"]();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(Ts);
        var e = R.find("".concat(Cs, ".").concat(Ts), t);
        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = e[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var _t26 = _step29.value;

            _t26.classList.remove(Ts);
          }
        } catch (err) {
          _didIteratorError29 = true;
          _iteratorError29 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
              _iterator29["return"]();
            }
          } finally {
            if (_didIteratorError29) {
              throw _iteratorError29;
            }
          }
        }
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ss.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ks;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Ss;
  }(B);

  P.on(window, Es, function () {
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = R.find('[data-bs-spy="scroll"]')[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _t27 = _step30.value;
        Ss.getOrCreateInstance(_t27);
      }
    } catch (err) {
      _didIteratorError30 = true;
      _iteratorError30 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
          _iterator30["return"]();
        }
      } finally {
        if (_didIteratorError30) {
          throw _iteratorError30;
        }
      }
    }
  }), g(Ss);
  var Ds = ".bs.tab",
      $s = "hide".concat(Ds),
      Is = "hidden".concat(Ds),
      Ns = "show".concat(Ds),
      Ps = "shown".concat(Ds),
      js = "click".concat(Ds),
      Ms = "keydown".concat(Ds),
      Fs = "load".concat(Ds),
      Hs = "ArrowLeft",
      Ws = "ArrowRight",
      Bs = "ArrowUp",
      zs = "ArrowDown",
      Rs = "Home",
      qs = "End",
      Vs = "active",
      Ks = "fade",
      Qs = "show",
      Xs = ".dropdown-toggle",
      Ys = ":not(".concat(Xs, ")"),
      Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Gs = ".nav-link".concat(Ys, ", .list-group-item").concat(Ys, ", [role=\"tab\"]").concat(Ys, ", ").concat(Us),
      Js = ".".concat(Vs, "[data-bs-toggle=\"tab\"], .").concat(Vs, "[data-bs-toggle=\"pill\"], .").concat(Vs, "[data-bs-toggle=\"list\"]");

  var Zs =
  /*#__PURE__*/
  function (_B10) {
    _inherits(Zs, _B10);

    function Zs(t) {
      var _this51;

      _classCallCheck(this, Zs);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(Zs).call(this, t)), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), P.on(_this51._element, Ms, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(Zs, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? P.trigger(e, $s, {
          relatedTarget: t
        }) : null;

        P.trigger(t, Ns, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(Vs), this._activate(R.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), P.trigger(t, Ps, {
            relatedTarget: e
          })) : t.classList.add(Qs);
        }, t, t.classList.contains(Ks)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(Vs), t.blur(), this._deactivate(R.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), P.trigger(t, Is, {
            relatedTarget: e
          })) : t.classList.remove(Qs);
        }, t, t.classList.contains(Ks)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![Hs, Ws, Bs, zs, Rs, qs].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();

        var e = this._getChildren().filter(function (t) {
          return !c(t);
        });

        var i;
        if ([Rs, qs].includes(t.key)) i = e[t.key === Rs ? 0 : e.length - 1];else {
          var _n9 = [Ws, zs].includes(t.key);

          i = v(e, t.target, _n9, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), Zs.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return R.find(Gs, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;

        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");

        var _iteratorNormalCompletion31 = true;
        var _didIteratorError31 = false;
        var _iteratorError31 = undefined;

        try {
          for (var _iterator31 = e[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
            var _t28 = _step31.value;

            this._setInitialAttributesOnChild(_t28);
          }
        } catch (err) {
          _didIteratorError31 = true;
          _iteratorError31 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
              _iterator31["return"]();
            }
          } finally {
            if (_didIteratorError31) {
              throw _iteratorError31;
            }
          }
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);

        var e = this._elemIsActive(t),
            i = this._getOuterElement(t);

        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = R.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var n = function n(t, _n10) {
          var s = R.findOne(t, i);
          s && s.classList.toggle(_n10, e);
        };

        n(Xs, Vs), n(".dropdown-menu", Qs), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Vs);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(Gs) ? t : R.findOne(Gs, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Zs.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return Zs;
  }(B);

  P.on(document, js, Us, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
  }), P.on(window, Fs, function () {
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = R.find(Js)[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var _t29 = _step32.value;
        Zs.getOrCreateInstance(_t29);
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
          _iterator32["return"]();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }
  }), g(Zs);
  var to = ".bs.toast",
      eo = "mouseover".concat(to),
      io = "mouseout".concat(to),
      no = "focusin".concat(to),
      so = "focusout".concat(to),
      oo = "hide".concat(to),
      ro = "hidden".concat(to),
      ao = "show".concat(to),
      lo = "shown".concat(to),
      co = "hide",
      ho = "show",
      uo = "showing",
      fo = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      po = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var mo =
  /*#__PURE__*/
  function (_B11) {
    _inherits(mo, _B11);

    function mo(t, e) {
      var _this55;

      _classCallCheck(this, mo);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(mo).call(this, t, e)), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(mo, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(function () {
          _this56._element.classList.remove(uo), P.trigger(_this56._element, lo), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(function () {
          _this57._element.classList.add(co), _this57._element.classList.remove(uo, ho), P.trigger(_this57._element, ro);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), _get(_getPrototypeOf(mo.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(ho);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;

        P.on(this._element, eo, function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, io, function (t) {
          return _this59._onInteraction(t, !1);
        }), P.on(this._element, no, function (t) {
          return _this59._onInteraction(t, !0);
        }), P.on(this._element, so, function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = mo.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return po;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return fo;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return mo;
  }(B);

  return q(mo), g(mo), {
    Alert: X,
    Button: U,
    Carousel: St,
    Collapse: qt,
    Dropdown: Qi,
    Modal: Ln,
    Offcanvas: Qn,
    Popover: vs,
    ScrollSpy: Ss,
    Tab: Zs,
    Toast: mo,
    Tooltip: ps
  };
});