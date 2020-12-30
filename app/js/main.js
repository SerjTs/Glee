$(function() {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });


  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item--active').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


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
  $('.product-related__content').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-next" type="button"></>',
    nextArrow: '<button class="slick-prev" type="button"></>',
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

