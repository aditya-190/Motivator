fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(obj => {
            document.getElementById('quote').innerHTML = obj.content;
            let author = `By - ${obj.author}`;
            let subString = "By -";
            author.replace(subString, '<b>' + subString + '</b>');
            document.getElementById('author').innerHTML = author;
        }
    );

function showToast(message) {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    snackbar.innerText = message;
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

function copyMe() {
    const copyText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(copyText).then(() =>
        showToast("Quote copied to clipboard.")
    );
}