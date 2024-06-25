(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    // backdrop: document.querySelector("[data-menu-backdrop]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  //   refs.backdrop.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
    // refs.backdrop.classList.toggle("is-open");
  }
})();
