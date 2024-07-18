let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let myTop, myBottom, myRight, myLeft; //Hitbox variables
let enemyTop, enemyBottom, enemyRight, enemyLeft;

function setup() {
   createCanvas(500, 500);
   noStroke();


   rectMode(CENTER);
}


function draw() {
   background(0);


   // Enemy square
   fill(0, 0, 255);
   rect(enemyXPos, enemyYPos, 50, 50);


   fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }


   myTop = myYPos - 25;
   myBottom = myYPos + 25;
   myRight = myXPos + 25;
   myLeft = myXPos - 25;

   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;
   enemyRight = enemyXPos + 25;
   enemyLeft = enemyXPos - 25;

   // Check for when the boxes ARE NOT colliding:
   if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
    console.log("NOT COLLIDING");
   }
   else{
    fill(random(255), random(255), random(255));
    textSize(22);
    text("I'm colliding with the enemy. Ouch!", 140, 480);
   }

}