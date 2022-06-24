var ball;
var baseImg, base;
var sunImg, sun;
var dogImg, dog;
var crabImg, crab;
var purpleB1Img, purpleB1;
var purpleB2Img, purpleB2;
var purpleB3Img, purpleB3;
var cupcakeImg, cupcake1, cupcake2, cupcake3, cupcake4, cupcake5, cupcake6, cupcake7, cupcakeGroup;
var heartImg, heart1, heart2, heart3;
var acidrainImg, acidrain, acidrainGroup;
var life = 3;
var invisibleGround;
var hungerlevel = 7;
var gameLevel = "one";
var gameOver, gameOverImg, restartImg;
var topedge, leftedge, rightedge;
var gameState = "one";
var fire, fireImg;
var cloud, cloudImg;
var coin, coinImg;



function preload() {
  baseImg = loadImage("./Images/Base.png");
  sunImg = loadImage("./Images/Sun.png");
  dogImg = loadImage("./Images/Dog.png");
  crabImg = loadImage("./Images/Crab.png");
  purpleB1Img = loadImage("./Images/Purple base.png");
  purpleB2Img = loadImage("./Images/Purplebase2.png");
  purpleB3Img = loadImage("./Images/Purplebase2.png");
  cupcakeImg = loadImage("./Images/Cupcake.png");
  heartImg = loadImage("./Images/Heart.png");
  acidrainImg = loadImage("./Images/acidrain.jpg");
  gameOverImg = loadImage("./Images/GameOver.png");
  fireImg = loadImage("./Images/Fire.png");
  cloudImg = loadImage("./Images/Cloud.png");
  coinImg = loadImage("./Images/coin.png");


}


function setLevelOne() {

  base = createSprite(windowWidth / 2, windowHeight - 70);
  base.addImage(baseImg);
  base.scale = 1.2;

  sun = createSprite(windowWidth - 1450, windowHeight - 650);
  sun.addImage(sunImg);
  sun.scale = 0.65;

  dog = createSprite(windowWidth - 1400, windowHeight - 100);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  //dog.debug = true;
  dog.setCollider("circle", 0, 0, 150);

  crab = createSprite(windowWidth - 700, windowHeight - 100);
  crab.addImage(crabImg);
  crab.scale = 0.2;
  crab.velocityX = -3.5;
  //crab.debug = true;
  crab.setCollider("circle", 0, 0, 260);

  purpleB1 = createSprite(windowWidth - 400, windowHeight - 380);
  purpleB1.addImage(purpleB1Img);
  purpleB1.scale = 0.55;
  //purpleB1.debug = true;
  purpleB1.setCollider("rectangle", 0, 0, 965, 100);

  purpleB2 = createSprite(windowWidth - 1100, windowHeight - 300);
  purpleB2.addImage(purpleB2Img);
  purpleB2.scale = 0.47;
  // purpleB2.debug = true;
  purpleB2.setCollider("rectangle", 0, 0, 750, 125);


  purpleB3 = createSprite(windowWidth - 800, windowHeight - 570);
  purpleB3.addImage(purpleB2Img);
  purpleB3.scale = 0.47;
  //purpleB3.debug = true;
  purpleB3.setCollider("rectangle", 0, 0, 750, 125);


  cupcake1 = createSprite(windowWidth - 870, windowHeight - 635);
  cupcake1.addImage(cupcakeImg);
  cupcake1.scale = 0.2

  cupcake2 = createSprite(windowWidth - 730, windowHeight - 635);
  cupcake2.addImage(cupcakeImg);
  cupcake2.scale = 0.2

  cupcake3 = createSprite(windowWidth - 255, windowHeight - 450);
  cupcake3.addImage(cupcakeImg);
  cupcake3.scale = 0.2

  cupcake4 = createSprite(windowWidth - 415, windowHeight - 450);
  cupcake4.addImage(cupcakeImg);
  cupcake4.scale = 0.2

  cupcake5 = createSprite(windowWidth - 575, windowHeight - 450);
  cupcake5.addImage(cupcakeImg);
  cupcake5.scale = 0.2

  cupcake6 = createSprite(windowWidth - 1020, windowHeight - 380);
  cupcake6.addImage(cupcakeImg);
  cupcake6.scale = 0.2

  cupcake7 = createSprite(windowWidth - 1170, windowHeight - 380);
  cupcake7.addImage(cupcakeImg);
  cupcake7.scale = 0.2

  heart1 = createSprite(windowWidth - 1350, windowHeight - 650);
  heart1.addImage(heartImg);
  heart1.scale = 0.3;

  heart2 = createSprite(windowWidth - 1250, windowHeight - 650);
  heart2.addImage(heartImg);
  heart2.scale = 0.3;

  heart3 = createSprite(windowWidth - 1150, windowHeight - 650);
  heart3.addImage(heartImg);
  heart3.scale = 0.3;

  invisibleGround = createSprite(windowWidth - 700, windowHeight - 45, 1700, 10);
  invisibleGround.visible = false;

  topedge = createSprite(200, 10, 4000, 10);
  topedge.visible = false;

  leftedge = createSprite(10, 10, 10, 4000);
  leftedge.visible = false;

  rightedge = createSprite(1510, 10, 10, 4000);
  rightedge.visible = false;

  gameOver = createSprite(windowWidth / 2 - 50, windowHeight / 2.5);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  acidrainGroup = new Group();
  //cupcakeGroup = new Group();

}



function setLevelTwo() {

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  setLevelOne();
  setLevelTwo();


  // restart.scale = 0.5;

}

function draw() {
  background("#BAF2FF");
  drawSprites();

  if (gameLevel === "one") {
    console.log(gameLevel);
    levelOne();
  } else if (gameLevel === "two") {
    levelTwo();
  }

  if (gameState === PLAY) {
    //move the 
    gameOver.visible = false;
    // restart.visible = false;

  }
}






    function levelOne() {
      if (crab.x < (windowWidth - 1475)) {
        crab.velocityX = 4;
      }
      if (crab.x > (windowWidth - 600)) {
        crab.velocityX = -4;
      }
      if (keyDown(RIGHT_ARROW)) {
        dog.x = dog.x + 10;
        dog.mirrorX(1);
      }
      if (keyDown(LEFT_ARROW)) {
        dog.x = dog.x - 10;
        dog.mirrorX(-1);
      }
      if (keyDown(UP_ARROW)) {
        dog.velocityY = -7
      }
      dog.velocityY = dog.velocityY + 0.1;

      if ((crab.isTouching(dog) || acidrainGroup.isTouching(dog)) && life === 3) {
        heart3.destroy();
        acidrainGroup.destroyEach();
        crab.x = windowWidth - 700;
        life = life - 1;
        // dog.x = windowWidth - 400;

      }
      else if ((crab.isTouching(dog) || acidrainGroup.isTouching(dog)) && life === 2) {
        heart2.destroy();
        acidrainGroup.destroyEach();
        crab.x = windowWidth - 700;
        life = life - 1;
      }
      else if ((crab.isTouching(dog) || acidrainGroup.isTouching(dog)) && life === 1) {
        heart1.destroy();
        acidrainGroup.destroyEach();
        crab.x = windowWidth - 700;
        life = life - 1;
      }



      if (dog.isTouching(cupcake1)) {
        cupcake1.destroy();
        hungerlevel -= 1;
        //cupcake1.visible = false;
        fill("green");
        text("Great job!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake2)) {
        cupcake2.destroy();
        hungerlevel -= 1;
        //cupcake2.visible = false;
        fill("green");
        text("Amazing!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake3)) {
        cupcake3.destroy();
        hungerlevel -= 1;
        //cupcake3.visible = false;
        fill("green");
        text("Great job!!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake4)) {
        cupcake4.destroy();
        hungerlevel -= 1;
        //cupcake4.visible = false;
        fill("green");
        text("Amazing!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake5)) {
        cupcake5.destroy();
        hungerlevel -= 1;
        //cupcake5.visible = false;
        fill("green");
        text("Great job!!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake6)) {
        cupcake6.destroy();
        hungerlevel -= 1;
        //cupcake6.visible = false;
        fill("green");
        text("Amazing!", windowWidth / 2 - 300, windowHeight / 2);
      }
      if (dog.isTouching(cupcake7)) {
        cupcake7.destroy();
        hungerlevel -= 1;
        //cupcake7.visible = false;
        fill("green");
        text("Great job!", windowWidth / 2 - 300, windowHeight / 2);
      }


      if (frameCount % 25 === 0) {
        acidrain = createSprite(Math.round(random(1, windowWidth)));
        acidrain.addImage(acidrainImg);
        acidrainGroup.add(acidrain);
        acidrain.velocityY = 5;
        acidrain.lifeTime = 120;
        acidrain.scale = 0.1
      }



      dog.collide(invisibleGround);
      dog.collide(leftedge);
      dog.collide(rightedge);
      dog.collide(topedge);
      dog.collide(purpleB1);
      dog.collide(purpleB2);
      dog.collide(purpleB3);

      if (life === 0) {
        gameOver.visible = true;
        destroyLeveloneSprites();
      }

      textSize(30);
      if (hungerlevel === 0) {
        fill("green");
        text("You survived the beach! Now you have to pass the next level! \n Press space to continue to next level.", windowWidth / 2 - 300, windowHeight / 2);

        //gameOver.visible = false;
        destroyLeveloneSprites();

      }
      else {
        fill("red");
      }
      if (gameLevel === "one" && keyDown("SPACE") && hungerlevel === 0) {
        gameLevel = "two";
      }
      text("Hunger Level:" + hungerlevel, windowWidth - 1500, windowHeight - 550);


    }
    function destroyLeveloneSprites() {
      purpleB1.visible = false;
      purpleB2.visible = false;
      purpleB3.visible = false;
      //acidrainGroup.visible = false;
      acidrainGroup.destroyEach();
      dog.visible = false;
      crab.visible = false;
      cupcake1.visible = false;
      cupcake2.visible = false;
      cupcake3.visible = false;
      cupcake4.visible = false;
      cupcake5.visible = false;
      cupcake6.visible = false;
      cupcake7.visible = false;
      heart1.visible = false;
      heart2.visible = false;
      heart3.visible = false;
      base.visible = false;
    }

    function levelTwo() {

    }

  
