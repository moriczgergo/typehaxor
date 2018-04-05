// TypeHaxor
// built by skiilaa, doesn't work /yet/
// 2018 L y r i d i u m
// Made for educational purposes: don't actually use it.
// pv0
//

// PASTE THIS INTO THE CONSOLE WHEN THE RACE HAS STARTED, AND KEEP MOVING YOUR MOUSE OVER THE INPUT BOX //

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

// SECOND CHEATING PROTECTION BYPASS ---- DOESN'T WORK //

window.setInterval = function() {}; // Patch setInterval with empty function
window.ZWb = function (a) { // Patch decider function to allow everything (NAY, this is just the display logic.)
    var b, d, c, e;
    Zb(new Ot(jf((S(),
    S(),
    X))));
    b = new wu('Typing Challenge Passed',G0,true);
    d = Se(K(Z, W, 205, [elb(new hz(z_), K(Bt, kb, 408, [K(eb, fb, 1, [GV, O + Tg(Yf(0), a.c)]), K(eb, fb, 1, [PT, O + ps((Fj(),
    !Yo && (Yo = new Xo(bS,ns(),false)),
    Fj(),
    Yo), a.b)])])), _i('Congratulations! You are now certified as able to type ' + Tg(Yf(0), a.e) + eD, y_)]));
    lA(X) && Xd(d, L2b(iP("to save your certified speed (so you don't have to take this test every time):"), new Xsb(b)));
    b.i.hb(d);
    Oj(b, new Tp(b,0.333))
};