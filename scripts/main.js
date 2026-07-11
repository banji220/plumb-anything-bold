// Plumb Anything — minimal, dependency-free UI script.
// Wrapped in try/catch so a script error in one widget never breaks the page.
(function () {
  "use strict";

  // Global safety net: log unexpected errors without disrupting the page.
  window.addEventListener("error", (event) => {
    try {
      console.error("[PlumbAnything] Uncaught error:", event.message, event.filename + ":" + event.lineno);
    } catch (_) { /* noop */ }
  });
  window.addEventListener("unhandledrejection", (event) => {
    try {
      console.error("[PlumbAnything] Unhandled promise rejection:", event.reason);
    } catch (_) { /* noop */ }
  });

  // Mobile nav toggle
  try {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        try {
          const open = menu.getAttribute("data-open") === "true";
          menu.setAttribute("data-open", String(!open));
          toggle.setAttribute("aria-expanded", String(!open));
        } catch (err) {
          console.error("[PlumbAnything] Nav toggle failed:", err);
        }
      });
    }
  } catch (err) {
    console.error("[PlumbAnything] Nav init failed:", err);
  }

  // Highlight active nav link
  try {
    const here = location.pathname.replace(/\/index\.html$/, "/");
    document.querySelectorAll("a[data-nav]").forEach((a) => {
      try {
        const href = a.getAttribute("href");
        if (!href) return;
        if (href === here || (here === "/" && href === "/")) {
          a.setAttribute("aria-current", "page");
        }
      } catch (_) { /* skip this link */ }
    });
  } catch (err) {
    console.error("[PlumbAnything] Active-link highlight failed:", err);
  }

  // Year in footer
  try {
    const y = document.querySelector("[data-year]");
    if (y) y.textContent = String(new Date().getFullYear());
  } catch (err) {
    console.error("[PlumbAnything] Year stamp failed:", err);
  }

  // Contact form: basic client-side validation before mailto submission.
  try {
    const form = document.querySelector('form[action^="mailto:"]');
    if (form) {
      form.addEventListener("submit", (event) => {
        try {
          const required = form.querySelectorAll("[required]");
          let firstInvalid = null;
          required.forEach((field) => {
            const value = (field.value || "").trim();
            if (!value) {
              field.setAttribute("aria-invalid", "true");
              if (!firstInvalid) firstInvalid = field;
            } else {
              field.removeAttribute("aria-invalid");
            }
          });
          if (firstInvalid) {
            event.preventDefault();
            firstInvalid.focus();
          }
        } catch (err) {
          console.error("[PlumbAnything] Form validation failed:", err);
          // Don't block submission on validator crash.
        }
      });
    }
  } catch (err) {
    console.error("[PlumbAnything] Form init failed:", err);
  }
})();
