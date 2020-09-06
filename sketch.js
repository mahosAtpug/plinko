const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,divisionHeight;
var particles = [];
var plinkos = [];
var divisions = [];
var engine,world;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground1 = new Ground(600,height,1200,20);

  divisionHeight=300;
  for (var k=0 ; k<=width; k=k+ 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko (j,75));
  }
  for (var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
 

}


function draw() {
  Engine.update(engine);
  background("black"); 
  ground1.display(); 
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10),10,10));
  }
  for(var y in divisions){
    divisions[y].display();
  }
  for(var a in plinkos){
    plinkos[a].display();
  }
  for(var b in particles){
    particles[b].display();
  }
  drawSprites();
}