fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(obj => {
            if (obj) {
                const quote = document.getElementById('quote');
                const author = document.getElementById('author');
                quote.innerHTML = obj.content;
                author.innerHTML = '- ' + obj.author;
            }
        }
    );
