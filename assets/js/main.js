// introAppear();

// function introAppear() {
//     $(".intro-left").animate({
//         'margin-left': '0px'
//     }, 2000)
// }

$(".intro-left").animate({
    'margin-left': '0px'
}, 2000);

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

var S3=false;

$(function () {
    $('.S3line').hide();
    $('.introTeam').hide();
    $('.personalImg').hover(sourceSwap, sourceSwap);
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 500 && S3==false){
            $('.S3line').delay(1000).transition('fade',1000);
            //setTimeout(introT,500);
            $('.introTeam').delay(5000).transition('fade',500);
            /*$('.S3line').transition('fade', 500);
            $('.introTeam').transition('fade', 500);*/
            S3=true;
          }
        else if(scrollVal <300 && S3==true){
            S3=false;
            $('.S3line').transition('fade',1000);
            $('.introTeam').transition('fade',500);
          }
      });
});

function introT(){
    $('.introTeam').transition('fade',500);
}

