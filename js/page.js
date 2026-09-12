const loader = document.getElementById("loader");
    const progress = document.getElementById("progress");
    const percentage = document.getElementById("percentage");
    const status = document.getElementById("status");

    const messages = [
      "Loading portfolio...",
      "Preparing datasets...",
      "Analyzing insights...",
      "Almost ready..."
    ];

    let value = 0;
    let messageIndex = 0;

    const progressTimer = setInterval(function () {
      value++;

      progress.style.width = value + "%";
      percentage.textContent = value + "%";

      if (value % 25 === 0 && messageIndex < messages.length - 1) {
        messageIndex++;
        status.textContent = messages[messageIndex];
      }

      if (value >= 100) {
        clearInterval(progressTimer);
      }
    }, 45);

    // Loader stays visible for at least 4 seconds
    const minimumTime = 4500;
    const startTime = Date.now();

    window.addEventListener("load", function () {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumTime - elapsedTime);

      setTimeout(function () {
        loader.classList.add("hide");

        setTimeout(function () {
          loader.remove();
        }, 600);
      }, remainingTime);
    });


    const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

// Keep the theme preference and the animated dashboard independent of the loader.
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function setTheme(theme) {
      const isDark = theme === "dark";
      document.body.dataset.theme = isDark ? "dark" : "light";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    setTheme(savedTheme || (prefersDark ? "dark" : "light"));

    themeToggle.addEventListener("click", function () {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });