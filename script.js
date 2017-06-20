
 var quotes = new Array (
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_0.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_1.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_2.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_3.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_4.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_5.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_7.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_8.png",
"https://raw.githubusercontent.com/AsiaKo/Random-Quote-/5607185cccfa6dcdf356bc80104dbc08f142b14c/Quote_9.png"
 );

// Refresh quote 
document.getElementById("refresh").onclick = newQuote;
function newQuote() {
  var randomQuote = Math.floor(Math.random() * (quotes.length));
  document.getElementById('Quote_Pic').src = quotes[randomQuote];
}

// Post to facebook 
document.getElementById("facebook").onclick = postFB;
function postFB() {
  var url = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(quotes[randomQuote]);
  window.open(url);
}

// Tweet quote 
document.getElementById("tweeter").onclick = tweet;
function tweet() {
  var url = "http://twitter.com/share?text=" + encodeURIComponent('Enjoy this Quote Card ' + quotes[randomQuote]);
  window.open(url);
}








