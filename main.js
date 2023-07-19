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
document.getElementById("train-buy").innerHTML =
  "Vuoi procedere con l'acquisto?";
document.getElementById("train-button").innerHTML = "Compra Ora!";

if (isNaN(distanceKM) || isNaN(userAge)) {
  alert("Valore numerico errato, riprova!");
  document.getElementById("train-ticket").innerHTML =
    "Attenzione, valore numerico errato!";
  document.getElementById("train-buy").innerHTML = "Ricarica la Pagina";
  document.getElementById("train-button").innerHTML = "Impossibile procedere.";
}

console.log("Il prezzo finale è: " + finalPrice.toFixed(2));
