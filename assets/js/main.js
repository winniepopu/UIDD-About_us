/*HUA*/

$(document).ready(function() {

    var show2 = false;
    var show3 = false;
    $(window).scroll(function() {
        var h = $(this).scrollTop();
        console.log(h);
        var sectionHeight = document.body.offsetHeight;
        if (h >= 0.9 * sectionHeight && h <= 1.9 * sectionHeight) {
            if (!show2) {
                console.log(show2)
                animateSection2();
                show2 = true;
                console.log(show2)
            }
        }

        if (h >= 1.9 * sectionHeight && h <= 2.9 * sectionHeight) {
            if (!show3) {
                animateSection2_5();
                show3 = true;
            }
        }

        if (h >= 2600 && h <= 2800) {
            // $('.case-bigone1').slideDown(800)
            // $('.case-bigone2').fadeIn(1500)
            // $('.case-bigone3').fadeIn(1500)
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

function icon1Zoom() {
    $('.e-card:first-child').transition('drop', 500)
}

function icon2Zoom() {
    $('e.card:nth-child(2)').transition('drop', 500)
}

function icon3Zoom() {
    $('e.card:nth-child(3)').transition('drop', 500)
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