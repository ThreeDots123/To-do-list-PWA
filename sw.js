let cache = "pwa-cache-version-1"


// Handle serviceworker installation

const allFiles = [
    "/",
    "/script.js",
    "/worker.js",
    "/css/main.css"
]


self.addEventListener("install", (e) => {
    const cacheReady = caches.open(cache).then( newCache => {
        return newCache.addAll(allFiles)
    })

    e.waitUntil(cacheReady)

})


self.addEventListener("fetch", (e) => {
    // check if they all come from window.origin
    if (e.request.url.includes(location.origin)) {
        // intercept request and return cached one
        let newRes = caches.open(cache).then(res => {
            return res.match(e.request)
        })

        e.respondWith(newRes)
    }
})