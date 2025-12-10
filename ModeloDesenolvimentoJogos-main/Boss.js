class Boss{
    constructor(x,y,animation,scale){
        this.sprite = createSprite(x,y,30,40)
        this.sprite.addAnimation("Terrestre1", animation)
        this.sprite.scale = scale
        this.velocidade = 4
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
    }