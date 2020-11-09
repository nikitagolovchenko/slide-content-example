$(document).ready(function() {
  var swipe = $('#swipe')
  var left = $('#left');
  var right = $('#right');

  swipe.on('dragstart', function() {
    return false;
  });


  swipe.on('mousedown', function(e) {
    moveAt(e.pageX);

    $(document).on('mouseup', onUp)

    $(document).on('mousemove', swipeMove);
  })


  function onUp(e) {
    $(document).off('mousemove', swipeMove);
  }

  function swipeMove(e) {
    moveAt(e.pageX);
  }

  function moveAt(pageX) {
    var start = 0;
    var end = Math.round($(window).width());
    var center = Math.round($(window).width() / 2);
    var curr = 0;
    curr = Math.round((center - pageX) * 100 / center);

    var position = Math.round((100 - curr) / 100 * 50);
    
    if (pageX < center) {
      $('body').removeClass('active-right');
      $('body').addClass('active-left');
      
    } else {

      $('body').removeClass('active-left');
      $('body').addClass('active-right');
    }

    if (position < 40 || position > 60) {
      $('body').addClass('hide-default');
    } else {
      $('body').removeClass('hide-default');
    }

    if (position < 10 || position > 90) {
      $('body').addClass('show-content');
    } else {
      $('body').removeClass('show-content');
    }

    $('html').css('--position', position+'%');
    $('html').css('--percent', Math.abs(curr) / 100);
   
    swipe.css({
      'left': pageX + 'px',
    })
  }
})