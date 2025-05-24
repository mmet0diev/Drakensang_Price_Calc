import { premDaysToCash, andersToCash, shinyDustToCashV1, getIPsToAnders, TotalPriceSum } from "./functions.js"
import { GemsPseudoDB } from "./ShinyDustObjects.js";

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


window.setTotalDust = function () {
    const mytable = document.getElementById("myTable");
    const gemRarityRowsList = mytable.querySelectorAll("tr");
    const gemTypeRowsList = mytable.querySelectorAll(".GemTypes th");

    // Convert gemTypeRowsList to array and assign the items starting from index 1 to 
    let gemTypesArr = Array.from(gemTypeRowsList).slice(1, gemTypeRowsList.length);
    let gemsRarityArr = Array.from(gemRarityRowsList).slice(1, gemRarityRowsList.length);

    let countsArr = [];
    // Add each gem counts val to countsArr
    gemRarityRowsList.forEach((rows) => {
        const gemRows = rows.querySelectorAll("td");
        gemRows.forEach((td) => {
            let cellValue = td.querySelector('input').value;
            if (cellValue != null && cellValue != 0) {
                countsArr.push(Number(cellValue));
            } else {
                countsArr.push(0);
            }
        })
    })

    let totalDust = 0;
    let countsArrIndex = 0;

    // Update count in GemsPseudoDB and 
    for (let i = 0; i < gemsRarityArr.length; i++) {
        for (let j = 0; j < gemTypesArr.length; j++) {
            let currCount = countsArr[countsArrIndex];
            GemsPseudoDB[`${gemsRarityArr[i].id}_${gemTypesArr[j].id}`][0] = currCount;
            
            let gemID = `${gemsRarityArr[i].id}_${gemTypesArr[j].id}`;
            let currGemMeltVal = GemsPseudoDB[gemID][1];

            totalDust+=currCount*currGemMeltVal;
            countsArrIndex++;
        }
    }

    document.getElementById("total_dust").innerHTML = `Total dust calculated: ${totalDust}`
}