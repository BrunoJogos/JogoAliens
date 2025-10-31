class Inimigos{
    constructor(x,y,animation,scale){
        this.sprite = createSprite(x,y,30,40)
        this.sprite.addAnimation("Terrestre1", animation)
        this.sprite.scale = scale
    }
    MovimentoTerrestre1(personagem){
        this.sprite.velocityX = -5
        //this.sprite.x = personagem.x
    }
}