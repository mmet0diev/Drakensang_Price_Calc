import { countryPrices } from "./CountryPrices.js";
import { shinyDustUnits} from "./ShinyDustObjects.js";
export { premDaysToCash, andersToCash, shinyDustToCashV2, getIPsToAnders, shinyDustToCashV1, TotalPriceSum};

function checkValidCountryCode(country) {
    const countryCodes = Object.keys(countryPrices)
    return countryCodes.includes(country)
}

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

function shinyDustToCashV1(totalDust = 0, country = "BG_EU"){
    if (!checkValidCountryCode(country)) return 0;
    let res = totalDust / 105000 * countryPrices[country]["midDustPack"];
    return res.toFixed(2);
}

function shinyDustToCashV2(dustUnitsArgs = {}, country = "BG_EU") {
    if (!checkValidCountryCode(country)) return 0;

    let totalDust = 0;

    for (let unit in dustUnitsArgs) {
        const count = dustUnitsArgs[unit];
        const unitData = shinyDustUnits[unit];

        if (!unitData) continue;

        const costPerUnit = unitData[1];
        totalDust += count * costPerUnit;
    }
    
    console.log(totalDust);

    const midDustPackSize = 105000;
    const midDustPackPrice = countryPrices[country]["midDustPack"];
    const dustRatio = totalDust / midDustPackSize;

    const totalPrice = dustRatio * midDustPackPrice;
    return totalPrice.toFixed(2);
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

function getTotalDustOfGems(GemTypes = {}){
    
}