window.onload = function() {
    document.querySelector("#bottomContentUl li:last-child").onclick = function() {
        var a = new T();
        a.prompt("意见反馈");
        document.querySelector(".Tprompt>.Tbutton").onclick = function() {
            console.log(a.enter());
        }
    }
}
