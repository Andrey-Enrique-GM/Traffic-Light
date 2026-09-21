// Referencias a elementos del DOM
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

const btnAutomatic = document.getElementById("btnAutomatic");
const btnRed = document.getElementById("btnRed");
const btnYellow = document.getElementById("btnYellow");
const btnGreen = document.getElementById("btnGreen");
const btnOff = document.getElementById("btnOff");

const chgRed = document.getElementById("chgRed");
const chgYellow = document.getElementById("chgYellow");
const chgGreen = document.getElementById("chgGreen");



// Contadores
let countRed = 0;
let countYellow = 0;
let countGreen = 0;

// Control del semáforo
let currentLight = "off"; // También puede ser "red", "yellow" o "green"
let timer = null;



// Función para apagar todo el semáforo
function turnOffAll() {
    redLight.style.backgroundColor = "#862020bb";
    redLight.style.boxShadow = "none";

    yellowLight.style.backgroundColor = "#894213b9";
    yellowLight.style.boxShadow = "none";

    greenLight.style.backgroundColor = "#1b8650b4";
    greenLight.style.boxShadow = "none";
}

// Función del modo automático
function AutomaticCycle() {
    turnOffAll();

    // Si está apagado o en amarillo; Pasa a Rojo
    if (currentLight === "off" || currentLight === "yellow") {
        redLight.style.backgroundColor = "#ff0000";
        redLight.style.boxShadow = "0 0 25px #ff0000";
        
        countRed = countRed + 1;
        chgRed.textContent = countRed;
        
        currentLight = "red";
        timer = setTimeout(AutomaticCycle, 3000); // 3 segundos en rojo
    } 
    // Si está en rojo; Pasa a Verde
    else if (currentLight === "red") {
        greenLight.style.backgroundColor = "#00ff66";
        greenLight.style.boxShadow = "0 0 25px #00ff66";
        
        countGreen = countGreen + 1;
        chgGreen.textContent = countGreen;
        
        currentLight = "green";
        timer = setTimeout(AutomaticCycle, 3000); // 3 segundos en verde
    } 
    // Si está en verde; Pasa a Amarillo
    else if (currentLight === "green") {
        yellowLight.style.backgroundColor = "#ffb700";
        yellowLight.style.boxShadow = "0 0 25px #ffb700";
        
        countYellow = countYellow + 1;
        chgYellow.textContent = countYellow;
        
        currentLight = "yellow";
        timer = setTimeout(AutomaticCycle, 1500); // 1.5 segundos en amarillo
    }
}



// Evento del botón para apagar el semáforo
btnOff.addEventListener("click", function() {
    if (timer !== null) {
        clearTimeout(timer);
    }
    turnOffAll();
});

// Evento del botón para activar el ciclo automático
btnAutomatic.addEventListener("click", function() {
    if (timer !== null) {
        clearTimeout(timer);
    }
    AutomaticCycle();
});



// Iniciar siempre apagado
turnOffAll();
