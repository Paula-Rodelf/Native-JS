self.addEventListener("install",(event)=>{
    event.waitUntil( 
        caches.open("simpleApp-1").then(cache=>{
           return cache.addAll(["/","index.html","styles/index.css","js/main.js","other.html","styles/other.css","js/other.js"])
        })
     )
})

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((file)=>file)
    )
})