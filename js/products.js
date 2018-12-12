
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
    //盒阴影
$(".ban2 a").each(function(){
		  	$(this).hover(
			  	function(){
			  		$(this).find("img").css({
			  			"boxShadow":'3px -3px 3px gray,-3px 3px 3px gray,-3px -3px 3px gray,3px 3px 3px gray'
			  		});
			  	},

			  	function(){
			  		$(this).find("img").css({
			  			"boxShadow":'0 0 0'
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

})


//动态显示
$.ajax({
        type:"get",
        url:"getGoodsList.php",
        async:true,
        data:null,
        error:function(){
            console.info("notdata");
        },
        success:function(data){
             console.info("data");
            var productlist = '';
            for(var i=0;i<data.length;i++){
                productlist+="<li>\
                    <div class='p-img'>\
                        <a href='#'>\
                            <img src='"+data[i].goodsImg+"' />\
                        </a>\
                    </div>\
                    <div class='p-info'>\
                        <a href='#'>\
                            <p>"+data[i].goodsName+"</p>\
                        </a>\
                        <span>\
                            <strong>￥</strong>\
                            "+data[i].goodsPrice+"</span>\
                    </div>\
                    <div class='p-buy'>\
                        <span>"+data[i].goodsDesc+"</span>\
                        <a href='#'>加入购物车</a>\
                    </div>\
                    <p class='goodsId'>"+data[i].goodsId+"</p>\
                </li>";
                $(".goods").html(productlist);
            }


    //保存cookie 跳转到详情页面
    $(function(){
        $(".goods li").each(function(){
            $(this).click(function(){
                console.log($(this).find(".goodsId").html());
                saveCookie("goodsId",$(this).find(".goodsId").html(),2);
                // saveCookie("wasd","666",2);
                console.log("goodsId");
                location.href = "details.html";
            });
            
        });

        //遮罩层的显示隐藏
        $(".goods li").each(function(){
            $(this).hover(function(){
                $(this).find(".p-buy").css({
                    display:"block"
                });

            },
            function(){
                $(this).find(".p-buy").css({
                    display:"none"
                });
            }
            );
        });
    })
        },
        dataType:"json"
    }); 
    


