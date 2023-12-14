const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const quoteBtn = document.querySelector(".quote-btn");
const tweetBtn = document.querySelector(".tweet-btn");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

quoteBtn.addEventListener("click", function () {
    getQuote(api_url);
});

tweetBtn.addEventListener("click", tweet);

function tweet() {
    window.open(
        "https://twitter.com/intent/tweet?text=" +
            quote.innerHTML +
            "---- by " +
            author.innerHTML,
        "Tweet Window",
        "width=600, height=300"
    );
}
