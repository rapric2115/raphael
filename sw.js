var staticCaches = ["Raphael.designiumpartner"];

function inArray(e, t) {
    return 0 < e.filter(function(e) {
        return e === t
    }).length
}
self.addEventListener("install", function(e) {
    console.log("SW: Installed and updated"), self.skipWaiting()
}), self.addEventListener("activate", function(e) {
    console.log("SW: Activate"), e.waitUntil(caches.keys().then(function(e) {
        return Promise.all(e.map(function(e) {
            if (!inArray(staticCaches, e)) return caches.delete(e)
        }))
    }))
}), self.addEventListener("fetch", function(c) {
    "http" === c.request.url.slice(0, 4) && c.respondWith(fetch(c.request).then(function(e) {
        if (404 == e.status) return new Response("Page not found!");
        var n = e.clone();
        return caches.open(staticCaches).then(function(t) {
            0 === c.request.url.indexOf("http") && t.matchAll(c.request, {
                ignoreSearch: !0
            }).then(function(e) {
                return Promise.all(e.map(function(e) {
                    return t.delete(e)
                }))
            }).then(function() {
                t.put(c.request, n)
            })
        }), e
    }).catch(function(e) {
        return console.log("Offline mode."), caches.match(c.request).then(function(e) {
            return e || !1
        })
    }))
});