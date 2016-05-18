$(document).ready(function() {
	$(".left,.right").css('height',$(window).height()-62+"px");
	$("iframe").css('height',$(window).height()-64+"px");
	$(".left li:first-child").css('backgroundColor','#eee');
	$(".left li").on('mouseover', function(event) {
		$(".left li").css('backgroundColor','white')
		$(this).css('backgroundColor','#eee');
	});
	$(".left li:nth-child(1)").click(function(){
		$("iframe").attr('src', 'shangjia.html');
	});
	$(".left li:first-child").click();
	$(".header .Tbutton").click(function(){
		sessionStorage.removeItem("token");
		window.location.reload();
	});
});