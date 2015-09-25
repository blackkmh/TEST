
$(document).ready(function(){

  var $li = $("#trunk8_test li.tr_0");
  var $div_left = $("#trunk8_test li.tr_0 div.div_left");
  var $div_right = $("#trunk8_test li.tr_0 div.div_right");

  var li_w = $li.width();
  var div_right_w = 200;
  var div_left_w = li_w - div_right_w;

  $div_left.width(div_left_w);
  $div_right.width(div_right_w);

  console.log("li_w : " + li_w);
  console.log("div_right_w : " + div_right_w);
  console.log("div_left_w : " + div_left_w);

  $('.aaa').trunk8();


})

$(window).resize(function (event) {
  var $li = $("#trunk8_test li.tr_0");
  var $div_left = $("#trunk8_test li.tr_0 div.div_left");
  var $div_right = $("#trunk8_test li.tr_0 div.div_right");

  var li_w = $li.width();
  var div_right_w = 200;
  var div_left_w = li_w - div_right_w;

  $div_left.width(div_left_w);
  $div_right.width(div_right_w);

  $('.aaa').trunk8();

});
