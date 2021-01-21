class Drops {
    constructor(r)
    {
        var options ={
            friction: 0.1,
            restitution: 0.1,
        }
    

      this.body = Bodies.circle(r,options);
      this.r = radius;

      World.add(world, this.body);

    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();







    }
}