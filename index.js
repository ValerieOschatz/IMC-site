const headerMenuButtons = document.querySelectorAll('.header__nav-button');
const headerModal = document.querySelector('.header-modal');

const openHeaderMenu = (evt) => {
  evt.stopPropagation();
  headerModal.classList.add('header-modal_opened');

  if (evt.target.classList.contains('header__nav-button') && !evt.target.classList.contains('header__nav-button_opened')) {
    headerMenuButtons.forEach(item => {
      item.classList.remove('header__nav-button_opened');
    })

    evt.target.classList.add('header__nav-button_opened');
  }

  if (evt.target.closest('.header__nav-button') && !evt.target.closest('.header__nav-button').classList.contains('header__nav-button_opened')) {
    headerMenuButtons.forEach(item => {
      item.classList.remove('header__nav-button_opened');
    })

    evt.target.closest('.header__nav-button').classList.add('header__nav-button_opened');
  }
}

const closeHeaderMenu = (evt) => {
  evt.stopPropagation();

  headerMenuButtons.forEach(item => {
    item.classList.remove('header__nav-button_opened');
  })

  if (evt.target.classList.contains('header__nav-button')) {
    evt.target.classList.add('header__nav-button_opened');
    return;
  }

  headerModal.classList.remove('header-modal_opened');
}

document.addEventListener('click', closeHeaderMenu);

headerMenuButtons.forEach(item => {
  item.addEventListener('click', openHeaderMenu);
})
