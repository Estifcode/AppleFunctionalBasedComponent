


// import $ from "jquery";

// let flink = $("h3");

// let flul = $("#ul1");
// $("#shop").click(function(){
//     flul.slideToggle()
// });
// let servUl = $("#ul2");
// $("#services").click(function(){
//     servUl.slideToggle()
// });

// let apUl = $("#ul3");
// $("#appleS").click(function(){
//     apUl.slideToggle()
// });

// let buUl = $("#ul4");
// $("#business").click(function(){
//     buUl.slideToggle()
// });

// let edUl = $("#ul5");
// $("#edu").click(function(){
//     edUl.slideToggle()
// });

// let heUl = $("#ul6");
// $("#hel").click(function(){
//     heUl.slideToggle()
// });

// let govUl = $("#ul7");
// $("#gov").click(function(){
//     govUl.slideToggle()
// });
// let apVal = $("#ul8");
// $("#appVal").click(function(){
//     apVal.slideToggle()
// });

// let abt = $("#ul9");
// $("#abt").click(function(){
//     abt.slideToggle()
// });
// let acUl = $("#ac");
// $("#acc").click(function(){
//     acUl.slideToggle()
// });

// let nav = $("#nav");
// $("#navbar-toggler").click(function(){
//     nav.show()
// });

// // let shop = $("#shop");
// // shop.appendchild("#");
// // console.log(shop.text());

// // let fff = $(".footer-links-wrapper");
// // console.log(fff.)

// $(document).on("click", ".someClass h3", function(){
//     $(this).next('ul').slideToggle();
//     $(this).toggleClass("expanded");
    
// });


import $ from "jquery";

if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("someClass");
} else {
  $(".footer-links-wrapper").removeClass("someClass");
}
$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
    $(".footer-links-wrapper ul").show();
  }
});

// Footer collapse functionality
$(document).on("click", ".someClass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("change");
});
