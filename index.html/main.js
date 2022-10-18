let captchaNumeros = document.getElementById ("captchaNumeros");
let btnEnviar = document.getElementById ("btnEnviar");
let captchaResultado = document.getElementById ("captchaResultado");
let terminosCondiciones = document.getElementById ("terminosCondiciones");
let msjError = document.getElementById ("error");

let numero1 = numeroRandom();
let numero2 = numeroRandom();

btnEnviar.addEventListener("click", validar);
captchaNumeros.innerHTML = numero1+" + "+numero2;

function numeroRandom (){
    return Math.floor(Math.random() * 10);
}

function validar (){

    let estadoTerminosCondiciones = terminosCondiciones.checked;
    let valorCaptchaResultado = captchaResultado.value;
    let suma = numero1+numero2;

    if (estadoTerminosCondiciones){

        if (valorCaptchaResultado != suma){
            msjError.innerHTML = "Ingresa un resultado correcto";
        }
        else {
            msjError.innerHTML = "Resultado correcto ya estas participando";
            captchaResultado.value = "";
        }
    }
    else {
        msjError.innerHTML = "Acepte los Terminos y Condiciones para poder continuar";
    }
}
 
function convertir() {
    var valore= parseInt(document.getElementById("valor").value);
    var resultado= 0;
    var dolar= 152.83;
    var euro= 150.58;
    if (document.getElementById ("uno").checked) {
      resultado=valore/dolar;
      alert ("El cambio de pesos Arg a Dolares es:$"+ resultado);
    }
     else 
     if (document.getElementById("dos").checked) {
      resultado=valore/euro;
      alert ("El cambio de pesos Arg a Euros es:"+ resultado);
     }
      else{
        alert("Tienes que completar todos los campos")
      }
  }