!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(b, e) {
    "use strict";
    function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
      , n = Object.getPrototypeOf
      , a = t.slice
      , y = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , l = t.push
      , o = t.indexOf
      , i = {}
      , r = i.toString
      , v = i.hasOwnProperty
      , s = v.toString
      , u = s.call(Object)
      , w = {}
      , S = b.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function k(e, t, n) {
        var i, o, r = (n = n || S).createElement("script");
        if (r.text = e,
        t)
            for (i in c)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }
    var d = "3.5.0"
      , T = function(e, t) {
        return new T.fn.init(e,t)
    };
    function f(e) {
        var t = !!e && "length"in e && e.length
          , n = h(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: d,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = T.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    T.extend = T.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof r && (l = r,
        r = arguments[s] || {},
        s++),
        "object" == typeof r || m(r) || (r = {}),
        s === a && (r = this,
        s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && r !== n && (l && n && (T.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t],
                    o = i && !Array.isArray(o) ? [] : i || T.isPlainObject(o) ? o : {},
                    i = !1,
                    r[t] = T.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }
    ,
    T.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e)) && (!(e = n(e)) || "function" == typeof (e = v.call(e, "constructor") && e.constructor) && s.call(e) === u)
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            k(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (f(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (f(Object(e)) ? T.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, s = [];
            if (f(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && s.push(o);
            return y(s)
        },
        guid: 1,
        support: w
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
    T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function d(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function f(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function i() {
            b()
        }
        var e, p, k, r, o, h, m, g, x, l, u, b, S, s, T, y, a, c, v, _ = "sizzle" + +new Date, w = n.document, C = 0, M = 0, D = le(), O = le(), A = le(), E = le(), P = function(e, t) {
            return e === t && (u = !0),
            0
        }, $ = {}.hasOwnProperty, t = [], H = t.pop, L = t.push, I = t.push, j = t.slice, N = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", W = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", q = "\\[" + W + "*(" + z + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + W + "*\\]", R = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", F = new RegExp(W + "+","g"), U = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$","g"), B = new RegExp("^" + W + "*," + W + "*"), G = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"), V = new RegExp(W + "|>"), Z = new RegExp(R), X = new RegExp("^" + z + "$"), Q = {
            ID: new RegExp("^#(" + z + ")"),
            CLASS: new RegExp("^\\.(" + z + ")"),
            TAG: new RegExp("^(" + z + "|[*])"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Y + ")$","i"),
            needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)","i")
        }, K = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, ee = /^h\d$/i, te = /^[^{]+\{\s*\[native \w/, ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ie = /[+~]/, oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])","g"), re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = ve(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            I.apply(t = j.call(w.childNodes), w.childNodes),
            t[w.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: t.length ? function(e, t) {
                    L.apply(e, j.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function ae(t, e, n, i) {
            var o, r, s, a, l, u, c = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && (b(e),
            e = e || S,
            T)) {
                if (11 !== d && (a = ne.exec(t)))
                    if (u = a[1]) {
                        if (9 === d) {
                            if (!(r = e.getElementById(u)))
                                return n;
                            if (r.id === u)
                                return n.push(r),
                                n
                        } else if (c && (r = c.getElementById(u)) && v(e, r) && r.id === u)
                            return n.push(r),
                            n
                    } else {
                        if (a[2])
                            return I.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((u = a[3]) && p.getElementsByClassName && e.getElementsByClassName)
                            return I.apply(n, e.getElementsByClassName(u)),
                            n
                    }
                if (p.qsa && !E[t + " "] && (!y || !y.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t,
                    c = e,
                    1 === d && (V.test(t) || G.test(t))) {
                        for ((c = ie.test(t) && me(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, f) : e.setAttribute("id", s = _)),
                        o = (l = h(t)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + ye(l[o]);
                        u = l.join(",")
                    }
                    try {
                        return I.apply(n, c.querySelectorAll(u)),
                        n
                    } catch (e) {
                        E(t, !0)
                    } finally {
                        s === _ && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(U, "$1"), e, n, i)
        }
        function le() {
            var n = [];
            function i(e, t) {
                return n.push(e + " ") > k.cacheLength && delete i[n.shift()],
                i[e + " "] = t
            }
            return i
        }
        function ue(e) {
            return e[_] = !0,
            e
        }
        function ce(e) {
            var t = S.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                k.attrHandle[n[i]] = t
        }
        function fe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(s) {
            return ue(function(r) {
                return r = +r,
                ue(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--; )
                        e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = ae.support = {},
        o = ae.isXML = function(e) {
            var t = e.namespaceURI
              , e = (e.ownerDocument || e).documentElement;
            return !K.test(t || e && e.nodeName || "HTML")
        }
        ,
        b = ae.setDocument = function(e) {
            var t, e = e ? e.ownerDocument || e : w;
            return e != S && 9 === e.nodeType && e.documentElement && (s = (S = e).documentElement,
            T = !o(S),
            w != S && (t = S.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)),
            p.scope = ce(function(e) {
                return s.appendChild(e).appendChild(S.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            p.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = ce(function(e) {
                return e.appendChild(S.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = te.test(S.getElementsByClassName),
            p.getById = ce(function(e) {
                return s.appendChild(e).id = _,
                !S.getElementsByName || !S.getElementsByName(_).length
            }),
            p.getById ? (k.filter.ID = function(e) {
                var t = e.replace(oe, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            k.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }
            ) : (k.filter.ID = function(e) {
                var t = e.replace(oe, d);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            k.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            k.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e)
                    return r;
                for (; n = r[o++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            k.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && T)
                    return t.getElementsByClassName(e)
            }
            ,
            a = [],
            y = [],
            (p.qsa = te.test(S.querySelectorAll)) && (ce(function(e) {
                var t;
                s.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + W + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + W + "*(?:value|" + Y + ")"),
                e.querySelectorAll("[id~=" + _ + "-]").length || y.push("~="),
                (t = S.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || y.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + _ + "+*").length || y.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                y.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = S.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + W + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (p.matchesSelector = te.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                p.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                a.push("!=", R)
            }),
            y = y.length && new RegExp(y.join("|")),
            a = a.length && new RegExp(a.join("|")),
            t = te.test(s.compareDocumentPosition),
            v = t || te.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            P = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == S || e.ownerDocument == w && v(w, e) ? -1 : t == S || t.ownerDocument == w && v(w, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r)
                    return e == S ? -1 : t == S ? 1 : o ? -1 : r ? 1 : l ? N(l, e) - N(l, t) : 0;
                if (o === r)
                    return fe(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? fe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
            }
            ),
            S
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if (b(e),
            p.matchesSelector && T && !E[t + " "] && (!a || !a.test(t)) && (!y || !y.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    E(t, !0)
                }
            return 0 < ae(t, S, null, [e]).length
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) != S && b(e),
            v(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) != S && b(e);
            var n = k.attrHandle[t.toLowerCase()]
              , n = n && $.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== n ? n : p.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(re, f)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (u = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(P),
            u) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        r = ae.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (k = ae.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(oe, d),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(oe, d),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Z.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(oe, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = D[e + " "];
                    return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && D(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(e) {
                        e = ae.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(F, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var y = "nth" !== h.slice(0, 3)
                      , v = "last" !== h.slice(-4)
                      , w = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, o, r, s, a, l, u = y != v ? "nextSibling" : "previousSibling", c = e.parentNode, d = w && e.nodeName.toLowerCase(), f = !n && !w, p = !1;
                        if (c) {
                            if (y) {
                                for (; u; ) {
                                    for (s = e; s = s[u]; )
                                        if (w ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = u = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? c.firstChild : c.lastChild],
                            v && f) {
                                for (p = (a = (i = (o = (r = (s = c)[_] || (s[_] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === C && i[1]) && i[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        o[h] = [C, a, p];
                                        break
                                    }
                            } else if (!1 === (p = f ? a = (i = (o = (r = (s = e)[_] || (s[_] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === C && i[1] : p))
                                for (; (s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((w ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (f && ((o = (r = s[_] || (s[_] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [C, p]),
                                s !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[_] ? s(r) : 1 < s.length ? (t = [e, e, "", r],
                    k.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                        for (var n, i = s(e, r), o = i.length; o--; )
                            e[n = N(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var i = []
                      , o = []
                      , a = m(e.replace(U, "$1"));
                    return a[_] ? ue(function(e, t, n, i) {
                        for (var o, r = a(e, null, i, []), s = e.length; s--; )
                            (o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, o),
                        i[0] = null,
                        !o.pop()
                    }
                }),
                has: ue(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length
                    }
                }),
                contains: ue(function(t) {
                    return t = t.replace(oe, d),
                    function(e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                }),
                lang: ue(function(n) {
                    return X.test(n || "") || ae.error("unsupported lang: " + n),
                    n = n.replace(oe, d).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return ee.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = k.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            k.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ge() {}
        function ye(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ve(s, e, t) {
            var a = e.dir
              , l = e.next
              , u = l || a
              , c = t && "parentNode" === u
              , d = M++;
            return e.first ? function(e, t, n) {
                for (; e = e[a]; )
                    if (1 === e.nodeType || c)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, o, r = [C, d];
                if (n) {
                    for (; e = e[a]; )
                        if ((1 === e.nodeType || c) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[a]; )
                        if (1 === e.nodeType || c)
                            if (i = (o = e[_] || (e[_] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[a] || e;
                            else {
                                if ((o = i[u]) && o[0] === C && o[1] === d)
                                    return r[2] = o[2];
                                if ((i[u] = r)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--; )
                    if (!o[i](e, t, n))
                        return !1;
                return !0
            }
            : o[0]
        }
        function ke(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                u && t.push(a)));
            return s
        }
        function xe(p, h, m, g, y, e) {
            return g && !g[_] && (g = xe(g)),
            y && !y[_] && (y = xe(y, e)),
            ue(function(e, t, n, i) {
                var o, r, s, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        ae(e, t[i], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), d = !p || !e && h ? c : ke(c, a, p, n, i), f = m ? y || (e ? p : u || g) ? [] : t : d;
                if (m && m(d, f, n, i),
                g)
                    for (o = ke(f, l),
                    g(o, [], n, i),
                    r = o.length; r--; )
                        (s = o[r]) && (f[l[r]] = !(d[l[r]] = s));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (o = [],
                            r = f.length; r--; )
                                (s = f[r]) && o.push(d[r] = s);
                            y(null, f = [], o, i)
                        }
                        for (r = f.length; r--; )
                            (s = f[r]) && -1 < (o = y ? N(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else
                    f = ke(f === t ? f.splice(u, f.length) : f),
                    y ? y(null, t, f, i) : I.apply(t, f)
            })
        }
        function be(g, y) {
            function e(e, t, n, i, o) {
                var r, s, a, l = 0, u = "0", c = e && [], d = [], f = x, p = e || w && k.find.TAG("*", o), h = C += null == f ? 1 : Math.random() || .1, m = p.length;
                for (o && (x = t == S || t || o); u !== m && null != (r = p[u]); u++) {
                    if (w && r) {
                        for (s = 0,
                        t || r.ownerDocument == S || (b(r),
                        n = !T); a = g[s++]; )
                            if (a(r, t || S, n)) {
                                i.push(r);
                                break
                            }
                        o && (C = h)
                    }
                    v && ((r = !a && r) && l--,
                    e && c.push(r))
                }
                if (l += u,
                v && u !== l) {
                    for (s = 0; a = y[s++]; )
                        a(c, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || d[u] || (d[u] = H.call(i));
                        d = ke(d)
                    }
                    I.apply(i, d),
                    o && !e && 0 < d.length && 1 < l + y.length && ae.uniqueSort(i)
                }
                return o && (C = h,
                x = f),
                c
            }
            var v = 0 < y.length
              , w = 0 < g.length;
            return v ? ue(e) : e
        }
        return ge.prototype = k.filters = k.pseudos,
        k.setFilters = new ge,
        h = ae.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, u = O[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (s = e,
            a = [],
            l = k.preFilter; s; ) {
                for (r in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(o = [])),
                n = !1,
                (i = G.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(U, " ")
                }),
                s = s.slice(n.length)),
                k.filter)
                    !(i = Q[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: r,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? ae.error(e) : O(e, a).slice(0)
        }
        ,
        m = ae.compile = function(e, t) {
            var n, i = [], o = [], r = A[e + " "];
            if (!r) {
                for (n = (t = t || h(e)).length; n--; )
                    ((r = function e(t) {
                        for (var i, n, o, r = t.length, s = k.relative[t[0].type], a = s || k.relative[" "], l = s ? 1 : 0, u = ve(function(e) {
                            return e === i
                        }, a, !0), c = ve(function(e) {
                            return -1 < N(i, e)
                        }, a, !0), d = [function(e, t, n) {
                            return n = !s && (n || t !== x) || ((i = t).nodeType ? u : c)(e, t, n),
                            i = null,
                            n
                        }
                        ]; l < r; l++)
                            if (n = k.relative[t[l].type])
                                d = [ve(we(d), n)];
                            else {
                                if ((n = k.filter[t[l].type].apply(null, t[l].matches))[_]) {
                                    for (o = ++l; o < r && !k.relative[t[o].type]; o++)
                                        ;
                                    return xe(1 < l && we(d), 1 < l && ye(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(U, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && ye(t))
                                }
                                d.push(n)
                            }
                        return we(d)
                    }(t[n]))[_] ? i : o).push(r);
                (r = A(e, be(o, i))).selector = e
            }
            return r
        }
        ,
        g = ae.select = function(e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e, c = !i && h(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && T && k.relative[r[1].type]) {
                    if (!(t = (k.find.ID(s.matches[0].replace(oe, d), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
                !k.relative[a = s.type]); )
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(oe, d), ie.test(r[0].type) && me(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        !(e = i.length && ye(r)))
                            return I.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || m(e, c))(i, t, !T, n, !t || ie.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = _.split("").sort(P).join("") === _,
        p.detectDuplicates = !!u,
        b(),
        p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(Y, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }),
        ae
    }(b);
    T.find = p,
    T.expr = p.selectors,
    T.expr[":"] = T.expr.pseudos,
    T.uniqueSort = T.unique = p.uniqueSort,
    T.text = p.getText,
    T.isXMLDoc = p.isXML,
    T.contains = p.contains,
    T.escapeSelector = p.escape;
    function x(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && T(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function _(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var C = T.expr.match.needsContext;
    function M(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function O(e, n, i) {
        return m(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    T.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(T(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (T.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                T.find(e, o[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && C.test(e) ? T(e) : e || [], !1).length
        }
    });
    var A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        if (!e)
            return this;
        if (n = n || E,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t)
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t,
            T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
            D.test(i[1]) && T.isPlainObject(t))
                for (var i in t)
                    m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = S.getElementById(i[2])) && (this[0] = e,
        this.length = 1),
        this
    }
    ).prototype = T.fn;
    var E = T(S)
      , P = /^(?:parents|prev(?:Until|All))/
      , $ = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && T(e);
            if (!C.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? T.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(T(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    T.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (M(e, "template") && (e = e.content || e),
            T.merge([], e.childNodes))
        }
    }, function(i, o) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = T.filter(t, n)),
            1 < this.length && ($[i] || T.uniqueSort(n),
            P.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function I(e) {
        return e
    }
    function j(e) {
        throw e
    }
    function N(e, t, n, i) {
        var o;
        try {
            e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        T.each(e.match(L) || [], function(e, t) {
            n[t] = !0
        }),
        n) : T.extend({}, i);
        function o() {
            for (a = a || i.once,
            s = r = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length,
                    t = !1);
            i.memory || (t = !1),
            r = !1,
            a && (l = t ? [] : "")
        }
        var r, t, s, a, l = [], u = [], c = -1, d = {
            add: function() {
                return l && (t && !r && (c = l.length - 1,
                u.push(t)),
                function n(e) {
                    T.each(e, function(e, t) {
                        m(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments),
                t && !r && o()),
                this
            },
            remove: function() {
                return T.each(arguments, function(e, t) {
                    for (var n; -1 < (n = T.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < T.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = u = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = u = [],
                t || r || (l = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                r || o()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return d
    }
    ,
    T.extend({
        Deferred: function(e) {
            var r = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , s = {
                state: function() {
                    return o
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return T.Deferred(function(i) {
                        T.each(r, function(e, t) {
                            var n = m(o[t[4]]) && o[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function u(o, r, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = s.apply(n, i)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? a ? t.call(e, u(l, r, I, a), u(l, r, j, a)) : (l++,
                                    t.call(e, u(l, r, I, a), u(l, r, j, a), u(l, r, I, r.notifyWith))) : (s !== I && (n = void 0,
                                    i = [e]),
                                    (a || r.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= o + 1 && (s !== j && (n = void 0,
                                    i = [e]),
                                    r.rejectWith(n, i))
                                }
                            }
                            ;
                            o ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()),
                            b.setTimeout(t))
                        }
                    }
                    return T.Deferred(function(e) {
                        r[0][3].add(u(0, e, m(i) ? i : I, e.notifyWith)),
                        r[1][3].add(u(0, e, m(t) ? t : I)),
                        r[2][3].add(u(0, e, m(n) ? n : j))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? T.extend(e, s) : s
                }
            }
              , a = {};
            return T.each(r, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    r[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length
              , i = n
              , o = Array(i)
              , r = a.call(arguments)
              , s = T.Deferred();
            if (n <= 1 && (N(e, s.done(t(i)).resolve, s.reject, !n),
            "pending" === s.state() || m(r[i] && r[i].then)))
                return s.then();
            for (; i--; )
                N(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        b.console && b.console.warn && e && Y.test(e.name) && b.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    T.readyException = function(e) {
        b.setTimeout(function() {
            throw e
        })
    }
    ;
    var W = T.Deferred();
    function z() {
        S.removeEventListener("DOMContentLoaded", z),
        b.removeEventListener("load", z),
        T.ready()
    }
    T.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            T.readyException(e)
        }),
        this
    }
    ,
    T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || W.resolveWith(S, [T])
        }
    }),
    T.ready.then = W.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? b.setTimeout(T.ready) : (S.addEventListener("DOMContentLoaded", z),
    b.addEventListener("load", z));
    function q(e, t, n, i, o, r, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === h(n))
            for (a in o = !0,
            n)
                q(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        m(i) || (s = !0),
        t = u ? s ? (t.call(e, i),
        null) : (u = t,
        function(e, t, n) {
            return u.call(T(e), n)
        }
        ) : t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    }
    var R = /^-ms-/
      , F = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function B(e) {
        return e.replace(R, "ms-").replace(F, U)
    }
    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function V() {
        this.expando = T.expando + V.uid++
    }
    V.uid = 1,
    V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = Object.create(null),
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[B(t)] = n;
            else
                for (i in t)
                    o[B(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][B(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(B) : (t = B(t))in i ? [t] : t.match(L) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !T.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !T.isEmptyObject(e)
        }
    };
    var Z = new V
      , X = new V
      , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                X.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return X.hasData(e) || Z.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return Z.access(e, t, n)
        },
        _removeData: function(e, t) {
            Z.remove(e, t)
        }
    }),
    T.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0], s = r && r.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    X.set(this, n)
                }) : q(this, function(e) {
                    var t;
                    return r && void 0 === e ? void 0 !== (t = X.get(r, n)) || void 0 !== (t = J(r, n)) ? t : void 0 : void this.each(function() {
                        X.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = X.get(r),
            1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = B(i.slice(5)),
                    J(r, i, o[i]));
                Z.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }),
    T.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = Z.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = Z.access(e, t, T.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = T._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                T.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Z.get(e, n) || Z.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    Z.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1, r = T.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = Z.get(s[a], e + "queueHooks")) && i.empty && (o++,
                i.empty.add(n));
            return n(),
            r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = S.documentElement
      , oe = function(e) {
        return T.contains(e.ownerDocument, e)
    }
      , re = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    }
    );
    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === T.css(e, "display")
    }
    function ae(e, t, n, i) {
        var o, r, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return T.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && te.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; s--; )
                T.style(e, t, c + u),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                c /= r;
            T.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = o)),
        o
    }
    var le = {};
    function ue(e, t) {
        for (var n, i, o, r, s, a = [], l = 0, u = e.length; l < u; l++)
            (i = e[l]).style && (n = i.style.display,
            t ? ("none" === n && (a[l] = Z.get(i, "display") || null,
            a[l] || (i.style.display = "")),
            "" === i.style.display && se(i) && (a[l] = (s = r = void 0,
            r = (o = i).ownerDocument,
            s = o.nodeName,
            (o = le[s]) || (r = r.body.appendChild(r.createElement(s)),
            o = T.css(r, "display"),
            r.parentNode.removeChild(r),
            le[s] = o = "none" === o ? "block" : o)))) : "none" !== n && (a[l] = "none",
            Z.set(i, "display", n)));
        for (l = 0; l < u; l++)
            null != a[l] && (e[l].style.display = a[l]);
        return e
    }
    T.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , fe = /^$|^module$|\/(?:java|ecma)script/i;
    d = S.createDocumentFragment().appendChild(S.createElement("div")),
    (p = S.createElement("input")).setAttribute("type", "radio"),
    p.setAttribute("checked", "checked"),
    p.setAttribute("name", "t"),
    d.appendChild(p),
    w.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked,
    d.innerHTML = "<textarea>x</textarea>",
    w.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue,
    d.innerHTML = "<option></option>",
    w.option = !!d.lastChild;
    var pe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && M(e, t) ? T.merge([e], n) : n
    }
    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
    }
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead,
    pe.th = pe.td,
    w.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;
    function ye(e, t, n, i, o) {
        for (var r, s, a, l, u, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === h(r))
                    T.merge(d, r.nodeType ? [r] : r);
                else if (ge.test(r)) {
                    for (s = s || c.appendChild(t.createElement("div")),
                    a = (de.exec(r) || ["", ""])[1].toLowerCase(),
                    a = pe[a] || pe._default,
                    s.innerHTML = a[1] + T.htmlPrefilter(r) + a[2],
                    u = a[0]; u--; )
                        s = s.lastChild;
                    T.merge(d, s.childNodes),
                    (s = c.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(r));
        for (c.textContent = "",
        f = 0; r = d[f++]; )
            if (i && -1 < T.inArray(r, i))
                o && o.push(r);
            else if (l = oe(r),
            s = he(c.appendChild(r), "script"),
            l && me(s),
            n)
                for (u = 0; r = s[u++]; )
                    fe.test(r.type || "") && n.push(r);
        return c
    }
    var ve = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ke = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0
    }
    function be() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Te(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Te(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = be;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        (o = function(e) {
            return T().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = T.guid++)),
        e.each(function() {
            T.event.add(this, t, o, i, n)
        })
    }
    function _e(e, o, r) {
        r ? (Z.set(e, o, !1),
        T.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = Z.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)
                        (T.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments),
                    Z.set(this, o, i),
                    t = r(this, o),
                    this[o](),
                    i !== (n = Z.get(this, o)) || t ? Z.set(this, o, !1) : n = {},
                    i !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    i.length && (Z.set(this, o, {
                        value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Z.get(e, o) && T.event.add(e, o, xe)
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, u, c, d, f, p, h = Z.get(t);
            if (G(t))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && T.find.matchesSelector(ie, o),
                n.guid || (n.guid = T.guid++),
                (a = h.events) || (a = h.events = Object.create(null)),
                (s = h.handle) || (s = h.handle = function(e) {
                    return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(L) || [""]).length; l--; )
                    d = p = (u = ke.exec(e[l]) || [])[1],
                    f = (u[2] || "").split(".").sort(),
                    d && (c = T.event.special[d] || {},
                    d = (o ? c.delegateType : c.bindType) || d,
                    c = T.event.special[d] || {},
                    u = T.extend({
                        type: d,
                        origType: p,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && T.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r),
                    (p = a[d]) || ((p = a[d] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(d, s)),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    T.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, f, p, h, m, g = Z.hasData(e) && Z.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(L) || [""]).length; u--; )
                    if (p = m = (a = ke.exec(t[u]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (d = T.event.special[p] || {},
                        f = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = f.length; r--; )
                            c = f[r],
                            !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || T.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            T.event.remove(e, p + t[u], n, i, !0);
                T.isEmptyObject(l) && Z.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = new Array(arguments.length), a = T.event.fix(e), l = (Z.get(this, "events") || Object.create(null))[a.type] || [], e = T.event.special[a.type] || {};
            for (s[0] = a,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (a.delegateTarget = this,
            !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (r = T.event.handlers.call(this, a, l),
                t = 0; (i = r[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (o = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(),
                        a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < T(o, this).index(u) : T.find(o, this, null, [u]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this,
            l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && M(e, "input") && _e(e, "click", xe),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && M(e, "input") && _e(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return ce.test(e.type) && e.click && M(e, "input") && Z.get(e, "click") || M(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    T.Event = function(e, t) {
        if (!(this instanceof T.Event))
            return new T.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : be,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && T.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[T.expando] = !0
    }
    ,
    T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp),
    T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return _e(this, e, Se),
                !1
            },
            trigger: function() {
                return _e(this, e),
                !0
            },
            delegateType: t
        }
    }),
    T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        T.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    T.fn.extend({
        on: function(e, t, n, i) {
            return Te(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = be),
                this.each(function() {
                    T.event.remove(this, e, n, t)
                });
            for (o in e)
                this.off(o, t, e[o]);
            return this
        }
    });
    var Ce = /<script|<style|<link/i
      , Me = /checked\s*(?:[^=]|=\s*.checked.)/i
      , De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }
    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ee(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (Z.hasData(e) && (r = Z.get(e).events))
                for (o in Z.remove(t, "handle events"),
                r)
                    for (n = 0,
                    i = r[o].length; n < i; n++)
                        T.event.add(t, o, r[o][n]);
            X.hasData(e) && (e = X.access(e),
            e = T.extend({}, e),
            X.set(t, e))
        }
    }
    function $e(n, i, o, r) {
        i = y(i);
        var e, t, s, a, l, u, c = 0, d = n.length, f = d - 1, p = i[0], h = m(p);
        if (h || 1 < d && "string" == typeof p && !w.checkClone && Me.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())),
                $e(t, i, o, r)
            });
        if (d && (t = (e = ye(i, n[0].ownerDocument, !1, n, r)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || r)) {
            for (a = (s = T.map(he(e, "script"), Ae)).length; c < d; c++)
                l = e,
                c !== f && (l = T.clone(l, !0, !0),
                a && T.merge(s, he(l, "script"))),
                o.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                T.map(s, Ee),
                c = 0; c < a; c++)
                    l = s[c],
                    fe.test(l.type || "") && !Z.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : k(l.textContent.replace(De, ""), l, u))
        }
        return n
    }
    function He(e, t, n) {
        for (var i, o = t ? T.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || T.cleanData(he(i)),
            i.parentNode && (n && oe(i) && me(he(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, u, c = e.cloneNode(!0), d = oe(e);
            if (!(w.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (s = he(c),
                i = 0,
                o = (r = he(e)).length; i < o; i++)
                    a = r[i],
                    l = s[i],
                    u = void 0,
                    "input" === (u = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || he(e),
                    s = s || he(c),
                    i = 0,
                    o = r.length; i < o; i++)
                        Pe(r[i], s[i]);
                else
                    Pe(e, c);
            return 0 < (s = he(c, "script")).length && me(s, !d && he(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, o = T.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (G(n)) {
                    if (t = n[Z.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[Z.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }),
    T.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Oe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (T.cleanData(he(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !pe[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (T.cleanData(he(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(he(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), o = i.length - 1, r = 0; r <= o; r++)
                t = r === o ? this : this.clone(!0),
                T(i[r])[s](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Le(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? b : t).getComputedStyle(e)
    }
    function Ie(e, t, n) {
        var i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in n = n.call(e),
        t)
            e.style[i] = o[i];
        return n
    }
    var je, Ne, Ye, We, ze, qe, Re, Fe, Ue = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i"), Be = new RegExp(ne.join("|"),"i");
    function Ge() {
        var e;
        Fe && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        ie.appendChild(Re).appendChild(Fe),
        e = b.getComputedStyle(Fe),
        je = "1%" !== e.top,
        qe = 12 === Ve(e.marginLeft),
        Fe.style.right = "60%",
        We = 36 === Ve(e.right),
        Ne = 36 === Ve(e.width),
        Fe.style.position = "absolute",
        Ye = 12 === Ve(Fe.offsetWidth / 3),
        ie.removeChild(Re),
        Fe = null)
    }
    function Ve(e) {
        return Math.round(parseFloat(e))
    }
    function Ze(e, t, n) {
        var i, o, r = e.style;
        return (n = n || Le(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = T.style(e, t)),
        !w.pixelBoxStyles() && Ue.test(o) && Be.test(t) && (i = r.width,
        e = r.minWidth,
        t = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = o,
        o = n.width,
        r.width = i,
        r.minWidth = e,
        r.maxWidth = t)),
        void 0 !== o ? o + "" : o
    }
    function Xe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Re = S.createElement("div"),
    (Fe = S.createElement("div")).style && (Fe.style.backgroundClip = "content-box",
    Fe.cloneNode(!0).style.backgroundClip = "",
    w.clearCloneStyle = "content-box" === Fe.style.backgroundClip,
    T.extend(w, {
        boxSizingReliable: function() {
            return Ge(),
            Ne
        },
        pixelBoxStyles: function() {
            return Ge(),
            We
        },
        pixelPosition: function() {
            return Ge(),
            je
        },
        reliableMarginLeft: function() {
            return Ge(),
            qe
        },
        scrollboxSize: function() {
            return Ge(),
            Ye
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == ze && (e = S.createElement("table"),
            n = S.createElement("tr"),
            t = S.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px",
            n.style.height = "1px",
            t.style.height = "9px",
            ie.appendChild(e).appendChild(n).appendChild(t),
            n = b.getComputedStyle(n),
            ze = 3 < parseInt(n.height),
            ie.removeChild(e)),
            ze
        }
    }));
    var Qe = ["Webkit", "Moz", "ms"]
      , Ke = S.createElement("div").style
      , Je = {};
    function et(e) {
        var t = T.cssProps[e] || Je[e];
        return t || (e in Ke ? e : Je[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; )
                if ((e = Qe[n] + t)in Ke)
                    return e
        }(e) || e)
    }
    var tt = /^(none|table(?!-c[ea]).+)/
      , nt = /^--/
      , it = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ot = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function st(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += T.css(e, n + ne[s], !0, o)),
            i ? ("content" === n && (l -= T.css(e, "padding" + ne[s], !0, o)),
            "margin" !== n && (l -= T.css(e, "border" + ne[s] + "Width", !0, o))) : (l += T.css(e, "padding" + ne[s], !0, o),
            "padding" !== n ? l += T.css(e, "border" + ne[s] + "Width", !0, o) : a += T.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0),
        l
    }
    function at(e, t, n) {
        var i = Le(e)
          , o = (!w.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i)
          , r = o
          , s = Ze(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ue.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!w.boxSizingReliable() && o || !w.reliableTrDimensions() && M(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, i),
        (r = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + st(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }
    function lt(e, t, n, i, o) {
        return new lt.prototype.init(e,t,n,i,o)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ze(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = B(t), l = nt.test(t), u = e.style;
                if (l || (t = et(a)),
                s = T.cssHooks[t] || T.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : u[t];
                "string" === (r = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (T.cssNumber[a] ? "" : "px")),
                w.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = B(t);
            return nt.test(t) || (t = et(r)),
            "normal" === (o = void 0 === (o = (r = T.cssHooks[t] || T.cssHooks[r]) && "get"in r ? r.get(e, !0, n) : o) ? Ze(e, t, i) : o) && t in ot && (o = ot[t]),
            "" === n || n ? (t = parseFloat(o),
            !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }),
    T.each(["height", "width"], function(e, a) {
        T.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !tt.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, a, n) : Ie(e, it, function() {
                        return at(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var i, o = Le(e), r = !w.scrollboxSize() && "absolute" === o.position, s = (r || n) && "border-box" === T.css(e, "boxSizing", !1, o), n = n ? st(e, a, n, s, o) : 0;
                return s && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - st(e, a, "border", !1, o) - .5)),
                n && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t,
                t = T.css(e, a)),
                rt(0, t, n)
            }
        }
    }),
    T.cssHooks.marginLeft = Xe(w.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        T.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== o && (T.cssHooks[o + r].set = rt)
    }),
    T.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Le(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = T.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((T.Tween = lt).prototype = {
        constructor: lt,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || T.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = lt.propHooks[this.prop];
            return (e && e.get ? e : lt.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = lt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : lt.propHooks._default).set(this),
            this
        }
    }).init.prototype = lt.prototype,
    (lt.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = T.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = lt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    T.fx = lt.prototype.init,
    T.fx.step = {};
    var ut, ct, dt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function pt() {
        ct && (!1 === S.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(pt) : b.setTimeout(pt, T.fx.interval),
        T.fx.tick())
    }
    function ht() {
        return b.setTimeout(function() {
            ut = void 0
        }),
        ut = Date.now()
    }
    function mt(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function gt(e, t, n) {
        for (var i, o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function yt(o, e, t) {
        var n, r, i = 0, s = yt.prefilters.length, a = T.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = ut || ht(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++)
                u.tweens[n].run(t);
            return a.notifyWith(o, [u, t, e]),
            t < 1 && i ? e : (i || a.notifyWith(o, [u, 1, 0]),
            a.resolveWith(o, [u]),
            !1)
        }, u = a.promise({
            elem: o,
            props: T.extend({}, e),
            opts: T.extend(!0, {
                specialEasing: {},
                easing: T.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ut || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(e),
                e
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? (a.notifyWith(o, [u, 1, 0]),
                a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]),
                this
            }
        }), c = u.props;
        for (!function(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (o = t[i = B(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (s = T.cssHooks[i]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(c, u.opts.specialEasing); i < s; i++)
            if (n = yt.prefilters[i].call(u, o, c, u.opts))
                return m(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                n;
        return T.map(c, gt, u),
        m(u.opts.start) && u.opts.start.call(o, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        T.fx.timer(T.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    T.Animation = T.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = m(e) ? (t = e,
            ["*"]) : e.match(L)).length; i < o; i++)
                n = e[i],
                yt.tweeners[n] = yt.tweeners[n] || [],
                yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, u, c = "width"in t || "height"in t, d = this, f = {}, p = e.style, h = e.nodeType && se(e), m = Z.get(e, "fxshow");
            for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    T.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                dt.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        h = !0
                    }
                    f[i] = m && m[i] || T.style(e, i)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                for (i in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (u = m && m.display) && (u = Z.get(e, "display")),
                "none" === (c = T.css(e, "display")) && (u ? c = u : (ue([e], !0),
                u = e.style.display || u,
                c = T.css(e, "display"),
                ue([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (d.done(function() {
                    p.display = u
                }),
                null == u && (c = p.display,
                u = "none" === c ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                d.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (m ? "hidden"in m && (h = m.hidden) : m = Z.access(e, "fxshow", {
                        display: u
                    }),
                    r && (m.hidden = !h),
                    h && ue([e], !0),
                    d.done(function() {
                        for (i in h || ue([e]),
                        Z.remove(e, "fxshow"),
                        f)
                            T.style(e, i, f[i])
                    })),
                    l = gt(h ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
    T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            m(i.old) && i.old.call(this),
            i.queue && T.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = yt(this, T.extend({}, t), s);
                (r || Z.get(this, "finish")) && e.stop(!0)
            }
            var r = T.isEmptyObject(t)
              , s = T.speed(e, n, i);
            return o.finish = o,
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            return "string" != typeof o && (r = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = T.timers
                  , i = Z.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && ft.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r),
                    e = !1,
                    n.splice(t, 1));
                !e && r || T.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = Z.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], o = T.timers, r = n ? n.length : 0;
                for (t.finish = !0,
                T.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    T.each(["toggle", "show", "hide"], function(e, i) {
        var o = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(mt(i, !0), e, t, n)
        }
    }),
    T.each({
        slideDown: mt("show"),
        slideUp: mt("hide"),
        slideToggle: mt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    T.timers = [],
    T.fx.tick = function() {
        var e, t = 0, n = T.timers;
        for (ut = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(),
        ut = void 0
    }
    ,
    T.fx.timer = function(e) {
        T.timers.push(e),
        T.fx.start()
    }
    ,
    T.fx.interval = 13,
    T.fx.start = function() {
        ct || (ct = !0,
        pt())
    }
    ,
    T.fx.stop = function() {
        ct = null
    }
    ,
    T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i,
        this.queue(e = e || "fx", function(e, t) {
            var n = b.setTimeout(e, i);
            t.stop = function() {
                b.clearTimeout(n)
            }
        })
    }
    ,
    d = S.createElement("input"),
    ee = S.createElement("select").appendChild(S.createElement("option")),
    d.type = "checkbox",
    w.checkOn = "" !== d.value,
    w.optSelected = ee.selected,
    (d = S.createElement("input")).value = "t",
    d.type = "radio",
    w.radioValue = "t" === d.value;
    var vt, wt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return q(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }),
    T.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === r && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? vt : void 0)),
                void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(o && "get"in o && null !== (i = o.get(e, t))) && null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!w.radioValue && "radio" === t && M(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    vt = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = wt[t] || T.find.attr;
        wt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = wt[r],
            wt[r] = i,
            i = null != s(e, t, n) ? r : null,
            wt[r] = o),
            i
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i
      , xt = /^(?:a|area)$/i;
    function bt(e) {
        return (e.match(L) || []).join(" ")
    }
    function St(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return q(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }),
    T.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                o = T.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    w.optSelected || (T.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }),
    T.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (m(t))
                return this.each(function(e) {
                    T(this).addClass(t.call(this, e, St(this)))
                });
            if ((e = Tt(t)).length)
                for (; n = this[a++]; )
                    if (s = St(n),
                    i = 1 === n.nodeType && " " + bt(s) + " ") {
                        for (r = 0; o = e[r++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (s = bt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (m(t))
                return this.each(function(e) {
                    T(this).removeClass(t.call(this, e, St(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[a++]; )
                    if (s = St(n),
                    i = 1 === n.nodeType && " " + bt(s) + " ") {
                        for (r = 0; o = e[r++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        s !== (s = bt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o
              , s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : m(o) ? this.each(function(e) {
                T(this).toggleClass(o.call(this, e, St(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0,
                    n = T(this),
                    i = Tt(o); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== o && "boolean" != r || ((e = St(this)) && Z.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== o && Z.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + bt(St(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    var _t = /\r/g;
    T.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = m(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, T(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(_t, "") : null == e ? "" : e : void 0
        }
    }),
    T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : bt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !M(t.parentNode, "optgroup"))) {
                            if (t = T(t).val(),
                            o)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = T.makeArray(t), s = o.length; s--; )
                        ((i = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        },
        w.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    w.focusin = "onfocusin"in b;
    function Ct(e) {
        e.stopPropagation()
    }
    var Mt = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, u, c, d = [n || S], f = v.call(e, "type") ? e.type : e, p = v.call(e, "namespace") ? e.namespace.split(".") : [], h = c = r = n = n || S;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(),
            p.sort()),
            a = f.indexOf(":") < 0 && "on" + f,
            (e = e[T.expando] ? e : new T.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : T.makeArray(t, [e]),
            u = T.event.special[f] || {},
            i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (s = u.delegateType || f,
                    Mt.test(s + f) || (h = h.parentNode); h; h = h.parentNode)
                        d.push(h),
                        r = h;
                    r === (n.ownerDocument || S) && d.push(r.defaultView || r.parentWindow || b)
                }
                for (o = 0; (h = d[o++]) && !e.isPropagationStopped(); )
                    c = h,
                    e.type = 1 < o ? s : u.bindType || f,
                    (l = (Z.get(h, "events") || Object.create(null))[e.type] && Z.get(h, "handle")) && l.apply(h, t),
                    (l = a && h[a]) && l.apply && G(h) && (e.result = l.apply(h, t),
                    !1 === e.result && e.preventDefault());
                return e.type = f,
                i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !G(n) || a && m(n[f]) && !g(n) && ((r = n[a]) && (n[a] = null),
                T.event.triggered = f,
                e.isPropagationStopped() && c.addEventListener(f, Ct),
                n[f](),
                e.isPropagationStopped() && c.removeEventListener(f, Ct),
                T.event.triggered = void 0,
                r && (n[a] = r)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            e = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(e, null, t)
        }
    }),
    T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return T.event.trigger(e, t, n, !0)
        }
    }),
    w.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        }
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Z.access(e, i);
                t || e.addEventListener(n, o, !0),
                Z.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Z.access(e, i) - 1;
                t ? Z.access(e, i, t) : (e.removeEventListener(n, o, !0),
                Z.remove(e, i))
            }
        }
    });
    var Dt = b.location
      , Ot = {
        guid: Date.now()
    }
      , At = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new b.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e),
        t
    }
    ;
    var Et = /\[\]$/
      , Pt = /\r?\n/g
      , $t = /^(?:submit|button|image|reset|file)$/i
      , Ht = /^(?:input|select|textarea|keygen)/i;
    T.param = function(e, t) {
        function n(e, t) {
            t = m(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
            T.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, o, r) {
                    if (Array.isArray(e))
                        T.each(e, function(e, t) {
                            o || Et.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                        });
                    else if (o || "object" !== h(e))
                        r(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], o, r)
                }(i, e[i], t, n);
        return o.join("&")
    }
    ,
    T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Ht.test(this.nodeName) && !$t.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Pt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , It = /#.*$/
      , jt = /([?&])_=[^&]*/
      , Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Yt = /^(?:GET|HEAD)$/
      , Wt = /^\/\//
      , zt = {}
      , qt = {}
      , Rt = "*/".concat("*")
      , Ft = S.createElement("a");
    function Ut(r) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, o = e.toLowerCase().match(L) || [];
            if (m(t))
                for (; n = o[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function Bt(t, i, o, r) {
        var s = {}
          , a = t === qt;
        function l(e) {
            var n;
            return s[e] = !0,
            T.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Gt(e, t) {
        var n, i, o = T.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && T.extend(!0, e, i),
        e
    }
    Ft.href = Dt.href,
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, T.ajaxSettings), t) : Gt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(zt),
        ajaxTransport: Ut(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, u, c, n, d, f, p, i, o, h = T.ajaxSetup({}, t = t || {}), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? T(m) : T.event, y = T.Deferred(), v = T.Callbacks("once memory"), w = h.statusCode || {}, r = {}, s = {}, a = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (f) {
                        if (!n)
                            for (n = {}; t = Nt.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return f ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == f && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    r[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == f && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (f)
                            k.always(e[k.status]);
                        else
                            for (var t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return l && l.abort(e),
                    x(0, e),
                    this
                }
            };
            if (y.promise(k),
            h.url = ((e || h.url || Dt.href) + "").replace(Wt, Dt.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""],
            null == h.crossDomain) {
                o = S.createElement("a");
                try {
                    o.href = h.url,
                    o.href = o.href,
                    h.crossDomain = Ft.protocol + "//" + Ft.host != o.protocol + "//" + o.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)),
            Bt(zt, h, t, k),
            f)
                return k;
            for (i in (p = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Yt.test(h.type),
            u = h.url.replace(It, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (o = h.url.slice(u.length),
            h.data && (h.processData || "string" == typeof h.data) && (u += (At.test(u) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (u = u.replace(jt, "$1"),
            o = (At.test(u) ? "&" : "?") + "_=" + Ot.guid++ + o),
            h.url = u + o),
            h.ifModified && (T.lastModified[u] && k.setRequestHeader("If-Modified-Since", T.lastModified[u]),
            T.etag[u] && k.setRequestHeader("If-None-Match", T.etag[u])),
            (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType),
            k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                k.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || f))
                return k.abort();
            if (a = "abort",
            v.add(h.complete),
            k.done(h.success),
            k.fail(h.error),
            l = Bt(qt, h, t, k)) {
                if (k.readyState = 1,
                p && g.trigger("ajaxSend", [k, h]),
                f)
                    return k;
                h.async && 0 < h.timeout && (d = b.setTimeout(function() {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    f = !1,
                    l.send(r, x)
                } catch (e) {
                    if (f)
                        throw e;
                    x(-1, e)
                }
            } else
                x(-1, "No Transport");
            function x(e, t, n, i) {
                var o, r, s, a = t;
                f || (f = !0,
                d && b.clearTimeout(d),
                l = void 0,
                c = i || "",
                k.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, k, n)),
                !i && -1 < T.inArray("script", h.dataTypes) && (h.converters["text script"] = function() {}
                ),
                s = function(e, t, n, i) {
                    var o, r, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            u[s.toLowerCase()] = e.converters[s];
                    for (r = c.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = c.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = u[l + " " + r] || u["* " + r]))
                                    for (o in u)
                                        if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, s, k, i),
                i ? (h.ifModified && ((n = k.getResponseHeader("Last-Modified")) && (T.lastModified[u] = n),
                (n = k.getResponseHeader("etag")) && (T.etag[u] = n)),
                204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state,
                o = s.data,
                i = !(r = s.error))) : (r = a,
                !e && a || (a = "error",
                e < 0 && (e = 0))),
                k.status = e,
                k.statusText = (t || a) + "",
                i ? y.resolveWith(m, [o, a, k]) : y.rejectWith(m, [k, a, r]),
                k.statusCode(w),
                w = void 0,
                p && g.trigger(i ? "ajaxSuccess" : "ajaxError", [k, h, i ? o : r]),
                v.fireWith(m, [k, a]),
                p && (g.trigger("ajaxComplete", [k, h]),
                --T.active || T.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }),
    T.each(["get", "post"], function(e, o) {
        T[o] = function(e, t, n, i) {
            return m(t) && (i = i || n,
            n = t,
            t = void 0),
            T.ajax(T.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }),
    T.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    T._evalUrl = function(e, t, n) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t, n)
            }
        })
    }
    ,
    T.fn.extend({
        wrapAll: function(e) {
            return this[0] && (m(e) && (e = e.call(this[0])),
            e = T(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }
    ,
    T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    T.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Zt = T.ajaxSettings.xhr();
    w.cors = !!Zt && "withCredentials"in Zt,
    w.ajax = Zt = !!Zt,
    T.ajaxTransport(function(o) {
        var r, s;
        if (w.cors || Zt && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = r(),
                    s = i.onerror = i.ontimeout = r("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && b.setTimeout(function() {
                            r && s()
                        })
                    }
                    ,
                    r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r)
                            throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
    }),
    T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e),
                e
            }
        }
    }),
    T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    T.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = T("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var Xt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || T.expando + "_" + Ot.guid++;
            return this[e] = !0,
            e
        }
    }),
    T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return r || T.error(i + " was not called"),
                r[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = b[i],
            b[i] = function() {
                r = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? T(b).removeProp(i) : b[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(i)),
                r && m(o) && o(r[0]),
                r = o = void 0
            }),
            "script"
    }),
    w.createHTMLDocument = ((d = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === d.childNodes.length),
    T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (w.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(i)) : t = S),
        i = !n && [],
        (n = D.exec(e)) ? [t.createElement(n[1])] : (n = ye([e], t, i),
        i && i.length && T(i).remove(),
        T.merge([], n.childNodes)));
        var i
    }
    ,
    T.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return -1 < a && (i = bt(e.slice(a)),
        e = e.slice(0, a)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < s.length && T.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    T.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = T.css(e, "position"), l = T(e), u = {};
            "static" === a && (e.style.position = "relative"),
            r = l.offset(),
            i = T.css(e, "top"),
            s = T.css(e, "left"),
            s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top,
            a.left) : (o = parseFloat(i) || 0,
            parseFloat(s) || 0),
            null != (t = m(t) ? t.call(e, n, T.extend({}, r)) : t).top && (u.top = t.top - r.top + o),
            null != t.left && (u.left = t.left - r.left + s),
            "using"in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"),
            "number" == typeof u.left && (u.left += "px"),
            l.css(u))
        }
    },
    T.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    T.offset.setOffset(this, t, e)
                });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === T.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                    o.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - T.css(i, "marginTop", !0),
                    left: t.left - o.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        T.fn[t] = function(e) {
            return q(this, function(e, t, n) {
                var i;
                return g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n ? i ? i[o] : e[t] : void (i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Xe(w.pixelPosition, function(e, t) {
            if (t)
                return t = Ze(e, n),
                Ue.test(t) ? T(e).position()[n] + "px" : t
        })
    }),
    T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            T.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , o = i || (!0 === e || !0 === t ? "margin" : "border");
                return q(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    T.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        m(e))
            return n = a.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || T.guid++,
            i
    }
    ,
    T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }
    ,
    T.isArray = Array.isArray,
    T.parseJSON = JSON.parse,
    T.nodeName = M,
    T.isFunction = m,
    T.isWindow = g,
    T.camelCase = B,
    T.type = h,
    T.now = Date.now,
    T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    T.trim = function(e) {
        return null == e ? "" : (e + "").replace(Kt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var Jt = b.jQuery
      , en = b.$;
    return T.noConflict = function(e) {
        return b.$ === T && (b.$ = en),
        e && b.jQuery === T && (b.jQuery = Jt),
        T
    }
    ,
    void 0 === e && (b.jQuery = b.$ = T),
    T
}),
function(r) {
    r.easing.jswing = r.easing.swing,
    r.extend(r.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, o) {
            return r.easing[r.easing.def](e, t, n, i, o)
        },
        easeInQuad: function(e, t, n, i, o) {
            return i * (t /= o) * t + n
        },
        easeOutQuad: function(e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, o) {
            return i * (t /= o) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, o) {
            return -i * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, o) {
            return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function(e, t, n, i, o) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, o) {
            return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
        },
        easeInOutExpo: function(e, t, n, i, o) {
            return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, o) {
            return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, o) {
            return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, o) {
            var r = 1.70158
              , s = 0
              , a = i;
            return 0 == t ? n : 1 == (t /= o) ? n + i : (s = s || .3 * o,
            r = a < Math.abs(i) ? (a = i,
            s / 4) : s / (2 * Math.PI) * Math.asin(i / a),
            -(a * Math.pow(2, 10 * --t) * Math.sin((t * o - r) * (2 * Math.PI) / s)) + n)
        },
        easeOutElastic: function(e, t, n, i, o) {
            var r = 1.70158
              , s = 0
              , a = i;
            return 0 == t ? n : 1 == (t /= o) ? n + i : (s = s || .3 * o,
            r = a < Math.abs(i) ? (a = i,
            s / 4) : s / (2 * Math.PI) * Math.asin(i / a),
            a * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / s) + i + n)
        },
        easeInOutElastic: function(e, t, n, i, o) {
            var r = 1.70158
              , s = 0
              , a = i;
            return 0 == t ? n : 2 == (t /= o / 2) ? n + i : (s = s || o * (.3 * 1.5),
            r = a < Math.abs(i) ? (a = i,
            s / 4) : s / (2 * Math.PI) * Math.asin(i / a),
            t < 1 ? a * Math.pow(2, 10 * --t) * Math.sin((t * o - r) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * --t) * Math.sin((t * o - r) * (2 * Math.PI) / s) * .5 + i + n)
        },
        easeInBack: function(e, t, n, i, o, r) {
            return i * (t /= o) * t * (((r = null == r ? 1.70158 : r) + 1) * t - r) + n
        },
        easeOutBack: function(e, t, n, i, o, r) {
            return i * ((t = t / o - 1) * t * (((r = null == r ? 1.70158 : r) + 1) * t + r) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, o, r) {
            return null == r && (r = 1.70158),
            (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
        },
        easeInBounce: function(e, t, n, i, o) {
            return i - r.easing.easeOutBounce(e, o - t, 0, i, o) + n
        },
        easeOutBounce: function(e, t, n, i, o) {
            return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, o) {
            return t < o / 2 ? .5 * r.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * r.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
        }
    })
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(o) {
    "use strict";
    var y = o.scrollTo = function(e, t, n) {
        return o(window).scrollTo(e, t, n)
    }
    ;
    function r(e) {
        return !e.nodeName || -1 !== o.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function t(e) {
        return o.isFunction(e) || o.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    return y.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    o.fn.scrollTo = function(e, n, m) {
        "object" == typeof n && (m = n,
        n = 0),
        "function" == typeof m && (m = {
            onAfter: m
        }),
        "max" === e && (e = 9e9),
        m = o.extend({}, y.defaults, m),
        n = n || m.duration;
        var g = m.queue && 1 < m.axis.length;
        return g && (n /= 2),
        m.offset = t(m.offset),
        m.over = t(m.over),
        this.each(function() {
            if (null !== e) {
                var a, l = r(this), u = l ? this.contentWindow || window : this, c = o(u), d = e, f = {};
                switch (typeof d) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                        d = t(d);
                        break
                    }
                    d = l ? o(d) : o(d, u);
                case "object":
                    if (0 === d.length)
                        return;
                    (d.is || d.style) && (a = (d = o(d)).offset())
                }
                var p = o.isFunction(m.offset) && m.offset(u, d) || m.offset;
                o.each(m.axis.split(""), function(e, t) {
                    var n = "x" === t ? "Left" : "Top"
                      , i = n.toLowerCase()
                      , o = "scroll" + n
                      , r = c[o]()
                      , s = y.max(u, t);
                    a ? (f[o] = a[i] + (l ? 0 : r - c.offset()[i]),
                    m.margin && (f[o] -= parseInt(d.css("margin" + n), 10) || 0,
                    f[o] -= parseInt(d.css("border" + n + "Width"), 10) || 0),
                    f[o] += p[i] || 0,
                    m.over[i] && (f[o] += d["x" === t ? "width" : "height"]() * m.over[i])) : (i = d[i],
                    f[o] = i.slice && "%" === i.slice(-1) ? parseFloat(i) / 100 * s : i),
                    m.limit && /^\d+$/.test(f[o]) && (f[o] = f[o] <= 0 ? 0 : Math.min(f[o], s)),
                    !e && 1 < m.axis.length && (r === f[o] ? f = {} : g && (h(m.onAfterFirst),
                    f = {}))
                }),
                h(m.onAfter)
            }
            function h(e) {
                var t = o.extend({}, m, {
                    queue: !0,
                    duration: n,
                    complete: e && function() {
                        e.call(u, d, m)
                    }
                });
                c.animate(f, t)
            }
        })
    }
    ,
    y.max = function(e, t) {
        var n = "x" === t ? "Width" : "Height"
          , i = "scroll" + n;
        if (!r(e))
            return e[i] - o(e)[n.toLowerCase()]();
        t = "client" + n,
        n = e.ownerDocument || e.document,
        e = n.documentElement,
        n = n.body;
        return Math.max(e[i], n[i]) - Math.min(e[t], n[t])
    }
    ,
    o.Tween.propHooks.scrollLeft = o.Tween.propHooks.scrollTop = {
        get: function(e) {
            return o(e.elem)[e.prop]()
        },
        set: function(e) {
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t)
                return o(e.elem).stop();
            var n = Math.round(e.now);
            t !== n && (o(e.elem)[e.prop](n),
            e._last = this.get(e))
        }
    },
    y
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(u) {
    "use strict";
    var i, s = window.Slick || {};
    i = 0,
    (s = function(e, t) {
        var n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: u(e),
            appendDots: u(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return u('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        u.extend(n, n.initials),
        n.activeBreakpoint = null,
        n.animType = null,
        n.animProp = null,
        n.breakpoints = [],
        n.breakpointSettings = [],
        n.cssTransitions = !1,
        n.focussed = !1,
        n.interrupted = !1,
        n.hidden = "hidden",
        n.paused = !0,
        n.positionProp = null,
        n.respondTo = null,
        n.rowCount = 1,
        n.shouldClick = !0,
        n.$slider = u(e),
        n.$slidesCache = null,
        n.transformType = null,
        n.transitionType = null,
        n.visibilityChange = "visibilitychange",
        n.windowWidth = 0,
        n.windowTimer = null,
        e = u(e).data("slick") || {},
        n.options = u.extend({}, n.defaults, t, e),
        n.currentSlide = n.options.initialSlide,
        n.originalSettings = n.options,
        void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
        n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
        n.visibilityChange = "webkitvisibilitychange"),
        n.autoPlay = u.proxy(n.autoPlay, n),
        n.autoPlayClear = u.proxy(n.autoPlayClear, n),
        n.autoPlayIterator = u.proxy(n.autoPlayIterator, n),
        n.changeSlide = u.proxy(n.changeSlide, n),
        n.clickHandler = u.proxy(n.clickHandler, n),
        n.selectHandler = u.proxy(n.selectHandler, n),
        n.setPosition = u.proxy(n.setPosition, n),
        n.swipeHandler = u.proxy(n.swipeHandler, n),
        n.dragHandler = u.proxy(n.dragHandler, n),
        n.keyHandler = u.proxy(n.keyHandler, n),
        n.instanceUid = i++,
        n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        n.registerBreakpoints(),
        n.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t)
            n = t,
            t = null;
        else if (t < 0 || t >= i.slideCount)
            return !1;
        i.unload(),
        "number" == typeof t ? 0 === t && 0 === i.$slides.length ? u(e).appendTo(i.$slideTrack) : n ? u(e).insertBefore(i.$slides.eq(t)) : u(e).insertAfter(i.$slides.eq(t)) : !0 === n ? u(e).prependTo(i.$slideTrack) : u(e).appendTo(i.$slideTrack),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e)
        }),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    s.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.animate({
            height: e
        }, t.options.speed))
    }
    ,
    s.prototype.animateSlide = function(e, t) {
        var n = {}
          , i = this;
        i.animateHeight(),
        !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
        !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
        u({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)",
                i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(),
        e = Math.ceil(e),
        !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)",
        i.$slideTrack.css(n),
        t && setTimeout(function() {
            i.disableTransition(),
            t.call()
        }, i.options.speed))
    }
    ,
    s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? u(e).not(this.$slider) : e
    }
    ,
    s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = u(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    s.prototype.applyTransition = function(e) {
        var t = this
          , n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    }
    ,
    s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    s.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    s.prototype.buildDots = function() {
        var e, t, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"),
            t = u("<ul />").attr("role", "tablist").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                t.append(u("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    s.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e).data("originalStyling", u(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        0 < e.$slider.find("li").length || 0 < e.$slider.find(".card").length ? e.$slideTrack = 0 === e.slideCount ? u('<ul role="presentation" class="slick-track" />').appendTo(e.$slider) : e.$slides.wrapAll('<ul role="presentation" class="slick-track"/>').parent() : e.$slideTrack = 0 === e.slideCount ? u('<div class="slick-track" />').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list" />').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    s.prototype.buildRows = function() {
        var e, t, n, i = this, o = document.createDocumentFragment(), r = i.$slider.children();
        if (1 < i.options.rows) {
            for (n = i.options.slidesPerRow * i.options.rows,
            t = Math.ceil(r.length / n),
            e = 0; e < t; e++) {
                for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                    for (var l = document.createElement("div"), u = 0; u < i.options.slidesPerRow; u++) {
                        var c = e * n + (a * i.options.slidesPerRow + u);
                        r.get(c) && l.appendChild(r.get(c))
                    }
                    s.appendChild(l)
                }
                o.appendChild(s)
            }
            i.$slider.empty().append(o),
            i.$slider.children().children().children().css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    s.prototype.checkResponsive = function(e, t) {
        var n, i, o, r = this, s = !1, a = r.$slider.width(), l = window.innerWidth || u(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null,
            r.breakpoints)
                r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i,
            "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = u.extend({}, r.originalSettings, r.breakpointSettings[i]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            s = i),
            e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }
    ,
    s.prototype.changeSlide = function(e, t) {
        var n, i = this, o = u(e.currentTarget);
        switch (o.is("a") && e.preventDefault(),
        o.is("li") || (o = o.closest("li")),
        n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll,
        e.data.message) {
        case "previous":
            r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
            break;
        case "next":
            r = 0 == n ? i.options.slidesToScroll : n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
            break;
        case "index":
            var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(r), !1, t),
            o.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    s.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes()
          , n = 0;
        if (e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }
    ,
    s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (u("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", u.proxy(e.interrupt, e, !0)).off("mouseleave.slick", u.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        u(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().off("click.slick", e.selectHandler),
        u(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        u(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        u("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", u.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }
    ,
    s.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(e))
    }
    ,
    s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        u(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            u(this).attr("style", u(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    s.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }
    ,
    s.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
        n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    }
    ,
    s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    s.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = u(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"),
                n.autoPlay())
            }, 0)
        })
    }
    ,
    s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    s.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , n = 0
          , i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++i;
            else
                for (; t < e.slideCount; )
                    ++i,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++i,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }
    ,
    s.prototype.getLeft = function(e) {
        var t, n, i = this, o = 0;
        return i.slideOffset = 0,
        t = i.$slides.first().outerHeight(!0),
        !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1,
        n = -1,
        !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)),
        o = t * i.options.slidesToShow * n),
        i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1,
        (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1,
        i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth,
        o = (e + i.options.slidesToShow - i.slideCount) * t),
        i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0),
        !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0,
        i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)),
        t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o,
        !0 === i.options.variableWidth && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow),
        t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === i.options.centerMode && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1),
        t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        t += (i.$list.width() - o.outerWidth()) / 2)),
        t
    }
    ,
    s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    s.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        2 * e.slideCount); t < o; )
            i.push(t),
            t = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i
    }
    ,
    s.prototype.getSlick = function() {
        return this
    }
    ,
    s.prototype.getSlideCount = function() {
        var n, i = this, o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
        return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - o + u(t).outerWidth() / 2 > -1 * i.swipeLeft)
                return n = t,
                !1
        }),
        Math.abs(u(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    s.prototype.init = function(e) {
        var t = this;
        u(t.$slider).hasClass("slick-initialized") || (u(t.$slider).addClass("slick-initialized"),
        (0 < u(t.$slider).find("li").length || 0 < u(t.$slider).find(".card").length) && (u(t.$slider).attr("role", "region"),
        u(t.$slider).attr("aria-label", "carousel")),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    s.prototype.initADA = function() {
        var n = this
          , i = Math.ceil(n.slideCount / n.options.slidesToShow)
          , o = n.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < n.slideCount
        });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            u(this).attr({
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }),
            -1 !== t && u(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }),
        n.$dots.find("li").each(function(e) {
            var t = o[e];
            u(this).attr({
                role: "presentation"
            }),
            u(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end()),
        n.activateADA()
    }
    ,
    s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }
    ,
    s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (u("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && u("li", e.$dots).on("mouseenter.slick", u.proxy(e.interrupt, e, !0)).on("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }
    ,
    s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", u.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", u.proxy(e.interrupt, e, !1)))
    }
    ,
    s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        u(document).on(e.visibilityChange, u.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler),
        u(window).on("orientationchange.slick.slick-" + e.instanceUid, u.proxy(e.orientationChange, e)),
        u(window).on("resize.slick.slick-" + e.instanceUid, u.proxy(e.resize, e)),
        u("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        u(e.setPosition)
    }
    ,
    s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    s.prototype.lazyLoad = function() {
        var e, t, n, r = this;
        function i(e) {
            u("img[data-lazy]", e).each(function() {
                var e = u(this)
                  , t = u(this).attr("data-lazy")
                  , n = u(this).attr("data-srcset")
                  , i = u(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                  , o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n),
                        i && e.attr("sizes", i)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }
                ,
                o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, t])
                }
                ,
                o.src = t
            })
        }
        if (!0 === r.options.centerMode ? n = !0 === r.options.infinite ? (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
        r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
        n = Math.ceil(t + r.options.slidesToShow),
        !0 === r.options.fade && (0 < t && t--,
        n <= r.slideCount && n++)),
        e = r.$slider.find(".slick-slide").slice(t, n),
        "anticipated" === r.options.lazyLoad)
            for (var o = t - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++)
                o < 0 && (o = r.slideCount - 1),
                e = (e = e.add(a.eq(o))).add(a.eq(s)),
                o--,
                s++;
        i(e),
        r.slideCount <= r.options.slidesToShow ? i(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? i(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && i(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }
    ,
    s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    s.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    s.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && u(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    s.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, i, o, r = this, s = u("img[data-lazy]", r.$slider);
        s.length ? (t = s.first(),
        n = t.attr("data-lazy"),
        i = t.attr("data-srcset"),
        o = t.attr("data-sizes") || r.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i),
            o && t.attr("sizes", o)),
            t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, t, n]),
            r.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, t, n]),
            r.progressiveLazyLoad())
        }
        ,
        s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    s.prototype.refresh = function(e) {
        var t = this
          , n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        n = t.currentSlide,
        t.destroy(!0),
        u.extend(t, t.initials, {
            currentSlide: n
        }),
        t.init(),
        e || t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    s.prototype.registerBreakpoints = function() {
        var e, t, n, i = this, o = i.options.responsive || null;
        if ("array" === u.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window",
            o)
                if (n = i.breakpoints.length - 1,
                o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n; )
                        i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1),
                        n--;
                    i.breakpoints.push(t),
                    i.breakpointSettings[t] = o[e].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    s.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    s.prototype.resize = function() {
        var e = this;
        u(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = u(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e,
        i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
            return !1;
        i.unload(),
        (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    s.prototype.setCSS = function(e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
        i.$slideTrack.css(o)
    }
    ,
    s.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    s.prototype.setFade = function() {
        var n, i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1,
            !0 === i.options.rtl ? u(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : u(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    s.prototype.setHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.css("height", e))
    }
    ,
    s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e, t, n, i, o, r = this, s = !1;
        if ("object" === u.type(arguments[0]) ? (n = arguments[0],
        s = arguments[1],
        o = "multiple") : "string" === u.type(arguments[0]) && (n = arguments[0],
        i = arguments[1],
        s = arguments[2],
        "responsive" === arguments[0] && "array" === u.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            r.options[n] = i;
        else if ("multiple" === o)
            u.each(n, function(e, t) {
                r.options[e] = t
            });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== u.type(r.options.responsive))
                    r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e; )
                        r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(i[t])
                }
        s && (r.unload(),
        r.reinit())
    }
    ,
    s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    s.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    s.prototype.setSlideClasses = function(e) {
        var t, n, i, o = this, r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(e).addClass("slick-current"),
        !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0,
        i = Math.floor(o.options.slidesToShow / 2),
        !0 === o.options.infinite && (i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = o.options.slidesToShow + e,
        r.slice(t - i + 1 + n, t + i + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")),
        o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow,
        t = !0 === o.options.infinite ? o.options.slidesToShow + e : e,
        (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - i), t + i) : r.slice(t, t + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    s.prototype.setupInfinite = function() {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1),
        !0 === i.options.infinite && !1 === i.options.fade && (t = null,
        i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow,
            e = i.slideCount; e > i.slideCount - n; --e)
                u(i.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1)
                t = e,
                u(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                u(this).attr("id", "")
            })
        }
    }
    ,
    s.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    s.prototype.selectHandler = function(e) {
        var e = u(e.target).is(".slick-slide") ? u(e.target) : u(e.target).parents(".slick-slide")
          , e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    }
    ,
    s.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a = this;
        if (t = t || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
            if (!1 === t && a.asNavFor(e),
            i = e,
            r = a.getLeft(i),
            t = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (i = a.currentSlide,
                !0 !== n ? a.animateSlide(t, function() {
                    a.postSlide(i)
                }) : a.postSlide(i));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (i = a.currentSlide,
                !0 !== n ? a.animateSlide(t, function() {
                    a.postSlide(i)
                }) : a.postSlide(i));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, o]),
                t = a.currentSlide,
                a.currentSlide = o,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (s = (s = a.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== n ? (a.fadeSlideOut(t),
                    a.fadeSlide(o, function() {
                        a.postSlide(o)
                    })) : a.postSlide(o),
                    void a.animateHeight();
                !0 !== n ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o)
            }
    }
    ,
    s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    s.prototype.swipeDirection = function() {
        var e = this
          , t = e.touchObject.startX - e.touchObject.curX
          , n = e.touchObject.startY - e.touchObject.curY
          , t = Math.atan2(n, t)
          , t = Math.round(180 * t / Math.PI);
        return (t = t < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }
    ,
    s.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1,
        i.swiping = !1,
        i.scrolling)
            return i.scrolling = !1;
        if (i.interrupted = !1,
        i.shouldClick = !(10 < i.touchObject.swipeLength),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    s.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    s.prototype.swipeMove = function(e) {
        var t, n, i = this, o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide),
        i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
        i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
        i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))),
        n = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))),
        !i.options.verticalSwiping && !i.swiping && 4 < n ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = n),
        o = i.swipeDirection(),
        void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0,
        e.preventDefault()),
        n = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1),
        !0 === i.options.verticalSwiping && (n = i.touchObject.curY > i.touchObject.startY ? 1 : -1),
        e = i.touchObject.swipeLength,
        (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (e = i.touchObject.swipeLength * i.options.edgeFriction,
        i.touchObject.edgeHit = !0),
        !1 === i.options.vertical ? i.swipeLeft = t + e * n : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * n,
        !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * n),
        !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null,
        !1) : void i.setCSS(i.swipeLeft))))
    }
    ,
    s.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    }
    ,
    s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    s.prototype.unload = function() {
        var e = this;
        u(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    }
    ,
    s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2);
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    s.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    u.fn.slick = function() {
        for (var e, t = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = t.length, r = 0; r < o; r++)
            if ("object" == typeof n || void 0 === n ? t[r].slick = new s(t[r],n) : e = t[r].slick[n].apply(t[r].slick, i),
            void 0 !== e)
                return e;
        return t
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function(u) {
    function e() {}
    function c(e, t) {
        h.ev.on("mfp" + e + k, t)
    }
    function d(e, t, n, i) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        i ? t && t.appendChild(o) : (o = u(o),
        t && o.appendTo(t)),
        o
    }
    function f(e, t) {
        h.ev.triggerHandler("mfp" + e, t),
        h.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        h.st.callbacks[e] && h.st.callbacks[e].apply(h, u.isArray(t) ? t : [t]))
    }
    function p(e) {
        return e === t && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = u(h.st.closeMarkup.replace("%title%", h.st.tClose)),
        t = e),
        h.currTemplate.closeBtn
    }
    function r() {
        u.magnificPopup.instance || ((h = new e).init(),
        u.magnificPopup.instance = h)
    }
    var h, i, m, o, g, t, l = "Close", y = "BeforeClose", v = "MarkupParse", w = "Open", k = ".mfp", x = "mfp-ready", n = "mfp-removing", s = "mfp-prevent-close", a = !!window.jQuery, b = u(window);
    u.magnificPopup = {
        instance: null,
        proto: e.prototype = {
            constructor: e,
            init: function() {
                var e = navigator.appVersion;
                h.isLowIE = h.isIE8 = document.all && !document.addEventListener,
                h.isAndroid = /android/gi.test(e),
                h.isIOS = /iphone|ipad|ipod/gi.test(e),
                h.supportsTransition = function() {
                    var e = document.createElement("p").style
                      , t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition)
                        return !0;
                    for (; t.length; )
                        if (t.pop() + "Transition"in e)
                            return !0;
                    return !1
                }(),
                h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                m = u(document),
                h.popupsCache = {}
            },
            open: function(e) {
                if (!1 === e.isObj) {
                    h.items = e.items.toArray(),
                    h.index = 0;
                    for (var t, n = e.items, i = 0; i < n.length; i++)
                        if ((t = (t = n[i]).parsed ? t.el[0] : t) === e.el[0]) {
                            h.index = i;
                            break
                        }
                } else
                    h.items = u.isArray(e.items) ? e.items : [e.items],
                    h.index = e.index || 0;
                if (!h.isOpen) {
                    h.types = [],
                    g = "",
                    e.mainEl && e.mainEl.length ? h.ev = e.mainEl.eq(0) : h.ev = m,
                    e.key ? (h.popupsCache[e.key] || (h.popupsCache[e.key] = {}),
                    h.currTemplate = h.popupsCache[e.key]) : h.currTemplate = {},
                    h.st = u.extend(!0, {}, u.magnificPopup.defaults, e),
                    h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos,
                    h.st.modal && (h.st.closeOnContentClick = !1,
                    h.st.closeOnBgClick = !1,
                    h.st.showCloseBtn = !1,
                    h.st.enableEscapeKey = !1),
                    h.bgOverlay || (h.bgOverlay = d("bg").on("click" + k, function() {
                        h.close()
                    }),
                    h.wrap = d("wrap").attr("tabindex", -1).on("click" + k, function(e) {
                        h._checkIfClose(e.target) && h.close()
                    }),
                    h.container = d("container", h.wrap)),
                    h.contentContainer = d("content"),
                    h.st.preloader && (h.preloader = d("preloader", h.container, h.st.tLoading));
                    var o = u.magnificPopup.modules;
                    for (i = 0; i < o.length; i++) {
                        var r = (r = o[i]).charAt(0).toUpperCase() + r.slice(1);
                        h["init" + r].call(h)
                    }
                    f("BeforeOpen"),
                    h.st.showCloseBtn && (h.st.closeBtnInside ? (c(v, function(e, t, n, i) {
                        n.close_replaceWith = p(i.type)
                    }),
                    g += " mfp-close-btn-in") : h.wrap.append(p())),
                    h.st.alignTop && (g += " mfp-align-top"),
                    h.fixedContentPos ? h.wrap.css({
                        overflow: h.st.overflowY,
                        overflowX: "hidden",
                        overflowY: h.st.overflowY
                    }) : h.wrap.css({
                        top: b.scrollTop(),
                        position: "absolute"
                    }),
                    !1 !== h.st.fixedBgPos && ("auto" !== h.st.fixedBgPos || h.fixedContentPos) || h.bgOverlay.css({
                        height: m.height(),
                        position: "absolute"
                    }),
                    h.st.enableEscapeKey && m.on("keyup" + k, function(e) {
                        27 === e.keyCode && h.close()
                    }),
                    b.on("resize" + k, function() {
                        h.updateSize()
                    }),
                    h.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                    g && h.wrap.addClass(g);
                    var s = h.wH = b.height()
                      , a = {};
                    h.fixedContentPos && (!h._hasScrollBar(s) || (l = h._getScrollbarSize()) && (a.marginRight = l)),
                    h.fixedContentPos && (h.isIE7 ? u("body, html").css("overflow", "hidden") : a.overflow = "hidden");
                    var l = h.st.mainClass;
                    return h.isIE7 && (l += " mfp-ie7"),
                    l && h._addClassToMFP(l),
                    h.updateItemHTML(),
                    f("BuildControls"),
                    u("html").css(a),
                    h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || u(document.body)),
                    h._lastFocusedEl = document.activeElement,
                    setTimeout(function() {
                        h.content ? (h._addClassToMFP(x),
                        h._setFocus()) : h.bgOverlay.addClass(x),
                        m.on("focusin" + k, h._onFocusIn)
                    }, 16),
                    h.isOpen = !0,
                    h.updateSize(s),
                    f(w),
                    e
                }
                h.updateItemHTML()
            },
            close: function() {
                h.isOpen && (f(y),
                h.isOpen = !1,
                h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP(n),
                setTimeout(function() {
                    h._close()
                }, h.st.removalDelay)) : h._close())
            },
            _close: function() {
                f(l);
                var e = n + " " + x + " ";
                h.bgOverlay.detach(),
                h.wrap.detach(),
                h.container.empty(),
                h.st.mainClass && (e += h.st.mainClass + " "),
                h._removeClassFromMFP(e),
                h.fixedContentPos && (e = {
                    marginRight: ""
                },
                h.isIE7 ? u("body, html").css("overflow", "") : e.overflow = "",
                u("html").css(e)),
                m.off("keyup.mfp focusin" + k),
                h.ev.off(k),
                h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                h.bgOverlay.attr("class", "mfp-bg"),
                h.container.attr("class", "mfp-container"),
                !h.st.showCloseBtn || h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type] || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(),
                h.st.autoFocusLast && h._lastFocusedEl && u(h._lastFocusedEl).focus(),
                h.currItem = null,
                h.content = null,
                h.currTemplate = null,
                h.prevHeight = 0,
                f("AfterClose")
            },
            updateSize: function(e) {
                var t;
                h.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth,
                t = window.innerHeight * t,
                h.wrap.css("height", t),
                h.wH = t) : h.wH = e || b.height(),
                h.fixedContentPos || h.wrap.css("height", h.wH),
                f("Resize")
            },
            updateItemHTML: function() {
                var e = h.items[h.index];
                h.contentContainer.detach(),
                h.content && h.content.detach();
                var t = (e = !e.parsed ? h.parseEl(h.index) : e).type;
                f("BeforeChange", [h.currItem ? h.currItem.type : "", t]),
                h.currItem = e,
                h.currTemplate[t] || (n = !!h.st[t] && h.st[t].markup,
                f("FirstMarkupParse", n),
                h.currTemplate[t] = !n || u(n)),
                o && o !== e.type && h.container.removeClass("mfp-" + o + "-holder");
                var n = h["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, h.currTemplate[t]);
                h.appendContent(n, t),
                e.preloaded = !0,
                f("Change", e),
                o = e.type,
                h.container.prepend(h.contentContainer),
                f("AfterChange")
            },
            appendContent: function(e, t) {
                (h.content = e) ? h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[t] ? h.content.find(".mfp-close").length || h.content.append(p()) : h.content = e : h.content = "",
                f("BeforeAppend"),
                h.container.addClass("mfp-" + t + "-holder"),
                h.contentContainer.append(h.content)
            },
            parseEl: function(e) {
                var t, n = h.items[e];
                if ((n = n.tagName ? {
                    el: u(n)
                } : (t = n.type,
                {
                    data: n,
                    src: n.src
                })).el) {
                    for (var i = h.types, o = 0; o < i.length; o++)
                        if (n.el.hasClass("mfp-" + i[o])) {
                            t = i[o];
                            break
                        }
                    n.src = n.el.attr("data-mfp-src"),
                    n.src || (n.src = n.el.attr("href"))
                }
                return n.type = t || h.st.type || "inline",
                n.index = e,
                n.parsed = !0,
                h.items[e] = n,
                f("ElementParse", n),
                h.items[e]
            },
            addGroup: function(t, n) {
                function e(e) {
                    e.mfpEl = this,
                    h._openClick(e, t, n)
                }
                var i = "click.magnificPopup";
                (n = n || {}).mainEl = t,
                n.items ? (n.isObj = !0,
                t.off(i).on(i, e)) : (n.isObj = !1,
                n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
            },
            _openClick: function(e, t, n) {
                if ((void 0 !== n.midClick ? n : u.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                    var i = (void 0 !== n.disableOn ? n : u.magnificPopup.defaults).disableOn;
                    if (i)
                        if (u.isFunction(i)) {
                            if (!i.call(h))
                                return !0
                        } else if (b.width() < i)
                            return !0;
                    e.type && (e.preventDefault(),
                    h.isOpen && e.stopPropagation()),
                    n.el = u(e.mfpEl),
                    n.delegate && (n.items = t.find(n.delegate)),
                    h.open(n)
                }
            },
            updateStatus: function(e, t) {
                var n;
                h.preloader && (i !== e && h.container.removeClass("mfp-s-" + i),
                n = {
                    status: e,
                    text: t = !t && "loading" === e ? h.st.tLoading : t
                },
                f("UpdateStatus", n),
                e = n.status,
                h.preloader.html(t = n.text),
                h.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                h.container.addClass("mfp-s-" + e),
                i = e)
            },
            _checkIfClose: function(e) {
                if (!u(e).hasClass(s)) {
                    var t = h.st.closeOnContentClick
                      , n = h.st.closeOnBgClick;
                    if (t && n)
                        return !0;
                    if (!h.content || u(e).hasClass("mfp-close") || h.preloader && e === h.preloader[0])
                        return !0;
                    if (e === h.content[0] || u.contains(h.content[0], e)) {
                        if (t)
                            return !0
                    } else if (n && u.contains(document, e))
                        return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                h.bgOverlay.addClass(e),
                h.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e),
                h.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (h.isIE7 ? m.height() : document.body.scrollHeight) > (e || b.height())
            },
            _setFocus: function() {
                (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
            },
            _onFocusIn: function(e) {
                if (e.target !== h.wrap[0] && !u.contains(h.wrap[0], e.target))
                    return h._setFocus(),
                    !1
            },
            _parseMarkup: function(o, e, t) {
                var r;
                t.data && (e = u.extend(t.data, e)),
                f(v, [o, e, t]),
                u.each(e, function(e, t) {
                    return void 0 === t || !1 === t || void (1 < (r = e.split("_")).length ? 0 < (n = o.find(k + "-" + r[0])).length && ("replaceWith" === (i = r[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(u("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(r[1], t)) : o.find(k + "-" + e).html(t));
                    var n, i
                })
            },
            _getScrollbarSize: function() {
                var e;
                return void 0 === h.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                h.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)),
                h.scrollbarSize
            }
        },
        modules: [],
        open: function(e, t) {
            return r(),
            (e = e ? u.extend(!0, {}, e) : {}).isObj = !0,
            e.index = t || 0,
            this.instance.open(e)
        },
        close: function() {
            return u.magnificPopup.instance && u.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (u.magnificPopup.defaults[e] = t.options),
            u.extend(this.proto, t.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    u.fn.magnificPopup = function(e) {
        r();
        var t, n, i, o = u(this);
        return "string" == typeof e ? "open" === e ? (t = a ? o.data("magnificPopup") : o[0].magnificPopup,
        n = parseInt(arguments[1], 10) || 0,
        i = t.items ? t.items[n] : (i = o,
        (i = t.delegate ? i.find(t.delegate) : i).eq(n)),
        h._openClick({
            mfpEl: i
        }, o, t)) : h.isOpen && h[e].apply(h, Array.prototype.slice.call(arguments, 1)) : (e = u.extend(!0, {}, e),
        a ? o.data("magnificPopup", e) : o[0].magnificPopup = e,
        h.addGroup(o, e)),
        o
    }
    ;
    function S() {
        C && (_.after(C.addClass(T)).detach(),
        C = null)
    }
    var T, _, C, M = "inline";
    u.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                h.types.push(M),
                c(l + "." + M, function() {
                    S()
                })
            },
            getInline: function(e, t) {
                if (S(),
                e.src) {
                    var n, i = h.st.inline, o = u(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (_ || (T = i.hiddenClass,
                    _ = d(T),
                    T = "mfp-" + T),
                    C = o.after(_).detach().removeClass(T)),
                    h.updateStatus("ready")) : (h.updateStatus("error", i.tNotFound),
                    o = u("<div>")),
                    e.inlineElement = o
                }
                return h.updateStatus("ready"),
                h._parseMarkup(t, {}, e),
                t
            }
        }
    });
    function D() {
        A && u(document.body).removeClass(A)
    }
    function O() {
        D(),
        h.req && h.req.abort()
    }
    var A, E = "ajax";
    u.magnificPopup.registerModule(E, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                h.types.push(E),
                A = h.st.ajax.cursor,
                c(l + "." + E, O),
                c("BeforeChange." + E, O)
            },
            getAjax: function(i) {
                A && u(document.body).addClass(A),
                h.updateStatus("loading");
                var e = u.extend({
                    url: i.src,
                    success: function(e, t, n) {
                        n = {
                            data: e,
                            xhr: n
                        };
                        f("ParseAjax", n),
                        h.appendContent(u(n.data), E),
                        i.finished = !0,
                        D(),
                        h._setFocus(),
                        setTimeout(function() {
                            h.wrap.addClass(x)
                        }, 16),
                        h.updateStatus("ready"),
                        f("AjaxContentAdded")
                    },
                    error: function() {
                        D(),
                        i.finished = i.loadError = !0,
                        h.updateStatus("error", h.st.ajax.tError.replace("%url%", i.src))
                    }
                }, h.st.ajax.settings);
                return h.req = u.ajax(e),
                ""
            }
        }
    });
    var P;
    u.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = h.st.image
                  , t = ".image";
                h.types.push("image"),
                c(w + t, function() {
                    "image" === h.currItem.type && e.cursor && u(document.body).addClass(e.cursor)
                }),
                c(l + t, function() {
                    e.cursor && u(document.body).removeClass(e.cursor),
                    b.off("resize" + k)
                }),
                c("Resize" + t, h.resizeImage),
                h.isLowIE && c("AfterChange", h.resizeImage)
            },
            resizeImage: function() {
                var e, t = h.currItem;
                t && t.img && h.st.image.verticalFit && (e = 0,
                h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", h.wH - e))
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                P && clearInterval(P),
                e.isCheckingImgSize = !1,
                f("ImageHasSize", e),
                e.imgHidden && (h.content && h.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(t) {
                function n(e) {
                    P && clearInterval(P),
                    P = setInterval(function() {
                        0 < o.naturalWidth ? h._onImageHasSize(t) : (200 < i && clearInterval(P),
                        3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))
                    }, e)
                }
                var i = 0
                  , o = t.img[0];
                n(1)
            },
            getImage: function(e, t) {
                function n() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("ready")),
                    e.hasSize = !0,
                    e.loaded = !0,
                    f("ImageLoadComplete")) : ++r < 200 ? setTimeout(n, 100) : i())
                }
                function i() {
                    e && (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("error", s.tError.replace("%url%", e.src))),
                    e.hasSize = !0,
                    e.loaded = !0,
                    e.loadError = !0)
                }
                var o, r = 0, s = h.st.image, a = t.find(".mfp-img");
                return a.length && ((o = document.createElement("img")).className = "mfp-img",
                e.el && e.el.find("img").length && (o.alt = e.el.find("img").attr("alt")),
                e.img = u(o).on("load.mfploader", n).on("error.mfploader", i),
                o.src = e.src,
                a.is("img") && (e.img = e.img.clone()),
                0 < (o = e.img[0]).naturalWidth ? e.hasSize = !0 : o.width || (e.hasSize = !1)),
                h._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title)
                            return e.data.title;
                        var t = h.st.image.titleSrc;
                        if (t) {
                            if (u.isFunction(t))
                                return t.call(h, e);
                            if (e.el)
                                return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e),
                h.resizeImage(),
                e.hasSize ? (P && clearInterval(P),
                e.loadError ? (t.addClass("mfp-loading"),
                h.updateStatus("error", s.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                h.updateStatus("ready"))) : (h.updateStatus("loading"),
                e.loading = !0,
                e.hasSize || (e.imgHidden = !0,
                t.addClass("mfp-loading"),
                h.findImageSize(e))),
                t
            }
        }
    });
    var $;
    u.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t, n, i, o, r, s = h.st.zoom, a = ".zoom";
                s.enabled && h.supportsTransition && (t = s.duration,
                n = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                      , n = "all " + s.duration / 1e3 + "s " + s.easing
                      , i = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }
                      , e = "transition";
                    return i["-webkit-" + e] = i["-moz-" + e] = i["-o-" + e] = i[e] = n,
                    t.css(i),
                    t
                }
                ,
                i = function() {
                    h.content.css("visibility", "visible")
                }
                ,
                c("BuildControls" + a, function() {
                    h._allowZoom() && (clearTimeout(o),
                    h.content.css("visibility", "hidden"),
                    (e = h._getItemToZoom()) ? ((r = n(e)).css(h._getOffset()),
                    h.wrap.append(r),
                    o = setTimeout(function() {
                        r.css(h._getOffset(!0)),
                        o = setTimeout(function() {
                            i(),
                            setTimeout(function() {
                                r.remove(),
                                e = r = null,
                                f("ZoomAnimationEnded")
                            }, 16)
                        }, t)
                    }, 16)) : i())
                }),
                c(y + a, function() {
                    if (h._allowZoom()) {
                        if (clearTimeout(o),
                        h.st.removalDelay = t,
                        !e) {
                            if (!(e = h._getItemToZoom()))
                                return;
                            r = n(e)
                        }
                        r.css(h._getOffset(!0)),
                        h.wrap.append(r),
                        h.content.css("visibility", "hidden"),
                        setTimeout(function() {
                            r.css(h._getOffset())
                        }, 16)
                    }
                }),
                c(l + a, function() {
                    h._allowZoom() && (i(),
                    r && r.remove(),
                    e = null)
                }))
            },
            _allowZoom: function() {
                return "image" === h.currItem.type
            },
            _getItemToZoom: function() {
                return !!h.currItem.hasSize && h.currItem.img
            },
            _getOffset: function(e) {
                var t = e ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem)
                  , n = t.offset()
                  , i = parseInt(t.css("padding-top"), 10)
                  , e = parseInt(t.css("padding-bottom"), 10);
                n.top -= u(window).scrollTop() - i;
                i = {
                    width: t.width(),
                    height: (a ? t.innerHeight() : t[0].offsetHeight) - e - i
                };
                return ($ = void 0 === $ ? void 0 !== document.createElement("p").style.MozTransform : $) ? i["-moz-transform"] = i.transform = "translate(" + n.left + "px," + n.top + "px)" : (i.left = n.left,
                i.top = n.top),
                i
            }
        }
    });
    function H(e) {
        var t;
        !h.currTemplate[L] || (t = h.currTemplate[L].find("iframe")).length && (e || (t[0].src = "//about:blank"),
        h.isIE8 && t.css("display", e ? "block" : "none"))
    }
    var L = "iframe";
    u.magnificPopup.registerModule(L, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                h.types.push(L),
                c("BeforeChange", function(e, t, n) {
                    t !== n && (t === L ? H() : n === L && H(!0))
                }),
                c(l + "." + L, function() {
                    H()
                })
            },
            getIframe: function(e, t) {
                var n = e.src
                  , i = h.st.iframe;
                u.each(i.patterns, function() {
                    if (-1 < n.indexOf(this.index))
                        return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                        n = this.src.replace("%id%", n),
                        !1
                });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n),
                h._parseMarkup(t, o, e),
                h.updateStatus("ready"),
                t
            }
        }
    });
    function I(e) {
        var t = h.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
    function j(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    u.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var r = h.st.gallery
                  , e = ".mfp-gallery";
                if (h.direction = !0,
                !r || !r.enabled)
                    return !1;
                g += " mfp-gallery",
                c(w + e, function() {
                    r.navigateByImgClick && h.wrap.on("click" + e, ".mfp-img", function() {
                        if (1 < h.items.length)
                            return h.next(),
                            !1
                    }),
                    m.on("keydown" + e, function(e) {
                        37 === e.keyCode ? h.prev() : 39 === e.keyCode && h.next()
                    })
                }),
                c("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = j(t.text, h.currItem.index, h.items.length))
                }),
                c(v + e, function(e, t, n, i) {
                    var o = h.items.length;
                    n.counter = 1 < o ? j(r.tCounter, i.index, o) : ""
                }),
                c("BuildControls" + e, function() {
                    var e, t;
                    1 < h.items.length && r.arrows && !h.arrowLeft && (t = r.arrowMarkup,
                    e = h.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                    t = h.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s),
                    e.click(function() {
                        h.prev()
                    }),
                    t.click(function() {
                        h.next()
                    }),
                    h.container.append(e.add(t)))
                }),
                c("Change" + e, function() {
                    h._preloadTimeout && clearTimeout(h._preloadTimeout),
                    h._preloadTimeout = setTimeout(function() {
                        h.preloadNearbyImages(),
                        h._preloadTimeout = null
                    }, 16)
                }),
                c(l + e, function() {
                    m.off(e),
                    h.wrap.off("click" + e),
                    h.arrowRight = h.arrowLeft = null
                })
            },
            next: function() {
                h.direction = !0,
                h.index = I(h.index + 1),
                h.updateItemHTML()
            },
            prev: function() {
                h.direction = !1,
                h.index = I(h.index - 1),
                h.updateItemHTML()
            },
            goTo: function(e) {
                h.direction = e >= h.index,
                h.index = e,
                h.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var e = h.st.gallery.preload, t = Math.min(e[0], h.items.length), n = Math.min(e[1], h.items.length), i = 1; i <= (h.direction ? n : t); i++)
                    h._preloadItem(h.index + i);
                for (i = 1; i <= (h.direction ? t : n); i++)
                    h._preloadItem(h.index - i)
            },
            _preloadItem: function(e) {
                var t;
                e = I(e),
                h.items[e].preloaded || ((t = h.items[e]).parsed || (t = h.parseEl(e)),
                f("LazyLoad", t),
                "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
                    t.hasSize = !0
                }).on("error.mfploader", function() {
                    t.hasSize = !0,
                    t.loadError = !0,
                    f("LazyLoadError", t)
                }).attr("src", t.src)),
                t.preloaded = !0)
            }
        }
    });
    var N = "retina";
    u.magnificPopup.registerModule(N, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                var n, i;
                1 < window.devicePixelRatio && (n = h.st.retina,
                i = n.ratio,
                1 < (i = isNaN(i) ? i() : i) && (c("ImageHasSize." + N, function(e, t) {
                    t.img.css({
                        "max-width": t.img[0].naturalWidth / i,
                        width: "100%"
                    })
                }),
                c("ElementParse." + N, function(e, t) {
                    t.src = n.replaceSrc(t, i)
                })))
            }
        }
    }),
    r()
}),
function() {
    "use strict";
    var t = 0
      , r = {};
    function n(e) {
        if (!e)
            throw new Error("No options passed to Waypoint constructor");
        if (!e.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = n.Adapter.extend({}, n.defaults, e),
        this.element = this.options.element,
        this.adapter = new n.Adapter(this.element),
        this.callback = e.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = n.Context.findOrCreateByElement(this.options.context),
        n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        r[this.key] = this,
        t += 1
    }
    n.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    n.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    n.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete r[this.key]
    }
    ,
    n.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    n.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    n.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    n.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    n.invokeAll = function(e) {
        var t, n = [];
        for (t in r)
            n.push(r[t]);
        for (var i = 0, o = n.length; i < o; i++)
            n[i][e]()
    }
    ,
    n.destroyAll = function() {
        n.invokeAll("destroy")
    }
    ,
    n.disableAll = function() {
        n.invokeAll("disable")
    }
    ,
    n.enableAll = function() {
        n.invokeAll("enable")
    }
    ,
    n.refreshAll = function() {
        n.Context.refreshAll()
    }
    ,
    n.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    n.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    n.adapters = [],
    n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    n.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = n
}(),
function() {
    "use strict";
    function t(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    var n = 0
      , i = {}
      , p = window.Waypoint
      , e = window.onload;
    function o(e) {
        this.element = e,
        this.Adapter = p.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + n,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        i[e.waypointContextKey] = this,
        n += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    o.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    o.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"),
        delete i[this.key])
    }
    ,
    o.prototype.createThrottledResizeHandler = function() {
        var e = this;
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0,
            p.requestAnimationFrame(t))
        })
    }
    ,
    o.prototype.createThrottledScrollHandler = function() {
        var e = this;
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", function() {
            e.didScroll && !p.isTouch || (e.didScroll = !0,
            p.requestAnimationFrame(t))
        })
    }
    ,
    o.prototype.handleResize = function() {
        p.Context.refreshAll()
    }
    ,
    o.prototype.handleScroll = function() {
        var e, t, n = {}, i = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (e in i) {
            var o, r = i[e], s = r.newScroll > r.oldScroll ? r.forward : r.backward;
            for (o in this.waypoints[e]) {
                var a = this.waypoints[e][o]
                  , l = r.oldScroll < a.triggerPoint
                  , u = r.newScroll >= a.triggerPoint;
                (l && u || !l && !u) && (a.queueTrigger(s),
                n[a.group.id] = a.group)
            }
        }
        for (t in n)
            n[t].flushTriggers();
        this.oldScroll = {
            x: i.horizontal.newScroll,
            y: i.vertical.newScroll
        }
    }
    ,
    o.prototype.innerHeight = function() {
        return this.element == this.element.window ? p.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    o.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    o.prototype.innerWidth = function() {
        return this.element == this.element.window ? p.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    o.prototype.destroy = function() {
        var e, t = [];
        for (e in this.waypoints)
            for (var n in this.waypoints[e])
                t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; i < o; i++)
            t[i].destroy()
    }
    ,
    o.prototype.refresh = function() {
        var e, t, n = this.element == this.element.window, i = n ? void 0 : this.adapter.offset(), o = {};
        for (t in this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: n ? 0 : i.left,
                contextScroll: n ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: n ? 0 : i.top,
                contextScroll: n ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var r, s = e[t];
            for (r in this.waypoints[t]) {
                var a, l = this.waypoints[t][r], u = l.options.offset, c = l.triggerPoint, d = 0, f = null == c;
                l.element !== l.element.window && (d = l.adapter.offset()[s.offsetProp]),
                "function" == typeof u ? u = u.apply(l) : "string" == typeof u && (u = parseFloat(u),
                -1 < l.options.offset.indexOf("%") && (u = Math.ceil(s.contextDimension * u / 100))),
                a = s.contextScroll - s.contextOffset,
                l.triggerPoint = d + a - u,
                a = c < s.oldScroll,
                u = l.triggerPoint >= s.oldScroll,
                c = !a && !u,
                !f && (a && u) ? (l.queueTrigger(s.backward),
                o[l.group.id] = l.group) : (!f && c || f && s.oldScroll >= l.triggerPoint) && (l.queueTrigger(s.forward),
                o[l.group.id] = l.group)
            }
        }
        return p.requestAnimationFrame(function() {
            for (var e in o)
                o[e].flushTriggers()
        }),
        this
    }
    ,
    o.findOrCreateByElement = function(e) {
        return o.findByElement(e) || new o(e)
    }
    ,
    o.refreshAll = function() {
        for (var e in i)
            i[e].refresh()
    }
    ,
    o.findByElement = function(e) {
        return i[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        e && e(),
        o.refreshAll()
    }
    ,
    p.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }
    ,
    p.Context = o
}(),
function() {
    "use strict";
    function r(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function s(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    var t = {
        vertical: {},
        horizontal: {}
    }
      , n = window.Waypoint;
    function i(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        t[this.axis][this.name] = this
    }
    i.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e];
            t.sort("up" === e || "left" === e ? s : r);
            for (var n = 0, i = t.length; n < i; n += 1) {
                var o = t[n];
                !o.options.continuous && n !== t.length - 1 || o.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(r);
        e = n.Adapter.inArray(e, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(r);
        e = n.Adapter.inArray(e, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    i.prototype.remove = function(e) {
        e = n.Adapter.inArray(e, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(e) {
        return t[e.axis][e.name] || new i(e)
    }
    ,
    n.Group = i
}(),
function() {
    "use strict";
    var n = window.jQuery
      , e = window.Waypoint;
    function i(e) {
        this.$element = n(e)
    }
    n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
        i.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e)
        }
    }),
    n.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
        i[t] = n[t]
    }),
    e.adapters.push({
        name: "jquery",
        Adapter: i
    }),
    e.Adapter = i
}(),
function() {
    "use strict";
    var o = window.Waypoint;
    function e(i) {
        return function() {
            var t = []
              , n = arguments[0];
            return i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]),
            this.each(function() {
                var e = i.extend({}, n, {
                    element: this
                });
                "string" == typeof e.context && (e.context = i(this).closest(e.context)[0]),
                t.push(new o(e))
            }),
            t
        }
    }
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e;
    function d() {
        return e.apply(null, arguments)
    }
    function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function a(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function r(e) {
        return void 0 === e
    }
    function l(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function o(e, t) {
        for (var n = [], i = 0; i < e.length; ++i)
            n.push(t(e[i], i));
        return n
    }
    function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function u(e, t) {
        for (var n in t)
            f(t, n) && (e[n] = t[n]);
        return f(t, "toString") && (e.toString = t.toString),
        f(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function c(e, t, n, i) {
        return Dt(e, t, n, i, !0).utc()
    }
    function p(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function h(e) {
        if (null == e._isValid) {
            var t = p(e)
              , n = g.call(t.parsedDateParts, function(e) {
                return null != e
            })
              , n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return n;
            e._isValid = n
        }
        return e._isValid
    }
    function m(e) {
        var t = c(NaN);
        return null != e ? u(p(t), e) : p(t).userInvalidated = !0,
        t
    }
    var g = Array.prototype.some || function(e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t))
                return !0;
        return !1
    }
      , y = d.momentProperties = [];
    function v(e, t) {
        var n, i, o;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        r(t._i) || (e._i = t._i),
        r(t._f) || (e._f = t._f),
        r(t._l) || (e._l = t._l),
        r(t._strict) || (e._strict = t._strict),
        r(t._tzm) || (e._tzm = t._tzm),
        r(t._isUTC) || (e._isUTC = t._isUTC),
        r(t._offset) || (e._offset = t._offset),
        r(t._pf) || (e._pf = p(t)),
        r(t._locale) || (e._locale = t._locale),
        0 < y.length)
            for (n = 0; n < y.length; n++)
                r(o = t[i = y[n]]) || (e[i] = o);
        return e
    }
    var t = !1;
    function w(e) {
        v(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && (t = !0,
        d.updateOffset(this),
        t = !1)
    }
    function k(e) {
        return e instanceof w || null != e && null != e._isAMomentObject
    }
    function x(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function b(e) {
        var t = +e
          , e = 0;
        return e = 0 != t && isFinite(t) ? x(t) : e
    }
    function S(e, t, n) {
        for (var i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), r = 0, s = 0; s < i; s++)
            (n && e[s] !== t[s] || !n && b(e[s]) !== b(t[s])) && r++;
        return r + o
    }
    function T(e) {
        !1 === d.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function n(o, r) {
        var s = !0;
        return u(function() {
            if (null != d.deprecationHandler && d.deprecationHandler(null, o),
            s) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "",
                    "object" == typeof arguments[n]) {
                        for (var i in e += "\n[" + n + "] ",
                        arguments[0])
                            e += i + ": " + arguments[0][i] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[n];
                    t.push(e)
                }
                T(o + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var _ = {};
    function C(e, t) {
        null != d.deprecationHandler && d.deprecationHandler(e, t),
        _[e] || (T(t),
        _[e] = !0)
    }
    function M(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function D(e, t) {
        var n, i = u({}, e);
        for (n in t)
            f(t, n) && (a(e[n]) && a(t[n]) ? (i[n] = {},
            u(i[n], e[n]),
            u(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e)
            f(e, n) && !f(t, n) && a(e[n]) && (i[n] = u({}, i[n]));
        return i
    }
    function O(e) {
        null != e && this.set(e)
    }
    d.suppressDeprecationWarnings = !1,
    d.deprecationHandler = null;
    var A = Object.keys || function(e) {
        var t, n = [];
        for (t in e)
            f(e, t) && n.push(t);
        return n
    }
    ;
    var E = {};
    function P(e, t) {
        var n = e.toLowerCase();
        E[n] = E[n + "s"] = E[t] = e
    }
    function $(e) {
        return "string" == typeof e ? E[e] || E[e.toLowerCase()] : void 0
    }
    function H(e) {
        var t, n, i = {};
        for (n in e)
            f(e, n) && (t = $(n)) && (i[t] = e[n]);
        return i
    }
    var L = {};
    function I(e, t) {
        L[e] = t
    }
    function j(e, t, n) {
        var i = "" + Math.abs(e);
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - i.length)).toString().substr(1) + i
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , Y = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , W = {}
      , z = {};
    function q(e, t, n, i) {
        var o = "string" == typeof i ? function() {
            return this[i]()
        }
        : i;
        e && (z[e] = o),
        t && (z[t[0]] = function() {
            return j(o.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (z[n] = function() {
            return this.localeData().ordinal(o.apply(this, arguments), e)
        }
        )
    }
    function R(e, t) {
        return e.isValid() ? (t = F(t, e.localeData()),
        W[t] = W[t] || function(i) {
            for (var e, o = i.match(N), t = 0, r = o.length; t < r; t++)
                z[o[t]] ? o[t] = z[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function(e) {
                for (var t = "", n = 0; n < r; n++)
                    t += M(o[n]) ? o[n].call(e, i) : o[n];
                return t
            }
        }(t),
        W[t](e)) : e.localeData().invalidDate()
    }
    function F(e, t) {
        var n = 5;
        function i(e) {
            return t.longDateFormat(e) || e
        }
        for (Y.lastIndex = 0; 0 <= n && Y.test(e); )
            e = e.replace(Y, i),
            Y.lastIndex = 0,
            --n;
        return e
    }
    var U = /\d/
      , B = /\d\d/
      , G = /\d{3}/
      , V = /\d{4}/
      , Z = /[+-]?\d{6}/
      , X = /\d\d?/
      , Q = /\d\d\d\d?/
      , K = /\d\d\d\d\d\d?/
      , J = /\d{1,3}/
      , ee = /\d{1,4}/
      , te = /[+-]?\d{1,6}/
      , ne = /\d+/
      , ie = /[+-]?\d+/
      , oe = /Z|[+-]\d\d:?\d\d/gi
      , re = /Z|[+-]\d\d(?::?\d\d)?/gi
      , se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
      , ae = {};
    function le(e, n, i) {
        ae[e] = M(n) ? n : function(e, t) {
            return e && i ? i : n
        }
    }
    function ue(e, t) {
        return f(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(ce(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, o) {
            return t || n || i || o
        })))
    }
    function ce(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var de = {};
    function fe(e, n) {
        var t, i = n;
        for ("string" == typeof e && (e = [e]),
        l(n) && (i = function(e, t) {
            t[n] = b(e)
        }
        ),
        t = 0; t < e.length; t++)
            de[e[t]] = i
    }
    function pe(e, o) {
        fe(e, function(e, t, n, i) {
            n._w = n._w || {},
            o(e, n._w, n, i)
        })
    }
    var he = 0
      , me = 1
      , ge = 2
      , ye = 3
      , ve = 4
      , we = 5
      , ke = 6
      , xe = 7
      , be = 8;
    function Se(e) {
        return Te(e) ? 366 : 365
    }
    function Te(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    q("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
    q(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    q(0, ["YYYY", 4], 0, "year"),
    q(0, ["YYYYY", 5], 0, "year"),
    q(0, ["YYYYYY", 6, !0], 0, "year"),
    P("year", "y"),
    I("year", 1),
    le("Y", ie),
    le("YY", X, B),
    le("YYYY", ee, V),
    le("YYYYY", te, Z),
    le("YYYYYY", te, Z),
    fe(["YYYYY", "YYYYYY"], he),
    fe("YYYY", function(e, t) {
        t[he] = 2 === e.length ? d.parseTwoDigitYear(e) : b(e)
    }),
    fe("YY", function(e, t) {
        t[he] = d.parseTwoDigitYear(e)
    }),
    fe("Y", function(e, t) {
        t[he] = parseInt(e, 10)
    }),
    d.parseTwoDigitYear = function(e) {
        return b(e) + (68 < b(e) ? 1900 : 2e3)
    }
    ;
    var _e, Ce = Me("FullYear", !0);
    function Me(t, n) {
        return function(e) {
            return null != e ? (Oe(this, t, e),
            d.updateOffset(this, n),
            this) : De(this, t)
        }
    }
    function De(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function Oe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ae(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function Ae(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = (t % (n = 12) + n) % n;
        return e += (t - n) / 12,
        1 == n ? Te(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    _e = Array.prototype.indexOf || function(e) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    q("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    q("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    q("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    P("month", "M"),
    I("month", 8),
    le("M", X),
    le("MM", X, B),
    le("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    le("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    fe(["M", "MM"], function(e, t) {
        t[me] = b(e) - 1
    }),
    fe(["MMM", "MMMM"], function(e, t, n, i) {
        i = n._locale.monthsParse(e, i, n._strict);
        null != i ? t[me] = i : p(n).invalidMonth = e
    });
    var Ee = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var $e = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function He(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = b(t);
            else if (!l(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), Ae(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function Le(e) {
        return null != e ? (He(this, e),
        d.updateOffset(this, !0),
        this) : De(this, "Month")
    }
    var Ie = se;
    var je = se;
    function Ne() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n = [], i = [], o = [], r = 0; r < 12; r++)
            t = c([2e3, r]),
            n.push(this.monthsShort(t, "")),
            i.push(this.months(t, "")),
            o.push(this.months(t, "")),
            o.push(this.monthsShort(t, ""));
        for (n.sort(e),
        i.sort(e),
        o.sort(e),
        r = 0; r < 12; r++)
            n[r] = ce(n[r]),
            i[r] = ce(i[r]);
        for (r = 0; r < 24; r++)
            o[r] = ce(o[r]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i")
    }
    function Ye(e, t, n, i, o, r, s) {
        var a;
        return e < 100 && 0 <= e ? (a = new Date(e + 400,t,n,i,o,r,s),
        isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e,t,n,i,o,r,s),
        a
    }
    function We(e) {
        var t;
        return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400,
        t = new Date(Date.UTC.apply(null, t)),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
        t
    }
    function ze(e, t, n) {
        n = 7 + t - n;
        return n - (7 + We(e, 0, n).getUTCDay() - t) % 7 - 1
    }
    function qe(e, t, n, i, o) {
        var r, o = 1 + 7 * (t - 1) + (7 + n - i) % 7 + ze(e, i, o), o = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1,
        o - Se(e)) : (r = e,
        o);
        return {
            year: r,
            dayOfYear: o
        }
    }
    function Re(e, t, n) {
        var i, o, r = ze(e.year(), t, n), r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return r < 1 ? i = r + Fe(o = e.year() - 1, t, n) : r > Fe(e.year(), t, n) ? (i = r - Fe(e.year(), t, n),
        o = e.year() + 1) : (o = e.year(),
        i = r),
        {
            week: i,
            year: o
        }
    }
    function Fe(e, t, n) {
        var i = ze(e, t, n)
          , n = ze(e + 1, t, n);
        return (Se(e) - i + n) / 7
    }
    q("w", ["ww", 2], "wo", "week"),
    q("W", ["WW", 2], "Wo", "isoWeek"),
    P("week", "w"),
    P("isoWeek", "W"),
    I("week", 5),
    I("isoWeek", 5),
    le("w", X),
    le("ww", X, B),
    le("W", X),
    le("WW", X, B),
    pe(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = b(e)
    });
    function Ue(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    q("d", 0, "do", "day"),
    q("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    q("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    q("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    q("e", 0, 0, "weekday"),
    q("E", 0, 0, "isoWeekday"),
    P("day", "d"),
    P("weekday", "e"),
    P("isoWeekday", "E"),
    I("day", 11),
    I("weekday", 11),
    I("isoWeekday", 11),
    le("d", X),
    le("e", X),
    le("E", X),
    le("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    le("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    le("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    pe(["dd", "ddd", "dddd"], function(e, t, n, i) {
        i = n._locale.weekdaysParse(e, i, n._strict);
        null != i ? t.d = i : p(n).invalidWeekday = e
    }),
    pe(["d", "e", "E"], function(e, t, n, i) {
        t[i] = b(e)
    });
    var Be = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ge = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Ze = se;
    var Xe = se;
    var Qe = se;
    function Ke() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n, i, o = [], r = [], s = [], a = [], l = 0; l < 7; l++)
            i = c([2e3, 1]).day(l),
            t = this.weekdaysMin(i, ""),
            n = this.weekdaysShort(i, ""),
            i = this.weekdays(i, ""),
            o.push(t),
            r.push(n),
            s.push(i),
            a.push(t),
            a.push(n),
            a.push(i);
        for (o.sort(e),
        r.sort(e),
        s.sort(e),
        a.sort(e),
        l = 0; l < 7; l++)
            r[l] = ce(r[l]),
            s[l] = ce(s[l]),
            a[l] = ce(a[l]);
        this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")","i")
    }
    function Je() {
        return this.hours() % 12 || 12
    }
    function et(e, t) {
        q(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function tt(e, t) {
        return t._meridiemParse
    }
    q("H", ["HH", 2], 0, "hour"),
    q("h", ["hh", 2], 0, Je),
    q("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    q("hmm", 0, 0, function() {
        return "" + Je.apply(this) + j(this.minutes(), 2)
    }),
    q("hmmss", 0, 0, function() {
        return "" + Je.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
    }),
    q("Hmm", 0, 0, function() {
        return "" + this.hours() + j(this.minutes(), 2)
    }),
    q("Hmmss", 0, 0, function() {
        return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
    }),
    et("a", !0),
    et("A", !1),
    P("hour", "h"),
    I("hour", 13),
    le("a", tt),
    le("A", tt),
    le("H", X),
    le("h", X),
    le("k", X),
    le("HH", X, B),
    le("hh", X, B),
    le("kk", X, B),
    le("hmm", Q),
    le("hmmss", K),
    le("Hmm", Q),
    le("Hmmss", K),
    fe(["H", "HH"], ye),
    fe(["k", "kk"], function(e, t, n) {
        e = b(e);
        t[ye] = 24 === e ? 0 : e
    }),
    fe(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    fe(["h", "hh"], function(e, t, n) {
        t[ye] = b(e),
        p(n).bigHour = !0
    }),
    fe("hmm", function(e, t, n) {
        var i = e.length - 2;
        t[ye] = b(e.substr(0, i)),
        t[ve] = b(e.substr(i)),
        p(n).bigHour = !0
    }),
    fe("hmmss", function(e, t, n) {
        var i = e.length - 4
          , o = e.length - 2;
        t[ye] = b(e.substr(0, i)),
        t[ve] = b(e.substr(i, 2)),
        t[we] = b(e.substr(o)),
        p(n).bigHour = !0
    }),
    fe("Hmm", function(e, t, n) {
        var i = e.length - 2;
        t[ye] = b(e.substr(0, i)),
        t[ve] = b(e.substr(i))
    }),
    fe("Hmmss", function(e, t, n) {
        var i = e.length - 4
          , o = e.length - 2;
        t[ye] = b(e.substr(0, i)),
        t[ve] = b(e.substr(i, 2)),
        t[we] = b(e.substr(o))
    });
    var nt, it = Me("Hours", !0), ot = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Pe,
        monthsShort: $e,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Be,
        weekdaysMin: Ve,
        weekdaysShort: Ge,
        meridiemParse: /[ap]\.?m?\.?/i
    }, rt = {}, st = {};
    function at(e) {
        return e && e.toLowerCase().replace("_", "-")
    }
    function lt(e) {
        if (!rt[e] && "undefined" != typeof module && module && module.exports)
            try {
                var t = nt._abbr;
                require("./locale/" + e),
                ut(t)
            } catch (e) {}
        return rt[e]
    }
    function ut(e, t) {
        return e && ((t = r(t) ? dt(e) : ct(e, t)) ? nt = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        nt._abbr
    }
    function ct(e, t) {
        if (null === t)
            return delete rt[e],
            null;
        var n, i = ot;
        if (t.abbr = e,
        null != rt[e])
            C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            i = rt[e]._config;
        else if (null != t.parentLocale)
            if (null != rt[t.parentLocale])
                i = rt[t.parentLocale]._config;
            else {
                if (null == (n = lt(t.parentLocale)))
                    return st[t.parentLocale] || (st[t.parentLocale] = []),
                    st[t.parentLocale].push({
                        name: e,
                        config: t
                    }),
                    null;
                i = n._config
            }
        return rt[e] = new O(D(i, t)),
        st[e] && st[e].forEach(function(e) {
            ct(e.name, e.config)
        }),
        ut(e),
        rt[e]
    }
    function dt(e) {
        var t;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e))
            return nt;
        if (!s(e)) {
            if (t = lt(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, i, o, r = 0; r < e.length; ) {
                for (t = (o = at(e[r]).split("-")).length,
                n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t; ) {
                    if (i = lt(o.slice(0, t).join("-")))
                        return i;
                    if (n && n.length >= t && S(o, n, !0) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return nt
        }(e)
    }
    function ft(e) {
        var t = e._a;
        return t && -2 === p(e).overflow && (t = t[me] < 0 || 11 < t[me] ? me : t[ge] < 1 || t[ge] > Ae(t[he], t[me]) ? ge : t[ye] < 0 || 24 < t[ye] || 24 === t[ye] && (0 !== t[ve] || 0 !== t[we] || 0 !== t[ke]) ? ye : t[ve] < 0 || 59 < t[ve] ? ve : t[we] < 0 || 59 < t[we] ? we : t[ke] < 0 || 999 < t[ke] ? ke : -1,
        p(e)._overflowDayOfYear && (t < he || ge < t) && (t = ge),
        p(e)._overflowWeeks && -1 === t && (t = xe),
        p(e)._overflowWeekday && -1 === t && (t = be),
        p(e).overflow = t),
        e
    }
    function pt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function ht(e) {
        var t, n, i, o, r, s = [];
        if (!e._d) {
            for (o = e,
            r = new Date(d.now()),
            n = o._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()],
            e._w && null == e._a[ge] && null == e._a[me] && function(e) {
                var t, n, i, o, r, s, a;
                {
                    var l;
                    null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1,
                    s = 4,
                    n = pt(t.GG, e._a[he], Re(Ot(), 1, 4).year),
                    i = pt(t.W, 1),
                    ((o = pt(t.E, 1)) < 1 || 7 < o) && (a = !0)) : (r = e._locale._week.dow,
                    s = e._locale._week.doy,
                    l = Re(Ot(), r, s),
                    n = pt(t.gg, e._a[he], l.year),
                    i = pt(t.w, l.week),
                    null != t.d ? ((o = t.d) < 0 || 6 < o) && (a = !0) : null != t.e ? (o = t.e + r,
                    (t.e < 0 || 6 < t.e) && (a = !0)) : o = r)
                }
                i < 1 || i > Fe(n, r, s) ? p(e)._overflowWeeks = !0 : null != a ? p(e)._overflowWeekday = !0 : (s = qe(n, i, o, r, s),
                e._a[he] = s.year,
                e._dayOfYear = s.dayOfYear)
            }(e),
            null != e._dayOfYear && (i = pt(e._a[he], n[he]),
            (e._dayOfYear > Se(i) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0),
            i = We(i, 0, e._dayOfYear),
            e._a[me] = i.getUTCMonth(),
            e._a[ge] = i.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = s[t] = n[t];
            for (; t < 7; t++)
                e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ye] && 0 === e._a[ve] && 0 === e._a[we] && 0 === e._a[ke] && (e._nextDay = !0,
            e._a[ye] = 0),
            e._d = (e._useUTC ? We : Ye).apply(null, s),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[ye] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (p(e).weekdayMismatch = !0)
        }
    }
    var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , gt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , yt = /Z|[+-]\d\d(?::?\d\d)?/
      , vt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
      , wt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , kt = /^\/?Date\((\-?\d+)/i;
    function xt(e) {
        var t, n, i, o, r, s, a = e._i, l = mt.exec(a) || gt.exec(a);
        if (l) {
            for (p(e).iso = !0,
            t = 0,
            n = vt.length; t < n; t++)
                if (vt[t][1].exec(l[1])) {
                    o = vt[t][0],
                    i = !1 !== vt[t][2];
                    break
                }
            if (null != o) {
                if (l[3]) {
                    for (t = 0,
                    n = wt.length; t < n; t++)
                        if (wt[t][1].exec(l[3])) {
                            r = (l[2] || " ") + wt[t][0];
                            break
                        }
                    if (null == r)
                        return void (e._isValid = !1)
                }
                if (i || null == r) {
                    if (l[4]) {
                        if (!yt.exec(l[4]))
                            return void (e._isValid = !1);
                        s = "Z"
                    }
                    e._f = o + (r || "") + (s || ""),
                    Ct(e)
                } else
                    e._isValid = !1
            } else
                e._isValid = !1
        } else
            e._isValid = !1
    }
    var bt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function St(e, t, n, i, o, r) {
        o = [function(e) {
            e = parseInt(e, 10);
            {
                if (e <= 49)
                    return 2e3 + e;
                if (e <= 999)
                    return 1900 + e
            }
            return e
        }(e), $e.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(o, 10)];
        return r && o.push(parseInt(r, 10)),
        o
    }
    var Tt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function _t(e) {
        var t, n, i, o, r = bt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        r ? (t = St(r[4], r[3], r[2], r[5], r[6], r[7]),
        n = r[1],
        i = t,
        o = e,
        n && Ge.indexOf(n) !== new Date(i[0],i[1],i[2]).getDay() ? (p(o).weekdayMismatch = !0,
        o._isValid = !1) : (e._a = t,
        e._tzm = (o = r[8],
        t = r[9],
        r = r[10],
        o ? Tt[o] : t ? 0 : 60 * (((t = parseInt(r, 10)) - (r = t % 100)) / 100) + r),
        e._d = We.apply(null, e._a),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        p(e).rfc2822 = !0)) : e._isValid = !1
    }
    function Ct(e) {
        if (e._f !== d.ISO_8601)
            if (e._f !== d.RFC_2822) {
                e._a = [],
                p(e).empty = !0;
                for (var t, n, i, o, r, s = "" + e._i, a = s.length, l = 0, u = F(e._f, e._locale).match(N) || [], c = 0; c < u.length; c++)
                    n = u[c],
                    (t = (s.match(ue(n, e)) || [])[0]) && (0 < (o = s.substr(0, s.indexOf(t))).length && p(e).unusedInput.push(o),
                    s = s.slice(s.indexOf(t) + t.length),
                    l += t.length),
                    z[n] ? (t ? p(e).empty = !1 : p(e).unusedTokens.push(n),
                    i = n,
                    r = e,
                    null != (o = t) && f(de, i) && de[i](o, r._a, r, i)) : e._strict && !t && p(e).unusedTokens.push(n);
                p(e).charsLeftOver = a - l,
                0 < s.length && p(e).unusedInput.push(s),
                e._a[ye] <= 12 && !0 === p(e).bigHour && 0 < e._a[ye] && (p(e).bigHour = void 0),
                p(e).parsedDateParts = e._a.slice(0),
                p(e).meridiem = e._meridiem,
                e._a[ye] = function(e, t, n) {
                    if (null == n)
                        return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((n = e.isPM(n)) && t < 12 && (t += 12),
                    t = n || 12 !== t ? t : 0) : t
                }(e._locale, e._a[ye], e._meridiem),
                ht(e),
                ft(e)
            } else
                _t(e);
        else
            xt(e)
    }
    function Mt(e) {
        var t = e._i
          , n = e._f;
        return e._locale = e._locale || dt(e._l),
        null === t || void 0 === n && "" === t ? m({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        k(t) ? new w(ft(t)) : (i(t) ? e._d = t : s(n) ? function(e) {
            var t, n, i, o, r;
            if (0 === e._f.length)
                return p(e).invalidFormat = !0,
                e._d = new Date(NaN);
            for (o = 0; o < e._f.length; o++)
                r = 0,
                t = v({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[o],
                Ct(t),
                h(t) && (r += p(t).charsLeftOver,
                r += 10 * p(t).unusedTokens.length,
                p(t).score = r,
                (null == i || r < i) && (i = r,
                n = t));
            u(e, n || t)
        }(e) : n ? Ct(e) : r(n = (t = e)._i) ? t._d = new Date(d.now()) : i(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function(e) {
            var t = kt.exec(e._i);
            null === t ? (xt(e),
            !1 === e._isValid && (delete e._isValid,
            _t(e),
            !1 === e._isValid && (delete e._isValid,
            d.createFromInputFallback(e)))) : e._d = new Date(+t[1])
        }(t) : s(n) ? (t._a = o(n.slice(0), function(e) {
            return parseInt(e, 10)
        }),
        ht(t)) : a(n) ? function(e) {
            var t;
            e._d || (t = H(e._i),
            e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                return e && parseInt(e, 10)
            }),
            ht(e))
        }(t) : l(n) ? t._d = new Date(n) : d.createFromInputFallback(t),
        h(e) || (e._d = null),
        e))
    }
    function Dt(e, t, n, i, o) {
        var r = {};
        return !0 !== n && !1 !== n || (i = n,
        n = void 0),
        (a(e) && function(e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return;
            return 1
        }(e) || s(e) && 0 === e.length) && (e = void 0),
        r._isAMomentObject = !0,
        r._useUTC = r._isUTC = o,
        r._l = n,
        r._i = e,
        r._f = t,
        r._strict = i,
        (r = new w(ft(Mt(r = r))))._nextDay && (r.add(1, "d"),
        r._nextDay = void 0),
        r
    }
    function Ot(e, t, n, i) {
        return Dt(e, t, n, i, !1)
    }
    d.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    d.ISO_8601 = function() {}
    ,
    d.RFC_2822 = function() {}
    ;
    var At = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m()
    })
      , Et = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : m()
    });
    function Pt(e, t) {
        var n, i;
        if (!(t = 1 === t.length && s(t[0]) ? t[0] : t).length)
            return Ot();
        for (n = t[0],
        i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    var $t = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ht(e) {
        var t = H(e)
          , n = t.year || 0
          , i = t.quarter || 0
          , o = t.month || 0
          , r = t.week || t.isoWeek || 0
          , s = t.day || 0
          , a = t.hour || 0
          , l = t.minute || 0
          , u = t.second || 0
          , e = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === _e.call($t, t) || null != e[t] && isNaN(e[t]))
                    return !1;
            for (var n = !1, i = 0; i < $t.length; ++i)
                if (e[$t[i]]) {
                    if (n)
                        return !1;
                    parseFloat(e[$t[i]]) !== b(e[$t[i]]) && (n = !0)
                }
            return !0
        }(t),
        this._milliseconds = +e + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60,
        this._days = +s + 7 * r,
        this._months = +o + 3 * i + 12 * n,
        this._data = {},
        this._locale = dt(),
        this._bubble()
    }
    function Lt(e) {
        return e instanceof Ht
    }
    function It(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function jt(e, n) {
        q(e, 0, 0, function() {
            var e = this.utcOffset()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + j(~~(e / 60), 2) + n + j(~~e % 60, 2)
        })
    }
    jt("Z", ":"),
    jt("ZZ", ""),
    le("Z", re),
    le("ZZ", re),
    fe(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Yt(re, e)
    });
    var Nt = /([\+\-]|\d\d)/gi;
    function Yt(e, t) {
        t = (t || "").match(e);
        if (null === t)
            return null;
        e = ((t[t.length - 1] || []) + "").match(Nt) || ["-", 0, 0],
        t = 60 * e[1] + b(e[2]);
        return 0 === t ? 0 : "+" === e[0] ? t : -t
    }
    function Wt(e, t) {
        var n;
        return t._isUTC ? (n = t.clone(),
        t = (k(e) || i(e) ? e : Ot(e)).valueOf() - n.valueOf(),
        n._d.setTime(n._d.valueOf() + t),
        d.updateOffset(n, !1),
        n) : Ot(e).local()
    }
    function zt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function qt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    d.updateOffset = function() {}
    ;
    var Rt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , Ft = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Ut(e, t) {
        var n, i = e, o = null;
        return Lt(e) ? i = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : l(e) ? (i = {},
        t ? i[t] = e : i.milliseconds = e) : (o = Rt.exec(e)) ? (n = "-" === o[1] ? -1 : 1,
        i = {
            y: 0,
            d: b(o[ge]) * n,
            h: b(o[ye]) * n,
            m: b(o[ve]) * n,
            s: b(o[we]) * n,
            ms: b(It(1e3 * o[ke])) * n
        }) : (o = Ft.exec(e)) ? (n = "-" === o[1] ? -1 : 1,
        i = {
            y: Bt(o[2], n),
            M: Bt(o[3], n),
            w: Bt(o[4], n),
            d: Bt(o[5], n),
            h: Bt(o[6], n),
            m: Bt(o[7], n),
            s: Bt(o[8], n)
        }) : null == i ? i = {} : "object" == typeof i && ("from"in i || "to"in i) && (n = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Wt(t, e),
            e.isBefore(t) ? n = Gt(e, t) : ((n = Gt(t, e)).milliseconds = -n.milliseconds,
            n.months = -n.months);
            return n
        }(Ot(i.from), Ot(i.to)),
        (i = {}).ms = n.milliseconds,
        i.M = n.months),
        i = new Ht(i),
        Lt(e) && f(e, "_locale") && (i._locale = e._locale),
        i
    }
    function Bt(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }
    function Gt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Vt(i, o) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (C(o, "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            n = e,
            e = t,
            t = n),
            Zt(this, Ut(e = "string" == typeof e ? +e : e, t), i),
            this
        }
    }
    function Zt(e, t, n, i) {
        var o = t._milliseconds
          , r = It(t._days)
          , t = It(t._months);
        e.isValid() && (i = null == i || i,
        t && He(e, De(e, "Month") + t * n),
        r && Oe(e, "Date", De(e, "Date") + r * n),
        o && e._d.setTime(e._d.valueOf() + o * n),
        i && d.updateOffset(e, r || t))
    }
    Ut.fn = Ht.prototype,
    Ut.invalid = function() {
        return Ut(NaN)
    }
    ;
    var Xt = Vt(1, "add")
      , se = Vt(-1, "subtract");
    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , i = e.clone().add(n, "months")
          , i = t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(1 + n, "months") - i);
        return -(n + i) || 0
    }
    function Kt(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = dt(e)) && (this._locale = e),
        this)
    }
    d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    Q = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function Jt() {
        return this._locale
    }
    var en = 126227808e5;
    function tn(e, t) {
        return (e % t + t) % t
    }
    function nn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400,t,n) - en : new Date(e,t,n).valueOf()
    }
    function on(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n)
    }
    function rn(e, t) {
        q(0, [e, e.length], 0, t)
    }
    function sn(e, t, n, i, o) {
        var r;
        return null == e ? Re(this, i, o).year : (r = Fe(e, i, o),
        function(e, t, n, i, o) {
            o = qe(e, t, n, i, o),
            o = We(o.year, 0, o.dayOfYear);
            return this.year(o.getUTCFullYear()),
            this.month(o.getUTCMonth()),
            this.date(o.getUTCDate()),
            this
        }
        .call(this, e, t = r < t ? r : t, n, i, o))
    }
    q(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    q(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    rn("gggg", "weekYear"),
    rn("ggggg", "weekYear"),
    rn("GGGG", "isoWeekYear"),
    rn("GGGGG", "isoWeekYear"),
    P("weekYear", "gg"),
    P("isoWeekYear", "GG"),
    I("weekYear", 1),
    I("isoWeekYear", 1),
    le("G", ie),
    le("g", ie),
    le("GG", X, B),
    le("gg", X, B),
    le("GGGG", ee, V),
    le("gggg", ee, V),
    le("GGGGG", te, Z),
    le("ggggg", te, Z),
    pe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = b(e)
    }),
    pe(["gg", "GG"], function(e, t, n, i) {
        t[i] = d.parseTwoDigitYear(e)
    }),
    q("Q", 0, "Qo", "quarter"),
    P("quarter", "Q"),
    I("quarter", 7),
    le("Q", U),
    fe("Q", function(e, t) {
        t[me] = 3 * (b(e) - 1)
    }),
    q("D", ["DD", 2], "Do", "date"),
    P("date", "D"),
    I("date", 9),
    le("D", X),
    le("DD", X, B),
    le("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    fe(["D", "DD"], ge),
    fe("Do", function(e, t) {
        t[ge] = b(e.match(X)[0])
    });
    K = Me("Date", !0);
    q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    P("dayOfYear", "DDD"),
    I("dayOfYear", 4),
    le("DDD", J),
    le("DDDD", G),
    fe(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = b(e)
    }),
    q("m", ["mm", 2], 0, "minute"),
    P("minute", "m"),
    I("minute", 14),
    le("m", X),
    le("mm", X, B),
    fe(["m", "mm"], ve);
    Pe = Me("Minutes", !1);
    q("s", ["ss", 2], 0, "second"),
    P("second", "s"),
    I("second", 15),
    le("s", X),
    le("ss", X, B),
    fe(["s", "ss"], we);
    var an, Be = Me("Seconds", !1);
    for (q("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    q(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    q(0, ["SSS", 3], 0, "millisecond"),
    q(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    q(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    q(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    q(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    q(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    q(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    P("millisecond", "ms"),
    I("millisecond", 16),
    le("S", J, U),
    le("SS", J, B),
    le("SSS", J, G),
    an = "SSSS"; an.length <= 9; an += "S")
        le(an, ne);
    function ln(e, t) {
        t[ke] = b(1e3 * ("0." + e))
    }
    for (an = "S"; an.length <= 9; an += "S")
        fe(an, ln);
    Ve = Me("Milliseconds", !1);
    q("z", 0, 0, "zoneAbbr"),
    q("zz", 0, 0, "zoneName");
    ee = w.prototype;
    function un(e) {
        return e
    }
    ee.add = Xt,
    ee.calendar = function(e, t) {
        var n = e || Ot()
          , e = Wt(n, this).startOf("day")
          , e = d.calendarFormat(this, e) || "sameElse"
          , t = t && (M(t[e]) ? t[e].call(this, n) : t[e]);
        return this.format(t || this.localeData().calendar(e, this, Ot(n)))
    }
    ,
    ee.clone = function() {
        return new w(this)
    }
    ,
    ee.diff = function(e, t, n) {
        var i, o, r;
        if (!this.isValid())
            return NaN;
        if (!(i = Wt(e, this)).isValid())
            return NaN;
        switch (o = 6e4 * (i.utcOffset() - this.utcOffset()),
        t = $(t)) {
        case "year":
            r = Qt(this, i) / 12;
            break;
        case "month":
            r = Qt(this, i);
            break;
        case "quarter":
            r = Qt(this, i) / 3;
            break;
        case "second":
            r = (this - i) / 1e3;
            break;
        case "minute":
            r = (this - i) / 6e4;
            break;
        case "hour":
            r = (this - i) / 36e5;
            break;
        case "day":
            r = (this - i - o) / 864e5;
            break;
        case "week":
            r = (this - i - o) / 6048e5;
            break;
        default:
            r = this - i
        }
        return n ? r : x(r)
    }
    ,
    ee.endOf = function(e) {
        var t;
        if (void 0 === (e = $(e)) || "millisecond" === e || !this.isValid())
            return this;
        var n = this._isUTC ? on : nn;
        switch (e) {
        case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(),
            t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
            break;
        case "minute":
            t = this._d.valueOf(),
            t += 6e4 - tn(t, 6e4) - 1;
            break;
        case "second":
            t = this._d.valueOf(),
            t += 1e3 - tn(t, 1e3) - 1
        }
        return this._d.setTime(t),
        d.updateOffset(this, !0),
        this
    }
    ,
    ee.format = function(e) {
        return e = e || (this.isUtc() ? d.defaultFormatUtc : d.defaultFormat),
        e = R(this, e),
        this.localeData().postformat(e)
    }
    ,
    ee.from = function(e, t) {
        return this.isValid() && (k(e) && e.isValid() || Ot(e).isValid()) ? Ut({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    ee.fromNow = function(e) {
        return this.from(Ot(), e)
    }
    ,
    ee.to = function(e, t) {
        return this.isValid() && (k(e) && e.isValid() || Ot(e).isValid()) ? Ut({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    ee.toNow = function(e) {
        return this.to(Ot(), e)
    }
    ,
    ee.get = function(e) {
        return M(this[e = $(e)]) ? this[e]() : this
    }
    ,
    ee.invalidAt = function() {
        return p(this).overflow
    }
    ,
    ee.isAfter = function(e, t) {
        return e = k(e) ? e : Ot(e),
        !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = $(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    ee.isBefore = function(e, t) {
        return e = k(e) ? e : Ot(e),
        !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = $(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }
    ,
    ee.isBetween = function(e, t, n, i) {
        return e = k(e) ? e : Ot(e),
        t = k(t) ? t : Ot(t),
        !!(this.isValid() && e.isValid() && t.isValid()) && (("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n)))
    }
    ,
    ee.isSame = function(e, t) {
        var e = k(e) ? e : Ot(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = $(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(),
        this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }
    ,
    ee.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    ee.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    ee.isValid = function() {
        return h(this)
    }
    ,
    ee.lang = Q,
    ee.locale = Kt,
    ee.localeData = Jt,
    ee.max = Et,
    ee.min = At,
    ee.parsingFlags = function() {
        return u({}, p(this))
    }
    ,
    ee.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                var t, n = [];
                for (t in e)
                    n.push({
                        unit: t,
                        priority: L[t]
                    });
                return n.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                n
            }(e = H(e)), i = 0; i < n.length; i++)
                this[n[i].unit](e[n[i].unit]);
        else if (M(this[e = $(e)]))
            return this[e](t);
        return this
    }
    ,
    ee.startOf = function(e) {
        var t;
        if (void 0 === (e = $(e)) || "millisecond" === e || !this.isValid())
            return this;
        var n = this._isUTC ? on : nn;
        switch (e) {
        case "year":
            t = n(this.year(), 0, 1);
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = n(this.year(), this.month(), 1);
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(),
            t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
            break;
        case "minute":
            t = this._d.valueOf(),
            t -= tn(t, 6e4);
            break;
        case "second":
            t = this._d.valueOf(),
            t -= tn(t, 1e3)
        }
        return this._d.setTime(t),
        d.updateOffset(this, !0),
        this
    }
    ,
    ee.subtract = se,
    ee.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }
    ,
    ee.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }
    ,
    ee.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    ee.toISOString = function(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e;
        return (e = t ? this.clone().utc() : this).year() < 0 || 9999 < e.year() ? R(e, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", R(e, "Z")) : R(e, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    ,
    ee.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment"
          , t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        t = "Z");
        var n = "[" + e + '("]'
          , e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        return this.format(n + e + "-MM-DD[T]HH:mm:ss.SSS" + (t + '[")]'))
    }
    ,
    ee.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    ee.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    ee.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    ee.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    ee.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    ee.year = Ce,
    ee.isLeapYear = function() {
        return Te(this.year())
    }
    ,
    ee.weekYear = function(e) {
        return sn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    ee.isoWeekYear = function(e) {
        return sn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    ee.quarter = ee.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    ee.month = Le,
    ee.daysInMonth = function() {
        return Ae(this.year(), this.month())
    }
    ,
    ee.week = ee.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    ee.isoWeek = ee.isoWeeks = function(e) {
        var t = Re(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    ee.weeksInYear = function() {
        var e = this.localeData()._week;
        return Fe(this.year(), e.dow, e.doy)
    }
    ,
    ee.isoWeeksInYear = function() {
        return Fe(this.year(), 1, 4)
    }
    ,
    ee.date = K,
    ee.day = ee.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e,
        n = this.localeData(),
        e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10),
        this.add(e - i, "d")) : i
    }
    ,
    ee.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    ee.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this.day() || 7;
        var t = (t = e,
        e = this.localeData(),
        "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? t : t - 7)
    }
    ,
    ee.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    ee.hour = ee.hours = it,
    ee.minute = ee.minutes = Pe,
    ee.second = ee.seconds = Be,
    ee.millisecond = ee.milliseconds = Ve,
    ee.utcOffset = function(e, t, n) {
        var i, o = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this._isUTC ? o : zt(this);
        if ("string" == typeof e) {
            if (null === (e = Yt(re, e)))
                return this
        } else
            Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (i = zt(this)),
        this._offset = e,
        this._isUTC = !0,
        null != i && this.add(i, "m"),
        o !== e && (!t || this._changeInProgress ? Zt(this, Ut(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        d.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    }
    ,
    ee.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    ee.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(zt(this), "m")),
        this
    }
    ,
    ee.parseZone = function() {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Yt(oe, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)),
        this
    }
    ,
    ee.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Ot(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    ee.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    ee.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    ee.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    ee.isUtc = qt,
    ee.isUTC = qt,
    ee.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    ee.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    ee.dates = n("dates accessor is deprecated. Use date instead.", K),
    ee.months = n("months accessor is deprecated. Use month instead", Le),
    ee.years = n("years accessor is deprecated. Use year instead", Ce),
    ee.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t),
        this) : -this.utcOffset()
    }),
    ee.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!r(this._isDSTShifted))
            return this._isDSTShifted;
        var e, t = {};
        return v(t, this),
        (t = Mt(t))._a ? (e = (t._isUTC ? c : Ot)(t._a),
        this._isDSTShifted = this.isValid() && 0 < S(t._a, e.toArray())) : this._isDSTShifted = !1,
        this._isDSTShifted
    });
    V = O.prototype;
    function cn(e, t, n, i) {
        var o = dt()
          , t = c().set(i, t);
        return o[n](t, e)
    }
    function dn(e, t, n) {
        if (l(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return cn(e, t, n, "month");
        for (var i = [], o = 0; o < 12; o++)
            i[o] = cn(e, o, n, "month");
        return i
    }
    function fn(e, t, n, i) {
        t = ("boolean" == typeof e ? l(t) && (n = t,
        t = void 0) : (t = e,
        e = !1,
        l(n = t) && (n = t,
        t = void 0)),
        t || "");
        var o = dt()
          , r = e ? o._week.dow : 0;
        if (null != n)
            return cn(t, (n + r) % 7, i, "day");
        for (var s = [], a = 0; a < 7; a++)
            s[a] = cn(t, (a + r) % 7, i, "day");
        return s
    }
    V.calendar = function(e, t, n) {
        return M(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
    }
    ,
    V.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    ,
    V.invalidDate = function() {
        return this._invalidDate
    }
    ,
    V.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    V.preparse = un,
    V.postformat = un,
    V.relativeTime = function(e, t, n, i) {
        var o = this._relativeTime[n];
        return M(o) ? o(e, t, n, i) : o.replace(/%d/i, e)
    }
    ,
    V.pastFuture = function(e, t) {
        return M(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
    }
    ,
    V.set = function(e) {
        var t, n;
        for (n in e)
            M(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    V.months = function(e, t) {
        return e ? (s(this._months) ? this._months : this._months[(this._months.isFormat || Ee).test(t) ? "format" : "standalone"])[e.month()] : s(this._months) ? this._months : this._months.standalone
    }
    ,
    V.monthsShort = function(e, t) {
        return e ? (s(this._monthsShort) ? this._monthsShort : this._monthsShort[Ee.test(t) ? "format" : "standalone"])[e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    V.monthsParse = function(e, t, n) {
        var i, o;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var i, o, r, e = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0; i < 12; ++i)
                        r = c([2e3, i]),
                        this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(),
                        this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (o = _e.call(this._shortMonthsParse, e)) ? o : null : -1 !== (o = _e.call(this._longMonthsParse, e)) ? o : null : "MMM" === t ? -1 !== (o = _e.call(this._shortMonthsParse, e)) || -1 !== (o = _e.call(this._longMonthsParse, e)) ? o : null : -1 !== (o = _e.call(this._longMonthsParse, e)) || -1 !== (o = _e.call(this._shortMonthsParse, e)) ? o : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; i < 12; i++) {
            if (o = c([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (o = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""),
            this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[i].test(e))
                return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                return i;
            if (!n && this._monthsParse[i].test(e))
                return i
        }
    }
    ,
    V.monthsRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Ne.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = je),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    V.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Ne.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    V.week = function(e) {
        return Re(e, this._week.dow, this._week.doy).week
    }
    ,
    V.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    V.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    V.weekdays = function(e, t) {
        return t = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"],
        !0 === e ? Ue(t, this._week.dow) : e ? t[e.day()] : t
    }
    ,
    V.weekdaysMin = function(e) {
        return !0 === e ? Ue(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    V.weekdaysShort = function(e) {
        return !0 === e ? Ue(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    V.weekdaysParse = function(e, t, n) {
        var i, o;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var i, o, r, e = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0; i < 7; ++i)
                        r = c([2e3, 1]).day(i),
                        this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                        this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (o = _e.call(this._weekdaysParse, e)) ? o : null : "ddd" === t ? -1 !== (o = _e.call(this._shortWeekdaysParse, e)) ? o : null : -1 !== (o = _e.call(this._minWeekdaysParse, e)) ? o : null : "dddd" === t ? -1 !== (o = _e.call(this._weekdaysParse, e)) || -1 !== (o = _e.call(this._shortWeekdaysParse, e)) || -1 !== (o = _e.call(this._minWeekdaysParse, e)) ? o : null : "ddd" === t ? -1 !== (o = _e.call(this._shortWeekdaysParse, e)) || -1 !== (o = _e.call(this._weekdaysParse, e)) || -1 !== (o = _e.call(this._minWeekdaysParse, e)) ? o : null : -1 !== (o = _e.call(this._minWeekdaysParse, e)) || -1 !== (o = _e.call(this._weekdaysParse, e)) || -1 !== (o = _e.call(this._shortWeekdaysParse, e)) ? o : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        i = 0; i < 7; i++) {
            if (o = c([2e3, 1]).day(i),
            n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[i] || (o = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""),
            this._weekdaysParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                return i;
            if (!n && this._weekdaysParse[i].test(e))
                return i
        }
    }
    ,
    V.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    V.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    V.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    V.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    V.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    ut("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === b(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }),
    d.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut),
    d.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt);
    var pn = Math.abs;
    function hn(e, t, n, i) {
        n = Ut(t, n);
        return e._milliseconds += i * n._milliseconds,
        e._days += i * n._days,
        e._months += i * n._months,
        e._bubble()
    }
    function mn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function gn(e) {
        return 4800 * e / 146097
    }
    function yn(e) {
        return 146097 * e / 4800
    }
    function vn(e) {
        return function() {
            return this.as(e)
        }
    }
    te = vn("ms"),
    Z = vn("s"),
    U = vn("m"),
    B = vn("h"),
    J = vn("d"),
    G = vn("w"),
    Xt = vn("M"),
    Et = vn("Q"),
    At = vn("y");
    function wn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    se = wn("milliseconds"),
    it = wn("seconds"),
    Pe = wn("minutes"),
    Be = wn("hours"),
    Ve = wn("days"),
    K = wn("months"),
    Ce = wn("years");
    var kn = Math.round
      , xn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    function bn(e, t, n) {
        var i = Ut(e).abs()
          , o = kn(i.as("s"))
          , r = kn(i.as("m"))
          , s = kn(i.as("h"))
          , a = kn(i.as("d"))
          , l = kn(i.as("M"))
          , i = kn(i.as("y"))
          , i = (o <= xn.ss ? ["s", o] : o < xn.s && ["ss", o]) || r <= 1 && ["m"] || r < xn.m && ["mm", r] || s <= 1 && ["h"] || s < xn.h && ["hh", s] || a <= 1 && ["d"] || a < xn.d && ["dd", a] || l <= 1 && ["M"] || l < xn.M && ["MM", l] || i <= 1 && ["y"] || ["yy", i];
        return i[2] = t,
        i[3] = 0 < +e,
        i[4] = n,
        function(e, t, n, i, o) {
            return o.relativeTime(t || 1, !!n, e, i)
        }
        .apply(null, i)
    }
    var Sn = Math.abs;
    function Tn(e) {
        return (0 < e) - (e < 0) || +e
    }
    function _n() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e = Sn(this._milliseconds) / 1e3
          , t = Sn(this._days)
          , n = Sn(this._months)
          , i = x(e / 60)
          , o = x(i / 60);
        e %= 60,
        i %= 60;
        var r = x(n / 12)
          , s = n %= 12
          , a = t
          , l = o
          , u = i
          , n = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""
          , t = this.asSeconds();
        if (!t)
            return "P0D";
        o = Tn(this._months) !== Tn(t) ? "-" : "",
        i = Tn(this._days) !== Tn(t) ? "-" : "",
        e = Tn(this._milliseconds) !== Tn(t) ? "-" : "";
        return (t < 0 ? "-" : "") + "P" + (r ? o + r + "Y" : "") + (s ? o + s + "M" : "") + (a ? i + a + "D" : "") + (l || u || n ? "T" : "") + (l ? e + l + "H" : "") + (u ? e + u + "M" : "") + (n ? e + n + "S" : "")
    }
    V = Ht.prototype;
    return V.isValid = function() {
        return this._isValid
    }
    ,
    V.abs = function() {
        var e = this._data;
        return this._milliseconds = pn(this._milliseconds),
        this._days = pn(this._days),
        this._months = pn(this._months),
        e.milliseconds = pn(e.milliseconds),
        e.seconds = pn(e.seconds),
        e.minutes = pn(e.minutes),
        e.hours = pn(e.hours),
        e.months = pn(e.months),
        e.years = pn(e.years),
        this
    }
    ,
    V.add = function(e, t) {
        return hn(this, e, t, 1)
    }
    ,
    V.subtract = function(e, t) {
        return hn(this, e, t, -1)
    }
    ,
    V.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = $(e)) || "quarter" === e || "year" === e)
            switch (t = this._days + i / 864e5,
            n = this._months + gn(t),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (t = this._days + Math.round(yn(this._months)),
            e) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    ,
    V.asMilliseconds = te,
    V.asSeconds = Z,
    V.asMinutes = U,
    V.asHours = B,
    V.asDays = J,
    V.asWeeks = G,
    V.asMonths = Xt,
    V.asQuarters = Et,
    V.asYears = At,
    V.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
    }
    ,
    V._bubble = function() {
        var e = this._milliseconds
          , t = this._days
          , n = this._months
          , i = this._data;
        return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * mn(yn(n) + t),
        n = t = 0),
        i.milliseconds = e % 1e3,
        e = x(e / 1e3),
        i.seconds = e % 60,
        e = x(e / 60),
        i.minutes = e % 60,
        e = x(e / 60),
        i.hours = e % 24,
        t += x(e / 24),
        n += e = x(gn(t)),
        t -= mn(yn(e)),
        e = x(n / 12),
        n %= 12,
        i.days = t,
        i.months = n,
        i.years = e,
        this
    }
    ,
    V.clone = function() {
        return Ut(this)
    }
    ,
    V.get = function(e) {
        return e = $(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    V.milliseconds = se,
    V.seconds = it,
    V.minutes = Pe,
    V.hours = Be,
    V.days = Ve,
    V.weeks = function() {
        return x(this.days() / 7)
    }
    ,
    V.months = K,
    V.years = Ce,
    V.humanize = function(e) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var t = this.localeData()
          , n = bn(this, !e, t);
        return e && (n = t.pastFuture(+this, n)),
        t.postformat(n)
    }
    ,
    V.toISOString = _n,
    V.toString = _n,
    V.toJSON = _n,
    V.locale = Kt,
    V.localeData = Jt,
    V.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", _n),
    V.lang = Q,
    q("X", 0, 0, "unix"),
    q("x", 0, 0, "valueOf"),
    le("x", ie),
    le("X", /[+-]?\d+(\.\d{1,3})?/),
    fe("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    fe("x", function(e, t, n) {
        n._d = new Date(b(e))
    }),
    d.version = "2.24.0",
    e = Ot,
    d.fn = ee,
    d.min = function() {
        return Pt("isBefore", [].slice.call(arguments, 0))
    }
    ,
    d.max = function() {
        return Pt("isAfter", [].slice.call(arguments, 0))
    }
    ,
    d.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    d.utc = c,
    d.unix = function(e) {
        return Ot(1e3 * e)
    }
    ,
    d.months = function(e, t) {
        return dn(e, t, "months")
    }
    ,
    d.isDate = i,
    d.locale = ut,
    d.invalid = m,
    d.duration = Ut,
    d.isMoment = k,
    d.weekdays = function(e, t, n) {
        return fn(e, t, n, "weekdays")
    }
    ,
    d.parseZone = function() {
        return Ot.apply(null, arguments).parseZone()
    }
    ,
    d.localeData = dt,
    d.isDuration = Lt,
    d.monthsShort = function(e, t) {
        return dn(e, t, "monthsShort")
    }
    ,
    d.weekdaysMin = function(e, t, n) {
        return fn(e, t, n, "weekdaysMin")
    }
    ,
    d.defineLocale = ct,
    d.updateLocale = function(e, t) {
        var n, i;
        return null != t ? (n = ot,
        (t = new O(t = D(n = null != (i = lt(e)) ? i._config : n, t))).parentLocale = rt[e],
        rt[e] = t,
        ut(e)) : null != rt[e] && (null != rt[e].parentLocale ? rt[e] = rt[e].parentLocale : null != rt[e] && delete rt[e]),
        rt[e]
    }
    ,
    d.locales = function() {
        return A(rt)
    }
    ,
    d.weekdaysShort = function(e, t, n) {
        return fn(e, t, n, "weekdaysShort")
    }
    ,
    d.normalizeUnits = $,
    d.relativeTimeRounding = function(e) {
        return void 0 === e ? kn : "function" == typeof e && (kn = e,
        !0)
    }
    ,
    d.relativeTimeThreshold = function(e, t) {
        return void 0 !== xn[e] && (void 0 === t ? xn[e] : (xn[e] = t,
        "s" === e && (xn.ss = t - 1),
        !0))
    }
    ,
    d.calendarFormat = function(e, t) {
        return (t = e.diff(t, "days", !0)) < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
    }
    ,
    d.prototype = ee,
    d.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    d
}),
function(t, n) {
    "undefined" != typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = n(0, exports)) : "function" == typeof define && define.amd ? define(["exports"], function(e) {
        t.Lockr = n(0, e)
    }) : t.Lockr = n(0, {})
}(this, function(e, r) {
    "use strict";
    return Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        var t = this.length >>> 0
          , n = Number(arguments[1]) || 0;
        for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
            if (n in this && this[n] === e)
                return n;
        return -1
    }
    ),
    r.prefix = "",
    r._getPrefixedKey = function(e, t) {
        return (t = t || {}).noPrefix ? e : this.prefix + e
    }
    ,
    r.set = function(t, n, e) {
        e = this._getPrefixedKey(t, e);
        try {
            localStorage.setItem(e, JSON.stringify({
                data: n
            }))
        } catch (e) {
            console && console.warn("Lockr didn't successfully save the '{" + t + ": " + n + "}' pair, because the localStorage is full.")
        }
    }
    ,
    r.get = function(e, t, n) {
        var i, n = this._getPrefixedKey(e, n);
        try {
            i = JSON.parse(localStorage.getItem(n))
        } catch (e) {
            i = localStorage[n] ? {
                data: localStorage.getItem(n)
            } : null
        }
        return i ? "object" == typeof i && void 0 !== i.data ? i.data : void 0 : t
    }
    ,
    r.sadd = function(t, n, e) {
        var i, o = this._getPrefixedKey(t, e), e = r.smembers(t);
        if (-1 < e.indexOf(n))
            return null;
        try {
            e.push(n),
            i = JSON.stringify({
                data: e
            }),
            localStorage.setItem(o, i)
        } catch (e) {
            console.log(e),
            console && console.warn("Lockr didn't successfully add the " + n + " to " + t + " set, because the localStorage is full.")
        }
    }
    ,
    r.smembers = function(e, t) {
        var n, t = this._getPrefixedKey(e, t);
        try {
            n = JSON.parse(localStorage.getItem(t))
        } catch (e) {
            n = null
        }
        return n && n.data ? n.data : []
    }
    ,
    r.sismember = function(e, t, n) {
        return -1 < r.smembers(e).indexOf(t)
    }
    ,
    r.keys = function() {
        var t = []
          , e = Object.keys(localStorage);
        return 0 === r.prefix.length ? e : (e.forEach(function(e) {
            -1 !== e.indexOf(r.prefix) && t.push(e.replace(r.prefix, ""))
        }),
        t)
    }
    ,
    r.getAll = function(e) {
        var t = r.keys();
        return e ? t.reduce(function(e, t) {
            var n = {};
            return n[t] = r.get(t),
            e.push(n),
            e
        }, []) : t.map(function(e) {
            return r.get(e)
        })
    }
    ,
    r.srem = function(t, n, e) {
        var i = this._getPrefixedKey(t, e)
          , o = r.smembers(t, n)
          , e = o.indexOf(n);
        -1 < e && o.splice(e, 1),
        o = JSON.stringify({
            data: o
        });
        try {
            localStorage.setItem(i, o)
        } catch (e) {
            console && console.warn("Lockr couldn't remove the " + n + " from the set " + t)
        }
    }
    ,
    r.rm = function(e) {
        e = this._getPrefixedKey(e);
        localStorage.removeItem(e)
    }
    ,
    r.flush = function() {
        r.prefix.length ? r.keys().forEach(function(e) {
            localStorage.removeItem(r._getPrefixedKey(e))
        }) : localStorage.clear()
    }
    ,
    r
});
