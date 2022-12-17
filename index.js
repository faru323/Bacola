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