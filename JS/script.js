// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

const userName = prompt ('Come ti chiami?')

console.log (`Come si chiama il cliente: ${userName}`)

const km = prompt ('Quanti km vuoi percorrere?');

console.log (`Quanti km vuole percorrere il cliente: ${km}`)

const age = prompt ('Quanti anni hai?');

console.log (`Quanti anni ha il cliente: ${age}`)

let howManyKm = (0.21 * km);

console.log (`Il prezzo base del biglietto al km è di: ${howManyKm.toFixed(2)}€ `);

let minors = (age < 18);

let discountMinors = ((howManyKm / 100) * 20);

let senior = (age > 65);

let discountMayors = ((howManyKm / 100) * 40);

let ticketCost = howManyKm




if (age < 18) {
   ticketCost = (howManyKm - discountMinors);

} else if (age > 65) {
    ticketCost = (howManyKm - discountMayors);

}  



console.log (`Il prezzo del biglietto scontato è di: ${ticketCost.toFixed(2)}€ `)

document.getElementById ('cost').innerHTML =`Ciao ${userName} Il prezzo del tuo biglietto è di: ${ticketCost.toFixed(2)}&euro;`;


