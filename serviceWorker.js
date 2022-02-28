/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
var cacheName = "thegreenbus";

var filesToCache = [
  "./content-width.js",
  "./script.js",
  "./robots.txt",
  "./icon.png",
];

self.addEventListener("install", (event) => {
  console.log("👷", "install", event);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("👷", "activate", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log('👷', 'fetch', event);
  event.respondWith(fetch(event.request));
});
// Install Service Worker
self.addEventListener("install", function (event) {
  console.log("Service Worker: Installing....");

  event.waitUntil(
    // Open the Cache
    caches.open(cacheName).then(function (cache) {
      console.log("Service Worker: Caching App Shell at the moment......");

      // Add Files to the Cache
      return cache.addAll(filesToCache);
    })
  );
});