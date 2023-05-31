
// Output:
// Changes Colors to Rgb

// Instructions:
// 1) Click on gmail link using inspect
// 2) Find div with id content', and double click to change it to 'mycontent'
// 3) Paste script in console
// Note: (not compatible with IE browsers)

var speed = 100 // milisecs
var rotatedeg = 0;
var allDivs = document.getElementsByTagName('div');

setInterval(program, speed);
setInterval(changeBackground, speed);


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function program() {
  for (var i = 0; i < document.getElementsByTagName(`a`).length; i++) {
      for (var j = 0; j < 1000; j++) {
        document.getElementsByTagName(`a`)[i].style.color = `white`;
        document.getElementsByTagName(`a`)[i].style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
    }
  }
}

function changeBackground() {
    if (rotatedeg < 360)
    {
        rotatedeg += 1;
    } else {
        rotatedeg = 0;
        rotateDeg();
    }
    

    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add("grid-container")
        for (var j = 0; j < allDivs.children.length; j++) {
            allDivs.children[j].classList.add("grid-item")
        }
    }
}
  
