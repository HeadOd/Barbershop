export const refs = {
  headerList: document.querySelector('.header__list'),
  headerMenu: document.querySelector('.header__menu'),
  menuBtnRef: document.querySelector("[data-menu-button]"),
  mobileMenuRef: document.querySelector("[data-menu]"),
}

refs.headerList.addEventListener('click', headerMenuBar);

refs.menuBtnRef.addEventListener("click", headerMenuBar);


function headerMenuBar() {
  const expanded =
    refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  refs.menuBtnRef.classList.toggle("is-open");
  refs.menuBtnRef.setAttribute("aria-expanded", !expanded);

  refs.mobileMenuRef.classList.toggle("is-open");
}