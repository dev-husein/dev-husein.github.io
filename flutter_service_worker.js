'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "89b968787bca198621a64f2f3a9a0209",
"assets/FontManifest.json": "211cbb6fac7d91ae2ead93b81e54bfff",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/Assets/Chapters_Banners/analgesics.jpg": "a4dbb6d57e74989fc5fa10dcc5153024",
"assets/lib/Assets/Chapters_Banners/Anthelmintic.jpg": "354d957268d97d28ac9ec8be4d8d55d7",
"assets/lib/Assets/Chapters_Banners/antifungal.jpg": "09ac08f37b3a5bc93a3de0df4a2b9a09",
"assets/lib/Assets/Chapters_Banners/bacteria.jpg": "0184d0a58a8104e90e78fbb24b756d63",
"assets/lib/Assets/Chapters_Banners/CNS.jpg": "46193f51414564a0eed148910c50f6ce",
"assets/lib/Assets/Chapters_Banners/CVS.jpg": "f2c7baf03dcea48c12743d0f88bfde59",
"assets/lib/Assets/Chapters_Banners/diabetis.jpg": "b5907c091cae8e57dde61cdf8278bd87",
"assets/lib/Assets/Chapters_Banners/ear-drop-banner.jpg": "115c4557ca0f4eb0aa2fe720bcbf04c3",
"assets/lib/Assets/Chapters_Banners/eye-drops.jpg": "663409f3a126b1614699fd712b6702be",
"assets/lib/Assets/Chapters_Banners/git.jpg": "b961c123129f84048e4555406a8624fa",
"assets/lib/Assets/Chapters_Banners/gyno.jpg": "5786a0b6e84f5288a4a96ccc89165c2e",
"assets/lib/Assets/Chapters_Banners/respiratory.jpg": "dc4a0ef527d6e21b38096b8f857bf55e",
"assets/lib/Assets/Chapters_Banners/Skin.jpg": "bf0d279e245796a8463e6301e639e079",
"assets/lib/Assets/Chapters_Banners/thyroid.jpg": "42cb8bd7140afab0e0254454aec4446a",
"assets/lib/Assets/Chapters_Banners/virus.jpg": "7399097f71144342fc00599d007cb034",
"assets/lib/Assets/Chapters_Banners/vitaminas.jpg": "07ba5b46f713aaaa7c512c742e9890e3",
"assets/lib/Assets/chapters_Images/analgesic.jpg": "4802e81bb14589dffc2da215e39a7fdb",
"assets/lib/Assets/chapters_Images/antibiotics.jpg": "f65b406eceda02b5b44529c6d2ea131e",
"assets/lib/Assets/chapters_Images/book.jpg": "987d09a8a0fd11ca7b3d01d645b68ef9",
"assets/lib/Assets/chapters_Images/CNS.png": "02d02711c557373cf43fb2bd70d5c852",
"assets/lib/Assets/chapters_Images/CVS.jpg": "d4345da569fad02a22fd6b2caf845d04",
"assets/lib/Assets/chapters_Images/drops.jpg": "3948d42c47207ec0fe709c1972c60dc1",
"assets/lib/Assets/chapters_Images/endocrine.jpg": "2c07587c058ea2afa3ef76377b5d9e26",
"assets/lib/Assets/chapters_Images/GIT.jpg": "a2c3bb668bf48329310c3db21caa4cff",
"assets/lib/Assets/chapters_Images/gyno.jpg": "dfc511e17f1b5ea96d1bbac20f90fa69",
"assets/lib/Assets/chapters_Images/respiratory.jpg": "40a4f4c0e284c60ea45216cc68fcf5ab",
"assets/lib/Assets/chapters_Images/skin.jpg": "bef742eea319399ded0197ca570a0cf9",
"assets/lib/Assets/chapters_Images/supplement.jpg": "713c0d6877900d36cb93d95af26209c9",
"assets/lib/Assets/Others/11.jpg": "80d174de39448b100766a11274197d2a",
"assets/lib/Assets/Others/book.jpg": "eebc5d242ff98b8b31203106a49ecf92",
"assets/lib/Assets/Others/cases.jpg": "f4896d72b61a82ceb3ae027c65e11ef6",
"assets/lib/Assets/Others/cc.jpg": "1829fbf4437c16f69dc3fcd3db22e5aa",
"assets/lib/Assets/Others/combination.jpg": "db5fbdd1c464172883c17fe9e95cd114",
"assets/lib/Assets/Others/company.jpg": "72a1e94c480bce99f0c42b79c5d1e292",
"assets/lib/Assets/Others/icon.jpg": "bba21355d22c5e2afa71f46d1d0f069e",
"assets/lib/Assets/Others/image.jpg": "5b9c2320410cef822d9f52f9134f5c16",
"assets/lib/Assets/Others/lab.jpg": "e80904f6c877ad96e169ba2fb73f0889",
"assets/lib/Assets/Others/logo.png": "a961a438e6a0e1c8429770b7370dc29d",
"assets/lib/Assets/Others/otc1.jpg": "48564e561ef6ae6d10c44ccf52a305c4",
"assets/lib/Assets/Others/pro-items.jpg": "71715a39132e57018a60fa761e30b90c",
"assets/lib/Assets/Others/rx-list.png": "37f9b680f3b5ca1edeb1b2dd5cf85072",
"assets/lib/Assets/Others/rx.jpg": "70349cf88df9539d0e149a747489dc75",
"assets/lib/Assets/Others/rx_icon.png": "bc674464e55df20776ca5753a36b51ee",
"assets/lib/Assets/Others/user.jpg": "4c207c8dbbc3daffe325a64ac170c027",
"assets/lib/Assets/Others/user.png": "66d855b06cfcaca6b87a94992ea0d0e6",
"assets/NOTICES": "a2408e575d3c8f831a0cae5ecef160dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/youtube_player_flutter_quill/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "cebe54871ac98ba630075b37297e56dc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b28d0e8e6c4dc0df52cfedd8e8d58d75",
"/": "b28d0e8e6c4dc0df52cfedd8e8d58d75",
"main.dart.js": "2004ddac2ec0926468ca04c5a3b369d7",
"manifest.json": "01503b56540502436110b869fd681f72",
"version.json": "b1288b4733c3813ac778fa831e6666d9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
