$(document).ready(function(){

var i = 2;
	function again(){
		function numItr(){
			i = i + 1;
			if (i > 3) {i = 1}
			return i;
		}
		var imgi = i + '.ico';
		numItr();
		$('img:first').fadeOut(500, function(){
			$(this).attr('src', imgi).fadeIn(500);
		});
	}
	setInterval(again, 4000);

});