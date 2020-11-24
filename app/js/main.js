$(function() {

  $('.top-slider__inner').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
  });

  var mixer = mixitup('.products__items');
  var mixer2 = mixitup('.category');

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });


});

