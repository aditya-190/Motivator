fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(obj => {
            document.getElementById('quote').innerHTML = obj.content;
            document.getElementById('author').innerHTML = `By - ${obj.author}`;
        }
    );

function copyMe() {
    const copyText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(copyText).then(r =>
        alert("Quote Copied: " + copyText)
    );
}