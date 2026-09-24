/* =========================================================
   SereniMind — Disorder page behavior
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Home button → index.html
  const homeButton = document.getElementById("homeButton");
  if (homeButton) {
    homeButton.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  // Header shadow on scroll
  const header = document.querySelector(".disorder-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Back-to-top button (injected)
  const topBtn = document.createElement("button");
  topBtn.className = "to-top";
  topBtn.setAttribute("aria-label", "Back to top");
  topBtn.innerHTML = "↑";
  document.body.appendChild(topBtn);

  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  const toggleTop = () => {
    const show = window.scrollY > 500;
    topBtn.style.opacity = show ? "1" : "0";
    topBtn.style.pointerEvents = show ? "auto" : "none";
    topBtn.style.transform = show ? "translateY(0)" : "translateY(8px)";
  };
  toggleTop();
  window.addEventListener("scroll", toggleTop, { passive: true });
});