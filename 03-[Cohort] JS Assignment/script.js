const container = document.querySelector(".container")
const containers = document.getElementById("containers")
const download = document.getElementById("download")
const generateButton = document.getElementById("generateButton")
const quoteDisplay = document.getElementById("quoteDisplay")
const author = document.getElementById("author")

const randomQuote = async() => {
    const resposne = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    const data = await resposne.json().then(res=> res.data).catch(err=> err)

    return {quote: data.content, author: data.author}
}


generateButton.addEventListener("click", async()=>{
    const quote = await randomQuote().then(res=> res).catch(err=> err);
    
    quoteDisplay.innerText = quote.quote;
    author.innerText = quote.author
})

download.addEventListener("click", () => {
    htmlToImage.toBlob(document.getElementById("containers"))
    .then(function (blob) {
        saveAs(blob, `gokuthecoder_quote_${Date.now()}.jpg`);
    });
});

(async()=>{
    const quote = await randomQuote().then(res=> res).catch(err=> err);
    quoteDisplay.innerText = quote.quote;
    author.innerText = quote.author
})()

