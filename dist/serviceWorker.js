const t = "monk-v1.0.0", e = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/monk.svg",
  "./assets/*.svg",
  "https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
];
self.addEventListener("install", async (c) => (await (await caches.open(t)).addAll(e), self.skipWaiting()));
self.addEventListener("activate", (c) => {
  self.clients.claim();
});
self.addEventListener("fetch", async (c) => {
  const a = c.request;
  new URL(a.url).origin === location.origin ? c.respondWith(n(a)) : c.respondWith(i(a));
});
async function n(c) {
  return await (await caches.open(t)).match(c) || fetch(c);
}
async function i(c) {
  const a = await caches.open(t);
  try {
    const s = await fetch(c);
    return await a.put(c, s.clone()), s;
  } catch {
    return await a.match(c);
  }
}
