async function countapi() {
    let getCount = fetch("https://api.counterapi.dev/v1")
    let response = await getCount;
    let data = await response.text()
    console.log(data)

}

countapi()
