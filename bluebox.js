class BlueBox 
{ 
  constructor(x,y,width,height){
    var options = {
        'restitiution':0.4,
        'friction':0.1,
       
        isStatic:false}
      this.visibility=300;
      this.body = Bodies.rectangle (x,y,width,height,options);
      this.width  = width;
      this.height = height;
      World.add(world , this.body)
  }

  display(){
     
      if(this.body.speed<5){
        var pos = this.body.position;
        var angle=this.body.angle;
        push()
        translate (pos.x ,pos.y)
        rotate (angle)
        rectMode(CENTER)
        strokeWeight(2);
        fill("blue")
        rect(0 , 0 , this.width, this.height)
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-1;
          tint(255,this.visibility);
         
          pop();
      
        }
      

}
Score(){
  if(this.visibility<0&&this.visibility>-105){
    score++;
  }
  }
}