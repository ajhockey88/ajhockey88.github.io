const CACHE = 'thorstream-v4';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Cache entries are keyed by path only, ignoring any ?query. Otherwise every distinct URL
// (e.g. the bottom screen's ?screen=chat&v=<timestamp>) would get its own copy stored
// forever, and the cache would just keep growing.
function cacheKey(url){ return url.origin + url.pathname; }

// Network-first for the app's own files. { cache: 'no-cache' } makes the browser check with
// the server every time (a tiny "unchanged" reply if nothing changed) instead of trusting a
// saved copy for up to 10 minutes — so a new deploy shows up right away, without needing to
// clear Chrome's cache. Falls back to the saved copy only when genuinely offline.
// All Twitch/7TV/API calls are left alone and go straight to the network.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const key = cacheKey(url);
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then(res => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone(); // clone immediately, before any async gap
          caches.open(CACHE).then(c => c.put(key, copy));
        }
        return res;
      })
      .catch(() => caches.match(key))
  );
});
