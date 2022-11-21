// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


const km = prompt ('Quanti km vuoi percorrere?');

const age = prompt ('Quanti anni hai?');

let howManyKm = (0.21 * km);

let minors = (age < 18);

let discountMinors = ((howManyKm / 100) * 20);

let senior = (age > 65);

let discountMayors = ((howManyKm / 100) * 40);

let ticketCost;

console.log (km, age, howManyKm, minors, senior, discountMinors, discountMayors );

if (age <= 18) {
   ticketCost = (howManyKm - discountMinors);

} else if (age >= 65) {
    ticketCost = (howManyKm - discountMayors);

} else {
    ticketCost = howManyKm;
}




document.getElementById ('cost').innerHTML =`Il prezzo del tuo biglietto è di: ${ticketCost.toFixed(2)}&euro;`;


