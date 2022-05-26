class Snow{
    constructor(x,y,radius){
        var options={
            restitution:2.0,
            friction:0.0
        }
        this.visibility=225;
        this.body=Bodies.circle (x,y,20,options);
        World.add (world,this.body);
        this.radius=20;
    }
    display(){
        
        
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill ("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius)
        pop()
        
    }
}   
  