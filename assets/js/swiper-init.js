//輪播套件
// 引入 Swiper (含所有模組)
import Swiper from 'swiper/bundle';
// 引入樣式
import 'swiper/css/bundle';


//基礎預設

document.addEventListener("DOMContentLoaded", () => {
  // 第一個 Swiper：一次顯示 3 個 slide
  new Swiper('.css-mode-3slides', {
    
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: '.css-mode-3slides .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.css-mode-3slides .swiper-button-next',
      prevEl: '.css-mode-3slides .swiper-button-prev',

    },

    breakpoints: {
      320: { // 手機
        slidesPerView: 1.3,
        spaceBetween: 24, 
      },  

      // >= 576px 顯示 3 張
      576: { 
        slidesPerView: 3,
        spaceBetween: 16
      },   
    }
  });

  // 第二個 Swiper：一次顯示 2 個 slide
  new Swiper('.css-mode-2slides', {
  slidesPerView: 2.48,
    spaceBetween: 24,
    pagination: {
      el: '.css-mode-2slides .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.css-mode-2slides .swiper-button-next',
      prevEl: '.css-mode-2slides .swiper-button-prev',
    },

    breakpoints: {
      320: { // 手機
        slidesPerView: 1.3, 
        spaceBetween: 16 
      },  

      576: { // >= 576px 顯示 3 張
        slidesPerView: 2.48, 
        spaceBetween: 16 
      },   
    }
  });


  // Freemode Swiper：自由顯示 slide
  new Swiper('.css-mode-1slides', {
    
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.css-mode-1slides .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.css-mode-1slides .swiper-button-next',
      prevEl: '.css-mode-1slides .swiper-button-prev',

    },

    breakpoints: {
      320: { // 手機
        slidesPerView: 1, 
        spaceBetween: 0 
      },  

      576: { // >= 576px 顯示 3 張
        slidesPerView: 1, 
        spaceBetween: 0 
      },   
    }
  });
});
