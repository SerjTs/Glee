$(function() {


  $('.product-page__input').styler();


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

  $('.product-slide__thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slide__big',
    // centerMode: true,
    dots: false,
    focusOnSelect: true,
    vertical: true
  });
  $('.product-slide__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slide__thumb'
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

