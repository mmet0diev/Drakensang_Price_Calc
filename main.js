import {premDaysToCash, andersToCash, shinyDustToCash, getIPsToAnders} from "./functions.js"

window.displayPremDaysToCash = function(elem1, elem2){
    const elementId = document.getElementById(elem1);
    const enteredPremDays = document.getElementById(elem2).value;
    // elementId.textContent = null;
    elementId.textContent = `Prem days in current currency: ${premDaysToCash(enteredPremDays)} €`;
}

window.displayShinydustToCash = function(elem1, elem2){
    const elementId = document.getElementById(elem1);
    const enteredDust = document.getElementById(elem2).value;
    elementId.textContent = `Total Shiny Dust in current currency: ${shinyDustToCash(parseInt(enteredDust))} €`;
}

// window.displayIpsInCash = function(elem1, elem2){
//     let enteredValue = 
//     document.getElementById(elem1, elem2).value = getIPsToAnders(2000)
// }