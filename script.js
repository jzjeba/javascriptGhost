$(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle();
		$("body").css("background-color","lightblue") ;
    });
}
	$("p").click(function() {
	var date= new Date($.now()) ;
	$("p").html(date);
	$("img").show();
	});