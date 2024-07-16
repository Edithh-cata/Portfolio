(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(2533)
            }])
        },
        7983: function(e, n, r) {
            "use strict";
            var s = r(5893),
                i = r(7294),
                c = r(1664),
                o = r.n(c),
                t = r(7607),
                l = r.n(t);
            n.Z = () => (0, s.jsx)(i.Fragment, {
                children: (0, s.jsx)("footer", {
                    className: l().footer,
                    children: (0, s.jsx)("div", {
                        className: "containerMDX",
                        children: (0, s.jsx)("section", {
                            children: (0, s.jsxs)("p", {
                                children: ["\xa9 2021", (0, s.jsx)(o(), {
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
        9603: function(e, n, r) {
            "use strict";
            var s = r(5893);
            r(7294);
            var i = r(1664),
                c = r.n(i),
                o = r(5524),
                t = r.n(o);
            n.Z = () => (0, s.jsx)("header", {
                className: t().containerMenu,
                children: (0, s.jsx)("div", {
                    className: "containerMDX",
                    children: (0, s.jsxs)("div", {
                        className: t().containerNav,
                        children: [(0, s.jsx)("div", {
                            className: t().profileMenu,
                            children: (0, s.jsx)("img", {
                                src: "/logo-iuricode.svg",
                                alt: ""
                            })
                        }), (0, s.jsx)("nav", {
                            children: (0, s.jsxs)("ul", {
                                children: [(0, s.jsx)("li", {
                                    children: (0, s.jsx)(c(), {
                                        href: "/",
                                        children: "Blog"
                                    })
                                }), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(c(), {
                                        href: "/sobre",
                                        children: "Sobre"
                                    })
                                }), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(c(), {
                                        href: "/setup",
                                        children: "Setup"
                                    })
                                }), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(c(), {
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
        8035: function(e, n, r) {
            "use strict";
            var s = r(5893);
            r(7294);
            var i = r(9008),
                c = r.n(i);
            n.Z = e => {
                let {
                    title: n
                } = e;
                return (0, s.jsx)(c(), {
                    children: (0, s.jsx)("title", {
                        children: n
                    })
                })
            }
        },
        2533: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                __N_SSG: function() {
                    return v
                },
                default: function() {
                    return N
                }
            });
            var s = r(5893),
                i = r(1664),
                c = r.n(i),
                o = r(7634),
                t = r.n(o),
                l = e => {
                    let {
                        posts: n
                    } = e;
                    return (0, s.jsx)("ul", {
                        className: "containerMDX ".concat(t().list),
                        children: n.map((e, n) => (0, s.jsx)(c(), {
                            href: "/posts/".concat(e.slug),
                            children: (0, s.jsxs)("li", {
                                children: [(0, s.jsx)("h2", {
                                    children: e.title
                                }), (0, s.jsx)("p", {
                                    children: e.excerpt
                                }), (0, s.jsx)("span", {
                                    children: e.tags.map(e => (0, s.jsx)("p", {
                                        children: e
                                    }, e))
                                })]
                            }, e.slug)
                        }, n))
                    })
                },
                a = r(7294),
                d = r(8035),
                u = r(7983),
                h = r(9603),
                x = r(2322),
                j = r.n(x),
                p = () => (0, s.jsx)(a.Fragment, {
                    children: (0, s.jsx)("footer", {
                        className: j().profile,
                        children: (0, s.jsx)("div", {
                            className: "containerMDX",
                            children: (0, s.jsxs)("section", {
                                children: [(0, s.jsx)("h2", {
                                    children: "Konichiwa, sou Iuri Silva \uD83D\uDC4B\uD83C\uDFFC"
                                }), (0, s.jsx)("span", {
                                    children: (0, s.jsx)("h3", {
                                        children: "Guarant\xe3, Brasil"
                                    })
                                }), (0, s.jsx)("p", {
                                    children: "Meu nome \xe9 Iuri Silva, ou “iuricode” (\xe9 como me chamam agora). Sou freelancer como Frontend Developer e UI Designer desde 2020, extremamente apaixonado por caf\xe9 e cultura japonesa."
                                })]
                            })
                        })
                    })
                }),
                f = r(3347),
                m = r.n(f),
                _ = () => (0, s.jsx)(a.Fragment, {
                    children: (0, s.jsx)("footer", {
                        className: m().publi,
                        children: (0, s.jsx)("div", {
                            className: "containerMDX",
                            children: (0, s.jsxs)("section", {
                                children: [(0, s.jsx)("h2", {
                                    children: "Aprenda desenvolvimento frontend"
                                }), (0, s.jsx)("p", {
                                    children: "Este \xe9 um projeto gratuito para a comunidade de desenvolvedores, mas voc\xea pode me ajudar comprando o meu ebook se estiver interessado em aprender ou melhorar suas habilidades em desenvolvimento frontend."
                                }), (0, s.jsx)(c(), {
                                    href: "https://iuricode.com/efront/",
                                    target: "_blank",
                                    children: "Garantir agora"
                                })]
                            })
                        })
                    })
                }),
                v = !0,
                N = e => {
                    let {
                        posts: n
                    } = e;
                    return (0, s.jsxs)(a.Fragment, {
                        children: [(0, s.jsx)(d.Z, {
                            title: "Blog // Iuri Silva"
                        }), (0, s.jsxs)("div", {
                            className: "containerFlexBox",
                            children: [(0, s.jsx)(h.Z, {}), (0, s.jsx)(p, {}), (0, s.jsx)(l, {
                                posts: n
                            }), (0, s.jsx)(_, {}), (0, s.jsx)(u.Z, {})]
                        })]
                    })
                }
        },
        7634: function(e) {
            e.exports = {
                list: "styles_list__iPpTw"
            }
        },
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
        2322: function(e) {
            e.exports = {
                profile: "styles_profile__oLdjF"
            }
        },
        3347: function(e) {
            e.exports = {
                publi: "styles_publi__2fU_4"
            }
        }
    },
    function(e) {
        e.O(0, [996, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);