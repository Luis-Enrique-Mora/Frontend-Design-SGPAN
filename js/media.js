/*video gallery*/
var swiper = new Swiper('.s2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },

    800: {
      slidesPerView: 4,
    }
  }

  
});
/*Endo of video gallery*/


/*images gallery*/
var swiper = new Swiper('.s1', {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    zoom: {
      maxRatio: 5
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
/*End images gallery*/