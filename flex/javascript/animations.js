$(document).ready(function(){
  $("div.boxtext").hover(function(){
    $(this).fadeOut(2000);
  })
})

function refresh(){
  $("div.boxtext").fadeIn(2000);
}

function moveUp(){
  $('.boxtext').css({ translate: [60,30] });
}
