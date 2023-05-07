function hidediv(){
	
	var hidecls = document.getElementById("grpdiv");
	hidecls.classList.remove('display_block');
	hidecls.classList.add('displaynone');

	var showcls = document.getElementById('showdiv');
	showcls.classList.remove('displaynone');
	showcls.classList.add('display_block');

	var postshow = document.getElementById('postcreate');
	postshow.classList.add('displaynone');
	postshow.classList.remove('display_block');
}

function clickdropdown(listelemnt){
	var inputelemnt = document.getElementById('dropdowninput');
	inputelemnt.value = listelemnt.textContent;
	document.getElementById('ulelment').classList.add('display_none');
}

function divdisply(){
	var elemntul = document.getElementById('ulelment');
	elemntul.classList.add('display_block');
	elemntul.classList.remove('display_none');
}


function seconddropdown(listelemnt){
	var inputelemnt = document.getElementById('friendsdropdown');
	inputelemnt.value = listelemnt.textContent;
	document.getElementById('seculelment').classList.add('display_none');
}

function invitedisply(){
	var elemntul = document.getElementById('seculelment');
	elemntul.classList.add('display_block');
	elemntul.classList.remove('display_none');
}

function cancelpage(){
	
	var bodyfrezze = document.getElementById("bodyclose");
	bodyfrezze.classList.add('bodyfrezee');

	var frezze = document.getElementById("overlayview");
	frezze.classList.remove('displaynone');
	frezze.classList.add('overlay');

	var alertclsaa = document.getElementById("alertview");
	alertclsaa.classList.add('alert');
}

function leavepage(){
	var hidecls = document.getElementById("grpdiv");
	hidecls.classList.add('display_block');
	hidecls.classList.remove('displaynone');

	var bodyfrezze = document.getElementById("bodyclose");
	bodyfrezze.classList.remove('bodyfrezee');

	var cancelelemnet = document.getElementById("overlayview");
	cancelelemnet.classList.add('displaynone');

	var showcls = document.getElementById('showdiv');
	showcls.classList.add('displaynone');
	showcls.classList.remove('display_block');

	var divelement = document.getElementById('postdetails');
	divelement.classList.add('displaynone');
	divelement.classList.remove('display_block');

}
function cancelmodel(){
	var cancelelemnet = document.getElementById("overlayview");
	cancelelemnet.classList.add('displaynone');

	var bodyfrezze = document.getElementById("bodyclose");
	bodyfrezze.classList.remove('bodyfrezee');
}

function postdiv(){
	var hidecls = document.getElementById("grpdiv");
	hidecls.classList.remove('display_block');
	hidecls.classList.add('displaynone');

	var showcls = document.getElementById('showdiv');
	showcls.classList.add('displaynone');
	showcls.classList.remove('display_block');

	var postshow = document.getElementById('posthide');
	postshow.classList.remove('displaynone');
	postshow.classList.add('display_block');

	var postshow = document.getElementById('postcreate');
	postshow.classList.add('displaynone');
	postshow.classList.remove('display_block');
}
function groupdiv(){
	var hidecls = document.getElementById("grpdiv");
	hidecls.classList.add('display_block');
	hidecls.classList.remove('displaynone');

	var showcls = document.getElementById('showdiv');
	showcls.classList.add('displaynone');
	showcls.classList.remove('display_block');

	var postshow = document.getElementById('posthide');
	postshow.classList.add('displaynone');
	postshow.classList.remove('display_block');

	var divelement = document.getElementById('postdetails');
	divelement.classList.add('displaynone');
	divelement.classList.remove('display_block');

	var postshow = document.getElementById('postcreate');
	postshow.classList.add('displaynone');
	postshow.classList.remove('display_block');
}

function postdisply(){
	var elemntul = document.getElementById('postelment');
	elemntul.classList.add('display_block');
	elemntul.classList.remove('display_none');

}
function postdropdown(listelemnt){
	var inputelemnt = document.getElementById('postdropdown');
	inputelemnt.value = listelemnt.textContent;
	document.getElementById('postelment').classList.add('display_none');
}
function closeicon(){
	var ulelement = document.getElementById('postelment');
	ulelement.classList.remove('display_block');
	ulelement.classList.add('display_none');
}

/*-----------textarea-------*/
function boldfunction() { 
	document.getElementById("textedit").style.fontWeight = "bolder";
}

function italicunction() {
 document.getElementById("textedit").style.fontStyle = "italic";
}

function uppercasefunction() {
 document.getElementById("textedit").style.textTransform = "uppercase";
}

function lowercasefunction() {
 document.getElementById("textedit").style.textTransform = "lowercase";
}
function clertextfunction() {
 document.getElementById("textedit").value = "";
document.getElementById("textedit").style.textAlign ="left";
                           
}
function detailslist(){
	var divelement = document.getElementById('postdetails');
	divelement.classList.remove('displaynone');
	divelement.classList.add('display_block');
}

function commentclick(){
	var btnelements = document.getElementById('Commentbtn');
	btnelements.classList.remove('displaynone');
	btnelements.classList.add('display_block');
}
function createpost(){
	var hideshow = document.getElementById('posthide');
	hideshow.classList.add('displaynone');
	hideshow.classList.remove('display_block');

	var postshow = document.getElementById('postcreate');
	postshow.classList.remove('displaynone');
	postshow.classList.add('display_block');

	var divelement = document.getElementById('postdetails');
	divelement.classList.add('displaynone');
	divelement.classList.remove('display_block');

}

