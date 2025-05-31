const body = document.querySelector('.body');
const header = body.querySelector('.header');
const headerMenuList = header.querySelector('.header__main-list_desktop');
const headerMenuListMobile = header.querySelector('.header__main-list_mobile');
const headerModal = body.querySelector('.header-modal');
const burgerButton = header.querySelector('.header__mobile-button_type_burger');
const crossButton = header.querySelector('.header__mobile-button_type_close');
const searchButton = header.querySelector('.header__button_search');
const closeEearchButton = header.querySelector('.header__button_close-search');
const searchModal = body.querySelector('.search-modal');
const headerButtonList = header.querySelector('.header__button-list');
const tabList = body.querySelector('.coops__tabs');
const questionList = body.querySelector('.questions__list');

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
  if (evt.target.closest('.header-modal__container')) return;
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

const openSearch = () => {
  searchModal.classList.add('search-modal_opened');
  headerButtonList.classList.add('header__button-list_opened-search');
}

const closeSearch = () => {
  searchModal.classList.remove('search-modal_opened');
  headerButtonList.classList.remove('header__button-list_opened-search');
}

const closeSearchOverlay = (evt) => {
  if (evt.target.closest('.search-modal__container') || evt.target.closest('.header__button_search')) return;
  searchModal.classList.remove('search-modal_opened');
  headerButtonList.classList.remove('header__button-list_opened-search');
}

const setTab = (evt) => {
  const tab = evt.target.closest('.coops__tab-button');

  if (tab && !tab.classList.contains('coops__tab-button_active')) {
    const activeTab = tabList.querySelector('.coops__tab-button_active');
    activeTab.classList.remove('coops__tab-button_active');
    tab.classList.add('coops__tab-button_active');
  }
}

const toggleQuestion = (evt) => {
  const button = evt.target.closest('.questions__button');

  if (button) {
    button.classList.toggle('questions__button_opened');
  }
}

headerMenuList.addEventListener('click', clickHeaderMenu);
headerMenuListMobile.addEventListener('click', toggleInnerMenu);
document.addEventListener('click', closeHeaderMenuOverlay);
burgerButton.addEventListener('click', openMobileMenu);
crossButton.addEventListener('click', closeMobileMenu);
searchButton.addEventListener('click', openSearch);
closeEearchButton.addEventListener('click', closeSearch);
document.addEventListener('click', closeSearchOverlay);
tabList.addEventListener('click', setTab);
questionList.addEventListener('click', toggleQuestion);
