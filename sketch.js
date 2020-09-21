const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,355,50,50);
    box2 = new Box(600,355,50,50);
    pig1 = new Pig(500,360);
    log1 = new Log(500,315,250,PI);
    
    box3 = new Box(400,275,50,50);
    box4 = new Box(600,275,50,50);
    pig2 = new Pig(500, 280);
    log2 = new Log(500, 260, 250, PI);

    box5 = new Box(500,220,50,50);
    log3 = new Log(450,220,100,-PI/3);
    log4 = new Log(550,220,100,PI/3);

    bird = new Bird(300, 200);
    ground = new Ground(500,height-10,width,20);

    console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();   
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    
    ground.display();
}