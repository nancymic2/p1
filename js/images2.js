
window.onload=function(){
	sizeit();
}

window.onresize=function(){
	sizeit();
}


function sizeit() {
// onload check the width of the window and get from the data attribute the appropriate image
	var imgsrc=document.getElementById('serveImg');

	if (window.matchMedia('(max-width: 400px)').matches) {
		var smallest=imgsrc.getAttribute('data-small');
		imgsrc.src=smallest;
	}


	else {
		var imglarge=imgsrc.getAttribute('data-large');
		imgsrc.src=imglarge;
	}

}


