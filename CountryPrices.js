// Sets countryPrices TL currencies to EU in real time
// await setRealTimeTLtoEU();
// // Update the country currencies in EU based on 
// setEUCurrencyPricesBasedOnTL();

// Initial prices, now converted (TL based on exchangerate.com api, rest based on converted TL prices, each other country price is lower than TL as TL has the lowest prices as of 01/06/2025)
export const countryPrices = {
  // can be changed accodingly to the "main" game currency
  
  "TR_EU": {
    // prices 28/05/2025
    "prem_per_month": 4.50,
    "deluxe_per_month": 10.12,
    "midDustPack": 4.50,
    "bigDustPack": 22.95,
    "averageAndermant": 33333.33,
    "averageAnderCost": 14.70,
  },
  "BG_EU": {
    "prem_per_month": 7.59,
    "deluxe_per_month": 16.49,
    "midDustPack": 7.59,
    "bigDustPack": 37.99,
    "averageAndermant": 33333.33,
    "averageAnderCost": 24.14,
  },
  "UK_GBP": {
    "prem_per_month": 8.99,
    "deluxe_per_month": 22.49,
    "midDustPack": 8.99,
    "bigDustPack": 45.99,
    "averageAndermant": 33333.33,
    "averageAnderCost": 28.79,
  }
};

const countryPricesOriginal = {
  // can be changed accodingly to the "main" game currency
  
  "TR_TL": {
    "prem_per_month": 199.9,
    "deluxe_per_month": 449.9,
    "midDustPack": 199.9,
    "bigDustPack": 1019.9,
    "averageAndermant": 33333.33,
    "averageAnderCost": 653.23,
  },
  "BG_EU": {
    "prem_per_month": 7.59,
    "deluxe_per_month": 16.49,
    "midDustPack": 7.59,
    "bigDustPack": 37.99,
    "averageAndermant": 33333.33,
    "averageAnderCost": 24.14,
  },
  "UK_GBP": {
    "prem_per_month": 8.99,
    "deluxe_per_month": 22.49,
    "midDustPack": 8.99,
    "bigDustPack": 45.99,
    "averageAndermant": 33333.33,
    "averageAnderCost": 28.79,
  }
};

// function setEUCurrencyPricesBasedOnTL(){
//   const countryCodesList = ["BG_EU"] // more country codes to be added.

//   countryCodesList.forEach(code => {
//     let updatedPremPerMonth = countryPrices["TR_EU"]["prem_per_month"] * (countryPrices["TR_EU"]["prem_per_month"] / countryPrices[code]["prem_per_month"]);
//     let updatedDeluxeperMonth = countryPrices["TR_EU"]["deluxe_per_month"] * (countryPrices["TR_EU"]["deluxe_per_month"] / countryPrices[code]["deluxe_per_month"]);
//     let updatedMidDustPack = countryPrices["TR_EU"]["midDustPack"] * (countryPrices["TR_EU"]["midDustPack"] / countryPrices[code]["midDustPack"]);
//     let updatedBigDustPack = countryPrices["TR_EU"]["bigDustPack"] * (countryPrices["TR_EU"]["bigDustPack"] / countryPrices[code]["bigDustPack"]);
//     let updatedAverageAndermant = countryPrices["TR_EU"]["averageAndermant"] * (countryPrices["TR_EU"]["averageAndermant"] / countryPrices[code]["averageAndermant"]);
//     let updatedAverageAnderCost = countryPrices["TR_EU"]["averageAnderCost"] * (countryPrices["TR_EU"]["averageAnderCost"] / countryPrices[code]["averageAnderCost"]);

//     countryPrices[code]["prem_per_month"] = (updatedPremPerMonth).toFixed(2);
//     countryPrices[code]["deluxe_per_month"] = (updatedDeluxeperMonth).toFixed(2);
//     countryPrices[code]["midDustPack"] = (updatedMidDustPack).toFixed(2);
//     countryPrices[code]["bigDustPack"] = updatedBigDustPack.toFixed(2);
//     countryPrices[code]["averageAndermant"] = updatedAverageAndermant.toFixed(2);
//     countryPrices[code]["averageAnderCost"] = updatedAverageAnderCost.toFixed(2);
//   })
// }

// // Utility: Fetch TL → EUR rate
// async function fetchTLtoEURRate() {
//   const resp = await fetch("https://api.exchangerate.host/latest?base=TRY&symbols=EUR");
//   const data = await resp.json();
//   return data.rates.EUR;
// }

// async function fetchGBPtoEURRate(){
//   const resp = await fetch("https://api.exchangerate.host/latest?base=GBP&symbols=EUR");
//   const data = await resp.json();
//   return data.rates.EUR;
// }

// async function setRealTimeTLtoEU(){
//     const rate = await fetchTLtoEURRate();
//     const TRPrices = countryPricesOriginal[countryCode];
//     // Convert all TL-based fields
//       countryPrices["TR_EU"]["prem_per_month"]= (TRPrices.prem_per_month * rate).toFixed(2);
//       countryPrices["TR_EU"]["deluxe_per_month"]= (TRPrices.deluxe_per_month * rate).toFixed(2);
//       countryPrices["TR_EU"]["midDustPack"]= (TRPrices.midDustPack * rate).toFixed(2);
//       countryPrices["TR_EU"]["bigDustPack"]= (TRPrices.bigDustPack * rate).toFixed(2);
//       countryPrices["TR_EU"]["averageAndermant"]= TRPrices.averageAndermant;
//       countryPrices["TR_EU"]["averageAnderCost"]= (TRPrices.averageAnderCost * rate).toFixed(2);
// }

// Main export: always returns prices in EUR, real-time for Turkey!
// export async function getCountryPricesInEUR(countryCode) {
//   if (countryCode === "TR_EU") {
//     const rate = await fetchTLtoEURRate();
//     const tr = countryPrices["TR_EU"];
//     // Convert all TL-based fields
//     return {
//       prem_per_month: (tr.prem_per_month * rate).toFixed(2),
//       deluxe_per_month: (tr.deluxe_per_month * rate).toFixed(2),
//       midDustPack: (tr.midDustPack * rate).toFixed(2),
//       bigDustPack: (tr.bigDustPack * rate).toFixed(2),
//       averageAndermant: tr.averageAndermant,
//       averageAnderCost: (tr.averageAnderCost * rate).toFixed(2),
//     };
//   } else {
//     // Return static prices for other countries
//     return countryPrices[countryCode];
//   }
// }