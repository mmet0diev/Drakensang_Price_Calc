

export const countryPrices = {
  // can be changed accodingly to the "main" game currency
  
  "TR_EU": {
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
    "prem_per_month_tl": 199.9,
    "deluxe_per_month_tl": 449.9,
    "midDustPack_tl": 199.9,
    "bigDustPack_tl": 999.9,
    "averageAndermant": 33333.33,
    "averageAnderCost_tl": 653.23,
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



// Utility: Fetch TL → EUR rate
async function fetchTLtoEURRate() {
  const resp = await fetch("https://api.exchangerate.host/latest?base=TRY&symbols=EUR");
  const data = await resp.json();
  return data.rates.EUR;
}

async function fetchGBPtoEURRate(){
  const resp = await fetch("https://api.exchangerate.host/latest?base=GBP&symbols=EUR");
  const data = await resp.json();
  return data.rates.EUR;
}

// Main export: always returns prices in EUR, real-time for Turkey!
export async function getCountryPricesInEUR(countryCode) {
  if (countryCode === "TR_EU") {
    const rate = await fetchTLtoEURRate();
    const tr = countryPrices["TR_EU"];
    // Convert all TL-based fields
    return {
      prem_per_month: (tr.prem_per_month_tl * rate).toFixed(2),
      deluxe_per_month: (tr.deluxe_per_month_tl * rate).toFixed(2),
      midDustPack: (tr.midDustPack_tl * rate).toFixed(2),
      bigDustPack: (tr.bigDustPack_tl * rate).toFixed(2),
      averageAndermant: tr.averageAndermant,
      averageAnderCost: (tr.averageAnderCost_tl * rate).toFixed(2),
    };
  } else {
    // Return static prices for other countries
    return countryPrices[countryCode];
  }
}