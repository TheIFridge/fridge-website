// Service Worker - DON'T TOUCH THIS FILE! (yet)!
console.log("sw file is in the public folder");
// let cacheData = "appvV1";
// this.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(cacheData).then((cache) => {
//             cache.addAll([
//                 "/static/js/bundle.js",
//                 "/index.html",
//                 "/",
//             ]);
//         }),
//     );
// });

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             if (response) {
//                 return response;
//             }
//         }),
//     );
// });