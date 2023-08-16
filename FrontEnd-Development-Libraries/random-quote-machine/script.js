$(document).ready(function() {

    async function newQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (!response.ok) {

        } else {

        }
    }

});