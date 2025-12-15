var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background1, background2
var background3, background4

var ground

var astronaut, astronautImgR, astronautImgL
var astronautAttackR, astronautAttackL

var enemy1, enemy2, enemy3, enemy1Img, enemy2Img, enemy3Img

var boss, bossImg, bossAtt

var platform1, platform2, platform3, platformImg, platformImg2

var AM = 350

var vida = 5
var vidaMax = 5
var invencivel = false
var tempoInvensivel = 30
var invTimer = 0

var inimigosMortos = 0
var fase = 1

var fase2 = false

var portal

var bossAttackSound,bossDieSound,astronautAttackSound,loseSound,elevatorSound,gameMusic1,gameMusic2


function preload() {
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

  //Fase 1
  background1 = loadImage("Imagens/1.jpg")
  background2 = loadImage("Imagens/3.jpg")

  //Fase Boss(2)
  background3 = loadImage("Imagens/2.jpg")
  background4 = loadImage("Imagens/4.jpg")

  astronautImgL = loadImage("Imagens/AstronautaF.png")
  astronautImgR = loadImage("Imagens/AstronautaF2.png")

  astronautAttackL = loadAnimation("Imagens/11.png", "Imagens/12.png", "Imagens/23.png", "Imagens/34.png")
  astronautAttackR = loadAnimation("Imagens/11.png", "Imagens/12.png", "Imagens/22.png", "Imagens/33.png")


  enemy1Img = loadAnimation("Imagens/Olho1.png", "Imagens/Olho2.png")
  enemy2Img = loadAnimation("Imagens/Terrestre1.png", "Imagens/Terrestre2.png", "Imagens/Terrestre3.png")
  enemy3Img = loadAnimation("Imagens/Voador1.png", "Imagens/Voador2.png")

  bossImg = loadAnimation("Imagens/Boss1.png", "Imagens/Boss2.png", "Imagens/Boss4.png")
  bossAtt = loadAnimation("Imagens/Boss3.png", "Imagens/Boss3.png", "Imagens/Boss3.png", "Imagens/Boss5.png")

  platformImg = loadImage("Imagens/Plataforma1.png")
  platformImg2 = loadImage("Imagens/Plataforma2.png")

  bossAttackSound = loadSound("")
  bossDieSound = loadSound("")
  astronautAttackSound = loadSound("")
  loseSound = loadSound("Sons/perder.wav")
  elevatorSound = loadSound("Sons/elevador.wav")
  gameMusic1 = loadSound("Sons/fundo.wav")
  gameMusic2 = loadSound("")



}

function setup() {
  //               1000     ,     600 
  createCanvas(windowWidth, windowHeight);

  /*trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;*/

  edges = createEdgeSprites()
  ground = createSprite(width / 2, height - 100, width, 20);
  ground.visible = true;

  platform1 = createSprite(width / 2 - 400, height - 250, 250, 25);
  platform2 = createSprite(width / 2 + 300, height - 350, 250, 25);
  platform3 = createSprite(width / 2 + 500, height - 350, 250, 25)

  portal = createSprite(width / 2, height / 2 + 300, 50, 200)
  portal.visible = false

  platform1.addImage("plataforma", platformImg);
  platform2.addImage("plataforma2", platformImg);


  platform1.addImage("Enferrujado1", platformImg2)
  platform2.addImage("Enferrujado2", platformImg2)
  platform3.addImage("Enferrujado3", platformImg2)

  platform1.scale = 0.35
  platform2.scale = 0.35
  platform3.scale = 0.35

  platform3.visible = false

  astronaut = new Astronauta(50, height - 150)

  astronaut.sprite.setCollider("rectangle", 50, 0, 250, 725)
  astronaut.sprite.debug = true

  enemy1 = new Inimigos(width - 50, 10, enemy1Img, 0.2)

  enemy1.sprite.setCollider("circle", 0, 30, 150)
  enemy1.sprite.debug = true


  enemy2 = new Inimigos(width - 50, height - 200, enemy2Img, 0.25)

  enemy2.sprite.setCollider("rectangle", -100, 0, 450, 250)
  enemy2.sprite.debug = true


  enemy3 = new Inimigos(50, height - 149, enemy3Img, 0.3)

  enemy3.sprite.setCollider("circle", 0, 0, 200)
  enemy3.sprite.debug = true

  boss = new Boss(width / 2 - 600, height - 250, bossImg, 0.7)
  boss.sprite.setCollider("rectangle", 0, 0, 300, 500)
  boss.sprite.debug = true

  platform1.setCollider("rectangle", 0, 0, 950, 400)
  platform1.debug = true

  platform2.setCollider("rectangle", 0, 0, 950, 300)
  platform2.debug = true

  platform3.setCollider("rectangle", 0, 0, 950, 300)
  platform3.debug = true

  portal.setCollider("rectangle", 0, 0, 50, 200)
  portal.debug = true




  //enemy1.MovimentoAereo1()
  enemy3.MovimentoAereo2()

  //crie Grupos de Obstáculos e Nuvens
  /*obstaclesGroup = createGroup();
   cloudsGroup = createGroup();
   
   console.log("Hello" + 5);
   
   score = 0;*/
}

function draw() {



  if (fase === 1) {

    background(background1);

    platform1.changeImage("plataforma")
    platform2.changeImage("plataforma2")

    boss.sprite.visible = false

    enemy2.SeguirX(astronaut, 10)

    enemy1.SeguirX2(astronaut, 40)
    enemy1.SeguirY(astronaut)

    enemy3.sprite.bounceOff(ground)
    enemy3.sprite.bounceOff(edges)

    enemy1.sprite.collide(edges)
    enemy1.sprite.collide(ground)

    if (astronaut.attacking) {
      if (astronaut.sprite.overlap(enemy1.sprite)) {
        enemy1.sprite.remove()
        inimigosMortos++
      }
      if (astronaut.sprite.overlap(enemy2.sprite)) {
        enemy2.sprite.remove()
        inimigosMortos++
      }
      if (astronaut.sprite.overlap(enemy3.sprite)) {
        enemy3.sprite.remove()
        inimigosMortos++
      }
    }

    if (!invencivel) {
      if (astronaut.sprite.overlap(enemy1.sprite)) perderVida()
      if (astronaut.sprite.overlap(enemy2.sprite)) perderVida()
      if (astronaut.sprite.overlap(enemy3.sprite)) perderVida()
    }

    if (invencivel) {
      invTimer--
      if (frameCount % 5 === 0) {
        astronaut.sprite.visible = !astronaut.sprite.visible
      }

      if (invTimer <= 0) {
        invencivel = false
        astronaut.sprite.visible = true
        astronaut.sprite.tint = color(255, 255, 255)
      }
    }

    if (vida <= 0) {
      astronaut.sprite.remove()
      //if(!loseSound.isPlaying()){
         // loseSound.play()
       // }
      fill("red");
      textSize(50);
      text("GAME OVER =(", width / 2 - 100, height / 2);
    }

    if (inimigosMortos >= 3) {
      background(background2)
      if (astronaut.sprite.isTouching(portal)) {
        background(background1)
        //if(!elevatorSound.isPlaying()){
        //  elevatorSound.play()
       // }
        astronaut.sprite.velocityX = 0
        astronaut.sprite.velocityY = 0
        astronaut.sprite.visible = false
        setTimeout(() => {
          //background(background4)
          fase = 2

        }, 1000)

      }
    }
  } else if (fase === 2) {
    if (!fase2) {
      fase2 = true
      setTimeout(() => {

        astronaut.sprite.visible = true
        vida = vidaMax
        platform1.changeImage("Enferrujado1")
        platform2.changeImage("Enferrujado2")
        platform3.changeImage("Enferrujado3")

        platform3.visible = true

        platform1.scale = 0.25
        platform2.scale = 0.25
        platform3.scale = 0.25

        platform1.x = width / 2 - 500
        platform1.y = height - 300

        platform2.x = width / 2 + 500
        platform2.y = height - 300

        platform3.x = width / 2
        platform3.y = height - 600

        platform1.setCollider("rectangle", 0, -150, 1300, 300)

        platform2.setCollider("rectangle", 0, -150, 1300, 300)

        platform3.setCollider("rectangle", 0, -150, 1300, 300)

      }, 1000)
    } else if (fase2) {
      background(background3)
      boss.sprite.visible = true
      boss.SeguirX(astronaut, 100)

      astronaut.sprite.collide(platform3)

      var d = dist(boss.sprite.x, boss.sprite.y, astronaut.sprite.x, astronaut.sprite.y)

      if (d < 200) {
        boss.Atacar()
        if (!invencivel && boss.atacando && astronaut.sprite.overlap(boss.sprite)) {
          perderVida()
        }
      }

      if (astronaut.attacking && astronaut.attackTimer === astronaut.attackDuration -1) {
        boss.CausarDano()
      }

      if (invencivel) {
        invTimer--
        if (frameCount % 5 === 0) {
          astronaut.sprite.visible = !astronaut.sprite.visible
        }

        if (invTimer <= 0) {
          invencivel = false
          astronaut.sprite.visible = true
          astronaut.sprite.tint = color(255, 255, 255)
        }
      }
      mostrarVidaBoss()
    }

  }


  astronaut.Movimento()

  //enemy2.MovimentoTerrestre1(astronaut)






  astronaut.sprite.collide(ground)
  astronaut.sprite.collide(edges)

  astronaut.sprite.collide(platform1)
  astronaut.sprite.collide(platform2)


  push();
  fill(255);
  textSize(22);
  text("Vida:", 20, 40);

  for (let i = 0; i < vidaMax; i++) {
    if (i < vida) fill(0, 255, 0)
    else fill(150)

    rect(100 + i * 30, 20, 25, 25);
  }
  pop()

  drawSprites();
}

function perderVida() {
  vida-- //Diminuir Vida
  invencivel = true
  invTimer = tempoInvensivel

  //efeito visual
  astronaut.sprite.tint = color(255, 100, 100)
}

function mostrarVidaBoss(){
  push()

  let total = boss.vidaMax
  let atual = boss.vida
  let tamanho = 12
  let espaco = 6

  let larguraTotal = total *(tamanho + espaco)
  let inicioX = width / 2 -larguraTotal / 2  

  textAlign(CENTER)
  textSize(16)
  fill(255)
  text("VIDA DO BOSS", width / 2, 55)

  for (let i = 0; i < total; i++){
    if(i < atual) fill(255,60,60)
    else fill(80)

    rect(inicioX + i *(tamanho + espaco), 80, tamanho, 20, 3)
  }

  pop()
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
