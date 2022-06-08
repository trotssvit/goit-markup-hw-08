(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-mob-btn-open"),
    closeMenuBtn: document.querySelector(".menu-mob-btn-close"),
    menu: document.querySelector(".menu-mobile"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();