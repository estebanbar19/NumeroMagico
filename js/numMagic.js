let btnGenerar = document.getElementById("btnGenerar");
let btnVerificar = document.getElementById("btnVerificar");
let contadorIntentos = document.getElementById("cantIntentos");
var numAleatorio = parseInt(Math.random()*1000 +1);
console.log(numAleatorio);
var cantIntentos = 9;

btnGenerar.onclick = () => {
    cantIntentos = 10;
    contadorIntentos.innerHTML = cantIntentos;
    document.getElementById("pista").innerHTML = "Digita un número";
    let numDigitado = document.getElementById("numDigitado");
    numDigitado.value = "";
    numAleatorio = parseInt(Math.random()*1000 +1);
    console.log(numAleatorio);
    reset();
}

btnVerificar.onclick = () => {
    if((document.getElementById("pista").innerHTML != "El número es el correcto" && document.getElementById("pista").innerHTML != "Se te acabaron los intentos")){
        if(verificarNum(document.getElementById("numDigitado").value)){
            if(cantIntentos == 0){
                contadorIntentos.innerHTML = 0;
                document.getElementById("pista").innerHTML = "Se te acabaron los intentos";
                stop();
            }else{
                start();
                contadorIntentos.innerHTML = cantIntentos--;
                let numDigitado = document.getElementById("numDigitado").value;
                if(numDigitado > numAleatorio){
                    document.getElementById("pista").innerHTML = "El número es menor";
                }else{
                    if(numDigitado < numAleatorio){
                        document.getElementById("pista").innerHTML = "El número es mayor";
                    }else{
                        document.getElementById("pista").innerHTML = "El número es el correcto";
                        stop();
                    }
                }
            }
        }else{
            alert("Inserte un número, no letras");
        }
    }else{
        alert('El juego terminó, para iniciar de nuevo presione "Generar número aleatorio"');
    }
}

function verificarNum(number){
    if(number != ""){
        let regExNumber = new RegExp("[0-9\.]+","g");

        let numberAdd = regExNumber.exec(number);
        try {
            if(numberAdd[0] == number){
                return true;
            }else{
                return false;
            } 
        } catch (e) {
            if(e instanceof TypeError){
                console.log("error de valor nulo");
            }
        }
    }else{
        alert("Inserte un número");
        return false;
    }
}