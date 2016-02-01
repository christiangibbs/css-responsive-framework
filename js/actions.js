$(document).ready(function(){
    // Alerts
    $(".alert-close").click(function(){
        $(this).parent().fadeOut();
    });

    // Accordion
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt').click(function() {
      if ($(this).next().is(':hidden')) {
        $(this).next().slideDown();
        $('.accordion > dd').not($(this).next()).slideUp();
      }
      else {
        $(this).next().slideUp();
      }
    });

    // Expanding menu
    $('.nav-trigger').click(function(){
      $('nav.nav-expand .nav-ul').slideToggle(300,function(){
        $(this).toggleClass("show").css('display','');
      });
    });

    $('.parent').click(function(){
      if($(window).width() <= 768){
        $('.parent .child').slideToggle(300,function(){
          $(this).toggleClass("show-child").css('display','');
        });
      }
    });
});
