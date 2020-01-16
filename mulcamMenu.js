 $(document).ready( function(){
	 
	var menuObj = $("#menu");
	$(".subMenu").hide();
	$('.MenuOpt').wrap('<a href="#"></a>');
	$(".MenuOpt").hover(
			function(){
				$(this).find('a').addClass('hover');
				word = $(this).text();
				word = $.trim(word);
				$("#"+word).show("1000");
				
				var x = event.clientX; // 좌표.모든 event에 대해 처리
				var y = event.clientY+20;
				$("#"+word).css( {"top":y,"left":x} );
			},//function1
			function(){	
				$("#"+word).hide("1500");		
			}//function2
			
			/*
			 * function(){
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).hide();
		$("#"+activeTab).hover(function(){
			$("#"+activeTab).show();
                }, function(){
			$("#"+activeTab).hide();
		});	
*/
			);//hover
	$(".img").hover(
		function(){
			$(this).animate({
			width: "30%",
			height: "30%",
			},100);//animate
			$(this).siblings()
			},
		function(){
			$(this).animate({
				width: "20%",
				height: "20%",
			},100);		
			}
	);
	$("#smartPick tr:eq(0)").contents().wrap('<a href="https://www.multicampus.com/system/menu/iframe?p_url=L3B1Ymxpc2gvcGFnZS9zbWFydHBpY2svcG9zdC9taWxsZW5uaWFsLmh0bWw=&p_menu=MTk5I01BSU4=&p_gubun=Qw=="></a>');
/*//contents().wrap('<a href="#" class="menu1_link"></a>');*/	
});//document function