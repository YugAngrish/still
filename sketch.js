
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot , rock , tree;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   rock = new Rock(200,500)
  // World.add(world,rock)
 // slingshot = new Slingshot(rock.body,{x:200,y:150})

  tree = new Tree(500,500)
//World.add(world,slingshot);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  
  background("yellow");
  
  drawSprites();
   tree.display()
  //slingshot.display()
  rock.display();
}



