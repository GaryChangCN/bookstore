// 样式部分
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
    // pageNumber[i].style.color = 'white';
    // pageNumber[i].style.backgroundColor = 'rgb(224,92,73)';
})();
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
                alert("出错了!错误代码" + json.code);
            }
        },
        beforeSend: function() {}
    })
})();
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
            var json = JSON.parse(data);
            if (json.code == 0) {
                var len = json.product.length;
                for (var i = 0; i < len; i++) {
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
                    var ul = document.getElementById("book");
                    ul.appendChild(li);
                }

            } else {
                alert("出错了!错误代码" + json.code);
            }
        },
        beforeSend: function() {}
    })
})();
(function() {
    document.addEventListener("click", function(event) {
        var target = event.target;
        var targetName = target.tagName.toLowerCase();
        if (targetName == "li" && target.parentNode.id == "grade") {
            var gradeId = target.dataset.id;
            getCollege(gradeId);
        }
    });
})();
(function(){
    document.addEventListener("click",function(event){
        var target=event.target;
        var targetName = target.tagName.toLowerCase();
        if (targetName == "li" && target.parentNode.id == "college") {
            var collegeId = target.dataset.id;
            getMajor(collegeId);
        }
    });
})();
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
                content.appendChild(ul);
            } else {
                alert("出错了!错误代码" + json.code);
            }
        },
        beforeSend: function() {}
    })
}

function getMajor(collegeId) {
    _Ajax({
        "url": "./php/buy.php",
        "method": "get", //默认get
        "async": true, //默认为false
        "data": {
            "type":"3",
            "collegeId": collegeId
        },
        "header": {},
        "cache": false, //默认为false
        "dataType": "json", //"text"  "json"  "xml"  默认为text
        success: function(data) {
            var json = JSON.parse(data);
            if (json.code == 0) {
                var ul = document.createElement("ul");
                ul.id = "Major";
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
                content.appendChild(ul);
            } else {
                alert("出错了!错误代码" + json.code);
            }
        },
        beforeSend: function() {}
    })
}
