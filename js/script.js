//$(document).foundation();
var isSpecialCase = false;

if ($(".slide").size() == 1) {
    $(".slide").first().clone().insertAfter($(".slide").last());
    $(".slide").first().clone().insertBefore($(".slide").first());
} else if ($(".slide").size() == 2) {
    isSpecialCase = true;
    $(".slide").last().clone().insertBefore($(".slide").first());
} else if ($(".slide").size() > 2) {
    $(".slide").last().insertBefore($(".slide").first());
}

var mimages_container_width_percentage = $(".slide").size() * 100 + '%';
$(".mimages_container").css({
    width: mimages_container_width_percentage
});

var slide_width_percentage = 100 / $(".slide").size() + '%';
$(".slide").css({
    width: slide_width_percentage
});


$('.Previous').click(function() {
    $(".mimages_container").animate({
        left: '100%'
    }, {
        complete: function() {
            if (isSpecialCase) {
                $(".slide").last().remove();
                $(".slide").last().clone().insertBefore($(".slide").first());
            } else {
                $(".slide").last().insertBefore($(".slide").first());
            }
            $(".mimages_container").css({
                left: '0%'
            });
        }
    });
});

$('.Next').click(function() {
    $(".mimages_container").animate({
        left: '-100%'
    }, {
        complete: function() {
            if (isSpecialCase) {
                $(".slide").first().remove();
                $(".slide").first().clone().insertAfter($(".slide").last());
            } else {
                $(".slide").first().insertAfter($(".slide").last());
            }
            $(".mimages_container").css({
                left: '0%'
            });
        }
    });
});
/*
$(".images_container").css({
width: $(".images_container").size() * 100
});


//var heading = document.querySelector(".myheading");

var heading = jQuery('.myheading');

//$('.myheading').click(function(){alert('clicked');});

var selectedColor = "";

$('.colorSelection').click(function(){
  selectedColor = $(this).attr('data-color');
  console.log($(this).attr('data-color'));
});

$(document).ready(function(){


  $('.mBox').click(function(){
    $(this).css({'background-color':selectedColor});
  });

  $('ul li').click(function () {
      console.console.log(this);
      $(this).css({'background-color':'red'});
  })

  $('.mainHeaderInput').keyup(function (evt) {
    $('.mainHeader').text($(this).val());
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    console.log(charStr);
  })


  heading.text('test');

  heading.css({'background-color':'red'});
  //OR
  //heading.addClass('highlight');
  //heading.rempveClass('highlight');

  var user = {
    name:"jhonny",
    testFunc: function(){
      return this.name;
    }
  }

  console.log(heading.text());


});*/
