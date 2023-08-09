function registerServiceWorker() {
  // src/main.js
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(
      import.meta.env.MODE === "production"
        ? "/serviceWorker.js"
        : "/dev-sw.js?dev-sw",
      { type: import.meta.env.MODE === "production" ? "classic" : "module" }
    );
  }
}

export default registerServiceWorker;
