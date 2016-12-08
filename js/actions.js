$(document).ready(function(){
    // Alerts
    $(".alert-close").click(function(){
        // Pretty much hide the alert with a nice animation
        $(this).parent().fadeOut();
    });

    // Accordion
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt').click(function() {
      if ($(this).next().is(':hidden')) {
        // Show the one you clicked
        $(this).next().show();
        // Hide the rest of them
        $('.accordion > dd').not($(this).next()).hide();
      }
      else {
        $(this).next().hide();
      }
    });

    // Expanding menu
    $('.nav-trigger').click(function(){
      $('nav.nav-expand .nav-ul').slideToggle(300,function(){
        $(this).toggleClass("show").css('display','');
      });
    });

    $('.parent').click(function(){
      // Apply only if in mobile/tablet screen size
      // Otherwise clicking normal nav will add the class .show-child
      if($(window).width() <= 768){
        // use .find() to select this + .class
        $(this).find('.child').slideToggle(300,function(){
          $(this).toggleClass("show-child").css('display','');
        });
      }
    });

    // Use window width to determine whether or not to remove the .show-child
    function checkWidth() {
        if ($(window).width() > 768) {
            $('.parent .child').removeClass('show-child');
        }
    }
    // Keep an eye on the window width and pass to function checkWidth()
    $(window).resize(checkWidth);

});
