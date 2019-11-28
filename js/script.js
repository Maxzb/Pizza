$(document).ready(function(){
   $("#carousel1").owlCarousel({
      items:1,
      margin:160,
      loop:true,
      nav:true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 500
   });
   $("#carousel2").owlCarousel({
      items:3,
      margin:10,
      loop:false,
      nav:true,
      navText: ["<div class='pizza-block-nav pizza-block-nav-left'><i class='fas fa-chevron-left pizza-block-nav__arrow-left'></i></div>", "<div class='pizza-block-nav pizza-block-nav-right'><i class='fas fa-chevron-right pizza-block-nav__arrow-right'></div>"],
      navClass: ["pizza-block-nav__arrow-left", "pizza-block-nav__arrow-right"],
      navSpeed: 500
   });
   $("#carousel3").owlCarousel({
      items:4,
      margin:25,
      nav:true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 300
   });
   $("#carousel4").owlCarousel({
      items:3,
      margin:10,
      nav:true,
      loop: true,
      navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
      navClass: ["owl-prev", "owl-next"],
      navSpeed: 300,
      center: true
   });

   /* Маска для телефона */
   $(function(){
      $("#phone").mask("8(999) 999-9999");
    });

    /* Стилизация Скроллбара */
    $(".inner-block__order-list").mCustomScrollbar({
  });
 });

 //ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ К ЯКОРЯМ

/*  function slowScroll(id) {
   var offset = 0;
   $('html, body').animate({
      scrollTop: $(id).offset().top - offset
   }, 1000);
   return false;
} */


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
 

 