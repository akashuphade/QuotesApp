// Get countries data
//let url = 'https://type.fit/api/quotes';
let url = 'https://api.quotable.io/random';

fetch(url)
	.then(response => response.json())
	.then(json => showQuote(json))
	.catch(err => console.log(err));

function showQuote(json) {
	let quote = json.content;
	let author = json.author;
	let container = document.getElementById('container');
	let div = document.createElement('div');
	let paragraph = document.createElement('p');
	paragraph.id = 'author';
	paragraph.innerHTML = '-- ' + author;
	div.innerHTML = quote;
	div.appendChild(paragraph);
	container.appendChild(div);
}



