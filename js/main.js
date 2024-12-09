getQuote()

document.getElementById("copyQuote").addEventListener("click", function () {
    const copyText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(copyText).then(() =>
        showTooltip("Quote copied &#10003;")
    );
})

function getQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes", {
        method: 'GET',
        headers: {
            'X-Api-Key': 'xrYJUJOgsJ0nmvtWxp/T5g==KK5BsQ9f9JUP6Qs9'
        }
    })
        .then(data => data.json())
        .then(data => data[0])
        .then(obj => {
            document.getElementById('quote').innerHTML = obj.quote;
            document.getElementById('author').innerHTML = `By - ${obj.author}`;
        }
        );
}

function showTooltip(message = "Copy to clipboard") {
    document.getElementById("myTooltip").innerHTML = message;
}
