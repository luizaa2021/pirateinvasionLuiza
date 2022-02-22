const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground;

var solo
var backgroundImg;

var torre;
var torreImg;

var angle;   
var cannon;
var cannonBall;

var balls = [];

function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 torreImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle=15;


  var solo_options={
    isStatic:true }
 
solo=Bodies.rectangle(0,height-1,width*2,1, solo_options);
World.add(world, solo);

torre=Bodies.rectangle(150,350,160,310, solo_options);
World.add(world, torre);

// criar um objeto da classe cannon
cannon= new Cannon(180,110,130,100, angle);






}

function draw() {

  image(backgroundImg, 0,0,1200,600);
  Engine.update(engine);
  
  rect(solo.position.x, solo.position.y, width*2,1);
  
push();
  imageMode(CENTER);
  image(torreImg, torre.position.x, torre.position.y, 160,310);
pop();

cannon.display();

for (var i= 0; i<balls.length; i++){
  showCannonBalls(balls[i], i);
}

}


function keyReleased(){

  if(keyCode=== DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
//criar um objeto na classe cannonball
cannonBall= new CannonBall(cannon.x, cannon.y);
 
balls.push(cannonBall);
}
}

function showCannonBalls(ball,i){
if(ball){
  ball.display();
}


}
