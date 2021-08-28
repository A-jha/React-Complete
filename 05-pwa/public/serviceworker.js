const CACHE_NAME = "version-1";

const urlsToCache = ["index.html", "ofline.html"];

const self = this;

//installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("hi");
      return cache.addAll(urlsToCache);
    })
  );
});
//listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        //no internet
        return caches.match("ofline.html");
      });
    })
  );
});
//activate the service worker
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];

  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheNames) => {
          if (!cacheWhiteList.includes(cacheNames)) {
            return caches.delete(cacheNames);
          }
        })
      );
    })
  );
});
