$(function () {


let counter = 0;
$("#poster").hide();
$("#logos").hide()
$("#posters").on("click", ()=> {

for (var i = 1; i < 7; i++) {
  $(".p"+ [i]).attr("src", "img/p" + [i] + ".jpg");
}

  $("#me").hide();
  $("#logos").hide()
  $("#poster").show();
  if($(document).width() <= 650) {$(".menu").hide(); counter=0;
  $("body").css({"height":"", 'overflow-y':'', 'position':''})
  }
})

$("#mee").on("click", ()=> {

  $("#me").show();
  $("#poster").hide();
  $("#logos").hide()
  if($(document).width() <= 650) {$(".menu").hide(); counter=0;
  $("body").css({"height":"", 'overflow-y':'', 'position':''})
  }
})

$("#logo").on("click", ()=> {

  for (var i = 1; i < 4; i++) {
  $(".l"+ [i]).attr("src", "img/l" + [i] + ".jpg");
  }

  $("#me").hide();
  $("#poster").hide();
  $("#logos").show()
  if($(document).width() <= 650) {$(".menu").hide(); counter=0;
  $("body").css({"height":"", 'overflow-y':'', 'position':''})
  }
})

if($(document).width() <= 650) {

  $("#menu").on('click', ()=> {
  if(counter == 0) {
  $("body").css({"height":"100vh", 'overflow-y':'hidden', 'position':'absolute'})
  $(".menu").css({'display':'flex', })
  counter++;
  } else {
  $(".menu").css({'display': 'none',})
  $("body").css({"height":"", 'overflow-y':'', 'position':''})
  counter = 0;
  }})

}


})
