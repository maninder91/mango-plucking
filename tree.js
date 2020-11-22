class tree
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
	 
		
		this.image=loadImage("images/tree.png")

		this.body=Bodies.rectangle(x, y,50,100 , options);
		 World.add(world, this.body);
		 
	 

	}
	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,450,600);
			pop()
			
	}

} 

 