class CannonBall{

constructor(x,y){

this.raio = 30;
var ball_options={
    isStatic:true
}


this.body= Bodies.circle(x,y,this.raio, ball_options);

this.image= loadImage("assets/cannonball.png")
World.add(world,this.body);

}
display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.raio, this.raio);
    pop();
}
// comando de atirar a bola
shoot(){

    var newAngle = cannon.angle - 28;
    // convertendo o angulo aqui
    newAngle = newAngle*(3.14/ 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);

     Body.setStatic(this.body, false);
    Body.setVelocity(this.body,{
        x: velocity.x*(180/3.14), 
        y: velocity.y*(180/3.14)
    });



}


}