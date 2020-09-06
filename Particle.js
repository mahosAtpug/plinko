class Particle{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        var pos = this.body.position;
        // rotate(angle);
        // translate(pos.x, pos.y);
        //imageMode(CENTER);
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius, this.radius);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }