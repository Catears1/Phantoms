let bg;
let img;
var imgX = 200;
var imgY = 200;


function preload() {
  img = createImg('ghost.png');
  bg = createImg('graveyard.png');
}
function setup() {
  createCanvas(1300, 0);
  
}

function draw() {
  bg.size(1300,700);
  //sketch2();
  img.position(imgX, imgY);
  img.size(300,200);  
  
  if (keyIsPressed) {
   if (key === 'd' && imgX <= 1075) {
    imgX +=5; 
   } else if (key === 'a' && imgX >= -100) {
     imgX -= 5;
   } else if (key === 'w' && imgY >= -10) {
     imgY -= 5; 
   } else if (key === 's' && imgY <= 515) {
     imgY +=5; 
   }


  }  

}
