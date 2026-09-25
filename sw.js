/* Athr — service worker
   Strategy:
   - HTML:        network-first (always fresh)
   - JS / CSS:    network-first (always fresh code, cache as offline fallback)
   - Everything else (fonts, images, manifest): cache-first
*/
const CACHE = 'athr-v124-supabase';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './auth.js',
  './data.js',
  './manifest.webmanifest',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isLocal = url.origin === self.location.origin;
  const ext = url.pathname.split('.').pop().toLowerCase();

  // Always network-first for HTML, JS, and CSS — never serve stale code
  const isCode = req.mode === 'navigate'
    || (req.headers.get('accept') || '').includes('text/html')
    || ext === 'js'
    || ext === 'css';

  if (isCode && isLocal) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then(r => r || caches.match('./index.html'))
        )
    );
    return;
  }

  // Cache-first for everything else (fonts, images, manifest)
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      });
    })
  );
});
