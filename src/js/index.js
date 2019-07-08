const images = require.context('../images', true);
import 'bootstrap';
import '../scss/app.scss';
import '../scss/app.less';
import '../css/bootstrap-plugin.css';
import '../css/fontiran.css';
import '../css/index.css';
import '../css/animation.css';
import '../css/material.min.css';
import 'malihu-custom-scrollbar-plugin';
import './jquery.mousewheel';
import '../css/jquery.mCustomScrollbar.css';
import 'material-design-lite';
import './modernizr-custom';
$(window).on('load' , () =>{
  var random= Math.floor(Math.random() * 21);
  var bigSize = ["url('./images/back.jpg')",
                 "url('./images/back1.jpg')",
                 "url('./images/back2.jpg')",
                 "url('./images/back3.jpg')",
                 "url('./images/back4.jpg')",
                 "url('./images/back5.jpg')",
                 "url('./images/back6.jpg')",
                 "url('./images/back7.jpg')",
                 "url('./images/back8.jpg')",
                 "url('./images/back9.jpg')",
                 "url('./images/back10.jpg')",
                 "url('./images/back11.jpg')",
                 "url('./images/back12.jpg')",
                 "url('./images/back13.jpg')",
                 "url('./images/back14.jpg')",
                 "url('./images/back15.jpg')",
                 "url('./images/back16.jpg')",
                 "url('./images/back17.jpg')",
                 "url('./images/back18.jpg')",
                 "url('./images/back19.jpg')",
                 "url('./images/back20.jpg')",];
  document.getElementById("random").style.backgroundImage=bigSize[random];
});
(function($){
  $(window).on("load",function(){
      $(".main-soft").not(".main-soft:nth-child(4)").mCustomScrollbar({
        setHeight: 540,
        theme: 'rounded-dark',
        mouseWheel : {axis : 'y',
        scrollAmount: 200 
      },
      });
  });
})(jQuery);
$('.menu-icons').click(
function menuAnimated(){
  $(".menu-icon").toggleClass("menu-anime");
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  $('.inside-link:nth-child(1)').data('index' , 1);
  $('.inside-link:nth-child(2)').data('index' , 2);
  $('.inside-link:nth-child(3)').data('index' , 3);
  $('.inside-link:nth-child(4)').data('index' , 4);
  $('.main-soft:nth-child(1)').data('index' , 1);
  $('.main-soft:nth-child(2)').data('index' , 2);
  $('.main-soft:nth-child(3)').data('index' , 3);
  $('.main-soft:nth-child(4)').data('index' , 4);
  var blockMainSoft;
  $('.inside-link').click(function(){
    var $this = $(this);
     $(".main-soft").each(function(){
     var $this3 = $(this);
      if($this3.css("display") == "block"){
        blockMainSoft = $this3;
      }
    });
    if(blockMainSoft.data("index") !== $this.data("index")){
      blockMainSoft.removeClass('slideInRight');
          blockMainSoft.addClass('slideOutLeft');
      setTimeout(() => {
       blockMainSoft.css('display' , 'none');
      }, 100);
      $('.main-soft').each(function(){
        var $this2 = $(this);
        if($this2.data("index") == $this.data("index")){
          setTimeout(() => {
            $this2.css('display' , 'block');
            $this2.removeClass('slideOutLeft');
            $this2.addClass('slideInRight');
          }, 100);
        }
      });
    }
  });
  $(window).resize(function(){
    if($(window).width() <=922){
      $('.navbar-nav').css('display' , 'none');
      $('.inside-link').removeClass("card-bshadow , card-shadow");
      $('.navbar').append($('.sideMainMenu'));
      $('.sideMainMenu').css('display' , 'none');
      $('.menu-icon').css('display' , 'block');
      $('.time-disMiss').css('display' , 'block');
      $('.sideMainMenu').addClass('sideMainClass');
      $('.inside-link').css({'padding' : '10px 16px' , 'height' : 'auto'});
      $('.inside-link').addClass('inside-linkAdd');
      $('.sideMainMenu').removeClass('my-3 , mx-5');
      $('.menu-icon').click(()=>{
        $('.sideMainMenu').css('display' , 'block');
      });
      $('.time-disMiss').click(()=>{
        $('.sideMainMenu').css('display' , 'none');
      });

    }
    
  });
  $(window).resize(function(){
    if($(window).width() >=922){
      $('.navbar-nav').css('display' , 'block');
      $('.inside-link').addClass("card-bshadow , card-shadow");
      $('.mainRow').append($('.sideMainMenu'));
      $('.sideMainMenu').css('display' , 'block');
      $('.menu-icon').css('display' , 'none');
      $('.time-disMiss').css('display' , 'none');
      $('.sideMainMenu').removeClass('sideMainClass');
      $('.inside-link').css({'padding' : '22px' , 'height' : '67px'});
      $('.inside-link').removeClass('inside-linkAdd');
      $('.sideMainMenu').addClass('my-3 , mx-5');
    }
  });
  $(document).ready(()=>{
    if($(window).width() <= 922){
      $('.navbar-nav').css('display' , 'none');
      $('.inside-link').removeClass("card-bshadow , card-shadow");
      $('.navbar').append($('.sideMainMenu'));
      $('.sideMainMenu').css('display' , 'none');
      $('.menu-icon').css('display' , 'block');
      $('.time-disMiss').css('display' , 'block');
      $('.sideMainMenu').addClass('sideMainClass');
      $('.inside-link').css({'padding' : '10px 16px' , 'height' : 'auto'});
      $('.inside-link').addClass('inside-linkAdd');
      $('.sideMainMenu').removeClass('my-3 , mx-5');
      $('.menu-icon').click(()=>{
        $('.sideMainMenu').css('display' , 'block');
      });
      $('.time-disMiss').click(()=>{
        $('.sideMainMenu').css('display' , 'none');
      });
    }
  });
  $(document).ready(()=>{
    if($(window).width() >=922){
      $('.navbar-nav').css('display' , 'block');
      $('.inside-link').addClass("card-bshadow , card-shadow");
      $('.mainRow').append($('.sideMainMenu'));
      $('.sideMainMenu').css('display' , 'block');
      $('.menu-icon').css('display' , 'none');
      $('.time-disMiss').css('display' , 'none');
      $('.sideMainMenu').removeClass('sideMainClass');
      $('.inside-link').css({'padding' : '22px' , 'height' : '67px'});
      $('.inside-link').removeClass('inside-linkAdd');
      $('.sideMainMenu').addClass('my-3 , mx-5');
    }
  });
    function autoScrollDown(){
      $(".inner").css({top:-$(".outer").outerHeight()}) // jump back
                 .animate({top:0},5000,"linear", autoScrollDown); // and animate
  }
  function autoScrollUp(){
      $(".inner").css({top:0}) // jump back
                 .animate({top:-1700},30000,"linear", autoScrollUp); // and animate
  }
  // fix hight of outer:
  $('.outer').css({maxHeight: $('.inner').height()});
  // duplicate content of inner:
  $('.inner').html($('.inner').html() + $('.inner').html());
  autoScrollUp();
      function typeString($target, str, cursor, delay, cb) {
        $target.html(function (_, html) {
          return html + str[cursor];
        });
        
        if (cursor < str.length - 1) {
          setTimeout(function () {
            typeString($target, str, cursor + 1, delay, cb);
          }, delay);
        }
        else {
          cb();
        }
      }
      function deleteString($target, delay, cb) {
        var length;
        
        $target.html(function (_, html) {
          length = html.length;
          return html.substr(0, length - 1);
        });
        
        if (length > 1) {
          setTimeout(function () {
            deleteString($target, delay, cb);
          }, delay);
        }
        else {
          cb();
        }
      }
    
      // jQuery hook
      $.fn.extend({
        teletype: function (opts) {
          var settings = $.extend({}, $.teletype.defaults, opts);
          
          return $(this).each(function () {
            (function loop($tar, idx) {
              // type
              typeString($tar, settings.text[idx], 0, settings.delay, function () {
                // delete
                setTimeout(function () {
                  deleteString($tar, settings.delay, function () {
                    loop($tar, (idx + 1) % settings.text.length);
                  });
                }, settings.pause);
              });
            
            }($(this), 0));
          });
        }
      });
    
      // plugin defaults  
      $.extend({
        teletype: {
          defaults: {
            delay: 100,
            pause: 5000,
            text: []
          }
        }
      });
    
    $('#target').teletype({
      text: [
  'فرا رسیدن سال نو و فرخنده نوروز باستانی مبارک باد'
      ]

    });
    
    $('#cursor').teletype({
      pause: 200,
    });