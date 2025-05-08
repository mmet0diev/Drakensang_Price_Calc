import {countryPrices} from "./CountryPrices.js";
export {premDaysToCash, andersToCash};

function checkValidCountryCode(country){
    const countryCodes = Object.keys(countryPrices)
    return countryCodes.includes(country)
}

function premDaysToCash(days = 0, country = "BG_EU") {
    let prem_month_price;
    if(checkValidCountryCode(country)){
        prem_month_price = countryPrices[country].prem_per_month;
    }else{
        prem_month_price = undefined;
    }

    const period = 30;

    let costPerDay = prem_month_price / period;
    let res = parseFloat((days*costPerDay).toFixed(2));
    return res;
}

/* 
The averageAnders is the sum of the anders of all 7 options to purchase andermants in the DSO shop divided by 7.
The averageAnderCost is the average (in money) of all 7 purchase options in the DSO shop divided by 7.
*/
function andersToCash(anders = 0 , country = "BG_EU"){
    let medianAnderCost;
    let averageAnders;
    if(checkValidCountryCode(country)){
        medianAnderCost = countryPrices[country].averageAnderCost;
        averageAnders = countryPrices[country].averageAndermant;
    }else{
        medianAnderCost = undefined;
        averageAnders = undefined;
    }

    let currAndersInAverageAnders = 0;
    anders < averageAnders ? currAndersInAverageAnders = anders / averageAnders 
    : currAndersInAverageAnders = averageAnders / anders;
    return (currAndersInAverageAnders*medianAnderCost).toFixed(2);
}


// This function should calculate the dust of a character according to the prices of dust packages (mid and big) specified for the specific country
function shinyDustToCash(flawed_amethyst, ){
    let sum = 0;
}