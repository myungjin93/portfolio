//-----------------------------탭메뉴
$(document).ready(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });


    // 탭메뉴 세로형
    $(".tabV ul li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});