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
    } 
    slider.slick($.extend({}, extraOptions, options ));
  })
})