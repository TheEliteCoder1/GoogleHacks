
// Output:
// Makes page go Rainbow!

// Instructions:
// 1) Find div with id 'content', click on it
// 2) Paste script in console
// Note: (not compatible with IE browsers)

var speed = 200; // milisecs
var rotatedeg = 0;
var allDivs = document.querySelectorAll('div');

window.onload = setInterval(changeBackground, speed);


function numberInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function changeBackground() {
    if (rotatedeg < 10)
    {
        rotatedeg += 1;
    } else {
        rotatedeg = 0;
    };
    

  
   for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.color = `white`;
        // comment diffrent features
        allDivs[i].style.transform = `translate(${rotatedeg}px, ${rotatedeg}px)`;
        //allDivs[i].style.transform = `matrix(${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg},${rotatedeg})`;
        //allDivs[i].style.backgroundColor = `rgba(${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0, 255)}, ${numberInRange(0.5, 1)})`;
   }
};
  
