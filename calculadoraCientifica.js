

function clickDigito(digito){
    var display = document.getElementById("display");
    display.value = display.value + digito;
}

function presionDigito(digito){
    var display = document.getElementById("display");
    display.value = display.value = digito;
}

function limpiarDisplay(){
    var display = document.getElementById("display");
    display.value="";
}

function presionaOperador(operador){
    var display = document.getElementById("display");
    display.value = display.value + operador;
}

function  presionaIgual() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
}

function calcularRaiz(){
    var display = document.getElementById("display");
    var numero = eval(display.value);
    var raiz = Math.sqrt(numero);
    display.value = raiz;
}

function calcularPorcentaje(){
   var display = document.getElementById("display");
   var numero = eval(display.value);
   var porcentaje = Math.sqrt(numero);
   display.value = porcentaje;
}

function calcularIn(){
    var display = document.getElementById("display");
   var numero = eval(display.value);
   var log = Math.log(numero);
   display.value = log; 
}

function calcularLog(){
    var display = document.getElementById("display");
   var numero = eval(display.value);
   var ina = Math.log10(numero);
   display.value = ina;
}

function factorial(d) {
    var resultado = 1;
        for (let i = 2; i <= d; i++) {
            resultado *= i;  
        }
        return resultado;
}

function calcularPotencia(x,y){
    var display = document.getElementById("display");
    var numero = eval(display.numero);
    var potencia = Math.pow(x,y);
    display.value = potencia;
}