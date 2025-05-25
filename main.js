import { premDaysToCash, andersToCash, shinyDustToCash, getIPsToAnders, TotalPriceSum, calculateTotalDust, calculateTotalPrice } from "./functions.js"
import { GemsPseudoDB } from "./ShinyDustObjects.js";

window.displayPremDaysInCash = function () {
    const enteredPremDays = document.getElementById("prem_days_input").value;
    const premDaysField = document.getElementById("premDaysInCashID");
    premDaysField.textContent = `Prem days in current currency: ${premDaysToCash(enteredPremDays)} €`;
}

window.displayShinydustInCash = function () {
    const enteredDust = document.getElementById("shinydust_input").value;
    const shinydustField = document.getElementById("shinydustInCashID");
    shinydustField.textContent = `Total Shiny Dust in current currency: ${shinyDustToCash(enteredDust)} €`;
}


window.displayAndermantsInCash = function () {
    const enteredAnders = document.getElementById("andermants_input").value;
    const andermantsField = document.getElementById("andermantsInCashID");
    andermantsField.textContent = `Total Andermants in current currency: ${andersToCash(enteredAnders)} €`;
}

window.displayTotalShinyDust = function(){
    document.getElementById('total_dust').textContent = `Total Shiny Dust: ${getDustAndDustInCash()[0]}`
}

window.displayTotalAccPrice = function () {
    const premDays = document.getElementById("prem_days_input").value || 0;
    // const shinyDust = document.getElementById("shinydust_input").value || 0;
    const anders = document.getElementById("andermants_input").value || 0;
    
    const shinyDustPrice = getDustAndDustInCash()[1];
    const premDaysPrice = premDaysToCash(premDays) || 0;
    // const shinyDustPrice = shinyDustToCash(shinyDust) || 0;
    const andersPrice = andersToCash(anders) || 0;

    const total = TotalPriceSum([premDaysPrice, shinyDustPrice, andersPrice]);
    document.getElementById("totalAccPrice").textContent = `Total account price = ${total.toFixed(2)} €`;
}


window.getDustAndDustInCash = function () {
    const table = document.getElementById("myTable");

    const gemRarityRowsList = table.querySelectorAll("tr");
    const gemTypeHeaders = table.querySelectorAll(".GemTypes th");

    const gemTypesArr = Array.from(gemTypeHeaders).slice(1);
    const gemsRarityArr = Array.from(gemRarityRowsList).slice(1);

    const countsArr = [];

    gemsRarityArr.forEach(row => {
        const tds = row.querySelectorAll("td");
        tds.forEach(td => {
            const input = td.querySelector("input");
            const value = input ? Number(input.value) : 0;
            countsArr.push(isNaN(value) ? 0 : value);
        });
    });

    const totalDust = calculateTotalDust(gemsRarityArr, gemTypesArr, countsArr);
    const dustInCashTotal = calculateTotalPrice(gemsRarityArr, gemTypesArr, countsArr);
    
    return [totalDust, dustInCashTotal];
    // document.getElementById("total_dust").innerHTML = `Total dust calculated: ${totalDust}`;
    // document.getElementById("total_cash").innerHTML = `Total dust in cash: ${dustInCashTotal}€`
};