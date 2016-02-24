$(document).ready(function() {
	$("#phonenumber").on('focus', function() {
		PhoneNumberCorrect();
		checksubmit();
	});
	$("#xiaoqu").on('focus', function() {
		XiaoQuCorrect();
		if ($("#phonenumber").val() == "") {
			PhoneNumberError()
		}
		checksubmit();
	});
	$("#loudao").on('focus', function() {
		LouDaoCorrect();
		if ($("#xiaoqu").val() == '') {
			XiaoQuError();
		}
		checksubmit();
	});
	$("#qinshi").on('focus', function() {
		QinShiCorrect()
		if ($("#loudao").val() == "") {
			LouDaoError();
		};
		checksubmit();
	});
	$("#remark").on('focus', function() {
		if ($("#qinshi").val() == "") {
			QinShiError()
		}
	});
//	$("#InputSubmit input:last-child").click(function() {
//		if (($("#phonenumber").val() != "") && ($("#xiaoqu").val() != "") && ($("#loudao").val() != "") && ($("#qinshi").val() != "")) {
//			alert("提交");
//		} else {
//			alert("对不起你信息没有填写完整");
//		}
//	})
    function checksubmit(){
    	if (($("#phonenumber").val() != "") && ($("#xiaoqu").val() != "") && ($("#loudao").val() != "") && ($("#qinshi").val() != "")) {
			$("#enterbuy").removeAttr('disabled');
			$("#enterbuy").attr('value','确认够买');
		}else{
			$("#enterbuy").attr({'disabled':'disabled','value':'*号为必填项'});
		}
    }
	function PhoneNumberError() {
		$("#phonenumber").css({
			'borderStyle': 'solid',
			'boederWidth': '5px',
			'borderColor': "red"
		}).attr('placeholder', '你还没有输入手机号！！！')
	};

	function PhoneNumberCorrect() {
		$("#phonenumber").css({
			'borderStyle': 'dashed',
			'boederWidth': '1px',
			'borderColor': "#e05c49"
		}).attr('placeholder', "唯一联系方式请仔细填写");
	};

	function XiaoQuError() {
		$("#xiaoqu").css({
			'borderStyle': 'solid',
			'boederWidth': '5px',
			'borderColor': "red"
		}).attr('placeholder', '你还没有输入小区号');
	};

	function XiaoQuCorrect() {
		$("#xiaoqu").css({
			'borderStyle': 'dashed',
			'boederWidth': '1px',
			'borderColor': "#e05c49"
		}).attr('placeholder', "例：9小区");
	};

	function LouDaoError() {
		$("#loudao").css({
			'borderStyle': 'solid',
			'boederWidth': '5px',
			'borderColor': "red"
		}).attr('placeholder', '你还没有输入楼道号');
	};

	function LouDaoCorrect() {
		$("#loudao").css({
			'borderStyle': 'dashed',
			'boederWidth': '1px',
			'borderColor': "#e05c49"
		}).attr('placeholder', "例：a073");
	};

	function QinShiError() {
		$("#qinshi").css({
			'borderStyle': 'solid',
			'boederWidth': '5px',
			'borderColor': "red"
		}).attr('placeholder', '你还没有输入寝室号');
	};

	function QinShiCorrect() {
		$("#qinshi").css({
			'borderStyle': 'dashed',
			'boederWidth': '1px',
			'borderColor': "#e05c49"
		}).attr('placeholder', "例：301");
	};
})