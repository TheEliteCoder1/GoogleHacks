
// Output:
// Changes Colors to Rgb

// Instructions:
// 1) Click on gmail link using inspect
// 2) Click on main page (content div)
// 3) Paste script in console

var speed = 100 // milisecs
var rotatedeg = 0;
var allDivs = document.getElementsByTagName('div');
var ContentDiv = document.getElementById("content")

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
    
    ContentDiv.className = "grid-container";
    for (var i = 0; i < ContentDiv.length; i++) {
        ContentDiv[i].className = "grid-item";
    }
    document.body.style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
    document.body.appendChild(`<h1 style="color='white';transform:rotate(${rotatedeg}deg);">RAINBOW</h1>`)
}
  
