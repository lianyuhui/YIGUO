
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


	//轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:{
    	delay:2500,
    	disableOnInteraction:false,
    },
    loop:true,
  });   
// 盒阴影
	$(".item a").each(function(){
		  	$(this).hover(
			  	function(){
			  		$(this).css({
			  			"boxShadow":'3px -3px 3px gray,-3px 3px 3px gray,-3px -3px 3px gray,3px 3px 3px gray'
			  		});
			  	},

			  	function(){
			  		$(this).css({
			  			"boxShadow":'0 0 0'
			  		});
			  	}
			  );
	    });
//col向右运动效果
	$(".fl .fl-right a").each(function(){
		$(this).hover(
			function(){
				$(this).animate({
					"left": '+5px'
				});
			},
			function(){
				$(this).animate({
					"left": '0px'
				});
			}
		);
	});

	//左边锚点链接
	$(".guide a").each(function(){
		$(this).hover(
			function(){
				$(this).find("span").css({
					"display":"block",
					"backgroundColor":"green"
				});
				$(this).find("i").css({
					"display":"none",
				});
			},
			function(){
				$(this).find("span").css({
					"display":"none",
				});
				$(this).find("i").css({
					"display":"block",
				});
			}
		);
		$(this).click(function(){
            var ll = $($(this).attr("href")).offset().top;
            $("html, body").animate({
                scrollTop: ll + "px"
            }, 500);
            return false;
        })
		$(window).scroll(function(){
            if($(this).scrollTop()>950){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                $(".guide").fadeIn();
            } else {
                $(".guide").fadeOut();
            }
        });
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

 // 给go to top按钮一个点击事件
    $("#goToTop a").click(function(){
        $("html,body").animate({scrollTop:0},800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
        return false;
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


})