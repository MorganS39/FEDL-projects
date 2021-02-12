// Build a random quote machine
/* Requirements:
User story#1: wrapper element corresponding id="quote-box"
User story#2: within #quote-box, element with corresponding id="text"
user story#3: within #quote-box, element with corresponding id="author"
user story#4: within #quote-box, clickable element with corresponding id="new-quote"
user story#5: within #quote-box, clickable <a></a> element with id="tweet-quote"
user story#6: On first load, quote machine displays random quote in the element with id="text"
user story#7: On first load, display random author with element id="author"
user story#8: when #new-quote button is clicked, new quote is displayed in #text element
user story#9: should fetch new author when #new-quote button is clicked displayed in #author
user story#10: ability to tweet current quote by clicking #tweet-quote``a element
            This <a></a> should include "twitter.com/intent/tweet" path in it's href
            Use target="_blank" to ensure tweet will load
user story#11: the #quote-box wrapper element should be horizontally centered.
            run a test with browser's zoom at 100% and page maximized
*/
var currentQuote = "";
var currentAuthor = "";

var quoteArray = [
    "And makes us rather bear those ills we have Than fly to others that we know not of\? - William Shakespeare",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment - Ralph Waldo Emerson",
    "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson",
    "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense. - Ralph Waldo Emerson",
    "It is one of the blessings of old friends that you can afford to be stupid with them. - Ralph Waldo Emerson",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Politics is not a bad profession. If you succeed there are many rewards, if you disgrace yourself you can always write a book. - Ronald Reagan",
    "Good company and good discourse are the very sinews of virtue. - Izaak Walton",
    "Behind every great fortune there is a crime. - Honore de Balzac",
    "We've heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true. - Robert Welensky"
];

function newQuote() {
    var randomQuote = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById("quoteDisplay").innerHTML = quoteArray[randomQuote];
}