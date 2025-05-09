import {premDaysToCash, andersToCash, shinyDustToCash} from "./functions.js"

// console.log(`15 days of premium in € = ${premDaysToCash(15, "BG_EU")}`);
// console.log(`1 day of premium in  € = ${premDaysToCash(1, "BG_EU")}`);
// console.log(`174 day of premium in  € = ${premDaysToCash(174, "BG_EU")}`);
// console.log(`980 day of premium in  € = ${premDaysToCash(980, "BG_EU")}`);

// console.log(`1 day of premium in  € (UK price) = ${premDaysToCash(1, "UK_EU")}`);
// console.log(`174 day of premium in  € (UK price) = ${premDaysToCash(174, "UK_EU")}`);
// console.log(`980 day of premium in  € (UK price) = ${premDaysToCash(980, "UK_EU")}`);

// console.log(`${andersToCash(12121)}`)
// console.log(`${andersToCash(1)}`)
// console.log(`${andersToCash(2)}`)
// console.log(`${andersToCash(3)}`)
// console.log(`${andersToCash(4)}`)
// console.log(`${andersToCash(5)}`)
// console.log(`${andersToCash(6)}`)

console.log(shinyDustToCash({"refined-trapezoid_amethyst" : 1, "radiant_onyx" : 20, "brilliant-imperial_onyx" : 2}));