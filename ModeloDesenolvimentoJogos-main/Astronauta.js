class Astronauta{
    constructor(x,y){
        this.sprite = createSprite(x,y,50,20)
        this.sprite.addImage("astronautImgR", astronautImgR)
        this.sprite.addImage("astronautImgL", astronautImgL)
        this.sprite.changeImage("astronautImgR")
        this.sprite.scale = 0.25
    }
 Movimento(){
 if (keyDown("D")){
    this.sprite.x += 8
    this.sprite.changeImage("astronautImgR")
 }
 if (keyDown("A")){
    this.sprite.x -= 8
    this.sprite.changeImage("astronautImgL")
 }
 this.sprite.y = 450
 }
}