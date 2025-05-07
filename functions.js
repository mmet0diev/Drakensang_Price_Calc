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


function andersToCash(anders = 0 , country = "BG_EU"){
    let medianAnderCost;
    let averageAnders;
    if(checkValidCountryCode(country)){
        medianAnderCost = countryPrices[country].averageAnderCost;
        averageAnders = countryPrices[country].averageAnders;
    }else{
        medianAnderCost = undefined;
        averageAnders = undefined;
    }

    let accAndersInAverageAnders = 0;
    anders < averageAnders ? accAndersInAverageAnders = parseFloat(averageAnders / ander) : accAndersInAverageAnders = parseFloat(anders / averageAnders)
    return accAndersInAverageAnders;
}