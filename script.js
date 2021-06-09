 
ScrollReveal().reveal('.item .area-quem-somos, .icones-valores-pag-quem, .pag-quem-inscreva h1, .pag-quem-experiencia h6, .check-indicada a ', {
     duration: 1000, distance: '100px',   opacity: 0 ,  
    reset: true
});

$(document).ready(function(){
    $('span.placeholder').click(function(){
        $('span.placeholder').fadeOut();
        $('span.placeholder').delay(1000);
    $('span.placeholder').css("display", "none");

    });
});
 
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numeros-experencinas-mais h1")) && !viewed) {
      viewed = true;
      $('.numeros-experencinas-mais h1').each(function () {
      $(this).prop('Counter',-1).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}


 