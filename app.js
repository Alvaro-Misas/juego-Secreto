let numeroSecreto = 0;
let maxintento = 0
let listaNumerosorteados = []
numeroMaximo = 3



function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector (elemento);
elementoHTML.innerHTML = texto;
return;   
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero secreto en: ${maxintento} ${(maxintento===1) ? "Vez" : "Veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")

    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p", "EL numero secreto es menor")
        }else{
            asignarTextoElemento("p", "El numero Secreto es Mayor")
        }
        maxintento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function RetornarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  //esta es la variable que queremos retornar; cuando se ejecuata estaf uncion retonar la respuesta
    console.log (numeroGenerado)

    //si ya sorteamos todos los numeros
    if(listaNumerosorteados.length==numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }else

    //si el numero genrado esta incluido en la lista realiza la formula si no hace lo de siempre
    if(listaNumerosorteados.includes(numeroGenerado)) {
        return RetornarNumeroSecreto();
    }else{
        listaNumerosorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Numero secreto");
    asignarTextoElemento("p", `Indica un numero del 01 al ${numeroMaximo}`);
    numeroSecreto = RetornarNumeroSecreto();
    maxintento=1
    
}

function reiniciarJuego() {
//limpiar cajas
limpiarCaja()
//Indicar mensajes de intervalos de numeros
//Genera numero aleatorio
//Inicializar el numero de intentos
condicionesIniciales()
//Desabilitar el boton del nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled", true)

}


condicionesIniciales()