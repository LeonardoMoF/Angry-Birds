class Base{
    constructor(x,y,width,height,angle){
    
    var options = {
        restitution: 0.8, friction:1, density:1.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("sprites/base.png");
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill ("red");
    image (this.image,0, 0, this.width, this.height);
    pop();
   }
}