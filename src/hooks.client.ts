// Recover automatically when a client already has an old deploy loaded and its
// hashed chunk/asset URLs 404 against the current (fully-replaced) GitHub Pages build.
window.addEventListener("vite:preloadError", () => {
  const key = "reloaded-after-preload-error";
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, "1");
  location.reload();
});
