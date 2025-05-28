import { premDaysToCash, andersToCash, shinyDustToCash, getIPsToAnders, TotalPriceSum,
     calculateTotalGemsDust, calculateTotalGemsPrice, calculateTotalJewelsDust, calculateTotalJewelsPrice, convertDrakenToCash, convertIPsToCash, getDrakensInAnders, getIPsInAnders
    } from "./functions.js"
// import { GemsPseudoDB, JewelsPseudoDB } from "./ObjectsPseudoDB.js";

window.displayPremDaysInCash = function () {
    const enteredPremDays = document.getElementById("prem_days_input").value;
    const premDaysField = document.getElementById("premDaysInCashID");
    premDaysField.textContent = `Prem days in cash: ${premDaysToCash(enteredPremDays)} €`;
}

window.displayAndermantsInCash = function () {
    const enteredAnders = document.getElementById("andermants_input").value;
    const andermantsField = document.getElementById("andermantsInCashID");
    andermantsField.textContent = `Total Andermants in cash: ${andersToCash(enteredAnders)} €`;
}

window.displayDrakensInCash = function () {
    const enteredDrakens = document.getElementById("drakens_input").value;
    const drakensField = document.getElementById("drakenInCash");
    document.getElementById("drakeninanders").textContent = `Total drakens in andermants: ${getDrakensInAnders(enteredDrakens, 8)}`;
    drakensField.textContent = `Total drakens in cash: ${convertDrakenToCash(enteredDrakens, 8)} €`;
}

window.displayIPsToCash = function () {
    const ipsEntered = document.getElementById("ips_input").value;
    const ipsField = document.getElementById("ipsInCash");
    document.getElementById("ipsinanders").textContent = `Total IPs in andermants: ${getIPsInAnders(ipsEntered)}`;
    ipsField.textContent = `Total IPs in cash: ${convertIPsToCash(ipsEntered)} €`;
}

window.displayTotalGemsShinyDust = function(){
    document.getElementById('total_dust').textContent = `Total Gems Shiny Dust: ${getDustAndDustInCash()[0]}`
    document.getElementById('dustincash').textContent = `Total Gems Shiny Dust in cash ${getDustAndDustInCash()[1]} €`
}

window.displayTotalAccPrice = function () {
    // All input values
    const premDays = document.getElementById("prem_days_input").value || 0;
    // const shinyDust = document.getElementById("shinydust_input").value || 0;
    const anders = document.getElementById("andermants_input").value || 0;
    const drakens = document.getElementById("drakens_input").value;
    const ips = document.getElementById("ips_input").value;
    
    const premDaysPrice = premDaysToCash(premDays) || 0;
    const shinyDustPrice = getDustAndDustInCash()[1] + calculateTotalJewelsPrice();
    // const shinyDustPrice = shinyDustToCash(shinyDust) || 0;
    const andersPrice = andersToCash(anders) || 0;
    const drakenPrice = convertDrakenToCash(drakens) || 0;
    const ipsPrice = convertIPsToCash(ips) || 0;

    const total = TotalPriceSum([premDaysPrice, shinyDustPrice, andersPrice, drakenPrice, ipsPrice]);
    document.getElementById("totalAccPrice").textContent = `Total account price = ${total.toFixed(2)} €`;
}


window.getDustAndDustInCash = function () {
    const table = document.getElementById("GemsTable");

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

    const totalDust = calculateTotalGemsDust(gemsRarityArr, gemTypesArr, countsArr);
    const dustInCashTotal = calculateTotalGemsPrice(gemsRarityArr, gemTypesArr, countsArr);
    
    return [totalDust, dustInCashTotal];
    // document.getElementById("total_dust").innerHTML = `Total dust calculated: ${totalDust}`;
    // document.getElementById("total_cash").innerHTML = `Total dust in cash: ${dustInCashTotal}€`
};

// window.displayJewelsDust = function(){
//     let res = 0;
//     const table = document.getElementById("JewelsTable");

//     const jewelsRarityList = table.querySelectorAll("tr td");

//     jewelsRarityList.forEach(td => {
//         const input = td.querySelector("input");
//         let currId = td.id;
//         let inptval = input.value

//         // Update JewelsPseudoDB count value (e.g. array[0]) to entered input value
//         JewelsPseudoDB[currId][0] = inptval;
//         res+=JewelsPseudoDB[currId][0]*JewelsPseudoDB[currId][1]
//     })
//     // console.log(res)
//     document.getElementById("totalJewsDust").innerHTML = `Total Jewels Dust = ${res}`
// }

window.displayJewelsDust = function () {
    const dust = calculateTotalJewelsDust();
    const price = calculateTotalJewelsPrice();

    document.getElementById("totalJewsDust").textContent = `Total Jewels Dust = ${dust} (≈ ${price.toFixed(2)} €)`;
};