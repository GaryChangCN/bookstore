$(document).ready(function() {
    var imgBase64; //用于确认img是base64还是普通图片
    $("ul li:first-child div span:first-child").click(function() {
        $.alert("请在微信中调用二维码扫描")
    });
    $("ul li:first-child div span:last-child").click(function() {
        $("input").parent().removeClass('required');
        var isbn = $(this).prev().val();
        var exp = /[0-9]{13}/;
        if (exp.test(isbn)) {
            $.ajax({
                "type": "get",
                "url": "https://api.douban.com/v2/book/isbn/:" + isbn,
                "async": false,
                dataType: "jsonp",
                success: function(data) {
                    $("#name").val(data.title);
                    $("#publisher").val(data.publisher);
                    $("#editor").val(data.author[0]);
                    $("#newPrice").val(data.price.replace("元", "").replace("/[$,￥]/g", ""));
                    $("#oldPrice").val((parseFloat($("#newPrice").val()) / 2 - 1).toFixed(2));
                    $("#newDiscount").val("0");
                    $("#oldDiscount").val("0");
                    $("#newStock").val("999");
                    $("#oldStock").val("999");
                    $("#imgPic").attr('src', data.images.large);
                    imgBase64 = false;
                },
                error: function() {
                    $.alert("无法通过isbn查询到图书信息，请手动输入。");
                }
            })
        } else {
            $.alert("请输入13位isbn");
        }
    });
    $("#isbn").keyup(function(event) {
        if (event.keyCode == 13) {
            $("ul li:first-child div span:last-child").click();
        }
    });
    $("ul li:last-child p").click(function() {
        $("ul li:last-child div img").attr('src', '');
        $(this).hide();
        $(this).next().show();
    });
    $("#img").on('change', function(event) {
        if (typeof FileReader == "function") {
            var reader = new FileReader();
            var file = this.files;
            reader.readAsDataURL(file[0]);
            reader.onload = function() {
                $("ul li:last-child div img").attr('src', reader.result);
                imgBase64 = true;
            }
        } else {
            $.alert("浏览器不支持上传图片，请切换极速模式或更换为高级浏览器");
        }
    });
    $("input").focus(function() {
        $(this).parent().removeClass('required');
    });
    $(".submit").on('click', function(event) {
        var status = true; //用户判别是否能提交
        var img = $("#imgPic").attr("src");
        var exp = /^data/;
        var isbn = $("#isbn").val();
        var name = $("#name").val();
        var publisher = $("#publisher").val();
        var editor = $("#editor").val();
        var newPrice = $("#newPrice").val();
        var oldPrice = $("#oldPrice").val();
        var newDiscount = $("#newDiscount").val();
        var oldDiscount = $("#oldDiscount").val();
        var newStock = $("#newStock").val();
        var oldStock = $("#oldStock").val();
        if (!isbn) {
            status = false;
            $(".needisbn").addClass('required');
            $.alert("请输入正确的isbn");
        }
        if (!name) {
            status = false;
            $(".needname").addClass('required');
            $.alert("请输入书名");
        }
        if (!publisher) {
            status = false;
            $(".needpublisher").addClass('required');
            $.alert("请输入出版社");
        }
        if (!editor) {
            status = false;
            $(".neededitor").addClass('required');
            $.alert("请输入作者");
        }
        if (!newPrice) {
            status = false;
            $(".neednewprice").addClass('required');
            $.alert("请输入新书价格");
        }
        if (!img) {
            status = false;
            $(".needPic").addClass('required');
            $.alert("请选择图片");
        }
        if (status) {
            if (!oldPrice) {
                oldPrice = (parseFloat(newPrice) / 2 - 1).toFixed(2);
            }
            if (!newDiscount) {
                newDiscount = '0';
            }
            if (!oldDiscount) {
                oldDiscount = '0';
            }
            if (!newStock) {
                newStock = '999';
            }
            if (!oldStock) {
                oldStock = '999';
            }
            if (imgBase64) {
                $.ajaxFileUpload({
                    url: './php/shangjia.php',
                    fileElementId: 'img', //文件上传域的ID
                    dataType: 'json', //返回值类型 一般设置为json
                    data: {
                        "token": sessionStorage.token,
                        "isbn": isbn,
                        "imgBase64": imgBase64,
                        "name": name,
                        "publisher": publisher,
                        "editor": editor,
                        "newPrice": newPrice,
                        "oldPrice": oldPrice,
                        "newDiscount": newDiscount,
                        "oldDiscount": oldDiscount,
                        "newStock": newStock,
                        "oldStock": oldStock,
                    },
                    success: function(data) {
                        switch (data.code) {
                        case '0':
                            $.alert(data.msg, function() {
                                window.location.reload();
                            })
                            break;
                        case '1':
                            $.alert('帐号密码不对或登录已过期请重新登录！', function() {
                                window.parent.location.reload();
                            });
                            break;
                        case '3':
                            $.alert('上传失败错误代码：3请重试');
                            break;
                        case '4':
                            $.alert('图片格式不对或者太大');
                            break;
                        case '5':
                            $.alert('外链图片不支持');
                            break;
                        default:
                            $.alert("未知错误");
                            break;
                    }
                    }
                })
            } else {
                $.ajax({
                    "type": "POST",
                    "dataType": "json",
                    "async": false,
                    "url": "./php/shangjia.php",
                    "data": {
                        "token": sessionStorage.token,
                        "isbn": isbn,
                        "imgBase64": imgBase64,
                        "name": name,
                        "publisher": publisher,
                        "editor": editor,
                        "newPrice": newPrice,
                        "oldPrice": oldPrice,
                        "newDiscount": newDiscount,
                        "oldDiscount": oldDiscount,
                        "newStock": newStock,
                        "oldStock": oldStock,
                        "img": img
                    },
                    "success": function(data) {
                        switch (data.code) {
                        case '0':
                            $.alert(data.msg, function() {
                                window.location.reload();
                            })
                            break;
                        case '1':
                            $.alert('帐号密码不对或登录已过期请重新登录！', function() {
                                window.parent.location.reload();
                            });
                            break;
                        case '3':
                            $.alert('上传失败错误代码：3请重试');
                            break;
                        case '4':
                            $.alert('图片格式不对或者太大');
                            break;
                        case '5':
                            $.alert('外链图片不支持');
                            break;
                        default:
                            $.alert("未知错误");
                            break;
                    }
                    }
                })
            }
        }
    });
});
