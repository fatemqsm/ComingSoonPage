var CACHE_NAME = "ComingSoonPage-v2"
var urlsToCache = ["/", "favicon.ico", "/Image/bg01.jpg"]

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  )
})

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
  if (event.request.url.includes('_next')) {
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.add(event.request)
    })
  }
})

self.addEventListener("activate", function (event) {
  var cacheAllowlist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
