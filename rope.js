class Rope{
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      var options ={
          bodyA:  body1,
          bodyB:  body2,
          pointB:{x:this.offsetX,y: this.offsetY},
          length:  300,
          stiffness:  0.2
      }
      this.body=Matter.Constraint.create(options);
      World.add(world,this.body);  
    }

    display(){
       push();
       var posa=this.body.bodyA.position;
       var posb=this.body.bodyB.position;
       var chi1=posb.x+this.offsetX;
       var chi2=posb.y+this.offsetY; 
       strokeWeight(6);
       line(posa.x,posa.y,chi1,chi2);
       pop()
      }
       
      }
