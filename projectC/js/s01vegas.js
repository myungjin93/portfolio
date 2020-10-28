// ---------------------------vegas
$(function() {
  $('.s01').vegas({
    slides: [
      { src: "../images/green/01.png", delay: 3500 },
      { src: "../images/green/04.png", delay: 3500 },
      { src: "../images/green/05.png", delay: 3500 },
    ],
    overlay: '../lib/vegas/overlays/05.png',
    // animation: [ 'kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp' ]
    animation: 'random'
  });
});
// ---------------------------vegas
// $(function() {
//   $('.s02').vegas({
//     slides: [
//       { src: "../images/banner/space01.jpg", delay: 3500 },
//       { src: "../images/banner/space02.jpg", delay: 3500 },
//       { src: "../images/banner/space03.jpg", delay: 3500 },
//       // { src: "../images/banner/space03.jpg",
//       //     video: {
//       //       src: [
//       //           '../images/banner/view-main.mp4'
//       //       ],
//       //       loop: false,
//       //       mute: true,
//       //     }, delay: 5000
//       //   }
//     ],
//     // overlay: '../lib/vegas/overlays/05.png'
//     animation: [ 'kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp' ]
//     //animation: 'random'
//   });
// });
//모바일에서 베가스는 동영상을 지원하지 않음
$.vegas.isVideoCompatible = function () {
  var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
  return !devices.test(navigator.userAgent);
}

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