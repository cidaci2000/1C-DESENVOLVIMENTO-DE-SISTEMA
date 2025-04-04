// If-else
let hora = 8;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operador ternário
let temperatura = 28;
let clima = temperatura > 25 ? "Quente" : "Ameno";
console.log(`O clima está ${clima}`);
