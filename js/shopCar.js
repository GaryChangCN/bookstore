(function() {
    function countPrice() {
        var json = JSON.parse(localStorage.list);
        var list = json.list;
        var len = list.length;
        var a;
        if (len > 0) {
            var a = 0;
            for (var i = 0; i < len; i++) {
                var j = list[i];
                a += parseFloat((j.price * j.number).toFixed(2));
            }
            a = a.toFixed(2);
            document.getElementById("hrContent").innerText = "总金额：￥" + a;
        } else {
            a = 0.00;
            document.getElementById("hrContent").innerText = "购物车为空";
        }
        localStorage.countPrice = a;
    }
    countPrice();
    var list = localStorage.list;
    var json = JSON.parse(list);
    var len = json.list.length;
    var ulList = document.getElementById("list");
    for (var i = 0; i < len; i++) {
        var j = json.list[i];
        var li = document.createElement("li");
        li.dataset.id = j.id;
        var img = document.createElement("img");
        img.src = "img/book/" + j.picPath;
        img.alt = j.name;
        var ul = document.createElement("ul");
        var kind;
        if (j.kind == "old") {
            kind = "旧书";
        } else {
            kind = "新书";
        }
        ul.innerHTML = "<li>" + j.name + "</li><li>" + j.publish + "</li><li>" + j.editor + "</li><li>" + j.isbn + "</li><li>类别：<span>" + kind + "</span></li>"
        var p = document.createElement("p");
        p.innerHTML = "<span>" + j.price + "×" + j.number + "=￥" + (j.price * j.number).toFixed(2) + "</span>";
        var div = document.createElement("div");
        div.innerHTML = '<a href="#1" class="Tbutton">删除</a>';
        li.appendChild(img);
        li.appendChild(ul);
        li.appendChild(p);
        li.appendChild(div);
        ulList.appendChild(li);
    }
    ///////////////////////////
    //删除清单某一项//
    ///////////////////////////
    ulList.addEventListener("click", function(event) {
        var target = event.target;
        var tagName = target.tagName.toLowerCase();
        if (tagName == "a") {
            var parentNode = target.parentNode.parentNode;
            var index;
            for (var i = 0; i < ulList.children.length; i++) {
                if (ulList.children[i] == parentNode) {
                    index = i;
                }
            }
            var json = JSON.parse(localStorage.list);
            json.list.splice(index, 1);
            localStorage.list = JSON.stringify(json);
            ulList.removeChild(parentNode);
        }
        countPrice();
    });
    ulList.addEventListener("mouseover", function() {
        var target = event.target;
        var tagName = target.tagName.toLowerCase();
        var li;
        switch (tagName) {
            case 'img':
                li = target.parentNode;
                break;
            case 'ul':
                if (!target.id) {
                    li = target.parentNode;
                }
                break;
            case 'li':
                if (target.parentNode.id) {
                    li = target;
                } else {
                    li = target.parentNode.parentNode;
                }
                break;
            case 'p':
                li = target.parentNode;
                break;
            case 'span':
                li = target.parentNode.parentNode;
                break;
            case 'div':
                li = target.parentNode;
                break;
            case 'a':
                li = target.parentNode.parentNode;
                break;
            default:
                break;
        }
        if (li) {
            (function() {
                var len = ulList.children.length;
                for (var i = 0; i < len; i++) {
                    ulList.children[i].removeAttribute("class");
                }
            })();
            li.className = "bookHover";
        }
    });
    ulList.addEventListener("mouseleave", function() {
        var target = this;
        var children = target.children;
        var len = children.length;
        for (var i = 0; i < len; i++) {
            children[i].removeAttribute("class");
        }
    });
    (function() {
        var t = new T();
        var B = new Object();
        B.state = true;
        var A = function() {
            var Aaddress = localStorage.address;
            var Aphone = localStorage.phone;
            if (Aaddress && Aphone) {
                document.getElementById("address").innerHTML = "地址:" + Aaddress + "</br>手机:" + Aphone;
            } else if (Aaddress && !Aphone) {
                document.getElementById("address").innerHTML = "地址:" + Aaddress;
            } else if (!Aaddress && Aphone) {
                document.getElementById("address").innerHTML = "</br>手机:" + Aphone;
            } else {
                document.getElementById("address").innerHTML = "<span>点击更改收货地址<span>";
            }
        }
        A();
        var address = document.getElementById("address");
        var form = document.getElementById("form");
        var close = document.querySelector("#form>p");
        close.onclick = function() {
            form.style.visibility = "hidden";
        }
        address.onclick = function() {
            if (form.style.visibility == "hidden") {
                form.style.visibility = "visible";
            } else {
                form.style.visibility = "hidden";
            }
        }
        address.onmouseover=function(){
            this.style.borderTopWidth="10px";
        }
        address.onmouseleave=function(){
            this.style.borderTopWidth="5px";
        }
        var certain = document.querySelector("#certain");
        certain.onclick = function() {
            var chil = form.children;
            var len = chil.length;
            for (var i = 0; i < len; i++) {
                var ele = form.children[i];
                var eleId = ele.id;
                switch (eleId) {
                    case 'phone':
                        var value = ele.value;
                        var exp = /1[0-9]{10}/;
                        if (!exp.test(value)) {
                            ele.className = "required";
                            B.state = false;
                        }
                        break;
                    case 'xiaoqu':
                        var value = ele.value;
                        if (value == "") {
                            ele.className = "required";
                            B.state = false;
                        }
                        break;
                    case 'loudao':
                        var value = ele.value;
                        if (value == "") {
                            ele.className = "required";
                            B.state = false;
                        }
                        break;
                    case 'qinshi':
                        var value = ele.value;
                        if (value == "") {
                            ele.className = "required";
                            B.state = false;
                        }
                        break;
                    case 'beizhu':
                        var value = ele.value;
                        if (value == "") {
                            localStorage.beizhu = "该用户没有填写备注";
                        } else {
                            localStorage.beizhu = value;
                        }
                        break;
                    default:
                        break;
                }
            }
            if (B.state) {
                form.style.visibility = "hidden";
            }
        }
        form.addEventListener("keyup", function() {
            var target = event.target;
            var tagName = target.tagName;
            var id = target.id;
            var clear = function() {
                var target = event.target;
                var tagName = target.tagName.toLowerCase();
                if (tagName == "input") {
                    target.removeAttribute("class");
                    B.state = true;
                }
            }
            switch (id) {
                case 'phone':
                    localStorage.phone = target.value;
                    A();
                    clear();
                    break;
                case 'xiaoqu':
                    localStorage.address = target.value + " " + document.getElementById("loudao").value + " " + document.getElementById("qinshi").value;
                    A();
                    clear();
                    break;
                case 'loudao':
                    localStorage.address = document.getElementById("xiaoqu").value + " " + target.value + " " + document.getElementById("qinshi").value;
                    A();
                    clear();
                    break;
                case 'qinshi':
                    localStorage.address = document.getElementById("xiaoqu").value + " " + document.getElementById("loudao").value + " " + target.value;
                    A();
                    clear();
                    break;
                default:
                    break;
            }
        });
        var send = document.querySelector("#submit a");
        send.onclick = function() {
            var json = JSON.parse(localStorage.list);
            if (json.list.length < 1) {
                t.Talert("提示", "你购物车为空");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    t.close();
                }
            } else if (!B.state) {
                t.Talert("提示", "你还没有准确填写收货信息");
                document.querySelector(".Talert .Tbutton").onclick = function() {
                    t.close();
                }
            } else {
                _Ajax({
                    "url": "./php/order.php",
                    "method": "get", //默认get
                    "async": false, //默认为false
                    "data": {
                        "address": localStorage.address,
                        "countPrice": localStorage.countPrice,
                        "phone": localStorage.phone,
                        "list": localStorage.list,
                        "beizhu": localStorage.beizhu
                    },
                    "header": {},
                    "cache": false, //默认为false
                    "dataType": "json", //"text"  "json"  "xml"  默认为text
                    success: function(data) {
                        var json = JSON.parse(data);
                        t.Talert("成功", "你编号为" + json.id + "的订单提交成功。");
                        localStorage.removeItem("list");
                        localStorage.removeItem("countPrice");
                        localStorage.clear();
                        document.querySelector(".Talert .Tbutton").onclick = function() {
                            t.close();
                            window.location.reload();
                        }
                    },
                    beforeSend: function() {}
                })
            }
        }
    })();
})();
