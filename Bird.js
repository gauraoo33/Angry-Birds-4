class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png")
    this.bigarray=[]
  }
  display(){
    //[[x1,y1],[x2,y2],[x3,y3],...]
    if(this.body.position.x>200&&this.body.velocity.x>10){
    var position = [this.body.position.x,this.body.position.y]
    this.bigarray.push(position)
    }
    for(var i=0;i<this.bigarray.length;i++){
      image(this.smoke,this.bigarray[i][0],this.bigarray[i][1])
    }
    super.display()
  }
}