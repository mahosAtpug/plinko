class Plinko{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0.2,
            'friction':0.04,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,10, options);
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
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, 10,10);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }