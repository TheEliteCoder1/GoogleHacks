
// Output:
// Changes Colors to Rgb

// Instructions:
// 1) Find div with id 'content', click on it
// 2) Paste script in console
// Note: (not compatible with IE browsers)

var speed = 100; // milisecs
var rotatedeg = 0;
var allDivs = document.getElementsByTagName('div');

setInterval(program, speed);
setInterval(changeBackground, speed);


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function program() {
  for (var i = 0; i < document.getElementsByTagName(`a`).length; i++) {
      for (var j = 0; j < 1000; j++) {
        document.getElementsByTagName(`a`)[i].style.color = `white`;
        document.getElementsByTagName(`a`)[i].style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
    };
  };
};

function changeBackground() {
    if (rotatedeg < 360)
    {
        rotatedeg += 1;
    } else {
        rotatedeg = 0;
        rotateDeg();
    };
    

   document.body.style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
   for (var i = 0; i < document.body.children.length; i++) {
       document.body.chlidren[i].style.transform = `rotate(${rotatedeg}deg);`;
   }
};
  
