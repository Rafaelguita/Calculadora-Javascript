// Código Javascript para o arquivo principal

function inserirNumero(num){
   var numero = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar() {
    var apagarNumero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = apagarNumero.substring(0, apagarNumero.length - 1);
}

function calcular(){
    var calculo = document.getElementById('resultado').innerHTML;
    if(calculo) {
        document.getElementById('resultado').innerHTML = eval(calculo);
    }
}