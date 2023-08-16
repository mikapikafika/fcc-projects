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
            // Fading out text and collapsing the quote container
            $("#quote-text-container").css("opacity", 0);
            $("#quote-box").removeClass("expanded");

            setTimeout(function() {
                quote.text(data.content);
                author.text("~ " + data.author);
                $("#quote-text-container").css("opacity", 1);
                $("#quote-box").addClass("expanded");
            }, 500);
        }
    }

    const gradientBgs = [
        "bg1", "bg2", "bg3", "bg4", "bg5"
    ];
    const body = $("body");
    let bgIndex = 0;

    function changeBackground() {
        const nextBgIndex = (bgIndex + 1) % gradientBgs.length;
        const nextBgClass = gradientBgs[nextBgIndex];
        body.removeClass(gradientBgs.join(" "));
        body.addClass(nextBgClass);
        bgIndex = nextBgIndex;
    }

    button.click(function() {
        newQuote();
        changeBackground();
    });
    // To initially show a quote when the page loads
    newQuote()
});