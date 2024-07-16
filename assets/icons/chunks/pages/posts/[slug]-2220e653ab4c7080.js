(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [922], {
        592: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/posts/[slug]", function() {
                return n(2007)
            }])
        },
        1100: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            let r = n(8754),
                i = n(1757)._(n(7294)),
                o = r._(n(3935)),
                l = r._(n(4764)),
                s = n(8484),
                a = n(2666),
                u = n(4845);
            n(9982);
            let c = n(4167),
                d = r._(n(4148)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(e, t, n, r, i, o) {
                let l = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                i = !1;
                            n.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function p(e) {
                let [t, n] = i.version.split(".", 2), r = parseInt(t, 10), o = parseInt(n, 10);
                return r > 18 || 18 === r && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let g = (0, i.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: o,
                    height: l,
                    width: s,
                    decoding: a,
                    className: u,
                    style: c,
                    fetchPriority: d,
                    placeholder: f,
                    loading: g,
                    unoptimized: h,
                    fill: v,
                    onLoadRef: w,
                    onLoadingCompleteRef: b,
                    setBlurComplete: _,
                    setShowAltText: x,
                    onLoad: y,
                    onError: j,
                    ...S
                } = e;
                return i.default.createElement("img", { ...S,
                    ...p(d),
                    loading: g,
                    width: s,
                    height: l,
                    decoding: a,
                    "data-nimg": v ? "fill" : "1",
                    className: u,
                    style: c,
                    sizes: o,
                    srcSet: r,
                    src: n,
                    ref: (0, i.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (j && (e.src = e.src), e.complete && m(e, f, w, b, _, h))
                    }, [n, f, w, b, _, j, h, t]),
                    onLoad: e => {
                        m(e.currentTarget, f, w, b, _, h)
                    },
                    onError: e => {
                        x(!0), "empty" !== f && _(!0), j && j(e)
                    }
                })
            });

            function h(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...p(n.fetchPriority)
                };
                return t && o.default.preload ? (o.default.preload(n.src, r), null) : i.default.createElement(l.default, null, i.default.createElement("link", {
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }))
            }
            let v = (0, i.forwardRef)((e, t) => {
                let n = (0, i.useContext)(c.RouterContext),
                    r = (0, i.useContext)(u.ImageConfigContext),
                    o = (0, i.useMemo)(() => {
                        let e = f || r || a.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: l,
                        onLoadingComplete: m
                    } = e,
                    p = (0, i.useRef)(l);
                (0, i.useEffect)(() => {
                    p.current = l
                }, [l]);
                let v = (0, i.useRef)(m);
                (0, i.useEffect)(() => {
                    v.current = m
                }, [m]);
                let [w, b] = (0, i.useState)(!1), [_, x] = (0, i.useState)(!1), {
                    props: y,
                    meta: j
                } = (0, s.getImgProps)(e, {
                    defaultLoader: d.default,
                    imgConf: o,
                    blurComplete: w,
                    showAltText: _
                });
                return i.default.createElement(i.default.Fragment, null, i.default.createElement(g, { ...y,
                    unoptimized: j.unoptimized,
                    placeholder: j.placeholder,
                    fill: j.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: v,
                    setBlurComplete: b,
                    setShowAltText: x,
                    ref: t
                }), j.priority ? i.default.createElement(h, {
                    isAppRouter: !n,
                    imgAttributes: y
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8484: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), n(9982);
            let r = n(2528),
                i = n(2666);

            function o(e) {
                return void 0 !== e.default
            }

            function l(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function s(e, t) {
                var n;
                let s, a, u, {
                        src: c,
                        sizes: d,
                        unoptimized: f = !1,
                        priority: m = !1,
                        loading: p,
                        className: g,
                        quality: h,
                        width: v,
                        height: w,
                        fill: b = !1,
                        style: _,
                        onLoad: x,
                        onLoadingComplete: y,
                        placeholder: j = "empty",
                        blurDataURL: S,
                        fetchPriority: C,
                        layout: E,
                        objectFit: M,
                        objectPosition: P,
                        lazyBoundary: z,
                        lazyRoot: I,
                        ...k
                    } = e,
                    {
                        imgConf: O,
                        showAltText: N,
                        blurComplete: R,
                        defaultLoader: D
                    } = t,
                    F = O || i.imageConfigDefault;
                if ("allSizes" in F) s = F;
                else {
                    let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
                        t = F.deviceSizes.sort((e, t) => e - t);
                    s = { ...F,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let X = k.loader || D;
                delete k.loader, delete k.srcSet;
                let A = "__next_img_default" in X;
                if (A) {
                    if ("custom" === s.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = X;
                    X = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (E) {
                    "fill" === E && (b = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[E];
                    e && (_ = { ..._,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[E];
                    t && !d && (d = t)
                }
                let B = "",
                    T = l(v),
                    G = l(w);
                if ("object" == typeof(n = c) && (o(n) || void 0 !== n.src)) {
                    let e = o(c) ? c.default : c;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (a = e.blurWidth, u = e.blurHeight, S = S || e.blurDataURL, B = e.src, !b) {
                        if (T || G) {
                            if (T && !G) {
                                let t = T / e.width;
                                G = Math.round(e.height * t)
                            } else if (!T && G) {
                                let t = G / e.height;
                                T = Math.round(e.width * t)
                            }
                        } else T = e.width, G = e.height
                    }
                }
                let L = !m && ("lazy" === p || void 0 === p);
                (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, L = !1), s.unoptimized && (f = !0), A && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0), m && (C = "high");
                let W = l(h),
                    U = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: P
                    } : {}, N ? {} : {
                        color: "transparent"
                    }, _),
                    Z = R || "empty" === j ? null : "blur" === j ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: T,
                        heightInt: G,
                        blurWidth: a,
                        blurHeight: u,
                        blurDataURL: S || "",
                        objectFit: U.objectFit
                    }) + '")' : 'url("' + j + '")',
                    q = Z ? {
                        backgroundSize: U.objectFit || "cover",
                        backgroundPosition: U.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Z
                    } : {},
                    Y = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: o,
                            sizes: l,
                            loader: s
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: a,
                            kind: u
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: i
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(t, i, l), c = a.length - 1;
                        return {
                            sizes: l || "w" !== u ? l : "100vw",
                            srcSet: a.map((e, r) => s({
                                config: t,
                                src: n,
                                quality: o,
                                width: e
                            }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                            src: s({
                                config: t,
                                src: n,
                                quality: o,
                                width: a[c]
                            })
                        }
                    }({
                        config: s,
                        src: c,
                        unoptimized: f,
                        width: T,
                        quality: W,
                        sizes: d,
                        loader: X
                    });
                return {
                    props: { ...k,
                        loading: L ? "lazy" : p,
                        fetchPriority: C,
                        width: T,
                        height: G,
                        decoding: "async",
                        className: g,
                        style: { ...U,
                            ...q
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: Y.src
                    },
                    meta: {
                        unoptimized: f,
                        priority: m,
                        placeholder: j,
                        fill: b
                    }
                }
            }
        },
        2528: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: l
                } = e, s = r ? 40 * r : t, a = i ? 40 * i : n, u = s && a ? "viewBox='0 0 " + s + " " + a + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        256: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return a
                    },
                    default: function() {
                        return u
                    }
                });
            let r = n(8754),
                i = n(8484),
                o = n(9982),
                l = n(1100),
                s = r._(n(4148)),
                a = e => {
                    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, i.getImgProps)(e, {
                        defaultLoader: s.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                u = l.Image
        },
        4148: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: i
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        7983: function(e, t, n) {
            "use strict";
            var r = n(5893),
                i = n(7294),
                o = n(1664),
                l = n.n(o),
                s = n(7607),
                a = n.n(s);
            t.Z = () => (0, r.jsx)(i.Fragment, {
                children: (0, r.jsx)("footer", {
                    className: a().footer,
                    children: (0, r.jsx)("div", {
                        className: "containerMDX",
                        children: (0, r.jsx)("section", {
                            children: (0, r.jsxs)("p", {
                                children: ["\xa9 2021", (0, r.jsx)(l(), {
                                    href: "https://iuricode.com",
                                    target: "_blank",
                                    children: "iuricode.com"
                                })]
                            })
                        })
                    })
                })
            })
        },
        9603: function(e, t, n) {
            "use strict";
            var r = n(5893);
            n(7294);
            var i = n(1664),
                o = n.n(i),
                l = n(5524),
                s = n.n(l);
            t.Z = () => (0, r.jsx)("header", {
                className: s().containerMenu,
                children: (0, r.jsx)("div", {
                    className: "containerMDX",
                    children: (0, r.jsxs)("div", {
                        className: s().containerNav,
                        children: [(0, r.jsx)("div", {
                            className: s().profileMenu,
                            children: (0, r.jsx)("img", {
                                src: "/logo-iuricode.svg",
                                alt: ""
                            })
                        }), (0, r.jsx)("nav", {
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(o(), {
                                        href: "/",
                                        children: "Blog"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(o(), {
                                        href: "/sobre",
                                        children: "Sobre"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(o(), {
                                        href: "/setup",
                                        children: "Setup"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(o(), {
                                        href: "https://www.iuricode.com/efront/",
                                        target: "_blank",
                                        children: "eBook"
                                    })
                                })]
                            })
                        })]
                    })
                })
            })
        },
        8035: function(e, t, n) {
            "use strict";
            var r = n(5893);
            n(7294);
            var i = n(9008),
                o = n.n(i);
            t.Z = e => {
                let {
                    title: t
                } = e;
                return (0, r.jsx)(o(), {
                    children: (0, r.jsx)("title", {
                        children: t
                    })
                })
            }
        },
        2007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return w
                },
                default: function() {
                    return b
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                MDXContext: function() {
                    return u
                },
                MDXProvider: function() {
                    return m
                },
                useMDXComponents: function() {
                    return d
                },
                withMDXComponents: function() {
                    return c
                }
            });
            var i = n(5893),
                o = n(5675),
                l = n.n(o),
                s = n(7294),
                a = n(2746);
            let u = s.createContext({});

            function c(e) {
                return function(t) {
                    let n = d(t.components);
                    return s.createElement(e, { ...t,
                        allComponents: n
                    })
                }
            }

            function d(e) {
                let t = s.useContext(u);
                return s.useMemo(() => "function" == typeof e ? e(t) : { ...t,
                    ...e
                }, [t, e])
            }
            let f = {};

            function m({
                components: e,
                children: t,
                disableParentContext: n
            }) {
                let r;
                return r = n ? "function" == typeof e ? e({}) : e || f : d(e), s.createElement(u.Provider, {
                    value: r
                }, t)
            }

            function p({
                compiledSource: e,
                frontmatter: t,
                scope: n,
                components: i = {},
                lazy: o
            }) {
                let [l, u] = (0, s.useState)(!o || "undefined" == typeof window);
                (0, s.useEffect)(() => {
                    if (o) {
                        let e = window.requestIdleCallback(() => {
                            u(!0)
                        });
                        return () => window.cancelIdleCallback(e)
                    }
                }, []);
                let c = (0, s.useMemo)(() => {
                    let i = Object.assign({
                            opts: { ...r,
                                ...a.jsxRuntime
                            }
                        }, {
                            frontmatter: t
                        }, n),
                        o = Object.keys(i),
                        l = Object.values(i),
                        s = Reflect.construct(Function, o.concat(`${e}`));
                    return s.apply(s, l).default
                }, [n, e]);
                if (!l) return s.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: ""
                    },
                    suppressHydrationWarning: !0
                });
                let d = s.createElement(m, {
                    components: i
                }, s.createElement(c, null));
                return o ? s.createElement("div", null, d) : d
            }
            "undefined" != typeof window && (window.requestIdleCallback = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout(function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }, 1)
            }, window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            }), n(6516);
            var g = n(8035),
                h = n(9603),
                v = n(7983),
                w = !0,
                b = e => {
                    let {
                        post: t
                    } = e;
                    return (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(g.Z, {
                            title: t.meta.title
                        }), (0, i.jsxs)(s.Fragment, {
                            children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)("div", {
                                className: "containerMDX containerPadding postMDX",
                                children: (0, i.jsx)(p, { ...t.source,
                                    components: {
                                        Image: l()
                                    }
                                })
                            }), (0, i.jsx)(v.Z, {})]
                        })]
                    })
                }
        },
        6516: function() {},
        7607: function(e) {
            e.exports = {
                footer: "styles_footer__d2n6E"
            }
        },
        5524: function(e) {
            e.exports = {
                containerMenu: "styles_containerMenu__YmrCY",
                containerNav: "styles_containerNav__uaFU2",
                profileMenu: "styles_profileMenu__WlUb_"
            }
        },
        5675: function(e, t, n) {
            e.exports = n(256)
        },
        2746: function(e, t, n) {
            e.exports.jsxRuntime = n(5893)
        }
    },
    function(e) {
        e.O(0, [996, 774, 888, 179], function() {
            return e(e.s = 592)
        }), _N_E = e.O()
    }
]);