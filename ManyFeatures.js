
// Output:
// Makes page go Rainbow!

// Instructions:
// 1) Find div with id 'content', click on it
// 2) Paste script in console
// Note: (not compatible with IE browsers)

var speed = 10; // milisecs
var rotatedeg = 0;
var allDivs = document.querySelectorAll('div');
var randomColorLimit = 10;

window.onload = setInterval(changeBackground, speed);


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// check for keyPress
document.onkeypress = function (e) {
    e = e || window.event;
    var pressedKey = String.fromCharCode(e.keyCode)
    if (pressedKey == "w") {
        if (randomColorLimit < 255) {
            randomColorLimit += 1
        } else {
            alert("You cannot have a randomColorLimit greater than 255.")
        }
    }
    if (pressedKey == "s") {
        if (randomColorLimit > 0) {
            randomColorLimit -= 1
        } else {
            alert("You cannot have a randomColorLimit less than 0.")
        }
    }
    
};


function changeBackground() {
    if (rotatedeg < randomColorLimit)
    {
        rotatedeg += 1;
    } else {
        rotatedeg = 0;
    };
    

  
   for (var i = 0; i < allDivs.length; i++) {
        //allDivs[i].style.color = `white`;
        // comment diffrent features
        //allDivs[i].style.transform = `rotate(${rotatedeg}deg)`;
        var xPos = Math.sin(rotatedeg);
        var YPos = Math.cos(rotatedeg);
        allDivs[i].style.transform = `translate(${xPos}px, ${yPos}px)`;
        //allDivs[i].style.transform = `matrix(${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg})`;
        //allDivs[i].style.backgroundColor = `rgba(${numberInRange(0, randomColorLimit)}, ${numberInRange(0, randomColorLimit)}, ${numberInRange(0, randomColorLimit)}, ${numberInRange(0.5, 1)})`;
   }
};
  
