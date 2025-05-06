import { countryPrices } from "./CountryPrices.js";
export { premDaysToCash };

function premDaysToCash(days = 0, country = "BG_EU") {
    let prem_month_price;
    if(countryPrices[country]){
        prem_month_price = countryPrices[country].prem_per_month;
    }else{
        prem_month_price = undefined;
    }
    
    if (!prem_month_price) {
        throw new Error(`Invalid country code: ${country}`);
    }

    const period = 30;


    let costPerDay = prem_month_price / period;
    let res = Number((days*costPerDay).toFixed(2));
    return res;
}