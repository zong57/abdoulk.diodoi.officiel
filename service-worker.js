const CACHE_NAME = 'app-a-platinum-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://www.chosic.com',
  'https://assets.mixkit.co',
  'https://assets.mixkit.co'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

