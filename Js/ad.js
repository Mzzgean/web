$(function () {
            //����Ȼ���ad���֣��Ȼ��룬�ڻ������ڵ��롣Ȼ����¼������span����
            //���裺
            $(".ad").slideDown(1000).slideUp(1000).fadeIn(1000).children("span").click(function () {
                $(this).parent().fadeOut(1000);
            });


            $(".ad").slideDown(1000, function () {
                $(".ad").slideUp(1000, function () {
                    $(".ad").fadeIn(1000, function () {
                        $(".ad").children("span").click(function () {
                            $(this).parent().fadeOut(1000, function () {
                                alert("ִ����ϣ�");
                            });
                        });
                    });
                });
            })
        })