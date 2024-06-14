async function getClipboard() {
    return await navigator.clipboard.readText();
}

getClipboard().then((result) => {console.log(result)})