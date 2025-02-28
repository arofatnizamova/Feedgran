$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('banner')) {
      extraOptions = {
        slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
          dots: false,
        responsive: [
          
  ] 
      }
    } else if (slider.hasClass('items')){
      extraOptions = {
        slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoPlay: true,
          dots: false,
          responsive: [
            {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
            },
            {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
            },
    ] 
    }} else if (slider.hasClass('partners')){
      extraOptions = {
        slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoPlay: true,
          dots: false,
          responsive: [
            {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
            },
            {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
            },
    ] 
    }}
    slider.slick($.extend({}, extraOptions, options ));
  })
})