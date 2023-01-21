
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
let engine;
let world;
var ball;
var wall;
var rock;

function setup()
{
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var ball_options = {
  restitution:0.95,
  frictionAir:0.01
}

var rock_options = {

restitution:0.70,

}
var ground_options = {

isStatic:true

}

ball = Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

ground = Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground)

wall = Bodies.rectangle(300,200,200,20,ground_options)
World.add(world,wall)

rock = Bodies.circle(250,10,20,rock_options)
World.add(world,rock)

rectMode(CENTER);
ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);

 ellipse(rock.position.x,rock.position.y,20);
 rect(wall.position.x,wall.postion.y,200,20);
}