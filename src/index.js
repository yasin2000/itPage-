import './scss/index.scss';
import 'bootstrap/js/src/tooltip'
// import 'jquery';
import './jquery.custom-scrollbar';
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 1000, function(){

//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});
$('.inside-link:nth-child(2)').click(() => {
  $('.main-soft:nth-child(1)').removeClass('slideInRight');
  $('.main-soft:nth-child(1)').addClass('slideOutLeft');
  setTimeout(() => {
    $('.main-soft:nth-child(1)').css('display' , 'none');
    $('.content').css('display' , 'block');
    $('.content').removeClass('slideOutLeft');
    $('.content').addClass('slideInRight');
    if($(".content").css("display") == "block"){
        $(".content").customScrollbar();
    }
  }, 100);
});

  $('.inside-link:nth-child(1)').click(function(){
    if($('.main-soft:nth-child(1)').css("display") == "none"){
    $('.content').removeClass('slideInRight')
    $('.content').addClass('slideOutLeft');
    setTimeout(() => {
      $('.content').css('display' , 'none');
      $('.main-soft:nth-child(1)').css('display' , 'block');
      $('.main-soft:nth-child(1)').removeClass('slideOutLeft');
      $('.main-soft:nth-child(1)').addClass('slideInRight');
    }, 100);
  }
  });

// var selectedBox;
// $( ".main-soft" ).each(function() {
//   if($(this).css('display') == 'block'){
//     selectedBox = $(this) ;
//   }
// });

// $('.inside-link').click(()=>{
//   selectedBox.css("display", "none");
// });

// var a;
// $(document).ready(()=>{
//   $('.mainsoft').each(() =>{
//     console.log(this);
//     if($(this).css('display' == 'block')){
//       a = $(this);
//     }
//   });
// });
// $('.inside-link').click(()=>{
//   a.css('display','none');
//   $(this).css('display','block');
// });
  $(document).ready(() =>{
    $(".content").customScrollbar({
      updateOnWindowResize: true
    });
  });
  $(document).ready(()=>{
    $(".content2").customScrollbar({
      updateOnWindowResize: true
    });
  });