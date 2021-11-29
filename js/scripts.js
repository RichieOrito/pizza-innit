$(".btn-pepperonni").click(function(e){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $("li:contains('pepperonni')").toggle();
  calcPrice();
});

$(".btn-mushrooms").click(function(e){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $("li:contains('mushrooms')").toggle();
  calcPrice();
});

$(".btn-green-peppers").click(function(e){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $("li:contains('green peppers')").toggle();
  calcPrice();
});

$(".btn-glutten-free").click(function(e){
  $(this).toggleClass('active');
  $('.glutten').toggle();
  $("li:contains('glutten free')").toggle();
  calcPrice();
});

$(".btn-crispy").click(function(e){
  $(this).toggleClass('active');
  $('.crisp').toggle();
  $("li:contains('crispy')").toggle();
  calcPrice();
});

$(".btn-stuffed").click(function(e){
  $(this).toggleClass('active');
  $('.stuff').toggle();
  $("li:contains('stuffed')").toggle();
  calcPrice();
});

function calcPrice(){
  var totalPrice=600;

  if ($('.btn-pepperonni').hasClass('active')) {
    totalPrice += 200;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice += 200;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    totalPrice += 200;
  }
  if ($('.btn-glutten-free').hasClass('active')) {
    totalPrice += 100;
  }
  if ($('.btn-crispy').hasClass('active')) {
    totalPrice += 100;
  }
  if ($('.btn-stuffed').hasClass('active')) {
    totalPrice += 100;
  }

  $('#totalPrice').html(totalPrice);
}

// medium

$(".btn-pepperonni-md").click(function(e){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $("li:contains('pepperonni')").toggle();
  calcPriceMd();
});

$(".btn-mushrooms-md").click(function(e){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $("li:contains('mushrooms')").toggle();
  calcPriceMd();
});

$(".btn-green-peppers-md").click(function(e){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $("li:contains('green peppers')").toggle();
  calcPriceMd();
});

$(".btn-glutten-free-md").click(function(e){
  $(this).toggleClass('active');
  $('.glutten').toggle();
  $("li:contains('glutten free')").toggle();
  calcPriceMd();
});

$(".btn-crispy-md").click(function(e){
  $(this).toggleClass('active');
  $('.crisp').toggle();
  $("li:contains('crispy')").toggle();
  calcPriceMd();
});

$(".btn-stuffed-md").click(function(e){
  $(this).toggleClass('active');
  $('.stuff').toggle();
  $("li:contains('stuffed')").toggle();
  calcPriceMd();
});

function calcPriceMd(){
  var totalPriceMd=800;

  if ($('.btn-pepperonni-md').hasClass('active')) {
    totalPriceMd += 200;
  }
  if ($('.btn-mushrooms-md').hasClass('active')) {
    totalPriceMd += 200;
  }
  if ($('.btn-green-peppers-md').hasClass('active')) {
    totalPriceMd += 200;
  }
  if ($('.btn-glutten-free-md').hasClass('active')) {
    totalPriceMd += 100;
  }
  if ($('.btn-crispy-md').hasClass('active')) {
    totalPriceMd += 100;
  }
  if ($('.btn-stuffed-md').hasClass('active')) {
    totalPriceMd += 100;
  }

  $('#totalPriceMd').html(totalPriceMd);
}

// large

$(".btn-pepperonni-lg").click(function(e){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $("li:contains('pepperonni')").toggle();
  calcPriceLg();
});

$(".btn-mushrooms-lg").click(function(e){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $("li:contains('mushrooms')").toggle();
  calcPriceLg();
});

$(".btn-green-peppers-lg").click(function(e){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $("li:contains('green peppers')").toggle();
  calcPriceLg();
});

$(".btn-glutten-free-lg").click(function(e){
  $(this).toggleClass('active');
  $('.glutten').toggle();
  $("li:contains('glutten free')").toggle();
  calcPriceLg();
});

$(".btn-crispy-lg").click(function(e){
  $(this).toggleClass('active');
  $('.crisp').toggle();
  $("li:contains('crispy')").toggle();
  calcPriceLg();
});

$(".btn-stuffed-lg").click(function(e){
  $(this).toggleClass('active');
  $('.stuff').toggle();
  $("li:contains('stuffed')").toggle();
  calcPriceLg();
});

function calcPriceLg(){
  var totalPriceLg=1000;

  if ($('.btn-pepperonni-lg').hasClass('active')) {
    totalPriceLg += 200;
  }
  if ($('.btn-mushrooms-lg').hasClass('active')) {
    totalPriceLg += 200;
  }
  if ($('.btn-green-peppers-lg').hasClass('active')) {
    totalPriceLg += 200;
  }
  if ($('.btn-glutten-free-lg').hasClass('active')) {
    totalPriceLg += 100;
  }
  if ($('.btn-crispy-lg').hasClass('active')) {
    totalPriceLg += 100;
  }
  if ($('.btn-stuffed-lg').hasClass('active')) {
    totalPriceLg += 100;
  }

  $('#totalPriceLg').html(totalPriceLg);
}