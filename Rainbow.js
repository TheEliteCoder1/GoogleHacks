
// Output:
// Changes Colors to Rgb

// Instructions:
// Click on gmail link using inspect in webpage before pasting this script.

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
  }
  
}
