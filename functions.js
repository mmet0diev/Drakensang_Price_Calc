import { countryPrices } from "./CountryPrices.js";
import { shinyDustUnits} from "./ShinyDustObjects.js";
export { premDaysToCash, andersToCash, shinyDustToCash, IPsToCash};

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
    let medianAnderCost;
    let averageAnders;
    if (checkValidCountryCode(country)) {
        medianAnderCost = countryPrices[country].averageAnderCost;
        averageAnders = countryPrices[country].averageAndermant;
    } else {
        medianAnderCost = undefined;
        averageAnders = undefined;
    }

    let currAndersInAverageAnders = 0;
    anders < averageAnders ? currAndersInAverageAnders = anders / averageAnders
        : currAndersInAverageAnders = averageAnders / anders;
    return (currAndersInAverageAnders * medianAnderCost).toFixed(2);
}


function shinyDustToCash(dustUnitsArgs = {}, country = "BG_EU") {
    if (!checkValidCountryCode(country)) return 0;

    let totalDust = 0;

    for (let unit in dustUnitsArgs) {
        const count = dustUnitsArgs[unit];
        const unitData = shinyDustUnits[unit];

        if (!unitData) continue;

        const costPerUnit = unitData[1];
        totalDust += count * costPerUnit;
    }

    const midDustPackSize = 105000;
    const midDustPackPrice = countryPrices[country]["midDustPack"];
    const dustRatio = totalDust / midDustPackSize;

    console.log(totalDust)

    const totalPrice = dustRatio * midDustPackPrice;
    return totalPrice.toFixed(2);
}


function IPsToCash(ips, country = "BG_EU"){
    let ipInAnder = ips*80;
    console.log(ipInAnder)
    let res;
    ipInAnder > countryPrices[country]["averageAndermant"] ? res = ((ipInAnder / countryPrices[country]["averageAndermant"])*countryPrices[country]["averageAnderCost"]).toFixed(2)
    : res = ((countryPrices[country]["averageAndermant"] / ipInAnder)*countryPrices[country]["averageAnderCost"]).toFixed(2);
    return res;
}