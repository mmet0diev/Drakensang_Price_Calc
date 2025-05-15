import {premDaysToCash, andersToCash, shinyDustToCash, getIPsToAnders} from "./functions.js"

// function displayPremDaysToCashRes(page_element){
//     document.getElementById(page_element).textContent = premDaysToCash(200, "BG_EU")
// }

window.displayIpsInCash = function(page_element){
    document.getElementById(page_element).textContent = parseInt(getIPsToAnders(2000))
}