///////////////////////////
//记录年级-学院-专业的id//
///////////////////////////
(function() {
    var a = new T();

    function TalertClose() {
        document.querySelector(".Talert>.Tbutton").onclick = function() {
            a.close();
        }
    }
    var dataId = new Object();
    ///////////////////////////
    //样式切换效果           //
    ///////////////////////////
    (function() {
        var li = document.getElementById("content");
        li.addEventListener("click", function(event) {
            var target = event.target;
            var tagName = target.tagName.toLowerCase();
            if (tagName == "li" && target.className != "contentLi") {
                var li = target.parentNode.children;
                var liLength = li.length;
                for (var i = 1; i < liLength; i++) {
                    li[i].style.borderColor = 'transparent';
                    li[i].style.color = 'black';
                }
                target.style.borderColor = 'rgb(224,92,73)';
                target.style.color = 'rgb(224,92,73)';
            }
        });
    })();
    //选中标签效果
    (function() {
        var ul = document.getElementById("book");
        ul.addEventListener("mouseover", function(event) {
            var target = event.target;
            var children = target.children;
            var len = children.length;
            for (var i = 0; i < len; i++) {
                children[i].removeAttribute("class");
            }
            var tagName = target.tagName.toLowerCase();
            if (tagName != "ul" && tagName == "li") {
                target.setAttribute("class", "bookHover");
            } else if (tagName == "span" || tagName == "p") {
                target.parentNode.setAttribute("class", "bookHover");
            }
        });
        ul.addEventListener("mouseleave", function() {
            var target = event.target;
            var children = target.children;
            var len = children.length;
            for (var i = 0; i < len; i++) {
                children[i].removeAttribute("class");
            }
        });
    })();
    /////
    // pageNumber切换动画//
    /////
    (function() {
        var a = document.getElementById("pageNumber");
        a.addEventListener("click", function() {
            var target = event.target;
            var targetName = target.tagName.toLowerCase();
            if (targetName == "li") {
                var li = document.querySelectorAll("#pageNumber li");
                var len = li.length;
                for (var i = 0; i < len; i++) {
                    li[i].style.color = 'black';
                    li[i].style.backgroundColor = 'white'
                }
                target.style.color = 'white';
                target.style.backgroundColor = 'rgb(224,92,73)';
            }
        });
    })();
    ////////////////////////////
    // 初始化加载获取年级列表///
    // /////////////////////////
    (function() {
        _Ajax({
            "url": "./php/buy.php",
            "method": "get", //默认get
            "async": true, //默认为false
            "data": {
                "type": "1"
            },
            "header": {},
            "cache": false, //默认为false
            "dataType": "false", //"text"  "json"  "xml"  默认为text
            success: function(data) {
                var json = JSON.parse(data);
                if (json.code == 0) {
                    var ul = document.createElement("ul");
                    ul.id = "grade";
                    var li1 = document.createElement("li");
                    li1.className = "contentLi";
                    li1.innerText = "年级";
                    ul.appendChild(li1);
                    var len = json.grade.length;
                    for (var i = 0; i < len; i++) {
                        var li = document.createElement("li");
                        li.innerText = json.grade[i].name;
                        li.dataset.id = json.grade[i].id;
                        ul.appendChild(li);
                    }
                    var content = document.getElementById("content");
                    content.appendChild(ul);
                } else {
                    a.close();
                    a.Talert("出错了", "出错了错误代码：" + json.code);
                    TalertClose();
                }
            },
            beforeSend: function() {}
        })
    })();
    ////////////////////
    //加载推荐图书列表//
    ////////////////////
    (function() {
        _Ajax({
            "url": "./php/buy.php",
            "method": "get", //默认get
            "async": true, //默认为false
            "data": {
                "type": "5"
            },
            "header": {},
            "cache": false, //默认为false
            "dataType": "json", //"text"  "json"  "xml"  默认为text
            success: function(data) {
                getBook(data);
            },
            beforeSend: function() {}
        })
    })();
    ////////////////////
    //点击年级获取学院//
    //点击学院获得专业//
    //点击专业获取专业图书//
    //点击更改页面序号//
    //document委托click事件
    ////////////////////
    (function() {
        document.addEventListener("click", function(event) {
            var target = event.target;
            var targetName = target.tagName.toLowerCase();
            if (targetName == "li") {
                switch (target.parentNode.id) {
                    case "grade":
                        var gradeId = target.dataset.id;
                        dataId.grade = gradeId;
                        getCollege(gradeId);
                        break;
                    case "college":
                        var collegeId = target.dataset.id;
                        dataId.college = collegeId;
                        getMajor(collegeId);
                        break;
                    case "major":
                        var majorId = target.dataset.id;
                        dataId.major = majorId;
                        getProduct();
                        break;
                    case "pageNumber":
                        var len = JSON.parse(localStorage.book).product.length;
                        var indexNum = parseInt(target.innerText);
                        var a = (16 * (indexNum - 1) + 1);
                        var b = new Number();
                        if (a + 15 > len) {
                            b = len;
                        } else {
                            b = a + 15;
                        }
                        book(a, b);
                        break;
                    default:
                        break;
                }
            }
        });
    })();
    /**
     * 获取学院列表
     * @param  {[type]} gradeId 年级编号
     * @return {html}   
     */
    function getCollege(gradeId) {
        _Ajax({
            "url": "./php/buy.php",
            "method": "get", //默认get
            "async": true, //默认为false
            "data": {
                "type": "2",
                "gradeId": gradeId
            },
            "header": {},
            "cache": false, //默认为false
            "dataType": "json", //"text"  "json"  "xml"  默认为text
            success: function(data) {
                var json = JSON.parse(data);
                if (json.code == 0) {
                    var content = document.getElementById("content");
                    var ul = document.createElement("ul");
                    ul.id = "college";
                    var li1 = document.createElement("li");
                    li1.className = "contentLi";
                    li1.innerText = "学院";
                    ul.appendChild(li1);
                    var len = json.college.length;
                    for (var i = 0; i < len; i++) {
                        var li = document.createElement("li");
                        li.innerText = json.college[i].name;
                        li.dataset.id = json.college[i].id;
                        ul.appendChild(li);
                    }
                    var college = document.getElementById("college");
                    if (college) {
                        content.removeChild(college);
                        var major = document.getElementById("major");
                        if (major) {
                            content.removeChild(major);
                        }
                    }
                    content.appendChild(ul);
                } else {
                    a.close();
                    a.Talert("出错了", "错误代码：" + json.code);
                    TalertClose();
                }
            },
            beforeSend: function() {}
        })
    }
    /**
     * 获取专业列表
     * @param  {none} collegeId 学院编号
     * @return {none}           
     */
    function getMajor(collegeId) {
        _Ajax({
            "url": "./php/buy.php",
            "method": "get", //默认get
            "async": true, //默认为false
            "data": {
                "type": "3",
                "collegeId": collegeId
            },
            "header": {},
            "cache": false, //默认为false
            "dataType": "json", //"text"  "json"  "xml"  默认为text
            success: function(data) {
                var json = JSON.parse(data);
                if (json.code == 0) {
                    var ul = document.createElement("ul");
                    ul.id = "major";
                    var li1 = document.createElement("li");
                    li1.className = "contentLi";
                    li1.innerText = "专业";
                    ul.appendChild(li1);
                    var len = json.major.length;
                    for (var i = 0; i < len; i++) {
                        var li = document.createElement("li");
                        li.innerText = json.major[i].name;
                        li.dataset.id = json.major[i].id;
                        ul.appendChild(li);
                    }
                    var content = document.getElementById("content");
                    var major = document.getElementById("major");
                    if (major) {
                        content.removeChild(major);
                    }
                    content.appendChild(ul);
                } else {
                    a.close();
                    a.Talert("出错了", "错误代码：" + json.code);
                    TalertClose();
                }
            },
            beforeSend: function() {}
        })
    }
    /**
     * 获取book列表并保存到localstorage
     * @return {none} 
     */
    function getProduct() {
        _Ajax({
            "url": "./php/buy.php",
            "method": "get", //默认get
            "async": true, //默认为false
            "data": {
                "type": "4",
                "majorId": dataId.major,
                "collegeId": dataId.college,
                "gradeId": dataId.grade
            },
            "header": {},
            "cache": false, //默认为false
            "dataType": "json", //"text"  "json"  "xml"  默认为text
            success: function(data) {
                getBook(data);
            },
            beforeSend: function() {}
        })
    }
    /**
     * 从localstrage获取数据 页码管理器
     */
    function book(a, b) {
        var ul = document.getElementById("book");
        var ul_li = ul.children;
        var length = ul_li.length;
        if (length != 0) {
            ul.innerHTML = "";
        }
        for (var i = a - 1; i < b; i++) {
            var json = JSON.parse(localStorage.book);
            var li = document.createElement("li");
            var img = document.createElement("img");
            var productI = json.product[i];
            li.dataset.id = productI.id;
            img.src = "img/book/" + productI.pic;
            img.alt = productI.name;
            li.appendChild(img);
            var span1 = document.createElement("span");
            var newDiscount = parseFloat(productI.newDiscount);
            if (newDiscount == 0) {
                newDiscount = 0.1;
            } else {
                newDiscount = newDiscount / 10;
            }
            var newPrice = parseFloat(productI.newPrice);
            span1.innerText = "￥" + (newPrice * newDiscount).toFixed(2);
            li.appendChild(span1);
            var span2 = document.createElement("span");
            span2.innerText = "新";
            li.appendChild(span2);
            var span3 = document.createElement("span");
            var oldDiscount = parseFloat(productI.oldDiscount);
            if (oldDiscount == 0) {
                oldDiscount = 0.1;
            } else {
                oldDiscount = oldDiscount / 10;
            }
            var oldPrice = parseFloat(productI.oldPrice);
            span3.innerText = "￥" + (oldPrice * oldDiscount).toFixed(2);
            li.appendChild(span3);
            var span4 = document.createElement("span");
            span4.innerText = "旧";
            li.appendChild(span4);
            var p = document.createElement("p");
            p.innerText = "《" + productI.name + "》【" + productI.editor + "】" + productI.publish;
            li.appendChild(p);
            ul.appendChild(li);
        }

    }
    /**
     * 获取book
     */
    function getBook(data) {
        var json = JSON.parse(data);
        if (json.code == 0) {
            var len = json.product.length;
            localStorage.book = JSON.stringify(json);
            document.getElementById("pageNumber").innerHTML = "";
            var num = Math.ceil(len / 16);
            var pageNumber = document.getElementById("pageNumber");
            for (var i = num; i > 0; i--) {
                var li = document.createElement("li");
                li.innerText = i;
                pageNumber.appendChild(li);
            }
            if (len < 16) {
                book(1, len);
            } else {
                book(1, 16);
            }
        } else {
            a.close();
            a.Talert("出错了", "错误代码：" + json.code);
            TalertClose();
        }
    }
})();
