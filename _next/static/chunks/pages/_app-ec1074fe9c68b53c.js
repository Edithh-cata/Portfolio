(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(1635)
            }])
        },
        1635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n(5893),
                u = n(7294);
            n(9166);
            var d = () => {
                    window.va || (window.va = function(...e) {
                        (window.vaq = window.vaq || []).push(e)
                    })
                },
                i = (e = {
                    debug: !0
                }) => {
                    var t;
                    if (!("undefined" != typeof window)) return;
                    let n = function(e = "auto") {
                        return "auto" === e ? ! function() {
                            try {
                                return !1
                            } catch (e) {
                                return !1
                            }
                        }() ? "production" : "development" : e
                    }(e.mode);
                    d(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                    let r = "development" === n ? "https://cdn.vercel-insights.com/v1/script.debug.js" : "/_vercel/insights/script.js";
                    if (document.head.querySelector(`script[src*="${r}"]`)) return;
                    let u = document.createElement("script");
                    u.src = r, u.defer = !0, u.setAttribute("data-sdkn", "@vercel/analytics"), u.setAttribute("data-sdkv", "0.1.11"), "development" === n && !1 === e.debug && u.setAttribute("data-debug", "false"), document.head.appendChild(u)
                };

            function o({
                beforeSend: e,
                debug: t = !0,
                mode: n = "auto"
            }) {
                return (0, u.useEffect)(() => {
                    i({
                        beforeSend: e,
                        debug: t,
                        mode: n
                    })
                }, [e, t, n]), null
            }
            var c = e => {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return (0, r.jsxs)(u.Fragment, {
                    children: [(0, r.jsx)(t, { ...n
                    }), (0, r.jsx)(o, {})]
                })
            }
        },
        9166: function() {}
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6840), t(2937)
        }), _N_E = e.O()
    }
]);