//Create both sprites.
var movingRect1, movingRect2;

function setup() {

    // Create boundary of 800 and 400.
    createCanvas(800,400);

    //Create the sprite called moving rect1.
    movingRect1 = createSprite(200, 200, 50, 80);
    
    //Put  the colour of moving rect1 as cyan
    movingRect1.shapeColor = "cyan" ;
    
    // Create the sprite moving rect 2.
    movingRect2 = createSprite(400, 200, 80, 30);
    
    // Moving rect 2's colour must cyan.
    movingRect2.shapeColor = 'cyan' ;
    movingRect1.velocityX = 3 ;
    movingRect2.velocityX = -3;

}

function draw() {
   
   background(255,255,255);  

   

   if ((movingRect1.x - movingRect2.x <= movingRect1.width/2 +  movingRect2.width/2) &&
       (movingRect2.x - movingRect1.x <= movingRect2.width/2 +  movingRect1.width/2)){

        movingRect1.velocityX = movingRect1.velocityX *-1 ;
        movingRect2.velocityX = movingRect2.velocityX * -1;

       }
        
  

  drawSprites();

}