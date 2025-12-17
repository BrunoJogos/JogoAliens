class Boss{
    constructor(x,y,animation,scale){
        this.sprite = createSprite(x,y,30,40)
        this.sprite.addAnimation("boss", animation)
        this.sprite.addAnimation("atacar", bossAtt)
        this.sprite.scale = scale
        this.velocidade = 4
        this.vida = 20
        this.vidaMax = 20
        this.atacando = false
        this.podeLevarDano = true
        this.distanciaAtaque = 100
        this.ultimaVida = this.vida
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

    Atacar(){
        if(!this.atacando){
            this.atacando = true
            this.sprite.scale = 0.5
            this.sprite.y = height - 200
            this.sprite.changeAnimation("atacar")
            this.sprite.animation.frameDelay = 6
            setTimeout(() => {
                this.atacando = false
                this.sprite.scale = 0.7
                this.sprite.y = height - 250
                this.sprite.changeAnimation("boss")
            },500)
        }
    }

    CausarDano(){
        if(!this.podeLevarDano) return
        this.vida --
        this.podeLevarDano = false

        if(fase === 2 && this.vida > 0 && this.vida % 2 === 0 && this.vida !== this.ultimaVida){
            gerarVida()
            this.ultimaVida = this.vida
        }

        setTimeout(() => {
            this.podeLevarDano = true
        },500)
        if(this.vida <= 0){
            this.sprite.destroy()
            gameState = VICTORY
        }
    }
    }