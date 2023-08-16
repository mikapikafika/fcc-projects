$(document).ready(function() {
    // DOM variables
    const quote = $("#text");
    const author =$("#author");
    const button = $("#new-quote");

    async function newQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            quote.textContent = "Oops... something went wrong.";
        } else {
            quote.text(data.content);
            author.text(data.author);
        }
    }

    button.click(newQuote);
    // To initially show a quote when the page loads
    newQuote()
});