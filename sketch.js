const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var box1, pig1;
var gamestate="onsling"
var bgimg
var score=0
function preload(){
gettime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,305,300,170)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    
    slingshot= new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    if(bgimg){
    background(bgimg);
    }
    fill("white")
    textSize(25)
    text("Score: "+score,900,50)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.increase()
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.increase()
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.display();
    slingshot.display();
    platform.display()
}

function mouseDragged(){
    if(gamestate==="onsling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    slingshot.fly()
    gamestate="launched"
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)
        bird.bigarray=[]
        gamestate="onsling"
    }
}

async function gettime(){
var response=await fetch("https://worldtimeapi.org/api/timezone/America/New_York")
var responsetype=await response.json()
var daytime=responsetype.datetime
var time=daytime.slice(11,13)
if(time>=6&&time<=18){
bg="sprites/bg.png"
}else{
bg="sprites/bg2.jpg"
}
bgimg=loadImage(bg)
}