"use strict";var precacheConfig=[["/portfolio/index.html","3c09fa64e18161bf12ff702bb16fd04b"],["/portfolio/static/css/main.cde97698.css","9a163c1e209d294b7311591407b9cc2c"],["/portfolio/static/js/main.b64d74fe.js","7a4d0d6a6f8f53e0e275459e2e2e853d"],["/portfolio/static/media/bart.0ce5a1e9.png","0ce5a1e995324fad730d5110fbca1de7"],["/portfolio/static/media/bg-masthead.4c6b4862.jpg","4c6b486249a7e5406e2ef0436e9e04ad"],["/portfolio/static/media/bg-signup.5ac05903.jpg","5ac05903cff7fd9e6034b0f9539da51d"],["/portfolio/static/media/book-computer-design.e06fab6d.jpg","e06fab6d2f3fc31039e94ec6b8a401f5"],["/portfolio/static/media/carCatalog.160da8cd.png","160da8cd1eff4c183148785f74988976"],["/portfolio/static/media/demo-image-01.2cf5985b.jpg","2cf5985b2eaebfad760fbfc3ccec1301"],["/portfolio/static/media/demo-image-02.d2e55529.jpg","d2e555296b69175fd50ab5e38594b130"],["/portfolio/static/media/favicon.fb871342.ico","fb8713423e6e13372368d607d8645200"],["/portfolio/static/media/geoStashing.16401e21.jpeg","16401e2177200c4d7e760d2f815e5343"],["/portfolio/static/media/ipad.daeab9d1.png","daeab9d1e66ef6e2a5ec00436d8667d2"],["/portfolio/static/media/lightbulb.a3ce0246.jpg","a3ce02464173f2b5c2af92c8c4548707"],["/portfolio/static/media/nearbyNews.4b9c36fd.jpeg","4b9c36fdb449cbf7897b99da4178a1fb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});