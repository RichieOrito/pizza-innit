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
  $('.glutten-free').toggle();
  $("li:contains('glutten free')").toggle();
  calcPrice();
});

$(".btn-crispy").click(function(e){
  $(this).toggleClass('active');
  $('.crispy').toggle();
  $("li:contains('crispy')").toggle();
  calcPrice();
});

$(".btn-stuffed").click(function(e){
  $(this).toggleClass('active');
  $('.stuffed').toggle();
  $("li:contains('stuffed')").toggle();
  calcPrice();
});

function calcPrice(){
  var totalPrice=600;

  if ($('.btn-pepperoni').hasClass('active')) {
    totalPrice +=200;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice+=200;
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

};
  
  
  



