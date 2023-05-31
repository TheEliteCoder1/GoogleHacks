
// Output:
// Changes Colors to Rgb

// Instructions:
// 1) Click on gmail link using inspect
// 2) Click on main page (content div)
// 3) Paste script in console

var speed = 100 // milisecs

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
  for (var i = 0; i < document.getElementsByTagName(`div`).length; i++) {
    var Div = document.getElementsByTagName(`div`)[i];
    Div.class = `grid-container`;
    for (var j = 0; j < Div.childNodes.length; j++) {
      var DivChild = Div.childNodes[j];
      DivChild.class = `grid-item`;
    }
  }
  for (var k = 0; k < document.getElementsByTagName(`body`).length; k++) {
    var body = document.getElementsByTagName(`body`)[k];
    body.style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
    for (var l = 0; l < body.childNodes.length; l++) {
        body.childNodes[i].backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
    }
  }
  
}
