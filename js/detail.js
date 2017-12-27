$(function(){
	$(".image img").click(function(){
		var $url = $(this).attr("src");
//		alert($url);
	$(".enlarg").attr({"src":$url})
	}).mouseover(function(){
		$(this).css({"border":"1px solid #008842","border-bottom":"none"})
	}).mouseout(function(){
		$(this).css({"border":"1px solid #999","border-bottom":"none"})
	})
})
