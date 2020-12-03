$(function() {

  $(".star").rateYo({
    
  });

  $(".js-range-slider").ionRangeSlider({
    onStart: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    },
  });

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

