
$(function(){

	//手机易果
	$(".sjyg").hover(function(){
		$(this).parent().parent().parent().next().css({
			"display":"block",
		});
	});
	$(".con").mouseout(
		function(){
			$(this).css({
				"display":"none",
			});
		}
	);
	// 购物车的显示隐藏

	$(".shopping-cart").hover(
		function(){
			$(this).parent().parent().next().css({
				"display":"block",
			});
		},
	);
	$(".cart-none").mouseout(
		function(){
			$(this).css({
				"display":"none",
			});
		}
	);
	//菜单的显示隐藏
    $(".list-block").css({
        display:"none"
    });
	$(".warp .qbsp").click(function(){
		$(this).next().slideToggle("slow");
	});

	$(".list-block li").each(function(){
        $(this).hover(
            function(){
            	$(this).find(".list-none").css({
            		display:"block",
            	}); 
            	$(this).prevAll().css({
            		borderRight:"1px solid #c1c1c1",
            	});
            	$(this).nextAll().css({
            		borderRight:"1px solid #c1c1c1",
            	});
            	$(this).css({
            		// backgroundColor:"white",
            		borderLeft:"1px solid #c1c1c1",
            		borderTop:"1px solid #c1c1c1",
            		borderBottom:"1px solid #c1c1c1"
            	});
            	$(this).find("a").animate({
            		"left": '+10px'
            	});
            	

            },
            function(){
            	$(this).find(".list-none").css({
            		display:"none",
            	});
            	$(this).nextAll().css({
            		borderRight:"none",
            	});
            	$(this).prevAll().css({
            		borderRight:"none",
            	});
            	$(this).css({
            		// backgroundColor:"#ebeae8",
            		"border":"1px solid white"
            	});
            	$(this).find("a").animate({
            		"left": '0px'
            	});
            }
          );

    });
   
 
	//右边回到顶部
	$("#goToTop").hide()//隐藏go to top按钮
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>650){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                $("#goToTop").fadeIn();
            } else {
                $("#goToTop").fadeOut();
            }
        });
    });

    //顶部固定header
    $(".header-min").hide()//隐藏
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>87){//当window的scrolltop距离大于1时
                $(".header-min").fadeIn();
            } else {
                $(".header-min").fadeOut();
            }
        });
    });

 // 给go to top按钮一个点击事件
    $("#goToTop a").click(function(){
        $("html,body").animate({scrollTop:0},800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
        return false;
    });

    $(".content-left .xxiao li:first").css({
        borderColor:"green"
    });
    $(".content-left .xxiao li").each(function(){
        $(this).hover(function(){
            // let bgImg = getStyle(this,"backgroundImage");
            $("#box").html($(this).html());
            $(this).css({
                borderColor:"green"
            });
         },
         function(){
           $(this).css({
            borderColor:"white"
         });
         }
         );
    });
   
})
