const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var piso;
var pig1, pig2;
var trunk1,trunk2,trunk3,trunk4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
piso = new Ground(600,height,1200,20);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
box5 = new Box(810,120,70,70)
pig1 = new Pig(810,350);
pig2 = new Pig(810,220);
trunk1 = new Trunks(810,260,300,PI/2);
trunk2 = new Trunks(810,180,300,PI/2);
trunk3 = new Trunks(760,120,150,PI/7);
trunk4 = new Trunks(870,120,150,-PI/8);
bird = new Birds(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
box1.display();
box2.display();
piso.display();
box3.display();
box4.display();
pig1.display();
pig2.display();
trunk1.display();
trunk2.display();
trunk3.display();
trunk4.display();
box5.display();
bird.display();
}