class Bubble {

	constructor(x,y,diametre,hauteur,color1,color2,v){
		this.x=x;
		this.y=y;
		this.diametre=diametre;
		this.hauteur=hauteur;
		this.color1=color1;
		this.color2=color2;
		this.v=v;
	}

	move(){

		if ((this.y>height-this.diametre/2) && (this.v>0)){
			this.v=-this.v;
		}

		if ((this.y<this.diametre/2)&& (this.v<0)){
			this.v=-this.v;
		}
		this.y=this.y+this.v;
	}


	contains(px,py){
		// calcul distance entre le point cliqué et le centre du cercle
		let d = dist(px,py,this.x,this.y);
		return d<this.diametre/2+8;
	}

	show(){

		
		fill(this.color2);
		stroke(this.color1);
		strokeWeight(4);
		ellipse(this.x,this.y,this.diametre,this.diametre);

		if (mort==true){
			noFill();
			strokeWeight(width/(width/2));
			textSize(width/15);
			stroke("#00ff5d");
			text("Game Over",(1/3)*width,height*(1/3));

		}
	}
}