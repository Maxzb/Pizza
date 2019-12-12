$(document).ready(function(){
   $("#carousel1").owlCarousel({
      items:1,
      margin:160,
      loop:true,
      nav:true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 500,
      responsive:{
         0:{
            nav: false
         },
         1000:{

         }
      }
   });
   $("#carousel2").owlCarousel({
      items:3,
      margin:10,
      loop:false,
      nav:true,
      navText: ["<div class='pizza-block-nav pizza-block-nav-left'><i class='fas fa-chevron-left pizza-block-nav__arrow-left'></i></div>", "<div class='pizza-block-nav pizza-block-nav-right'><i class='fas fa-chevron-right pizza-block-nav__arrow-right'></div>"],
      navClass: ["pizza-block-nav__arrow-left", "pizza-block-nav__arrow-right"],
      navSpeed: 500,
      responsive:{
         768:{
             items:2
         },
         1000:{
         
         }
      }
   });
   $("#carousel3").owlCarousel({
      items:4,
      margin:50,
      nav:true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 300,
      responsive:{
         0:{
            items:1
         },
         414:{
            items:2
         },
         768:{
            items:2,
            margin:90
         },
         1000:{
            items:3
         },
         1200:{

         }
      }
   });
   $("#carousel4").owlCarousel({
      items:3,
      margin:10,
      nav:true,
      loop: true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 300,
      center: true,
      responsive:{
         768:{
             items:3,
             center: false,
             margin:0
         },
         1000:{

         }
      }
   });

   /* Маска для телефона */
   $(function(){
      $("#phone").mask('+7 (999) 999-9999', {autoclear: false});
    });

    /* Стилизация Скроллбара */
    $(".inner-block__order-list").mCustomScrollbar({
  });
 });

 //ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ К ЯКОРЯМ

$(document).ready(function(){
   $('.header-block__nav, .nav__list--footer-column').on("click","a", function (event) {
       //отменяем стандартную обработку нажатия по ссылке
       event.preventDefault();
       //забираем идентификатор с атрибута href
       var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
       top = $(id).position().top;
       //анимируем переход на расстояние
       $('body,html').animate({scrollTop: top}, 1000);
   });
});

//МОБИЛЬНОЕ МЕНЮ
$(function(){
   $('.hamburger').on('click', function(){
      $('.mob-menu').slideToggle();
      $('.mob-menu').toggleClass('display');
      $('html, body').toggleClass('scroll');
   });
});
$(function(){
   $('.nav__item-mob').on('click', function(){
      $('.mob-menu').slideToggle();
      $('html, body').removeClass('scroll');
      $('.hamburger').removeClass('is-active');
      $('.mob-menu').toggleClass('display');
   });
});
 

 