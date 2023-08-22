self.addEventListener("install", () => {
    console.log("[Service Worker] Install")
})

self.addEventListener("activate", () => {
    console.log("[Service Worker] Activate")
})

self.addEventListener("fetch", () => {
    // console.log("[Service Worker] Fetch")
    // Nothing to do here yet :0
})