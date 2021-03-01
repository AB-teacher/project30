class Box {
    constructor(x,y,width,height) {
        var options = {restitution:0.8,friction:0.3,density:1.0, }
        this.body =Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.angle = 0;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rotate(angle);
        strokeWeight(4);
        
        
        rect(0,0,this.width,this.height);
        pop();
    }
}
