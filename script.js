// Script para togglar o menu mobile
(function () {
  const btn = document.querySelector(".hamburger");
  const nav = document.getElementById("primary-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("menu-open", !expanded);
  });
  // Fechar ao clicar em links
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      btn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });
})();
