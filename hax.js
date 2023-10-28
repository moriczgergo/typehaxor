// TypeHaxor
// built by skiilaa, doesn't work /yet/
// 2018 L y r i d i u m
// Made for educational purposes: don't actually use it.
// pv0
//

// PASTE THIS INTO THE CONSOLE (into 'top') WHEN THE RACE HAS STARTED, AND KEEP MOVING YOUR MOUSE OVER THE INPUT BOX //

var speed = 40; // A number between ~40 and Infinity, specifies millisecond delay between character types.

var textToType = document.getElementsByClassName("gameView")[0].rows[1].cells[0].firstChild.rows[0].cells[0].firstChild.rows[0].cells[0].firstChild.firstChild.innerText; // Get text container
var counter = 0; // Letter counter, to avoid overflow.

var intervalId = setInterval(function() { //Type by specified delay, to avoid cheat detection
    document.getElementsByClassName("gameView")[0].rows[1].cells[0].firstChild.rows[1].cells[0].firstChild.value += textToType[counter]; // Add a new character
    if (counter == textToType.length - 1) { // If text's over
        clearInterval(intervalId); // Stop typing
    } else { // Else
        counter++;
    }
}, speed);

// TYPING CHALLENGE BYPASS --- ONLY USE WHEN THE TYPING CHALLENGE BOX HAS APPEARED //

// Paste this not into 'top' in the Console, but into 'com.typeracer.guest.Guest'.

window.interPwned = function(requestText) { // Create picture-grabber function
    var parsedRequestText = requestText.split("|"); // Split request text
    if (parsedRequestText[6].trim() == "getTypingChallenge") { // Check if API call is getTypingChallange, since aMb seems to be a universal xhr function
        console.log("Pwned!"); // *waves*
        var imageAddress = encodeURI(`http://play.typeracer.com/challenge?id=${parsedRequestText[8]}`); // grab & format the captcha image address
        console.log(`Image Address: ${imageAddress}`); // log image address for debugging
        alert(`PWNED! ${imageAddress}`); // alert image address
        return imageAddress; // just random stuff
    }
    return null; // just random stuff
};
window.aMb = function (d, i, g) { // Patch HTTP Request function
    var a, b, e, f, c;
    c = YLb();
    try {
        ZLb(c, d.e, d.c)
    } catch (a) {
        a = mb(a);
        if (N(a, 38)) {
            b = a;
            f = M(function() {
                return new Gab(d.c)
            });
            dJb(f, M(function() {
                return new tx((b.b == null && zm(b),
                b.b))
            }));
            throw f
        } else
            throw a
    }
    $Lb(d, c);
    e = new Eab(c,d.g,g);
    _Lb(c, new Hab(e,g));
    try {
        var pwn = window.interPwned(i); // Inject our function in the client-side code
        c.send(i)
    } catch (a) {
        a = mb(a);
        if (N(a, 38)) {
            b = a;
            throw M(function() {
                return new tx((b.b == null && zm(b),
                b.b))
            })
        } else
            throw a
    }
    return e
};