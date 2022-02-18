window.addEventListener('DOMContentLoaded', () => {
  // * ===== Sliderы
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      slidesPerView: 'auto',
      spaceBetween: 17,
    });
  })();

  (function sliderHero() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
      menuBtn.classList.toggle('active');
    });
  })();

  //* Close menu after click on Links
  (function closeMenuAfterClickLink() {
    const menuLinks = document.querySelectorAll('.menu__link');
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.header__toggle');
    menuLinks.forEach((ml) =>
      ml.addEventListener('click', (e) => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('no-scroll');
      })
    );
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 10) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  (function changeBgHeader() {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 10) {
      header.classList.add('scroll-header');
    }
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }

            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });

        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });

        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-call', '.popup--call', '.popup__close');
    bindModal('.btn-consultation', '.popup--consultation', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (header) {
      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs__btn', '.tabs__content', 'tabs__btn--active');
});
