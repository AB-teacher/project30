
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var box1,box2,box3,box4,box5;

var polygonImage;

function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup() {
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(600,790,1200,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
   
    //level one
    box1 = new Box(300,275,30,40);
    console.log(box1);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //level two
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    //level three
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    //top
    box16 = new Box(390,155,30,40);
  
    //set 2 for second stand
    //level one
    boxs1 = new Box(640,175,30,40);
    boxs2 = new Box(670,175,30,40);
    boxs3 = new Box(700,175,30,40);
    boxs4 = new Box(730,175,30,40);
    boxs5 = new Box(760,175,30,40);
    //level two
    boxs6 = new Box(670,135,30,40);
    boxs7 = new Box(700,135,30,40);
    boxs8 = new Box(730,135,30,40);
    //top
    boxs9 = new Box(700,95,30,40);
  
    //ball holder with slings
    ball = Bodies.circle(50,300,20);
    World.add(world,ball);
  
    slingShot = new SlingShot(this.ball,{x:75,y:400});
}

function draw() {
    background(56,44,44); 
 
    Engine.update(engine);
    //text(mouseX + ',' + mouseY, 10, 15);
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the boxs",100,30);
  
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("cyan");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();
    fill("skyblue");
    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs4.display();
    boxs5.display();
    fill("cyan");
    boxs6.display();
    boxs7.display();
    boxs8.display();
    fill("pink")
    boxs9.display();
    fill("gold");
    imageMode(CENTER)
    image(polygonImage ,ball.position.x,ball.position.y,40,40);
  
    slingShot.display();
  }
  function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }
  

