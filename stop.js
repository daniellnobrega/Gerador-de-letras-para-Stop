const display = document.querySelector(".display");
//                 0    1    2    3    4    5    6    7    8    9    10  11    12   13  14   15   16   17   18   19   20   21   22   23   24   25
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let carroselInicial = 0;
let tempo = 200;
let jaPassou = false;
let intervaloRodada = "";

let intervaloLetra = setInterval(() => {
    display.textContent = alfabeto[carroselInicial].toUpperCase();
    console.log(alfabeto[carroselInicial])
    carroselInicial++

    if (carroselInicial === 25) {
        carroselInicial = 0;
    }

}, tempo);

function PrimeiraLetra() {

    clearInterval(intervaloLetra);
    carroselInicial = 0;
}

function SorteaLetra() {

    PrimeiraLetra()

    if (jaPassou == false) {
        clearInterval(intervaloRodada);
        const letra = alfabeto[Math.floor(Math.random() * alfabeto.length)];

        console.log('essa é a aletra ' + letra)

        let index = alfabeto.indexOf(letra);

        alfabeto.splice(index, 1);

        display.textContent = letra.toUpperCase();

        console.log(alfabeto + ' ' + alfabeto.length + ' ' + index);

        jaPassou = true;
    } else {
        intervaloLetra = setInterval(() => {
            display.textContent = alfabeto[carroselInicial].toUpperCase();
            console.log(alfabeto[carroselInicial])
            carroselInicial++

            if (carroselInicial === alfabeto.length) {
                carroselInicial = 0;
            }

        }, tempo);
        
       intervaloRodada = setInterval(() => {
            jaPassou = false;
            SorteaLetra()
        }, 5000);

    }
}

function novaLetra() {
    SorteaLetra();
}