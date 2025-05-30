const headerMenuList = document.querySelector('.header__main-list');
const headerModal = document.querySelector('.header-modal');

const clickHeaderMenu = (evt) => {
  if (window.innerWidth < 1024) return;
  if (!evt.target.classList.contains('header__nav-button') && !evt.target.closest('.header__nav-button')) return;

  if (evt.target.classList.contains('header__nav-button_opened') || evt.target.closest('.header__nav-button_opened')) {

    if (evt.target.classList.contains('header__nav-button')) {
      evt.target.classList.remove('header__nav-button_opened');
    }
  
    if (evt.target.closest('.header__nav-button')) {
      evt.target.closest('.header__nav-button').classList.remove('header__nav-button_opened');
    }

    headerModal.classList.remove('header-modal_opened');
    return;
  } else {
    const openedMenu = document.querySelector('.header__nav-button_opened');

    if (openedMenu) {
      openedMenu.classList.remove('header__nav-button_opened');
      headerModal.classList.remove('header-modal_opened');
    }

    if (evt.target.classList.contains('header__nav-button')) {
      evt.target.classList.add('header__nav-button_opened');
    }
  
    if (evt.target.closest('.header__nav-button')) {
      evt.target.closest('.header__nav-button').classList.add('header__nav-button_opened');
    }

    headerModal.classList.add('header-modal_opened');
  }
}

const closeHeaderMenuOverlay = (evt) => {
  if (window.innerWidth < 1024) return;
  const openedMenu = document.querySelector('.header__nav-button_opened');
  if (!openedMenu || evt.target.classList.contains('header__nav-button') || evt.target.closest('.header__nav-button')) return;
  openedMenu.classList.remove('header__nav-button_opened');
  headerModal.classList.remove('header-modal_opened');
}

headerMenuList.addEventListener('click', clickHeaderMenu);
document.addEventListener('click', closeHeaderMenuOverlay);
