import { premDaysToCash, andersToCash, shinyDustToCashV2, shinyDustToCashV1, getIPsToAnders, TotalPriceSum} from "./functions.js"

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

window.displayTotalAccPrice = function () {
    const premDays = document.getElementById("prem_days_input").value || 0;
    const shinyDust = document.getElementById("shinydust_input").value || 0;
    const anders = document.getElementById("andermants_input").value || 0;

    const premDaysPrice = premDaysToCash(premDays) || 0;
    const shinyDustPrice = shinyDustToCashV1(shinyDust) || 0;
    const andersPrice = andersToCash(anders) || 0;

    const total = TotalPriceSum([premDaysPrice, shinyDustPrice, andersPrice]);
    document.getElementById("totalAccPrice").textContent = `Total account price = ${total.toFixed(2)} €`;
}



// window.displayIpsInCash = function(elem1, elem2){
//     let enteredValue =
//     document.getElementById(elem1, elem2).value = getIPsToAnders(2000)
// }