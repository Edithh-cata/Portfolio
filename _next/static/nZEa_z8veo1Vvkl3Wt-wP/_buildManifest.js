self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        "/": [s, "static/css/0607d81ceafeaae7.css", "static/chunks/pages/index-c1b35c9e38a4d56b.js"],
        "/_error": ["static/chunks/pages/_error-b6491f42fb2263bb.js"],
        "/posts/[slug]": [s, "static/css/cd19399d5e244241.css", "static/chunks/pages/posts/[slug]-2220e653ab4c7080.js"],
        "/setup": [s, "static/css/4889a50a47212909.css", "static/chunks/pages/setup-2d9c70bfc0d035e4.js"],
        "/sobre": [s, "static/css/cb7b8bb1b25380af.css", "static/chunks/pages/sobre-9fc51f068fce8fc4.js"],
        sortedPages: ["/", "/_app", "/_error", "/posts/[slug]", "/setup", "/sobre"]
    }
}("static/chunks/996-4474ff3ca755f204.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();