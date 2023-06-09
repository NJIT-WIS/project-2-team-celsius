import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

<!--Imported from next.js-->
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[706], {
    1330: function(e, t, n) {
        "use strict";
        n.d(t, {
            pJ: function() {
                return le
            },
            uT: function() {
                return _t
            }
        });
        var r, o, a, u = n(7294), i = n(3935);
        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function f(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" === typeof e)
                            return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                    }
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (n = e[Symbol.iterator]()).next.bind(n)
        }
        function d(e, t) {
            if (e in t) {
                for (var n = t[e], r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                    o[a - 2] = arguments[a];
                return "function" === typeof n ? n.apply(void 0, o) : n
            }
            var u = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(t).map((function(e) {
                return '"' + e + '"'
            }
            )).join(", ") + ".");
            throw Error.captureStackTrace && Error.captureStackTrace(u, d),
            u
        }
        function p(e) {
            var t = e.props
              , n = e.slot
              , a = e.defaultTag
              , u = e.features
              , i = e.visible
              , l = void 0 === i || i
              , f = e.name;
            if (l)
                return v(t, n, a, f);
            var p = null != u ? u : r.None;
            if (p & r.Static) {
                var m = t.static
                  , b = void 0 !== m && m
                  , g = c(t, ["static"]);
                if (b)
                    return v(g, n, a, f)
            }
            if (p & r.RenderStrategy) {
                var h, y = t.unmount, w = void 0 === y || y, S = c(t, ["unmount"]);
                return d(w ? o.Unmount : o.Hidden, ((h = {})[o.Unmount] = function() {
                    return null
                }
                ,
                h[o.Hidden] = function() {
                    return v(s({}, S, {
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }), n, a, f)
                }
                ,
                h))
            }
            return v(t, n, a, f)
        }
        function v(e, t, n, r) {
            var o;
            void 0 === t && (t = {});
            var a = b(e, ["unmount", "static"])
              , i = a.as
              , s = void 0 === i ? n : i
              , l = a.children
              , d = a.refName
              , p = void 0 === d ? "ref" : d
              , v = c(a, ["as", "children", "refName"])
              , m = void 0 !== e.ref ? ((o = {})[p] = e.ref,
            o) : {}
              , g = "function" === typeof l ? l(t) : l;
            if (v.className && "function" === typeof v.className && (v.className = v.className(t)),
            s === u.Fragment && Object.keys(v).length > 0) {
                if (!(0,
                u.isValidElement)(g) || Array.isArray(g) && g.length > 1)
                    throw new Error(['Passing props on "Fragment"!', "", "The current component <" + r + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(v).map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n")].join("\n"));
                return (0,
                u.cloneElement)(g, Object.assign({}, function(e, t, n) {
                    for (var r, o = Object.assign({}, e), a = function() {
                        var n, a = r.value;
                        void 0 !== e[a] && void 0 !== t[a] && Object.assign(o, ((n = {})[a] = function(n) {
                            n.defaultPrevented || e[a](n),
                            n.defaultPrevented || t[a](n)
                        }
                        ,
                        n))
                    }, u = f(n); !(r = u()).done; )
                        a();
                    return o
                }(function(e) {
                    var t = Object.assign({}, e);
                    for (var n in t)
                        void 0 === t[n] && delete t[n];
                    return t
                }(b(v, ["ref"])), g.props, ["onClick"]), m))
            }
            return (0,
            u.createElement)(s, Object.assign({}, b(v, ["ref"]), s !== u.Fragment && m), g)
        }
        function m(e) {
            var t;
            return Object.assign((0,
            u.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function b(e, t) {
            void 0 === t && (t = []);
            for (var n, r = Object.assign({}, e), o = f(t); !(n = o()).done; ) {
                var a = n.value;
                a in r && delete r[a]
            }
            return r
        }
        function g() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var r = (0,
            u.useRef)(t);
            return (0,
            u.useEffect)((function() {
                r.current = t
            }
            ), [t]),
            (0,
            u.useCallback)((function(e) {
                for (var t, n = f(r.current); !(t = n()).done; ) {
                    var o = t.value;
                    null != o && ("function" === typeof o ? o(e) : o.current = e)
                }
            }
            ), [r])
        }
        function h(e) {
            for (var t, n, r = e.parentElement, o = null; r && !(r instanceof HTMLFieldSetElement); )
                r instanceof HTMLLegendElement && (o = r),
                r = r.parentElement;
            var a = null != (t = "" === (null == (n = r) ? void 0 : n.getAttribute("disabled"))) && t;
            return (!a || !function(e) {
                if (!e)
                    return !1;
                var t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(o)) && a
        }
        !function(e) {
            e[e.None = 0] = "None",
            e[e.RenderStrategy = 1] = "RenderStrategy",
            e[e.Static = 2] = "Static"
        }(r || (r = {})),
        function(e) {
            e[e.Unmount = 0] = "Unmount",
            e[e.Hidden = 1] = "Hidden"
        }(o || (o = {})),
        function(e) {
            e.Space = " ",
            e.Enter = "Enter",
            e.Escape = "Escape",
            e.Backspace = "Backspace",
            e.ArrowLeft = "ArrowLeft",
            e.ArrowUp = "ArrowUp",
            e.ArrowRight = "ArrowRight",
            e.ArrowDown = "ArrowDown",
            e.Home = "Home",
            e.End = "End",
            e.PageUp = "PageUp",
            e.PageDown = "PageDown",
            e.Tab = "Tab"
        }(a || (a = {}));
        var y = "undefined" !== typeof window ? u.useLayoutEffect : u.useEffect
          , w = {
            serverHandoffComplete: !1
        };
        function S() {
            var e = (0,
            u.useState)(w.serverHandoffComplete)
              , t = e[0]
              , n = e[1];
            return (0,
            u.useEffect)((function() {
                !0 !== t && n(!0)
            }
            ), [t]),
            (0,
            u.useEffect)((function() {
                !1 === w.serverHandoffComplete && (w.serverHandoffComplete = !0)
            }
            ), []),
            t
        }
        var x = 0;
        function O() {
            return ++x
        }
        function C() {
            var e = S()
              , t = (0,
            u.useState)(e ? O : null)
              , n = t[0]
              , r = t[1];
            return y((function() {
                null === n && r(O())
            }
            ), [n]),
            null != n ? "" + n : void 0
        }
        var k, E, I, R, P, A = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
            return e + ":not([tabindex='-1'])"
        }
        )).join(",");
        function D(e) {
            return void 0 === e && (e = document.body),
            null == e ? [] : Array.from(e.querySelectorAll(A))
        }
        function T(e, t) {
            var n;
            return void 0 === t && (t = R.Strict),
            e !== document.body && d(t, ((n = {})[R.Strict] = function() {
                return e.matches(A)
            }
            ,
            n[R.Loose] = function() {
                for (var t = e; null !== t; ) {
                    if (t.matches(A))
                        return !0;
                    t = t.parentElement
                }
                return !1
            }
            ,
            n))
        }
        function j(e, t) {
            var n = Array.isArray(e) ? e : D(e)
              , r = document.activeElement
              , o = function() {
                if (t & (k.First | k.Next))
                    return I.Next;
                if (t & (k.Previous | k.Last))
                    return I.Previous;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }()
              , a = function() {
                if (t & k.First)
                    return 0;
                if (t & k.Previous)
                    return Math.max(0, n.indexOf(r)) - 1;
                if (t & k.Next)
                    return Math.max(0, n.indexOf(r)) + 1;
                if (t & k.Last)
                    return n.length - 1;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }()
              , u = t & k.NoScroll ? {
                preventScroll: !0
            } : {}
              , i = 0
              , s = n.length
              , c = void 0;
            do {
                var l;
                if (i >= s || i + s <= 0)
                    return E.Error;
                var f = a + i;
                if (t & k.WrapAround)
                    f = (f + s) % s;
                else {
                    if (f < 0)
                        return E.Underflow;
                    if (f >= s)
                        return E.Overflow
                }
                null == (l = c = n[f]) || l.focus(u),
                i += o
            } while (c !== document.activeElement);
            return c.hasAttribute("tabindex") || c.setAttribute("tabindex", "0"),
            E.Success
        }
        function L(e, t, n) {
            var r = (0,
            u.useRef)(t);
            r.current = t,
            (0,
            u.useEffect)((function() {
                function t(e) {
                    r.current.call(window, e)
                }
                return window.addEventListener(e, t, n),
                function() {
                    return window.removeEventListener(e, t, n)
                }
            }
            ), [e, n])
        }
        function F() {
            var e = (0,
            u.useRef)(!1);
            return (0,
            u.useEffect)((function() {
                return e.current = !0,
                function() {
                    e.current = !1
                }
            }
            ), []),
            e
        }
        !function(e) {
            e[e.First = 1] = "First",
            e[e.Previous = 2] = "Previous",
            e[e.Next = 4] = "Next",
            e[e.Last = 8] = "Last",
            e[e.WrapAround = 16] = "WrapAround",
            e[e.NoScroll = 32] = "NoScroll"
        }(k || (k = {})),
        function(e) {
            e[e.Error = 0] = "Error",
            e[e.Overflow = 1] = "Overflow",
            e[e.Success = 2] = "Success",
            e[e.Underflow = 3] = "Underflow"
        }(E || (E = {})),
        function(e) {
            e[e.Previous = -1] = "Previous",
            e[e.Next = 1] = "Next"
        }(I || (I = {})),
        function(e) {
            e[e.Strict = 0] = "Strict",
            e[e.Loose = 1] = "Loose"
        }(R || (R = {})),
        function(e) {
            e[e.None = 1] = "None",
            e[e.InitialFocus = 2] = "InitialFocus",
            e[e.TabLock = 4] = "TabLock",
            e[e.FocusLock = 8] = "FocusLock",
            e[e.RestoreFocus = 16] = "RestoreFocus",
            e[e.All = 30] = "All"
        }(P || (P = {}));
        var M = (0,
        u.createContext)(!1);
        function N() {
            var e = (0,
            u.useContext)(M)
              , t = (0,
            u.useContext)(B)
              , n = (0,
            u.useState)((function() {
                if (!e && null !== t)
                    return null;
                if ("undefined" === typeof window)
                    return null;
                var n = document.getElementById("headlessui-portal-root");
                if (n)
                    return n;
                var r = document.createElement("div");
                return r.setAttribute("id", "headlessui-portal-root"),
                document.body.appendChild(r)
            }
            ))
              , r = n[0]
              , o = n[1];
            return (0,
            u.useEffect)((function() {
                e || null !== t && o(t.current)
            }
            ), [t, o, e]),
            r
        }
        var _ = u.Fragment;
        function V(e) {
            var t = e
              , n = N()
              , r = (0,
            u.useState)((function() {
                return "undefined" === typeof window ? null : document.createElement("div")
            }
            ))[0]
              , o = S();
            return y((function() {
                if (n && r)
                    return n.appendChild(r),
                    function() {
                        var e;
                        n && (r && (n.removeChild(r),
                        n.childNodes.length <= 0 && (null == (e = n.parentElement) || e.removeChild(n))))
                    }
            }
            ), [n, r]),
            o && n && r ? (0,
            i.createPortal)(p({
                props: t,
                defaultTag: _,
                name: "Portal"
            }), r) : null
        }
        var U = u.Fragment
          , B = (0,
        u.createContext)(null);
        V.Group = function(e) {
            var t = e.target
              , n = c(e, ["target"]);
            return u.createElement(B.Provider, {
                value: t
            }, p({
                props: n,
                defaultTag: U,
                name: "Popover.Group"
            }))
        }
        ;
        var G = (0,
        u.createContext)(null);
        function H() {
            var e = (0,
            u.useContext)(G);
            if (null === e) {
                var t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                throw Error.captureStackTrace && Error.captureStackTrace(t, H),
                t
            }
            return e
        }
        function z() {
            var e = (0,
            u.useState)([])
              , t = e[0]
              , n = e[1];
            return [t.length > 0 ? t.join(" ") : void 0, (0,
            u.useMemo)((function() {
                return function(e) {
                    var t = (0,
                    u.useCallback)((function(e) {
                        return n((function(t) {
                            return [].concat(t, [e])
                        }
                        )),
                        function() {
                            return n((function(t) {
                                var n = t.slice()
                                  , r = n.indexOf(e);
                                return -1 !== r && n.splice(r, 1),
                                n
                            }
                            ))
                        }
                    }
                    ), [])
                      , r = (0,
                    u.useMemo)((function() {
                        return {
                            register: t,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        }
                    }
                    ), [t, e.slot, e.name, e.props]);
                    return u.createElement(G.Provider, {
                        value: r
                    }, e.children)
                }
            }
            ), [n])]
        }
        function W(e) {
            var t = H()
              , n = "headlessui-description-" + C();
            y((function() {
                return t.register(n)
            }
            ), [n, t.register]);
            var r = e
              , o = s({}, t.props, {
                id: n
            });
            return p({
                props: s({}, r, o),
                slot: t.slot || {},
                defaultTag: "p",
                name: t.name || "Description"
            })
        }
        var q, K = (0,
        u.createContext)(null);
        function Q() {
            return (0,
            u.useContext)(K)
        }
        function J(e) {
            var t = e.value
              , n = e.children;
            return u.createElement(K.Provider, {
                value: t
            }, n)
        }
        K.displayName = "OpenClosedContext",
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(q || (q = {}));
        var Y, $, X, Z, ee = (0,
        u.createContext)((function() {}
        ));
        ee.displayName = "StackContext",
        function(e) {
            e[e.Add = 0] = "Add",
            e[e.Remove = 1] = "Remove"
        }(Y || (Y = {})),
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(X || (X = {})),
        function(e) {
            e[e.SetTitleId = 0] = "SetTitleId"
        }(Z || (Z = {}));
        ($ = {})[Z.SetTitleId] = function(e, t) {
            return e.titleId === t.id ? e : s({}, e, {
                titleId: t.id
            })
        }
        ;
        var te = (0,
        u.createContext)(null);
        te.displayName = "DialogContext";
        r.RenderStrategy,
        r.Static;
        var ne, re, oe;
        !function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(re || (re = {})),
        function(e) {
            e[e.ToggleDisclosure = 0] = "ToggleDisclosure",
            e[e.SetButtonId = 1] = "SetButtonId",
            e[e.SetPanelId = 2] = "SetPanelId",
            e[e.LinkPanel = 3] = "LinkPanel",
            e[e.UnlinkPanel = 4] = "UnlinkPanel"
        }(oe || (oe = {}));
        var ae = ((ne = {})[oe.ToggleDisclosure] = function(e) {
            var t;
            return s({}, e, {
                disclosureState: d(e.disclosureState, (t = {},
                t[re.Open] = re.Closed,
                t[re.Closed] = re.Open,
                t))
            })
        }
        ,
        ne[oe.LinkPanel] = function(e) {
            return !0 === e.linkedPanel ? e : s({}, e, {
                linkedPanel: !0
            })
        }
        ,
        ne[oe.UnlinkPanel] = function(e) {
            return !1 === e.linkedPanel ? e : s({}, e, {
                linkedPanel: !1
            })
        }
        ,
        ne[oe.SetButtonId] = function(e, t) {
            return e.buttonId === t.buttonId ? e : s({}, e, {
                buttonId: t.buttonId
            })
        }
        ,
        ne[oe.SetPanelId] = function(e, t) {
            return e.panelId === t.panelId ? e : s({}, e, {
                panelId: t.panelId
            })
        }
        ,
        ne)
          , ue = (0,
        u.createContext)(null);
        function ie(e) {
            var t = (0,
            u.useContext)(ue);
            if (null === t) {
                var n = new Error("<" + e + " /> is missing a parent <" + le.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, ie),
                n
            }
            return t
        }
        function se(e, t) {
            return d(t.type, ae, e, t)
        }
        ue.displayName = "DisclosureContext";
        var ce = u.Fragment;
        function le(e) {
            var t, n = e.defaultOpen, r = void 0 !== n && n, o = c(e, ["defaultOpen"]), a = "headlessui-disclosure-button-" + C(), i = "headlessui-disclosure-panel-" + C(), s = (0,
            u.useReducer)(se, {
                disclosureState: r ? re.Open : re.Closed,
                linkedPanel: !1,
                buttonId: a,
                panelId: i
            }), l = s[0].disclosureState, f = s[1];
            (0,
            u.useEffect)((function() {
                return f({
                    type: oe.SetButtonId,
                    buttonId: a
                })
            }
            ), [a, f]),
            (0,
            u.useEffect)((function() {
                return f({
                    type: oe.SetPanelId,
                    panelId: i
                })
            }
            ), [i, f]);
            var v = (0,
            u.useMemo)((function() {
                return {
                    open: l === re.Open
                }
            }
            ), [l]);
            return u.createElement(ue.Provider, {
                value: s
            }, u.createElement(J, {
                value: d(l, (t = {},
                t[re.Open] = q.Open,
                t[re.Closed] = q.Closed,
                t))
            }, p({
                props: o,
                slot: v,
                defaultTag: ce,
                name: "Disclosure"
            })))
        }
        var fe = m((function e(t, n) {
            var r = ie([le.name, e.name].join("."))
              , o = r[0]
              , i = r[1]
              , c = g(n)
              , l = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                case a.Enter:
                    e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: oe.ToggleDisclosure
                    })
                }
            }
            ), [i])
              , f = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                    e.preventDefault()
                }
            }
            ), [])
              , d = (0,
            u.useCallback)((function(e) {
                h(e.currentTarget) || t.disabled || i({
                    type: oe.ToggleDisclosure
                })
            }
            ), [i, t.disabled])
              , v = (0,
            u.useMemo)((function() {
                return {
                    open: o.disclosureState === re.Open
                }
            }
            ), [o]);
            return p({
                props: s({}, t, {
                    ref: c,
                    id: o.buttonId,
                    type: "button",
                    "aria-expanded": o.disclosureState === re.Open || void 0,
                    "aria-controls": o.linkedPanel ? o.panelId : void 0,
                    onKeyDown: l,
                    onKeyUp: f,
                    onClick: d
                }),
                slot: v,
                defaultTag: "button",
                name: "Disclosure.Button"
            })
        }
        ))
          , de = r.RenderStrategy | r.Static
          , pe = m((function e(t, n) {
            var r = ie([le.name, e.name].join("."))
              , o = r[0]
              , a = r[1]
              , i = g(n, (function() {
                o.linkedPanel || a({
                    type: oe.LinkPanel
                })
            }
            ))
              , c = Q()
              , l = null !== c ? c === q.Open : o.disclosureState === re.Open;
            (0,
            u.useEffect)((function() {
                return function() {
                    return a({
                        type: oe.UnlinkPanel
                    })
                }
            }
            ), [a]),
            (0,
            u.useEffect)((function() {
                var e;
                o.disclosureState !== re.Closed || null != (e = t.unmount) && !e || a({
                    type: oe.UnlinkPanel
                })
            }
            ), [o.disclosureState, t.unmount, a]);
            var f = (0,
            u.useMemo)((function() {
                return {
                    open: o.disclosureState === re.Open
                }
            }
            ), [o])
              , d = {
                ref: i,
                id: o.panelId
            };
            return p({
                props: s({}, t, d),
                slot: f,
                defaultTag: "div",
                features: de,
                visible: l,
                name: "Disclosure.Panel"
            })
        }
        ));
        le.Button = fe,
        le.Panel = pe;
        var ve, me, be, ge;
        function he() {
            var e = []
              , t = {
                requestAnimationFrame: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }((function() {
                    var e = requestAnimationFrame.apply(void 0, arguments);
                    t.add((function() {
                        return cancelAnimationFrame(e)
                    }
                    ))
                }
                )),
                nextFrame: function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    t.requestAnimationFrame((function() {
                        t.requestAnimationFrame.apply(t, n)
                    }
                    ))
                },
                setTimeout: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }((function() {
                    var e = setTimeout.apply(void 0, arguments);
                    t.add((function() {
                        return clearTimeout(e)
                    }
                    ))
                }
                )),
                add: function(t) {
                    e.push(t)
                },
                dispose: function() {
                    for (var t, n = f(e.splice(0)); !(t = n()).done; ) {
                        var r = t.value;
                        r()
                    }
                }
            };
            return t
        }
        function ye() {
            var e = (0,
            u.useState)(he)[0];
            return (0,
            u.useEffect)((function() {
                return function() {
                    return e.dispose()
                }
            }
            ), [e]),
            e
        }
        function we(e, t) {
            var n = (0,
            u.useState)(e)
              , r = n[0]
              , o = n[1]
              , a = (0,
            u.useRef)(e);
            return y((function() {
                a.current = e
            }
            ), [e]),
            y((function() {
                return o(a.current)
            }
            ), [a, o].concat(t)),
            r
        }
        function Se(e, t) {
            var n = t.resolveItems();
            if (n.length <= 0)
                return null;
            var r = t.resolveActiveIndex()
              , o = null != r ? r : -1
              , a = function() {
                switch (e.focus) {
                case ve.First:
                    return n.findIndex((function(e) {
                        return !t.resolveDisabled(e)
                    }
                    ));
                case ve.Previous:
                    var r = n.slice().reverse().findIndex((function(e, n, r) {
                        return !(-1 !== o && r.length - n - 1 >= o) && !t.resolveDisabled(e)
                    }
                    ));
                    return -1 === r ? r : n.length - 1 - r;
                case ve.Next:
                    return n.findIndex((function(e, n) {
                        return !(n <= o) && !t.resolveDisabled(e)
                    }
                    ));
                case ve.Last:
                    var a = n.slice().reverse().findIndex((function(e) {
                        return !t.resolveDisabled(e)
                    }
                    ));
                    return -1 === a ? a : n.length - 1 - a;
                case ve.Specific:
                    return n.findIndex((function(n) {
                        return t.resolveId(n) === e.id
                    }
                    ));
                case ve.Nothing:
                    return null;
                default:
                    !function(e) {
                        throw new Error("Unexpected object: " + e)
                    }(e)
                }
            }();
            return -1 === a ? r : a
        }
        !function(e) {
            e[e.First = 0] = "First",
            e[e.Previous = 1] = "Previous",
            e[e.Next = 2] = "Next",
            e[e.Last = 3] = "Last",
            e[e.Specific = 4] = "Specific",
            e[e.Nothing = 5] = "Nothing"
        }(ve || (ve = {})),
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(be || (be = {})),
        function(e) {
            e[e.OpenListbox = 0] = "OpenListbox",
            e[e.CloseListbox = 1] = "CloseListbox",
            e[e.SetDisabled = 2] = "SetDisabled",
            e[e.GoToOption = 3] = "GoToOption",
            e[e.Search = 4] = "Search",
            e[e.ClearSearch = 5] = "ClearSearch",
            e[e.RegisterOption = 6] = "RegisterOption",
            e[e.UnregisterOption = 7] = "UnregisterOption"
        }(ge || (ge = {}));
        var xe = ((me = {})[ge.CloseListbox] = function(e) {
            return e.disabled || e.listboxState === be.Closed ? e : s({}, e, {
                activeOptionIndex: null,
                listboxState: be.Closed
            })
        }
        ,
        me[ge.OpenListbox] = function(e) {
            return e.disabled || e.listboxState === be.Open ? e : s({}, e, {
                listboxState: be.Open
            })
        }
        ,
        me[ge.SetDisabled] = function(e, t) {
            return e.disabled === t.disabled ? e : s({}, e, {
                disabled: t.disabled
            })
        }
        ,
        me[ge.GoToOption] = function(e, t) {
            if (e.disabled)
                return e;
            if (e.listboxState === be.Closed)
                return e;
            var n = Se(t, {
                resolveItems: function() {
                    return e.options
                },
                resolveActiveIndex: function() {
                    return e.activeOptionIndex
                },
                resolveId: function(e) {
                    return e.id
                },
                resolveDisabled: function(e) {
                    return e.dataRef.current.disabled
                }
            });
            return "" === e.searchQuery && e.activeOptionIndex === n ? e : s({}, e, {
                searchQuery: "",
                activeOptionIndex: n
            })
        }
        ,
        me[ge.Search] = function(e, t) {
            if (e.disabled)
                return e;
            if (e.listboxState === be.Closed)
                return e;
            var n = e.searchQuery + t.value.toLowerCase()
              , r = e.options.findIndex((function(e) {
                var t;
                return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n))
            }
            ));
            return -1 === r || r === e.activeOptionIndex ? s({}, e, {
                searchQuery: n
            }) : s({}, e, {
                searchQuery: n,
                activeOptionIndex: r
            })
        }
        ,
        me[ge.ClearSearch] = function(e) {
            return e.disabled || e.listboxState === be.Closed || "" === e.searchQuery ? e : s({}, e, {
                searchQuery: ""
            })
        }
        ,
        me[ge.RegisterOption] = function(e, t) {
            return s({}, e, {
                options: [].concat(e.options, [{
                    id: t.id,
                    dataRef: t.dataRef
                }])
            })
        }
        ,
        me[ge.UnregisterOption] = function(e, t) {
            var n = e.options.slice()
              , r = null !== e.activeOptionIndex ? n[e.activeOptionIndex] : null
              , o = n.findIndex((function(e) {
                return e.id === t.id
            }
            ));
            return -1 !== o && n.splice(o, 1),
            s({}, e, {
                options: n,
                activeOptionIndex: o === e.activeOptionIndex || null === r ? null : n.indexOf(r)
            })
        }
        ,
        me)
          , Oe = (0,
        u.createContext)(null);
        function Ce(e) {
            var t = (0,
            u.useContext)(Oe);
            if (null === t) {
                var n = new Error("<" + e + " /> is missing a parent <" + Ie.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, Ce),
                n
            }
            return t
        }
        function ke(e, t) {
            return d(t.type, xe, e, t)
        }
        Oe.displayName = "ListboxContext";
        var Ee = u.Fragment;
        function Ie(e) {
            var t, n = e.value, r = e.onChange, o = e.disabled, a = void 0 !== o && o, i = c(e, ["value", "onChange", "disabled"]), s = (0,
            u.useReducer)(ke, {
                listboxState: be.Closed,
                propsRef: {
                    current: {
                        value: n,
                        onChange: r
                    }
                },
                labelRef: (0,
                u.createRef)(),
                buttonRef: (0,
                u.createRef)(),
                optionsRef: (0,
                u.createRef)(),
                disabled: a,
                options: [],
                searchQuery: "",
                activeOptionIndex: null
            }), l = s[0], f = l.listboxState, v = l.propsRef, m = l.optionsRef, b = l.buttonRef, g = s[1];
            y((function() {
                v.current.value = n
            }
            ), [n, v]),
            y((function() {
                v.current.onChange = r
            }
            ), [r, v]),
            y((function() {
                return g({
                    type: ge.SetDisabled,
                    disabled: a
                })
            }
            ), [a]),
            L("mousedown", (function(e) {
                var t, n, r, o = e.target;
                f === be.Open && ((null == (t = b.current) ? void 0 : t.contains(o)) || (null == (n = m.current) ? void 0 : n.contains(o)) || (g({
                    type: ge.CloseListbox
                }),
                T(o, R.Loose) || (e.preventDefault(),
                null == (r = b.current) || r.focus())))
            }
            ));
            var h = (0,
            u.useMemo)((function() {
                return {
                    open: f === be.Open,
                    disabled: a
                }
            }
            ), [f, a]);
            return u.createElement(Oe.Provider, {
                value: s
            }, u.createElement(J, {
                value: d(f, (t = {},
                t[be.Open] = q.Open,
                t[be.Closed] = q.Closed,
                t))
            }, p({
                props: i,
                slot: h,
                defaultTag: Ee,
                name: "Listbox"
            })))
        }
        var Re = m((function e(t, n) {
            var r, o = Ce([Ie.name, e.name].join(".")), i = o[0], c = o[1], l = g(i.buttonRef, n), f = "headlessui-listbox-button-" + C(), d = ye(), v = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                case a.Enter:
                case a.ArrowDown:
                    e.preventDefault(),
                    c({
                        type: ge.OpenListbox
                    }),
                    d.nextFrame((function() {
                        i.propsRef.current.value || c({
                            type: ge.GoToOption,
                            focus: ve.First
                        })
                    }
                    ));
                    break;
                case a.ArrowUp:
                    e.preventDefault(),
                    c({
                        type: ge.OpenListbox
                    }),
                    d.nextFrame((function() {
                        i.propsRef.current.value || c({
                            type: ge.GoToOption,
                            focus: ve.Last
                        })
                    }
                    ))
                }
            }
            ), [c, i, d]), m = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                    e.preventDefault()
                }
            }
            ), []), b = (0,
            u.useCallback)((function(e) {
                if (h(e.currentTarget))
                    return e.preventDefault();
                i.listboxState === be.Open ? (c({
                    type: ge.CloseListbox
                }),
                d.nextFrame((function() {
                    var e;
                    return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))) : (e.preventDefault(),
                c({
                    type: ge.OpenListbox
                }))
            }
            ), [c, d, i]), y = we((function() {
                if (i.labelRef.current)
                    return [i.labelRef.current.id, f].join(" ")
            }
            ), [i.labelRef.current, f]), w = (0,
            u.useMemo)((function() {
                return {
                    open: i.listboxState === be.Open,
                    disabled: i.disabled
                }
            }
            ), [i]);
            return p({
                props: s({}, t, {
                    ref: l,
                    id: f,
                    type: "button",
                    "aria-haspopup": !0,
                    "aria-controls": null == (r = i.optionsRef.current) ? void 0 : r.id,
                    "aria-expanded": i.listboxState === be.Open || void 0,
                    "aria-labelledby": y,
                    disabled: i.disabled,
                    onKeyDown: v,
                    onKeyUp: m,
                    onClick: b
                }),
                slot: w,
                defaultTag: "button",
                name: "Listbox.Button"
            })
        }
        ));
        var Pe, Ae, De, Te = r.RenderStrategy | r.Static, je = m((function e(t, n) {
            var r, o = Ce([Ie.name, e.name].join(".")), i = o[0], c = o[1], l = g(i.optionsRef, n), f = "headlessui-listbox-options-" + C(), d = ye(), v = ye(), m = Q(), b = null !== m ? m === q.Open : i.listboxState === be.Open;
            y((function() {
                var e = i.optionsRef.current;
                e && i.listboxState === be.Open && e !== document.activeElement && e.focus({
                    preventScroll: !0
                })
            }
            ), [i.listboxState, i.optionsRef]);
            var h = (0,
            u.useCallback)((function(e) {
                switch (v.dispose(),
                e.key) {
                case a.Space:
                    if ("" !== i.searchQuery)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        c({
                            type: ge.Search,
                            value: e.key
                        });
                case a.Enter:
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.CloseListbox
                    }),
                    null !== i.activeOptionIndex) {
                        var t = i.options[i.activeOptionIndex].dataRef;
                        i.propsRef.current.onChange(t.current.value)
                    }
                    he().nextFrame((function() {
                        var e;
                        return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case a.ArrowDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.GoToOption,
                        focus: ve.Next
                    });
                case a.ArrowUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.GoToOption,
                        focus: ve.Previous
                    });
                case a.Home:
                case a.PageUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.GoToOption,
                        focus: ve.First
                    });
                case a.End:
                case a.PageDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.GoToOption,
                        focus: ve.Last
                    });
                case a.Escape:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: ge.CloseListbox
                    }),
                    d.nextFrame((function() {
                        var e;
                        return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                case a.Tab:
                    e.preventDefault(),
                    e.stopPropagation();
                    break;
                default:
                    1 === e.key.length && (c({
                        type: ge.Search,
                        value: e.key
                    }),
                    v.setTimeout((function() {
                        return c({
                            type: ge.ClearSearch
                        })
                    }
                    ), 350))
                }
            }
            ), [d, c, v, i])
              , w = we((function() {
                var e, t, n;
                return null != (e = null == (t = i.labelRef.current) ? void 0 : t.id) ? e : null == (n = i.buttonRef.current) ? void 0 : n.id
            }
            ), [i.labelRef.current, i.buttonRef.current])
              , S = (0,
            u.useMemo)((function() {
                return {
                    open: i.listboxState === be.Open
                }
            }
            ), [i]);
            return p({
                props: s({}, t, {
                    "aria-activedescendant": null === i.activeOptionIndex || null == (r = i.options[i.activeOptionIndex]) ? void 0 : r.id,
                    "aria-labelledby": w,
                    id: f,
                    onKeyDown: h,
                    role: "listbox",
                    tabIndex: 0,
                    ref: l
                }),
                slot: S,
                defaultTag: "ul",
                features: Te,
                visible: b,
                name: "Listbox.Options"
            })
        }
        ));
        function Le(e) {
            var t = e.container
              , n = e.accept
              , r = e.walk
              , o = e.enabled
              , a = void 0 === o || o
              , i = (0,
            u.useRef)(n)
              , s = (0,
            u.useRef)(r);
            (0,
            u.useEffect)((function() {
                i.current = n,
                s.current = r
            }
            ), [n, r]),
            y((function() {
                if (t && a)
                    for (var e = i.current, n = s.current, r = Object.assign((function(t) {
                        return e(t)
                    }
                    ), {
                        acceptNode: e
                    }), o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, r, !1); o.nextNode(); )
                        n(o.currentNode)
            }
            ), [t, a, i, s])
        }
        Ie.Button = Re,
        Ie.Label = function e(t) {
            var n = Ce([Ie.name, e.name].join("."))[0]
              , r = "headlessui-listbox-label-" + C()
              , o = (0,
            u.useCallback)((function() {
                var e;
                return null == (e = n.buttonRef.current) ? void 0 : e.focus({
                    preventScroll: !0
                })
            }
            ), [n.buttonRef])
              , a = (0,
            u.useMemo)((function() {
                return {
                    open: n.listboxState === be.Open,
                    disabled: n.disabled
                }
            }
            ), [n]);
            return p({
                props: s({}, t, {
                    ref: n.labelRef,
                    id: r,
                    onClick: o
                }),
                slot: a,
                defaultTag: "label",
                name: "Listbox.Label"
            })
        }
        ,
        Ie.Options = je,
        Ie.Option = function e(t) {
            var n = t.disabled
              , r = void 0 !== n && n
              , o = t.value
              , a = c(t, ["disabled", "value"])
              , i = Ce([Ie.name, e.name].join("."))
              , l = i[0]
              , f = i[1]
              , d = "headlessui-listbox-option-" + C()
              , v = null !== l.activeOptionIndex && l.options[l.activeOptionIndex].id === d
              , m = l.propsRef.current.value === o
              , b = (0,
            u.useRef)({
                disabled: r,
                value: o
            });
            y((function() {
                b.current.disabled = r
            }
            ), [b, r]),
            y((function() {
                b.current.value = o
            }
            ), [b, o]),
            y((function() {
                var e, t;
                b.current.textValue = null == (e = document.getElementById(d)) || null == (t = e.textContent) ? void 0 : t.toLowerCase()
            }
            ), [b, d]);
            var g = (0,
            u.useCallback)((function() {
                return l.propsRef.current.onChange(o)
            }
            ), [l.propsRef, o]);
            y((function() {
                return f({
                    type: ge.RegisterOption,
                    id: d,
                    dataRef: b
                }),
                function() {
                    return f({
                        type: ge.UnregisterOption,
                        id: d
                    })
                }
            }
            ), [b, d]),
            y((function() {
                var e;
                l.listboxState === be.Open && m && (f({
                    type: ge.GoToOption,
                    focus: ve.Specific,
                    id: d
                }),
                null == (e = document.getElementById(d)) || null == e.focus || e.focus())
            }
            ), [l.listboxState]),
            y((function() {
                if (l.listboxState === be.Open && v) {
                    var e = he();
                    return e.nextFrame((function() {
                        var e;
                        return null == (e = document.getElementById(d)) || null == e.scrollIntoView ? void 0 : e.scrollIntoView({
                            block: "nearest"
                        })
                    }
                    )),
                    e.dispose
                }
            }
            ), [d, v, l.listboxState]);
            var h = (0,
            u.useCallback)((function(e) {
                if (r)
                    return e.preventDefault();
                g(),
                f({
                    type: ge.CloseListbox
                }),
                he().nextFrame((function() {
                    var e;
                    return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))
            }
            ), [f, l.buttonRef, r, g])
              , w = (0,
            u.useCallback)((function() {
                if (r)
                    return f({
                        type: ge.GoToOption,
                        focus: ve.Nothing
                    });
                f({
                    type: ge.GoToOption,
                    focus: ve.Specific,
                    id: d
                })
            }
            ), [r, d, f])
              , S = (0,
            u.useCallback)((function() {
                r || v || f({
                    type: ge.GoToOption,
                    focus: ve.Specific,
                    id: d
                })
            }
            ), [r, v, d, f])
              , x = (0,
            u.useCallback)((function() {
                r || v && f({
                    type: ge.GoToOption,
                    focus: ve.Nothing
                })
            }
            ), [r, v, f])
              , O = (0,
            u.useMemo)((function() {
                return {
                    active: v,
                    selected: m,
                    disabled: r
                }
            }
            ), [v, m, r]);
            return p({
                props: s({}, a, {
                    id: d,
                    role: "option",
                    tabIndex: -1,
                    "aria-disabled": !0 === r || void 0,
                    "aria-selected": !0 === m || void 0,
                    onClick: h,
                    onFocus: w,
                    onPointerMove: S,
                    onMouseMove: S,
                    onPointerLeave: x,
                    onMouseLeave: x
                }),
                slot: O,
                defaultTag: "li",
                name: "Listbox.Option"
            })
        }
        ,
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(Ae || (Ae = {})),
        function(e) {
            e[e.OpenMenu = 0] = "OpenMenu",
            e[e.CloseMenu = 1] = "CloseMenu",
            e[e.GoToItem = 2] = "GoToItem",
            e[e.Search = 3] = "Search",
            e[e.ClearSearch = 4] = "ClearSearch",
            e[e.RegisterItem = 5] = "RegisterItem",
            e[e.UnregisterItem = 6] = "UnregisterItem"
        }(De || (De = {}));
        var Fe = ((Pe = {})[De.CloseMenu] = function(e) {
            return e.menuState === Ae.Closed ? e : s({}, e, {
                activeItemIndex: null,
                menuState: Ae.Closed
            })
        }
        ,
        Pe[De.OpenMenu] = function(e) {
            return e.menuState === Ae.Open ? e : s({}, e, {
                menuState: Ae.Open
            })
        }
        ,
        Pe[De.GoToItem] = function(e, t) {
            var n = Se(t, {
                resolveItems: function() {
                    return e.items
                },
                resolveActiveIndex: function() {
                    return e.activeItemIndex
                },
                resolveId: function(e) {
                    return e.id
                },
                resolveDisabled: function(e) {
                    return e.dataRef.current.disabled
                }
            });
            return "" === e.searchQuery && e.activeItemIndex === n ? e : s({}, e, {
                searchQuery: "",
                activeItemIndex: n
            })
        }
        ,
        Pe[De.Search] = function(e, t) {
            var n = e.searchQuery + t.value.toLowerCase()
              , r = e.items.findIndex((function(e) {
                var t;
                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n)) && !e.dataRef.current.disabled
            }
            ));
            return -1 === r || r === e.activeItemIndex ? s({}, e, {
                searchQuery: n
            }) : s({}, e, {
                searchQuery: n,
                activeItemIndex: r
            })
        }
        ,
        Pe[De.ClearSearch] = function(e) {
            return "" === e.searchQuery ? e : s({}, e, {
                searchQuery: ""
            })
        }
        ,
        Pe[De.RegisterItem] = function(e, t) {
            return s({}, e, {
                items: [].concat(e.items, [{
                    id: t.id,
                    dataRef: t.dataRef
                }])
            })
        }
        ,
        Pe[De.UnregisterItem] = function(e, t) {
            var n = e.items.slice()
              , r = null !== e.activeItemIndex ? n[e.activeItemIndex] : null
              , o = n.findIndex((function(e) {
                return e.id === t.id
            }
            ));
            return -1 !== o && n.splice(o, 1),
            s({}, e, {
                items: n,
                activeItemIndex: o === e.activeItemIndex || null === r ? null : n.indexOf(r)
            })
        }
        ,
        Pe)
          , Me = (0,
        u.createContext)(null);
        function Ne(e) {
            var t = (0,
            u.useContext)(Me);
            if (null === t) {
                var n = new Error("<" + e + " /> is missing a parent <" + Ue.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, Ne),
                n
            }
            return t
        }
        function _e(e, t) {
            return d(t.type, Fe, e, t)
        }
        Me.displayName = "MenuContext";
        var Ve = u.Fragment;
        function Ue(e) {
            var t, n = (0,
            u.useReducer)(_e, {
                menuState: Ae.Closed,
                buttonRef: (0,
                u.createRef)(),
                itemsRef: (0,
                u.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null
            }), r = n[0], o = r.menuState, a = r.itemsRef, i = r.buttonRef, s = n[1];
            L("mousedown", (function(e) {
                var t, n, r, u = e.target;
                o === Ae.Open && ((null == (t = i.current) ? void 0 : t.contains(u)) || (null == (n = a.current) ? void 0 : n.contains(u)) || (s({
                    type: De.CloseMenu
                }),
                T(u, R.Loose) || (e.preventDefault(),
                null == (r = i.current) || r.focus())))
            }
            ));
            var c = (0,
            u.useMemo)((function() {
                return {
                    open: o === Ae.Open
                }
            }
            ), [o]);
            return u.createElement(Me.Provider, {
                value: n
            }, u.createElement(J, {
                value: d(o, (t = {},
                t[Ae.Open] = q.Open,
                t[Ae.Closed] = q.Closed,
                t))
            }, p({
                props: e,
                slot: c,
                defaultTag: Ve,
                name: "Menu"
            })))
        }
        var Be, Ge, He, ze = m((function e(t, n) {
            var r, o = Ne([Ue.name, e.name].join(".")), i = o[0], c = o[1], l = g(i.buttonRef, n), f = "headlessui-menu-button-" + C(), d = ye(), v = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                case a.Enter:
                case a.ArrowDown:
                    e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: De.OpenMenu
                    }),
                    d.nextFrame((function() {
                        return c({
                            type: De.GoToItem,
                            focus: ve.First
                        })
                    }
                    ));
                    break;
                case a.ArrowUp:
                    e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: De.OpenMenu
                    }),
                    d.nextFrame((function() {
                        return c({
                            type: De.GoToItem,
                            focus: ve.Last
                        })
                    }
                    ))
                }
            }
            ), [c, d]), m = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                    e.preventDefault()
                }
            }
            ), []), b = (0,
            u.useCallback)((function(e) {
                if (h(e.currentTarget))
                    return e.preventDefault();
                t.disabled || (i.menuState === Ae.Open ? (c({
                    type: De.CloseMenu
                }),
                d.nextFrame((function() {
                    var e;
                    return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))) : (e.preventDefault(),
                e.stopPropagation(),
                c({
                    type: De.OpenMenu
                })))
            }
            ), [c, d, i, t.disabled]), y = (0,
            u.useMemo)((function() {
                return {
                    open: i.menuState === Ae.Open
                }
            }
            ), [i]);
            return p({
                props: s({}, t, {
                    ref: l,
                    id: f,
                    type: "button",
                    "aria-haspopup": !0,
                    "aria-controls": null == (r = i.itemsRef.current) ? void 0 : r.id,
                    "aria-expanded": i.menuState === Ae.Open || void 0,
                    onKeyDown: v,
                    onKeyUp: m,
                    onClick: b
                }),
                slot: y,
                defaultTag: "button",
                name: "Menu.Button"
            })
        }
        )), We = r.RenderStrategy | r.Static, qe = m((function e(t, n) {
            var r, o, i = Ne([Ue.name, e.name].join(".")), c = i[0], l = i[1], f = g(c.itemsRef, n), d = "headlessui-menu-items-" + C(), v = ye(), m = Q(), b = null !== m ? m === q.Open : c.menuState === Ae.Open;
            (0,
            u.useEffect)((function() {
                var e = c.itemsRef.current;
                e && c.menuState === Ae.Open && e !== document.activeElement && e.focus({
                    preventScroll: !0
                })
            }
            ), [c.menuState, c.itemsRef]),
            Le({
                container: c.itemsRef.current,
                enabled: c.menuState === Ae.Open,
                accept: function(e) {
                    return "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                },
                walk: function(e) {
                    e.setAttribute("role", "none")
                }
            });
            var h = (0,
            u.useCallback)((function(e) {
                switch (v.dispose(),
                e.key) {
                case a.Space:
                    if ("" !== c.searchQuery)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: De.Search,
                            value: e.key
                        });
                case a.Enter:
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.CloseMenu
                    }),
                    null !== c.activeItemIndex) {
                        var t, n = c.items[c.activeItemIndex].id;
                        null == (t = document.getElementById(n)) || t.click()
                    }
                    he().nextFrame((function() {
                        var e;
                        return null == (e = c.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case a.ArrowDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.GoToItem,
                        focus: ve.Next
                    });
                case a.ArrowUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.GoToItem,
                        focus: ve.Previous
                    });
                case a.Home:
                case a.PageUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.GoToItem,
                        focus: ve.First
                    });
                case a.End:
                case a.PageDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.GoToItem,
                        focus: ve.Last
                    });
                case a.Escape:
                    e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: De.CloseMenu
                    }),
                    he().nextFrame((function() {
                        var e;
                        return null == (e = c.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case a.Tab:
                    e.preventDefault(),
                    e.stopPropagation();
                    break;
                default:
                    1 === e.key.length && (l({
                        type: De.Search,
                        value: e.key
                    }),
                    v.setTimeout((function() {
                        return l({
                            type: De.ClearSearch
                        })
                    }
                    ), 350))
                }
            }
            ), [l, v, c])
              , y = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case a.Space:
                    e.preventDefault()
                }
            }
            ), [])
              , w = (0,
            u.useMemo)((function() {
                return {
                    open: c.menuState === Ae.Open
                }
            }
            ), [c]);
            return p({
                props: s({}, t, {
                    "aria-activedescendant": null === c.activeItemIndex || null == (r = c.items[c.activeItemIndex]) ? void 0 : r.id,
                    "aria-labelledby": null == (o = c.buttonRef.current) ? void 0 : o.id,
                    id: d,
                    onKeyDown: h,
                    onKeyUp: y,
                    role: "menu",
                    tabIndex: 0,
                    ref: f
                }),
                slot: w,
                defaultTag: "div",
                features: We,
                visible: b,
                name: "Menu.Items"
            })
        }
        )), Ke = u.Fragment;
        Ue.Button = ze,
        Ue.Items = qe,
        Ue.Item = function e(t) {
            var n = t.disabled
              , r = void 0 !== n && n
              , o = t.onClick
              , a = c(t, ["disabled", "onClick"])
              , i = Ne([Ue.name, e.name].join("."))
              , l = i[0]
              , f = i[1]
              , d = "headlessui-menu-item-" + C()
              , v = null !== l.activeItemIndex && l.items[l.activeItemIndex].id === d;
            y((function() {
                if (l.menuState === Ae.Open && v) {
                    var e = he();
                    return e.nextFrame((function() {
                        var e;
                        return null == (e = document.getElementById(d)) || null == e.scrollIntoView ? void 0 : e.scrollIntoView({
                            block: "nearest"
                        })
                    }
                    )),
                    e.dispose
                }
            }
            ), [d, v, l.menuState]);
            var m = (0,
            u.useRef)({
                disabled: r
            });
            y((function() {
                m.current.disabled = r
            }
            ), [m, r]),
            y((function() {
                var e, t;
                m.current.textValue = null == (e = document.getElementById(d)) || null == (t = e.textContent) ? void 0 : t.toLowerCase()
            }
            ), [m, d]),
            y((function() {
                return f({
                    type: De.RegisterItem,
                    id: d,
                    dataRef: m
                }),
                function() {
                    return f({
                        type: De.UnregisterItem,
                        id: d
                    })
                }
            }
            ), [m, d]);
            var b = (0,
            u.useCallback)((function(e) {
                return r ? e.preventDefault() : (f({
                    type: De.CloseMenu
                }),
                he().nextFrame((function() {
                    var e;
                    return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                )),
                o ? o(e) : void 0)
            }
            ), [f, l.buttonRef, r, o])
              , g = (0,
            u.useCallback)((function() {
                if (r)
                    return f({
                        type: De.GoToItem,
                        focus: ve.Nothing
                    });
                f({
                    type: De.GoToItem,
                    focus: ve.Specific,
                    id: d
                })
            }
            ), [r, d, f])
              , h = (0,
            u.useCallback)((function() {
                r || v || f({
                    type: De.GoToItem,
                    focus: ve.Specific,
                    id: d
                })
            }
            ), [r, v, d, f])
              , w = (0,
            u.useCallback)((function() {
                r || v && f({
                    type: De.GoToItem,
                    focus: ve.Nothing
                })
            }
            ), [r, v, f])
              , S = (0,
            u.useMemo)((function() {
                return {
                    active: v,
                    disabled: r
                }
            }
            ), [v, r]);
            return p({
                props: s({}, a, {
                    id: d,
                    role: "menuitem",
                    tabIndex: -1,
                    "aria-disabled": !0 === r || void 0,
                    onClick: b,
                    onFocus: g,
                    onPointerMove: h,
                    onMouseMove: h,
                    onPointerLeave: w,
                    onMouseLeave: w
                }),
                slot: S,
                defaultTag: Ke,
                name: "Menu.Item"
            })
        }
        ,
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(Ge || (Ge = {})),
        function(e) {
            e[e.TogglePopover = 0] = "TogglePopover",
            e[e.ClosePopover = 1] = "ClosePopover",
            e[e.SetButton = 2] = "SetButton",
            e[e.SetButtonId = 3] = "SetButtonId",
            e[e.SetPanel = 4] = "SetPanel",
            e[e.SetPanelId = 5] = "SetPanelId"
        }(He || (He = {}));
        var Qe = ((Be = {})[He.TogglePopover] = function(e) {
            var t;
            return s({}, e, {
                popoverState: d(e.popoverState, (t = {},
                t[Ge.Open] = Ge.Closed,
                t[Ge.Closed] = Ge.Open,
                t))
            })
        }
        ,
        Be[He.ClosePopover] = function(e) {
            return e.popoverState === Ge.Closed ? e : s({}, e, {
                popoverState: Ge.Closed
            })
        }
        ,
        Be[He.SetButton] = function(e, t) {
            return e.button === t.button ? e : s({}, e, {
                button: t.button
            })
        }
        ,
        Be[He.SetButtonId] = function(e, t) {
            return e.buttonId === t.buttonId ? e : s({}, e, {
                buttonId: t.buttonId
            })
        }
        ,
        Be[He.SetPanel] = function(e, t) {
            return e.panel === t.panel ? e : s({}, e, {
                panel: t.panel
            })
        }
        ,
        Be[He.SetPanelId] = function(e, t) {
            return e.panelId === t.panelId ? e : s({}, e, {
                panelId: t.panelId
            })
        }
        ,
        Be)
          , Je = (0,
        u.createContext)(null);
        function Ye(e) {
            var t = (0,
            u.useContext)(Je);
            if (null === t) {
                var n = new Error("<" + e + " /> is missing a parent <" + tt.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, Ye),
                n
            }
            return t
        }
        Je.displayName = "PopoverContext";
        var $e = (0,
        u.createContext)(null);
        function Xe() {
            return (0,
            u.useContext)($e)
        }
        $e.displayName = "PopoverGroupContext";
        var Ze = (0,
        u.createContext)(null);
        function et(e, t) {
            return d(t.type, Qe, e, t)
        }
        Ze.displayName = "PopoverPanelContext";
        function tt(e) {
            var t, n = "headlessui-popover-button-" + C(), r = "headlessui-popover-panel-" + C(), o = (0,
            u.useReducer)(et, {
                popoverState: Ge.Closed,
                button: null,
                buttonId: n,
                panel: null,
                panelId: r
            }), a = o[0], i = a.popoverState, s = a.button, c = a.panel, l = o[1];
            (0,
            u.useEffect)((function() {
                return l({
                    type: He.SetButtonId,
                    buttonId: n
                })
            }
            ), [n, l]),
            (0,
            u.useEffect)((function() {
                return l({
                    type: He.SetPanelId,
                    panelId: r
                })
            }
            ), [r, l]);
            var f = (0,
            u.useMemo)((function() {
                return {
                    buttonId: n,
                    panelId: r,
                    close: function() {
                        return l({
                            type: He.ClosePopover
                        })
                    }
                }
            }
            ), [n, r, l])
              , v = Xe()
              , m = null == v ? void 0 : v.registerPopover
              , b = (0,
            u.useCallback)((function() {
                var e;
                return null != (e = null == v ? void 0 : v.isFocusWithinPopoverGroup()) ? e : (null == s ? void 0 : s.contains(document.activeElement)) || (null == c ? void 0 : c.contains(document.activeElement))
            }
            ), [v, s, c]);
            (0,
            u.useEffect)((function() {
                return null == m ? void 0 : m(f)
            }
            ), [m, f]),
            L("focus", (function() {
                i === Ge.Open && (b() || s && c && l({
                    type: He.ClosePopover
                }))
            }
            ), !0),
            L("mousedown", (function(e) {
                var t = e.target;
                i === Ge.Open && ((null == s ? void 0 : s.contains(t)) || (null == c ? void 0 : c.contains(t)) || (l({
                    type: He.ClosePopover
                }),
                T(t, R.Loose) || (e.preventDefault(),
                null == s || s.focus())))
            }
            ));
            var g = (0,
            u.useMemo)((function() {
                return {
                    open: i === Ge.Open
                }
            }
            ), [i]);
            return u.createElement(Je.Provider, {
                value: o
            }, u.createElement(J, {
                value: d(i, (t = {},
                t[Ge.Open] = q.Open,
                t[Ge.Closed] = q.Closed,
                t))
            }, p({
                props: e,
                slot: g,
                defaultTag: "div",
                name: "Popover"
            })))
        }
        var nt = m((function e(t, n) {
            var r = Ye([tt.name, e.name].join("."))
              , o = r[0]
              , i = r[1]
              , c = (0,
            u.useRef)(null)
              , l = Xe()
              , f = null == l ? void 0 : l.closeOthers
              , d = (0,
            u.useContext)(Ze)
              , v = null !== d && d === o.panelId
              , m = g(c, n, v ? null : function(e) {
                return i({
                    type: He.SetButton,
                    button: e
                })
            }
            )
              , b = (0,
            u.useRef)(null)
              , y = (0,
            u.useRef)("undefined" === typeof window ? null : document.activeElement);
            L("focus", (function() {
                y.current = b.current,
                b.current = document.activeElement
            }
            ), !0);
            var w = (0,
            u.useCallback)((function(e) {
                var t;
                if (v) {
                    if (o.popoverState === Ge.Closed)
                        return;
                    switch (e.key) {
                    case a.Space:
                    case a.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        i({
                            type: He.ClosePopover
                        }),
                        null == (t = o.button) || t.focus()
                    }
                } else
                    switch (e.key) {
                    case a.Space:
                    case a.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        o.popoverState === Ge.Closed && (null == f || f(o.buttonId)),
                        i({
                            type: He.TogglePopover
                        });
                        break;
                    case a.Escape:
                        if (o.popoverState !== Ge.Open)
                            return null == f ? void 0 : f(o.buttonId);
                        if (!c.current)
                            return;
                        if (!c.current.contains(document.activeElement))
                            return;
                        i({
                            type: He.ClosePopover
                        });
                        break;
                    case a.Tab:
                        if (o.popoverState !== Ge.Open)
                            return;
                        if (!o.panel)
                            return;
                        if (!o.button)
                            return;
                        if (e.shiftKey) {
                            var n;
                            if (!y.current)
                                return;
                            if (null == (n = o.button) ? void 0 : n.contains(y.current))
                                return;
                            if (o.panel.contains(y.current))
                                return;
                            var r = D()
                              , u = r.indexOf(y.current);
                            if (r.indexOf(o.button) > u)
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            j(o.panel, k.Last)
                        } else
                            e.preventDefault(),
                            e.stopPropagation(),
                            j(o.panel, k.First)
                    }
            }
            ), [i, o.popoverState, o.buttonId, o.button, o.panel, c, f, v])
              , S = (0,
            u.useCallback)((function(e) {
                var t;
                if (!v && (e.key === a.Space && e.preventDefault(),
                o.popoverState === Ge.Open && o.panel && o.button))
                    switch (e.key) {
                    case a.Tab:
                        if (!y.current)
                            return;
                        if (null == (t = o.button) ? void 0 : t.contains(y.current))
                            return;
                        if (o.panel.contains(y.current))
                            return;
                        var n = D()
                          , r = n.indexOf(y.current);
                        if (n.indexOf(o.button) > r)
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        j(o.panel, k.Last)
                    }
            }
            ), [o.popoverState, o.panel, o.button, v])
              , x = (0,
            u.useCallback)((function(e) {
                var n, r;
                h(e.currentTarget) || (t.disabled || (v ? (i({
                    type: He.ClosePopover
                }),
                null == (n = o.button) || n.focus()) : (o.popoverState === Ge.Closed && (null == f || f(o.buttonId)),
                null == (r = o.button) || r.focus(),
                i({
                    type: He.TogglePopover
                }))))
            }
            ), [i, o.button, o.popoverState, o.buttonId, t.disabled, f, v])
              , O = (0,
            u.useMemo)((function() {
                return {
                    open: o.popoverState === Ge.Open
                }
            }
            ), [o]);
            return p({
                props: s({}, t, v ? {
                    type: "button",
                    onKeyDown: w,
                    onClick: x
                } : {
                    ref: m,
                    id: o.buttonId,
                    type: "button",
                    "aria-expanded": o.popoverState === Ge.Open || void 0,
                    "aria-controls": o.panel ? o.panelId : void 0,
                    onKeyDown: w,
                    onKeyUp: S,
                    onClick: x
                }),
                slot: O,
                defaultTag: "button",
                name: "Popover.Button"
            })
        }
        ))
          , rt = r.RenderStrategy | r.Static
          , ot = m((function e(t, n) {
            var r = Ye([tt.name, e.name].join("."))
              , o = r[0].popoverState
              , a = r[1]
              , i = g(n)
              , c = "headlessui-popover-overlay-" + C()
              , l = Q()
              , f = null !== l ? l === q.Open : o === Ge.Open
              , d = (0,
            u.useCallback)((function(e) {
                if (h(e.currentTarget))
                    return e.preventDefault();
                a({
                    type: He.ClosePopover
                })
            }
            ), [a])
              , v = (0,
            u.useMemo)((function() {
                return {
                    open: o === Ge.Open
                }
            }
            ), [o]);
            return p({
                props: s({}, t, {
                    ref: i,
                    id: c,
                    "aria-hidden": !0,
                    onClick: d
                }),
                slot: v,
                defaultTag: "div",
                features: rt,
                visible: f,
                name: "Popover.Overlay"
            })
        }
        ))
          , at = r.RenderStrategy | r.Static
          , ut = m((function e(t, n) {
            var r = t.focus
              , o = void 0 !== r && r
              , i = c(t, ["focus"])
              , l = Ye([tt.name, e.name].join("."))
              , f = l[0]
              , d = l[1]
              , v = (0,
            u.useRef)(null)
              , m = g(v, n, (function(e) {
                d({
                    type: He.SetPanel,
                    panel: e
                })
            }
            ))
              , b = Q()
              , h = null !== b ? b === q.Open : f.popoverState === Ge.Open
              , y = (0,
            u.useCallback)((function(e) {
                var t;
                switch (e.key) {
                case a.Escape:
                    if (f.popoverState !== Ge.Open)
                        return;
                    if (!v.current)
                        return;
                    if (!v.current.contains(document.activeElement))
                        return;
                    e.preventDefault(),
                    d({
                        type: He.ClosePopover
                    }),
                    null == (t = f.button) || t.focus()
                }
            }
            ), [f, v, d]);
            (0,
            u.useEffect)((function() {
                return function() {
                    return d({
                        type: He.SetPanel,
                        panel: null
                    })
                }
            }
            ), [d]),
            (0,
            u.useEffect)((function() {
                var e;
                f.popoverState !== Ge.Closed || null != (e = t.unmount) && !e || d({
                    type: He.SetPanel,
                    panel: null
                })
            }
            ), [f.popoverState, t.unmount, d]),
            (0,
            u.useEffect)((function() {
                if (o && f.popoverState === Ge.Open && v.current) {
                    var e = document.activeElement;
                    v.current.contains(e) || j(v.current, k.First)
                }
            }
            ), [o, v, f.popoverState]),
            L("keydown", (function(e) {
                if (f.popoverState === Ge.Open && v.current && e.key === a.Tab && document.activeElement && v.current && v.current.contains(document.activeElement)) {
                    e.preventDefault();
                    var t, n = j(v.current, e.shiftKey ? k.Previous : k.Next);
                    if (n === E.Underflow)
                        return null == (t = f.button) ? void 0 : t.focus();
                    if (n === E.Overflow) {
                        if (!f.button)
                            return;
                        var r = D()
                          , o = r.indexOf(f.button);
                        j(r.splice(o + 1).filter((function(e) {
                            var t;
                            return !(null == (t = v.current) ? void 0 : t.contains(e))
                        }
                        )), k.First) === E.Error && j(document.body, k.First)
                    }
                }
            }
            )),
            L("focus", (function() {
                var e;
                o && f.popoverState === Ge.Open && v.current && ((null == (e = v.current) ? void 0 : e.contains(document.activeElement)) || d({
                    type: He.ClosePopover
                }))
            }
            ), !0);
            var w = (0,
            u.useMemo)((function() {
                return {
                    open: f.popoverState === Ge.Open
                }
            }
            ), [f])
              , S = {
                ref: m,
                id: f.panelId,
                onKeyDown: y
            };
            return u.createElement(Ze.Provider, {
                value: f.panelId
            }, p({
                props: s({}, i, S),
                slot: w,
                defaultTag: "div",
                features: at,
                visible: h,
                name: "Popover.Panel"
            }))
        }
        ));
        tt.Button = nt,
        tt.Overlay = ot,
        tt.Panel = ut,
        tt.Group = function(e) {
            var t = (0,
            u.useRef)(null)
              , n = (0,
            u.useState)([])
              , r = n[0]
              , o = n[1]
              , a = (0,
            u.useCallback)((function(e) {
                o((function(t) {
                    var n = t.indexOf(e);
                    if (-1 !== n) {
                        var r = t.slice();
                        return r.splice(n, 1),
                        r
                    }
                    return t
                }
                ))
            }
            ), [o])
              , i = (0,
            u.useCallback)((function(e) {
                return o((function(t) {
                    return [].concat(t, [e])
                }
                )),
                function() {
                    return a(e)
                }
            }
            ), [o, a])
              , c = (0,
            u.useCallback)((function() {
                var e, n = document.activeElement;
                return !!(null == (e = t.current) ? void 0 : e.contains(n)) || r.some((function(e) {
                    var t, r;
                    return (null == (t = document.getElementById(e.buttonId)) ? void 0 : t.contains(n)) || (null == (r = document.getElementById(e.panelId)) ? void 0 : r.contains(n))
                }
                ))
            }
            ), [t, r])
              , l = (0,
            u.useCallback)((function(e) {
                for (var t, n = f(r); !(t = n()).done; ) {
                    var o = t.value;
                    o.buttonId !== e && o.close()
                }
            }
            ), [r])
              , d = (0, u.useMemo)((function() {
                return {
                    registerPopover: i,
                    unregisterPopover: a,
                    isFocusWithinPopoverGroup: c,
                    closeOthers: l
                }
            }
            ), [i, a, c, l])
              , v = (0,
            u.useMemo)((function() {
                return {}
            }
            ), [])
              , m = {
                ref: t
            }
              , b = e;
            return u.createElement($e.Provider, {
                value: d
            }, p({
                props: s({}, b, m),
                slot: v,
                defaultTag: "div",
                name: "Popover.Group"
            }))
        }
        ;
        var it = (0,
        u.createContext)(null);
        function st() {
            var e = (0,
            u.useContext)(it);
            if (null === e) {
                var t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                throw Error.captureStackTrace && Error.captureStackTrace(t, st),
                t
            }
            return e
        }
        function ct() {
            var e = (0,
            u.useState)([])
              , t = e[0]
              , n = e[1];
            return [t.length > 0 ? t.join(" ") : void 0, (0,
            u.useMemo)((function() {
                return function(e) {
                    var t = (0,
                    u.useCallback)((function(e) {
                        return n((function(t) {
                            return [].concat(t, [e])
                        }
                        )),
                        function() {
                            return n((function(t) {
                                var n = t.slice()
                                  , r = n.indexOf(e);
                                return -1 !== r && n.splice(r, 1),
                                n
                            }
                            ))
                        }
                    }
                    ), [])
                      , r = (0,
                    u.useMemo)((function() {
                        return {
                            register: t,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        }
                    }
                    ), [t, e.slot, e.name, e.props]);
                    return u.createElement(it.Provider, {
                        value: r
                    }, e.children)
                }
            }
            ), [n])]
        }
        var lt, ft;
        function dt(e) {
            var t = e.passive
              , n = void 0 !== t && t
              , r = c(e, ["passive"])
              , o = st()
              , a = "headlessui-label-" + C();
            y((function() {
                return o.register(a)
            }
            ), [a, o.register]);
            var u = s({}, o.props, {
                id: a
            })
              , i = s({}, r, u);
            return n && delete i.onClick,
            p({
                props: i,
                slot: o.slot || {},
                defaultTag: "label",
                name: o.name || "Label"
            })
        }
        !function(e) {
            e[e.RegisterOption = 0] = "RegisterOption",
            e[e.UnregisterOption = 1] = "UnregisterOption"
        }(ft || (ft = {}));
        var pt = ((lt = {})[ft.RegisterOption] = function(e, t) {
            return s({}, e, {
                options: [].concat(e.options, [{
                    id: t.id,
                    element: t.element,
                    propsRef: t.propsRef
                }])
            })
        }
        ,
        lt[ft.UnregisterOption] = function(e, t) {
            var n = e.options.slice()
              , r = e.options.findIndex((function(e) {
                return e.id === t.id
            }
            ));
            return -1 === r ? e : (n.splice(r, 1),
            s({}, e, {
                options: n
            }))
        }
        ,
        lt)
          , vt = (0,
        u.createContext)(null);
        function mt(e) {
            var t = (0,
            u.useContext)(vt);
            if (null === t) {
                var n = new Error("<" + e + " /> is missing a parent <" + ht.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, mt),
                n
            }
            return t
        }
        function bt(e, t) {
            return d(t.type, pt, e, t)
        }
        vt.displayName = "RadioGroupContext";
        var gt;
        function ht(e) {
            var t = e.value
              , n = e.onChange
              , r = e.disabled
              , o = void 0 !== r && r
              , i = c(e, ["value", "onChange", "disabled"])
              , l = (0,
            u.useReducer)(bt, {
                options: []
            })
              , f = l[0].options
              , d = l[1]
              , v = ct()
              , m = v[0]
              , b = v[1]
              , g = z()
              , h = g[0]
              , y = g[1]
              , w = "headlessui-radiogroup-" + C()
              , S = (0,
            u.useRef)(null)
              , x = (0,
            u.useMemo)((function() {
                return f.find((function(e) {
                    return !e.propsRef.current.disabled
                }
                ))
            }
            ), [f])
              , O = (0,
            u.useMemo)((function() {
                return f.some((function(e) {
                    return e.propsRef.current.value === t
                }
                ))
            }
            ), [f, t])
              , I = (0,
            u.useCallback)((function(e) {
                var r;
                if (o)
                    return !1;
                if (e === t)
                    return !1;
                var a = null == (r = f.find((function(t) {
                    return t.propsRef.current.value === e
                }
                ))) ? void 0 : r.propsRef.current;
                return !(null == a ? void 0 : a.disabled) && (n(e),
                !0)
            }
            ), [n, t, o, f]);
            Le({
                container: S.current,
                accept: function(e) {
                    return "radio" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                },
                walk: function(e) {
                    e.setAttribute("role", "none")
                }
            });
            var R = (0,
            u.useCallback)((function(e) {
                if (S.current) {
                    var t = f.filter((function(e) {
                        return !1 === e.propsRef.current.disabled
                    }
                    )).map((function(e) {
                        return e.element.current
                    }
                    ));
                    switch (e.key) {
                    case a.ArrowLeft:
                    case a.ArrowUp:
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        j(t, k.Previous | k.WrapAround) === E.Success) {
                            var n = f.find((function(e) {
                                return e.element.current === document.activeElement
                            }
                            ));
                            n && I(n.propsRef.current.value)
                        }
                        break;
                    case a.ArrowRight:
                    case a.ArrowDown:
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        j(t, k.Next | k.WrapAround) === E.Success) {
                            var r = f.find((function(e) {
                                return e.element.current === document.activeElement
                            }
                            ));
                            r && I(r.propsRef.current.value)
                        }
                        break;
                    case a.Space:
                        e.preventDefault(),
                        e.stopPropagation();
                        var o = f.find((function(e) {
                            return e.element.current === document.activeElement
                        }
                        ));
                        o && I(o.propsRef.current.value)
                    }
                }
            }
            ), [S, f, I])
              , P = (0,
            u.useCallback)((function(e) {
                return d(s({
                    type: ft.RegisterOption
                }, e)),
                function() {
                    return d({
                        type: ft.UnregisterOption,
                        id: e.id
                    })
                }
            }
            ), [d])
              , A = (0,
            u.useMemo)((function() {
                return {
                    registerOption: P,
                    firstOption: x,
                    containsCheckedOption: O,
                    change: I,
                    disabled: o,
                    value: t
                }
            }
            ), [P, x, O, I, o, t])
              , D = {
                ref: S,
                id: w,
                role: "radiogroup",
                "aria-labelledby": m,
                "aria-describedby": h,
                onKeyDown: R
            };
            return u.createElement(y, {
                name: "RadioGroup.Description"
            }, u.createElement(b, {
                name: "RadioGroup.Label"
            }, u.createElement(vt.Provider, {
                value: A
            }, p({
                props: s({}, i, D),
                defaultTag: "div",
                name: "RadioGroup"
            }))))
        }
        !function(e) {
            e[e.Empty = 1] = "Empty",
            e[e.Active = 2] = "Active"
        }(gt || (gt = {}));
        ht.Option = function e(t) {
            var n = (0,
            u.useRef)(null)
              , r = "headlessui-radiogroup-option-" + C()
              , o = ct()
              , a = o[0]
              , i = o[1]
              , l = z()
              , f = l[0]
              , d = l[1]
              , v = function(e) {
                void 0 === e && (e = 0);
                var t = (0,
                u.useState)(e)
                  , n = t[0]
                  , r = t[1];
                return {
                    addFlag: (0,
                    u.useCallback)((function(e) {
                        return r((function(t) {
                            return t | e
                        }
                        ))
                    }
                    ), [r]),
                    hasFlag: (0,
                    u.useCallback)((function(e) {
                        return Boolean(n & e)
                    }
                    ), [n]),
                    removeFlag: (0,
                    u.useCallback)((function(e) {
                        return r((function(t) {
                            return t & ~e
                        }
                        ))
                    }
                    ), [r]),
                    toggleFlag: (0,
                    u.useCallback)((function(e) {
                        return r((function(t) {
                            return t ^ e
                        }
                        ))
                    }
                    ), [r])
                }
            }(gt.Empty)
              , m = v.addFlag
              , b = v.removeFlag
              , g = v.hasFlag
              , h = t.value
              , w = t.disabled
              , S = void 0 !== w && w
              , x = c(t, ["value", "disabled"])
              , O = (0,
            u.useRef)({
                value: h,
                disabled: S
            });
            y((function() {
                O.current.value = h
            }
            ), [h, O]),
            y((function() {
                O.current.disabled = S
            }
            ), [S, O]);
            var k = mt([ht.name, e.name].join("."))
              , E = k.registerOption
              , I = k.disabled
              , R = k.change
              , P = k.firstOption
              , A = k.containsCheckedOption
              , D = k.value;
            y((function() {
                return E({
                    id: r,
                    element: n,
                    propsRef: O
                })
            }
            ), [r, E, n, t]);
            var T = (0,
            u.useCallback)((function() {
                var e;
                R(h) && (m(gt.Active),
                null == (e = n.current) || e.focus())
            }
            ), [m, R, h])
              , j = (0,
            u.useCallback)((function() {
                return m(gt.Active)
            }
            ), [m])
              , L = (0,
            u.useCallback)((function() {
                return b(gt.Active)
            }
            ), [b])
              , F = (null == P ? void 0 : P.id) === r
              , M = I || S
              , N = D === h
              , _ = {
                ref: n,
                id: r,
                role: "radio",
                "aria-checked": N ? "true" : "false",
                "aria-labelledby": a,
                "aria-describedby": f,
                tabIndex: M ? -1 : N || !A && F ? 0 : -1,
                onClick: M ? void 0 : T,
                onFocus: M ? void 0 : j,
                onBlur: M ? void 0 : L
            }
              , V = (0,
            u.useMemo)((function() {
                return {
                    checked: N,
                    disabled: M,
                    active: g(gt.Active)
                }
            }
            ), [N, M, g]);
            return u.createElement(d, {
                name: "RadioGroup.Description"
            }, u.createElement(i, {
                name: "RadioGroup.Label"
            }, p({
                props: s({}, x, _),
                slot: V,
                defaultTag: "div",
                name: "RadioGroup.Option"
            })))
        }
        ,
        ht.Label = dt,
        ht.Description = W;
        var yt = (0,
        u.createContext)(null);
        yt.displayName = "GroupContext";
        var wt = u.Fragment;
        var St;
        function xt(e) {
            var t = e.checked
              , n = e.onChange
              , r = c(e, ["checked", "onChange"])
              , o = "headlessui-switch-" + C()
              , i = (0,
            u.useContext)(yt)
              , l = (0,
            u.useCallback)((function() {
                return n(!t)
            }
            ), [n, t])
              , f = (0,
            u.useCallback)((function(e) {
                if (h(e.currentTarget))
                    return e.preventDefault();
                e.preventDefault(),
                l()
            }
            ), [l])
              , d = (0,
            u.useCallback)((function(e) {
                e.key !== a.Tab && e.preventDefault(),
                e.key === a.Space && l()
            }
            ), [l])
              , v = (0,
            u.useCallback)((function(e) {
                return e.preventDefault()
            }
            ), [])
              , m = (0,
            u.useMemo)((function() {
                return {
                    checked: t
                }
            }
            ), [t])
              , b = {
                id: o,
                ref: null === i ? void 0 : i.setSwitch,
                role: "switch",
                tabIndex: 0,
                "aria-checked": t,
                "aria-labelledby": null == i ? void 0 : i.labelledby,
                "aria-describedby": null == i ? void 0 : i.describedby,
                onClick: f,
                onKeyUp: d,
                onKeyPress: v
            };
            return "button" === r.as && Object.assign(b, {
                type: "button"
            }),
            p({
                props: s({}, r, b),
                slot: m,
                defaultTag: "button",
                name: "Switch"
            })
        }
        function Ot() {
            var e = (0,
            u.useRef)(!0);
            return (0,
            u.useEffect)((function() {
                e.current = !1
            }
            ), []),
            e.current
        }
        function Ct(e) {
            for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            e && r.length > 0 && (t = e.classList).add.apply(t, r)
        }
        function kt(e) {
            for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            e && r.length > 0 && (t = e.classList).remove.apply(t, r)
        }
        function Et(e, t, n, r, o) {
            var a = he()
              , u = void 0 !== o ? function(e) {
                var t = {
                    called: !1
                };
                return function() {
                    if (!t.called)
                        return t.called = !0,
                        e.apply(void 0, arguments)
                }
            }(o) : function() {}
            ;
            return Ct.apply(void 0, [e].concat(t, n)),
            a.nextFrame((function() {
                kt.apply(void 0, [e].concat(n)),
                Ct.apply(void 0, [e].concat(r)),
                a.add(function(e, t) {
                    var n = he();
                    if (!e)
                        return n.dispose;
                    var r = getComputedStyle(e)
                      , o = [r.transitionDuration, r.transitionDelay].map((function(e) {
                        var t = e.split(",").filter(Boolean).map((function(e) {
                            return e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)
                        }
                        )).sort((function(e, t) {
                            return t - e
                        }
                        ))[0];
                        return void 0 === t ? 0 : t
                    }
                    ))
                      , a = o[0]
                      , u = o[1];
                    return 0 !== a ? n.setTimeout((function() {
                        t(St.Finished)
                    }
                    ), a + u) : t(St.Finished),
                    n.add((function() {
                        return t(St.Cancelled)
                    }
                    )),
                    n.dispose
                }(e, (function(n) {
                    return kt.apply(void 0, [e].concat(r, t)),
                    u(n)
                }
                )))
            }
            )),
            a.add((function() {
                return kt.apply(void 0, [e].concat(t, n, r))
            }
            )),
            a.add((function() {
                return u(St.Cancelled)
            }
            )),
            a.dispose
        }
        function It(e) {
            return void 0 === e && (e = ""),
            (0,
            u.useMemo)((function() {
                return e.split(" ").filter((function(e) {
                    return e.trim().length > 1
                }
                ))
            }
            ), [e])
        }
        xt.Group = function(e) {
            var t = (0,
            u.useState)(null)
              , n = t[0]
              , r = t[1]
              , o = ct()
              , a = o[0]
              , i = o[1]
              , s = z()
              , c = s[0]
              , l = s[1]
              , f = (0,
            u.useMemo)((function() {
                return {
                    switch: n,
                    setSwitch: r,
                    labelledby: a,
                    describedby: c
                }
            }
            ), [n, r, a, c]);
            return u.createElement(l, {
                name: "Switch.Description"
            }, u.createElement(i, {
                name: "Switch.Label",
                props: {
                    onClick: function() {
                        n && (n.click(),
                        n.focus({
                            preventScroll: !0
                        }))
                    }
                }
            }, u.createElement(yt.Provider, {
                value: f
            }, p({
                props: e,
                defaultTag: wt,
                name: "Switch.Group"
            }))))
        }
        ,
        xt.Label = dt,
        xt.Description = W,
        function(e) {
            e.Finished = "finished",
            e.Cancelled = "cancelled"
        }(St || (St = {}));
        var Rt, Pt = (0,
        u.createContext)(null);
        Pt.displayName = "TransitionContext",
        function(e) {
            e.Visible = "visible",
            e.Hidden = "hidden"
        }(Rt || (Rt = {}));
        var At = (0,
        u.createContext)(null);
        function Dt(e) {
            return "children"in e ? Dt(e.children) : e.current.filter((function(e) {
                return e.state === Rt.Visible
            }
            )).length > 0
        }
        function Tt(e) {
            var t = (0,
            u.useRef)(e)
              , n = (0,
            u.useRef)([])
              , r = F();
            (0,
            u.useEffect)((function() {
                t.current = e
            }
            ), [e]);
            var a = (0,
            u.useCallback)((function(e, a) {
                var u;
                void 0 === a && (a = o.Hidden);
                var i = n.current.findIndex((function(t) {
                    return t.id === e
                }
                ));
                -1 !== i && (d(a, ((u = {})[o.Unmount] = function() {
                    n.current.splice(i, 1)
                }
                ,
                u[o.Hidden] = function() {
                    n.current[i].state = Rt.Hidden
                }
                ,
                u)),
                !Dt(n) && r.current && (null == t.current || t.current()))
            }
            ), [t, r, n])
              , i = (0,
            u.useCallback)((function(e) {
                var t = n.current.find((function(t) {
                    return t.id === e
                }
                ));
                return t ? t.state !== Rt.Visible && (t.state = Rt.Visible) : n.current.push({
                    id: e,
                    state: Rt.Visible
                }),
                function() {
                    return a(e, o.Unmount)
                }
            }
            ), [n, a]);
            return (0,
            u.useMemo)((function() {
                return {
                    children: n,
                    register: i,
                    unregister: a
                }
            }
            ), [i, a, n])
        }
        function jt() {}
        At.displayName = "NestingContext";
        var Lt = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function Ft(e) {
            for (var t, n = {}, r = f(Lt); !(t = r()).done; ) {
                var o, a = t.value;
                n[a] = null != (o = e[a]) ? o : jt
            }
            return n
        }
        var Mt = r.RenderStrategy;
        function Nt(e) {
            var t, n = e.beforeEnter, r = e.afterEnter, a = e.beforeLeave, i = e.afterLeave, l = e.enter, f = e.enterFrom, v = e.enterTo, m = e.leave, b = e.leaveFrom, g = e.leaveTo, h = c(e, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "leave", "leaveFrom", "leaveTo"]), w = (0,
            u.useRef)(null), x = (0,
            u.useState)(Rt.Visible), O = x[0], k = x[1], E = h.unmount ? o.Unmount : o.Hidden, I = function() {
                var e = (0,
                u.useContext)(Pt);
                if (null === e)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), R = I.show, P = I.appear, A = function() {
                var e = (0,
                u.useContext)(At);
                if (null === e)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), D = A.register, T = A.unregister, j = Ot(), L = C(), F = (0,
            u.useRef)(!1), M = Tt((function() {
                F.current || (k(Rt.Hidden),
                T(L),
                H.current.afterLeave())
            }
            ));
            y((function() {
                if (L)
                    return D(L)
            }
            ), [D, L]),
            y((function() {
                var e;
                E === o.Hidden && L && (R && O !== Rt.Visible ? k(Rt.Visible) : d(O, ((e = {})[Rt.Hidden] = function() {
                    return T(L)
                }
                ,
                e[Rt.Visible] = function() {
                    return D(L)
                }
                ,
                e)))
            }
            ), [O, L, D, T, R, E]);
            var N = It(l)
              , _ = It(f)
              , V = It(v)
              , U = It(m)
              , B = It(b)
              , G = It(g)
              , H = function(e) {
                var t = (0,
                u.useRef)(Ft(e));
                return (0,
                u.useEffect)((function() {
                    t.current = Ft(e)
                }
                ), [e]),
                t
            }({
                beforeEnter: n,
                afterEnter: r,
                beforeLeave: a,
                afterLeave: i
            })
              , z = S();
            (0,
            u.useEffect)((function() {
                if (z && O === Rt.Visible && null === w.current)
                    throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            ), [w, O, z]);
            var W = j && !P;
            y((function() {
                var e = w.current;
                if (e && !W)
                    return F.current = !0,
                    R && H.current.beforeEnter(),
                    R || H.current.beforeLeave(),
                    R ? Et(e, N, _, V, (function(e) {
                        F.current = !1,
                        e === St.Finished && H.current.afterEnter()
                    }
                    )) : Et(e, U, B, G, (function(e) {
                        F.current = !1,
                        e === St.Finished && (Dt(M) || (k(Rt.Hidden),
                        T(L),
                        H.current.afterLeave()))
                    }
                    ))
            }
            ), [H, L, F, T, M, w, W, R, N, _, V, U, B, G]);
            var K = {
                ref: w
            }
              , Q = h;
            return u.createElement(At.Provider, {
                value: M
            }, u.createElement(J, {
                value: d(O, (t = {},
                t[Rt.Visible] = q.Open,
                t[Rt.Hidden] = q.Closed,
                t))
            }, p({
                props: s({}, Q, K),
                defaultTag: "div",
                features: Mt,
                visible: O === Rt.Visible,
                name: "Transition.Child"
            })))
        }
        function _t(e) {
            var t, n = e.show, r = e.appear, o = void 0 !== r && r, a = e.unmount, i = c(e, ["show", "appear", "unmount"]), l = Q();
            void 0 === n && null !== l && (n = d(l, ((t = {})[q.Open] = !0,
            t[q.Closed] = !1,
            t)));
            if (![!0, !1].includes(n))
                throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            var f = (0,
            u.useState)(n ? Rt.Visible : Rt.Hidden)
              , v = f[0]
              , m = f[1]
              , b = Tt((function() {
                m(Rt.Hidden)
            }
            ))
              , g = Ot()
              , h = (0,
            u.useMemo)((function() {
                return {
                    show: n,
                    appear: o || !g
                }
            }
            ), [n, o, g]);
            (0,
            u.useEffect)((function() {
                n ? m(Rt.Visible) : Dt(b) || m(Rt.Hidden)
            }
            ), [n, b]);
            var y = {
                unmount: a
            };
            return u.createElement(At.Provider, {
                value: b
            }, u.createElement(Pt.Provider, {
                value: h
            }, p({
                props: s({}, y, {
                    as: u.Fragment,
                    children: u.createElement(Nt, Object.assign({}, y, i))
                }),
                defaultTag: u.Fragment,
                features: Mt,
                visible: v === Rt.Visible,
                name: "Transition"
            })))
        }
        _t.Child = Nt,
        _t.Root = _t
    },
    6049: function(e, t, n) {
        "use strict";
        n.d(t, {
            XgF: function() {
                return o
            },
            iGq: function() {
                return a
            },
            UNN: function() {
                return u
            },
            Izr: function() {
                return i
            },
            OdW: function() {
                return s
            },
            NWY: function() {
                return c
            }
        });
        var r = n(7294);
        var o = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            }))
        };
        var a = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            }))
        };
        var u = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            }))
        };
        var i = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            }))
        };
        var s = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        };
        var c = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }))
        }
    },
    3802: function(e, t, n) {
        "use strict";
        n.d(t, {
            g8U: function() {
                return o
            }
        });
        var r = n(7294);
        var o = function(e) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor"
            }, e), r.createElement("path", {
                fillRule: "evenodd",
                d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                clipRule: "evenodd"
            }))
        }
    },
    9917: function(e, t, n) {
        "use strict";
        var r = n(3848)
          , o = n(3115);
        t.default = function(e) {
            var t = e.src
              , n = e.sizes
              , o = e.unoptimized
              , s = void 0 !== o && o
              , l = e.priority
              , f = void 0 !== l && l
              , v = e.loading
              , b = e.lazyBoundary
              , g = void 0 === b ? "200px" : b
              , h = e.className
              , y = e.quality
              , w = e.width
              , S = e.height
              , k = e.objectFit
              , E = e.objectPosition
              , I = e.onLoadingComplete
              , R = e.loader
              , P = void 0 === R ? C : R
              , A = e.placeholder
              , D = void 0 === A ? "empty" : A
              , T = e.blurDataURL
              , j = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"])
              , L = n ? "responsive" : "intrinsic";
            "layout"in j && (j.layout && (L = j.layout),
            delete j.layout);
            var F = "";
            if (function(e) {
                return "object" === typeof e && (m(e) || function(e) {
                    return void 0 !== e.src
                }(e))
            }(t)) {
                var M = m(t) ? t.default : t;
                if (!M.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));
                if (T = T || M.blurDataURL,
                F = M.src,
                (!L || "fill" !== L) && (S = S || M.height,
                w = w || M.width,
                !M.height || !M.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))
            }
            t = "string" === typeof t ? t : F;
            var N = O(w)
              , _ = O(S)
              , V = O(y)
              , U = !f && ("lazy" === v || "undefined" === typeof v);
            t.startsWith("data:") && (s = !0,
            U = !1);
            p.has(t) && (U = !1);
            0;
            var B, G, H, z = c.useIntersection({
                rootMargin: g,
                disabled: !U
            }), W = r(z, 2), q = W[0], K = W[1], Q = !U || K, J = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: k,
                objectPosition: E
            }, Y = "blur" === D ? {
                filter: "blur(20px)",
                backgroundSize: k || "cover",
                backgroundImage: 'url("'.concat(T, '")'),
                backgroundPosition: E || "0% 0%"
            } : {};
            if ("fill" === L)
                B = {
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    margin: 0
                };
            else if ("undefined" !== typeof N && "undefined" !== typeof _) {
                var $ = _ / N
                  , X = isNaN($) ? "100%" : "".concat(100 * $, "%");
                "responsive" === L ? (B = {
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0
                },
                G = {
                    display: "block",
                    boxSizing: "border-box",
                    paddingTop: X
                }) : "intrinsic" === L ? (B = {
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0
                },
                G = {
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%"
                },
                H = '<svg width="'.concat(N, '" height="').concat(_, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === L && (B = {
                    overflow: "hidden",
                    boxSizing: "border-box",
                    display: "inline-block",
                    position: "relative",
                    width: N,
                    height: _
                })
            } else
                0;
            var Z = {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                srcSet: void 0,
                sizes: void 0
            };
            Q && (Z = x({
                src: t,
                unoptimized: s,
                layout: L,
                width: N,
                quality: V,
                sizes: n,
                loader: P
            }));
            var ee = t;
            return a.default.createElement("div", {
                style: B
            }, G ? a.default.createElement("div", {
                style: G
            }, H ? a.default.createElement("img", {
                style: {
                    maxWidth: "100%",
                    display: "block",
                    margin: 0,
                    border: "none",
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: "data:image/svg+xml;base64,".concat(i.toBase64(H))
            }) : null) : null, !Q && a.default.createElement("noscript", null, a.default.createElement("img", Object.assign({}, j, x({
                src: t,
                unoptimized: s,
                layout: L,
                width: N,
                quality: V,
                sizes: n,
                loader: P
            }), {
                decoding: "async",
                "data-nimg": !0,
                style: J,
                className: h
            }))), a.default.createElement("img", Object.assign({}, j, Z, {
                decoding: "async",
                "data-nimg": !0,
                className: h,
                ref: function(e) {
                    q(e),
                    function(e, t, n, r) {
                        if (!e)
                            return;
                        var o = function() {
                            e.src.startsWith("data:") || ("decode"in e ? e.decode() : Promise.resolve()).catch((function() {}
                            )).then((function() {
                                if ("blur" === n && (e.style.filter = "none",
                                e.style.backgroundSize = "none",
                                e.style.backgroundImage = "none"),
                                p.add(t),
                                r) {
                                    var o = e.naturalWidth
                                      , a = e.naturalHeight;
                                    r({
                                        naturalWidth: o,
                                        naturalHeight: a
                                    })
                                }
                            }
                            ))
                        };
                        e.complete ? o() : e.onload = o
                    }(e, ee, D, I)
                },
                style: d({}, J, Y)
            })), f ? a.default.createElement(u.default, null, a.default.createElement("link", {
                key: "__nimg-" + Z.src + Z.srcSet + Z.sizes,
                rel: "preload",
                as: "image",
                href: Z.srcSet ? void 0 : Z.src,
                imagesrcset: Z.srcSet,
                imagesizes: Z.sizes
            })) : null)
        }
        ;
        var a = f(n(7294))
          , u = f(n(639))
          , i = n(8997)
          , s = n(5809)
          , c = n(7426);
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    l(e, t, n[t])
                }
                ))
            }
            return e
        }
        var p = new Set;
        var v = new Map([["default", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality;
            0;
            return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
        }
        ], ["imgix", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality
              , a = new URL("".concat(t).concat(k(n)))
              , u = a.searchParams;
            u.set("auto", u.get("auto") || "format"),
            u.set("fit", u.get("fit") || "max"),
            u.set("w", u.get("w") || r.toString()),
            o && u.set("q", o.toString());
            return a.href
        }
        ], ["cloudinary", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width
              , o = e.quality
              , a = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
            return "".concat(t).concat(a).concat(k(n))
        }
        ], ["akamai", function(e) {
            var t = e.root
              , n = e.src
              , r = e.width;
            return "".concat(t).concat(k(n), "?imwidth=").concat(r)
        }
        ], ["custom", function(e) {
            var t = e.src;
            throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function m(e) {
            return void 0 !== e.default
        }
        var b = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default"
        } || s.imageConfigDefault
          , g = b.deviceSizes
          , h = b.imageSizes
          , y = b.loader
          , w = b.path
          , S = (b.domains,
        [].concat(o(g), o(h)));
        function x(e) {
            var t = e.src
              , n = e.unoptimized
              , r = e.layout
              , a = e.width
              , u = e.quality
              , i = e.sizes
              , s = e.loader;
            if (n)
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
            var c = function(e, t, n) {
                if (n && ("fill" === t || "responsive" === t)) {
                    for (var r, a = /(^|\s)(1?\d?\d)vw/g, u = []; r = a.exec(n); r)
                        u.push(parseInt(r[2]));
                    if (u.length) {
                        var i = .01 * Math.min.apply(Math, u);
                        return {
                            widths: S.filter((function(e) {
                                return e >= g[0] * i
                            }
                            )),
                            kind: "w"
                        }
                    }
                    return {
                        widths: S,
                        kind: "w"
                    }
                }
                return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                    widths: g,
                    kind: "w"
                } : {
                    widths: o(new Set([e, 2 * e].map((function(e) {
                        return S.find((function(t) {
                            return t >= e
                        }
                        )) || S[S.length - 1]
                    }
                    )))),
                    kind: "x"
                }
            }(a, r, i)
              , l = c.widths
              , f = c.kind
              , d = l.length - 1;
            return {
                sizes: i || "w" !== f ? i : "100vw",
                srcSet: l.map((function(e, n) {
                    return "".concat(s({
                        src: t,
                        quality: u,
                        width: e
                    }), " ").concat("w" === f ? e : n + 1).concat(f)
                }
                )).join(", "),
                src: s({
                    src: t,
                    quality: u,
                    width: l[d]
                })
            }
        }
        function O(e) {
            return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
        function C(e) {
            var t = v.get(y);
            if (t)
                return t(d({
                    root: w
                }, e));
            throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "), ". Received: ").concat(y))
        }
        function k(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        g.sort((function(e, t) {
            return e - t
        }
        )),
        S.sort((function(e, t) {
            return e - t
        }
        ))
    },
    2167: function(e, t, n) {
        "use strict";
        var r = n(3848);
        t.default = void 0;
        var o, a = (o = n(7294)) && o.__esModule ? o : {
            default: o
        }, u = n(1063), i = n(4651), s = n(7426);
        var c = {};
        function l(e, t, n, r) {
            if (e && u.isLocalURL(t)) {
                e.prefetch(t, n, r).catch((function(e) {
                    0
                }
                ));
                var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                c[t + "%" + n + (o ? "%" + o : "")] = !0
            }
        }
        var f = function(e) {
            var t, n = !1 !== e.prefetch, o = i.useRouter(), f = a.default.useMemo((function() {
                var t = u.resolveHref(o, e.href, !0)
                  , n = r(t, 2)
                  , a = n[0]
                  , i = n[1];
                return {
                    href: a,
                    as: e.as ? u.resolveHref(o, e.as) : i || a
                }
            }
            ), [o, e.href, e.as]), d = f.href, p = f.as, v = e.children, m = e.replace, b = e.shallow, g = e.scroll, h = e.locale;
            "string" === typeof v && (v = a.default.createElement("a", null, v));
            var y = (t = a.default.Children.only(v)) && "object" === typeof t && t.ref
              , w = s.useIntersection({
                rootMargin: "200px"
            })
              , S = r(w, 2)
              , x = S[0]
              , O = S[1]
              , C = a.default.useCallback((function(e) {
                x(e),
                y && ("function" === typeof y ? y(e) : "object" === typeof y && (y.current = e))
            }
            ), [y, x]);
            a.default.useEffect((function() {
                var e = O && n && u.isLocalURL(d)
                  , t = "undefined" !== typeof h ? h : o && o.locale
                  , r = c[d + "%" + p + (t ? "%" + t : "")];
                e && !r && l(o, d, p, {
                    locale: t
                })
            }
            ), [p, d, O, h, n, o]);
            var k = {
                ref: C,
                onClick: function(e) {
                    t.props && "function" === typeof t.props.onClick && t.props.onClick(e),
                    e.defaultPrevented || function(e, t, n, r, o, a, i, s) {
                        ("A" !== e.currentTarget.nodeName || !function(e) {
                            var t = e.currentTarget.target;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) && u.isLocalURL(n)) && (e.preventDefault(),
                        null == i && r.indexOf("#") >= 0 && (i = !1),
                        t[o ? "replace" : "push"](n, r, {
                            shallow: a,
                            locale: s,
                            scroll: i
                        }))
                    }(e, o, d, p, m, b, g, h)
                },
                onMouseEnter: function(e) {
                    u.isLocalURL(d) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
                    l(o, d, p, {
                        priority: !0
                    }))
                }
            };
            if (e.passHref || "a" === t.type && !("href"in t.props)) {
                var E = "undefined" !== typeof h ? h : o && o.locale
                  , I = o && o.isLocaleDomain && u.getDomainLocale(p, E, o && o.locales, o && o.domainLocales);
                k.href = I || u.addBasePath(u.addLocale(p, E, o && o.defaultLocale))
            }
            return a.default.cloneElement(t, k)
        };
        t.default = f
    },
    7426: function(e, t, n) {
        "use strict";
        var r = n(3848);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootMargin
              , n = e.disabled || !u
              , s = o.useRef()
              , c = o.useState(!1)
              , l = r(c, 2)
              , f = l[0]
              , d = l[1]
              , p = o.useCallback((function(e) {
                s.current && (s.current(),
                s.current = void 0),
                n || f || e && e.tagName && (s.current = function(e, t, n) {
                    var r = function(e) {
                        var t = e.rootMargin || ""
                          , n = i.get(t);
                        if (n)
                            return n;
                        var r = new Map
                          , o = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = r.get(e.target)
                                  , n = e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n)
                            }
                            ))
                        }
                        ),e);
                        return i.set(t, n = {
                            id: t,
                            observer: o,
                            elements: r
                        }),
                        n
                    }(n)
                      , o = r.id
                      , a = r.observer
                      , u = r.elements;
                    return u.set(e, t),
                    a.observe(e),
                    function() {
                        u.delete(e),
                        a.unobserve(e),
                        0 === u.size && (a.disconnect(),
                        i.delete(o))
                    }
                }(e, (function(e) {
                    return e && d(e)
                }
                ), {
                    rootMargin: t
                }))
            }
            ), [n, t, f]);
            return o.useEffect((function() {
                if (!u && !f) {
                    var e = a.requestIdleCallback((function() {
                        return d(!0)
                    }
                    ));
                    return function() {
                        return a.cancelIdleCallback(e)
                    }
                }
            }
            ), [f]),
            [p, f]
        }
        ;
        var o = n(7294)
          , a = n(3447)
          , u = "undefined" !== typeof IntersectionObserver;
        var i = new Map
    },
    8997: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.toBase64 = function(e) {
            return window.btoa(e)
        }
    },
    5809: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.imageConfigDefault = t.VALID_LOADERS = void 0;
        t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
        t.imageConfigDefault = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60
        }
    },
    5675: function(e, t, n) {
        e.exports = n(9917)
    },
    1664: function(e, t, n) {
        e.exports = n(2167)
    },
    2283: function(e, t, n) {
        "use strict";
        n.d(t, {
            cI: function() {
                return he
            },
            qo: function() {
                return ye
            }
        });
        var r = n(7294)
          , o = e=>"checkbox" === e.type
          , a = e=>null == e;
        const u = e=>"object" === typeof e;
        var i = e=>!a(e) && !Array.isArray(e) && u(e) && !(e instanceof Date)
          , s = e=>e.substring(0, e.search(/.\d/)) || e
          , c = (e,t)=>[...e].some((e=>s(t) === e))
          , l = e=>e.filter(Boolean)
          , f = e=>void 0 === e
          , d = (e,t,n)=>{
            if (i(e) && t) {
                const r = l(t.split(/[,[\].]+?/)).reduce(((e,t)=>a(e) ? e : e[t]), e);
                return f(r) || r === e ? f(e[t]) ? n : e[t] : r
            }
        }
        ;
        const p = "blur"
          , v = "onBlur"
          , m = "onChange"
          , b = "onSubmit"
          , g = "onTouched"
          , h = "all"
          , y = "max"
          , w = "min"
          , S = "maxLength"
          , x = "minLength"
          , O = "pattern"
          , C = "required"
          , k = "validate";
        var E = (e,t)=>{
            const n = Object.assign({}, e);
            return delete n[t],
            n
        }
        ;
        const I = r.createContext(null);
        I.displayName = "RHFContext";
        const R = ()=>r.useContext(I);
        var P = (e,t,n,r,o=!0)=>e ? new Proxy(t,{
            get: (e,t)=>{
                if (t in e)
                    return n.current[t] !== h && (n.current[t] = !o || h),
                    r && (r.current[t] = !0),
                    e[t]
            }
        }) : t
          , A = e=>i(e) && !Object.keys(e).length
          , D = (e,t,n)=>{
            const r = E(e, "name");
            return A(r) || Object.keys(r).length >= Object.keys(t).length || Object.keys(r).find((e=>t[e] === (!n || h)))
        }
          , T = e=>Array.isArray(e) ? e : [e]
          , j = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;
        const L = j ? "Proxy"in window : "undefined" !== typeof Proxy;
        var F = (e,t,n,r,o)=>t ? Object.assign(Object.assign({}, n[e]), {
            types: Object.assign(Object.assign({}, n[e] && n[e].types ? n[e].types : {}), {
                [r]: o || !0
            })
        }) : {}
          , M = e=>/^\w*$/.test(e)
          , N = e=>l(e.replace(/["|']|\]/g, "").split(/\.|\[/));
        function _(e, t, n) {
            let r = -1;
            const o = M(t) ? [t] : N(t)
              , a = o.length
              , u = a - 1;
            for (; ++r < a; ) {
                const t = o[r];
                let a = n;
                if (r !== u) {
                    const n = e[t];
                    a = i(n) || Array.isArray(n) ? n : isNaN(+o[r + 1]) ? {} : []
                }
                e[t] = a,
                e = e[t]
            }
            return e
        }
        const V = (e,t,n)=>{
            for (const r of n || Object.keys(e)) {
                const n = d(e, r);
                if (n) {
                    const e = n._f
                      , r = E(n, "_f");
                    if (e && t(e.name)) {
                        if (e.ref.focus && f(e.ref.focus()))
                            break;
                        if (e.refs) {
                            e.refs[0].focus();
                            break
                        }
                    } else
                        i(r) && V(r, t)
                }
            }
        }
          , U = (e,t={})=>{
            for (const n in e.current) {
                const r = e.current[n];
                if (r && !a(t)) {
                    const e = r._f
                      , o = E(r, "_f");
                    _(t, n, e && e.ref ? e.ref.disabled || e.refs && e.refs.every((e=>e.disabled)) ? void 0 : e.value : Array.isArray(r) ? [] : {}),
                    o && U({
                        current: o
                    }, t[n])
                }
            }
            return t
        }
        ;
        var B = e=>a(e) || !u(e);
        function G(e, t, n) {
            if (B(e) || B(t) || e instanceof Date || t instanceof Date)
                return e === t;
            if (!r.isValidElement(e)) {
                const r = Object.keys(e)
                  , o = Object.keys(t);
                if (r.length !== o.length)
                    return !1;
                for (const a of r) {
                    const r = e[a];
                    if (!n || "ref" !== a) {
                        const e = t[a];
                        if ((i(r) || Array.isArray(r)) && (i(e) || Array.isArray(e)) ? !G(r, e, n) : r !== e)
                            return !1
                    }
                }
            }
            return !0
        }
        function H(e, t) {
            if (B(e) || B(t))
                return t;
            for (const r in t) {
                const o = e[r]
                  , a = t[r];
                try {
                    e[r] = i(o) && i(a) || Array.isArray(o) && Array.isArray(a) ? H(o, a) : a
                } catch (n) {}
            }
            return e
        }
        function z(e, t, n, r, o) {
            let a = -1;
            for (; ++a < e.length; ) {
                for (const r in e[a])
                    Array.isArray(e[a][r]) ? (!n[a] && (n[a] = {}),
                    n[a][r] = [],
                    z(e[a][r], d(t[a] || {}, r, []), n[a][r], n[a], r)) : G(d(t[a] || {}, r), e[a][r]) ? _(n[a] || {}, r) : n[a] = Object.assign(Object.assign({}, n[a]), {
                        [r]: !0
                    });
                r && !n.length && delete r[o]
            }
            return n
        }
        var W = (e,t,n)=>H(z(e, t, n.slice(0, e.length)), z(t, e, n.slice(0, e.length)));
        var q = e=>"string" === typeof e;
        var K = e=>"boolean" === typeof e;
        function Q(e, t) {
            const n = M(t) ? [t] : N(t)
              , r = 1 == n.length ? e : function(e, t) {
                const n = t.slice(0, -1).length;
                let r = 0;
                for (; r < n; )
                    e = f(e) ? r++ : e[t[r++]];
                return e
            }(e, n)
              , o = n[n.length - 1];
            let a;
            r && delete r[o];
            for (let u = 0; u < n.slice(0, -1).length; u++) {
                let t, r = -1;
                const o = n.slice(0, -(u + 1))
                  , s = o.length - 1;
                for (u > 0 && (a = e); ++r < o.length; ) {
                    const n = o[r];
                    t = t ? t[n] : e[n],
                    s === r && (i(t) && A(t) || Array.isArray(t) && !t.filter((e=>i(e) && !A(e) || K(e))).length) && (a ? delete a[n] : delete e[n]),
                    a = t
                }
            }
            return e
        }
        var J = e=>"file" === e.type
          , Y = e=>"select-multiple" === e.type
          , $ = e=>"radio" === e.type;
        const X = {
            value: !1,
            isValid: !1
        }
          , Z = {
            value: !0,
            isValid: !0
        };
        var ee = e=>{
            if (Array.isArray(e)) {
                if (e.length > 1) {
                    const t = e.filter((e=>e && e.checked && !e.disabled)).map((e=>e.value));
                    return {
                        value: t,
                        isValid: !!t.length
                    }
                }
                return e[0].checked && !e[0].disabled ? e[0].attributes && !f(e[0].attributes.value) ? f(e[0].value) || "" === e[0].value ? Z : {
                    value: e[0].value,
                    isValid: !0
                } : Z : X
            }
            return X
        }
          , te = (e,{valueAsNumber: t, valueAsDate: n, setValueAs: r})=>f(e) ? e : t ? "" === e ? NaN : +e : n ? new Date(e) : r ? r(e) : e;
        const ne = {
            isValid: !1,
            value: null
        };
        var re = e=>Array.isArray(e) ? e.reduce(((e,t)=>t && t.checked && !t.disabled ? {
            isValid: !0,
            value: t.value
        } : e), ne) : ne;
        function oe(e) {
            if (e && e._f) {
                const n = e._f.ref;
                if (n.disabled)
                    return;
                return J(n) ? n.files : $(n) ? re(e._f.refs).value : Y(n) ? (t = n.options,
                [...t].filter((({selected: e})=>e)).map((({value: e})=>e))) : o(n) ? ee(e._f.refs).value : te(f(n.value) ? e._f.ref.value : n.value, e._f)
            }
            var t
        }
        var ae = (e,t,n)=>{
            const r = {};
            for (const o of e) {
                const e = d(t, o);
                e && _(r, o, e._f)
            }
            return {
                criteriaMode: n,
                names: [...e],
                fields: r
            }
        }
          , ue = e=>"function" === typeof e
          , ie = e=>q(e) || r.isValidElement(e)
          , se = e=>e instanceof RegExp;
        function ce(e, t, n="validate") {
            if (ie(e) || Array.isArray(e) && e.every(ie) || K(e) && !e)
                return {
                    type: n,
                    message: ie(e) ? e : "",
                    ref: t
                }
        }
        var le = e=>i(e) && !se(e) ? e : {
            value: e,
            message: ""
        }
          , fe = async({_f: {ref: e, refs: t, required: n, maxLength: r, minLength: u, min: s, max: c, pattern: l, validate: f, name: d, value: p, valueAsNumber: v, mount: m}},b)=>{
            if (!m)
                return {};
            const g = {}
              , h = $(e)
              , E = o(e)
              , I = h || E
              , R = (v || J(e)) && !e.value || "" === p || Array.isArray(p) && !p.length
              , P = F.bind(null, d, b, g)
              , D = (t,n,r,o=S,a=x)=>{
                const u = t ? n : r;
                g[d] = Object.assign({
                    type: t ? o : a,
                    message: u,
                    ref: e
                }, P(t ? o : a, u))
            }
            ;
            if (n && (!h && !E && (R || a(p)) || K(p) && !p || E && !ee(t).isValid || h && !re(t).isValid)) {
                const {value: r, message: o} = ie(n) ? {
                    value: !!n,
                    message: n
                } : le(n);
                if (r && (g[d] = Object.assign({
                    type: C,
                    message: o,
                    ref: I ? (t || [])[0] || {} : e
                }, P(C, o)),
                !b))
                    return g
            }
            if ((!a(s) || !a(c)) && "" !== p) {
                let t, n;
                const r = le(c)
                  , o = le(s);
                if (isNaN(p)) {
                    const a = e.valueAsDate || new Date(p);
                    q(r.value) && (t = a > new Date(r.value)),
                    q(o.value) && (n = a < new Date(o.value))
                } else {
                    const u = e.valueAsNumber || parseFloat(p);
                    a(r.value) || (t = u > r.value),
                    a(o.value) || (n = u < o.value)
                }
                if ((t || n) && (D(!!t, r.message, o.message, y, w),
                !b))
                    return g
            }
            if (q(p) && !R && (r || u)) {
                const e = le(r)
                  , t = le(u)
                  , n = !a(e.value) && p.length > e.value
                  , o = !a(t.value) && p.length < t.value;
                if ((n || o) && (D(n, e.message, t.message),
                !b))
                    return g
            }
            if (q(p) && l && !R) {
                const {value: t, message: n} = le(l);
                if (se(t) && !p.match(t) && (g[d] = Object.assign({
                    type: O,
                    message: n,
                    ref: e
                }, P(O, n)),
                !b))
                    return g
            }
            if (f) {
                const n = I && t ? t[0] : e;
                if (ue(f)) {
                    const e = ce(await f(p), n);
                    if (e && (g[d] = Object.assign(Object.assign({}, e), P(k, e.message)),
                    !b))
                        return g
                } else if (i(f)) {
                    let e = {};
                    for (const [t,r] of Object.entries(f)) {
                        if (!A(e) && !b)
                            break;
                        const o = ce(await r(p), n, t);
                        o && (e = Object.assign(Object.assign({}, o), P(t, o.message)),
                        b && (g[d] = e))
                    }
                    if (!A(e) && (g[d] = Object.assign({
                        ref: n
                    }, e),
                    !b))
                        return g
                }
            }
            return g
        }
          , de = e=>({
            isOnSubmit: !e || e === b,
            isOnBlur: e === v,
            isOnChange: e === m,
            isOnAll: e === h,
            isOnTouch: e === g
        })
          , pe = e=>e instanceof HTMLElement;
        class ve {
            constructor() {
                this.tearDowns = []
            }
            add(e) {
                this.tearDowns.push(e)
            }
            unsubscribe() {
                for (const e of this.tearDowns)
                    e();
                this.tearDowns = []
            }
        }
        class me {
            constructor(e, t) {
                this.observer = e,
                this.closed = !1,
                t.add((()=>this.closed = !0))
            }
            next(e) {
                this.closed || this.observer.next(e)
            }
        }
        class be {
            constructor() {
                this.observers = []
            }
            next(e) {
                for (const t of this.observers)
                    t.next(e)
            }
            subscribe(e) {
                const t = new ve
                  , n = new me(e,t);
                return this.observers.push(n),
                t
            }
            unsubscribe() {
                this.observers = []
            }
        }
        const ge = "undefined" === typeof window;
        function he({mode: e=b, reValidateMode: t=m, resolver: n, context: u, defaultValues: v={}, shouldFocusError: g=!0, shouldUnregister: y, criteriaMode: w}={}) {
            const [S,x] = r.useState({
                isDirty: !1,
                isValidating: !1,
                dirtyFields: {},
                isSubmitted: !1,
                submitCount: 0,
                touchedFields: {},
                isSubmitting: !1,
                isSubmitSuccessful: !1,
                isValid: !1,
                errors: {}
            })
              , O = r.useRef({
                isDirty: !L,
                dirtyFields: !L,
                touchedFields: !L,
                isValidating: !L,
                isValid: !L,
                errors: !L
            })
              , C = r.useRef(n)
              , k = r.useRef(S)
              , I = r.useRef({})
              , R = r.useRef(v)
              , F = r.useRef({})
              , M = r.useRef(u)
              , N = r.useRef(!1)
              , H = r.useRef(!1)
              , z = r.useRef({
                watch: new be,
                control: new be,
                array: new be,
                state: new be
            })
              , K = r.useRef({
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1
            })
              , X = de(e)
              , Z = w === h;
            C.current = n,
            M.current = u;
            const ee = e=>K.current.watchAll || K.current.watch.has(e) || K.current.watch.has((e.match(/\w+/) || [])[0])
              , ne = r.useCallback((async(e,t,r,o,a,u)=>{
                const i = d(k.current.errors, t)
                  , s = !!O.current.isValid && (n ? a : await ve(I.current, !0));
                if (r ? _(k.current.errors, t, r) : Q(k.current.errors, t),
                (u || (r ? !G(i, r, !0) : i) || !A(o) || k.current.isValid !== s) && !e) {
                    const e = Object.assign(Object.assign({}, o), {
                        isValid: !!s,
                        errors: k.current.errors,
                        name: t
                    });
                    k.current = Object.assign(Object.assign({}, k.current), e),
                    z.current.state.next(u ? {
                        name: t
                    } : e)
                }
                z.current.state.next({
                    isValidating: !1
                })
            }
            ), [])
              , re = r.useCallback(((e,t,n={},r,u)=>{
                u && Ee(e);
                const i = d(I.current, e);
                if (i) {
                    const u = i._f;
                    if (u) {
                        const i = j && pe(u.ref) && a(t) ? "" : t;
                        if (u.value = te(t, u),
                        $(u.ref) ? (u.refs || []).forEach((e=>e.checked = e.value === i)) : J(u.ref) && !q(i) ? u.ref.files = i : Y(u.ref) ? [...u.ref.options].forEach((e=>e.selected = i.includes(e.value))) : o(u.ref) && u.refs ? u.refs.length > 1 ? u.refs.forEach((e=>e.checked = Array.isArray(i) ? !!i.find((t=>t === e.value)) : i === e.value)) : u.refs[0].checked = !!i : u.ref.value = i,
                        r) {
                            const n = U(I);
                            _(n, e, t),
                            z.current.control.next({
                                values: Object.assign(Object.assign({}, R.current), n),
                                name: e
                            })
                        }
                        (n.shouldDirty || n.shouldTouch) && se(e, i, n.shouldTouch),
                        n.shouldValidate && me(e)
                    } else
                        i._f = {
                            ref: {
                                name: e,
                                value: t
                            },
                            value: t
                        }
                }
            }
            ), [])
              , ie = r.useCallback(((e,t)=>{
                const n = U(I);
                return e && t && _(n, e, t),
                !G(n, R.current)
            }
            ), [])
              , se = r.useCallback(((e,t,n,r=!0)=>{
                const o = {
                    name: e
                };
                let a = !1;
                if (O.current.isDirty) {
                    const e = k.current.isDirty;
                    k.current.isDirty = ie(),
                    o.isDirty = k.current.isDirty,
                    a = e !== o.isDirty
                }
                if (O.current.dirtyFields) {
                    const n = d(k.current.dirtyFields, e);
                    !G(d(R.current, e), t) ? _(k.current.dirtyFields, e, !0) : Q(k.current.dirtyFields, e),
                    o.dirtyFields = k.current.dirtyFields,
                    a = a || n !== d(k.current.dirtyFields, e)
                }
                const u = d(k.current.touchedFields, e);
                return n && !u && (_(k.current.touchedFields, e, n),
                o.touchedFields = k.current.touchedFields,
                a = a || O.current.touchedFields && u !== n),
                a && r && z.current.state.next(o),
                a ? o : {}
            }
            ), [])
              , ce = r.useCallback((async(e,t)=>{
                const n = (await fe(d(I.current, e), Z))[e];
                return ne(t, e, n),
                f(n)
            }
            ), [Z])
              , le = r.useCallback((async e=>{
                const {errors: t} = await C.current(U(I), M.current, ae(K.current.mount, I.current, w));
                if (e)
                    for (const n of e) {
                        const e = d(t, n);
                        e ? _(k.current.errors, n, e) : Q(k.current.errors, n)
                    }
                else
                    k.current.errors = t;
                return t
            }
            ), [w])
              , ve = async(e,t,n={
                valid: !0
            })=>{
                for (const r in e) {
                    const o = e[r];
                    if (o) {
                        const e = o._f
                          , r = E(o, "_f");
                        if (e) {
                            const r = await fe(o, Z);
                            if (t) {
                                if (r[e.name]) {
                                    n.valid = !1;
                                    break
                                }
                            } else
                                r[e.name] ? _(k.current.errors, e.name, r[e.name]) : Q(k.current.errors, e.name)
                        }
                        r && await ve(r, t, n)
                    }
                }
                return n.valid
            }
              , me = r.useCallback((async(e,t={})=>{
                const r = T(e);
                let o;
                if (z.current.state.next({
                    isValidating: !0
                }),
                n) {
                    const t = await le(f(e) ? e : r);
                    o = e ? r.every((e=>!d(t, e))) : A(t)
                } else
                    o = e ? (await Promise.all(r.filter((e=>d(I.current, e))).map((async e=>await ce(e, !0))))).every(Boolean) : await ve(I.current);
                return z.current.state.next(Object.assign(Object.assign({}, q(e) ? {
                    name: e
                } : {}), {
                    errors: k.current.errors,
                    isValidating: !1
                })),
                t.shouldFocus && !o && V(I.current, (e=>d(k.current.errors, e)), r),
                O.current.isValid && ye(),
                o
            }
            ), [le, ce])
              , he = (e,t)=>{
                const n = d(I.current, e);
                if (n) {
                    const r = f(n._f.value)
                      , o = r ? d(R.current, e) : n._f.value;
                    f(o) ? r && (n._f.value = oe(n)) : t && t.defaultChecked ? n._f.value = oe(n) : c(K.current.array, e) ? n._f.value = o : re(e, o)
                }
                H.current && O.current.isValid && ye()
            }
              , ye = r.useCallback((async(e={})=>{
                const t = n ? A((await C.current(Object.assign(Object.assign({}, U(I)), e), M.current, ae(K.current.mount, I.current, w))).errors) : await ve(I.current, !0);
                t !== k.current.isValid && z.current.state.next({
                    isValid: t
                })
            }
            ), [w])
              , we = r.useCallback(((e,t,n)=>Object.entries(t).forEach((([t,r])=>{
                const o = `${e}.${t}`
                  , a = d(I.current, o);
                K.current.array.has(e) || !B(r) || a && !a._f ? we(o, r, n) : re(o, r, n, !0, !a)
            }
            ))), [me])
              , Se = r.useCallback((async({type: e, target: r, target: {value: a, type: u}})=>{
                let i, c, l = r.name;
                const v = d(I.current, l);
                if (v) {
                    let b = u ? oe(v) : void 0;
                    b = f(b) ? a : b;
                    const g = e === p
                      , {isOnBlur: h, isOnChange: y} = de(t)
                      , S = (m = v._f,
                    !(v._f.mount && m && (m.required || m.min || m.max || m.maxLength || m.minLength || m.pattern || m.validate)) && !n && !d(k.current.errors, l) || (({isOnBlur: e, isOnChange: t, isOnTouch: n, isTouched: r, isReValidateOnBlur: o, isReValidateOnChange: a, isBlurEvent: u, isSubmitted: i, isOnAll: s})=>!s && (!i && n ? !(r || u) : (i ? o : e) ? !u : !(i ? a : t) || u))(Object.assign({
                        isBlurEvent: g,
                        isTouched: !!d(k.current.touchedFields, l),
                        isSubmitted: k.current.isSubmitted,
                        isReValidateOnBlur: h,
                        isReValidateOnChange: y
                    }, X)))
                      , x = !g && ee(l);
                    f(b) || (v._f.value = b);
                    const O = se(l, v._f.value, g, !1)
                      , E = !A(O) || x;
                    if (S)
                        return !g && z.current.watch.next({
                            name: l,
                            type: e,
                            values: xe()
                        }),
                        E && z.current.state.next(x ? {
                            name: l
                        } : Object.assign(Object.assign({}, O), {
                            name: l
                        }));
                    if (z.current.state.next({
                        isValidating: !0
                    }),
                    n) {
                        const {errors: e} = await C.current(U(I), M.current, ae([l], I.current, w));
                        if (i = d(e, l),
                        o(r) && !i) {
                            const t = s(l)
                              , n = d(e, t, {});
                            n.type && n.message && (i = n),
                            (n || d(k.current.errors, t)) && (l = t)
                        }
                        c = A(e)
                    } else
                        i = (await fe(v, Z))[l];
                    !g && z.current.watch.next({
                        name: l,
                        type: e,
                        values: xe()
                    }),
                    ne(!1, l, i, O, c, x)
                }
                var m
            }
            ), [])
              , xe = e=>{
                const t = Object.assign(Object.assign({}, R.current), U(I));
                return f(e) ? t : q(e) ? d(t, e) : e.map((e=>d(t, e)))
            }
              , Oe = r.useCallback(((e,t,n,r)=>{
                const o = Array.isArray(e)
                  , a = r || H.current ? Object.assign(Object.assign({}, R.current), r || U(I)) : f(t) ? R.current : o ? t : {
                    [e]: t
                };
                if (f(e))
                    return n && (K.current.watchAll = !0),
                    a;
                const u = [];
                for (const i of T(e))
                    n && K.current.watch.add(i),
                    u.push(d(a, i));
                return o ? u : u[0]
            }
            ), [])
              , Ce = (e,t={})=>{
                for (const n of e ? T(e) : K.current.mount)
                    K.current.mount.delete(n),
                    K.current.array.delete(n),
                    d(I.current, n) && (!t.keepError && Q(k.current.errors, n),
                    !t.keepValue && Q(I.current, n),
                    !t.keepDirty && Q(k.current.dirtyFields, n),
                    !t.keepTouched && Q(k.current.touchedFields, n),
                    !y && !t.keepDefaultValue && Q(R.current, n),
                    z.current.watch.next({
                        name: n,
                        values: xe()
                    }));
                z.current.state.next(Object.assign(Object.assign({}, k.current), t.keepDirty ? {
                    isDirty: ie()
                } : {})),
                !t.keepIsValid && ye()
            }
              , ke = (e,t,n)=>{
                Ee(e, n);
                let r = d(I.current, e);
                const a = (e=>$(e) || o(e))(t);
                t === r._f.ref || a && l(r._f.refs || []).find((e=>e === t)) || (r = {
                    _f: a ? Object.assign(Object.assign({}, r._f), {
                        refs: [...l(r._f.refs || []).filter((e=>pe(e) && document.contains(e))), t],
                        ref: {
                            type: t.type,
                            name: e
                        }
                    }) : Object.assign(Object.assign({}, r._f), {
                        ref: t
                    })
                },
                _(I.current, e, r),
                he(e, t))
            }
              , Ee = r.useCallback(((e,t={})=>{
                const n = d(I.current, e);
                return _(I.current, e, {
                    _f: Object.assign(Object.assign(Object.assign({}, n && n._f ? n._f : {
                        ref: {
                            name: e
                        }
                    }), {
                        name: e,
                        mount: !0
                    }), t)
                }),
                K.current.mount.add(e),
                !n && he(e),
                ge ? {
                    name: e
                } : {
                    name: e,
                    onChange: Se,
                    onBlur: Se,
                    ref: n=>{
                        if (n)
                            ke(e, n, t);
                        else {
                            const n = d(I.current, e, {})
                              , r = y || t.shouldUnregister;
                            n._f && (n._f.mount = !1,
                            f(n._f.value) && (n._f.value = n._f.ref.value)),
                            r && (!c(K.current.array, e) || !N.current) && K.current.unMount.add(e)
                        }
                    }
                }
            }
            ), [])
              , Ie = r.useCallback(((e,t)=>async r=>{
                r && (r.preventDefault && r.preventDefault(),
                r.persist && r.persist());
                let o = !0
                  , a = U(I);
                z.current.state.next({
                    isSubmitting: !0
                });
                try {
                    if (n) {
                        const {errors: e, values: t} = await C.current(a, M.current, ae(K.current.mount, I.current, w));
                        k.current.errors = e,
                        a = t
                    } else
                        await ve(I.current);
                    A(k.current.errors) && Object.keys(k.current.errors).every((e=>d(a, e))) ? (z.current.state.next({
                        errors: {},
                        isSubmitting: !0
                    }),
                    await e(a, r)) : (t && await t(k.current.errors, r),
                    g && V(I.current, (e=>d(k.current.errors, e)), K.current.mount))
                } catch (u) {
                    throw o = !1,
                    u
                } finally {
                    k.current.isSubmitted = !0,
                    z.current.state.next({
                        isSubmitted: !0,
                        isSubmitting: !1,
                        isSubmitSuccessful: A(k.current.errors) && o,
                        submitCount: k.current.submitCount + 1,
                        errors: k.current.errors
                    })
                }
            }
            ), [g, Z, w])
              , Re = (e,t="")=>{
                const n = d(I.current, t);
                if ((!n || n && !n._f) && (!n && (B(e) || j && (e instanceof FileList || e instanceof Date)) && Ee(t, {
                    value: e
                }),
                Array.isArray(e) || i(e))) {
                    t && !d(I.current, t) && _(I.current, t, Array.isArray(e) ? [] : {});
                    for (const n in e)
                        Re(e[n], t + (t ? "." : "") + n)
                }
            }
            ;
            return r.useEffect((()=>{
                !y && Re(R.current);
                const e = z.current.state.subscribe({
                    next(e) {
                        D(e, O.current, !0) && (k.current = Object.assign(Object.assign({}, k.current), e),
                        x(k.current))
                    }
                })
                  , t = z.current.array.subscribe({
                    next(e) {
                        if (e.values && e.name && O.current.isValid) {
                            const t = U(I);
                            _(t, e.name, e.values),
                            ye(t)
                        }
                    }
                });
                return ()=>{
                    e.unsubscribe(),
                    t.unsubscribe()
                }
            }
            ), []),
            r.useEffect((()=>{
                const e = e=>!pe(e) || !document.contains(e);
                H.current || (H.current = !0,
                O.current.isValid && ye());
                for (const t of K.current.unMount) {
                    const n = d(I.current, t);
                    n && (n._f.refs ? n._f.refs.every(e) : e(n._f.ref)) && Ce(t)
                }
                K.current.unMount = new Set
            }
            )),
            {
                control: r.useMemo((()=>({
                    register: Ee,
                    inFieldArrayActionRef: N,
                    getIsDirty: ie,
                    subjectsRef: z,
                    watchInternal: Oe,
                    fieldsRef: I,
                    updateIsValid: ye,
                    namesRef: K,
                    readFormStateRef: O,
                    formStateRef: k,
                    defaultValuesRef: R,
                    fieldArrayDefaultValuesRef: F,
                    unregister: Ce,
                    shouldUnmount: y
                })), []),
                formState: P(L, S, O),
                trigger: me,
                register: Ee,
                handleSubmit: Ie,
                watch: r.useCallback(((e,t)=>ue(e) ? z.current.watch.subscribe({
                    next: n=>e(Oe(void 0, t), n)
                }) : Oe(e, t, !0)), []),
                setValue: r.useCallback(((e,t,n={})=>{
                    const r = d(I.current, e)
                      , o = K.current.array.has(e);
                    o && (z.current.array.next({
                        values: t,
                        name: e,
                        isReset: !0
                    }),
                    (O.current.isDirty || O.current.dirtyFields) && n.shouldDirty && (_(k.current.dirtyFields, e, W(t, d(R.current, e, []), d(k.current.dirtyFields, e, []))),
                    z.current.state.next({
                        name: e,
                        dirtyFields: k.current.dirtyFields,
                        isDirty: ie(e, t)
                    })),
                    !t.length && _(I.current, e, []) && _(F.current, e, [])),
                    (r && !r._f || o) && !a(t) ? we(e, t, o ? {} : n) : re(e, t, n, !0, !r),
                    ee(e) && z.current.state.next({}),
                    z.current.watch.next({
                        name: e,
                        values: xe()
                    })
                }
                ), [we]),
                getValues: r.useCallback(xe, []),
                reset: r.useCallback(((e,t={})=>{
                    const n = e || R.current;
                    if (j && !t.keepValues)
                        for (const o of K.current.mount) {
                            const e = d(I.current, o);
                            if (e && e._f) {
                                const t = Array.isArray(e._f.refs) ? e._f.refs[0] : e._f.ref;
                                try {
                                    pe(t) && t.closest("form").reset();
                                    break
                                } catch (r) {}
                            }
                        }
                    !t.keepDefaultValues && (R.current = Object.assign({}, n)),
                    t.keepValues || (I.current = {},
                    z.current.control.next({
                        values: Object.assign({}, n)
                    }),
                    z.current.watch.next({
                        values: Object.assign({}, n)
                    }),
                    z.current.array.next({
                        values: Object.assign({}, n),
                        isReset: !0
                    })),
                    !t.keepDefaultValues && !y && Re(Object.assign({}, n)),
                    K.current = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set,
                        watchAll: !1
                    },
                    z.current.state.next({
                        submitCount: t.keepSubmitCount ? k.current.submitCount : 0,
                        isDirty: t.keepDirty ? k.current.isDirty : !!t.keepDefaultValues && G(e, R.current),
                        isSubmitted: !!t.keepIsSubmitted && k.current.isSubmitted,
                        dirtyFields: t.keepDirty ? k.current.dirtyFields : {},
                        touchedFields: t.keepTouched ? k.current.touchedFields : {},
                        errors: t.keepErrors ? k.current.errors : {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1
                    }),
                    H.current = !!t.keepIsValid
                }
                ), []),
                clearErrors: r.useCallback((e=>{
                    e ? T(e).forEach((e=>Q(k.current.errors, e))) : k.current.errors = {},
                    z.current.state.next({
                        errors: k.current.errors
                    })
                }
                ), []),
                unregister: r.useCallback(Ce, []),
                setError: r.useCallback(((e,t,n)=>{
                    const r = ((d(I.current, e) || {
                        _f: {}
                    })._f || {}).ref;
                    _(k.current.errors, e, Object.assign(Object.assign({}, t), {
                        ref: r
                    })),
                    z.current.state.next({
                        name: e,
                        errors: k.current.errors,
                        isValid: !1
                    }),
                    n && n.shouldFocus && r && r.focus && r.focus()
                }
                ), []),
                setFocus: r.useCallback((e=>d(I.current, e)._f.ref.focus()), [])
            }
        }
        function ye(e) {
            const {control: t, name: n, defaultValue: o} = e || {}
              , a = R()
              , u = r.useRef(n);
            u.current = n;
            const {watchInternal: i, subjectsRef: s} = t || a.control
              , [c,l] = r.useState(f(o) ? i(n) : o);
            return r.useEffect((()=>{
                i(n);
                const e = s.current.watch.subscribe({
                    next: ({name: e, values: t})=>(!u.current || !e || T(u.current).some((t=>e && t && (t.startsWith(e) || e.startsWith(t))))) && l(i(u.current, o, !1, t))
                });
                return ()=>e.unsubscribe()
            }
            ), []),
            c
        }
    },
    266: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, a, u) {
            try {
                var i = e[a](u)
                  , s = i.value
            } catch (c) {
                return void n(c)
            }
            i.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, a) {
                    var u = e.apply(t, n);
                    function i(e) {
                        r(u, o, a, i, s, "next", e)
                    }
                    function s(e) {
                        r(u, o, a, i, s, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    }
}]);

