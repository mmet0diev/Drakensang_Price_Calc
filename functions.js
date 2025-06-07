import { countryPrices } from "./CountryPrices.js";
import { GemsPseudoDB, JewelsPseudoDB } from "./ObjectsPseudoDB.js";
export { premDaysToCash, andersToCash, shinyDustToCash, TotalPriceSum, calculateTotalGemsDust, calculateTotalGemsPrice,
    calculateTotalJewelsDust, calculateTotalJewelsPrice, convertDrakenToCash, convertIPsToCash, getDrakensInAnders, getIPsInAnders, 
    deluxeDaysToCash
};
import { setEUCurrencyPricesBasedOnTL } from "./CountryPrices.js"

function checkValidCountryCode(country) {
    const countryCodes = Object.keys(countryPrices)
    return countryCodes.includes(country)
}

// Get prem days in cash
function premDaysToCash(days = 0, country = "TR_EU") {
    let prem_month_price;
    if (checkValidCountryCode(country)) {
        prem_month_price = countryPrices[country]["prem_per_month"];
    } else {
        prem_month_price = undefined;
    }

    const period = 30;

    let costPerDay = prem_month_price / period;
    let res = parseFloat((days * costPerDay).toFixed(2));
    return res;
}

// Get prem days in cash
function deluxeDaysToCash(days = 0, country = "TR_EU") {
    let prem_month_price;
    if (checkValidCountryCode(country)) {
        prem_month_price = countryPrices[country]["deluxe_per_month"];
    } else {
        prem_month_price = undefined;
    }

    const period = 30;

    let costPerDay = prem_month_price / period;
    let res = parseFloat((days * costPerDay).toFixed(2));
    return res;
}

/* 
The averageAnders is the sum of the anders of all 7 options to purchase andermants in the DSO shop divided by 7.
The averageAnderCost is the average (in money) of all 7 purchase options in the DSO shop divided by 7.
*/
function andersToCash(anders = 0, country = "TR_EU") {
    if (!checkValidCountryCode(country)) return 0.00;

    // const { averageAndermant, averageAnderCost } = countryPrices[country];
    const avrgAndersNum = countryPrices[country]["averageAndermant"];
    const avrgAndersPrice = countryPrices[country]["averageAnderCost"];

    const res = (anders / avrgAndersNum) * avrgAndersPrice;

    return Number(res.toFixed(2));
}

function shinyDustToCash(totalDust = 0, country = "TR_EU"){
    if (!checkValidCountryCode(country)) return 0;
    let res = totalDust / 105000 * countryPrices[country]["midDustPack"];
    return Number(res.toFixed(2));
}


function TotalPriceSum(args = []){
    let sum = 0;
    for (let i=0; i<args.length; i++){
        sum+= parseFloat(args[i])
    }
    return sum
}

function calculateTotalGemsDust(gemsRarityArr, gemTypesArr, countsArr) {
    let totalDust = 0;
    let index = 0;

    for (let i = 0; i < gemsRarityArr.length; i++) {
        for (let j = 0; j < gemTypesArr.length; j++) {
            const currCount = countsArr[index];
            const gemID = `${gemsRarityArr[i].id}_${gemTypesArr[j].id}`;

            GemsPseudoDB[gemID][0] = currCount;

            const meltVal = GemsPseudoDB[gemID][1];
            totalDust += currCount * meltVal;

            index++;
        }
    }

    return totalDust;
}

function calculateTotalGemsPrice(gemsRarityArr, gemTypesArr, countsArr, country="TR_EU"){
    let totalDust = calculateTotalGemsDust(gemsRarityArr, gemTypesArr, countsArr)
    return Number(shinyDustToCash(totalDust, country));

}

function calculateTotalJewelsDust() {
    const table = document.getElementById("JewelsTable");
    if (!table) return 0;

    const jewelInputs = table.querySelectorAll("input[type='number']");
    let totalDust = 0;

    jewelInputs.forEach(input => {
        const td = input.closest("td");
        const id = td?.id;
        const count = parseInt(input.value) || 0;

        if (JewelsPseudoDB[id]) {
            JewelsPseudoDB[id][0] = count;
            totalDust += count * JewelsPseudoDB[id][1];
        }
    });

    return totalDust;
}

function calculateTotalJewelsPrice(country = "TR_EU") {
    const dust = calculateTotalJewelsDust();
    return Number(shinyDustToCash(dust, country));
}

function getDrakensInAnders(drakens, drakenAnderRatio=8){
    return drakens * drakenAnderRatio;
}

// Function to convert draken to cash (there is no ingame price for draken in cash, so we will convert the draken to ander and then the ander to cash)
function convertDrakenToCash(drakens, drakenAnderRatio=8, country="TR_EU"){
    // 1000 draken = 8000 anders so 1 draken = 8 anders
    let drakenInAnders = drakens*drakenAnderRatio;
    return andersToCash(drakenInAnders, country);
}

function getIPsInAnders(ips, ipAnderRatio=80){
    return Number(ips*ipAnderRatio);
}

// There is no ingame package/cash price for IPs so we will convert the average IP cost in ander to cash
function convertIPsToCash(ips, ipAnderRatio=80, country="TR_EU"){
    // 10 ips = 800 anders so 1 ip = 80 anders.
    let ipsToAnders = ips*ipAnderRatio;
    return andersToCash(ipsToAnders, country);
}