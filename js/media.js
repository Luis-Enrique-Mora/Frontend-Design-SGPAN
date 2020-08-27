var swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.5,
        slidesPerColumn: 2,
        spaceBetween: 20,
      }
    }
     
  });