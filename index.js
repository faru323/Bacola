let categoryBtn = document.getElementById("categoryBtn");

$("#categoryBtn").click(function () {
  $("#active").classlist.toggle("slow");
});

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})