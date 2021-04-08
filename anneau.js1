
// initialise une fois
let ensemble=[];
let mort=false;
let score=0;

			// on creer un nouvel element

function onButton(x,y){
	if ((x>=700) && (y<=780) && (x>=20) && (y<=45)){
		return(true);
		
	}
	else{
		return(false);
	}
	console.log("wtf");
}

function mousePressed(){

		let dernier=ensemble[ensemble.length-1];

		// si la souris est sur le dernier element 
		if (dernier.contains(mouseX,mouseY)==true){
			// on creer un nouvel element

			let b =new Bubble(random(50,width-50),random(50,height-50),width/12,width/12,255,0,1);
			ensemble.push(b);
			score++;
			scoreElem.html("Score = "+score);
			
		}
		else{

			if (onButton(mouseX,mouseY)==false){
			mort=true;
			dernier.color2="red";
			}

			
		}	
}

function restart(){
	couleurFond=0;
	score=0;
	mort=false;
	ensemble=[];
	text("",(1/3)*width,height*(1/3));
	scoreElem.html("");
	setup();

}



function setup(){

	createCanvas(800,800);
	let b=new Bubble(random(50,width-50),random(50,height-50),width/12,width/12,255,0,1)
	ensemble.push(b);

	scoreElem = createP('Score = 0');
  	scoreElem.position(width/2, 20);
  	scoreElem.style('color', '#00ff5d');
  	scoreElem.style('font-size', 30+'px');

  	button=createButton("Restart");
  	button.position(700,20);
  	button.style('color', '#00ff5d');
  	button.style('background-color',"black");
  	button.mousePressed(restart);
	
		// on fait rentrer les bulles dans le tableau
	
}

// // déssine en boucle
function draw(){
	background(0);
	for (var i = 0; i <=ensemble.length-1; i++) {
		// on fait rentrer les bulles dans le tableau
		ensemble[i].move();
		ensemble[i].show();
	}
}

