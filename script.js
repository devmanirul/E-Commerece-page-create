// flash sales
$(document).ready(function () {
  $(".flash_card").slick({
    // setting-name: setting-value
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".previous1",
    nextArrow: ".next1",
  });
});

// flash responsive
$(document).ready(function () {
  $(".responsive_cart").slick({
    // setting-name: setting-value
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev",
    nextArrow: ".back",
  });
});

// Browse by catagory
$(document).ready(function () {
  $(".bbcatagoryCard").slick({
    // setting-name: setting-value
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".previous",
    nextArrow: ".next",
  });
});
// responsive Browse by catagory
$(document).ready(function () {
  $(".catagoryCard").slick({
    // setting-name: setting-value
    slidesToShow: 1,
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
// responsive explore our products
$(document).ready(function () {
  $(".explorea_responsive").slick({
    // setting-name: setting-value
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".Eprev",
    nextArrow: ".Eback",
  });
});
