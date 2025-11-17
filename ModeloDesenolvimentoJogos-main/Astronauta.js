class Astronauta {
   constructor(x, y) {
      this.sprite = createSprite(x, y, 50, 20)
      this.sprite.addImage("astronautImgR", astronautImgR)
      this.sprite.addImage("astronautImgL", astronautImgL)

      this.sprite.addAnimation("attackL", astronautAttackL)
      this.sprite.addAnimation("attackR", astronautAttackR)

      this.sprite.changeImage("astronautImgR")
      this.sprite.scale = 0.25
      this.direction = "right"
      this.attacking = false
      this.attackDuration = 12
      this.attackTimer = 0

      this.altura = 0.8
      this.pulo = 10
      this.gravidade = false
   }
   Movimento() {
      var noChão = this.sprite.collide(ground)
      if (!this.attacking) {
         if (keyDown("D")) {
            this.sprite.x += 8
            this.sprite.changeImage("astronautImgR")
            this.direction = "right"
         }
         if (keyDown("A")) {
            this.sprite.x -= 8
            this.sprite.changeImage("astronautImgL")
            this.direction = "left"
         }
      }
      if (keyWentDown("Space") && noChão) {
         this.sprite.velocityY -= this.pulo
      }

      //false = pulo baixo true = pulo alto
      if (keyWentDown("G") && !this.attacking && !this.gravidade) {
         this.pulo = 10
         this.altura = 0.8
         this.gravidade = true
      }else if (keyWentDown("G") && !this.attacking && this.gravidade) {
         this.pulo = 25
         this.altura = 1
         this.gravidade = false
      }
      console.log(this.gravidade)

      
     
      if (mouseWentDown(LEFT) && !this.attacking && this.gravidade) {
         this.attacking = true
         this.attackTimer = this.attackDuration
         if (this.direction === "left") {
            this.sprite.changeAnimation("attackL")
            this.sprite.animation.rewind()
         } else {
            this.sprite.changeAnimation("attackR")
            this.sprite.animation.rewind()
         }

         this.sprite.animation.looping = false
         this.sprite.animation.play()
      }

      if (this.attacking) {
         this.attackTimer--
         if (this.attackTimer <= 0) {
            this.attacking = false
            if (this.direction === "left") {
               this.sprite.changeImage("astronautImgL")
            } else {
               this.sprite.changeImage("astronautImgR")
            }
         }
      }


      
      this.sprite.velocityY += this.altura
   }
}

