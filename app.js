let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo;
let cantidadIntentos;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (intentos == cantidadIntentos) {
        asignarTextoElemento('p', 'Ha alcanzado el numero maximo de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario === numeroSecreto) {// === validara si los datos son iguales en valor y tipo
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'el número secreto es menor');
            } else {
                asignarTextoElemento('p', 'el número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // queryselector('#[id]') el # indica que buscaremos por id del elemento
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han sorteado todas las posibles opciones');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // recursividad de funciones
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    numeroMaximo = parseInt(prompt('Ingrese el limite de numeros a adivinar:'));    
    cantidadIntentos = parseInt(prompt('¿Cuantos intentos tendra el participante?'));
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();