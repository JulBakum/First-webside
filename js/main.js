
$(function(){
$(window).scroll(function() {
     $('.time').each(function(){
          var imagePos = $(this).offset().top;

          var top0fWindow = $(window).scrollTop();
          if (imagePos < top0fWindow+650) {
               $(this).addClass('fadeInLeft');
          }

     });
});
$(window).scroll(function() {
     $('.travel').each(function(){
          var imagePos = $(this).offset().top;

          var top0fWindow = $(window).scrollTop();
          if (imagePos < top0fWindow+650) {
               $(this).addClass('fadeInUp');
          }

     });
});
$(window).scroll(function() {
     $('.value').each(function(){
          var imagePos = $(this).offset().top;

          var top0fWindow = $(window).scrollTop();
          if (imagePos < top0fWindow+650) {
               $(this).addClass('fadeInRight');
          }

     });
});

});