function calcularIMC(){
	var altura = document.getElementById("altura");
	var peso = document.getElementById("peso");
	var IMC = (peso.value / (altura.value ** 2));
	document.getElementById("resultado").innerHTML = IMC;
	document.getElementById("resultado").style.visivility = "visible";
}

function limpiar(){
		document.getElementById("resultado").innerHTML = "";
}