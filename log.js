class Log {
  constructor(x, y, width, angle) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, 30, options);    
    this.width = width;
    this.height = 30;
    
    Matter.Body.setAngle(this.body,angle);

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(3);
    stroke("blue"); 
    rect(0, 0, this.width, this.height);

    pop();
  }
};
