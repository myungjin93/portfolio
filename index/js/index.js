$(document).ready(function(){
    if($(window).width() < 1920){
        $(".fieR").click(function(){
            $(".fiexd").addClass("on");
        });
        $(".close").click(function(){
            $(".fiexd.on").removeClass("on");
        });
    }
});