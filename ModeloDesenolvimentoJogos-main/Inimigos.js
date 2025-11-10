class Inimigos{
    constructor(x,y,animation,scale){
        this.sprite = createSprite(x,y,30,40)
        this.sprite.addAnimation("Terrestre1", animation)
        this.sprite.scale = scale
        this.sprite.addAnimation("Aereo1", animation)
        this.sprite.addAnimation("Aereo2", animation)
        this.velocidade = 2
        this.velocidade2 = 4
    }
   /* MovimentoTerrestre1(personagem){
        this.sprite.velocityX = -5
        //this.sprite.x = personagem.x
    }*/
    MovimentoAereo1(){
        this.sprite.velocityX = -7
        this.sprite.velocityY = +5
    }
    MovimentoAereo2(){
        this.sprite.velocityX = +7
        this.sprite.velocityY = +5
    }
    SeguirX(personagem,distancia){
        if(this.sprite.x > personagem.sprite.x + distancia){
            this.sprite.x -= this.velocidade
            this.sprite.mirrorX(1)
        }else if(this.sprite.x < personagem.sprite.x - distancia){
            this.sprite.x += this.velocidade
            this.sprite.mirrorX(-1)
        }
    }
    SeguirY(personagem){
        if(this.sprite.y > personagem.sprite.y + 130){
            this.sprite.y -= this.velocidade2
            this.sprite.mirrorX(1)
        }else if(this.sprite.y < personagem.sprite.y - 120){
            this.sprite.y += this.velocidade2
            this.sprite.mirrorX(-1)
        }
    }
     SeguirX2(personagem,distancia){
        if(this.sprite.x > personagem.sprite.x + distancia){
            this.sprite.x -= this.velocidade2
            this.sprite.mirrorX(1)
        }else if(this.sprite.x < personagem.sprite.x - distancia){
            this.sprite.x += this.velocidade2
            this.sprite.mirrorX(-1)
        }
    }
    }