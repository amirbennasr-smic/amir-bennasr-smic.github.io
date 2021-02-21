'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
<<<<<<< HEAD
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
=======
  ".git/COMMIT_EDITMSG": "bf87ec0391761d03cd1d21e9c9a17f10",
".git/config": "38c0be56bdf0a746fcfe3b425ff961d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "2d59e6f9246f01bd56766b18ecc84b9a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c8c526f0bb63c57e4ead6490b68bddc1",
".git/logs/refs/heads/main": "76ce891bc72983cab43f911c1c1165b3",
".git/logs/refs/remotes/origin/main": "5361b745ce319b374ccc4df188c6bf4f",
".git/objects/01/3518ae399b9de198dc1d7938e6ae3c03086b1f": "261e3ad366aa242fd8fbeb05c4234347",
".git/objects/03/3f5e2b620e6f04b217e60be897b13ec227b57c": "1a3ca97648e91bbca863c444abcbb5f0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/dab8aff1aec9cd98928cb611c553f9f28e3276": "1c786ad53f090adc81850a23ad27525b",
".git/objects/06/e6ef89717f7e166807116d1ff0055fc83a690e": "69b0e8babfb31937688fe2aa7e7f107d",
".git/objects/0b/753285add8a6f2954f006c29bd48dc09e1e000": "4564a28e6e004a3daeff5bf167fb2c0d",
".git/objects/0c/1ca88bc7334d8624864bcb503771c78a0669e7": "108e3e6914fe2773e0cfa52532779e56",
".git/objects/0f/6aecc9e6e18521ea4635cc9d5bd0116cefe67a": "a99eba2df75361caefc0ad281ce6b358",
".git/objects/13/d7bf637c2077339591c21001baccdb81ea39d3": "7239e975151daf3abc811bc033660a61",
".git/objects/16/d609883e870fd899b0124553df6a9178b76acf": "9c40bd0c9dc28bfbb20d1a1d78bbb164",
".git/objects/1e/2aff22fa3ffc9cd730d10fedb4c6034304b05a": "1380eeea7ee9f3eeb1c91c499052b894",
".git/objects/1f/40904504f2b6b6b155ea1c5eb5d41f239817eb": "67c50a85c20954d923262b1e29bbae78",
".git/objects/1f/bbecbbbc6f3beded4437c47e15e28ed88956ca": "7aca6390d42c3d360ceb597706b9904f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/bd5d9068f54fbd1ca8ba0fe74b28a83630b372": "001943e34a6f06dc94d06917e13e6387",
".git/objects/25/53f6f1a59f5771f1086007861d2b7176ff9018": "a6152f789007d0d4ba620523642019bb",
".git/objects/25/b7b00ccc924a0ba162abc74e038b7d220a8bf6": "05d32bf4b114ea57afa41f4e20b0ae14",
".git/objects/3b/81b0748d41702b04ec9ac7affca44f59e4124a": "8798660056ca3fb7d6727a50614a49eb",
".git/objects/44/acc3fe10508283c4532929c2eddcda63654e80": "520d66f012208316cc9e1e6df3331698",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a394f144959a63d5d20cd0f820cc7bc51e8ce2": "d4147d55366ee0c2a522148fec5cad37",
".git/objects/4e/8b5085c1727f1c39fa56e4c24382d8a6f4fddf": "fa57ea6a74447dfd9c3e1bfc4663885e",
".git/objects/5f/f93a901a6101f01e82d5516d8ce4bfe6b9b402": "e051dbd31a44bb50e4822b8f8b6f39bd",
".git/objects/72/07a50dfc64faf6d89a870e27335983badc01a4": "9a2ddf9146676b207b1afa7cc61c2ad2",
".git/objects/77/c13fc7fb13bf861fba2470a9a7fc80ae80041a": "6a535323887d08e23fe5a47c83da960c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/2a2b7e6e2cdd389d8cdb46960ee44740a07d36": "8f0c6af8b606a11a7e7272e41b1cf0ef",
".git/objects/94/123074ee0cd1dba86c22b1de304316192f46f7": "21819f989ef1e3f3f826786fd6cfa0d5",
".git/objects/99/155daed2c07624835ac6c89089db4463db27d2": "0ed6ab3aa538bba6304d71b04e58f2e5",
".git/objects/99/ccd8837e54ef7745aa1778cd61aef495c545e6": "bdb96d54db95596bf2a81dd5992c9911",
".git/objects/9d/8ab84f821537637fa503c160da8748b0c59851": "288a38371502f6a8abcbbd2142d2668d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/5b5e7a386f5ffaa8cafc3ada22a491db7dd5b6": "aa00557bf6811cf48995d2acd1a44268",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/5086f50153219d42c642c6ad4a91a57b9da98b": "0b36ae18d0d9587f1e0a4ce78161b832",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/945465038f4102ab2dfe27e554bfd2885684d3": "88dac4dfa337f09764539719779cd448",
".git/objects/b3/d0670f66d4f82c01da337b893fd00684215c1f": "1f3ba98fac72ab8002d413548aa37546",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/05bed7e99a902cafea4ac29b82ee95374d30f9": "cf0ef6a774b0a3ae120b818ad6d0f251",
".git/objects/bb/c221cae0d95475204c855bfd1cb89583b6f4cd": "347390addf788cae375052f8f77404be",
".git/objects/bc/f81454079d4caaf79a3b5632af54ef43b25ad6": "eeeed1c528ffa9f63a9e32af99ae072d",
".git/objects/bd/3f93da3c223068efb194bb8c8bcecc48aab611": "4575fc756dde565cbdfbf93859a63437",
".git/objects/be/6652ce0fcc7c586a078ed7e1920e19afa1b376": "2fb2cc19e74a347a96df28c0abe26886",
".git/objects/c2/4eaff36efd9ce5d92d49599ee6c7af17869473": "a0b9419a1299bb474d3b0c97a7a5ad5c",
".git/objects/c2/ced8997073a1ca092e1c7bbf426f8188c6c58c": "3c0dec0e535eab693e29d2c772c4e37b",
".git/objects/c8/937ef426b15c4bb0753c4405fb9f587ec7327a": "bf683e6e2bf9d0fa11c492b72fe1b0f3",
".git/objects/cf/05a8b3ddf94c3a25b8b2fc3414d9faf1ccd2af": "8a516b0fd55aebe9761e2ea06b38c47c",
".git/objects/cf/8ff04f74be73cde3c2cbe25a644b86cf383d89": "9fa73da385429a45f5a8083800b42069",
".git/objects/cf/cbd114d0e29a97a3053612bb93c5345310eaa9": "448860da1fb12140ed1bc91f4172e22d",
".git/objects/cf/cf5cf345d7750f7e0bdc6039ffc31493e1f408": "ccfbd86757b480c25f3082fc3ac8623d",
".git/objects/d0/e453d09d4be6eb4a7ed8ea78aa27ef148ebba7": "f6dc568338e73ba9c199db19afaeaebf",
".git/objects/d3/84494252dcd717e2e464d5ed27bf90d2934699": "c2cdba9577479954cfdc2133b40fec30",
".git/objects/d9/5d0e175dbd8ba36d91a05e44b3c43c74071ca8": "488add96a324576d1b4c3e97ed513345",
".git/objects/e3/66944fc409ba5335a14b6c5bcd61325ca9cc2e": "d2d2f82d887e974919da412e5c2a0cca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/9234ecd5676c16a7cfcc90f4d6affa44a254a8": "b0b942b87c8cdb774aa5e43a88c1ce83",
".git/objects/f8/9a20ce79ae1dabdf4a42c19fcefd2ea8e74ac8": "74234d57a6b047c1d9ebddab2212c114",
".git/objects/fb/57a5ad5293390b1c2da816fa7371a3fb7169f8": "9af500868902ea734b3d8bc92b47020c",
".git/refs/heads/main": "dc93af3254e549b7f894cd833f7253af",
".git/refs/remotes/origin/main": "dc93af3254e549b7f894cd833f7253af",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/bhk-auto/banniere-bhkauto.jpg": "913b7e312a6e75eec19c064db64c444d",
"assets/bhk-auto/bhk-auto.jpg": "316d69ef4a2e4ed9a8c527b43175a565",
"assets/bhk-auto/collab2.jpg": "c7f2c7c8619aa5e8f28cf4a770d055c8",
"assets/bhk-auto/collab3.jpg": "33b8a8d26c0a6a824e124c35b4dffbbb",
"assets/bhk-auto/collaborateur.jpg": "90267acc0dc8aae1586e65b617830f89",
"assets/bhk-auto/logo.png": "41dd90f7f536e9db28007e87768d2289",
"assets/elite_spa/collab.jpg": "483753363639c767809d52a09c588036",
"assets/elite_spa/collab2.jpg": "ee8225472958f3a67671a68923607335",
"assets/elite_spa/logo.jpg": "716c55bcea755846b83492bf1817911e",
"assets/elite_spa/physio_therapeute.jpg": "a735fdcfa5a131c48f9bcf9f5af53365",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/momo-coiff/banniere-momo.jpg": "07687704cd44f51af8d9c6b73330c5b2",
"assets/momo-coiff/coiffure.jpg": "4ed6864be0005bba44be5595a23bfce3",
"assets/momo-coiff/hairdresse2.jpg": "e1cd94a372fbcabd251a14e52e077941",
"assets/momo-coiff/hairdresse3.jpg": "35f38d1c6161659e56597eeb9b14cbf9",
"assets/momo-coiff/hairdresser.jpg": "b196fe3b08e18d03db7c831bd0321b73",
"assets/momo-coiff/logo.jpg": "43000d9219f42eca62113c60b2966109",
"assets/mytek/banniere-3-mytek.jpg": "4a61697dd9ab30d2f28adb94a1f9b170",
"assets/mytek/banniere-mytek.jpg": "7533ec605e47b8d29bfb115cd82cda36",
"assets/mytek/banniere2-mytek.jpg": "7afc9a3fc90ef88e3f39a8628c0b7a1d",
"assets/mytek/collab.png": "7fd60043871bbab86068069d0ea8b7be",
"assets/mytek/collab3.jpg": "b8ec8a9e2b6d0f97a03cd70671fe3b43",
"assets/mytek/logo.jpg": "1cc77c3b2aea757c166a132588590038",
"assets/mytek/mytek-drive-vente-en-ligne.jpg": "8e7b3e34fe4d893dbb128f21df798fe4",
>>>>>>> 154af4aec4fb815816f2dafc86c85f7b4cc943da
"assets/NOTICES": "fc110edfc86dc68aaa5e84cf694e07f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
<<<<<<< HEAD
"index.html": "c1f379085ef58173bfb6b5b41342e9d8",
"/": "c1f379085ef58173bfb6b5b41342e9d8",
"main.dart.js": "7c19fad9fe5a068e62b98260a9f6f315",
=======
"index.html": "fc1a70649f226d72e2f9cf60ecfa3771",
"/": "fc1a70649f226d72e2f9cf60ecfa3771",
"main.dart.js": "5feca79590bdc731cbdf578a7b326bc8",
>>>>>>> 154af4aec4fb815816f2dafc86c85f7b4cc943da
"manifest.json": "ac9f3fa6c0cb5a9428ec0d3d36e88a93",
"version.json": "583d6f8d8a6884be5e104522e0aaa417"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
