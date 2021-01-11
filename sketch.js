const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var ball,polygon_img;
var slingShot;
var bg;
var backgroundImg;
var score=0;
function preload() {
  polygon_img=loadImage("polygon.png");

  getTime();
}


function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    ground1 = new Ground(790,400,200,20);
    ground2 = new Ground(1090,250,200,20);
    ground3 = new Ground(750,590,1500,20);

    
    

    //1st level in the first platform
    box1 = new BlueBox(730,370,30,40);
    box2 = new BlueBox(760,370,30,40);
    box3 = new BlueBox(790,370,30,40);
    box4 = new BlueBox(820,370,30,40);
    box5 = new BlueBox(850,370,30,40);
    //2nd level in the first platform
    box6 = new GreenBox(760,330,30,40);
    box7 = new GreenBox(790,330,30,40);
    box8 = new GreenBox(820,330,30,40);
    //3rd level in the first platform
    box9 = new RedBox(775,290,30,40);
    box10 = new RedBox(805,290,30,40);
    //4th level in the first platform
    box11 = new YellowBox(790,250,30,40);

    //1st level in the second platform
    box12 = new BlueBox(1040,220,30,40);
    box13 = new BlueBox(1070,220,30,40);
    box14 = new BlueBox(1100,220,30,40);
    box15 = new BlueBox(1130,220,30,40);
    // 2nd level in the second platform
    box16 = new RedBox(1055,180,30,40);
    box17 = new RedBox(1085,180,30,40);
    box18 = new RedBox(1115,180,30,40);
    //3rd level in second platform
    box19 = new YellowBox(1085,140,30,40);

   
    ball = Bodies.circle(50,200,70);
    World.add(world,ball);
      
    slingShot = new Slingshot(this.ball,{x:200,y:300});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    text("SCORE :" +score,750,40);
    textSize("20");
    fill("Orange");
      
    ground1.display();
    ground2.display();
    ground3.display();

   
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();

    box11.display();

     box12.display();
     box13.display();
     box14.display();
     box15.display();
     
     box16.display();
     box17.display();
     box18.display();

     box19.display();
     slingShot.display();

    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score(); 
    box7.Score();
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();
    box17.Score();
    box18.Score();
    box19.Score();


    
     imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

    drawSprites(); 
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }

 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(this.ball);
   }
 }


 async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
  var responseJSON = await response.json();
 console.log(responseJSON);
 console.log(responseJSON.datetime);

 var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  
  
 
  
  if(hour>=06 && hour<=19){
  

    bg = "day.jpg"
  }
  else{
  
   bg = "night.jpg"
  }

  backgroundImg = loadImage(bg);
}

 

  
