export function premDaysToCash(days = 0, country = "BG_EU") {
    // let res = parseFloat(0);
    // let price = Number(country[prem_per_month].valueOf());
    const period = 30;
    let costPerDay = Number((period / 7.59).toFixed(2))
    return costPerDay
}