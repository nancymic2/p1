
window.onload=function(){
	document.getElementById('hamburger').addEventListener('click', getmenu, false);
	sizeit();
}

window.onresize=function(){
	sizeit();
}


function sizeit() {
// onload or on change check the width of the window and get from the data attribute the appropriate image
//change to class serveImg and loop through
	var imgsrc=document.getElementsByClassName('serveImg');
	for (var i=0; i<imgsrc.length; i++) {

		if (window.matchMedia('(max-width: 400px)').matches) {
			var smallest=imgsrc[i].getAttribute('data-small');
			imgsrc[i].src=smallest;
		
		}

		else if (window.matchMedia('(max-width: 640px)').matches) {
			var med=imgsrc[i].getAttribute('data-med');
			imgsrc[i].src=med;
		
		}

		else {
			var imglarge=imgsrc[i].getAttribute('data-large');
			imgsrc[i].src=imglarge;
			document.getElementById('smallnav').style.display="none";
		}
    }
}

function getmenu() {
	//var navigation=document.getElementById('nav').innerHTML;
	var smallnav=document.getElementById('smallnav');
	//smallnav.innerHTML=navigation;
	if (smallnav.style.display=="block") {
	smallnav.style.display="none";
	}
	else {
		smallnav.style.display="block";
	}

}

