class ground
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		 
		 
		this.body=Bodies.rectangle(x, y,1300, 40 , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
		 
			fill("green")
			rect(0,0,1300,40);
			pop()
			
	}

}