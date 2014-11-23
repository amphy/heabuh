$( document ).ready(function() {
// Handler for .ready() called.

	$(".nav").mouseover(function() {
		var id = this.id;
		mouseOn(id);
	});
	
	$(".nav").mouseout(function() {
		var id = this.id;
		mouseOut(id);
	});
	
	function mouseOn(x) {
		switch(x) {
			case "link1":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#E60000"
				});
				break;
			case "link2":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#FF9900"
				});
				break;
			case "link3":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#FFCC00"
				});
				break;
			case "link4":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#00B800"
				});
				break;
			case "link5":
				$("#"+ x).css({
                transition : 'background-color 0.5s ease-in-out',
                "background-color": "#0066FF"
				});
				break;
			default:
				break;	
		}
	}
	
	function mouseOut(x) {
		$("#"+ x).css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "black"
				});
	}
});

	


