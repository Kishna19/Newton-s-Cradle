
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,roof,rope1;

function preload()
{
	
}

function setup() {
	
	var canvas = createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new Bob(300,500);
	bob2 = new Bob(400,500);
	bob3 = new Bob(500,500);
	bob4 = new Bob(600,500);
    bob5 = new Bob(700,500);

	roof = new Roof(500,200,600,20);

	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,+100,0);
	rope5 = new Rope(bob5.body,roof.body,+200,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===38)
	{
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-500,y:0});
	}
}