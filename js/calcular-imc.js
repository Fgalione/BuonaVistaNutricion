
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
	
	var paciente = pacientes[i];

	var tdPeso =paciente.querySelector(".info-peso")
	var peso= tdPeso.textContent;
	
	var tdAltura =paciente.querySelector(".info-altura")
	var altura= tdAltura.textContent;
	
	var tdIMC = paciente.querySelector(".info-imc");
	
	var pesoEsValido = validarPeso(peso);
	var alturaEsValida=validarAltura(altura);
	
	
	if(!pesoEsValido) {
		console.log("Peso incorrecto");
		pesoEsValido=false;
		tdIMC.textContent="Peso Incorrexto";
		paciente.classList.add("paciente-incorrecto");
	}
	
	if(!alturaEsValida) {
		console.log("Altura incorrecto");
		alturaEsValida=false;
		tdIMC.textContent="Altura Incorrexto";
		paciente.classList.add("paciente-incorrecto");
	}
	
	if (pesoEsValido && alturaEsValida){
		
		tdIMC.textContent=calcularIMC(peso,altura);	
	}
}

function calcularIMC(peso,altura){
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validarPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}
function validarAltura(altura){
	if(altura >= 0 && altura < 3.00){
		return true;
	}else{
		return false;
	}
}