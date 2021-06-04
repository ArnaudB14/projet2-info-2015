window.onload=init;

function init(){
	table = document.getElementsByClassName("petits");
	var i = 0;
	while (i<table.length){
		table[i].onclick=image;
		i++;
	}
	
		document.getElementById("slide").onchange=slide;
}
	

function image() {
	document.getElementById("image").src=this.src;

	var a = this.value;
	var c = 0;
	
	for (var c=0;c<12;c++)
			 	table[c].style.opacity="0.2";

	this.style.opacity="1";
	document.getElementById("image").src=this.src;
}


function slide() 
{
	var a =this.value;
	var c =0;
	
	while (c<=12)
	{
		if (c==a)
		 {
		 	table[c].style.opacity="1";
		 	document.getElementById("image").src=table[c].src;
		 }	else {
		 	table[c].style.opacity="0.2";
		 }
		 c++;
	}
}

