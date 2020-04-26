const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var a;
var b;
var c;

function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  a = new Box(200,200,50,50);
  b = new Holder(200,100,100,10);

  c = new Spring(a.body, b.body);
    
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    if(keyCode === 32){
      a.body.position.y = mouseY;
      a.body.position.x = mouseX;
      }
      
    if (keyCode === ENTER){
      a.body.position.x = 200;
      }
    
    a.display();
    b.display();
    c.display();
}