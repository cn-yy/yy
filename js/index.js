/**
 * Created by Administrator on 2017/1/13.
 */
$(document).ready(function(){
    $('.header .top_header li').mouseover(function () {
        $(this).children().addClass('nav');
        $(this).siblings().children().removeClass('nav');
    })
    $('.header .top_header li').click(function(){
        var index = $(this).index();
        var id = '#con'+index;
        $('html,body').animate({scrollTop:$(id).offset().top},1000);
        $('#nav li:eq('+index+')').addClass('navco').siblings().removeClass('navco');
    })
    $('#nav li:lt(5)').click(function() {
        var index = $(this).index();
        var id = '#con'+index;
        $(this).addClass('navco').siblings().removeClass('navco');
        $('html,body').animate({scrollTop:$(id).offset().top}, 1000);
    });

    $('#nav li:eq(5)').click(function() {
        $('html,body').animate({scrollTop:0}, 1000);
        $('#nav li:eq(0)').addClass('navco').siblings().removeClass('navco');
    });


    $('#ann li').click(function () {
        $(this).children().addClass('on');
        $(this).siblings().children().removeClass('on');
    })
    var num = 0;
    var timer = null;
    window.onresize=function(){
        win();
    };
    function win(){
        var oww = $(window).width();
        if(oww<1280){
            $('#nav').hide();
        }else{
            $('#nav').show();
        }
    }
    win();
    window.onscroll = function(){
        clearInterval(timer);
        var ot = $(document).scrollTop();
        if(ot<100){
            $('.header .top_header li').siblings().children().removeClass('nav');
            $('.header .top_header li:eq(0)').children().addClass('nav');
        }
        var ow = $(window).height();
        var ot = $(document).scrollTop();
        var ob0 = $('#con0').outerHeight();
        var ob1 = $('#con1').outerHeight();
        var ob2 = $('#con2').outerHeight();
        var ob3 = $('#con3').outerHeight();
        var ob4 = $('#con4').outerHeight();
        var oa0 = $('#con0').offset().top;
        var oa1 = $('#con1').offset().top;
        var oa2 = $('#con2').offset().top;
        var oa3 = $('#con3').offset().top;
        var oa4 = $('#con4').offset().top;
        if(oa1<ow+ot && oa1+ob1>=ot){

            timer=setInterval(function () {
                num++;
                if(num>($('#cont_btn li').length)-1){
                    num=0;
                }
                $('#cont_btn li').eq(num).addClass('on').siblings().removeClass('on');
                $('.content_ul').stop().animate({left:-(num*570)+'px'},1000)
            },2000)
        }

        if(oa0+ob0>=ot){
            $('#nav li:eq(0)').addClass('navco').siblings().removeClass('navco');
        }
        if(oa1<=ot && oa1+ob1>=ot){
            $('#nav li:eq(1)').addClass('navco').siblings().removeClass('navco');
        }
        if(oa2<=ot && oa2+ob2>=ot){
            $('#nav li:eq(2)').addClass('navco').siblings().removeClass('navco');
        }
        if(oa3<=ot && oa3+ob3>=ot){
            $('#nav li:eq(3)').addClass('navco').siblings().removeClass('navco');
        }
        if(oa4<=ot && oa4+ob4>=ot){
            $('#nav li:eq(4)').addClass('navco').siblings().removeClass('navco');
        }

    }
    $('#text').mouseover(function(){
        clearInterval(timer);
    })
    $('#text').mouseout(function(){
        clearInterval(timer);
        timer=setInterval(function () {
            num++;
            if(num>($('#cont_btn li').length)-1){
                num=0;
            }
            $('#cont_btn li').eq(num).addClass('on').siblings().removeClass('on');
            $('.content_ul').stop().animate({left:-(num*570)+'px'},1000)
        },2000)
    })
    $('#cont_btn li').mouseover(function () {
        num = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.content_ul').stop().animate({left:-($(this).index()*570)+'px'},1000)
    })
    function show(){
        $('#omg1 .web').addClass('bb');
        $('#omg2 .web').addClass('bb');
    }
    function show2(){
        $('#omg1 .sj').addClass('bb');
        $('#omg2 .sj').addClass('bb');
    }
    $('#sj').click(function(){
        $('#omg1 li').removeClass('bb');
        $('#omg2 li').removeClass('bb');
        show();
    })
    $('#web').click(function(){
        $('#omg1 li').removeClass('bb');
        $('#omg2 li').removeClass('bb');
        show2();
    })
    $('#all').click(function(){
        $('#omg1 li').removeClass('bb');
        $('#omg2 li').removeClass('bb');
    })
});