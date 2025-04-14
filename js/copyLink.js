(function() {
  function copyDownloadLink() {
    let path = window.location.pathname;
    if (!path.startsWith("/p/")) return;
    let url = window.location.origin + path.replace("/p/", "/d/");
    navigator.clipboard.writeText(url).then(() => {
      alert("下载链接已复制: " + url);
    });
  }

  window.addEventListener("load", function() {
    let path = window.location.pathname;
    if (path.startsWith("/p/")) {
      let container = document.querySelector("main") || document.body;
      let button = document.createElement("button");
      button.innerText = "复制下载链接";
      button.style.cssText = "padding:8px 12px;background:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;";
      button.onclick = copyDownloadLink;
      container.insertBefore(button, container.firstChild);
    }
  });
})();
