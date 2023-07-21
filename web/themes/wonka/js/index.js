$().ready(function(){
  $('.js-slider .slick-carousel').slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: true,
  autoplay: true,
    autoplaySpeed:1000
  });

  $('.slick-dots li').on('mouseover', function() {
      $(this).parents('.slick-carousel').slick('goTo', $(this).index());
  });
  $("#block-wonka-header .navbar-toggler").click(function(event) {
      event.preventDefault();
      $(".overlay").toggleClass("open");
      $(".menu").toggleClass("open");
      // $(".hamburger-icon").css("right","15px");
  });
  $('.graphics .slick-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 4,
      infinite: false,
      slideToScroll:1,
    //   autoplay: true,
      autoplaySpeed:800
    });      
});
