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

});
