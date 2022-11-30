// ! MAIN-BTN
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// // ! HEADER-BTN
// (() => {
//   const menuBtnRef = document.querySelector("[data-header-btn]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttributer("artia-expanded", !expanded);
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();
