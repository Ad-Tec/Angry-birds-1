const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,bodies;
function setup() {
createCanvas(400,400);
//User Engine
engine=Engine.create();
//Create user world
world=engine.world;
//To create bodies
bodies=Bodies.rectangle(200,390,200,20,{isStatic:true});
//to add this body to user's world
World.add(world,bodies);
console.log(bodies);
sc=Bodies.circle(200,10,30,{restitution:1.0});
World.add(world,sc);
console.log(sc);
}



function draw() {
background("white");
Engine.update(engine);

rectMode(CENTER);
rect(bodies.position.x,bodies.position.y,400,20);
ellipseMode(RADIUS);
ellipse(sc.position.x,sc.position.y,60,60);

}