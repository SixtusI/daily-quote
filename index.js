
const api_url = "https://zenquotes.io/api/today";
const author = document.getElementById("author");
const quote = document.getElementById("quote");

async function getquote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data[0].q;
    author.innerHTML = data[0].a;
}
getquote(api_url);