import {
    premDaysToCash, andersToCash, shinyDustToCash, getIPsToAnders, TotalPriceSum,
    calculateTotalGemsDust, calculateTotalGemsPrice, calculateTotalJewelsDust, calculateTotalJewelsPrice, convertDrakenToCash,
    convertIPsToCash, getDrakensInAnders, getIPsInAnders, deluxeDaysToCash
} from "./functions.js"
import { setEUCurrencyPricesBasedOnTL } from "./CountryPrices.js"

let countryCode = "TR_EU";

// Set initial country prices
// setEUCurrencyPricesBasedOnTL();

window.displayPremDaysInCash = function () {
    const enteredPremDays = document.getElementById("prem_days_input").value;
    const premDaysField = document.getElementById("premDaysInCashID");
    premDaysField.textContent = `Premium days in cash: ${premDaysToCash(enteredPremDays, countryCode)} €`;
}

window.displayDeluxeDaysInCash = function () {
    const enteredDeluxePremDays = document.getElementById("deluxe_days_input").value;
    const deluxeDaysField = document.getElementById("deluxeDaysInCashID");
    deluxeDaysField.textContent = `Deluxe premium days in cash: ${deluxeDaysToCash(enteredDeluxePremDays, countryCode)} €`;
}

window.displayAndermantsInCash = function () {
    const enteredAnders = document.getElementById("andermants_input").value;
    const andermantsField = document.getElementById("andermantsInCashID");
    andermantsField.textContent = `Total Andermants in cash: ${andersToCash(enteredAnders, countryCode)} €`;
}

window.displayDrakensInCash = function () {
    const enteredDrakens = document.getElementById("drakens_input").value;
    const drakensField = document.getElementById("drakenInCash");
    document.getElementById("drakeninanders").textContent = `Total drakens in andermants: ${getDrakensInAnders(enteredDrakens, 8)}`;
    drakensField.textContent = `Total drakens in cash: ${convertDrakenToCash(enteredDrakens, 8, countryCode)} €`;
}

window.displayIPsToCash = function () {
    const ipsEntered = document.getElementById("ips_input").value;
    const ipsField = document.getElementById("ipsInCash");
    document.getElementById("ipsinanders").textContent = `Total IPs in andermants: ${getIPsInAnders(ipsEntered)}`;
    ipsField.textContent = `Total IPs in cash: ${convertIPsToCash(ipsEntered, countryCode)} €`;
}

window.displayTotalGemsShinyDust = function () {
    document.getElementById('total_dust').textContent = `Total gems shiny dust: ${getDustAndDustInCash()[0]}`
    document.getElementById('dustincash').textContent = `Total gems shiny dust in cash ${getDustAndDustInCash()[1]} €`
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
    const dustInCashTotal = calculateTotalGemsPrice(gemsRarityArr, gemTypesArr, countsArr, countryCode);

    return [totalDust, dustInCashTotal];
    // document.getElementById("total_dust").innerHTML = `Total dust calculated: ${totalDust}`;
    // document.getElementById("total_cash").innerHTML = `Total dust in cash: ${dustInCashTotal}€`
};

window.displayJewelsDust = function () {
    const dust = calculateTotalJewelsDust();
    const price = calculateTotalJewelsPrice(countryCode);

    document.getElementById("totalJewsDust").textContent = `Total jewels shiny dust = ${dust} (≈ ${price.toFixed(2)} €)`;
};

window.displayTotalAccPrice = function () {
    // All input values
    const premDays = document.getElementById("prem_days_input").value || 0;
    const deluxeDays = document.getElementById("deluxe_days_input").value || 0;
    // const shinyDust = document.getElementById("shinydust_input").value || 0;
    const anders = document.getElementById("andermants_input").value || 0;
    const drakens = document.getElementById("drakens_input").value;
    const ips = document.getElementById("ips_input").value;

    const premDaysPrice = premDaysToCash(premDays, countryCode) || 0;
    const deluxeDaysPrice = deluxeDaysToCash(deluxeDays, countryCode) || 0;
    const shinyDustPrice = getDustAndDustInCash()[1] + calculateTotalJewelsPrice();
    // const shinyDustPrice = shinyDustToCash(shinyDust) || 0;
    const andersPrice = andersToCash(anders, countryCode) || 0;
    const drakenPrice = convertDrakenToCash(drakens, countryCode) || 0;
    const ipsPrice = convertIPsToCash(ips, countryCode) || 0;

    console.log(typeof premDaysPrice);
    console.log(typeof deluxeDaysPrice);
    console.log(typeof ipsPrice);
    console.log(typeof andersPrice);
    console.log(typeof drakenPrice);

    const total = TotalPriceSum([premDaysPrice, deluxeDaysPrice, shinyDustPrice, andersPrice, drakenPrice, ipsPrice]);
    document.getElementById("totalAccPrice").textContent = `Total account price = ${total.toFixed(2)} €`;
}



// const flagData = [
//     { country: "BG_EU", img: "./0therMaterials/country flags/bg_flag.png", alt: "BG Flag" },
//     { country: "TR_EU", img: "./0therMaterials/country flags/tr_flag.png", alt: "TR Flag" },
//     // { country: "UK_GBP", img: "./0therMaterials/country flags/uk_flag.png", alt: "UK Flag" }
// ];

// const dropdownMenu = document.getElementById("countryDropdown");
// const selectedBtn = document.getElementById("dropdownSelected");
// const optionsDiv = document.getElementById("dropdownOptions");

// optionsDiv.addEventListener("click", function (e) {
//     const btn = e.target.closest("button");
//     if (!btn) return;
//     const img = btn.querySelector("img");
//     if (!img) return;
//     const selectedCountry = img.dataset.country;

//     // Update the global countryCode!
//     countryCode = selectedCountry;

//     // Find new selected and update main button
//     const newFlag = flagData.find(key => key.country === selectedCountry);

//     selectedBtn.innerHTML = `<img src="${newFlag.img}" alt="${newFlag.alt}" data-country="${newFlag.country}">`;

//     // Build the new dropdown with remaining countries
//     let rest = flagData.filter(key => key.country !== selectedCountry);
//     optionsDiv.innerHTML = rest.map(key =>
//         `<button><img src="${key.img}" alt="${key.alt}" data-country="${key.country}"></button>`
//     ).join("");
// });