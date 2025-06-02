let counter;
let fileText = ""
const path = "./counter.txt"

async function getFileContent() {
    const response = await fetch(path);
    const text = await response.text();
    return text;
}

async function getCurrentCount() {
    const contentArr = (await getFileContent()).trim().split(" ");
    let res = parseInt(contentArr[4])
    return res
}

getCurrentCount().then(count => {
    counter+=count;
})

// rewrite count in text file to new counter val