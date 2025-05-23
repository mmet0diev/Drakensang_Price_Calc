import { premDaysToCash, andersToCash, shinyDustToCashV1, getIPsToAnders } from "./functions.js";
import { GemsPseudoDB } from "./ShinyDustObjects.js";

// console.log(`15 days of premium in € = ${premDaysToCash(15, "BG_EU")}`);
// console.log(`1 day of premium in  € = ${premDaysToCash(1, "BG_EU")}`);
// console.log(`174 day of premium in  € = ${premDaysToCash(174, "BG_EU")}`);
// console.log(`980 day of premium in  € = ${premDaysToCash(980, "BG_EU")}`);

// console.log(`1 day of premium in  € (UK price) = ${premDaysToCash(1, "UK_EU")}`);
// console.log(`174 day of premium in  € (UK price) = ${premDaysToCash(174, "UK_EU")}`);
// console.log(`980 day of premium in  € (UK price) = ${premDaysToCash(980, "UK_EU")}`);

// console.log(`${andersToCash(12121)}`)
// console.log(`${andersToCash(35000)}`)
// console.log(`${andersToCash(2)}`)
// console.log(`${andersToCash(3)}`)
// console.log(`${andersToCash(4)}`)
// console.log(`${andersToCash(5)}`)
// console.log(`${andersToCash(6)}`)

// let totalSum = premDaysToCash(966, "BG_EU")
// console.log(`966 Premium days = ${premDaysToCash(966, "BG_EU")} euro`)
// console.log("Total Dust price = " + shinyDustToCash({"brilliant-trapezoid_amethyst" : 27, "refined-imperial_ruby" : 20, "exquisite-imperial_amethyst" : 2, 
//     "exquisite-imperial_onyx" : 2, "refined-imperial_diamond" : 10, "refined-imperial_cyanite" : 10, "imperial-zircon" : 10, "brilliant-imperial_emerald" : 3, "refined-imperial_emerald" : 7,
// "imperial_ruby" : 20, "imperial_onyx" : 10, "imperial_emerald" : 10, "brilliant-imperial_rhodolite" : 3, "refined-imperial_rhodolite" : 7, "refined-imperial_onyx" : 10}) + " euro")

// console.log(andersToCash(500, "BG_EU"))
// console.log(shinyDustToCash({"exquisite-imperial_onyx" : [0, 50]}));
// console.log(shinyDustToCash({"exquisite-imperial_ruby" : 10, "flawed_amethyst" : 1}, "BG_EU"));

// console.log(getIPsToAnders(18000))
// console.log(andersToCash(getIPsToAnders(18000), "BG_EU"))

// console.log(shinyDustToCashV2({"exquisite-imperial_ruby" : 10}))
// console.log(shinyDustToCashV2({"sacred_amethyst" : 10}))



// shinyDustToCashV2({"refined-imperial_ruby" : 20, "imperial-ruby" : 20, "exquisite-imperial_amethyst" : 2, "brilliant-imperial_amethyst" : 27, "refined-imperial_cyanite" : 10, 
//     "refined-imperial_diamond" : 10, "exquisite-imperial_onyx" : 2, "brilliant-imperial_onyx" : 8, "refined-imperial_onyx" : 20, "imperial-emerald" : 20})

// window.getAllTableCellsContent = function(){
//     const mytable = document.getElementById("myTable");
//     const rows = mytable.querySelectorAll("tr");

//     rows.forEach((rows, rowIndex) => {
//         const cells = rows.querySelectorAll("th, td");
//         cells.forEach((cell, cellindex) => {
//             console.log(`Row: ${rows.id}, ${rowIndex}\n Cell: ${cell.id}, ${cellindex}\n\n` )
//         })
//     });
// }

window.getAllTableCellsContent = function () {
    const mytable = document.getElementById("myTable");
    const gemRarityRowsList = mytable.querySelectorAll("tr");
    const gemTypeRowsList = mytable.querySelectorAll(".GemTypes th");

    // Convert gemTypeRowsList to array and assign the items starting from index 1 to 
    let gemTypesArr = Array.from(gemTypeRowsList).slice(1, gemTypeRowsList.length);
    let gemsRarityArr = Array.from(gemRarityRowsList).slice(1, gemRarityRowsList.length)

    // Update GemsPseudoDB gem count value
    gemRarityRowsList.forEach((rows) => {
        const gemRows = rows.querySelectorAll("td");
        
        gemRows.forEach(td => {
            let cellValue = td.querySelector('input').value;

        })

    })

    for (let i = 0; i < gemsRarityArr.length; i++) {
        for (let j = 0; j < gemTypesArr.length; j++) {
            let currGemMeltVal = Number(GemsPseudoDB[`${gemsRarityArr[i].id}_${gemTypesArr[j].id}`][1])
            let currGemCell = `${gemsRarityArr[i].id}_${gemTypesArr[j].id} = ${currGemMeltVal}`
            console.log(`${gemsRarityArr[i].id}_${gemTypesArr[j].id} = ${currGemMeltVal}\n`)
        }

    }


    // console.log(gemTypesArr)
    // console.log(gemsRarityArr)

    // gemRarityRowsList.forEach((rows) => {
    //     const gemRows = rows.querySelectorAll("td");
    //     cellIdsArr.push(rows.id)
    //     gemRows.forEach(inpt => {
    //         let cellContent = inpt.querySelector('input').value
    //         cellValuesArr.push(cellContent)
    //     });
    // });
}


