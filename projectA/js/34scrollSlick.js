// ---------------------------slick
(function($){
  $(function(){
    if ($(window).width() > 1024) {
      $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
      });
      //스크롤감지
      $('.vertical-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
          if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
            return
          }

          e.preventDefault()
          $(this).slick('slickNext')
        } else {
          if($(this).slick('slickCurrentSlide') == 0) {
            return
          }

          e.preventDefault()
          $(this).slick('slickPrev')
        }
      });
    }
  });
}(jQuery));

//로고 클릭시 슬릭 원하는 페이지로 이동
jQuery(document).ready(function(){
  $(".logo").click(function(e){
    e.preventDefault();
      var home = $(this).data('slide');
      $('.vertical-slider').slick('slickGoTo', home - 1 );
      //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
  });
});



//모바일 메뉴 열기/닫기
$(document).ready(function(){
  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
 $(".mMenuBt").click(function(){
     $("ul.gnb").addClass("on");
 });
 $(".bt .close").click(function(){
     $("ul.gnb").removeClass("on");
 });

 // 2차 메뉴 열기
 $(".gnb > li > a").click(function(){
     $(this).next().slideToggle(300);
     //this 다음 요소를 슬라이드토글
     $(".gnb > li > a").not(this).next().slideUp(300);
     //this가 아니라면 다음 요소는 슬라이드업
     return false;
     //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
 });
});