//輪播套件
// 引入 Swiper (含所有模組)
import Swiper from 'swiper/bundle';
// 引入樣式
import 'swiper/css/bundle';
import '../css/navigation.css';
import '../css/pagination.css';


//基礎預設

document.addEventListener("DOMContentLoaded", () => {
  //Swiper：一次顯示 3 個 slide
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

    loop: true,
    autoplay: {
    delay: 3500,            // 每 2.5 秒切換
    disableOnInteraction: false, // 用戶操作後繼續自動輪播
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
    },

    on: {
    init: function() {
      //AOS.refresh(); // Swiper 準備好後 refresh AOS
    }
  }
    
  });

  //Swiper：一次顯示 2 個 slide
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

    loop: true,
    autoplay: {
    delay: 3500,            // 每 2.5 秒切換
    disableOnInteraction: false, // 用戶操作後繼續自動輪播
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
    },

    on: {
    init: function() {
      AOS.refresh(); // Swiper 準備好後 refresh AOS
    }
  }
  });


  //Swiper：一次顯示 1 個 slide
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
    },

    
    on: {
    init: function() {
      AOS.refresh(); // Swiper 準備好後 refresh AOS
    }
  }
  });



  //Swiper：寶貝/機構詳情 slide (下半部)
  const thumbsSwiper = new Swiper('.thumbs-slides', {
    loop: true,
    autoplay: {
    delay: 2500,            // 每 2.5 秒切換
    disableOnInteraction: false, // 用戶操作後繼續自動輪播
    },


    slidesPerView: 3.75,
    spaceBetween: 16,

    navigation: {
    nextEl: '.thumbs-main-slides .swiper-button-next',
    prevEl: '.thumbs-main-slides .swiper-button-prev',
    },

    pagination: {
    el: '.thumbs-main-slides .swiper-pagination',
    clickable: true,
    },

    // 必要，讓主 Swiper 可以知道縮圖狀態
    watchSlidesProgress: true, 

    breakpoints: {
      320: { // 手機
        slidesPerView: 3.75, 
        spaceBetween: 16 
      },  

      576: { // >= 576px 顯示 4.75 張
        slidesPerView: 4.75, 
        spaceBetween: 16 
      },   
    },

    
    
  });


  //Swiper：寶貝/機構詳情 slide (上半部-主圖)
  const mainSwiper = new Swiper('.thumbs-main-slides', {
    spaceBetween: 0,

    thumbs: {
    swiper: thumbsSwiper // 綁定縮圖
    },

    loop: true,
    autoplay: {
    delay: 2500,            // 每 2.5 秒切換
    disableOnInteraction: false, // 用戶操作後繼續自動輪播
    }
  });


  







});
