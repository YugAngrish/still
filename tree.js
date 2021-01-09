class Tree{
    constructor(x,y){
    var options = {
     //restitution:0,
     isStatic:true,
     friction:1,
     density:2   
    }
    this.object=Bodies.rectangle(x,y,50,50,options)
    this.width = 150
    this.height = 150
    this.image = loadImage("sprites/t.png")
    World.add(world,this.object)
    }   
    display(){
       push(); 
    imageMode(CENTER)
    image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
    pop();
    } 
    }