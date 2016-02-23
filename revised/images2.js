
window.onload=function(){
	//document.getElementById('hamburger').addEventListener('click', startnav, false);
	sizeit();
}

window.onresize=function(){
	sizeit();
}


function sizeit() {
// onload or on change check the width of the window and get from the data attribute the appropriate image
	var imgsrc=document.getElementById('serveImg');
	var nav=document.getElementById('nav');
	var navlist=document.getElementById('navlist');

	if (window.matchMedia('(max-width: 640px)').matches) {
		var smallest=imgsrc.getAttribute('data-small');
		imgsrc.src=smallest;
		//hamNav.style.display="block"
		navlist.style.display="block";
		navlist.style.backgroundColor="black";
		nav.style.backgroundColor="white";



	}


	else {
		var imglarge=imgsrc.getAttribute('data-large');
		imgsrc.src=imglarge;
		//hamNav.style.display="none"
		//document.getElementById('nav').style.backgroundColor="gray";
		navlist.style.display="inline";
		navlist.style.height="60px";

	}

}
function startnav() {
	var mid=document.getElementById('middle');
	var navigation=document.getElementById('navlist');
	if (navigation.style.display=="block") {
		navigation.style.display="none";
		mid.style.display="block";
	}
	else {
		navigation.style.display="block";
		mid.style.display="none";
	}
	
	
	//document.getElementById('hamburger').style.display="none";
}


