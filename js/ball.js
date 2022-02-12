class Ball {
construction(x,y,img){
    var options={
        restitution:0.8,
        friction:0.5,
        density:0.9
    }
    this.x=x;
    this.y=y;
    this.r=10;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    this.image=img;
    World.add(world,this.body)
}
display(){
    var angle=this.body.angle;
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    imageMode(CENTER)
     
    image(this.image,0,0,this.r,this.r)

}
}