class Astronauta{
    constructor(x,y){
        this.sprite = createSprite(x,y,50,20)
        this.sprite.addImage("astronautImgR", astronautImgR)
        this.sprite.addImage("astronautImgL", astronautImgL)

        this.sprite.addAnimation("attackL", astronautAttackL)
        this.sprite.addAnimation("attackR", astronautAttackR)

        this.sprite.changeImage("astronautImgR")
        this.sprite.scale = 0.25
        this.direction = "right"
        this.attacking = false
    }
 Movimento(){
 if (keyDown("D")){
    this.sprite.x += 8
    this.sprite.changeImage("astronautImgR")
    this.direction = "right"
 }
 if (keyDown("A")){
    this.sprite.x -= 8
    this.sprite.changeImage("astronautImgL")
    this.direction = "left"
 }
 if (keyWentDown("Space") && this.sprite.collide(ground)){
      this.sprite.velocityY = -25
 }
 if (keyWentDown("G") && this.sprite.velocityY <= -25){
      this.sprite.velocityY = -10
 }
/*if (keyWentDown("K") && this.sprite.collide(ground)){
      if(this.direction === "left"){
   this.sprite.changeAnimation("attackL")
 }else{
   this.sprite.changeAnimation("attackR")
 }
 }*/
 if (mouseWentDown(LEFT) ){
   this.attacking = true
   if(this.direction === "left"){
      this.sprite.changeAnimation("attackL")
      this.sprite.animation.looping = false
      this.sprite.animation.frame = 0
   }else{
      this.sprite.changeAnimation("attackR")
      this.sprite.animation.looping = false
      this.sprite.animation.frame = 0
   }

   this.sprite.animation.play()
   this.sprite.animation.onComplete = () => {
      if(this.direction === "left"){
         this.sprite.changeImage("astronautImgL")
      }else{
          this.sprite.changeImage("astronautImgR")
      }
      this.attacking = false
   }

  astronautAttackR.frameDelay = 0
  astronautAttackL.frameDelay = 0
 }


/* if (this.sprite.y <= AM){
   this.sprite.velocityY += 2
 }*/
 //this.sprite.y = 450
 this.sprite.velocityY += 0.8
 }
}

/*function mousePressed(){
 if(this.direction === "left"){
   this.sprite.changeAnimation("attackL")
 }else{
   this.sprite.changeAnimation("attackR")
 }
}*/