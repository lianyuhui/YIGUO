$.ajax({
    type:"get",
    url:"getShoppingCart.php",
    async:true,
    data:null,
    error:function(){
        console.log("出错了");
    },
    success:function(data){
        for(var i=0;i<data.length;i++){
            var trs = $(`<div class="pro">
            <p class="xuan"><input type="checkbox" class="check1"></p>
              
            <img class="imgs" src="" alt="">
            <p class="name"></p>
            <p class="pri">￥<span></span></p>
            <p class="shu"><input class="number" type="number" value="1"></p>
            <p class="dan">￥<span class="jgs"></span></p>
            <p class="cao">
              <a href="">移入收藏</a>
              <a href="#" class="del">删除</a>
            </p>
        </div>`)
            $(".shopping .zhuang").append(trs);
            $($(".imgs")[i]).attr("src",data[i].goodsImg);
            $($(".name")[i]).html(data[i].goodsName);
            $($(".pri span")[i]).html(data[i].goodsPrice);
            $($(".jgs")[i]).html((data[i].goodsPrice*data[i].goodsCount).toFixed(1));
            $("#total").html("0.00");
            $($(".number")[i]).val(data[i].goodsCount);
        }
        over();
    },
    dataType:"json",
});

function over(){
    //删除
    //先获取所有的删除按钮
    let remove =$(".del");
    //循环这些按钮
    for(let i=0;i<remove.length;i++){
        remove[i].onclick = function(){
            var is = window.confirm("老铁，不给机会了吗？");
            if(is){
                var del = window.confirm("你确定要删除吗？你别后悔！");
            }
            
            //点击对应的删除按钮时，删除这个按钮的父元素的父元素，即删除这个input的父元素td的父元素tr,即点击对应删除按钮时，删除这一行
            if(del){
                var vipName = $(this).parents(".cao").parents(".pro").find(".name").html();
                var goodsId = $(this).parents(".cao").parents(".pro").find(".goodsid").html();
                $.ajax({
                    type:"get",
                    url:"deleteGoods.php",
                    async:true,
                    data:"vipName="+vipName+"&goodsId="+goodsId,
                    // error:function(){
                    //    console.log("出错了");
                    //  },
                    success:function(data){
                        console.log(data);
                    },
                });
                this.parentNode.parentNode.remove();
            }
            //当点击删除时，调用合计函数，重新判断当前合计的价格
            total();
        }
    }

    // function overAll(){
    
    //     $("#overAll").onclick = function(){
    //         var is = window.confirm("您确定清空吗？");
    //         if(is){
    //             var del = window.confirm("清空可就没有了");
    //         }
            
    //         //点击对应的删除按钮时，删除这个按钮的父元素的父元素，即删除这个input的父元素td的父元素tr,即点击对应删除按钮时，删除这一行
    //         if(del){
    //             var vipName = $(this).parents().parents(".sh2").find(".name").html();
    //             var goodsId = $(this).parents().parents(".sh2").find(".goodsid").html();
    //             $.ajax({
    //                 type:"get",
    //                 url:"deleteGoods.php",
    //                 async:true,
    //                 data:"vipName="+vipName+"&goodsId="+goodsId,
    //                 // error:function(){
    //                 //    console.log("出错了");
    //                 //  },
    //                 success:function(data){
    //                     console.log(data);
    //                 },
    //             });
    //             this.parentNode.parentNode.remove();
    //         }
    //         //当点击删除时，调用合计函数，重新判断当前合计的价格
    //         total();
    // }

    //价格
    //循环这些数量按钮
    $(".number").each(function(){
        // 点击数量按钮时，即数量变化时
        $(this).click(function(){
            //点击数量按钮，获取它的值
            let nums = $(this).val();
            //单价
            
            let price = parseFloat($(this).parents(".shu").parents(".pro").find(".pri span").html());

            //总价
            
            let span = $(this).parents(".shu").parents(".pro").find(".dan .jgs");
            
            //数量不能小于0
            if(nums<=0){
                // 如果数量小于等于0，数量按钮固定为0
                this.value = "0";
                // 这个商品的总价变为0.00
                span.html("0.00");
            }else{
                // 如果数量大于0，计算这个商品的总价
                span.html((price*nums).toFixed(1));
            }
            // 调用合计函数，计算价格
            total();
        });
    });

    // 全选插件
    $("#checkAll").bindCheck($(".shmid :checkbox"),$(""));
    // 当点击复选框时，调用合计函数
    $(".check").click(function(){
        total();
    });
    // 当点击全选框时，调用合计函数
    $("#checkAll").click(function(){
        total();
    });

    // 合计函数
    function total(){
        //合计
        $("#total").html("0.00");
        // 循环所有的商品的总价
        $(".dan .jgs").each(function(){
            // 如果当前商品的复选框是选中的，才把这个商品的总价计算到合计里
            if($(this).parents(".pro").find(".check").prop("checked")){
                $("#total").html((parseFloat($("#total").html())+parseFloat($(this).html())).toFixed(1));
            }
        });
    }
}