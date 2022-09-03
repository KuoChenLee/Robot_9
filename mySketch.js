var colors="d496a7-d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(100);
	changeLightColor1()
	changeLightColor2()
	changeLightColor3()
	changeLightColor4()
}


function draw() {
	
	translate(width/2,height/2);
	rectMode(CENTER);
	
	background("#eaf4f4")
	
	fill("#ffd6ff")
	//head
	rect(0,-140,120,100,20);
	//eyes
	
	fill(255)
	rect(0,-145,100,25,10)
	fill("red")
	rect(0,-145,85,10,10)
	push()
	noStroke()
	fill(255)
	rect(-30+random(0,60),-145,15,5,10)
	pop()
	
// 	fill(0)
// 	rect(-30,-140,30,20)
// 	rect(30,-140,30,20)
// 	push()
// 	drawingContext.shadowColor=lightColor;
// 	drawingContext.shadowBlur=30;
// 	fill(lightColor)
	
// 	rect(-30,-140,25,15)
// 	rect(30,-140,25,15)
// 	pop()
// 	rect(0,-150,120,2)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-30,-180,40,8);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(30,-180,40,8);
	pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill("#c8b6ff")
	rect(-70,-140,15,40,5)
	rect(70,-140,15,40,5)
	//neck
	fill(colors[5])
	rect(0,-85,15,10)
	fill("#ffd6ff")
	rect(0,-75,15,10)
	//equipment
	fill(0)
	rect(30,70,30,15)
	rect(-30,70,30,15)
	fill("#7c98b3")
	rect(-30,-20,40,130,20)
	rect(30,-20,40,130,20)
	rect(-30,20,40,100)
	rect(30,20,40,100)
	
	//body
	fill("#bbd0ff")
	rect(0,-5,120,130,20)
	//shoulder
	// push()
// 		fill(colors[8])
// 		rotate(0.01+sin(frameCount/50)/10)
			// rotateY(millis() / 1000);
// 		rect(-85,-80,40,10)
// 		fill(colors[9])
// 		circle(-100,-80,25)
// 		fill(colors[10])
// 		circle(-100,-80,15)	
// 		fill(colors[11])
// 		rect(-100,-60,10,20)
// 	fill(colors[12])
// 	rect(-100,-15,20,80,5)
// 	fill(colors[13])
// 	rect(-100,30,10,10)
// 	fill(colors[14])
// 	rect(-90,30,10,10)
// 	rect(-110,30,10,10)
// 	fill(colors[15])
// 	rect(-90,40,10,20)
// 	rect(-110,40,10,20)
		
// 	pop()
// 	push()
// 	fill(colors[8])
// 	rect(85,-80,20,10)
// 	fill(colors[9])
// 	circle(100,-80,25)
// 	pop()
	fill("#6b9080")
	rect(-70,-50,20,10)
	rect(70,-50,20,10)
	fill(colors[9])
	circle(-90,-50,25)
	circle(90,-50,25)
	fill(colors[10])
	circle(-90,-50,10)
	circle(90,-50,10)
	// fill(colors[11])
	// rect(-90,-30,10,20)
	// rect(90,-30,10,20)
	// fill("#a4c3b2")
	fill(255)
	rect(-90,-30,20,10,5)
	rect(-90,-20,20,10,5)
	rect(-90,-10,20,10,5)
	rect(-90,0,20,10,5)
	rect(-90,10,20,10,5)
	rect(-90,20,20,10,5)
	rect(-90,30,20,10,5)
	rect(-90,40,20,10,5)
	rect(-90,50,20,10,5)
	
	rect(90,-30,20,10,5)
	rect(90,-20,20,10,5)
	rect(90,-10,20,10,5)
	rect(90,0,20,10,5)
	rect(90,10,20,10,5)
	rect(90,20,20,10,5)
	rect(90,30,20,10,5)
	rect(90,40,20,10,5)
	rect(90,50,20,10,5)
	// rect(-90,15,20,80,5)
	// rect(90,15,20,80,5)
	fill(colors[13])
	rect(-90,60,10,10)
	rect(90,60,10,10)
	fill(colors[14])
	rect(-80,70,10,10)
	rect(-100,70,10,10)
	fill("#6b9080")
	rect(-80,80,10,20)
	rect(-100,80,10,20)
	fill(colors[14])
	rect(80,70,10,10)
	rect(100,70,10,10)
	fill("#6b9080")
	rect(80,80,10,20)
	rect(100,80,10,20)
	//leg
	fill(colors[16])
	rect(-25,70,10,20)
	rect(25,70,10,20)
	fill(colors[17])
	rect(-25,150,30,140,5)
	rect(25,150,30,140,5)
	fill(colors[18])
	rect(-25,225,20,10)
	rect(25,225,20,10)
	fill(colors[19])
	rect(-25,245,40,30,5)
	rect(25,245,40,30,5)
	
	//mouth
	stroke(0)
	strokeWeight(5);
	line(-40,-110,40,-110)
	fill(255)
	triangle(-35,-110,-20,-125,-5,-110)
	
	
	
	
	// curve(-70,-150,-30,-120,-30,-90,-70,-80)
	// stroke(0)
	// strokeWeight(5);
	// curve(-70,-130,-20,-100,30,-100,60,-110)

	//heart
	
	
	
	
	fill(lightColor1)
	rect(-30,-40,15,15,2)
	fill(lightColor2)
	rect(-10,-40,15,15,2)
	fill(lightColor3)
	rect(10,-40,15,15,2)
	fill(lightColor4)
	rect(30,-40,15,15,2)
	fill(lightColor4)
	rect(-30,-20,15,15,2)
	fill(lightColor3)
	rect(-10,-20,15,15,2)
	fill(lightColor2)
	rect(10,-20,15,15,2)
	fill(lightColor1)
	rect(30,-20,15,15,2)
	//equipment
	fill("#343a40")
	arc(0, -190, 100, 75, PI, 0, CHORD);
	push()
	noStroke()
	fill("#e71d36")
	arc(0, -195, 50, 20, PI, 0, CHORD);
	pop()
	fill(255)
	circle(-20,-210,10)
	circle(20,-210,10)
	fill(0)
	circle(-20,-210,5)
	circle(20,-210,5)
	
	
	
	
	
	if(frameCount%10==0){
		changeLightColor1()
	}
	
	if(frameCount%12==0){
		changeLightColor2()
	}
	
	if(frameCount%14==0){
		changeLightColor3()
	}
	
	if(frameCount%16==0){
		changeLightColor4()
	}
	
	
}


// function mousePressed(){
	
// }
function changeLightColor1(){
	lightColor1=color(random([
		"#cdb4db",
		"#ffc8dd",
		"#ffafcc",
		"#bde0fe",
		"#a2d2ff",
		"#00b4d8",
		"#caf0f8"
	]))
}

function changeLightColor2(){
	lightColor2=color(random([
		"#cdb4db",
		"#ffc8dd",
		"#ffafcc",
		"#bde0fe",
		"#a2d2ff",
		"#00b4d8",
		"#caf0f8"
	]))
}

function changeLightColor3(){
	lightColor3=color(random([
		"#cdb4db",
		"#ffc8dd",
		"#ffafcc",
		"#bde0fe",
		"#a2d2ff",
		"#00b4d8",
		"#caf0f8"
	]))
}

function changeLightColor4(){
	lightColor4=color(random([
		"#cdb4db",
		"#ffc8dd",
		"#ffafcc",
		"#bde0fe",
		"#a2d2ff",
		"#00b4d8",
		"#caf0f8"
	]))
}


function handsUp(){
	
}








