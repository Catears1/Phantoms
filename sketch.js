let img;
var imgX = 200;
var imgY = 200;

function preload() {
  img = createImg('download.jpg');
}
function setup() {
  createCanvas(1300, 900);
  
}

function draw() {
  //background(222);
  sketch2();
  img.position(imgX, imgY);
  img.size(200,200);  
  
  if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) {
    imgX +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     imgX -= 5;
   } else if (keyCode == UP_ARROW) {
     imgY -= 5; 
   } else if (keyCode == DOWN_ARROW) {
     imgY +=5; 
   }
  }  

}
