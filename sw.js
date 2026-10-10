self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(function(){
      return new Response('<h1 style="font-family:sans-serif;text-align:center;margin-top:30vh">Pas de connexion Internet</h1>',{headers:{'Content-Type':'text/html; charset=utf-8'}});
    }));
  }
});
