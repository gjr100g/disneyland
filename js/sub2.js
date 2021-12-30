
function slides(){
    $('#slide .photo').stop().animate({"marginLeft":"-100%"},2000,function(){
        $('#slide .photo li:first').appendTo('#slide .photo');
        $('#slide .photo').css({marginLeft:0});
    });
}
setInterval(slides,7000);
