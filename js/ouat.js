window.onload = pageChargee;
var vis = false;

function pageChargee() {
	document.getElementById("boutonS1").onclick=clicBoutonS1;
	document.getElementById("boutonS2").onclick=clicBoutonS2;
	document.getElementById("boutonS3").onclick=clicBoutonS3;
	document.getElementById("boutonS4").onclick=clicBoutonS4;
	document.getElementById("boutonS5").onclick=clicBoutonS5;
}

function clicBoutonS1() {	
	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)
		document.getElementById("saison1").style.display="block";
	else 
		document.getElementById("saison1").style.display="none";
	
}
 
 function clicBoutonS2() {	
	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)
		document.getElementById("saison2").style.display="block";	
	else 
		document.getElementById("saison2").style.display="none";
	
}

function clicBoutonS3() {	
	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)
		document.getElementById("saison3").style.display="block";	
	else 
		document.getElementById("saison3").style.display="none";
	
}

function clicBoutonS4() {	
	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)
		document.getElementById("saison4").style.display="block";	
	else 
		document.getElementById("saison4").style.display="none";
	
}

function clicBoutonS5() {	
	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)
		document.getElementById("saison5").style.display="block";	
	else 
		document.getElementById("saison5").style.display="none";
	
}