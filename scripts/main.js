// Plumb Anything — minimal, dependency-free UI script.
(function () {
  "use strict";

  // Mobile nav toggle
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.getAttribute("data-open") === "true";
      menu.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  // Highlight active nav link
  const here = location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("a[data-nav]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    if (href === here || (here === "/" && href === "/")) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Year in footer
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());
})();
