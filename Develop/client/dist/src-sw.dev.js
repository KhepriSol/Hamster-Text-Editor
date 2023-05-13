"use strict";

var _require = require('workbox-recipes'),
    offlineFallback = _require.offlineFallback,
    warmStrategyCache = _require.warmStrategyCache;

var _require2 = require('workbox-strategies'),
    CacheFirst = _require2.CacheFirst;

var _require3 = require('workbox-routing'),
    registerRoute = _require3.registerRoute;

var _require4 = require('workbox-cacheable-response'),
    CacheableResponsePlugin = _require4.CacheableResponsePlugin;

var _require5 = require('workbox-expiration'),
    ExpirationPlugin = _require5.ExpirationPlugin;

var _require6 = require('workbox-precaching/precacheAndRoute'),
    precacheAndRoute = _require6.precacheAndRoute;

precacheAndRoute(self.__WB_MANIFEST);
var pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [new CacheableResponsePlugin({
    statuses: [0, 200]
  }), new ExpirationPlugin({
    maxAgeSeconds: 30 * 24 * 60 * 60
  })]
});
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache
});
registerRoute(function (_ref) {
  var request = _ref.request;
  return request.mode === 'navigate';
}, pageCache);
registerRoute( //callback function that will filter the cache
function (_ref2) {
  var request = _ref2.request;
  return ["style", "script", "worker"].includes(request.destination);
}, new StaleWhileRevalidate({
  cacheName: "asset-cache",
  plugins: [new CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
//# sourceMappingURL=src-sw.dev.js.map
