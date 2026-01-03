document.addEventListener("DOMContentLoaded", function () {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  var themeToggle = document.getElementById("themeToggle");
  function updateThemeToggleLabel() {
    if (!themeToggle) return;
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "Light";
    } else {
      themeToggle.textContent = "Dark";
    }
  }
  updateThemeToggleLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      var mode = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", mode);
      updateThemeToggleLabel();
    });
  }

  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  var heroTag = document.querySelector(".hero-tag");
  if (heroTag) {
    var text = heroTag.textContent.trim();
    heroTag.textContent = "";
    var i = 0;
    function type() {
      if (i <= text.length) {
        heroTag.textContent = text.slice(0, i);
        i += 1;
        setTimeout(type, 120);
      }
    }
    type();
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  var scrollBtn = document.getElementById("scrollTop");
  if (scrollBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 260) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
