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