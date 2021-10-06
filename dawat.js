var myNav = $("#forScroll");
var brandImage = $("#brandImage");

$(window).on("scroll", function () {
  "use strict";
  if ($(window).scrollTop() >= 280) {
    brandImage.addClass("newLogo");
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
    brandImage.removeClass("newLogo");
  }
});
