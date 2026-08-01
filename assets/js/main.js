/*
 * James Gullberg portfolio — small progressive-enhancement script.
 * Handles: dark/light theme toggle (persisted), mobile nav toggle,
 * and a lightweight lightbox for project galleries.
 * No dependencies.
 */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
   * Theme toggle
   * ------------------------------------------------------------- */
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("jg-theme", theme); } catch (e) {}
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------------
   * Mobile nav toggle
   * ------------------------------------------------------------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.querySelector("[data-nav-links]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------
   * Lightbox for [data-lightbox] triggers
   * ------------------------------------------------------------- */
  var lightbox = document.querySelector("[data-lightbox-root]");

  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
    var closeBtn = lightbox.querySelector("[data-lightbox-close]");

    function openLightbox(src, caption) {
      lightboxImg.setAttribute("src", src);
      lightboxImg.setAttribute("alt", caption || "");
      if (lightboxCaption) lightboxCaption.textContent = caption || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var full = trigger.getAttribute("href") || trigger.getAttribute("data-lightbox");
        var caption = trigger.getAttribute("data-caption") || "";
        openLightbox(full, caption);
      });
    });

    // Auto-wire every image inside a long-form article to open in the lightbox
    document.querySelectorAll(".jg-article img").forEach(function (img) {
      img.addEventListener("click", function () {
        var caption = "";
        var next = img.nextElementSibling;
        if (next && next.tagName === "P") caption = next.textContent;
        openLightbox(img.getAttribute("src"), caption);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------------------------------------------------------------
   * Project filter chips ([data-filter] on projects page)
   * ------------------------------------------------------------- */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var chips = filterBar.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-project-type]");

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        var value = chip.getAttribute("data-filter");

        cards.forEach(function (card) {
          var match = value === "all" || card.getAttribute("data-project-type") === value;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* ---------------------------------------------------------------
   * Active nav link highlighting
   * ------------------------------------------------------------- */
  var path = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll("[data-nav-links] a").forEach(function (link) {
    var linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";
    if (linkPath === path) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
