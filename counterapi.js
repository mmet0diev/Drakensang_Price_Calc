export function displayVisitsCount() {
  const namespace = "mmet0diev_namespace";
  const key = "calc_app_count";

  const url = `https://api.countapi.store/hit/${namespace}/${key}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("visitCounter").textContent = data.value;
    })
    .catch(err => console.error("Visit counter error:", err));
}