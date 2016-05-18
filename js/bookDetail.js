(function() {
    var bookData = {};
    //页面加载部分
    var id = window.location.search.split("=")[1];
    var a = new T();
    if (!id || isNaN(id)) {
        window.location.href = "404.html";
    }
    bookData.id = id;
    _Ajax({
        "url": "./php/bookDetail.php",
        "method": "get", //默认get
        "async": true, //默认为false
        "data": {
            "id": id
        },
        "header": {},
        "cache": false, //默认为false
        "dataType": "json", //"text"  "json"  "xml"  默认为text
        success: function(data) {
            var json = JSON.parse(data);
            if (json.code == 0) {
                var np = parseFloat(json.newPrice);
                var op = parseFloat(json.oldPrice);
                var nd = parseFloat(json.newDiscount) / 10;
                var od = parseFloat(json.oldDiscount) / 10;
                document.getElementById("hr").innerText = json.name;
                document.querySelector("#bookDetail li:nth-child(1)").innerText = json.name;
                document.title = json.name;
                bookData.name = json.name;
                document.querySelector("#bookDetail li:nth-child(2)").innerText = "出版社：" + json.publish;
                bookData.publish = json.publish;
                document.querySelector("#bookDetail li:nth-child(3)").innerText = "作者：" + json.editor;
                bookData.editor = json.editor;
                document.querySelector("#bookDetail li:nth-child(4)").innerText = "ISBN：" + json.isbn;
                bookData.isbn = json.isbn;
                if (nd == 0) {
                    document.querySelector("#bookDetail li:nth-child(5)").innerHTML = "新书价格：<span></span><span>￥" + np.toFixed(2) + "</span>";
                    bookData.newPrice = np.toFixed(2);
                } else {
                    document.querySelector("#bookDetail li:nth-child(5)").innerHTML = "新书价格：<span>￥" + np.toFixed(2) + "</span><span>￥" + (np * nd).toFixed(2) + "</span>"
                    bookData.newPrice = (np * nd).toFixed(2);
                }
                if (od == 0) {
                    document.querySelector("#bookDetail li:nth-child(6)").innerHTML = "旧书价格：<span></span><span>￥" + op.toFixed(2) + "</span>";
                    bookData.oldPrice = op.toFixed(2);
                } else {
                    document.querySelector("#bookDetail li:nth-child(6)").innerHTML = "旧书价格：<span>￥" + op.toFixed(2) + "</span><span>￥" + (op * od).toFixed(2) + "</span>"
                    bookData.oldPrice = (op * od).toFixed(2);
                }
                document.getElementById("imgContent").style.backgroundImage = "url(./img/book/" + json.picPath + ")";
                bookData.picPath = json.picPath;
            } else {
                a.Talert("错误", "错误代码：" + json.code);
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    a.close();
                }
            }
        },
        beforeSend: function() {}
    });
    (function() {
        ///////////////////////////
        //特效部分以及添加到cookie//
        ///////////////////////////
        var sub = document.querySelector("#bookDetail li:nth-child(8) span:first-child");
        var v = document.getElementById("number");
        var add = document.querySelector("#bookDetail li:nth-child(8) span:last-child");
        sub.onclick = function() {
            if (bookData.kind) {
                var val = parseInt(v.value);
                if (val > 1) {
                    v.value = val - 1;
                } else {
                    a.Talert("提示", "至少买一本。");
                    document.querySelector(".Talert .Tbutton").onclick = function() {
                        a.close();
                    }
                }
            } else {
                a.Talert("提示", "请先选择种类。");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    a.close();
                }
            }
        }
        add.onclick = function() {
            if (bookData.kind) {
                var val = parseInt(v.value);
                if (val < 10) {
                    v.value = val + 1;
                } else {
                    a.Talert("提示", "一次最多买10本。");
                    document.querySelector(".Talert .Tbutton").onclick = function() {
                        a.close();
                    }
                }
            } else {
                a.Talert("提示", "请先选择种类。");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    a.close();
                }
            }
        }
        var newBook = document.querySelector("#bookDetail li:nth-child(7) a:first-child");
        var oldBook = document.querySelector("#bookDetail li:nth-child(7) a:last-child");
        newBook.onclick = function() {
            oldBook.style.borderColor = "#eee";
            this.style.borderColor = "rgb(224,92,73)";
            v.value = '1';
            bookData.kind = 'new';
            bookData.price = bookData.newPrice;
        }
        oldBook.onclick = function() {
            newBook.style.borderColor = "#eee";
            this.style.borderColor = "rgb(224,92,73)";
            v.value = '1';
            bookData.kind = 'old';
            bookData.price = bookData.oldPrice;
        }
        var addShopcar = document.querySelector("#bookDetail li a.Tbutton");
        addShopcar.onclick = function() {
            var b = new T();
            if (bookData.kind) {
                bookData.number = v.value;
                var list = localStorage.list;
                if (list) {
                    var a = JSON.parse(list);
                    a.list.push(bookData);
                    localStorage.list = JSON.stringify(a);
                } else {
                    var a = {
                        'list': [bookData]
                    }
                    localStorage.list = JSON.stringify(a);
                }
                b.Talert("提示", "添加到购物车成功，请到上方购物车查看。");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    b.close();
                }
            } else {
                b.Talert("提示", "请先选择图书种类");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    b.close();
                }
            }
        }
    })();
})();
