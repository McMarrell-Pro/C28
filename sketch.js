const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,boy,boyImg,stone,mango1,mango2,mango3;

function preload()
{
 boyImg = loadImage("Plucking mangoes/boy.png");


}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,50,50);
	boy.addImage(boyImg);
	boy.scale = 0.15;

	tree = new Tree(700,600,50,60);

	stone = new Stone(400,500,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  stone.display();
  
  drawSprites();
 
}



