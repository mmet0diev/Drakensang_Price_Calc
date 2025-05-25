import { countryPrices } from "./CountryPrices.js";
import { GemsPseudoDB } from "./ObjectsPseudoDB.js";
export { premDaysToCash, andersToCash, getIPsToAnders, shinyDustToCash, TotalPriceSum, calculateTotalDust, calculateTotalPrice};

function checkValidCountryCode(country) {
    const countryCodes = Object.keys(countryPrices)
    return countryCodes.includes(country)
}

// Get prem days in cash
function premDaysToCash(days = 0, country = "BG_EU") {
    let prem_month_price;
    if (checkValidCountryCode(country)) {
        prem_month_price = countryPrices[country].prem_per_month;
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
function andersToCash(anders = 0, country = "BG_EU") {
    if (!checkValidCountryCode(country)) return "0.00";

    // const { averageAndermant, averageAnderCost } = countryPrices[country];
    const avrgAndersNum = countryPrices[country]["averageAndermant"];
    const avrgAndersPrice = countryPrices[country]["averageAnderCost"];

    const res = (anders / avrgAndersNum) * avrgAndersPrice;

    return res.toFixed(2);
}

function shinyDustToCash(totalDust = 0, country = "BG_EU"){
    if (!checkValidCountryCode(country)) return 0;
    let res = totalDust / 105000 * countryPrices[country]["midDustPack"];
    return res.toFixed(2);
}

function getIPsToAnders(ips){
    return ips*0;
}


function TotalPriceSum(args = []){
    let sum = 0;
    for (let i=0; i<args.length; i++){
        sum+= parseFloat(args[i])
    }
    return sum
}

function calculateTotalDust(gemsRarityArr, gemTypesArr, countsArr) {
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

function calculateTotalPrice(gemsRarityArr, gemTypesArr, countsArr){
    let totalDust = calculateTotalDust(gemsRarityArr, gemTypesArr, countsArr)
    return Number(shinyDustToCash(totalDust, "BG_EU"));

}

// function calculateTotalPrice(gemsRarityArr, gemTypesArr, countsArr, country=countryPrices["BG_EU"]) {
//     let totalPrice = 0;
//     let index = 0;

//     for (let i = 0; i < gemsRarityArr.length; i++) {
//         for (let j = 0; j < gemTypesArr.length; j++) {
//             const currCount = countsArr[index];

//             const priceVal = GemsPseudoDB[gemID][2]; // assuming index 2 is price
//             totalPrice += currCount * priceVal;

//             index++;
//         }
//     }

//     return totalPrice;
// }