
// Output:
// Makes page go Rainbow!

// Instructions:
// 1) Find div with id 'content', click on it
// 2) Paste script in console
// Note: (not compatible with IE browsers)

var speed = 100; // milisecs
var rotatedeg = 0;
var allDivs = document.querySelectorAll('div');
var shakeFactor = 1;
var maxDanceTexts = 10;
var danceTexts = 0;

window.onload = setInterval(changeBackground, speed);


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// check for keyPress
document.onkeypress = function (e) {
    e = e || window.event;
    var pressedKey = String.fromCharCode(e.keyCode)
    if (pressedKey == "w") {
        if (shakeFactor < 6) {
            shakeFactor += 1
        } else {
            alert("You cannot have a shakeFactor greater than 6.")
        }
    }
    if (pressedKey == "s") {
        if (shakeFactor > 1) {
            shakeFactor -= 1
        } else {
            alert("You cannot have a shakeFactor less than 1.")
        }
    }
    
};


function changeBackground() {
    if (rotatedeg < shakeFactor)
    {
        rotatedeg += 1;
    } else {
        rotatedeg = 0;
    };
    

  
   for (var i = 0; i < allDivs.length; i++) {
        // comment diffrent features
       if (danceTexts < maxDanceTexts)
       {
           var div = document.createElement('div');
           div.innerHTML = "Dance!"
           allDivs[i].appendChild(div);
       }
        //allDivs[i].style.transform = `rotate(${rotatedeg}deg)`;
        allDivs[i].style.transform = `translate(${Math.sin(rotatedeg) * shakeFactor}px, ${Math.cos(rotatedeg) * shakeFactor}px)`;
   }
};
  
