fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(obj => {
            document.getElementById('quote').innerHTML = obj.content;
            document.getElementById('author').innerHTML = `By - ${obj.author}`;
        }
    );

function copyMe() {
    let copyText = document.getElementById('quote');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Quote Copied2: " + copyText.value);
}