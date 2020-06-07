$(window).ready(function(){
    var i = 0;
    var while_background = 'rgb(255,255,255)'
    var ori_background = $(".state_dot span:eq(1)").css('backgroundColor');
    $(".state_dot span:eq(0)").css('backgroundColor',while_background);
    //点击第1个点
    $(".state_dot span:eq(0)").on("click",function(){

        i=0;
        $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
        $(".t3_image li").css('left','0px');
        $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);

    });
    //点击第2个点
    $(".state_dot span:eq(1)").on("click",function(){

        i=1;
        $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
        $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
        $(".t3_image li").css('left','-430px');
        $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);

    });
    //点击第3个点
    $(".state_dot span:eq(2)").on("click",function(){

        i=2;
        $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
        $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
        $(".t3_image li").css('left','-860px');
        $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);

    });
    //点击第4个点
    $(".state_dot span:eq(3)").on("click",function(){

        i=3;
        $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
        $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
        $(".t3_image li").css('left','-1290px');
        $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);

    });
    //点击第5个点
    $(".state_dot span:eq(4)").on("click",function(){

        i=4;
        $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
        $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
        $(".t3_image li").css('left','-1720px');
        $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);

    });
    //点击左标签
    $(".left_state").on("click",function(){
        if(i!=0){
            Switch_left();
            i -= 1;
            $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }else{
            i = 4;
            $(".t3_image li").css('left','-1720px');
            $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }
    })
    //点击右标签
    $(".right_state").on("click",function(){

        if(i!=4){
            Switch();
            i += 1;
            $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }else{
            i = 0;
            $(".t3_image li").css('left','0px');
            $(".state_dot span:gt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:lt("+i+")").css('backgroundColor',ori_background);
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }
    })
    var main_start = undefined;
    var start = function(){
        
        main_start= setInterval(function(){
        if(i<4){
            Switch();
            i += 1;
            if(i!=0){
                $(".state_dot span:eq("+(i-1)+")").css('backgroundColor',ori_background);
            }
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }else{
            $(".t3_image li").css('left','0px');
            $(".state_dot span:eq("+i+")").css('backgroundColor',ori_background);
            i=0;
            $(".state_dot span:eq("+i+")").css('backgroundColor',while_background);
        }
        
    },5000)
        return;
    }
    start();
    var Switch = function(){
        clearInterval(main_start);
        var k = 0;
        var timer = setInterval(function(){
            if(k!=10){
                var li_img = $(".t3_image li").css('left');
                li_img = parseFloat(li_img);
                var leftoffset = li_img - 43 + 'px';
                $(".t3_image li").css('left',leftoffset);
                k += 1;
            }else{
                clearInterval(timer);
                start();
            }
        },10);
    }
    var Switch_left = function(){
        var k = 0;
        var timer2 = setInterval(function(){
            if(k!=10){
                var li_img = $(".t3_image li").css('left');
                li_img = parseFloat(li_img);
                var leftoffset = li_img + 43 + 'px';
                $(".t3_image li").css('left',leftoffset);
                k += 1;
            }else{
                clearInterval(timer2);
            }
        },10);
    }
    setInterval(function(){
        setTimeout(function(){
            $("#top>p").css('color','rgb(152,245,255)');
        },100);
        setTimeout(function(){
            $("#top>p").css('color','rgb(0,255,127)');
        },200);
        setTimeout(function(){
            $("#top>p").css('color','rgb(255,255,0)');
        },300);
        setTimeout(function(){
            $("#top>p").css('color','rgb(255,106,106)');
        },400);
        setTimeout(function(){
            $("#top>p").css('color','rgb(138,43,226)');
        },500);
        setTimeout(function(){
            $("#top>p").css('color','rgb(79,79,79)');
        },600);
        
        
    },10);
})

    