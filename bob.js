class Bob{
    constructor(x,y,r){
      var option={
        density:0.1
      }
      this.body=Bodies.circle(x,y,r,option);
      this.radius=r;  
      World.add(world,this.body);
    }
    display(r){

      push();
      fill("white");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
      pop()
    }
}