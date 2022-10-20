var closebutton = document.getElementById("closebutton");
var generalcontainer = document.getElementById("generalcontainer");
closebutton.onclick = function (){
	if (generalcontainer.style.display !== "none"){
		generalcontainer.style.display = "none";
	}
}

var loadingbutton = document.getElementById("loging");
var firstdiv = document.getElementById("firstdiv");
var loadingstroke = document.getElementById("loadingfirst");
var maincontainer = document.getElementById("maincontainer");

loadingbutton.onclick = function(){
	if (loadingstroke.style.display !== "block"){
		loadingstroke.style.display = "block";
		loadingbutton.style.display = "none";
		setTimeout(function () {
			firstdiv.style.display = "none";
			maincontainer.style.display = "block";
		}, 5000);
	}
}

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var aracsec = document.getElementById("aracsec");

function boxkapatma(){
	box1.style.border = "none";
	box2.style.border = "none";
	box3.style.border = "none";
}
box3.onclick = function(){
	if (aracsec.style.display !== "block"){
		boxkapatma()
		aracsec.style.display = "block";
		box3.style.border = "2px solid #ec3a31";
	} else {
		aracsec.style.display = "none";
		boxkapatma()
	}
}
box2.onclick = function(){
	if (aracsec.style.display !== "block"){
		boxkapatma()
		aracsec.style.display = "block";
		box2.style.border = "2px solid #ec3a31";
	} else {
		aracsec.style.display = "none";
		boxkapatma()
	}
}
box1.onclick = function(){
	if (aracsec.style.display !== "block"){
		boxkapatma()
		aracsec.style.display = "block";
		box1.style.border = "2px solid #ec3a31";
	} else {
		aracsec.style.display = "none";
		boxkapatma()
	}
}