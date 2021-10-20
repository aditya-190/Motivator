getQuote()

document.getElementById("copyQuote").addEventListener("click", function () {
    const copyText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(copyText).then(() =>
        showTooltip("Quote copied &#10003;")
    );
})

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(data => data.json())
        .then(obj => {
                document.getElementById('quote').innerHTML = obj.content;
                document.getElementById('author').innerHTML = `By - ${obj.author}`;
            }
        );
}

function showTooltip(message = "Copy to clipboard") {
    document.getElementById("myTooltip").innerHTML = message;
}