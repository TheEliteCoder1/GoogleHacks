// Makes numbers from 0 to 1000
// spawn from main page elements

for (var i = 0; i < document.getElementsByClassName("gb_v").length; i++) {
  for (var j = 0; j < 1000; j++) {
    console.log(document.getElementsByClassName("gb_v")[i]);
  }
}
