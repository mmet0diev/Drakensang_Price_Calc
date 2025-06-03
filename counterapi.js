const calcAppName = "mmet0diev_dso_price_calculator";
const apiurl = `https://api.countapi.xyz/create?namespace=${calcAppName}&key=visits&value=0`;

// Create a counter (first time only) in your browser console:
fetch(apiurl)

// Increment and get the count on each visit:
fetch(apiurl)
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitCounter').textContent = data.value;
  });