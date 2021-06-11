class paper
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.width = width;
		this.height =height;
		
		
		this.image=loadImage("paper.png")
		this.paperBody=Bodies.rectangle(this.x, this.y, width,height,options);
		
		World.add(world, this.paperBody);

	}
	display()
	{
			var posPaper=this.posPaperBody.position;
			push()
			translate(posPaper.x, posPaper.y);
			rectMode(CENTER);
			fill(255)
			rect(0,0,this.width,this,height);
			pop()
			
	}

}