
window.onload=function() {
// onload check the width of the window and get from the data attribute the appropriate image
if (window.matchMedia('(max-width: 400px)').matches)
{

var imgsrc=document.getElementById('serveImg');
var smallest=imgsrc.getAttribute('data-small');
imgsrc.src=smallest;

}


else {
var imgsrc=document.getElementById('serveImg');
var imglarge=imgsrc.getAttribute('data-large');
imgsrc.src=imglarge;

}

}


window.onresize=function() {
// on rezize of the window check the width of the window and get from the data attribute the appropriate image
if (window.matchMedia('(max-width: 400px)').matches)
{

var imgsrc=document.getElementById('serveImg');
var smallest=imgsrc.getAttribute('data-small');
imgsrc.src=smallest;

}


else {
var imgsrc=document.getElementById('serveImg');
var imglarge=imgsrc.getAttribute('data-large');
imgsrc.src=imglarge;

}

}