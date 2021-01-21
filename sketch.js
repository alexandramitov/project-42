const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var boy;
var umbrella1;
var bolt1, bolt2, bolt3, bolt4;


var maxDrops = 100;


function preload(){
    boy = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");

    bolt1.loadImage("1.png");
    bolt2.loadImage("2.png");
    bolt3.loadImage("3.png");
    bolt4.loadImage("4.png");
}

function setup(){
   createCanvas(500,900);

   umbrella1 = new Umbrella(100,350,30);

}

function draw(){

    for(i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0, 400)));
    }


    if(frameCount % 10 === 0){
        var thunderbolt = createSprite(200,450, 60, 60);

        var rand = Math.round(random(1,6));
        switch(rand) {
            case 1: thunderbolt.addImage(bolt1);
                    break;
            case 2: thunderbolt.addImage(bolt2);
                    break;
            case 3: thunderbolt.addImage(bolt3);
                    break;
            case 4: thunderbolt.addImage(bolt4);
                    break;
            default: break;
        }
    }




    umbrella1.display();


    
}   

