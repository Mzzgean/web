$(function () {
            //需求：然广告ad部分，先滑入，在滑出，在淡入。然后绑定事件，点击span弹出
            //步骤：
            $(".ad").slideDown(1000).slideUp(1000).fadeIn(1000).children("span").click(function () {
                $(this).parent().fadeOut(1000);
            });


            $(".ad").slideDown(1000, function () {
                $(".ad").slideUp(1000, function () {
                    $(".ad").fadeIn(1000, function () {
                        $(".ad").children("span").click(function () {
                            $(this).parent().fadeOut(1000, function () {
                                alert("执行完毕！");
                            });
                        });
                    });
                });
            })
        })