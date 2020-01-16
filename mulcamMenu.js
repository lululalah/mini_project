 $(document).ready( function(){
	 
	var menuObj = $("#menu");
	$(".subMenu").hide();
	$(".opt").hover(
			function(){
				word = $(this).text();
				word = $.trim(word);
				$("#"+word).show();
				
				var x = event.clientX; // 모든 event에 대해 처리
				var y = event.clientY+20;
				$("#"+word).css( {"top":y,"left":x} );
			},//function
			function(){
				$("#"+word).hide();				
			}
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
	
	
 });