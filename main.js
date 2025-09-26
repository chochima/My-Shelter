import './assets/scss/all.scss';
import './assets/js/swiper-init.js';

console.log('Hello world');



//輪播套件
// 引入 Swiper (含所有模組)
import Swiper from 'swiper/bundle';
// 引入樣式
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

