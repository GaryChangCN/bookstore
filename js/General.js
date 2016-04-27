function T() {}
T.prototype.prompt = function(title) {
        var p = document.createElement("p");
        p.innerText = title ? title : "未命名";
        var i=document.createElement("i");
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
        var close=document.querySelector(".Tprompt i");
        close.addEventListener("click",function(){
        	document.body.removeChild(divC);
        });
}
T.prototype.enter=function(){
	var divC=document.querySelector(".Tprompt");
	return divC.childNodes[1].value;
	document.body.removeChild(divC);
}
