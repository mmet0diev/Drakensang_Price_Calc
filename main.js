import { premDaysToCash, andersToCash, shinyDustToCashV2, shinyDustToCashV1, getIPsToAnders } from "./functions.js"

window.displayPremDaysInCash = function () {
    const enteredPremDays = document.getElementById("prem_days_input").value;
    const premDaysField = document.getElementById("premDaysInCashID");
    premDaysField.textContent = `Prem days in current currency: ${premDaysToCash(enteredPremDays)} €`;
}

window.displayShinydustInCash = function () {
    const enteredDust = document.getElementById("shinydust_input").value;
    const shinydustField = document.getElementById("shinydustInCashID");
    shinydustField.textContent = `Total Shiny Dust in current currency: ${shinyDustToCashV1(enteredDust)} €`;
}


window.displayAndermantsInCash = function () {
    const enteredAnders = document.getElementById("andermants_input").value;
    const andermantsField = document.getElementById("andermantsInCashID");
    andermantsField.textContent = `Total Andermants in current currency: ${andersToCash(enteredAnders)} €`;
}

window.displayTotalAccPrice = function() {
    const premDaysPrice = parseFloat(document.getElementById("prem_days_input").value);
    const shinyDustPrice = parseFloat(document.getElementById("shinydust_input").value);
    const enteredAnders = parseFloat(document.getElementById("andermants_input").value);
    document.getElementById("totalAccPrice").textContent = `Total account price = ${TotalPriceSum(premDaysPrice, shinyDustPrice, enteredAnders).toFixed(2)} €`
}


// window.displayIpsInCash = function(elem1, elem2){
//     let enteredValue =
//     document.getElementById(elem1, elem2).value = getIPsToAnders(2000)
// }