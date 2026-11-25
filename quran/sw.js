// Hifz — réseau d'abord pour l'app et les données (mises à jour), cache en secours (hors ligne).
// Les fichiers audio (autres domaines) ne passent pas par ce service worker.
const CACHE='hifz-v3';
const CORE=['./','index.html','grammar-fr.js','data/index.json','data/gloss-fr.json','manifest.webmanifest','icon-192.png','icon-512.png','fonts/amiri-quran.woff2',
 'data/s048.json','data/s032.json','data/s044.json','data/s055.json','data/s056.json','data/s067.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('hifz-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const u=new URL(req.url);if(u.origin!==location.origin)return;
  e.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});return res})
    .catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
});
