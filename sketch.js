const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload(){
  backgroundImg=loadImage("snow2.jpg")
  snow=loadImage("snow4.webp")
  }

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

 // Ground=new ground(width/2,10,20,20)
  snow1=new Snow(200,100,20)
  snow2=new Snow(300,100.20)
  snow3=new Snow(400,100,10)
  snow4=new Snow(500,100,20)
  snow5=new Snow(600,100,20)
  snow6=new Snow(700,100,20)
  snow6=new Snow(800,100,20)
  snow7=new Snow(900,100,20)
  snow8=new Snow(1000,100,20)
  //snow9=new Snow(1100,100,20)
 // snow10=new Snow(,100,20)


    
  }

function draw() {
  background(backgroundImg);
  Engine.update(engine)
 // Ground.display()
 snow1.display()  
 snow2.display()
 snow3.display()
 snow4.display()
 snow5.display()
 snow6.display()
 snow7.display()
snow8.display()
//snow9.display()
//snow10.display()

  //drawSprites();
}