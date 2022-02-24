function calcularIMC(){
	var altura = document.getElementById("altura");
	var peso = document.getElementById("peso");
	if(altura.value == "" || peso.value == ""){
		swal("Atención","Debe ingresar altura y peso","warning");
	}
	else{
		var IMC = (peso.value / (altura.value ** 2));
		document.getElementById("resultado").innerHTML = IMC.toFixed(1);
		document.getElementById("resultado").style.visivility = "visible";
	}
}

function limpiar(){
		document.getElementById("resultado").innerHTML = "";
		document.getElementById("altura").value = "";
		document.getElementById("peso").value = "";
}