import { countryPrices } from "./CountryPrices.js";
import { GemsCountMap, shinyDustPerGemsMap } from "./GameGems.js";
export { premDaysToCash, andersToCash, shinyDustToCash };

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


// This function calculates the dust of a character according to the prices of dust packages (mid and big) specified for the specific country
function shinyDustToCash(GemsCountsArguments = {}, country = "BG_EU") {
    let sum = 0;
    // Update the value for each gem in GemsCounts collection.
    let allGemsNames = Object.keys(GemsCountMap)
    let gemsNamesList = []
    for (let item of allGemsNames) {
        // console.log(GemsCountsArguments[item] + " equal to " + GemsCounts[item] + " ?")
        if (GemsCountsArguments[item] > GemsCountMap[item]) {
            GemsCountMap[item] = GemsCountsArguments[item];
            gemsNamesList.push(item)
        }
    }

    let splitGemsNamesList = []
    for (let item of gemsNamesList) {
        let splitElement = item.split("_")
        splitGemsNamesList.push(splitElement)
    }

    let totalDust = 0;
    
    for (let arr of splitGemsNamesList) {
        totalDust += shinyDustPerGemsMap[arr[0]][arr[1]] * GemsCountMap[arr[0]+"_"+arr[1]]
    }
    console.log(totalDust)
    return sum;
}


