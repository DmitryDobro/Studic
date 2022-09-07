import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.header-navbar-conteiner', {
    modules: [Navigation, Pagination],
    loop: false,
    slidesPerView: 'auto',
    slidesPerGroup:2,
    simulateTouch:false,
    watchOverflow:true,
    keyboard: {
      enabled:true,
      onlyInViewport:true,
      pageUpDown:true

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  let ul = document.querySelector('.header-navbar_list')
  let btnNext = document.querySelector('.swiper-button-next')
  ul.addEventListener("transitionrun", () =>{  // функция чтобы убирать размытие с краю списка в шапке
    if(btnNext.classList.contains('swiper-button-disabled')){
        ul.classList.add('relative')
    }else{
        ul.classList.remove('relative')
    }
  })


  const slider = new Swiper('.mobile-block',{
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  

