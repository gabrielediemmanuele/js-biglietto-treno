const distanceKM = parseFloat(prompt("Quanti Km vuoi percorrere ?"));
const userAge = parseInt(prompt("Quanti anni hai?"));

let finalPrice = distanceKM * 0.21;

if (userAge < 18) {
  finalPrice = finalPrice - (finalPrice * 20) / 100;
}

if (userAge >= 65) {
  finalPrice = finalPrice - (finalPrice * 40) / 100;
}

document.getElementById("train-ticket").innerHTML =
  "Il tuo biglietto ha un costo di " + finalPrice.toFixed(2) + "€";

if (isNaN(distanceKM) || isNaN(userAge)) {
  alert("Valore numerico errato, riprova!");
  document.getElementById("train-ticket").innerHTML =
    "Valore numerico errato, ricarica la pagina e riprova!";
}

console.log("Il prezzo finale è: " + finalPrice.toFixed(2));
