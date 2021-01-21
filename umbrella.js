class Umbrella {
    constructor(x,y, r){
        var options ={
        isStatic: true
        }

    this.body = Bodies.circle(x,y,r, options);
    this.r = radius;
    World.add(world, this.body);
    }


    display(){
        animation(boy, 250, 450, 50,100);


    }
}