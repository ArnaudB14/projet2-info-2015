window.onload = init;

<!--SCRIPT LANGUAGE="javascript" TYPE="text/javascript" SRC="contact.js"></SCRIPT--> 

var m=""; 	// contiendra le message à afficher
var n=120; 	// contiendra le nombre de lettre de l'afficheur
var o=0;  	// contiendra le décalage du texte à afficher
/* var tempo=200; // intervalle entre chaque décalage */
var vis=false; // Test de visibilité de la zone de connexion

function init(){	
	document.getElementById("co").onclick=connexion;
	document.getElementById("inscript").onclick=inscription;
	document.getElementById("envoyer_inscription").onclick=envoyerInscription;
	document.getElementById("envoyer").onclick=recupID;
	
	var e = document.getElementById("afficheur");
	var tempo = 200;
	m = e.innerHTML;
	setInterval(afficheMessage, tempo);	

	/* Slider */

	var a = "Images/rumple.jpg";  //Variables pour mettre ses images
	var b = "Images/emmaswan1.png";
	var c = "Images/emmaswan2.png";            
	var array = [a, b, c];
    var img = document.getElementById("img_slider");

	img.src = a;
                 
	var principale = 0; //image principale              
	var gauche = document.getElementById("b_slider_g");
	var droite = document.getElementById("b_slider_d");
                 
	var d_gauche = function() //Changer l'image en cliquant sur le bouton
	{
		if(principale == 0) 
		{
   			principale = array.length - 1;
  		}
   		else 
   		{
     		principale--;
   		}
                     
   		img.src = array[principale];
   	}
                 
	var d_droite = function()
   	{
   		if(principale == (array.length - 1))
   		{
      		principale = 0;
   		}
   		else
   		{
      		principale++;
   		}
                     
      	img.src = array[principale];
   	}
                 
    gauche.addEventListener("click", function() 
   	{
      	d_gauche();
   
   	}, false);
                 
    droite.addEventListener("click", function()
   	{
      	d_droite();
   	}, false);
                 
    document.addEventListener("keyup", function(e) //Changer les images avec les flèches du clavier
   	{
   		if(e.keyCode == 37)
   		{
      		d_gauche();
   		}
   		else if(e.keyCode == 39)
   		{
      		d_droite();
   		}
   	}, false);


}

function afficheMessage(){	
	o=o+1;
	c="";
		for (var i=0;i<n;i++) 
		{ 
			c=c+m[(i+o)%m.length];		
		}
	document.getElementById("afficheur").innerHTML=c;
}

function connexion() {	

	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)	
		document.getElementById("zoneconnexion").style.visibility="visible";
	else 
		document.getElementById("zoneconnexion").style.visibility="hidden";	
}

function nonvisible() {
	document.getElementById("zoneconnexion").style.visibility="hidden";
}

function inscription() {	

	if (vis==true) 
		vis=false;
	else 
		vis=true;
	
	if(vis==true)	
		document.getElementById("zoneinscription").style.visibility="visible";
	else 
		document.getElementById("zoneinscription").style.visibility="hidden";	
}

function nonvisible() {
	document.getElementById("zoneinscription").style.visibility="hidden";
}

function envoyerInscription() {
	location.reload();	
}

function recupID() { /* Récupère le nom de l'utilisateur tapé dans le formulaire d'identification et l'affiche à côté de connexion */
	var recupid = document.formulaire.id.value;	
	document.getElementById("name").innerHTML="Bienvenue " + recupid + " !";
	nonvisible();
}

