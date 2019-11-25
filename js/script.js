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
 });
 $(document).ready(function(){
   $("#carousel2").owlCarousel({
      items:3,
      margin:10,
      loop:false,
      nav:true,
      navText: ["<div class='pizza-block-nav pizza-block-nav-left'><i class='fas fa-chevron-left pizza-block-nav__arrow-left'></i></div>", "<div class='pizza-block-nav pizza-block-nav-right'><i class='fas fa-chevron-right pizza-block-nav__arrow-right'></div>"],
      navClass: ["pizza-block-nav__arrow-left", "pizza-block-nav__arrow-right"],
      navSpeed: 500/* ,
      dots: true */
   });
 });