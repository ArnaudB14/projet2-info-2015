window.onload = pageChargee;

function pageChargee() {
	document.getElementById("reset").onclick=resetform;
}

function resetform() {
	document.getElementById("formulaire").reset();
}