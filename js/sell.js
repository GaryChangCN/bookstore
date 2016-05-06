(function() {
    ///////////
    //表单鉴别部分 //
    ///////////
    var data=new Object();
    data.state=false;//状态判别
    var form = document.getElementById("form");
    form.addEventListener("click", function() {
        var target = event.target;
        var tagName = target.tagName.toLowerCase();
        switch (tagName) {
            case 'span':
                target.nextSibling.nextSibling.focus();
                break;
            case 'a':
                var nodeList = target.parentNode.children;
                var len = nodeList.length;
                for (var i = 0; i < len; i++) {
                    var ele = nodeList[i];
                    var eleId = ele.id;
                    var value = ele.value;
                    switch (eleId) {
                        case 'phone':
                            var exp = /1[0-9]{10}/;
                            if (!exp.test(value)) {
                                ele.className = "required";
                                data.state=false;
                            }else{
                            	data.phone=value;
                            }
                            break;
                        case 'xiaoqu':
                            if (value == "") {
                                ele.className = "required";
                                data.state=false;
                            }else{
                            	data.xiaoqu=value;
                            }
                            break;
                        case 'loudao':
                            if (value == "") {
                                ele.className = "required";
                                data.state=false;
                            }else{
                            	data.loudao=value;
                            }
                            break;
                        case 'qinshi':
                            if (value == "") {
                                ele.className = "required";
                                data.state=false;
                            }else{
                            	data.qinshi=value;
                            }
                            break;
                        case 'beizhu':
                            if (value == "") {
                                data.beizhu="该用户没有填写备注";
                            }else{
                            	data.beizhu=value;
                            }
                            break;    
                        default:
                            break;
                    }
                }
                if(data.state){
                	var a=new T();
                	function TalertClose(){
                		document.querySelector(".Talert>.Tbutton").onclick=function(){
                			a.close();
                		}
                	}
                	_Ajax({
                					"url":"./php/sell.php",
                					"method":"get",//默认get
                					"async":true,//默认为false
                					"data":{
                						"address":data.xiaoqu+"->"+data.loudao+"->"+data.qinshi,
                						"phone":data.phone,
                						"remark":data.beizhu
                					},
                					"header":{					
                					},
                					"cache":false,//默认为false
                					"dataType":"json",//"text"  "json"  "xml"  默认为text
                					success:function(data){
                						var json=JSON.parse(data);
                						a.close();
                						if(json.code=='1'){
                							a.Talert("提交成功","你编号为【"+json.id+"】的卖书订单已经提交成功，稍后会有工作人员联系您。");
                						}else{
                							a.Talert("提交失败","提交失败，请尝试重新提交。");
                							document.querySelector("#form>.Tbutton").style.visibility="visible";
                						}
                						TalertClose();
                					},
                					beforeSend:function(){
                						document.querySelector("#form>.Tbutton").style.visibility="hidden";
                						a.Talert("正在提交","正在提交,请稍候......");
                						TalertClose();
                					}
                				})
                }
                break;
            default:
                break;
        }
    });
    form.addEventListener("keyup", function() {
        var target = event.target;
        var tagName = target.tagName.toLowerCase();
        if (tagName == "input") {
            target.removeAttribute("class");
            data.state=true;
        }
    });
})();
