
const CACHE_NAME = 'loop-offline-cache-v1';
const FILES_TO_CACHE = [
  'Loop__Feed.html',
  'Loop__Mensagen.html',
  'Loop__Notificações.html',
  'Loop__Perfil.html',
  'Loop__Criar__Post.html',
  'Loop__Kids.html',
  'Loop__Login.html',
  'Loop__Cadastro.html',
  'Loop__Carregar.html',
  'style_nav.css',
  'script.js',
  'manifest.json',
  'img/Avatar.jpg',
  'img/post1.jpg',
  'img/post2.jpg',
  'img/post_kids.jpg',
  'img/LoopLogo.png',
  'img/placeholder.png'
];

self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.map(k=>{ if(k!==CACHE_NAME) return caches.delete(k); })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached) return cached;
      return fetch(event.request).then(resp=>resp).catch(()=> {
        if(event.request.destination === 'image') return caches.match('assets/Avatar.jpg');
      });
    })
  );
});