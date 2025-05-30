const body = document.querySelector('.body');
const header = body.querySelector('.header');
const headerMenuList = header.querySelector('.header__main-list_desktop');
const headerMenuListMobile = header.querySelector('.header__main-list_mobile');
const headerModal = body.querySelector('.header-modal');
const burgerButton = header.querySelector('.header__mobile-button_type_burger');
const crossButton = header.querySelector('.header__mobile-button_type_close');

const clickHeaderMenu = (evt) => {
  if (window.innerWidth < 1024) return;
  const button = evt.target.closest('.header__nav-button');
  if (!button) return;

  if (button.classList.contains('header__nav-button_opened')) {
    button.classList.remove('header__nav-button_opened');
    headerModal.classList.remove('header-modal_opened');
    return;
  } else {
    const openedMenu = document.querySelector('.header__nav-button_opened');

    if (openedMenu) {
      openedMenu.classList.remove('header__nav-button_opened');
      headerModal.classList.remove('header-modal_opened');
    }

    button.classList.add('header__nav-button_opened');
    headerModal.classList.add('header-modal_opened');
  }
}

const closeHeaderMenuOverlay = (evt) => {
  if (window.innerWidth < 1024) return;
  const openedMenu = document.querySelector('.header__nav-button_opened');
  if (!openedMenu || evt.target.closest('.header__nav-button')) return;
  openedMenu.classList.remove('header__nav-button_opened');
  headerModal.classList.remove('header-modal_opened');
}

const toggleInnerMenu = (evt) => {
  const button = evt.target.closest('.header__nav-button');
  if (!button) return;

  const innerMenu = evt.target.closest('.header__main-item').querySelector('.header__item-inner');
  
  if (innerMenu && !innerMenu.classList.contains('header__item-inner_opened')) {
    innerMenu.classList.add('header__item-inner_opened');
    button.classList.add('header__nav-button_opened');
  } else {
    innerMenu.classList.remove('header__item-inner_opened');
    button.classList.remove('header__nav-button_opened');
  }
}

const openMobileMenu = () => {
  header.classList.add('header_opened');
  body.classList.add('scroll-disabled');
}

const closeMobileMenu = () => {
  const innerMenuList = header.querySelectorAll('.header__item-inner_opened');

  if (innerMenuList.length) {
    innerMenuList.forEach(item => {
      item.classList.remove('header__item-inner_opened');
    })
  }

  header.classList.remove('header_opened');
  body.classList.remove('scroll-disabled');
}

headerMenuList.addEventListener('click', clickHeaderMenu);
headerMenuListMobile.addEventListener('click', toggleInnerMenu);
document.addEventListener('click', closeHeaderMenuOverlay);
burgerButton.addEventListener('click', openMobileMenu);
crossButton.addEventListener('click', closeMobileMenu);
