class Tree{
constructor(x,y,width,height){
var options = {
isStatic:true,
restitution:0,
friction:0,
density:0

}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("Plucking mangoes/tree.png");
this.scale = 3;
World.add(world, this.body);

}
display(){
    fill("red");
    push();
    imageMode(CENTER);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    image(this.image,0, 0, this.width, this.height);
    pop();
}

}
