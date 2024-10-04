let potato;//the picture of the instrument
let sounds = [];//the array of sounds
let soundSwitch=[];//the sound boolean for on/off 
let x = [261,221,244,291,237,287,325,279];//x location of eyes
let y = [178.5,230.5,248.5,262.5,296.5,312.5,337.5,375.5]; //ylocation of eyes
function preload(){
	potato = loadImage('potato.png')
	sounds[0] = loadSound('c.m4a')
	sounds[1] = loadSound('d.m4a')
	sounds[2] = loadSound('ege.m4a')
	sounds[3] = loadSound('f.m4a')
	sounds[4] = loadSound('g.m4a')
	sounds[5] = loadSound('a.m4a')
	sounds[6] = loadSound('b.m4a')
	sounds[7] = loadSound('c2.m4a')
}
function setup() {
	createCanvas(500,500);//fixed canvas size - easier if using an image
	for(let i=0;i<8;i++){
		soundSwitch[i]=false;//start with everything off
	}
}
function draw() {
	background(255);
	translate(width/2,height/2);//not necessary, but some stuff would change if this isn't here
	image(potato,-100,-100,200,300);
	playPotato()
}
function mousePressed(){
	for(let i=0;i<8;i++){
		if(mouseX>x[i]-10 && mouseX<x[i]+10 && mouseY>y[i]-10 && mouseY<y[i]+10){
			soundSwitch[i]=!soundSwitch[i];//switch on/off if mouse clicked on eye
		}
	}
}

function playPotato(){
	for(let i=0;i<8;i++){
		if(soundSwitch[i]){
			fill(255);//white eyes
			stroke(255);
			circle(x[i]-width/2,y[i]-height/2,4);//draw circle on eye if on
			 if (!sounds[i].isPlaying()){//don't play if already playing
					sounds[i].play();//play sound
			 }
		}
	}
}



