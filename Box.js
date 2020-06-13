class Box{
    constructor (x,y,widht,height,){
    var options = {
       'restitution': 0.8,
       'friction' : 0.3,
       'density' : 1.0

    }
    this.body = Bodies.rectangle(x,y,widht,height,options);
    this.widht = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.widht,this.height);
        pop();
    }
    }