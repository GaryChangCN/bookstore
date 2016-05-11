window.onload = function() {
    document.querySelector("#bottomContentUl li:last-child").onclick = function() {
        var a = new T();
        a.prompt("意见反馈");
        document.querySelector(".Tprompt>.Tbutton").onclick = function() {
            var test = a.enter();
            _Ajax({
                "url": "./php/index.php",
                "method": "get", //默认get
                "async": true, //默认为false
                "data": {
                    "type": "1",
                    "text": test
                },
                "header": {},
                "cache": false, //默认为false
                "dataType": "json", //"text"  "json"  "xml"  默认为text
                success: function(data) {
                    var json = JSON.parse(data);
                    if (json.code == 0) {
                        a.Talert("提示", json.callback);
                        document.querySelector(".Talert .Tbutton").onclick = function() {
                            t.close();
                        }
                    }
                },
                beforeSend: function() {}
            })
        }
    }
}
