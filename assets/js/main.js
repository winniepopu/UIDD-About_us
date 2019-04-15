/*HUA*/

$(document).ready(function() {
    animateSection1();
    // section-1
    $(".Bt-about").click(function() {
        // $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#section-2").offset().top
        // }, 2000);
        $('html, body').animate({ scrollTop: $("#section-2").offset().top }, 2000);
    });

    $(".Bt-purpose").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section-2_5").offset().top
        }, 2000);
    });

    $(".Bt-members").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section-3").offset().top
        }, 2000);
    });



    var sourceSwap = function() {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('.personalImg').hover(sourceSwap, sourceSwap);
        $('.introTeam').hide();
        $('.S3line').hide();
    });
    var show1 = false;
    var show2 = false;
    var show3 = false;
    var show4 = false;
    $(window).scroll(function() {
        var h = $(this).scrollTop();
        console.log(h);
        var sectionHeight = document.body.offsetHeight;
        // if (h <= 0.9 * sectionHeight) {
        //     if (!show1) {
        //         // console.log(show2)
        //         animateSection1();
        //         show1 = true;
        //         // console.log(show2)
        //     }
        // }


        if (h >= 0.9 * sectionHeight && h <= 1.9 * sectionHeight) {
            console.log(h)
            if (!show2) {
                // console.log(show2)
                console.log(show2)
                animateSection2();
                show2 = true;
                // console.log(show2)
            }
        }

        if (h >= 1.9 * sectionHeight && h <= 2.9 * sectionHeight) {
            if (!show3) {
                animateSection2_5();
                show3 = true;
            }
        }

        if (h >= 2.9 * sectionHeight && h <= 3.9 * sectionHeight) {
            // 打你要讓他做的動作
            if (!show4) {
                animateSection3();
                show4 = true;
            }
        }

        if (h >= 3000 && h <= 3400) {
            // $('.case-bigtwo1').slideDown(800)
            // $('.case-bigtwo2').fadeIn(1500)
            // $('.case-bigtwo3').fadeIn(1500)
        }

        if (h >= 3700 && h <= 4000) {
            // $('.case-big-p1').slideDown(800)
            // $('.case-big-p2').fadeIn(1500)
            // $('.case-big-p3').fadeIn(1500)
        }
    })


})

// $(document).ready(function() {
//     var a, b, c;
//     var show = false;
//     var show2_5 = false;
//     a = $(window).height(); //浏览器窗口高度
//     var group = $(".intro-left");
//     var sec3 = $(".intro-2");
//     $(window).scroll(function() {
//         b = $(this).scrollTop(); //页面滚动的高度
//         c = group.offset().top; //元素距离文档（document）顶部的高度
//         if (a + b > c) {
//             if (!show) {
//                 animateSection2();
//                 show = true;
//             }



//         }

//         if (a + b > sec3) {
//             if (!show2_5) {
//                 animateSection2_5();
//                 show2_5 = true;
//             } else {

//             }
//         }
//     });
// });






function animateSection2() {
    console.log("2555")
    $(".intro-left").animate({
        'margin-left': '0px',
    }, 2000)

    setTimeout(WordTop, 2000)
    setTimeout(TextAppear, 2500)
    setTimeout(w1Appear, 2600)
    setTimeout(w2Appear, 2800)
    setTimeout(w3Appear, 3000)
    setTimeout(ArrowStar, 3800)
}

function animateSection2_5() {
    $(".intro-2").animate({
        'background-color': '#f7484e',
    }, 700)

    setTimeout(icon1Zoom, 1000);
    // setTimeout(icon2Zoom, 1500);
    // setTimeout(icon3Zoom, 2000);
}

function animateSection3() {
    setTimeout(S3lineZoom, 0);
    setTimeout(S3introTeamZoom, 1000);
}

function animateSection1() {
    setTimeout(fingerAppear, 0);
}

function fingerAppear() {
    $('#finger').transition('fade up', 500);
}

function icon1Zoom() {
    $('.e-card:first-child').transition('drop', 500)
}

function icon2Zoom() {
    $('e.card:nth-child(2)').transition('drop', 500)
}

function icon3Zoom() {
    $('e.card:nth-child(3)').transition('drop', 500)
}

function S3lineZoom() {
    $('.S3line').transition('fade down', 2000);
}

function S3introTeamZoom() {
    $('.introTeam').transition('fade', 2000);
}


function WordTop() {
    $("#word-about").animate({
        'margin-top': '10rem',
    }, 1000)

    ArrowDis();
}

function TextAppear() {
    $('.align-center').transition('fade up', 1000);
}

function ArrowDis() {
    $('.arrow').transition('fade', 500)
}

function ArrowStar() {
    $('.arrow-d').transition('fade up', 1000);
    $('.arrow-d').transition('fade up', 200);
    $('.arrow-d').transition('fade up', 200);
    $('.arrow-d').transition('fade up', 200);
    $('.arrow-d').transition('fade up', 400);
}

function w1Appear() {
    $('.w-aboutus').transition('fade up', 1000);
}

function w2Appear() {
    $('.w-motivation').transition('fade up', 1000);
}

function w3Appear() {
    $('.w-ourmission').transition('fade up', 1000);
}

/*HUA*/
/*sense*/
function scrollTo(ele, speed) {
    if (!speed) speed = 300;
    if (!ele) {
        $("html,body").animate({ scrollTop: 0 }, speed);
    } else {
        if (ele.length > 0) $("html,body").animate({ scrollTop: $(ele).offset().top }, speed);
    }
    return false;
}
var imgArray = [
        'assets/media/page1-03.png',
        'assets/media/page1-02.png',
        'assets/media/page1-03.png',
        'assets/media/page1-02.png',
        'assets/media/page1-03.png',
        'assets/media/page1-03.png',
        'assets/media/page1-03.png',
        'assets/media/page1-03.png',
    ],
    curIndex = 0;
imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    }, 1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();


// (function() {
//     document.onreadystatechange = () => {
//         if (document.readyState === 'complete') {
//             let el = document.querySelector('#page104');
//             let myAnimation = new LazyLinePainter(el, {
//                 "ease": "easeLinear",
//                 "strokeWidth": 3.5,
//                 "strokeOpacity": 1,
//                 "strokeColor": "#2ECC70",
//                 "strokeCap": "square"
//             });
//             myAnimation.paint();
//         }
//     }

// })();