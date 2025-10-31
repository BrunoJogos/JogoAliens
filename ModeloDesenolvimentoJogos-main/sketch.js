var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background1
var ground

var astronaut, astronautImgR, astronautImgL

var enemy1, enemy2, enemy3, enemy1Img, enemy2Img, enemy3Img

var platform, platformImg

var AM = 350


function preload(){
  /*trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");*/


  background1 = loadImage("Imagens/1.jpg")
  
  astronautImgL = loadImage("Imagens/AstronautaF.png")
  astronautImgR = loadImage("Imagens/AstronautaF2.png")

  enemy1Img = loadAnimation("Imagens/Olho1.png","Imagens/Olho2.png")
  enemy2Img = loadAnimation("Imagens/Terrestre1.png","Imagens/Terrestre2.png","Imagens/Terrestre3.png")
  enemy3Img = loadAnimation("Imagens/Voador1.png","Imagens/Voador2.png")
}

function setup() {
  createCanvas(1000, 600);
  
  /*trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;*/
  
  
  ground = createSprite(500,550,1000,20);
  ground.visible = true;

  astronaut = new Astronauta(50,450)

  enemy1 = new Inimigos(950,10,enemy1Img,0.2)
  enemy2 = new Inimigos(950,449,enemy2Img,0.25)
  enemy3 = new Inimigos(50,449,enemy3Img,0.3)
  
  //crie Grupos de Obstáculos e Nuvens
 /*obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  
  console.log("Hello" + 5);
  
  score = 0;*/
}

function draw() {
  background(background1);


  astronaut.Movimento()

  enemy1.MovimentoAereo1()
  //enemy2.MovimentoTerrestre1(astronaut)
  enemy2.SeguirX(astronaut)
  enemy3.MovimentoAereo2()
  









  //exibindo pontuacãO
  /*text("Score: "+ score, 500,50);
  
  
  
  if(gameState === PLAY){
    //mover o solo
    ground.velocityX = -4;
    //pontuação
    score = score + Math.round(frameCount/60);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //pular quando a tecla de espaço for pressionada
    if(keyDown("space")&& trex.y >= 100) {
        trex.velocityY = -13;
    }
    
    //adicione gravidade
    trex.velocityY = trex.velocityY + 0.8
  
    //gere as nuvens
    spawnClouds();
  
    //gere obstáculos no solo
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
   else if (gameState === END) {
      ground.velocityX = 0;
     
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);
   }
  
 
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  
  */
  drawSprites();
}

/*function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
   
    //gerar obstáculos aleatórios
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //atribuir escala e vida útil ao obstáculo       
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //adicione cada obstáculo ao grupo
    obstaclesGroup.add(obstacle);
 }
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
   if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //atribuir vida útil à variável
    cloud.lifetime = 134;
    
    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adicionando nuvem ao grupo
   cloudsGroup.add(cloud);
    }
}
*/
