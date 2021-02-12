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
