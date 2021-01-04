class Bob
{
     constructor(x,y)
     {
        var options = 
        {
            'isStatic': true,
            'restitution': 1.5,
            'friction':0,
            'density':5.0
        }
          this.body = Bodies.circle(x,y,50,options);
          World.add(world,this.body)
     }
     display()
     {
        push();
        ellipseMode(RADIUS);
        fill(255,0,254);
        ellipse(this.body.position.x, this.body.position.y,50,50);
        pop();
     }
}