window.onload = function() {
	refreshQuote();
}

function refreshQuote() {
	let url = 'https://api.quotable.io/random';
	let div = document.getElementById( 'quote' );
	div.innerHTML = '';
	fetch( url )
		.then( response => response.json() )
		.then( json => showQuote( json ) )
		.catch( err => console.log( err ) );
}

function showQuote( json ) {
	let quote = json.content;
	let author = json.author;
	let div = document.getElementById( 'quote' );
	let paragraph = document.createElement( 'p' );
	paragraph.id = 'author';
	paragraph.innerHTML = '-- ' + author;
	div.innerHTML = quote;
	div.appendChild( paragraph );
	//container.appendChild(div);
}


