import { createServer } from "http";
import { initCustomFormatter, ref, computed, defineComponent, h, Fragment, onMounted, watch, onUnmounted, provide, inject, watchEffect, Teleport, reactive, unref, normalizeClass, cloneVNode, nextTick, shallowRef, openBlock, createBlock, createCommentVNode, createElementBlock, normalizeStyle, KeepAlive, createVNode, renderList, onBeforeUnmount, renderSlot, withModifiers, createElementVNode, resolveComponent, withCtx, withDirectives, resolveDynamicComponent, normalizeProps, guardReactiveProps, vShow, createSSRApp } from "@vue/runtime-dom";
import { renderToString } from "@vue/server-renderer";
import se from "axios";
function initDev() {
  {
    initCustomFormatter();
  }
}
if (process.env.NODE_ENV !== "production") {
  initDev();
}
function Ms(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
    ;
  return e;
}
function Ns(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === false)
        break;
    }
    return t;
  };
}
var Vs = Ns();
const Us = Vs;
function Hs(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ws = typeof global == "object" && global && global.Object === Object && global;
const ui = Ws;
var zs = typeof self == "object" && self && self.Object === Object && self, Gs = ui || zs || Function("return this")();
const ge = Gs;
var Xs = ge.Symbol;
const Le = Xs;
var ci = Object.prototype, Ks = ci.hasOwnProperty, Ys = ci.toString, ft = Le ? Le.toStringTag : void 0;
function Js(e) {
  var t = Ks.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = true;
  } catch {
  }
  var i = Ys.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Qs = Object.prototype, Zs = Qs.toString;
function ea(e) {
  return Zs.call(e);
}
var ta = "[object Null]", ra = "[object Undefined]", $n = Le ? Le.toStringTag : void 0;
function Be(e) {
  return e == null ? e === void 0 ? ra : ta : $n && $n in Object(e) ? Js(e) : ea(e);
}
function ke(e) {
  return e != null && typeof e == "object";
}
var na = "[object Arguments]";
function En(e) {
  return ke(e) && Be(e) == na;
}
var di = Object.prototype, ia = di.hasOwnProperty, sa = di.propertyIsEnumerable, aa = En(function() {
  return arguments;
}()) ? En : function(e) {
  return ke(e) && ia.call(e, "callee") && !sa.call(e, "callee");
};
const fi = aa;
var oa = Array.isArray;
const R = oa;
function la() {
  return false;
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, xn = pi && typeof module == "object" && module && !module.nodeType && module, ua = xn && xn.exports === pi, Tn = ua ? ge.Buffer : void 0, ca = Tn ? Tn.isBuffer : void 0, da = ca || la;
const br = da;
var fa = 9007199254740991, pa = /^(?:0|[1-9]\d*)$/;
function jr(e, t) {
  var r = typeof e;
  return t = t == null ? fa : t, !!t && (r == "number" || r != "symbol" && pa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ha = 9007199254740991;
function Rr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ha;
}
var ma = "[object Arguments]", va = "[object Array]", ga = "[object Boolean]", ya = "[object Date]", ba = "[object Error]", wa = "[object Function]", Sa = "[object Map]", Oa = "[object Number]", $a = "[object Object]", Ea = "[object RegExp]", xa = "[object Set]", Ta = "[object String]", _a = "[object WeakMap]", Ia = "[object ArrayBuffer]", Aa = "[object DataView]", Pa = "[object Float32Array]", qa = "[object Float64Array]", Ca = "[object Int8Array]", Fa = "[object Int16Array]", La = "[object Int32Array]", ka = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", ja = "[object Uint32Array]", k = {};
k[Pa] = k[qa] = k[Ca] = k[Fa] = k[La] = k[ka] = k[Da] = k[Ba] = k[ja] = true;
k[ma] = k[va] = k[Ia] = k[ga] = k[Aa] = k[ya] = k[ba] = k[wa] = k[Sa] = k[Oa] = k[$a] = k[Ea] = k[xa] = k[Ta] = k[_a] = false;
function Ra(e) {
  return ke(e) && Rr(e.length) && !!k[Be(e)];
}
function Ma(e) {
  return function(t) {
    return e(t);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, yt = hi && typeof module == "object" && module && !module.nodeType && module, Na = yt && yt.exports === hi, ur = Na && ui.process, Va = function() {
  try {
    var e = yt && yt.require && yt.require("util").types;
    return e || ur && ur.binding && ur.binding("util");
  } catch {
  }
}();
const _n = Va;
var In = _n && _n.isTypedArray, Ua = In ? Ma(In) : Ra;
const mi = Ua;
var Ha = Object.prototype, Wa = Ha.hasOwnProperty;
function za(e, t) {
  var r = R(e), n = !r && fi(e), i = !r && !n && br(e), s = !r && !n && !i && mi(e), a = r || n || i || s, o = a ? Hs(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Wa.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || jr(u, l))) && o.push(u);
  return o;
}
var Ga = Object.prototype;
function Xa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ga;
  return e === r;
}
function Ka(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ya = Ka(Object.keys, Object);
const Ja = Ya;
var Qa = Object.prototype, Za = Qa.hasOwnProperty;
function eo(e) {
  if (!Xa(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    Za.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var to = "[object AsyncFunction]", ro = "[object Function]", no = "[object GeneratorFunction]", io = "[object Proxy]";
function vi(e) {
  if (!K(e))
    return false;
  var t = Be(e);
  return t == ro || t == no || t == to || t == io;
}
function Wt(e) {
  return e != null && Rr(e.length) && !vi(e);
}
function zt(e) {
  return Wt(e) ? za(e) : eo(e);
}
function Mr(e, t) {
  return e && Us(e, t, zt);
}
function so(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Wt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== false; )
      ;
    return r;
  };
}
var ao = so(Mr);
const Nr = ao;
function gi(e) {
  return e;
}
function yi(e) {
  return typeof e == "function" ? e : gi;
}
function oo(e, t) {
  var r = R(e) ? Ms : Nr;
  return r(e, yi(t));
}
function te(e, t) {
  return e && Mr(e, yi(t));
}
var lo = Array.prototype, uo = lo.reverse;
function co(e) {
  return e == null ? e : uo.call(e);
}
class bi {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    !this.events[t] || (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    !this.events[t] || this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Mt = ref(0), ae = ref(1), D = ref({}), le = ref(0), Gt = ref({}), rt = {}, $e = typeof window > "u";
function fo(e, t, r) {
  $e || window.addEventListener("popstate", po.bind(this)), Object.keys(t).length > 0 && Mt.value++, rt[ae.value] = new bi(ae.value), Wr(r), Xt(r.head), zr(e);
  const n = $e ? "" : location.href, i = Vr(
    n,
    r.head,
    e,
    t,
    {},
    ae.value,
    Mt.value,
    r.persistentLayout
  );
  wi(i);
}
function po(e) {
  !e.state || (D.value = e.state, le.value = 0, Gt.value = {}, Gr.value = {}, Ur.value = D.value.persistentLayoutKey, Xt(D.value.head), zr(D.value.html, D.value.rememberedState.scrollY));
}
function Vr(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return D.value = l, l;
}
function ho(e) {
  $e || window.history.pushState(e, "", e.url);
}
function mo(e) {
  const t = Vr(
    e,
    JSON.parse(JSON.stringify(D.value.head)),
    D.value.html,
    JSON.parse(JSON.stringify(D.value.dynamics)),
    { ...D.value.rememberedState },
    D.value.pageVisitId,
    D.value.dynamicVisitId,
    D.value.persistentLayoutKey
  );
  $e || window.history.replaceState(t, "", t.url);
}
function wi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const cr = ref(0), Ur = ref(null);
function vo(e, t) {
  var f;
  cr.value++;
  const r = e.request.responseURL;
  if (K((f = e.data) == null ? void 0 : f.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && le.value++;
  const n = Ur.value;
  if (Wr(e.data.splade), Xt(e.data.splade.head), r === D.value.url && (t = true), e.data.splade.modal)
    return Pi(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  le.value = 0, Gt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(D.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && te(s, (h2, d) => {
    s[d] += `<!-- ${cr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${cr.value} -->`)) : (o && Mt.value++, (!o || !a) && (ae.value++, rt[ae.value] = rt[ae.value] || new bi(ae.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !$e && t && e.data.splade.preserveScroll && (u = window.scrollY), zr(
    l ? D.value.html : i,
    u
  );
  const c = Vr(
    r,
    e.data.splade.head,
    l ? D.value.html : i,
    s,
    D.value.rememberedState ? { ...D.value.rememberedState } : {},
    ae.value,
    Mt.value,
    e.data.splade.persistentLayout
  );
  t ? wi(c) : ho(c);
}
function go() {
  le.value--, Xt(bo(le.value));
}
const Si = ref({}), Oi = (e) => Si.value[e], yo = (e) => Object.keys(Oi.value[e]).length > 0, $i = ref({}), bo = (e) => $i.value[e], Ei = ref({}), wo = (e) => Ei.value[e], nt = ref([]);
function So(e) {
  nt.value.push(e);
}
const Oo = computed(() => co(nt.value));
function $o(e) {
  nt.value[e].dismissed = true, nt.value[e].html = null;
}
const Hr = ref(null);
function Eo(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = false), typeof s > "u" && (s = false), typeof a > "u" && (a = false);
  const u = new Promise((c, f) => {
    o = c, l = f;
  });
  return Hr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function xo() {
  Hr.value = null;
}
const xi = ref({});
function Wr(e) {
  Ur.value = e.persistentLayout, xi.value = e.shared ? e.shared : {}, Ei.value[le.value] = e.flash ? e.flash : {}, $i.value[le.value] = e.head ? e.head : {}, oo(e.toasts ? e.toasts : [], (t) => {
    nt.value.push(t);
  }), Si.value[le.value] = e.errors ? e.errors : {};
}
const Ti = ref(() => {
}), _i = ref(() => {
}), Ii = ref(() => {
}), Ai = ref(() => {
});
function Xt(e) {
  Ti.value(e);
}
function zr(e, t) {
  _i.value(e, t);
}
function Pi(e, t) {
  Gt.value[le.value] = true, Ii.value(e, t);
}
function To(e) {
  return Gt.value[e];
}
function qi(e) {
  Ai.value(e);
}
const Ci = ref({});
function Fi(e, t, r) {
  Ci.value[e] = t, r && _o(e, t);
}
function _o(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Io(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ci.value[e];
}
function Ke(e, t, r, n, i) {
  if ($e || Fi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  vt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = se({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), vt("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    vo(a, i), vt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (vt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Wr(o), a.response.status != 422 && qi(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Li(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, true);
}
function Ao(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, false);
}
function Po(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
const Gr = ref({});
function qo(e) {
  const t = Gr.value[e];
  return t ? (le.value++, Pi(t.html, t.type), true) : false;
}
function Co(e, t, r) {
  Gr.value[e] = { html: t, type: r };
}
function Fo(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function Lo(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function ko(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Rehydrate": t }, false);
}
function Do() {
  return Li(D.value.url);
}
function Bo(e, t) {
  rt[ae.value].on(e, t);
}
function jo(e, t) {
  rt[ae.value].off(e, t);
}
function vt(e, t) {
  typeof t > "u" && (t = {}), rt[ae.value].emit(e, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: fo,
  replace: Li,
  visit: Ao,
  modal: Po,
  slideover: Fo,
  refresh: Do,
  request: Ke,
  lazy: Lo,
  rehydrate: ko,
  replaceUrlOfCurrentPage: mo,
  htmlForDynamicComponent(e) {
    return D.value.dynamics[e];
  },
  setOnHead(e) {
    Ti.value = e;
  },
  setOnHtml(e) {
    _i.value = e;
  },
  setOnModal(e) {
    Ii.value = e;
  },
  setOnServerError(e) {
    Ai.value = e;
  },
  onServerError: qi,
  hasValidationErrors: yo,
  validationErrors: Oi,
  sharedData: xi,
  flashData: wo,
  toasts: nt,
  toastsReversed: Oo,
  confirmModal: Hr,
  confirm: Eo,
  clearConfirmModal: xo,
  pushToast: So,
  dismissToast: $o,
  restore: Io,
  remember: Fi,
  popStack: go,
  currentStack: le,
  stackType: To,
  pageVisitId: computed(() => D.value.pageVisitId),
  dynamicVisitId: computed(() => D.value.dynamicVisitId),
  isSsr: $e,
  openPreloadedModal: qo,
  registerPreloadedModal: Co,
  on: Bo,
  off: jo,
  emit: vt
};
var Ro = "[object String]";
function oe(e) {
  return typeof e == "string" || !R(e) && ke(e) && Be(e) == Ro;
}
const de = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = e, r = ref(null);
    function n() {
      r.value = h({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      });
    }
    return watch(() => t.html, n, { immediate: true }), (i, s) => e.html ? (openBlock(), createBlock(unref(r), { key: 0 })) : createCommentVNode("", true);
  }
}, Mo = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = ref(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return onMounted(() => i()), (o, l) => (openBlock(), createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, No = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    provide("stack", 0);
    const r = ref(), n = ref([]), i = ref(null), s = ref(null), a = ref(true), o = inject("$spladeOptions") || {}, l = computed(() => v.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, v.popStack();
    }
    function f(d) {
      const m = document.createElement("meta");
      te(d, (p, g) => {
        m[g] = p;
      }), document.getElementsByTagName("head")[0].appendChild(m);
    }
    function h2(d) {
      var p;
      let m = "meta";
      te(d, (g, w) => {
        m = `${m}[${w}="${g}"]`;
      });
      try {
        (p = document.querySelector(m)) == null || p.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var m;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((p) => {
          h2(p);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((p) => {
          f(p);
        }), (m = document.querySelector('link[rel="canonical"]')) == null || m.remove(), d.canonical) {
          const p = document.createElement("link");
          p.rel = "canonical", p.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(p);
        }
      }
    }), v.setOnHtml((d, m) => {
      n.value = [], r.value = d, nextTick(() => {
        v.isSsr || window.scrollTo(0, m), o.transform_anchors && [...document.querySelectorAll("a")].forEach((p) => {
          p.href == "" || p.href.charAt(0) == "#" || p.__vnode.dynamicProps === null && (p.hasAttribute("download") || (p.onclick = function(g) {
            g.preventDefault(), v.visit(p.href);
          }));
        });
      });
    }), v.setOnModal(function(d, m) {
      n.value[v.currentStack.value] && (a.value = false), n.value[v.currentStack.value] = { html: d, type: m }, nextTick(() => {
        a.value = true;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), onMounted(() => {
      if (v.isSsr)
        return;
      const d = oe(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((m) => {
        delete d.dataset[m];
      });
    }), (d, m) => (openBlock(), createElementBlock("div", null, [
      unref(v).isSsr ? (openBlock(), createBlock(de, {
        key: `visit.${unref(v).pageVisitId.value}`,
        style: normalizeStyle(unref(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (openBlock(), createBlock(KeepAlive, {
        key: 0,
        max: unref(o).max_keep_alive
      }, [
        (openBlock(), createBlock(de, {
          key: `visit.${unref(v).pageVisitId.value}`,
          style: normalizeStyle(unref(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      createVNode(de, { html: e.components }, null, 8, ["html"]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v).currentStack.value, (p) => (openBlock(), createBlock(de, {
        key: `modal.${p}`,
        type: n.value[p].type,
        html: n.value[p].html,
        stack: p,
        "on-top-of-stack": unref(v).currentStack.value === p,
        animate: a.value,
        onClose: (g) => c(p)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (openBlock(), createBlock(Mo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : createCommentVNode("", true)
    ]));
  }
};
function xp(e) {
  return () => h(No, e);
}
var Vo = Object.prototype, Uo = Vo.hasOwnProperty;
function Ho(e, t) {
  return e != null && Uo.call(e, t);
}
var Wo = "[object Symbol]";
function Kt(e) {
  return typeof e == "symbol" || ke(e) && Be(e) == Wo;
}
var zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Go = /^\w*$/;
function Xr(e, t) {
  if (R(e))
    return false;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Kt(e) ? true : Go.test(e) || !zo.test(e) || t != null && e in Object(t);
}
var Xo = ge["__core-js_shared__"];
const dr = Xo;
var An = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ko(e) {
  return !!An && An in e;
}
var Yo = Function.prototype, Jo = Yo.toString;
function Ye(e) {
  if (e != null) {
    try {
      return Jo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qo = /[\\^$.*+?()[\]{}|]/g, Zo = /^\[object .+?Constructor\]$/, el = Function.prototype, tl = Object.prototype, rl = el.toString, nl = tl.hasOwnProperty, il = RegExp(
  "^" + rl.call(nl).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sl(e) {
  if (!K(e) || Ko(e))
    return false;
  var t = vi(e) ? il : Zo;
  return t.test(Ye(e));
}
function al(e, t) {
  return e == null ? void 0 : e[t];
}
function Je(e, t) {
  var r = al(e, t);
  return sl(r) ? r : void 0;
}
var ol = Je(Object, "create");
const wt = ol;
function ll() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function ul(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cl = "__lodash_hash_undefined__", dl = Object.prototype, fl = dl.hasOwnProperty;
function pl(e) {
  var t = this.__data__;
  if (wt) {
    var r = t[e];
    return r === cl ? void 0 : r;
  }
  return fl.call(t, e) ? t[e] : void 0;
}
var hl = Object.prototype, ml = hl.hasOwnProperty;
function vl(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : ml.call(t, e);
}
var gl = "__lodash_hash_undefined__";
function yl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wt && t === void 0 ? gl : t, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ge.prototype.clear = ll;
Ge.prototype.delete = ul;
Ge.prototype.get = pl;
Ge.prototype.has = vl;
Ge.prototype.set = yl;
function bl() {
  this.__data__ = [], this.size = 0;
}
function Kr(e, t) {
  return e === t || e !== e && t !== t;
}
function Yt(e, t) {
  for (var r = e.length; r--; )
    if (Kr(e[r][0], t))
      return r;
  return -1;
}
var wl = Array.prototype, Sl = wl.splice;
function Ol(e) {
  var t = this.__data__, r = Yt(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : Sl.call(t, r, 1), --this.size, true;
}
function $l(e) {
  var t = this.__data__, r = Yt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function El(e) {
  return Yt(this.__data__, e) > -1;
}
function xl(e, t) {
  var r = this.__data__, n = Yt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = bl;
xe.prototype.delete = Ol;
xe.prototype.get = $l;
xe.prototype.has = El;
xe.prototype.set = xl;
var Tl = Je(ge, "Map");
const St = Tl;
function _l() {
  this.size = 0, this.__data__ = {
    hash: new Ge(),
    map: new (St || xe)(),
    string: new Ge()
  };
}
function Il(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jt(e, t) {
  var r = e.__data__;
  return Il(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Al(e) {
  var t = Jt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pl(e) {
  return Jt(this, e).get(e);
}
function ql(e) {
  return Jt(this, e).has(e);
}
function Cl(e, t) {
  var r = Jt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = _l;
Te.prototype.delete = Al;
Te.prototype.get = Pl;
Te.prototype.has = ql;
Te.prototype.set = Cl;
var Fl = "Expected a function";
function Yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Yr.Cache || Te)(), r;
}
Yr.Cache = Te;
var Ll = 500;
function kl(e) {
  var t = Yr(e, function(n) {
    return r.size === Ll && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Dl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bl = /\\(\\)?/g, jl = kl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Dl, function(r, n, i, s) {
    t.push(i ? s.replace(Bl, "$1") : n || r);
  }), t;
});
const Rl = jl;
function ki(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ml = 1 / 0, Pn = Le ? Le.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return ki(e, Qt) + "";
  if (Kt(e))
    return qn ? qn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ml ? "-0" : t;
}
function Jr(e) {
  return e == null ? "" : Qt(e);
}
function Qr(e, t) {
  return R(e) ? e : Xr(e, t) ? [e] : Rl(Jr(e));
}
var Nl = 1 / 0;
function Et(e) {
  if (typeof e == "string" || Kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Nl ? "-0" : t;
}
function Di(e, t, r) {
  t = Qr(t, e);
  for (var n = -1, i = t.length, s = false; ++n < i; ) {
    var a = Et(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rr(i) && jr(a, i) && (R(e) || fi(e)));
}
function ee(e, t) {
  return e != null && Di(e, t, Ho);
}
const Vl = {
  props: {
    spinner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function he(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, he), n;
}
var Nt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nt || {}), Ce = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ce || {});
function J({ visible: e = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = ji(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return fr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return he(l, { [0]() {
      return null;
    }, [1]() {
      return fr({ ...i, props: { ...a, hidden: true, style: { display: "none" } } });
    } });
  }
  return fr(o);
}
function fr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Ri(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let f = false, h2 = [];
    for (let [d, m] of Object.entries(n))
      typeof m == "boolean" && (f = true), m === true && h2.push(d);
    f && (c["data-headlessui-state"] = h2.join(" "));
  }
  if (o === "template") {
    if (u = Bi(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h2] = u != null ? u : [];
      if (!Ul(f) || h2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, g, w) => w.indexOf(p) === g).sort((p, g) => p.localeCompare(g)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let d = ji((a = f.props) != null ? a : {}, l), m = cloneVNode(f, d);
      for (let p in d)
        p.startsWith("on") && (m.props || (m.props = {}), m.props[p] = d[p]);
      return m;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return h(o, Object.assign({}, l, c), { default: () => u });
}
function Bi(e) {
  return e.flatMap((t) => t.type === Fragment ? Bi(t.children) : [t]);
}
function ji(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Ri(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Ul(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Hl = 0;
function Wl() {
  return ++Hl;
}
function Qe() {
  return Wl();
}
var Mi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Mi || {});
function X(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ni = Symbol("Context");
var z = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(z || {});
function zl() {
  return Zr() !== null;
}
function Zr() {
  return inject(Ni, null);
}
function Gl(e) {
  provide(Ni, e);
}
class Xl {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let xt = new Xl();
function Tt(e) {
  if (xt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = X(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let wr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), Vi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vi || {}), Kl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Kl || {});
function Yl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(wr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ui = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ui || {});
function Jl(e, t = 0) {
  var r;
  return e === ((r = Tt(e)) == null ? void 0 : r.body) ? false : he(t, { [0]() {
    return e.matches(wr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(wr))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
function tt(e) {
  e == null || e.focus({ preventScroll: true });
}
let Ql = ["textarea", "input"].join(",");
function Zl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ql)) != null ? r : false;
}
function eu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Dt(e, t, { sorted: r = true, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? eu(e) : e : Yl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((m) => !i.includes(m))), n = n != null ? n : a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: true } : {}, f = 0, h2 = o.length, d;
  do {
    if (f >= h2 || f + h2 <= 0)
      return 0;
    let m = u + f;
    if (t & 16)
      m = (m + h2) % h2;
    else {
      if (m < 0)
        return 3;
      if (m >= h2)
        return 1;
    }
    d = o[m], d == null || d.focus(c), f += l;
  } while (d !== a.activeElement);
  return t & 6 && Zl(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function pr(e, t, r) {
  xt.isServer || watchEffect((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function tu(e, t, r = computed(() => true)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : X(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Jl(o, Ui.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = ref(null);
  pr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, true), pr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, true), pr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var Vt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Vt || {});
let Sr = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return J({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function ru() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function nu(e, t, r) {
  xt.isServer || watchEffect((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var gt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gt || {});
function iu() {
  let e = ref(0);
  return nu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Hi(e, t, r, n) {
  xt.isServer || watchEffect((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function su(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Wi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wi || {});
let pt = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ref(null);
  n({ el: i, $el: i });
  let s = computed(() => Tt(i));
  au({ ownerDocument: s }, computed(() => Boolean(e.features & 16)));
  let a = ou({ ownerDocument: s, container: i, initialFocus: computed(() => e.initialFocus) }, computed(() => Boolean(e.features & 2)));
  lu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, computed(() => Boolean(e.features & 8)));
  let o = iu();
  function l(h2) {
    let d = X(i);
    !d || ((m) => m())(() => {
      he(o.value, { [gt.Forwards]: () => {
        Dt(d, qe.First, { skipElements: [h2.relatedTarget] });
      }, [gt.Backwards]: () => {
        Dt(d, qe.Last, { skipElements: [h2.relatedTarget] });
      } });
    });
  }
  let u = ref(false);
  function c(h2) {
    h2.key === "Tab" && (u.value = true, requestAnimationFrame(() => {
      u.value = false;
    }));
  }
  function f(h2) {
    var d;
    let m = new Set((d = e.containers) == null ? void 0 : d.value);
    m.add(i);
    let p = h2.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (zi(m, p) || (u.value ? Dt(X(i), he(o.value, { [gt.Forwards]: () => qe.Next, [gt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: h2.target }) : h2.target instanceof HTMLElement && tt(h2.target)));
  }
  return () => {
    let h$1 = {}, d = { ref: i, onKeydown: c, onFocusout: f }, { features: m, initialFocus: p, containers: g, ...w } = e;
    return h(Fragment, [Boolean(m & 4) && h(Sr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: l, features: Vt.Focusable }), J({ ourProps: d, theirProps: { ...t, ...w }, slot: h$1, attrs: t, slots: r, name: "FocusTrap" }), Boolean(m & 4) && h(Sr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: l, features: Vt.Focusable })]);
  };
} }), { features: Wi });
function au({ ownerDocument: e }, t) {
  let r = ref(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    r.value && (tt(r.value), r.value = null);
  }
  onMounted(() => {
    watch(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: true });
  }), onUnmounted(i);
}
function ou({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = ref(null), s = ref(false);
  return onMounted(() => s.value = true), onUnmounted(() => s.value = false), onMounted(() => {
    watch([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = X(t);
      l && su(() => {
        var u, c;
        if (!s.value)
          return;
        let f = X(r), h2 = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === h2) {
            i.value = h2;
            return;
          }
        } else if (l.contains(h2)) {
          i.value = h2;
          return;
        }
        f ? tt(f) : Dt(l, qe.First | qe.NoScroll) === Vi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function lu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Hi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? zi(o, u) ? (n.value = u, tt(u)) : (a.preventDefault(), a.stopPropagation(), tt(l)) : tt(n.value);
  }, true);
}
function zi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return true;
  return false;
}
let hr = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function Cn(e, t = ref(true)) {
  watchEffect((r) => {
    var n;
    if (!t.value)
      return;
    let i = X(e);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = ht.get(i)) != null ? a : 1;
      if (o === 1 ? ht.delete(i) : ht.set(i, o - 1), o !== 1)
        return;
      let l = hr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, hr.delete(i));
    });
    let s = (n = ht.get(i)) != null ? n : 0;
    ht.set(i, s + 1), s === 0 && (hr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = true);
  });
}
let Gi = Symbol("ForcePortalRootContext");
function uu() {
  return inject(Gi, false);
}
let Or = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e, { slots: t, attrs: r }) {
  return provide(Gi, e.force), () => {
    let { force: n, ...i } = e;
    return J({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function cu(e) {
  let t = Tt(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Xi = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = ref(null), i = computed(() => Tt(n)), s = uu(), a = inject(Ki, null), o = ref(s === true || a == null ? cu(n.value) : a.resolveTarget());
  return watchEffect(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return h(Teleport, { to: o.value }, J({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ki = Symbol("PortalGroupContext"), du = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = reactive({ resolveTarget() {
    return e.target;
  } });
  return provide(Ki, n), () => {
    let { target: i, ...s } = e;
    return J({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Yi = Symbol("StackContext");
var $r = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))($r || {});
function fu() {
  return inject(Yi, () => {
  });
}
function pu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = fu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  onMounted(() => {
    watch(t, (a, o) => {
      a ? s(0, e, r) : o === true && s(1, e, r);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    t.value && s(1, e, r);
  }), provide(Yi, s);
}
let Ji = Symbol("DescriptionContext");
function hu() {
  let e = inject(Ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function mu({ slot: e = ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = ref([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return provide(Ji, { register: i, slot: e, name: t, props: r }), computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = hu();
  return onMounted(() => onUnmounted(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = ref({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [f, h2]) => Object.assign(c, { [f]: unref(h2) }), {}), id: o };
    return J({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function vu(e) {
  let t = shallowRef(e.getSnapshot());
  return onUnmounted(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function en() {
  let e = [], t = { addEventListener(r, n, i, s) {
    return r.addEventListener(n, i, s), t.add(() => r.removeEventListener(n, i, s));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, add(r) {
    e.push(r);
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function gu(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function yu() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function bu() {
  if (!ru())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, true), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: false }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function wu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Su(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let We = gu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: en(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Su(r) }, i = [bu(), yu(), wu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
We.subscribe(() => {
  let e = We.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && We.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && We.dispatch("TEARDOWN", r);
  }
});
function Ou(e, t, r) {
  let n = vu(We), i = computed(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : false;
  });
  return watch([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    We.dispatch("PUSH", s, r);
    let u = false;
    l(() => {
      u || (We.dispatch("POP", o != null ? o : s, r), u = true);
    });
  }, { immediate: true }), i;
}
var $u = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($u || {});
let Er = Symbol("DialogContext");
function _t(e) {
  let t = inject(Er, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, _t), r;
  }
  return t;
}
let Ct = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", tn = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: Ct }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Qe()}` } }, emits: { close: (e) => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = ref(false);
  onMounted(() => {
    a.value = true;
  });
  let o = ref(0), l = Zr(), u = computed(() => e.open === Ct && l !== null ? (l.value & z.Open) === z.Open : e.open), c = ref(/* @__PURE__ */ new Set()), f = ref(null), h$1 = ref(null), d = computed(() => Tt(f));
  if (i({ el: f, $el: f }), !(e.open !== Ct || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ct ? void 0 : e.open}`);
  let m = computed(() => a.value && u.value ? 0 : 1), p = computed(() => m.value === 0), g = computed(() => o.value > 1), w = inject(Er, null) !== null, x = computed(() => g.value ? "parent" : "leaf"), _ = computed(() => l !== null ? (l.value & z.Closing) === z.Closing : false), S = computed(() => w || _.value ? false : p.value), O = computed(() => {
    var $, E, F;
    return (F = Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("body > *")) != null ? E : []).find((B) => B.id === "headlessui-portal-root" ? false : B.contains(X(h$1)) && B instanceof HTMLElement)) != null ? F : null;
  });
  Cn(O, S);
  let b = computed(() => g.value ? true : p.value), T = computed(() => {
    var $, E, F;
    return (F = Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("[data-headlessui-portal]")) != null ? E : []).find((B) => B.contains(X(h$1)) && B instanceof HTMLElement)) != null ? F : null;
  });
  Cn(T, b), pu({ type: "Dialog", enabled: computed(() => m.value === 0), element: f, onUpdate: ($, E, F) => {
    if (E === "Dialog")
      return he($, { [$r.Add]() {
        c.value.add(F), o.value += 1;
      }, [$r.Remove]() {
        c.value.delete(F), o.value -= 1;
      } });
  } });
  let C = mu({ name: "DialogDescription", slot: computed(() => ({ open: u.value })) }), P = ref(null), q = { titleId: P, panelRef: ref(null), dialogState: m, setTitleId($) {
    P.value !== $ && (P.value = $);
  }, close() {
    t("close", false);
  } };
  provide(Er, q);
  function A() {
    var $, E, F;
    return [...Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? E : []).filter((B) => !(B === document.body || B === document.head || !(B instanceof HTMLElement) || B.contains(X(h$1)) || q.panelRef.value && B.contains(q.panelRef.value))), (F = q.panelRef.value) != null ? F : f.value];
  }
  let M = computed(() => !(!p.value || g.value));
  tu(() => A(), ($, E) => {
    q.close(), nextTick(() => E == null ? void 0 : E.focus());
  }, M);
  let L = computed(() => !(g.value || m.value !== 0));
  Hi((s = d.value) == null ? void 0 : s.defaultView, "keydown", ($) => {
    L.value && ($.defaultPrevented || $.key === Mi.Escape && ($.preventDefault(), $.stopPropagation(), q.close()));
  });
  let W = computed(() => !(_.value || m.value !== 0 || w));
  return Ou(d, W, ($) => {
    var E;
    return { containers: [...(E = $.containers) != null ? E : [], A] };
  }), watchEffect(($) => {
    if (m.value !== 0)
      return;
    let E = X(f);
    if (!E)
      return;
    let F = new ResizeObserver((B) => {
      for (let Q of B) {
        let Z = Q.target.getBoundingClientRect();
        Z.x === 0 && Z.y === 0 && Z.width === 0 && Z.height === 0 && q.close();
      }
    });
    F.observe(E), $(() => F.disconnect());
  }), () => {
    let { id: $, open: E, initialFocus: F, ...B } = e, Q = { ...r, ref: f, id: $, role: "dialog", "aria-modal": m.value === 0 ? true : void 0, "aria-labelledby": P.value, "aria-describedby": C.value }, Z = { open: m.value === 0 };
    return h(Or, { force: true }, () => [h(Xi, () => h(du, { target: f.value }, () => h(Or, { force: false }, () => h(pt, { initialFocus: F, containers: c, features: p.value ? he(x.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => J({ ourProps: Q, theirProps: B, slot: Z, attrs: r, slots: n, visible: m.value === 0, features: Nt.RenderStrategy | Nt.Static, name: "Dialog" }))))), h(Sr, { features: Vt.Hidden, ref: h$1 })]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return J({ ourProps: { id: s, "aria-hidden": true, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Qe()}` } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogBackdrop"), s = ref(null);
  return n({ el: s, $el: s }), onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": true };
    return h(Or, { force: true }, () => h(Xi, () => J({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let rn = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Qe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return J({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogTitle");
  return onMounted(() => {
    n.setTitleId(e.id), onUnmounted(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return J({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Eu(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function mr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ft(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var xr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(xr || {});
function xu(e, t) {
  let r = en();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Fn(e, t, r, n, i, s) {
  let a = en(), o = s !== void 0 ? Eu(s) : () => {
  };
  return Ft(e, ...i), mr(e, ...t, ...r), a.nextFrame(() => {
    Ft(e, ...r), mr(e, ...n), a.add(xu(e, (l) => (Ft(e, ...n, ...t), mr(e, ...i), o(l))));
  }), a.add(() => Ft(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ve(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let nn = Symbol("TransitionContext");
var Tu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Tu || {});
function _u() {
  return inject(nn, null) !== null;
}
function Iu() {
  let e = inject(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Au() {
  let e = inject(sn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let sn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Qi(e) {
  let t = ref([]), r = ref(false);
  onMounted(() => r.value = true), onUnmounted(() => r.value = false);
  function n(s, a = Ce.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (he(a, { [Ce.Unmount]() {
      t.value.splice(o, 1);
    }, [Ce.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Zt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, Ce.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Zi = Nt.RenderStrategy, ut = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = ref(0);
  function a() {
    s.value |= z.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~z.Opening, t("afterEnter");
  }
  function l() {
    s.value |= z.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~z.Closing, t("afterLeave");
  }
  if (!_u() && zl())
    return () => h(ct, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = ref(null), f = ref("visible"), h$1 = computed(() => e.unmount ? Ce.Unmount : Ce.Hidden);
  i({ el: c, $el: c });
  let { show: d, appear: m } = Iu(), { register: p, unregister: g } = Au(), w = { value: true }, x = Qe(), _ = { value: false }, S = Qi(() => {
    !_.value && f.value !== "hidden" && (f.value = "hidden", g(x), u());
  });
  onMounted(() => {
    let L = p(x);
    onUnmounted(L);
  }), watchEffect(() => {
    if (h$1.value === Ce.Hidden && x) {
      if (d && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      he(f.value, { hidden: () => g(x), visible: () => p(x) });
    }
  });
  let O = Ve(e.enter), b = Ve(e.enterFrom), T = Ve(e.enterTo), C = Ve(e.entered), P = Ve(e.leave), q = Ve(e.leaveFrom), A = Ve(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (f.value === "visible") {
        let L = X(c);
        if (L instanceof Comment && L.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function M(L) {
    let W = w.value && !m.value, $ = X(c);
    !$ || !($ instanceof HTMLElement) || W || (_.value = true, d.value && a(), d.value || l(), L(d.value ? Fn($, O, b, T, C, (E) => {
      _.value = false, E === xr.Finished && o();
    }) : Fn($, P, q, A, C, (E) => {
      _.value = false, E === xr.Finished && (Zt(S) || (f.value = "hidden", g(x), u()));
    })));
  }
  return onMounted(() => {
    watch([d], (L, W, $) => {
      M($), w.value = false;
    }, { immediate: true });
  }), provide(sn, S), Gl(computed(() => he(f.value, { visible: z.Open, hidden: z.Closed }) | s.value)), () => {
    let { appear: L, show: W, enter: $, enterFrom: E, enterTo: F, entered: B, leave: Q, leaveFrom: Z, leaveTo: At, ..._e } = e, Ze = { ref: c }, Ie = { ..._e, ...m && d && xt.isServer ? { class: normalizeClass([_e.class, ...O, ...b]) } : {} };
    return J({ theirProps: Ie, ourProps: Ze, slot: {}, slots: n, attrs: r, features: Zi, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), Pu = ut, ct = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Zr(), s = computed(() => e.show === null && i !== null ? (i.value & z.Open) === z.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = ref(s.value ? "visible" : "hidden"), o = Qi(() => {
    a.value = "hidden";
  }), l = ref(true), u = { show: s, appear: computed(() => e.appear || !l.value) };
  return onMounted(() => {
    watchEffect(() => {
      l.value = false, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), provide(sn, o), provide(nn, u), () => {
    let c = Ri(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return J({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [h(Pu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Zi, visible: a.value === "visible", name: "Transition" });
  };
} });
const qu = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultPasswordText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    },
    confirmPasswordRoute: {
      type: String,
      required: false,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false,
      password: "",
      passwordError: "",
      submitting: false
    };
  },
  computed: {
    hasConfirmModal: () => !!v.confirmModal.value,
    title: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.title ? v.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.text ? v.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmButton ? v.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.cancelButton ? v.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPassword ? v.confirmModal.value.confirmPassword : false;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPasswordOnce ? v.confirmModal.value.confirmPasswordOnce : false;
    },
    confirmDanger: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmDanger ? v.confirmModal.value.confirmDanger : false;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(true), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      v.confirmModal.value.rejectPromise(), this.setIsOpen(false), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = true;
      let e = this.password;
      this.passwordError = "", se.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = false;
      });
    },
    handleSuccess(e) {
      v.confirmModal.value.resolvePromise(e), this.setIsOpen(false), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await se.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), v.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), v.clearConfirmModal();
    },
    setPassword(e) {
      this.password = e;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: tn,
      DialogPanel: rn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
};
function es(e, t) {
  t = Qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Et(t[r++])];
  return r && r == n ? e : void 0;
}
function ye(e, t, r) {
  var n = e == null ? void 0 : es(e, t);
  return n === void 0 ? r : n;
}
var Cu = function() {
  try {
    var e = Je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ln = Cu;
function ts(e, t, r) {
  t == "__proto__" && Ln ? Ln(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
var Fu = Object.prototype, Lu = Fu.hasOwnProperty;
function ku(e, t, r) {
  var n = e[t];
  (!(Lu.call(e, t) && Kr(n, r)) || r === void 0 && !(t in e)) && ts(e, t, r);
}
function Du(e, t, r, n) {
  if (!K(e))
    return e;
  t = Qr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Et(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = K(c) ? c : jr(t[i + 1]) ? [] : {});
    }
    ku(o, l, u), o = o[l];
  }
  return e;
}
function Ot(e, t, r) {
  return e == null ? e : Du(e, t, r);
}
const Bu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: [Boolean, String],
      default: false,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: Object.assign({}, { ...this.default })
    };
  },
  beforeMount() {
    if (this.remember) {
      let e = v.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && v.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return ye(e.values, r);
        },
        set(t, r, n) {
          Ot(e.values, r, n);
        }
      })
    ) : null;
  }
}, ju = {
  props: {
    parsed: {
      type: Object,
      required: true
    },
    raw: {
      type: Object,
      required: true
    },
    remember: {
      type: Array,
      required: true
    },
    localStorage: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      stores: Object.assign({}, { ...this.parsed, ...this.raw })
    };
  },
  beforeMount() {
    this.remember.forEach((e) => {
      let t = v.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      v.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
    });
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.stores, {
        ownKeys() {
          return Object.keys(e.stores);
        },
        get(t, r) {
          return ye(e.stores, r);
        },
        set(t, r, n) {
          Ot(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Ru = function() {
  return ge.Date.now();
};
const vr = Ru;
var Mu = /\s/;
function Nu(e) {
  for (var t = e.length; t-- && Mu.test(e.charAt(t)); )
    ;
  return t;
}
var Vu = /^\s+/;
function Uu(e) {
  return e && e.slice(0, Nu(e) + 1).replace(Vu, "");
}
var kn = 0 / 0, Hu = /^[-+]0x[0-9a-f]+$/i, Wu = /^0b[01]+$/i, zu = /^0o[0-7]+$/i, Gu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Kt(e))
    return kn;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Uu(e);
  var r = Wu.test(e);
  return r || zu.test(e) ? Gu(e.slice(2), r ? 2 : 8) : Hu.test(e) ? kn : +e;
}
var Xu = "Expected a function", Ku = Math.max, Yu = Math.min;
function er(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = false, f = false, h2 = true;
  if (typeof e != "function")
    throw new TypeError(Xu);
  t = Tr(t) || 0, K(r) && (c = !!r.leading, f = "maxWait" in r, s = f ? Ku(Tr(r.maxWait) || 0, t) : s, h2 = "trailing" in r ? !!r.trailing : h2);
  function d(b) {
    var T = n, C = i;
    return n = i = void 0, u = b, a = e.apply(C, T), a;
  }
  function m(b) {
    return u = b, o = setTimeout(w, t), c ? d(b) : a;
  }
  function p(b) {
    var T = b - l, C = b - u, P = t - T;
    return f ? Yu(P, s - C) : P;
  }
  function g(b) {
    var T = b - l, C = b - u;
    return l === void 0 || T >= t || T < 0 || f && C >= s;
  }
  function w() {
    var b = vr();
    if (g(b))
      return x(b);
    o = setTimeout(w, p(b));
  }
  function x(b) {
    return o = void 0, h2 && n ? d(b) : (n = i = void 0, a);
  }
  function _() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : x(vr());
  }
  function O() {
    var b = vr(), T = g(b);
    if (n = arguments, i = this, l = b, T) {
      if (o === void 0)
        return m(l);
      if (f)
        return clearTimeout(o), o = setTimeout(w, t), d(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), a;
  }
  return O.cancel = _, O.flush = S, O;
}
const Ju = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: false,
      default: false
    },
    watchDebounce: {
      type: Number,
      required: false,
      default: 0
    },
    watchValue: {
      validator() {
        return true;
      },
      required: false,
      default: null
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: true,
      handler() {
        this.processing = true, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = er(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e = {};
      this.acceptHeader && (e.Accept = this.acceptHeader);
      const t = {
        url: this.url,
        method: this.method,
        headers: { ...e, ...this.headers }
      };
      Object.keys(this.request).length > 0 && (t.data = this.request), se(t).then((r) => {
        this.response = r.data, this.processing = false, this.$emit("success", r.data);
      }).catch(() => {
        this.processing = false, this.$emit("error");
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, Qu = {
  data() {
    return {
      isActivated: true
    };
  },
  deactivated() {
    this.isActivated = false;
  },
  activated() {
    this.isActivated = true;
  },
  render() {
    return this.$slots.default({
      Dialog: tn,
      DialogPanel: rn,
      isActivated: this.isActivated
    });
  }
}, rs = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = ref(null), i = ref(null);
    return onMounted(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (openBlock(), createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      renderSlot(s.$slots, "default")
    ], 512));
  }
};
function ie(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xe(e) {
  var t = ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function re(e) {
  var t = ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function an(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ze = Math.max, Ut = Math.min, it = Math.round;
function _r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(_r());
}
function st(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && re(e) && (i = e.offsetWidth > 0 && it(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && it(n.height) / e.offsetHeight || 1);
  var a = Xe(e) ? ie(e) : window, o = a.visualViewport, l = !ns() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, f = n.width / i, h2 = n.height / s;
  return {
    width: f,
    height: h2,
    top: c,
    right: u + f,
    bottom: c + h2,
    left: u,
    x: u,
    y: c
  };
}
function on(e) {
  var t = ie(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Zu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ec(e) {
  return e === ie(e) || !re(e) ? on(e) : Zu(e);
}
function me(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function je(e) {
  return ((Xe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ln(e) {
  return st(je(e)).left + on(e).scrollLeft;
}
function ce(e) {
  return ie(e).getComputedStyle(e);
}
function un(e) {
  var t = ce(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function tc(e) {
  var t = e.getBoundingClientRect(), r = it(t.width) / e.offsetWidth || 1, n = it(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function rc(e, t, r) {
  r === void 0 && (r = false);
  var n = re(t), i = re(t) && tc(t), s = je(t), a = st(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((me(t) !== "body" || un(s)) && (o = ec(t)), re(t) ? (l = st(t, true), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ln(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function is(e) {
  var t = st(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function tr(e) {
  return me(e) === "html" ? e : e.assignedSlot || e.parentNode || (an(e) ? e.host : null) || je(e);
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(me(e)) >= 0 ? e.ownerDocument.body : re(e) && un(e) ? e : ss(tr(e));
}
function bt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ie(n), a = i ? [s].concat(s.visualViewport || [], un(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(bt(tr(a)));
}
function nc(e) {
  return ["table", "td", "th"].indexOf(me(e)) >= 0;
}
function Dn(e) {
  return !re(e) || ce(e).position === "fixed" ? null : e.offsetParent;
}
function ic(e) {
  var t = /firefox/i.test(_r()), r = /Trident/i.test(_r());
  if (r && re(e)) {
    var n = ce(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (an(i) && (i = i.host); re(i) && ["html", "body"].indexOf(me(i)) < 0; ) {
    var s = ce(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = ie(e), r = Dn(e); r && nc(r) && ce(r).position === "static"; )
    r = Dn(r);
  return r && (me(r) === "html" || me(r) === "body" && ce(r).position === "static") ? t : r || ic(e) || t;
}
var ue = "top", ve = "bottom", De = "right", be = "left", nr = "auto", ir = [ue, ve, De, be], at = "start", $t = "end", sc = "clippingParents", as = "viewport", mt = "popper", ac = "reference", Bn = /* @__PURE__ */ ir.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + $t]);
}, []), oc = /* @__PURE__ */ [].concat(ir, [nr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + $t]);
}, []), lc = "beforeRead", uc = "read", cc = "afterRead", dc = "beforeMain", fc = "main", pc = "afterMain", hc = "beforeWrite", mc = "write", vc = "afterWrite", Ir = [lc, uc, cc, dc, fc, pc, hc, mc, vc];
function gc(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function yc(e) {
  var t = gc(e);
  return Ir.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function bc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Pe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Ue = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', wc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', jn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Sc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), jn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Pe(Ue, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Pe(Ue, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ir.indexOf(t.phase) < 0 && console.error(Pe(Ue, t.name, '"phase"', "either " + Ir.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Pe(Ue, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Pe(Ue, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Pe(Ue, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Pe(Ue, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + jn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Pe(wc, String(t.name), n, n));
      });
    });
  });
}
function Oc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), true;
  });
}
function we(e) {
  return e.split("-")[0];
}
function $c(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function Ec(e, t) {
  var r = ie(e), n = je(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ns();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + ln(e),
    y: l
  };
}
function xc(e) {
  var t, r = je(e), n = on(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = ze(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ze(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + ln(e), l = -n.scrollTop;
  return ce(i || r).direction === "rtl" && (o += ze(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Tc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (r && an(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Ar(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _c(e, t) {
  var r = st(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Rn(e, t, r) {
  return t === as ? Ar(Ec(e, r)) : Xe(t) ? _c(t, r) : Ar(xc(je(e)));
}
function Ic(e) {
  var t = bt(tr(e)), r = ["absolute", "fixed"].indexOf(ce(e).position) >= 0, n = r && re(e) ? rr(e) : e;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Tc(i, n) && me(i) !== "body";
  }) : [];
}
function Ac(e, t, r, n) {
  var i = t === "clippingParents" ? Ic(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Rn(e, u, n);
    return l.top = ze(c.top, l.top), l.right = Ut(c.right, l.right), l.bottom = Ut(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, Rn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function ot(e) {
  return e.split("-")[1];
}
function os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ls(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? we(n) : null, s = n ? ot(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ue:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ve:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case De:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case be:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? os(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case at:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case $t:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function us() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pc(e) {
  return Object.assign({}, us(), e);
}
function qc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function cn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? sc : o, u = r.rootBoundary, c = u === void 0 ? as : u, f = r.elementContext, h2 = f === void 0 ? mt : f, d = r.altBoundary, m = d === void 0 ? false : d, p = r.padding, g = p === void 0 ? 0 : p, w = Pc(typeof g != "number" ? g : qc(g, ir)), x = h2 === mt ? ac : mt, _ = e.rects.popper, S = e.elements[m ? x : h2], O = Ac(Xe(S) ? S : S.contextElement || je(e.elements.popper), l, c, a), b = st(e.elements.reference), T = ls({
    reference: b,
    element: _,
    strategy: "absolute",
    placement: i
  }), C = Ar(Object.assign({}, _, T)), P = h2 === mt ? C : b, q = {
    top: O.top - P.top + w.top,
    bottom: P.bottom - O.bottom + w.bottom,
    left: O.left - P.left + w.left,
    right: P.right - O.right + w.right
  }, A = e.modifiersData.offset;
  if (h2 === mt && A) {
    var M = A[i];
    Object.keys(q).forEach(function(L) {
      var W = [De, ve].indexOf(L) >= 0 ? 1 : -1, $ = [ue, ve].indexOf(L) >= 0 ? "y" : "x";
      q[L] += M[$] * W;
    });
  }
  return q;
}
var Mn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Nn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Fc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Nn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], h2 = false, d = {
      state: c,
      setOptions: function(w) {
        var x = typeof w == "function" ? w(c.options) : w;
        p(), c.options = Object.assign({}, s, c.options, x), c.scrollParents = {
          reference: Xe(o) ? bt(o) : o.contextElement ? bt(o.contextElement) : [],
          popper: bt(l)
        };
        var _ = yc($c([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = _.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Oc([].concat(_, c.options.modifiers), function(A) {
            var M = A.name;
            return M;
          });
          if (Sc(S), we(c.options.placement) === nr) {
            var O = c.orderedModifiers.find(function(A) {
              var M = A.name;
              return M === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ce(l), T = b.marginTop, C = b.marginRight, P = b.marginBottom, q = b.marginLeft;
          [T, C, P, q].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), d.update();
      },
      forceUpdate: function() {
        if (!h2) {
          var w = c.elements, x = w.reference, _ = w.popper;
          if (!Vn(x, _)) {
            process.env.NODE_ENV !== "production" && console.error(Mn);
            return;
          }
          c.rects = {
            reference: rc(x, rr(_), c.options.strategy === "fixed"),
            popper: is(_)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
            return c.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var S = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Cc);
              break;
            }
            if (c.reset === true) {
              c.reset = false, O = -1;
              continue;
            }
            var b = c.orderedModifiers[O], T = b.fn, C = b.options, P = C === void 0 ? {} : C, q = b.name;
            typeof T == "function" && (c = T({
              state: c,
              options: P,
              name: q,
              instance: d
            }) || c);
          }
        }
      },
      update: bc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        p(), h2 = true;
      }
    };
    if (!Vn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Mn), d;
    d.setOptions(u).then(function(g) {
      !h2 && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function m() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, x = g.options, _ = x === void 0 ? {} : x, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: c,
            name: w,
            instance: d,
            options: _
          }), b = function() {
          };
          f.push(O || b);
        }
      });
    }
    function p() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return d;
  };
}
var Lt = {
  passive: true
};
function Lc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? true : i, a = n.resize, o = a === void 0 ? true : a, l = ie(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Lt);
  }), o && l.addEventListener("resize", r.update, Lt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Lt);
    }), o && l.removeEventListener("resize", r.update, Lt);
  };
}
const kc = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Lc,
  data: {}
};
function Dc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Bc = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Dc,
  data: {}
};
var jc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: it(t * i) / i || 0,
    y: it(r * i) / i || 0
  };
}
function Un(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, h2 = a.x, d = h2 === void 0 ? 0 : h2, m = a.y, p = m === void 0 ? 0 : m, g = typeof c == "function" ? c({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  d = g.x, p = g.y;
  var w = a.hasOwnProperty("x"), x = a.hasOwnProperty("y"), _ = be, S = ue, O = window;
  if (u) {
    var b = rr(r), T = "clientHeight", C = "clientWidth";
    if (b === ie(r) && (b = je(r), ce(b).position !== "static" && o === "absolute" && (T = "scrollHeight", C = "scrollWidth")), b = b, i === ue || (i === be || i === De) && s === $t) {
      S = ve;
      var P = f && b === O && O.visualViewport ? O.visualViewport.height : b[T];
      p -= P - n.height, p *= l ? 1 : -1;
    }
    if (i === be || (i === ue || i === ve) && s === $t) {
      _ = De;
      var q = f && b === O && O.visualViewport ? O.visualViewport.width : b[C];
      d -= q - n.width, d *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: o
  }, u && jc), M = c === true ? Rc({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  if (d = M.x, p = M.y, l) {
    var L;
    return Object.assign({}, A, (L = {}, L[S] = x ? "0" : "", L[_] = w ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, A, (t = {}, t[S] = x ? p + "px" : "", t[_] = w ? d + "px" : "", t.transform = "", t));
}
function Mc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, s = r.adaptive, a = s === void 0 ? true : s, o = r.roundOffsets, l = o === void 0 ? true : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ce(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: we(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Un(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Un(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Nc = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Mc,
  data: {}
};
function Vc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !me(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === false ? s.removeAttribute(a) : s.setAttribute(a, o === true ? "" : o);
    }));
  });
}
function Uc(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !re(i) || !me(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Hc = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Vc,
  effect: Uc,
  requires: ["computeStyles"]
};
var Wc = [kc, Bc, Nc, Hc], zc = /* @__PURE__ */ Fc({
  defaultModifiers: Wc
});
function Gc(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e, t, r) {
  return ze(e, Ut(t, r));
}
function Xc(e, t, r) {
  var n = Bt(e, t, r);
  return n > r ? r : n;
}
function Kc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? false : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, h2 = r.tether, d = h2 === void 0 ? true : h2, m = r.tetherOffset, p = m === void 0 ? 0 : m, g = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), w = we(t.placement), x = ot(t.placement), _ = !x, S = os(w), O = Gc(S), b = t.modifiersData.popperOffsets, T = t.rects.reference, C = t.rects.popper, P = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, q = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var L, W = S === "y" ? ue : be, $ = S === "y" ? ve : De, E = S === "y" ? "height" : "width", F = b[S], B = F + g[W], Q = F - g[$], Z = d ? -C[E] / 2 : 0, At = x === at ? T[E] : C[E], _e = x === at ? -C[E] : -T[E], Ze = t.elements.arrow, Ie = d && Ze ? is(Ze) : {
        width: 0,
        height: 0
      }, Ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : us(), dt = Ae[W], Pt = Ae[$], Me = Bt(0, T[E], Ie[E]), ar = _ ? T[E] / 2 - Z - Me - dt - q.mainAxis : At - Me - dt - q.mainAxis, Ss = _ ? -T[E] / 2 + Z + Me + Pt + q.mainAxis : _e + Me + Pt + q.mainAxis, or = t.elements.arrow && rr(t.elements.arrow), Os = or ? S === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, hn = (L = A == null ? void 0 : A[S]) != null ? L : 0, $s = F + ar - hn - Os, Es = F + Ss - hn, mn = Bt(d ? Ut(B, $s) : B, F, d ? ze(Q, Es) : Q);
      b[S] = mn, M[S] = mn - F;
    }
    if (o) {
      var vn, xs = S === "x" ? ue : be, Ts = S === "x" ? ve : De, Ne = b[O], qt = O === "y" ? "height" : "width", gn = Ne + g[xs], yn = Ne - g[Ts], lr = [ue, be].indexOf(w) !== -1, bn = (vn = A == null ? void 0 : A[O]) != null ? vn : 0, wn = lr ? gn : Ne - T[qt] - C[qt] - bn + q.altAxis, Sn = lr ? Ne + T[qt] + C[qt] - bn - q.altAxis : yn, On = d && lr ? Xc(wn, Ne, Sn) : Bt(d ? wn : gn, Ne, d ? Sn : yn);
      b[O] = On, M[O] = On - Ne;
    }
    t.modifiersData[n] = M;
  }
}
const Yc = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Kc,
  requiresIfExists: ["offset"]
};
var Jc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jc[t];
  });
}
var Qc = {
  start: "end",
  end: "start"
};
function Hn(e) {
  return e.replace(/start|end/g, function(t) {
    return Qc[t];
  });
}
function Zc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? oc : l, c = ot(n), f = c ? o ? Bn : Bn.filter(function(m) {
    return ot(m) === c;
  }) : ir, h2 = f.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  h2.length === 0 && (h2 = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = h2.reduce(function(m, p) {
    return m[p] = cn(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[we(p)], m;
  }, {});
  return Object.keys(d).sort(function(m, p) {
    return d[m] - d[p];
  });
}
function ed(e) {
  if (we(e) === nr)
    return [];
  var t = jt(e);
  return [Hn(e), t, Hn(t)];
}
function td(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? true : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, h2 = r.altBoundary, d = r.flipVariations, m = d === void 0 ? true : d, p = r.allowedAutoPlacements, g = t.options.placement, w = we(g), x = w === g, _ = l || (x || !m ? [jt(g)] : ed(g)), S = [g].concat(_).reduce(function(Ie, Ae) {
      return Ie.concat(we(Ae) === nr ? Zc(t, {
        placement: Ae,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: p
      }) : Ae);
    }, []), O = t.rects.reference, b = t.rects.popper, T = /* @__PURE__ */ new Map(), C = true, P = S[0], q = 0; q < S.length; q++) {
      var A = S[q], M = we(A), L = ot(A) === at, W = [ue, ve].indexOf(M) >= 0, $ = W ? "width" : "height", E = cn(t, {
        placement: A,
        boundary: c,
        rootBoundary: f,
        altBoundary: h2,
        padding: u
      }), F = W ? L ? De : be : L ? ve : ue;
      O[$] > b[$] && (F = jt(F));
      var B = jt(F), Q = [];
      if (s && Q.push(E[M] <= 0), o && Q.push(E[F] <= 0, E[B] <= 0), Q.every(function(Ie) {
        return Ie;
      })) {
        P = A, C = false;
        break;
      }
      T.set(A, Q);
    }
    if (C)
      for (var Z = m ? 3 : 1, At = function(Ae) {
        var dt = S.find(function(Pt) {
          var Me = T.get(Pt);
          if (Me)
            return Me.slice(0, Ae).every(function(ar) {
              return ar;
            });
        });
        if (dt)
          return P = dt, "break";
      }, _e = Z; _e > 0; _e--) {
        var Ze = At(_e);
        if (Ze === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = true, t.placement = P, t.reset = true);
  }
}
const rd = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: td,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, Re = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, nd = {
  components: {
    OnClickOutside: rs
  },
  props: {
    spladeId: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    strategy: {
      type: String,
      default: "absolute",
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    teleport: {
      type: Boolean,
      default: false,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await nextTick();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = zc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [rd, Yc],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, id = { ref: "tooltip" };
function sd(e, t, r, n, i, s) {
  const a = resolveComponent("OnClickOutside");
  return openBlock(), createBlock(a, {
    style: normalizeStyle(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "button",
        style: normalizeStyle(s.buttonStyle)
      }, [
        renderSlot(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      createElementVNode("div", id, [
        renderSlot(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ad = /* @__PURE__ */ Re(nd, [["render", sd]]), od = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = inject("$splade") || {}, r = inject("$spladeOptions") || {};
    return (n, i) => unref(t).isSsr ? (openBlock(), createBlock(de, {
      key: e.keepAliveKey,
      html: unref(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (openBlock(), createBlock(KeepAlive, {
      key: 0,
      max: unref(r).max_keep_alive
    }, [
      (openBlock(), createBlock(de, {
        key: e.keepAliveKey,
        html: unref(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function cs(e) {
  return e && e.length ? e[0] : void 0;
}
const ld = {
  inject: ["stack"],
  computed: {
    values() {
      return v.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return ee(e.values, t);
      },
      first(t) {
        return cs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, ud = {
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    }
  },
  emits: ["subscribed", "event"],
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription ? this.bindListeners() : console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
  },
  methods: {
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = true, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
          let a = null, o = false, l = [];
          te(r, (u) => {
            !K(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
          }), a ? v.visit(a) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
            v.pushToast(u);
          }), this.$root.$emit(`event.${e}`, r);
        });
        this.subscriptions.push(t);
      });
    },
    unsubscribe() {
      this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
    }
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function cd() {
  this.__data__ = new xe(), this.size = 0;
}
function dd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function fd(e) {
  return this.__data__.get(e);
}
function pd(e) {
  return this.__data__.has(e);
}
var hd = 200;
function md(e, t) {
  var r = this.__data__;
  if (r instanceof xe) {
    var n = r.__data__;
    if (!St || n.length < hd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Te(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Se(e) {
  var t = this.__data__ = new xe(e);
  this.size = t.size;
}
Se.prototype.clear = cd;
Se.prototype.delete = dd;
Se.prototype.get = fd;
Se.prototype.has = pd;
Se.prototype.set = md;
var vd = "__lodash_hash_undefined__";
function gd(e) {
  return this.__data__.set(e, vd), this;
}
function yd(e) {
  return this.__data__.has(e);
}
function Ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Te(); ++t < r; )
    this.add(e[t]);
}
Ht.prototype.add = Ht.prototype.push = gd;
Ht.prototype.has = yd;
function bd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return true;
  return false;
}
function wd(e, t) {
  return e.has(t);
}
var Sd = 1, Od = 2;
function ds(e, t, r, n, i, s) {
  var a = r & Sd, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return false;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, h2 = true, d = r & Od ? new Ht() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < o; ) {
    var m = e[f], p = t[f];
    if (n)
      var g = a ? n(p, m, f, t, e, s) : n(m, p, f, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      h2 = false;
      break;
    }
    if (d) {
      if (!bd(t, function(w, x) {
        if (!wd(d, x) && (m === w || i(m, w, r, n, s)))
          return d.push(x);
      })) {
        h2 = false;
        break;
      }
    } else if (!(m === p || i(m, p, r, n, s))) {
      h2 = false;
      break;
    }
  }
  return s.delete(e), s.delete(t), h2;
}
var $d = ge.Uint8Array;
const Wn = $d;
function Ed(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function xd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Td = 1, _d = 2, Id = "[object Boolean]", Ad = "[object Date]", Pd = "[object Error]", qd = "[object Map]", Cd = "[object Number]", Fd = "[object RegExp]", Ld = "[object Set]", kd = "[object String]", Dd = "[object Symbol]", Bd = "[object ArrayBuffer]", jd = "[object DataView]", zn = Le ? Le.prototype : void 0, gr = zn ? zn.valueOf : void 0;
function Rd(e, t, r, n, i, s, a) {
  switch (r) {
    case jd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Bd:
      return !(e.byteLength != t.byteLength || !s(new Wn(e), new Wn(t)));
    case Id:
    case Ad:
    case Cd:
      return Kr(+e, +t);
    case Pd:
      return e.name == t.name && e.message == t.message;
    case Fd:
    case kd:
      return e == t + "";
    case qd:
      var o = Ed;
    case Ld:
      var l = n & Td;
      if (o || (o = xd), e.size != t.size && !l)
        return false;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= _d, a.set(e, t);
      var c = ds(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Dd:
      if (gr)
        return gr.call(e) == gr.call(t);
  }
  return false;
}
function Md(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Nd(e, t, r) {
  var n = t(e);
  return R(e) ? n : Md(n, r(e));
}
function fs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Vd() {
  return [];
}
var Ud = Object.prototype, Hd = Ud.propertyIsEnumerable, Gn = Object.getOwnPropertySymbols, Wd = Gn ? function(e) {
  return e == null ? [] : (e = Object(e), fs(Gn(e), function(t) {
    return Hd.call(e, t);
  }));
} : Vd;
const zd = Wd;
function Xn(e) {
  return Nd(e, zt, zd);
}
var Gd = 1, Xd = Object.prototype, Kd = Xd.hasOwnProperty;
function Yd(e, t, r, n, i, s) {
  var a = r & Gd, o = Xn(e), l = o.length, u = Xn(t), c = u.length;
  if (l != c && !a)
    return false;
  for (var f = l; f--; ) {
    var h2 = o[f];
    if (!(a ? h2 in t : Kd.call(t, h2)))
      return false;
  }
  var d = s.get(e), m = s.get(t);
  if (d && m)
    return d == t && m == e;
  var p = true;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++f < l; ) {
    h2 = o[f];
    var w = e[h2], x = t[h2];
    if (n)
      var _ = a ? n(x, w, h2, t, e, s) : n(w, x, h2, e, t, s);
    if (!(_ === void 0 ? w === x || i(w, x, r, n, s) : _)) {
      p = false;
      break;
    }
    g || (g = h2 == "constructor");
  }
  if (p && !g) {
    var S = e.constructor, O = t.constructor;
    S != O && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (p = false);
  }
  return s.delete(e), s.delete(t), p;
}
var Jd = Je(ge, "DataView");
const Pr = Jd;
var Qd = Je(ge, "Promise");
const qr = Qd;
var Zd = Je(ge, "Set");
const Cr = Zd;
var ef = Je(ge, "WeakMap");
const Fr = ef;
var Kn = "[object Map]", tf = "[object Object]", Yn = "[object Promise]", Jn = "[object Set]", Qn = "[object WeakMap]", Zn = "[object DataView]", rf = Ye(Pr), nf = Ye(St), sf = Ye(qr), af = Ye(Cr), of = Ye(Fr), He = Be;
(Pr && He(new Pr(new ArrayBuffer(1))) != Zn || St && He(new St()) != Kn || qr && He(qr.resolve()) != Yn || Cr && He(new Cr()) != Jn || Fr && He(new Fr()) != Qn) && (He = function(e) {
  var t = Be(e), r = t == tf ? e.constructor : void 0, n = r ? Ye(r) : "";
  if (n)
    switch (n) {
      case rf:
        return Zn;
      case nf:
        return Kn;
      case sf:
        return Yn;
      case af:
        return Jn;
      case of:
        return Qn;
    }
  return t;
});
const ei = He;
var lf = 1, ti = "[object Arguments]", ri = "[object Array]", kt = "[object Object]", uf = Object.prototype, ni = uf.hasOwnProperty;
function cf(e, t, r, n, i, s) {
  var a = R(e), o = R(t), l = a ? ri : ei(e), u = o ? ri : ei(t);
  l = l == ti ? kt : l, u = u == ti ? kt : u;
  var c = l == kt, f = u == kt, h2 = l == u;
  if (h2 && br(e)) {
    if (!br(t))
      return false;
    a = true, c = false;
  }
  if (h2 && !c)
    return s || (s = new Se()), a || mi(e) ? ds(e, t, r, n, i, s) : Rd(e, t, l, r, n, i, s);
  if (!(r & lf)) {
    var d = c && ni.call(e, "__wrapped__"), m = f && ni.call(t, "__wrapped__");
    if (d || m) {
      var p = d ? e.value() : e, g = m ? t.value() : t;
      return s || (s = new Se()), i(p, g, r, n, s);
    }
  }
  return h2 ? (s || (s = new Se()), Yd(e, t, r, n, i, s)) : false;
}
function sr(e, t, r, n, i) {
  return e === t ? true : e == null || t == null || !ke(e) && !ke(t) ? e !== e && t !== t : cf(e, t, r, n, sr, i);
}
var df = 1, ff = 2;
function pf(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return false;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return false;
    } else {
      var f = new Se();
      if (n)
        var h2 = n(u, c, l, e, t, f);
      if (!(h2 === void 0 ? sr(c, u, df | ff, n, f) : h2))
        return false;
    }
  }
  return true;
}
function ps(e) {
  return e === e && !K(e);
}
function hf(e) {
  for (var t = zt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, ps(i)];
  }
  return t;
}
function hs(e, t) {
  return function(r) {
    return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function mf(e) {
  var t = hf(e);
  return t.length == 1 && t[0][2] ? hs(t[0][0], t[0][1]) : function(r) {
    return r === e || pf(r, e, t);
  };
}
function vf(e, t) {
  return e != null && t in Object(e);
}
function gf(e, t) {
  return e != null && Di(e, t, vf);
}
var yf = 1, bf = 2;
function wf(e, t) {
  return Xr(e) && ps(t) ? hs(Et(e), t) : function(r) {
    var n = ye(r, e);
    return n === void 0 && n === t ? gf(r, e) : sr(t, n, yf | bf);
  };
}
function Sf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Of(e) {
  return function(t) {
    return es(t, e);
  };
}
function $f(e) {
  return Xr(e) ? Sf(Et(e)) : Of(e);
}
function It(e) {
  return typeof e == "function" ? e : e == null ? gi : typeof e == "object" ? R(e) ? wf(e[0], e[1]) : mf(e) : $f(e);
}
function Ef(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Wt(t)) {
      var s = It(r);
      t = zt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function xf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ii = 1 / 0, Tf = 17976931348623157e292;
function _f(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ii || e === -ii) {
    var t = e < 0 ? -1 : 1;
    return t * Tf;
  }
  return e === e ? e : 0;
}
function dn(e) {
  var t = _f(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var If = Math.max;
function Af(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dn(r);
  return i < 0 && (i = If(n + i, 0)), xf(e, It(t), i);
}
var Pf = Ef(Af);
const fn = Pf, qf = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    filepond: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    jsFilepondOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    server: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    accept: {
      type: Array,
      required: false,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    existingSuffix: {
      type: String,
      required: false,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: false,
      default: "_order"
    },
    dusk: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: false
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? oe(e) ? e : R(e) ? e.map(this.extractMetadataFromExistingFile) : K(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-exif-orientation")), e.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const h2 = se.CancelToken.source();
              return se({
                url: a.preview_url,
                method: "GET",
                cancelToken: h2.token,
                responseType: "blob"
              }).then((d) => {
                const m = new File([d.data], a.name, { type: a.type });
                o(m);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  h2.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, f, h2) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const p = se.CancelToken.source();
            se({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: p.token,
              onUploadProgress: (g) => {
                f(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var w;
              axios.isCancel(g) ? h2() : c((w = g.response) == null ? void 0 : w.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            se({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = false), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = fn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, Cf = { ref: "file" };
function Ff(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", Cf, [
    renderSlot(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Lf = /* @__PURE__ */ Re(qf, [["render", Ff]]), kf = {
  inject: ["stack"],
  computed: {
    values() {
      return v.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return ee(e.values, t);
      },
      ...this.values
    });
  }
};
function pn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && vs(t, ms(r, n), e[n]);
  return t;
}
function ms(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function vs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => vs(e, ms(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  pn(r, e, t);
}
var Df = "[object Boolean]";
function gs(e) {
  return e === true || e === false || ke(e) && Be(e) == Df;
}
function ys(e, t) {
  var r = {};
  return t = It(t), Mr(e, function(n, i, s) {
    ts(r, i, t(n, i, s));
  }), r;
}
function bs(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function et(e, t, r) {
  return e = Jr(e), r = r == null ? 0 : bs(dn(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Bf = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: false,
      default: false
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollOnError: {
      type: Boolean,
      required: false,
      default: true
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: false,
      default: false
    },
    escapeValidationMessages: {
      type: Boolean,
      required: false,
      default: true
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    },
    debounce: {
      type: Number,
      required: false,
      default: 0
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: false,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      processingInBackground: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: false,
      recentlyUnsuccessful: false,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return v.validationErrors(this.stack);
    },
    errors() {
      return ys(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = er(() => {
      this.request(this.background);
    }, this.debounce);
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? false : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === true ? this.$watch("values", () => {
      this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: true }) : R(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: true });
    }), this.isMounted = true;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $fileAsUrl(e) {
      const t = this.values[e];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, false), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e, t) {
      return Ot(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = true;
      if (e._flatpickr && (t = false), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = false), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (!this.$uploading) {
        if (e) {
          const t = e.submitter;
          t && t.name && this.$put(t.name, t.value);
        }
        if (!this.confirm)
          return this.request();
        v.confirm(
          gs(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton,
          !!this.requirePassword,
          this.requirePasswordOnce,
          !!this.confirmDanger
        ).then((t) => {
          if (!this.requirePassword) {
            this.request();
            return;
          }
          this.method.toUpperCase() !== "GET" && t && this.$put(
            oe(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
            t
          ), this.request();
        }).catch(() => {
        });
      }
    },
    async request(e) {
      if (typeof e > "u" && (e = false), this.$uploading)
        return;
      await this.$nextTick(), this.background ? this.processingInBackground = true : this.processing = true, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = false, this.recentlyUnsuccessful = false, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : pn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = true), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = true);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.processingInBackground = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, { ...r, ...this.headers }).then(i).catch(async (s) => {
        if (this.processing = false, this.processingInBackground = false, this.wasUnsuccessful = true, this.recentlyUnsuccessful = true, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = false, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = fn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
        );
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$all",
              "$attrs",
              "$put",
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ].includes(r) || et(r, "__v_") ? e[r] : (!e.isMounted && !ee(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), ye(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, jf = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Rf = { ref: "input" };
function Mf(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", Rf, [
    renderSlot(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Nf = /* @__PURE__ */ Re(jf, [["render", Mf]]), Vf = {
  components: { Render: de },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, v.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Uf(e, t, r, n, i, s) {
  const a = resolveComponent("Render");
  return i.html ? (openBlock(), createBlock(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? renderSlot(e.$slots, "default", { key: 1 }) : createCommentVNode("", true);
}
const Hf = /* @__PURE__ */ Re(Vf, [["render", Uf]]), Wf = ["href", "onClick"], zf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: false,
      default: "#"
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    data: {
      type: Object,
      required: false,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.requirePasswordOnce
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    },
    away: {
      type: Boolean,
      required: false,
      default: false
    },
    keepModal: {
      type: Boolean,
      required: false,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = inject("stack"), n = ref(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        gs(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
      ).then((a) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        a && (n.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const o = r > 0 && t.keepModal;
      if (t.modal && !o)
        return v.modal(t.href);
      if (t.slideover && !o)
        return v.slideover(t.href);
      if (et(t.href, "#")) {
        if (v.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = v.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = true), l === "GET")
        return t.replace ? v.replace(t.href, u) : v.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : pn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(oe(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (openBlock(), createElementBlock("a", {
      href: e.href,
      onClick: withModifiers(i, ["prevent"])
    }, [
      renderSlot(a.$slots, "default")
    ], 8, Wf));
  }
}, Gf = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    },
    position: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    animate: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: true,
      isOpen: false
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      animate: this.staticAnimate,
      position: this.position,
      Dialog: tn,
      DialogPanel: rn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Xf = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "modal"
    },
    opened: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e;
    return v.registerPreloadedModal(t.name, t.html, t.type), t.opened && v.openPreloadedModal(t.name), () => {
    };
  }
}, Kf = {
  components: { Render: de },
  props: {
    name: {
      type: String,
      required: true
    },
    on: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: false
    };
  },
  mounted() {
    this.on.forEach((e) => {
      this.$splade.on(e, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = true, v.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = false, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function Yf(e, t, r, n, i, s) {
  const a = resolveComponent("Render");
  return i.html ? (openBlock(), createBlock(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? renderSlot(e.$slots, "placeholder", { key: 1 }) : renderSlot(e.$slots, "default", { key: 2 });
}
const Jf = /* @__PURE__ */ Re(Kf, [["render", Yf]]), Qf = {
  props: {
    script: {
      type: String,
      required: true
    }
  },
  mounted() {
    var e = new Function("obj", "with (obj) { " + this.script + "}");
    e = e.bind(this, this), e(this.script);
  },
  render() {
    return "";
  }
};
function Zf(e, t) {
  var r = -1, n = Wt(e) ? Array(e.length) : [];
  return Nr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ws(e, t) {
  var r = R(e) ? ki : Zf;
  return r(e, It(t));
}
const ep = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    },
    remoteUrl: {
      type: String,
      required: false,
      default: null
    },
    optionValue: {
      type: String,
      required: false,
      default: null
    },
    optionLabel: {
      type: String,
      required: false,
      default: null
    },
    remoteRoot: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: false
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && R(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = true, se({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? ye(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = false;
        if (te(t, (s) => {
          var a = document.createElement("option");
          a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && (i = true), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = false;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = false;
      }).catch(() => {
        this.loading = false;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = R(e);
      if (!r && K(e))
        if (this.optionValue && this.optionLabel) {
          let n = ye(e, this.optionValue);
          oe(n) || (n = `${n}`), t.push({
            value: n,
            label: ye(e, this.optionLabel)
          });
        } else
          te(e, (n, i) => {
            oe(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ws(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return fn(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: true })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(true);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, tp = { ref: "select" };
function rp(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", tp, [
    renderSlot(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const np = /* @__PURE__ */ Re(ep, [["render", rp]]), ip = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = ys(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return ee(t, i);
      },
      hasShared(i) {
        return ee(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function sp(e, t, r) {
  e = Jr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : bs(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function ap(e, t) {
  var r = [];
  return Nr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function op(e, t) {
  var r = R(e) ? fs : ap;
  return r(e, It(t));
}
function si(e, t) {
  return sr(e, t);
}
const lp = {
  inject: ["stack"],
  props: {
    baseUrl: {
      type: String,
      required: false,
      default() {
        return window.location.pathname;
      }
    },
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    },
    searchDebounce: {
      type: Number,
      required: false,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: false,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: false,
      processingAction: false
    };
  },
  computed: {
    columnsAreToggled() {
      return !si(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = er(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    te(e, (r, n) => {
      if (et(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? v.modal(e) : t === "slideover" ? v.slideover(e) : v.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, te(e, (t, r) => {
        et(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, true);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = op(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : true);
      let n = ws(r, (i) => i.key).sort();
      si(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], nextTick(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!sp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], R(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e] = t, (et(e, "perPage") || et(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = true);
      let n = {};
      te(e, (u, c) => {
        if (!R(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((f, h2) => {
          n[`${c}[${h2}]`] = f;
        });
      });
      let i = "";
      te(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : v.replaceUrlOfCurrentPage(s);
      this.isLoading = true;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": v.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      v.replace(s, o).then(() => {
        this.isLoading = false, typeof t < "u" && t && nextTick(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = false);
      let a = null;
      if (t)
        try {
          a = await v.confirm(t === true ? "" : t, r, n, i, !!s);
        } catch {
          return false;
        }
      this.isLoading = true;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = oe(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, false).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = R(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? true : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, up = {
  inheritAttrs: false,
  data() {
    return {
      isMounted: false,
      Teleport
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function cp(e, t, r, n, i, s) {
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(i.isMounted ? i.Teleport : "div"), normalizeProps(guardReactiveProps(e.$attrs)), {
    default: withCtx(() => [
      renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [vShow, i.isMounted]
  ]);
}
const dp = /* @__PURE__ */ Re(up, [["render", cp]]), fp = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        nextTick(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, pp = { ref: "textarea" };
function hp(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", pp, [
    renderSlot(e.$slots, "default")
  ], 512);
}
const mp = /* @__PURE__ */ Re(fp, [["render", hp]]), vp = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, gp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], yp = {
  computed: {
    toasts: function() {
      return v.toastsReversed.value;
    },
    hasBackdrop: function() {
      return v.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      v.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: gp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: de,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, bp = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : false;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && cs(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, wp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Sp = {
  props: {
    backendRoute: {
      type: String,
      required: true
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    initialInstance: {
      type: String,
      required: true
    },
    initialSignature: {
      type: String,
      required: true
    },
    methods: {
      type: Array,
      required: true
    },
    originalUrl: {
      type: String,
      required: true
    },
    verb: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      instance: this.initialInstance,
      signature: this.initialSignature,
      values: Object.assign({}, this.default)
    };
  },
  render() {
    const e = this, t = {
      props: new Proxy(this.values, {
        ownKeys: function() {
          return Object.keys(e.values);
        },
        get: (r, n) => ye(e.values, n),
        set: (r, n, i) => {
          Ot(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && ye(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await se.post(this.backendRoute, {
            instance: this.instance,
            signature: this.signature,
            url: this.originalUrl,
            verb: this.verb,
            props: this.values,
            method: r,
            data: n
          }, { headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "text/html, application/xhtml+xml"
          } });
        } catch (s) {
          v.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          Ot(this.values, a, s);
        }), i.data.redirect ? v.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          v.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Op = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && nextTick(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", er(i, 100)), i();
  }
}, Lr = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Lr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Lr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, _p = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = ee(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = ee(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = ee(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = ee(t, "link_component") ? t.link_component : "Link", t.progress_bar = ee(t, "progress_bar") ? t.progress_bar : false, t.components = ee(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Vl).component(`${r}Confirm`, qu).component(`${r}DataStores`, ju).component(`${r}Data`, Bu).component(`${r}Defer`, Ju).component(`${r}Dialog`, Qu).component(`${r}Dropdown`, ad).component(`${r}DynamicHtml`, od).component(`${r}Errors`, ld).component(`${r}Event`, ud).component(`${r}File`, Lf).component(`${r}Flash`, kf).component(`${r}Form`, Bf).component(`${r}Input`, Nf).component(`${r}VueBridge`, Sp).component(`${r}Lazy`, Hf).component(`${r}Modal`, Gf).component(`${r}OnClickOutside`, rs).component(`${r}PreloadedModal`, Xf).component(`${r}Rehydrate`, Jf).component(`${r}Render`, de).component(`${r}Script`, Qf).component(`${r}Select`, np).component(`${r}State`, ip).component(`${r}Table`, lp).component(`${r}Teleport`, dp).component(`${r}Textarea`, mp).component(`${r}Toast`, vp).component(`${r}Toasts`, yp).component(`${r}Toggle`, bp).component(`${r}Transition`, wp).component(t.link_component, zf).directive(`${r}PreserveScroll`, Op), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      K(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        ee(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Lr.init(t.progress_bar);
    }
    te(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Ip(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : true;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
Ip(createServer, renderToString, (props) => {
  return createSSRApp({
    render: xp(props)
  }).use(_p);
});
