function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
    }
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
}

function T() {}
T.prototype.prompt = function(title) {
    var p = document.createElement("p");
    p.innerText = title ? title : "未命名";
    var i = document.createElement("i");
    var div = document.createElement("div");
    div.appendChild(p);
    div.appendChild(i);
    var textarea = document.createElement("textarea");
    textarea.clos = "30";
    textarea.rows = "5";
    textarea.maxlength = "140";
    textarea.placeholder = "140字内,建议留下联系方式";
    var a = document.createElement("a");
    a.className = "Tbutton";
    a.href = "#";
    a.innerText = "确定";
    var divC = document.createElement("div");
    divC.className = "Tprompt";
    divC.appendChild(div);
    divC.appendChild(textarea);
    divC.appendChild(a);
    document.body.appendChild(divC);
    var close = document.querySelector(".Tprompt i");
    close.addEventListener("click", function() {
        document.body.removeChild(divC);
    });
}
T.prototype.Talert = function(title, content) {
    var divC = document.createElement("div");
    divC.className = "Talert";
    var div = document.createElement("div");
    div.innerHTML = "<p>" + title + "</p><i></i>";
    var p = document.createElement("p");
    p.innerText = content;
    var a = document.createElement("a");
    a.href = "#";
    a.className = "Tbutton";
    a.innerText = "确定";
    divC.appendChild(div);
    divC.appendChild(p);
    divC.appendChild(a);
    document.body.appendChild(divC);
    var close = document.querySelector(".Talert i");
    close.addEventListener("click", function() {
        document.body.removeChild(divC);
    });
}
T.prototype.enter = function() {
    var divC = document.querySelector(".Tprompt");
    return divC.childNodes[1].value;
    document.body.removeChild(divC);
}
T.prototype.close = function() {
    var divC = document.querySelector(".Talert");
    if (divC) {
        document.body.removeChild(divC);
    }
}
