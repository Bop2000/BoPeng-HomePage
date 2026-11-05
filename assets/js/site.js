/* Bo Peng homepage: two small enhancements. The page works without them. */
(function () {
  "use strict";

  // 1. Email links are assembled here, so the plain address never sits in the HTML for scrapers.
  //    <a data-u="name" data-d="domain.org" data-fill>...</a>  (data-fill also replaces the visible text)
  document.querySelectorAll("a[data-u][data-d]").forEach(function (a) {
    var addr = a.getAttribute("data-u") + "@" + a.getAttribute("data-d");
    a.href = "mailto:" + addr;
    if (a.hasAttribute("data-fill")) a.textContent = addr;
  });

  // 2. Figure viewer: clicking a paper figure, the research map or a "Picture" button opens it full size.
  //    Without JavaScript (or <dialog> support) the link simply opens the image file.
  var dlg = document.getElementById("lightbox");
  if (!dlg || typeof dlg.showModal !== "function") return;
  var img = dlg.querySelector("img");
  var cap = dlg.querySelector("figcaption");

  document.querySelectorAll("a.pub-fig, a.map-zoom, a.pic").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var thumb = link.querySelector("img");
      img.src = link.getAttribute("href");
      img.alt = thumb ? thumb.alt : (link.getAttribute("data-alt") || link.getAttribute("data-caption") || "");
      cap.textContent = link.getAttribute("data-caption") || "";
      dlg.showModal();
    });
  });
  dlg.querySelector(".close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { img.removeAttribute("src"); });
})();
