
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


//发送请求 获取商品信息

    $.ajax({
        type:"get",
        url:"getGoodsList.php",
        async:true,
        data:null,
        success:function(data){
        var goodsId = getCookie("goodsId");
        var str=goodsId.slice(1);
        console.info(goodsId);
        if(goodsId!=null){
            for(var i=0;i<data.length-1;i++){
                if(data[i].goodsId==goodsId){
                    $("#ming").html(data[i].goodsName);
                    $("#a1").attr("src",data[i].beiyong1);
                    $("#a2").attr("src",data[i].beiyong1);
                    $("#a3").attr("src",data[i].beiyong2);
                    $("#a4").attr("src",data[i].beiyong3);
                    $("#a-name").html(data[i].goodsName);
                    $("#a-desc").html(data[i].goodsDesc);
                    $("#a-pri").html(data[i].goodsPrice);
                    $("#a-ji").html("￥"+data[i].goodsPrice);
                    $("#a-id").html(data[i].goodsId);
                    var vipName = data[i].goodsName;
                    var goodsId = data[i].goodsId;
                    $("#join").click(function(){
                        var goodsCount = $("#count").val();
                        //点击加入购物车时,调用ajax,通过php添加到购物车表
                        $.ajax({
                            type:"get",
                            url:"addShoppingCart.php",
                            async:true,
                            data:"vipName="+vipName+"&goodsId="+goodsId+"&goodsCount="+goodsCount,
                            error:function(){
                                console.log("又出错了？");
                            },
                            success:function(data){
                                console.log("进去没");
                                // location.href = "shopping.html";
                            },
                        });
                    });
                }
            }
        };
    },
    dataType:"json",

}); 


   
})


    
    