// flash sales
$(document).ready(function () {
  $(".flash_cart").slick({
    // setting-name: setting-value
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".previous",
    nextArrow: ".next",
  });
});

// Browse by catagory
$(document).ready(function () {
  $(".catagoryCard").slick({
    // setting-name: setting-value
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".Cprevious",
    nextArrow: ".Cnext",
  });
});

// explore our products
$(document).ready(function () {
  $(".explore").slick({
    // setting-name: setting-value
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".Eprevious",
    nextArrow: ".Enext",
  });
});
