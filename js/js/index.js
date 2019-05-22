$(function(){
    //菜单点击
    $(".Agv_Jump").on('click',function(){
        var url = $(this).attr('href');
        $("#A_iframe").attr('src',url);
        return false;
    });
});


$("a").click(function(elem) {
	$($(this)).find("span").each(function(index,ele){
		if(ele.className.indexOf("glyphicon")!==0){return;}
		console.log(ele);
		if(ele.className.indexOf("rotate")!==-1){
			$($(this)).removeClass("rotate");	
		}else{
			$($(this)).addClass("rotate");
		}
	});
	
})
