
$(document).ready(function(){
	/*
	//슬라이드
	var timer;
	var pos = 0;
	count = $(".slide ul li a img").length;
	$(".slide ul").css("width",count*100+"%");
	$(".slide li").css("width",100/count+"%");

	$(function(){
		cbt();
		timer = setTimeout(function(){
			slide("auto","");	
		},4000);
	});
	
	function slide (type, num) {
		clearTimeout(timer);
		type == "auto" ? pos++ : type == "side" ? pos+=num : pos=num;
		pos = pos > count-1 ? 0 : pos < 0 ? count-1 : pos;
		cbt();
		$(".slide ul").stop().animate({marginLeft:(pos*-100)+"%"},1500);
		timer = setTimeout(function(){
			slide("auto","");	
		},4000);	
	}

	function cbt() {
		$(".pos > button").eq(pos).css("color","#851210");
		$(".pos > button").eq(pos).siblings("button").css("color","rgba(0,0,0,0.2)");
	}
	*/
	//메뉴
	$(".main_menu ul li a, .logo a").on("mouseover",function(){
		$(this).children("img").css("opacity","100");
	})
	
	$(".main_menu ul li a, .logo a").on("mouseleave",function(){
		$(this).children("img").css("opacity","0");
	})
	
	
	//숫자만 입력
	function onlyNumber(obj) {
		$(obj).keyup(function(){
			 $(this).val($(this).val().replace(/[^0-9]/g,""));
		}); 
	}
	
	$('.numbersOnly').keyup(function () { 
		this.value = this.value.replace(/[^0-9]/g,'');
	});
	
	//체크
	function confirmDelete(url,am) {
		if( confirm(am) ) {
			location.href = url;
		}
	}
	
});