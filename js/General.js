function myBrowser() {
    var userAgent = navigator.userAgent;
    var state=true;
    if (localStorage) {
        state = true;
    }
    if (/MSIE ([^;]+)/.test(userAgent)) {
        state = false;
    }
    return  state;
}
if(!myBrowser()){//不支持ie
    var header=document.getElementById("header");
    var div=document.createElement("div");
    div.innerHTML="<div style='height:50px;border-bottom:2px solid #eee;font-size:1.5rem;text-align:center;line-height:50px;color:rgb(84,186,236)'>浏览器不支持该网站，请切换成极速内核或更换为Chrome、FireFox等高级浏览器并确保允许用户缓存</div>"
    document.body.insertBefore(div,header);
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
    a.href = "#1";
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
    a.href = "#1";
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
