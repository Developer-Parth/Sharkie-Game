!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function o(t) {
        return "string" == typeof t
    }
    function p(t) {
        return "function" == typeof t
    }
    function q(t) {
        return "number" == typeof t
    }
    function r(t) {
        return void 0 === t
    }
    function s(t) {
        return "object" == typeof t
    }
    function t(t) {
        return !1 !== t
    }
    function u() {
        return "undefined" != typeof window
    }
    function v(t) {
        return p(t) || o(t)
    }
    function M(t) {
        return (h = mt(t, ot)) && oe
    }
    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function O(t, e) {
        return !e && console.warn(t)
    }
    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }
    function Q() {
        return 0
    }
    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = ct.length; r-- && !ct[r].targetTest(i); )
                ;
            e = ct[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r],e))) || t.splice(r, 1);
        return t
    }
    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }
    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }
    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function da(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function ea(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function fa() {
        var t, e, r = ht.length, i = ht.slice(0);
        for (lt = {},
        t = ht.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function ga(t, e, r, i) {
        ht.length && fa(),
        t.render(e, r, i),
        ht.length && fa()
    }
    function ha(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }
    function ia(t) {
        return t
    }
    function ja(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ka(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }
    function ma(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function na(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function oa(e) {
        var r = e.parent || I
          , i = e.keyframes ? ka : ja;
        if (t(e.inherit))
            for (; r; )
                i(e, r.vars.defaults),
                r = r.parent || r._dp;
        return e
    }
    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
        a ? a._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function sa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }
    function wa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function ya(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function za(t) {
        return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }
    function Aa(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        za(t),
        r._dirty || ta(r, t)),
        t
    }
    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e),
        (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)),
        ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -X
        }
    }
    function Ca(t, e, r, i) {
        return e.parent && sa(e),
        e._start = da((q(r) ? r : r || t !== I ? bt(t, r, e) : t._time) + e._delay),
        e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n)
                for (a = e[n]; s && s[n] > a; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        vt(e) || (t._recent = e),
        i || Ba(t, e),
        t
    }
    function Da(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }
    function Ea(t, e, r, i) {
        return jt(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }
    function Ja(t, e, r, i) {
        var n = t._repeat
          , a = da(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur),
        t._dur = a,
        t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a,
        s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t),
        r || ta(t.parent, t),
        t
    }
    function Ka(t) {
        return t instanceof Nt ? ta(t) : Ja(t, t._dur)
    }
    function Na(e, r, i) {
        var n, a, s = q(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]),
        u.parent = i,
        e) {
            for (n = u,
            a = i; a && !("immediateRender"in n); )
                n = a.vars.defaults || {},
                a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender),
            e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Vt(r[0],u,r[1 + o])
    }
    function Oa(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function Qa(t) {
        if ("string" != typeof t)
            return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }
    function Ta(t, e) {
        return t && s(t) && "length"in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }
    function Xa(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Ya(t) {
        if (p(t))
            return t;
        var c = s(t) ? t : {
            each: t
        }
          , _ = Bt(c.ease)
          , m = c.from || 0
          , g = parseFloat(c.base) || 0
          , v = {}
          , e = 0 < m && m < 1
          , y = isNaN(m) || e
          , b = c.axis
          , T = m
          , w = m;
        return o(m) ? T = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (T = m[0],
        w = m[1]),
        function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || c).length, p = v[d];
            if (!p) {
                if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, j])[1])) {
                    for (h = -j; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                        ;
                    f--
                }
                for (p = v[d] = [],
                i = y ? Math.min(f, d) * T - .5 : m % f,
                n = y ? d * w / f - .5 : m / f | 0,
                l = j,
                u = h = 0; u < d; u++)
                    a = u % f - i,
                    s = n - (u / f | 0),
                    p[u] = o = b ? Math.abs("y" === b ? s : a) : W(a * a + s * s),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === m && Xa(p),
                p.max = h - l,
                p.min = l,
                p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1),
                p.b = d < 0 ? g - d : g,
                p.u = Qa(c.amount || c.each) || 0,
                _ = _ && d < 0 ? Rt(_) : _
            }
            return d = (p[t] - p.min) / p.max || 0,
            da(p.b + (_ ? _(d) : d) * p.v) + p.u
        }
    }
    function Za(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Qa(t))
        }
    }
    function $a(u, t) {
        var h, l, e = Z(u);
        return !e && s(u) && (h = e = u.radius || j,
        u.values ? (u = xt(u.values),
        (l = !q(u[0])) && (h *= h)) : u = Za(u.increment)),
        Oa(t, e ? p(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = j, s = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
                s = o);
            return s = !h || a <= h ? u[s] : t,
            l || s === t || q(t) ? s : s + Qa(t)
        }
        : Za(u))
    }
    function _a(t, e, r, i) {
        return Oa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function db(e, r, t) {
        return Oa(t, function(t) {
            return e[~~r(t)]
        })
    }
    function gb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? at : tt),
            s += t.substr(a, e - a) + _a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function jb(t, e, r) {
        var i, n, a, s = t.labels, o = j;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
            o = n);
        return a
    }
    function lb(t) {
        return sa(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Mt(t, "onInterrupt"),
        t
    }
    function qb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }
    function rb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, p = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : At.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            At[t])
                p = At[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & kt, p & kt, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt]
            } else if ("hsl" === t.substr(0, 3))
                if (p = d = t.match(tt),
                e) {
                    if (~t.indexOf("="))
                        return p = t.match(et),
                        r && p.length < 4 && (p[3] = 1),
                        p
                } else
                    s = +p[0] % 360 / 360,
                    o = p[1] / 100,
                    i = 2 * (u = p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < p.length && (p[3] *= 1),
                    p[0] = qb(s + 1 / 3, i, n),
                    p[1] = qb(s, i, n),
                    p[2] = qb(s - 1 / 3, i, n);
            else
                p = t.match(tt) || At.transparent;
            p = p.map(Number)
        }
        return e && !d && (i = p[0] / kt,
        n = p[1] / kt,
        a = p[2] / kt,
        u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
        h === l ? s = o = 0 : (f = h - l,
        o = .5 < u ? f / (2 - h - l) : f / (h + l),
        s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
        s *= 60),
        p[0] = ~~(s + .5),
        p[1] = ~~(100 * o + .5),
        p[2] = ~~(100 * u + .5)),
        r && p.length < 4 && (p[3] = 1),
        p
    }
    function sb(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(Pt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }
    function tb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Pt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = rb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = sb(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Pt, "1").split(rt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Pt)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function wb(t) {
        var e, r = t.join(" ");
        if (Pt.lastIndex = 0,
        Pt.test(r))
            return e = Ct.test(r),
            t[1] = tb(t[1], e),
            t[0] = tb(t[0], e, sb(t[1])),
            !0
    }
    function Fb(t) {
        var e = (t + "").split("(")
          , r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[s] = isNaN(i) ? i.replace(Ft, "").trim() : +i,
                s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1
              , r = t.indexOf(")")
              , i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ha)) : zt._CE && Et.test(t) ? zt._CE("", t) : r
    }
    function Hb(t, e) {
        for (var r, i = t._first; i; )
            i instanceof Nt ? Hb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Hb(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function Jb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a,
            zt[n = t.toLowerCase()] = r,
            a)
                zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }),
        a
    }
    function Kb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Lb(r, t, e) {
        function Ql(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
          , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / U * (Math.asin(1 / i) || 0)
          , s = "out" === r ? Ql : "in" === r ? function(t) {
            return 1 - Ql(1 - t)
        }
        : Kb(Ql);
        return n = U / n,
        s.config = function(t, e) {
            return Lb(r, t, e)
        }
        ,
        s
    }
    function Mb(e, r) {
        function Yl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Yl : "in" === e ? function(t) {
            return 1 - Yl(1 - t)
        }
        : Kb(Yl);
        return t.config = function(t) {
            return Mb(e, t)
        }
        ,
        t
    }
    var B, I, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, A, C, S, D, z, E, F, R, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, j = 1e8, X = 1 / j, U = 2 * Math.PI, J = U / 4, V = 0, W = Math.sqrt, G = Math.cos, H = Math.sin, K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , Z = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, pt = 30, ct = [], _t = "", mt = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, gt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, vt = function _isFromOrFromStart(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, yt = {
        _start: 0,
        endTime: Q,
        totalDuration: Q
    }, bt = function _parsePosition(t, e, r) {
        var i, n, a, s = t.labels, u = t._recent || yt, h = t.duration() >= j ? u.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0),
        a = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")),
        ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h),
        s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        a && r && (n = n / 100 * (Z(r) ? r[0] : r).totalDuration()),
        1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
    }, Tt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, wt = [].slice, xt = function toArray(t, e, r) {
        return !o(t) || r || !n && Dt() ? Z(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach(function(t) {
                return o(t) && !e || Ta(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
            }) || r
        }(t, r) : Ta(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
    }, Ot = function mapRange(e, t, r, i, n) {
        var a = t - e
          , s = i - r;
        return Oa(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, Mt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s)
            return i = a[e + "Params"],
            n = a.callbackScope || t,
            r && ht.length && fa(),
            i ? s.apply(n, i) : s.call(n)
    }, kt = 255, At = {
        aqua: [0, kt, kt],
        lime: [0, kt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, kt],
        navy: [0, 0, 128],
        white: [kt, kt, kt],
        olive: [128, 128, 0],
        yellow: [kt, kt, 0],
        orange: [kt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [kt, 0, 0],
        pink: [kt, 192, 203],
        cyan: [0, kt, kt],
        transparent: [kt, kt, kt, 0]
    }, Pt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in At)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ct = /hsl[a]?\(/, St = (x = Date.now,
    k = 500,
    A = 33,
    C = x(),
    S = C,
    z = D = 1e3 / 240,
    b = {
        time: 0,
        frame: 0,
        tick: function tick() {
            Mk(!0)
        },
        deltaRatio: function deltaRatio(t) {
            return T / (1e3 / (t || 60))
        },
        wake: function wake() {
            l && (!n && u() && (i = n = window,
            a = i.document || {},
            ot.gsap = oe,
            (i.gsapVersions || (i.gsapVersions = [])).push(oe.version),
            M(h || i.GreenSockGlobals || !i.gsap && i || {}),
            y = i.requestAnimationFrame),
            m && b.sleep(),
            g = y || function(t) {
                return setTimeout(t, z - 1e3 * b.time + 1 | 0)
            }
            ,
            c = 1,
            Mk(2))
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(m),
            c = 0,
            g = Q
        },
        lagSmoothing: function lagSmoothing(t, e) {
            k = t || 1e8,
            A = Math.min(e, k, 0)
        },
        fps: function fps(t) {
            D = 1e3 / (t || 240),
            z = 1e3 * b.time + D
        },
        add: function add(t) {
            E.indexOf(t) < 0 && E.push(t),
            Dt()
        },
        remove: function remove(t) {
            var e;
            ~(e = E.indexOf(t)) && E.splice(e, 1) && e <= w && w--
        },
        _listeners: E = []
    }), Dt = function _wake() {
        return !c && St.wake()
    }, zt = {}, Et = /^[\d.\-M][\d.\-,\s]/, Ft = /["']/g, Rt = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Bt = function _parseEase(t, e) {
        return t && (p(t) ? t : zt[t] || Fb(t)) || e
    };
    function Mk(t) {
        var e, r, i, n, a = x() - S, s = !0 === t;
        if (k < a && (C += a - A),
        (0 < (e = (i = (S += a) - C) - z) || s) && (n = ++b.frame,
        T = i - 1e3 * b.time,
        b.time = i /= 1e3,
        z += e + (D <= e ? 4 : D - e),
        r = 1),
        s || (m = g(Mk)),
        r)
            for (w = 0; w < E.length; w++)
                E[w](i, T, n, t)
    }
    function nm(t) {
        return t < R ? F * t * t : t < .7272727272727273 ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Jb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    zt.Linear.easeNone = zt.none = zt.Linear.easeIn,
    Jb("Elastic", Lb("in"), Lb("out"), Lb()),
    F = 7.5625,
    R = 1 / 2.75,
    Jb("Bounce", function(t) {
        return 1 - nm(1 - t)
    }, nm),
    Jb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Jb("Circ", function(t) {
        return -(W(1 - t * t) - 1)
    }),
    Jb("Sine", function(t) {
        return 1 === t ? 1 : 1 - G(t * J)
    }),
    Jb("Back", Mb("in"), Mb("out"), Mb()),
    zt.SteppedEase = zt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * Tt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    L.ease = zt["quad.out"],
    ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return _t += t + "," + t + "Params,"
    });
    var It, Lt = function GSCache(t, e) {
        this.id = V++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : aa,
        this.set = e ? e.getSetter : Kt
    }, qt = ((It = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    It.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    It.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0,
        Ja(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    It.totalTime = function totalTime(t, e) {
        if (Dt(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (Aa(this, t),
            !r._dp || r.parent || Ba(r, this); r && r.parent; )
                r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        ga(this, t, e)),
        this
    }
    ,
    It.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    It.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    It.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    It.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
    }
    ,
    It.timeScale = function timeScale(t) {
        if (!arguments.length)
            return this._rts === -X ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -X ? 0 : this._rts,
        function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent
        }(this.totalTime(Tt(-this._delay, this._tDur, e), !0)),
        za(this),
        this
    }
    ,
    It.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Dt(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))),
        this) : this._ps
    }
    ,
    It.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Ca(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    It.endTime = function endTime(e) {
        return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    It.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    It.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return r
    }
    ,
    It.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        Ka(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    It.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
            var e = this._time;
            return this._rDelay = t,
            Ka(this),
            e ? this.time(e) : this
        }
        return this._rDelay
    }
    ,
    It.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    It.seek = function seek(e, r) {
        return this.totalTime(bt(this, e), t(r))
    }
    ,
    It.restart = function restart(e, r) {
        return this.play().totalTime(e ? -this._delay : 0, t(r))
    }
    ,
    It.play = function play(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    It.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    It.pause = function pause(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    It.resume = function resume() {
        return this.paused(!1)
    }
    ,
    It.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)),
        this) : this._rts < 0
    }
    ,
    It.invalidate = function invalidate() {
        return this._initted = this._act = 0,
        this._zTime = -X,
        this
    }
    ,
    It.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
    }
    ,
    It.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        r && (i[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    It.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function En() {
                var t = i.then;
                i.then = null,
                p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                e(r),
                i.then = t
            }
            var r = p(t) ? t : ia;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? En() : i._prom = En
        }
        )
    }
    ,
    It.kill = function kill() {
        lb(this)
    }
    ,
    Animation);
    function Animation(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Ja(this, +t.duration, 1, 1),
        this.data = t.data,
        c || St.wake()
    }
    ja(qt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Nt = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}),
            (i = n.call(this, e) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = t(e.sortChildren),
            I && Ca(e.parent || I, _assertThisInitialized(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger),
            i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Na(0, arguments, this),
            this
        }
        ,
        e.from = function from(t, e, r) {
            return Na(1, arguments, this),
            this
        }
        ,
        e.fromTo = function fromTo(t, e, r, i) {
            return Na(2, arguments, this),
            this
        }
        ,
        e.set = function set(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            oa(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Vt(t,e,bt(this, r),1),
            this
        }
        ,
        e.call = function call(t, e, r) {
            return Ca(this, Vt.delayedCall(0, t, e), r)
        }
        ,
        e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = a,
            r.onCompleteParams = s,
            r.parent = this,
            new Vt(t,r,bt(this, n)),
            this
        }
        ,
        e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1,
            oa(i).immediateRender = t(i.immediateRender),
            this.staggerTo(e, r, i, n, a, s, o)
        }
        ,
        e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i,
            oa(n).immediateRender = t(n.immediateRender),
            this.staggerTo(e, r, n, a, s, o, u)
        }
        ,
        e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, c, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = t <= 0 ? 0 : da(t), y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m),
            v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _,
                t += this._time - _),
                i = v,
                f = this._start,
                u = !(l = this._ts),
                y && (g || (_ = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat) {
                    if (p = this._yoyo,
                    o = g + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (i = da(v % o),
                    v === m ? (s = this._repeat,
                    i = g) : ((s = ~~(v / o)) && s === v / o && (i = g,
                    s--),
                    g < i && (i = g)),
                    d = gt(this._tTime, o),
                    !_ && this._tTime && d !== s && (d = s),
                    p && 1 & s && (i = g - i,
                    c = 1),
                    s !== d && !this._lock) {
                        var b = p && 1 & d
                          , T = b === (p && 1 & s);
                        if (s < d && (b = !b),
                        _ = b ? 0 : g,
                        this._lock = 1,
                        this.render(_ || (c ? 0 : da(s * o)), e, !g)._lock = 0,
                        this._tTime = v,
                        !e && this.parent && Mt(this, "onRepeat"),
                        this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1),
                        _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (g = this._dur,
                        m = this._tDur,
                        T && (this._lock = 2,
                        _ = b ? g : -1e-4,
                        this.render(_, !0),
                        this.vars.repeatRefresh && !c && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        Hb(this, c)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, da(_), da(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !l,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                _ = 0),
                !_ && i && !e && (Mt(this, "onStart"),
                this._tTime !== v))
                    return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (a = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = -X);
                                break
                            }
                        }
                        n = a
                    }
                else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (a = n._prev,
                        (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = w ? -X : X);
                                break
                            }
                        }
                        n = a
                    }
                }
                if (h && !e && (this.pause(),
                h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    za(this),
                    this.render(t, e, r);
                this._onUpdate && !e && Mt(this, "onUpdate", !0),
                (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1),
                e || t < 0 && !_ || !v && !_ && m || (Mt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = bt(this, e, t)),
            !(t instanceof qt)) {
                if (Z(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    this;
                if (o(t))
                    return this.addLabel(t, e);
                if (!p(t))
                    return this;
                t = Vt.delayedCall(0, t)
            }
            return this !== t ? Ca(this, t, e) : this
        }
        ,
        e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -j);
            for (var n = [], a = this._first; a; )
                a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
                a = a._next;
            return n
        }
        ,
        e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        e.remove = function remove(t) {
            return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t),
            t === this._recent && (this._recent = this._last),
            ta(this))
        }
        ,
        e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = da(St.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            n.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function addLabel(t, e) {
            return this.labels[t] = bt(this, e),
            this
        }
        ,
        e.removeLabel = function removeLabel(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function addPause(t, e, r) {
            var i = Vt.delayedCall(0, e || Q, r);
            return i.data = "isPause",
            this._hasPause = 1,
            Ca(this, i, bt(this, t))
        }
        ,
        e.removePause = function removePause(t) {
            var e = this._first;
            for (t = bt(this, t); e; )
                e._start === t && "isPause" === e.data && sa(e),
                e = e._next
        }
        ,
        e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Qt !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        e.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = xt(t), a = this._first, s = q(e); a; )
                a instanceof Vt ? ea(a._targets, n) && (s ? (!Qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
                a = a._next;
            return i
        }
        ,
        e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this, n = bt(i, t), a = e.startAt, s = e.onStart, o = e.onStartParams, u = e.immediateRender, h = Vt.to(i, ja({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || X,
                onStart: function onStart() {
                    if (i.pause(),
                    !r) {
                        var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        h._dur !== t && Ja(h, t, 0, 1).render(h._time, !0, !0),
                        r = 1
                    }
                    s && s.apply(h, o || [])
                }
            }, e));
            return u ? h.render(0) : h
        }
        ,
        e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ja({
                startAt: {
                    time: bt(this, t)
                }
            }, r))
        }
        ,
        e.recent = function recent() {
            return this._recent
        }
        ,
        e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time),
            jb(this, bt(this, t))
        }
        ,
        e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time),
            jb(this, bt(this, t), 1)
        }
        ,
        e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
        }
        ,
        e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n; )
                n._start >= r && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (i in a)
                    a[i] >= r && (a[i] += t);
            return ta(this)
        }
        ,
        e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return n.prototype.invalidate.call(this)
        }
        ,
        e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            ta(this)
        }
        ,
        e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = j;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1,
                    Ca(a, s, r - s._delay, 1)._lock = 0) : o = r,
                    r < 0 && s._ts && (n -= r,
                    (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts,
                    a._time -= r,
                    a._tTime -= r),
                    a.shiftChildren(-r, !1, -Infinity),
                    o = 0),
                    s._end > n && s._ts && (n = s._end),
                    s = e;
                Ja(a, a === I && a._time > n ? a._time : n, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (ga(I, ya(t, I)),
            f = St.frame),
            St.frame >= pt) {
                pt += Y.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && Y.autoSleep && St._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || St.sleep()
                }
            }
        }
        ,
        Timeline
    }(qt);
    ja(Nt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Tb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
            if (p(t) && (t = Xt(t, n, e, r, i)),
            !s(t) || t.style && t.nodeType || Z(t) || K(t))
                return o(t) ? Xt(t, n, e, r, i) : t;
            var a, u = {};
            for (a in t)
                u[a] = Xt(t[a], n, e, r, i);
            return u
        }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),
        r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)],
            f = u._props.length; f--; )
                l[u._props[f]] = h;
        return u
    }
    var Qt, Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
        p(i) && (i = i(n || 0, t, a));
        var l, f = t[e], d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f, c = p(f) ? h ? Ht : Gt : Wt;
        if (o(i) && (~i.indexOf("random(") && (i = gb(i)),
        "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Qa(d) || 0)) && 0 !== l || (i = l))),
        d !== i)
            return isNaN(d * i) || "" === i ? (f || e in t || N(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, p, c, _ = new ae(this._pt,t,e,0,1,te,null,n), m = 0, g = 0;
                for (_.b = r,
                _.e = i,
                r += "",
                (p = ~(i += "").indexOf("random(")) && (i = gb(i)),
                a && (a(c = [r, i], t, e),
                r = c[0],
                i = c[1]),
                u = r.match(it) || []; o = it.exec(i); )
                    l = o[0],
                    f = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                    _._pt = {
                        _next: _._pt,
                        p: f || 1 === g ? f : ",",
                        s: d,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "",
                _.fp = s,
                (nt.test(i) || p) && (_.e = 0),
                this._pt = _
            }
            .call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt,t,e,+d || 0,i - (d || 0),"boolean" == typeof f ? $t : Zt,0,c),
            h && (l.fp = h),
            s && l.modifier(s, this, t),
            this._pt = l)
    }, jt = function _initTween(e, r) {
        var i, n, a, s, o, u, h, l, f, d, p, c, m, g = e.vars, v = g.ease, y = g.startAt, b = g.immediateRender, T = g.lazy, w = g.onUpdate, x = g.onUpdateParams, O = g.callbackScope, M = g.runBackwards, k = g.yoyoEase, A = g.keyframes, P = g.autoRevert, C = e._dur, S = e._startAt, D = e._targets, z = e.parent, E = z && "nested" === z.data ? z.parent._targets : D, F = "auto" === e._overwrite && !B, R = e.timeline;
        if (!R || A && v || (v = "none"),
        e._ease = Bt(v, L.ease),
        e._yEase = k ? Rt(Bt(!0 === k ? v : k, L.ease)) : 0,
        k && e._yoyo && !e._repeat && (k = e._yEase,
        e._yEase = e._ease,
        e._ease = k),
        e._from = !R && !!g.runBackwards,
        !R) {
            if (c = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop],
            i = na(g, ut),
            S && S.render(-1, !0).kill(),
            y)
                if (sa(e._startAt = Vt.set(D, ja({
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: t(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: O,
                    stagger: 0
                }, y))),
                r < 0 && !b && !P && e._startAt.render(-1, !0),
                b) {
                    if (0 < r && !P && (e._startAt = 0),
                    C && r <= 0)
                        return void (r && (e._zTime = r))
                } else
                    !1 === P && (e._startAt = 0);
            else if (M && C)
                if (S)
                    P || (e._startAt = 0);
                else if (r && (b = !1),
                a = ja({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && t(T),
                    immediateRender: b,
                    stagger: 0,
                    parent: z
                }, i),
                c && (a[l.prop] = c),
                sa(e._startAt = Vt.set(D, a)),
                r < 0 && e._startAt.render(-1, !0),
                b) {
                    if (!r)
                        return
                } else
                    _initTween(e._startAt, X);
            for (e._pt = 0,
            T = C && t(T) || T && !C,
            n = 0; n < D.length; n++) {
                if (h = (o = D[n])._gsap || $(D)[n]._gsap,
                e._ptLookup[n] = d = {},
                lt[h.id] && ht.length && fa(),
                p = E === D ? n : E.indexOf(o),
                l && !1 !== (f = new l).init(o, c || i, e, p, E) && (e._pt = s = new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    d[t] = s
                }),
                f.priority && (u = 1)),
                !l || c)
                    for (a in i)
                        ft[a] && (f = Tb(a, i, e, p, o, E)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], p, E, 0, g.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]),
                F && e._pt && (Qt = e,
                I.killTweensOf(o, d, e.globalTime(r)),
                m = !e.parent,
                Qt = 0),
                e._pt && T && (lt[h.id] = 1)
            }
            u && ne(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = w,
        e._initted = (!e._op || e._pt) && !m
    }, Xt = function _parseFuncOrString(t, e, r, i, n) {
        return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? gb(t) : t
    }, Ut = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Jt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Vt = function(C) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var o, u, h, l, f, d, p, c, _ = (a = C.call(this, n ? r : oa(r)) || this).vars, m = _.duration, g = _.delay, y = _.immediateRender, b = _.stagger, T = _.overwrite, w = _.keyframes, x = _.defaults, M = _.scrollTrigger, k = _.yoyoEase, A = r.parent || I, P = (Z(e) || K(e) ? q(e[0]) : "length"in r) ? [e] : xt(e);
            if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = T,
            w || b || v(m) || v(g)) {
                if (r = a.vars,
                (o = a.timeline = new Nt({
                    data: "nested",
                    defaults: x || {}
                })).kill(),
                o.parent = o._dp = _assertThisInitialized(a),
                o._start = 0,
                w)
                    oa(ja(o.vars.defaults, {
                        ease: "none"
                    })),
                    b ? P.forEach(function(r, i) {
                        return w.forEach(function(t, e) {
                            return o.to(r, t, e ? ">" : i * b)
                        })
                    }) : w.forEach(function(t) {
                        return o.to(P, t, ">")
                    });
                else {
                    if (l = P.length,
                    p = b ? Ya(b) : Q,
                    s(b))
                        for (f in b)
                            ~Ut.indexOf(f) && ((c = c || {})[f] = b[f]);
                    for (u = 0; u < l; u++) {
                        for (f in h = {},
                        r)
                            Jt.indexOf(f) < 0 && (h[f] = r[f]);
                        h.stagger = 0,
                        k && (h.yoyoEase = k),
                        c && mt(h, c),
                        d = P[u],
                        h.duration = +Xt(m, _assertThisInitialized(a), u, d, P),
                        h.delay = (+Xt(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay,
                        !b && 1 === l && h.delay && (a._delay = g = h.delay,
                        a._start += g,
                        h.delay = 0),
                        o.to(d, h, p(u, d, P))
                    }
                    o.duration() ? m = g = 0 : a.timeline = 0
                }
                m || a.duration(m = o.duration())
            } else
                a.timeline = 0;
            return !0 !== T || B || (Qt = _assertThisInitialized(a),
            I.killTweensOf(P),
            Qt = 0),
            Ca(A, _assertThisInitialized(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (y || !m && !w && a._start === da(A._time) && t(y) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -X,
            a.render(Math.max(0, -g))),
            M && Da(_assertThisInitialized(a), M),
            a
        }
        _inheritsLoose(Tween, C);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, p = this._tDur, c = this._dur, _ = p - X < t && 0 <= t ? p : t < X ? 0 : t;
            if (c) {
                if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = _,
                    l = this.timeline,
                    this._repeat) {
                        if (s = c + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, r);
                        if (i = da(_ % s),
                        _ === p ? (a = this._repeat,
                        i = c) : ((a = ~~(_ / s)) && a === _ / s && (i = c,
                        a--),
                        c < i && (i = c)),
                        (u = this._yoyo && 1 & a) && (f = this._yEase,
                        i = c - i),
                        o = gt(this._tTime, s),
                        i === d && !r && this._initted)
                            return this;
                        a !== o && (l && this._yEase && Hb(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(da(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ea(this, t < 0 ? t : i, r, e))
                            return this._tTime = 0,
                            this;
                        if (c !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = _,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (f || this._ease)(i / c),
                    this._from && (this.ratio = h = 1 - h),
                    i && !d && !e && (Mt(this, "onStart"),
                    this._tTime !== _))
                        return this;
                    for (n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -X : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    Mt(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Mt(this, "onRepeat"),
                    _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && c || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1),
                    e || t < 0 && !d || !_ && !d || (Mt(this, _ === p ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || _ < p && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio, u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1, h = t._rDelay, l = 0;
                    if (h && t._repeat && (l = Tt(0, t._tDur, e),
                    a = gt(l, h),
                    s = gt(t._tTime, h),
                    t._yoyo && 1 & a && (u = 1 - u),
                    a !== s && (o = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== o || i || t._zTime === X || !e && t._zTime) {
                        if (!t._initted && Ea(t, e, i, r))
                            return;
                        for (s = t._zTime,
                        t._zTime = e || (r ? X : 0),
                        r = r || e && !s,
                        t.ratio = u,
                        t._from && (u = 1 - u),
                        t._time = 0,
                        t._tTime = l,
                        n = t._pt; n; )
                            n.r(u, n.d),
                            n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && Mt(t, "onUpdate"),
                        l && t._repeat && !r && t.parent && Mt(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1),
                        r || (Mt(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        e.targets = function targets() {
            return this._targets
        }
        ,
        e.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            C.prototype.invalidate.call(this)
        }
        ,
        e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? lb(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Qt && !0 !== Qt.vars.overwrite)._first || lb(this),
                this.parent && r !== this.timeline.totalDuration() && Ja(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var i, n, a, s, u, h, l, f = this._targets, d = t ? xt(t) : f, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(f, d))
                return "all" === e && (this._pt = 0),
                lb(this);
            for (i = this._op = this._op || [],
            "all" !== e && (o(e) && (u = {},
            ba(e, function(t) {
                return u[t] = 1
            }),
            e = u),
            e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? _(t[0]).harness : 0, o = s && s.aliases;
                if (!o)
                    return e;
                for (i in r = mt({}, e),
                o)
                    if (i in r)
                        for (n = (a = o[i].split(",")).length; n--; )
                            r[a[n]] = r[i];
                return r
            }(f, e)),
            l = f.length; l--; )
                if (~d.indexOf(f[l]))
                    for (u in n = p[l],
                    "all" === e ? (i[l] = e,
                    s = n,
                    a = {}) : (a = i[l] = i[l] || {},
                    s = e),
                    s)
                        (h = n && n[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"),
                        delete n[u]),
                        "all" !== a && (a[u] = 1);
            return this._initted && !this._pt && c && lb(this),
            this
        }
        ,
        Tween.to = function to(t, e, r) {
            return new Tween(t,e,r)
        }
        ,
        Tween.from = function from(t, e) {
            return Na(1, arguments)
        }
        ,
        Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        Tween.fromTo = function fromTo(t, e, r) {
            return Na(2, arguments)
        }
        ,
        Tween.set = function set(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new Tween(t,e)
        }
        ,
        Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }
        ,
        Tween
    }(qt);
    ja(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Vt[r] = function() {
            var t = new Nt
              , e = wt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    function cc(t, e, r) {
        return t.setAttribute(e, r)
    }
    function kc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Wt = function _setterPlain(t, e, r) {
        return t[e] = r
    }
      , Gt = function _setterFunc(t, e, r) {
        return t[e](r)
    }
      , Ht = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , Kt = function _getSetter(t, e) {
        return p(t[e]) ? Gt : r(t[e]) && t.setAttribute ? cc : Wt
    }
      , Zt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , $t = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , te = function _renderComplexString(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , ee = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , re = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; )
            n = a._next,
            a.p === i && a.modifier(t, e, r),
            a = n
    }
      , ie = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , ne = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next,
            r = i; r && r.pr > a.pr; )
                r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
            (a._next = r) ? r._prev = a : n = a,
            a = e
        }
        t._pt = i
    }
      , ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = kc,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e,
        this.s = i,
        this.c = n,
        this.p = r,
        this.r = a || Zt,
        this.d = s || this,
        this.set = o || Wt,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }),
    ot.TweenMax = ot.TweenLite = Vt,
    ot.TimelineLite = ot.TimelineMax = Nt,
    I = new Nt({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    Y.stringFilter = wb;
    var se = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = p(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: Q,
                        render: ee,
                        add: Yt,
                        kill: ie,
                        modifier: re,
                        rawVars: 0
                    }
                      , a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Kt,
                        aliases: {},
                        register: 0
                    };
                    if (Dt(),
                    t !== i) {
                        if (ft[e])
                            return;
                        ja(i, ja(na(t, n), a)),
                        mt(i.prototype, mt(n, na(t, a))),
                        ft[i.prop = e] = i,
                        t.targetTest && (ct.push(i),
                        ut[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i),
                    t.register && t.register(oe, i, ae)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Nt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get
              , a = e ? ia : ha;
            return "native" === e && (e = ""),
            i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r))
            }
            : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
                var n = r.map(function(t) {
                    return oe.quickSetter(t, e, i)
                })
                  , a = n.length;
                return function(t) {
                    for (var e = a; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e]
              , o = _(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = s ? function(t) {
                var e = new s;
                d._pt = 0,
                e.init(r, i ? t + i : t, d, 0, [r]),
                e.render(1, e),
                d._pt && ee(1, d)
            }
            : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Bt(t.ease, L.ease)),
            ma(L, t || {})
        },
        config: function config(t) {
            return ma(Y, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name
              , n = t.effect
              , e = t.plugins
              , a = t.defaults
              , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }),
            dt[i] = function(t, e, r) {
                return n(xt(t), ja(e || {}, a), r)
            }
            ,
            r && (Nt.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
            }
            )
        },
        registerEase: function registerEase(t, e) {
            zt[t] = Bt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Bt(t, e) : zt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new Nt(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming),
            I.remove(a),
            a._dp = 0,
            a._time = a._tTime = I._time,
            i = I._first; i; )
                n = i._next,
                !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay),
                i = n;
            return Ca(I, a, 0),
            a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return Z(e) ? db(e, wrap(0, e.length), t) : Oa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e
                  , n = 2 * i;
                return Z(e) ? db(e, wrapYoyo(0, e.length - 1), t) : Oa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Ya,
            random: _a,
            snap: $a,
            normalize: function normalize(t, e, r) {
                return Ot(t, e, 0, 1, r)
            },
            getUnit: Qa,
            clamp: function clamp(e, r, t) {
                return Oa(t, function(t) {
                    return Tt(e, r, t)
                })
            },
            splitColor: rb,
            toArray: xt,
            selector: function selector(r) {
                return r = xt(r)[0] || O("Invalid scope") || {},
                function(t) {
                    var e = r.current || r.nativeElement || r;
                    return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r)
                }
            },
            mapRange: Ot,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Qa(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!n) {
                    var a, s, u, h, l, f = o(e), d = {};
                    if (!0 === t && (i = 1) && (t = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (Z(e) && !Z(r)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        s = 1; s < h; s++)
                            u.push(interpolate(e[s - 1], e[s]));
                        h--,
                        n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        t = r
                    } else
                        i || (e = mt(Z(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Yt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return ee(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Oa(t, n)
            },
            shuffle: Xa
        },
        install: M,
        effects: dt,
        ticker: St,
        updateRoot: Nt.updateRoot,
        plugins: ft,
        globalTimeline: I,
        core: {
            PropTween: ae,
            globals: P,
            Tween: Vt,
            Timeline: Nt,
            Animation: qt,
            getCache: _,
            _removeLinkedListItem: ra,
            suppressOverwrites: function suppressOverwrites(t) {
                return B = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return se[t] = Vt[t]
    }),
    St.add(Nt.updateRoot),
    d = se.to({}, {
        duration: 0
    });
    function oc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
    function qc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {},
                    ba(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    n) {
                        for (r in e = {},
                        i)
                            e[r] = n(i[r]);
                        i = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--; )
                                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = oc(n, r)),
                                n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var oe = se.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a),
                this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, qc("roundProps", Za), qc("modifiers"), qc("snap", $a)) || se;
    Vt.version = Nt.version = oe.version = "3.8.0",
    l = 1,
    u() && Dt();
    function _c(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function ad(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function bd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function cd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }
    function dd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function ed(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function fd(t, e, r) {
        return t.style[e] = r
    }
    function gd(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function hd(t, e, r) {
        return t._gsap[e] = r
    }
    function id(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function jd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r,
        a.renderTransform(n, a)
    }
    function kd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r,
        a.renderTransform(n, a)
    }
    function od(t, e) {
        var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
        return r.style ? r : he.createElement(t)
    }
    function pd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && pd(t, Xe(e) || e, 1) || ""
    }
    function sd() {
        (function _windowExists() {
            return "undefined" != typeof window
        }
        )() && window.document && (ue = window,
        he = ue.document,
        le = he.documentElement,
        de = od("div") || {
            style: {}
        },
        od("div"),
        Qe = Xe(Qe),
        Ye = Qe + "Origin",
        de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        ce = !!Xe("perspective"),
        fe = 1)
    }
    function td(t) {
        var e, r = od("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (le.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = td
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
        le.removeChild(r),
        this.style.cssText = a,
        e
    }
    function ud(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function vd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = td.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === td || (r = td.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +ud(e, ["x", "cx", "x1"]) || 0,
            y: +ud(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function wd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !vd(t))
    }
    function xd(t, e) {
        if (e) {
            var r = t.style;
            e in Ee && e !== Ye && (e = Qe),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }
    function yd(t, e, r, i, n, a) {
        var s = new ae(t._pt,e,r,0,1,a ? ed : dd);
        return (t._pt = s).b = i,
        s.e = n,
        t._props.push(r),
        s
    }
    function Ad(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = de.style, f = Le.test(e), d = "svg" === t.tagName.toLowerCase(), p = (d ? "client" : "offset") + (f ? "Width" : "Height"), c = "px" === i, m = "%" === i;
        return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || c || (u = Ad(t, e, r, "px")),
        o = t.getCTM && wd(t),
        !m && "%" !== h || !Ee[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i),
        a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode,
        o && (a = (t.ownerSVGElement || {}).parentNode),
        a && a !== he && a.appendChild || (a = he.body),
        (s = a._gsap) && m && s.width && f && s.time === St.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = pd(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(de),
        n = de[p],
        a.removeChild(de),
        l.position = "absolute",
        f && m && ((s = _(a)).time = St.time,
        s.width = a[p]),
        ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p],
        ca(m ? u / n * 100 : u / 100 * n)))
    }
    function Bd(t, e, r, i) {
        var n;
        return fe || sd(),
        e in Ne && "transform" !== e && ~(e = Ne[e]).indexOf(",") && (e = e.split(",")[0]),
        Ee[e] && "transform" !== e ? (n = He(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ke(pd(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || pd(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? Ad(t, e, n, r) + r : n
    }
    function Cd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Xe(e, t, 1)
              , a = n && pd(t, n, 1);
            a && a !== r ? (e = n,
            r = a) : "borderColor" === e && (r = pd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, p, c, _, m, g, v = new ae(this._pt,t.style,e,0,1,te), y = 0, b = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = pd(t, e) || i,
        t.style[e] = r),
        wb(s = [r, i]),
        i = s[1],
        u = (r = s[0]).match(rt) || [],
        (i.match(rt) || []).length) {
            for (; o = rt.exec(i); )
                d = o[0],
                c = i.substring(y, o.index),
                l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1),
                d !== (f = u[b++] || "") && (h = parseFloat(f) || 0,
                m = f.substr((h + "").length),
                (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                p = parseFloat(d),
                _ = d.substr((p + "").length),
                y = rt.lastIndex - _.length,
                _ || (_ = _ || Y.units[e] || m,
                y === i.length && (i += _,
                v.e += _)),
                m !== _ && (h = Ad(t, e, f, _) || 0),
                v._pt = {
                    _next: v._pt,
                    p: c || 1 === b ? c : ",",
                    s: h,
                    c: g ? g * p : p - h,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? ed : dd;
        return nt.test(i) && (v.e = 0),
        this._pt = v
    }
    function Ed(t) {
        var e = t.split(" ")
          , r = e[0]
          , i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
        r = i,
        i = t),
        e[0] = Je[r] || r,
        e[1] = Je[i] || i,
        e.join(" ")
    }
    function Fd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    Ee[r] && (i = 1,
                    r = "transformOrigin" === r ? Ye : Qe),
                    xd(a, r);
            i && (xd(a, Qe),
            u && (u.svg && a.removeAttribute("transform"),
            He(a, 1),
            u.uncache = 1))
        }
    }
    function Jd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Kd(t) {
        var e = pd(t, Qe);
        return Jd(e) ? We : e.substr(7).match(et).map(ca)
    }
    function Ld(t, e) {
        var r, i, n, a, s = t._gsap || _(t), o = t.style, u = Kd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === le || s.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (a = 1,
        i = t.nextSibling,
        le.appendChild(t)),
        u = Kd(t),
        n ? o.display = n : xd(t, "display"),
        a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }
    function Md(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Ld(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, p = h.xOffset || 0, c = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], b = l[5], T = e.split(" "), w = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0;
        r ? l !== We && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o,
        w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o,
        x = u) : (w = (s = vd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w),
        x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)),
        i || !1 !== i && h.smooth ? (y = w - f,
        b = x - d,
        h.xOffset = p + (y * _ + b * g) - y,
        h.yOffset = c + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0,
        h.xOrigin = w,
        h.yOrigin = x,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[Ye] = "0px 0px",
        a && (yd(a, h, "xOrigin", f, w),
        yd(a, h, "yOrigin", d, x),
        yd(a, h, "xOffset", p, h.xOffset),
        yd(a, h, "yOffset", c, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + x)
    }
    function Pd(t, e, r) {
        var i = Qa(e);
        return ca(parseFloat(e) + parseFloat(Ad(t, "x", r + "px", i))) + i
    }
    function Wd(t, e, r, i, n, a) {
        var s, u, h = 360, l = o(n), f = parseFloat(n) * (l && ~n.indexOf("rad") ? Fe : 1), d = a ? f * a : f - i, p = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h),
        "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)),
        t._pt = u = new ae(t._pt,e,r,i,d,ad),
        u.e = p,
        u.u = "deg",
        t._props.push(r),
        u
    }
    function Xd(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function Yd(t, e, r) {
        var i, n, a, s, o, u, h, l = Xd({}, r._gsap), f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        f[Qe] = e,
        i = He(r, 1),
        xd(r, Qe),
        r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Qe],
        f[Qe] = e,
        i = He(r, 1),
        f[Qe] = a),
        Ee)
            (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qa(a) !== (h = Qa(s)) ? Ad(r, n, a, h) : parseFloat(a),
            u = parseFloat(s),
            t._pt = new ae(t._pt,i,n,o,u - o,_c),
            t._pt.u = h || 0,
            t._props.push(n));
        Xd(i, l)
    }
    var ue, he, le, fe, de, pe, ce, _e = zt.Power0, me = zt.Power1, ge = zt.Power2, ve = zt.Power3, ye = zt.Power4, be = zt.Linear, Te = zt.Quad, we = zt.Cubic, xe = zt.Quart, Oe = zt.Quint, Me = zt.Strong, ke = zt.Elastic, Ae = zt.Back, Pe = zt.SteppedEase, Ce = zt.Bounce, Se = zt.Sine, De = zt.Expo, ze = zt.Circ, Ee = {}, Fe = 180 / Math.PI, Re = Math.PI / 180, Be = Math.atan2, Ie = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, qe = /[\s,\(]\S/, Ne = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Qe = "transform", Ye = Qe + "Origin", je = "O,Moz,ms,Ms,Webkit".split(","), Xe = function _checkPropPrefix(t, e, r) {
        var i = (e || de).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t
    }, Ue = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Je = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ve = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ae(t._pt,e,r,0,0,Fd);
                return a.u = i,
                a.pr = -10,
                a.tween = n,
                t._props.push(r),
                1
            }
        }
    }, We = [1, 0, 0, 1, 0, 0], Ge = {}, He = function _parseTransform(t, e) {
        var r = t._gsap || new Lt(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, a, s, o, u, h, l, f, d, p, c, _, m, g, v, y, b, T, w, x, O, M, k, A, P, C, S, D, z, E, F, R = t.style, B = r.scaleX < 0, I = "deg", L = pd(t, Ye) || "0";
        return i = n = a = u = h = l = f = d = p = 0,
        s = o = 1,
        r.svg = !(!t.getCTM || !wd(t)),
        m = Ld(t, r.svg),
        r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"),
        Md(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
        c = r.xOrigin || 0,
        _ = r.yOrigin || 0,
        m !== We && (b = m[0],
        T = m[1],
        w = m[2],
        x = m[3],
        i = O = m[4],
        n = M = m[5],
        6 === m.length ? (s = Math.sqrt(b * b + T * T),
        o = Math.sqrt(x * x + w * w),
        u = b || T ? Be(T, b) * Fe : 0,
        (f = w || x ? Be(w, x) * Fe + u : 0) && (o *= Math.abs(Math.cos(f * Re))),
        r.svg && (i -= c - (c * b + _ * w),
        n -= _ - (c * T + _ * x))) : (F = m[6],
        z = m[7],
        C = m[8],
        S = m[9],
        D = m[10],
        E = m[11],
        i = m[12],
        n = m[13],
        a = m[14],
        h = (g = Be(F, D)) * Fe,
        g && (k = O * (v = Math.cos(-g)) + C * (y = Math.sin(-g)),
        A = M * v + S * y,
        P = F * v + D * y,
        C = O * -y + C * v,
        S = M * -y + S * v,
        D = F * -y + D * v,
        E = z * -y + E * v,
        O = k,
        M = A,
        F = P),
        l = (g = Be(-w, D)) * Fe,
        g && (v = Math.cos(-g),
        E = x * (y = Math.sin(-g)) + E * v,
        b = k = b * v - C * y,
        T = A = T * v - S * y,
        w = P = w * v - D * y),
        u = (g = Be(T, b)) * Fe,
        g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)),
        A = O * v + M * y,
        T = T * v - b * y,
        M = M * v - O * y,
        b = k,
        O = A),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        l = 180 - l),
        s = ca(Math.sqrt(b * b + T * T + w * w)),
        o = ca(Math.sqrt(M * M + F * F)),
        g = Be(O, M),
        f = 2e-4 < Math.abs(g) ? g * Fe : 0,
        p = E ? 1 / (E < 0 ? -E : E) : 0),
        r.svg && (k = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !Jd(pd(t, Qe)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = a + "px",
        r.scaleX = ca(s),
        r.scaleY = ca(o),
        r.rotation = ca(u) + I,
        r.rotationX = ca(h) + I,
        r.rotationY = ca(l) + I,
        r.skewX = f + I,
        r.skewY = d + I,
        r.transformPerspective = p + "px",
        (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[Ye] = Ke(L)),
        r.xOffset = r.yOffset = 0,
        r.force3D = Y.force3D,
        r.renderTransform = r.svg ? ir : ce ? rr : Ze,
        r.uncache = 0,
        r
    }, Ke = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ze = function _renderNon3DTransforms(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        rr(t, e)
    }, $e = "0deg", tr = "0px", er = ") ", rr = function _renderCSSTransforms(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , a = r.x
          , s = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , l = r.rotationX
          , f = r.skewX
          , d = r.skewY
          , p = r.scaleX
          , c = r.scaleY
          , _ = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , b = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== $e || h !== $e)) {
            var T, w = parseFloat(h) * Re, x = Math.sin(w), O = Math.cos(w);
            w = parseFloat(l) * Re,
            T = Math.cos(w),
            a = Pd(g, a, x * T * -v),
            s = Pd(g, s, -Math.sin(w) * -v),
            o = Pd(g, o, O * T * -v + v)
        }
        _ !== tr && (y += "perspective(" + _ + er),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er),
        u !== $e && (y += "rotate(" + u + er),
        h !== $e && (y += "rotateY(" + h + er),
        l !== $e && (y += "rotateX(" + l + er),
        f === $e && d === $e || (y += "skew(" + f + ", " + d + er),
        1 === p && 1 === c || (y += "scale(" + p + ", " + c + er),
        g.style[Qe] = y || "translate(0, 0)"
    }, ir = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, p = o.skewX, c = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, b = o.xOffset, T = o.yOffset, w = o.forceCSS, x = parseFloat(l), O = parseFloat(f);
        d = parseFloat(d),
        p = parseFloat(p),
        (c = parseFloat(c)) && (p += c = parseFloat(c),
        d += c),
        d || p ? (d *= Re,
        p *= Re,
        r = Math.cos(d) * _,
        i = Math.sin(d) * _,
        n = Math.sin(d - p) * -m,
        a = Math.cos(d - p) * m,
        p && (c *= Re,
        s = Math.tan(p - c),
        n *= s = Math.sqrt(1 + s * s),
        a *= s,
        c && (s = Math.tan(c),
        r *= s = Math.sqrt(1 + s * s),
        i *= s)),
        r = ca(r),
        i = ca(i),
        n = ca(n),
        a = ca(a)) : (r = _,
        a = m,
        i = n = 0),
        (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = Ad(g, "x", l, "px"),
        O = Ad(g, "y", f, "px")),
        (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b),
        O = ca(O + y - (v * i + y * a) + T)),
        (u || h) && (s = g.getBBox(),
        x = ca(x + u / 100 * s.width),
        O = ca(O + h / 100 * s.height)),
        s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")",
        g.setAttribute("transform", s),
        w && (g.style[Qe] = s)
    };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        Ve[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(t) {
                    return Bd(e, t, r)
                }),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
            s = {},
            o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            e.init(t, s, n)
        }
    });
    var nr, ar, sr, or = {
        name: "css",
        register: sd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, u, h, l, f, d, p, c, _, m, g, v, y, b, T = this._props, w = t.style, x = r.vars.startAt;
            for (d in fe || sd(),
            e)
                if ("autoRound" !== d && (s = e[d],
                !ft[d] || !Tb(d, e, r, i, t, n)))
                    if (l = typeof s,
                    f = Ve[d],
                    "function" === l && (l = typeof (s = s.call(r, i, t, n))),
                    "string" === l && ~s.indexOf("random(") && (s = gb(s)),
                    f)
                        f(this, t, d, s, r) && (b = 1);
                    else if ("--" === d.substr(0, 2))
                        a = (getComputedStyle(t).getPropertyValue(d) + "").trim(),
                        s += "",
                        Pt.lastIndex = 0,
                        Pt.test(a) || (p = Qa(a),
                        c = Qa(s)),
                        c ? p !== c && (a = Ad(t, d, a, c) + c) : p && (s += p),
                        this.add(w, "setProperty", a, s, i, n, 0, 0, d),
                        T.push(d);
                    else if ("undefined" !== l) {
                        if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d],
                        d in Y.units && !Qa(a) && (a += Y.units[d]),
                        o(a) && ~a.indexOf("random(") && (a = gb(a)),
                        "=" === (a + "").charAt(1) && (a = Bd(t, d))) : a = Bd(t, d),
                        h = parseFloat(a),
                        (_ = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                        u = parseFloat(s),
                        d in Ne && ("autoAlpha" === d && (1 === h && "hidden" === Bd(t, "visibility") && u && (h = 0),
                        yd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        "scale" !== d && "transform" !== d && ~(d = Ne[d]).indexOf(",") && (d = d.split(",")[0])),
                        m = d in Ee)
                            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform),
                            y = !1 !== e.smoothOrigin && v.smooth,
                            (g = this._pt = new ae(this._pt,w,Qe,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === d)
                                this._pt = new ae(this._pt,v,"scaleY",v.scaleY,(_ ? _ * u : u - v.scaleY) || 0),
                                T.push("scaleY", d),
                                d += "X";
                            else {
                                if ("transformOrigin" === d) {
                                    s = Ed(s),
                                    v.svg ? Md(t, s, 0, y, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && yd(this, v, "zOrigin", v.zOrigin, c),
                                    yd(this, w, d, Ke(a), Ke(s)));
                                    continue
                                }
                                if ("svgOrigin" === d) {
                                    Md(t, s, 1, y, 0, this);
                                    continue
                                }
                                if (d in Ge) {
                                    Wd(this, v, d, h, s, _);
                                    continue
                                }
                                if ("smoothOrigin" === d) {
                                    yd(this, v, "smooth", v.smooth, s);
                                    continue
                                }
                                if ("force3D" === d) {
                                    v[d] = s;
                                    continue
                                }
                                if ("transform" === d) {
                                    Yd(this, s, t);
                                    continue
                                }
                            }
                        else
                            d in w || (d = Xe(d) || d);
                        if (m || (u || 0 === u) && (h || 0 === h) && !qe.test(s) && d in w)
                            u = u || 0,
                            (p = (a + "").substr((h + "").length)) !== (c = Qa(s) || (d in Y.units ? Y.units[d] : p)) && (h = Ad(t, d, a, c)),
                            this._pt = new ae(this._pt,m ? v : w,d,h,_ ? _ * u : u - h,m || "px" !== c && "zIndex" !== d || !1 === e.autoRound ? _c : cd),
                            this._pt.u = c || 0,
                            p !== c && "%" !== c && (this._pt.b = a,
                            this._pt.r = bd);
                        else if (d in w)
                            Cd.call(this, t, d, a, s);
                        else {
                            if (!(d in t)) {
                                N(d, s);
                                continue
                            }
                            this.add(t, d, a || t[d], s, i, n)
                        }
                        T.push(d)
                    }
            b && ne(this)
        },
        get: Bd,
        aliases: Ne,
        getSetter: function getSetter(t, e, i) {
            var n = Ne[e];
            return n && n.indexOf(",") < 0 && (e = n),
            e in Ee && e !== Ye && (t._gsap.x || Bd(t, "x")) ? i && pe === i ? "scale" === e ? id : hd : (pe = i || {}) && ("scale" === e ? jd : kd) : t.style && !r(t.style[e]) ? fd : ~e.indexOf("-") ? gd : Kt(t, e)
        },
        core: {
            _removeProperty: xd,
            _getMatrix: Ld
        }
    };
    oe.utils.checkPrefix = Xe,
    sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Ee[t] = 1
    }),
    ba(ar, function(t) {
        Y.units[t] = "deg",
        Ge[t] = 1
    }),
    Ne[sr[13]] = nr + "," + ar,
    ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Ne[e[1]] = sr[e[0]]
    }),
    ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px"
    }),
    oe.registerPlugin(or);
    var ur = oe.registerPlugin(or) || oe
      , hr = ur.core.Tween;
    e.Back = Ae,
    e.Bounce = Ce,
    e.CSSPlugin = or,
    e.Circ = ze,
    e.Cubic = we,
    e.Elastic = ke,
    e.Expo = De,
    e.Linear = be,
    e.Power0 = _e,
    e.Power1 = me,
    e.Power2 = ge,
    e.Power3 = ve,
    e.Power4 = ye,
    e.Quad = Te,
    e.Quart = xe,
    e.Quint = Oe,
    e.Sine = Se,
    e.SteppedEase = Pe,
    e.Strong = Me,
    e.TimelineLite = Nt,
    e.TimelineMax = Nt,
    e.TweenLite = Vt,
    e.TweenMax = hr,
    e.default = ur,
    e.gsap = ur;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
