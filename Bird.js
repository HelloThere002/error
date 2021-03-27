class Bird{

  constructor(x,y){
 
      var instruct = {
          restitution:1.1
      }
      
  
      this.Bird=Bodies.circle(x,y,50,instruct);
      this.radius = 50;
      World.add(myworld,this.Bird);
  
  }
  
  display(){
  var angle = this.Bird.angle;

  var pos = this.Bird.position;
  pos.x = mouseX;
  pos.y = mouseY;
  push();
  translate(pos.x,pos.y);
      rotate(angle);
      fill("red");  
      circle(0,0,this.radius);
  pop();
  }
  
  }
  