class Ground {
    constructor(x, y, w, h) {

        this.w = w;
        this.h = h;
        var ground_options = { isStatic: true };
        this.body = Bodies.rectangle(x, y, w, h, ground_options)
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(4);
        fill(0,204,204);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
   

}