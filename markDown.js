function render() {
    var input = document.getElementById("editor");
    var preview = `
<h1>This is an h1 header</h1>
<h2>This is an h2 subheader</h2>
<a href="#">This is a link</a>
<p>Here is an example of JavaScript code: 
      function newQuote() {
    var randomQuote = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById("text").innerHTML = quoteArray[randomQuote];
};
`
};